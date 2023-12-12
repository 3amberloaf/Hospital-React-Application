import csv
import random
from uniqueID import generate_unique_id

columns = ['allergyID', 'allergy_description']

# Define the allergy symptoms as provided in the initial list
allergy_symptoms = [
    'Itchy, watery eyes',
    'Itchy nose',
    'Sneezing',
    'Runny nose',
    'Rashes',
    'Hives',
    'Stomach cramps',
    'Vomiting',
    'Diarrhea',
    'Bloating',
    'Swelling',
    'Redness',
    'Pain',
    'Tongue swelling',
    'Cough',
    'Throat closing',
    'Wheezing',
    'Chest tightness and losing your breath',
    'Feeling faint, light-headed or blacking out',
]

data = []

allergy_id_set = set()

for idx in range(100):
    allergy_id = generate_unique_id(allergy_id_set, 100)  # Generate a unique allergyID
    allergy_description = random.choice(allergy_symptoms)
    data.append([allergy_id, allergy_description])

with open('csv/Allergy.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerows(data)
