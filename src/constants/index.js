import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Therapies Offered",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  /*
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },*/
];

const technologies = [
  /*
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },*/
];

const experiences = [
  {
    title: "Immersive Therapy Experiances",
    //company_name: "Starbucks",
    //icon: starbucks,
    iconBg: "#383E56",
    date: "EXPERIENCE",
    points: [
      "Curated selection of VR and AR games for various mental health challenges.",
      "Engaging and effective healing journeys.",
      "Addressing conditions such as anxiety, depression, PTSD, and phobias.",
    ],
  },
  {
    title: "Expert Guidance and Assesment",
    //company_name: "Tesla",
    //icon: tesla,
    iconBg: "#E6DEDD",
    date: "EXPERTIZE",
    points: [
      "Connect with licensed therapists and experienced psychiatrists.",
      "Personalized guidance for game-based therapy selection.",
      "Ongoing support and compassionate care throughout your healing process.",
    ],
  },
  {
    title: "Customized Healing Paths",
    //company_name: "Shopify",
    //icon: shopify,
    iconBg: "#383E56",
    date: "CUSTOMIZATION",
    points: [
      "Tailored treatment plans to match your specific condition and progress.",
      "Regular assessments and adjustments for personalized therapy.",
      "Track achievements, overcome challenges, and witness tangible improvements on your path to mental wellness.",
    ],
  },
  {
    title: "Community and Support",
    //company_name: "Meta",
    //icon: meta,
    iconBg: "#E6DEDD",
    date: "COMMUNITY",
    points: [
      "Join a supportive community of individuals on similar healing journeys.",
      "Peer support and shared experiences for a sense of belonging.",
      "Access to additional resources, workshops, and educational content to enhance your mental well-being.",
    ],
  },
];

const testimonials = [
  /*
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },*/
];

const projects = [
  {
    name: "VR Solution",
    description:
     "Embark on groundbreaking mental health treatment with immersive game-based therapy. Our VR solutions provide engaging and effective methods to overcome challenges, making the healing journey enjoyable, tangible, and transformative. Experience a new dimension in therapeutic progress.",
    tags: [
      {
        name: "VR",
        color: "blue-text-gradient",
      },
      {
        name: "VirtualExperience",
        color: "green-text-gradient",
      },
      {
        name: "EnjoyableHealing",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    //source_code_link: "https://github.com/",
  },
  {
    name: "Therapeutic & Psychiatric Solution",
    description:
      "Our platform connects you with licensed therapists and psychiatrists who provide personalized counseling. Whether you're dealing with anxiety, depression, or other challenges, our therapists are here to guide you towards a brighter future.",
    tags: [
      {
        name: "Theraputic",
        color: "blue-text-gradient",
      },
      {
        name: "Proffesional",
        color: "green-text-gradient",
      },
      {
        name: "Connection",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    //source_code_link: "https://github.com/",
  },
  {
    name: "Journaling & Chatbot",
    description:
      "Elevate your experience with our positive chatbot, fostering friendly interactions. Capture and reflect on your thoughts seamlessly using our integrated journal feature. Transform your online journey into a positive and insightful exploration with our user-friendly tools.",
    tags: [
      {
        name: "Friendly-Tools",
        color: "blue-text-gradient",
      },
      {
        name: "PersonalJournaling",
        color: "green-text-gradient",
      },
      {
        name: "ChabotInteraction",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    //source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };