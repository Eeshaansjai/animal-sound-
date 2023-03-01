function staetClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundclassifier('')}

function modelReady(){
    classifier.classify(gotResults);
}