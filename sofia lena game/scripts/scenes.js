const sceneData = {
    scenes: [
      {
        id: "intro",
        text: "Today is a special day — it's Mommy's birthday!\nThe sun is shining, the cake is almost ready, and the house is filled with excitement.\nBut wait... the house is a complete mess!\nBefore the party can begin, the kids must team up, clean up each room, and defeat a few mischievous household villains.\nTime to grab your book, helmet, and toy sword — the birthday rescue mission begins now!",
        textGR: "Σήμερα είναι μια ξεχωριστή μέρα - είναι η 6η χρονία που βγαίνουμε, 09/02!\nΌλα είναι έτοιμα, ο ενθουσιασμός μεγάλος.\nΜα περίμενε... το σπίτι είναι χάλια!\nΠριν ξεκινήσει η γιορτή, η Σοφία και η Λένα με τη βοήθεια του Φούφη πρέπει να καθαρίσουν κάθε δωμάτιο και να νικήσουν μερικούς σκανταλιάρηδες κακοποιούς του σπιτιού.\nΠιάσε το βιβλίο και το ξύλινο σπαθί σου - η αποστολή διάσωσης της γιορτής ξεκινά τώρα!",
        background: "outside.gif",
        music: "chill_music.mp3",
        walkIn: false,
        cat: false,
        choices: [
          { text: "Start with the first challenge", textGR: "Ξεκίνα με την πρώτη δοκιμασία", next: "kitchen_sofia" }
        ]
      },
      {
        id: "kitchen_sofia",
        text: "Stella walks into the kitchen and finds... a mountain of talking dirty plates blocking her way!",
        textGR: "Η Σοφία μπαίνει στην κουζίνα και βρίσκει... ένα βουνό από βρώμικα πιάτα που μιλάνε και της κλείνουν τον δρόμο!",
        background: "kitchen.png",
        character: "sofia.png",
        enemy: "dirty_plates.png",
        music: "fight_music.mp3",
        cat: true,
        walkIn: true,
        choices: [
          { text: "Read them a poem about hygiene", textGR: "Διάβασε τους ποίηματα για την υγιεινή", next: "win_sofia" },
          { text: "Throw socks at them", textGR: "Πέτα τους κάλτσες", next: "lose_sofia" },
          { text: "Lecture them about bacteria", textGR: "Δώσε τους διάλεξη για τα βακτήρια", next: "win_sofia" }
        ]
      },
      {
        id: "lose_sofia",
        text: "The plates laugh and fling mashed potatoes back. Stella retreats to find a better plan.",
        textGR: "Τα πιάτα γελάνε και της πετάνε πουρέ! Η Σοφία υποχωρεί για να σκεφτεί καλύτερο σχέδιο.",
        background: "kitchen.png",
        character: "sofia.png",
        music: "fight_music.mp3",
        enemy: "dirty_plates.png",
        walkIn: false,
        cat: true,
        choices: [
          { text: "Read them a poem about hygiene", textGR: "Διάβασε τους ποίηματα για την υγιεινή", next: "win_sofia" },
          { text: "Throw socks at them", textGR: "Πέτα τους κάλτσες", next: "lose_sofia" },
          { text: "Lecture them about bacteria", textGR: "Δώσε τους διάλεξη για τα βακτήρια", next: "win_sofia" }
        ]
      },
      {
        id: "win_sofia",
        text: "The plates are enchanted by her knowledge. They rinse themselves and march to the dishwasher. One room is saved!",
        textGR: "Τα πιάτα μαγεύονται από τις γνώσεις της. Ξεπλένονται μόνα τους και βαδίζουν προς το πλυντήριο. Ένα δωμάτιο σώθηκε!",
        background: "kitchen.png",
        character: "sofia.png",
        enemy: "dirty_plates.png",
        music: "chill_music.mp3",
        walkIn: false,
        cat: true,
        choices: [
          { text: "Go to the next challenge", textGR: "Πήγαινε στην επόμενη δοκιμασία", next: "laundry_lena" }
        ]
      },
      {
        id: "laundry_lena",
        text: "Ilias finds the Sock Wizard spinning laundry spells and teleporting socks everywhere!",
        textGR: "Η Λένα βρίσκει τον Μάγο της Κάλτσας να ρίχνει ξόρκια πλυντηρίου και να τηλεμεταφέρει κάλτσες παντού!",
        background: "living_room.png",
        character: "lena.png",
        enemy: "sock_wizard.png",
        music: "fight_music.mp3",
        walkIn: true,
        cat: true,
        choices: [
          { text: "Wave his toy sword and declare sock peace", textGR: "Κούνησε το ξύλινο σπαθί και κήρυσσε ειρήνη", next: "win_lena" },
          { text: "Challenge the wizard to a trivia contest", textGR: "Προκάλεσε τον σε διαγωνισμό γνώσεων", next: "win_lena" },
          { text: "Throw wet towels at him", textGR: "Πέτα του βρεγμένες πετσέτες", next: "lose_lena" }
        ]
      },
      {
        id: "lose_lena",
        walkIn: false,
        cat: true,
        text: "The wizard turns the towels into flying snakes. Ilias escapes in a puff of sock smoke.",
        textGR: "Ο μάγος μετατρέπει τις πετσέτες σε ιπτάμενα φίδια. Η Λένα το βάζει στα πόδια μέσα σε ένα σύννεφο καλτσοκαπνού!",
        background: "living_room.png",
        enemy: "sock_wizard.png",
        character: "lena.png",
        music: "fight_music.mp3",
        choices: [
          { text: "Wave his toy sword and declare sock peace", textGR: "Κούνησε το ξύλινο σπαθί και κήρυσσε ειρήνη", next: "win_lena" },
          { text: "Challenge the wizard to a trivia contest", textGR: "Προκάλεσε τον σε διαγωνισμό γνώσεων", next: "win_lena" },
          { text: "Throw wet towels at him", textGR: "Πέτα του βρεγμένες πετσέτες", next: "lose_lena" }
        ]
      },
      {
        id: "win_lena",
        text: "The wizard is impressed by Ilias\u2019s wisdom and lays down his socks. Victory!",
        textGR: "Ο μάγος εντυπωσιάζεται από τη σοφία της Λένας και αφήνει τις κάλτσες κάτω. Νίκη!",
        walkIn: false,
        cat: true,
        background: "living_room.png",
        enemy: "sock_wizard.png",
        character: "lena.png",
        music: "chill_music.mp3",
        choices: [
          { text: "And where is mommy in the meantime?", textGR: "Το σπίτι είναι πλέον καθαρό. Πάμε στο πάρκο!", next: "garden_final" }
        ]
      },
      {
        id: "garden_final",
        text: "In the garden, the family dog Milou is sitting on the birthday cake, demanding attention. Only Mommy can handle this!",
        textGR: "Στο πάρκο, ο Φούφη κάθεται πάνω στην τούρτα και απαιτεί προσοχή. Μόνο η Σοφία μπορεί να τα βγάλει πέρα με αυτό!",
        background: "final_party.png",
        character: "sofia.png",
        enemy: "foufy2.png",
        music: "fight_music.mp3",
        walkIn: true,
        cat: false,
        choices: [
          { text: "Scold Milou", textGR: "Μάλωσε τον Φούφη", next: "lose_sofiaGarden" },
          { text: "Offer him treats", textGR: "Πρόσφερέ του λιχουδιές", next: "lose_sofiaGarden" },
          { text: "Cuddle him softly", textGR: "Αγκάλιασέ τον τρυφερά", next: "win_sofiaGarden" }
        ]
      },
      {
        id: "lose_sofiaGarden",
        text: "Milou whines and runs away with the cake. Try again with more love.",
        textGR: "Ο Φούφη γκρινιάζει και φεύγει τρέχοντας με την τούρτα. Δοκίμασε ξανά με λίγη παραπάνω αγάπη.",
        background: "final_party.png",
        character: "sofia.png",
        enemy: "foufy2.png",
        music: "fight_music.mp3",
        walkIn: false,
        cat: false,
        choices: [
          { text: "Scold Milou", textGR: "Μάλωσε τον Φούφη", next: "lose_sofiaGarden" },
          { text: "Offer him treats", textGR: "Πρόσφερέ του λιχουδιές", next: "lose_sofiaGarden" },
          { text: "Cuddle him softly", textGR: "Αγκάλιασέ τον τρυφερά", next: "win_sofiaGarden" }
        ]
      },
      {
        id: "win_sofiaGarden",
        text: "Mommy cuddles Milou, who melts with joy and returns the cake. The birthday is saved!",
        textGR: "Η Σοφία αγκαλιάζει τον Φούφη, που λιώνει από χαρά και επιστρέφει την τούρτα. Η γιορτή σώθηκε!",
        background: "final_party.png",
        character: "sofia.png",
        enemy: "foufy2.png",
        music: "chill_music.mp3",
        walkIn: false,
        cat: false,
        choices: [
          { text: "Time for party!", textGR: "Ώρα για πάρτυ",  next: "party" }
        ]
      },
      {
        id: "party",
        text: "The house is sparkling, the villains are vanquished, and everyone is smiling.\nMilou gently guards the cake, and the kids have gathered in the garden with balloons and laughter.\nMommy steps outside, surprised and touched by the clean house and the teamwork behind it all.\n\nHappy Birthday, Mommy!❤️ \n\nThis is a day no one will ever forget.",
        textGR: "Χρόνια πολλάαααα λοιπόν, αυτή η μέρα θα είναι πάντα σημαντική να τη γιορτάζουμε!",
        background: "finale.png",
        music: "happy_music.mp3",
        walkIn: false,
        cat: false,
        choices: [
          { text: "Play again", textGR: "Παίξε ξανά",  next: "intro" }
        ]
      }
    ]
  };
  
  function showScene(id) {
    const scene = sceneData.scenes.find(s => s.id === id);
    if (scene) {
      showDialogue(scene);
    } else {
      console.error("Scene not found:", id);
    }

  }
