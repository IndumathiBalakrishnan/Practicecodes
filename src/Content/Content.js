import React from "react";
import Card from "../Card/Card";
import "./Content.css";
import Image1 from "./Image1.jpg"
import Image2 from "./Image2.jpg"
import Image3 from "./Image3.jpg"
import Image4 from "./Image4.jpg"
import Image5 from "./Image5.jpg"
import Image6 from "./Image6.jpg"
import Image7 from "./Image7.jpg"
import Image8 from "./Image8.jpg"
const Content = () => {
    const FlowerList = [
        { title: "Plant1", Image: Image1, ID: "1", Name: "Hibiscus", OriginPlace: "China", Color: "Red" },
        { title: "Plant2", Image: Image2, ID: "2", Name: "Rose", OriginPlace: "China", Color: "Red" },
        { title: "Plant3", Image: Image3, ID: "3", Name: "Dahlia", OriginPlace: "Spain", Color: "Pink" },
        { title: "Plant4", Image: Image4, ID: "4", Name: "Jasmine", OriginPlace: "China", Color: "White" },
        { title: "Plant5", Image: Image5, ID: "5", Name: "Daisy", OriginPlace: "France", Color: "Red" },
        { title: "Plant5", Image: Image6, ID: "6", Name: "Lotus", OriginPlace: "Asia", Color: "White" },
        { title: "Plant6", Image: Image7, ID: "7", Name: "Lily", OriginPlace: "Britain", Color: "Orange" },
        { title: "Plant5", Image: Image8, ID: "8", Name: "Alphinia", OriginPlace: "Asia", Color: "Red" }
    ]
    return (
        <div className="Container">

            {
                FlowerList.map((userData) => {
                    const { title, Image, ID, Name, OriginPlace, Color, Year } = userData;
                    return <Card title={title} Image={Image} ID={ID} Name={Name} OriginPlace={OriginPlace} Color={Color} Year={Year} />;
                })}

        </div>
    );
};

export default Content;


