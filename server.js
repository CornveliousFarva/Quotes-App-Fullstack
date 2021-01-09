const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hi everybody! Hi Dr. Nick.');
});

app.listen(PORT, () => {
    console.log(`App is up and running. Listening on port ${PORT}`)
})