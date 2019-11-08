const array = [
    "🤔",
    "✋",
    "💪",
    "🌱",
    "⚡️",
    "💧",
    "🚨",
    "❤️",
    "☔️",
    "📺",
    "💤",
    "🙏",
]

const slackMap = new Map();

const div = document.createElement("div");
div.className = "hoge";
div.style.display = "none";
div.style.alignItems = "center";
div.style.justifyContent = "center";
div.style.fontSize = "23px";
if (document.URL.indexOf("slack") >= 0) {
  div.style.position = "fixed";
  div.style.bottom = "70px";
  div.style.left = "355px";
  div.style.zIndex = "200";

  [
    ":thinking_face:",
    ":hand:",
    ":muscle:",
    ":seedling:",
    ":zap:",
    ":droplet:",
    ":rotating_light:",
    ":heart:",
    ":umbrella_with_rain_drops:",
    ":tv:",
    ":zzz:",
    ":pray:",
  ].forEach((command, i) => {
    slackMap.set(array[i], command);
  });
} else {
  div.style.position = "absolute";
  div.style.top = "152px";
  div.style.left = "70px";
}
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
    const words = number.map(i => array[i]).slice(0, 6);
    div.innerHTML = "";
    words.forEach(word => {
        const span = document.createElement("span");
        span.innerHTML = word;
        span.onclick = () => {
            if (document.URL.indexOf("slack") >= 0) {
              const p = document.querySelector(".ql-editor").lastChild;
              p.innerHTML += slackMap.get(word);
            } else {
              const textarea = document.querySelector(".js-compose-text");
              textarea.value += word;
            }
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
        if (document.URL.indexOf("slack") >= 0) {
          const editor = document.querySelector(".ql-editor");
          let sentence = editor.lastChild.innerText;
          if (sentence.indexOf("\n") >= 0) {
            const len = editor.children.length;
            if (len >= 2) sentence = editor.children[len - 2].innerText;
          }
          oReq.send(EncodeHTMLForm({sentence: sentence}));
        } else {
          const text = document.querySelector(".js-compose-text").value;
          oReq.send(EncodeHTMLForm({sentence: text.split("\n").slice(-1)[0]}));
        }
    }
}

