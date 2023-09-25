import ws281x from 'rpi-ws281x-native';

const LED_COUNT = 300; // 5 meters at 60 per meter
const PIN = 6; // GPIO Pin 6 - is pin 31 on board

const ORANGE = 0xef6c00;
const PURPLE = 0x8e24aa;

const channel = ws281x(LED_COUNT, {
    brightness: 127,
    gpio: PIN,
    stripType: ws281x.stripType.WS2812
});

for (let i = 0; i < channel.array.length; i++) {
    channel.array[i] = i % 2 ? ORANGE : PURPLE;
}

ws281x.render();