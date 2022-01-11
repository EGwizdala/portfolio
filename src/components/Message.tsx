interface MessageProps {
    message: string;
    onChange: (e: React.FormEvent<EventTarget>) => void
}

// could be replaced by Input component (if it accepted tagName prop or renderAsTextarea flag)
export const Message = (props:MessageProps) => {
    return (
        <label className="form-element" htmlFor="message">
            <textarea id="message" name="message" value={props.message} onChange = {props.onChange}placeholder = "Send us an message?"></textarea>
        </label>
    )
}

export default Message