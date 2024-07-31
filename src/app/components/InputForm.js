import CustomInput from "@/app/components/CustomInput";

export default function InputForm() {
    return (
        <form className="w-full mx-auto px-2.5 pb-4 sm:w-[430px] sm:px">
            <div className="mb-1 sm:mb:2.5">
                <legend className="ml-1 text-sm text-pale">Anrede</legend>
                <input type="radio" name="gender" id="Herr" value="Herr" checked/>
                <label htmlFor="Herr" className="pl-1.5 mr-9">Herr</label>
                <input type="radio" name="gender" id="Frau" value="Frau"/>
                <label className="pl-1.5" htmlFor="Frau">Frau</label>
            </div>
            <CustomInput
                label="Name"
                isError={true}
                placeholder="Vor- und Nachname"
                errorMsg="Field is required"
                type="text"
                value=""
            />
            <CustomInput
                label="Telefonnummer"
                isError={true}
                placeholder="+49 123 456 789"
                errorMsg="Field is required"
                value="tel"
                type="tel"
            />
            <CustomInput
                label="Postleitzahl"
                isError={true}
                placeholder="12277"
                errorMsg="Field is required"
                type="text"
                value=""

            />
            <CustomInput
                label="Ort"
                isError={false}
                placeholder="Berlin"
                errorMsg="Field is required"
                type="text"
                value=""
            />
            <div className="flex gap-x-2.5">
                <CustomInput
                    label="Straße"
                    isError={false}
                    placeholder="Berlin"
                    errorMsg=""
                    type="text"
                    value="Straße"
                    classes=" flex-2"
                />
                <CustomInput
                    label="Hausnummer"
                    isError={false}
                    placeholder="Nr."
                    errorMsg=""
                    type="text"
                    value="5"
                    classes=" flex-1"
                />
            </div>
            <button type="submit" className="w-full h-14 bg-custom-lightgreen rounded-[32px] sm:h-[56px]">
                Ja, das ist mein Hausdach.
            </button>
        </form>
    )
}
