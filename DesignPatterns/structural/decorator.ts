interface Inotifier {
    sendNotification(): void;
}

class Notifier implements Inotifier {
    sendNotification() {

    }
}

class BaseAdapter implements Inotifier {
    wrapee: Notifier;
    constructor(wrapee: Notifier) {
        this.wrapee = wrapee
    }

    sendNotification(): void {
        this.wrapee.sendNotification();
    }
}

class EmailAdapter extends BaseAdapter {
    constructor(wrapee: Notifier) {
        super(wrapee);
    }

    sendNotification(): void {
        console.log('Sending email');
        super.sendNotification();
    }
}

class WhatsappAdapter extends BaseAdapter {

    constructor(wrapee: Notifier) {
        super(wrapee);
    }

    sendNotification(): void {
        console.log('Sending email');
        super.sendNotification();
    }
}
