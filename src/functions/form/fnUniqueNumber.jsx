export default function fnUniqueNumbers(arr) {
  return arr.filter((number, index, self) => {
    return self.indexOf(number) === index;
  });
}
