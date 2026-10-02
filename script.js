// ===============================
// PROJECT DATA
// ===============================

const projects = [
    {
        name: "Automatic Fire Extinguisher",
        categories: ["hardware", "c-programming"]
    },

    {
        name: "Calculator Application",
        categories: ["java"]
    },

    {
        name: "Health Checkup Post Call GenAgent Devp",
        categories: ["internship"]
    }
];


// ===============================
// PROJECT FILTERING
// ===============================

const filterButtons =
    document.querySelectorAll(".project-filter");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Get selected filter
        const selectedFilter =
            button.dataset.filter;


        // ===============================
        // UPDATE ACTIVE BUTTON
        // ===============================

        filterButtons.forEach((btn) => {

            btn.classList.remove("active");

            btn.classList.remove("btn-primary");

            btn.classList.add("btn-outline-primary");

        });


        button.classList.add("active");

        button.classList.remove("btn-outline-primary");

        button.classList.add("btn-primary");


        // ===============================
        // FILTER PROJECTS
        // ===============================

        projectCards.forEach((card, index) => {

            const project =
                projects[index];


            if (
                selectedFilter === "all" ||
                project.categories.includes(selectedFilter)
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


// ===============================
// DARK / LIGHT MODE
// ===============================

const themeToggle =
    document.getElementById("themeToggle");


themeToggle.addEventListener("click", () => {

    // Toggle dark mode
    document.body.classList.toggle("dark-mode");


    // Change button according to theme
    if (
        document.body.classList.contains("dark-mode")
    ) {

        themeToggle.innerHTML =
            '<i class="bi bi-sun-fill"></i> Light Mode';

        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

    } else {

        themeToggle.innerHTML =
            '<i class="bi bi-moon-fill"></i> Dark Mode';

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

    }

});


// ===============================
// CONTACT FORM VALIDATION
// ===============================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", (event) => {

    // Prevent actual form submission
    event.preventDefault();


    // ===============================
    // GET FORM VALUES
    // ===============================

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    // ===============================
    // GET ERROR ELEMENTS
    // ===============================

    const nameError =
        document.getElementById("nameError");

    const emailError =
        document.getElementById("emailError");

    const messageError =
        document.getElementById("messageError");

    const formSuccess =
        document.getElementById("formSuccess");


    // ===============================
    // CLEAR OLD MESSAGES
    // ===============================

    nameError.textContent = "";

    emailError.textContent = "";

    messageError.textContent = "";

    formSuccess.classList.add("d-none");


    // Form validation status
    let isValid = true;


    // ===============================
    // NAME VALIDATION
    // ===============================

    if (name === "") {

        nameError.textContent =
            "Please enter your name.";

        isValid = false;

    }


    // ===============================
    // EMAIL VALIDATION
    // ===============================

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {

        emailError.textContent =
            "Please enter your email address.";

        isValid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        isValid = false;

    }


    // ===============================
    // MESSAGE VALIDATION
    // ===============================

    if (message === "") {

        messageError.textContent =
            "Please enter your message.";

        isValid = false;

    } else if (message.length < 10) {

        messageError.textContent =
            "Message should contain at least 10 characters.";

        isValid = false;

    }


    // ===============================
    // SUCCESS
    // ===============================

    if (isValid) {

        formSuccess.textContent =
            "Your message has been submitted successfully!";

        formSuccess.classList.remove("d-none");


        // Clear form
        contactForm.reset();

    }

});