document.addEventListener("DOMContentLoaded", () => {
    const deleteButtons = document.querySelectorAll(".delete-event");


deleteButtons.forEach((button) => {
    button.addEventListener("click", async (event) => {
      event.preventDefault();
      const eventId = event.target.getAttribute("delete-event-id");

      if (eventId) {
        try {
          const response = await fetch(`/api/events/${eventId}`, {
            method: "DELETE",
          });

          if (response.ok) {
            document.location.replace("/");
          } else {
            alert("Failed to delete event");
          }
        } catch (error) {
          console.error("Error:", error);
          alert("An error occurred while deleting the event");
        }
      }
    });
  });
});