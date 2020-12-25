import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";



class ProductDetail extends Component {
    state = {
        item: {},

        loading: true

    }

    componentDidMount() {
        this.getItem()
    }

    getItem = () => {
        const url = (new URLSearchParams(this.props.location.search)).get("url")
        fetch(url).then((res) => res.json()).then((data) => {
            this.setState({ item: data,loading:false })
        }
        )
    }

    render() {
        console.log(this.state)
        const { item,loading } = this.state
        if (loading) {
            return <p>Loading</p>
        }
        return (
            <div className="container mt-5">
                <div className='row'>
                <Card className='h-100'>
                        <Card.Img variant="top"
                            src={item.images[1].original} />
                        <Card.Body>
                            <Card.Title>
                                <a href='#'>{item.title}</a>
                            </Card.Title>
                            <h3>$24.99</h3>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className='text-muted'>★ ★ ★ ★ ☆</small>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(({ data }) => ({ data }))(ProductDetail));