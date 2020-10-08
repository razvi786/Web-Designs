const currency = document.getElementById("currency");

currency.addEventListener("keyup", (e) => {
  let input = e.target.value;
  input = input.replace(/,/g, "");
  console.log("input: ", input);
  inputFloat = input != "" ? parseFloat(input) : 0;
  console.log("inputFloat: ", inputFloat);
  currency.value = numberWithCommas(inputFloat);
  console.log("finalValue: ", numberWithCommas(inputFloat));
});

function numberWithCommas(x) {
  if (x == 0) return "";
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
