
// let allPanelElements = document.querySelectorAll('.pannel');
let parent = document.querySelector('#container');


// Method - 1
// for(let i = 0; i < allPanelElements.length; i ++) {
//     allPanelElements[i].addEventListener('click', handlePannelClick);
// }

// showPannel(allPanelElements[0]);


// function handlePannelClick(event){
//     showPannel(event.currentTarget);
// }

// function showPannel(pannel){
//     let expandedPannel = parent.querySelector('.active');
//     if(expandedPannel){
//         expandedPannel.classList.remove('active');
//     }
//     pannel.classList.add('active');
// }

// Method - 2 using event delegation.
parent.addEventListener('click',handlePannels);

function handlePannels(event) {
    if (event.target.closest('.pannel')) {
        let expandedPannel = parent.querySelector('.active');
        if (expandedPannel) {
            expandedPannel.classList.remove('active');
        }
        event.target.closest('.pannel').classList.add('active');
    }
}