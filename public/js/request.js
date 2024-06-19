const requestHandler = async (event) => {
    event.preventDefault();
    const songTitle = document.getElementById("song-title").value.trim();
    const artistName = document.getElementById("artist-name").value.trim();
    const eventId = document.getElementById("event-id").value;

    if (!songTitle || !artistName) {
        alert("Please complete both song title and artist name fields.")
        return;
    }

    if (songTitle && artistName) {
        const response = await fetch(`/api/requests`, {
          method: "POST",
          body: JSON.stringify({ songTitle, artistName, eventId }),
          headers: { "Content-Type": "application/json" },
        });
        
        console.log(response);
        if (response.ok) {
            document.location.replace(`/events/${eventId}`);
        } else {
            alert("Song request failed. Please try again later.");
        }
    }
};



// Get user request input from song-request.handlebars
document
.querySelector(".song-request-form")
.addEventListener("submit", requestHandler);