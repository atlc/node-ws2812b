"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rpi_ws281x_native_1 = __importDefault(require("rpi-ws281x-native"));
const LED_COUNT = 300; // 5 meters at 60 per meter
const PINS = {
    strip_one: 5,
    strip_two: 6 // GPIO Pin 6 - pin 31 on board
};
const ORANGE = 0xef6c00;
const PURPLE = 0x8e24aa;
const channels = rpi_ws281x_native_1.default.init({
    channels: [
        { count: LED_COUNT, gpio: PINS.strip_one, brightness: 127, stripType: rpi_ws281x_native_1.default.stripType.WS2812 },
        { count: LED_COUNT, gpio: PINS.strip_two, brightness: 127, stripType: rpi_ws281x_native_1.default.stripType.WS2812 },
    ]
});
const [front, rear] = channels;
front.array.forEach((led, i) => {
    led = i % 2 ? ORANGE : PURPLE;
});
rpi_ws281x_native_1.default.render();
function loopAlternatingColors(delay) {
    setTimeout(() => {
        front.array.forEach((led) => {
            led = led === PURPLE ? ORANGE : PURPLE;
        });
        rpi_ws281x_native_1.default.render();
    }, delay);
}
loopAlternatingColors(4000);
