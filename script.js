window.onscroll = function() {
    mostrarOcultarBotao();
};
  
  function mostrarOcultarBotao() {
    var btnTopo = document.getElementById("btnTopo");
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
      btnTopo.style.display = "block";
    } else {
      btnTopo.style.display = "none";
    }
}
  
  function irParaTopo() {
    document.body.scrollTop = 0; // Para navegadores que não suportam document.documentElement.scrollTop
    document.documentElement.scrollTop = 0; // Para navegadores modernos
}
  
  