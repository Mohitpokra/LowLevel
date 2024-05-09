class Expense {
    id: number;
    partipants: User[];
    amount: number;
    paidBy: User;
    split_strategy; // 'BY_Percentage', 'BY_EXACT_Amount', "SPLIT_EQUALLY", "BY_SHARE"
    name: string;
    description: string;
}

class User {
    id: number;
    name: string;
    expenseManager: ExpenseManager;


    addExpense(expense: Expense) {
        this.expenseManager.addExpense(expense);
    }
}

class ExpenseManager {

    expenses: Expense[];
    expenseParticipants: ExpenseParticipants[];
    
    getExpensByGroupId(groupId: number) {

    }

    getExpensesWithFriend(userId: number, friend_id: number) {

    }

    addExpense(expenses: Expense) {
        let expenseParticipants: ExpenseParticipants[];
        switch(expenses.split_strategy) {
            case 'BY_PERCENTAGE':
                expenseParticipants = SplitByPercentage.splitTheBill();
            break;
            case 'EQUAL_SPLIT':
                expenseParticipants = EqualSplit.splitTheBill();
            break;
            default:
                expenseParticipants = EqualSplit.splitTheBill();  
        }

        
    }


}

class ExpenseParticipants {
    id: number;
    user: User;
    owedAmout: number;
    paidAmout: number;
}

class SplitByPercentage {
    static splitTheBill(): ExpenseParticipants[] {
        // let padiBy = ex
    }
}

class EqualSplit {
    constructor() {}

    static splitTheBill(expense: Expense): ExpenseParticipants[] {
        let paidBy = expense.paidBy;
        let sharedAmount = Math.floor(expense.amount/expense.partipants.length)
        
        let expenseParticipants: ExpenseParticipants[] = [];
        for(let i = 0; i < expense.partipants.length; i++) {
            let expenseParticipant: ExpenseParticipants;
            expenseParticipant = {
                id: expense.partipants[i].id,
                user: expense.partipants[i],
                owedAmout: sharedAmount - (paidBy === expense.partipants[i] ? sharedAmount : 0),
                paidAmout:  paidBy === expense.partipants[i] ? sharedAmount : 0
            }
            expenseParticipants.push(expenseParticipant);
        }

        return expenseParticipants;
    }
}
