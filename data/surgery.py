import csv
import random
from faker import Faker
from datetime import date, timedelta
from uniqueID import generate_unique_id  # You will need to define generate_unique_id

fake = Faker()

# Define a mapping of surgery specialties to typeIDs
surgery_specialty_to_typeID = {
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

columns = ['surgery_id', 'surgeonID', 'typeID', 'date', 'theatre', 'patient_id']

surgery_id_set = set()
surgeon_id_set = set()
patient_id_set = set()

data = []
for _ in range(100):
    surgery_id = generate_unique_id(surgery_id_set, 100)
    surgeonID = generate_unique_id(surgeon_id_set, 100)
    
    # Randomly select a surgery specialty from the mapping and get its corresponding typeID
    surgery_specialty = random.choice(list(surgery_specialty_to_typeID.keys()))
    typeID = surgery_specialty_to_typeID[surgery_specialty]
    
    surgery_date = (date.today() - timedelta(days=random.randint(1, 30))).strftime('%Y-%m-%d')
    theatre = fake.random_element(elements=('Operating Room 1', 'Operating Room 2', 'Operating Room 3'))
    patient_id = generate_unique_id(patient_id_set, 100)

    data.append([surgery_id, surgeonID, typeID, surgery_date, theatre, patient_id])

with open('csv/Surgery.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerows(data)
