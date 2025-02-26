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

document.getElementById('gohtml').addEventListener("click", function() {
    document.getElementById('chtml').scrollIntoView({ behavior: "smooth" });
});

document.getElementById('gocss').addEventListener("click", function() {
    document.getElementById('ccss').scrollIntoView({ behavior: "smooth" });
});

document.getElementById('gojs').addEventListener("click", function() {
    document.getElementById('cjs').scrollIntoView({ behavior: "smooth" });
});

document.getElementById('goreact').addEventListener("click", function() {
    document.getElementById('creact').scrollIntoView({ behavior: "smooth" });
});

document.getElementById('gotailwind').addEventListener("click", function() {
    document.getElementById('ctailwind').scrollIntoView({ behavior: "smooth" });
});

document.getElementById('goflutter').addEventListener("click", function() {
    document.getElementById('cflutter').scrollIntoView({ behavior: "smooth" });
});