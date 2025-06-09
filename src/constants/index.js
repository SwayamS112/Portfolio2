import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const ABOUT_TEXT = `Full Stack Developer | Computer Science Student\n\n
I specialize in building modern, user-friendly web applications using HTML, CSS, Tailwind, React, MongoDB, MySQL, Express, and Node.js. Passionate about problem-solving and innovation, I am currently working on an AI-based expense categorization system.`;

export const PARA_CONTENT = `Passionate about building efficient, scalable applications. I love exploring new technologies, optimizing performance, and creating seamless user experiences. Always learning, always improving.`;

export const CONTACT_TEXT = "I'm always open to discussions, collaborations, and exciting projects. Feel free to drop me a message!";

export const SEND_MESSAGE = () => {
  const phoneNumber = '9418473400'; 
  const message = 'Hi! I came from your portfolio.';
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(url, '_blank');
};

export const PROJECTS = [
  {
    title: "Event Stalker",
    image: project1,
    description:
      "A platform that helps students and event organizers stay updated on upcoming or ongoing events.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "AI Expense Categorization",
    image: project3,
    description:
      "An AI-driven system that classifies expenses based on keywords and categories for better financial tracking.",
    technologies: ["Node.js", "MongoDB", "ReactJS","TailwindCSS","JavaScript","Express"],
  },
  {
    title: "Quick Search",
    image: project2,
    description:
      "A fast search engine with instant suggestions for better user experience.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
  },
 
];

export const CONTACT = {
  phone: "9418473400",
  email: "soodswayam41@gmail.com",
};
