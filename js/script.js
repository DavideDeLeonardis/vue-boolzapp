const app = new Vue(
    {
        el: '#app',
        data: {
            contacts: [
                {
                    name: "Michele",
                    avatar: "_1",
                    visible: true,
                    lastAccess: 'Ultimo accesso: 10/01/2020 16:15:22',
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "Hai portato a spasso il cane?",
                            status: "sent",
                            dropdown: false
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            text: "Ricordati di dargli da mangiare.",
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
                    lastAccess: "Ultimo accesso: 20/03/2020 16:30:55",
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
                    lastAccess: 'Ultimo accesso: 28/03/2020 16:15:22',
                    messages: [
                        {
                            date: "28/03/2020 10:10:40",
                            text: "La Marianna va in campagna.",
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
                    name: "Giovanni",
                    avatar: "_4",
                    visible: true,
                    lastAccess: 'Ultimo accesso: 10/01/2020 15:50:00',
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                            dropdown: false
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            text: "Si, ma preferirei andare al cinema.",
                            status: "received",
                            dropdown: false
                        },
                    ],
                },
                {
                    name: "Marco",
                    avatar: "_5",
                    visible: true,
                    lastAccess: 'Ultimo accesso: 10/01/2020 15:50:00',
                    messages: [
                        {
                            date: "10/01/2020 15:50:00",
                            text: "Si, ma preferirei andare al cinema.",
                            status: "received",
                            dropdown: false
                        },
                        {
                            date: "10/01/2020 15:30:55",
                            text: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                            dropdown: false
                        },
                    ],
                },
                {
                    name: "Luisa",
                    avatar: "_6",
                    visible: true,
                    lastAccess: 'Ultimo accesso: 10/01/2020 15:50:00',
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "La Marianna va in campagna.",
                            status: "sent",
                            dropdown: false
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            text: "Va bene, ci sarò.",
                            status: "received",
                            dropdown: false
                        },
                    ],
                },
                {
                    name: "Davide",
                    avatar: "_7",
                    visible: true,
                    lastAccess: null,
                    messages: [],
                }
            ],
            answers: [
                'Va bene.',
                'Ti faccio sapere!',
                'Può essere.',
                'Sì.',
                'No.',
                'Forse.'
            ],
            counter: 0,
            messageNew: '',
            textSearch: '',
            varMessageSent: false,
            varSplashPage: false,
            varSwitch: false,
            varNavFont: false,
            varIncreaseFont: false,
            varDecreaseFont: false,
            varTrash: false
        },
        methods: {
            lastMessage(index) {
                return lastMessage = this.contacts[index].messages.length - 1;
            },
            getLastMessage(index) {
                if (this.contacts[index].messages.length > 0) {
                    this.lastMessage(index);
                    let lastText = this.contacts[index].messages[lastMessage].text;
                    let muchText = lastText.split(' ');
                    if (muchText.length > 10) {
                        muchText.splice(10);
                        return `${muchText.join(' ')}...`;
                    }
                    return lastText;
                }
                return '';
            },
            getLastDate(index) {
                if (this.contacts[index].messages.length > 0) {
                    this.lastMessage(index);
                    let dateLast = this.contacts[index].messages[lastMessage].date;
                    return dateLast;
                }
                return '';
            },
            search() {
                let text = this.textSearch.toLowerCase();
                this.contacts.forEach(contact => {
                    contact.name.toLowerCase().includes(text) ? contact.visible = true : contact.visible = false;
                });
            },

            // FUNCTIONS INPUT FOOTER
            sendMessage() {
                if (this.messageNew.trim().length != 0) {
                    let message = {
                        date: `${dayjs().format('DD')}/${dayjs().format('MM')}/${dayjs().format('YY')} ${dayjs().format('HH')}:${dayjs().format('mm')}:${dayjs().format('ss')}`,
                        text: this.messageNew,
                        status: 'sent',
                        dropdown: false
                    }
                    this.contacts[this.counter].messages.push(message);
                    this.messageNew = '';

                    if (!this.varMessageSent) {
                        setTimeout(() => {
                            this.contacts[this.counter].lastAccess = 'Online';
                            setTimeout(() => {
                                this.contacts[this.counter].lastAccess = 'Sta scrivendo...';
                                setTimeout(() => {
                                    this.receiveMessage();
                                }, 2000)
                            }, 2000)
                        }, 1000)
                        this.varMessageSent = true;
                    }
                }
                // se si cambia chat prima che si riceva la risposta: - quest'ultima verrà vista sulla chat visualizzata per ultima; 
                //                                                    - contacts[counter].lastAccess sballato fra le varie chat visualizzate
            },
            receiveMessage() {
                let message = {
                    date: `${dayjs().format('DD')}/${dayjs().format('MM')}/${dayjs().format('YY')} ${dayjs().format('HH')}:${dayjs().format('mm')}:${dayjs().format('ss')}`,
                    text: this.getRandomAnswer(this.answers),
                    status: 'received',
                    dropdown: false
                }
                this.contacts[this.counter].messages.push(message);
                this.contacts[this.counter].lastAccess = 'Online';
                setTimeout(() => {
                    this.contacts[this.counter].lastAccess = this.getLastAccess();
                    this.varMessageSent = false;
                }, 1000);
            },
            getRandomAnswer(array) {
                const indexAnswers = Math.floor(Math.random() * (array.length - 1));
                return array[indexAnswers];
            },
            getLastAccess() {
                let sentMessages = this.contacts[this.counter].messages.filter(message => {
                    if (message.status == 'received') {
                        return true;
                    }
                });
                return `Ultimo accesso: ${sentMessages[sentMessages.length - 1].date}`;
            },

            // FUNCTIONS DROPDOWN MENUS
            deleteMessage(index) {
                this.contacts[this.counter].messages.splice(index, 1);
            },
            deleteAllMessages() {
                this.contacts[this.counter].messages = [];
                this.varTrash = false;
            },
            deleteChat() {
                this.contacts[this.counter].visible = false;
                this.deleteAllMessages();
            }
        },
        created() {
            setTimeout(() => {
                this.varSplashPage = true;
            }, 1000);
        }
    }
);