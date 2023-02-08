from fastapi import FastAPI, HTTPException, Body

from datetime import date, datetime, timedelta

from pydantic import BaseModel
from pymongo import MongoClient
import dotenv
import os

dotenv.load_dotenv(".env")
usrn = os.getenv("userrname")
pswd = os.getenv("password")
DATABASE_NAME = "exceed12"
COLLECTION_NAME = "light"
MONGO_DB_URL = f"mongodb://{usrn}:{pswd}@mongo.exceed19.online:8443/?authMechanism=DEFAULT"
MONGO_DB_PORT = 8443


class Management(BaseModel):
    name: int
    mode: int
    brightness: int
    sensor_status: int
    is_on: bool
#0 bedroom, 1 kitchen, 2 lounge
#0 auto, 1 hw, 2 sw

client = MongoClient(f"{MONGO_DB_URL}")

db = client[DATABASE_NAME]

collection = db[COLLECTION_NAME]

app = FastAPI()

threshold = 60

@app.put("/update/mode/{name}/{mode}")
def update_mode(name: int, mode: int = 1):
    if mode not in [0, 1, 2]:
        raise HTTPException(status_code=400, detail="invalid mode " + str(mode))
    if len(list(collection.find({"name": name}))) < 1:
        raise HTTPException(status_code=400, detail="light doesn't exist")
    collection.update_one({"name": name}, {"$set": {"mode": mode}})
    return str(name) + " is in mode " + str(mode)


@app.put("/update/brightness/{name}/{brightness}")
def update_brightness(name: int, brightness: int = 0):
    if brightness > 3 or brightness < 0:
        raise HTTPException(status_code=400, detail="brightness must be in range of 1(min) to 3(max)")
    result = collection.find_one({"name": name})
    if result["mode"] != 0 and brightness != 0:
        collection.update_one({"name": name}, {"$set": {"brightness": brightness, "is_on":True}})
        return str(name) + " has brightness level " + str(brightness)
    return "can't change"


@app.put("/update/sensor/{name}/{sensor_status}")
def update_threshold(name: int, sensor_status: int = 255):
    if len(list(collection.find({"name": name}))) < 1:
        raise HTTPException(status_code=400, detail="light doesn't exist")
    collection.update_one({"name": name}, {"$set": {"sensor_status": sensor_status}})
    return


@app.put("/update/on_off/{name}/{is_on}")
def update_on_off(name: int, is_on: bool = False):
    if len(list(collection.find({"name": name}))) < 1:
        raise HTTPException(status_code=400, detail="light doesn't exist")
    if is_on:
        collection.update_one({"name": name}, {"$set": {"is_on": True, "brightness": 3}})
        return str(name) + " is on"
    collection.update_one({"name": name}, {"$set": {"is_on": False, "brightness": 0}})
    return str(name) + " is off"

@app.put("/auto/{name}")
def update_sensor_brightness(name: int):
    result = collection.find_one({"name": name})
    if result["sensor_status"] < threshold and result["mode"] == 0:
        collection.update_one({"name": name},{"$set": {"brightness": 3}})
    elif result["sensor_status"] >= threshold and result["mode"] == 0:
        collection.update_one({"name": name}, {"$set": {"brightness": 0}})
    return