import imageOne from "./images/1.png"
import imageTwo from "./images/2.png"
import imageThree from "./images/3.png"

function App() {
    return (
        <div className="App">
            <div className="center-div">
                <section className="section-one">
                    <img className="imgTwo" src={imageTwo} alt="" />
                    <h1 className="title">Wedding Invitation</h1>
                    <img className="imgOne" src={imageOne} alt="" />
                    <p className="date">14.10.2023</p>
                    <p className="date-subtext">SAVE THE DATE</p>
                    <img className="imgThree" src={imageThree} alt="" />
                </section>

                <section className="section-two">
                    <div className="names">
                        <h1 className="name name-one">
                            Juwon <br></br> Han Song
                        </h1>
                        <h1 className="name and">&</h1>
                        <h1 className="name name-two">Josefina Hilding</h1>
                    </div>
                    <div className="line"></div>
                    <p className="text">
                        For this reason a man will leave his father and mother
                        and be united to his wife, and they will become one
                        flesh.
                    </p>
                    <p className="verse">Genesis 2:24</p>
                </section>

                <section className="section-three">
                    <div className="box box-one">
                        <span className="year">2023</span>
                        <p className="date">October 13</p>
                        <h1 className="title">Wedding Guest BBQ</h1>
                        <div className="line"></div>
                        <p className="description">
                            We want to hold a BBQ for all the guests before the
                            wedding day!
                        </p>
                        <div className="line"></div>
                        <p className="address-one">Restenäs 239</p>
                        <p className="address-two">459 93 Ljungskile</p>
                        <p className="time">17:00</p>
                    </div>
                    <div className="box box-two">
                        <span className="year">2023</span>
                        <p className="date">October 14</p>
                        <h1 className="title">Wedding Day</h1>
                        <div className="line"></div>
                        <p className="description">
                            We want to welcome all of you to our wedding on this
                            day!
                        </p>
                        <div className="line"></div>
                        <p className="address-one">Herkulesgatan 28</p>
                        <p className="address-two">417 01 Göteborg</p>
                        <p className="time">11:00</p>
                    </div>
                </section>

                <section className="section-four">
                    <div className="line-one"></div>
                    <p className="message">
                        We would like to begin our journey together with a
                        ceremony to show our commitment toward each other and
                        toward God. Please come join us and bless us in our new
                        beginning!
                    </p>
                    <p className="sign">Juwon & Josefina</p>
                    <div className="line-two"></div>
                </section>

                <section className="section-five">
                    <a href="https://www.google.com" className="rsvp">
                        Sign up
                    </a>
                </section>
            </div>
        </div>
    )
}

export default App
