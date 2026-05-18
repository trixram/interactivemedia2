(function(){
    'use strict'
    console.log('reading JS');

  
    // pick a spot

    const bus = document.querySelector('.hover-me');
    const busPara = document.querySelector('.bus-text');
    const image = document.querySelector('.after')

    bus.addEventListener('mouseover', function(){
        busPara.innerHTML = '<p>surprise! my friend came with me!</p>'
    });

     bus.addEventListener('mouseout', function(){
        image.style = 'opacity: 1';
    });
})();