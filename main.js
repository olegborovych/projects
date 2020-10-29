// modal window v1.0
const modal = document.getElementById('myModal');
const btn = document.getElementById('btn');
const span = document.getElementsByClassName('close')[0];

// клік на кнопку для відкриття
btn.onclick = () => {
    modal.style.display = 'block';
};

// клік на хрестик
span.onclick = () => {
    modal.style.display = 'none';
};

// клік на на пусте місце у вікні браузера
window.onclick =
    e => {
        if (
            e.target === modal) {
            modal.style.display = 'none';
        }
    };