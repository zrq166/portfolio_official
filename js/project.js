let timer2 = null;
function BlueRotate2(radius, unit_degree) {
    let blue = document.getElementById("blue2");
    let ox = 25;
    let oy = 25;
    let degree = 0;
    clearInterval(timer2);
    timer2 = setInterval(function () {
        degree += unit_degree;
        let rad = Math.PI / 180 * degree;
        let x = Math.sin(rad) * radius;
        let y = Math.cos(rad) * radius;
        blue.style.left = ox + x - 10 + "px";
        blue.style.top = oy + y - 10 + "px";
    }, 30);
}

function GreySet(radius, number) {
    let gray;
    if (number === 2) {
        gray = document.getElementById("gray2");
    }
    gray.style.left = -2 - (radius - 25) + "px";
    gray.style.top = -2 - (radius - 25) + "px";
    gray.style.width = 2 * radius + "px";
    gray.style.height = 2 * radius + "px";

}

function BluePoint2(value) {
    let point = document.getElementById("blue_point2");
    point.style.left = -8 + value * 400 / 16 + "px";
    let velo = Math.sqrt(value);
    point.style.top = 198 - velo * 50 + "px";
}


window.onload = function () {
    GreySet(50, 2);
    temp2_degree = Math.sqrt(27);
    BlueRotate2(50, temp2_degree);
    BluePoint2(1);
    let box_element = document.getElementById("selectbox");
    box_element.onchange = function () {
        let mass = document.getElementById("myRange2").value;
        let radius = box_element.value * 50;
        GreySet(radius, 2);
        let unit_degree = Math.sqrt((27 * mass) / (box_element.value ** 3));
        BlueRotate2(radius, unit_degree);
    };
    let slider_element2 = document.getElementById("myRange2");
    slider_element2.oninput = function () {
        let radius = document.getElementById("selectbox").value * 50;
        GreySet(radius, 2);
        let unit_degree = Math.sqrt((27 * slider_element2.value) / (document.getElementById("selectbox").value ** 3));
        BlueRotate2(radius, unit_degree);
        BluePoint2(slider_element2.value);
        document.getElementById("mass").innerHTML = "" + slider_element2.value;
        document.getElementById("velo2").innerHTML = "" + Math.sqrt(slider_element2.value).toFixed(2);
    };

};