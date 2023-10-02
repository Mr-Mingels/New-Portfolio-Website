import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import reactjs from "../assets/reactjs.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import git from "../assets/git.png";
import postgresql from '../assets/postgreSQLLogo.png'
import fotoFolioImg from '../assets/fotoFolioScreenShot.png'
import puckMasterImg from '../assets/puckMasterScreenShot.png'
import chatterSphereImg from '../assets/chatterSphereDesktopScreenShot.png'
import finTrackImg from '../assets/finTrackDesktopScreenShot.png'
import virtualEmporiumImg from '../assets/virtualEmporiumImage.png'

export const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "PostgreSQL",
      icon: postgresql
    },
];

export const projects = [
  {
    projectImg: fotoFolioImg,
    projectLiveLink: 'https://foto-folio.vercel.app/',
    projectGitHubLink: 'https://github.com/Mr-Mingels/FotoFolio',
    projectTitle: 'FotoFolio',
    projectDesc: "FotoFolio is a powerful and visually engaging photo gallery application, designed and developed as a simple and user friendly application.",
    projectFirstTag: '#react',
    projectSecondTag: '#node.js',
    projectThirdTag: ''
  },
  {
    projectImg: puckMasterImg,
    projectLiveLink: 'https://puck-master.vercel.app/',
    projectGitHubLink: 'https://github.com/Mr-Mingels/Puck-Master',
    projectTitle: 'Puck-Master',
    projectDesc: "Puck-Master is a React-based virtual air hockey game that offers interactive gameplay against an AI opponent, all within your browser!",
    projectFirstTag: '#react',
    projectSecondTag: '#ai',
    projectThirdTag: ''
  },
  {
    projectImg: chatterSphereImg,
    projectLiveLink: 'https://chatter-sphere.onrender.com/',
    projectGitHubLink: 'https://github.com/Mr-Mingels/Chatter-Sphere',
    projectTitle: 'Chatter Sphere',
    projectDesc: "Chatter Sphere is a feature-rich full-stack application that facilitates real-time global communication, fostering easier and more engaging connections.",
    projectFirstTag: '#react',
    projectSecondTag: '#mongodb',
    projectThirdTag: '#node.js'
  },
  {
    projectImg: finTrackImg,
    projectLiveLink: 'https://fin-track.onrender.com/',
    projectGitHubLink: 'https://github.com/Mr-Mingels/FinTrack',
    projectTitle: 'Fin Track',
    projectDesc: "Fin Track is an application for easy personal finance management, offering dynamic budget planning and expense tracking to simplify your financial life.",
    projectFirstTag: '#react',
    projectSecondTag: '#postgresql',
    projectThirdTag: '#node.js'
  },
  {
    projectImg: virtualEmporiumImg,
    projectLiveLink: 'https://virtual-emporium.onrender.com/',
    projectGitHubLink: 'https://github.com/Mr-Mingels/Virtual-Emporium',
    projectTitle: 'Virtual Emporium',
    projectDesc: "The Virtual Emporium is a full-stack clothing store application, designed for simplicity, with a clean and easy-to-navigate user interface.",
    projectFirstTag: '#react',
    projectSecondTag: '#mongodb',
    projectThirdTag: '#node.js'
  },

]