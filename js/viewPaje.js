const RESOURCE_PATH = "./res/";
function Title(img, url, name) {
    this.img = img;
    this.url = url;
    this.name = name;

}

let images = [new Title("NANA_vol1.jpeg", "", "img_1"), new Title("4905.0x970.webp", "", "img_2"),
    new Title("40253.jpeg", "", "img_3"), new Title("16NdJ5ylj6x1ik7DoJK9vkAwutksCRLspy9otT2L_mini.webp", "", "img_4"),
    new Title("3052927886_w600_h600_3052927886.png", "", "img_5"), new Title("zwJb11CFoQbNilYLzBF5veNaU55pHEuHsiy0U9Fo_mini.png", "", "img_6"),
    new Title("The_Case_Study_of_Vanitas.jpeg", "", "img_7"), new Title("cover.jpeg", "", "img_8")];

let clickCount = 3;

function rightSlide() {
clickCount++;
    //first remove
       if(clickCount===images.length) {
           clickCount = 0;
       }
        var main_container = document.getElementById("main_container");
        main_container.firstElementChild.remove();
        main_container.append(getImageElement(clickCount));

}
function leftSlide() {
clickCount--;

    if(clickCount === -1) {
        clickCount = images.length-1;
    }
    var main_container = document.getElementById("main_container");
    main_container.lastElementChild.remove();
    main_container.prepend(getImageElement(clickCount))

}
function slider_Start() {
    var main_container = document.getElementById('main_container');
    for (let i = 0; i < 4; i++) {
        main_container.append(getImageElement(i));

    }

}

//"S"OLID
function getImageElement(index) {
    var img = document.createElement("img");
    img.src = RESOURCE_PATH +images[index].img;
    img.className = "imgis_parametres";

    let div = document.createElement('div');
    div.append(img);
    div.className = "container";

    let link = document.createElement('a');
    link.innerText = images[index].name;
    link.className = "imegis_link";
    link.href = "#";
    div.append(link);

    return div;
}



function replaceMainContent(nameContent) {

    var data = document.getElementById("main");
    data.parentNode.removeChild(data);
    var content;
    switch (nameContent) {
        case 'registration':
            content = createRegistrationPanel();
            break;
        case 'enterPanel' :
            content = createEnterPanel();
            break;
    }

    document.body.firstElementChild.after(content);
}

function createEnterPanel() {
    var main = document.createElement("main");
    var div = document.createElement("div");
    var ul = document.createElement("ul");
    div.className = "garisontalContainer";
    ul.className = "verticalContainer";

    var input1 = document.createElement("input");
    input1.type = "text";

    var input2 = document.createElement("input");
    input2.type = "text";

    var input3 = document.createElement("input");
    input3.type = "text";

    var buttonEnter = document.createElement("a");
    buttonEnter.type = "link";
    buttonEnter.href = "http://localhost:63342/readManga/index.html?_ijt=7fd3e6m7cktbi0tnr9epqlu8lg";

    ul.append(input1);
    input1.placeholder = "name: ";
    input1.className = "form-control input-style";

    ul.append(input2);
    input2.placeholder = "mail: ";
    input2.className = "form-control input-style";

    ul.append(input3);
    input3.placeholder = "pass: ";
    input3.className = "input-style form-control";

    ul.append(buttonEnter);
    buttonEnter.textContent = "Войти";
    buttonEnter.className = "form-control buttonEnter-style";

    ul.style.background = "#1f0a07";
    ul.style.color = "#1f0a07"
    main.id = "main";
    main.append(div);
    div.append(ul);
    return main;
}

function createRegistrationPanel() {

    var main = document.createElement("main");
    var div = document.createElement("div");
    var ul = document.createElement("ul");
    div.className = "garisontalContainer";
    ul.className = "verticalContainer";

    var input1 = document.createElement("input");
    input1.type = "text";

    var input2 = document.createElement("input");
    input2.type = "text";

    var input3 = document.createElement("input");
    input3.type = "text";

    var input4 = document.createElement("input");
    input4.type = "text";

    var input5 = document.createElement("input");
    input5.type = "text";

    var buttonEnter = document.createElement('a');
    buttonEnter.type = "link";
    buttonEnter.href = "http://localhost:63342/readManga/index.html?_ijt=7fd3e6m7cktbi0tnr9epqlu8lg";

    ul.append(input1);
    input1.placeholder = "User name: ";
    input1.className = "form-control input-style";

    ul.append(input2);
    input2.placeholder = "Nick name:";
    input2.className = "form-control input-style";

    ul.append(input3);
    input3.placeholder = "Mail: ";
    input3.className = "form-control input-style";

    ul.append(input4);
    input4.placeholder = "pass: ";
    input4.className = "form-control input-style";

    ul.append(input5);
    input5.placeholder = "pass confirm: ";
    input5.className = "form-control input-style";

    ul.append(buttonEnter);
    buttonEnter.textContent = "Зарегистрироваться";
    buttonEnter.className = "form-control button-style";

    ul.style.background = "#1f0a07";
    ul.style.color = "#1f0a07"
    main.id = "main";
    main.append(div);
    div.append(ul);

    return main;

}
