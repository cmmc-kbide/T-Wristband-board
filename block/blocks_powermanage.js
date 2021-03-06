module.exports = function(Blockly) {
  "use strict";

Blockly.Blocks['power_manage_begin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Power Management Begin");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['ischargeing'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("is Charging");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['getbattvoltage'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Battery Voltage (V)");
    this.setInputsInline(true);
    this.setOutput(true, "float");
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sleepmode'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("Deep Sleep Mode (Wakeup when isTouch)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['setBlackLight'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Black Light");
    this.appendValueInput("VALUE")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("(0-255)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


};
