const eventHandler = async (event) => {
    event.preventDefault();
    const name = document.getElementById("event-title").value.trim();
    const description = document.getElementById("event-desc").value.trim();
    const date = document.getElementById("event-date").value;

    if (!name || !description || !date) {
        alert("Please fill out all fields.")
        return;
    }

    if (name && description && date) {        
        const response = await fetch("/api/events", {
          method: "POST",
          body: JSON.stringify({ name, description, date }),
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace(`/`);
        } else {
            alert("Event request failed. Please try again later.");
        }
    }
};



// Get user request input from newEvent.handlebars
document
.querySelector(".event-form")
.addEventListener("submit", eventHandler);