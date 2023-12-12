import csv
import random
from faker import Faker
from uniqueID import generate_unique_id

fake = Faker()

surgery_skills = {
    'General Surgery': 1,
    'Cardiac Surgery': 2,
    'Neurological Surgery': 3,
    'Orthopedic Surgery': 4,
    'Pediatric Surgery': 5,
    'Plastic Surgery': 6,
    'Vascular Surgery': 7,
    'Gynecological Surgery': 8,
    'Urological Surgery': 9,
    'Ophthalmic Surgery': 10
}

columns = ['surgeon_id', 'contract_id', 'specialty']

surgeon_counter = 1
contract_id_set = set()

data = []
for _ in range(100):
    surgeon_id = surgeon_counter
    contract_id = generate_unique_id(contract_id_set, 100)
    specialty = random.choice(list(surgery_skills.keys()))  # Randomly select a specialty from the keys of the dictionary

    data.append([surgeon_id, contract_id, surgery_skills[specialty]])  # Use the mapped ID value

    surgeon_counter += 1

with open('csv/Surgeon.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerows(data)
