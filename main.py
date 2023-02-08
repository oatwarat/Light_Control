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
    name: str
    mode: str
    brightness: int
    sensor_status: int
    sensor_threshold: int


client = MongoClient(f"{MONGO_DB_URL}")

db = client[DATABASE_NAME]

collection = db[COLLECTION_NAME]

app = FastAPI()




@app.put("/update/mode/{name}/{mode}")
def update_mode(name: str = "", mode: str = "manual(hardware)"):
    collection.update_one({"name":name},{"$set":{"mode":mode}})
    return name + " is in mode " + mode

@app.put("/update/brightness/{name}/{brightness}")
def update_brightness(name: str = "", brightness: int = 0):
    collection.update_one({"name":name},{"$set":{"brightness":brightness}})
    return name + " has brightness level " + str(brightness)

@app.put("/update/threshold/{name}/{threshold}")
def update_threshold(name: str = "", threshold: int = 255):
    collection.update_one({"name":name},{"$set":{"threshold":threshold}})
    return name + " has threshold level " + str(threshold)