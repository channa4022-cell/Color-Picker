// Get elements
const colorPicker = document.getElementById("colorPicker");
const colorBox = document.getElementById("colorBox");
const colorCode = document.getElementById("colorCode");
const history = document.getElementById("history");

// Set default color
let currentColor = "#000000";
colorBox.style.background = currentColor;

// When user selects a color
colorPicker.addEventListener("input", function () {
  currentColor = colorPicker.value;

  // Update UI
  colorBox.style.background = currentColor;
  colorCode.textContent = currentColor;

  // Add to history
  addToHistory(currentColor);
});

// Copy HEX code
function copyColor() {
  navigator.clipboard.writeText(currentColor)
    .then(() => {
      alert("Copied: " + currentColor);
    })
    .catch(() => {
      alert("Failed to copy");
    });
}

// Add color to history
function addToHistory(color) {
  const colorDiv = document.createElement("div");
  colorDiv.classList.add("color-item");
  colorDiv.style.background = color;

  // Click to reuse color
  colorDiv.addEventListener("click", function () {
    currentColor = color;
    colorBox.style.background = color;
    colorCode.textContent = color;
  });

  history.appendChild(colorDiv);
}
