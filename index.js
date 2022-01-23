//Will be improved once I learned a better method

function toggleTextAll(){
    for (let i = 2; i < 4; i++) {
        var elms = document.getElementsByTagName("h"+i);
        Array.from(elms).forEach((x) => {
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          })
    }
}

//2021 December
function toggleTextDecember(){
    var elms = document.getElementsByTagName("h2");
  
    Array.from(elms).forEach((x) => {
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    })
}

//2022 January
function toggleTextJanuary(){
    var elms = document.getElementsByTagName("h3");
  
    Array.from(elms).forEach((x) => {
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    })
}

