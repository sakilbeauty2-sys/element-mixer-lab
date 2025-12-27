const table = document.getElementById("table");
const selectedDiv = document.getElementById("selected");
const output = document.getElementById("output");

let picked = [];

const RULES = {
  "Fe+C": {
    name: "Steel",
    explain: "Carbon makes iron stronger",
    use: "Buildings, tools"
  },
  "Ti+Cr": {
    name: "Titanium-Chromium Alloy",
    explain: "Strong and corrosion resistant",
    use: "Aerospace"
  },
  "Fe+Mn+Cr": {
    name: "High Strength Steel",
    explain: "Used in heavy construction",
    use: "Bridges"
  }
};

ELEMENTS.forEach(el => {
  const d = document.createElement("div");
  d.className = "element";
  d.innerHTML = `<b>${el}</b>`;
  d.onclick = () => {
    if (picked.includes(el)) return;
    if (picked.length >= 4) return;
    picked.push(el);
    d.classList.add("selected");
    updateSelected();
  };
  table.appendChild(d);
});

function updateSelected() {
  selectedDiv.innerHTML = "Selected: " + picked.join(" + ");
}

function mix() {
  if (picked.length < 2) {
    output.innerHTML = "Select at least 2 elements";
    return;
  }

  const key = picked.sort().join("+");

  if (RULES[key]) {
    const r = RULES[key];
    output.innerHTML = `
      <h2>${r.name}</h2>
      <p>${r.explain}</p>
      <p><b>Use:</b> ${r.use}</p>
    `;
  } else {
    output.innerHTML = `
      <h2>Unknown Mix</h2>
      <p>No known stable result</p>
    `;
  }
}
