// profiles.ts

export interface Profile {
  id: number;
  name: string;
  title: string;
  shortBio: string;
  bio: string;
  image: string;
  avatar: string;
  social: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

const profiles: Profile[] = [
  {
    id: 1,
    name: "Ada Lovelace",
    title: "Lead Software Engineer",
    shortBio: "Pioneer of computer programming and poetic algorithms.",
    bio: `## Visionary of the Analytical Engine\n\nAda Lovelace is celebrated as the world's first computer programmer. Her collaboration with Charles Babbage on the Analytical Engine was not just technical, but deeply imaginative. Ada foresaw a future where machines could go beyond mere calculation, inspiring generations to dream bigger.\n\n### Early Life and Education\n\nBorn into a world of poetry and mathematics, Ada was the daughter of Lord Byron and Annabella Milbanke. Her mother's encouragement of mathematics, combined with her father's poetic legacy, gave Ada a unique perspective on logic and creativity. This blend would later define her approach to computing.\n\n### The Analytical Engine\n\nWorking with Babbage, Ada translated and expanded on Luigi Menabrea's notes, adding her own visionary commentary. Her notes included what is now recognized as the first algorithm intended for a machine, making her the first computer programmer.\n\n- **Algorithmic thinking**: Ada's notes described looping and conditional logic.\n- **Imagination**: She predicted computers could compose music and create art.\n\n### Legacy and Inspiration\n\nAda's legacy is not just in her technical achievements, but in her ability to see the poetry in logic. She inspires women in STEM and anyone who believes in the power of imagination.\n\n> "That brain of mine is something more than merely mortal; as time will show."\n\n### Beyond the Machine\n\nWhen not immersed in mathematics, Ada wrote poetry and explored the connections between art and science. Her life reminds us that creativity and logic are not opposites, but partners in innovation.`,
    image: "/profiles/ada.jpg",
    avatar: "/profiles/ada.jpg",
    social: {
      twitter: "https://twitter.com/ada",
      github: "https://github.com/ada",
      linkedin: "https://linkedin.com/in/ada",
      email: "ada@ainstein.com",
    },
  },
  {
    id: 2,
    name: "Alan Turing",
    title: "AI Researcher",
    shortBio: "Mathematician, logician, and codebreaker.",
    bio: `## Architect of Modern Computing\n\nAlan Turing's work laid the foundation for computer science and artificial intelligence. His theoretical insights and practical inventions continue to shape technology today.\n\n### The Turing Machine\n\nTuring's concept of a universal machine formalized the idea of computation. The Turing Machine remains a central model in computer science, illustrating the limits and possibilities of algorithms.\n\n### Codebreaking at Bletchley Park\n\nDuring World War II, Turing led the team that cracked the Enigma code. His work saved countless lives and changed the course of history.\n\n- **Cryptography**: Developed the Bombe machine to automate codebreaking.\n- **Teamwork**: Fostered collaboration among mathematicians and engineers.\n\n### Artificial Intelligence\n\nTuring's question, "Can machines think?" launched the field of AI. The Turing Test remains a benchmark for machine intelligence.\n\n> "We can only see a short distance ahead, but we can see plenty there that needs to be done."\n\n### Enduring Influence\n\nTuring's legacy is one of brilliance, perseverance, and vision. He inspires researchers to push the boundaries of what machines can achieve, and to consider the ethical implications of technology.`,
    image: "/profiles/alan.jpg",
    avatar: "/profiles/alan.jpg",
    social: {
      twitter: "https://twitter.com/alan",
      github: "https://github.com/alan",
      linkedin: "https://linkedin.com/in/alan",
      email: "alan@ainstein.com",
    },
  },
  {
    id: 3,
    name: "Grace Hopper",
    title: "Backend Architect",
    shortBio: "Inventor of the first compiler and systems optimization expert.",
    bio: `## The Queen of Code\n\nGrace Hopper was a trailblazer in computer science, best known for inventing the first compiler and popularizing machine-independent programming languages.\n\n### Early Innovations\n\nHopper's work on the A-0 system led to the development of COBOL, one of the earliest high-level programming languages. She believed that programming should be accessible to everyone, not just mathematicians.\n\n- **Compiler invention**: Made programming more efficient and less error-prone.\n- **COBOL**: Helped standardize business computing.\n\n### Teaching and Mentorship\n\nGrace was a passionate educator, known for her engaging lectures and ability to make complex topics understandable. She mentored countless young engineers, especially women entering tech.\n\n### Legacy\n\nHer legacy lives on in the annual Grace Hopper Celebration, the world's largest gathering of women technologists.\n\n> "The most dangerous phrase in the language is, 'We've always done it this way.'"\n\n### Beyond the Code\n\nGrace was also known for her wit and curiosity. She collected antique clocks, loved to teach with stories, and always carried nanoseconds (pieces of wire) to illustrate the speed of light.`,
    image: "/profiles/grace.jpg",
    avatar: "/profiles/grace.jpg",
    social: {
      twitter: "https://twitter.com/grace",
      github: "https://github.com/grace",
      linkedin: "https://linkedin.com/in/grace",
      email: "grace@ainstein.com",
    },
  },
  {
    id: 4,
    name: "Margaret Hamilton",
    title: "Engineering Manager",
    shortBio: "Led the Apollo software team with a focus on reliability.",
    bio: `## Software for the Moon\n\nMargaret Hamilton led the team that developed the onboard flight software for NASA's Apollo missions. Her rigorous approach to software engineering was critical to the success of the moon landing.\n\n### Building Reliable Systems\n\nMargaret coined the term "software engineering" and emphasized the importance of error detection and recovery. Her team's software prevented an abort during the Apollo 11 landing, allowing astronauts to reach the surface safely.\n\n- **Error handling**: Designed systems to anticipate and recover from failures.\n- **Team leadership**: Fostered collaboration and innovation.\n\n### Advocacy and Inspiration\n\nMargaret is a strong advocate for women in STEM and robust engineering practices. She continues to inspire engineers with her leadership and attention to detail.\n\n> "There was no second chance. We all knew that."\n\n### Life Beyond Apollo\n\nMargaret founded her own software company and continues to promote excellence in engineering. Her story is a testament to the power of teamwork and perseverance.`,
    image: "/profiles/margaret.jpg",
    avatar: "/profiles/margaret.jpg",
    social: {
      twitter: "https://twitter.com/margaret",
      github: "https://github.com/margaret",
      linkedin: "https://linkedin.com/in/margaret",
      email: "margaret@ainstein.com",
    },
  },
  {
    id: 5,
    name: "Tim Berners-Lee",
    title: "Full Stack Developer",
    shortBio: "Inventor of the World Wide Web and open standards advocate.",
    bio: `## Inventor of the Web\n\nTim Berners-Lee revolutionized the world by inventing the World Wide Web. His vision was to create a universal, accessible platform for sharing information.\n\n### The Birth of the Web\n\nIn 1989, Tim proposed a system of hypertext documents accessible via the internet. This idea became the foundation of the web, changing how people communicate, learn, and collaborate.\n\n- **Open standards**: Advocated for free and open web technologies.\n- **Accessibility**: Ensured the web could be used by everyone.\n\n### Ongoing Advocacy\n\nTim continues to champion web accessibility, privacy, and the decentralized web. He founded the World Wide Web Consortium (W3C) to guide the web's evolution.\n\n> "This is for everyone."\n\n### Beyond the Browser\n\nTim enjoys teaching web literacy, building for the future, and exploring new ways to connect people through technology. His work ensures the web remains a force for good.`,
    image: "/profiles/tim.jpg",
    avatar: "/profiles/tim.jpg",
    social: {
      twitter: "https://twitter.com/timbl",
      github: "https://github.com/timbl",
      linkedin: "https://linkedin.com/in/timbl",
      email: "tim@ainstein.com",
    },
  },
  {
    id: 6,
    name: "Radia Perlman",
    title: "Network Engineer",
    shortBio: "Mother of the Internet and network protocol innovator.",
    bio: `## The Mother of the Internet\n\nRadia Perlman's invention of the Spanning Tree Protocol made modern Ethernet networks possible. Her work has shaped the way computers connect and communicate.\n\n### Network Innovation\n\nRadia's protocols are the backbone of the internet. She is known for making complex technology simple and robust.\n\n- **Spanning Tree Protocol**: Enabled scalable, reliable networks.\n- **Security**: Advocated for secure, resilient systems.\n\n### Teaching and Mentoring\n\nRadia is passionate about teaching and mentoring young engineers. She believes in making technology accessible and understandable.\n\n> "We need to make things simple, not just for users, but for engineers too."\n\n### Lasting Impact\n\nRadia's work continues to influence network design and security. She enjoys writing, teaching, and solving challenging puzzles.`,
    image: "/profiles/radia.jpg",
    avatar: "/profiles/radia.jpg",
    social: {
      twitter: "https://twitter.com/radia",
      github: "https://github.com/radia",
      linkedin: "https://linkedin.com/in/radia",
      email: "radia@ainstein.com",
    },
  },
  {
    id: 7,
    name: "Katherine Johnson",
    title: "Data Scientist",
    shortBio: "Mathematician and spaceflight trajectory expert.",
    bio: `## Trajectory to the Stars\n\nKatherine Johnson's calculations were critical to the success of the first U.S. manned spaceflights. Her expertise in mathematics and data analysis broke barriers and inspired generations.\n\n### NASA and Spaceflight\n\nKatherine's work at NASA ensured the safety and success of missions from Mercury to Apollo. She was known for her precision and attention to detail.\n\n- **Orbital mechanics**: Calculated trajectories for John Glenn's flight.\n- **Data analysis**: Pioneered new methods for solving complex problems.\n\n### Breaking Barriers\n\nAs an African American woman in STEM, Katherine overcame discrimination and paved the way for others. She mentored young scientists and promoted diversity in tech.\n\n> "We will always have STEM with us. Some things will drop out of the public eye and go away, but there will always be science, engineering, and technology."\n\n### Legacy\n\nKatherine's story is one of perseverance, brilliance, and inspiration. She reminds us to reach for the stars and never stop learning.`,
    image: "/profiles/katherine.jpg",
    avatar: "/profiles/katherine.jpg",
    social: {
      twitter: "https://twitter.com/katherine",
      github: "https://github.com/katherine",
      linkedin: "https://linkedin.com/in/katherine",
      email: "katherine@ainstein.com",
    },
  },
  {
    id: 8,
    name: "Linus Torvalds",
    title: "DevOps Engineer",
    shortBio: "Creator of Linux and open source champion.",
    bio: `## The Power of Open Source\n\nLinus Torvalds created the Linux kernel, which powers millions of devices worldwide. His commitment to open source has transformed the tech industry.\n\n### Linux and Collaboration\n\nLinus's approach to software development is collaborative and transparent. He believes in empowering developers and building reliable systems.\n\n- **Linux kernel**: Foundation for countless operating systems.\n- **Open source**: Advocated for community-driven development.\n\n### Philosophy and Practice\n\nLinus is known for his direct communication and focus on practical solutions. He reviews patches, mentors contributors, and ensures the quality of the Linux kernel.\n\n> "Talk is cheap. Show me the code."\n\n### Lasting Legacy\n\nLinus's work continues to inspire developers to build, share, and improve technology together.`,
    image: "/profiles/linus.jpg",
    avatar: "/profiles/linus.jpg",
    social: {
      twitter: "https://twitter.com/linus",
      github: "https://github.com/torvalds",
      linkedin: "https://linkedin.com/in/linus",
      email: "linus@ainstein.com",
    },
  },
  {
    id: 9,
    name: "Shafi Goldwasser",
    title: "Chief Security Officer",
    shortBio: "Cryptography pioneer and Turing Award winner.",
    bio: `## Securing the Digital World\n\nShafi Goldwasser is a leading figure in cryptography and computer security. Her work has set the standard for secure digital communication.\n\n### Zero-Knowledge Proofs\n\nShafi's research on zero-knowledge proofs revolutionized the way we think about privacy and trust online.\n\n- **Cryptography**: Developed protocols for secure communication.\n- **Complexity theory**: Advanced our understanding of computational hardness.\n\n### Teaching and Collaboration\n\nShafi is dedicated to teaching and mentoring the next generation of security experts. She collaborates on research and develops innovative solutions to protect users and data.\n\n> "Security is not a product, but a process."\n\n### Ongoing Impact\n\nShafi's work continues to influence the fields of cryptography, privacy, and digital trust. She is committed to advancing security in an increasingly connected world.`,
    image: "/profiles/shafi.jpg",
    avatar: "/profiles/shafi.jpg",
    social: {
      twitter: "https://twitter.com/shafi",
      github: "https://github.com/shafi",
      linkedin: "https://linkedin.com/in/shafi",
      email: "shafi@ainstein.com",
    },
  },
];

export default profiles;
