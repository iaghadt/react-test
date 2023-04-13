import logo from "./logo.svg";
import Navbar from "./Components/Navbar";
import Address from "./Components/Address";
import Footer from "./Components/Footer";
import TestForm from "./Components/FormComponent";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

let formData = require("../src/config.json");

// import { Card, Row, Col } from "react-bootstrap";

// import EmployeeRegistration from "./Components/EmployeeRegister";

function App() {
  return (
    <>
      <Navbar logo={logo} />
      <div className="container">
        <div className="App">
          <div style={{ margin: "0px 9px" }}>
            <h4 className="mt-3 ml-3">Register a New Employee</h4>
            <short>Please fill the form below to register an employee</short>
          </div>
          <div style={{ display: "flex" }} className="row mt-4">
            <div className="col-sm-6 mx-2">
              <div className="card bg-light">
                <div className="card-body">
                  <TestForm config={formData} />
                </div>
              </div>
            </div>
            <div className="col-sm-4 mt-4 mx-2">
              <div className="card bg-light">
                <div className="card-body">
                  <Address />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
