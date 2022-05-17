import React, {useContext, useEffect, useState} from 'react';
import {Button, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import '/home/hamza/project/axxam/src/assets/sofa.jpg';
    // holder.js
const Cardd =()=> {
    return(
        <>
            {/*<div className="card" style="width: 18rem;">*/}
            {/*    <img src="..." className="card-img-top" alt="..."/>*/}
            {/*        <div className="card-body">*/}
            {/*            <h5 className="card-title">Card title</h5>*/}
            {/*            <p className="card-text">Some quick example text to build on the card title and make up the bulk*/}
            {/*                of the card's content.</p>*/}
            {/*            <a href="#" className="btn btn-primary">Go somewhere</a>*/}
            {/*        </div>*/}
            {/*</div>*/}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/home/hamza/project/axxam/src/assets/sofa.jpg" />
                <Card.Body>
                    <Card.Title>Sofa</Card.Title>
                    <Card.Text>
                      sofa
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    );
}
export default Cardd;