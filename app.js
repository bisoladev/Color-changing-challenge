clickBtn = document.getElementById("btn-click");

function random_bg_color() {
    var x = Math.random() * 256;
    var y = Math.random() * 256;
    var z = Math.random() * 256;
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  
    document.body.style.background = bgColor;
    }
clickBtn.addEventListener('click', random_bg_color);
