// Integration tests
const expect = require('chai').expect;
const request = require('request');
const app = require('../src/server');
const port = 3000;

describe("Color Code Converter API", () => {

    before("Start server before running tests", (done) => {
        server = app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
            done();
        })
    })

    describe("RGB To Hex Conversion", () => {
        const url = `http://localhost:${port}/rgb-to-hex/?red=255&green=255&blue=255`;

        it("Should return status 200", (done) => {
            request(url, (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                done();
            })
        })

        it("Should return the color code in hex", (done) => {
            request(url, (error, response, body) => {
                expect(body).to.equal('#ffffff');
                done();
            })
        })
    })

    describe("Hex To RGB Conversion", () => {
        const url = `http://localhost:${port}/hex-to-rgb/?hex=%23ffffff`;

        it("Should return status 200", (done) => {
            request(url, (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                done();
            })
        })

        it("Should return the color code in RGB", (done) => {
            request(url, (error, response, body) => {
                expect(body).to.equal('rgb(255, 255, 255)');
                done();
            })
        })
    })

    after("Stop server after tests", (done) => {
        server.close();
        done();
    })
})