import csv
import random
from faker import Faker
from datetime import date, timedelta
from uniqueID import generate_unique_id
fake = Faker()

columns = ['patient_id', 'name', 'address', 'admittedDate', 'bedID', 'bloodType', 'dob', 'duration', 'gender', 'primaryPhysician', 'ssn']

patient_id_set = set()
bed_id_set = set()
ssn_set = set()

def generate_ssn(patient_id):
    return f"{patient_id:03d}-00-{1000 + patient_id}"

data = []
for _ in range(100):
    patient_id = generate_unique_id(patient_id_set, 100)  # You need to define generate_unique_id
    name = fake.name()
    address = fake.address()
    admission_date = (date.today() - timedelta(days=random.randint(1, 365))).strftime('%Y-%m-%d')
    bedID = generate_unique_id(bed_id_set, 100)  # You need to define generate_unique_id
    bloodType = random.choice(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    dob = fake.date_of_birth(minimum_age=18, maximum_age=90).strftime('%Y-%m-%d')
    duration = random.randint(1, 30)
    gender = random.choice(['Male', 'Female'])
    primaryPhysician = fake.name()
    ssn = generate_ssn(patient_id)

    data.append([patient_id, name, address, admission_date, bedID, bloodType, dob, duration, gender, primaryPhysician, ssn])

with open('csv/Patient.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerows(data)
