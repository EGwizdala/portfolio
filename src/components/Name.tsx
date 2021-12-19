import { ReactComponent as PersonSVG } from '../svg/person.svg';

interface NameProps {
    name: string;
    change: any;
}

const Name = (props: NameProps) => {
    return (
    <div>
        <label className="form-element" htmlFor="name">
            <input type="text" id="name" name="name" value={props.name} onChange = {props.change} placeholder="Name" required></input>
        </label>
      </div>
    )
}

export default Name