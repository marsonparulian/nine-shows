import supertest from "supertest";
import app from "../../src/app";

// This file contains tests for `shows`-related request handlers.

describe("Handle `/` request", () => {
    test("Should response with exactly the same JSON", async () => {
        // JSON to be sent and received
        const json = {
            show: "The sun is bright",
        }

        // Make request with `shows` in JSON
        const response = await supertest(app).post("/")
            .send(json)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json");

        // Assert
        expect(response.status).toBe(200);
        // Should return exactly the same JSON
        expect(response.body).toEqual(json);
    });
});
