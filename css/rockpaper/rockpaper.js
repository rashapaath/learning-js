let scores=JSON.parse(localStorage.getItem('score'))||{
            lose:0,
            win:0,
            tie:0
        };//default operator
        updatedashboard();
        function rps(choice){
            let choices=['paper','rock','scissors'];
            let compchoice=choices[Math.floor(Math.random()*3)];
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