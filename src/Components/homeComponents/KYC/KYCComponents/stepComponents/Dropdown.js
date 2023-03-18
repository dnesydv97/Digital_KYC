// import React, { useState } from 'react';
// import { View, Button, SafeAreaView } from 'react-native';
// import  SearchableDropdown from 'react-native-searchable-dropdown';
// import step2Styles from "./step2Components/Step2.styles";

// var  items  = [
// 	{
// 		id: 1,
// 		name: 'Kathmandu'
// 	},
// 	{
// 		id: 2,
// 		name: 'Pokhara'
// 	},
// 	{
// 		id: 3,
// 		name: 'Biratnagar'
// 	},
// 	{
// 		id: 4,
// 		name: 'Illam'
// 	},
// 	{
// 		id: 5,
// 		name: 'Jhapa'
// 	},
// 	{
// 		id: 6,
// 		name: 'Dhilikhel'
// 	},
// 	{
// 		id: 7,
// 		name: 'Lalitpur'
// 	},
// 	{
// 		id: 8,
// 		name: 'Bhaktapur'
// 	},
// ];
// const PlaceDropdown = (props) => {
//   const [selectedData, setSelectedData] = useState([
//       {id: 1, name: 'Kathmandu'}
//   ])
//   return(
//     <View>
//       <SearchableDropdown
// 			onTextChange={(text) =>  console.log(text)}
//             onItemSelect={(item) =>  {
//                 const items = selectedData
//                 items.push(item)
//                 setSelectedData(items)
//             }}
//             items = {items}
// 			containerStyle={step2Styles.dropdown1}
// 			textInputStyle={{
// 				padding: 8,
// 				borderWidth: 0,
// 				borderColor: '#dae1e7',
//                 borderRadius: 5,
//                 height: 40
// 			}}
// 			itemStyle={{
// 				padding: 10,
// 			    marginTop: 2,
// 				backgroundColor: '#f2f6fa',
// 				borderColor: 'black',
// 				borderBottomWidth: 1,
// 				borderRadius:5
// 			}}
// 			itemTextStyle={{
// 			color: '#222'
// 			}}
// 			itemsContainerStyle={{
// 				maxHeight: 140
// 			}}
//             placeholder="Search Address"
// 			resetValue={false}
// 			underlineColorAndroid='transparent' 
//             listProps = {{
//                 nestedScrollEnabled: true,
//             }}
//             />
//     </View>
      
//       )
		
// 	}


// export default PlaceDropdown
// // import * as React from 'react';
// // import { View } from 'react-native';
// // import { Button, Menu, Divider, Provider } from 'react-native-paper';


// //   var React = require('react-native');
// //   var {
// //     Component,
// //     AppRegistry,
// //     Text,
// //     View,
// //   } = React;
  
// //   const DropDown = require('react-native-dropdown');
// //   const {
// //     Select,
// //     Option,
// //     OptionList,
// //     updatePosition
// //   } = DropDown;
  
// //   class MyComponent extends Component {
// //     constructor(props) {
// //       super(props);
  
// //       this.state = {
// //         canada: ''
// //       };
// //     }
  
// //     componentDidMount() {
// //       updatePosition(this.refs['SELECT1']);
// //       updatePosition(this.refs['OPTIONLIST']);
// //     }
  
// //     _getOptionList() {
// //       return this.refs['OPTIONLIST'];
// //     }
  
    
// //     _canada(province) {
  
// //     this.setState({
// //         ...this.state,
// //         canada: province
// //       });
// //     }
  
// //     render() {
// //       return (
// //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// //             <Select
// //               width={250}
// //               ref="SELECT1"
// //               optionListRef={this._getOptionList.bind(this)}
// //               defaultValue="Select a Province in Canada ..."
// //               onSelect={this._canada.bind(this)}>
// //               <Option>Alberta</Option>
// //               <Option>British Columbia</Option>
// //               <Option>Manitoba</Option>
// //               <Option>New Brunswick</Option>
// //               <Option>Newfoundland and Labrador</Option>
// //               <Option>Northwest Territories</Option>
// //               <Option>Nova Scotia</Option>
// //               <Option>Nunavut</Option>
// //               <Option>Ontario</Option>
// //               <Option>Prince Edward Island</Option>
// //               <Option>Quebec</Option>
// //               <Option>Saskatchewan</Option>
// //               <Option>Yukon</Option>
// //             </Select>
  
// //             <Text>Selected province of Canada: {this.state.canada}</Text>
            
// //             <OptionList ref="OPTIONLIST"/>
// //         </View>
// //       );
// //     }
// //   }
  

// // export default MyComponent;