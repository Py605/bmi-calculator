
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//Using BodyParser to Parse data which will come from our html file form...
app.use(bodyParser.urlencoded(
    {
        extended: true
    }
));

app.use(express.static('public'));
// Sending our Html file(Addition Calcultor one) to show on HOme Page...
app.get('/',function(request,response){
    response.sendFile(__dirname+'/index.html');
});

// Taking Num1 & Num2  and sending our result to the same Home Page as OUtPUt..
app.post('/',function(request,response){

    var num1 = Number(request.body.num1);
    var num2 = Number(request.body.num2);
    var result = num1 + num2;

    response.send('The result of calculation is :- '+ result);
});

// Making a new Route named as bmiCalculator and setting it's UI from bmiCalculator.html..
app.get('/bmiCalculator',function(req,res){
    res.sendFile(__dirname + '/bmiCalculator.html');
});

// Taking Weight & Height  and sending our result to the same bmiCalculator Page as OUtPUt..
app.post('/bmiCalculator',function(req,res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);

    res.send("Your BMI is := "+ bmi);
});

//TO start our Local server at port 3000.
app.listen(3000,function(){
    console.log('Server is running in port 3000.');
});
