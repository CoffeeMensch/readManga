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
    buttonEnter.href ="http://localhost:63342/readManga/index.html?_ijt=7fd3e6m7cktbi0tnr9epqlu8lg";

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
    buttonEnter.href ="http://localhost:63342/readManga/index.html?_ijt=7fd3e6m7cktbi0tnr9epqlu8lg";

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
