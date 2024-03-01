export const siteInformations = {
  id: "410544b2-4001-4271-9855-fec4b6a6442a",
  name: "Aurélien Jacob",
  availibility: {
    available: "Disponible / Available now /",
    notAvailable: "Indisponible / Not available for now /",
    status: true,
  },
  navigation: [
    { id: 1, url: "#projects", label: "projects" },
    { id: 2, url: "#about", label: "about" },
    { id: 3, url: "#contact", label: "let's chat" },
  ],
};

export const projects = [
  {
    id: 1,
    client: "Atelier Bunus & Galioto",
    project_name: "Atelier Bunus & Galioto",
    date: "2022",
    type: "Website",
    stack: ["Wordpress", "Figma"],
    thumbnail: {
      url: "/images/projets/atelier_bunus.png",
      alt: "Image de miniature",
    },
    images: [
      { url: "/customers/delba-de-oliveira.png", alt: "Image de miniature" },
    ],
  },
  {
    id: 2,
    client: "Géobassin",
    project_name: "Géobassin",
    date: "2022",
    type: "Website",
    stack: ["Wordpress", "Figma"],
    thumbnail: {
      url: "/image.jpg",
      alt: "Image de miniature",
    },
    images: [
      { url: "/customers/delba-de-oliveira.png", alt: "Image de miniature" },
    ],
  },
  {
    id: 3,
    client: "GTB Conseils",
    project_name: "Gtb Conseils",
    date: "2022",
    type: "Website",
    stack: ["Wordpress", "Figma"],
    thumbnail: {
      url: "/images/projets/gtb_conseils.png",
      alt: "Image de miniature",
    },
    images: [
      { url: "/customers/delba-de-oliveira.png", alt: "Image de miniature" },
    ],
  },
  {
    id: 4,
    client: "LumaCoiffStyle",
    project_name: "LumaCoiffStyle",
    date: "2022",
    type: "Website",
    stack: ["Wordpress", "Figma"],
    thumbnail: {
      url: "/images/projets/luma_coiffstyle.png",
      alt: "Image de miniature",
    },
    images: [
      { url: "/customers/delba-de-oliveira.png", alt: "Image de miniature" },
    ],
  },
  {
    id: 5,
    client: "Transports Daurat",
    project_name: "Transports Daurat",
    date: "2022",
    type: "Website",
    stack: ["Wordpress", "Figma"],
    thumbnail: {
      url: "/images/projets/transports_daurat.jpg",
      alt: "Image de miniature",
    },
    images: [
      { url: "/customers/delba-de-oliveira.png", alt: "Image de miniature" },
    ],
  },
];

export const about = {
  title: "I’m Aurélien, a 29 years-old\nFront-end Developper based in France",
  cta: {
    url: "#about",
    label: "learn more",
  },
  picture: {
    url: "/profil-picture.png",
    alt: "Photo de profil",
  },
  leftText: [
    "Passionate about creation and innovation, made a career change to web development after several years in art framing.",
    "This transition, inspired by my love for art and my desire to create unique experiences, led me to front-end development.",
  ],
  rightText: [
    "Together, we can create exceptional web experiences that will captivate your audience.",
    "My expertise in web performance optimization, accessibility and my proactive nature are at your service to turn your ideas into reality.",
  ],
  centerText: "Ready to turn your concepts into reality?",
};

export const contact = {
  title: "keep in touch",
  overTitle: "let’s talk about your next project",
  cta: {
    url: "/",
    label: "send me an e-mail",
  },
};
