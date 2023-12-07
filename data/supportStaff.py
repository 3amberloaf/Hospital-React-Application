import csv
import random
from faker import Faker

fake = Faker()

columns = ['empl_id', 'staff_id', 'type']

data = []
for _ in range(100):
    empl_id = random.randint(0, 100)
    staff_id = random.randint(0, 100)
    type = fake.random_element(elements=('Nurse', 'Technician', 'Administrative'))

    data.append([empl_id, staff_id, type])

with open('csv/SupportStaff.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerows(data)
