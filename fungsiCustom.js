// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
// const bacaData = null;

const bacaData = (fnCallback) => {

  fs.readFile(file1, 'utf8', (err, data) => {
      let data_file1  = JSON.parse(data);
      let data1       = data_file1.message

      fs.readFile(file2, 'utf8', (err, data) => {
          let data_file2  = JSON.parse(data);
          let data2       = data_file2[0].message

          fs.readFile(file3, 'utf8', (err, data) => {

              let data_file3  = JSON.parse(data);
              let data3       = data_file3[0].data.message

              let post_data   = [ data1.split(" ")[1], data2.split(" ")[1], data3.split(" ")[1] ];

              fnCallback(err, post_data);

            });

        });

    });

};



// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
