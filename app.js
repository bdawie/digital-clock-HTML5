(function(){
    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let second = document.getElementById('second');
    let spinner = document.getElementById('spinner');

    window.addEventListener('load',()=>{
        spinner.innerHTML='';
        loadClock();
        setInterval(loadClock,1000);
    });

    function loadClock(){
        hour.textContent = new Date().getHours() +':';
        minute.textContent = new Date().getMinutes()+ ':';
        if(new Date().getSeconds() < '10') {
         second.textContent = '0'+ new Date().getSeconds();
        } else{
            second.textContent = new Date().getSeconds();
        }
    }
})()