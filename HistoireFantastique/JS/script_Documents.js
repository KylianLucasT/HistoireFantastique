let currentPage = 1;

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const pages = document.querySelectorAll('.page');

function showPage(pageNumber) {
    pages.forEach((page, index) => {
        if (index + 1 === pageNumber) {
            page.style.display = 'block';
        } else {
            page.style.display = 'none';
        }
    });
}

showPage(currentPage);

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < pages.length) {
        currentPage++;
        showPage(currentPage);
    }
});
