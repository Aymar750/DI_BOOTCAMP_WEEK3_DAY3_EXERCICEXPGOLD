const p = document.createElement("p");
p.innerHTML = "This is a paragraph.";

// Make the paragraph draggable
p.setAttribute("draggable", true);

// Add event listeners for the drag and drop events
p.addEventListener("mousedown", startDrag);
p.addEventListener("mousemove", drag);
p.addEventListener("mouseup", endDrag);

// Variables for the drag and drop functionality
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

// Function to start dragging the paragraph
function startDrag(e) {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;

    if (e.target === p) {
        isDragging = true;
    }
}


// Function to drag the paragraph
function drag(e) {
    if (isDragging) {
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
    
        xOffset = currentX;
        yOffset = currentY;
    
        // Change the font size of the paragraph according to the screen coordinates
        p.style.fontSize = (e.clientX / window.innerWidth * 1000) + "px";
    
        setTranslate(currentX, currentY, p);
    }
  
} 

// Function to end dragging the paragraph
function endDrag(e) {
  initialX = currentX;
  initialY = currentY;

  isDragging = false;
}

// Function to set the translate transformation on the paragraph
function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

document.body.appendChild(p);
