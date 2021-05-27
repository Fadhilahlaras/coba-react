import React, {Fragment, Component} from "react";

import Slider from "react-slick";

import bg3 from '../../../assets/utils/images/originals/citynights.jpg';

import {Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {Link, Route} from "react-router-dom";

export default class Register extends Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            initialSlide: 0,
            autoplay: true,
            adaptiveHeight: true

        };
        return (

            <Fragment>
                <div className="h-100">
                    <Row className="h-100 no-gutters">
                        <Col lg="7" md="12" className="h-100 d-md-flex d-sm-block bg-white justify-content-center align-items-center">
                            <Col lg="9" md="10" sm="12" className="mx-auto app-login-box">
                                <div className="app-logo"/>
                                <h4>
                                    <div>Welcome,</div>
                                    <span>It only takes a <span className="text-success">few seconds</span> to create your account</span>
                                </h4>
                                <div>
                                    <Form>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="exampleFirstName">First Name</Label>
                                                    <Input type="text" name="firstName" id="exampleFirstName"
                                                           placeholder="First Name here..." required="required"/>
                                                </FormGroup>

                                            </Col>

                                            <Col md={6}>

                                                <FormGroup>
                                                    <Label for="exampleLastName">Last Name</Label>
                                                    <Input type="text" name="lastName" id="exampleLastName"
                                                           placeholder="Last Name here..." required="required"/>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>

                                                <FormGroup>
                                                    <Label for="exampleUserName">User Name</Label>
                                                    <Input type="text" name="userName" id="exampleUserName"
                                                           placeholder="User Name here..." required="required"/>
                                                </FormGroup>
                                            </Col>

                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="exampleEmail">Email</Label>
                                                    <Input type="email" name="email" id="exampleEmail"
                                                           placeholder="Email here..." required="required"/>
                                                </FormGroup>

                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="examplePassword"> Password </Label>
                                                    <Input type="password" name="password" id="examplePassword"
                                                           placeholder="Password here..." required="required"
                                                           pattern="(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}" title="Must contain min 1 uppercase letter, min 1 lowercase letter, min 1 number, min 1 special character, and min 8 characters max 30 characters."/>
                                                </FormGroup>
                                            </Col>

                                            {/*<Col md={6}>*/}
                                            {/*    <FormGroup>*/}
                                            {/*        <Label for="examplePasswordRep">*/}
                                            {/*            <span className="text-danger">*</span>*/}
                                            {/*            {' '}Repeat Password*/}
                                            {/*        </Label>*/}
                                            {/*        <Input type="password" name="passwordrep" id="examplePasswordRep"*/}
                                            {/*               placeholder="Repeat Password here..."/>*/}
                                            {/*    </FormGroup>*/}
                                            {/*</Col>*/}

                                        </Row>
                                        <FormGroup className="mt-3" check>
                                            <Input type="checkbox" name="check" id="exampleCheck"/>
                                            <Label for="exampleCheck" check>Accept our <a href="https://colorlib.com/" onClick={(e)=>e.preventDefault()}>Terms and Conditions</a>.</Label>
                                        </FormGroup>
                                        <div className="mt-4 d-flex align-items-center">
                                            <h5 className="mb-0">
                                                Already have an account?{' '}

                                                {/*<a href="/login" onClick={(e)=>e.preventDefault()} className="text-primary">Sign in</a>*/}
                                                <Link to={"/login"}> Sign in </Link>
                                            </h5>
                                            <div className="ml-auto">
                                                <Button color="primary" className="btn-wide btn-pill btn-shadow btn-hover-shine" size="lg">Create Account</Button>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </Col>
                        </Col>
                        <Col lg="5" className="d-lg-flex d-xs-none">
                            <div className="slider-light">
                                <Slider  {...settings}>
                                    <div
                                        className="h-100 d-flex justify-content-center align-items-center bg-premium-dark">
                                        <div className="slide-img-bg"
                                             style={{
                                                 backgroundImage: 'url(' + bg3 + ')'
                                             }}/>
                                        <div className="slider-content">
                                            <h3>Scalable, Modular, Consistent</h3>
                                            <p>
                                                Easily exclude the components you don't require. Lightweight, consistent
                                                Bootstrap based styles across all elements and components
                                            </p>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Fragment>
        );
    }
}
