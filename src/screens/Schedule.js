// import React from 'react'
// import { View, Text, ScrollView } from 'react-native'
// import SimilarAccounts from "../Components/SimilarAccounts";

// const Schedule = () => {
//     return (
//         <ScrollView>
//             <Text>Date Picker here</Text>
//             <Text style = {{marginLeft: 20}}>Similar Accounts</Text>
//             <SimilarAccounts />
//             <SimilarAccounts />
//             <SimilarAccounts />
//             <SimilarAccounts />
//             <SimilarAccounts />
//             <SimilarAccounts />
//             <SimilarAccounts />
//             <SimilarAccounts />

//         </ScrollView>
//     )
// }

// export default Schedule

import React from 'react';
import {View, Text, TextInput, Alert, StyleSheet} from 'react-native';
import styles from '../Components/homeComponents/KYC/KYCSteps.styles';

import step2Styles from '../Components/homeComponents/KYC/KYCComponents/stepComponents/step2Components/Step2.styles';

import Token from './../utils/token';
import CustomerRegistrationInfo from './../utils/customerRegistrationInfo';
import axios from 'axios';

class Schedule extends React.Component {
  constructor() {
    super();
    this.state = {
      fetching: true,
      list: [],
      error: null,
    };
  }

  componentDidMount() {
    console.log('Schedule comp did mount');

    const token = Token.token;
    if (!token) {
      Alert.alert('No Token');
      this.setState({
        fetching: false,
        list: [],
        error: 'No Token',
      });
      return;
    }

    const id = CustomerRegistrationInfo.cusRegid;
    // const id = 'CFCF09A9-E1DD-4BB1-99D7-039AD04430FC';
    if (!id) {
      this.setState({
        fetching: false,
        list: [],
        error: 'Please register first',
      });
      return;
    }

    const config = {
      method: 'get',
      url:
        'http://onlineaccountopening.westus.cloudapp.azure.com:8172/api/bookingsetup/GetAppointmentProfileById?CustomerRegistrationId=' +
        id,
      headers: {
        Authorization: token,
      },
    };

    axios(config)
      .then((response) => {
        const {data} = response;

        console.log('Booking history:', data);

        const list = data.BookingList.map((item) => ({
          id: item.Id,
          name: item.Name,
          status: item.BookingStatus,
          date: item.BookingDate,
          startTime: item.BookingStartTime,
          endTime: item.BookingEndTime,
        }));

        console.log(list);

        this.setState({
          fetching: false,
          list: list,
          error: null,
        });
      })
      .catch((error) => {
        console.dir(error);
        this.setState({
          fetching: false,
          list: [],
          error: 'Couldnot fetch data',
        });
      });
  }

  render() {
    return (
      <View
        style={{
          marginBottom: 50,
          marginTop: 2,
          marginLeft: 5,
          marginRight: 10,
        }}>
        <View style={step2Styles.textContainer}>
          <Text style={{color: '#ffffff', fontSize: 18, fontWeight: 'bold'}}>
            Booking History
          </Text>
        </View>

        {this.state.fetching ? (
          <View>
            <Text style={msgStyles.text}>Fetching</Text>
          </View>
        ) : this.state.error ? (
          <View>
            <Text style={[msgStyles.text, msgStyles.error]}>
              {this.state.error}
            </Text>
          </View>
        ) : this.state.list.length === 0 ? (
          <View>
            <Text style={msgStyles.text}>No data</Text>
          </View>
        ) : (
          <View style={step2Styles.detailsContainer1}>
            <View style={{flexDirection: 'column'}}>
              <Text style={{marginLeft: 5, color: '#FF6347'}}>status</Text>
              {this.state.list.map((item) => {
                if (item.status) {
                  return (
                    <View
                      key={item.id}
                      style={{
                        backgroundColor: 'green',
                        width: 65,
                        height: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        // borderBottomLeftRadius: 5,
                        // borderBottomRightRadius: 5,
                        borderRadius: 50,
                        marginTop: 10,
                        flex: 1,
                      }}>
                      <Text style={{color: 'white'}}>Active</Text>
                    </View>
                  );
                } else {
                  return (
                    <View
                      key={item.id}
                      style={{
                        backgroundColor: 'red',
                        width: 65,
                        height: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        // borderBottomLeftRadius: 5,
                        // borderBottomRightRadius: 5,
                        borderRadius: 50,
                        marginTop: 10,
                        flex: 1,
                      }}>
                      <Text style={{color: 'white'}}>Inactive</Text>
                    </View>
                  );
                }
              })}
            </View>

            <View style={{flexDirection: 'column'}}>
              <Text style={{marginLeft: 15, color: '#FF6347'}}>Name</Text>
              {this.state.list.map((item) => (
                <Text
                  key={item.id}
                  style={{marginLeft: 15, color: 'black', marginTop: 10}}>
                  Dinesh
                </Text>
              ))}
            </View>

            <View style={{flexDirection: 'column'}}>
              <Text style={{marginLeft: 15, color: '#FF6347'}}>
                Booked Date
              </Text>
              {this.state.list.map((item) => {
                const date = new Date(item.date);
                return (
                  <Text
                    key={item.id}
                    style={{marginLeft: 15, color: 'black', marginTop: 10}}>
                    {`${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`}
                  </Text>
                );
              })}
            </View>

            <View style={{flexDirection: 'column'}}>
              <Text style={{marginLeft: 20, color: '#FF6347'}}>
                Booked Time
              </Text>
              {this.state.list.map((item) => {
                const start = new Date(item.startTime),
                  end = new Date(item.endTime);

                const timeString = `${
                  start.getHours() > 12
                    ? start.getHours() - 12
                    : start.getHours() < 10
                    ? '0' + start.getHours()
                    : start.getHours()
                }:${
                  start.getMinutes() < 10
                    ? '0' + start.getMinutes()
                    : start.getMinutes()
                } ${start.getHours() >= 12 ? 'PM' : 'AM'} - ${
                  end.getHours() > 12
                    ? end.getHours() - 12
                    : end.getHours() < 10
                    ? '0' + end.getHours()
                    : end.getHours()
                }:${
                  end.getMinutes() < 10
                    ? '0' + end.getMinutes()
                    : end.getMinutes()
                } ${end.getHours() >= 12 ? 'PM' : 'AM'}`;

                return (
                  <Text
                    key={item.id}
                    style={{marginLeft: 20, color: 'black', marginTop: 10}}>
                    {timeString}
                  </Text>
                );
              })}
            </View>
          </View>
        )}
      </View>
    );
  }
}

const msgStyles = StyleSheet.create({
  text: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 20,
  },
  error: {
    color: 'red',
  },
});

export default Schedule;
