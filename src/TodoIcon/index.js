import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import './TodoIcon.css';

const iconTypes = {
    "check": (color) => <FaCheck className='icon' fill={color}/>,
    "delete": (color) => <ImCross className='icon' fill={color}/>,
}

function TodoIcon({ type, color, onClick }){
    return (
        <span 
        className={`icon icon-${type}`} 
        onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon };