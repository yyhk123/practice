function nameValidation(){
    var name = document.getElementById('name').value;

    if(name.length > 6 || name.length == 0){
        document.getElementById("nameValidation").innerHTML="";
    }
    else{
        var str = new String("Please enter your full name");
        document.getElementById("nameValidation").innerHTML=(str.fontcolor("red"));
    }
}

function addValidation(){
    var address = document.getElementById('address').value;

    if(address.length > 10 || address.length==0){
        document.getElementById("addressValidation").innerHTML="";
    }
    else{
        var str = new String("Please enter your full address");
        document.getElementById("addressValidation").innerHTML=(str.fontcolor("red"));
    }
}


function emailValidation(){
    var email = document.getElementById('email').value;
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(email) || email.length==0){
        document.getElementById('emailValidation').innerHTML="";
    }
    else{
        var str= new String("Please enter your correct email");
        document.getElementById('emailValidation').innerHTML=(str.fontcolor("red"));
    }
}

function phoneNumValidation(){
    var compare = /^\d{10}$/;
    var phonenumber = document.getElementById('phoneNum').value;
    
    if(phonenumber.match(compare) || phonenumber.length==0){
        document.getElementById('phoneNumValidation').innerHTML="";
    }
    else{
        var str= new String("Please enter your correct phone number");
        document.getElementById('phoneNumValidation').innerHTML=(str.fontcolor("red"));
    }
    
}

function count1(obj){
    var value = obj.value;
    var regex = /\s+/gi;
    var wordCount = value.trim().replace(regex, ' ').split(' ').length;
    if(obj.value.length == 0){
        document.getElementById('count1').innerHTML = 0;
    }
    else{
        document.getElementById('count1').innerHTML = wordCount;
    }
}
function count2(obj){
    var value = obj.value;
    var regex = /\s+/gi;
    var wordCount = value.trim().replace(regex, ' ').split(' ').length;
    if(obj.value.length == 0){
        document.getElementById('count2').innerHTML = 0;
    }
    else{
        document.getElementById('count2').innerHTML = wordCount;
    }
}

function wordValidation(obj){
    var value = obj.value;
    var regex = /\s+/gi;
    var wordCount = value.trim().replace(regex, ' ').split(' ').length;

    if(wordCount > 50 || wordCount == 0){
        document.getElementById('wordValidation').innerHTML="";
    }
    else{
        var str = new String("Please write at least 50 words");
        document.getElementById('wordValidation').innerHTML=(str.fontcolor("red"));
    }

}

// function checkwordCount(){
//     var reason = document.getElementById('reason').value;
//     var regex = /\s+/gi;
//     var reasonCount = reason.trim().replace(regex, ' ').split(' ').length;

//     if(reasonCount <49){
//         return false;
//     }
//     return true;


// }


$(document).ready(function(){ //jquery
    $('input[type="file"]').change(function(e){
        var str = "";
        var len = e.target.files.length; // file selected count

        if(len > 0){
            for(var i=0; i<len-1; i++){
                str += e.target.files[i].name;
                str += ", ";
            }
            str+= e.target.files[len-1].name;
            document.getElementById('fileSelected').innerHTML= str;
        }
        else{
            document.getElementById('fileSelected').innerHTML= "No file(s) selected";
        }
    });
});