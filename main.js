let currency = 26;

const iphone = document.getElementById('iphone');
const xiaomi = document.getElementById('xiaomi');
const content = document.getElementsByClassName('content')[0];
const error = document.getElementsByClassName('error')[0];

controlPrice = () => {
    if (currency > 26) return;

    else if (currency < 26 && currency > 23) {
        currency = 26;
        console.log(currency)
    } else if (currency < 23 || currency === 23) {
        content.style.display = 'none';
        error.style.display = 'block';
    }
}
controlPrice();

const iphonePrice = 600 * currency;
const xiaomiPrice = 200 * currency;


iphone.innerText = iphonePrice;
xiaomi.innerText = xiaomiPrice;