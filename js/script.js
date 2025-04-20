document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");
    
    burger.addEventListener("click", function() {
        navLinks.classList.toggle("nav-active");
        burger.classList.toggle("toggle");
    });
    
    const contactForm = document.getElementById("contactForm");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
            
            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields!");
            } else {
                alert("Thank you for your message, " + name + "! I'll get back to you soon.");
                contactForm.reset();
            }
        });
    }
});