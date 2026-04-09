# Import Packages
import joblib
import requests
from model import fromJsonObjectToDataFrame
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# Load the Model
url = "https://huggingface.co/karani10/Job_market_Model/resolve/main/my_model.pkl"
response = requests.get(url)
with open("my_model.pkl", "wb") as f:
    f.write(response.content)

model = joblib.load("my_model.pkl")
all_features = model.feature_names_in_


# Define Employee Data Type
class Employee(BaseModel):
    country: str
    city: str
    occupation: str
    field: str
    years_of_experience: int
    employment_type: str
    education_level: str
    gender: str
    company_size: str


# Define the /predict endpoint
@app.post("/predict")
def predictSalary(employee: Employee):
    dict_employee = Employee.dict(employee)
    df = fromJsonObjectToDataFrame(dict_employee, all_features)  # convert JSON to DataFrame
    prediction = model.predict(df)
    return ({"prediction": prediction.tolist()})


# Define HelloWorld EndPoint
@app.get("/")
def helloWorld():
    return {"message": "Hello World From get EndPoint [Job Market]"}
