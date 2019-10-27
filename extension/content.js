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
div.style.display = "none";
div.style.alignItems = "center";
div.style.justifyContent = "center";
div.style.fontSize = "23px";
div.style.top = "152px";
div.style.left = "70px";
div.style.width = "250px";
div.style.height = "50px";
div.style.backgroundColor = "rgba(255,255,255,0.5)";
div.style.borderRadius = "2.5em";
document.body.appendChild(div);

let t = Date.now();
const f = () => {
    if (Date.now() - t >= 5000) {
        div.style.display = "none";
    }
}
window.setInterval(f,1000);

function reqListener () {
    console.log(this.responseText);
    const number = JSON.parse(this.responseText);
    const words = number.map(i => array[i]);
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
    div.style.display = "flex";
    t = Date.now();
}
  
document.onkeydown = function(event){    
    function EncodeHTMLForm(data) {
        var params = [];

        for(var name in data) {
            var value = data[name];
            var param = encodeURIComponent(name) + '=' + encodeURIComponent(value);

            params.push(param);
        }

        return params.join('&').replace(/%20/g, '+');
    }

    if (event.code === "Enter"){
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.open("POST", "http://localhost:8000");
        // oReq.open("POST", "http://192.168.33.10:8000");
        oReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        const text = document.querySelector(".js-compose-text").value;
        oReq.send(EncodeHTMLForm({sentence: text.split("\n").slice(-1)[0]}));
    }
}

