const projectBtn = document.querySelector('#btn');

projectBtn.addEventListener('click', function () {
   const isvalidate = validateForm()

    if (!isvalidate) {
        return;
    }
});



const activeInputs = document.querySelector('#username')
const activeMail = document.querySelector('#email')
const activePass = document.querySelector('#password')
const activeNum = document.querySelector('#phonenumber')

validateForm = () =>{
    const inputfield = document.querySelectorAll('input')

    if (activeInputs.value === "" || activeMail.value === "" || activePass.value === "" || activeNum.value === "") {
        inputfield.forEach(input => {
            input.classList.remove('errorcolor')
        })
    }
}



validateForm = () =>{
    const inputfield = document.querySelectorAll('input')

    if (activeInputs.value === "" || activeMail.value === "" || activePass.value === "" || activeNum.value === "") {
        inputfield.forEach(input => {
            input.classList.add('errorcolor')
        })
        return false;
    }
    return true;
}


const player = document.querySelector('#video-player');
const close = document.querySelector('#closebtn');
const playnow = document.querySelector('#playmd');
const videonow = document.querySelector('#videoplay');
const stopnow = document.querySelector('#stoptac');
const modvid = document.querySelector('#playst')

close.addEventListener('click', function(){
  player.style.display = 'none'
});

/*playnow.addEventListener('click', function(){
  player.style.display = 'block';
});*/


function play(file){
  videonow.src = file;
  player.style.display = 'block';
  
}

