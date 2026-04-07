const todolistarr=[];
function add(){
    let content=document.querySelector(".input1");
    let text=content.value;
    todolistarr.push(text);
    content.value="";
    console.log(text);
}
// const arrs=[];
// //rendertodolist();
// function add2(){
//     let input=document.querySelector('.input2');
//     let text=input.value;
//     arrs.push(text);
//     console.log(text);
//     input.value="";
//    // rendertodolist();

// }
// function rendertodolist(){
//     let todolistHTML='';
//     for(let i=0;i<arrs.length;i++){
//         const todo=arrs[i];
//         const html=`<p>${todo}</p>`;
//         todolistHTML+=html;
//     }
//     document.querySelector('.display').innerHTML=todolistHTML;
// }
const arr2=[];
function add2(){
    let input=document.querySelector('.input2');
    let text=input.value;
    arr2.push(text);
    input.value="";
    render();
}   
function render(){
    let htmltoadd='';//so whenever we calling this function the htmltoadd variable first contain nothing since we always make it '';
    for(let i=0;i<arr2.length;i++){
        let elt=arr2[i];
        let toadd=`<p>${elt}</p>`;
        htmltoadd+=toadd;
    }
    document.querySelector('.display').innerHTML=htmltoadd;
}
const obj={
    arrinput:[],
    arrdate:[],
};
function adding(){
    let input=document.querySelector('.input3');
    let inputdate=document.querySelector('.date');
    let date=inputdate.value;
    let text=input.value;
    obj.arrinput.push(text);
    obj.arrdate.push(date);
    input.value="";
    rendering();
}
function rendering(){
    let html='';
    for(let i=0;i<obj.arrinput.length;i++){
         let elt=obj.arrinput[i];
         let date=obj.arrdate[i]
         let elttoadd=`<p>${elt}        ${date}<button class="addbutton dlt" onclick="obj.arrinput.splice(${i},1);obj.arrdate.splice(i,1);">remove</button></p>`;
         html=elttoadd;
    }
    document.querySelector('.divs').innerHTML=html;
}
const todoobjarray=[];
function addtotodoobjarr(){
    let input=document.querySelector(".inputtext");
    let text=input.value;
    let inputdate=document.querySelector(".inputdate");
    let date=inputdate.value;
    todoobjarray.push({text,date});  
    console.log(todoobjarray);  
    input.value="";
    render();

}
function render(){
    let todoHTML="";
    for(let i=0;i<todoobjarray.length;i++){
        const todo=todoobjarray[i];
        //const {text}=todo;
        //const date=todo.date;
        const {text,date}=todo;
        const html=`<div>
        ${name}</div><div> ${duedate}</div>
        <div>
        <button onclick="
        todoobjarray.splice(${i},1);
        render();
        ">Delete</button>
        </div>`
        
    }


}