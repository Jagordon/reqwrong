const express = require('express')
const got = require('got');

const app = express()
const port = 9002
app.get('/outbound', (req, res) => {
    return got('http://localhost:9001', {
        headers: {
            ...req.headers,
            'session-id': 'papa-stub-session-id',
            'return-path': 'receipt'
        }
    });
})

app.get('/receipt', (req, res) => {
    console.log(req.headers);
    res.send(req.headers);
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})