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
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            text: "Ricordati di dargli da mangiare",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            text: "Tutto fatto!",
                            status: "received",
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
                        },
                        {
                            date: "20/03/2020 16:30:55",
                            text: "Bene grazie! Stasera ci vediamo?",
                            status: "received",
                        },
                        {
                            date: "20/03/2020 16:35:00",
                            text: "Mi piacerebbe ma devo andare a fare la spesa.",
                            status: "sent",
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
                        },
                        {
                            date: "28/03/2020 10:20:10",
                            text: "Sicuro di non aver sbagliato chat?",
                            status: "sent",
                        },
                        {
                            date: "28/03/2020 16:15:22",
                            text: "Ah scusa!",
                            status: "received",
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
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            text: "Si, ma preferirei andare al cinema",
                            status: "received",
                        },
                    ],
                },
            ],
            counter: 0
        },
        methods: {
            getStatusMessage(message) {
                return message.status == "sent" ? 'sent' : 'received';
            },
            getChatActive(counter, index) {
                return counter == index ? 'active' : '';
            },
            getFocusChat(index) {
                this.counter = index;
            },
            getLastDate(counter) {
                let lastMessage = this.contacts[counter].messages.length - 1;
                let dateLast = this.contacts[counter].messages[lastMessage].date;
                return dateLast;
            },
            getLastMessage(index) {
                let lastMessage = this.contacts[index].messages.length - 1;
                let lastText = this.contacts[index].messages[lastMessage].text;
                let muchText = lastText.split(' ');
                // se l'ultimo messaggio è composto da più di 10 parole
                if (muchText.length > 10) {
                    muchText.splice(10);
                    return `${muchText.join(' ')}...`;
                }
                return lastText;
            },
            getLastAccess(counter) {
                let sentMessages = this.contacts[counter].messages.filter(message => {
                    if (message.status == 'sent') {
                        return true;
                    }
                });
                return sentMessages[sentMessages.length - 1].date;
            }
        }
    }
);