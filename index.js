let allbtn = document.querySelectorAll('a');
let audio = document.getElementById('click_sound')

for (const items of allbtn) {
    items.addEventListener('click',()=>{
        audio.play();
    })
}


