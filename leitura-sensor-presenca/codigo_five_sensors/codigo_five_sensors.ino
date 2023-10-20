#include "DHT.h"
#define dht_type DHT11

int pin_dht = A1;
int pin_lm35 = A2;
int pin_tcrt = 7;
int pin_ldr = A0;

DHT dht_1 = DHT(pin_dht, dht_type);

float dht_umi = 0;
float dht_temp = 0;

int lm35_temp = 0;
int lm35_read = 0;

int tcrt_read = 0;

int ldr_read = 0;

void setup() {
  Serial.begin(9600);
  dht_1.begin();
}

void loop() {
  dht_umi = dht_1.readHumidity();
  dht_temp = dht_1.readTemperature();
  Serial.print(dht_umi);
  Serial.print(";");
  Serial.print(dht_temp);
  Serial.print(";");

  ldr_read = analogRead(pin_ldr);
  Serial.print(ldr_read);
  Serial.print(";");

  lm35_read = analogRead(pin_lm35);
  lm35_temp = lm35_read * (5.0/1023) * 100;
  Serial.print(lm35_temp);
  Serial.print(";");

  tcrt_read = digitalRead(pin_tcrt);
  Serial.println(tcrt_read);
}
