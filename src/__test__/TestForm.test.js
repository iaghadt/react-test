/* eslint-disable no-undef */
/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from "@testing-library/react";
import TestForm from "../Components/FormComponent";

describe("TestForm component", () => {
  it("renders the form without errors", () => {
    render(<TestForm />);
  });

  it("updates the form data when inputs change", () => {
    const { getByLabelText } = render(<TestForm />);
    const firstnameInput = getByLabelText("Firstname:");
    const lastnameInput = getByLabelText("Lastname:");
    const jobTitleInput = getByLabelText("Job title:");
    const monthlySalaryInput = getByLabelText("Monthly salary:");

    fireEvent.change(firstnameInput, { target: { value: "John" } });
    fireEvent.change(lastnameInput, { target: { value: "Doe" } });
    fireEvent.change(jobTitleInput, { target: { value: "lead" } });
    fireEvent.change(monthlySalaryInput, { target: { value: "5000" } });

    expect(firstnameInput.value).toBe("John");
    expect(lastnameInput.value).toBe("Doe");
    expect(jobTitleInput.value).toBe("lead");
    expect(monthlySalaryInput.value).toBe("5000");
  });

  it("displays validation errors when form is submitted with invalid data", () => {
    const { getByLabelText, getByText } = render(<TestForm />);
    const firstnameInput = getByLabelText("Firstname:");
    const lastnameInput = getByLabelText("Lastname:");
    const jobTitleInput = getByLabelText("Job title:");
    const monthlySalaryInput = getByLabelText("Monthly salary:");
    const submitButton = getByText("Submit");

    fireEvent.change(firstnameInput, { target: { value: "Jo" } });
    fireEvent.change(lastnameInput, { target: { value: "D" } });
    fireEvent.change(jobTitleInput, { target: { value: "" } });
    fireEvent.change(monthlySalaryInput, { target: { value: "50000" } });
    fireEvent.click(submitButton);

    expect(
      findAllByText("First name must be between 3 and 20 characters")
    ).toBeInTheDocument();
    expect(
      findAllByText("Last name must be between 3 and 20 characters")
    ).toBeInTheDocument();
    expect(getByText("Please select a job title")).toBeInTheDocument();
    expect(
      findAllByText("Monthly salary must be between 800 and 8000")
    ).toBeInTheDocument();
  });

  it("submits the form data when all inputs are valid", () => {
    const mockSubmit = jest.fn();
    const { getByLabelText, getByText } = render(
      <TestForm onSubmit={mockSubmit} />
    );
    const firstnameInput = getByLabelText("Firstname:");
    const lastnameInput = getByLabelText("Lastname:");
    const jobTitleInput = getByLabelText("Job title:");
    const monthlySalaryInput = getByLabelText("Monthly salary:");
    const submitButton = getByText("Submit");

    fireEvent.change(firstnameInput, { target: { value: "John" } });
    fireEvent.change(lastnameInput, { target: { value: "Doe" } });
    fireEvent.change(jobTitleInput, { target: { value: "lead" } });
    fireEvent.change(monthlySalaryInput, { target: { value: "5000" } });
    fireEvent.click(submitButton);

    expect(mockSubmit).toHaveBeenCalledWith({
      firstname: "John",
      lastname: "Doe",
      jobTitle: "lead",
      monthlySalary: "5000",
    });
  });
});
