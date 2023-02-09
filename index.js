const inputs = document.querySelectorAll('.controls input');

function handle(){
const suffix = this.dataset.sizing;
document.documentElement.style.setProperty(`--${this.name}` , this.value + suffix )
}


inputs.forEach(input => input.addEventListener('change' , handle));
inputs.forEach(input => input.addEventListener('mousemove' , handle));

let input = document.querySelector('.img-container input');
const output = document.querySelector('.img-container output');
let imagesArray = [];

input.addEventListener("change" , ()=>{
const file = input.files;
imagesArray.push(file[0]);
displayImages();
})

function displayImages(){
    let images = "";
    imagesArray.forEach((image , index) => {
        images += `<img src="${URL.createObjectURL(image)}" alt="image">
        <i onclick = "deleteit(${index})" class="fa fa-trash-o"></i>`

    })
    output.innerHTML = images;
}

function deleteit(index){
imagesArray.splice(index , 1);
input.value = '';
displayImages();
}