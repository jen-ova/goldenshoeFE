import MensBoot from "./images/boot_M01.jpeg";
import WomensBoot from "./images/boot_W01.jpeg";
import MensTrainer from "./images/trainer_M01.jpeg";
import WomensTrainer from "./images/trainer_W01.jpeg";
import MensSmart from "./images/smart_M01.jpeg";

export const categories = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1512327536842-5aa37d1ba3e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    title: "TRAINERS",
    category: "trainers",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1572895767736-b17223abb819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80",
    title: "BOOTS",
    category: "boots",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3280&q=80",
    title: "SMART SHOES",
    category: "smart shoes",
  },
];

export const popularProducts = [
  {
    id: 1,
    name: "Vans",
    category: "Women's Trainers",
    img: WomensTrainer,
    description: "tan classic slip-on leopard trainers",
    size: [38, 39, 40, 41, 42, 43, 44, 45, 46],
    price: 80,
  },
  {
    id: 2,
    name: "Women's DM Boots",
    category: "Women's boots",
    img: WomensBoot,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    size: [38, 39, 40, 41, 42, 43, 44, 45, 46],
    price: 100,
  },
  {
    id: 3,
    img: MensTrainer,
  },
  {
    id: 4,
    img: MensBoot,
  },
  {
    id: 5,
    img: MensSmart,
  },
];
