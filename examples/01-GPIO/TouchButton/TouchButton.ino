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

Number num_color;

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

  num_color = 0;
}
void loop() {
  if (digitalRead(TP_PIN_PIN)) {
    num_color = rand() % 5 + 1;
  }
  if (num_color == 1) {
    tft.fillScreen(0xffff);
  } else if (num_color == 2) {
    tft.fillScreen(0xf800);
  } else if (num_color == 3) {
    tft.fillScreen(0xffe0);
  } else if (num_color == 4) {
    tft.fillScreen(0x320);
  } else if (num_color == 5) {
    tft.fillScreen(0x13);
  }
}
