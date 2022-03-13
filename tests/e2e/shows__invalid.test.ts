import supertest from "supertest";
import app from "../../src/app";
import texts from "../../src/statics/texts";

// This file contains test to handle invalid JSON

const assertError = (response) => {

    expect(response.status).toBe(400);
    expect(response.headers["content-type"]).toBe("application/json");
    expect(response.body).toEqual({
        message: texts.ERROR_INVALID_JSON,
    });
}

describe("`show` in JSON : handle invalid JSON", () => {
    test("Handle `payload` is undefined", async () => {
        const invalidJson = {};

        // Make request
        const response = await supertest(app)
            .post("/")
            .send(invalidJson)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json");

        assertError(response);
    });
});
