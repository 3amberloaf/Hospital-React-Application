import csv
import random
from uniqueID import generate_unique_id

# Define the columns explicitly
columns = ['diagnosisId', 'consultation_id', 'illness_id', 'comment']

# Placeholder data ranges
id_range = 100

# Placeholder comments for 'comment', for demonstration purposes
comments_samples = [
    'Patient admitted for routine check-up.',
    'Consultation for flu-like symptoms.',
    'Follow-up visit after surgery.',
    'Emergency admission due to severe allergic reaction.',
    'Diagnostic tests ordered for suspected condition.',
    'Review of treatment plan for chronic illness.',
    'Physical examination for sports clearance.',
    'Initial assessment for reported pain.',
    'Regular therapy session for ongoing treatment.',
    'Discharge summary after hospitalization.'
]

consultation_id_set = set()
illness_id_set = set()
diagnosis_id_set = set()

# Write to a new CSV file
with open('csv/diagnosis.csv', mode='w', newline='') as file:
    writer = csv.DictWriter(file, fieldnames=columns)
    writer.writeheader()

    for _ in range(100):
        # Generate and store unique IDs
        consultation_id = generate_unique_id(consultation_id_set, id_range)
        illness_id = generate_unique_id(illness_id_set, id_range)
        diagnosis_id = generate_unique_id(diagnosis_id_set, id_range)

        # Write a row with the generated IDs and a random comment
        writer.writerow({
            'diagnosisId': diagnosis_id,
            'consultation_id': consultation_id,
            'illness_id': illness_id,
            'comment': random.choice(comments_samples)
        })