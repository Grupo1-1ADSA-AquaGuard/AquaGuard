int tcrt = 7;
// float luminosidade;
int leitura = 0;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600); 
}

void loop() {
  // put your main code here, to run repeatedly:
  leitura = digitalRead(tcrt);
  //temperatura = ((5.0/1023) * leitura) * 100;
  Serial.print("Presença: ");
  Serial.println(leitura);
  delay(2000);
}
