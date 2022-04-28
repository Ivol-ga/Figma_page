const container = document.createElement("div");
container.className = "container";
document.body.append(container);


const banner = document.createElement("div");
banner.className = "banner";
banner.style.height = innerHeight + "px"; //outerHeight = высота окна браузера. innerHeight = вьюпорты

const main = document.createElement("main");

const header = document.createElement("header");
header.className = "header";
banner.append(header);

const divLogo = document.createElement("div");
divLogo.className = "divLogo";
divLogo.innerHTML = '<img src=img/logo.png>';
const divService = document.createElement("div");
divService.className = "divService";
divService.innerText = "Service";
const divBlog = document.createElement("div");
divBlog.className = "divBlog";
divBlog.innerText = "Blog";
const divShop = document.createElement("div");
divShop.className = "divShop";
divShop.innerText = "Shop";
const divLocation = document.createElement("div");
divLocation.className = "divLocation";
divLocation.innerText = "Location";
const checkOut = document.createElement("botton");
checkOut.className = "botton";
checkOut.type = "botton";
checkOut.innerText = "Check out";

container.append(banner, main); 
header.append(divLogo, divService, divBlog, divShop, divLocation, checkOut);

const mainCaption = document.createElement("h2");
mainCaption.className = "main__caption";
mainCaption.innerText = "4 types of plants";
main.append(mainCaption);

class Plant {
    constructor(capt, imgPath, cnt, mini) {
        this.caption = capt;
        this.pic = imgPath;
        this.count = cnt;
        this.imgType = mini;
    }
}
//копировать Alt shift стрелочка вниз
const data = [
  new Plant("Foliage", "img/bg_3.png", 21, "img/plant_1.png"),
  new Plant("Pucculent", "img/bg_2.png", 4, "img/plant_2.png"),
  new Plant("Flower", "img/bg_1.png", 8, "img/plant_3.png"),
  new Plant("Fruit", "img/bg_4.png", 10, "img/plant_4.png"),
];

let mainContent = "";
data.forEach(plant => {
    // const card = document.createElement("div");
    // card.className = "main__item";
    // card.style.backgroundImage = `url(${plant.pic})`;
    // main.append(card);
    mainContent += `
        <div class="main__item" style="background-image: url(${plant.pic})">
            <h3>${plant.caption}</h3>
            <div class="main__item-text">${plant.count} plants</div>
            <img alt="${plant.caption}" src="${plant.imgType}">
        </div>
    `
});

main.innerHTML += mainContent;

// https://www.w3schools.com/howto/howto_js_tabs.asp



