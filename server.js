var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var request = require('request')

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static('./public'))

app.get('/', function(request, response){
    response.sendFile('./public/html/index.html', {root: './'})
})

console.log("The server is alive")

app.post('/validate-cargo', function(req, res) {
    
    var totalWeight = (req.body.beerKey * 18) + (req.body.gatoradeKey * 35) + (req.body.soupKey * 6) + (req.body.TPKey * 14)
    var totalCost = (req.body.beerKey * 20) + (req.body.gatoradeKey * 13) + (req.body.soupKey * 15) + (req.body.TPKey * 16)

    if (totalCost > 200) {
        res.send("You picked out too much product, it's too expensive! Try removing some items so the total cost is under $200")
    } else if (totalWeight > 200) {
        res.send("You picked out too much product, it's too expensive! Try removing some items so the total weight is under 200 lb")
    } else if (totalWeight === 0 && totalCost === 0) {
        res.send("Really? You didn't pick out anything?? I'm going going to starve on this trip and it will be your fault") 
    } else {
        res.send("This all looks good! Your selections have been recorded, now go back to the main page and follow me on my trip!")
    }
})

app.get('/cargo-validator', function(request, response){
    response.sendFile('./public/html/cargo-validator.html', {root: './'})
})

app.get('/whitemountains', function(request, response){
    response.sendFile('./public/html/whitemountains.html', {root: './'})
})

app.get('/portland-head-light', function(request, response){
    response.sendFile('./public/html/portland-head-light.html', {root: './'})
})

app.get('/witch-house', function(request, response){
    response.sendFile('./public/html/witch-house.html', {root: './'})
})

app.get('/newport-mansions', function(request, response){
    response.sendFile('./public/html/newport-mansions.html', {root: './'})
})

app.get('/botanical-gardens', function(request, response){
    response.sendFile('./public/html/botanical-gardens.html', {root: './'})
})

app.listen(8080, function(){
    console.log('The app is running on post 8080')
})