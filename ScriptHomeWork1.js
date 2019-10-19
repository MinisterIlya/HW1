let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", ''),

// console.log (money);
// console.log (time);

    appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
},


 i = 0;

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


appData.moneyPerDay = appData.budget / 30


alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень зарплаты");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
};

console.log(appData);