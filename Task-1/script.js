document.getElementById('votingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const candidate = document.getElementById('candidate').value;
    document.getElementById('result').textContent = `You voted for ${candidate}`;

    // Here you would typically send the vote to the server using fetch or XMLHttpRequest
    // Example:
    /*
    fetch('/submit-vote', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ candidate: candidate })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        document.getElementById('result').textContent = `Vote submitted successfully!`;
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('result').textContent = `Error submitting vote.`;
    });
    */
});
