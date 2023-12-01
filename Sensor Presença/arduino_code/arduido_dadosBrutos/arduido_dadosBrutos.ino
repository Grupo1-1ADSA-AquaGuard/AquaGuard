int porta1 = 5;   //entrada da leitura do primeiro sensor
int leitura1 = 0;

int porta2 = 7;
int leitura2 = 0;

int tempo_sensor1 = 0;  //tempo de ativação dos sensores
int tempo_sensor2 = 0;

float distancia = 0.2;

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