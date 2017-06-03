let Gpio, leds, button;
Gpio = require('onoff').Gpio;

let init = () => {
  leds = [
    new Gpio(2, 'out'),
    new Gpio(4, 'out'),
    new Gpio(22, 'out')];

  button = new Gpio(17, 'in', 'both');

  for (let i = 0; i < leds.length; i++) {
    leds[i].writeSync(0);
  }

  process.on('SIGINT', finish);
}

let finish = () => {
  console.log('before finish');

  for (let i = 0; i < leds.length; i++) {
    leds[i].writeSync(0);
    leds[i].unexport();
  }

  button.unexport();

  process.exit();
}


let main = () => {
  init();

  let i = 0;

  button.watch((err, val) => {
    leds[i%3].writeSync(val);
    i++;
  });
}


main();
