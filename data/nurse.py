import csv
import random
from faker import Faker
from datetime import date, timedelta

# Initialize Faker for generating fake data
fake = Faker()

# Define the column names
columns = ['nurse_id', 'emp_id', 'shift', 'shiftDate', 'surgerySkill', 'name', 'years', 'surgeryType']


# Generate random data for each column
data = []
for _ in range(100):  # You can adjust the number of rows as needed
    nurse_id = random.randint(1, 100)
    emp_id = random.randint(0, 100)
    shift = random.choice(['Morning', 'Afternoon', 'Night'])
    shiftDate = (date.today() + timedelta(days=random.randint(1, 30))).strftime('%Y-%m-%d')
    surgerySkill = fake.random_element(elements=('Cardiology', 'Neurology', 'Orthopedics', 'General Surgery'))
    name = fake.name()
    years = random.randint(1, 30)
    surgeryType = fake.random_element(elements=('Heart Surgery', 'Brain Surgery', 'Knee Replacement', 'Appendectomy'))

    data.append([nurse_id, emp_id, shift, shiftDate, surgerySkill, name, years, surgeryType])

# Write the data to a CSV file
with open('csv/nurse.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerows(data)


