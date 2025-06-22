// Login POST Request (example)
fetch('/api/auth/student-login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, password })
})
.then(res => res.json())
.then(data => {
  if (data.success) {
    // ✅ Store student ID in localStorage
    localStorage.setItem("student_id", data.student.id);

    // Also save role if needed
    localStorage.setItem("role", "student");

    // Redirect to dashboard or student-marks page
    window.location.href = "student-marks.html";
  } else {
    alert("Login failed!");
  }
});
