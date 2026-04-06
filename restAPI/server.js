const express = require('express');
const app = express();
const db = require('./db');

const cors = require('cors');
app.use(cors());

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

app.listen(4600, () => {
    console.log('Server is running on port 4600');
});

app.get('/mobiles/:id', (req, res) => {
    const id = req.params.id;
    db.getMobiles(id)
        .then((result) => {
            res.json(result);
        })
        .catch(() => {
            res.status(400).json({
                message: "Error occurred",
                error: err.message
            });
        })
    // res.send('Hello, World!');
    // res.sendFile(__dirname + '/index.html');
    // res.send(`<li>Item 1</li><li>Item 2</li><li>Item 3</li>`);
});

app.get('/mobiles', (req, res) => {
    db.getMobiles()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(500).json({
                message: "Error occurred",
                error: err.message
            });
        })
})

app.post('/mobiles', (req, res) => {
    db.addMobile(req.body.name, req.body.prize, req.body.ram, req.body.storage)
        .then((result) => {
            res.json({
                "success": true,
                "message": "Mobile added successfully",
                "data": `${result}`
            })
            res.send('', result);
        })
        .catch((err) => {
            res.status(400).json({
                message: "Failed to add mobile",
                error: err.message
            });
        });
    // res.send('POST request received');
});

app.put('/mobiles/:id', (req, res) => {
    const id = req.params.id;
    const { name, prize, ram, storage } = req.body;

    db.updateMobile(id, name, prize, ram, storage)
        .then((result) => {
            res.json({
                message: "Mobile updated successfully",
                data: { id, name, prize, ram, storage }
            });
        })
        .catch((err) => {
            res.status(400).json({
                message: "Error occurred while updating mobile",
                error: err.message
            });
        });
});

app.delete('/mobiles/', (req, res) => {
    const id = req.body.id;

    if (!id) {
        return res.status(400).send("ID is required");
    }

    db.deleteMobile(id)
        .then((result) => {
            res.json({
                message: "Mobile deleted successfully"
            });
        })
        .catch(() => {
            res.json({
                message: "Error occurred while deleting mobile"
            })
        })
    // res.send('DELETE request received');
});
