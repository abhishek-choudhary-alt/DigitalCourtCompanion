document.getElementById("newCaseForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const caseData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    caseTitle: document.getElementById("caseTitle").value,
    caseNumber: document.getElementById("caseNumber").value,
    courtNumber: document.getElementById("courtNumber").value,
    hearingDate: document.getElementById("hearingDate").value,
    judge: document.getElementById("judge").value,
  };

  // For now, just log it
  console.log("Case submitted:", caseData);

  // Later backend devs can replace this with:
  // fetch("/api/cases", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(caseData)
  // }).then(res => res.json())
  //   .then(data => console.log("Saved:", data));

  alert("Case submitted successfully! (Frontend only)");
});
