import supertest from "supertest";
import app from "../../src/app";

// This file contains tests for `shows`-related request handlers.

describe("Handle `/` request", () => {
    test("Should return 200", async () => {
        // Make request
        const response = await supertest(app).get("/");

        // Assert
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            msg: "Nine shows",
        });
    });
});
