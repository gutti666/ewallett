

function login(event) {
    event.preventDefault();
    document.getElementById("alert").innerHTML = ""
    let name = document.getElementById("name").value;
    let pass = document.getElementById("pass").value;
    let money = document.getElementById("money").value;
    let wallet1 = document.getElementById("wallet1").value;
    let wallet2 = document.getElementById("wallet2").value;
    let wallet3 = document.getElementById("wallet3").value;
    if (name == "" || pass == "" || money == "" || wallet1 == "" || wallet2 == "" || wallet3 == "") {
        document.getElementById("alert").innerHTML = `   <div class="alert alert-primary" role="alert">
        Los Campos deben estar LLenos
      </div>`
    } else {
        localStorage.setItem("name", name);
        localStorage.setItem("pass", pass);
        localStorage.setItem("money", money);
        localStorage.setItem("wallet1", wallet1);
        localStorage.setItem("wallet2", wallet2);
        localStorage.setItem("wallet3", wallet3);
        window.location.href = 'wallet.html';
    }

}

let moneyFinal = localStorage.getItem("money");
let wallet1Money = 0.0;
let wallet2Money = 0.0;
let wallet3Money = 0.0;
document.getElementById("money1").innerHTML = "0.0";
document.getElementById("money2").innerHTML = "0.0"
document.getElementById("money3").innerHTML = "0.0"






document.getElementById("money").innerHTML = localStorage.getItem("money");
function sendMoney(event) {
    document.getElementById("alert").innerHTML = ""
    let walletDestiniy = document.getElementById("destiny").value;
    let moneysend = document.getElementById("moneysend").value;



    if (walletDestiniy == 0) {
        document.getElementById("alert").innerHTML = `   <div class="alert alert-primary" role="alert">
        Debe seleccionar almenos un Bolsillo
      </div>`

    } else if (parseFloat(moneysend) > parseFloat(moneyFinal)) {
        document.getElementById("alert").innerHTML = `   <div class="alert alert-primary" role="alert">
        El valor no puede ser superior al disponible
      </div>`
    } else {
        switch (walletDestiniy) {
            case "1":

                wallet1Money += parseFloat(moneysend);
                let moneyRest1 = parseFloat(moneyFinal) - parseFloat(moneysend);
                moneyFinal = moneyRest1;
                document.getElementById("money").innerHTML = moneyRest1;
                localStorage.removeItem("money");
                localStorage.setItem("money", moneyRest1);
                document.getElementById("money1").innerHTML = wallet1Money
                document.getElementById("intmoney1").setAttribute("value", wallet1Money)




                break;
            case "2":
                wallet2Money += parseFloat(moneysend);
                let moneyRest2 = parseFloat(moneyFinal) - parseFloat(moneysend);
                moneyFinal = moneyRest2;
                document.getElementById("money").innerHTML = moneyRest2;
                localStorage.removeItem("money");
                localStorage.setItem("money", moneyRest2);
                document.getElementById("money2").innerHTML = wallet2Money
                document.getElementById("intmoney2").setAttribute("value", wallet2Money);


                break;
            case "3":

                wallet3Money += parseFloat(moneysend);
                let moneyRest3 = parseFloat(moneyFinal) - parseFloat(moneysend);
                moneyFinal = moneyRest3;
                document.getElementById("money").innerHTML = moneyRest3;
                localStorage.removeItem("money");
                localStorage.setItem("money", moneyRest3);

                document.getElementById("money3").innerHTML = wallet3Money
                document.getElementById("intmoney3").setAttribute("value", wallet3Money);

        }
    }
    event.preventDefault();

}

function sendAva(event, idwallet) {

    moneyFinal = localStorage.getItem("money");
    console.log(idwallet);
    switch (idwallet) {
        case "1":

            let moneysend1 = document.getElementById("intmoney1").value;
            let addmoney1 = parseFloat(moneyFinal) + parseFloat(moneysend1);
            console.log(addmoney1);
            localStorage.removeItem("money");
            localStorage.setItem("money", addmoney1);
            document.getElementById("money").innerHTML = addmoney1;
            document.getElementById("money1").innerHTML = "";

            document.getElementById("intmoney1").setAttribute("value", "0");
            moneyFinal = localStorage.getItem("money");
            wallet1Money= 0;

            break;
        case "2":
            let moneysend2 = document.getElementById("intmoney2").value;
            let addmoney2 = parseFloat(moneyFinal) + parseFloat(moneysend2);
            localStorage.removeItem("money");
            localStorage.setItem("money", addmoney2);
            document.getElementById("money").innerHTML = addmoney2;
            document.getElementById("money2").innerHTML = "";

            document.getElementById("intmoney2").setAttribute("value", "0");
            moneyFinal = localStorage.getItem("money");
            wallet2Money= 0;

            break;
        case "3":
            let moneysend3 = document.getElementById("intmoney3").value;
            let addmoney3 = parseFloat(moneyFinal) + parseFloat(moneysend3);
            localStorage.removeItem("money");
            localStorage.setItem("money", addmoney3);
            document.getElementById("money").innerHTML = addmoney3;
            document.getElementById("money3").innerHTML = "";
            document.getElementById("intmoney3").setAttribute("value", "0");
            moneyFinal = localStorage.getItem("money");
            wallet3Money= 0;

            break;


    }
    // localStorage.removeItem("money");
    // let restore = parseFloat(moneyFinal)+ parseFloat(moneysend);
    // localStorage.setItem("money", moneyRest1);

}

