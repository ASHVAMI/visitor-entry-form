const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit', (req, res) => {
    const { name, contact, email, company, purpose, time } = req.body;
    
    // Perform server-side validation (if necessary)
    
    // Simulate saving data to a database
    console.log('Visitor Details:', { name, contact, email, company, purpose, time });

    res.send('Form submitted successfully');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
