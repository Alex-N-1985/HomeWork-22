let houses = [
    {
        houseImg: 'House21.png',
        header: 'Атаман',
        square: '108 м',
        size: '7x9',
        constrPeriod: '16 дней',
        numRooms: '5',
        houseType: 'Каркасный',
        price: '1 780 000'
    },
    {
        houseImg: 'House21.png',
        header: 'Атаман',
        square: '108 м',
        size: '7x9',
        constrPeriod: '16 дней',
        numRooms: '5',
        houseType: 'Каркасный',
        price: '1 780 000'
    },
    {
        houseImg: 'House21.png',
        header: 'Атаман',
        square: '108 м',
        size: '7x9',
        constrPeriod: '16 дней',
        numRooms: '5',
        houseType: 'Каркасный',
        price: '1 780 000'
    },
    {
        houseImg: 'House21.png',
        header: 'Атаман',
        square: '108 м',
        size: '7x9',
        constrPeriod: '16 дней',
        numRooms: '5',
        houseType: 'Каркасный',
        price: '1 780 000'
    },
    {
        houseImg: 'House21.png',
        header: 'Атаман',
        square: '108 м',
        size: '7x9',
        constrPeriod: '16 дней',
        numRooms: '5',
        houseType: 'Каркасный',
        price: '1 780 000'
    },
    {
        houseImg: 'House21.png',
        header: 'Атаман',
        square: '108 м',
        size: '7x9',
        constrPeriod: '16 дней',
        numRooms: '5',
        houseType: 'Каркасный',
        price: '1 780 000'
    }
];

let popularproj = document.querySelector(".popularproj");
let temp = null;

for (let i = 0; i < houses.length; i++){
    temp = createCard(houses[i]);
    popularproj.appendChild(temp);
}

function createCard(cardData){
    let card = document.createElement("div");
    card.className = "card";

    let cardHeader = document.createElement("h3");
    cardHeader.className = "card__header font__preset";
    cardHeader.innerText = cardData.header;

    let cardImg = document.createElement("img");
    cardImg.className = "card__image";
    cardImg.src = './img/' + cardData.houseImg;

    card.appendChild(cardImg);
    card.appendChild(cardHeader);
    return card;
}