
document.getElementById("verifyForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const nrc = document.getElementById("nrc").value.trim();
  const cert = document.getElementById("certificate").value;

  const resultPanel = document.getElementById("resultPanel");
  const resultText = document.getElementById("resultText");

  if (nrc && cert) {
    resultText.innerText = `✅ Verification Success:
      NRC: ${nrc}
      Certificate: ${cert}`;
    resultPanel.classList.remove("hidden");
  } else {
    resultText.innerText = "❌ Please fill in all fields correctly.";
    resultPanel.classList.remove("hidden");
  }
});
