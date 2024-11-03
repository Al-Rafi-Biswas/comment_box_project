// select button.............

let button = document.getElementById("button");

// function.........

button.addEventListener("click", function () {
  let input = document.getElementById("comment");
  let inputValue = input.value;

  if (inputValue !== "") {
    let comment = document.createElement("h3");
    document.getElementById("history").appendChild(comment);
    comment.innerText = inputValue;
    comment.style.color = "white";
    comment.style.margin = "10px";
  }
  input.value = "";
});
