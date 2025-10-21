function loadScores() {
  const totalQuizzes = 3;
  for (let i = 1; i <= totalQuizzes; i++) {
    const scoreElement = document.getElementById(`score${i}`);
    const savedScore = localStorage.getItem(`quiz${i}_score`);
    if (savedScore) {
      const score = JSON.parse(savedScore);
      scoreElement.textContent = `Score: ${score.obtained}/${score.total}`;
    }
  }
}
document.addEventListener("DOMContentLoaded", loadScores);
    document.addEventListener('DOMContentLoaded', function() {
      const starsContainer = document.getElementById('starsContainer');
      const starCount = 300;
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        
        const starTypes = ['small', 'medium', 'large', 'xlarge'];
        const randomType = starTypes[Math.floor(Math.random() * starTypes.length)];
        star.classList.add('star', randomType);
        
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
      
      const brightStarsCount = 15;
      for (let i = 0; i < brightStarsCount; i++) {
        const brightStar = document.createElement('div');
        brightStar.classList.add('star', 'xlarge');
        
        brightStar.style.boxShadow = '0 0 10px 2px white';
        
        brightStar.style.left = `${Math.random() * 100}vw`;
        brightStar.style.top = `${Math.random() * 100}vh`;
        
        brightStar.style.animationDelay = `${Math.random() * 5}s`;
        
        starsContainer.appendChild(brightStar);
      }

      loadScores();
    });

    function loadScores() {
  let totalBadges = 0;
  for (let i = 1; i <= 5; i++) {
    const scoreElement = document.getElementById(`score${i}`);
    const badgeIcon = document.getElementById(`badge${i}`);
    const allBadgeIcon = document.getElementById(`allBadge${i}`);
    const savedScore = localStorage.getItem(`quiz${i}_score`);

    if (savedScore) {
      const score = JSON.parse(savedScore);
      scoreElement.childNodes[0].nodeValue = `Score: ${score.obtained}/${score.total} `;
      if (score.obtained >= score.total) {
        scoreElement.classList.add('high-score');
        badgeIcon.classList.add("active");
        allBadgeIcon.classList.add("active");
        totalBadges++; // ✅ زود العداد
      } else {
        badgeIcon.classList.remove("active");
        allBadgeIcon.classList.remove("active");
      }
    } else {
      scoreElement.childNodes[0].nodeValue = `Score: 0/5 `;
      badgeIcon.classList.remove("active");
      allBadgeIcon.classList.remove("active");
    }
  }

  const certBtn = document.getElementById("certificateBtn");
  if (totalBadges === 5) {
    certBtn.classList.add("active");
    certBtn.disabled = false;
  } else {
    certBtn.classList.remove("active");
    certBtn.disabled = true;
  }
}

function showCertificate() {
  const certBtn = document.getElementById("certificateBtn");
  if (!certBtn.disabled) {
    window.location.href = "certificate.html";
  }
}


    // function resetAllScores() {
    //   for (let i = 1; i <= 5; i++) {
    //     localStorage.removeItem(`quiz${i}_score`);
    //   }
    //   loadScores();
    //   alert('All scores have been reset!');
      
    // }

    // document.addEventListener('DOMContentLoaded', function() {
    //   const resetButton = document.createElement('button');
    //   resetButton.textContent = 'Reset All Scores';
    //   resetButton.style.position = 'fixed';
    //   resetButton.style.bottom = '20px';
    //   resetButton.style.right = '20px';
    //   resetButton.style.padding = '10px 15px';
    //   resetButton.style.background = 'var(--accent-red)';
    //   resetButton.style.color = 'white';
    //   resetButton.style.border = 'none';
    //   resetButton.style.borderRadius = '20px';
    //   resetButton.style.cursor = 'pointer';
    //   resetButton.style.zIndex = '1000';
    //   resetButton.onclick = resetAllScores;
    //   document.body.appendChild(resetButton);
    // });