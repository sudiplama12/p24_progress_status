const skills = document.querySelectorAll(".skill-item");

skills.forEach(skill => {
  const circle = skill.querySelector(".outerskill");
  const percentText = skill.querySelector(".innerskill span");
  const target = parseInt(skill.dataset.percent);
  let percent = 0;

  const interval = setInterval(() => {
    percent++;
    percentText.textContent = percent + "%";
    circle.style.background = `conic-gradient(#4cafef ${percent*3.6}deg, #ddd ${percent*3.6}deg)`;

    if (percent >= target) clearInterval(interval);
  }, 30); // speed of animation
});
