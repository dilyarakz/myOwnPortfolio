import React from 'react';
import Carousel, { CarouselItem } from './Carousel/Carousel';



function Contacts() {
    return (
        <div>
            <Carousel>
                <CarouselItem>Item 1</CarouselItem>
                <CarouselItem>Item 2</CarouselItem>
                <CarouselItem>Item 3</CarouselItem>
                <CarouselItem>Item 4</CarouselItem>
                <CarouselItem>Item 5</CarouselItem>
                <CarouselItem>Item 6</CarouselItem>

            </Carousel>
        </div>
    );

}


export default Contacts;