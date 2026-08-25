import type { LandingMessages } from "./types";

export const itMessages = {
  seo: {
    title: "Asakiri | Insegna e impara le lingue",
    description:
      "Asakiri è una casa per l'apprendimento delle lingue: insegna corsi approfonditi con contenuti multimediali ed esercizi, poi studiali in un'app gratuita per chi impara. Il tuo lavoro resta tuo.",
    imageAlt: "Asakiri, una casa per l'apprendimento delle lingue",
  },
  localeName: "Italiano",
  alternateLocaleName: "English",
  navigationLabel: "Navigazione principale",
  communityLabel: "Link della community",
  siteLinksLabel: "Altre pagine",
  footerExploreTitle: "Esplora",
  footerCommunityTitle: "Community",
  brand: "Asakiri",
  title: "L'apprendimento delle lingue, fatto per restare tuo.",
  description:
    "Asakiri è una casa per l'apprendimento delle lingue. Insegna corsi approfonditi e strutturati con contenuti multimediali ed esercizi, poi studiali in un'app gratuita per chi impara. Tutto ciò che crei resta tuo.",
  comingSoon: "In arrivo",
  githubLink: "Guarda su GitHub",
  githubAriaLabel: "Apri Asakiri Studio su GitHub",
  download: {
    label: "Scarica",
    ariaLabel: "Scarica Asakiri Studio",
    menuLabel: "Scegli la tua piattaforma",
    macos: "macOS",
    windows: "Windows",
    linux: "Linux",
  },
  aboutLink: "Il progetto",
  howItWorksLink: "Come funziona",
  teamLink: "Team",
  fundingLink: "Finanziamento",
  sponsorLink: "Sponsor",
  contactLink: "Contatti",
  brandLink: "Brand",
  docsLink: "Documentazione",
  privacyLink: "Privacy",
  termsLink: "Termini",
  legalLabel: "Note legali",
  footer: "Il futuro aperto dell'apprendimento delle lingue.",
  home: {
    leadHeading: "Un unico posto per costruire un corso che valga la pena seguire",
    leadBody:
      "Asakiri Studio è un editor gratuito e local-first per corsi di lingua. Insegna con lezioni strutturate, una libreria di contenuti riutilizzabile, media ricchi ed esercizi che si correggono da soli. Gira sulla tua macchina, e tutto ciò che crei viene salvato come semplici file che restano tuoi.",
    featuresHeading: "Cosa puoi costruire",
    features: [
      {
        title: "Lezioni strutturate",
        body: "Raggruppa le lezioni in unità e componi ognuna con testo formattato, media ed esercizi, con un'anteprima dello studente in tempo reale accanto a te mentre scrivi.",
      },
      {
        title: "Una libreria riutilizzabile",
        body: "Tieni ogni parola, frase e nota in un unico posto. Le lezioni e gli esercizi puntano a essa, così correggere una voce una volta la corregge ovunque venga usata.",
      },
      {
        title: "Esercizi che si correggono da soli",
        body: "Scelta multipla, ascolto, abbinamento, ordine delle parole e altro. Ognuno legge la propria risposta direttamente dalla tua libreria, così contenuto e correzione non si disallineano mai.",
      },
      {
        title: "In locale e offline",
        body: "Il tuo corso vive in una cartella sul tuo computer, media inclusi. Nessun account, nessun cloud e nessuna connessione necessaria per lavorarci.",
      },
    ],
    ownershipHeading: "I tuoi corsi sono tuoi",
    ownershipBody:
      "Un corso non è rinchiuso dentro Asakiri. È una cartella di piccoli file documentati in un formato aperto, così il tuo lavoro resta trasferibile, leggibile e indipendente da qualsiasi singolo strumento o azienda.",
    ownershipPoints: [
      {
        title: "Un formato aperto e documentato",
        body: "Ogni corso è semplice JSON in un formato pubblicato e con versioni, corredato di schemi aperti. Qualsiasi editor, validatore o app per chi impara può leggerlo, oggi o tra molti anni.",
      },
      {
        title: "La licenza la scegli tu",
        body: "I diritti su ciò che scrivi restano tuoi. Concedi in licenza il tuo corso come preferisci, da tutti i diritti riservati al pienamente aperto, e cambia idea in seguito.",
      },
      {
        title: "Condividilo come preferisci",
        body: "Invia la cartella, mettila in un repository, consegnala a un collega o pubblicala. Non c'è nessuna piattaforma nel mezzo e nessun custode che decide chi può usarla.",
      },
      {
        title: "Nessun vincolo",
        body: "Studio è open source sotto licenza MPL-2.0 e gli schemi del formato sono Apache-2.0. Se Asakiri sparisse domani, i tuoi corsi si aprirebbero comunque e resterebbero tuoi.",
      },
    ],
  },
  howItWorks: {
    seo: {
      title: "Come funziona | Asakiri Studio",
      description:
        "Scopri come si crea un corso in Asakiri Studio: riempi una libreria di contenuti con ciò che insegni, aggiungi i media e scrivi lezioni ed esercizi che vi attingono.",
    },
    label: "Asakiri Studio",
    title: "Come nasce un corso",
    lede: "Un corso in Asakiri è un insieme di lezioni che attingono tutte a un'unica libreria condivisa di ciò che insegni. Non c'è un ordine prestabilito in cui lavorare. Riempi prima la libreria, se preferisci, oppure inizia una lezione e aggiungi parole, media ed esercizi man mano. In entrambi i casi, le lezioni e gli esercizi puntano alla stessa libreria invece di conservarne copie proprie.",
    stepsHeading: "Le quattro parti di Studio",
    steps: [
      {
        title: "Una libreria di ciò che insegni",
        body: "Tutto ciò che un corso insegna vive nella libreria: vocaboli, frasi, note di grammatica, ognuno nella propria collezione. Una collezione è una tabella che progetti tu, e ogni voce è una riga con i campi che scegli, come una parola, la sua traduzione e una clip audio. Costruiscila in anticipo, oppure aggiungi contenuti dall'interno di qualsiasi lezione.",
        image: "/mocks/studio-content-library.webp",
        imageAlt:
          "La libreria di Asakiri Studio con voci di vocabolario italiano, immagini ed etichette.",
      },
      {
        title: "I media conservati nel tuo progetto",
        body: "Registra il tuo audio, prendi foto da Unsplash e frasi da Tatoeba, oppure importa file che hai già. Ogni risorsa resta nella cartella del progetto, così il corso funziona offline e viaggia con te. Aggiungi i media in un'area dedicata, oppure nel momento in cui una lezione o una voce ne ha bisogno.",
        image: "/mocks/studio-media-library.webp",
        imageAlt:
          "La libreria multimediale di Asakiri Studio con foto e clip audio e un menu per aggiungere media aperto.",
      },
      {
        title: "Lezioni fatte di parti",
        body: "Raggruppa le lezioni in unità e disponi le parti di ogni lezione nella struttura, poi scrivi ogni parte accanto a un'anteprima dello studente in tempo reale. Una parte è testo formattato, media o un esercizio, e inserisci le voci della libreria invece di ridigitare una parola che hai già.",
        image: "/mocks/studio-lesson-editor.webp",
        imageAlt:
          "L'editor delle lezioni di Asakiri Studio: la struttura del corso con unità e lezioni a sinistra, una parte di testo formattato al centro e un'anteprima dello studente in tempo reale a destra.",
      },
      {
        title: "Esercizi che si correggono da soli",
        body: "Scelta multipla, ascolto, abbinamento, ordine delle parole e altro. Ogni esercizio legge la propria risposta dalle voci della tua libreria, così la voce è la chiave di correzione. Correggi la voce e ogni esercizio che la usa resta giusto.",
        image: "/mocks/studio-exercise-editor.webp",
        imageAlt:
          "Un esercizio di abbinamento in fase di modifica in Asakiri Studio, con voci italiane e inglesi abbinate e un'anteprima in tempo reale.",
      },
    ],
    libraryHeading: "A cosa serve la libreria",
    libraryLede: "La libreria è la parte che si fraintende, quindi eccola chiara. È l'unico posto in cui un corso conserva ciò che insegna. Le lezioni e gli esercizi puntano a essa. Non ne tengono mai una copia propria.",
    libraryPoints: [
      {
        title: "Un'unica fonte di verità",
        body: "Ogni parola, frase e nota vive nella libreria una sola volta. Una lezione che usa una parola la prende da lì invece di conservarne una propria versione.",
      },
      {
        title: "Correggi una volta, corretto ovunque",
        body: "Correggi una traduzione o sostituisci una clip audio nella libreria, e ogni lezione ed esercizio che la usa si aggiorna. Non c'è nulla da rincorrere per tutto il corso.",
      },
      {
        title: "Non è un foglio di calcolo",
        body: "Si presenta come una tabella, ma le righe sono vive. Ogni voce ha un ID stabile, così rinominare una colonna o modificare un valore non rompe mai le lezioni che la referenziano.",
      },
      {
        title: "Gli esercizi leggono da essa",
        body: "Un quiz corregge lo studente rispetto alla voce reale, non rispetto a un testo digitato nella domanda. La libreria è la chiave di correzione, e questo tiene allineati correzione e contenuto.",
      },
    ],
    ctaHeading: "Creane uno tu",
    ctaBody: "Studio è gratuito e gira sulla tua macchina. Scaricalo e parti da dove preferisci, oppure leggi come si incastrano i pezzi nella documentazione.",
    ctaDownload: "Scarica Studio",
    ctaDocs: "Leggi la documentazione",
  },
  about: {
    seo: {
      title: "Perché esiste Asakiri | Asakiri",
      description:
        "Perché esiste Asakiri: un progetto che unisce la profondità di un libro di testo alla pratica di un'app di apprendimento, soprattutto per le lingue più piccole e trascurate.",
    },
    title: "Perché esiste Asakiri",
    lede: "Asakiri è nato da una lingua che volevo imparare e per cui non trovavo un buon punto di partenza.",
    sections: [
      {
        heading: "Le risorse non c'erano",
        body: [
          "Qualche anno fa volevo imparare il georgiano. Ho cercato un corso come avrei fatto per il francese o lo spagnolo e ho trovato pochissimo: qualche libro di testo, alcuni video, sparsi post nei forum.",
          "Il problema è diventato evidente piuttosto in fretta. Se una lingua non ha un gran numero di persone che la studiano, raramente riceve strumenti di apprendimento della stessa qualità.",
          "Per le lingue meno insegnate, chi impara è spesso lasciato a mettere insieme il proprio percorso con quello che riesce a trovare. Mi è sempre sembrato il contrario di come dovrebbe essere. Le lingue con meno risorse sono spesso quelle che più hanno bisogno di persone disposte a costruirle.",
        ],
      },
      {
        heading: "Profondità e pratica in un unico posto",
        body: [
          "Volevo anche un tipo diverso di esperienza di apprendimento.",
          "Ho bisogno della struttura di un buon libro di testo: concetti introdotti nell'ordine giusto, grammatica spiegata come si deve e lezioni che si appoggiano su ciò che è venuto prima.",
          "Ma leggere soltanto non basta. Ho bisogno anche di pratica frequente: esercizi brevi, ripetizione, ascolto, scrittura e occasioni per usare davvero ciò che ho imparato.",
          "La maggior parte degli strumenti per le lingue pende nettamente da una parte. I libri di testo hanno profondità ma poca interazione. Le app sono brave con la pratica, ma spesso saltano la spiegazione e la struttura che ci stanno dietro.",
          "Asakiri è un tentativo di unire le due cose: la profondità di un libro di testo con la pratica di un'app di apprendimento.",
        ],
      },
      {
        heading: "Che cos'è Asakiri",
        body: [
          "Asakiri è una casa per l'apprendimento delle lingue, e ha due lati. Uno è un luogo dove insegnare una lingua con lezioni strutturate, contenuti riutilizzabili, contenuti multimediali ed esercizi interattivi. L'altro è un'app gratuita per impararle.",
          "I corsi restano trasferibili e sotto il controllo di chi li crea. L'obiettivo è permettere a chiunque tenga a una lingua, soprattutto alle lingue più piccole e trascurate, di insegnare un corso che valga la pena seguire, e dare a chi impara un buon modo per studiarlo.",
          "Asakiri è ancora agli inizi. Se questa idea ti interessa, seguici, provalo o aiutaci a costruirlo.",
        ],
      },
    ],
  },
  mission: {
    seo: {
      title: "Missione | Asakiri",
      description:
        "La missione di Asakiri: rendere ogni lingua pienamente apprendibile mettendo nelle mani di tutti gli strumenti per creare, possedere e condividere corsi approfonditi.",
    },
    label: "Missione",
    body:
      "Rendere ogni lingua pienamente apprendibile mettendo nelle mani di tutti gli strumenti per creare, possedere e condividere corsi approfonditi.",
  },
  vision: {
    seo: {
      title: "Visione | Asakiri",
      description:
        "La visione di Asakiri: ogni lingua, in pericolo o trascurata, resta apprendibile e viva, tramandata anziché perduta.",
    },
    label: "Visione",
    body:
      "Ogni lingua, in pericolo o trascurata, resta apprendibile e viva, tramandata anziché perduta.",
  },
  team: {
    seo: {
      title: "Team | Asakiri",
      description:
        "Conosci il piccolo team dietro Asakiri: un fondatore e due gatti dalle idee molto chiare.",
    },
    title: "Il team",
    lede: "Un piccolo team che costruisce Asakiri. Un umano che scrive al computer e due gatti che supervisionano da vicino.",
    members: [
      {
        name: "Alok",
        role: "Fondatore e responsabile",
        bio: "Risponde direttamente a Sole e Mio. Studente di lingue.",
        image: "/team/alok.jpg",
        imageAlt: "Gatto arancione illustrato, la mascotte di Asakiri per Alok",
        linkedin: "https://www.linkedin.com/in/alekoi",
        email: "alok@asakiri.com",
      },
      {
        name: "Sole",
        role: "Responsabile capo della curiosità",
        bio: "Ispeziona ogni nuova scatola, bug e funzionalità prima che possa essere rilasciata.",
        image: "/team/sole.jpg",
        imageAlt: "Gatto bianco e tigrato con grandi occhi verdi che guarda l'obiettivo",
      },
      {
        name: "Mio",
        role: "Responsabile della concentrazione profonda",
        bio: "Detiene il record del team per la più lunga sessione di sguardo fisso ininterrotto.",
        image: "/team/mio.jpg",
        imageAlt: "Primo piano di un gatto tigrato marrone con gli occhi verdi",
      },
    ],
  },
  funding: {
    seo: {
      title: "Finanziamento · Asakiri",
      description:
        "Perché Asakiri è costruito come bene pubblico, cosa esiste oggi e le tappe che i finanziamenti coprirebbero.",
    },
    label: "Finanziamento",
    title: "Finanzia gli strumenti, non il giardino recintato",
    lede: "Asakiri è un'app di creazione aperta, un formato di corso aperto e un'app di apprendimento aperta. I finanziamenti servono a completare questa catena, così un insegnante non dovrà mai riaffittare il proprio corso da una piattaforma.",
    problemHeading: "Il problema",
    problemBody: [
      "La maggior parte delle piattaforme per l'apprendimento delle lingue possiede entrambe le metà: il software e i corsi creati con esso. Un insegnante che passa un anno a costruire un corso non può portarlo altrove, non può leggerlo senza l'app e non può consegnarlo alla propria comunità in una forma che sopravviva all'azienda.",
      "Le piccole comunità linguistiche sono quelle che ci rimettono di più. Una lingua con diecimila parlanti non è un mercato, quindi nessuna piattaforma la sviluppa. Gli insegnanti si ritrovano con una cartella di diapositive, un foglio di calcolo di vocaboli e nessun modo per trasformare l'uno o l'altro in qualcosa con cui chi impara possa esercitarsi.",
    ],
    chainHeading: "Cosa cambia Asakiri",
    chainIntro:
      "Ogni passaggio è separabile e ogni passaggio è sostituibile. Nulla nella catena richiede un account Asakiri, un server Asakiri o il permesso di Asakiri.",
    chain: [
      { step: "Insegnante", note: "Possiede il corso e ne sceglie la licenza" },
      { step: "Asakiri Studio", note: "Editor desktop open source, funziona offline" },
      { step: "Formato di corso aperto", note: "Semplici file JSON, schemi pubblicati" },
      { step: "Git, GitHub, una chiavetta USB", note: "L'archiviazione è una scelta dell'autore" },
      { step: "Asakiri Learner o qualsiasi client", note: "Un formato aperto significa che chiunque può crearne uno" },
    ],
    chainNote:
      "Un corso è una directory di piccoli file JSON sul disco dell'autore. È leggibile in un editor di testo, confrontabile con Git e valido rispetto a schemi che chiunque può verificare.",
    goodsHeading: "I beni pubblici",
    goodsIntro: "Cinque artefatti, ognuno utilizzabile senza gli altri.",
    goods: [
      {
        name: "Software di creazione",
        body: "Asakiri Studio: schede di contenuto, media, testo formattato e sette tipi di esercizio con valutazione, su macOS, Windows e Linux. MPL-2.0.",
        status: "Alpha, rilasciato",
      },
      {
        name: "Formato di corso e schemi",
        body: "La versione 1 del formato su disco, con JSON Schema in modo che validatori, editor e lettori possano essere costruiti su un contratto anziché leggendo il nostro codice sorgente.",
        status: "Pubblicato",
      },
      {
        name: "Applicazione per chi impara",
        body: "Un client open source che legge il formato, esegue gli esercizi e traccia i progressi tramite ID stabili, così riordinare un corso non fa mai perdere il punto a chi impara.",
        status: "In sviluppo",
      },
      {
        name: "Documentazione e strumenti",
        body: "Un sito di documentazione che copre il modello dei dati e il formato di trasmissione, un validatore di corsi e gli importatori deterministici che trasformano fogli di calcolo e documenti in corsi.",
        status: "In parte rilasciato",
      },
      {
        name: "Corsi liberamente distribuibili",
        body: "Gli autori scelgono la propria licenza aperta e pubblicano un corso come tag Git che chiunque può clonare. Nessun controllo di accesso da parte di un registro, nessuna condivisione dei ricavi.",
        status: "Per scelta progettuale",
      },
    ],
    fundingHeading: "Cosa rendono possibile i finanziamenti",
    fundingIntro:
      "Studio è costruito e distribuito. Ciò che manca è l'altro capo della catena e il lavoro di pacchettizzazione che rende entrambi i capi affidabili da installare.",
    milestoneColumns: { name: "Traguardo", ships: "Cosa viene rilasciato", effort: "Impegno" },
    milestones: [
      {
        name: "Applicazione per chi impara, prima versione",
        ships:
          "Un client che apre offline qualsiasi corso in formato v1, esegue tutti e sette i tipi di esercizio e mantiene i progressi collegati a ID stabili. Android e iOS da un'unica base di codice Flutter.",
        effort: "4 mesi",
      },
      {
        name: "Importazione da documenti",
        ships:
          "Trasforma un PDF, un file Word o una presentazione in lezioni e testo formattato, con un passaggio di mappatura che l'autore conferma prima che venga scritto alcunché. Analisi deterministica, senza alcun modello.",
        effort: "2 mesi",
      },
      {
        name: "Creazione di corsi multilingue",
        ships:
          "Il formato memorizza già il testo per ogni lingua. Questo aggiunge l'interfaccia di modifica, così un corso può contenere testo dell'interfaccia in giapponese e inglese e un traduttore può lavorare senza toccare il JSON.",
        effort: "1,5 mesi",
      },
      {
        name: "Firmato, pacchettizzato, installabile",
        ships:
          "Firma del codice su Windows, così le installazioni smettono di dare avvisi, più la pacchettizzazione Flathub e Snap per Linux. Rimuove la barriera più grande al momento dell'installazione per gli insegnanti non tecnici.",
        effort: "1 mese",
      },
      {
        name: "Specifica del formato e strumenti di riferimento",
        ships:
          "Un sito di specifiche con versioni, un validatore da riga di comando autonomo e una libreria di lettura di riferimento, così che terze parti possano costruire un client compatibile senza leggere il codice sorgente di Studio.",
        effort: "1,5 mesi",
      },
    ],
    ctaHeading: "Parla con noi",
    ctaBody:
      "Per sovvenzioni, collaborazioni o qualsiasi cosa richieda una conversazione, l'email è la via migliore. Per un sostegno continuativo, Patreon finanzia lo stesso lavoro nella misura che preferisci.",
    ctaEmail: "Scrivi a alok@asakiri.com",
    ctaPatreon: "Sostieni su Patreon",
    ctaRepo: "Leggi il codice sorgente",
  },

  sponsor: {
    seo: {
      title: "Sponsor | Asakiri",
      description:
        "Asakiri è costruito in modo aperto e finanziato dalle persone che ci credono. Ancora nessuno sponsor, quindi potresti essere il primo.",
    },
    label: "Sponsor",
    title: "Sii il primo.",
    body:
      "Asakiri è costruito in modo aperto ed è reso possibile dalle persone che ci credono. Qui non c'è ancora nessuno sponsor, quindi questo spazio è tutto libero. Sostieni il progetto su Patreon e sarai il primissimo nome della lista.",
    cta: "Diventa sponsor su Patreon",
    partners: {
      title: "Partner",
      body:
        "Asakiri è open source ed è supportato da aziende che offrono gratuitamente i loro strumenti ai progetti open source.",
    },
  },
  privacy: {
    seo: {
      title: "Informativa sulla privacy | Asakiri",
      description:
        "L'informativa sulla privacy di Asakiri. In breve: non raccogliamo i tuoi dati personali.",
    },
    title: "Informativa sulla privacy",
    updated: "Ultimo aggiornamento 10 agosto 2026",
    lede: "In breve: Asakiri non raccoglie i tuoi dati personali.",
    sections: [
      {
        heading: "Cosa raccogliamo",
        body: [
          "Niente. Asakiri non raccoglie, non conserva e non vende le tue informazioni personali. Non serve un account per usare il software e non ti tracciamo sul web.",
        ],
      },
      {
        heading: "I tuoi corsi e contenuti",
        body: [
          "I corsi e i contenuti che crei appartengono a te. Asakiri è costruito per mantenere il tuo lavoro sul tuo dispositivo, così il tuo materiale resta nelle tue mani, non sui nostri server.",
        ],
      },
      {
        heading: "Questo sito web",
        body: [
          "Questo sito è un insieme di pagine semplici e statiche. Non usiamo strumenti di analisi, pubblicità o cookie di tracciamento.",
          "Il nostro fornitore di hosting può conservare i normali log del server per sicurezza e affidabilità, ma non li usiamo per identificarti o profilarti.",
        ],
      },
      {
        heading: "Link ad altri servizi",
        body: [
          "Alcuni link portano ad altri servizi, come GitHub, Discord e Patreon. Questi servizi hanno le proprie informative sulla privacy, e la presente informativa non li copre.",
        ],
      },
      {
        heading: "Modifiche alla presente informativa",
        body: [
          "Se questa informativa dovesse cambiare, aggiorneremo questa pagina insieme alla data qui sopra.",
        ],
      },
      {
        heading: "Contatti",
        body: [
          "Se hai domande sulla privacy, contattaci tramite la nostra community su Discord o GitHub.",
        ],
      },
    ],
  },
  terms: {
    seo: {
      title: "Termini di servizio | Asakiri",
      description:
        "Termini in linguaggio semplice per usare Asakiri e questo sito web.",
    },
    title: "Termini di servizio",
    updated: "Ultimo aggiornamento 10 agosto 2026",
    lede: "Termini in linguaggio semplice per usare Asakiri e questo sito web.",
    sections: [
      {
        heading: "Usare Asakiri",
        body: [
          "Asakiri ti viene fornito per creare corsi di lingua e imparare da essi. Puoi usarlo liberamente per progetti personali, educativi e commerciali.",
        ],
      },
      {
        heading: "I tuoi contenuti",
        body: [
          "Mantieni la proprietà dei corsi e dei contenuti che crei con Asakiri. Sei responsabile di ciò che crei e condividi, e di detenere i diritti su qualsiasi materiale che includi.",
        ],
      },
      {
        heading: "Open source",
        body: [
          "Asakiri Studio è open source. L'uso del codice sorgente è regolato dalla licenza pubblicata nel repository del progetto.",
        ],
      },
      {
        heading: "Nessuna garanzia",
        body: [
          "Asakiri è offerto così com'è, senza garanzie di alcun tipo. Non possiamo garantire che sia privo di errori o sempre disponibile.",
          "Nella misura massima consentita dalla legge, non siamo responsabili di eventuali perdite o danni derivanti dall'uso di Asakiri. Conserva copie di backup del lavoro a cui tieni.",
        ],
      },
      {
        heading: "Modifiche ai presenti termini",
        body: [
          "Potremmo aggiornare i presenti termini man mano che Asakiri cresce. Quando lo faremo, rivedremo questa pagina insieme alla data qui sopra.",
        ],
      },
      {
        heading: "Contatti",
        body: [
          "Se hai domande sui presenti termini, contattaci tramite la nostra community su Discord o GitHub.",
        ],
      },
    ],
  },
  brandKit: {
    seo: {
      title: "Brand | Asakiri",
      description:
        "Come usare il nome, il logo, i colori e i caratteri di Asakiri. Un riferimento rapido per i contributori e per chiunque costruisca su Asakiri.",
    },
    title: "Brand",
    lede: "Un riferimento rapido per usare il nome, il logo, i colori e i caratteri di Asakiri. Se contribuisci o costruisci su Asakiri, parti da qui.",
    logoHeading: "Logo",
    logoBody:
      "Il simbolo di Asakiri è una goccia di rugiada verde illuminata da un sole giallo, per la nebbia mattutina da cui viene il nome. Tienilo sulla sua tessera dagli angoli arrotondati, dagli spazio per respirare e abbinalo al logotipo composto in IBM Plex Sans. Non cambiarne i colori, non ruotarlo e non ridisegnarlo.",
    logoDownload: "Scarica il logo",
    colorHeading: "Colore",
    colorBody:
      "Verde su carta. Il verde del brand porta gli accenti e gli inviti all'azione, l'inchiostro è per il testo e la carta per gli sfondi. I colori sono definiti in OKLCH, la fonte di verità; l'hex è fornito per comodità.",
    typeHeading: "Tipografia",
    typeBody:
      "Due caratteri. Newsreader, un serif caldo, è per il display e i titoli; IBM Plex Sans gestisce il corpo del testo e l'interfaccia. Per il giapponese, si affiancano a Noto Serif JP e Noto Sans JP, con ripiego sui caratteri di sistema Mincho e Gothic.",
    displayRole: "Display · titoli",
    bodyRole: "Corpo del testo · interfaccia e testi lunghi",
    japaneseLabel: "Giapponese",
    voiceHeading: "Voce",
    voice: [
      {
        title: "Calma e semplice",
        body: "Scrivi in modo semplice. Preferisci frasi brevi e dirette al gergo e all'enfasi.",
      },
      {
        title: "Spiega, non vendere",
        body: "Rispetta il tempo e l'intelligenza delle persone. Siamo qui per insegnare e per aiutare altri a insegnare.",
      },
      {
        title: "Discretamente calorosa",
        body: "Un po' di personalità è benvenuta. Prima dei punti esclamativi, scegli la sobrietà.",
      },
    ],
    namingHeading: "Usare il nome",
    namingBody: "Asakiri, scritto 朝霧, significa “nebbia mattutina” in giapponese. È una sola parola, con la A maiuscola, e dà il nome sia al progetto sia al toolkit.",
    dosLabel: "Da fare",
    dontsLabel: "Da non fare",
    dos: [
      "Scrivilo come “Asakiri”, con la A maiuscola.",
      "Usa il simbolo a foglia e il logotipo così come forniti.",
      "Collega ad asakiri.com quando fai riferimento al progetto.",
    ],
    donts: [
      "Non cambiare lo stile, i colori o il disegno del logo.",
      "Non usare il nome o il logo per suggerire approvazione o affiliazione.",
      "Non allungare, ruotare o aggiungere effetti al simbolo.",
    ],
  },
  contact: {
    seo: {
      title: "Contatti | Asakiri",
      description: "Mettiti in contatto con Asakiri via email o attraverso la nostra community.",
    },
    title: "Mettiti in contatto",
    lede: "Domande, idee o feedback? Scrivici via email, oppure trovaci nella community.",
    email: { label: "Email", value: "alok@asakiri.com" },
    discord: { label: "Discord", value: "Unisciti alla community" },
    github: { label: "GitHub", value: "AsakiriLingo/asakiri-studio" },
    linkedin: { label: "LinkedIn", value: "Segui Asakiri" },
  },
  notFound: {
    seo: {
      title: "Pagina non trovata | Asakiri",
      description: "La pagina che cercavi non esiste o è stata spostata.",
    },
    label: "404",
    title: "Questa pagina si è persa.",
    body: "Non siamo riusciti a trovare la pagina che cercavi. Potrebbe essere stata spostata, o non essere mai esistita.",
    homeLink: "Torna alla home",
  },
} satisfies LandingMessages;
