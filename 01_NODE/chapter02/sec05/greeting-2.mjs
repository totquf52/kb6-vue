const hi = (name) => {
  console.log(`${name}님, 안녕하세요?`);
};

const goodbye = (name) => {
  console.log(`${name}님, 집에 좀 가세요`);
};

// 객체로 묶어서 기본 내보내기
export default { hi, goodbye };
