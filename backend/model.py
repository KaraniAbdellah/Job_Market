import pandas as pd
from sklearn.preprocessing import OneHotEncoder

# Processing HERE
company_size_map = {'Large': 3, 'Enterprise': 2, 'Medium': 1, 'Small': 0}
gender_map = {'Male': 0, 'Female': 1, 'Other': 2}
education_level_map = {'PhD': 3, 'Master': 2, 'Bachelor': 1, 'High School': 0}

# From Json Object To DataFrame
def fromJsonObjectToDataFrame(jsonData, all_features):
    df_data = pd.DataFrame([jsonData])
    
    # Mapping/Label Encoding This Varaibles
    df_data["company_size"] = [company_size_map.get(v) for v in df_data["company_size"]]
    df_data["gender"] = [gender_map.get(v) for v in df_data["gender"]]
    df_data["education_level"] = [education_level_map.get(v) for v in df_data["education_level"]]

    # One-Hot-Encoding
    one_hot_encoder = OneHotEncoder()
    df_data = pd.get_dummies(df_data, columns=["field", "employment_type", "city", "country", "occupation"])

    # Add More Columns
    for f in all_features:
        if (df_data.get(f) is None):
            df_data[f] = False
    df_data.head(2)
    
    # Re-Order Tree
    df_data = df_data.reindex(columns=all_features, fill_value=0)
    
    return df_data


