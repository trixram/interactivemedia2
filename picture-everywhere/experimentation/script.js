(function(){
    'use strict';
    const theArticles = document.querySelectorAll('article');
    const observer = new IntersectionObserver(callBack, {threshold: 0.1});

    for( const eachArticle of theArticles ){
        observer.observe(eachArticle);
    }


    function callBack(entries){
        for( const eachEntry of entries){
           if(eachEntry.isIntersecting){
            console.log(eachEntry.target);
            eachEntry.target.classList.add("show");
           }

           else{
           console.log(eachEntry.target);
           eachEntry.target.classList.remove('show');
        }
    }
    };

})();