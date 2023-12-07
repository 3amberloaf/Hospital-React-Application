import csv
import random
from faker import Faker

fake = Faker()

columns = ['prescription_id', 'consultationID', 'dosage', 'duration', 'frequency', 'patient_id']

data = []
for _ in range(100):
    prescription_id = random.randint(3000, 3999)
    consultationID = random.randint(10000, 19999)
    dosage = random.randint(1, 10)
    duration = random.randint(1, 30)
    frequency = random.choice(['Once a day', 'Twice a day', 'As needed'])
    patient_id = random.randint(1000, 9999)

    data.append([prescription_id, consultationID, dosage, duration, frequency, patient_id])

with open('csv/Prescription.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerows(data)
