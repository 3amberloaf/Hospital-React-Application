import csv
import random
from faker import Faker
from datetime import date, timedelta
from uniqueID import generate_unique_id  # You will need to define generate_unique_id

fake = Faker()

columns = ['surgery_id', 'surgeonID', 'typeID', 'date', 'theatre', 'patient_id']

surgery_id_set = set()
surgeon_id_set = set()
typeID_set = set()
patient_id_set = set()

data = []
for _ in range(100):
    surgery_id = generate_unique_id(surgery_id_set, 100)
    surgeonID = generate_unique_id(surgeon_id_set, 100)
    typeID = generate_unique_id(typeID_set, 999) + 7000  # Adjust the range and lower bound as needed
    surgery_date = (date.today() - timedelta(days=random.randint(1, 30))).strftime('%Y-%m-%d')
    theatre = fake.random_element(elements=('Operating Room 1', 'Operating Room 2', 'Operating Room 3'))
    patient_id = generate_unique_id(patient_id_set, 100)

    data.append([surgery_id, surgeonID, typeID, surgery_date, theatre, patient_id])

with open('csv/Surgery.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerows(data)
