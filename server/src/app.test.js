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

    // Actions

    expect(response.status).toBe(expectedStatus);
    expect(response.body).toEqual(expectedReservationList);
  });
});
