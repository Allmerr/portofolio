// lets beat this 

const buttons = document.querySelectorAll('.circle button');

buttons.forEach(button => {
    button.addEventListener('click',()=>{
        document.querySelector('.container').classList.toggle('show-nav')
    })
});

const lis = document.querySelectorAll('ul li');
const contents = document.querySelectorAll('.content')

lis.forEach(li => {
    li.addEventListener('click',()=>{
        const terhubung = li.getAttribute('terhubung');
        console.log(terhubung);
        contents.forEach(content => {
            if(content.classList.contains(terhubung)){
                content.classList.remove('none')
            }else{
                content.classList.add('none')
            }

        });
    })
});

// slider

const prev = document.querySelector('button.left');
const next = document.querySelector('button.right');

let counter = 0;

const slider = document.querySelector('.con');
const images = document.querySelectorAll('.img-content');




next.addEventListener('click', ()=>{
    if(images[counter].classList.contains('last')){
        counter = 0;
        const imgWidth = images[counter].clientWidth

        slider.style.transform = `translateX(${-(imgWidth*counter)}px)`

        slider.style.animation = 'pindahFrame .3s linear forwards'

        setTimeout(() => {
            slider.style.animation = 'none'
        }, 500);
    }else{
        counter++

        const imgWidth = images[counter].clientWidth
    
        slider.style.transform = `translateX(${-(imgWidth*counter)}px)`
    
        slider.style.animation = 'pindahFrame .3s linear forwards'
    
        setTimeout(() => {
            slider.style.animation = 'none'
        }, 500);    
    }
})


prev.addEventListener('click', ()=>{
    if(images[counter].classList.contains('first')){
        counter = images.length-1;
        const imgWidth = images[counter].clientWidth

        slider.style.transform = `translateX(${-(imgWidth*counter)}px)`

        slider.style.animation = 'pindahFrame .3s linear forwards'

        setTimeout(() => {
            slider.style.animation = 'none'
        }, 500);
    }else{
        counter--

        const imgWidth = images[counter].clientWidth

        slider.style.transform = `translateX(${-(imgWidth*counter)}px)`

        slider.style.animation = 'pindahFrame .3s linear forwards'

        setTimeout(() => {
            slider.style.animation = 'none'
        }, 500);
    }
})

const labels = document.querySelectorAll('label');

labels.forEach(label => {
    label.innerHTML = label.innerText.split('').map((e,i)=>`<span style="transition-delay: ${i*30}ms;">${e}</span>`).join('')
});