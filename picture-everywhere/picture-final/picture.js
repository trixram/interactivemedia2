(function(){
    'use strict'
    console.log('reading JS');

    // picture html script
    const thought1 =document.querySelector('.thought-one');
    const text1 = document.querySelector('.option1');


    const thought2 = document.querySelector('.thought-two');
    const text2 = document.querySelector('.option2');


    thought1.addEventListener('mouseover', function(){
       text1.style.opacity = '1';
    });

    thought1.addEventListener('mouseout', function(){
        text1.style.opacity = '0';
    });

    thought2.addEventListener('mouseover', function(){
        text2.style.opacity='1';
    });

    thought2.addEventListener('mouseout', function(){
        text2.style.opacity = '0';
    });

 
})();