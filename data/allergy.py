import csv
import random

columns = ['allergyID', 'allergy_description']

# Define the allergy symptoms as provided in the initial list
allergy_symptoms = [
    'Itchy, watery eyes',
    'Itchy nose',
    'Sneezing',
    'Runny nose',
    'Rashes',
    'Hives (a rash with raised red patches)',
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
    'Wheezing (a whistling sound when you breathe)',
    'Chest tightness and losing your breath',
    'Feeling faint, light-headed or “blacking out”',
    'A sense of “impending doom”'
]

data = []

for idx in range(0, 100): 
    allergy_description = random.choice(allergy_symptoms)
    data.append([idx, allergy_description])


with open('csv/Allergy.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerows(data)


