const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
  name: "Acceleration",
  index: 40,
  color: "240",
  icon: `file:///${dirIcon}/static/icons/pedometer.png`,
  blocks: [
    {
      xml: `<sep gap="32"></sep><label text="MPU9250 9-Axis" web-class="headline"></label>`
    },
    {
      xml: `<sep gap="32"></sep><label text="Acceleration" web-class="headline"></label>`
    },
     'mpu_get_accel_x',
     'mpu_get_accel_y',
     'mpu_get_accel_z',
    {
      xml: `<sep gap="32"></sep><label text="Gyroscope" web-class="headline"></label>`
    },
     'mpu_get_gyro_x',
     'mpu_get_gyro_y',
     'mpu_get_gyro_z',
    {
      xml: `<sep gap="32"></sep><label text="Magnetometer" web-class="headline"></label>`
    },
     'mpu_get_mag_x',
     'mpu_get_mag_y',
     'mpu_get_mag_z'
  ]
};
