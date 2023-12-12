import csv
import random
from faker import Faker

fake = Faker()

columns = ['type_id', 'location', 'specialNeeds', 'surgerySkillID', 'type']

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

type_id_set = set()
surgery_skill_id_set = set()

for idx in range(100):
    type_id = None
    while type_id is None or type_id in type_id_set:
        type_id = random.randint(1, 100)  # Adjust the range as needed
    type_id_set.add(type_id)

    location = fake.city()
    special_needs = random.choice(special_needs_phrases)
    
    surgery_skill_id = None
    while surgery_skill_id is None or surgery_skill_id in surgery_skill_id_set:
        surgery_skill_id = random.randint(1, 100)  # Match with SurgerySkill ID range
    surgery_skill_id_set.add(surgery_skill_id)
    
    surgery_skill = random.choice(surgery_skills)

    data.append([type_id, location, special_needs, surgery_skill_id, surgery_skill])

with open('csv/SurgeryType.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerows(data)
