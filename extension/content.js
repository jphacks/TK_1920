const array = [
    "🤔",
    "✋",
    "💪",
    "🌱",
    "⚡️",
    "💧",
    "🚨",
    "❤️"
]

const div = document.createElement("div");
div.className = "hoge";
div.style.position = "absolute";
div.style.display = "flex";
div.style.alignItems = "center";
div.style.justifyContent = "center";
div.style.fontSize = "23px";
div.style.top = "152px";
div.style.left = "4.8%";
div.style.width = "250px";
div.style.height = "50px";
div.style.backgroundColor = "rgba(255,255,255,0.5)";
div.style.borderRadius = "2.5em";
document.body.appendChild(div);

function reqListener () {
    console.log(this.responseText);
    const number = JSON.parse(this.responseText);
    const words = number.map(i => array[i]);
    console.log(words);
    div.innerHTML = "";
    words.forEach(word => {
        const span = document.createElement("span");
        span.innerHTML = word;
        span.onclick = () => {
            const textarea = document.querySelector(".js-compose-text");
            textarea.value += word;
        };
        div.appendChild(span);
    });
}
  
document.onkeydown = function(event){    
    if (event.code === "Enter"){
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.open("GET", "http://localhost:8000");
        //oReq.open("GET", "http://192.168.33.10:8000");
        oReq.send();
    }
}