document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("guidanceForm");
  const submitBtn = form.querySelector("button");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      topic: document.getElementById("topic").value,
      message: document.getElementById("message").value,
    };

    emailjs
      .send("service_ixx0j4r", "template_0d9hzek", data)
      .then(() => {
        showToast("✔ Query sent successfully!", "success");
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Query";
      })
      .catch(() => {
        showToast("❌ Failed to send. Try again.", "error");
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Query";
      });
  });
});

function showToast(message, type) {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 100);
  setTimeout(() => {
    toast.classList.remove("show");
    toast.remove();
  }, 3000);
}
