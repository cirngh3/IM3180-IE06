// Example function to fetch data and update the chart
function fetchData() {
    const query = document.getElementById('search').value;
    
    if (!query) {
        alert('Please enter a search query.');
        return;
    }

    // Simulate a data fetch with mock data
    const mockData = {
        labels: ['Positive', 'Negative', 'Neutral'],
        datasets: [{
            label: 'Sentiment Analysis',
            data: [40, 35, 25],  // Replace this with real data
            backgroundColor: ['#28a745', '#dc3545', '#ffc107'],
        }]
    };

    renderChart(mockData);
}

// Function to render chart with data
function renderChart(data) {
    const ctx = document.getElementById('chartContainer').getContext('2d');

    new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
            },
        }
    });
}
