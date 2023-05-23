import React from "react";
function MealPara(props) {
    console.log('MealPara running...')
    return ( 
        <p>{props.children}</p>
     );
}

export default  React.memo(MealPara)
