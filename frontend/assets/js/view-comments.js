fetch('/api/comments/all')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('comment-list');
    container.innerHTML = '';

    data.forEach(comment => {
      const card = document.createElement('div');
      card.className = 'bg-gray-800 p-4 rounded-xl shadow-md';

      card.innerHTML = `
        <p><span class="font-bold">Student:</span> ${comment.student_name}</p>
        <p><span class="font-bold">Type:</span> ${comment.comment_type}</p>
        <p><span class="font-bold">Message:</span> ${comment.content}</p>
        <p class="text-sm text-gray-400 mt-2">Posted: ${new Date(comment.created_at).toLocaleString()}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error('Error fetching comments:', err);
  });
