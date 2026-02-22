// 1️⃣ Simple Click Alert
function showMessage() {
    alert("You are my favorite person in the world ❤️");
}

// 2️⃣ Love Counter
let love = 0;
function increaseLove() {
    love++;
    document.getElementById("loveCount").innerText = love;

    if (love === 10) {
        alert("You unlocked my heart forever 💍❤️");
        launchConfetti();
    }
}

// 3️⃣ Confetti Effect
function launchConfetti() {
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
    });
}

// 4️⃣ Relationship Timer (Years, Months, Days)
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
        `${years} years, ${months} months, ${days} days ❤️`;
}
updateRelationshipTime();

// Optional: Auto-update every hour
setInterval(updateRelationshipTime, 1000 * 60 * 60);

// 5️⃣ Dark Mode Toggle
function toggleMode() {
    document.body.classList.toggle("dark-mode");
}

// 6️⃣ Secret Love Letter
function checkPassword() {
    const pass = document.getElementById("password").value;
    if (pass === "26112023") {  // Use your date or any secret code
        document.getElementById("secretMessage").innerText =
            "You are my forever and always ❤️";
    } else {
        alert("Wrong password 😜");
    }
}

// 7️⃣ Floating Hearts Animation
setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}, 800);