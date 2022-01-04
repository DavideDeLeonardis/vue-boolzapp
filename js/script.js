// Milestone 1
    // Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
    // Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
// Milestone 2
    // Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al 
        // contatto attivo all’interno del pannello della conversazione
    // Click sul contatto mostra la conversazione del contatto cliccato
// Milestone 3
    // Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
    // Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// Milestone 4
    // Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le 
        // lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
// Milestone 5
    // Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
    // Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 

// Consigli utili
// Si possono trascurare le scrollbar verticali, sia nel pannello dei messaggi, che nella lista dei contatti
// I pulsanti e le icone possono non funzionare (a parte l’invio del messaggio)
// Per gestire le date, può essere utile la libreria day.js

// Bonus
        // Evitare che l'utente possa inviare un messaggio vuoto o composto solamente da spazi
    // A) Cambiare icona in basso a destra (a fianco all'input per scrivere un nuovo messaggio) finché l'utente sta scrivendo: di default si visualizza l'icona del microfono, quando l'input non è vuoto si visualizza l'icona dell'aeroplano. Quando il messaggio è stato inviato e l'input si svuota, si torna a visualizzare il microfono. B) inviare quindi il messaggio anche cliccando sull'icona dell'aeroplano
    // Predisporre una lista di frasi e/o citazioni da utilizzare al posto della risposta "ok:" quando il pc risponde, anziché scrivere "ok", scegliere una frase random dalla lista e utilizzarla come testo del messaggio di risposta del pc
        // Visualizzare nella lista dei contatti l'ultimo messaggio inviato/ricevuto da ciascun contatto
    // Inserire l'orario corretto nei messaggi 
    // Sotto al nome del contatto nella parte in alto a destra, cambiare l'indicazione dello stato: visualizzare il testo "sta scrivendo..." nel timeout in cui il pc risponde, poi mantenere la scritta "online" per un paio di secondi e infine visualizzare "ultimo accesso alle xx:yy" con l'orario corretto
    // Dare la possibilità all'utente di cancellare tutti i messaggi di un contatto o di cancellare l'intera chat con tutti i suoi dati: cliccando sull'icona con i tre pallini in alto a destra, si apre un dropdown menu in cui sono presenti le voci "Elimina messaggi" ed "Elimina chat"; cliccando su di essi si cancellano rispettivamente tutti i messaggi di quel contatto (quindi rimane la conversazione vuota) oppure l'intera chat comprensiva di tutti i dati del contatto oltre che tutti i suoi messaggi (quindi sparisce il contatto anche dalla lista di sinistra)
    // Visualizzare un messaggio di benvenuto che invita l'utente a selezionare un contatto dalla lista per visualizzare i suoi messaggi, anziché attivare di default la prima conversazione
    // Aggiungere una splash page visibile per 1s all'apertura dell'app
    // Aggiungere un'icona per cambiare la modalità light/dark
    // Aggiungere un'icona per ingrandire o rimpicciolire il font

const app = new Vue(
    {
        el: '#app',
        data: {
            contacts: [
                {
                    name: "Michele",
                    avatar: "_1",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "Hai portato a spasso il cane?",
                            status: "sent",
                            dropdown: false
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            text: "Ricordati di dargli da mangiare",
                            status: "sent",
                            dropdown: false
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            text: "Tutto fatto!",
                            status: "received",
                            dropdown: false
                        },
                    ],
                },
                {
                    name: "Fabio",
                    avatar: "_2",
                    visible: true,
                    messages: [
                        {
                            date: "20/03/2020 16:30:00",
                            text: "Ciao come stai?",
                            status: "sent",
                            dropdown: false
                        },
                        {
                            date: "20/03/2020 16:30:55",
                            text: "Bene grazie! Stasera ci vediamo?",
                            status: "received",
                            dropdown: false
                        },
                        {
                            date: "20/03/2020 16:35:00",
                            text: "Mi piacerebbe ma devo andare a fare la spesa.",
                            status: "sent",
                            dropdown: false
                        },
                    ],
                },
                {
                    name: "Samuele",
                    avatar: "_3",
                    visible: true,
                    messages: [
                        {
                            date: "28/03/2020 10:10:40",
                            text: "La Marianna va in campagna",
                            status: "received",
                            dropdown: false
                        },
                        {
                            date: "28/03/2020 10:20:10",
                            text: "Sicuro di non aver sbagliato chat?",
                            status: "sent",
                            dropdown: false
                        },
                        {
                            date: "28/03/2020 16:15:22",
                            text: "Ah scusa!",
                            status: "received",
                            dropdown: false
                        },
                    ],
                },
                {
                    name: "Luisa",
                    avatar: "_6",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                            dropdown: false
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            text: "Si, ma preferirei andare al cinema",
                            status: "received",
                            dropdown: false
                        },
                    ],
                },
            ],
            counter: 0,
            messageNew: '',
        },
        methods: {
            getStatusMessage(message) {
                return message.status == "sent" ? 'sent' : 'received';
            },
            getChatActive(index) {
                return this.counter == index ? 'active' : '';
            },
            getFocusChat(index) {
                this.counter = index;
            },
            getLastMessage(index) {
                let lastMessage = this.contacts[index].messages.length - 1;
                let lastText = this.contacts[index].messages[lastMessage].text;
                let muchText = lastText.split(' ');
                if (muchText.length > 10) {
                    muchText.splice(10);
                    return `${muchText.join(' ')}...`;
                }
                return lastText;
            },
            getDate() {
                let date = new Date();
                return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            },
            getLastDate(counter) {
                let lastMessage = this.contacts[counter].messages.length - 1;
                let dateLast = this.contacts[counter].messages[lastMessage].date;
                return dateLast;
            },
            getLastAccess() {
                let sentMessages = this.contacts[this.counter].messages.filter(message => {
                    if (message.status == 'received') {
                        return true;
                    }
                });
                return sentMessages[sentMessages.length - 1].date;
            },
            addMessage() {
                if (this.messageNew.trim().length != 0) {
                    let message = {
                        date: this.getDate(),
                        text: this.messageNew,
                        status: 'sent',
                        dropdown: false
                    }
                    this.contacts[this.counter].messages.push(message);
                    this.messageNew = '';
                    setTimeout(() => {
                        let message = {
                            date: this.getDate(),
                            text: 'ok',
                            status: 'received',
                            dropdown: false
                        }
                        this.contacts[this.counter].messages.push(message);
                    }, 1000)
                }
            },
            menuTrue(message) {
                message.dropdown = !message.dropdown;
            },
            showMenu(message) {
                return message.dropdown == true ? 'show' : '';
            },
            removeMessage(index) {
                this.contacts[this.counter].messages.splice(index, 1);
                // se provo ad eliminare l'ultimo messaggio mi da errore in console
            }
        },
        created() {
            // generic instance in
            // doesn't respect time
                // will not wait for all of the async operations
        }
    }
);