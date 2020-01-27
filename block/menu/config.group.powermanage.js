const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
  name: "Power Management",
  index: 50,
  color: "240",
  icon: `file:///${dirIcon}/static/icons/low-battery.png`,
  blocks: [
    {
      xml: `<sep gap="32"></sep><label text="Power Status" web-class="headline"></label>`
    },
    //  'power_manage_begin',
     'ischargeing',
     'getbattvoltage',
     {
      xml: `<sep gap="32"></sep><label text="Power Saving" web-class="headline"></label>`
     },
     'sleepmode',
     {
      xml:
        `<block type="setBlackLight">
          <value name="VALUE">
            <shadow type="math_number">
              <field name="NUM">255</field>
            </shadow>
          </value>
        </block>`
      }
  ]
};
