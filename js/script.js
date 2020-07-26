const forms = document.forms[0];
const tempResult = document.querySelector('.tempResult');
const windResult = document.querySelector('.windResult');

const APIKey = 'bf7c6e155eea7fd1ee828f0134cd6aaa';

forms.onsubmit = function (e) {
    e.preventDefault();
    let city = forms.elements.city.value;
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;

    const getResult = async (url) => {
        
        const request = await fetch(url);
        try {
            const DATA = await request.json();
            console.log(DATA);
            let tempDATA = (DATA.main.temp - 273).toFixed(1) + ' &#176' +'C';
            let windDATA = (DATA.wind.speed).toFixed(1) + ' m/s';

            tempResult.innerHTML = tempDATA;
            windResult.innerHTML =windDATA;
        }
        catch (error) {
            console.log("error", error)
        }
    };

    getResult(url);

};






