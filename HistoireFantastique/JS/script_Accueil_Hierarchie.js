// Mappage des noms de couleur aux codes hexadécimaux
const colorMap = {
    "empire":  "#4a3c2e",
    "royaume": "#6b5b4a",
    "duché":   "#AD956B",
    "comté":   "#AD9C92",
    "autre":   "#D4C2A1",
    // Ajoutez d'autres couleurs si nécessaire
};

// Données de la structure avec noms, dirigeants et noms de couleur
const empireStructure = [
    {
        id:         "empire-des-cinq-terres", // Ajout de l'id unique pour ciblage
        name:       "Empire des Cinq Terres",
        leader:     "...",
        color:      "empire",
        name_url:   "",
        leader_url: "",
        subSections: [
            {
                name:       "...",
                leader:     "...",
                color:      "duché",
                name_url:   "",
                leader_url: "",
                subSections: [
                    { name: "Comté des Terres de L'Eau",     leader: "...", color: "comté", name_url: "", leader_url: "" },
                    { name: "Comté d'Ondin",                 leader: "...", color: "comté", name_url: "", leader_url: "" },
                    { name: "Comté d'Arlam",                 leader: "...", color: "comté", name_url: "", leader_url: "" },
                    { name: "Comté des Montagnes du Soleil", leader: "...", color: "comté", name_url: "", leader_url: "" },
                    { name: "Comté de Geuledours",           leader: "...", color: "comté", name_url: "", leader_url: "" }
                ]
            },
            {
                name:       "...",
                leader:     "...",
                color:      "duché",
                name_url:   "",
                leader_url: "",
                subSections: [
                    { name: "Comté de Dougonstone",  leader: "Dougrin Goldarion", color: "comté", name_url: "", leader_url: "" },
                    { name: "Comté du Val Darak",    leader: "...", color: "comté", name_url: "", leader_url: "" },
                    { name: "Comté de Crinière",     leader: "...", color: "comté", name_url: "", leader_url: "" },
                    { name: "Comté des Iles de Nal", leader: "...", color: "comté", name_url: "", leader_url: "" }
                ]
            },
            {
                name:       "Duc de Pachyme",
                leader:     "...",
                color:      "duché",
                name_url:   "",
                leader_url: "",
                subSections: [
                    { name: "Comté de Port Défense",      leader: "...", color: "comté", name_url: "", leader_url: "" },
                    { name: "Comté des Jattestor",        leader: "...", color: "comté", name_url: "", leader_url: "" },
                    { name: "Comté des Montagnes Rouges", leader: "...", color: "comté", name_url: "", leader_url: "" },
                    { name: "Comté des Dunes de Sel",     leader: "...", color: "comté", name_url: "", leader_url: "" }
                ]
            },
            {
                name:       "Duc de Musthar",
                leader:     "...",
                color:      "duché",
                name_url:   "",
                leader_url: "",
                subSections: [
                    { name: "Comté de Derme",  leader: "Agatha Ferrat",    color: "comté", name_url: "", leader_url: "" },
                    { name: "Comté d'Osuard",  leader: "...",              color: "comté", name_url: "", leader_url: "" },
                    { name: "Comté de Musth",  leader: "...",              color: "comté", name_url: "", leader_url: "" },
                    { name: "Comté d'Ivoiran", leader: "Nicolas Dentreux", color: "comté", name_url: "", leader_url: "" }
                ]
            },
            {
                name:       "Duché de Venteux",
                leader:     "Richard Cesnard",
                color:      "duché",
                name_url:   "../TERRITOIRES/Duches/Duche_De_Venteux.html",
                leader_url: "../PERSONNES/Cesnard/Richard_Cesnard.html",
                subSections: [
                    { name: "Comté de Fort Typhon", leader: "Richard Cesnard", color: "comté", name_url: "", leader_url: "" },
                    { name: "Comté de Hautebrises", leader: "...",             color: "comté", name_url: "", leader_url: "" },
                    { name: "...",                  leader: "...",             color: "comté", name_url: "", leader_url: "" },
                    { name: "Comté de Briserois",   leader: "...",             color: "comté", name_url: "", leader_url: "" }
                ]
            },
            {
                name:       "...",
                leader:     "...",
                color:      "duché",
                name_url:   "",
                leader_url: "",
                subSections: [
                    { name: "Comté du Nord",               leader: "...", color: "comté", name_url: "", leader_url: "" },
                    { name: "Comté des Montagnes d'Armor", leader: "...", color: "comté", name_url: "", leader_url: "" },
                    { name: "Comté de Maestral",           leader: "...", color: "comté", name_url: "", leader_url: "" },
                ]
            },
            {
                name:       "...",
                leader:     "...",
                color:      "duché",
                name_url:   "",
                leader_url: "",
                subSections: [
                    { name: "Comté de Blanc Baleine", leader: "...", color: "comté", name_url: "", leader_url: "" },
                    { name: "Comté de Bois du Lac",   leader: "...", color: "comté", name_url: "", leader_url: "" },
                    { name: "Comté de Fraigard",      leader: "...", color: "comté", name_url: "", leader_url: "" },
                    { name: "Comté d'Affamie",        leader: "...", color: "comté", name_url: "", leader_url: "" },
                    { name: "Comté de Bois Murmure",  leader: "...", color: "comté", name_url: "", leader_url: "" },
                ]
            },
            {
                name:       "Royaume du Serpent",
                leader:     "Roi ... Metonoïa",
                color:      "royaume",
                name_url:   "",
                leader_url: "",
                subSections: [
                    { name: "Comté de Bois Là-Haut",     leader: "...", color: "comté", name_url: "", leader_url: "" },
                    { name: "Comté de Rempette",         leader: "...", color: "comté", name_url: "", leader_url: "" },
                    { name: "Comté des Ile d'Emeraudes", leader: "...", color: "comté", name_url: "", leader_url: "" },
                    { name: "Comté de Bois Lointain",    leader: "...", color: "comté", name_url: "", leader_url: "" },
                    { name: "Comté de Termes",           leader: "...", color: "comté", name_url: "", leader_url: "" },
                ]
            }
        ]
    },
    {
        name:       "La Citée Libre d'Oeur",
        leader:     "...",
        color:      "autre",
        name_url:   "",
        leader_url: "",
    },
    {
        name:       "Estiram",
        leader:     "...",
        color:      "autre",
        name_url:   "",
        leader_url: "",
    }
];

// Fonction de création d'affichage de chaque niveau de la structure avec détails
function displayStructure(container, structure, level = 0) {

    // Créer un conteneur pour le niveau actuel
    const levelContainer = document.createElement('div');
    levelContainer.classList.add('level');
    
    // Afficher chaque élément du niveau
    structure.forEach((section, index) => {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('section');

        // Appliquer l'ID s'il est défini dans la section
        if (section.id) {
            sectionDiv.id = section.id;
        }
        
        // Appliquer la couleur de fond en vérifiant le mappage de couleurs
        const backgroundColor = colorMap[section.color] || section.color; // Si non trouvé dans le mappage, utilise directement
        sectionDiv.style.backgroundColor = backgroundColor;

        // Titre et détails de la section
        sectionDiv.innerHTML = `
            <h2><a href="${section.name_url}"><span class="name">${section.name}</span></a></h2>
            <p><a href="${section.leader_url}"><span class="leader">${section.leader}</a></span></p>
        `;

        // Appel récursif pour afficher les sous-niveaux
        if (section.subSections) {
            displayStructure(sectionDiv, section.subSections, level + 1);
        }

        levelContainer.appendChild(sectionDiv);
    });

    container.appendChild(levelContainer);
}

// Initialiser l'affichage avec l'Empire
const structureContainer = document.getElementById('structure-container');
displayStructure(structureContainer, empireStructure);

// Centre la vue sur "Empire des Cinq Terres" après le chargement
window.onload = function() {
    const empireElement = document.getElementById("empire-des-cinq-terres");
    if (empireElement) {
        empireElement.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
};

