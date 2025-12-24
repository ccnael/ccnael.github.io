/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "leancc",
  title: "Hi all, I'm Lean Cendaña",
  subTitle: emoji(
    "I am an experienced IT professional specializing in NetSuite development and system integrations, with a solid foundation in ERP customization and web technologies. Over the years, I’ve gained extensive experience in designing, developing, and deploying business solutions that streamline operations and enhance productivity."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1lCRDLCgyK0avyQ3r4k8sq66TcITWn6S0/view?usp=sharing", // CV-Lean-Cendaña.docx.pdf // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/lean-cendaña-30aa56115/",
  github: "https://github.com/ccnael",
  gmail: "leancendana1@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Main Skill",
  subTitle: "Development Expertise",
  skills: [
    emoji("🔹 Proficient in NetSuite SuiteScript 2.x/2.1"),
    emoji("🔹 Skilled in building RESTful APIs & integrating third-party services (OAuth 2.0, Token-Based Auth)"),
    emoji("🔹 Hands-on experience with SFTP Integration for secure data exchange (CSV, XML, JSON)"),
    emoji("🔹 Building responsive UIs with React.js and modern JavaScript (ES6+)"),
    emoji("🔹 Styling with Tailwind CSS, Bootstrap, and custom CSS3/HTML5"),
    emoji("🔹 Experience with TypeScript for scalable and maintainable frontend code"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

/* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "suitescript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    {
      skillName: "typescript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "coldfusion",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "yaml",
      fontAwesomeClassname: "fas fa-code"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Saint Louis University",
      logo: require("./assets/images/Saint_Louis_University_(Baguio)_logo.jpg"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "2009  - 2013",
      desc: "",
      descBullets: [
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "System Design and Architecture", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend",
      progressPercentage: "95%"
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior NetSuite Product Developer",
      company: "ERP Success Partners",
      companylogo: require("./assets/images/companylogo/erpsuccesspartners.jpg"),
      date: "Aug 2023 – Present",
      desc: "North America",
      descBullets: [
        "Developing SuiteApps using modern techstack that includes React, TypeScript, Tailwind CSS, shadcn/ui",
        "REST API Record and SuiteQL services implementation using OAuth 2.0 to external party systems",
      ]
    },
    {
      role: "Software Engineer (NetSuite)",
      company: "BioPak",
      companylogo: require("./assets/images/companylogo/BioPak.jpg"),
      date: "Jan 2023 – Jul 2023",
      desc: "Australia",
      descBullets: [
        "NetSuite customizations using SuiteScript 2.1",
        "Developing APIs to third party systems",
        "Optimization of existing SuiteScripts to lessen the governance usage and improve user experience"
      ]
    },
    {
      role: "Senior NetSuite Technical Consultant",
      company: "JCurve Solutions (ASX: JCS)",
      companylogo: require("./assets/images/companylogo/jcs.png"),
      date: "Dec 2019 – Jan 2023",
      desc: "Australia",
      descBullets: [
        "REST API integrations from different Webstore/eCommerce platforms such as Shopify, Magento, BigCommerce, WooCommerce to NetSuite vice versa with the use of Jitterbit and Pistachio Media ConnectSuite (https://pm.connectsuite.io)",
        "Providing APIs and integrates NetSuite to external party systems (Salesforce etc.)",
        "SuiteScript (1.0, 2.0, 2.1) customizations",
        "Optimization of existing SuiteScripts",
        "Building custom HTML suitelets using Bootstrap and other frameworks",
        "SuiteTalk SOAP web service integrations",
        "Developing SuiteApps (BFN standards compliant)",
        "SFTP integration using user-pass and ssh-key authentication methods",
        "Salesforce API exposure",
        "Managing Pistachio Media ConnectSuite server side written in ColdFusion Code",
      ]
    },
    {
      role: "Freelance NetSuite Developer",
      company: "Salora ERP",
      companylogo: require("./assets/images/companylogo/salora.jpeg"),
      date: "Sep 2020 - Dec 2021",
      desc: "Denver Colorado, USA",
      descBullets: [
        "Provides technical customizations to Salora US clients",
        "SFTP integrations using user-pass and ssh-key authentication",
        "REST API integrations",
        "Suitelet UI development using Reactjs library",
        "Advance PDF template customizations",
      ]
    },
    {
      role: "Freelance Software Engineer (NetSuite)",
      company: "Somnomed",
      companylogo: require("./assets/images/companylogo/somnomed.png"),
      date: "May 2021 – Jul 2021",
      desc: "North America",
      descBullets: [
        "SuiteScript Customizations (1.0, 2.0, 2.1)",
        "Building custom HTML suitelets using Bootstrap and other frameworks",
        "Optimization of existing SuiteScripts to lessen the governance usage and improve user experience",
        "SDF customizations deployment to other environments",
      ]
    },
    {
      role: "Freelance NetSuite Developer",
      company: "DocDoc Pte Ltd",
      companylogo: require("./assets/images/companylogo/docdoc.jpeg"),
      date: "Mar 2020 – Apr 2020",
      desc: "Providing APIs and integrates NetSuite to external party systems",
      descBullets: [

      ]
    },
    {
      role: "Freelance NetSuite Developer",
      company: "WolfRayet Group",
      companylogo: require("./assets/images/companylogo/wolfrayet.png"),
      date: "Aug 2019 – Dec 2019",
      desc: "",
      descBullets: [
        "Provides technical customizations to WolfRayet UAE clients using SuiteScript 2.0, 2.1",
        "Building custom HTML suitelets using Bootstrap and other frameworks"
      ]
    },
    {
      role: "NetSuite Developer",
      company: "RBox International Solutions Inc",
      companylogo: require("./assets/images/companylogo/rbox.jpeg"),
      date: "Nov 2018 – Dec 2019",
      desc: "",
      descBullets: [
        "Providing APIs to third party systems",
        "EDI - SFTP Integration",
        "SuiteTalk (REST, SOAP, PHP Toolkit) Web Services integrations",
        "Automatically updates drug information (NetSuite items) using FDB Cloud Connector Web APIs",
        "Provides technical customizations and support to stakeholders and end users",
        "Building custom HTML suitelets using Bootstrap and other frameworks",
        "Optimization of existing scripts and converted from SuiteScript 1.0 to SuiteScript 2.1",
      ]
    },
    {
      role: "Senior Technical Consultant",
      company: "CloudTechERP",
      companylogo: require("./assets/images/companylogo/ct.png"),
      date: "Dec 2014 – Nov 2018",
      desc: "Part of the development team that implements NetSuite to small, medium and global enterprise businesses using SuiteScript, SuiteTalk, SuiteBuilder, SuiteFlow, Advanced PDF, Providing APIs to third party systems, Customization of complex UI and reports for managing large number of data using open source js libraries such as Bootstrap Data tables, Google graphs API etc.",
      descBullets: [
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "For NetSuite development inquiries, collaborations, or project discussions, feel free to reach out:",
  number: "+639062186205",
  email_address: "leancendana1@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
