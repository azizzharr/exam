import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap';
import {set} from 'js-cookie';
import {withRouter} from "react-router-dom";
import Service from "../../service"


const initialState = {
    username: "",
    password: ""
}

class SignIn extends Component {
    
    service = new Service()
    state = initialState

    onChange = (e) => {
        const elem = e.currentTarget
        this.setState({
            [elem.name]: elem.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.service.createLogin(this.state).then((data) => {
                set('token', data["auth_token"]);
                this.setState(initialState)
                this.props.login()
                this.props.history.push("/")
            }
        ).catch(async ({res}) => {
            // ошибканы кармоо
            if (res) {
                const data = await res.json()
                for (let index in data) {
                    const error = data[index]
                    this.setState({error: error[0]})
                }
            }

        })
    }

    render() {
        return (
            <div className='form-login'>
                        {this.state.error && <p>{this.state.error}</p>}

                <Container>
                    <Row>
                    <form  onSubmit={this.onSubmit} className='form-group col-lg-6 col-xl-6 col-ml-8 col-8  m-2'>
                        <label htmlFor='Login'>Login</label>
                        <input onChange={this.onChange} className='form-control' name='username' type='text' id="Login" value={this.state.username}
                        />
                        <label className="col-lg-6  col-xl-6 col-ml-8 col-8"  htmlFor='Password'>password</label>
                        <input onChange={this.onChange} className='form-control ' name='password' type='password' value={this.state.password}
                            id="Password" />
                        <button type="submit" className='btn btn-primary mt-2 '>Sign In</button>
                    </form>
                    </Row>
                    </Container>
            </div>

        )
    }
}

export default withRouter( SignIn);