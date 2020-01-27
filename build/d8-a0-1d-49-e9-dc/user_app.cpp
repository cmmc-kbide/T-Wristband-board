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







void setup()
{
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
    tft.setCursor(5, 5);
    tft.setTextColor(0xf800);
    tft.println(String(String("Setting RTC")));
    delay(1000);
  tft.fillScreen(0xffff);

}
void loop()
{
  RTC_Date datetime = rtc.getDateTime();
    tft.fillScreen(0xffff);
    tft.setTextSize(4);
    tft.setCursor(20, 25);
    tft.setTextColor(0x0);
    tft.println(String(((String((datetime.hour))+String(":")+String((datetime.minute))))));
    delay(1000);

}
