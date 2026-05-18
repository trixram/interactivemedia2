(function(){
    'use strict'
    console.log('reading JS');

    // one
    const one =document.querySelector('.one');
    const mainImage1 = document.querySelector('.main1');
    const coverImage1 = document.querySelector('.cover1');
    const text1 = document.querySelector('.para1');

    // two
    const two =document.querySelector('.two');
    const mainImage2 = document.querySelector('.main2');
    const coverImage2 = document.querySelector('.cover2');
    const text2 = document.querySelector('.para2');

    // three
    const three =document.querySelector('.three');
    const mainImage3 = document.querySelector('.main3');
    const coverImage3 = document.querySelector('.cover3');
    const text3 = document.querySelector('.para3');


    // four
    const four =document.querySelector('.four');
    const mainImage4 = document.querySelector('.main4');
    const coverImage4 = document.querySelector('.cover4');
    const text4 = document.querySelector('.para4');


    one.addEventListener('mouseover', function(){
       text1.style.opacity = '1';
       mainImage1.style.opacity = '1';
       coverImage1.style.opacity = '0';

    });

        two.addEventListener('mouseover', function(){
       text2.style.opacity = '1';
       mainImage2.style.opacity = '1';
       coverImage2.style.opacity = '0';

    });

            three.addEventListener('mouseover', function(){
       text3.style.opacity = '1';
       mainImage3.style.opacity = '1';
       coverImage3.style.opacity = '0';

    });

                four.addEventListener('mouseover', function(){
       text4.style.opacity = '1';
       mainImage4.style.opacity = '1';
       coverImage4.style.opacity = '0';

    });

    


    
   

 
})();