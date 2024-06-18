document.addEventListener("DOMContentLoaded", () => {
    const eventForm = document.querySelector(".event-form");

    if (eventForm) {
        eventForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            const name = document.getElementById("event-title").value.trim();
            const description = document.getElementById("event-desc").value.trim();
            const date = document.getElementById("event-date").value;
            const id = eventForm.getAttribute("event-id");

            if (!name || !description || !date) {
                alert("Please fill out all fields.");
                return;
            }

            try {
                const response = await fetch(`/api/events/${id}`, {
                    method: "PUT",
                    body: JSON.stringify({ name, description, date }),
                    headers: { "Content-Type": "application/json" },
                });

                if (response.ok) {
                    document.location.replace(`/events/${id}`);
                } else {
                    alert("Event update failed. Please try again later.");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("An error occurred while updating the event.");
            }
        });
    }
});
