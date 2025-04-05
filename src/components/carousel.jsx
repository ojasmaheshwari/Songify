import React, { useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

const Carousel = () => {
    const defaultItems = [
        "https://dynamicmedia.livenationinternational.com/l/d/r/c0e1853f-3f97-44af-a22f-9dddcd32b99c.jpg",
        "https://th.bing.com/th/id/OIP.ypCS0APgTZ4sL8-edtekFwHaDt?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.szAzoTq40oNTuvDgITnFJgHaEK?rs=1&pid=ImgDetMain",
    ];
    const [items, setItems] = useState(defaultItems);
    const [currentItemIndex, setCurrentItemIndex] = useState(0);

    function nextItem() {
        if (currentItemIndex === items.length - 1) {
            setCurrentItemIndex(0);
            return;
        }
        setCurrentItemIndex((currentItemIndex) => currentItemIndex + 1);
    }

    function previousItem() {
        if (currentItemIndex === 0) {
            setCurrentItemIndex(items.length - 1);
            return;
        }
        setCurrentItemIndex((currentItemIndex) => currentItemIndex - 1);
    }

    return (
        <>
            <div className="w-full h-64 md:h-80 lg:h-80 flex justify-center items-center p-2">
                <div className="w-full h-full rounded-md bg-slate-600 flex items-center justify-center relative">
                    {items.map((item, idx) => (
                        <img
                            key={idx}
                            src={item}
                            alt="..."
                            className={`w-full h-full absolute z-0 ${
                                currentItemIndex === idx ? "" : "hidden"
                            } md:w-auto md:aspect-auto lg:w-auto lg:aspect-auto`}
                        />
                    ))}
                    <div className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg-h-14 rounded-[50%] bg-slate-400 z-10 absolute flex items-center justify-center left-2 top-[50%] -translate-y-[50%]">
                        <GrPrevious onClick={() => previousItem()} />
                    </div>
                    <div className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg-h-14 rounded-[50%] bg-slate-400 z-10 absolute flex items-center justify-center right-2 top-[50%] -translate-y-[50%]">
                        <GrNext onClick={() => nextItem()} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carousel;
