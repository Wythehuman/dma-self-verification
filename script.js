
async function verify() {
  const name = document.getElementById("name").value.trim();
  const nrc = document.getElementById("nrc").value.trim();
  const certType = document.getElementById("certType").value;

  const res = await fetch(`/api/verify?name=${name}&nrc=${nrc}&certType=${certType}`);
  const data = await res.json();

  const resultBox = document.getElementById("result");
  if (data.found) {
    resultBox.innerHTML = `<p style='color:green;'>✅ Verified: ${data.certNo}</p>`;
  } else {
    resultBox.innerHTML = `<p style='color:red;'>❌ No matching certificate found.</p>`;
  }
}
