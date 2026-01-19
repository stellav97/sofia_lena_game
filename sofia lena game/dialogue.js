function showDialogue(sceneData) {
    const gameEl = document.getElementById("game");
    gameEl.innerHTML = "";
  
    // Set background image
    if (sceneData.background) {
      gameEl.style.backgroundImage = url('assets/images/backgrounds/${sceneData.background}');
    } else {
      gameEl.style.backgroundImage = "";
    }
  
    // Add character image
    if (sceneData.character) {
      const charImg = document.createElement("img");
      charImg.src = assets/images/characters/${sceneData.character};
      charImg.alt = "Character";
      charImg.className = "character";
      gameEl.appendChild(charImg);
    }
  
    // Dialogue text
    const dialogueEl = document.createElement("div");
    dialogueEl.className = "dialogue";
    dialogueEl.innerText = sceneData.text;
    gameEl.appendChild(dialogueEl);
  
    // Choices
    const choicesEl = document.createElement("div");
    choicesEl.className = "choices";
  
    sceneData.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.innerText = choice.text;
      btn.onclick = () => {
        window.gameState.currentScene = choice.next;
        showScene(choice.next);
      };
      choicesEl.appendChild(btn);
    });
  
    gameEl.appendChild(choicesEl);
  }  