import random
import csv
import string

columns = ['bed_id', 'bed_letter', 'roomNumber', 'unit', 'wing']

data = []

# Define the range for bed_id and letters
id_range = 100
letters = string.ascii_uppercase

for _ in range(100):
    data.append([
        random.randint(0, id_range),          # Random number for bed_id
        random.choice(letters),                   # Random letter for bed_letter
        random.randint(0, id_range),     # Random number for roomNumber (assuming room_number_range is defined)
        random.choice(letters),                   # Random letter for unit
        random.choice(letters)                    # Random letter for wing
    ])

with open('csv/clinicBed.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerows(data)
