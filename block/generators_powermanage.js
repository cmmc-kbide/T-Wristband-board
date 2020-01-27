module.exports = function(Blockly) {
  "use strict";
  const ORDER_ATOMIC = Blockly.JavaScript.ORDER_ATOMIC;
  const valueToCode = (a, b) => Blockly.JavaScript.valueToCode(a, b);



Blockly.JavaScript['axp_power_begin'] = function(block) {
var code =
`
#EXTINC#include "axp20x.h"#END
#VARIABLE AXP20X_Class axp;#END

axp.begin(Wire1);
axp.setPowerOutPut(AXP202_LDO2, AXP202_ON);
axp.enableIRQ(AXP202_ALL_IRQ, AXP202_OFF);
axp.adc1Enable(0xFF, AXP202_OFF);
axp.adc2Enable(0xFF, AXP202_OFF);
axp.adc1Enable(AXP202_BATT_VOL_ADC1 | AXP202_BATT_CUR_ADC1 | AXP202_VBUS_VOL_ADC1 | AXP202_VBUS_CUR_ADC1, AXP202_ON);
axp.enableIRQ(AXP202_VBUS_REMOVED_IRQ | AXP202_VBUS_CONNECT_IRQ | AXP202_CHARGING_FINISHED_IRQ, AXP202_ON);
axp.clearIRQ();

pinMode(AXP202_INT, INPUT_PULLUP);
\n
`
;
return code;
};

Blockly.JavaScript['ischargeing'] = function(block) {
  var code = `!digitalRead(CHARGE_PIN)`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['getbattvoltage'] = function(block) {
  var code = `((float)analogRead(BATT_ADC_PIN) / 4095.0) * 2.0 * 3.3 * (1100 / 1000.0)`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sleepmode'] = function(block) {
  var code = `
esp_sleep_enable_ext1_wakeup(GPIO_SEL_33, ESP_EXT1_WAKEUP_ANY_HIGH);
esp_deep_sleep_start();\n`;
  return code;
};

Blockly.JavaScript['setBlackLight'] = function(block) {
   var value_name = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
var code = 
`
ledcWrite(BACKLIGHT_CHANNEL, ${value_name});
`;

  return code;
};


};
