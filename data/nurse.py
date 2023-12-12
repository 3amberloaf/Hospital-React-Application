import csv
import random
from faker import Faker
from datetime import date, timedelta
from uniqueID import generate_unique_id

# Initialize Faker for generating fake data
fake = Faker()

# Define the column names
columns = ['nurse_id', 'emp_id', 'shift', 'shiftDate', 'surgerySkill', 'name', 'years', 'surgeryType']

nurse_id_set = set()
emp_id_set = set()

# Write the data to a CSV file
with open('csv/nurse.csv', mode='w', newline='') as file:
    writer = csv.DictWriter(file, fieldnames=columns)
    writer.writeheader()

    for _ in range(100):  # You can adjust the number of rows as needed
        nurse_id = generate_unique_id(nurse_id_set, 100)
        emp_id = generate_unique_id(emp_id_set, 100)
        shift = random.choice(['Morning', 'Afternoon', 'Night'])
        shiftDate = (date.today() + timedelta(days=random.randint(1, 30))).strftime('%Y-%m-%d')
        surgerySkill = fake.random_element(elements=('Cardiology', 'Neurology', 'Orthopedics', 'General Surgery'))
        name = fake.name()
        years = random.randint(1, 30)
        surgeryType = fake.random_element(elements=('Heart Surgery', 'Brain Surgery', 'Knee Replacement', 'Appendectomy'))

        writer.writerow({
            'nurse_id': nurse_id,
            'emp_id': emp_id,
            'shift': shift,
            'shiftDate': shiftDate,
            'surgerySkill': surgerySkill,
            'name': name,
            'years': years,
            'surgeryType': surgeryType
        })
