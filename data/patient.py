import csv
import random
from faker import Faker
from datetime import date, timedelta

fake = Faker()

columns = ['patient_id', 'name', 'address', 'admittedDate', 'bedID', 'bloodType', 'dob', 'duration', 'gender', 'primaryPhysician', 'ssn']

bed_id_set = set()
ssn_set = set()

def generate_ssn(patient_id):
    return f"{patient_id:03d}-00-{1000 + patient_id}"

patient_id_counter = 1
bed_id_counter = 1

# Create a list to store physician IDs
physician_ids = list(range(1, 101))

with open('csv/patient.csv', mode='w', newline='') as file:
    writer = csv.DictWriter(file, fieldnames=columns)
    writer.writeheader()
    
    for _ in range(100):  # Loop 100 times
        name = fake.name()
        address = fake.address()
        admission_date = (date.today() - timedelta(days=random.randint(1, 365))).strftime('%Y-%m-%d')
        bedID = bed_id_counter
        bed_id_counter += 1
        bloodType = random.choice(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        dob = fake.date_of_birth(minimum_age=18, maximum_age=90).strftime('%Y-%m-%d')
        duration = random.randint(1, 30)
        gender = random.choice(['Male', 'Female'])
        
        # Choose a primary physician from the list of physician IDs
        primary_physician_id = random.choice(physician_ids)
        
        ssn = generate_ssn(patient_id_counter)
        
        writer.writerow({
            'patient_id': patient_id_counter,
            'name': name,
            'address': address,
            'admittedDate': admission_date,
            'bedID': bedID,
            'bloodType': bloodType,
            'dob': dob,
            'duration': duration,
            'gender': gender,
            'primaryPhysician': primary_physician_id,  # Reference physician by ID
            'ssn': ssn
        })

        patient_id_counter += 1
