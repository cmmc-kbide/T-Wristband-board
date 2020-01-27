const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
  name: "GPIO",
  index: 10,
  color: "230",
  icon: `file:///${dirIcon}/static/icons/cpu.png`,
  blocks: [
    {
      xml: `<sep gap="32"></sep><label text="GPIO" web-class="headline"></label>`
    },
    "io_pin_dummy_input",
    "gpio_touch_pin"
    // {
    //   xml:
    //     `<block type="io_setpin">
    //                     <value name="pin">
    //                         <shadow type="math_number">
    //                             <field name="NUM">25</field>
    //                         </shadow>
    //                     </value>
    //                 </block>`
    // },
    // {
    //   xml:
    //     `<block type="io_digital_read">
    //                     <value name="pin">
    //                         <shadow type="math_number">
    //                             <field name="NUM">32</field>
    //                         </shadow>
    //                     </value>
    //                 </block>`
    // },
    // {
    //   xml:
    //     `<block type="io_digital_write">
    //                     <value name="pin">
    //                         <shadow type="math_number">
    //                             <field name="NUM">18</field>
    //                         </shadow>
    //                     </value>
    //                     <value name="value">
    //                         <shadow type="math_number">
    //                             <field name="NUM">1</field>
    //                         </shadow>
    //                     </value>
    //                 </block>`
    // },
    // {
    //   xml:
    //     `<block type="io_analog_read">
    //                     <value name="pin">
    //                         <shadow type="math_number">
    //                             <field name="NUM">36</field>
    //                         </shadow>
    //                     </value>
    //                 </block>`
    // },
    // {
    //   xml:
    //     `<block type="io_analog_write">
    //                     <value name="value">
    //                         <shadow type="math_number">
    //                             <field name="NUM">128</field>
    //                         </shadow>
    //                     </value>
    //                 </block>`
    // },
    // {
    //   xml:
    //     `<block type="io_pwm_write">
    //                     <value name="pin">
    //                         <shadow type="math_number">
    //                             <field name="NUM">36</field>
    //                         </shadow>
    //                     </value>
    //                     <value name="value">
    //                         <shadow type="math_number">
    //                             <field name="NUM">128</field>
    //                         </shadow>
    //                     </value>
    //                 </block>`
    // },
    // {
    //   xml:
    //     `<block type="io_pulse_in">
    //                     <value name="pin">
    //                         <shadow type="math_number">
    //                             <field name="NUM">36</field>
    //                         </shadow>
    //                     </value>
    //                 </block>`
    // },
    // "io_shift_in",
    // {
    //   xml:
    //     `<block type="io_shift_out">
    //                     <value name="data">
    //                         <shadow type="math_number">
    //                             <field name="NUM">127</field>
    //                         </shadow>
    //                     </value>
    //                 </block>`
    // },
    // {
    // xml:
    // `<block type="io_blink_without_delay">
    //     <value name="PIN">
    //         <shadow type="math_number">
    //             <field name="NUM">12</field>
    //         </shadow>
    //     </value>
    //     <value name="DELAY">
    //         <shadow type="math_number">
    //             <field name="NUM">1000</field>
    //         </shadow>
    //     </value>
    // </block>`
    // }
  ]
};
