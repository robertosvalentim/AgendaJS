import dataJSON from '../data/data.json';
import User from '../domain_model/User'


function getAllData() {
  let dataArray = [];

  for (let i = 0; i < dataJSON.length; i++) {

    let user = new User(
      dataJSON[i].name,
      dataJSON[i].phone,
      dataJSON[i].address,
      dataJSON[i].city,
      dataJSON[i].state,
      dataJSON[i].email,
      dataJSON[i].id);
    dataArray.push(user);

  }
  return dataArray;
}

export default getAllData;


/*
const fs = require('fs');

export default fs.readFile(DataJSON, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  return getAllData = JSON.parse(JSON.stringify(data));
});

*/