// Таймер до дедлайну
const deadline = new Date("2024-12-14T23:59:59").getTime();
const timerDisplay = document.getElementById("timer-display");

function updateTimer() {
    const now = new Date().getTime();
    const distance = deadline - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerDisplay.innerHTML = `${days} дн. ${hours} год. ${minutes} хв. ${seconds} сек.`;

    if (distance < 0) {
        timerDisplay.innerHTML = "Дедлайн минув!";
    }
}


        // Tooltip initialization for enhanced UX
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
setInterval(updateTimer, 1000);

// Кнопка прокрутки наверх
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Показати спливаюче повідомлення при виході курсора за межі сторінки
document.addEventListener("mouseleave", (e) => {
    if (!e.relatedTarget && !e.toElement) {
        const exitMessage = document.getElementById("exit-message");
        exitMessage.style.display = "block";
        setTimeout(() => exitMessage.style.display = "none", 3000); // Сховати через 3 секунди
    }
});

// Анімація появи елементів при прокручуванні
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });
    fadeElements.forEach(element => observer.observe(element));
});
