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
        var nome = document.getElementById("nome").value;
        var email = document.getElementById("emailb").value;
        var senha = document.getElementById("senha").value;
        if(nome == '' || email == '' || senha == ''){
            var modal2 = document.getElementsByClassName("modal2")[0];
            modal2.style.bottom = "20px";
        }
        else{
            var x = new Login();
            var bd = new Banco();
             bd.inserir(x);     
             var modal = document.getElementsByClassName("modal")[0];
            modal.style.bottom = "20px"; 
        }
        
}
function hidemodal(){
    var modal = document.getElementsByClassName("modal")[0];
    modal.style.bottom = "-300px";

    var modal2 = document.getElementsByClassName("modal2")[0];
    modal2.style.bottom = "-300px";
  }

function log(){
    var email1 = document.getElementById("vemail").value;
    var senha1 = document.getElementById("vsenha").value;
    if (email1 == "" || senha1 == "") {
        var modal2 = document.getElementsByClassName("modal2")[0];
        modal2.style.bottom = "20px";
    } else {
        var bd = new Banco();
        var vetor = bd.listar();
        var l;
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
            localStorage.setItem("user_logado",email1)
            window.location.href = "coment.html"
        }
        else{
            var modal2 = document.getElementsByClassName("modal2")[0];
            modal2.style.bottom = "20px";
        }
    }
    
    
}
jQuery(document).ready(function($){
    $(".cadastro2").hide();
    $("#cadastro").click(function(){
      $(".email-login").fadeOut(100);
      $(".cadastro2").delay(100).fadeIn(100);
      $("#login-caixa-link").removeClass("active");
      $("#cadastro").addClass("active");
    });
    $("#login-caixa-link").click(function(){
      $(".email-login").delay(100).fadeIn(100);;
      $(".cadastro2").fadeOut(100);
      $("#login-caixa-link").addClass("active");
      $("#cadastro").removeClass("active");
    });
  });

