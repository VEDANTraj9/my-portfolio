import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
const Info = {
    name: "Manikant~Kumar",
    stack: ["Software Engineer", "Full Stack Developer", "Competitive Programmer", "Open Source Contributor"],
    bio: "I'm a passionate Java Full Stack Developer specializing in building efficient, scalable, and secure web applications. I focus on delivering high-quality solutions that exceed client expectations. Let’s connect and build something amazing together!'"
}



const ProjectInfo = [
    {
        title: "CATCH THE FAKE App",
        desc: "CATCH THE FAKE is an e-commerce web application that offers a seamless shopping experience with features like product browsing, searching, filtering, and a secure checkout process. Built with React, TailwindCSS, Redux, Heroicons, and HeadlessUI, it provides a modern and responsive design. The app includes user authentication, allowing users to create accounts, log in, and manage their profiles. With real-time updates and a user-friendly interface, CATCH THE FAKE combines functionality with style for an enjoyable online shopping experience.",
        image: "P1.png",
        live: true,
        technologies: ["React", "Tailwind", "Redux"],
        link: "https://catchthefake.netlify.app/",
        github: "https://github.com/VEDANTraj9/CATCH-THE-FAKE.git"
    },
    {
        title: "Animated Portfolio",
        desc: "This Animated Portfolio is a visually engaging and interactive personal website built using React and GSAP (GreenSock Animation Platform). It showcases my skills, projects, and experiences through smooth animations and dynamic transitions. The portfolio features sections for about me, skills, projects, and contact information, all enhanced with GSAP's powerful animation capabilities. The design is fully responsive, ensuring an optimal viewing experience across all devices. This portfolio not only highlights my technical expertise but also demonstrates my creativity and attention to detail.",
        image: "P2.png",
        live: true,
        technologies: ["React", "Email", "Tailwind", "Tabler-Icons", "GSAP"],
        link: "https://manikant1portfolio.netlify.app/",
        github: "https://github.com/VEDANTraj9/Animated-Portfolio.git"
    },
    {
        title: "Amazon Website Clone",
        desc: "Amazon Website Clone is a full-stack web application that replicates the core features of Amazon, including user authentication, product browsing, searching, filtering, and a secure checkout process. The front end is built with React, TailwindCSS, Heroicons, and Firebase, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, search for products, add items to their cart, and complete purchases. The app features real-time updates and a user-friendly interface. Amazon Website Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: "P3.png",
        live: true,
        technologies: ["React", "Tailwind", "Tabler-Icons"],
        link: "https://myamazonprojects.netlify.app/",
        github: "https://github.com/VEDANTraj9/Amazon-Clone.git"
    },
    {
        title: "Employee Management System",
        desc: "Employee Management System is a full-stack web application that allows users to manage employee information, including adding, editing, and deleting employees. The front end is built with React, Bootstrap, while the back end uses Node.js, Express, and PostgresSQL. Users can create an account, log in, add new employees, and view their past employees on a map. The app features a clean, modern design with interactive maps and a user-friendly interface. Employee Management System combines functionality with style, making it easy and enjoyable to record and share travel memories.",
        image: "P4.png",
        live: true,
        technologies: ["React", "Node.js", "Bootstrap","Firebase", "PostgresSQL"],
        link: "https://emsproject01.netlify.app/",
        github: "https://github.com/VEDANTraj9/Employee-Management-System.git"
    },
    {
        title: "Email Reply Generator",
        desc: "Email Reply Generator is a full-stack web application that allows users to generate email replies based on their input. The front end is built with React, TailwindCSS, and Heroicons, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, and generate email replies. The app features real-time updates and a user-friendly interface. Email Reply Generator provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: "P5.png",
        live: true,
        technologies: ["React", "Springboot", "Tailwind", "Heroicons", "Firebase"],
        link: "https://email-writer-assistant.netlify.app/",
        github: "https://github.com/VEDANTraj9/Email-Assistant-Project.git"
    },
    {
        title: "Birthday Clone",
        desc: "Birthday Clone is a simple web application that allows users to view and manage a list of birthdays. Built with React, TailwindCSS, and Ace Editor, the app features a clean and modern design with a user-friendly interface. Users can add new birthdays, view existing ones, and delete entries as needed. The app provides real-time updates and a seamless user experience. Birthday Clone combines functionality with style, making it easy and enjoyable to keep track of important dates.",
        image: "P6.png",
        live: true,
        technologies: ["React", "Tailwind", "Ace Editor"],
        link: "https://birthdayspi.netlify.app/",
        github: "https://github.com/VEDANTraj9/Birthday-Clone.git"
    }
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "SASS", "JavaScript", "React JS", "Angular", "Redux", "Tailwind CSS", "GSAP", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: ["Springboot", "Node JS", "Express JS", "MySQL", "MongoDB", "Firebase", "PostgresSQL"]
    },
    {
        title: "Languages",
        skills: ["Java", "JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass", "Spring Tool Suite"]
    }
]
const socialLinks = [
    { link: "https://github.com/VEDANTraj9", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/manikant-kumar-900158211/", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/official_vedent09/", icon: IconBrandInstagram },
    { link: "https://www.youtube.com/ManikantKumar-b4y", icon: IconBrandYoutube },
    { link: "https://leetcode.com/u/vedantraj9/", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
    {
        role: "Web Developer",
        company: "SkillCraft Technology ",
        date: "May 2025 - Sep 2025",
        desc: "I led software development with Spring Boot, React, and Angular, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
        skills: ["Springboot", "React JS", "Angular", "Node JS", "MySQL", "MongoDB", "Microservices"]
    },
    {
        role: "Full Stack Developer Intern",
        company: "Ducat Education",
        date: "Feb 2025 - Dec 2025",
        desc: " I leveraged my skills in Java, Selenium, automation testing, and MySQL to design and implement automated testing frameworks, ensuring robust software validation. I optimized database performance and reliability, and collaborated with cross-functional teams to enhance system operations and ensure seamless integration.",
        skills: ["Java", "MySQL", "Hibernate", "Selenium", "Jenkins", "JIRA", "Automation Testing"]
    }
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, Slugs };