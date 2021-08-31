import cardObjectArray from "./components/data.js";

// Generate HTML from JavaScript objects

const cardList = cardObjectArray.map((card) => {
    // Create new section
    let cardSection = document.createElement("section");
    // Add class of card
    cardSection.classList.add("card");
    // Add id from Card object data
    cardSection.setAttribute("id", card.id);
    // Construct HTML for section - add empty alt tag to image and descriptive aria-label to link for accessibility
    cardSection.innerHTML = `
        <img src=${card.image} alt="" />
        <h2>${card.name}</h2>
        <p>${card.text}</p>
        <a href=${card.link} aria-label="Learn more about ${card.name}.">Learn More</a>
    `;

    return cardSection;
});

// Get document main element
const main = document.querySelector("main");
// Loop through the cards and append them to the main element
cardList.forEach((card) => {
    main.append(card);
});
