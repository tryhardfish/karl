const reasons = [
"Your smile lights up my day",
"You always know how to make me laugh",
"You always care about me",
"Your eyes",
"You always do your best",
"You listen",
"You always support me",
"You make me happy",
"You are understanding",
"You are loyal",
"You are patient",
"You make me feel special",
"You are beautiful",
"You are my best friend",
"You understand my emotions",
"You accept me for who I am",
"You are confident",
"You are reliable",
"You are thoughtful",
"You are down-to-earth",
"You are forgiving",
"You are genuine",
"You make me dream about you",
"You are not afraid to share your feelings",
"You are honest",
"You make me excited to see you",
"You are humble",
"You care about my family",
"You make sure I'm healthy",
"You motivate me",
"You are smart",
"You have a wonderful laugh",
"You give me strength",
"You are my rock, always there for me",
"You are my teammate",
"You are selfless",
"You are calm",
"You make me blush",
"You make me feel comfortable whenever I'm with you",
"You have a big heart",
"You are proud of me",
"You ask me to be careful when I drive",

    
  // Add more reasons here...
];

const reasonElement = document.getElementById("reason");
const nextButton = document.getElementById("nextButton");

let currentIndex = 0;

function showNextReason() {
  reasonElement.classList.remove("fadeIn"); // Remove the fadeIn class
  void reasonElement.offsetWidth; // Trigger reflow to restart the animation
  reasonElement.classList.add("fadeIn"); // Add the fadeIn class back
  reasonElement.textContent = reasons[currentIndex];
  currentIndex = (currentIndex + 1) % reasons.length; // Loop back to the beginning if we reach the end
}

nextButton.addEventListener("click", showNextReason);

// Show the first reason when the page loads
showNextReason();
