import React, {Component} from 'react';
import {Container, Row} from "react-bootstrap";
import Product from "./product/product";
import {withRouter} from "react-router-dom";
import Category from '../category/category';
import Carou from "../carou/carou"


class Main extends Component {
    render() {
        const searchParams = new URLSearchParams(this.props.location.search);
        const page = +searchParams.get("page") || 1
        return (
            <main>
                <Container>
                    <Row>
                        <Category/>
                        <div className='col-lg-9'>
                            <Carou/>
                            <Product page={page}/>
                        </div>
                    </Row>
                </Container>
            </main>
        );
    }
}

export default withRouter(Main);