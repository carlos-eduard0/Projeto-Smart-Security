class Banco{
    constructor(){
        this.nome = "login";
        this.dado = JSON.parse(localStorage.getItem(this.nome)) || [];
    }

    inserir(obj){
        this.dado.push(obj);
        localStorage.setItem(this.nome, JSON.stringify(this.dado));
    }

    listar(){
        this.dado = JSON.parse(localStorage.getItem(this.nome));
        return this.dado;
    }

}

class Login{
    constructor(){
        this.nome = document.getElementById("nome").value;
        this.email = document.getElementById("email").value;
        this.senha = document.getElementById("senha").value;
      
    }
}

function salvar(){
        var modal = document.getElementsByClassName("modal")[0];
        modal.style.bottom = "20px";
        var x = new Login();
        var bd = new Banco();
        bd.inserir(x);      
}
function hidemodal(){
    var modal = document.getElementsByClassName("modal")[0];
    modal.style.bottom = "-300px";
  }

function log(){
    var bd = new Banco();
    var vetor = bd.listar();
    var l;
    var email1 = document.getElementById("vemail").value;
    var senha1 = document.getElementById("vsenha").value;
    
    for (var i = 0; i < vetor.length; i++){
         if ((vetor[i].email == email1 ) && (vetor[i].senha == senha1)){
            l = 1;
            i = vetor.length;
        }
        else{
            l = 0;
        }
    }

    if (l == 1) {
        window.location.href = "index.html"
        var modal = document.getElementsByClassName("modal2")[0];
        modal.style.bottom = "20px";

    }
    else{
        
    }
}
