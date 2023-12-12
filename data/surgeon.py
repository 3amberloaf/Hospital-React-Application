import csv
import random
from faker import Faker
from uniqueID import generate_unique_id  # You will need to define generate_unique_id

fake = Faker()

columns = ['surgeon_id', 'contract_id', 'specialty']

surgeon_id_set = set()
contract_id_set = set()

# Function to generate a unique ID
def generate_unique_id(existing_ids):
    while True:
        new_id = random.randint(1, 100)  # Adjust the range as needed
        if new_id not in existing_ids:
            existing_ids.add(new_id)
            return new_id

data = []
for _ in range(100):
    surgeon_id = generate_unique_id(surgeon_id_set)
    contract_id = generate_unique_id(contract_id_set)
    specialty = fake.random_element(elements=('Cardiology', 'Neurology', 'Orthopedics', 'General Surgery'))

    data.append([surgeon_id, contract_id, specialty])

with open('csv/Surgeon.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerows(data)
