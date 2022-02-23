const calcSqrt = (num: number) => {
  let start = 0;
  let end = num;
  let mid = 0;
  while (start <= end) {
    mid = ((start + end) / 2) | 0;
    if (mid * mid === num) {
      return mid;
    } else if (mid * mid < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start;
};

const meanCalc = (arr: number[]) => {
  const sum = arr.reduce((a, b) => a + b, 0);
  return sum / arr.length;
};

const sortArr = (arr: number[]) => {
  return arr.sort((a, b) => a - b);
};

const medianCalc = (arr: number[]) => {
  const sortedArr = sortArr(arr);
  const mid = (sortedArr.length / 2) | 0;
  return sortedArr.length % 2 !== 0
    ? sortedArr[mid]
    : (sortedArr[mid - 1] + sortedArr[mid]) / 2;
};

const modeCalc = (arr: number[]) => {
  const modeObj = arr.reduce((acc: any, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const maxFrequency = Object.values(modeObj).reduce((a, b) =>
    (a as any) > (b as any) ? a : b
  );
  return Object.keys(modeObj).filter((a) => modeObj[a] === maxFrequency);
};

const stdDevCalc = (arr: number[]) => {
  const mean = meanCalc(arr);
  const sum = arr.reduce((a, b) => a + (b - mean) * (b - mean), 0);
  return calcSqrt(sum / arr.length);
};

export { meanCalc, medianCalc, modeCalc, stdDevCalc, calcSqrt, sortArr };
