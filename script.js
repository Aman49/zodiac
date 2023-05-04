const zodiac = document.getElementById('zodiac');

const body = document.body;
const changeColor = () => {
    switch(zodiac.value) {
        case "Aries":
            body.style.backgroundColor = "#FE0000";
            break;
        case "Taurus":
            body.style.backgroundColor = "#FE0000";
            break;
        case "Gemini":
            body.style.backgroundColor = "#FE0000";
            break;
        case "Cancer":
            body.style.backgroundColor = "#FE0000";
            break;
        case "Leo":
            body.style.backgroundColor = "#FEA000";
            break;
        case "Virgo":
            body.style.backgroundColor = "#FEB000";
            break;
        case "Libra":
            body.style.backgroundColor = "#FE0012";
            break;
        case "Scorpio":
            body.style.backgroundColor = "#FEcf000";
            break;
        case "Sagittarius":
            body.style.backgroundColor = "#FE0d00";
            break;
        case "Capricorn":
            body.style.backgroundColor = "#FE0030";
            break;
        case "Aquarius":
            body.style.backgroundColor = "#FC0000";
            break;
        case "Aries":
            body.style.backgroundColor = "#FE0E00";
            break;
    }
}