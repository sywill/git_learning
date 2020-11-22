const primaryColorInput = document.querySelector("#primaryColor");
const secondaryColorInput = document.querySelector("#secondaryColor");
const body = document.querySelector("body");
const colorDescription = document.querySelector("h3");
const colors = { primaryColor: "#FF0000", secondaryColor: "#FFFF00" };
const setColor = e => {
   colors[e.target.id] = e.target.value;
   colorText = `linear-gradient(to right, ${colors.primaryColor}, ${colors.secondaryColor})`;
   updateGradient();
   updateText();
};
const updateGradient = () => {
   body.style.background = colorText;
};
const updateText = () => (colorDescription.textContent = colorText);

let colorText = `linear-gradient(to right, ${colors.primaryColor}, ${colors.secondaryColor})`;

primaryColorInput.value = colors.primaryColor;
secondaryColorInput.value = colors.secondaryColor;

primaryColorInput.addEventListener("input", setColor);
secondaryColorInput.addEventListener("input", setColor);

updateGradient();
updateText();
