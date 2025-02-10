let characterList = [
    // Territoire

        // Regions
        { name: "Venteux",              url: "TERRITOIRES/Regions/Venteux.html"                 },
            { name: "Duché de Fort Typhon", url: "TERRITOIRES/Duches/Duche_De_Venteux.html"     },
            { name: "Comté de Briserois",   url: "TERRITOIRES/Comtes/Comte_De_Briserois.html"   },
            { name: "Comté de Hautebrises", url: "TERRITOIRES/Comtes/Comte_De_Hautebrises.html" },

            { name: "L'ile du Chevalier",   url: "TERRITOIRES/Iles/Ile_Du_Chevalier.html"       },

            { name: "Fort Typhon",   url: "TERRITOIRES/Lieux/PlaceFortes/Fort_Typhon.html"      },

    // Personnes
        // Goldarion
        { name: "Dougrin Goldarion"         , url: "PERSONNES/Goldarion/Dougrin_Goldarion_V" },
        { name: "Dougrin V"                 , url: "PERSONNES/Goldarion/Dougrin_Goldarion_V" },
        { name: "L'Empereur des Cinq Terres", url: "PERSONNES/Goldarion/Dougrin_Goldarion_V" },

        // Cesnard
        { name: "Richard Cesnard",         url: "PERSONNES/Cesnard/Richard_Cesnard.html"  },
        { name: "Duc de Fort Typhon",      url: "PERSONNES/Cesnard/Richard_Cesnard.html"  },
        { name: "Eristine Cesnard",        url: "PERSONNES/Cesnard/Eristine_Cesnard.html" },
        { name: "Duchesse de Fort Typhon", url: "PERSONNES/Cesnard/Eristine_Cesnard.html" }
];

function showSuggestions(query) {
    let suggestions = [];

    if (query.length > 0) {
        suggestions = characterList.filter(character =>
            character.name.toLowerCase().includes(query.toLowerCase())
        );
    }

    displaySuggestions(suggestions);
}

function displaySuggestions(suggestions) {
    const suggestionsContainer = document.getElementById("suggestions");
    suggestionsContainer.innerHTML = "";

    if (suggestions.length > 0) {
        suggestions.forEach(suggestion => {
            const suggestionElement = document.createElement("p");
            suggestionElement.textContent = suggestion.name;
            suggestionElement.onclick = () => goToPage(suggestion.url);
            suggestionsContainer.appendChild(suggestionElement);
        });
    } else {
        suggestionsContainer.innerHTML = "<p>Aucune suggestion trouvée</p>";
    }
}

function goToPage(url) {
    // Récupérer l'attribut data-level du fichier HTML actuel
    const currentLevel = parseInt(document.documentElement.getAttribute('data-level'), 10);

    // Construire le chemin en fonction du niveau actuel
    const path = "../".repeat(currentLevel) + url;

    // Rediriger vers le chemin calculé
    window.location.href = path;
}

document.querySelectorAll('img').forEach((img) => {
    img.onerror = () => {
        const currentLevel = parseInt(document.documentElement.getAttribute('data-level'), 10);
        img.src = "../".repeat(currentLevel) + 'IMAGES/Icon/Logo1_KikHistoires_Claire_Transparent.png';
    };
});