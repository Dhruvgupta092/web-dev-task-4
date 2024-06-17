document.addEventListener('DOMContentLoaded', () => {
    const trendingContent = [
        { title: 'Movie 1', image: 'assets/images/movie1.jpg' },
        { title: 'Movie 2', image: 'assets/images/movie2.jpg' },
        // Add more items
    ];

    const recommendedContent = [
        { title: 'Series 1', image: 'assets/images/series1.jpg' },
        { title: 'Series 2', image: 'assets/images/series2.jpg' },
        // Add more items
    ];

    const renderContent = (section, content) => {
        const contentGrid = document.querySelector(`.${section} .content-grid`);
        content.forEach(item => {
            const contentItem = document.createElement('div');
            contentItem.innerHTML = `<img src="${item.image}" alt="${item.title}">
                                      <h3>${item.title}</h3>`;
            contentGrid.appendChild(contentItem);
        });
    };

    renderContent('trending', trendingContent);
    renderContent('recommended', recommendedContent);

    const searchButton = document.querySelector('.search-bar button');
    searchButton.addEventListener('click', () => {
        const query = document.querySelector('.search-bar input').value.toLowerCase();

    
        // Implement search functionality
    });
});
