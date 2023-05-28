import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Nav1() {
    return (
        <div >
            <Navbar bg="dark" variant="dark">
                <Container>
                <div>
                   <Nav className="me-auto">
                        <Nav.Link href="/">HOME</Nav.Link>
                        </Nav>
                        <Nav className="me-5">
                        <Nav.Link href="/AddBlog.jsx">ADD BLOG</Nav.Link>
                    </Nav>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}
