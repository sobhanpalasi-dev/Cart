function switchBox(activeBoxId) {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    if (box.id === activeBoxId) {
      box.classList.add("active");
      box.classList.remove("collapsed");
      box.querySelector("input[type='radio']").checked = true;
    } else {
      box.classList.remove("active");
      box.classList.add("collapsed");
    }
  });
  updateTotal();
}

function updateTotal() {
  const selectdOption = document.querySelector('input[name="bundle"]:checked');
  const total = selectdOption ? parseFloat(selectdOption.value) : 0;
  document.getElementById("totalPrice").textContent = `$${total.toFixed(
    2
  )} USD`;
}

document.addEventListener("DOMContentLoaded", () => {
  updateTotal();
});
