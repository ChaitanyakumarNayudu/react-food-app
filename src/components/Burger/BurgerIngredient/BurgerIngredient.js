import React from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.module.css';

const BurgerIngredient = (props) => {
    let ingredient = null;

    switch(props.type) {
        case ('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case ('meat'):
            ingredient = <div className={classes.Meat}></div>;
            break;
        case ('cheese'):
            ingredient = <div className={classes.Cheese}></div>;
            break;
        case ('salad'):
            ingredient = <div className={classes.Salad}></div>;
            break;
        case ('bacon'):
            ingredient = <div className={classes.Bacon}></div>;
            break;
        default:
            ingredient = null;
    }

    return ingredient;
}

BurgerIngredient.propTypes = {
    type: PropTypes.string
};

export default BurgerIngredient;

// const ingredientChoices = {
//     'bread-bottom': <div className={classes.BreadBottom}></div>,
//     'bread-top': (
//       <div className={classes.BreadTop}>
//         <div className={classes.Seeds1}></div>
//         <div className={classes.Seeds2}></div>
//       </div>
//     ),
//     'meat': <div className={classes.Meat}></div>,
//     'cheese': <div className={classes.Cheese}></div>,
//     'bacon': <div className={classes.Bacon}></div>,
//     'salad': <div className={classes.Salad}></div>
//   };