import csv
import random
from uniqueID import generate_unique_id

columns = ['medicine_id', 'name', 'usage', 'corporation_id', 'quantity', 'quantityOrdered', 'severity', 'unitCost']

name_samples = ['MedicineA', 'MedicineB', 'MedicineC', 'MedicineD', 'MedicineE']
usage_samples = ['Oral', 'Injection', 'Topical', 'Inhalation', 'Ophthalmic']
severity_samples = ['Low', 'Medium', 'High']

medicine_id_set = set()
corporation_id_set = set()

with open('csv/medicine.csv', mode='w', newline='') as file:
    writer = csv.DictWriter(file, fieldnames=columns)
    writer.writeheader()

    for _ in range(100):
        medicine_id = generate_unique_id(medicine_id_set, 100)
        corporation_id = generate_unique_id(corporation_id_set, 100)
        
        writer.writerow({
            'medicine_id': medicine_id,
            'name': random.choice(name_samples),
            'usage': random.choice(usage_samples),
            'corporation_id': corporation_id,
            'quantity': random.randint(1, 100),
            'quantityOrdered': random.randint(10, 500),
            'severity': random.choice(severity_samples),
            'unitCost': round(random.uniform(1.00, 100.00), 2)
        })
