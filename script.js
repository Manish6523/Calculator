

var result = document.getElementById("result");

function display(number){
    result.value += number;
    // alert(number)
}

function calculate(){
    var f_n = result.value;
    var f_n = eval(f_n);
    result.value = f_n;
}

function del(){
    // result = "";
    result.value = result.value.slice(0,-1);
}

function clr(){
    result.value = "";
}



