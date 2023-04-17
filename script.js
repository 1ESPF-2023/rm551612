
//Recuperando o botão com o getelementbyid
const botao = document.getElementById("btn-1");

//recuperar um item específico com a 
//função querySelector(parâmetro)
// const seletor = document.querySelector("li[value = 'itens-15']")
// console.log(seletor)

const seletores = document.querySelectorAll("li")
seletores.forEach((item)=>{

if (item.textContent == "itens-15"){
    let meuItem = item;
    console.log(`items selecionados : ${item.textContent}`);
    meuItem.textContent = "TA DOMINADO! !"
    }
})


//set timeout
//set interval
//random
//math.sale
//math.random
//math.floor
