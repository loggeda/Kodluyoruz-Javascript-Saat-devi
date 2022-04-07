var userNameDom = document.querySelector("#myName");
var clockCol = document.querySelector(".clock"); 

function startTime(){
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let day = today.getDay();

    switch (day) {
        case 1:
            day ="Pazartesi"
        break;

        case 2:
            day ="Salı"
        break;

        case 3:
            day ="Çarşamba"
        break;

        case 4:
            day ="Perşembe"
        break;

        case 5:
            day ="Cuma"
        break;

        case 6:
            day ="Cumartesi"
        break;

        case 7:
            day ="Pazar"
        break;
    }

    function time(i){
        if (i < 10) {i = '0' + i};
        return i;
    };

    hour = time(hour);
    minute = time(minute);
    second = time(second);

    clockCol.innerHTML = `${hour}:${minute}:${second} ${day}`;
    
    let x = setTimeout(
        startTime,1000
    );
}
startTime()

let userName = prompt("Lütfen kullanıcı adınızı giriniz")

if(userName.length == 0){
    alert("Lütfen kullanıcı adınızı girin")
    let userName = prompt("Lütfen kullanıcı adınızı giriniz")
}else if (userName.length > 0){
    userNameDom.innerHTML = userName
}
