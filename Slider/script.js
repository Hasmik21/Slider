const slider = document.querySelector('.slider');
const next = document.querySelector('.slider .btn.next');
const prev = document.querySelector('.slider .btn.prev');
const dot = document.querySelectorAll('.slider .dots input');
const title = document.querySelector('.title');
const image = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
let current = 0;

let changeBgImage = (index, picture, source) => source.style.backgroundImage = `url(${picture[index]})`;
let changeDot = change => dot[change].checked = true;

next.onclick = () => {
    current++;
    current == image.length ? current = 0 : '';
    changeBgImage(current,image,slider);
    changeDot(current);
    title.innerText = text[current];
};

prev.onclick = () => {
    current--;
    current < 0 ? current = image.length - 1 : '';
    changeBgImage(current,image,slider);
    changeDot(current);
    title.innerText = text[current];
}

for (let i = 0; i < dot.length; i++) {
    dot[i].onchange = () => {
        current = i;
        changeBgImage(current,image,slider);
    };
}























































