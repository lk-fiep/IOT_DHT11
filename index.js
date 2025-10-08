const {SerialPort} = require("serialport"); 
const { ReadlineParser } = require("@serialport/parser-readline");
const mqtt = require("mqtt");

const port = new SerialPort({ path: "COM5" , baudRate: 9600});
const parser = port.pipe(new ReadlineParser({ delimiter: "\n" }));

const cliente = mqtt.connect("mqtt://broker.hivemq.com:1883");
const topic = "senai/oit/dnt11";
client.on("connect", () => {
        console.log("concectado ao broker MQTT!");      
});

parser.on("data", (line)=> {
    try {
        const data = JSON.parse(line.trim());
        console.log("Recebidos:" , data);

        client.publish(topic, JSON.stringify(data));
        console.log("Publicado no MQTT:" , data);
    } catch (err)   {
        console.error("Erro ao parsear:" , line);
        }
})