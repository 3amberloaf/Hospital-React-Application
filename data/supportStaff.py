import csv
import random
from faker import Faker
from uniqueID import generate_unique_id  # You will need to define generate_unique_id

fake = Faker()

columns = ['emp_id', 'staff_id', 'type']

emp_id_set = set()
staff_id_set = set()

# Function to generate a unique ID
def generate_unique_id(existing_ids):
    while True:
        new_id = random.randint(1, 100)  # Adjust the range as needed
        if new_id not in existing_ids:
            existing_ids.add(new_id)
            return new_id

data = []
for _ in range(100):
    empl_id = generate_unique_id(emp_id_set)
    staff_id = generate_unique_id(staff_id_set)
    type = fake.random_element(elements=('Nurse', 'Technician', 'Administrative'))

    data.append([empl_id, staff_id, type])

with open('csv/SupportStaff.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerows(data)
