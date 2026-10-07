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

let lista = []

let arquivoLocal = JSON.parse(localStorage.getItem("lista"))
if(arquivoLocal){
    // window.alert("existe")
    lista = JSON.parse(localStorage.getItem("lista"))
}else{
    // window.alert("Não existe")
        lista = [
        {id:1, nome:"Lucas"},
        {id:3, nome:"Ruan"},
        {id:4, nome:"Sheyaro"}
    ]
}


//===========atualizar======================================

function update(){
    resultado.textContent = ""
    lista.forEach((itens)=> {
        let p = document.createElement("p")
        p.textContent = itens.id + " - " + itens.nome
        resultado.appendChild(p)
    })

    localStorage.setItem("lista", JSON.stringify(lista))
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
let idExiste = NaN
editar.addEventListener("click", () =>{

    let pesquisaID = id.value
    let existe = lista.find(item => item.id == pesquisaID)
    idExiste = lista.findIndex(item => item.id == pesquisaID)

    if(existe){
        // window.alert(pesquisaID)
        editavel.value = existe.nome
        // editavel.disabled = true
    }else{
        window.alert("id invalido")
    }
})

//========Editar============================================

atualizar.addEventListener("click", ()=>{
    // window.alert(idExiste)
    if(idExiste >= 0){
        // window.alert(lista[idExiste].nome)
        lista[idExiste].nome = editavel.value
    }else{
        window.alert("Selecione um usuario")
    }
    update()
})

//=======Apagar============================================

apagar.addEventListener("click", ()=>{
    if( idExiste >= 0){
        lista.splice(idExiste,1)
    }else{
        window.alert("Selecione um usuario")
    }
    update()
})