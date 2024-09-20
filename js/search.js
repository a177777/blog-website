document.getElementById('search-button').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const articles = document.querySelectorAll('.article h2');
    
    articles.forEach(article => {
        if (article.textContent.toLowerCase().includes(searchInput)) {
            article.parentElement.style.display = 'block';
        } else {
            article.parentElement.style.display = 'none';
        }
    });
});
