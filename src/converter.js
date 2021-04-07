// Convert rgb value into hexadecimal
const rgbToHex = (red, green, blue) => '#' + [red, green, blue].map(x => {
    if(isNaN(x)) {
        x = 0;
    }
    let hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}).join('');

// Convert hexadecimal value into rgb
const hexToRgb = hex => {
    let shortRegexp = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shortRegexp, (m, r, g, b) => r + r + g + g + b + b);

    let regExp = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return regExp ? {
        r: parseInt(regExp[1], 16),
        g: parseInt(regExp[2], 16),
        b: parseInt(regExp[3], 16)
    } : null;
}

const toHex = () => {
    let hexElement = document.getElementById("hexConversion");

    let rgbRed = parseInt(document.forms["rgbForm"]["red"].value);
    let rgbGreen = parseInt(document.forms["rgbForm"]["green"].value);
    let rgbBlue = parseInt(document.forms["rgbForm"]["blue"].value);

    let hexConversion = '#' + [rgbRed, rgbGreen, rgbBlue].map(x => {
        if(isNaN(x)) {
            x = 0;
        }
        let hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');

    hexElement.innerHTML = hexConversion;
}

const toRgb = () => {
    let rgbElement = document.getElementById("rgbConversion");
    
    let hexInput = document.forms["hexForm"]["hex"].value;
    
    let shortRegexp = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hexInput.replace(shortRegexp, (m, r, g, b) => r + r + g + g + b + b);

    let regExp = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let rgbConversion = regExp ? {
        r: parseInt(regExp[1], 16),
        g: parseInt(regExp[2], 16),
        b: parseInt(regExp[3], 16)
    } : null;
    rgbElement.innerHTML = `(${rgbConversion.r}), (${rgbConversion.g}), (${rgbConversion.b})`;
}

module.exports = {
    rgbToHex,
    hexToRgb
}