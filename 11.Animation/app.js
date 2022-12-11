var btnSuccess = document.querySelector('.control .success');
var btnWarning = document.querySelector('.control .warning');
var btnError = document.querySelector('.control .error');

btnSuccess.addEventListener('click', function(){
    createToast('success',10000);
});

btnWarning.addEventListener('click', function(){
    createToast('warning');
});

btnError.addEventListener('click', function(){
    createToast('error');
});

function createToast(status, timeout) { 
    let templateInnner = `
    <i class="fa-regular fa-circle-check"></i>
    <span class="message">This is a Success message</span>
    `;
    switch(status){
        case 'success':
            templateInnner = `
            <i class="fa-regular fa-circle-check"></i>
            <span class="message">This is a Success message</span>`;  
            break;
        case 'warning':
            templateInnner = `
            <i class="fa-solid fa-circle-exclamation"></i>
            <span class="message">This is a Warning message</span>`;  
            break;
        case 'error':
            templateInnner = `
            <i class="fa-solid fa-triangle-exclamation"></i>
            <span class="message">This is a Error message</span>`;  
            break;
    }

    var toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add(status);
    toast.innerHTML = `${templateInnner}
                    <span class="coundown"></span>`;
    
    var toastList = document.getElementById('toasts');
    toastList.appendChild(toast);

    timeout = timeout || 4000;
    setTimeout(function(){
        toast.style.animation = 'slide_hide  3s ease forwards';
    }, timeout)

    setTimeout(function(){
        toast.remove();
    }, timeout+=2000)

}
