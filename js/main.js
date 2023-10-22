let szam1 = "0";
let szam2 = "0";
let eredmeny = 0;
let helyes = false;
let operator = "";

let operatorSpan = document.querySelector("#operator-span");
operatorSpan.addEventListener("click", function (event) {
    operator = event.target.value;
})

function Beker() {

    let regex = /^([-]?([0]|([0-9][,][0-9]+)|([1-9]+([,][0-9])?[0-9]*)))$/;

    szam1 = document.getElementById("szam01").value;
    szam2 = document.getElementById("szam02").value;

    if (!szam1.match(regex) || !szam2.match(regex)) {
        document.getElementById("szam01").value = "";
        document.getElementById("szam02").value = "";
        window.alert("Nem adtál meg megfelelő számot. Próbáld újra!");
    }
}

function Szamol() {
    Beker();

    szam1 = Number(szam1);
    szam2 = Number(szam2);

    switch (operator) {
        case "+":
            eredmeny = szam1 + szam2;
            break;
        case "-":
            eredmeny = szam1 - szam2;
            break;
        case "*":
            eredmeny = szam1 * szam2;
            break;
        case "/":
            if (szam2 == 0) {
                window.alert("Zéró osztó!");
            } else {
                eredmeny = szam1 / szam2;
            }
            break;
        case "^":
            eredmeny = Math.pow(szam1, szam2);
            break;
        case "√":
            eredmeny = Math.pow(szam2, 1 / szam1);
            break;
        default: 0;
    }

    Kiir();
}

function Kiir() {
    document.getElementById("ki").innerHTML = eredmeny;
}

