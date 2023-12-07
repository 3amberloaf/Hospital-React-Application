import csv
import random
from faker import Faker

fake = Faker()

columns = ['physician_id', 'empl_id', 'name', 'specialty', 'type']

data = []
for _ in range(100):
    physician_id = random.randint(0, 100)
    empl_id = random.randint(0, 100)
    name = fake.name()
    specialty = fake.random_element(elements=('Cardiology', 'Neurology', 'Orthopedics', 'General Surgery'))
    type = fake.random_element(elements=('Surgeon', 'Physician'))

    data.append([physician_id, empl_id, name, specialty, type])

with open('csv/Physician.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerows(data)
