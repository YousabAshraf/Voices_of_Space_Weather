document.addEventListener("DOMContentLoaded", () => {
  const starsContainer = document.getElementById("starsContainer");
  for (let i = 0; i < 200; i++) {
    const star = document.createElement("div");
    star.classList.add("star", ["small","medium","large"][Math.floor(Math.random()*3)]);
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDelay = `${Math.random() * 4}s`;
    starsContainer.appendChild(star);
  }

  const videos = {
"1": {
title: "🌌 Kareem's story",
desc: "See how space weather impacts agriculture.",
url: "https://www.youtube.com/embed/MhcMk8xdZXE",
info: "See how space weather impacts agriculture, and learn how farmers adapt using a blend of technology and tradition.",
quiz: "quiz.html?quiz=1"
},
"2": {
title: "🚀 Lina's story",
desc: "Explore the beauty of auroras.",
url: "https://www.youtube.com/embed/fMWVTtXb544",
info: "Explore the beauty of auroras, understand space weather in simple terms, and see how curiosity sparks the scientists of tomorrow.",
quiz: "quiz.html?quiz=2"
},
"3": {
title: "🌍 Chen's story",
desc: "Discover how solar storms affect astronauts in space.",
url: "https://www.youtube.com/embed/QZrSt1GRuZQ",
info: "Discover how solar storms affect astronauts in space, how space weather is monitored, and the safety measures that protect life aboard the International Space Station.",
quiz: "quiz.html?quiz=3"
},
"4": {
title: "🪐 Sam's story",
desc: "How Space Weather Impacts Power Grids.",
url: "https://www.youtube.com/embed/MWvtCAhr4iQ",
info: "How Space Weather Impacts Power Grids and How Engineers Respond",
quiz: "quiz.html?quiz=4"
},
"5": {
title: "🌠 Nova's story",
desc: " Discover how solar storms can disrupt aviation systems.",
url: "https://www.youtube.com/embed/PdflsdMotgI",
info: "✈️🌌 Discover how solar storms can disrupt aviation systems and how pilots navigate through these challenges to ensure passenger safety.",
quiz: "quiz.html?quiz=5"
}
};
  const params = new URLSearchParams(window.location.search);
  const vidId = params.get("video");
  const video = videos[vidId] || videos["1"];

  document.getElementById("videoTitle").textContent = video.title;
  document.getElementById("videoDesc").textContent = video.desc;
  document.getElementById("videoFrame").src = video.url;
  document.getElementById("videoInfo").textContent = video.info;
  document.getElementById("quizBtn").href = video.quiz;
});
