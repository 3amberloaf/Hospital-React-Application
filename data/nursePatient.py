import csv
import random
from faker import Faker
from datetime import date, timedelta

fake = Faker()

columns = ['nurse_id', 'patient_id', 'date', 'shift', 'idnursePatient']

data = []
for _ in range(100):
    nurse_id = random.randint(1, 100)
    patient_id = random.randint(0, 100)
    shift = random.choice(['Morning', 'Afternoon', 'Night'])
    admission_date = (date.today() - timedelta(days=random.randint(1, 30))).strftime('%Y-%m-%d')
    idnursePatient = random.randint(1, 100)

    data.append([nurse_id, patient_id, admission_date, shift, idnursePatient])

with open('csv/Nurse_Patient.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerows(data)
