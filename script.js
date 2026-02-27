// 1ï¸âƒ£ Simple Click Alert
function showMessage() {
    alert("I'm really really grateful for having u in my life. Not even once I regret of choosing u. I love you with all my heart princess Sha ❤️");
}

// 2ï¸âƒ£ Love Counter
let love = 0;
function increaseLove() {
    love++;
    document.getElementById("loveCount").innerText = love;

    if (love === 10) {
        alert("You unlocked my heart forever ❤️");
        launchConfetti();
    }
}

// 3ï¸âƒ£ Confetti Effect
function launchConfetti() {
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
    });
}

// 4ï¸âƒ£ Relationship Timer (Years, Months, Days)
function updateRelationshipTime() {
    const anniversary = new Date("2023-11-26"); // YOUR DATE
    const now = new Date();

    let years = now.getFullYear() - anniversary.getFullYear();
    let months = now.getMonth() - anniversary.getMonth();
    let days = now.getDate() - anniversary.getDate();

    if (days < 0) {
        months--;
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("relationshipTime").innerText =
        `${years} years, ${months} months, ${days} days â¤ï¸`;
}
updateRelationshipTime();

// Optional: Auto-update every hour
setInterval(updateRelationshipTime, 1000 * 60 * 60);

// 5ï¸âƒ£ Dark Mode Toggle
function toggleMode() {
    document.body.classList.toggle("dark-mode");
}

// 6ï¸âƒ£ Secret Love Letter
function checkPassword() {
    const pass = document.getElementById("password").value;
    if (pass === "26112023") {  // Use your date or any secret code
        document.getElementById("secretMessage").innerText =
            "You are the love of my life and I love you forever and ever ❤️";
    } else {
        alert("Wrong password 🤪");
    }
}

// 7ï¸âƒ£ Floating Hearts Animation
setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "ðŸ’–";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}, 800);

