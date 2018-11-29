class Comente{
constructor(coment,email){
    this.comentario=coment
    this.user=email
}
}
class Banco{
    constructor(){
        this.dados=JSON.parse(localStorage.getItem("Comentários")) || []
    }
    enserir(obj){
        this.dados.push(obj);
        localStorage.setItem("Comentários",JSON.stringify(this.dados));
    }
}
function enviar(){
    var comentario1=document.getElementById("coment").value;
    var email1=localStorage.getItem("user_logado");
    var objeto=new Comente(comentario1,email1);
    var bd=new Banco();
    bd.enserir(objeto);
    var modal3 = document.getElementsByClassName("modal3")[0];
    modal3.style.bottom = "20px";

}

function hidemodal(){
    var modal3 = document.getElementsByClassName("modal3")[0];
    modal3.style.bottom = "-300px";
  }

$(document).ready(function () {
    var comment = $('form#enquiry textarea'),
        counter = '',
        counterValue = 140, //change this to set the max character count
        minCommentLength = 10, //set minimum comment length
        $commentValue = comment.val(),
        $commentLength = $commentValue.length,
        button = $('form#enquiry input[type=button]').hide();
  
    $('form').prepend('<span class="counter"></span>').append('<p class="info">Min length: <span></span></p>');
    counter = $('span.counter');
    counter.html(counterValue); //display your set max length
    comment.attr('maxlength', counterValue); //apply max length to textarea
    $('form').find('p.info > span').html(minCommentLength);
    // everytime a key is pressed inside the textarea, update counter
    comment.keyup(function () {
      var $this = $(this);
      $commentLength = $this.val().length; //get number of characters
      counter.html(counterValue - $commentLength); //update counter
      if ($commentLength > minCommentLength - 1) {
        button.fadeIn(200);
      } else {
        button.fadeOut(200);
      }
    });
  });
