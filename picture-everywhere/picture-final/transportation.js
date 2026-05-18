(function(){
    'use strict'
    console.log('reading JS');

  

    // transportation

    const keysOption = document.querySelector('.keys-inner');
    const keysText = document.querySelector('.specs1');
    const keyImage =document.querySelector('.keys-photo');

    const busOption = document.querySelector('.bus-inner');
    const busText = document.querySelector('.specs2');
    const busImage =document.querySelector('.bus-photo');


    keysOption.addEventListener('mouseover', function(){
         keysText.style.opacity = '1';
       keyImage.style.filter = 'blur(10px)'; 
    })

    keysOption.addEventListener('mouseout', function(){
        keysText.style.opacity = '0';
        keyImage.style.filter = 'blur(0px)';
    });


    busOption.addEventListener('mouseover', function(){
            busText.style.opacity='1';
            busImage.style.filter = 'blur(5px)';
        })

    busOption.addEventListener('mouseout', function(){
            busText.style.opacity='0';
            busImage.style.filter ='blur(0px)';
        })


})();