const express = require('express');
const app = express();

app.get('/customers', (req, res) => {
    const customers = [
        {id:1, name:"mohamed" },
        {id:2, name:"basam" },
        {id:3, name:"tamer" }
    ]
    res.json(customers)
})

const port = 5000
//process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`port ${port} is running`)
})