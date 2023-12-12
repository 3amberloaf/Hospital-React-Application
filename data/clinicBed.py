import random
import csv
import string

columns = ['bed_id', 'bed_letter', 'roomNumber', 'unit', 'wing']
letters = string.ascii_uppercase

with open('csv/clinicBed.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(columns)
    
    for bed_id in range(1, 101):
        writer.writerow([
            bed_id,                                  # Sequential number for bed_id
            random.choice(letters),                  # Random letter for bed_letter
            bed_id,                 # Random number for roomNumber
            random.choice(letters),                  # Random letter for unit
            random.choice(letters)                   # Random letter for wing
        ])
