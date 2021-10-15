let string = "BANANA";
function solution(str) {
  // console.log(str.replaceAll("A", "#"));
  // ES2021에 추가 된 V8 브라우져만 적용.. 그전엔 안됨..
  //return str.replaceAll("A", "#");

  //2안 정규표현식으로 전체를 대체함.
  //return str.replace(/A/g, "#");
  let strArr = [...str];

  let answer = strArr.map((el, index) => {
    if (el === "A") {
      return (strArr[index] = "#");
    }
    return strArr[index];
  });

  return answer.join("");
}

console.log(solution(string));
