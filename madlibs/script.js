(function (){
    'use strict'
    console.log('reading js');

    const madLibs = document.querySelector('#madlibs');
    const results = document.querySelector('#results');
    const story = document.querySelector('.story');

    madLibs.addEventListener('submit', function(event){
        event.preventDefault();

        const target = document.querySelector('.story');


        const adj = document.querySelector('#adj').value;
        const adverb2 = document.querySelector('#adverb2').value;
        const adverb3 = document.querySelector('#adverb3').value;

        const noun1 = document.querySelector('#noun1').value;
        const noun2 = document.querySelector('#noun2').value;
        const noun3 = document.querySelector('#noun3').value;

        const planet1 = document.querySelector('#planet1').value;
        const planet2 = document.querySelector('#planet2').value;
        const planet3 = document.querySelector('#planet3').value;

        const food = document.querySelector('#food').value;

        const myText = `

        <form id="madlibs">
        <span>Captain Whiskers is a <b>${adj}</b></span>
        <span>space kitty flying a</span>
                    <span><b>${noun1}</b>-powered ship through the stars.</span>
                    
                    <span>One day, they got a message from the moon of <b>${planet1}</b></span>

                    <span>:</span>
                    
                        <span class="alert"><b>"ALERT: ALL KITTIES ARE TRAPPED"</b></span>

                    <br><br>
                        <span>Without hesitation, Captain Whiskers moved <b>${adverb2}</b></span>

                  
                    <span>through asteroid fields and glowing galaxies. As Captain Whiskers zooms through space, he weave through the galaxies swirling neon gas clouds, passing through Saturn and Mars. As Captain Whiskers drives his ship, the ship begins to beep faster signaling how close he is to the lost kitties in <b>${planet2}</b>.</span>

                    <span> As captain Whiskers got closer, he saw <b>${noun2}</b></span>

                    <span>creatures surrounding the scared kitties.</span>

                    <label>Meowing for help, Captain Whiskers</label>


                    <span><b>${adverb3}</b> sneaks past the guards and uses his${noun3}</span>

                    <span>to break open the cages one by one.</span>
                    <br><br>
                    <span>The rescued kitties quickly pile into the ship, and rescue every last kitty on</span>

                    <span>, all saying their hurrahs to Captain Whiskers. Captain Whiskers sets the destination to Catnip Land, a cozy planet filled with soft grass and endless treats where the kitties can finally feel safe again. To safely return to Catnip Land,they powered their ship using <b>${food}</b>.</span> 

                    <span> And just like that, all the kitties were saved, and Captain Whiskers saved the day! </span>
            
                </form>
                    
                    <footer class="mad-footer">
                    
                    <a href="madlibs-play.html"><img src="images/replay_30dp_714071_FILL0_wght400_GRAD0_opsz24.png" alt="Icon of a replay"></a>
                    <a href="../index.html"><img src="images/home_30dp_714071_FILL0_wght400_GRAD0_opsz24.png" alt="Icon of a home"></a>
                    <a href="&#116;&#112;&#114;&#097;&#109;&#105;&#114;&#101;&#122;&#064;&#117;&#099;&#100;&#097;&#118;&#105;&#115;&#046;&#101;&#100;&#117;"><img src="images/mail_30dp_714071_FILL0_wght400_GRAD0_opsz24.png"></a>
                    </footer>`

        madLibs.innerHTML = myText; 
        story.scrollTop= 0; 
    })
})();