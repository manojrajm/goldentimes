let elementemail = document.getElementById("email");
let elementmsg = document.getElementById("msg");
let elementsend = document.getElementById("mailbtn");


elementsend.addEventListener("click", (evt) => {
    const fromemail = elementemail.value;
    const msg = elementmsg.value;
    const toemail = "gauthamtamizha007@gmail.com";
    const url = `mailto:${toemail}?subject=Watch App&body=${msg}`;
    const encoded = encodeURI(url);
    window.location.href = encoded;
    console.log(encoded);
});