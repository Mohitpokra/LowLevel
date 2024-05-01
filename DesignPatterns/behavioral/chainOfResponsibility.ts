abstract class AbstractHandler {
    nextHandler: AbstractHandler;
    setHandler(nextHandler: AbstractHandler) {
        this.nextHandler = this.nextHandler;
    }

    execute() {
        if(this.nextHandler) {
            return this.nextHandler.execute();
        }
    }
}


class ConcreateHadler1 extends AbstractHandler {

    execute() {
        console.log('i have execute');
        super.execute();
    }
}

class ConcreateHadler2 extends AbstractHandler {

}