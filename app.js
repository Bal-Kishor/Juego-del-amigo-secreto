// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos=[];

function agregarAmigo()
    {
        let nombreAmigo = document.getElementById("amigo").value;
      
        if (nombreAmigo==='')
        {
            alert('Atención!!, debes ingresar un nombre')
        }
        else
        {
            listaAmigos.push(nombreAmigo);  
           
        }
        console.log(listaAmigos);
        return
    }