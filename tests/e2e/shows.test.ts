import supertest from "supertest";
import app from "../../src/app";
import jsonRequest from "../data/sample_request.json";
import jsonResponse from "../data/sample_response.json";

// This file contains tests for `shows`-related request handlers.

/**
 * Tests
 */
describe("POST, filter and response back `show` in JSON", () => {

    test("Should filter the json request ", async () => {
        // Make request
        const response = await supertest(app)
            .post("/")
            .send(jsonRequest)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json");

        // Response shouldbe be 200
        expect(response.status).toBe(200);
        // Should have the right number of shows in response
        expect(response.body.response.length).toBe(jsonResponse.response.length);
        // Assert the response JSON 
        expect(response.body).toEqual(jsonResponse);
    });
});
