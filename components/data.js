// Import the Card class
import Card from "./Card.js";

// Create sedans Card object
const sedans = new Card(
    "sedans",
    "images/icon-sedans.svg",
    "Sedans",
    "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    "#"
);

// Creats suvs Card object
const suvs = new Card(
    "suvs",
    "images/icon-suvs.svg",
    "SUVs",
    "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    "#"
);

// Create luxury Card object
const luxury = new Card(
    "luxury",
    "images/icon-luxury.svg",
    "Luxury",
    "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    "#"
);

const cardObjectArray = [sedans, suvs, luxury];
export default cardObjectArray;