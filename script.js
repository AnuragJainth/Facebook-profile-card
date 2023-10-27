var relation = document.querySelector("h5");
var b = document.querySelector("#btn");
var flag = 0;

b.addEventListener("click", function () {
  if (flag == 0) {
    relation.innerHTML = "Friends";
    relation.style.color = "green";
    b.innerHTML = "Remove Friend";
    flag = 1;
  } else {
    relation.innerHTML = "Unknown";
    relation.style.color = "Red";
    b.innerHTML = "Add Friend";
    flag = 0;
  }
});
