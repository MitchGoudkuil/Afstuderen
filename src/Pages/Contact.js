import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import BackButton from "../Components/BackButton/BackButton";
import VacancyItem from "../Components/VacancyItem/VacancyItem";
import Footer from "../Components/Footer/Footer";


let vacancyArray = [{id: 1, title: "Fulltime Art director / Creative", time: "", dateAdded: "22 dec 2019" },
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
        if(!this.state.loaded ) {
            this.setState({loaded: true})
        }
    }

    render() {
        return (
            <div className={"contact"}>
                <BackButton link={"/projecten"}/>
                <div className={'full-height contact'}>
                    <div className={'base-center'}>
                        <h3 className={"anim-w--top"}>Waar kunnen wij jou mee helpen?</h3>
                        <form action="">
                            <div className={"flex contact__input"}>
                                <label for="name">Ik ben</label>
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

                            <button type="submit" className={`button contact__button anim-w--top`}>Let's talk</button>
                        </form>
                    </div>
                </div>
                <div className={"vacancy__container black"}>
                    <div className="row">
                        {vacancyArray.map(item => {
                            return <VacancyItem date={item.dateAdded} time={item.time} title={item.title} />
                        })}
                    </div>
                </div>
                <NavLink to={"/home"}>Terug naar home</NavLink>
                <Footer loaded={this.state.loaded}/>
            </div>
        )
    }
}


export default Contact