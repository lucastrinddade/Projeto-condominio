const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'condominio'
});

app.get('/condominos', (req, res) => {
    connection.query('SELECT * FROM condominos', (err, results) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json(results);
    });
});

app.post('/condominos', (req, res) => {
    const { nome, telefone, email, quantidade_automoveis, tipo } = req.body;

    const sql = `
        INSERT INTO condominos
        (nome, telefone, email, quantidade_automoveis, tipo)
        VALUES (?, ?, ?, ?, ?)
    `;

    connection.query(
        sql,
        [nome, telefone, email, quantidade_automoveis, tipo],
        (err, result) => {
            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                mensagem: 'Condômino cadastrado com sucesso!'
            });
        }
    );
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});