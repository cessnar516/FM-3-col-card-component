import cardObjectArray from "./components/data.js";

// Generate HTML from JavaScript objects

const cardList = cardObjectArray.map((card) => {
    // Create new article
    let cardSection = document.createElement("article");
    // Add class of card
    cardSection.classList.add("card");
    // Add uniquie aria-label to each article for accessibility purposes
    cardSection.setAttribute("aria-label", card.name);
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

// Get the card container element
const cardsContainer = document.querySelector(".cards");
// Loop through the cards and append them to the card container element
cardList.forEach((card) => {
    cardsContainer.append(card);
});
