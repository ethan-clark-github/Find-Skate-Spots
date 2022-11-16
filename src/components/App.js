//app stuff

import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import Search from "./Search";
import SubmitPark from "./SubmitPark";
import SkatespotContainer from "./SkatespotContainer";
import Skatespot from "./Skatespot";


function App() {

    const [page, setPage] = useState("/")
    const [skatespots, setSkatespots] = useState([])
    // const [search, setSearch] = useState('')



    // const filteredSkatespots = skatespots.filter(skatespot => {
    //     return skatespot.name.toLowerCase().includes(search.toLowerCase())
    // })

    useEffect(() => {
        fetch('http://localhost:3000/skatespots')
            .then(res => res.json())
            .then((data) => setSkatespots(data));
    }, [])



    function handleAddSkatespot(newSkatespot) {
        fetch("http://localhost:3000/skatespots", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newSkatespot),
        })
            .then((res) => res.json())
            .then((data) => setSkatespots([data, ...skatespots]));
    };


    // return (
    //     <div>
    //         <Header />
    //         <Nav />
    //         <Home />
    //         <Search search={search} setSearch={setSearch} />
    //         <SkatespotContainer filteredSkatespots={filteredSkatespots} />
    //         <SubmitPark handleAddSkatespot={handleAddSkatespot} />

    //     </div>
    // );


    return (
        <div>
            <Header />
            <Nav onChangePage={setPage} />

            {/* <Search search={search} setSearch={setSearch} /> */}

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/skatespots" element={

                    // <SkatespotContainer filteredSkatespots={filteredSkatespots} />} />
                    <SkatespotContainer skatespots={skatespots} />} />


                <Route path="/submitpark" element={<SubmitPark handleAddSkatespot={handleAddSkatespot} />} />



            </Routes>


        </div>
    );

}

export default App;