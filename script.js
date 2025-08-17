    // -------------------------
    // FORM SUBMISSION TO GOOGLE SHEETS
    // -------------------------
    document.getElementById("admissionForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
        name: this.name.value.trim(),
        email: this.email.value.trim(),
        mobile: this.mobile.value.trim(),
        state: this.state.value,
        course: this.course.value,
        specialization: this.specialization.value.trim()
    };

    // Replace with your actual Google Apps Script URL
    fetch("https://script.google.com/macros/s/AKfycbzsxZSu82PT0uaSja-iaZPKF7yaY6DtImz6D5ACUCb-buWeOgF8R1tyq4Lx0YBJQQuo/exec", {
        method: "POST",
        body: JSON.stringify(formData)
    })
        .then(res => res.json())
        .then(() => {
        alert("✅ Form submitted successfully!");
        this.reset();
        })
        .catch(err => alert("❌ Error: " + err));
    });

    // -------------------------
    // SMOOTH SCROLL FOR NAV LINKS
    // -------------------------
    document.querySelectorAll('.main-nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        }
    });
    });

    // -------------------------
    // AUTO HIGHLIGHT ACTIVE NAV LINK ON SCROLL
    // -------------------------
    const sections = document.querySelectorAll("section, header");
    const navLinks = document.querySelectorAll(".main-nav a");

    window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
        }
    });
    });

    // -------------------------
    // FADE-IN ON SCROLL
    // -------------------------
    const faders = document.querySelectorAll('.fade-in');
    window.addEventListener('scroll', () => {
    faders.forEach(fade => {
        const rect = fade.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
        fade.classList.add('visible');
        }
    });
    });

    // -------------------------
    // OPTIONAL: AUTO-SCROLL LOGO ROW
    // -------------------------
    const logoRow = document.querySelector(".logo-row");
    if (logoRow) {
    let scrollAmount = 0;
    setInterval(() => {
        scrollAmount += 1; // speed
        logoRow.scrollLeft = scrollAmount;
        if (scrollAmount >= logoRow.scrollWidth - logoRow.clientWidth) {
        scrollAmount = 0; // reset to start
        }
    }, 30); // controls speed of movement
    }
    // Program Tabs
    document.querySelectorAll(".tab-btn").forEach(button => {
    button.addEventListener("click", () => {
        const tabId = button.dataset.tab;

        // Remove active from all buttons
        document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        // Remove active from all tab contents
        document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
        document.getElementById(tabId).classList.add("active");
    });
    });
