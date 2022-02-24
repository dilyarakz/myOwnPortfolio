import React, { useState, useEffect } from 'react';
import "./Carousel.css";
import { useSwipeable } from "react-swipeable";

import { TiMediaRecordOutline } from "react-icons/ti";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";





const carousel = {
    marginTop: "4rem",
    paddingBottom: "2rem",
    overflow: "hidden",
    width: "100vw",
    alignItems: "center"
}





export const CarouselItem = ({ children, width }) => {

    return (<div style={{
        width: width,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        margin: "0",
    }}>
        {children}
    </div>
    );
}


const Carousel = ({ children }) => {


    // let dumArr = new Array(Math.ceil(children.length / 2))
    const [paused, setPaused] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;

        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
        }, 4000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    })

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    })

    return (
        <div {...handlers}
            style={carousel} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <div style={{
                transform: `translateX(-${activeIndex * 100}%)`,
                whiteSpace: "nowrap",
                transition: "transform 0.3s",

            }}>
                {
                    React.Children.map(children, (child, index) => {
                        return React.cloneElement(child, { width: "100%" });
                    })}
            </div>
            <div className="indicators">
                <button className="arrorLeft" onClick={() => {
                    return updateIndex(activeIndex - 1)
                }}>
                    <BsChevronDoubleLeft />
                </button>
                {
                    React.Children.map(children, (child, index) => {
                        return (
                            <button className={`${index === activeIndex ? "active" : "notActive"}`}></button>
                        )
                    })
                }
                <button className="arrorRight" onClick={() => updateIndex(activeIndex + 1)}>
                    <BsChevronDoubleRight />
                </button>

            </div>
        </div>
    );
}


// #endregion

export default Carousel;