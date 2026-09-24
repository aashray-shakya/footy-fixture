// app.js
document.addEventListener('DOMContentLoaded', () => {
    fetchMatchData();
});

async function fetchMatchData() {
    const apiKey = process.env.FOOTBALL_DATA_API_KEY; // Use environment variable
    const url = `https://api.football-data.org/v2/matches?apiToken=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.matches) {
            const matchesContainer = document.getElementById('matches-container');
            matchesContainer.innerHTML = '';

            data.matches.forEach(match => {
                const matchElement = document.createElement('div');
                matchElement.innerHTML = `
                    <h3>${match.homeTeam.name} vs ${match.awayTeam.name}</h3>
                    <p>Match Date: ${new Date(match.utcDate).toLocaleDateString()}</p>
                    <p>Match Status: ${match.status}</p>
                `;
                matchesContainer.appendChild(matchElement);
            });
        } else {
            console.error('No matches found');
        }
    } catch (error) {
        console.error('Error fetching match data:', error);
    }
}
