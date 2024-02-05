let uppercasselater = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercasselater = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let specialcharacter = " `~!@#$%^&*()_+=-[]\\;',./<>?\":|{}";


function generate() {
    let inputpasswordlength = document.getElementById("password-length").value;
    let inputuppercasse = document.getElementById("uppercasse-latter").checked;
    let inputlowecasse = document.getElementById("lowercasse-latter").checked;
    let inputnumber = document.getElementById("number").checked;
    let inputspecialcharactor = document.getElementById("special-chactor").checked;
    let charactor = "";
    if (!(inputuppercasse || inputlowecasse || inputnumber || inputspecialcharactor)) {
        alert("Atlest select one opetion!");
    }else {
        if (inputuppercasse) {
            charactor += uppercasselater;
        }
        if (inputlowecasse) {
            charactor += lowercasselater;
        }
        if (inputnumber) {
            charactor += number;
        }
        if (inputspecialcharactor) {
            charactor += specialcharacter;
        }
        // console.log("Enter");
        // console.log("charactor: ",charactor);
        // console.log("charactor l: ",charactor.length);

        let password = "";
        // console.log(password);
        for (let a = 0; a < inputpasswordlength; a++) {
            let randomindex = Math.floor(Math.random() * charactor.length);
            password += charactor[randomindex];
            console.log("PASS", password);
        }
        document.getElementById("finalpassword").innerText = password;
        document.getElementById("finalpassword").style.display = "flex";

        // console.log(inputuppercasse);
        // console.log(inputlowecasse);
        // console.log(inputnumber);
        // console.log(inputspecialcharactor);
        // console.log(inputpasswordlength);    
    }
}


// Thats for copy the text
function clip() {
    let inputpassword = document.getElementById("finalpassword");
    console.log("Password: ", inputpassword);
    inputpassword.select();
    document.execCommand('copy')
}