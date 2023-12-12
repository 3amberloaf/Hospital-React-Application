import csv
import random
from faker import Faker
from uniqueID import generate_unique_id  # You will need to define generate_unique_id

fake = Faker()

columns = ['physician_id', 'emp_id', 'name', 'specialty', 'type']

physician_id_set = set()
emp_id_set = set()

data = []
for _ in range(100):
    physician_id = generate_unique_id(physician_id_set, 100)
    emp_id = generate_unique_id(emp_id_set, 100)
    name = fake.name()
    specialty = fake.random_element(elements=('Cardiology', 'Neurology', 'Orthopedics', 'General Surgery'))
    type = fake.random_element(elements=('Surgeon', 'Physician'))

    data.append([physician_id, emp_id, name, specialty, type])

with open('csv/Physician.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerows(data)
