export default function CustomCheckBox({label, value, onValueSet }) {
  const onChange = (e) =>{
      value[label.toLowerCase()] =e.target.value;
      onValueSet({...value});
  }
    return (
        <div className="mb-1 sm:mb-2.5">
            <legend className="ml-1 text-sm text-pale">{label}</legend>
            <input type="radio" name="gender" id="Herr" value="Herr" checked={value[label.toLowerCase()] === "Herr"} onChange={onChange} />
            <label htmlFor="Herr" className="pl-1.5 mr-9">Herr</label>
            <input type="radio" name="gender" id="Frau" value="Frau" checked={value[label.toLowerCase()] === "Frau"} onChange={onChange} />
            <label className="pl-1.5" htmlFor="Frau">Frau</label>
        </div>
    )
}