import React from "react";
import "./Home.css";
import FieldInput from "../../Form/Login";

function Home() {
    return (
        <div id="home">
            <h1>About Page</h1>
            <p>
                Welcome to BuyRide
            </p>
            <p style={{ paddingLeft: 10, paddingRight: 10 }}>Find a new used car of your choice! Login below to search for a new used vehicle</p>
            <br></br>
            <FieldInput />
        </div>
    );
}

export default Home;