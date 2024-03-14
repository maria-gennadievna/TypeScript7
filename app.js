var skyButton = document.getElementById('sky');
if (skyButton)
    skyButton.onclick = function () {
        sky(1000);
    };
function sky() {
    setInterval(() => {
            var starSize = Math.random() * 5;
            var positionTop = Math.random() * window.innerHeight;
            var positionLeft = Math.random() * window.innerWidth;
            var position = {
                "top": positionTop + 'px',
                'left': positionLeft + 'px'
            };
            star(starSize, position);
    }, 100);
    
   
}
function star(size, position) {
    var wrapper = document.getElementById('wrapper');
    var starElement = document.createElement('div');
    starElement.innerHTML = "<svg id=\"star\" height=\"10px\" width=\"10px\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" \n\t viewBox=\"0 0 47.94 47.94\" xml:space=\"preserve\">\n<path style=\"fill:#ED8A19;\" d=\"M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757\n\tc2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042\n\tc0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685\n\tc-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528\n\tc-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956\n\tC22.602,0.567,25.338,0.567,26.285,2.486z\"/>\n</svg>";
    starElement.style.width = size + 'px';
    starElement.style.height = size + 'px';
    starElement.style.position = 'absolute';
    starElement.style.top = position.top;
    starElement.style.left = position.left;
    if (wrapper)
        wrapper.appendChild(starElement);
}
