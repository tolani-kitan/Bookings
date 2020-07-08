import React, { useContext } from 'react';
import AlertContext from '../context/alert/alertContext';

const Alert = () => {
    const alertContext = useContext(AlertContext);

    const { alerts } = alertContext;

    return (
       alertContext.alerts.length > 0 && alertContext.alerts.map(alert => (
           <div key={alerts.id} className={`alert alert-{alert.type}`}>
               <i className='fas fa-info-circle'></i>{alert.msg}
           </div>
       ))
    );
};

export default Alert;
