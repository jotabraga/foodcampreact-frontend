import React,{useState} from "react";

export default function Footer(props){
 
   

    return (
        <div class="footer">
            <a href="#" class="fazer-pedido" onClick={props.closeOrder}>
            {props.orderButton}
            </a>
        </div>
    );
}