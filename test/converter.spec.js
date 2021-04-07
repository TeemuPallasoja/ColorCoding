// Unit tests
const expect = require('chai').expect;

const converter = require('../src/converter');

describe("Color Code Conversion Tests", () => {
    describe("RGB To Hex Conversion", () => {
        it("Converts the basic colors", () => {
            const redHex = converter.rgbToHex(255, 0, 0);
            const greenHex = converter.rgbToHex(0, 255, 0);
            const blueHex = converter.rgbToHex(0, 0, 255);

            expect(redHex).to.equal('#ff0000');
            expect(greenHex).to.equal('#00ff00');
            expect(blueHex).to.equal('#0000ff');
        })
    })

    describe("Hex To RGB Conversion", () => {
        it("Converts the basic colors", () => {
            const redRGB = converter.hexToRgb('#FF0000');
            const greenRGB = converter.hexToRgb('#00FF00');
            const blueRGB = converter.hexToRgb('#0000FF');

            expect(redRGB).to.eql({ r: 255, g: 0, b: 0 });
            expect(greenRGB).to.eql({ r: 0, g: 255, b: 0 });
            expect(blueRGB).to.eql({ r: 0, g: 0, b: 255 });
        })
    })
})