const Manager = require("../src/lib/");

describe("Manager", () => {
  const mockManager = new Manager({
    officeNumber: "98712",
    name: "Hassan Khan",
    id: "man2",
    email: "Hassankhan@email.com",
  });

  test("should be an instance of manager", () => {
    expect(mockManager).toBeInstanceOf(Manager);
  });

  test("should return the expected name", () => {
    const actual = " Hassan Khan";
    expect(mockManager.getName()).toEqual(actual);
  });

  test("should return the expected id", () => {
    const actual = "man2";
    expect(mockManager.getId()).toEqual(actual);
  });

  test("should return the expected email", () => {
    const actual = "Hassankhan@email.com";
    expect(mockManager.getEmail()).toEqual(actual);
  });

  test("should return the expected office number", () => {
    const actual = "98712";
    expect(mockManager.getOfficeNumber()).toEqual(actual);
  });

  test("should return the role", () => {
    const actual = "Manager";
    expect(mockManager.getRole()).toEqual(actual);
  });
});