// import imageOne from "./images/1.png"
import imageOne from "./images/1-1.jpg"
import imageTwo from "./images/2.png"
import imageThree from "./images/3.png"
import imageFour from "./images/4.png"

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
                            Joseph <br></br> Han Song
                        </h1>
                        <h1 className="name and">&</h1>
                        <h1 className="name name-two">
                            Josefina <br></br> Hilding
                        </h1>
                    </div>
                    <div className="line"></div>
                    <p className="text">
                        Be completely humble and gentle; be patient, bearing
                        with one another in love.
                    </p>
                    <p className="verse">Ephesians 4:2</p>
                </section>

                <div className="section-separation"></div>

                <section className="section-four">
                    <div className="line-one"></div>
                    <p className="heading">Dear Family & Friends,</p>
                    <p className="message">
                        We would like to begin our journey together with a
                        ceremony to show our commitment toward each other and
                        toward God. Please come join us and bless us in our new
                        beginning!
                    </p>
                    <p className="sign">Joseph & Josefina</p>
                    <div className="line-two"></div>
                </section>

                <section className="section-three">
                    <div className="box box-one">
                        <img className="imgFour" src={imageFour} alt="" />
                        <span className="year">2023</span>
                        <p className="date">October 13</p>
                        <p className="time">17:00 ~ 21:00</p>
                        <div className="line"></div>
                        <h1 className="title">Wedding Guest BBQ</h1>
                        <p className="description">
                            We want to hold a BBQ for all the guests before the
                            wedding day!
                        </p>
                        <div className="line"></div>
                        <p className="where">Where?</p>
                        <p className="address-title">Restenäs YWAM Base</p>
                        <p className="address-one">Restenäs 239</p>
                        <p className="address-two">459 93 Ljungskile</p>
                    </div>
                    <div className="box box-two">
                        <img className="imgFour" src={imageFour} alt="" />
                        <span className="year">2023</span>
                        <p className="date">October 14</p>
                        <p className="time">14:00 ~ 16:00</p>
                        <div className="line"></div>
                        <h1 className="title">Wedding Day</h1>
                        <p className="description">
                            We want to welcome you to our wedding on this day!
                        </p>
                        <div className="line"></div>
                        <p className="where">Where?</p>
                        <p className="address-title">Dream Center Kyrkan</p>
                        <p className="address-one">Herkulesgatan 28</p>
                        <p className="address-two">417 01 Göteborg</p>
                    </div>
                </section>

                <section className="section-five">
                    <p className="notice-text">
                        Please click below and let us know if you're coming
                        before [
                        <span className="notice-text-bold">August 31</span>].
                    </p>
                    <a
                        href="https://forms.gle/46Gj9n9MGJF5Esj57"
                        className="rsvp"
                    >
                        Next
                        {/* <i class="fa-solid fa-arrow-right"></i> */}
                    </a>
                </section>

                <section className="section-six"></section>
            </div>
        </div>
    )
}

export default App
