const quizzes = {
  1: [
  { 
    question: "What part of Kareem’s technology was first affected by the solar storm?", 
    options: ["His tractor’s fuel tank", "The GPS guidance system", "The battery in his irrigation pump", "The color of his wheat"], 
    correct: 1 
  },
  { 
    question: "What is a common problem for GPS during space weather events?", 
    options: ["GPS becomes faster", "GPS signals are blocked by clouds", "GPS accuracy drops by tens of meters", "GPS can only work at night"], 
    correct: 2 
  },
  { 
    question: "When Kareem’s automated systems failed, what did the community do to help the crops?", 
    options: ["Waited for the Sun to set", "Used manual irrigation and traditional soil tests", "Used drones instead", "Left the fields alone"], 
    correct: 1 
  },
  { 
    question: "What natural sky event did Kareem and the community see as a result of the solar storm?", 
    options: ["A rainbow", "A thunderstorm","A meteor shower","An aurora (northern lights)"], 
    correct: 3
  },
  { 
    question: "According to NASA, what’s a smart thing for farmers like Kareem to do after experiencing a space weather event?", 
    options: ["Quit using all technology", "Only farm at night", "Blend modern technology with backups and check space weather forecasts", "Move their farms underground"], 
    correct: 2 
  }
],

      2: [
  { 
    question: "What amazing light show did Lina see in the night sky?", 
    options: ["Fireworks", "The aurora (northern lights)", "A lightning storm", "Airplanes"], 
    correct: 1 
  },
  { 
    question: "What causes the aurora that Lina saw?", 
    options: ["Streetlights", "The Sun sending energy and particles into Earth’s atmosphere", "Airplanes flying in formation", "Falling stars"], 
    correct: 1 
  },
  { 
    question: "What tool did Lina use to look at the sky?", 
    options: ["A radio", "A walkie-talkie", "A microscope","A telescope"], 
    correct: 3
  },
  { 
    question: "Who explained the science of the aurora to Lina?", 
    options: ["Her neighbor", "Her teacher", "Her grandparent", "The TV news"], 
    correct: 2 
  },
  { 
    question: "What did Lina do after seeing the aurora in the sky?", 
    options: ["Went inside and ignored it", "Sketched and dreamed about studying space science", "Closed her eyes", "Sang a song"], 
    correct: 1 
  }
],

3: [
  { 
    question: "What warning did Chen’s spacesuit give during the solar storm?", 
    options: ["Out of oxygen", "Radiation alert", "Door is locked", "Too cold outside"], 
    correct: 1 
  },
  { 
    question: "Why did the crew have to take shelter inside the International Space Station?", 
    options: ["There was a meteor shower",  "They ran out of food", "The ISS was landing","Solar particles from the Sun can be dangerous to humans"], 
    correct: 3
  },
  { 
    question: "What did the astronauts use for extra shielding against radiation?", 
    options: [ "Water containers and thick walls", "Spacesuit gloves","Thin plastic tarps", "Extra blankets"], 
    correct: 0 
  },
  { 
    question: "What natural show can astronauts on the ISS see during a big solar storm?", 
    options: [ "Aurora (northern or southern lights) from space", "Tornadoes","Snow storms", "Lightning"], 
    correct: 0
  },
  { 
    question: "What is a key step for astronaut safety during space weather events?", 
    options: ["Ignore all alarms", "Take shelter in the station’s shielded module and monitor instruments", "Go outside for a better view", "Send all equipment outside"], 
    correct: 1 
  }
],

      4: [
  { 
    question: "What part of Sam’s job is most affected by a geomagnetic storm?", 
    options: ["The color of the city lights",  "The speed of internet in the office", "The temperature outside","The strength of electric currents in power lines"], 
    correct: 3
  },
  { 
    question: "During a severe solar storm, what can happen to the power grid?", 
    options: ["Nothing ever happens", "Transformers can overheat and some regions may experience blackouts", "Only televisions stop working", "It becomes more energy efficient"], 
    correct: 1 
  },
  { 
    question: "What is the main cause of the geomagnetic storms that threaten power systems?", 
    options: ["Heavy rain", "Solar flares and coronal mass ejections (CMEs) from the Sun", "Wind from the ocean", "Birds on the power lines"], 
    correct: 1 
  },
  { 
    question: "How do engineers like Sam protect the city during a major space weather event?", 
    options: ["Turn off all the city lights", "Ignore the alarms and hope for the best", "Monitor space weather alerts, reroute power, and protect critical transformers", "Only warn schools and hospitals"], 
    correct: 2 
  },
  { 
    question: "What beautiful natural phenomenon might Sam see from the city during a strong solar storm?", 
    options: [ "Aurora (northern lights)","Rainbow", "Double sunset", "Fast-moving clouds"], 
    correct: 0 
  }
],
5: [
  { 
    question: "What is one way a solar storm can affect a commercial airplane flying near the poles?", 
    options: [ "Disrupt high-frequency (HF) radio communications","Cause turbulence", "Make the food taste strange", "Freeze the plane’s wings"], 
    correct: 0 
  },
  { 
    question: "What does the aurora that Nova saw out her cockpit window indicate?", 
    options: ["It is about to start raining", "The Sun has sent charged particles into Earth’s atmosphere", "The alarms in the cockpit are broken", "The Moon is full"], 
    correct: 1 
  },
  { 
    question: "During a solar storm, what can happen to GPS navigation on an aircraft?", 
    options: ["It becomes more accurate", "It works only when the plane is on the ground","It allows the pilot to see through clouds","It can show wrong positions or drift"], 
    correct: 3
  },
  { 
    question: "How does Captain Nova keep passengers safe during a severe space weather event?", 
    options: ["Relies on backup navigation and alternative communication methods","Ignores the alarms and continues as normal", "Lands immediately, even in the ocean", "Opens the windows for ventilation"], 
    correct: 0
  },
  { 
    question: "Why do pilots sometimes change their flight paths during a strong solar storm?", 
    options: ["To avoid bumpy clouds", "To save time", "To minimize communication and navigation risks and keep everyone safe", "To get better views of the stars"], 
    correct: 2 
  }
]
};    const urlParams = new URLSearchParams(window.location.search);
    const quizId = urlParams.get("quiz") || 1;
    const quizQuestions = quizzes[quizId] || quizzes[1];

    let currentQuestion = 0;
    let userAnswers = Array(quizQuestions.length).fill(null);
    let quizCompleted = false;

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
      loadQuestion();
    });

    function loadQuestion() {
      const question = quizQuestions[currentQuestion];
      document.getElementById("questionNumber").textContent = `Question ${currentQuestion + 1}`;
      document.getElementById("questionText").textContent = question.question;

      const optionsContainer = document.getElementById("optionsContainer");
      optionsContainer.innerHTML = '';

      const letters = ['A', 'B', 'C', 'D'];
      question.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.className = "option";
        if (userAnswers[currentQuestion] === index) optionElement.classList.add("selected");
        optionElement.innerHTML = `<div class="option-letter">${letters[index]}</div><div class="option-text">${option}</div>`;
        optionElement.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionElement);
      });

      updateProgress();
      updateButtons();
    }

    function selectOption(optionIndex) {
      if (quizCompleted) return;
      userAnswers[currentQuestion] = optionIndex;
      loadQuestion();
    }

    function updateProgress() {
      const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
      document.getElementById("progressFill").style.width = `${progress}%`;
      document.getElementById("progressText").textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
    }

    function updateButtons() {
      document.getElementById("prevBtn").disabled = currentQuestion === 0;
      document.getElementById("nextBtn").textContent = currentQuestion === quizQuestions.length - 1 ? "Finish Quiz 🎯" : "Next Question →";
    }

    function nextQuestion() {
      if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        loadQuestion();
      } else {
        finishQuiz();
      }
    }

    function prevQuestion() {
      if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
      }
    }

    function finishQuiz() {
      quizCompleted = true;
      let score = 0;
      userAnswers.forEach((answer, index) => { if (answer === quizQuestions[index].correct) score++; });
      localStorage.setItem(`quiz${quizId}_score`, JSON.stringify({obtained: score, total: quizQuestions.length}));

      document.getElementById("finalScore").textContent = `${score}/${quizQuestions.length}`;
      let message = score === quizQuestions.length ? "🎉 Perfect! You're a space expert! 🚀"
                  : score >= quizQuestions.length * 0.7 ? "🌟 Great job! You know your space facts!"
                  : score >= quizQuestions.length * 0.5 ? "👍 Good effort! Keep learning about space!"
                  : "💫 Don't worry! The universe is full of wonders to discover!";
      document.getElementById("resultMessage").textContent = message;
      document.getElementById("resultContainer").style.display = "block";
    }

    function restartQuiz() {
      currentQuestion = 0;
      userAnswers = Array(quizQuestions.length).fill(null);
      quizCompleted = false;
      document.getElementById("resultContainer").style.display = "none";
      loadQuestion();
    }

    function goHome() { window.location.href = "home.html"; }
