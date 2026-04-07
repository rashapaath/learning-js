const arr=[];
function add(){
    //1)
    let inputtext=document.querySelector(".inputtext");
    let text=inputtext.value;
    let inputdate=document.querySelector(".inputdate");
    let date=inputdate.value;
    //2)
    arr.push({text,date});
    //3)
    inputtext.value="";
    //4)
    render();
}
function render(){
    let html='';
    //2)
    arr.forEach((todoobj,index)=>{
        let {text,date}=todoobj;
        let htmlcontent=`
        <div>${text}</div>
        <div>${date}</div>
        <button class="dlt btn" onclick="
        arr.splice(${index},1);
        render();
        ">Remove</button>
        `;
        html+=htmlcontent;
    });
    //3)
    document.querySelector('.display').innerHTML=html;

}