function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ESCTNruWv/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

dog= 0;
cat= 0;
horse= 0;
cow= 0;

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);

        random_r= Math.floor(Math.random()*255)+1;
        random_g= Math.floor(Math.random()*255)+1;
        random_b= Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML= "I can hear - "+results[0].label;
        document.getElementById("result_label").style.color= "rgb("+random_r+","+random_g+","+random_b+")" ;

        if(results[0].label== "Dog"){
            image.src= "dog.png";     
        }  
        else if(results[0].label== "Cat"){
            image.src= "cat.png";          
        } 
        else if(results[0].label== "Cow"){
            image.src= "cow.png";       
        } 
        else if(results[0].label== "Horse"){
            image.src= "horse.png";   
        } 
        else{
            image.src= "ear.png";        
        } 
    }
} 