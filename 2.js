let str = "COMPUTERPROGRAMMING";
let findTxt = "R";
function solution(str, findTxt) {
  /* 1안
  let strArr = [...str];
  const answer = strArr.filter((txt) => {
    return txt === findTxt;
  });
  return answer.length;
  */
  /* 2안
  let strArr = [...str];
  let count = 0;
  strArr.map((ele, i) => {
    ele === findTxt && count++;
  });
  return count;
  */
  const answer = str.split(findTxt);
  return answer.length - 1;
}

console.log(solution(str, findTxt));
