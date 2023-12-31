import csv
import random
import pandas as pd
from uniqueID import generate_unique_id;

columns = ['date', 'consultation_id', 'notes', 'patient_id', 'physician_id', 'type']

# Placeholder data ranges
date_range = pd.date_range(start='2021-01-01', end='2021-12-31').date
notes_samples = ['Follow-up in 3 months', 'Refer to specialist', 'Schedule surgery', 'Prescription refill', 'Physical therapy recommended']
type_samples = ['Checkup', 'Emergency', 'Follow-up', 'Prescription', 'Surgery']

# Sets to track unique IDs
consultation_ids = set()
patient_ids = set()
physician_ids = set()

# Write to a new CSV file with the specified columns
with open('csv/consultation.csv', mode='w', newline='') as file:
    writer = csv.DictWriter(file, fieldnames=columns)
    writer.writeheader()

    for _ in range(100):
        consultation_id = generate_unique_id(consultation_ids, 100)
        patient_id = generate_unique_id(patient_ids, 100)
        physician_id = generate_unique_id(physician_ids, 100)

        writer.writerow({
            'date': random.choice(date_range).strftime('%Y-%m-%d'),
            'consultation_id': consultation_id,
            'notes': random.choice(notes_samples),
            'patient_id': patient_id,
            'physician_id': physician_id,
            'type': random.choice(type_samples)
        })
