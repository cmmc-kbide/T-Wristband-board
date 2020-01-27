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
}
void loop() {
  tft.fillScreen(0xffff);
  tft.setTextSize(2);
  tft.setCursor(5, 5);
  tft.setTextColor(0xf800);
  tft.println(String(String("Test Display")));
  tft.setTextSize(1);
  tft.setCursor(5, 30);
  tft.setTextColor(0x0);
  tft.println(String(String("TTGO T-Wristband")));
  tft.setTextSize(1);
  tft.setCursor(5, 40);
  tft.setTextColor(0x0);
  tft.println(String(String("https://kbide.org")));
  tft.setTextSize(1);
  tft.setCursor(5, 50);
  tft.setTextColor(0x0);
  tft.println(String(String("https://thai-maker.com")));
  tft.setTextSize(1);
  tft.setCursor(5, 60);
  tft.setTextColor(0x0);
  tft.println(String(String("powered by KB IDE")));
  delay(2000);
  tft.fillScreen(0xffff);
  for (i = 0; i <= 80; i += 5) {
    tft.drawLine(0, 0, 180, i, 0xf800);
    delay(50);
  }
  for (i = 0; i <= 80; i += 5) {
    tft.drawLine(180, 0, 0, i, 0x13);
    delay(50);
  }
  for (i = 80; i >= 0; i -= 5) {
    tft.drawLine(0, 80, 180, i, 0x4c0);
    delay(50);
  }
  for (i = 80; i >= 0; i -= 5) {
    tft.drawLine(180, 80, 0, i, 0xffe6);
    delay(50);
  }
  tft.fillScreen(0xffff);
  tft.drawRect(70, 30, 50, 30, 0x7e0);
  delay(1000);
  tft.fillRect(70, 30, 50, 30, 0x7e0);
  delay(1000);
  tft.fillScreen(0xffff);
  tft.drawCircle(64, 32, 20, 0x1f);
  delay(1000);
  tft.fillCircle(64, 32, 20, 0x1f);
  delay(1000);
}
