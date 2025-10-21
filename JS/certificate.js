  const childName = localStorage.getItem("childName") || "Super Kid";
  document.getElementById("childName").textContent = childName;

  const badges = JSON.parse(localStorage.getItem("badges")) || [false,false,false,false,false];
  badges.forEach((collected, index) => {
    if (collected) {
      document.getElementById("badge" + (index+1)).classList.add("unlocked");
    }
  });

  function goHome() {
    window.location.href = "home.html";
  }

  document.addEventListener('DOMContentLoaded', function() {
    const starsContainer = document.getElementById('starsContainer');
    const starCount = 300;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      const starTypes = ['small', 'medium', 'large', 'xlarge'];
      star.classList.add('star', starTypes[Math.floor(Math.random() * starTypes.length)]);
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.animationDelay = `${Math.random() * 7}s`;
      starsContainer.appendChild(star);
    }
    const shootingStarCount = 5;
    for (let i = 0; i < shootingStarCount; i++) {
      const shootingStar = document.createElement('div');
      shootingStar.classList.add('shooting-star');
      shootingStar.style.left = `${Math.random() * 100}vw`;
      shootingStar.style.top = `${Math.random() * 100}vh`;
      shootingStar.style.animationDelay = `${Math.random() * 10}s`;
      starsContainer.appendChild(shootingStar);
    }
  });
