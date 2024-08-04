'use client'
import CustomInput from "@/app/components/cutomCompoments/CustomInput";
import {useState} from "react";
import CustomCheckBox from "@/app/components/cutomCompoments/CustomCheckbox";

export default function InputForm({dachform, dachfenster }) {
   const [data, setData] = useState( {
       anrede: "Herr",
       name: "",
       telefonnummer: "",
       postleitzahl: "",
       stadt: "",
       strasse: "",
       hausnummer: ""
   });
   const [checkError, setCheckError] = useState(false);
   const onSubmit = async (e) => {
      e.preventDefault();
      if(!data.anrede || !data.name || !data.telefonnummer || !data.postleitzahl || !data.stadt || !data.strasse || !data.hausnummer ) {
          setCheckError(true);
          return;
      }
      else {
          const response = await fetch('https://65590262e93ca47020a9fce8.mockapi.io/insert', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({...data, dachform, dachfenster }),
          });

          const result = await response.json();
          console.log(result);
      }
   }
   return (
        <form className="w-full mx-auto px-2.5 pb-4 sm:w-[430px] sm:px">
            <CustomCheckBox label="Anrede" value = {data} onValueSet={setData} />
            <CustomInput
                label="Name"
                checkError={checkError}
                onValueSet={setData}
                placeholder="Vor- und Nachname"
                errorMsg="Field is required"
                type="text"
                value={data}
            />
            <CustomInput
                label="Telefonnummer"
                checkError={checkError}
                onValueSet={setData}
                placeholder="+49 123 456 789"
                errorMsg="Field is required"
                value={data}
                type="tel"
            />
            <CustomInput
                label="Postleitzahl"
                checkError={checkError}
                onValueSet={setData}
                placeholder="12277"
                errorMsg="Field is required"
                type="text"
                value={data}

            />
            <CustomInput
                label="Stadt"
                checkError={checkError}
                onValueSet={setData}
                placeholder="Berlin"
                errorMsg="Field is required"
                type="text"
                value={data}
            />
            <div className="flex gap-x-2.5">
                <CustomInput
                    label="Strasse"
                    checkError={checkError}
                    onValueSet={setData}
                    placeholder="Berlin"
                    errorMsg=""
                    type="text"
                    value={data}
                    classes=" flex-2"
                />
                <CustomInput
                    label="Hausnummer"
                    checkError={checkError}
                    onValueSet={setData}
                    placeholder="Nr."
                    errorMsg=""
                    type="text"
                    value={data}
                    classes=" flex-1"
                />
            </div>
            <button
                type="submit"
                className="w-full h-14 bg-custom-lightgreen rounded-[32px] sm:h-[56px]"
                onClick={onSubmit}
            >
                Ja, das ist mein Hausdach.
            </button>
        </form>
    )
}
