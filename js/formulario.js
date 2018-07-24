function enviar(){
  var nome = document.getElementById("nome");

  if(nome.value != ""){
    alert("Obrigado "+nome.value+ "! Mas esta área temporariamente indisponível");
  }else {
    alert("Por gentileza, digite seus dados.");
  }

}
