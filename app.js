document.addEventListener('DOMContentLoaded', () => {
    const matchesContainer = document.getElementById('matches-container');

    const hardcodedMatches = [
        {
            homeTeam: { name: 'Arsenal' },
            awayTeam: { name: 'Chelsea' },
            utcDate: '2023-10-01T12:00:00Z',
            status: 'Matched'
        },
        {
            homeTeam: { name: 'Real Madrid' },
            awayTeam: { name: 'Barcelona' },
            utcDate: '2023-10-02T14:00:00Z',
            status: 'Scheduled'
        },
        {
            homeTeam: { name: 'Manchester United' },
            awayTeam: { name: 'Liverpool' },
            utcDate: '2023-10-03T16:00:00Z',
            status: 'Scheduled'
        }
    ];

    hardcodedMatches.forEach(match => {
        const matchElement = document.createElement('div');
        matchElement.innerHTML = `
            <h3>${match.homeTeam.name} vs ${match.awayTeam.name}</h3>
            <p>Match Date: ${new Date(match.utcDate).toLocaleDateString()}</p>
            <p>Match Status: ${match.status}</p>
        `;
        matchesContainer.appendChild(matchElement);
    });
});
