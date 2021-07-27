import paho.mqtt.client as mqtt
import json, time, random
from datetime import datetime
from time import sleep

#101 barrière optique
# lieu squaté capteurs de présence

#Paramètres de connexion à compléter
#Nom du groupe sans espaces avec la nomenclature WEB2 ou WEB3
#Exemple : WEB2-GROUPE3
GROUPNAME="WEB3-GROUPE5"

MQTT_BROKER="hetic.arcplex.fr"

#Login et mot de passe du groupe
MQTT_USERNAME="GROUPE5"
MQTT_PASSWORD="29989605"
# un ID différent par Node
NODE_ID=["bin_node","mailbox_node","mailbox2_node","entranceHall_node","staircase_node","door_node"]
#ID du sensor
#SENSOR_ID=126
BIN_SENSOR_ID=126
MAILBOX_SENSORS_ID=[101,102]
ENTRANCEHALL_SENSOR_ID=128
STAIRCASE_SENSOR_ID=128
DOOR_SENSOR_ID=102

client = mqtt.Client("client")
client.username_pw_set(username=MQTT_USERNAME,password=MQTT_PASSWORD)
client.connect(MQTT_BROKER)

#Type de donnée renvoyée : Random 0 ou 1
VALMIN = 0
VALMAX = 500


def run(condition):
    while datetime.now().minute not in {13, 28, 29, 47}:
        sleep(1)
    def task():
        #for node in NODE_ID:
            #MQTT_TOPIC = GROUPNAME + "/" + node + "/" + str(SENSOR_ID)
            #MQTT_MSG = json.dumps({"source_address": node, "sensor_id": SENSOR_ID, "tx_time_ms_epoch": int(time.time()),
            #                  "data": {"value": round(random.uniform(VALMIN,VALMAX), 2)}})
            #client.publish(MQTT_TOPIC, MQTT_MSG)
            #print("MQTT Mis à jour - Node %s Timestamp : %s"%(node,int(time.time())))

        MQTT_TOPIC = GROUPNAME + "/" + NODE_ID[0] + "/" + str(BIN_SENSOR_ID)
        MQTT_MSG = json.dumps({"source_address": NODE_ID[0], "sensor_id": BIN_SENSOR_ID, "tx_time_ms_epoch": int(time.time()),
                              "data": {"value": round(random.uniform(VALMIN,VALMAX), 2)}})
        client.publish(MQTT_TOPIC, MQTT_MSG)
        print("MQTT Mis à jour - Node %s Timestamp : %s"%(NODE_ID[0],int(time.time())))

        for sensors in MAILBOX_SENSORS_ID:
            MQTT_TOPIC = GROUPNAME + "/" + NODE_ID[1] + "/" + str(sensors)
            MQTT_MSG = json.dumps({"source_address": NODE_ID[1], "sensor_id": sensors, "tx_time_ms_epoch": int(time.time()),
                                "data": {"value": 1}})
            client.publish(MQTT_TOPIC, MQTT_MSG)
            print("MQTT Mis à jour - Node %s Timestamp : %s"%(NODE_ID[1],int(time.time())))

        for sensors in MAILBOX_SENSORS_ID:
            MQTT_TOPIC = GROUPNAME + "/" + NODE_ID[2] + "/" + str(sensors)
            MQTT_MSG = json.dumps({"source_address": NODE_ID[2], "sensor_id": sensors, "tx_time_ms_epoch": int(time.time()),
                                "data": {"value": 1}})
            client.publish(MQTT_TOPIC, MQTT_MSG)
            print("MQTT Mis à jour - Node %s Timestamp : %s"%(NODE_ID[2],int(time.time())))

        MQTT_TOPIC = GROUPNAME + "/" + NODE_ID[3] + "/" + str(ENTRANCEHALL_SENSOR_ID)
        MQTT_MSG = json.dumps({"source_address": NODE_ID[3], "sensor_id": ENTRANCEHALL_SENSOR_ID, "tx_time_ms_epoch": int(time.time()),
                              "data": {"value": 0 }})
        client.publish(MQTT_TOPIC, MQTT_MSG)
        print("MQTT Mis à jour - Node %s Timestamp : %s"%(NODE_ID[3],int(time.time())))
        
        MQTT_TOPIC = GROUPNAME + "/" + NODE_ID[4] + "/" + str(STAIRCASE_SENSOR_ID)
        MQTT_MSG = json.dumps({"source_address": NODE_ID[4], "sensor_id": STAIRCASE_SENSOR_ID, "tx_time_ms_epoch": int(time.time()),
                              "data": {"value": 0 }})
        client.publish(MQTT_TOPIC, MQTT_MSG)
        print("MQTT Mis à jour - Node %s Timestamp : %s"%(NODE_ID[4],int(time.time())))
        
        MQTT_TOPIC = GROUPNAME + "/" + NODE_ID[5] + "/" + str(DOOR_SENSOR_ID)
        MQTT_MSG = json.dumps({"source_address": NODE_ID[5], "sensor_id": DOOR_SENSOR_ID, "tx_time_ms_epoch": int(time.time()),
                              "data": {"value": 0 }})
        client.publish(MQTT_TOPIC, MQTT_MSG)
        print("MQTT Mis à jour - Node %s Timestamp : %s"%(NODE_ID[5],int(time.time())))
        
    task()
    while condition == True:
        sleep(60 * 15)
        task()

run(True)
