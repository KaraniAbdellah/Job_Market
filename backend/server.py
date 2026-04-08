# Import Packages
from flask import Flask, request, jsonify
import joblib
import pandas as pd
from model import fromJsonObjectToDataFrame

app = Flask(__name__)

# Load the Model
model = joblib.load("./my_model.pkl")
all_features = model.feature_names_in_

# Define the /predict endpoint
@app.route("/predict", methods=["POST"])
def predictSalary():
    data = request.get_json()  # get JSON from request body
    print("helo from predict")
    print(data)
    df = fromJsonObjectToDataFrame(data, all_features)  # convert JSON to DataFrame
    prediction = model.predict(df)
    return jsonify({"prediction": prediction.tolist()})

