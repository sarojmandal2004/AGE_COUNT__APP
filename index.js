 
 const submitbtn=document.getElementById("submit");
 const frontpage=document.getElementById("front");
 const backpage=document.getElementById("back");
 const dob=document.getElementById("dobinput");
 const yearEl=document.getElementById("year");
 const monthEl=document.getElementById("month");
 const dayEl=document.getElementById("day");
 const hourEl=document.getElementById("hour");
 const minuteEl=document.getElementById("minute");
 const secondEl=document.getElementById("second");
 const error=document.getElementById("error");

 let dateString;
 let dateOfBirth;
 const makeTwoDigitNumber = (number) => {
    return number > 9 ? number : `0${number}`;
  };
 const updateAge = () => {
    const currentDate = new Date();
    const dateDiff = currentDate - dateOfBirth;
    const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
    const month = Math.floor((dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12);
    const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
    const hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
    const minute = Math.floor(dateDiff / (1000 * 60)) % 60;
    const second = Math.floor(dateDiff / 1000) % 60;
  
    yearEl.innerHTML = makeTwoDigitNumber(year);
    monthEl.innerHTML = makeTwoDigitNumber(month);
    dayEl.innerHTML = makeTwoDigitNumber(day);
    hourEl.innerHTML = makeTwoDigitNumber(hour);
    minuteEl.innerHTML = makeTwoDigitNumber(minute);
    secondEl.innerHTML = makeTwoDigitNumber(second);
  };

 
 const pagechange=()=>{
    // dateOfBirth=dob.value;
    // console.log(dateOfBirth);
    dateString=dob.value;
 console.log('date string',dateString);
 dateOfBirth=new Date(dateString);
 console.log('birth',dateOfBirth);

    if(dateOfBirth){
    frontpage.classList.add("hidden");
    backpage.classList.remove("hidden");
    
    setInterval(()=>updateAge(),1000);
    }else{
        error.classList.remove("hidden");
        frontpage.classList.add("hidden");
    }
 };
 
  
 submitbtn.addEventListener("click",pagechange);
 

 