document.addEventListener("DOMContentLoaded", function () {
    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = reveals[i].getBoundingClientRect().top;
            let elementVisible = 150; // Déclenche l'effet quand l'élément est à 150px du bas de l'écran

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }

    // Déclenchement initial lors du chargement de la page
    revealOnScroll();

    // Déclenchement à chaque mouvement de scroll
    window.addEventListener("scroll", revealOnScroll);

    // ==========================================
    // INTEGRATION : Optimisation de la Barre de Navigation au Scroll
    // ==========================================
    const nav = document.querySelector("nav");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            // Rendre le fond plus opaque et ajouter une ombre au scroll
            nav.classList.add("bg-slate-950/95", "shadow-lg", "border-slate-800");
            nav.classList.remove("bg-slate-950/80");
        } else {
            // Remettre l'état transparent initial
            nav.classList.add("bg-slate-950/80");
            nav.classList.remove("bg-slate-950/95", "shadow-lg");
        }
    });

    // ==========================================
    // INTEGRATION : Interaction sur le bouton [console.log]
    // ==========================================
    const consoleBtn = document.querySelector('a[href="#contact"].border-emerald-500\\/30');
    if (consoleBtn) {
        consoleBtn.addEventListener("click", function (e) {
            // Petit message sympa dans la console pour les recruteurs/visiteurs curieux
            console.log("%c[SEC-OPS] Connexion entrante détectée vers l'infrastructure de Luca.", "color: #34d399; font-weight: bold; font-size: 14px;");
            console.log("Status: 200 OK - Redirection vers la passerelle de contact.");
        });
    }
});