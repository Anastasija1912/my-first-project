const largeToys =
[
    {
        name: "Крокодил №1",
        description: "с молоком, в стиле Kinder surprise",
        link: "./crocodilewithmilk.html",
        images: [
            "./img/crocodilewithmilkfas.jpg",
            "./img/crocodilewithmilkprof.jpg",
            "./img/crocodilewithmilkfas.jpg"
        ]
    },
    {
        name: "Крокодил №2",
        description: "с гамбургером, в стиле Kinder surprise",
        link: "./crocodilewithgamb.html",
        images: [
            "./img/crocodilewithgambfas.jpg",
            "./img/crocodilewithgambprof.jpg",
            "./img/crocodilewithgambfas.jpg"
        ]
    },
    {
        name: "Пингвин",
        description: "в шляпе, в стиле Kinder surprise",
        link: "./penguin.html",
        images: [
            "./img/penguinfas.jpg",
            "./img/penguinprof.jpg",
            "./img/penguinfas.jpg"
        ]
    },
    {
        name: "Слон",
        description: "с мороженным, в стиле Kinder surprise",
        link: "./elephant.html",
        images: [
            "./img/elephantfas2.jpg",
            "./img/elephantprof.jpg",
            "./img/elephantfas.jpg"
        ]
    },
    {
        name: "Дино",
        description: "с каской, в стиле Kinder surprise",
        link: "./dino.html",
        images: [
            "./img/dinofas.jpg",
            "./img/dinoprof.jpg",
        ]
    },
    {
        name: "Медведь Тэдди",
        description: "тёмно-серый с красным шарфом",
        link: "./bearred.html",
        images: [
            "./img/bearredfas.jpg",
            "./img/bearredprof.jpg",
        ]
    },
]

const mediumToys = [
{
    name: "собачка",
    description: "с сумкой",
    link: "./dogbag.html",
    images: [
        "./img/dogbagfas.jpg",
        "./img/dogbagprof.jpg",
    ]
},
{
    name: "Муми Тролль",
    description: "из мультфильма",
    link: "./troll.html",
    images: [
        "./img/trollfas.jpg",
        "./img/trolprof.jpg",
    ]
},
];

function createCards(toys, containerId, interval = 5000) {
const container = document.getElementById(containerId);

toys.forEach((toy, index) => {
const cardHtml = `
<div class="col-lg-3 col-md-5 col-sm-6 mb-2">
<div class="card">
    <div id="carouselExampleIndicators${containerId}${index}" class="carousel slide h-75" data-bs-interval="${interval}">
        <div class="carousel-indicators" style="bottom:20px">
            ${toy.images.map((_, i) =>
            `<button type="button" data-bs-target="#carouselExampleIndicators${containerId}${index}" data-bs-slide-to="${i}" ${i === 0 ? 'class="active" aria-current="true"' : ''} aria-label="Slide ${i + 1}"></button>`).join('')}
        </div>
        <div class="carousel-inner" style="height:95%">
            ${toy.images.map((img, i) =>
                `<div class="carousel-item ${i === 0 ? 'active' : ''}">
                    <a href="${toy.link}" style="text-decoration: none;">
                        <img src="${img}" class="d-block w-100" alt="Изображение ${i + 1}">
                    </a>
                </div>`).join('')}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators${containerId}${index}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">&lt;</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators${containerId}${index}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">&gt;</span>
        </button>
    </div>
    <div class="card-body">
        <h5 class="card-title"><b>${toy.name}</b></h5>
        <p class="card-text">${toy.description}</p>
    </div>
</div>
</div>
`;
container.innerHTML += cardHtml;
});
}
createCards(largeToys, "large-card-container", 10);
createCards(mediumToys, "medium-card-container", 10);