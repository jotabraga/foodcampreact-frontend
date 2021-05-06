import Food from "./Food";

export default function Dishes(props){   
    
    const dishData = {...props, foodtype:"dish", selected:false}

    return(
        <Food content={dishData} />                   
    );
}