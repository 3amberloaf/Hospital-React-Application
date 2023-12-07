import csv
import random

# Define the columns explicitly
columns = ['emp_id', 'name', 'phonenumber', 'salary', 'ssn', 'gender', 'address', 'type']

# Placeholder data ranges
emp_id_range = 100
name_samples = ['John Doe', 'Jane Smith', 'Alex Johnson', 'Maria Garcia', 'Chris Martin']
phone_number_samples = ['555-0100', '555-0101', '555-0102', '555-0103', '555-0104']
salary_range = [40000, 150000]
ssn_samples = ['123-45-6789', '987-65-4321', '111-22-3333', '222-33-4444', '333-44-5555']
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

# Write to a new CSV file with the specified columns
with open('csv/employee.csv', mode='w', newline='') as file:
    writer = csv.DictWriter(file, fieldnames=columns)
    # Write the header
    writer.writeheader()

    # Write 100 rows with random values for each column
    for _ in range(100):
        writer.writerow({
            'emp_id': random.randint(1, emp_id_range),                  # Random emp_id
            'name': random.choice(name_samples),                        # Random name
            'phonenumber': random.choice(phone_number_samples),         # Random phonenumber
            'salary': random.randint(salary_range[0], salary_range[1]),  # Random salary
            'ssn': random.choice(ssn_samples),                         # Random ssn
            'gender': random.choice(gender_samples),                   # Random gender
            'address': random.choice(address_samples),                 # Random address from the US
            'type': random.choice(type_samples)                        # Random type 'full-time' or 'part-time'
        })

