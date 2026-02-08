document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("guidanceForm");
  const formStatus = document.getElementById("formStatus");

  if (!form || !formStatus) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const topic = document.getElementById("topic").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !topic || !message) {
      formStatus.textContent = "Please fill in all fields.";
      formStatus.style.color = "red";
      return;
    }

    const subject = `Guidance Request: ${topic}`;
    const body = `
  Name: ${name}
  Email: ${email}
  Topic: ${topic}
  
  Message:
  ${message}
      `;

    window.location.href = `mailto:nirajandevhub108@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    formStatus.textContent = "Opening email client...";
    formStatus.style.color = "green";

    form.reset();
  });
});
