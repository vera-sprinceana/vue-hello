/*
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
*/
/*BONUS:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/
var app=new Vue(
    {
        el:'#root',
        data(){
            return{
                message:'Prontooo?!',
                classi:'color-font',
                pics: ['frank'], 
            }
        },
            methods: {
                getPic(index) {
                return './asset/' + this.pics[index] + '.png';
                }
    }
    }
);

