import csv
import random
from faker import Faker
from datetime import date, timedelta

fake = Faker()

columns = ['surgery_id', 'surgeonID', 'typeID', 'date', 'theatre', 'patient_id']

data = []
for _ in range(100):
    surgery_id = random.randint(0, 100)
    surgeonID = random.randint(0, 100)
    patient_id = random.randint(0, 100)
    typeID = random.randint(7000, 7999)
    surgery_date = (date.today() - timedelta(days=random.randint(1, 30))).strftime('%Y-%m-%d')
    theatre = fake.random_element(elements=('Operating Room 1', 'Operating Room 2', 'Operating Room 3'))

    data.append([surgery_id, surgeonID, typeID, surgery_date, theatre, patient_id])

with open('csv/Surgery.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerows(data)
