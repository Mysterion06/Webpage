// ----- News Slider
function toggleText(tagName) {
  var elms = document.getElementsByTagName(tagName);

  Array.from(elms).forEach((x) => {
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  });
}

// ----- News Slider

// ----- Header & Footer
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

function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');
  elements.forEach(el => {
      const file = el.getAttribute('data-include');
      fetch(file)
          .then(response => response.text())
          .then(data => {
              el.innerHTML = data;
          })
          .catch(error => console.log('Error:', error));
  });
}
// ----- Header & Footer

// ----- SRTPluginManager
document.addEventListener('DOMContentLoaded', includeHTML);
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
// ----- SRTPluginManager

// ----- Commission table
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the active class from all buttons
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Set default tab to "SingleMethods"
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tablinks.active").click();
});
// ----- Commission table