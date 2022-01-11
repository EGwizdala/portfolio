import React from 'react';


interface ContatDataProps {
    icon: JSX.Element;
    data: string;

}
 //generic naming, not related to Contact. How about ListItemWithIcon or can be rendered as content of ListWithIcons
const ContatData = (props: ContatDataProps) => {
    return (
        <li>
            {props.icon}
            <p>{props.data}</p>
        </li>
     );
}
 
export default ContatData;