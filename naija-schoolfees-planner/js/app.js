// ==========================
// ELEMENTS
// ==========================
const form = document.getElementById("feesForm");
const results = document.getElementById("results");

const lightBtn = document.getElementById("lightThemeBtn");
const darkBtn = document.getElementById("darkThemeBtn");

const yearEl = document.getElementById("year");

// ==========================
// FOOTER YEAR
// ==========================
yearEl.textContent = new Date().getFullYear();

// ==========================
// THEME HANDLING
// ==========================
lightBtn.addEventListener("click", () => {
  document.body.classList.remove("theme-dark");
  document.body.classList.add("theme-light");
});

darkBtn.addEventListener("click", () => {
  document.body.classList.remove("theme-light");
  document.body.classList.add("theme-dark");
});

// ==========================
// CALCULATOR LOGIC
// ==========================
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const studentName = document.getElementById("studentName").value.trim();
  const schoolName = document.getElementById("schoolName").value.trim();
  const city = document.getElementById("city").value.trim();
  const schoolType = document.getElementById("schoolType").value;
  const termFees = Number(document.getElementById("termFees").value);
  const months = Number(document.getElementById("monthsToTerm").value);

  if (termFees <= 0 || months <= 0) {
    results.classList.remove("hidden");
    results.innerHTML = `<strong>Please enter valid amounts.</strong>`;
    return;
  }

  const monthlySavings = Math.ceil(termFees / months);

  let summary = `
    <h3>Savings Plan Summary</h3>
    <p><strong>Location:</strong> ${city}</p>
    <p><strong>School Type:</strong> ${schoolType === "primary" ? "Primary School" : "Secondary School"}</p>
  `;

  if (studentName) {
    summary += `<p><strong>Student:</strong> ${studentName}</p>`;
  }

  if (schoolName) {
    summary += `<p><strong>School:</strong> ${schoolName}</p>`;
  }

  summary += `
    <p><strong>Term Fees:</strong> ₦${termFees.toLocaleString()}</p>
    <p><strong>Months to Next Term:</strong> ${months}</p>
    <hr />
    <p style="font-size:1.2rem;">
      You need to save <strong>₦${monthlySavings.toLocaleString()}</strong> every month
      to comfortably pay the next term's school fees.
    </p>
  `;

  results.innerHTML = summary;
  results.classList.remove("hidden");
});

// ==========================
// RESET HANDLING
// ==========================
form.addEventListener("reset", () => {
  results.classList.add("hidden");
  results.innerHTML = "";
});
