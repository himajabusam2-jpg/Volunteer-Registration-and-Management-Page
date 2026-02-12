
function getStatusFromAvailability(availability) {
    const hour = new Date().getHours();

    if (availability === "mrg") 
        return hour >= 6 && hour < 12 ? "active" : "inactive";

    if (availability === "Evg") 
        return hour >= 16 && hour < 21 ? "active" : "inactive";

    if (availability === "flex") 
        return "active";

    return "inactive";
}

window.onload = function () {
    const volunteers = JSON.parse(localStorage.getItem("volunteers")) || [];
    const tbody = document.querySelector("table tbody");

    tbody.innerHTML = "";
    
    volunteers.forEach(v => {
        const row = document.createElement("tr");
        const nameTd = document.createElement("td");
        nameTd.textContent = `${v.firstName} ${v.lastName}`;
        const emailTd = document.createElement("td");
        emailTd.textContent = v.email;
        const phoneTd = document.createElement("td");
        phoneTd.textContent = v.phone;
        const skillsTd = document.createElement("td");
        v.skills.forEach(skill => {
            const span = document.createElement("span");
            span.className = "skill";
            span.textContent = skill;
            skillsTd.appendChild(span);
        });
        const statusTd = document.createElement("td");
        const statusSpan = document.createElement("span");
        const available=v.availability
        const status = getStatusFromAvailability(available);
        statusSpan.className = status
        statusSpan.textContent =status;
        statusTd.appendChild(statusSpan);
        const joinedTd = document.createElement("td");
        const today=new Date()
        joinedTd.textContent = today.getFullYear() + "-" +
        String(today.getMonth() + 1).padStart(2, '0') + "-" +
        String(today.getDate()).padStart(2, '0');
        row.appendChild(nameTd);
        row.appendChild(emailTd);
        row.appendChild(phoneTd);
        row.appendChild(skillsTd);
        row.appendChild(statusTd);
        row.appendChild(joinedTd);
        tbody.appendChild(row);
    });
};

function searchItem() {
    const input = document.getElementById("searchInput");
    if (!input) return;

    const query = input.value.toLowerCase();

    const rows = document.querySelectorAll("table tbody tr");

    rows.forEach(row => {
        const rowText = row.innerText.toLowerCase();

        if (rowText.includes(query)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}


