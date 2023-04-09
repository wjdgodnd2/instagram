
document.addEventListener("DOMContentLoaded", function(e){
    let btn = document.querySelector("#mybtn");
    btn.addEventListener("mouseover", function(e){
      e.target.style.backgroundColor = "#ffff00";
    });
    
    btn.addEventListener("mouseout", function(e){
      e.target.style.backgroundColor = "#ffffff";
      e.target.style.color="#b00";
      e.target.style.fontSize = "2vw";
    });
    
    btn.addEventListener("click", function(e){
      e.target.style.backgroundColor = "#00ff00";
      e.target.style.color = "#ffffff";
      e.target.style.fontSize = "4vw";
    });

    let icon = document.querySelector("#fa-icon")
    icon.addEventListener("mouseover", function(e){
        e.target.setAttribute("class", "fas fa-cog fa-spin");
    });
    icon.addEventListener("mouseout", function(e){
        e.target.setAttribute("class", "fas fa-cog");
    });
});