
document.getElementById("revealMessage").addEventListener("click", function () {
    const hiddenMessage = document.getElementById("hiddenMessage");
    hiddenMessage.classList.toggle("hidden");
  
 
    const hiddenButtons = document.querySelectorAll(".hiddenButton");
    hiddenButtons.forEach(button => button.classList.add("revealed"));
  });
  

  const hiddenButtons = document.querySelectorAll(".hiddenButton");
  hiddenButtons.forEach(button => {
    button.addEventListener("click", function () {
      const additionalMessage = document.getElementById("additionalMessage");
      additionalMessage.textContent = button.getAttribute("data-message");
      additionalMessage.classList.remove("hidden");
    });
  });
  