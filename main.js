// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const heartIcons = document.querySelectorAll(".like-glyph");
  const errorModal = document.getElementById("modal");
  function showErrorModal(errorMessage) {
    const modalMessage = document.getElementById("modal-message");
    modalMessage.textContent = errorMessage;

    errorModal.classList.remove("hidden");
    setTimeout(() => {
      errorModal.classList.add("hidden");
    }, 3000);
  }

  function updateHeartStatus(heartIcon) {
    if (heartIcon.textContent === EMPTY_HEART) {
      heartIcon.textContent = FULL_HEART;
      heartIcon.classList.add("activated-heart");
    } else {
      heartIcon.textContent = EMPTY_HEART;
      heartIcon.classList.remove("activated-heart");
    }
  }

  heartIcons.forEach((heartIcon) => {
    heartIcon.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          updateHeartStatus(heartIcon);
        })
        .catch((error) => {
          showErrorModal(error);
        });
    });
  });
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
