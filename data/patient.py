import csv
import random
from faker import Faker
from datetime import date, timedelta

fake = Faker()

columns = ['patient_id', 'name', 'address', 'addmittedDate', 'bedID', 'bloodType', 'dob', 'duration', 'gender', 'primaryPhysician', 'ssn']

data = []
for _ in range(100):
    patient_id = random.randint(0, 100)
    name = fake.name()
    address = fake.address()
    admission_date = (date.today() - timedelta(days=random.randint(1, 365))).strftime('%Y-%m-%d')
    bedID = random.randint(1, 100)
    bloodType = random.choice(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    dob = fake.date_of_birth(minimum_age=18, maximum_age=90).strftime('%Y-%m-%d')
    duration = random.randint(1, 30)
    gender = random.choice(['Male', 'Female'])
    primaryPhysician = fake.name()
    ssn = fake.ssn()

    data.append([patient_id, name, address, admission_date, bedID, bloodType, dob, duration, gender, primaryPhysician, ssn])

with open('csv/Patient.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerows(data)
