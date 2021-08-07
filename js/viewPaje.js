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

    main.style.background = "green";

    main.id = "main";
    document.body.firstElementChild.after(main);
}

function f2() {
    var data = document.getElementById("main");
    data.parentNode.removeChild(data);
    var main = document.createElement("main");
    main.style.background = "red";

    main.id = "main";
    document.body.firstElementChild.after(main);

}