fetch('/api/dashboard')
  .then(res => res.json())
  .then(data => {
    document.getElementById('total-students').innerText = data.total_students;
    document.getElementById('online-students').innerText = data.online_students;
    document.getElementById('total-teachers').innerText = data.total_teachers;
  })
  .catch(err => {
    console.error("Dashboard fetch error:", err);
  });
