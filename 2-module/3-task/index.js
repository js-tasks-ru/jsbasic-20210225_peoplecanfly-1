let calculator = {
  firstOperand: null,
  secondOperand: null,
  read(firstOperand,secondOperand){
    this.firstOperand = firstOperand;
    this.secondOperand = secondOperand;
  },

  sum(){
    return this.firstOperand + this.secondOperand
  },

  mul(){
    return this.firstOperand * this.secondOperand
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
