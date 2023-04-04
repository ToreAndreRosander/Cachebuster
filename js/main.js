// update the element id "result" with a list of currently loaded css and js files.
function updateResult() {
    let result = document.getElementById("result");
    let css = document.getElementsByTagName("link");
    let js = document.getElementsByTagName("script");
    let cssList = "";
    let jsList = "";
    for (let i = 0; i < css.length; i++) {
        cssList += css[i].href + " ";
    }
    for (let i = 0; i < js.length; i++) {
        jsList += js[i].src + " ";
    }
    result.innerHTML = "CSS: " + cssList + " JS: " + jsList;
}

updateResult();