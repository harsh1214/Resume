const bar = document.getElementById('navbar-element');

const changeNavbar = () => {
    let screenSize = screen.width;
    if(screenSize >= 662){
        bar.classList.remove('navbar-add');
    }
}
window.addEventListener("resize", changeNavbar);
changeNavbar();

const navbarSwitch = () => {
    if(bar.classList[1] === 'navbar-add'){
        bar.classList.remove('navbar-add');
    }
    else{
        bar.classList.add('navbar-add');
    }
}

const closeNav = () => {
    bar.classList.remove('navbar-add');
}