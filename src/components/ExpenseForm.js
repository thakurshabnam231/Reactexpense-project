
import React from react;
const ExpenseForm = ()=>{
    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    
         <label>Title</label>
            <input type="text"/>
            </div>
            <div className="new-expense__controls">
                    
        <label>Amount</label>
            <input type="number" min= "0.01" step="0.01/>
            </div>
              <div className="new-expense__controls">
              
            <label>Date</label>
           <input type='date' min ="2018-06-09" max="2022-09-01"/>
           </div>
           </div>
           <div className="new-expense__actions">
               <button type="submit"> add expense</button>
           </div>
         </form>
    );
};
export default ExpenseForm;