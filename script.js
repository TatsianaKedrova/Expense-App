
//const button = document.querySelector(".btn");

//Expenses class: represents an expense
class Expense {
    constructor(expensesName, date, amount) {
        this.expensesName = expensesName;
        this.date = date;
        this.amount = amount;
    }
}
//UI Class: handle ui tasks
class UI {
    static displayExpensesInfo () { //store all info available about expenses
        const Expenses = [
            {
                expensesName: 'car',
                date: '23/09/1988',
                amount: '20000$'
            },
            {
                expensesName: 'flat',
                date: '03/01/2021',
                amount: '80000$'
            }
        ];
        const expensesInfo = Expenses;

        expensesInfo.forEach((expenses) => UI.addExpensesToList(expenses));
    }

    static addExpensesToList(expenses) {
        const list = document.querySelector("#expenses-list");

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${expenses.expensesName}</td>
        <td>${expenses.date}</td>
        <td>${expenses.amount}</td>
        <td><a href = "#" class = "btn btn-danger btn-sm delete></a></td>
        `;
        list.appendChild(row);



    }
}
//Store class: handles storage (local storage

//Event: display expenses
document.addEventListener('DOMContentLoaded', UI.displayExpensesInfo);
//Event: add an expense
document.querySelector("#form").addEventListener('submit', (event) => {
    //Get form values
    const expenses = document.querySelector("#name").value;
    const date = document.querySelector("#date").value;
    const amount = document.querySelector("#amount").value;
   
});

//Remove an expense