import React from 'react'
import { Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../redux/Actions/AuthActions'
import './Navbare.css'

function Navbare() {
    const auth = useSelector(state => state.AuthReducer.auth)
    const token = localStorage.getItem('token')
    const dispatch = useDispatch()
    return (
        <div>

            <Navbar bg="fedy" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        {auth && token ?
                            <>
                                <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
                                <Nav.Link  onClick={()=> dispatch(logout())} >Log Out</Nav.Link>
                            </>
                            :
                            <>
                                <Nav.Link as={Link} to='/signup' href="#features">Sign Up</Nav.Link>
                                <Nav.Link as={Link} to='/signin' href="#pricing">Sign In</Nav.Link>
                            </>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbare