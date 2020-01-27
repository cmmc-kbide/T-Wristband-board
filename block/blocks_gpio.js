module.exports = function(Blockly) {
  "use strict";

  Blockly.Blocks["gpio_touch_pin"] = {
    init: function() {
      this.appendDummyInput()
        .appendField("read Touch pin");
      this.setOutput(true, null);
      this.setColour(45);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks["adc_pin_dummy_input"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["ADC4 (PIN32)", "32"],
          ["ADC5 (PIN33)", "33"],
          ["ADC6 (PIN34)", "34"],
          ["ADC7 (PIN35)", "35"],
          ["KNOB (IO36)", "36"]
        ]), "PIN");
      this.setOutput(true, null);
      this.setColour(45);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks["io_pin_dummy_input"] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["LED_PIN (IO04)", "LED_PIN"],
          ["LED_SCREEN (IO27)", "_TFT_BL"],
          ["Touch_PIN (IO33)", "TOUCH_BUTTON"]
        ]), "IO_PIN");
      this.setOutput(true, null);
      this.setColour(45);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

Blockly.Blocks['io_blink_without_delay'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Blink without delay pin");
    this.appendValueInput("PIN")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("every");
    this.appendValueInput("DELAY")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("ms");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

};

