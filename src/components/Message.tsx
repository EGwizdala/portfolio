interface MessageProps {
    message: string;
    change: any;
}

export const Message = (props:MessageProps) => {
    return (
    <div className="message" >
        <label htmlFor="message">
            <textarea id="message" name="message" value={props.message} onChange = {props.change}placeholder = "Send us an message?"></textarea>
        </label>
      </div>
    )
}

export default Message