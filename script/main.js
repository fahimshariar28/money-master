// Giving a Initial Value of Balance with the Income

document.getElementById("total-income").addEventListener("keyup", function () {
  const totalIncome = getElementValueById("total-income");
  if (
    /* Validation Checking if any input Number is Negative */
    totalIncome < 0
  ) {
    alert("Please enter a Positive Number");
  } else if (
    /* Validation Checking if any input is number or not */
    isNaN(totalIncome)
  ) {
    alert("Please fill all the inputs with Number");
  } else {
    setElementById(totalIncome, "new-balance");
  }
});

// Triggering Calculate Button with Event Listener

document.getElementById("calculate-btn").addEventListener("click", function () {
  const totalIncome = getElementValueById("total-income");
  const foodExpenses = getElementValueById("food-expenses");
  const rentExpenses = getElementValueById("rent-expenses");
  const clothsExpenses = getElementValueById("cloth-expenses");

  if (
    /* Validation Checking if any input Number is Negative */
    totalIncome < 0 ||
    foodExpenses < 0 ||
    rentExpenses < 0 ||
    clothsExpenses < 0
  ) {
    alert("Please enter a Positive Number");
  } else if (
    /* Validation Checking if any input is number or not */
    isNaN(totalIncome) ||
    isNaN(foodExpenses) ||
    isNaN(rentExpenses) ||
    isNaN(clothsExpenses)
  ) {
    alert("Please fill all the inputs with Number");
  } else {
    const totalExpenses = foodExpenses + rentExpenses + clothsExpenses;
    if (
      /* Checking if the total Expenses is Greater than the total income */ totalExpenses >
      totalIncome
    ) {
      alert("Cut your coat according to your cloth");
    } else {
      setElementById(totalExpenses, "total-expenses");
      const newBalance = totalIncome - totalExpenses;
      setElementById(newBalance, "new-balance");
    }
  }
});

// Triggering Save Button with Event Listener

document.getElementById("save-btn").addEventListener("click", function () {
  const totalIncome = getElementValueById("total-income");
  const balance = getElementTextById("new-balance");

  const savingPercent = getElementValueById("saving-percent");
  if (
    /* Validation Checking if Saving Percent is number or not */
    isNaN(savingPercent)
  ) {
    return alert("Please Enter Number");
  } else if (
    /* Validation Checking if Saving Percent is Greater than 100 */
    savingPercent > 100
  ) {
    alert("You Cannot Save more that 100%");
  } else {
    const savingAmount = totalIncome * (savingPercent / 100);
    if (
      /* Validation Checking if the saving amount is Greater than the Balance */
      savingAmount > balance
    ) {
      alert("You Can not save more than your Balance");
    } else {
      setElementById(savingAmount, "saving-amount");

      const totalExpenses = getElementTextById("total-expenses");
      const remainingAmount = totalIncome - (savingAmount + totalExpenses);
      setElementById(remainingAmount, "remaining-amount");
    }
  }
});
