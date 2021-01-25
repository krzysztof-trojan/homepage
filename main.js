const firstName = "Krzysztof";
const age = 35;
const ona = "Kasia";
const dog1 = "Aspen";
const dog2 = "Viki";
const cat = "Zander";

console.log(firstName);
console.log(age);

console.log(`Siema! Nazywam sie ${firstName} i mam ${age} lat.`);
console.log(
    `Ja ${firstName}, mam dosc przewalone, bo ${ona} przyprowadzila do domu ${cat} i ${dog2} zeby ${dog1} mial kolezkow ;)`
);

const emptyParagraph = document.querySelector('.section__article--js');

emptyParagraph.innerHTML = `Bez rozwiazania zadania domowego nie dałbym rady nic a nic!`;

if ('Java' != 'JavaScript') {
    console.log('Java to JavaScript');
}


const button = document.querySelector('.action--js');

console.log(button)

const myClick = () => {
    const heading = document.querySelector('.main__heading--js');
    heading.innerHTML = `Siema! Nazywam sie Krzysiek`;
}

button.addEventListener('click', myClick);