import joblib
import pandas as pd
from sklearn.model_selection import train_test_split
import numpy as np

# Load The Model
# model = joblib.load("./my_model.pkl")
# model


# Prediction
# def getPredict():
#     model.predict()


# From Json Object To DataFrame
def fromJsonObjectToDataFrame(jsonData):
    print(jsonData)
    pass

'''
    --> JSON Object:
    {
        "country": "Switzerland",
        "city": "Zurich",
        "occupation": "Operations Manager",
        "field": "Operations",
        "years_of_experience": 16,
        "salary": 359609.0,
        "employment_type": "work_from_home",
        "education_level": "Master",
        "gender": "Male",
        "company_size": "Large"
    }
    
    --> Make Dictionnary
    
'''
row_dict = {
    "country": "Switzerland",
    "city": "Zurich",
    "occupation": "Operations Manager",
    "field": "Operations",
    "years_of_experience": 16,
    "salary": 359609.0,
    "employment_type": "work_from_home",
    "education_level": "Master",
    "gender": "Male",
    "company_size": "Large"
}

fromJsonObjectToDataFrame(row_dict)
