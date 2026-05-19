(function(){
    'use strict'
    console.log('reading JS');

    // picture html script
    
    const place1 =document.querySelector('.place1');
    const placeText = document.querySelector('.spot-text');
    const place2 = document.querySelector('.place2');
    const placeText2 = document.querySelector('.spot-text2');

    place1.addEventListener('mouseover', function(){
       placeText.style.opacity = '1';
    });

    place1.addEventListener('mouseout', function(){
        placeText.style.opacity = '0';
    });

    place2.addEventListener('mouseover', function(){
        placeText2.style.opacity='1';
    });

    place2.addEventListener('mouseout', function(){
        placeText2.style.opacity = '0';
    });

 
})();