console.log('Slider Connected')
let images =[
    'images/img-1.jpg',
    'images/img-2.jpg',
    'images/img-3.jpg',
    'images/img-4.jpg',
    'images/img-5.jpg',
]
let counter =0;
let image = document.getElementById('image');
setInterval(()=>{
    if(counter === images.length){
        counter=0;
    }
    image.setAttribute('src',images[counter]);
    //console.log(images[counter]);
    counter++;
    
},1000)