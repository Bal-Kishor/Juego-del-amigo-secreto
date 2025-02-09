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

function sortearAmigo()
    {
    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length); 
    let amigoGanador = listaAmigos[indiceSorteado]; 

    alert(`El amigo sorteado es: ${amigoGanador}`);
    reiniciar ();
    }
function reiniciar ()
    {
        listaAmigos=[];
    }