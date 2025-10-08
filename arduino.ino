#include <DHT.h>    
#define DHTPIN 2    
#defineDHTYPE DHTTYPE
DHT dht(DHTPIN, DHTTYPE);

void setup() {
    Serial.begin(9600);
    dht.begin();
}
    
void loop() {
    float h = dht.readHumidity
}