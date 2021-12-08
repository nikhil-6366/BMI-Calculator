function bmi(){
    var w = document.getElementById('weight').value;
    var h = document.getElementById('height').value;
    var b = w/(h*h);
    
    document.getElementById('bmi').innerHTML="BMI :"+b;
    var i = 50 + (91*(h-1.524));
    var j = 44 + (91*(h-1.524));
    if(document.getElementById('mgender').checked)
    {
        document.getElementById('idl').innerHTML="IDEAL WEIGHT : "+i;
    }
    else if (document.getElementById('fgender').checked)
    {
        document.getElementById('idl').innerHTML="IDEAL WEIGHT : "+j;
    }
    else{
        document.getElementById('idl').innerHTML="IDEAL WEIGHT :   For Male = "+i+" | For Female = "+j;
    }

}
function clr(){
    document.getElementById('bmi').innerHTML=" ";
    document.getElementById('idl').innerHTML=' ';
}