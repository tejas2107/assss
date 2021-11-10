function setup(){
    canvas= createCanvas(300,300);
    canvas.center()
    img=createCapture(VIDEO)
    img.hide() 
    classifier=ml5.imageClassifier("MobileNet",modelLoaded)
}
function draw(){
    image(img,0,0,300,300)
    classifier.classify(img,gotresuel)
}
function modelLoaded(){
    console.log("model is loaded")
}

function gotresuel(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        document.getElementById("result_object_name").innerHTML=results[0].label
        document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3)
    }
}
 