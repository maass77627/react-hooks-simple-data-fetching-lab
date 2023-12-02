// create your App component here
import React, { useState, useEffect } from "react";

function App() {
    const [dogImage, setDogImage] = useState("")

    useEffect(() =>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response)=> response.json())
        .then((data) => {
            setDogImage(data.message)
        })

    }, [])

    return (
        <div>
            <p>"Loading..."</p>
            <img src={dogImage} alt="A Random Dog"></img>
        </div>

    )

}

export default App