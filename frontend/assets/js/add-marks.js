document.getElementById("marks-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    student_id: document.getElementById("student_id").value,
    subject: document.getElementById("subject").value,
    term: document.getElementById("term").value,
    year: document.getElementById("year").value,
    marks: document.getElementById("marks").value
  };

  fetch("/api/term-marks/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(result => {
      document.getElementById("response-msg").innerText = result.message;
    })
    .catch(err => console.error("Error adding marks:", err));
});
