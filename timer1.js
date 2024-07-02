

process.stdout.write("\x07");

const args = process.argv.slice(2);

const setAlarms = (timers) => {
  for (const item of timers) {
    const timer = Number(item);
    
    if (timer < 0 || isNaN(timer)) {
      continue;
    }

    // if (timer === 9) {
    //   continue;
    // }
    
    // if (timer === 0) {
    //   break;
    // } if we get a 0 it stops the loop completly
    
    console.log(item);
    
    setTimeout(() => {
      process.stdout.write("\x07");
      console.log('beep', timer);
    }, timer * 1000);

  }
};

setAlarms(args);
