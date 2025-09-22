const primaScelta = document.getElementById("scelta1");
const secondaScelta = document.getElementById("scelta2");
const terzaScelta = document.getElementById("scelta3");
const quartaScelta = document.getElementById("scelta4");
const quintaScelta = document.getElementById("scelta5");
const tuttiBottoni = document.querySelectorAll(".bt_nb");

const bottoneSubmit = document.getElementById("submit")

let sceltaUtente = "";

bt_nb.addEventListener("click", () => {
        if (bt_nb === primaScelta) {
            primaScelta.style.backgroundColor = "white";
            sceltaUtente = "1";
        } else if (bt_nb === secondaScelta) {
            secondaScelta.style.backgroundColor = "white";
            sceltaUtente = "2";
        } else if (bt_nb === terzaScelta) {
            terzaScelta.style.backgroundColor = "white";
            sceltaUtente = "3";
        } else if (bt_nb === quartaScelta) {
            quartaScelta.style.backgroundColor = "white";
            sceltaUtente = "4";
        } else if (bt_nb === quintaScelta) {
            quintaScelta.style.backgroundColor = "white";
            sceltaUtente = "5";
    }
    return sceltaUtente;
})

bottoneSubmit.addEventListener("click", (e) => {
  e.preventDefault(); 
})