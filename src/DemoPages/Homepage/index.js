import React,{Fragment, Component} from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import {Row, Container, Col} from "reactstrap";

import CardNya from "./CardIsi";
import Index from "./CardData";
import CardSlide from "./CardSlide";
import Slider from "react-slick";

import bg1 from "../../assets/utils/images/originals/city.jpg";
import bg3 from "../../assets/utils/images/originals/citynights.jpg";
import bg2 from "../../assets/utils/images/originals/citydark.jpg";

const Homepage = () => {
    return(
        <Fragment>
            <CSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <AppHeader/>

                <div className="app-main">
                    <AppSidebar/>
                    <div className="app-main__outer">
                        <div className="app-main__inner">
                            <Row>
                                <CardSlide />
                                <p> </p>
                            </Row>
                            <Row>
                                {Index.map((x, index) => (
                                    <CardNya key={index} title={x.title} subtitle={x.subtitle} image={x.image}/>
                                ))}
                            </Row>
                        </div>
                    </div>
                </div>
            </CSSTransitionGroup>
        </Fragment>
    )
}
export default Homepage;
