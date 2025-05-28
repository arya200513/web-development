// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Simulate fetching stock data
    const stockData = [
        { symbol: 'AAPL', company: 'Apple Inc.', price: 174.55, change: '+1.2%' },
        { symbol: 'GOOGL', company: 'Alphabet Inc.', price: 2834.50, change: '-0.8%' },
        { symbol: 'AMZN', company: 'Amazon.com Inc.', price: 3520.25, change: '+2.5%' }
    ];

    // Populate stock prices table
    const tableBody = document.querySelector('#stocks table tbody');
    stockData.forEach(stock => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${stock.symbol}</td>
            <td>${stock.company}</td>
            <td>$${stock.price.toFixed(2)}</td>
            <td>${stock.change}</td>
        `;
        tableBody.appendChild(row);
    });

    // Simulate fetching news articles
    const newsArticles = [
        'Market opens higher as tech stocks rebound.',
        'Analysts predict strong growth for AI-driven companies.',
        'Global markets react to Federal Reserve policy changes.'
    ];

    // Populate news feed
    const newsFeed = document.getElementById('news-feed');
    newsArticles.forEach(article => {
        const listItem = document.createElement('li');
        listItem.textContent = article;
        newsFeed.appendChild(listItem);
    });

    // Simulate fetching market summary data
    const marketSummary = [
        { label: 'Dow Jones', value: '34,500.12' },
        { label: 'NASDAQ', value: '14,052.34' },
        { label: 'S&P 500', value: '4,280.15' }
    ];

    // Populate market summary section
    const marketSummaryDiv = document.getElementById('market-summary');
    marketSummary.forEach(summary => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${summary.label}</strong><br>${summary.value}`;
        marketSummaryDiv.appendChild(div);
    });
});
