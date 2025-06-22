const studentId = localStorage.getItem("student_id"); // set this during login

fetch(`/api/term-marks/student/${studentId}`)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("marks-container");
    container.innerHTML = "";

    data.forEach(mark => {
      const card = document.createElement("div");
      card.className = "bg-gray-800 p-4 rounded shadow";
      card.innerHTML = `
        <h3 class="text-xl font-bold">${mark.subject} - ${mark.term}</h3>
        <p>Year: ${mark.year}</p>
        <p>Marks: <span class="text-green-400">${mark.marks}</span></p>
        <p class="text-sm text-gray-400 mt-1">${new Date(mark.created_at).toLocaleString()}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error("Error fetching marks:", err));
