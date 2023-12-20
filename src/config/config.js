// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Hady",
  middleName: "",
  lastName: "Ibrahim",
  message: "Passion in every line, maintainability in every design.", //"Code-driven, solution-focused, passion-infused.",
  icons: [
    {
      image: "fa-github",
      url: "https://www.github.com/itshady",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/hady-ibrahim",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "config" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../config/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "config" directory
//     i.e resume: require("../config/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../config/hadyibrahim.jpg"),
  imageSize: 375,
  message: `I'm Hady Ibrahim, a 3rd year software and biomedical engineering student at McMaster University in Canada. I'm incredibly passionate about applying my engineering skills to solve real-world problems and make a positive impact on people's lives. I believe in crafting code that is not only functional but, more importantly, prioritizes maintainability and ease of extensibility. My ultimate goal is to harness my passion for continuous learning to drive innovation in the field of engineering.`,
  extraMessage: `My journey in engineering has been shaped by a diverse range of experiences, each contributing to my growth. One of the standout chapters was my time at Microsoft, where I had the privilege of gaining hands-on experience in full-stack development. During this period, I was involved in creating a website and chatbot for an internal big data analytics tool. This opportunity allowed me to delve deep into the world of software development and product management. I learned new programming languages and gained insights into the entire product lifecycle, from initial development to production deployment. This experience not only expanded my skill set but also provided me with a profound understanding of the tech industry's nuances.
  
  In addition to my professional experiences, I'm actively involved in extracurricular activities. At McMaster University's Formula Electric team, I've played a pivotal role, advancing from a team member to leading a team of 15 dedicated individuals responsible for designing and manufacturing the suspension and steering system for our 1/4 scale electric Formula 1-style race car. My responsibilities included optimizing suspension dynamics, bellcrank design, and conducting structural tests to ensure safety and performance. This experience emphasized the importance of precision engineering, teamwork, and rigorous testing in developing high-performance vehicles.`,
  // resume: "https://drive.google.com/file/d/1JXLAKTW1MVO1XMSxV5Oy1MRn4vbLJjOC/view?usp=sharing",
  resume: require("../config/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project length will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  calendar: true,
  heading: "Projects",
  gitHubUsername: "itshady",
  reposLength: 6,
  specificRepos: [],
  // specificRepos: ["Island-Generator", "gameoflife", "WCSS-Peer-Eval", "intellectus2-0"],
};

// Personal Projects SECTION
const projects = {
  show: true,
  heading: "Personal Projects",
  data: [
    {
      title: 'Slacker, DeltaHacks IX Winner',
      img: require('../assets/img/projects/slackerchore.png'),
      link: "https://nova-attic-ec5.notion.site/Slacker-Chores-f815d8e00c324d629775a9e773c45f9f",
      repo: "https://github.com/albertlai431/slacker-chore",
      bulletpoints: [
        "Created a web application in 24 hours using React and Firebase to randomly assign chores to roommates",
        "Implemented Google authentication so users can login and invite their friends to a \"household\" via email",
        "Won Best Productivity App in hackathon (1st out of 60 total submissions)",
      ],
    },
    {
      title: 'Conway\'s Game of Life, N Player Game?',
      img: require('../assets/img/projects/conways.png'),
      link: "https://itshady.github.io/gameoflife/",
      repo: "https://github.com/itshady/gameoflife",
      bulletpoints: [
        "Built a complete implementation of Conway’s Game of Life with a variety of enhanced features",
        "Chose a simple problem in order to concentrate on code quality, OOP, testing strategies, UI frameworks",
        "Implemented the UI layer in vanilla JS and React to understand the purpose of modern frameworks",
      ],
    },
    {
      title: 'Island Mesh Generator',
      img: require('../assets/img/projects/islandgenerator.png'),
      link: "https://github.com/itshady/Island-Generator#video-explanation-of-the-final-product",
      repo: "https://github.com/itshady/Island-Generator",
      bulletpoints: [
        "Generate and visualize 2D meshes, further enriched with island generation and interconnected cities",
        "Focused on design decisions that conformed to SOLID principles",
        "Implemented a pathfinder service that employs graph algorithms (Dijkstra’s and Bellman Ford) for optimal path calculation between cities",
      ],
    },
    {
      title: 'WCSS Peer Evaluator',
      img: require('../assets/img/projects/wcsspeereval.png'),
      link: "https://nova-attic-ec5.notion.site/WCSS-Peer-Evaluator-966d035f74694a8d8500d2bd6b8d71d8",
      repo: "https://github.com/itshady/WCSS-Peer-Eval",
      bulletpoints: [
        "Used at West Carleton SS by over 1300 students in order to get valuable feedback from their peers",
        "Developed a UI/UX friendly interface that shows teachers their associated students and projects",
      ],
    },
    {
      title: 'Intellectus',
      img: require('../assets/img/projects/intellectus.png'),
      link: "https://nova-attic-ec5.notion.site/Intellectus-ca-53c6573802d1497d96ecd621032adf1c",
      repo: "https://github.com/itshady/intellectus2-0",
      bulletpoints: [
        "Founded and championed this app used by students to support each other academically when working online",
        "Developed a clean, creative interface with HTML/CSS/JS/Bootstrap that shows students a library of notes",
        "Securely hosted an Apache web-app and a Discourse container behind NGINX on digital ocean using Docker Compose",
      ],
    },
  ]
}

// Biomedical Projects SECTION
const biomedicalprojects = {
  show: true,
  heading: "Biomedical Projects",
  data: [
    {
      title: 'Slacker, DeltaHacks IX Winner',
      img: require('../assets/img/projects/slackerchore.png'),
      link: "https://nova-attic-ec5.notion.site/Slacker-Chores-f815d8e00c324d629775a9e773c45f9f",
      repo: "https://github.com/albertlai431/slacker-chore",
      bulletpoints: [
        "Created a web application in 24 hours using React and Firebase to randomly assign chores to roommates",
        "Implemented Google authentication so users can login and invite their friends to a \"household\" via email",
        "Won Best Productivity App in hackathon (1st out of 60 total submissions)",
      ],
    },
    {
      title: 'Conway\'s Game of Life, N Player Game?',
      img: require('../assets/img/projects/conways.png'),
      link: "https://itshady.github.io/gameoflife/",
      repo: "https://github.com/itshady/gameoflife",
      bulletpoints: [
        "Built a complete implementation of Conway’s Game of Life with a variety of enhanced features",
        "Chose a simple problem in order to concentrate on code quality, OOP, testing strategies, UI frameworks",
        "Implemented the UI layer in vanilla JS and React to understand the purpose of modern frameworks",
      ],
    },
  ]
}

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    'My journey has contained many leadership opportunities, each contributing to my growth as both a leader and a team player. Highlights of these experiences can be seen below:<br><br>• Team Lead for MAC Formula Electric’s Suspension & Steering sub-team, leading a team of 12 members in designing, justifying, and manufacturing components for a 1/4 scale formula-style race car<br>• Microsoft Student Ambassador, organizing an event for 40 high school students to teach them how to create and host websites using various GitHub tools<br>• Panelist at McMaster\'s Leadership Development Conference and my high school\'s Computer Science Panel, sharing insights and expertise<br>• Founded and led my high school\'s inaugural team in a sumobot competition at Ontario Tech University, earning the "Best New Entry" award for our innovative use of the gyro sensor<br>• Co-captain and Head Driver of FRC Team 6110, guiding a team of 40 members after transferring due to funding cuts<br>• Head Driver and Mechanical/Electrical Lead of FIRST Robotics Team 5076, developing leadership and technical skills in a robotics context',
  images: [
    { 
      img: require("../assets/img/leadership/fsae_1.JPG"), 
      label: "FSAE Formula Electric 2023", 
      paragraph: "Michigan International Speedway" 
    },
    { 
      img: require("../assets/img/leadership/fsae_2.jpeg"), 
      label: "FSAE Formula Electric 2023", 
      paragraph: "Michigan International Speedway" 
    },
  ],
  // imageSize: {
  //   width:"615",
  //   height:"450"
  // }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  codingSkills: [
    { name: "Python", value: 90 },
    { name: "C / C++", value: 55 },
    { name: "Go", value: 65 },
    { name: "Java", value: 90 },
    { name: "JavaScript / TypeScript / React", value: 80 },
    { name: "HTML / CSS", value: 75 },
    { name: "SQL", value: 75 },
    { name: "Git", value: 85 },
  ],
  technicalSkills: [
    { name: "MatLab", value:65 },
    // { name: "Solidworks", value: 75 },
    { name: "VS Code", value: 85 },
    { name: "Visual Studio", value: 65 },
    { name: "MS Word / Google Docs", value: 95 },
    { name: "MS Powerpoint / Google Slides", value: 95 },
    // { name: "MS Excel / Google Sheets", value: 75 },
    { name: "Teams / Slack", value: 90 },
  ],
  softSkills: [
    { name: "Communication", value: 85 },
    { name: "Leadership", value: 95 },
    { name: "Teamwork", value: 90 },
    { name: "Creativity", value: 95 },
    { name: "Time Management", value: 70 },
    { name: "Adaptability", value: 90 },
    { name: "Conflict management", value: 55 },
    { name: "Problem Solving", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Software Engineering, or Embedded Software Engineering internship opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "hadykibrahim@gmail.com",
};

const experiences = {
  show: true,
  id: "experience",
  heading: "Work Experience",
  data: [
    {
      role: 'Teaching Assistant',
      company: "McMaster University",
      // team: "IBEHS 1p10, SFWRENG 2da4, COMPSCI 1md3",
      companylogo: require('../assets/img/mcmaster.png'),
      date: 'September 2023 – Present',
    },
    {
      role: 'Software Developer Intern',// Here Add Company Name
      company: "Shopify",
      // team: "Team: Deploys",
      companylogo: require('../assets/img/shopify.png'),
      date: 'May 2023 – August 2023',
    },
    {
      role: 'Backend Developer Intern',
      company: "Shopify",
      // team: "Mobile Tooling",
      companylogo: require('../assets/img/shopify.png'),
      date: 'May 2022 – August 2022',
    },
  ]
}

const extracurriculars = {
  show: true,
  id: "extracurriculars",
  heading: "Extracurriculars",
  data: [
    {
      role: 'Software Team Lead',
      team: "MAC Formula Electric",
      customWidth: "75%",
      company: "MAC Formula Electric",
      link: "https://macformularacing.com/",
      companylogo: require('../assets/img/formulaelectric.png'),
      date: 'September 2022 – Present',
    },
    {
      role: 'Software Developer',
      team: "McMaster Engineering Society",
      // customWidth: "75%",
      company: "McMaster Engineering Society",
      link: "https://www.macengsociety.ca/",
      companylogo: require('../assets/img/mes.png'),
      date: 'September 2023 – Present',
    },
    {
      role: 'Physics Youtube Channel',
      // team: "Youtube Channel",
      // customWidth: "75%",
      company: "Youtube",
      link: "https://www.youtube.com/watch?v=gpg1KvaFjY4&list=PL4FYN04aVM6a_OId7Nmn6fbew673pcDew&ab_channel=HadyIbrahim",
      companylogo: require('../assets/img/youtube.png'),
      date: 'September 2022 – January 2023',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, projects, extracurriculars, biomedicalprojects };
