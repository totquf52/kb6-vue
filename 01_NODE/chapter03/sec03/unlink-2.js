const fs = require('fs');

// 해당 경로에 파일이 없는지 체크
if (!fs.existsSync('./sec03/text-1.txt')) {
  console.log('file does not exist');
} else {
  fs.unlinkSync('./sec03/text-1.txt');
  console.log('file deleted');
}
