function showDialogue(sceneData) {
    const gameEl = document.getElementById("game");
    const isItalian = document.getElementById("language-select").value === 'it';
    gameEl.innerHTML = "";
  
    // Stop previous music if playing
    if (window.bgMusic) {
      window.bgMusic.pause();
      window.bgMusic.currentTime = 0;
    }
  
    // Play new scene-specific music
    if (sceneData.music) {
      const music = new Audio(assets/sfx/$sceneData.music);
      music.loop = true;
      music.volume = 0.4;
      music.play();
      window.bgMusic = music;
    }
  
    // Set background image
    if (sceneData.background) {
      gameEl.style.backgroundImage = url('assets/backgrounds/$sceneData.background');
      if(sceneData.background === "kitchen.png"){
        let frontImg;
        frontImg = document.createElement("img");
        frontImg.src = assets/backgrounds/kitchen_front.png;
        frontImg.style.zIndex = "2";
        gameEl.appendChild(frontImg);
      }
    } else {
      gameEl.style.backgroundImage = "";
    }
  
    // Add character image
    let charImg;
    if (sceneData.character) {
      charImg = document.createElement("img");
      charImg.src = assets/characters/${sceneData.character};
      charImg.alt = "Character";
      if(sceneData.walkIn) charImg.className = "character character-walk-in";
      else charImg.className = "character";
      charImg.style.position = "absolute";
      charImg.style.zIndex = "1"; // behind choices and narration
      if(sceneData.id === "church"){
        charImg.className = "character character_in_church";
      }
      gameEl.appendChild(charImg);
    }
  
    // Add enemy image
    let enemyImg;
    if (sceneData.enemy) {
      enemyImg = document.createElement("img");
      enemyImg.src = assets/villains/${sceneData.enemy};
      enemyImg.alt = "Enemy";
      if(sceneData.walkIn) enemyImg.className = "enemy enemy-walk-in";
      else if(sceneData.id.includes("win")) enemyImg.className = "enemy enemy-defeated";
      else if(sceneData.id.includes("lose")){
        enemyImg.className = "enemy enemy-persists";
        setTimeout(() => enemyImg.classList.remove("enemy-persists"), 2000);
      }
      else enemyImg.className = "enemy";
      if(sceneData.background === "final_party.png"){
        if(sceneData.walkIn) enemyImg.className = "enemy-walk-in dog";
        else if(sceneData.id.includes("win")) enemyImg.className = "enemy-defeated dog";
        else if(sceneData.id.includes("lose")){
          enemyImg.className = "enemy-persists dog";
          setTimeout(() => enemyImg.classList.remove("enemy-persists"), 2000);
        }
        else enemyImg.className = "dog";
      }
      enemyImg.style.position = "absolute";
      enemyImg.style.zIndex = "1"; // behind choices and narration
      gameEl.appendChild(enemyImg);
    }
  
    // Optionally add animated cat
    if(sceneData.cat){
      const catImg = document.createElement("img");
      catImg.src = "assets/characters/foufy.png";
      catImg.alt = "Cat";
      catImg.className = "centered-cat";
      gameEl.appendChild(catImg);
    }
  
    let typingInterval;
    let isTyping = false;
  
    function typeLine(text) {
      if (typingInterval) clearInterval(typingInterval);
      isTyping = true;
      textBox.textContent = "";
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          textBox.textContent += text[index++];
        } else {
          clearInterval(interval);
          isTyping = false;
        }
      }, 50);
    }
  
    // Narration container with scrolling text
    const narrationContainer = document.createElement("div");
    narrationContainer.className = "narration-container";
  
    const textBox = document.createElement("div");
    textBox.className = "text-box";
    let text = isItalian ? sceneData.text : sceneData.textGR;
    const lines = text.split(/(?<=\.|!|\?)\s+/); // split into sentences
    let currentLine = 0;
  
    const navContainer = document.createElement("div");
    navContainer.className = "nav-buttons";
  
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "←";
    prevBtn.onclick = () => {
      if (isTyping) return;
      if (currentLine > 0) {
        currentLine--;
        typeLine(lines[currentLine]);
      }
    };
  
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "→";
    nextBtn.onclick = () => {
      if (isTyping) return;
      if (currentLine < lines.length - 1) {
        currentLine++;
        typeLine(lines[currentLine]);
      } else {
        showChoices(sceneData);
      }
    };
  
    navContainer.appendChild(prevBtn);
    navContainer.appendChild(nextBtn);
  
    typeLine(lines[currentLine]);
    narrationContainer.appendChild(textBox);
    narrationContainer.appendChild(navContainer);
    gameEl.appendChild(narrationContainer);
  }
  
  function showChoices(sceneData) {
    const gameEl = document.getElementById("game");
    const isItalian = document.getElementById("language-select").value === 'it';
    const existingButtons = document.querySelector(".choice-buttons");
    if (existingButtons) existingButtons.remove();
  
    const oldContainer = document.querySelector(".choice-buttons-wrapper");
    if (oldContainer) oldContainer.remove();
  
    if (!sceneData.choices || sceneData.choices.length === 0) return;
  
    const wrapper = document.createElement("div");
    wrapper.className = "choice-buttons-wrapper";
    wrapper.style.position = "absolute";
    wrapper.style.bottom = "10px";
    wrapper.style.width = "100%";
    wrapper.style.display = "flex";
    wrapper.style.justifyContent = "center";
    wrapper.style.zIndex = "3";
  
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "choice-buttons";
    buttonContainer.style.display = "flex";
    buttonContainer.style.gap = "20px";
  
    sceneData.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.textContent = isItalian ? choice.text : choice.textGR;
      btn.onclick = () => {
        if(sceneData.cat){
          if (choice.next.includes("win")) {
            new Audio("assets/sfx/correct.wav").play();
          } else if (choice.next.includes("lose")) {
            new Audio("assets/sfx/wrong.wav").play();
          }
        }
        else{
          if (choice.next.includes("win")) {
            new Audio("assets/sfx/correct.wav").play();
          } else if (choice.next.includes("lose")) {
            new Audio("assets/sfx/wrong.wav").play();
          }
        }
        showScene(choice.next);
      }
      buttonContainer.appendChild(btn);
    });
  
    wrapper.appendChild(buttonContainer);
    gameEl.appendChild(wrapper);

  }
