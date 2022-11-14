
 document.getElementById('right-answers').firstElementChild.innerHTML = sessionStorage.getItem('score')
 document.getElementById('wrong-answers').firstElementChild.innerHTML = 20 - parseInt( sessionStorage.getItem('score'))
 document.getElementById('final-score').firstElementChild.innerHTML = sessionStorage.getItem('percentage') + '%'
 let resPara = document.getElementById('result-paragraph')

 let percentage = sessionStorage.getItem('percentage')


     

 localStorage.setItem(sessionStorage.getItem('username') , sessionStorage.getItem('percentage'))
 let line = document.getElementById('line')
let resImg = document.getElementById("result-right-side")
let finalScore = document.getElementById('final-score')

 function page() {
 


    if(percentage < 50){
        resPara.innerHTML = `<span class="fail">Unfortunately</span>, <br class="br-res">  you did not fulfill our requirements<br class="br-res"><span class="fail"> Good Luck</span> `
        resImg.innerHTML = `<img src="images/fail.png" alt="" id="result-img">`
        line.classList.add('fail1')
        finalScore.lastElementChild.classList.add('fail')
    }else{
        resPara.innerHTML = `<span class="pass">Congratulations</span>, we will <br class="br-res"> arrange with you the Second <br class="br-res"> interview.`
        resImg.innerHTML = `<img src="images/pass.png" alt="" id="result-img">`
        line.classList.add('pass1')
        finalScore.lastElementChild.classList.add('pass')
    }
 }

 function clearScore(){
    sessionStorage.clear()
 }
