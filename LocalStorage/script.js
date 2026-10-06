//===========links=========================================
let nome = document.getElementById("nome")
let enviar = document.getElementById("enviar")

let id = document.getElementById("id")
let editar = document.getElementById("editar")

let editavel = document.getElementById("editavel")
let atualizar = document.getElementById("atualizar")
let apagar = document.getElementById("apagar")

let resultado = document.getElementById("resultado")


//==========lsita=========================================

let lista = [
    {id:1, nome:"Lucas"},
    {id:3, nome:"Ruan"},
    {id:4, nome:"Sheyaro"}
]

//===========atualizar======================================

function update(){
    resultado.textContent = ""
    lista.forEach((itens)=> {
        let p = document.createElement("p")
        p.textContent = itens.id + " - " + itens.nome
        resultado.appendChild(p)
    })
}

update()

//==========Adicionar======================================
//----------novo id e organizar----------------------
let novoID = null 
function atualizarID(){
    lista.sort((a,b) => a.id - b.id)
    for(let i = 0; i < lista.length -1; i++){
        if(lista[i].id + 1 != lista[i+1].id){
            novoID = lista[i].id + 1
            return
        }
    }
    novoID = lista[lista.length - 1].id + 1;
}

//---------incluir na lista----------------------------
enviar.addEventListener("click", () => {
    atualizarID()
    let novoAluno = {id: novoID, nome:nome.value}
    lista.push(novoAluno)
    update()
})

//=========Excluir========================================

editar.addEventListener("click", () =>{

    let pesquisaID = id.value
    let existe = lista.find(item => item.id == pesquisaID)
    
    if(existe){
        window.alert(pesquisaID)
        editavel.value = existe.nome
        editavel.disabled = true
    }else{
        window.alert("id invalido")
    }
})