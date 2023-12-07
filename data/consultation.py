import csv
import random
import pandas as pd


columns = ['date', 'consultation_id', 'notes', 'patient_id', 'physician_id', 'type']

# Placeholder data ranges
date_range = pd.date_range(start='2021-01-01', end='2021-12-31').date
id_range = 100
notes_samples = ['Follow-up in 3 months', 'Refer to specialist', 'Schedule surgery', 'Prescription refill', 'Physical therapy recommended']
type_samples = ['Checkup', 'Emergency', 'Follow-up', 'Prescription', 'Surgery']

# Write to a new CSV file with the specified columns
with open('csv/consultation.csv', mode='w', newline='') as file:
    writer = csv.DictWriter(file, fieldnames=columns)
    
    # Write the header row
    writer.writeheader()

    # Write 100 rows with random values for each column
    for _ in range(100):
        writer.writerow({
            'date': random.choice(date_range).strftime('%Y-%m-%d'),  # Random date formatted as string
            'consultation_id': random.randint(1, id_range),      # Random id
            'notes': random.choice(notes_samples),     # Random notes
            'patient_id': random.randint(1, id_range),      # Random patient_id
            'physician_id': random.randint(1, id_range),      # Random physician_id
            'type': random.choice(type_samples)       # Random type
        })

