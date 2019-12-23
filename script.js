var indexpage = 0;
var elem1 = document.getElementById("elem1").style;
var elem2 = document.getElementById("elem2").style;
var elem3 = document.getElementById("elem3").style;
var elem4 = document.getElementById("elem4").style;
var btn1 = document.getElementById("btn1").style;
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


function gointro() { //elem1
    indexpage = 0;
    elem2.opacity = 0;
    elem4.opacity = 0;
    btn1.opacity = 0;
    setTimeout(function() {
        elem2.display = 'none';
        elem4.display = 'none';
        elem1.display = 'flex';
        setTimeout(function() { elem1.opacity = 1; }, 20);
    }, 500);
}

function gocomp() { //elem2
    btn1.opacity = 1;
    elem1.opacity = 0;
    elem3.opacity = 0;
    setTimeout(function() {
        elem1.display = 'none';
        elem3.display = "none";
        elem2.display = 'flex';
        setTimeout(function() { elem2.opacity = 1; }, 20);
    }, 500);
}

function goatouts() { //elem3
    elem2.opacity = 0;
    elem4.opacity = 0;
    setTimeout(function() {
        elem2.display = 'none';
        elem4.display = "none";
        elem3.display = 'flex';
        setTimeout(function() { elem3.opacity = 1; }, 20);
    }, 500);
}

function goexp() { //elem4
    elem1.opacity = 0;
    elem3.opacity = 0;
    setTimeout(function() {
        elem1.display = 'none';
        elem3.display = "none";
        elem4.display = 'flex';
        setTimeout(function() { elem4.opacity = 1; }, 20);
    }, 500);
}