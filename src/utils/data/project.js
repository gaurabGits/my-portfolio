export const projects = [
  {
    id: 1,
    title: "PizzaSlice",
    image: "../../../SliceHouse.png",
    description:
      "A full-stack pizza ordering platform developed as part of my Oasis Infobyte remote internship, focused on pizza browsing, custom pizza creation, authentication, and order management.",
    category: "Oasis Infobyte Internship",
    status: "in progress",  // was "In Development"
    internship: {
      company: "Oasis Infobyte",
      type: "Remote",
    },
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
    ],
    github: "https://github.com/gaurabGits/OIBSIP",
    demo: "https://slicepizzahouse.vercel.app/",
    features: [
      "Pizza browsing with available menu items",
      "Custom pizza builder with selectable toppings and options",
      "User registration and JWT-based authentication",
      "Cart and order management",
      "Responsive interface for desktop and mobile",
    ],
  },

  {
    id: 2,
    title: "AksharShelf",
    image: "../../../Akshershelf.png",
    description:
      "A full-stack web reading platform for discovering, reading, and managing books with personalized recommendations and user reviews.",
    category: "Full-Stack App",
    status: "in progress",  // was "In Development"
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
    ],
    github: "https://github.com/gaurabGits/AksharShelf.git",
    demo: "https://aksharshelf.vercel.app/",
    features: [
      "Book discovery and digital bookshelf management",
      "User authentication with JWT-based login system",
      "Personalized book recommendations",
      "User reviews and rating system",
      "Admin dashboard for content and user management",
    ],
  },

  {
    id: 3,
    title: "Meetra",
    image:
      "../../../../meetra.png",
    description:
      "A real-time video conferencing application enabling multi-user audio and video communication with low-latency streaming.",
    category: "Team Project",
    status: "shutdown",  // was "team breaks (break in development)"
    tech: [
      "React",
      "Node.js",
      "WebRTC",
      "Mediasoup",
      "Socket.io",
    ],
    github: "https://github.com/Techy-Code1/meetra",
    docs: "",
    features: [
      "Team project currently in development",
      "My contribution: WebRTC, Mediasoup, and Socket.io",
      "Real-time audio and video communication using WebRTC",
      "Scalable multi-user conferencing with Mediasoup SFU",
      "Socket.io-based signaling for room and peer management",
      "Screen sharing for collaboration and presentations",
    ],
  },
];