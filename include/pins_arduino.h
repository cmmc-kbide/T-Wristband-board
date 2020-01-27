#ifndef Pins_Arduino_h
#define Pins_Arduino_h

#include <stdint.h>

#define EXTERNAL_NUM_INTERRUPTS 16
#define NUM_DIGITAL_PINS        40
#define NUM_ANALOG_INPUTS       16

#define analogInputToDigitalPin(p)  (((p)<20)?(esp32_adc2gpio[(p)]):-1)
#define digitalPinToInterrupt(p)    (((p)<40)?(p):-1)
#define digitalPinHasPWM(p)         (p < 34)

#define TFT_WIDTH           80
#define TFT_HEIGHT          160

static const uint8_t TXD0 = 1;
static const uint8_t RXD0 = 3;

static const uint8_t _TFT_SCLK	=	18;
static const uint8_t _TFT_RST	=	26;
static const uint8_t _TFT_MOSI	=	19;
static const uint8_t _TFT_MISO 	= 	-1;
static const uint8_t _TFT_CS 	=	 5;
static const uint8_t _TFT_DC 	= 	23;
static const uint8_t _TFT_BL 	= 	27;

static const uint8_t BACKLIGHT_CHANNEL = 10;
static const uint8_t LED_PIN = 4;

// static const uint8_t SD_SCLK = 14;
// static const uint8_t SD_MOSI = 15;
// static const uint8_t SD_MISO = 2;
// static const uint8_t SD_SS = 13;

static const uint8_t TP_PIN_PIN = 33;

static const uint8_t SENSOR_SDA = 21;
static const uint8_t SENSOR_SCL = 22;

static const uint8_t TP_PWR_PIN = 25;
static const uint8_t RTC_INT_PIN = 34;
static const uint8_t BATT_ADC_PIN = 35;
static const uint8_t VBUS_PIN = 36;
static const uint8_t CHARGE_PIN = 32;

#endif /* Pins_Arduino_h */