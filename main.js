// card slider

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nextBtns = [...document.querySelectorAll('.next-btn')];

cardContainers.forEach((item, i) => {
    let containerDimentions = item.getBoundingClientRect();
    let containerWidth = containerDimentions.width

    nextBtns[i].addEventListener('click', ()=>{
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', ()=>{
        item.scrollLeft -= containerWidth + 200;
    })
}
)














