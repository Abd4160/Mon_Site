// Sélection des éléments nécessaires
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Ajout d'un événement au bouton
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); // Bascule entre le mode sombre et clair

    // Mise à jour du texte du bouton
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Désactiver le mode sombre';
    } else {
        darkModeToggle.textContent = 'Activer le mode sombre';
    }
});
