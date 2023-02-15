// Get Input Value in Float

function getElementValueById(id) {
  const element = document.getElementById(id);
  const elementValueString = element.value;
  const elementValue = parseFloat(elementValueString);
  return elementValue;
}

// Get Inner Text in Float

function getElementTextById(id) {
  const element = document.getElementById(id);
  const elementValueString = element.innerText;
  const elementValue = parseFloat(elementValueString);

  return elementValue;
}

// Set any elements Inner Text with ID

function setElementById(newValue, id) {
  const element = document.getElementById(id);
  element.innerText = newValue;
}
