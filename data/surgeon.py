import csv
import random
from faker import Faker

fake = Faker()

columns = ['surgeon_id', 'contractID', 'specialty']

data = []
for _ in range(100):
    surgeon_id = random.randint(0, 100)
    contractID = random.randint(0, 100)
    specialty = fake.random_element(elements=('Cardiology', 'Neurology', 'Orthopedics', 'General Surgery'))

    data.append([surgeon_id, contractID, specialty])

with open('csv/Surgeon.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerows(data)
