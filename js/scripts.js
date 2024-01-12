const houses = [
    {
        houseImg: 'House21.png',
        header: 'Атаман',
        square: '108 кв.м',
        size: '5x6 м',
        constrPeriod: '16 дней',
        numRooms: '5',
        houseType: 'Одноэтажный',
        price: '1 780 000'
    },
    {
        houseImg: 'House21.png',
        header: 'Гетьман',
        square: '120 кв.м',
        size: '7x9 м',
        constrPeriod: '21 дней',
        numRooms: '5',
        houseType: 'Одноэтажный',
        price: '2 000 000'
    },
    {
        houseImg: 'House21.png',
        header: 'Хорунжий',
        square: '108 м',
        size: '7x9',
        constrPeriod: '16 дней',
        numRooms: '5',
        houseType: 'С мансардой',
        price: '1 780 000'
    },
    {
        houseImg: 'House21.png',
        header: 'Кошевой',
        square: '108 м',
        size: '7x9',
        constrPeriod: '16 дней',
        numRooms: '5',
        houseType: 'С цокольным этажом',
        price: '1 780 000'
    },
    {
        houseImg: 'House21.png',
        header: 'Есаул',
        square: '108 м',
        size: '7x9',
        constrPeriod: '16 дней',
        numRooms: '5',
        houseType: 'С гаражом',
        price: '1 780 000'
    },
    {
        houseImg: 'House21.png',
        header: 'Урядник',
        square: '108 м',
        size: '7x9',
        constrPeriod: '16 дней',
        numRooms: '5',
        houseType: 'Трехэтажные',
        price: '1 780 000'
    }
];

const popularproj = document.querySelector(".popularproj");

function showAllData(housesData){
    // let popularproj = document.querySelector(".popularproj");
    let temp = null;

    for (let i = 0; i < housesData.length; i++){
        temp = createCard(housesData[i]);
        popularproj.appendChild(temp);
    }
}

function createCard(cardData){
    let card = document.createElement("div");
    card.className = "card";

    let cardHeader = document.createElement("h3");
    cardHeader.classList.add("card__header");
    cardHeader.classList.add("font__preset");
    cardHeader.innerText = cardData.header;

    let cardImg = document.createElement("img");
    cardImg.className = "card__image";
    cardImg.src = './img/' + cardData.houseImg;

    let cardSquare = document.createElement("p");
    cardSquare.classList.add("card-data__item");
    cardSquare.classList.add("font__preset");
    cardSquare.innerHTML = 'Площадь: <b>'+ cardData.square + '</b>';

    let cardSize = document.createElement("p");
    cardSize.classList.add("card-data__item");
    cardSize.classList.add("font__preset");
    cardSize.innerHTML = 'Размеры: <b>'+ cardData.size +'</b>';

    let cardConstrPeriod = document.createElement("p");
    cardConstrPeriod.classList.add("card-data__item");
    cardConstrPeriod.classList.add("font__preset");
    cardConstrPeriod.innerHTML = 'Срок стройки: <b>'+ cardData.constrPeriod +'</b>';

    let cardNumRooms = document.createElement("p");
    cardNumRooms.classList.add("font__preset");
    cardNumRooms.classList.add("card-data__item");
    cardNumRooms.innerHTML = 'Комнат: <b>'+ cardData.numRooms +'</b>';

    let cardTypeNPrice = document.createElement("ul");
    cardTypeNPrice.className = "card__list-data";
    let cardLIHType = document.createElement("li");
    cardLIHType.classList.add("card-data__li");
    cardLIHType.classList.add("font__preset");
    cardLIHType.innerHTML = 'Тип дома: <b>' + cardData.houseType + '</b>'
    cardTypeNPrice.appendChild(cardLIHType);
    let cardPrice = document.createElement("li");
    cardPrice.classList.add("card-data__li");
    cardPrice.classList.add("font__preset");
    cardPrice.innerHTML = 'Стоимость: <b>от <span class="card-data__li-big">' + cardData.price + '</span> руб</b>';
    cardTypeNPrice.appendChild(cardPrice);

    let cardButton = document.createElement("div");
    cardButton.classList.add("card__button");
    cardButton.classList.add("font__preset");
    cardButton.innerText = "СМОТРЕТЬ ПРОЕКТЫ >";

    let cardPersPlan = document.createElement("div");
    cardPersPlan.className = "card__persplan";
    let cardPPImg = document.createElement("img");
    cardPPImg.className = "card__persplan-img";
    cardPPImg.src = "./img/checkimg.png";
    cardPersPlan.appendChild(cardPPImg);
    let cardPPText = document.createElement("p");
    cardPPText.classList.add("card__persplan-item");
    cardPPText.classList.add("font__preset");
    cardPPText.innerText = "Индивидуальная планировка дома";
    cardPersPlan.appendChild(cardPPText);

    card.appendChild(cardImg);
    card.appendChild(cardHeader);
    card.appendChild(cardSquare);
    card.appendChild(cardSize);
    card.appendChild(cardConstrPeriod);
    card.appendChild(cardNumRooms);
    card.appendChild(cardTypeNPrice);
    card.appendChild(cardButton);
    card.appendChild(cardPersPlan);

    return card;
}

function clearData(container){
    container.innerHTML = "";
}

showAllData(houses);

document.querySelector(".menu__watchall-href").onclick = function(e){
    // let popularproj = document.querySelector(".popularproj");
    clearData(popularproj);
    showAllData();
};