import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";

import Edit from "./components/product/edit";
import List from "./components/product/list";
import Create from "./components/product/create";

function App() {
  return (<Router>
    <Navbar bg="primary">
      <Container>
        <Link to={"/"} className="navbar-brand text-white">
          Basic Crud App
        </Link>
      </Container>
    </Navbar>

    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <Routes>
            <Route path="/product/create" element={<Create />} />
            <Route path="/product/edit/:id" element={<Edit />} />
            <Route exact path='/' element={<List />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  </Router>);
}

export default App;
