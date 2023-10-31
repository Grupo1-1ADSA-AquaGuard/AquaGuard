int porta1 = 5;
int leitura1 = 0;
int blocoLeitura1 = 0;

int porta2 = 7;
int leitura2 = 0;
int blocoLeitura2 = 0;

int soma = 0;
int contador = 0;

void setup() {
  Serial.begin(9600);

}

void loop() {
leitura1 = map(digitalRead(porta1), 1, 0, 0, 1);
blocoLeitura1 += leitura1;

leitura2 = map(digitalRead(porta2), 1, 0, 0, 1);
blocoLeitura2 += leitura2;

if((contador % 5) == 0){
  // (sensor1 + sensor2)
  if(blocoLeitura1 == 0){
    soma = 0;
  }else{
    soma = blocoLeitura1 + blocoLeitura2;
  }
  Serial.println(soma);

  blocoLeitura1 = 0;
  blocoLeitura2 = 0;
}

delay(300);
contador += 1;
}
