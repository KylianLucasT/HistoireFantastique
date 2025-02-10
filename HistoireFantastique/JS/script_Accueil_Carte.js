// Initialisation de la carte Leaflet
var map = L.map('map', {
    minZoom: -1,      // Autoriser un zoom arrière
    maxZoom: 1.5,     // Zoom maximale
    center: [0, 0],   // Centre initial de la carte
    zoom: 0,          // Niveau de zoom initial
    crs: L.CRS.Simple // Utiliser un système de coordonnées simples
});

// Charger l'image à utiliser comme "fond de carte"
var imageUrl = '../IMAGES/Carte.jpg';     // Le chemin vers ton image
var imageBounds = [[0, 0], [1152, 1536]]; // Les dimensions de l'image (hauteur x largeur)

// Vérifiez que l'image existe pour éviter les erreurs
L.imageOverlay(imageUrl, imageBounds).addTo(map).on('load error', function(e) {
    if (e.type === 'error') {
        console.error("Erreur lors du chargement de l'image de fond.");
    }
});

// Ajouter l'image sur la carte
L.imageOverlay(imageUrl, imageBounds).addTo(map);

// Définir les limites de la carte pour éviter de sortir de l'image
map.setMaxBounds(imageBounds);

// Centrer la carte sur l'image
map.fitBounds(imageBounds);

// Liste des emplacements avec URLs et icônes spécifiques
var locations = [
    { coords: [460, 405], url: '../TERRITOIRES/Duches/Duche_De_Venteux.html', iconUrl: '../IMAGES/Emblemes/Embleme_Cesnard.png' },
    { coords: [470, 575], url: '../TERRITOIRES/Comtes/Comte_De_Briserois.html', iconUrl: '../IMAGES/icon_bouclier.png' }
];

// Parcourir la liste des emplacements et ajouter les marqueurs avec icônes personnalisées
locations.forEach(function(location) {
    // Créer une icône personnalisée pour chaque emplacement
    var customIcon = L.icon({
        iconUrl: location.iconUrl, // URL spécifique de l'icône pour cet emplacement
        iconSize: [32, 32],        // Taille de l'icône
        iconAnchor: [16, 16]       // Point d'ancrage de l'icône (milieu)
    });

    // Ajouter le marqueur avec l'icône personnalisée sur la carte
    var marker = L.marker(location.coords, { icon: customIcon }).addTo(map);

    // Ajouter un événement de clic pour rediriger vers l'URL correspondante
    marker.on('click', function() {
        window.location.href = location.url;
    });
});
