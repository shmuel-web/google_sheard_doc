var doc = $('textarea');
var val = "";
var socket = io.connect('http://localhost');
socket.on('news', function (data) {
    console.log(data);
    doc.val(data);
});

function sendToServer(){
    val = doc.val();
    socket.emit('userType', val);
}
var wait;
doc.keyup(function(){
    clearTimeout(wait);
    wait = setTimeout(sendToServer,1000);
});




