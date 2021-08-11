function f() {

    var data = document.getElementById("main");
    data.parentNode.removeChild(data);
    var main = document.createElement("main");

    var input1 = document.createElement("input");
    input1.type = "text";

    var input2 = document.createElement("input");
    input2.type = "text";

    var input3 = document.createElement("input");
    input3.type = "text";

    main.append(input1);
    input1.placeholder = "name: ";
    input1.className = "form-control input-style";

    main.append(input2);
    input2.placeholder = "mail: ";
    input2.className = "form-control input-style";

    main.append(input3);
    input3.placeholder = "pass: ";
    input3.className = "input-style form-control";

    main.style.background = "#1f0a07";
    main.style.color = "#1f0a07"
    main.id = "main";
    document.body.firstElementChild.after(main);
}

function fReg() {

    var data = document.getElementById("main");
    data.parentNode.removeChild(data);

    var main = document.createElement("main");

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

    var buttonEnter = document.createElement("button");
    buttonEnter.type="button";

    main.append(input1);
    input1.placeholder = "User name: ";
    input1.className = "form-control input-style";

    main.append(input2);
    input2.placeholder = "Nick name:";
    input2.className = "form-control input-style";

    main.append(input3);
    input3.placeholder = "Mail: ";
    input3.className = "form-control input-style";

    main.append(input4);
    input4.placeholder = "pass: ";
    input4.className = "form-control input-style";

    main.append(input5);
    input5.placeholder = "pass confirm: ";
    input5.className = "form-control input-style";

    main.append(buttonEnter);
    buttonEnter.textContent = "Зарегистрироваться";
    buttonEnter.className = "form-control button-style";

    main.style.background = "#1f0a07";
    main.style.color = "#1f0a07"
    main.id = "main";
    document.body.firstElementChild.after(main);

}