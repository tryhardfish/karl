const reasons = [
"Your smile lights up my day",
"You know how to make me laugh",
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
"You ask me about my blood sugar",
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
"You are strong",
"You are always in my heart",
  // Add more reasons here...
];

const reasonElement = document.getElementById("reason");
const imageContainer = document.getElementById("imageContainer"); // Reference to the image container
const nextButton = document.getElementById("nextButton");

let currentIndex = 0;

function showNextReason() {
  if (currentIndex < reasons.length) {
    reasonElement.classList.remove("fadeIn");
    void reasonElement.offsetWidth;
    reasonElement.classList.add("fadeIn");
    reasonElement.textContent = reasons[currentIndex];
    currentIndex++;
  } else if (currentIndex === reasons.length) {
    // Remove the button
    nextButton.remove();
    // Add images with transition effect
    for (let i = 1; i <= 3; i++) {
      const img = document.createElement("img");
      img.src = `image${i}.jpg`; // Image paths based on the names "image1.jpg", "image2.jpg", "image3.jpg"
      img.alt = `Image ${i}`;
      img.classList.add("reason-image");
      img.classList.add("hidden"); // Initially hide the images
      imageContainer.appendChild(img); // Append image to the container
      // Trigger reflow to apply transition effect
      void img.offsetWidth;
      // Show the image with transition effect
      img.classList.remove("hidden");
    }
    // Add a single text under the images
    const text = document.createElement("p");
    text.textContent = "I love you!"; // Replace with your text
    text.classList.add("reason-text");
    imageContainer.appendChild(text); // Append text to the container
  }
}

nextButton.addEventListener("click", showNextReason);

// Show the first reason when the page loads
showNextReason();
