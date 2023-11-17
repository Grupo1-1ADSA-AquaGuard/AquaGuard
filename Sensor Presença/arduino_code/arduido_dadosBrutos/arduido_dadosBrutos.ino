int porta1 = 5;
int leitura1 = 0;

int porta2 = 7;
int leitura2 = 0;

void setup() {
  Serial.begin(9600);
}

void loop() {
leitura1 = map(digitalRead(porta1), 1, 0, 0, 1);
leitura2 = map(digitalRead(porta2), 1, 0, 0, 1);

Serial.print(leitura1);
Serial.print(';');
Serial.println(leitura2);

delay(500);
}