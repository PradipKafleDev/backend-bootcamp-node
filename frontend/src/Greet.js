function f1() {
  return "hello pradip";
}
function f3() {
  return "how are you";
}
function main(call1, call2) {
  console.log(call1() + " " + call2());
}
main(f1, f2);
