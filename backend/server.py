# Import Packages
from fastapi import FastAPI
import joblib
import pandas as pd



app = FastAPI()

# Load The Model
model = joblib.load("./my_model.pkl")
model

# Create Hello World EndPoint
@app.get("/helloWorld")
def helloWorld():
    print("Hello World From JObMarket Model")
    return {"message": "hellWorld"}



