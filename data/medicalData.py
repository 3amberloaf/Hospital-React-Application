import csv
import random
import pandas as pd


# Placeholder data ranges
patient_id_range = data_id_range = 100
blood_sugar_range = (70, 150)  # Normal fasting value range in mg/dL
cholesterol_range = (125, 240)  # Total cholesterol range in mg/dL
hdl_range = (30, 70)  # HDL (good cholesterol) range in mg/dL
ldl_range = (50, 190)  # LDL (bad cholesterol) range in mg/dL
triglycerides_range = (100, 250)  # Triglycerides range in mg/dL
date_range = pd.date_range(start='2021-01-01', end='2021-12-31').date

# Write to a new CSV file with the specified columns
with open('csv/medicalData.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    # Write the header
    writer.writerow(['patient_id', 'data_id', 'bloodSugar', 'cholesterol', 'date', 'hdl', 'ldl', 'triglycerides'])

    # Write 100 rows with random values for each column
    for _ in range(100):
        writer.writerow([
            random.randint(1, patient_id_range),                          # Random patient_id
            random.randint(1, data_id_range),                             # Random data_id
            random.randint(blood_sugar_range[0], blood_sugar_range[1]),   # Random bloodSugar
            random.randint(cholesterol_range[0], cholesterol_range[1]),   # Random cholesterol
            random.choice(date_range).strftime('%Y-%m-%d'),               # Random date formatted as string
            random.randint(hdl_range[0], hdl_range[1]),                   # Random hdl
            random.randint(ldl_range[0], ldl_range[1]),                   # Random ldl
            random.randint(triglycerides_range[0], triglycerides_range[1])# Random triglycerides
        ])

