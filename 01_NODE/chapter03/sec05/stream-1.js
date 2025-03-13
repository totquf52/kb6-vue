const fs = require('fs');

// createReadStream : ReadStream 생성
const rs = fs.createReadStream('./sec05/example.txt');

// data : 데이터가 읽힐 때마다 발생하는 이벤트
rs.on('data', (chunk) => {
  console.log('New chunk received');
  console.log('Chunk length: ', chunk.length);
  console.log('Chunk content: ', chunk);
})
  .on('end', () => {
    // end : 데이터 읽기가 완료됐을 때 발생하는 이벤트
    console.log('Finished reading data');
  })
  .on('error', (err) => {
    console.error(`Error reading the file: ${err.message}`);
  });
