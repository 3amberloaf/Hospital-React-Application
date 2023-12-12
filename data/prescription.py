import csv
import random
from faker import Faker
from uniqueID import generate_unique_id
fake = Faker()

columns = ['prescription_id', 'consultation_id', 'dosage', 'duration', 'frequency', 'patient_id']

prescription_id_set = set()
consultation_id_set = set()
patient_id_set = set()


data = []
for _ in range(100):
    prescription_id = generate_unique_id(prescription_id_set, 100)
    consultation_id = generate_unique_id(consultation_id_set, 100)
    dosage = random.randint(1, 10)
    duration = random.randint(1, 30)
    frequency = random.choice(['Once a day', 'Twice a day', 'As needed'])
    patient_id = generate_unique_id(patient_id_set, 100)

    data.append([prescription_id, consultation_id, dosage, duration, frequency, patient_id])

with open('csv/Prescription.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerows(data)
