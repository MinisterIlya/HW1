let money,
    time;

    function strat() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null ) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
};

strat();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpense() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
    
        if ((typeof(a)) === 'string' && ((typeof(a)) != null) && ((typeof(b)) === 'string' && ((typeof(b)) != null ) 
        && a != '' && b != '' && a.length < 50)) {  
    
            console.log("done");
            appData.expenses[a] = b;
    
        } else {
            alert("Некорректно заполнены поля. Пожалуйста повторите попытку");
            i--;
    
        }
    }
}

chooseExpense();

// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');
//         if ((typeof(a)) === 'string' && ((typeof(a)) != null) && ((typeof(b)) === 'string' && ((typeof(b)) != null ) 
//         && a != '' && b != '' && a.length < 50)) {  
    
//             console.log("done");
//             appData.expenses[a] = b;
//             i++;
    
//         } else {
            //  alert("Некорректно заполнены поля. Пожалуйста повторите попытку");
            // i--;
//         }

// }

// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');
//     if ((typeof(a)) === 'string' && ((typeof(a)) != null) && ((typeof(b)) === 'string' && ((typeof(b)) != null ) 
//     && a != '' && b != '' && a.length < 50)) {  

//         console.log("done");
//         appData.expenses[a] = b;
//         i++;

//     } else {
         //  alert("Некорректно заполнены поля. Пожалуйста повторите попытку");
            // i--;

//     } 
// }  
// while (i < 2);

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {

    if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень зарплаты");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}
}

detectLevel();

console.log(appData);

function checkSavings() {
    if(appData.savings == true) {
    let save = +prompt("Какогова сумма накопленй?"),
    percent = +prompt("Под какой процент?");
    
    appData.monthIncome = save/100/12*percent;
    alert("Доход в месяц с вашего дипозита:" + appData.monthIncome);
    }
}

checkSavings();


function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let a =prompt("Статья необязательных расходов?", '');
        appData.optionalExpenses[i] = a;
    }
    
}

chooseOptExpenses();