var imgFeatrue = document.querySelector('.img-feature');
var listImg = document.querySelectorAll('.list-image img');
var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');

var currentIndex = 0;
function updateImageByIndex(index){
    //remove active class
    document.querySelectorAll('.list-image div').forEach(item=>{
        item.classList.remove('active');
    });

    currentIndex = index;
    imgFeatrue.src = listImg[index].getAttribute('src');
    listImg[index].parentElement.classList.add('active');
}


listImg.forEach((imgElement, index)=>{
    imgElement.addEventListener('click', e=>{
        imgFeatrue.style.opacity = 0;
        setTimeout(()=>{
            updateImageByIndex(index);
            imgFeatrue.style.opacity = 1;
        }, 400)
    })
})

prevBtn.addEventListener('click', e=>{
    if(currentIndex == 0){
        currentIndex = listImg.length - 1
    }else{
        currentIndex--
    }

    imgFeatrue.style.animation = ''
    setTimeout(()=>{
        imgFeatrue.style.animation = 'slideLeft 1s  ease-in-out forwards'
        updateImageByIndex(currentIndex)
    },200)
})

nextBtn.addEventListener('click', e=>{
    if(currentIndex == listImg.length - 1){
        currentIndex = 0
    }else{
        currentIndex++
    }

    imgFeatrue.style.animation = ''
    setTimeout(()=>{
        imgFeatrue.style.animation = 'slideRight 1s  ease-in-out forwards'
        updateImageByIndex(currentIndex)
    },200)
})

updateImageByIndex(0)