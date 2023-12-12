import csv
import random
from datetime import date, timedelta
from uniqueID import generate_unique_id


columns = ['nurse_id', 'patient_id', 'date', 'shift', 'idnursePatient']

nurse_id_set = set()
patient_id_set = set()
idnursePatient_set = set()

with open('csv/Nurse_Patient.csv', mode='w', newline='') as file:
    writer = csv.DictWriter(file, fieldnames=columns)
    writer.writeheader()

    for _ in range(100):
        nurse_id = generate_unique_id(nurse_id_set, 100)
        patient_id = generate_unique_id(patient_id_set, 100)
        idnursePatient = generate_unique_id(idnursePatient_set, 100)
        
        nurse_id = random.randint(1, 100)
        patient_id = random.randint(1, 100)
        shift = random.choice(['Morning', 'Afternoon', 'Night'])
        admission_date = (date.today() - timedelta(days=random.randint(1, 30))).strftime('%Y-%m-%d')

        writer.writerow({
            'nurse_id': nurse_id,
            'patient_id': patient_id,
            'date': admission_date,
            'shift': shift,
            'idnursePatient': idnursePatient
        })
