let display = require("./menu/config.group.display");
let gpio = require("./menu/config.group.gpio");
let time = require("./menu/config.group.time");
let acceleraation = require("./menu/config.group.accel");
let powermanage = require("./menu/config.group.powermanage");
let rtc = require("./menu/config.group.rtc");

module.exports = {
  blocks: [
    gpio,
    display,
    // touch,
    acceleraation,
    powermanage,
    rtc,
    // sdcard,
    time
  ],
};
