const container = document.getElementById("container");

for (let i = 0; i < 26; i++) {
  // Create a square element
  const square = document.createElement("div");
  square.classList.add("square");
  
  // Add a letter to the square
  const letter = String.fromCharCode(65 + i);
  square.textContent = letter;
  
  // Make the square draggable
  square.setAttribute("draggable", "true");
  
  // Add event listeners for drag and drop
  square.addEventListener("dragstart", handleDragStart);
  square.addEventListener("dragend", handleDragEnd);
  square.addEventListener("dragover", handleDragOver);
  square.addEventListener("dragenter", handleDragEnter);
  square.addEventListener("dragleave", handleDragLeave);
  square.addEventListener("drop", handleDrop);
  
  // Add the square to the container
  container.appendChild(square);
}

function handleDragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.textContent);
  e.target.classList.add("dragging");
}

function handleDragEnd(e) {
  e.target.classList.remove("dragging");
}

function handleDragOver(e) {
  e.preventDefault();
}

function handleDragEnter(e) {
  e.target.classList.add("over");
}

function handleDragLeave(e) {
  e.target.classList.remove("over");
}

function handleDrop(e) {
  e.preventDefault();
  e.target.classList.remove("over");
  const letter = e.dataTransfer.getData("text/plain");
  e.target.textContent = letter;
}

