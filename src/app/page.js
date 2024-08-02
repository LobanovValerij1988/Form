'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Form1 from "@/app/components/Form1";
import Form2 from "@/app/components/Form2";
import Form3 from "@/app/components/Form3";
import CustomProgressBar from "@/app/components/CustomProgressBar";
import {useRef, useState} from "react";

const settings = {
    infinite: true,
    arrows: false,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    swipe: false,
    touchMove: false
};

export default function Home() {
  const [isThirdForm, setIsThirdForm] = useState(false);
  const [selectedTypeOfRoof, setSelectedTypeOfRoof] = useState('');
  const [selectedTypeOfWindow, setSelectedTypeOfWindow] = useState('');
  const [progress, setProgress] = useState(10);
  const sliderRef = useRef(null);

  const onSelectWindow = (e)=>{
        setSelectedTypeOfWindow(e.currentTarget.getAttribute('data-value'));
        sliderRef.current.slickGoTo(2);
        setIsThirdForm(true);
        setProgress(95);
  }

  const onRoofTypeSelect = (e)=>{
      setSelectedTypeOfRoof(e.currentTarget.getAttribute('data-value'));
      sliderRef.current.slickGoTo(1);
      setProgress(50);
  }

  const backToFirstForm = ()=>{
        sliderRef.current.slickGoTo(0);
        setProgress(10);
  }
  return (
      <div className = {`w-full bg-neutral-50  pb-4` }>
          <CustomProgressBar
              progress={progress}
              fontColor={isThirdForm ? "text-white" : "text-pale"}
              bgColor={isThirdForm ? "bg-custom-darkblue" : "bg-neutral-50" }
          />
          <Slider ref={sliderRef} {...settings} >
              <Form1  onSelectRoof = { onRoofTypeSelect } selectedRoof = { selectedTypeOfRoof }/>
              <Form2 onBack = {backToFirstForm} onSelectWindow = { onSelectWindow } selectedWindow = { selectedTypeOfWindow } />
              <Form3 dachform={selectedTypeOfRoof} dachfenster = {selectedTypeOfWindow}/>
          </Slider>
      </div>
  )
      ;
}
