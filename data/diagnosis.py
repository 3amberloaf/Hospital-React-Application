import csv
import random

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

# Write to a new CSV file with the specified columns
with open('csv/diagnosis.csv', mode='w', newline='') as file:
    writer = csv.DictWriter(file, fieldnames=columns)
    # Write the header
    writer.writeheader()

    # Write 100 rows with random values for each column
    for _ in range(100):
        writer.writerow({
            'diagnosisId': random.randint(1, id_range),      # Random diagnosisId
            'consultation_id': random.randint(1, id_range),  # Random consultation_id
            'illness_id': random.randint(1, id_range),       # Random illness_id
            'comment': random.choice(comments_samples)            # Random comment
        })

