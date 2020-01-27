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

  tft.fillScreen(0xffff);

  tft.setTextSize(2);
  tft.setCursor(5, 5);
  tft.setTextColor(0x0);
  tft.println(String(String("WiFi Tester")));
  WiFi.begin("YOUR_SSID", "YOUR_PASSWORD");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
  }
  tft.fillScreen(0xffff);

  tft.setTextSize(2);
  tft.setCursor(5, 5);
  tft.setTextColor(0x0);
  tft.println(String(String("Connected !")));

  tft.setTextSize(1);
  tft.setCursor(5, 25);
  tft.setTextColor(0x0);
  tft.println(
      String(((String("IP Address:") + String((WiFi.localIP().toString()))))));

  tft.setTextSize(1);
  tft.setCursor(5, 35);
  tft.setTextColor(0x0);
  tft.println(
      String(((String("Soft IP:") + String((WiFi.softAPIP().toString()))))));
}
void loop() {
}
