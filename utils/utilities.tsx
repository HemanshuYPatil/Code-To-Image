export const languages = [
  {
    name: "React",
    icon: "icons/react.svg",
  },
  {
    name: "JavaScript",
    icon: "icons/javascript.svg",
  },
  {
    name: "HTML",
    icon: "icons/html.svg",
  },
  {
    name: "C",
    icon: "icons/c.svg",
  },
  {
    name: "C++",
    icon: "icons/cpp.svg",
  },
  {
    name: "CSS",
    icon: "icons/css.svg",
  },
  {
    name: "Python",
    icon: "icons/python.svg",
  },
  {
    name: "Java",
    icon: "icons/java.svg",
  },
  {
    name: "TypeScript",
    icon: "icons/typescript.svg",
  },
  {
    name: "Text",
    icon: "icons/text.svg",
  },
];

export const getExtension = (language: string) => {
  switch (language) {
    case "JavaScript":
      return ".js";
    case "HTML":
      return ".html";
    case "CSS":
      return ".css";
    case "Python":
      return ".py";
    case "Java":
      return ".java";
    case "TypeScript":
      return ".ts";
    case "Text":
      return ".txt";
    case "React":
      return ".jsx";    
    case "C":
      return ".c"; 
    case "C++":
      return ".cpp";   
      default:
      return ".js";
  }
};

export const themes = ["monokai", "twilight", "terminal"];

export const backgrounds = [
  "linear-gradient(354deg,#ff75b5,#ffb86c)",
  "linear-gradient(140deg, rgb(255, 207, 115), rgb(255, 122, 47))",
  "linear-gradient(90deg,#93f9b9,#1d976c)",
  "linear-gradient(140deg, rgb(142, 199, 251), rgb(28, 85, 170))",
  "linear-gradient(337deg,#654ea3,#da98b4)",
  "#000",
  "#fff",
  "linear-gradient(270deg,#fc6767,#ec008c)",
  "linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248))",
  "linear-gradient(270deg,#514a9d,#24c6dc)",
];

export const initialCode = `Write the Code Here or Paste here`;
