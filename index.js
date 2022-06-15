const express = require('express')
const app = express()
const port = process.env.PORT || 3000
var path = require('path');
app.use(express.static("public"));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
})


app.get('/app', (req, res) => {

    res.sendFile(path.join(__dirname, 'test.html'))

})


app.get('/login/:password', (req, res) => {

    let passwordUrlDict = {
        fadhl: "https://cellxgene-example-data.czi.technology/pbmc3k.h5ad",
        password: "https://cellxgene-example-data.czi.technology/tabula-muris.h5ad"
    }


    res.send({ "DATASET": passwordUrlDict[req.params.password] } || false)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
