class Database {
    static _instance: Database;
    createInstace() {
        if(!Database._instance) {
            Database._instance = new Database();
        }
        return Database._instance;
    }
}