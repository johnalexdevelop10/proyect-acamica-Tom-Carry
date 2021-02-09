var myvids = [];
var valid = [];
var myvid = document.getElementById('myvideo');
var activeVideo = 0;

function play(){
  myvid.addEventListener('ended', addVideos);
}

function addVideos(e){
  if(activeVideo+1 === myvids.length){
    myvid.removeEventListener('ended', addVideos)
  }
  // update the video source and play
  myvid.src = myvids[activeVideo];
  myvid.play();
  // update the new active video index
  activeVideo = (++activeVideo);
}

function macerar(){
  myvids.push("videos/maceracion.mp4");
  valid.push(1);
  appendInstruction("Macerar");
}
function hervir(){
  myvids.push("videos/hervor.mp4");
  valid.push(2);
  appendInstruction("Hervir");
}
function enfriar(){
  myvids.push("videos/enfriado.mp4");
  valid.push(3);
  appendInstruction("Enfriar");
}
function fermentar(){
  myvids.push("videos/fermentacion.mp4");
  valid.push(4);
  appendInstruction("Fermentar");
}
function madurar(){
  myvids.push("videos/maduracion.mp4");
  valid.push(5);
  appendInstruction("Madurar");
}
function embotellar(){
  myvids.push("videos/embotellamiento.mp4");
  valid.push(6);
  appendInstruction("Embotellar");
}

function check(){
  for(var i=0;i<6;++i){
    if(valid[i] != i+1){
      myvids.push("videos/wrong.mp4");
      break;
    }
  }
}

function appendInstruction(text) {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("pasoAPaso").appendChild(node);
}

function lagerInfo(){
document.getElementById('cuadroTexto').innerHTML = "Lager es un tipo de cerveza con sabor acentuado que se sirve fría, caracterizada por fermentar en condiciones más lentas empleando levaduras especiales, conocidas como levaduras de fermentación baja, y que en las últimas partes del proceso son almacenadas en bodegas (o lagered —de allí su nombre—) durante un período en condiciones de baja temperatura con el objeto de limpiar las partículas residuales y estabilizar los sabores. Los ejemplos más populares de cerveza de tipo lager son los pale lagers o pilsners, conocidas también como largers";
}

function altInfo(){
document.getElementById('cuadroTexto').innerHTML = "La Altbier (se suele abreviar a como Alt) es un tipo oscuro de cerveza de alta fermentación, proveniente de Düsseldorf y la región de Niederrhein en Alemania. El nombre Altbier, que significa literalmente cerveza vieja, se refiere al viejo estilo de la elaboración de la cerveza (levadura de alta fermentación y malta oscura). Hasta los años 50, la Alt también fue llamada Düssel (de Düsseldorf), pero puesto que no es una denominación de origen protegida, la Altbier se puede también producir fuera de la región de Düsseldorf. La Kölsch es otra de las pocas cervezas alemanas de alta fermentación que se produce exclusivamente en Colonia y que es una de las únicas cervezas del mundo que disfruta de una denominación de origen.";
}

function aleInfo(){
  document.getElementById('cuadroTexto').innerHTML = "Ale es un nombre que abarca a todas las cervezas de fermentación alta, lo que las diferencia de las lager que son de fermentación baja. Esto quiere decir que en las ales, el proceso de fermentación ocurre en la superficie del líquido, mientras que en las cervezas lager esta ocurre cerca del fondo. En otras palabras, la levadura que cumple el proceso de fermentación flota en la superficie del líquido durante varios días antes de descender al fondo. Para esto se usa principalmente levadura del tipo Saccharomyces cerevisiae.1​ Las ales fermentan rápidamente a temperaturas entre 15 y 25 °C y se sirven, por lo general, a una temperatura de 12 °C o más.";
}

function scotchInfo(){
  document.getElementById('cuadroTexto').innerHTML = "La Scottish ale es el nombre por el que se define la cerveza elaborada en Escocia. Históricamente, en Escocia era imposible de cultivar lúpulo que estuviese mínimamente bien; la necesidad de importar lúpulo y el clima frío de Escocia produjo una cerveza en que la malta era predominante, con la fermentación de la levadura más limpia que la cerveza Inglesa.";
}
function negrainfo(){
  document.getElementById('cuadroTexto').innerHTML = "La cerveza negra (en alemán Schwarzbier) es un tipo de cerveza lager alemana opaca, de color muy oscuro y sabor fuerte que recuerda al chocolate o al café. Aunque tienen un sabor parecido, son más suaves y menos amargas que las stouts o porters británicas, debido al uso de levadura lager en lugar de ale y a la omisión de la cebada.";
}
