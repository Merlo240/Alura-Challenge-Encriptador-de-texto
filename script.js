let PALABRASRESERVADAS = {
    e: "enter",
    o: "ober",
    i: "imes",
    a: "ai",
    u: "ufat",
  };

  function Encriptar() {
    let palabra = document.getElementById("inputTexto").value.toLowerCase();
    if (palabra.length == 0 || /^\s+$/.test(palabra)) {
      document.getElementById("validar").style.display = "block";
 return false;
}
for (const prop in PALABRASRESERVADAS) {

  palabra = palabra.normalize("NFD").replace(new RegExp(`${prop}`, "gi"), [
  PALABRASRESERVADAS[prop],
  ]);
}

    let img = document.getElementById("Img-right");
    let txt = document.getElementById("text");

    //

    if (img.style.display != "inherit" && txt.style.display != "block") {
      img.style.display = "none";
      txt.style.visibility = "hidden";
      document.getElementById("validar").style.display = "none";
    }
   
    document.getElementById("text2").style.height = "460px"
    document.getElementById("text2").innerHTML = palabra;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
  }

  function DesIncriptador() {
    let texto = document.getElementById("inputTexto").value.toLowerCase();
    if (texto.length == 0 || /^\s+$/.test(texto)) {
      document.getElementById("validar").style.display = "block";
 return false;
}
    for (const prop in PALABRASRESERVADAS) {
      texto = texto.replace(new RegExp(PALABRASRESERVADAS[prop], "gi"), [
        prop,
      ]);
    }
    let img = document.getElementById("Img-right");
    let txt = document.getElementById("text");

    if (img.style.display != "inherit" && txt.style.display != "block") {
      img.style.display = "none";
      txt.style.visibility = "hidden";
      document.getElementById("validar").style.display = "none";
    }

    document.getElementById("text2").style.height = "460px"
    document.getElementById("text2").innerHTML = texto;
    
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
  }

  function copiar() {
    let contenido = document.querySelector("#text2");
    contenido.select();
    document.execCommand("copy");
    
  }