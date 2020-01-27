module.exports = function(Blockly) {
  "use strict";

  Blockly.Blocks["bma_acceleration_begin"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Acceleration begin");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['bma_get_direction'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Get direction");
      this.setOutput(true, "Number");
      this.setColour(65);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  
  Blockly.Blocks['bma_get_stepwalk'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Get step count");
      this.setOutput(true, "Number");
      this.setColour(65);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['bma_clear_stepwalk'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Clear step count");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(65);
     this.setTooltip("");
     this.setHelpUrl("");
    }
  };

  Blockly.Blocks['bma_get_activity'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Get Activity");
      this.setOutput(true, "Number");
      this.setColour(65);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['mpu_get_accel_x'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Acceleration X-axis (mg)");
      this.setOutput(true, "Number");
      this.setColour(65);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['mpu_get_accel_y'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Acceleration Y-axis (mg)");
      this.setOutput(true, "Number");
      this.setColour(65);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['mpu_get_accel_z'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Acceleration Z-axis (mg)");
      this.setOutput(true, "Number");
      this.setColour(65);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['mpu_get_gyro_x'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Gyro X-axis (deg/s)");
      this.setOutput(true, "Number");
      this.setColour(65);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['mpu_get_gyro_y'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Gyro Y-axis (deg/s)");
      this.setOutput(true, "Number");
      this.setColour(65);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['mpu_get_gyro_z'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Gyro Z-axis (deg/s)");
      this.setOutput(true, "Number");
      this.setColour(65);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['mpu_get_mag_x'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Magnetometer X-axis (mG)");
      this.setOutput(true, "Number");
      this.setColour(65);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['mpu_get_mag_y'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Magnetometer Y-axis (mG)");
      this.setOutput(true, "Number");
      this.setColour(65);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['mpu_get_mag_z'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Magnetometer Z-axis (mG)");
      this.setOutput(true, "Number");
      this.setColour(65);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
};
