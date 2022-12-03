let min = sec = "0" + 0,
    startTimer;

  const startBtn = document.querySelector(".start"),
   stopBtn = document.querySelector(".stop");
   

   startBtn.addEventListener("click", start);
   stopBtn.addEventListener("click", reset);


  function start() {
    startBtn.classList.add("active");
    stopBtn.classList.remove("stopActive");

    startTimer = setInterval(()=>{
      sec++
      sec = sec < 10 ? "0" + sec : sec;
      if(sec == 60){
        min++;
        min = min < 10 ? "0" + min : min;
        sec = "0" + 0;
      }

      putValue();
    },10); 

  }
  function reset() {
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
    clearInterval(startTimer);
    min = sec = "0" + 0;
    putValue();
  }

  function putValue() {
    document.querySelector(".second").innerText = sec;
    document.querySelector(".minute").innerText = min;
  }