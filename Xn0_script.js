cells=document.querySelectorAll(".cell")
i=0
last_move="O"
X_array=[]
O_array=[]
win='n'
game_cont=true
document.addEventListener("click",function(event){
    i=Number(event.target.id);
    if(game_cont==true && cells[i]==event.target &&!(X_array.includes(i)) && !(O_array.includes(i))){
        if(last_move=="X"){
        cells[i].innerHTML="O";
        last_move="O"
        O_array.push(i)
        }
        else{
        cells[i].innerHTML="X";
        last_move="X"
        X_array.push(i)
        }
    }
})


document.addEventListener("click",function submit(){
    if(X_array.includes(0)&&X_array.includes(4)&&X_array.includes(8)){
        cells[0].style.color="red"
        cells[4].style.color="red"
        cells[8].style.color="red"
        win='x'
    }
    else if(X_array.includes(2)&&X_array.includes(4)&&X_array.includes(6)){
        cells[2].style.color="red"
        cells[4].style.color="red"
        cells[6].style.color="red"
        win='x'
    }
    else{
        for(i=0;i<=6;i=i+3){
            if(cells[i].innerHTML=="X"&&cells[i+1].innerHTML=="X"&&cells[i+2].innerHTML=="X"){
                cells[i].style.color="red"
                cells[i+1].style.color="red"
                cells[i+2].style.color="red"
                win='x'
            }
        }
        for(i=0;i<=2;i=i+1){
            if(cells[i].innerHTML=="X"&&cells[i+3].innerHTML=="X"&&cells[i+6].innerHTML=="X"){
                cells[i].style.color="red"
                cells[i+3].style.color="red"
                cells[i+6].style.color="red"
                win='x'
            }
        }
    }
    if(O_array.includes(0)&&O_array.includes(4)&&O_array.includes(8)){
        cells[0].style.color="red"
        cells[4].style.color="red"
        cells[8].style.color="red"
        win='o'
    }
    else if(O_array.includes(2)&&O_array.includes(4)&&O_array.includes(6)){
        cells[2].style.color="red"
        cells[4].style.color="red"
        cells[6].style.color="red"
        win='o'
    }
    else{
        for(i=0;i<=6;i=i+3){
            if(cells[i].innerHTML=="O"&&cells[i+1].innerHTML=="O"&&cells[i+2].innerHTML=="O"){
                cells[i].style.color="red"
                cells[i+1].style.color="red"
                cells[i+2].style.color="red"
                win='o'
            }
        }
        for(i=0;i<=2;i=i+1){
            if(cells[i].innerHTML=="O"&&cells[i+3].innerHTML=="O"&&cells[i+6].innerHTML=="O"){
                cells[i].style.color="red"
                cells[i+3].style.color="red"
                cells[i+6].style.color="red"
                win='o'
            }
        }
        if((X_array.length+O_array.length)==9 && win=='n'){
            win='d'
        }
    }
    if(win=='x'){
        document.getElementById('result').innerHTML="X wins!"
        game_cont=false
    }
    else if(win=='o'){
        document.getElementById('result').innerHTML="O wins!"
        game_cont=false
    }
    else if(win=='d'){
        document.getElementById('result').innerHTML="Draw!"
        game_cont=false
    }
})