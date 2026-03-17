function send() {
  const number = document.getElementById("number").value;
  const string = document.getElementById("string").value;
  console.log(number, string);
  return { number, string };
}
export default send;