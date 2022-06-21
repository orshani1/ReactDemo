import Content from "../Components/Content";
import Footer from "../Components/footer";
import Header from "../Components/Header";
import React from "react";
export default function HomePage(){
    return (
        <React.Fragment>
            <Header/>,
            <Content></Content>,
            <Footer></Footer>
        </React.Fragment>
    )
}