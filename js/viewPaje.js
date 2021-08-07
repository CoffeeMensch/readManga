

    function f() {
        var data = document.getElementById("main");
        data.parentNode.removeChild(data);
        var main = document.createElement("main");
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