import React, { useState } from "react";



function NewSkatespotForm({ handleAddSkatespot }) {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [zip, setZip] = useState('')
    const [area, setArea] = useState('')
    const [image, setImage] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        const newSkatespot = {
            name,
            address,
            city,
            zip,
            area,
            image
        }
        handleAddSkatespot(newSkatespot)
    }

    return (
        <div className="submit-park">
            <h2>New Skate Spot</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    name="address"
                    placeholder="Address"
                />
                <input
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    name="city"
                    placeholder="City"
                />
                <input
                    onChange={(e) => setZip(e.target.value)}
                    type="text"
                    name="zip"
                    placeholder="Zipcode"
                />
                <input
                    onChange={(e) => setArea(e.target.value)}
                    type="text"
                    name="area"
                    placeholder="Area"
                />
                <input
                    onChange={(e) => setImage(e.target.value)}
                    type="text"
                    name="image"
                    placeholder="Image URL"
                />
                <button type="submit">Add Skatespot</button>
            </form>
        </div>
    );
}

export default NewSkatespotForm;