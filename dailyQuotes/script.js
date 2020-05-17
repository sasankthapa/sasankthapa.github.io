var today=new Date().getDate();

const joke1=document.getElementById("joke1")
const joke2=document.getElementById("joke2")
const adviceEle=document.getElementById("advice")

var d=localStorage.getItem("Today")

const addAdviceAndJoke=function (advice,joke){
    console.log('here');
    joke1.innerHTML=joke.setup
    joke2.innerHTML=joke.punchline
    adviceEle.innerHTML=advice.slip.advice
}

const getDictFromStorage=function (item){
    return JSON.parse(localStorage.getItem(item));
}

if(today!=d){
    console.log('meg')
    localStorage.setItem("Today",today)
    var advice,joke;
    fetch('https://official-joke-api.appspot.com/random_joke').then((response)=>{
        response.json().then((response)=>{
            joke1.innerHTML=response.setup
            joke2.innerHTML=response.punchline
            localStorage.setItem("Joke",JSON.stringify(response))
        })
    })
    fetch('https://api.adviceslip.com/advice').then((response)=>{
        response.json().then((response)=>{
            joke1.innerHTML=response.setup
            joke2.innerHTML=response.punchline
            localStorage.setItem("Advice",JSON.stringify(response))
        })
    })
    console.log(joke)
}else{
    addAdviceAndJoke(getDictFromStorage('Advice'),getDictFromStorage('Joke'));
}

joke1.addEventListener('click',(e)=>{
    joke2.classList.remove('hidden');
})
