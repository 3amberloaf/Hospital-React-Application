import csv
import random
from faker import Faker  # Import Faker for generating fake data

fake = Faker()  # Initialize Faker

# Define the columns explicitly
columns = ['emp_id', 'name', 'phonenumber', 'salary', 'ssn', 'gender', 'address', 'type']

# Placeholder data ranges
phone_number_samples = ['908-555-0100', '732-555-0101', '732-555-0102', '908-555-0103', '732-555-0104']
salary_range = [40000, 150000]
gender_samples = ['Male', 'Female', 'Non-Binary']
address_samples = [
    '123 Elm St, Springfield, IL',
    '456 Maple Ave, Anytown, OH',
    '789 Oak St, Smallville, KS',
    '101 Pine Rd, Metropolis, NY', 
    '202 Birch St, Centerville, CA',
    '303 Cedar Blvd, Hill Valley, NV',
    '404 Spruce Ln, Gotham, NJ',
    '505 Walnut St, Star City, TX',
    '606 Chestnut Way, Sunnydale, FL',
    '707 Ash Rd, Twin Peaks, WA'
]
type_samples = ['full-time', 'part-time']

def generate_ssn(emp_id):
    return f"{emp_id:03d}-00-{1000 + emp_id}"

# Write to a new CSV file with the specified columns
with open('csv/employee.csv', mode='w', newline='') as file:
    writer = csv.DictWriter(file, fieldnames=columns)
    # Write the header
    writer.writeheader()

    # Write 100 rows with sequential emp_id, unique SSN, and random values for other columns
    for emp_id in range(1, 101):
        writer.writerow({
            'emp_id': emp_id,                                             # Sequential emp_id
            'name': fake.name(),                          # Random name generated by Faker
            'phonenumber': random.choice(phone_number_samples),           # Random phonenumber
            'salary': random.randint(salary_range[0], salary_range[1]),   # Random salary
            'ssn': generate_ssn(emp_id),                                  # Unique SSN
            'gender': random.choice(gender_samples),                      # Random gender
            'address': random.choice(address_samples),                    # Random address
            'type': random.choice(type_samples)                           # Random type 'full-time' or 'part-time'
        })
