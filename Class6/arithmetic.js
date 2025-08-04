document.getElementById("add_btn").onclick = function(){
  document.getElementById("action_btn").value = "add";
}

function validation(e) {
  e.preventDefault();

  let action = document.getElementById("action_btn").value;
  let firstNum = document.getElementById("first_num").value;
  let secondNum = document.getElementById("second_num").value;
  //blank validation
  if (firstNum === "" || secondNum === "") {
    document.getElementById("result_container").innerHTML = "Data is missing!";
    return false;
  } else {
    // Only ASCII character of numbers allowed
    
  }
  performAction(parseInt(firstNum), parseInt(secondNum), action);
}

function performAction(firstNum, secondNum, action) {
  if (action === "add") {
    document.getElementById("result_container").innerHTML =
      firstNum + secondNum;
  } else if (action === "sub") {
    document.getElementById("result_container").innerHTML =
      firstNum - secondNum;
  } else if (action === "multiply") {
    document.getElementById("result_container").innerHTML =
      firstNum * secondNum;
  } else {
    document.getElementById("result_container").innerHTML =
      "Error! Something wrong!!!";
  }
}
function abc() {
  return 2 + 3;
}
