/*
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
*/
/*BONUS:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/
var app=new Vue(
    {
        el:'#root',
        data:{
                message:'Prontooo?!',
                classi:'color-font', 
                image: './asset/frank.png'   
        }
    }
);

