import React from 'react';

interface ContatDataProps {
    icon: JSX.Element;
    data: string;

};
 
const ContatData: React.FC<ContatDataProps> = ({icon, data}) => {
    return (
        <li>
            {icon}
            <p>{data}</p>
        </li>
     );
}
 
export default ContatData;