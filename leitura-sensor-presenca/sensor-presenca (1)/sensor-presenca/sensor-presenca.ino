#include "DHT.h"

DHT dht_1 = DHT(A0, DHT11);

int tcrt = 7;
int ldr = A1;
int lm35 = A2;

int temperatura = 0;
int leitura = 0;

void setup() {
  Serial.begin(9600); 

  dht_1.begin();
}

void loop() {
  
  float umidade = dht_1.readHumidity();
  float temperatura = dht_1.readTemperature();
  Serial.print(umidade);
  Serial.println(";");
  Serial.print(temperatura);
  Serial.println(";");

  float leituraldr = analogRead(ldr);
  Serial.print(leituraldr);
  Serial.println(";");

  float leituralm35 = analogRead(lm35);
  float temperaturalm = ((5.0/1023) * leituralm35) * 100;
  Serial.print(leituralm35);
  Serial.println(";");

  float leiturachave = digitalRead(tcrt);
  Serial.print(leiturachave);
  Serial.println(";");
  delay(1000);
}
