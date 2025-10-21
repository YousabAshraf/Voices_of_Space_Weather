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
});
