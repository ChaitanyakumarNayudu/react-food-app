import React from 'react';

import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {

   const ingredientsSummary = Object.keys(props.ingredients)
      .map(igKey => {
         return <p key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</p>
      });

   return(
      <>
         <h3>Order Summary</h3>
         <p>A delicious burger with the following ingredients:</p>
         <ul>
            {ingredientsSummary}
         </ul>
         <p>Continue to checkout?</p>
         <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
         <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
      </>
   );
}

export default OrderSummary;