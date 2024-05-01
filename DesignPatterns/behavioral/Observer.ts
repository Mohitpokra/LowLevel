class EventManager {

    subscribers: any[];
    notifer: any;

    addSubscriber() {
    }

    removeSubscriber() {

    }

    notifySubcriber() {

    }
}

class Event1 {
    eventManager: EventManager;

    addSubscriber() {
        this.eventManager.addSubscriber()
    }

    notify() {
        this.eventManager.notifySubcriber();
    }
}