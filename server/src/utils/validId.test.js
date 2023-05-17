const validId = require("./validId");

describe("validId", () => {
  it("should return true if the id is valid", () => {
    // Arrenge
    const objectId = "614d4e4a68036a1c7cd77ea6";

    // Act
    const received = validId(objectId);

    // Assert
    expect(received).toEqual(true);
  });

  it("should return false if the id is invalid", () => {
    // Arrenge
    const objectId = "invalid-id";

    // Act
    const received = validId(objectId);

    // Assert
    expect(received).toEqual(false);
  });
});
