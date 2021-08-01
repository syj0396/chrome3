/*
const title = document.getElementById("title");

title.innerText = "Got you!";

console.log(title.id); //title
console.log(title.className); //hello
*/

const h1 = document.querySelector("div.hello:first-child h1");

/*
function handleTitleClick() {
    h1.style.color = blue;
}

function handleMouseEnter() {
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("ALL GOOOD");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
*/



function handleTitleClick() {
    /*
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
    */

    //오류 발생 위험이 있음. 철자 실수 같은..
    /*
    if (h1.className === "active") {
        h1.className = "";
    } else {
        h1.className = "active";
    }
    */

    //이번엔 html에서 기존에 있던 class가 변경되어 사라지는 오류가 발생할 수 있음.
    /*
    const clickedClass = "active";
    if (h1.className === clickedClass) {
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }
    */

    //해결
    /*
    const clickedClass = "clicked";
    if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
    */

    //toggle: class name이 classList에 "clicked"가 있으면 지우고, 없으면 추가. 한 줄이면 끝!
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);