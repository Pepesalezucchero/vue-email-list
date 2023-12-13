/*
Attraverso l’apposita API di Boolean:
https://flynn.boolean.careers/exercises/api/random/mail,
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
*/

//creo i dati di lavoro
const {createApp} = Vue;

createApp({
    data() {
        return {
            //creo l'array in cui depositerò le 10 email
            listaEmail: [],
        }
    },
    mounted() {
        //creo un ciclo che mi permette di ottenere il numero di email richieste grazie all'utilizzo di un API
        for(let i=0; i < 10; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((risposta) => {
            console.log(risposta.data.response);
            //aggiungo le email ricevute nell'array sopra citato
            this.listaEmail.push(risposta.data.response);
        });
        };
        console.log(this.listaEmail);
    }
}).mount('#app')