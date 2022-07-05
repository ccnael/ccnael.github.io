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
  username: "lean-cendaña-28593",
  title: "Hi all, I'm Lean Cendaña",
  subTitle: emoji(
    "Experienced IT professional with a demonstrated history of working in the information technology and services industry and has very strong foundation in NetSuite development."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1DZC_ok4sVfFcGzCVSY9kkPtPU2HIQEeu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  // github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/lean-cendaña-30aa56115/",
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
  subTitle: "NetSuite Developer | NetSuite Technical Consultant",
  skills: [
    emoji(
      "⚡ NetSuite SuiteScript API"
    ),
    emoji("⚡ SuiteTalk SOAP/REST Web Services"),
    emoji(
      "⚡ Integration of third party services using REST API"
    )
  ],

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
      skillName: "netsuite",
      fontAwesomeClassname: "fa-solid fa-n"
    },
    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Saint Louis University",
      logo: require("./assets/images/Saint_Louis_University_(Baguio)_logo.jpeg"),
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
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming (NetSuite Development UI & Business Logic)",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "NetSuite Technical Consultant",
      company: "JCurve Solutions (ASX: JCS)",
      companylogo: require("./assets/images/companylogo/jcs.png"),
      date: "Dec 2019 – Present",
      desc: "",
      descBullets: [
        "REST API integrations from different Webstore/eCommerce platforms such as Shopify, Magento, BigCommerce, WooCommerce to NetSuite vice versa with the use of Jitterbit and Pistachio Media ConnectSuite (https://pm.connectsuite.io)",
        "Providing APIs and integrates NetSuite to external party systems (Salesforce etc.)",
        "SuiteScript (1.0, 2.0, 2.1) customizations",
        "Optimization of existing SuiteScripts",
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
      date: "Sep 2020 – Present",
      desc: "",
      descBullets: [
        "Provides technical customizations to Salora US clients",
        "SFTP integrations using user-pass and ssh-key authentication",
        "REST API integrations",
        "Advance PDF template customizations",
      ]
    },
    {
      role: "Freelance Software Engineer (NetSuite)",
      company: "Somnomed",
      companylogo: require("./assets/images/companylogo/somnomed.png"),
      date: "May 2021 – Jul 2021",
      desc: "",
      descBullets: [
        "SuiteScript Customizations (1.0, 2.0, 2.1)",
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
      desc: "Provides technical customizations to WolfRayet UAE clients using SuiteScript 2.0, 2.1",
      descBullets: [

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
        "EDI SFTP Integration",
        "SuiteTalk (REST, SOAP, PHP Toolkit) Web Services integrations",
        "Automatically updates drug information (NetSuite items) using FDB Cloud Connector Web APIs",
        "Provides technical customizations and support to stakeholders and end users",
        "Optimization of existing scripts and converted from SuiteScript 1.0 to SuiteScript 2.1",
      ]
    },
    {
      role: "Technical Consultant",
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
    "Feel free to reach out",
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
