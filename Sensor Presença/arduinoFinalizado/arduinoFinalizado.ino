#define pinSensor1 5
#define pinSensor2 7

int leitura1 = 0;
int leitura2 = 0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  if(digitalRead(pinSensor1) == 0){

    if(leitura1 == 0){
      leitura1 = 1;
    }else{
      leitura1 = 0;
    }
  }
  
  if (digitalRead(pinSensor2) == 0){
    if(leitura2 == 0){
      leitura2 = 1;
    }else{
      leitura2 = 0;
    }
  }

  Serial.print(leitura1);
  Serial.print(";");
  Serial.println(leitura2);
  delay(3000);
}
