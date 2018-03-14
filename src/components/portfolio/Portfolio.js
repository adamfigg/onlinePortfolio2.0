import React, { Component } from 'react';
import OverwatchApp from './OverwatchApp.gif';
import CCArt from './CCArt.png';
import Roominder from './Roominder.png';
import PortfolioItem from './item/PortfolioItem'

import { Container } from 'reactstrap';

import "./Portfolio.css";


class Portfolio extends Component {

    render() {
        return (
            <Container className="Portfolio">
                <PortfolioItem name="Overwatch Hero App" file={OverwatchApp} tech="React, Nodejs, SQL, jQuery, and Bootstrap">
                    <ul className="Portfolio-bullets">
                        <li>Implemented​ ​a​ ​user​ ​experience​ ​that​ ​makes​ ​active​ ​calls​ ​to​ ​an​ ​outside​ ​API​ ​within​ ​a​ ​React​ ​based​ ​app</li>
                        <li>Prototyped​ ​and​ ​designed​ ​with​ ​Adobe​ ​Experience​ ​and​ ​used​ ​React​ ​best practices​ ​to​ ​reduce​ ​load​ ​times​ ​on​ ​API​ ​calls</li>
                        <li>​Utilized​ ​javascript​ ​libraries​ ​jQuery,​ ​bootstrap,​ ​and​ ​Json​ ​to​ ​create​ ​functions​ ​that​ ​run​ ​calls​ ​and​ ​actions</li>
                    </ul>
                </PortfolioItem>

                <PortfolioItem name="Carlsbad Art Boutique" file={CCArt} tech="​React,​ ​Nodejs,​ ​SQL,​ ​and​ ​jQuery">
                    <ul className="Portfolio-bullets">
                        <li>Personally​​ ​​developed​ ​an​ ​online​ ​store​ ​with​ ​login,​ ​shopping​ ​cart,​ ​checkout,​ ​and​ ​payment​ ​components</li>
                        <li>Created​ ​a​ ​sleek​ ​mobile-first​ ​shopping​ ​experience​ ​complete​ ​with​ ​a​ ​desktop​ ​version​ ​using​ ​media-queries</li>
                        <li>Set​ ​up​ ​data​ ​tables​ ​and​ ​SQL​ ​files​ ​to​ ​allow​ ​for​ ​a​ ​RESTful​ ​interaction​ ​between​ ​the​ ​user​ ​and​ ​their​ ​shopping​ ​cart</li>
                    </ul>
                </PortfolioItem>

                <PortfolioItem name="RooMinder" file={Roominder} tech="​React,​ ​React​ ​Native,​ ​Styled​ ​Components,​ ​Nodejs,​ ​and​ ​SQL">
                    <ul className="Portfolio-bullets">
                        <li>Worked​ ​with​ ​a​ ​group​ ​of​ ​4​ ​programmers​ ​to​ ​plan​ ​and​ ​create​ ​an​ ​app​ ​using​ ​location​ ​tracking​ ​and​ ​multiple​ ​APIs</li>
                        <li>Integrated​ ​Google​ ​Maps​ ​and​ ​Flight​ ​Tracker​ ​APIs​ ​to​ ​enable​ ​travel​ ​planning​ ​for​ ​mobile​ ​and​ ​online​ ​users</li>
                        <li>Acted​ ​as​ ​project​ ​manager​ ​by​ ​leading​ ​paired​ ​programming​ ​time​ ​to​ ​keep​ ​team​ ​on​ ​track​ ​to​ ​reach​ ​MVP​ ​on​ ​time</li>
                    </ul>
                </PortfolioItem>
            </Container>

        );
    }
}

export default Portfolio;