// js/app.js

document.getElementById('visitorForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const purpose = document.getElementById('purpose').value;
    const time = document.getElementById('time').value;

    // Simple validation
    if (name === "" || contact === "" || email === "" || purpose === "" || time === "") {
        alert("Please fill in all required fields.");
        return;
    }

    // Validate contact number
    if (!/^[0-9]{10}$/.test(contact)) {
        alert("Contact number should be 10 digits.");
        return;
    }

    // Simulate form submission (for now)
    console.log({
        name,
        contact,
        email,
        company,
        purpose,
        time
    });

    alert('Form submitted successfully!');
    
    // Reset form
    document.getElementById('visitorForm').reset();
});

// Autocomplete for the company field
const companyField = document.getElementById('company');
const companies = ["Google", "Facebook", "Apple", "Amazon", "Microsoft"];

companyField.addEventListener('input', function() {
    const inputValue = this.value.toLowerCase();
    const suggestions = companies.filter(company => company.toLowerCase().startsWith(inputValue));

    // Display suggestions (autocomplete)
    // In real implementation, you can make this more user-friendly
    console.log(suggestions);
});
