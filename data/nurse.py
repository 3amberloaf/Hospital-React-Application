import csv
import random
from faker import Faker
from datetime import date, timedelta
from uniqueID import generate_unique_id

# Initialize Faker for generating fake data
fake = Faker()

# Define the surgery skills and their corresponding IDs
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


# Define the column names
columns = ['nurse_id', 'emp_id', 'shift', 'shiftDate', 'surgerySkill_id', 'name', 'years', 'surgery_type']

nurse_counter = 1
emp_id_set = set()
surgery_type_counter = 1

# Write the data to a CSV file
with open('csv/nurse.csv', mode='w', newline='') as file:
    writer = csv.DictWriter(file, fieldnames=columns)
    writer.writeheader()

    for _ in range(100):  # You can adjust the number of rows as needed
        nurse_id = nurse_counter
        emp_id = generate_unique_id(emp_id_set, 100)
        shift = random.choice(['Morning', 'Afternoon', 'Night'])
        shiftDate = (date.today() + timedelta(days=random.randint(1, 30))).strftime('%Y-%m-%d')
        surgerySkill = fake.random_element(elements=list(surgery_skills.keys()))  # Use the keys of the surgery_skills dictionary
        name = fake.name()
        years = random.randint(1, 30)
        surgery_type = surgery_skills[surgerySkill]  # Map surgerySkill to surgery_skills dictionary to get the ID

        writer.writerow({
            'nurse_id': nurse_id,
            'emp_id': emp_id,
            'shift': shift,
            'shiftDate': shiftDate,
            'surgerySkill_id': surgery_type,  # Use the corrected column name here
            'name': name,
            'years': years,
            'surgery_type': surgery_type  # Corrected the column name here
        })
        surgery_type_counter += 1  # Increment the surgery_type_counter inside the loop
        nurse_counter += 1
