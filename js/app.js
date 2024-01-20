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

// document.onreadystatechange = function() {
//     if (document.readyState !== "complete") {
//         document.querySelector(
//             "body").style.visibility = "hidden";
//             document.querySelector(
//             "#loader").style.visibility = "visible";
//     } else {
//         document.querySelector(
//         "#loader").style.display = "none";
//         document.querySelector(
//         "body").style.visibility = "visible"
//     }
// };