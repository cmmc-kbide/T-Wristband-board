module.exports = function(Blockly) {
  "use strict";
  const ORDER_ATOMIC = Blockly.JavaScript.ORDER_ATOMIC;
  const valueToCode = (a, b) => Blockly.JavaScript.valueToCode(a, b);

  Blockly.JavaScript["bma_acceleration_begin"] = function(block) {
    var code =
`
#EXTINC#include "CMMC_BMA423.h"#END


#VARIABLEBMA423 bma;#END

bma.begin();\n
`
;
    return code;
  };

  Blockly.JavaScript['bma_get_direction'] = function(block) {
    var code = 'bma.motion_direction()';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  
  Blockly.JavaScript['bma_get_stepwalk'] = function(block) {
    
    var code = 'bma.motion_stepcount()';

    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['bma_clear_stepwalk'] = function(block) {
    
    var code = 'bma.clear_stepcount();';

    return code;
  };

  Blockly.JavaScript['bma_get_activity'] = function(block) {
    
    var code = 'bma.motion_activity()';

    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['mpu_get_accel_x'] = function(block) {
    var code = `#LOOP_EXT_CODEIMU.readMPU9250();#ENDIMU.acc_x_axis()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['mpu_get_accel_y'] = function(block) {
    var code = `#LOOP_EXT_CODEIMU.readMPU9250();#ENDIMU.acc_y_axis()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['mpu_get_accel_z'] = function(block) {
    var code = `#LOOP_EXT_CODEIMU.readMPU9250();#ENDIMU.acc_z_axis()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['mpu_get_accel_x'] = function(block) {
    var code = `#LOOP_EXT_CODEIMU.readMPU9250();#ENDIMU.acc_x_axis()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['mpu_get_accel_y'] = function(block) {
    var code = `#LOOP_EXT_CODEIMU.readMPU9250();#ENDIMU.acc_y_axis()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['mpu_get_accel_z'] = function(block) {
    var code = `#LOOP_EXT_CODEIMU.readMPU9250();#ENDIMU.acc_z_axis()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['mpu_get_gyro_x'] = function(block) {
    var code = `#LOOP_EXT_CODEIMU.readMPU9250();#ENDIMU.gyro_x_deg()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['mpu_get_gyro_y'] = function(block) {
    var code = `#LOOP_EXT_CODEIMU.readMPU9250();#ENDIMU.gyro_y_deg()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['mpu_get_gyro_z'] = function(block) {
    var code = `#LOOP_EXT_CODEIMU.readMPU9250();#ENDIMU.gyro_z_deg()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['mpu_get_mag_x'] = function(block) {
    var code = `#LOOP_EXT_CODEIMU.readMPU9250();#ENDIMU.mag_x_mG()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['mpu_get_mag_y'] = function(block) {
    var code = `#LOOP_EXT_CODEIMU.readMPU9250();#ENDIMU.mag_y_mG()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  Blockly.JavaScript['mpu_get_mag_z'] = function(block) {
    var code = `#LOOP_EXT_CODEIMU.readMPU9250();#ENDIMU.mag_z_mG()`;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
// ######################################################################
};
