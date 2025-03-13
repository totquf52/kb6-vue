const fs = require('fs');
const rs = fs.createReadStream('./sec05/read.txt', 'utf8');
const ws = fs.createWriteStream('./sec05/write.txt');

// pipe를 이용하면 여러개의 스트림을 이어서 처리 가능
rs.pipe(ws);
