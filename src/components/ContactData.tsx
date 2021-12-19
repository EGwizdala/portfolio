import React from 'react';


interface ContatDataProps {
    icon: JSX.Element;
    data: string;

}
 
const ContatData = (props: ContatDataProps) => {
    return (
        <li>
            {props.icon}
            <div>{props.data}</div>
        </li>
     );
}
 
export default ContatData;