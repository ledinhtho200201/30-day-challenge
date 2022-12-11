var range = document.querySelector('.range');
var process = document.querySelector('.process');
var  value = document.querySelector('.process span');

function updatePercent(percent){
    process.style.width = `${percent}%`;
    value.innerHTML = `${percent}%`;
}

range.addEventListener('mousemove', function(e) {
    var processWidth = e.pageX - this.offsetLeft;
    var percent = processWidth / this.offsetWidth * 100;
    percent = Math.round(percent);
    console.log(percent)
    updatePercent(percent);
})

updatePercent(30)

document.getElementById('slider')

slider.addEventListener('change', function(e){
    console.log(this.value);
})