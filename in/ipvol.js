let encoding = {
  channel1: 'UTF-8',
  channel2: null,
  channel3: 'ISO-8859-1'
};

let channel = 'channel1';

if (encoding[channel]) {
  console.log(`Encoding for ${channel} is ${encoding[channel]}`);
} else {
  console.log(`No encoding defined for ${channel}`);
}
