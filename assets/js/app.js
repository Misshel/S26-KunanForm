window.addEventListener("load",function(){
  var lugar = document.getElementById("lugar");
  var live = document.getElementById("live");
  var intervencion = document.getElementById("intervencion");

  region(lugar);
  // region(live);
  // regionInter(intervencion);


});

var departamentos = ["Amazonas", "Ancash","Apurìmac", "Arequipa","Ayacucho",
                      "Cajamarca","Callao","Cuzco", "Huancavelica","Huánuco",
                      "Ica", "Junìn","La Libertad","Lambayeque","Lima","Loreto",
                      "Madre de Dios","Moquegua","Pasco","Piura","Puno","San Martìn",
                      "Tacna","Tumbes","Ucayali"];

function region(datoRegion){
  var paralelo = document.createDocumentFragment();
  for(i=0; i<departamentos.length; i++){
    var option = document.createElement("option");
    option.value = departamentos[i];
    option.innerHTML = departamentos[i];
    paralelo.appendChild(option);
  }
  datoRegion.appendChild(paralelo);
}
