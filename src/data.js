// src/data.js
import FreedomImg from "./assets/freedom-gallery.jpg";
import ComfortImg from "./assets/comfort-gallery.jpg";
import GrowthImg from "./assets/growth-gallery.jpg";

import juniorSupportImage from "./assets/junior_support.jpg";
import middleSupportImage from "./assets/middle_support.jpg";
import seniorSupportImage from "./assets/senior_support.jpg";

// Job Positions Data
export const jobPositions = [
  {
    imgSrc: juniorSupportImage,
    position: "Junior Support Developer",
    salary: "PHP 30,500 — 48,000",
    isOpen: true,
  },
  {
    imgSrc: middleSupportImage,
    position: "Middle Support Developer",
    salary: "PHP 58,000 — 73,000",
    isOpen: true,
  },
  {
    imgSrc: seniorSupportImage,
    position: "Senior Support Developer",
    salary: "PHP 80,000 — 100,000",
    isOpen: true,
  },
];

// Company Principles Data
export const companyPrinciples = [
  {
    title: "Freedom",
    description:
      "We support informal communication, and we value every employee's opinion. We have a casual dress code and avoid ridiculous rules and restrictions.",
    imgSrc: FreedomImg,
  },
  {
    title: "Comfort",
    description:
      "We believe the best work requires the best environment with comfortable working spaces and room to rest and recuperate.",
    imgSrc: ComfortImg,
  },
  {
    title: "Growth",
    description:
      "We encourage every team member to improve as an employee and develop their career, and we do everything possible to assist with this challenge.",
    imgSrc: GrowthImg,
  },
];
