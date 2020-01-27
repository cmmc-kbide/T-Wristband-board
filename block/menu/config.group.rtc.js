const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = {
  name: "Real Time Clock",
  index: 60,
  color: "240",
  icon: `file:///${dirIcon}/static/icons/smartwatch.png`,
  blocks: [
    {
      xml: `<sep gap="32"></sep><label text="RTC Setting" web-class="headline"></label>`
    },
    //  'pcf8563_rtc_begin',
     'pcf8563_rtc_set_datetime',
     'pcf8563_rtc_set_datetime_wifi',
    {
      xml: `<sep gap="32"></sep><label text="RTC Get data" web-class="headline"></label>`
    },
     'pcf8563_rtc_datetime',
     'pcf8563_rtc_get_day',
     'pcf8563_rtc_get_month',
     'pcf8563_rtc_get_year',
     'pcf8563_rtc_get_hour',
     'pcf8563_rtc_get_minute',
     'pcf8563_rtc_get_secound'
  ]
};
