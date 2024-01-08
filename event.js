/*let btn = document.querySelector('#btn');
let currMode="Light";
btn.onclick=()=>{
    if(currMode=="Light"){
        document.body.style.backgroundColor="black";
        currMode="Dark";
        btn.innerHTML="Dark";
    }
    else{
        document.body.style.backgroundColor="white";
        currMode="Light";
        btn.innerHTML="Light";
    }
};*/
//2nd  method
let btn = document.querySelector('#btn');
let currMode1="Light";
btn.addEventListener('click', () => {
    if(currMode1 == 'Light'){
        document.body.style.backgroundColor = 'black';
        currMode1 = 'Dark';
        btn.innerHTML = 'Light Mode';
    }
    else{
        document.body.style.backgroundColor = 'white';
        currMode1 = 'Light';
        btn.innerHTML = 'Dark Mode';
    }
});
