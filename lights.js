"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rpi_ws281x_native_1 = __importDefault(require("rpi-ws281x-native"));
const LED_COUNT = 300; // 5 meters at 60 per meter
const PIN = 6; // GPIO Pin 6 - is pin 31 on board
const ORANGE = 0xef6c00;
const PURPLE = 0x8e24aa;
const channel = (0, rpi_ws281x_native_1.default)(LED_COUNT, {
    brightness: 127,
    gpio: PIN,
    stripType: rpi_ws281x_native_1.default.stripType.WS2812
});
for (let i = 0; i < channel.array.length; i++) {
    channel.array[i] = i % 2 ? ORANGE : PURPLE;
}
rpi_ws281x_native_1.default.render();
