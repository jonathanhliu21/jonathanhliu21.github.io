export const profile = {
  name: "Jonathan Liu",
  subtitle: "Computer Engineering student @ UCLA, Graduating June '28",
  portrait: { src: "/assets/media/portrait.jpeg", alt: "Jonathan Liu" },
  email: "jonathanhliu21@gmail.com",
  github: "https://github.com/jonathanhliu21",
  linkedin: "https://www.linkedin.com/in/jonathanhliu21",
  about:
    "I’m an undergraduate student at UCLA studying Computer Engineering. I’m in the Robotics and Mechanisms Laboratory (RoMeLa), where I focus on robot learning for dexterous manipulation and locomotion. I’ve worked at Roblox for two years, focusing on optimizing performance for level-of-detail generation and designing modular UI components. I’m interested in building robust and scalable systems across robotics and software.",
  resumes: [
    { label: "Software Resume", href: "/assets/resumes/software-resume.pdf" },
    {
      label: "Robotics + ML Resume",
      href: "/assets/resumes/robotics-ml-resume.pdf",
    },
  ],
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  note: string;
  authors?: string;
  contributions: string[];
  media?: {
    kind: "video" | "youtube" | "image";
    poster?: string;
    src: string;
    alt: string;
  };
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "trimi",
    title: "TRIMI",
    subtitle:
      "A Tri-Modal Manipulation Interface for Direct Demonstration, Joint-Level Haptic Teleoperation, and Robotic Execution",
    note: "Research project",
    authors:
      "Mingzhang Zhu, Quanyou Wang, Beom Jun Kim, Jonathan Liu, Alden Copps, Daniel Koh, Alvin Zhu, Dennis Hong",
    contributions: [
      "Developed the hand’s software infrastructure for data collection, replay, and current-controlled haptic feedback during teleoperation.",
      "Implemented a diffusion-policy pipeline that encodes wrist-camera observations with DINOv2 and generates arm end-effector and hand-joint action chunks with a U-Net.",
      "Trained manipulation policies on the TRIMI hand, achieving 90% success on cube pick-and-place and 75% on bottle-cap unscrewing.",
    ],
    media: {
      kind: "video",
      src: "/assets/media/trimi-unscrew.mp4",
      poster: "/assets/media/trimi-unscrew-poster.jpg",
      alt: "TRIMI hand performing the bottle-cap unscrewing task",
    },
    links: [
      { label: "Website", href: "https://trimi-hand.github.io/" },
      { label: "Video", href: "https://www.youtube.com/watch?v=Q4nurIYnOPQ" },
      {
        label: "GitHub",
        href: "https://github.com/jonathanhliu21/trimorph-piper-control",
      },
    ],
  },
  {
    id: "dexdirect",
    title: "DexDirect",
    subtitle:
      "Direct Kinesthetic Arm Guidance for Efficient Dexterous Demonstration Collection",
    note: "Accepted to IEEE Humanoids 2026",
    authors:
      "Beom Jun Kim, Shiu-Jen Wang, Jonathan Liu, Alvin Zhu, Quanyou Wang, Hanzhang Fang, Feng Xu, Mingzhang Zhu, Yuchen Cui, Dennis W. Hong",
    contributions: [
      "Implemented an end-to-end diffusion policy combining DINOv2 vision, proprioception, and Paxini tactile signals. A U-Net denoises arm and hand action chunks, which are mapped to joint space with inverse kinematics.",
      "Trained contact-rich manipulation policies on a MIDAS hand and PiperX arm, achieving 90% success on cube pick-and-place.",
      "Built real-time hand retargeting with MediaPipe and AnyTeleop’s dex-retargeting for imitation-learning data collection on a co-located kinesthetic teleoperation platform.",
    ],
    media: {
      kind: "video",
      src: "https://dexdirect.github.io/dexdirect/static/videos/hero_wide.av1.mp4",
      poster: "/assets/media/dexdirect-poster.jpg",
      alt: "DexDirect kinesthetic teleoperation and robot manipulation demonstration",
    },
    links: [
      { label: "Website", href: "https://dexdirect.github.io/dexdirect/" },
      { label: "Paper", href: "https://arxiv.org/abs/2607.27784" },
      {
        label: "Video",
        href: "https://dexdirect.github.io/dexdirect/static/videos/hero_wide.av1.mp4",
      },
    ],
  },
  {
    id: "miniq",
    title: "MiNI-Q",
    subtitle:
      "A Miniature, Wire-Free Quadruped with Unbounded, Independently Actuated Leg Joints",
    note: "Project · April – June 2026",
    contributions: [
      "Trained and deployed a PPO locomotion policy on MiNI-Q using MuJoCo MJX/Warp, with domain randomization and system identification for sim-to-real transfer.",
      "Built a lightweight global localization system with four UWB anchors and an EKF fusing 20 Hz UWB and 50 Hz IMU telemetry, achieving 7.42 cm RMSE.",
    ],
    media: {
      kind: "video",
      src: "/assets/media/miniq.mp4",
      poster: "/assets/media/miniq-poster.jpg",
      alt: "MiNI-Q quadruped locomotion demonstration",
    },
    links: [
      { label: "GitHub", href: "https://github.com/alvister88/MiniQ_Training" },
    ],
  },
  {
    id: "mobiverse",
    title: "MobiVerse",
    subtitle:
      "Scaling Urban Mobility Simulation with Hybrid Lightweight Domain-Specific Generator and Large Language Models",
    note: "Accepted to IEEE ITSC 2025",
    authors:
      "Yifan Liu, Xishun Liao, Haoxuan Ma, Jonathan Liu, Rohan Jadhav, Jiaqi Ma",
    contributions: [
      "Used Eclipse SUMO to visualize LLM-generated traffic routes for thousands of simulated cars in Los Angeles.",
      "Developed an ETA calculation algorithm for each car to support rerouting in heavy traffic.",
      "Co-authored the paper on LLM-based urban mobility simulation, published at IEEE ITSC 2025.",
    ],
    media: {
      kind: "image",
      src: "/assets/media/mobiverse.png",
      alt: "MobiVerse interface showing route modification controls, the SUMO simulation environment, and real-time agent monitoring",
    },
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2506.21784" },
      { label: "GitHub", href: "https://github.com/ucla-mobility/MobiVerse" },
    ],
  },
  {
    id: "transit-display",
    title: "Transit Departure Board Display",
    subtitle: "",
    note: "Project · July – September 2025",
    contributions: [
      "Developed C++ firmware for an ESP32 device that retrieves real-time Transitland data, parses JSON with ArduinoJson, and displays live departure schedules.",
      "Designed and fabricated a self-contained KiCad PCB integrating an ESP32-WROVER, CH340C USB-to-serial converter, SPI TFT display, power protection, and surface-mount LEDs.",
    ],
    media: {
      kind: "image",
      src: "/assets/media/transit-display.jpeg",
      alt: "Jonathan’s custom transit departure board displaying live departure information",
    },
    links: [
      {
        label: "GitHub",
        href: "https://github.com/jonathanhliu21/TransitDisplay",
      },
    ],
  },
];

export const experience = [
  {
    organization: "Roblox",
    role: "Software Engineer Intern",
    dates: "June – September 2026",
    contributions: [
      "Built C++ scene-graph instrumentation to analyze model size, sub-part count, instance-tree depth, and material diversity, automating geometry grouping for Roblox’s SLIM level-of-detail generation and eliminating manual arrangement.",
      "Prototyped an HLOD pipeline using spatial clustering and geometry merging, reducing draw calls by 5.6% and CPU frame time by 32.7% compared with the no-SLIM baseline.",
    ],
  },
  {
    organization: "Roblox",
    role: "Software Engineer Intern",
    dates: "June – September 2025",
    contributions: [
      "Built 10+ modular React Lua components and a dynamic creator-controls display framework for the in-game help menu to streamline future development.",
      "Verified designs across 4+ platforms for a consistent cross-platform experience.",
    ],
  },
  {
    organization: "LlamaIndex",
    role: "Machine Learning Intern",
    dates: "June – August 2024",
    contributions: [
      "Implemented LongRAG LlamaPack for efficient retrieval-augmented generation over large documents.",
      "Developed multi-agent architectures to parse insurance claims, legal documents, and product manuals.",
      "Updated the Langfuse integration’s use of the LlamaIndex API to improve compatibility.",
    ],
  },
];

export const skills = [
  {
    title: "Languages",
    items: "C++, C, Python, Java, JavaScript, Lua, Assembly",
  },
  {
    title: "Robotics & ML",
    items:
      "PyTorch, Diffusion Policy, Imitation/Reinforcement Learning, MuJoCo Playground, JAX, Warp, DINOv2, OpenCV, Genesis, Eclipse SUMO, ROS/ROS2",
  },
  {
    title: "Controls & Estimation",
    items:
      "EKF / Sensor Fusion, State Estimation, Inverse Kinematics, System Identification",
  },
  {
    title: "Hardware",
    items:
      "STM32, ESP32, PCB Design (KiCad, EasyEDA), CAN-FD, EtherCAT, IMU, UWB",
  },
  {
    title: "Tools",
    items:
      "Claude Code, Codex, Fusion 360, LTspice, Oscilloscopes, Logic Analyzers, Soldering, Git, Linux, VSCode",
  },
];
