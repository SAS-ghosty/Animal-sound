function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassisfier('https://teachablemachine.withgoogle.com/models/QuFCk2A3T/', modelReady);
}

function modelReady(){
    classifier.classify(gotResults)
}
function gotResults(error, results) {
console.log('got result')
}