import csv
import random
import pandas as pd
from uniqueID import generate_unique_id

# Placeholder data ranges
blood_sugar_range = (70, 150)
cholesterol_range = (125, 240)
hdl_range = (30, 70)
ldl_range = (50, 190)
triglycerides_range = (100, 250)
date_range = pd.date_range(start='2021-01-01', end='2021-12-31').date

# Sets to track unique IDs
patient_ids = set()
data_ids = set()

with open('csv/medicalData.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(['patient_id', 'data_id', 'bloodSugar', 'cholesterol', 'date', 'hdl', 'ldl', 'triglycerides'])

    for _ in range(100):
        patient_id = generate_unique_id(patient_ids, 100)
        data_id = generate_unique_id(data_ids, 100)

        writer.writerow([
            patient_id,
            data_id,
            random.randint(blood_sugar_range[0], blood_sugar_range[1]),
            random.randint(cholesterol_range[0], cholesterol_range[1]),
            random.choice(date_range).strftime('%Y-%m-%d'),
            random.randint(hdl_range[0], hdl_range[1]),
            random.randint(ldl_range[0], ldl_range[1]),
            random.randint(triglycerides_range[0], triglycerides_range[1])
        ])
