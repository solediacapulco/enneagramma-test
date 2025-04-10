// Questions for the Enneagram test
export const questions = [
  "Tendo a concentrarmi più sul futuro che sul presente.",
  "Mi preoccupo spesso di cosa pensano gli altri di me.",
  "Cerco di evitare i conflitti il più possibile.",
  "Preferisco pianificare in anticipo piuttosto che improvvisare.",
  "Mi sento spesso responsabile del benessere degli altri.",
  "Metto in discussione le autorità e le regole prestabilite.",
  "Mi piace essere al centro dell'attenzione.",
  "Ho una forte sensibilità e intensità emotiva.",
  "Tendo a procrastinare quando sono sotto pressione.",
  "Mi definisco una persona pratica e concreta.",
  "Sono spesso definito come una persona calma e pacifica.",
  "Ho standard molto elevati per me stesso e per gli altri.",
  "Mi adatto facilmente a nuove situazioni sociali.",
  "Tendo a riflettere a lungo prima di prendere decisioni importanti.",
  "Preferisco lavorare da solo piuttosto che in gruppo.",
  "Sono sensibile alle ingiustizie e alle disuguaglianze.",
  "Mi piace esplorare nuove possibilità e opportunità.",
  "Sono attento a preparare piani di riserva per ogni evenienza.",
  "Mi sento spesso diverso o incompreso dagli altri.",
  "Tendo a vedere il lato positivo in ogni situazione.",
  "Mi piace aiutare gli altri a risolvere i loro problemi.",
  "Sono ambizioso e orientato al successo.",
  "Tendo a trattenere le mie emozioni negative.",
  "Trovo conforto nella routine e nella stabilità.",
  "Mi piace approfondire e analizzare le informazioni.",
  "Mi sento a disagio quando sono vulnerabile.",
  "Trovo difficile dire 'no' alle richieste degli altri.",
  "Mi preoccupo spesso per le conseguenze delle mie azioni.",
  "Tendo a fidarmi del mio istinto nelle decisioni importanti.",
  "Cerco di mantenere l'armonia nei gruppi in cui mi trovo."
];

// Enneagram types data
export const enneagramTypes = [
  {
    id: 1,
    name: "Il Perfezionista",
    description: "I Tipo 1 sono guidati da un forte senso del bene e del male. Sono coscienziosi, ordinati e si impegnano per migliorare se stessi e il mondo che li circonda. Motivati dal desiderio di essere corretti e irreprensibili, lottano contro la loro critica interiore. Sono persone di principio che valorizzano la giustizia e l'integrità. In stato di stress possono diventare critici e rigidi, mentre in uno stato di sicurezza sono più rilassati e aperti alle diverse prospettive.",
    shortDescription: "Hai una forte tendenza al perfezionismo e all'organizzazione, con un chiaro senso di ciò che è giusto e sbagliato.",
    characteristics: [
      "Etici e con forti principi morali",
      "Organizzati e attenti ai dettagli",
      "Tendono al perfezionismo",
      "Hanno un forte senso di responsabilità",
      "Autocritici e introspettivi",
      "Orientati al miglioramento continuo"
    ],
    wingDescription: "L'ala 1 aggiunge un senso di ordine, disciplina e preoccupazione per l'etica. Ti porta ad essere più metodico e attento alle regole, con una forte inclinazione a fare la cosa giusta.",
    idealPartners: "Ti connetti bene con i Tipo 7 e Tipo 9. I Tipo 7 portano spontaneità e gioia alla tua vita, bilanciando la tua serietà con il loro ottimismo. Con i Tipo 9 crei relazioni armoniose grazie alla loro accettazione che bilancia il tuo perfezionismo, permettendoti di sentirti apprezzato anche nelle tue imperfezioni."
  },
  {
    id: 2,
    name: "L'Aiutante",
    description: "I Tipo 2 sono empatici, sinceri e amichevoli. Sono guidati dal desiderio di essere amati e apprezzati e trovano soddisfazione nell'aiutare gli altri. Tendono a mettere i bisogni altrui davanti ai propri. Hanno un'incredibile capacità di percepire i bisogni emotivi delle persone e di adattarsi per soddisfarli. In stato di stress possono diventare possessivi e manipolativi, mentre in uno stato di sicurezza sono più autentici e in grado di riconoscere i propri bisogni.",
    shortDescription: "Sei orientato alle relazioni e trovi significato nell'aiutare gli altri, spesso mettendo i loro bisogni prima dei tuoi.",
    characteristics: [
      "Generosi e premurosi",
      "Sensibili ai bisogni degli altri",
      "Cercano relazioni strette",
      "Possono dimenticare i propri bisogni",
      "Intuitivi nelle relazioni interpersonali",
      "Desiderano sinceramente essere apprezzati"
    ],
    wingDescription: "L'ala 2 aggiunge calore, generosità e una maggiore consapevolezza delle relazioni interpersonali. Ti porta ad essere più attento ai bisogni degli altri e a trovare soddisfazione nell'aiuto e nel supporto.",
    idealPartners: "Trovi connessioni profonde con i Tipo 4 e Tipo 8. Con i Tipo 4 condividi profondità emotiva e apprezzamento per l'autenticità, formando un legame emotivamente ricco. Con i Tipo 8 si crea un equilibrio interessante: tu offri il supporto emotivo mentre loro ti danno protezione e ti aiutano a stabilire confini più sani."
  },
  {
    id: 3,
    name: "Il Realizzatore",
    description: "I Tipo 3 sono ambiziosi, adattabili e orientati al successo. Sono motivati dal desiderio di essere apprezzati e ammirati e tendono a identificare il loro valore personale con i loro risultati. Hanno un'eccellente capacità di concentrarsi sugli obiettivi e di ispirare gli altri con la loro energia e determinazione. Sono estremamente efficienti e capaci di adattarsi a diversi ambienti per eccellere. In stato di stress possono diventare competitivi e vanitosi, mentre in uno stato di sicurezza sono più autentici e connessi con i propri veri sentimenti.",
    shortDescription: "Sei orientato al successo e all'efficienza, adattandoti facilmente per raggiungere i tuoi obiettivi.",
    characteristics: [
      "Ambiziosi e competitivi",
      "Efficienti e pratici",
      "Attenti all'immagine",
      "Orientati agli obiettivi",
      "Adattabili e versatili",
      "Energici e motivanti"
    ],
    wingDescription: "L'ala 3 aggiunge ambizione, pragmatismo e una forte inclinazione all'immagine. Ti porta ad essere più orientato agli obiettivi e al successo, con una maggiore capacità di adattarti per ottenere risultati.",
    idealPartners: "Le tue relazioni migliori sono con i Tipo 6 e Tipo 9. I Tipo 6 apprezzano la tua sicurezza e ambizione, mentre tu benefici della loro lealtà e profondità emotiva che ti aiuta a connetterti con i tuoi veri sentimenti. Con i Tipo 9 formi una coppia complementare: loro ti offrono accettazione incondizionata che bilancia la tua tendenza a cercare valore nei risultati."
  },
  {
    id: 4,
    name: "L'Individualista",
    description: "I Tipo 4 sono sensibili, introspettivi e espressivi. Sono guidati dal desiderio di essere autentici e di trovare un significato personale. Hanno un'acuta consapevolezza delle proprie emozioni e tendono a sentirsi diversi dagli altri. Possiedono una profonda capacità di connessione emotiva e una notevole creatività che permette loro di trasformare le proprie esperienze in espressioni artistiche. In stato di stress possono diventare autoassorbiti e malinconici, mentre in uno stato di sicurezza sono più equlibrati e in grado di agire con obiettività.",
    shortDescription: "Hai una forte sensibilità emotiva e un desiderio di autenticità, spesso sentendoti unico o diverso dagli altri.",
    characteristics: [
      "Creativi e espressivi",
      "Profondi e introspettivi",
      "Sensibili all'autenticità",
      "Attenti alla propria unicità",
      "Emotivamente intensi",
      "Apprezzano la bellezza e il significato"
    ],
    wingDescription: "L'ala 4 aggiunge una dimensione più emotiva e creativa alla tua personalità. Questo ti porta ad essere più consapevole dei tuoi sentimenti e ad avere un approccio più personale e unico, con una sensibilità artistica e introspettiva.",
    idealPartners: "Le tue connessioni più profonde si formano con i Tipo 1 e Tipo 5. Con i Tipo 1 crei un equilibrio interessante tra la tua espressività emotiva e il loro senso di struttura, che ti aiuta a incanalare i tuoi sentimenti in modo costruttivo. I Tipo 5 condividono la tua profondità, offrendo una comprensione intellettuale che complenenta la tua profondità emotiva."
  },
  {
    id: 5,
    name: "L'Investigatore",
    description: "I Tipo 5 sono perceptivi, innovativi e isolati. Sono motivati dal desiderio di comprendere il mondo e di raccogliere conoscenze. Tendono a conservare energia e risorse e possono apparire distaccati emotivamente. Hanno una mente brillante e la capacità di analizzare complessi sistemi di pensiero. Possiedono una ricca vita interiore e un forte bisogno di privacy e autonomia. In stato di stress possono diventare distaccati e cinici, mentre in uno stato di sicurezza sono più connessi con gli altri e capaci di condividere le proprie conoscenze.",
    shortDescription: "Hai una mente analitica e curiosa, raccogliendo conoscenze e mantenendo spesso un certo distacco emotivo.",
    characteristics: [
      "Intelligenti e perspicaci",
      "Indipendenti e riservati",
      "Analitici e obiettivi",
      "Curiosi e riflessivi",
      "Innovativi nel pensiero",
      "Apprezzano la privacy e l'autonomia"
    ],
    wingDescription: "L'ala 5 aggiunge un approccio più analitico, osservativo e intellettuale. Ti porta ad essere più interessato alla conoscenza e alla comprensione teorica, con una maggiore tendenza a osservare prima di partecipare.",
    idealPartners: "Formi legami significativi con i Tipo 2 e Tipo 7. I Tipo 2 ti offrono il calore emotivo e la connessione di cui a volte hai bisogno, aiutandoti ad apriti; in cambio, tu offri loro profondità e spazio per riflettere. Con i Tipo 7 si crea una dinamica stimolante: loro portano entusiasmo nella tua vita di riflessione, mentre tu offri profondità alle loro esperienze."
  },
  {
    id: 6,
    name: "Il Leale",
    description: "I Tipo 6 sono responsabili, affidabili e protettivi. Sono motivati dal desiderio di sicurezza e tendono ad anticipare potenziali problemi. Possono oscillare tra fiducia e dubbio, e sono sensibili alle dinamiche di potere. Sono estremamente leali verso le persone e le cause in cui credono, e hanno una notevole capacità di pensiero critico. Sono in grado di vedere diversi punti di vista e di considerare varie possibilità. In stato di stress possono diventare ansiosi e sospettosi, mentre in uno stato di sicurezza sono più fiduciosi e coraggiosi.",
    shortDescription: "Sei leale e cercatore di sicurezza, con una tendenza a preoccuparti e prepararti per i potenziali problemi.",
    characteristics: [
      "Leali e affidabili",
      "Vigilanti e cauti",
      "Responsabili e diligenti",
      "Orientati alla sicurezza",
      "Pensatori critici",
      "Attenti alle dinamiche di gruppo"
    ],
    wingDescription: "L'ala 6 aggiunge un senso di responsabilità, lealtà e preoccupazione per la sicurezza. Ti porta ad essere più consapevole dei rischi potenziali e più attento alle dinamiche di gruppo e alle questioni di fiducia.",
    idealPartners: "Le tue relazioni più armoniose sono con i Tipo 9 e Tipo 3. I Tipo 9 ti offrono un senso di pace e stabilità che attenua le tue ansie, mentre tu porti energia e attenzione ai dettagli. Con i Tipo 3, trovi un partner che ti dà sicurezza attraverso le sue capacità, mentre tu offri lealtà e profondità emotiva che li aiuta a connettersi con la loro autenticità."
  },
  {
    id: 7,
    name: "L'Entusiasta",
    description: "I Tipo 7 sono versatili, spontanei e vivaci. Sono motivati dal desiderio di esperienze piacevoli e tendono a evitare il dolore e la limitazione. Hanno una mente veloce e sono spesso ottimisti e avventurosi. Possiedono una straordinaria capacità di vedere possibilità e opportunità e di generare entusiasmo negli altri. Sono innovativi e creativi nel risolvere problemi. In stato di stress possono diventare dispersivi e impulsivi, mentre in uno stato di sicurezza sono più focalizzati e in grado di apprezzare profondamente le esperienze.",
    shortDescription: "Sei ottimista e orientato alle esperienze positive, con una tendenza a evitare limitazioni e sentimenti negativi.",
    characteristics: [
      "Ottimisti e entusiasti",
      "Versatili e spontanei",
      "Avventurosi e curiosi",
      "Evitano la noia e il disagio",
      "Pensatori veloci e creativi",
      "Generano idee e possibilità"
    ],
    wingDescription: "L'ala 7 aggiunge entusiasmo, versatilità e ottimismo. Ti porta ad essere più spontaneo e interessato a nuove esperienze, con una maggiore capacità di vedere possibilità e opportunità positive.",
    idealPartners: "Le tue connessioni più stimolanti sono con i Tipo 5 e Tipo 1. I Tipo 5 offrono profondità e riflessione al tuo entusiasmo, creando un equilibrio tra esplorazione e comprensione. Con i Tipo 1 formi una coppia complementare: la tua spontaneità alleggerisce la loro serietà, mentre la loro struttura ti aiuta a incanalare la tua energia in modo produttivo."
  },
  {
    id: 8,
    name: "Lo Sfidante",
    description: "I Tipo 8 sono assertivi, decisi e protettivi. Sono motivati dal desiderio di essere forti e evitare la vulnerabilità. Tendono ad assumere il controllo delle situazioni e a difendere coloro che percepiscono come più deboli. Hanno una naturale capacità di leadership e un forte senso di giustizia. Affrontano le sfide direttamente e valorizzano l'onestà e l'autenticità. In stato di stress possono diventare dominanti e confrontazionali, mentre in uno stato di sicurezza sono più generosi e protettivi.",
    shortDescription: "Sei assertivo e protettivo, affrontando le sfide direttamente e difendendo gli altri quando necessario.",
    characteristics: [
      "Assertivi e diretti",
      "Protettivi e forti",
      "Decisi e indipendenti",
      "Evitano la vulnerabilità",
      "Naturali leader",
      "Valorizzano l'autenticità e l'onestà"
    ],
    wingDescription: "L'ala 8 aggiunge assertività, protezione e un'inclinazione al controllo. Ti porta ad essere più diretto, ad assumere posizioni di leadership e a difendere ciò in cui credi con maggiore forza e determinazione.",
    idealPartners: "Formi relazioni potenti con i Tipo 2 e Tipo 4. I Tipo 2 offrono il calore emotivo e la cura che bilanciano la tua forza, permettendoti di mostrare vulnerabilità in un ambiente sicuro. Con i Tipo 4 si crea una dinamica intensa: la loro profondità emotiva ti aiuta ad accedere ai tuoi sentimenti, mentre la tua forza dà loro un senso di sicurezza."
  },
  {
    id: 9,
    name: "Il Pacificatore",
    description: "I Tipo 9 sono ricettivi, rassicuranti e accomodanti. Sono motivati dal desiderio di pace interiore e esterna e tendono ad evitare i conflitti. Hanno la capacità di vedere tutti i punti di vista ma possono faticare a stabilire priorità. Possiedono un'innata capacità di creare armonia e di mediare tra posizioni diverse. Sono pazienti, tolleranti e in grado di accettare gli altri per quello che sono. In stato di stress possono diventare passivi e disconnessi, mentre in uno stato di sicurezza sono più decisi e capaci di agire con maggiore energia.",
    shortDescription: "Sei armonioso e accomodante, con una tendenza a evitare i conflitti e a considerare le prospettive di tutti.",
    characteristics: [
      "Pacifici e armoniosi",
      "Accomodanti e inclusivi",
      "Pazienti e rilassati",
      "Evitano i conflitti",
      "Mediatori naturali",
      "Capacità di vedere diverse prospettive"
    ],
    wingDescription: "L'ala 9 aggiunge armonia, pace e un'attenzione all'inclusione. Ti porta ad essere più calmo e conciliante, con una maggiore capacità di vedere diversi punti di vista e di adattarti agli altri per mantenere l'armonia.",
    idealPartners: "Le tue relazioni più armoniose sono con i Tipo 3 e Tipo 6. I Tipo 3 portano energia e direzione alla tua vita, aiutandoti a realizzare i tuoi obiettivi, mentre tu offri loro accettazione incondizionata che li aiuta a trovare valore oltre i risultati. Con i Tipo 6 crei un ambiente di mutuo supporto: la tua calma attenua le loro ansie, mentre la loro attenzione ti aiuta a non trascurare problemi importanti."
  }
];

// Function to calculate the primary Enneagram type based on answers
export function calculateEnneagramType(answers: number[]): Record<string, number> {
  // Initialize scores for each type (1-9)
  const typeScores: Record<string, number> = {
    "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0
  };
  
  // Mapping of questions to types they are related to
  // For each question, specify which type it contributes to and how much (positive or negative)
  const questionMapping = [
    { question: 0, type: "5", weight: 1 },  // Future focus - Type 5
    { question: 1, type: "2", weight: 1 },  // Others' opinions - Type 2
    { question: 2, type: "9", weight: 1 },  // Avoid conflicts - Type 9
    { question: 3, type: "1", weight: 1 },  // Planning - Type 1
    { question: 4, type: "2", weight: 1 },  // Others' wellbeing - Type 2
    { question: 5, type: "8", weight: 1 },  // Question authority - Type 8
    { question: 6, type: "3", weight: 1 },  // Center of attention - Type 3
    { question: 7, type: "4", weight: 1 },  // Emotional intensity - Type 4
    { question: 8, type: "7", weight: -1 }, // Procrastination - Negative for Type 7
    { question: 9, type: "6", weight: 1 },  // Practical - Type 6
    { question: 10, type: "9", weight: 1 }, // Calm - Type 9
    { question: 11, type: "1", weight: 1 }, // High standards - Type 1
    { question: 12, type: "3", weight: 1 }, // Social adaptation - Type 3
    { question: 13, type: "5", weight: 1 }, // Reflection - Type 5
    { question: 14, type: "5", weight: 1 }, // Working alone - Type 5
    { question: 15, type: "1", weight: 1 }, // Justice sensitivity - Type 1
    { question: 16, type: "7", weight: 1 }, // New possibilities - Type 7
    { question: 17, type: "6", weight: 1 }, // Backup plans - Type 6
    { question: 18, type: "4", weight: 1 }, // Feeling different - Type 4
    { question: 19, type: "7", weight: 1 }, // Positive outlook - Type 7
    { question: 20, type: "2", weight: 1 }, // Helping others - Type 2
    { question: 21, type: "3", weight: 1 }, // Success-oriented - Type 3
    { question: 22, type: "9", weight: 1 }, // Suppressing emotions - Type 9
    { question: 23, type: "6", weight: 1 }, // Routine comfort - Type 6
    { question: 24, type: "5", weight: 1 }, // Analysis - Type 5
    { question: 25, type: "8", weight: 1 }, // Discomfort with vulnerability - Type 8
    { question: 26, type: "2", weight: 1 }, // Difficulty saying no - Type 2
    { question: 27, type: "6", weight: 1 }, // Consequences worry - Type 6
    { question: 28, type: "8", weight: 1 }, // Trust instincts - Type 8
    { question: 29, type: "9", weight: 1 }  // Maintain harmony - Type 9
  ];
  
  // Process each answer
  questionMapping.forEach(mapping => {
    const answer = answers[mapping.question];
    if (answer !== undefined && answer !== null) {
      // Convert answer scale (1-5) to -2 to +2 scale for more granular scoring
      // 1 = strong disagree (-2), 5 = strong agree (+2)
      const normalizedAnswer = (answer - 3) * mapping.weight;
      typeScores[mapping.type] += normalizedAnswer;
    }
  });
  
  // Normalize scores to a 0-100 scale
  const minScore = Math.min(...Object.values(typeScores));
  const maxScore = Math.max(...Object.values(typeScores));
  const range = maxScore - minScore;
  
  // Prevent division by zero if all scores are the same
  if (range === 0) {
    Object.keys(typeScores).forEach(type => {
      typeScores[type] = 50; // Set all to middle value
    });
  } else {
    Object.keys(typeScores).forEach(type => {
      // Normalize to 0-100 scale
      typeScores[type] = Math.round(((typeScores[type] - minScore) / range) * 100);
    });
  }
  
  return typeScores;
}

// Function to determine the wing type (adjacent type with highest score)
export function determineWingType(primaryType: number, typeScores: Record<string, number>): number | null {
  const possibleWings: number[] = [];
  
  // Add adjacent types
  if (primaryType === 1) {
    possibleWings.push(9, 2);
  } else if (primaryType === 9) {
    possibleWings.push(8, 1);
  } else {
    possibleWings.push(primaryType - 1, primaryType + 1);
  }
  
  // Find the wing with highest score
  let highestScore = -1;
  let wingType: number | null = null;
  
  possibleWings.forEach(wing => {
    const score = typeScores[wing.toString()];
    if (score > highestScore) {
      highestScore = score;
      wingType = wing;
    }
  });
  
  return wingType;
}
