const text0 = "Steven's time! <br>Choose your favorite and <br>go ahead for watching! <br>And then the quiz will happen"
const text1 = "How about a dance? <br>Let's record a video <br>of our own dance <br>to the chosen music!"
const text2 = "Would you like to take a look at the <br>living night sky?.. And listen to their <br>beautiful voice-overs"
const text3 = "Would you like to <br>listen to my voice <br>acting of some anime again?"
const text4 = "Would you like to <br>read about the roles, <br>without hesitation?"
const text5 = "You love asking <br>'this or that' questions. <br>So let's play it!"
const text6 = "Do you have any sweets? <br>Time to watch a movie... <br>Maybe even interactive"
const text7 = "Do you want to play <br>'Most Likely To'? <br>Let's find out <br>who's good at what!"
const text8 = "Riddles, mysticism... <br>How about a battle of psychics <br>or a good old fortune teller <br>before going to bed?"
const text9 = "No rhymes, no fun. <br>A day or even more of communication <br>in rhymes alone. Even on the phone, <br>what do you think?"
const text_array = [text0, text1, text2, text3, text4, text5, text6, text7, text8, text9]
let activated = false

function fadeout(img) {
    if (!activated) {
        activated = true
        let text_element = document.getElementById("cloud_text")
        text_element.innerHTML = text_array[img.id.at(-1)] 
        img.style.opacity = 0
    } else {
        let text_element = document.getElementById("cloud_text")
        text_element.innerHTML = "No more than one at once!"
    }
    
    
}