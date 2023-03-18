// import React, {useState} from 'react';
// import {View, Text} from 'react-native';
// import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
// import colors from '../../../../../../styles/Colors'
// import moment from 'moment'

// const ScheduleCalendar = () => {
//     const [selected, setSelected] = useState('');
//     // const getDisabledDates = (startDate, endDate, daysToDisable) => {
//     //     const disabledDates = {};
//     //     const start = moment(startDate);
//     //     const end = moment(endDate);

//     //     for (let m = moment(start); m.diff(end, 'days') <= 0; m.add(1, 'days')) {
//     //       if (_.includes(daysToDisable, m.weekday())) {
//     //         disabledDates[m.format('YYYY-MM-DD')] = {disabled: true};
//     //       }
//     //     }
//     //     return disabledDates;
//     //   };

//   return (
//     <View style = {{marginTop: 30}}>
//       <Calendar
//         style={{

//           height: 350
//         }}
//         theme={{
//           backgroundColor: "#ffffff",
//           calendarBackground: "#ffffff",
//           textSectionTitleColor: "#b6c1cd",
//           selectedDayBackgroundColor: "#00adf5",
//           selectedDayTextColor: "#ffffff",
//           todayTextColor: "#001370",
//           dayTextColor: "#2d4150",
//           textDisabledColor: "#d9e1e8",
//           dotColor: "#00adf5",
//           selectedDotColor: "#ffffff",
//           arrowColor: '#ffffff',
//           monthTextColor: "#ffffff",
//           indicatorColor: "#001370",
//         //   textDayFontFamily: "monospace",
//         //   textMonthFontFamily: "monospace",
//         //   textDayHeaderFontFamily: "monospace",
//           textDayFontWeight: "300",
//           textMonthFontWeight: "bold",
//           textDayHeaderFontWeight: "300",
//           textDayFontSize: 16,
//           textMonthFontSize: 16,
//           textDayHeaderFontSize: 16
//         }}
//         minDate={"2019-05-01"}
//         // maxDate={"2021-05-01"}
//         onDayPress={day => {
//           console.log("selected day", day);
//         }}
//         markedDates={{
//           "2019-10-16": { selected: true, selectedColor: "red" },
//           "2019-10-17": { selected: true, selectedColor: "blue" },
//           "2019-10-18": { marked: true, dotColor: "red", activeOpacity: 5 }
//         }}
//         firstDay={0}
//         enableSwipeMonths={true}
//         // disableAllTouchEventsForDisabledDays={true}
//         disabledDaysIndexes={[6]}
//     // markedDates={{
//     // ...getDisabledDates('2021-03-01', '2012-03-30', [0, 6])
//     // }}

//       />

//     </View>
//   );
// };
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import step2Styles from '../step2Components/Step2.styles';
import colors from './../../../../../../styles/Colors';
import axios from 'axios';
import Token from './../../../../../../utils/token';

const timeList = [
  {hour: 10, time: '10:00 am'},
  {hour: 11, time: '11:00 am'},
  {hour: 12, time: '12:00 pm'},
  {hour: 13, time: '1:00 pm'},
  {hour: 14, time: '2:00 pm'},
  {hour: 15, time: '3:00 pm'},
  {hour: 16, time: '4:00 pm'},
  {hour: 17, time: '5:00 pm'},
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: timeList[0].hour,
      selectedStartDate: new Date(),
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  requestMeeting = () => {
    const {CustomerRegistrationId, CustomerName} = this.props.userDetail;

    if (!CustomerRegistrationId || !CustomerName) {
      Alert.alert('Please fill up the form properly first');
      return;
    }

    const token = Token.token;
    if (!token) {
      Alert.alert('NO Token');
      return;
    }

    const startTime = new Date(this.state.selectedStartDate).setHours(
      this.state.startTime,
    );
    const endTime = new Date(this.state.selectedStartDate).setHours(
      this.state.startTime + 1,
    );

    const data = {
      CustomerRegistrationId,
      Name: 'Meeting requested to open an account by ' + CustomerName + '.',
      BookingDate: new Date(this.state.selectedStartDate).toDateString(),
      BookingStartTime: new Date(startTime),
      BookingEndTime: new Date(endTime),
    };

    const config = {
      method: 'post',
      url:
        'http://onlineaccountopening.westus.cloudapp.azure.com:8172/api/bookingsetup/CreateBookingSetup',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        Alert.alert('Meeting request sent');
      })
      .catch(function (error) {
        console.dir(error);
        Alert.alert('Could not send meeting request');
      });
  };

  render() {
    return (
      <View style={{marginBottom: 20, marginTop: 5}}>
        <View style={step2Styles.textContainer1}>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            Date and Time selection
          </Text>
          <View style={styles.container}>
            <CalendarPicker
              onDateChange={this.onDateChange}
              selectedDayColor="#001370"
              selectedDayTextColor="#fff"
            />

            <View style={styles.timeContainer}>
              {timeList.map((time) => (
                <Pressable
                  key={time.hour}
                  onPress={() => this.setState({startTime: time.hour})}>
                  <Text
                    style={[
                      styles.time,
                      this.state.startTime === time.hour
                        ? styles.activeTime
                        : {},
                    ]}>
                    {time.time}
                  </Text>
                </Pressable>
              ))}
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={this.requestMeeting}>
              <Text>Request</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button1}
              >
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
         
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },
  date: {
    marginTop: 20,
    marginLeft: 15,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#dfa00a',
    borderRadius: 20,
    marginTop: 40,
    padding: 15,
    marginBottom: 20,
    marginLeft: 35,
    marginRight: 35,
    justifyContent: 'center',
  },

  timeContainer: {
    marginTop: 10,
    paddingTop: 10,

    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',

    borderTopWidth: 2,
    borderTopColor: '#dfa00a',
  },
  time: {
    width: 80,
    paddingVertical: 4,
    paddingHorizontal: 7,

    color: 'black',
    textAlign: 'center',

    marginVertical: 5,

    borderRadius: 15,
  },
  activeTime: {
    color: 'white',
    backgroundColor: colors.primary,
  },
  button1: {
    fontWeight: 'bold',
    marginBottom:15,
    alignItems: 'center',
   
   
   
    justifyContent: 'center',
   
  }
});
