#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>
#include <Wire.h>
#include <SPI.h>
//#### Screen SETUP ######
#include <TFT_eSPI.h>
TFT_eSPI tft = TFT_eSPI();
//###### MPU SETUP #######
#include "MPU9250.h"
#include "quaternionFilters.h"
MPU9250 IMU;
//###### RTC SETUP #######
#include "pcf8563.h"
PCF8563_Class rtc;
//###### ADC SETUP #######
#include "esp_adc_cal.h"
//########################

int i;

void setup() {
  Wire1.begin(SENSOR_SDA, SENSOR_SCL);
  SPI.begin(_TFT_SCLK, _TFT_MISO, _TFT_MOSI, _TFT_CS);

  pinMode(LED_PIN, OUTPUT);
  pinMode(TP_PIN_PIN, INPUT);
  pinMode(TP_PWR_PIN, PULLUP);
  digitalWrite(TP_PWR_PIN, HIGH);
  pinMode(CHARGE_PIN, INPUT_PULLUP);

  rtc.begin(Wire1);
  IMU.begin();

  ledcAttachPin(_TFT_BL, BACKLIGHT_CHANNEL);
  ledcSetup(BACKLIGHT_CHANNEL, 12000, 8);
  ledcWrite(BACKLIGHT_CHANNEL, 128);

  tft.init();
  tft.setRotation(1);
  tft.setTextSize(1);
  tft.setSwapBytes(true);
  tft.fillScreen(0xffff);

  tft.setTextSize(2);
  tft.setCursor(0, 5);
  tft.setTextColor(0xfb20);
  tft.println(String(String("Press Touch")));

  tft.setTextSize(2);
  tft.setCursor(5, 25);
  tft.setTextColor(0xfb20);
  tft.println(String(String("Button for")));

  tft.setTextSize(2);
  tft.setCursor(10, 45);
  tft.setTextColor(0xfb20);
  tft.println(String(String("Sleep mode")));
  delay(3000);
}
void loop() {
  if (digitalRead(TP_PIN_PIN)) {
    tft.fillScreen(0xffff);
    tft.setTextSize(3);
    tft.setCursor(5, 5);
    tft.setTextColor(0xf800);
    tft.println(String(String("Going to")));
    tft.setTextSize(2);
    tft.setCursor(10, 35);
    tft.setTextColor(0xf800);
    tft.println(String(String("Sleep mode")));
    delay(2000);
    for (i = 255; i >= 0; i -= 5) {
      ledcWrite(BACKLIGHT_CHANNEL, i);
      delay(50);
    }
    esp_sleep_enable_ext1_wakeup(GPIO_SEL_33, ESP_EXT1_WAKEUP_ANY_HIGH);
    esp_deep_sleep_start();
  }
  tft.fillScreen(0xffff);
  tft.setTextSize(3);
  tft.setCursor(20, 5);
  tft.setTextColor(0xf800);
  tft.println(String(String("Baterry")));
  tft.setTextSize(2);
  tft.setCursor(5, 35);
  tft.setTextColor(0x0);
  tft.println(
      String(((String("isCharge : ") + String((!digitalRead(CHARGE_PIN)))))));
  tft.setTextSize(2);
  tft.setCursor(5, 55);
  tft.setTextColor(0x0);
  tft.println(String(((String("Batt :") +
                       String((((float)analogRead(BATT_ADC_PIN) / 4095.0) *
                               2.0 * 3.3 * (1100 / 1000.0))) +
                       String("V")))));
  delay(200);
}
