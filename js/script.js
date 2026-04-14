// ===== DARK MODE BUTTON =====
const btn = document.createElement("button");
btn.innerHTML = '<i class="fas fa-moon"></i>';
btn.classList.add("toggle-btn");
document.body.appendChild(btn);

// حفظ الوضع
if (localStorage.getItem("mode") === "light") {
  document.body.classList.add("light-mode");
  btn.innerHTML = '<i class="fas fa-sun"></i>';
}

btn.onclick = () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("mode", "light");
    btn.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    localStorage.setItem("mode", "dark");
    btn.innerHTML = '<i class="fas fa-moon"></i>';
  }
};

// ===== ADD ICONS AUTO =====
document.querySelectorAll("h3").forEach(el => {
  if (el.innerText.includes("Sensor"))
    el.innerHTML = '<i class="fas fa-microchip"></i> ' + el.innerText;

  if (el.innerText.includes("Alert"))
    el.innerHTML = '<i class="fas fa-triangle-exclamation"></i> ' + el.innerText;

  if (el.innerText.includes("System"))
    el.innerHTML = '<i class="fas fa-server"></i> ' + el.innerText;
});

// ===== STATUS COLORS =====
document.querySelectorAll("td").forEach(td => {
  let text = td.innerText.toLowerCase();

  if (text.includes("active")) td.classList.add("status-active");
  if (text.includes("warning")) td.classList.add("status-warning");
  if (text.includes("critical")) td.classList.add("status-critical");
});
// ===== BACKGROUND EFFECT =====
const bg = document.createElement("div");
bg.classList.add("bg-effect");
document.body.appendChild(bg);

function createStars() {
  bg.innerHTML = "";

  for (let i = 0; i < 180; i++) { // 🔥 عدد كبير
    let star = document.createElement("div");

    // أحجام مختلفة
    let types = ["small", "medium", "big"];
    let randomType = types[Math.floor(Math.random() * types.length)];

    star.classList.add("star", randomType);

    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";

    star.style.animationDuration = (2 + Math.random() * 4) + "s";

    bg.appendChild(star);
  }
}

function createRays() {
  bg.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    let ray = document.createElement("div");
    ray.classList.add("ray");

    ray.style.top = Math.random() * 100 + "%";
    ray.style.left = Math.random() * 100 + "%";

    bg.appendChild(ray);
  }
}

// تشغيل حسب الوضع
function updateBackground() {
  if (document.body.classList.contains("light-mode")) {
    createRays();
  } else {
    createStars();
  }
}

// أول تحميل
updateBackground();

// عند تغيير الوضع
btn.addEventListener("click", () => {
  setTimeout(updateBackground, 200);
});