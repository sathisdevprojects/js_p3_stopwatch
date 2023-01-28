const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
let hrs=min=secs=msecs =0,starttimer ;

start.addEventListener('click',()=>{
    starttimer = setInterval(()=>{
        msecs++
        if(msecs == 100){
            secs++;
            msecs =0;
        }
        if(secs==60){
            min++;
            secs=0;
        }
        if(min==60){
            hrs++;
            min=0;
        }
        updateTime();
    },10);
    
});
stop.addEventListener('click',()=>{
    clearInterval(starttimer);
   
    
});
reset.addEventListener('click',()=>{
    hrs=min=secs=msecs =0 ;
    clearInterval(starttimer);
    updateTime();
    
    
    
});

function updateTime(){
    hr =hrs<10?'0'+hrs:hrs;
    mi=min<10?'0'+min:min;
    se=secs<10?'0'+secs:secs;
    mse=msecs<10?'0'+msecs:msecs;
     document.querySelector("#hrs").innerText=hr;
     document.querySelector("#mins").innerText=mi;
     document.querySelector("#secs").innerText=se;
     document.querySelector("#msecs").innerText=mse;

};
