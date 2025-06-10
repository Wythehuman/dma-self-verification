
document.getElementById("verifyForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const nrc = document.getElementById("nrc").value.trim();
  const cert = document.getElementById("certificate").value;
  const resultPanel = document.getElementById("resultPanel");
  const resultText = document.getElementById("resultText");

  if (nrc && cert) {
    resultText.innerText = `✅ Verification Successful!\nName: Mg Mg\nCertificate: ${cert}\nNRC: ${nrc}\nValid Until: 01-Jan-2027`;
    resultPanel.classList.remove("hidden");
  } else {
    resultText.innerText = "❌ Please fill in all fields.";
    resultPanel.classList.remove("hidden");
  }
});
