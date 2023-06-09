import imageOne from "./images/1.png"
import imageTwo from "./images/2.png"
import imageThree from "./images/3.png"

function App() {
    return (
        <div className="App">
            <div className="center-div">
                <section className="section-one">
                    <div className="one-top">
                        <img className="imgTwo" src={imageTwo} alt="" />
                        <h1 className="title">Wedding Invitation</h1>
                        <img className="imgOne" src={imageOne} alt="" />
                        <p className="date">14.10.2023</p>
                        <p className="date-subtext">SAVE THE DATE</p>
                        <img className="imgThree" src={imageThree} alt="" />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default App
