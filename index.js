var button = document.getElementById("enter");
var input = document.getElementById("input-text");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

var inputLength = () => {
  return input.value.length;
};

var listLength = () => {
  return item.length;
};
function createElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  function crossout() {
    li.classList.toggle("done");
  }

  li.addEventListener("click", crossout);

  var dBt = document.createElement("button");
  dBt.appendChild(document.createTextNode("X"));
  li.appendChild(dBt);
  dBt.addEventListener("click", deleteListItem);

  function deleteListItem() {
    li.classList.add("delete");
  }
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createElement();
  }
}

function addListAfterKeypress(e) {
  if (inputLength() > 0 && e.which === 13) {
    createElement();
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
