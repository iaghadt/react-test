import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const TestForm = () => {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateFormData(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      console.log("Form data submitted: ", formData);
      // Here you can add code to submit the form data to a backend API
      // or to display a success message to the user
      setFormErrors({});
    }
  };
  const validateFormData = (formData) => {
    const errors = {};
    if (
      !formData.firstname ||
      formData.firstname.length < 3 ||
      formData.firstname.length > 20
    ) {
      errors.firstname = "First name must be between 3 and 20 characters";
    }
    if (
      !formData.lastname ||
      formData.lastname.length < 3 ||
      formData.lastname.length > 20
    ) {
      errors.lastname = "Last name must be between 3 and 20 characters";
    }
    if (!formData.jobTitle) {
      errors.jobTitle = "Please select a job title";
    }
    if (formData.monthlySalary < 800 || formData.monthlySalary > 8000) {
      errors.monthlySalary = "Monthly salary must be between 800 and 8000";
    }
    return errors;
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h4>Please fill the form below to register an employee</h4>
      {formErrors && Object.keys(formErrors).length > 0 && (
        <Alert variant="danger">
          {Object.values(formErrors).map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </Alert>
      )}
      <Form.Group controlId="formFirstName">
        <Form.Label>Firstname:</Form.Label>
        <Form.Control
          type="text"
          placeholder="George"
          required
          minLength={3}
          maxLength={20}
          name="firstname"
          value={formData.firstname || ""}
          onChange={handleInputChange}
          isInvalid={formErrors.firstname}
        />
        {formErrors.firstname && (
          <Form.Control.Feedback type="invalid">
            {formErrors.firstname}
          </Form.Control.Feedback>
        )}
      </Form.Group>
      <Form.Group controlId="formLastName">
        <Form.Label>Lastname:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Papadopoulos"
          required
          minLength={3}
          maxLength={20}
          name="lastname"
          value={formData.lastname || ""}
          onChange={handleInputChange}
          isInvalid={formErrors.lastname}
        />
        {formErrors.lastname && (
          <Form.Control.Feedback type="invalid">
            {formErrors.lastname}
          </Form.Control.Feedback>
        )}
      </Form.Group>
      <Form.Group controlId="formJobTitle">
        <Form.Label>Job title:</Form.Label>
        <Form.Control
          as="select"
          required
          name="jobTitle"
          value={formData.jobTitle || ""}
          onChange={handleInputChange}
          isInvalid={formErrors.jobTitle}
        >
          <option value="">Select a job title</option>
          <option value="lead">Team lead</option>
          <option value="dev">Software engineer</option>
          <option value="qa">Tester</option>
        </Form.Control>
        {formErrors.jobTitle && (
          <Form.Control.Feedback type="invalid">
            {formErrors.jobTitle}
          </Form.Control.Feedback>
        )}
      </Form.Group>
      <Form.Group controlId="formBirthday">
        <Form.Label>Birthday:</Form.Label>
        <Form.Control
          type="date"
          name="birthday"
          value={formData.birthday || ""}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="formMonthlySalary">
        <Form.Label>Monthly salary:</Form.Label>
        <Form.Control
          type="number"
          required
          min={800}
          max={8000}
          name="monthlySalary"
          value={formData.monthlySalary || ""}
          onChange={handleInputChange}
          isInvalid={formErrors.monthlySalary}
        />
        {formErrors.monthlySalary && (
          <Form.Control.Feedback type="invalid">
            {formErrors.monthlySalary}
          </Form.Control.Feedback>
        )}
      </Form.Group>
      <Form.Group controlId="formReferred">
        <Form.Check
          type="checkbox"
          label="Referred?"
          name="referred"
          value="yes"
          checked={formData.referred === "yes"}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="formNotes">
        <Form.Label>Notes:</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Fill anything else you want us to know"
          maxLength={10000000}
          name="notes"
          value={formData.notes || ""}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" className="mt-3" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default TestForm;
