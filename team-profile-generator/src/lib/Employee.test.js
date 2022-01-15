const Employee = require("../src/lib/Employee");

describe("Employee", () => {
  const mockEmployee = new Employee({
    name: "Adam Khan",
    id: "emp6",
    email: "AdamKham@email.com",
  });

  test("should be an instance of Employee", () => {
    expect(mockEmployee).toBeInstanceOf(Employee);
  });

  test("should return the expected name", () => {
    const actual = "Adam Khan";
    expect(mockEmployee.getName()).toEqual(actual);
  });

  test("should return the expected id", () => {
    const actual = "emp6";
    expect(mockEmployee.getId()).toEqual(actual);
  });

  test("should return the expected email", () => {
    const actual = "AdamKham@email.com";
    expect(mockEmployee.getEmail()).toEqual(actual);
  });

  test("should return the role", () => {
    const actual = "Employee";
    expect(mockEmployee.getRole()).toEqual(actual);
  });
});