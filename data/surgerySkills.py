import csv
import random

columns = ['surgerySkillID', 'description']

surgery_skills = [
    'General Surgery',
    'Cardiac Surgery',
    'Neurological Surgery',
    'Orthopedic Surgery',
    'Pediatric Surgery',
    'Plastic Surgery',
    'Vascular Surgery',
    'Gynecological Surgery',
    'Urological Surgery',
    'Ophthalmic Surgery',
]

data = []

surgery_skill_ids = set()  # To store unique surgerySkillID values

for idx in range(100):
    surgery_skill_id = None
    while surgery_skill_id is None or surgery_skill_id in surgery_skill_ids:
        surgery_skill_id = random.randint(1, 100)  # Adjust the range as needed
    surgery_skill_ids.add(surgery_skill_id)
    
    skill = random.choice(surgery_skills)
    data.append([surgery_skill_id, skill])

with open('csv/SurgerySkill.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerows(data)
