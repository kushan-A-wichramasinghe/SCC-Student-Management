document.addEventListener("DOMContentLoaded", () => {
  const listEl = document.getElementById("notification-list");
  const form = document.getElementById("notification-form");

  // Load all notifications
  fetch('/api/notifications/all')
    .then(res => res.json())
    .then(data => {
      listEl.innerHTML = '';
      data.forEach(n => {
        const box = document.createElement('div');
        box.className = "bg-gray-800 p-4 rounded shadow";
        box.innerHTML = `
          <h3 class="text-lg font-bold">${n.title}</h3>
          <p>${n.message}</p>
          <p class="text-sm text-gray-400 mt-2">By ${n.sender_role} | ${new Date(n.created_at).toLocaleString()}</p>
        `;
        listEl.appendChild(box);
      });
    });

  // Handle new notification submit
  form.addEventListener("submit", e => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const message = document.getElementById('message').value;
    const sender_role = document.getElementById('sender_role').value;

    fetch('/api/notifications/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, message, sender_role })
    })
      .then(res => res.json())
      .then(data => {
        document.getElementById("notif-msg").innerText = data.message;
        form.reset();
        setTimeout(() => location.reload(), 1000);
      })
      .catch(err => console.error("Submit error:", err));
  });
});
