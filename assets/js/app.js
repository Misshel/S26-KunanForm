window.addEventListener("load",function(){
  var lugar = document.getElementById("lugar");
  var live = document.getElementById("live");
  var intervencion = document.getElementById("ambito");

  region(lugar);
  region(residencia);
  inter(ambito);


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

function inter(datoRegion){
  var paralelo = document.createDocumentFragment();
  for(i=0; i<departamentos.length; i++){
    var check = document.createElement("input");
    check.setAttribute("class","check")
    check.type = "checkbox";
    check.value = departamentos[i];

    var label =document.createElement("label");
    var br = document.createElement("br");
    label.innerHTML = departamentos[i];
    paralelo.appendChild(check);
    paralelo.appendChild(label);
    paralelo.appendChild(br);
  }
  datoRegion.appendChild(paralelo);
}
