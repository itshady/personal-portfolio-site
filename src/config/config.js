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
  message: `I'm Hady Ibrahim, a 5th-year Software and Biomedical Engineering student at McMaster University in Canada. I build systems that have to work under real constraints—latency, memory, reliability, and messy real-world data—because “it runs” only matters if it keeps running when the environment changes. I care a lot about writing code that is maintainable, extensible, and easy to reason about, and I’m especially motivated by the space where software engineering and healthcare intersect. My long-term goal is to develop deployable ML and software systems that are efficient enough to live on-device or at scale, and reliable enough to earn trust in high-stakes settings.`,
  extraMessage: `I’ve been lucky to work across both product engineering and applied ML, and I enjoy roles where I can go from a fuzzy problem to something people can actually use. Early on, I worked at Apple and at Shopify in software-focused roles where I learned the fundamentals of shipping: clean interfaces, thoughtful debugging, and building for the long-term instead of the demo.

  More recently at Shopify, I moved deeper into ML systems work at scale. I delivered a brand-recognition model that raised feature F1 from 12% to 73% and improved the overall model score by 39%, with gains statistically validated via bootstrapped 95% confidence intervals. To make supervision trustworthy, I built a stratified synthetic-data pipeline with LLM annotators and arbitrators, distilled features from a GPT teacher into a Qwen2.5-VL-7B student model, published versioned synthetic train/test sets, and streamlined labeling with scripts plus an interactive CLI. I deployed the model across real-time and streaming services to predict brand for 2+ billion products, modernized data products with historical and “latest” dbt prediction tables, and introduced an LLM-based judge to generate diagnostics and seed GRPO training/evaluation datasets.

  In research, I’ve been working on ultrasound-based microrobot detection for future microrobotic surgery. Ultrasound is rotation-heavy and noisy by default, so robustness and efficiency aren’t optional. I’m benchmarking steerable/equivariant CNN approaches that encode rotational structure into the model so it doesn’t need to relearn the same feature at every orientation, and that work is moving toward a manuscript.

  I’m also pushing the same “real constraints” mindset through audio in my current Capstone. We’re building an on-device selective hearing prototype that can lock onto a chosen speaker in real time without sending audio to the cloud. Our pipeline pairs a noise-robust speaker enrollment module (a compact voice “fingerprint” from a short sample) with a target speech extraction model, and we’re adapting TF-GridNet from a non-causal research design into a causal, streaming variant so it can run continuously for real-time inference.

  Outside the lab, I’ve grown with McMaster’s Formula Electric team from team member to leading a 15-person Software & Embedded Systems group responsible for the car’s software stack. Along the way, I switched onto the Electrical team as well, where I gained hands-on PCB design, bring-up, and testing experience. Formula taught me how to build systems that survive integration, deadlines, and reality—where good documentation, clear interfaces, and rigorous testing make the difference between something that works once and something the whole team can trust.`,
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
      title: 'The Hatchery - Hackathon Winner',
      img: require('../assets/img/projects/thehatchery.png'),
      link: 'https://devpost.com/software/the-hatchery',
      repo: 'https://github.com/itshady/hatchery',
      extraDesc: 'Demo',
      bulletpoints: [
        "Built a multi-agent 'virtual incubator' where a CEO delegates to Marketing and Coding directors; CrewAI + LangChain orchestrate tasks to turn one idea into campaigns and working web/app prototypes.",
        "Shipped a real-time, Sims-style 3D GUI (React Three Fiber) with Socket.IO streaming so users watch agents work, inspect artifacts, and give feedback that loops back into the plan.",
        // "Stabilized agent behavior with standardized prompts, retries, guardrails, and lightweight regression checks—reducing variability and speeding iteration.",
        "Won at DeltaHacks (500+ participants; $3,000 prize pool)."
      ],
    },
    {
      title: 'Keysight - ML, Hardware',
      img: require('../assets/img/projects/keysight.png'),
      link: "https://devpost.com/software/keysight",
      repo: "https://github.com/hackdays-projects/keysight",
      extraDesc: 'Demo',
      bulletpoints: [
        "Developed Keysight, a security system with facial recognition (OpenCV) and voice detection (Google Speech-to-Text API) to identify users and alert for abnormal activity.",
        "Implemented gRPC calls to control a physical locking mechanism via a Raspberry Pi and servo motors.",
        "Integrated full-stack web app using React, Firebase, and Chakra UI for real-time notifications and user management.",
        "Resolved hardware and software challenges, optimizing Raspberry Pi performance and improving face/voice recognition accuracy."
      ],
    },
    {
      title: 'Slacker - Hackathon Winner',
      img: require('../assets/img/projects/slackerchore.png'),
      link: "https://nova-attic-ec5.notion.site/Slacker-Chores-f815d8e00c324d629775a9e773c45f9f",
      repo: "https://github.com/albertlai431/slacker-chore",
      extraDesc: 'Demo',
      bulletpoints: [
        "Created a web application in 24 hours using React and Firebase to randomly assign chores to roommates",
        "Implemented Google authentication so users can login and invite their friends to a \"household\" via email",
        "Won Best Productivity App in hackathon (1st out of 60 total submissions)",
      ],
    },
    {
      title: 'Island Mesh Generator',
      img: require('../assets/img/projects/islandgenerator.png'),
      extraDesc: 'Demo',
      link: "https://github.com/itshady/Island-Generator#video-explanation-of-the-final-product",
      repo: "https://github.com/itshady/Island-Generator",
      bulletpoints: [
        "Generate and visualize 2D meshes, further enriched with island generation and interconnected cities",
        "Focused on design decisions that conformed to SOLID principles",
        "Implemented a pathfinder service that employs graph algorithms (Dijkstra’s and Bellman Ford) for optimal path calculation between cities",
      ],
    },
    {
      title: 'Conway\'s Game of Life, N Player Game?',
      img: require('../assets/img/projects/conways.png'),
      extraDesc: 'Try me',
      link: "https://itshady.github.io/gameoflife/",
      repo: "https://github.com/itshady/gameoflife",
      bulletpoints: [
        "Built a complete implementation of Conway’s Game of Life with a variety of enhanced features",
        "Chose a simple problem in order to concentrate on code quality, OOP, testing strategies, UI frameworks",
        "Implemented the UI layer in vanilla JS and React to understand the purpose of modern frameworks",
      ],
    },
    {
      title: 'WCSS Peer Evaluator',
      img: require('../assets/img/projects/wcsspeereval.png'),
      link: "https://nova-attic-ec5.notion.site/WCSS-Peer-Evaluator-966d035f74694a8d8500d2bd6b8d71d8",
      repo: "https://github.com/itshady/WCSS-Peer-Eval",
      extraDesc: 'Demo',
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
      extraDesc: 'Demo',
      bulletpoints: [
        "Founded and championed this app used by students to support each other academically when working online",
        "Developed a clean, creative interface with HTML/CSS/JS/Bootstrap that shows students a library of notes",
        "Securely hosted an Apache web-app and a Discourse container behind NGINX on digital ocean using Docker Compose",
      ],
    },
    {
      title: 'Netflix Clone',
      img: require('../assets/img/projects/netflix.png'),
      link: "https://netflix-clone-d2169.web.app/",
      extraDesc: 'Try me',
      bulletpoints: [
        "Developed a front-end web-app that replicates the UI/UX experience of Netflix",
        "Used TMDB API to retrieve shows/movies and deployed the app using Google Firebase",
        "Did this to learn and practice web development with React.",
      ],
    },
    {
      title: 'Instagram Clone',
      img: require('../assets/img/projects/instagram.png'),
      link: "https://instagram-clone-aed2e.web.app/",
      extraDesc: 'Try me',
      bulletpoints: [
        "Developed a full-stack web-app that has the same functionality and features as Instagram",
        "Used a NoSQL database, ensuring scalability as posts increase, and Firebase to deploy the app",
        "Sign up using any email, username and password to test out the app",
        "Did this to learn and practice web development with React.",
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
      title: 'Retina Scanner',
      img: require('../assets/img/projects/RetinaScanner.png'),
      link: "https://nova-attic-ec5.notion.site/Retina-Scanner-9975db78381a4c4da096effdd600722e?pvs=4",
      repo: "https://github.com/itshady/retina-scanner",
      bulletpoints: [
        "Developed and trained a machine learning model to detect the severity of a person’s diabetic retinopathy",
        "ML model had 74% accuracy and could differentiate between 3 severity categories",
        "Created a mobile app to make this prescreening technology accessible in locations where clinicians are sparse",
      ],
    },
    {
      title: 'A Breath of Fresh Air, Showcase Winner',
      img: require('../assets/img/projects/2p03c.png'),
      link: "https://drive.google.com/file/d/1fS0wRi-IYZdUhkh5s4fm8vFhFBxedgZk/view",
      // repo: "",
      bulletpoints: [
        "Selected to present our findings at the McMaster iBioMed Showcase",
        "Developed and analyzed a Mathematical Simbiology model for a novel lung cancer treatment using synthetic biology approaches",
        "Investigated cell-to-cell communication via quorum sensing pathways for localized drug release",
      ],
    },
    // {
    //   title: 'Genetic Analysis of R',
    //   img: require('../assets/img/projects/rlogo.png'),
    //   // link: "https://itshady.github.io/gameoflife/",
    //   // repo: "https://github.com/itshady/gameoflife",
    //   bulletpoints: [
    //     "Developed a modular program in R to determine global differential gene expression between ovarian cancer cell lines",
    //   ],
    // },
    {
      title: 'Hips Don\'t Lie',
      img: require('../assets/img/projects/hipimplant.png'),
      link: "https://nova-attic-ec5.notion.site/Project-2-Full-Breakdown-3eebcadee85e4a42852a0ba42baceed2?pvs=4",
      // repo: "https://github.com/itshady/gameoflife",
      bulletpoints: [
        "Brainstormed biocompatible materials for the femoral stem and plastic liner that reduce polyethylene debris and promote bone regrowth",
        "Designed the hip implant and sketched the dimensions",
        "3D modelled and printed the hip implant",
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
    // { 
    //   img: require("../assets/img/leadership/fsae_1.JPG"), 
    //   label: "FSAE Formula Electric 2023", 
    //   paragraph: "Michigan International Speedway" 
    // },
    // { 
    //   img: require("../assets/img/leadership/fsae_2.jpeg"), 
    //   label: "FSAE Formula Electric 2023", 
    //   paragraph: "Michigan International Speedway" 
    // },
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
    { name: "C / C++", value: 65 },
    { name: "Go", value: 70 },
    { name: "Java", value: 90 },
    { name: "React Native", value: 75 },
    { name: "JavaScript / TypeScript / React", value: 80 },
    { name: "HTML / CSS", value: 75 },
    { name: "SQL", value: 75 },
    { name: "Git", value: 85 },
    { name: "Swift", value: 90 },
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
    { name: "Communication", value: 90 },
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
      role: 'Machine Learning Engineering Intern',
      company: "Apple",
      companylogo: require('../assets/img/shopify.png'),
      date: 'May 2025 – August 2025',
    },
    {
      role: 'Machine Learning Research Assistant',
      company: "McMaster University",
      companylogo: require('../assets/img/mcmaster-logo.jpeg'),
      date: 'September 2023 – Present',
    },
    {
      role: 'Software Engineer Intern',
      company: "Apple",
      // team: "Team: Deploys",
      customWidth: "40%",
      companylogo: require('../assets/img/words-apple-logo.png'),
      date: 'May 2024 – August 2024',
    },
    {
      role: 'Software Developer Intern',
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
    {
      role: 'Teaching Assistant',
      company: "McMaster University",
      // team: "IBEHS 1p10, SFWRENG 2da4, COMPSCI 1md3",
      companylogo: require('../assets/img/mcmaster-logo.jpeg'),
      date: 'September 2023 – Present',
    },
  ]
}

const extracurriculars = {
  show: true,
  id: "extracurriculars",
  heading: "Extracurriculars",
  data: [
    {
      role: 'Software Team Lead & LV Electronics Member',
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
      date: 'April 2023 – May 2024',
    },
    {
      role: 'Inpatient Pediatric Volunteer',
      team: "McMaster Children's Hospital",
      customWidth: "100%",
      company: "McMaster Children's Hospital",
      link: "https://www.hamiltonhealthsciences.ca/mcmaster-childrens-hospital/",
      companylogo: require('../assets/img/mcmaster_children_hospital.png'),
      date: 'January 2024 – Present',
    },
    {
      role: 'Physics Youtube Channel',
      // team: "Youtube Channel",
      // customWidth: "75%",
      company: "Youtube",
      link: "https://www.youtube.com/watch?v=gpg1KvaFjY4&list=PL4FYN04aVM6a_OId7Nmn6fbew673pcDew&ab_channel=HadyIbrahim",
      companylogo: require('../assets/img/youtube.png'),
      date: 'September 2021 – January 2022',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, projects, extracurriculars, biomedicalprojects };
