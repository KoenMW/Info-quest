import { Data } from "../types";

const data: Data[] = [
  {
    name: "Programming",
    english:
      "In the first year, you'll focus on C#. This language is ideal for understanding programming fundamentals and exploring patterns like MVC and Factory. In the second year, you'll expand your skills by learning Java and JavaScript.",
    dutch:
      "In het eerste jaar ligt de focus op C#. Deze taal is ideaal om de basisprincipes van programmeren te begrijpen en patronen zoals MVC en Factory te verkennen. In het tweede jaar breid je je vaardigheden uit door Java en JavaScript te leren.",
    gained: false,
    ec: 5,
  },
  {
    name: "Design",
    english:
      "Design is key in software development, focusing on user flows, interaction design, web design, and UI. These elements ensure applications are intuitive and effective.",
    dutch:
      "Design is cruciaal in softwareontwikkeling, met de focus op user flows, interaction design, webdesign en UI. Deze elementen zorgen ervoor dat applicaties intuïtief en effectief zijn.",
    gained: false,
    ec: 3,
  },
  {
    name: "Mathematics",
    english:
      "Mathematics supports logical thinking and problem-solving, essential in programming. You'll use math to understand algorithms, optimize code, and solve complex problems.",
    dutch:
      "Wiskunde ondersteunt logisch denken en probleemoplossing, essentieel in programmeren. Je gebruikt wiskunde om algoritmen te begrijpen, code te optimaliseren en complexe problemen op te lossen.",
    gained: false,
    ec: 4,
  },
  {
    name: "Linux",
    english:
      "Linux is widely used in server environments. You'll work with the CLI to manage files, navigate directories, and configure systems, preparing you for roles in server management.",
    dutch:
      "Linux wordt veel gebruikt in serveromgevingen. Je werkt met de CLI om bestanden te beheren, tussen mappen te navigeren en systemen te configureren, wat je voorbereidt op rollen in serverbeheer.",
    gained: false,
    ec: 2,
  },
  {
    name: "Professional Skills",
    english:
      "You'll develop skills for your career, like preparing for interviews and building a strong LinkedIn profile. These skills help you present yourself professionally.",
    dutch:
      "Je ontwikkelt vaardigheden voor je carrière, zoals voorbereidingen voor interviews en het opbouwen van een sterk LinkedIn-profiel. Deze vaardigheden helpen je om jezelf professioneel te presenteren.",
    gained: false,
    ec: 1,
  },
  {
    name: "Communication",
    english:
      "Learn to present ideas clearly, write professional emails, and draft structured documents. These skills are essential for collaboration and project management.",
    dutch:
      "Leer ideeën duidelijk te presenteren, professionele e-mails te schrijven en gestructureerde documenten op te stellen. Deze vaardigheden zijn essentieel voor samenwerking en projectmanagement.",
    gained: false,
    ec: 2,
  },
  {
    name: "Projects",
    english:
      "Projects let you apply your skills in practice. From the last term of the first year and through the second year, you'll work on projects requiring teamwork and problem-solving.",
    dutch:
      "Projecten laten je je vaardigheden in de praktijk brengen. Vanaf de laatste periode van het eerste jaar en gedurende het tweede jaar werk je aan projecten die teamwork en probleemoplossing vereisen.",
    gained: false,
    ec: 3,
  },
  {
    name: "Final",
    english:
      "Congratulations! You've completed the game and hopefully learned something valuable. Thanks for playing!",
    dutch:
      "Gefeliciteerd! Je hebt het spel voltooid en hopelijk iets waardevols geleerd. Bedankt voor het spelen!",
    gained: false,
    ec: 0,
  },
];

export const getGainedCount = () => {
  return data.filter((item) => item.gained).length;
};

export default data;
