const array = [
"thinking-face",
"rasing-hand",
"arm",
"grass",
"volt",
"tip",
"patlight",
"heart"
]

const div = document.createElement("div");
div.className = "hoge";
div.style.position = "absolute";
div.style.textAlign = "center";
div.style.top = "0" ;
div.style.left = "31%";
div.style.width = "300px";
div.style.height = "54px";
div.style.backgroundColor = "#1DA1F2";
div.style.borderRadius = "2.5em";
document.body.appendChild(div);


function reqListener () {
    console.log(this.responseText);
    const number = JSON.parse(this.responseText);
    const words = number.map(i => array[i]);
    console.log(words);
}
  
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://localhost:8000");
oReq.send();



