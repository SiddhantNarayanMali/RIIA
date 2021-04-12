//https://teachablemachine.withgoogle.com/models/SXxuBtAmJ/model.json//

function preload()
{
 
}

function setup()
{
    Canvas = createCanvas(400,400);
    Canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    Model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/SXxuBtAmJ/model.json",ModelL());    
}

function ModelL()
{
    console.log("Model Load");
}

function draw()
{
    image(video,0,0,400,400);
    Model.classify(video, Results);
}

function Results(e,r)
{
    if (e)
    {
        console.error(e);
    }
    
    else
    {
        console.log(r);
        if (r[0].label == "Ball")
        {
            window.open("https://www.amazon.in/s?k=basketball&crid=1S8FHZ0ZMEFR0&sprefix=bas%2Caps%2C340&ref=nb_sb_ss_ts-doa-p_4_3");
        }
        else
        {
            document.getElementById("object").innerHTML = r[0].label;
        }
       
        
        document.getElementById("accuracy").innerHTML  = r[0].confidence.toFixed(3);
        
    }
}