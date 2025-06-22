// assets/js/comment.js

document.getElementById('comment-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // 👉 Replace 5 with the logged-in student's real ID
  const student_id = 5;
  const comment_type = document.getElementById('comment_type').value;
  const content = document.getElementById('comment_content').value;

  fetch('/api/comments/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      student_id: student_id,
      comment_type: comment_type,
      content: content
    })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById('comment-msg').innerText = data.message || 'Submitted!';
      document.getElementById('comment-form').reset();
    })
    .catch(err => {
      console.error(err);
      document.getElementById('comment-msg').innerText = 'Error submitting comment.';
    });
});
