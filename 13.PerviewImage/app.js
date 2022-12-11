var upload = document.querySelector('#mypicture')
var preview = document.querySelector('.preview')
var error = document.querySelector('.error')

upload.addEventListener('change' , function(e){
    var file = upload.files[0]

    if(!file) 
        return
    
    if(!file.name.endsWith('.jpg')){
        error.innerHTML = ``
        return
    }

    if(!file.size / (1024 * 1024) > 5){
        error.innerHTML = 'Hinh anh phai thuoc dinh dang jpeg';
        return
    }else{
        error.innerHTML = ``
    }

    console.log(file)
    var img = document.createElement('img')

    var fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onloadend = function(e){
        console.log('load ok', e.target.result)
        img.src = e.target.result
    }

    // img.src = URL.createObjectURL(upload.files[0])
    preview.appendChild(img)
})