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

for idx in range(0, 100): 
    skill = random.choice(surgery_skills)
    data.append([idx, skill])

with open('csv/SurgerySkill.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerows(data)
