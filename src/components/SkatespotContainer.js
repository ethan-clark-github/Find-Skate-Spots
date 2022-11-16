import React, { useState } from "react";
import Skatespot from "./Skatespot";
import Search from "./Search";







function SkatespotContainer({ skatespots }) {

    const [search, setSearch] = useState('')

    const filteredSkatespots = skatespots.filter(skatespot => {
        return skatespot.name.toLowerCase().includes(search.toLowerCase())
    })



    const mapSkatespots = filteredSkatespots.map((skatespot) => {
        return <Skatespot key={skatespot.id} skatespot={skatespot} />


    })

    return (
        <div>
            <Search search={search} setSearch={setSearch} />
            <ul className="cards">
                {mapSkatespots}
            </ul>

        </div>
    );
}

export default SkatespotContainer;