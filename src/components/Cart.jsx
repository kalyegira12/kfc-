import { useParams } from "react-router-dom"
import {data,medu_special} from "../data/data"
function Cart(){
    const {name}=useParams();
    const dish=[...data,...medu_special].filter((item)=>item.title===name)[0]
    return(
        <div>
            <h1>{dish.title}</h1>
            <img src={dish.img}/>
            <p>{dish.price}</p>
        </div>
    )
}

export default Cart