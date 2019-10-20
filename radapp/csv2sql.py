import sqlite3
import pandas as pd
from geopy.geocoders import Nominatim
geolocator = Nominatim(user_agent="specify_your_app_name_here")

sqlite_file = 'db.sqlite3'
table_name01 = 'nasa_city'

conn = sqlite3.connect(sqlite_file)

df = pd.read_csv('data.csv')
df.columns = ['identifier', 'collection_date', 'num_of_bubbles', 'bubble_detector_id', 'sensitivity', 'calculated_exposure', 'city', 'province']
for c in df.columns:
    #df['column'] = df['column'].astype('str') 
    if str(df[c].dtype) == 'object':
        #print('yes')
        df[c] = df[c].apply(str)
print(df.dtypes)
print(df.columns)
df["collection_date"] = df["collection_date"].str[:23]
#for date in df['collection_date']:
    #print(date)
df['collection_date']= pd.to_datetime(df['collection_date']) 
#df.reset_index()
cities = df['city'].unique()



#df.to_sql('nasa_city', conn, if_exists='replace', index=False)
#df = df.reset_index(drop=True)
from geopy.geocoders import Nominatim
cities_latlng = []

i = 0
#for c in cities:
#  if c == 'Dartmouth N.-E.':
#    continue
#  location = geolocator.geocode(c + ", Canada")
#  print(location.address)
#  print(c)
  #Flatiron Building, 175, 5th Avenue, Flatiron, New York, NYC, New York, ...
#  cities_latlng.append([i, c, location.latitude, location.longitude])
#  i+= 1

#df = pd.DataFrame(cities_latlng, columns = ['id', 'city', 'lat', 'lng']) 
  
# print dataframe. 
df = pd.read_csv('merged_files.csv')

#df.drop(df.columns[0], axis=1, inplace=True)
df.columns = ['identifier', 'city', 'province', 'exposure', 'radon', 'terrestrial', 'cosmic', 'ingestion', 'total']
df.index.names = ['id']
df.to_sql('nasa_rad', conn, if_exists='replace')

print(cities_latlng)