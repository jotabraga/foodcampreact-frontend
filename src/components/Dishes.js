import Food from "./Food";

export default function Dishes(props){

    const {title, image, description, price} = props;

    return(
        <Food title={title} image={image} description={description} price={price} />                   
    );
}