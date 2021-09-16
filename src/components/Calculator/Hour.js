const Hour = ({hour}) => {
    return ( 
        <li className='hour'>
            <h4 className="hour__time">{hour}</h4>
            <p className="hour__info">9 hours of sleep, 6 sleep cycles</p>
        </li>
     );
}
 
export default Hour;