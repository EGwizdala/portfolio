import React from 'react';


interface ContatDataProps {
    icon: JSX.Element;
    data: string;

}
 
const ContatData = (props: ContatDataProps) => {
    return (
        <li>
            {props.icon}
            <p>{props.data}</p>
        </li>
     );
}
 
export default ContatData;