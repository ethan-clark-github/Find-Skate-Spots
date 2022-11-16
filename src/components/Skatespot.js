//skatespot

import React, { useState } from "react";

function Skatespot({ skatespot }) {


    const [details, toggleDetails] = useState(true)


    const { name, address, city, zip, area, image } = skatespot





    return (

        <li className="cards__item">
            <div className="card">
                <img
                    src={image}
                    alt={name}
                    className="card__image"
                />

                <div className="card__content">
                    <div className="card__title">{name}</div>
                    <p className="card__text">{area}  </p>
                    <div className="card__detail">
                        <p>{address}</p>
                        <p>
                            {city}
                        </p>
                        <p>{zip} </p>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default Skatespot;