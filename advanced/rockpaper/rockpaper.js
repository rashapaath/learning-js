let rockbtn=document.querySelector(".js-rock-btn");
let paperbtn=document.querySelector(".js-paper-btn");
let scissorbtn=document.querySelector(".js-scissor-btn");
rockbtn.addEventListener('click',()=>{
    rps('rock');
});
paperbtn.addEventListener('click',()=>{
    rps('paper');
});
scissorbtn.addEventListener('click',()=>{
    rps('scissors');
});
let scores=JSON.parse(localStorage.getItem('score'))||{
            lose:0,
            win:0,
            tie:0
        };//default operator
        updatedashboard();
        function choiceselection(){
            let choices=['paper','rock','scissors'];
            return choices[Math.floor(Math.random()*3)];
        }
        function rps(choice){
            
            let compchoice=choiceselection();
            let result="";
            if(choice===compchoice){
                result="Tie";
                scores.tie++;
            }else if(choice==='rock'&&compchoice==='scissors'||choice==='paper'&&compchoice==='rock'||choice==='scissors'&&compchoice==='paper'){
                result="You Win";
                scores.win++;
            }
            else{
                result="You Lose";
                scores.lose++;
            }
            localStorage.setItem('score',JSON.stringify(scores));
            updatedashboard();
            document.querySelector('.result').innerHTML=result;
            document.querySelector('.moves').innerHTML=`You<img src="./img/${choice}.png"><img src="./img/${compchoice}.png">Computer`;
            document.querySelector('.reset').innerHTML = '';
            
        }
        function reset(){
            scores.win=0;
            scores.lose=0;
            scores.tie=0;
            localStorage.removeItem('score');
            document.querySelector('.reset').innerHTML='Game Resetted';
            updatedashboard();
        }
        function updatedashboard(){
            document.querySelector('.dashboard').innerHTML=`Wins:${scores.win} || Loses:${scores.lose} || Ties:${scores.tie}\n`;
        }
        let isautoplayon=false;
        let intervalid;
        function autoplay(){
            if(!isautoplayon){
            intervalid=setInterval(
                function(){
                    const playermove=choiceselection();
                    rps(playermove);
                }
                ,1000);
            isautoplayon=true;}
            else{
                clearInterval(intervalid);
                isautoplayon=false;

            }
        }