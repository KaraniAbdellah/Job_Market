# Import Packages
from fastapi import FastAPI
import joblib
import pandas as pd
# import fromJsonObjectToDataFrame from "model.py"


app = FastAPI()

# Load The Model
model = joblib.load("./my_model.pkl")
model
all_features = model.feature_names_in_


# Create Hello World EndPoint
@app.get("/helloWorld")
def helloWorld():
    fromJsonObjectToDataFrame()



