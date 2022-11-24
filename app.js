//element choose
const input = document.getElementById("input");
const button = document.getElementById("button");
const listAdd = document.querySelector(".listAdd");
const list = document.querySelector(".listener");
const checked = document.querySelector(".checked");

//button triger -- first function
var calculate = 0;
button.addEventListener("click", go);

//function for all
function go(e) {
  if (input.value != "") {
    e.preventDefault();
    //calculate
    calculate++;

    //toast **** !!bug = if there is no value inside input, it can give another warning

    ///toast
    if (input.value !== "") {
      button.addEventListener("click", function () {
        let element = document.getElementById("toastID");
        console.log(input.value);
        // Create toast instance
        let myToast = new bootstrap.Toast(element);

        button.addEventListener("click", function () {
          myToast.show();
        });
      });
    } else {
      button.addEventListener("click", function () {
        let empty = document.getElementById("toastEmpty");

        // Create toast instance
        let myToastEmpty = new bootstrap.Toast(empty);

        button.addEventListener("click", function () {
          myToastEmpty.show();
        });
      });
    }

    //localstorage
    let value = document.querySelector("#input").value;

    //
    localStorage.setItem("item", JSON.stringify(value));
    localStorage.getItem(value);

    // create Elements
    let liste = document.createElement("ul");
    let paragraf = document.createElement("li");
    let buttonGroup = document.createElement("div");
    let deleteButton = document.createElement("button");
    let finishButton = document.createElement("button");

    //add classLists
    list.classList.add("listener");
    liste.classList.add("list-group", "listAdd");

    paragraf.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center",
      "storage"
    );
    finishButton.classList.add("badge", "bg-dark", "rounded-pill", "margin");
    deleteButton.classList.add("badge", "bg-danger", "rounded-pill", "margin");

    //buttons InnerText
    finishButton.innerText = " Done";
    deleteButton.innerText = "Delete";

    paragraf.innerText = calculate + ") " + input.value;

    //appends
    list.append(liste);
    liste.append(paragraf);
    paragraf.append(buttonGroup);
    buttonGroup.append(deleteButton);
    buttonGroup.append(finishButton);

    //delete input after every writing
    input.value = "";

    //eventListeners
    deleteButton.addEventListener("click", function () {
      liste.removeChild(paragraf);
    });

    finishButton.addEventListener("click", function () {
      paragraf.classList.toggle("checked");
    });
  }
}
