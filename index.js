//Will be improved once I learned a better method
//2021 December
function toggleTextDecember2021(){
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
function toggleTextJanuary2022(){
    var elms = document.getElementsByTagName("h3");
  
    Array.from(elms).forEach((x) => {
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    })
}

//2022 February
function toggleTextFebruary2022(){
    var elms = document.getElementsByTagName("h4");
  
    Array.from(elms).forEach((x) => {
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    })
}

//2024 July
function toggleTextJuly2024(){
  var elms = document.getElementsByTagName("h5");

  Array.from(elms).forEach((x) => {
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  })
}

//2024 August
function toggleTextAugust2024(){
  var elms = document.getElementsByTagName("h6");

  Array.from(elms).forEach((x) => {
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  })
}


function loadHeader() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'header.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                document.getElementById('header').innerHTML = xhr.responseText;
            } else {
                console.error('Error loading header:', xhr.status);
                document.getElementById('header').innerHTML = '<p>Error loading header. Please try again later.</p>';
            }
        }
    };
    xhr.send();
}

function loadFooter() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'footer.html', true);
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
          if (xhr.status === 200) {
              document.getElementById('footer').innerHTML = xhr.responseText;
          } else {
              console.error('Error loading Footer:', xhr.status);
              document.getElementById('footer').innerHTML = '<p>Error loading Footer. Please try again later.</p>';
          }
      }
  };
  xhr.send();
}

// Call the function to load the header
loadHeader();
loadFooter();

document.addEventListener('DOMContentLoaded', () => {
  const modals = document.querySelectorAll('.modal');
  const buttons = document.querySelectorAll('.card-button');
  const closeButtons = document.querySelectorAll('.modal-close');

  buttons.forEach(button => {
      button.addEventListener('click', (event) => {
          event.preventDefault(); // Prevent default link behavior
          const modalId = button.getAttribute('data-modal');
          const modal = document.getElementById(modalId);
          if (modal) {
              modal.style.display = 'block'; // Show the modal
          }
      });
  });

  closeButtons.forEach(closeButton => {
      closeButton.addEventListener('click', () => {
          closeButton.closest('.modal').style.display = 'none'; // Hide the modal
      });
  });

  window.addEventListener('click', (event) => {
      if (event.target.classList.contains('modal')) {
          event.target.style.display = 'none'; // Hide the modal if clicked outside
      }
  });
});
