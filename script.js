function show() {
    const show = document.querySelector('.slider')
    show.style.display = 'flex'
}

function hide() {
    const show = document.querySelector('.slider')
    show.style.display = 'none'
}

function color() {
    document.body.classList.toggle("dark-theme");

    const cyanImage = document.querySelector('#img1')
    cyanImage.style.display = 'none'
}

function menu(){
    const menu = document.querySelector('.side')
    const btn = document.querySelector('.menu')
    menu.style.display = 'flex';
    btn.style.display = 'none';
}

function off(){
    const menu = document.querySelector('.side')
    const btn = document.querySelector('.menu')
    menu.style.display = 'none';
    btn.style.display = 'flex';
}


