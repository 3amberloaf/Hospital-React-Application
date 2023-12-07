import csv
import random


columns = ['medicine_id', 'name', 'usage', 'corporation_id', 'quantity', 'quantityOrdered', 'severity', 'unitCost']

name_samples = ['MedicineA', 'MedicineB', 'MedicineC', 'MedicineD', 'MedicineE']
usage_samples = ['Oral', 'Injection', 'Topical', 'Inhalation', 'Ophthalmic']
severity_samples = ['Low', 'Medium', 'High']

data = []

for idx in range(100): 
    medicine_id = random.randint(1, 100)
    name = random.choice(name_samples)
    usage = random.choice(usage_samples)
    corporation_id = random.randint(1, 100)
    quantity = random.randint(1, 100)
    quantity_ordered = random.randint(10, 500)
    severity = random.choice(severity_samples)
    unit_cost = round(random.uniform(1.00, 100.00), 2)

    data.append([medicine_id, name, usage, corporation_id, quantity, quantity_ordered, severity, unit_cost])

with open('csv/medicine.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerows(data)
