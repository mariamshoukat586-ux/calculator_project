let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {

    let value = button.innerText;

    if(value === "AC"){
      currentInput = "";
      display.value = "";
    }

    else if(value === "DEL"){
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    }

    else if(value === "="){
      try{
        currentInput = eval(
          currentInput
          .replace("×", "*")
          .replace("÷", "/")
        ).toString();

        display.value = currentInput;
      }
      catch{
        display.value = "Error";
      }
    }

    else{
      currentInput += value;
      display.value = currentInput;
    }

  });
});
