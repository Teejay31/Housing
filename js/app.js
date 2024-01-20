//adding bg to the nav after scrolling
let navi = document.querySelector('nav');

window.addEventListener('scroll', () => {
    console.log(window.scrollY);  //check if it works

    if (window.scrollY >= 40) {
        navi.classList.add('heading');
    } else {
        navi.classList.remove('heading');
    }
})

// let toRequest = document.getElementsByClassName('request');

// toRequest.addEventListener('click', (e) => {
//     document.style.display = "block";
// })

