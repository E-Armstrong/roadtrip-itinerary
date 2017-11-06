var express = require('express')

var app = express()

app.use(express.static('./public'))

app.get('/', function(request, response){
    response.sendFile('./public/html/index.html', {root: './'})
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