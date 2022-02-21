import React, { useState, useEffect } from 'react';
import "./Carousel.css";
import { useSwipeable } from "react-swipeable";




const carousel = {
    overflow: "hidden",
    backgroundColor: "yellow"
}



export const CarouselItem = ({ children, width }) => {
    return (<div style={{
        width: width,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: "500px",
        backgroundColor: "green",
        color: "#fff",

    }}>
        {children}
    </div>
    );
}


const Carousel = ({ children }) => {

    const dumArr = []

    for (let i = 0; i <= Math.floor(children.length / 2); i++) {
        console.log("Dum", Math.floor(children.length / 2))
        dumArr.push(i);
    }


    const [paused, setPaused] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) / 2;

        } else if (newIndex >= React.Children.count(children) / 2) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
        }, 3000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    })

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 2),
        onSwipedRight: () => updateIndex(activeIndex - 2)
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
                        return React.cloneElement(child, { width: "50%" });
                    })}
            </div>
            <div className="indicators">
                <button onClick={() => { updateIndex(activeIndex - 2) }}>
                    Prev
            </button>
                {
                    React.Children.map(dumArr, (child, index) => {

                        console.log(dumArr)

                        return (
                            <button
                                className={`${index === activeIndex ? "active" : ""}`}
                                onClick={() => {
                                    console.log("index: ", index)
                                    updateIndex(index)
                                }}>
                                {index + 1}
                            </button>
                        )
                    })
                }
                <button onClick={() => updateIndex(activeIndex + 2)}>
                    Next
            </button>

            </div>
        </div>
    );
}


// #endregion

export default Carousel;