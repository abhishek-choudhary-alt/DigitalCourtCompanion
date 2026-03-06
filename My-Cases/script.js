// Sample case data
const casesData = [
  {
    name: "Maria vs. ABC Corp.",
    caseNumber: "#2023-015684",
    courtNumber: "Court 3",
    lawyer: "Charles Lee",
    judge: "Patel",
    lastDate: "Mar 15, 2024",
    nextDate: "Apr 10, 2024",
    status: "Closed",
  },
  {
    name: "State vs. John Doe",
    caseNumber: "#2023-011123",
    courtNumber: "Court 3",
    lawyer: "Susan Wong",
    judge: "Mehta",
    lastDate: "Mar 04, 2024",
    nextDate: "Mar 28, 2024",
    status: "Open",
  },
  {
    name: "Alice vs. XYZ Ltd.",
    caseNumber: "#2022-009563",
    courtNumber: "Court 3",
    lawyer: "David Patel",
    judge: "Reddy",
    lastDate: "Feb 20, 2024",
    nextDate: null,
    status: "Closed",
  },
  {
    name: "Smith vs. State Bank",
    caseNumber: "#2022-005432",
    courtNumber: "Court 3",
    lawyer: "Akash Mehta",
    judge: "Sharma",
    lastDate: "Nov 22, 2023",
    nextDate: "Jan 15, 2024",
    status: "Open",
  },
];

let currentPage = 1;
const rowsPerPage = 3;

function displayCases(data) {
  const tableBody = document.querySelector("#casesTable tbody");
  tableBody.innerHTML = "";

  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const paginatedCases = data.slice(start, end);

  paginatedCases.forEach((c) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${c.name}</td>
      <td>${c.caseNumber}</td>
      <td>${c.courtNumber || "-"}</td>
      <td>${c.lawyer}</td>
      <td>${c.judge}</td>
      <td>${c.lastDate || "-"}</td>
      <td>${c.nextDate || "-"}</td>
      <td class="status-${c.status.toLowerCase()}">${c.status}</td>
    `;
    tableBody.appendChild(row);
  });

  document.getElementById("pageInfo").textContent = `Page ${currentPage}`;
}

// Pagination controls
document.getElementById("prevPage").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayCases(casesData);
  }
});

document.getElementById("nextPage").addEventListener("click", () => {
  if (currentPage * rowsPerPage < casesData.length) {
    currentPage++;
    displayCases(casesData);
  }
});

// Search functionality
document.getElementById("search").addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = casesData.filter(
    (c) =>
      c.name.toLowerCase().includes(keyword) ||
      c.caseNumber.toLowerCase().includes(keyword) ||
      c.courtNumber.toLowerCase().includes(keyword) ||
      c.lawyer.toLowerCase().includes(keyword) ||
      c.judge.toLowerCase().includes(keyword),
  );
  currentPage = 1;
  displayCases(filtered);
});

// Initial load
displayCases(casesData);
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

  console.log("Case submitted:", caseData);

  // Backend devs can replace this with a POST request:
  // fetch("/api/cases", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(caseData) })

  alert("Case submitted successfully! (Frontend only)");
});