document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault(); 
    const fname = document.getElementById("FName").value.trim();
    const lname = document.getElementById("Lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phno").value.trim();

    const gender = document.querySelector('input[name="Gender"]:checked');
    const availability = document.getElementById("available").value;
    const skills = document.querySelectorAll('input[name="skills"]:checked');
    if (fname.length < 3) {
        document.getElementById("fn").textContent = 'First Name must contain at least 3 characters';
        return;
    }
    else{
        document.getElementById("fn").textContent = '';
    }
    if (lname.length < 3) {
        document.getElementById("ln").textContent = "Last Name must contain at least 3 characters";
        return;
    }
    else{
        document.getElementById("ln").textContent = '';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.com$/;
    if (!emailPattern.test(email)) {
        document.getElementById("mail").textContent = "You must give a vaild email";
        return;
    }
    else{
        document.getElementById("mail").textContent = '';
    }
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("ph").textContent = "Phone number must be exactly 10 digits";
        return;
    }
    else{
        document.getElementById("ph").textContent = '';
    }
    if (!gender) {
        document.getElementById("gen").textContent = "Please select your gender";
        return;
    }
    else{
        document.getElementById("gen").textContent = '';
    }
    if (availability === "") {
        document.getElementById("avail").textContent = "Please select your availability";
        return;
    }
    else{
        document.getElementById("avail").textContent = '';
    }
    if (skills.length === 0) {
        document.getElementById("skill").textContent = "Please select at least one skill";
        return;
    }
    else{
        document.getElementById("skill").textContent = '';
    }
            const formData = {
            firstName: document.getElementById("FName").value.trim(),
            lastName: document.getElementById("Lname").value.trim(),
            email: document.getElementById("email").value.trim(),
            phone: document.getElementById("phno").value.trim(),
            gender: document.querySelector('input[name="Gender"]:checked')?.value || "",
            availability: document.getElementById("available").value,
            skills: Array.from(
                document.querySelectorAll('input[name="skills"]:checked')
            ).map(cb => cb.value),
            motivation: document.getElementById("ai").value.trim(),
            joined: new Date().toLocaleDateString()
        };

        console.log("Form Data:", formData);
        let volunteers = JSON.parse(localStorage.getItem("volunteers"));

        if (!Array.isArray(volunteers)) {
            volunteers = [];
        }

        volunteers.push(formData);

        localStorage.setItem("volunteers", JSON.stringify(volunteers));

        console.log("Saved to localStorage:", localStorage.getItem("volunteers"));
        alert("Form submitted successfully!");
        document.getElementById("myForm").reset(); 
    });