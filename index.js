let Gpio, led1, led2, led3, button;
Gpio = require('onoff').Gpio;

let init = () => {
  led1 = new Gpio(2, 'out');
  led2 = new Gpio(4, 'out');
  led3 = new Gpio(22, 'out');

  button = new Gpio(17, 'in', 'both');

  led1.writeSync(0);
  led2.writeSync(0);
  led3.writeSync(0);
}




let main = () => {
  init();
  button.watch((err, val) => {
    led1.writeSync(val);
  });
}


main();
