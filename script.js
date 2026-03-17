const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const img = document.getElementById("mainImg");
const text = document.getElementById("questionText");

const texts = [
  "Are you sure? 😢", 
  "Think again… 🥺",
 // "My heart is breaking 💔",
  "Last chance 😭",
 // "Wait… that felt personal 😅",
 // "Are you playing hard to get? 😏",
 // "I saw that smile just now 😄",
 // "Love is knocking… open the door ❤️",
 // "My feelings are buffering… ⏳💔",
 // "Be honest… your heart says YES 😌",
  "Please Think again.. 😳",
 // "One YES can change everything ✨",
  "This NO button is getting tired 😜",
];

const images = [
  "image/No7.gif",
  "image/No9.gif",
 // "image/Nooooo.gif",
  "image/No12.gif",
  //"image/noo.gif",
 // "image/No11.gif",
  //"image/No8.gif",
 // "image/No13.gif",
 // "image/noo.gif",
 // "image/Nooooo.gif",
  "image/nooo.gif",
 // "image/No12.gif",
  "image/Nolast.gif"
];

let index = 0;
let promptsFinished = false;

// YES button → open yes.html
yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});

// NO button click → show text/images first
noBtn.addEventListener("click", () => {
  if (!promptsFinished) {
    text.innerText = texts[index];
    img.src = images[index];
    index++;

if (index === texts.length) {
  promptsFinished = true;

  // move NO button out of button row
  noBtn.style.position = "absolute";
  noBtn.style.top = "60%";
  noBtn.style.left = "50%";
}
  }
});

// Function to move NO button randomly
const moveNoBtn = () => {
  const padding = 20;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
};

// Move NO button on hover (desktop)
noBtn.addEventListener("mouseenter", () => {
  if (!promptsFinished) return;
  moveNoBtn();
});

// Move NO button on touch (mobile)
noBtn.addEventListener("touchstart", (e) => {
  if (!promptsFinished) return;

  e.preventDefault();   // stop default tap

  setTimeout(() => {
    moveNoBtn();        // move after slight delay
  }, 100);

}, { passive: false });
