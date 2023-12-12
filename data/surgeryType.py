import csv
import random
from faker import Faker

fake = Faker()

columns = ['surgery_type_id', 'location', 'specialNeeds', 'surgerySkillID', 'type']

surgery_skills = [
    'Cardiac Surgery',
    'Neurological Surgery',
    'Orthopedic Surgery',
    'General Surgery',
]

special_needs_phrases = [
    'Allergic to anesthesia',
    'Requires blood thinners',
    'High blood pressure',
    'Diabetic patient',
    'Severe allergies',
    'Previous surgery complications',
    'Heart condition',
    'Requires oxygen support',
    'History of clotting disorders',
    'Asthma',
    'Recent infections',
]

data = []

surgery_type_counter = 1
surgery_skill_id_set = set()

for idx in range(100):
    surgery_type = surgery_type_counter
    location = fake.city()
    special_needs = random.choice(special_needs_phrases)
    
    # Generate a unique surgery_skill_id within the valid range
    while True:
        surgery_skill_id = random.randint(1, 100)
        if surgery_skill_id not in surgery_skill_id_set:
            surgery_skill_id_set.add(surgery_skill_id)
            break
    
    surgery_skill = random.choice(surgery_skills)

    data.append([surgery_type, location, special_needs, surgery_skill_id, surgery_skill])
    surgery_type_counter += 1

with open('csv/SurgeryType.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerows(data)
