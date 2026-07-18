const LEVELS = [
  {
    id: 1,
    island: "Île des Oursins",
    sound: "ou",
    color: "#4ECDC4",
    desc: "Le son OU comme dans 'loup' et 'roue'",
    words: [
      { word: "loup",    emoji: "🐺", hint: "un animal de la forêt" },
      { word: "roue",    emoji: "🛞", hint: "ça tourne sur un vélo" },
      { word: "hibou",   emoji: "🦉", hint: "un oiseau de nuit" },
      { word: "genou",   emoji: "🦵", hint: "ça plie au milieu de la jambe" },
      { word: "cou",     emoji: "🦒", hint: "la girafe a un très long cou" },
      { word: "coucou",  emoji: "🐦", hint: "un oiseau qui dit son prénom" },
    ]
  },
  {
    id: 2,
    island: "Île des Pontons",
    sound: "on",
    color: "#FF6B6B",
    desc: "Le son ON comme dans 'bonbon' et 'mouton'",
    words: [
      { word: "bonbon",  emoji: "🍬", hint: "c'est sucré et délicieux" },
      { word: "mouton",  emoji: "🐑", hint: "un animal avec de la laine" },
      { word: "ballon",  emoji: "🎈", hint: "ça vole dans l'air" },
      { word: "maison",  emoji: "🏠", hint: "on habite dedans" },
      { word: "cochon",  emoji: "🐷", hint: "il dit oink oink" },
      { word: "raison",  emoji: "💡", hint: "avoir raison, c'est avoir la bonne réponse" },
    ]
  },
  {
    id: 3,
    island: "Île des Volcans",
    sound: "an",
    color: "#F7B731",
    desc: "Le son AN comme dans 'enfant' et 'orange'",
    words: [
      { word: "enfant",  emoji: "🧒", hint: "un petit garçon ou une petite fille" },
      { word: "orange",  emoji: "🍊", hint: "un fruit orange" },
      { word: "éléphant",emoji: "🐘", hint: "le plus grand animal de la savane" },
      { word: "manteau", emoji: "🧥", hint: "on le met quand il fait froid" },
      { word: "serpent", emoji: "🐍", hint: "il rampe et siffle" },
      { word: "danse",   emoji: "💃", hint: "on bouge au son de la musique" },
    ]
  },
  {
    id: 4,
    island: "Île des Ailes",
    sound: "ai",
    color: "#A29BFE",
    desc: "Le son AI comme dans 'balai' et 'maison'",
    words: [
      { word: "balai",   emoji: "🧹", hint: "ça sert à balayer" },
      { word: "lait",    emoji: "🥛", hint: "une boisson blanche" },
      { word: "fraise",  emoji: "🍓", hint: "un petit fruit rouge" },
      { word: "chaise",  emoji: "🪑", hint: "on s'assoit dessus" },
      { word: "balaie",  emoji: "🧹", hint: "action de nettoyer le sol" },
      { word: "faire",   emoji: "🛠️", hint: "créer ou réaliser quelque chose" },
    ]
  },
  {
    id: 5,
    island: "Île des Étoiles",
    sound: "oi",
    color: "#FD79A8",
    desc: "Le son OI comme dans 'voiture' et 'roi'",
    words: [
      { word: "voiture", emoji: "🚗", hint: "un véhicule à 4 roues" },
      { word: "roi",     emoji: "👑", hint: "il porte une couronne" },
      { word: "doigt",   emoji: "☝️", hint: "on en a dix sur les mains" },
      { word: "poisson", emoji: "🐟", hint: "il nage dans l'eau" },
      { word: "boite",   emoji: "📦", hint: "un contenant carré" },
      { word: "trois",   emoji: "3️⃣", hint: "le chiffre après deux" },
    ]
  },
  {
    id: 6,
    island: "Île du Feu",
    sound: "eu",
    color: "#E17055",
    desc: "Le son EU comme dans 'feu' et 'jeu'",
    words: [
      { word: "feu",     emoji: "🔥", hint: "ça brûle et ça chauffe" },
      { word: "jeu",     emoji: "🎲", hint: "on joue avec" },
      { word: "bleu",    emoji: "💙", hint: "la couleur du ciel" },
      { word: "peur",    emoji: "😱", hint: "ce qu'on ressent face à quelque chose d'effrayant" },
      { word: "heure",   emoji: "🕐", hint: "60 minutes" },
      { word: "beurre",  emoji: "🧈", hint: "ça se met sur le pain" },
    ]
  },
  {
    id: 7,
    island: "Île des Nuages",
    sound: "en",
    color: "#74B9FF",
    desc: "Le son EN comme dans 'dent' et 'vent'",
    words: [
      { word: "dent",    emoji: "🦷", hint: "ça pousse dans la bouche" },
      { word: "vent",    emoji: "💨", hint: "ça fait bouger les arbres" },
      { word: "tente",   emoji: "⛺", hint: "on y dort en camping" },
      { word: "ventre",  emoji: "🫃", hint: "la partie du corps entre la poitrine et les jambes" },
      { word: "lente",   emoji: "🐌", hint: "qui ne va pas vite" },
      { word: "trente",  emoji: "3️⃣0️⃣", hint: "trois fois dix" },
    ]
  },
  {
    id: 8,
    island: "Île des Pingoins",
    sound: "in",
    color: "#55EFC4",
    desc: "Le son IN comme dans 'matin' et 'lapin'",
    words: [
      { word: "matin",   emoji: "🌅", hint: "le début de la journée" },
      { word: "lapin",   emoji: "🐰", hint: "un animal avec de longues oreilles" },
      { word: "sapin",   emoji: "🌲", hint: "un arbre de Noël" },
      { word: "patin",   emoji: "⛸️", hint: "ça glisse sur la glace" },
      { word: "raisin",  emoji: "🍇", hint: "un fruit violet en grappes" },
      { word: "cousin",  emoji: "👦", hint: "le fils de ton oncle ou ta tante" },
    ]
  },
  {
    id: 9,
    island: "Île des Cascades",
    sound: "au",
    color: "#FDCB6E",
    desc: "Le son AU / EAU comme dans 'bateau' et 'chapeau'",
    words: [
      { word: "bateau",  emoji: "⛵", hint: "ça navigue sur l'eau" },
      { word: "chapeau", emoji: "🎩", hint: "ça se porte sur la tête" },
      { word: "gateau",  emoji: "🎂", hint: "dessert d'anniversaire" },
      { word: "cadeau",  emoji: "🎁", hint: "on l'offre pour une fête" },
      { word: "oiseau",  emoji: "🐦", hint: "ça vole dans le ciel" },
      { word: "chaud",   emoji: "☀️", hint: "le contraire de froid" },
    ]
  },
  {
    id: 10,
    island: "Île Mystère",
    sound: "un",
    color: "#B2BEC3",
    desc: "Le son UN comme dans 'lundi' et 'parfum'",
    words: [
      { word: "lundi",   emoji: "📅", hint: "le premier jour de la semaine" },
      { word: "parfum",  emoji: "🌸", hint: "ça sent bon" },
      { word: "brun",    emoji: "🟫", hint: "une couleur sombre comme le chocolat" },
      { word: "chacun",  emoji: "👤", hint: "chaque personne" },
      { word: "aucun",   emoji: "0️⃣", hint: "pas un seul" },
      { word: "emprunter",emoji:"📚", hint: "prendre quelque chose et le rendre après" },
    ]
  },
  // ── CE1 complex phonics ──────────────────────────────────────────────────
  {
    id: 11,
    island: "Île des Dauphins",
    sound: "ph",
    color: "#00BCD4",
    desc: "Le son PH comme dans 'dauphin' et 'phoque'",
    words: [
      { word: "dauphin",   emoji: "🐬", hint: "un mammifère marin intelligent" },
      { word: "téléphone", emoji: "📱", hint: "on l'utilise pour appeler" },
      { word: "phoque",    emoji: "🦭", hint: "un animal qui vit sur la glace" },
      { word: "photo",     emoji: "📸", hint: "une image prise avec un appareil" },
      { word: "pharmacie", emoji: "🏥", hint: "là où on achète les médicaments" },
      { word: "phare",     emoji: "🗼", hint: "une tour lumineuse qui guide les bateaux" },
    ]
  },
  {
    id: 12,
    island: "Île des Montagnes",
    sound: "gn",
    color: "#78909C",
    desc: "Le son GN comme dans 'montagne' et 'champignon'",
    words: [
      { word: "montagne",   emoji: "🏔️", hint: "une très haute colline" },
      { word: "champignon", emoji: "🍄",  hint: "ça pousse dans la forêt" },
      { word: "agneau",     emoji: "🐑",  hint: "un bébé mouton" },
      { word: "oignon",     emoji: "🧅",  hint: "un légume qui fait pleurer" },
      { word: "ligne",      emoji: "📏",  hint: "un trait tout droit" },
      { word: "vigne",      emoji: "🍇",  hint: "la plante qui donne le raisin" },
    ]
  },
  {
    id: 13,
    island: "Île des Papillons",
    sound: "ill",
    color: "#CE3175",
    desc: "Le son ILL comme dans 'fille' et 'papillon'",
    words: [
      { word: "fille",     emoji: "👧", hint: "une enfant de sexe féminin" },
      { word: "bille",     emoji: "🔮", hint: "un petit objet rond pour jouer" },
      { word: "famille",   emoji: "👨‍👩‍👧", hint: "papa, maman et les enfants" },
      { word: "papillon",  emoji: "🦋", hint: "un insecte aux ailes colorées" },
      { word: "chenille",  emoji: "🐛", hint: "la larve qui deviendra un papillon" },
      { word: "gorille",   emoji: "🦍", hint: "un grand singe très fort" },
    ]
  },
  {
    id: 14,
    island: "Île du Soleil",
    sound: "eil",
    color: "#FF9800",
    desc: "Le son EIL comme dans 'soleil' et 'oreille'",
    words: [
      { word: "soleil",    emoji: "☀️",  hint: "l'étoile qui nous éclaire" },
      { word: "oreille",   emoji: "👂",  hint: "on l'utilise pour entendre" },
      { word: "bouteille", emoji: "🍾",  hint: "un contenant en verre" },
      { word: "abeille",   emoji: "🐝",  hint: "l'insecte qui fait du miel" },
      { word: "réveil",    emoji: "⏰",  hint: "une horloge qui réveille le matin" },
      { word: "corbeille", emoji: "🧺",  hint: "un panier tressé" },
    ]
  },
  {
    id: 15,
    island: "Île des Grenouilles",
    sound: "ouill",
    color: "#43A047",
    desc: "Le son OUILL comme dans 'grenouille' et 'citrouille'",
    words: [
      { word: "grenouille", emoji: "🐸", hint: "un animal vert qui saute et coasse" },
      { word: "citrouille", emoji: "🎃", hint: "un légume orange d'Halloween" },
      { word: "nouille",    emoji: "🍝", hint: "une longue pâte à manger" },
      { word: "mouiller",   emoji: "💧", hint: "devenir tout humide" },
      { word: "fouiller",   emoji: "🔍", hint: "chercher partout" },
      { word: "brouillard", emoji: "🌫️", hint: "un nuage au sol, on ne voit rien" },
    ]
  },
];
