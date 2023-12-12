import csv
import random
from uniqueID import generate_unique_id

# Placeholder data for 'description', for demonstration purposes
description_samples = [
    'Common cold characterized by runny nose, cough, and fever.',
    'Seasonal influenza with symptoms including high fever, muscle aches, and fatigue.',
    'Type 2 diabetes with common signs such as increased thirst and frequent urination.',
    'Chronic obstructive pulmonary disease presenting with shortness of breath and wheezing.',
    'Asthma, a respiratory condition marked by spasms in the bronchi of the lungs.',
    'Depression, a mood disorder causing a persistent feeling of sadness and loss of interest.',
    'Hypertension, also known as high blood pressure, which can lead to severe complications.',
    'Coronary artery disease, caused by impaired blood flow to the heart muscle.',
    'Osteoarthritis, the most common form of arthritis, affecting joints and causing pain.',
    'Peptic ulcer disease, resulting in sores in the lining of the stomach or small intestine.'
]

id_range = 100

illness_id_set = set()

with open('csv/illness.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    # Write the header
    writer.writerow(['illness_id', 'description'])

    for _ in range(100):
        illness_id = generate_unique_id(illness_id_set, id_range)
        
        writer.writerow([
            illness_id,
            random.choice(description_samples)           # Random description of an illness
        ])


