import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import VacancyItem from "../Components/VacancyItem/VacancyItem";
import Footer from "../Components/Footer/Footer";
import arrowDown from "../Images/icons/arrow-down-point.svg";

let vacancyArray = [
    {id: 1, title: "Fulltime Art director / Creative", time: "", dateAdded: "22 dec 2019" },
    {id: 2, title: "Front-end developer", time: "32/40 Uur", dateAdded: "20 dec 2019"},
    {id: 3, title: "All-round developer", time: "32/40 Uur", dateAdded: "20 dec 2019"}];

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        document.title = 'IQ-Media | Contact';
        if(!this.state.loaded ) {
            this.setState({loaded: true})
        }
    }

    render() {
        return (
            <div className={"contact"}>
                <div className={'full-height contact'}>
                    <div className={'base-center'}>
                        <h3 className={`anim-w ${this.state.loaded ? "appear-w" : "" }`}>Waar kunnen wij jou mee helpen?</h3>
                        <form className={"form"} action="">
                            <div className={"flex contact__input"}>
                                <label htmlFor="name">Ik ben</label>
                                <input className={"form__field"} id={"name"} type="text"/>
                            </div>
                            <div className="flex contact__input ">
                                <label htmlFor="email">Mijn e-mail is: </label>
                                <input className={"form__field"} id={"email"} type="email"/>
                            </div>
                            <div className="flex contact__input">
                                <label htmlFor="message">Ik wil</label>
                                <input className={"form__field"} id={"message"} type="text"/>
                            </div>

                            <button type="submit" className={`button contact__button anim-w--top`}>Verzenden</button>
                        </form>

                        <div className="contact-info__container">
                            <div className={`content-block anim-w ${this.state.loaded ? "appear-w" : "" }`}>
                                <h5>Contact</h5>
                                <p>Tel: <a href={"tel:0384549555"}>+31(0)384549555</a></p>
                                <p>info@iqmedia.nl</p>
                            </div>
                            <div className={`content-block anim-w ${this.state.loaded ? "appear-w" : "" }`}>
                                <h5>Adres</h5>
                                <p>Luttekestraat 68</p>
                                <p>8011 LS Zwolle</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"vacancy__container black"}>

                    <div className="row">
                        <h2 className={`vacancy__container-title anim-w ${this.state.loaded ? "appear-w" : "" }`}>Vacatures</h2>
                        {vacancyArray.map(item => {
                            return <VacancyItem key={item.id} loaded={this.state.loaded}  date={item.dateAdded} time={item.time} title={item.title} />
                        })}
                    </div>
                </div>
                <NavLink onClick={() => {window.scrollTo(0, 0)}} className={"home-button button"} to={"/home"}><img className={"icon icon__left"} src={arrowDown} alt=""/>Home</NavLink>
                <Footer loaded={this.state.loaded}/>
            </div>
        )
    }
}


export default Contact