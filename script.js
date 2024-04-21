let APIKey = "4foX1RfQp3MH8kN4XM2bUUSGp9TGSGwu";
document.addEventListener("DOMContentLoaded", init);
function init() {
  document.getElementById("btnSearch").addEventListener("click", (ev) => {
    ev.preventDefault();
    let url = `https://api.giphy.com/v1/stickers/search?api_key=${APIKey}&limit=1&q=`;
    let str = document.getElementById("search").value.trim();
    url = url.concat(str);
    fetch(url)
      .then((response) => response.json())
      .then((content) => {
        let figure = document.createElement("figure");
        let sticker = document.createElement("img");
        let figCaption = document.createElement("figcaption");
        sticker.src = content.data[0].images.fixed_width.url;
        sticker.alt = content.data[0].title;
        figCaption.textContent = content.data[0].title;
        figure.appendChild(sticker);
        figure.appendChild(figCaption);
        let out = document.querySelector(".out");
        out.insertAdjacentElement("afterbegin", figure);
        document.querySelector("#search").value = "";
      })
      .catch((err) => {
        console.error(err);
      });
  });
}
