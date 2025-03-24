import { Data, Location, Translations } from "../types";

const data: Data[] = [
  {
    nameEN: "Year 1 - Period 1 & 2",
    nameNL: "Jaar 1 - Periode 1 & 2",
    en: "You've learned the fundamentals of programming, design, and systems. This is your first step towards building cool apps and games.",
    nl: "Je hebt de fundamenten van programmeren, design en systemen geleerd. Dit is jouw eerste stap naar het bouwen van coole apps en games.",
    ec: 30,
  },
  {
    nameEN: "Year 1 - Period 3 & 4",
    nameNL: "Jaar 1 - Periode 3 & 4",
    en: "Propaedeutic diploma completed! Youve worked on hands-on projects that help you put theory into practice. You've also been introduced to Agile working.",
    nl: "Propedeuse is binnen! Je hebt gewerkt aan praktijkgerichte projecten die je helpen de theorie in de praktijk te brengen. Ook heb je kennis gemaakt met Agile werken.",
    ec: 30,
  },
  {
    nameEN: "Year 2 - Period 1 & 2",
    nameNL: "Jaar 2 - Periode 1 & 2",
    en: "You have delved into the theory and, among other things, discovered how to use data to make smart decisions and create apps.",
    nl: "Je hebt je verdiept in de theorie en o.a. ontdekt hoe je gegevens kunt gebruiken om slimme beslissingen en apps te maken.",
    ec: 30,
  },

  {
    nameEN: "Year 2 - Period 3 & 4",
    nameNL: "Jaar 2 - Periode 3 & 4",
    en: "You've explored advanced programming techniques and new technologies. You've also developed further professionally so you're ready for your internship.",
    nl: "Je hebt geavanceerde programmeertechnieken en nieuwe technologieën verkend. Ook op professioneel vlak heb je je verder ontwikkeld zodat je klaar bent om op stage te gaan.",
    ec: 30,
  },
  {
    nameEN: "Year 3 - Internship",
    nameNL: "Jaar 3 - Stage",
    en: "You've completed your internship at an IT company or organization in the Netherlands or abroad and applied your skills in the real world. You've built valuable connections and gained experience!",
    nl: "Je hebt je stage bij een IT-bedrijf of organisatie in binnen- of buitenland volbracht en je vaardigheden toegepast in de echte wereld. Hierbij heb je waardevolle connecties opgebouwd en ervaring opgedaan!",
    ec: 30,
  },
  {
    nameEN: "Year 3 - Minor 1",
    nameNL: "Jaar 3 - Minor 1",
    en: "You've chosen your own path! At the university, you could choose between the Data & AI or Cyber Security minor. You could also choose a minor at another university or abroad. Have you discovered where your passion lies?",
    nl: "Je hebt je eigen pad gekozen! Bij de opleiding kon je kiezen uit de minor Data & AI of Cyber Security. Maar ook was het mogelijk om een minor bij een andere opleiding, hogeschool of in het buitenland te kiezen. Heb jij ontdekt waar jouw passie ligt?",
    ec: 30,
  },
  {
    nameEN: "Year 4 - Minor 2",
    nameNL: "Jaar 4 - Minor 2",
    en: "You've specialized or broadened your knowledge even more! At InHolland, you could choose between the Cloud Computing or UX/Frontend Development minor. You could also choose a minor at another university or abroad. Time to graduate! (maximum 1 of the 2 minor periods)",
    nl: "Je hebt je nog meer gespecialiseerd of verbreed! Bij de opleiding kon je kiezen uit de minor Cloud Computing of UX/Frontend Development. En ook nu was het mogelijk* om een minor bij een andere opleiding, hogeschool of in het buitenland te kiezen. Afstuderen maar! (maximaal 1 van de 2 minorperiodes)",
    ec: 30,
  },
  {
    nameEN: "Year 4 - Graduation",
    nameNL: "Jaar 4 - Afstuderen",
    en: "The last half year you've completed your graduation internship at a company or organization, in the Netherlands or abroad. After writing, submitting, and defending your thesis, you've collected all 240 EC and have your diploma in the pocket! You can call yourself a bachelor in Science and are ready for a follow-up study or a successful career in IT.",
    nl: "Het laatste half jaar heb je bij een bedrijf of organisatie, in binnen- of buitenland je afstudeerstage volbracht. Na het schrijven, inleveren en verdedigen van je scriptie heb je alle 240 EC verzameld en is je diploma in te pocket! Je mag jezelf bachelor in Science noemen en bent klaar voor een vervolgstudie of een succesvolle carrière in de IT.",
    ec: 30,
  },
];

export const dataLocations: Location[] = [
  { x: 4, y: 114 },
  { x: 20, y: 78 },
  { x: 78, y: 114 },
  { x: 101, y: 114 },
  { x: 116, y: 93 },
  { x: 71, y: 60 },
  { x: 17, y: 49 },
  { x: 30, y: 68 },
];

export const translations: Translations = {
  en: {
    scanQR: "scan the qr code to start!",
    connectionLost: "connection lost",
    restarting: "restarting in",
    gameStarting: "game is starting",
    ecsCollected: "EC's collected!",
    pressToStart: "press any button to start!",
    infoQuest: "INFO QUEST!",
    ecsCollect: "EC's collected!",
    orientationH1: "Please rotate your device",
    orientationP:
      "to play this game, please rotate your device to landscape mode",
    finish: "Congratulations! You've collected all 240 EC's!",
    "finish-p": "thanks for playing, I hope you learned something!",
  },
  nl: {
    scanQR: "scan de qr-code om te starten!",
    connectionLost: "verbinding verbroken",
    restarting: "herstarten in",
    gameStarting: "spel begint",
    ecsCollected: "EC's verzameld!",
    pressToStart: "druk op een knop om te starten!",
    infoQuest: "INFO QUEST!",
    ecsCollect: "EC's verzameld!",
    orientationH1: "Draai je apparaat",
    orientationP:
      "om dit spel te spelen, draai je apparaat naar de landschapsmodus",
    finish: "Gefeliciteerd! Je hebt alle 240 EC's verzameld!",
    "finish-p": "bedankt voor het spelen, ik hoop dat je iets hebt geleerd!",
  },
};

export default data;
