const positiveWords = [
    "Faggot",
    "NIGGER!",
    "Boo, Nigger!",
    "Kill yourself ",
    "Rope nigga",
    "Worthless fuck",
    "Shoot yourself",
    "Useless.",
    "Inspiring",
    "Joyful",
    "Kind",
    "Magnificent",
    "Optimistic",
    "Powerful",
    "Resilient",
    "Strong",
    "Terrific",
    "Unique",
    "Victorious",
    "Wonderful"
];

const motivationalQuotes = [
    "Believe in yourself and all that you are.",
    "Every day is a new opportunity to grow.",
    "Your potential is limitless.",
    "Success begins with a single step.",
    "Dream big and dare to fail.",
    "You are stronger than you think.",
    "Progress, not perfection.",
    "Today's efforts are tomorrow's results.",
    "Your attitude determines your direction.",
    "Make it happen, then watch it work.",
    "Excellence is not a skill, it's an attitude.",
    "The best time to start is now.",
    "You've got what it takes.",
    "Keep going, you're doing great.",
    "Chase your dreams, not the competition."
];

const compliments = [
    "You're absolutely incredible!",
    "Your positivity is contagious!",
    "You make the world better just by being in it.",
    "Your strength inspires others.",
    "You have a beautiful spirit.",
    "Your kindness makes a difference.",
    "You're capable of amazing things!",
    "Your potential is extraordinary.",
    "You light up every room you enter.",
    "Your determination is admirable!",
    "You're a true inspiration!",
    "Your energy is magnetic!",
    "You handle challenges with grace.",
    "Your creativity knows no bounds!",
    "You make everything better!"
];

let wordCount = 0;
const generatedText = document.getElementById('generatedText');
const generateBtn = document.getElementById('generateBtn');
const wordCountDisplay = document.getElementById('wordCount');

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateContent() {
    const contentType = Math.floor(Math.random() * 3);
    let content = '';
    
    switch(contentType) {
        case 0:
            content = getRandomItem(positiveWords);
            break;
        case 1:
            content = getRandomItem(motivationalQuotes);
            break;
        case 2:
            content = getRandomItem(compliments);
            break;
    }
    
    animateText(content);
    updateWordCount();
    createRipple();
}

function animateText(text) {
    generatedText.style.animation = 'none';
    setTimeout(() => {
        generatedText.textContent = text;
        generatedText.style.animation = 'fadeIn 0.5s forwards';
    }, 10);
}

function updateWordCount() {
    wordCount++;
    wordCountDisplay.textContent = wordCount;
}

function createRipple() {
    const ripple = document.createElement('div');
    ripple.className = 'btn-ripple';
    
    const rect = generateBtn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    generateBtn.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

generateBtn.addEventListener('click', generateContent);

document.addEventListener('DOMContentLoaded', () => {
    generatedText.textContent = "Ready to inspire...";
});

window.addEventListener('resize', () => {
    const bubbles = document.querySelector('.bubbles');
    const bubbleCount = 5;
    
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.style.position = 'absolute';
        bubble.style.width = Math.random() * 100 + 50 + 'px';
        bubble.style.height = bubble.style.width;
        bubble.style.borderRadius = '50%';
        bubble.style.background = 'rgba(255, 255, 255, 0.05)';
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.top = Math.random() * 100 + '%';
        bubble.style.animation = `float ${15 + Math.random() * 10}s infinite ease-in-out`;
        bubble.style.animationDelay = Math.random() * 5 + 's';
        
        bubbles.appendChild(bubble);
    }
});
