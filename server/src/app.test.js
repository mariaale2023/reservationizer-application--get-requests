const request = require("supertest");
const app = require("./app");

describe(" Get /reservations", () => {
  it("should return a list of reservations", async () => {
    // Arrange
    const expectedStatus = 200;
    const expectedReservationList = [
      {
        id: "507f1f77bcf86cd799439011",
        partySize: 4,
        date: "2023-11-17T06:30:00.000Z",
        userId: "614abe145f317b89a2e36883",
        restaurantName: "Island Grill",
      },
      {
        id: "614abf0a93e8e80ace792ac6",
        partySize: 2,
        date: "2023-12-03T07:00:00.000Z",
        userId: "614abe145f317b89a2e36883",
        restaurantName: "Green Curry",
      },
    ];
    // Act

    const response = await request(app).get("/reservations");

    // Assert
    expect(response.status).toBe(expectedStatus);
    expect(response.body).toEqual(expectedReservationList);
  });

  it("should return GET/ reservations/614abf0a93e8e80ace792ac6", async () => {
    // Arrange
    const expectedStatus = 200;
    const expectedSingleReservation = {
      id: "614abf0a93e8e80ace792ac6",
      partySize: 2,
      date: "2023-12-03T07:00:00.000Z",
      userId: "614abe145f317b89a2e36883",
      restaurantName: "Green Curry",
    };
    // Act
    const id = "614abf0a93e8e80ace792ac6";
    const response = await request(app).get(`/reservations/${id}`);

    // Assert
    expect(response.status).toBe(expectedStatus);
    expect(response.body).toEqual(expectedSingleReservation);
  });

  it("should return / 404 NOT FOUND / GET/ reservations/614abf0a93e8e80ace111ac1", async () => {
    // Arrange
    const expectedStatus = 404;
    const expectedSingleReservation = { message: "Reservation not found" };

    // Act
    const id = "614abf0a93e8e80ace111ac1";
    const response = await request(app).get(`/reservations/${id}`);

    // Assert
    expect(response.status).toBe(expectedStatus);
    expect(response.body).toEqual(expectedSingleReservation);
  });

  it("should return / 400 INVALID /GET/ reservations/1111", async () => {
    // Arrange
    const expectedStatus = 400;
    const expectedSingleReservation = {
      message: "Id reservation is not valid",
    };

    // Act
    const id = "1111";
    const response = await request(app).get(`/reservations/${id}`);

    // Assert
    expect(response.status).toBe(expectedStatus);
    expect(response.body).toEqual(expectedSingleReservation);
  });
});
