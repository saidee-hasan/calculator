function DeleteMe() {
  document.getElementById("myResult").value = "";
}

function calculator(NewValue) {
  document.getElementById("myResult").value += NewValue;
}
function AnsWer() {
  const a = document.getElementById("myResult").value;
  const b = eval(a);
  document.getElementById("myResult").value = b;
}
