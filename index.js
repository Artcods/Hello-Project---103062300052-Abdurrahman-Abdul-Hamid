/* set up express.js */
const path = require('path')
const express = require('express')
const app = express()

/* Menampilkan data dari query data.json ke ejs */
const tagData = require('./data.json')

/* menambahkan template engine ejs */
app.set('view engine', 'ejs')



/* set up res untuk ejs */
app.get('/', (req, res) => {
    res.render('home')
})

app.listen(8080, () => {
    console.log('http://localhost:8080')
})

/* passing data */

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    res.render('random', { num })
})

/* passing lebih lanjut */
/* dan menampilkan data query */

app.get('/t/:tag', (req, res) => {
    const { tag } = req.params
    /* console.log(tagData) */

    const data = tagData[tag]
    if(data) {
        res.render('tag', {data})
    } else {
        res.render('notfound', {tag})
    }
})

app.get('/list', (req, res) => {
    const lists = ['hello', 'world', 'what']
    res.render('list', {lists})
})

/* Memanggil node tanpa harus sesuai path-nya */
app.set('views', path.join(__dirname, '/views'))

/* Membuat static folder */

app.use(express.static(path.join(__dirname, '/public'))) // sesuaikan dengan foldernya

app.use(express.static(path.join(__dirname, '/privet')))

/* Menambahkan Comment dibawah nya */