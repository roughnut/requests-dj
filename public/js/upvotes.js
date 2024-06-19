document.addEventListener('DOMContentLoaded', () => {
    const upvoteButtons = document.querySelectorAll('.upvote-button');
  
    upvoteButtons.forEach(button => {
      button.addEventListener('click', async (event) => {
        event.preventDefault();
  
        const songId = button.getAttribute('upvote-button-id');
        const eventId = button.getAttribute('event-id');
  
        try {
          const response = await fetch(`/api/upvotes/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              songId: songId,
            }),
          });
  
          if (response.ok) {
            const result = await response.json();
            console.log('Upvote successful:', result);
            document.location.replace(`/events/${eventId}`);
          } else {
            const error = await response.json();
            console.error('Upvote failed:', error.message);
            alert(error.message);
          }
        } catch (error) {
          console.error('An error occurred:', error);
          alert('An error occurred while upvoting. Please try again later.');
        }
      });
    });
  });
  