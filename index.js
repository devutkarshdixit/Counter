function inc(){
    var x = Number(document.getElementById('count').innerHTML)
    document.getElementById('count').innerHTML = x+1
}
function dec(){
    var x = Number(document.getElementById('count').innerHTML)
    document.getElementById('count').innerHTML = x-1
}

function zero(){
    document.getElementById('count').innerHTML = 0
}