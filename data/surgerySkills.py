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

surgery_skill_counter = 1

for skill in surgery_skills:
    data.append([surgery_skill_counter, skill])
    surgery_skill_counter += 1

with open('csv/SurgerySkill.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerows(data)
