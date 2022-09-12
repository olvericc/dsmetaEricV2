import axios from 'axios'
import icon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request';
import './styles.css'

//creating type 
type Props = {
    saleId: number;
}

//function handleClick
function handleClick(id:number ) {
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
        console.log("Success!");
    })
}

//adding the type
function NotificationButton({saleId} : Props) {
    return (
        <>
            <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
                <img src={icon} alt="Notificar" />
            </div>
        </>
    )
}

export default NotificationButton