const fs = require('fs');

fs.readFile('./sec03/example.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  }
  //   writeFile : 비동기로 원하는 내용을 해당 경로에 적는다
  fs.writeFile('./sec03/text-2.txt', data, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('text-2.txt is saved!');
  });
});
