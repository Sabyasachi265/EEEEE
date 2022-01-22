Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function SStaker(){
    Webcam.snap(function(data_uri){
        document.getElementById("SS").innerHTML = '<img id="image_capture" src="'+data_uri+'">';
    });
}

console.log('ml5 version : ', ml5.version);

var classifier = ml5.classifier('https://teachablemachine.withgoogle.com/models/6SxOh0tEN/model.json', modelLoaded);

function modelLoaded(){
    console.log('model is loaded')
}