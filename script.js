wipe.onclick= function(){
    display.value = ''
    answer.value = ''
}
del.onclick= function(){
    display.value = display.value.slice(0,-1);
    display.value ? answer.value = eval(display.value) : answer.value = '';
}
divide.onclick= function(){
    display.value +='÷'
    display.value ? answer.value = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*')) : answer.value = '';
}
times.onclick= function(){
    display.value +='×'
}
seven.onclick= function(){
    display.value +='7'
    answer.value = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'))
}
eight.onclick= function(){
    display.value +='8'
    answer.value = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'))
}
nine.onclick= function(){
    display.value +='9'
    answer.value = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'))
}
minus.onclick= function(){
    display.value +='-'
}
four.onclick= function(){
    display.value +='4'
    answer.value = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'))
}
five.onclick= function(){
    display.value +='5'
    answer.value = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'))
}
six.onclick= function(){
    display.value +='6'
    answer.value = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'))
}
plus.onclick= function(){
    display.value +='+'
}
one.onclick= function(){
    display.value +='1'
    answer.value = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'))
}
two.onclick= function(){
    display.value +='2'
    answer.value = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'))
}
three.onclick= function(){
    display.value +='3'
    answer.value = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'))
}
equal.onclick= function(){
    if(display.value){display.value = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'));
    answer.value = '';
    }
    else{
        display.value = '';
        answer.value = '';
    }
}
percent.onclick= function(){
    display.value +='%'
}
zero.onclick= function(){
    display.value +='0'
    answer.value = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'))
}
dot.onclick= function(){
    display.value +='.'
    answer.value = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'))
}