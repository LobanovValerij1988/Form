import Image from 'next/image';

export default function CustomProgressBar({progress, fontColor, }) {
    let translate = '-40px';
    if( progress > 90 ) {
        translate = '-60px'
    }
    return (
        <div className="w-full relative  mb-4 ">
            <p style={{left:progress+"%", transform: `translateX(${translate})`}}
               className={"text-xs inline-block relative " + fontColor}
            >
                {progress}% geschafft
            </p>
            <div className="w-full relative h-1 bg-custom-super-lightgreen/20 rounded-lg mt-4 " >
                <div style={{width: progress + '%'}} className="bg-custom-lightgreen h-1 rounded-lg" ></div>
                <div style={{left: progress + '%',transform:"translateX(-50%)"}} className="w-5 h-5 absolute -top-2.5 bg-custom-lightgreen rounded-full z-10 min">
                    <div  className="flex items-center justify-center  h-full">
                        <Image
                            src="/svg/progress.svg"
                            height={5.6}
                            width={7.6}
                            alt="done in percent"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}