// unused import
import { ReactComponent as PersonSVG } from '../svg/person.svg';


interface NameProps {
    name: string;
    onChange: (e: React.FormEvent<EventTarget>) => void
      
}

// how about generic Input component 
const Name = (props: NameProps) => {
    return (
    <>
        <label className="form-element" htmlFor="name">
            <input type="text" id="name" name="name" value={props.name} onChange = {props.onChange} placeholder="Name" required></input>
        </label>
      </>
    )
}

export default Name

//redundant comments

//props change na onchache

//NameProps e:React.FormEvent<HTMLInputElement>