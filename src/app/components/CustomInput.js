export default function CustomInput({label, value, isError, errorMsg, placeholder, type="text", classes=""}) {
    const borderColor = isError ? ' border-custom-error' : ' border-[#E3E3E3]';
    const errorStyle = isError ? ' visible' : ' invisible';
    return (
        <div className={"mb-4 sm:mb:2.5"+classes}>
            <label htmlFor={label} className="pl-1.5 mb-0.5 text-sm text-pale"> {label} </label>
            <span className={"ml-1 text-xs  text-custom-error" + errorStyle}> {errorMsg} </span>
            <input  className={"w-full -[46px] pl-4 py-2 border rounded-lg text-base sm:text-xl "+ borderColor}
                    placeholder={placeholder}
                    type={type}  id={label} value={value}/>
        </div>
    )
}
