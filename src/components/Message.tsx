interface MessageProps {
    message: string;
    onChange: (e: React.FormEvent<EventTarget>) => void
}

export const Message = (props:MessageProps) => {
    return (
    <div className="message" >
        <label htmlFor="message">
            <textarea id="message" name="message" value={props.message} onChange = {props.onChange}placeholder = "Send us an message?"></textarea>
        </label>
      </div>
    )
}

export default Message