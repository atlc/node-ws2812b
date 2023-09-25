import ws281x from 'rpi-ws281x-native';

const LED_COUNT = 300; // 5 meters at 60 per meter
const PINS = {
    strip_one: 5, // GPIO Pin 5 - is pin 29 on board
    strip_two: 6 // GPIO Pin 6 - pin 31 on board
}

const ORANGE = 0xef6c00;
const PURPLE = 0x8e24aa;

const channels = ws281x.init({
    channels: [
        { count: LED_COUNT, gpio: PINS.strip_one, brightness: 127, stripType: ws281x.stripType.WS2812 },
        { count: LED_COUNT, gpio: PINS.strip_two, brightness: 127, stripType: ws281x.stripType.WS2812 },
    ]
})

const [front, rear] = channels;

front.array.forEach((led, i) => {
    led = i%2 ? ORANGE : PURPLE
});

ws281x.render();

function loopAlternatingColors (delay: number) {
    setTimeout(() => {
        front.array.forEach((led) => {
            led = led === PURPLE ? ORANGE : PURPLE
        });
        ws281x.render();
    }, delay)
}
loopAlternatingColors(4000);