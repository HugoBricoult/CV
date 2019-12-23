var indexpage = 0;

document.getElementById("btn2").addEventListener("click", down);
document.getElementById("btn1").addEventListener("click", up);

function up() {
    indexpage--;
    chooser();
    console.log(indexpage);
}

function down() {
    indexpage++;
    chooser();
    console.log(indexpage);
}

function chooser() {
    switch (indexpage) {
        case 0:
            gointro();
            break;
        case 1:
            gocomp();
            break;
        case 2:
            goatouts();
            break;
        case 3:
            goexp();
            break;
        default:
            gointro();
            break;
    }
}

function goatouts() { //elem3
    document.getElementById("elem4").style.height = 0;
    document.getElementById("elem4").style.paddingTop = 0;
    document.getElementById("elem4").style.opacity = 0;
    document.getElementById("elem2").style.height = 0;
    document.getElementById("elem2").style.paddingTop = 0;
    document.getElementById("elem2").style.opacity = 0;
    document.getElementById("elem3").style.height = '65vh';
    document.getElementById("elem3").style.paddingTop = '20vh';
    document.getElementById("elem3").style.opacity = 1;
}

function goexp() { //elem4
    document.getElementById("elem3").style.height = 0;
    document.getElementById("elem3").style.paddingTop = 0;
    document.getElementById("elem3").style.opacity = 0;
    document.getElementById("elem4").style.height = '65vh';
    document.getElementById("elem4").style.paddingTop = '20vh';
    document.getElementById("elem4").style.opacity = 1;
}

function gointro() { //elem1
    indexpage = 0;
    document.getElementById("elem2").style.opacity = 0;
    document.getElementById("intro1").style.opacity = 1;
    document.getElementById("intro2").style.opacity = 1;
    document.getElementById("elem2").style.height = '0vh';
    document.getElementById("elem2").style.paddingTop = '0vh';
    document.getElementById("elem1").style.height = '89vh';
    document.getElementById("btn1").style.opacity = 0;
    document.getElementById("elem4").style.opacity = 0;
    document.getElementById("elem4").style.height = '0vh';
    document.getElementById("elem4").style.paddingTop = '0vh';
}

function gocomp() { //elem2
    document.getElementById("intro1").style.opacity = 0;
    document.getElementById("intro2").style.opacity = 0;
    document.getElementById("elem2").style.opacity = 1;
    document.getElementById("elem2").style.height = '70vh';
    document.getElementById("elem2").style.paddingTop = '20vh';
    document.getElementById("elem1").style.height = '0vh';
    document.getElementById("btn1").style.opacity = 1;
    document.getElementById("elem3").style.height = '0vh';
    document.getElementById("elem3").style.paddingTop = '0vh';
    document.getElementById("elem3").style.opacity = 0;
}