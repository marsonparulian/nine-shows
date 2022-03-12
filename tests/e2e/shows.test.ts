import supertest from "supertest";
import app from "../../src/app";
import jsonRequest from "../data/sample_request.json";
import jsonResponse from "../data/sample_response.json";

// This file contains tests for `shows`-related request handlers.

describe("`show` in JSON : post, filter, and response back", () => {

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
    test("Should handle undefined 'image' in show item", async () => {
        const json = {
            payload: [{
                // `image` is undefined in this item
                drm: true, episodeCount: 8,
            }, {
                // `image` is not a literal object in this item
                image: false,
                drm: true, episodeCount: 8,
            }, {
                // `image.showImage` is undefined in this item
                image: {},
                drm: true, episodeCount: 8,
            }, {
                // `image.showImage` is not a `string` in this item
                image: {
                    showImage: false,
                },
                drm: true, episodeCount: 8,
            }],
        };

        // Make request
        const response = await supertest(app)
            .post("/")
            .send(json)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json");

        // Assert
        expect(response.status).toBe(200);
        // Should return the same number of item (show)
        expect(response.body.response.length).toBe(json.payload.length);
        // Each `image` in response should be an empty string
        expect(response.body.response).toEqual(expect.arrayContaining([
            expect.objectContaining({
                image: "",
            })
        ]));
    });
});
