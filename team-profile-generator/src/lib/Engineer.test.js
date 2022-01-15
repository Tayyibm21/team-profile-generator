const { Engineer } = require("../src/lib");

describe("Engineer", () => {
  const mockEngineer = new Engineer({
    github: "Tmontana",
    name: "Tony montana",
    id: "eng3",
    email: "Tonymontata@email.com",
  });

  test("should be an instance of Engineer", () => {
    expect(mockEngineer).toBeInstanceOf(Engineer);
  });

  test("should return the expected name", () => {
    const actual = "Tony montana";
    expect(mockEngineer.getName()).toEqual(actual);
  });

  test("should return the expected id", () => {
    const actual = "eng3";
    expect(mockEngineer.getId()).toEqual(actual);
  });

  test("should return the expected email", () => {
    const actual = "Tonymontata@email.com";
    expect(mockEngineer.getEmail()).toEqual(actual);
  });

  test("should return the expected github", () => {
    const actual = "Tmontana";
    expect(mockEngineer.getGithub()).toEqual(actual);
  });

  test("should return the role", () => {
    const actual = "Engineer";
    expect(mockEngineer.getRole()).toEqual(actual);
  });
});