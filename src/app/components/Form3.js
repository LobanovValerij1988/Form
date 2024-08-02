import InputForm from "@/app/components/InputForm";

export default function Form3(props) {
    return (
        <>
            <div className="w-full pb-9  bg-custom-darkblue custom-form-paddings  sm:px-10 ">
                    <p className="pt-6 mb-2.5  text-white text-sm text-center sm:pt-5">
                        Eine Solaranlage spart Ihnen ca.
                    </p>
                    <p className="text-xl text-white flex justify-center sm:text-lg">
                        30.000 - 35.000 € Stromkosten
                        <img
                            className="h-[15p] -mt-5 ml-2"
                            src='/svg/info.svg'
                            alt=""
                        />
                    </p>
            </div>
            <div className="w-full bg-neutral-50 px-2.5 pt-4  sm:px-10 ">
                <p className="mb-1 text-sm text-center sm:text-lg ">
                    Gratulation, das Angebot ist in Ihrer Region
                    noch verfügbar! Wir senden Ihnen gerne
                    kostenlose Informationen zu.
                </p>
                <InputForm {...props} />
            </div>

        </>
    )
}
