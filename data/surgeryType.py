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

for idx in range(0, 100): 
    location = fake.city()
    special_needs = random.choice(special_needs_phrases)
    surgery_skill = random.choice(surgery_skills)
    surgery_skill_id = random.randint(0, 100)  # Match with SurgerySkill ID range

    data.append([idx, location, special_needs, surgery_skill_id, surgery_skill])

with open('csv/SurgeryType.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerows(data)
