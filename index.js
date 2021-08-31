function getSecondsToTomorrow() {
  let now = new Date();

  // 현재 년, 월, 일을 나타내는 객체를 생성
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  let diff = tomorrow - now; // 차이(ms)
  return Math.round(diff / 1000); // 초로 변환
}

console.log(getSecondsToTomorrow());
