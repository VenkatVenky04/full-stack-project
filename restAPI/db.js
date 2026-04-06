const sql = require('mysql2');

const con = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Venkat04@',
    database: 'test'
});

function getMobiles(id) {
    return new Promise((success, reject) => {
        if (id) {
            con.query(`SELECT * FROM mobiles WHERE id = ?`, [id],
                function (err, rows, col) {
                    if (err) {
                        reject(err);
                    } else {
                        success(rows);
                    }
                }
            )
        } else {
            con.query(`SELECT * From mobiles`, function (err, rows, col) {
                if (err) {
                    reject(err);
                } else {
                    success(rows);
                }
            })
        }
    })
    // con.query(`SELECT * From mobiles`, function (err, rows, col) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(rows, 'cols', col);
    //     }
    // })
}

function addMobile(name, prize, ram, storage) {
    return new Promise((success, reject) => {
        con.query(`INSERT INTO mobiles (name, prize, ram, storage) VALUES (?,?,?,?)`, [name, prize, ram, storage],
            function (err, rows, col) {
                if (err) {
                    reject(err);
                } else {
                    success(rows);
                }
            })
    })
    // con.query(`INSERT INTO mobiles (name, prize, ram, storage) VALUES (?,?,?,?)`, [name, prize, ram, storage],
    //     function (err, rows, col) {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             console.log(rows, 'cols', col);
    //         }
    //     })
}

function updateMobile(id, name, prize, ram, storage) {
    return new Promise((success, reject) => {
        con.query(`UPDATE mobiles SET name = ?, prize = ?, ram = ?, storage = ? WHERE id = ?`, [name, prize, ram, storage, id],
            function (err, rows, cols) {
                if (err) {
                    reject(err);
                } else {
                    success(rows);
                }
            })
    })
}

function deleteMobile(id) {
    return new Promise((success, reject) => {
        getMobiles(id).then((rows) => {
            if (rows.length > 0) {
                con.query(`DELETE FROM mobiles WHERE id = ?`, [id],
                    function (err, res) {
                        if (err) {
                            reject(500);
                        } else {
                            success(res);
                        }
                    }
                )
            } else {
                reject(404);
            }
        })

    })
}
// getMobiles();
// addMobile('OnePlus Nord', 29999, '8GB', '128GB');

module.exports = {
    getMobiles, addMobile, updateMobile, deleteMobile
}