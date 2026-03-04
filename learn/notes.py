# With KeyWord in Python:
'''
    for file handling (open, write, ...)
'''
## Without with keyword:
file = open("./file.txt")
try:
    content = file.read()
    print(content) 
except:
    file.close()
    print('Error in File Opening')
## With with keyword --> this close file auto
with open("file.txt") as file:
    content = file.read()
    print(content)


# DataFrame (is 2 dimentional Object)
# Series is One Dimentional array
# workbook (class in openexcel) is excel file itself
# Data Wrangling vs Data Cleaning
'''
    Data Wrangling OR Data Preprocessing: is preparing the data
    Data Cleaning: clean data to grant the data quality
    
    --> Data Wrangling:
        - Collect Data From Deffrent Ressources (API, CSV, ...)
        - 
'''


# Contact in Pandas
'''
    Concat two dataframes (df1, df2)
'''


# Data Preprocessing
'''
    This Steps for Data Enegenring Role, in this step we DO:
        --> Data Transformation
        --> Data Normalisation
        --> Data Cleaning 
'''

# Index, Axias in Pandas
'''
    Index: each dataframe has own index that identify each row.
    Axis: 
''' 

#  
 

