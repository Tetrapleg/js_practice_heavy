'use strict';

//Left aside
let start = document.getElementById('start'),
      btnCancel = document.getElementById('cancel'),
      btnPlus = document.getElementsByTagName('button'),
      btnIncomePlus = btnPlus[0],
      btnExpensesPlus = btnPlus[1],
      depositCheck = document.querySelector('#deposit-check'),
      additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
      salaryAmount = document.querySelector('.salary-amount'),
      incomeTitle = document.querySelector('input.income-title'),
      expensesTitle = document.querySelector('input.expenses-title'),
      expensesItems = document.querySelectorAll('.expenses-items'),
      targetAmount = document.querySelector('.target-amount'),
      periodSelect = document.querySelector('.period-select'),
      periodAmount = document.querySelector('.period-amount'),
      additionalExpensesItem = document.querySelector('.additional_expenses-item'),
      incomeItems = document.querySelectorAll('.income-items'),
      depositBank = document.querySelector('.deposit-bank'),
      depositPercent = document.querySelector('.deposit-percent'),
      depositAmount = document.querySelector('.deposit-amount');

//Right aside
let resultTotal = document.querySelectorAll('.result-total'),
      budgetMonthValue = resultTotal[0],
      budgetDayValue = resultTotal[1],
      expensesMonthValue = resultTotal[2],
      additionalIncomeValue = resultTotal[3],
      additionalExpensesValue = resultTotal[4],
      incomePeriodValue = resultTotal[5],
      targetMonthValue = resultTotal[6];

//Code

let isNumber = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

class AppData {
  constructor(){
    this.budget = 0;  
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.expensesMonth = 0;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.deposit = false;
  }

  check() {
    if (salaryAmount.value !== '') {
      start.removeAttribute('disabled');
    }
  }

  start() {
    if (!isNumber(salaryAmount.value) || salaryAmount.value === '') {
      start.setAttribute('disabled', 'true');
      return;
    }
    const allInput = document.querySelectorAll('.data input[type = text]');
    allInput.forEach((item) => {
      item.setAttribute('disabled', 'true');
    });
    btnExpensesPlus.setAttribute('disabled', 'true');
    btnIncomePlus.setAttribute('disabled', 'true');
    start.style.display = 'none';
    btnCancel.style.display = 'block';
  
    this.budget = +salaryAmount.value;

    this.getExpInc();
    this.getExpensesMonth();
    this.getAddExpInc();
    this.getInfoDeposit();
    this.getBudget();
    this.getStatusIncome();
    this.showResult();

  }

  showResult() {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = Math.floor(this.budgetDay);
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();
    periodSelect.addEventListener('change', () => {
      incomePeriodValue.value = this.calcPeriod();
    });
  }

  addExpIncBlock() {
    const startStr = this.className.split(' ')[1].split('_')[0];
    let incExpItems = document.querySelectorAll(`.${startStr}-items`);
    const btnExpIncPplus = document.querySelector(`.${startStr}_add`);
    const cloneExpIncomeItem = incExpItems[0].cloneNode(true);
    incExpItems[0].parentNode.insertBefore(cloneExpIncomeItem, btnExpIncPplus);
    incExpItems = document.querySelectorAll(`.${startStr}-items`);

    if (incExpItems.length === 3){
      btnExpIncPplus.style.display = 'none';
    }
  }

  getExpInc(){

    const count = item => {
      const startStr = item.className.split('-')[0];
      const itemTitle = item.querySelector(`.${startStr}-title`).value;
      const itemAmount = item.querySelector(`.${startStr}-amount`).value;
      if (itemTitle !== '' && itemAmount !== ''){
        this[startStr][itemTitle] = itemAmount;
      }
    }

    incomeItems = document.querySelectorAll('.income-items');
    expensesItems = document.querySelectorAll('.expenses-items');

    incomeItems.forEach(count);
    expensesItems.forEach(count);

    for (const key in this.income) {
      this.incomeMonth += +this.income[key];
    }

  }

  getAddExpInc() {
    const addExpenses = additionalExpensesItem.value.split(',');
    console.log(additionalIncomeItem);
    const countGet = item => {

      if (item.className === undefined) {
        item = item.trim();
        if (item !== ''){
          item = item.charAt(0).toUpperCase() + item.substring(1).toLowerCase();
          this.addExpenses.push(item);
          
        }
      } else {
        item = item.value.trim();
        if (item !== '') {
          this.addIncome.push(item);
        }
      }
    };
    
    addExpenses.forEach(countGet);
    additionalIncomeItem.forEach(countGet);
  }

  //Функция возвращает сумму всех обязательных расходов за месяц
  getExpensesMonth() {
    for (let key in this.expenses) {
      this.expensesMonth += +this.expenses[key];
    }
  }

  //Функция возвращает Накопления за месяц (Доходы минус расходы)
  getBudget() {

    const monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + monthDeposit;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
  }

  //Функция подсчитывает, за какой период будет достигнута цель накопить
  getTargetMonth() {
    return targetAmount.value / this.budgetMonth;
  }

  getStatusIncome() {
    if (this.budgetDay >= 1200) {
      return ('У вас высокий уровень дохода');
    } else if (this.budgetDay >= 600) {
      return ('У вас средний уровень дохода');
    } else if (this.budgetDay < 600, this.budgetDay >= 0) {
      return ('К сожалению у вас уровень дохода ниже среднего');
    } else if (this.budgetDay < 0) {
      return ('Что-то пошло не так');
    }
  }

  getInfoDeposit() {
    if (this.deposit) {
      this.percentDeposit = depositPercent.value;
      this.moneyDeposit = depositAmount.value;
    }
  }

  calcPeriod() {
    return this.budgetMonth * periodSelect.value;
  }
  reset() {
      
    const inputTextData = document.querySelectorAll('.data input[type = text]'),
        resultInputAll = document.querySelectorAll('.result input[type = text]');

    inputTextData.forEach((elem) => {
      elem.value = '';
      elem.removeAttribute('disabled');
      periodSelect.value = '0';
      periodAmount.innerHTML = periodSelect.value;
    });
    resultInputAll.forEach((elem) => {
      elem.value = '';
    });

    for (let i = 1; i < incomeItems.length; i++) {
      incomeItems[i].parentNode.removeChild(incomeItems[i]);
      btnIncomePlus.style.display = 'block';
    }

    this.budget = 0,  
    this.budgetDay = 0,
    this.budgetMonth = 0,
    this.income = {},
    this.incomeMonth = 0,
    this.addIncome = [],
    this.expenses = {},
    this.addExpenses = [],
    this.expensesMonth = 0,
    this.deposit = false,
    this.percentDeposit = 0,
    this.moneyDeposit = 0,

    btnCancel.style.display = 'none',
    start.style.display = 'block',
    btnExpensesPlus.removeAttribute('disabled'),
    btnIncomePlus.removeAttribute('disabled'),
    depositCheck.checked = false;
    depositBank.style.display = 'none';
    depositAmount.style.display = 'none';
    depositPercent.style.display = 'none';
    
  }

  changePersent() {
    const valueSelect = this.value;
    if (valueSelect === 'other' || valueSelect === '') {
      depositPercent.value = '';
      depositPercent.placeholder = 'Введите процент вашего банка';
      depositPercent.addEventListener('keyup', function () {
        if (this.value <= 0 || this.value > 100 || !isNumber(this.value)) {
          alert('Введите корректное значение в поле "Процент"');
          start.setAttribute('disabled', 'true');
          depositPercent.value = '';
        } else {
          start.removeAttribute('disabled');
        }
      });
    } else {
      depositPercent.value = valueSelect;
    }
  }

  depositHandler() {
    if (depositCheck.checked) {
      depositBank.style.display = 'inline-block';
      depositAmount.style.display = 'inline-block';
      depositPercent.style.display = 'inline-block';
      this.deposit = true;
      depositBank.addEventListener('change', this.changePersent);
    } else {
      depositBank.style.display = 'none';
      depositAmount.style.display = 'none';
      depositPercent.style.display = 'none';
      depositBank.value = '';
      depositAmount.value = '';
      depositPercent.value = '';
      this.deposit = false;
      depositBank.removeEventListener('change', this.changePersent);
    }
  }

  eventListener() {
    start.addEventListener('click', this.start.bind(this));
    btnIncomePlus.addEventListener('click', this.addExpIncBlock);
    btnExpensesPlus.addEventListener('click', this.addExpIncBlock);
    btnCancel.addEventListener('click', this.reset.bind(this));
    salaryAmount.addEventListener('keyup', this.check);

    periodSelect.addEventListener('input', () => {
      periodAmount.innerHTML = periodSelect.value;
    });

    depositCheck.addEventListener('change', this.depositHandler.bind(this));
  }

}



const appData = new AppData();
appData.eventListener();


// if (this.value <= 0 || this.value > 100 || !isNumber(this.value)) {
//   alert('Введите корректное значение в поле "Процент"');
//   start.setAttribute('disabled', 'true');
  
// } else {
//   start.removeAttribute('disabled');
// }
