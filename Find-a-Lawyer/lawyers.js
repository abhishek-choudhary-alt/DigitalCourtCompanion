// Sample lawyer data (replace with backend API later)
let lawyersData = [
  {
    name: "Arjun Mehta",
    expertise: "Criminal",
    experience: 12,
    fees: 5000,
    phone: "9876543210",
    email: "arjun.mehta@example.com",
    age: 45,
    gender: "Male",
  },
  {
    name: "Priya Kapoor",
    expertise: "Family",
    experience: 8,
    fees: 3000,
    phone: "9123456789",
    email: "priya.kapoor@example.com",
    age: 38,
    gender: "Female",
  },
  {
    name: "Rahul Sharma",
    expertise: "Corporate",
    experience: 15,
    fees: 8000,
    phone: "9988776655",
    email: "rahul.sharma@example.com",
    age: 50,
    gender: "Male",
  },
];

let currentPage = 1;
const rowsPerPage = 5;

function displayLawyers(data) {
  const tableBody = document.querySelector("#lawyersTable tbody");
  tableBody.innerHTML = "";

  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const paginated = data.slice(start, end);

  paginated.forEach((l) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${l.name}</td>
      <td>${l.expertise}</td>
      <td>${l.experience}</td>
      <td>${l.fees}</td>
      <td><a href="tel:${l.phone}">${l.phone}</a></td>
      <td><a href="mailto:${l.email}">${l.email}</a></td>
      <td>${l.age}</td>
      <td>${l.gender}</td>
      <td><button onclick="hireLawyer('${l.name}')">Hire</button></td>
    `;
    tableBody.appendChild(row);
  });

  document.getElementById("pageInfo").textContent = `Page ${currentPage}`;
}

// Pagination
document.getElementById("prevPage").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    applyFilters();
  }
});

document.getElementById("nextPage").addEventListener("click", () => {
  if (currentPage * rowsPerPage < lawyersData.length) {
    currentPage++;
    applyFilters();
  }
});

// Search + Filters
function applyFilters() {
  const keyword = document.getElementById("search").value.toLowerCase();
  const gender = document.getElementById("filterGender").value;
  const expertise = document.getElementById("filterExpertise").value;
  const minFees = parseInt(document.getElementById("minFees").value) || 0;
  const maxFees =
    parseInt(document.getElementById("maxFees").value) || Infinity;

  const filtered = lawyersData.filter(
    (l) =>
      (l.name.toLowerCase().includes(keyword) ||
        l.expertise.toLowerCase().includes(keyword) ||
        l.email.toLowerCase().includes(keyword)) &&
      (gender === "" || l.gender === gender) &&
      (expertise === "" || l.expertise === expertise) &&
      l.fees >= minFees &&
      l.fees <= maxFees,
  );

  displayLawyers(filtered);
}

document.getElementById("search").addEventListener("input", applyFilters);
document
  .getElementById("filterGender")
  .addEventListener("change", applyFilters);
document
  .getElementById("filterExpertise")
  .addEventListener("change", applyFilters);
document.getElementById("minFees").addEventListener("input", applyFilters);
document.getElementById("maxFees").addEventListener("input", applyFilters);

// Hire function
function hireLawyer(name) {
  alert(`You have chosen to hire ${name}. Backend will process this later.`);
}

// Initial load
applyFilters();
