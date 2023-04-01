import { useSelector } from "react-redux";
import s from "./style.module.css";

export function ExpenseTotal(props) {
  const expenseList = useSelector(store => store.EXPENSE.expensesList);
  // reduce is a method that executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
  const totalExpenses = expenseList.reduce((acc, item) => acc + item.price, 0);

  const income = useSelector(store => store.EXPENSE.income);
  const remainingMoney = income - totalExpenses;
  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>{totalExpenses} €</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>{remainingMoney} €</div>
      </div>
    </div>
  );
}
