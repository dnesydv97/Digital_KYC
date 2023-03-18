import axios from 'axios';

import Token from './token';

function getDropdownOptions(column) {

  const token = Token.token;

    if (!token) {
      console.log('Error while submitting data. No TOKEN');
      Alert.alert('NO TOKEN')

      return null;
    }

  return axios({ 
    method: 'post',
  url: 'http://onlineaccountopening.westus.cloudapp.azure.com:8172/api/service/getdropdownlist?ColumnNames=' + column,
  headers: { 
    'Authorization': token,
    'Cookie': '.AspNet.ApplicationCookie=l6V_yMdpxh0Ngdee1LYi8yYm5zJZ-WTOIJkO9H5cz7IWNFC05Gg6zmKKzxl0LJcnQ0Il1LJVBiv5LOmw2qDV5Ae5TevRgmzL6kcrJOUk1T-ebkejAhtbUSV9rsZn5khtKFx9jWmswIo_pkQNI5lKt2gtk2OqdQfb6gtEXXJ7KEVqe3V8rhtvXURVWgDYByCtLSQA8AhSed2Vn7gIdafj2q4Fh9tlOGw3zkdRI7c8abv8cG0SeKyt5CBSu7mJs3fnRY0RbBUrSQILTEpyUtlfo1r5ns3VBjwWSUpjx_rr8wsiMajwVYuNlzuyWBwoHtoPvGQb-2cTorcetr-X0a6Zdv2EIDCbiospcTmR2xCD0jYd3VmXVkAZJnimi2WuDgNkA8b_fWjpygOrdRmw3IIxSTfXCYf-yMRZbWhua2eGnt1eWJ1awgmXMAr3kmU-uBmS79R4ZhzIjRDfIkdRFGZHm0pvdZoAjgzM1_ErOsLAvY8uvPiI8f2GEBAc14cQgsN2uLEcNo6I0UJW0qADgnM-2XE0oi-eksZB98MqYJFFFQ8rING3fnZz911lH6V3Rpkcq0JDrunpskggY4r7NPP1Bg'
  }
    
  })
}

export default getDropdownOptions;