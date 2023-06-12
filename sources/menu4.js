$(document).ready(main);

var contador = 1 ;

function main(){
    $('.menu-bar').click(function(){
        //$('.enlaces').toggle();
        if (contador == 1){
            $('.enlaces').animate({
                top: '0'
            });
            contador = 0;
        }
        else{
            contador = 1;
            $('.enlaces').animate({
                top: '-150%'
            });
        }
    });


};