document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
    const backButton = document.getElementById('backButton');
    let zoomedCircle = null;

    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            if (!zoomedCircle) {
                zoomCircle(circle);
            } else if (zoomedCircle === circle) {
                resetZoom();
            }
        });
    });

    backButton.addEventListener('click', resetZoom);

    function zoomCircle(circle) {
        circle.classList.add('zoomed');
        zoomedCircle = circle;
        backButton.style.display = 'block';
        showExtraCircles(circle);
    }

    function resetZoom() {
        if (zoomedCircle) {
            zoomedCircle.classList.remove('zoomed');
            hideExtraCircles();
            zoomedCircle = null;
            backButton.style.display = 'none';
        }
    }

    function showExtraCircles(circle) {
        const extraCircles = document.createElement('div');
        extraCircles.className = 'extraCircles';
        for (let i = 0; i < 3; i++) {
            const newCircle = document.createElement('div');
            newCircle.className = 'circle';
            newCircle.textContent = `Sous-cercle ${i + 1}`;
            extraCircles.appendChild(newCircle);
        }
        circle.appendChild(extraCircles);
    }

    function hideExtraCircles() {
        const extraCircles = document.querySelector('.extraCircles');
        if (extraCircles) {
            extraCircles.remove();
        }
    }
});
