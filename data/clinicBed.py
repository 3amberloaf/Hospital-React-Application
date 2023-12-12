import csv
import random
import string
from uniqueID import generate_unique_id

columns = ['bed_id', 'bed_letter', 'roomNumber', 'unit', 'wing']
letters = string.ascii_uppercase

bed_id_set = set()
room_number_set = set()

with open('csv/clinicBed.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(columns)
    
    for bed_id in range(1, 101):
        new_bed_id = generate_unique_id(bed_id_set, 100)  # Generate a unique bed_id
        new_room_number = generate_unique_id(room_number_set, 100)  # Generate a unique roomNumber

        writer.writerow([
            new_bed_id,                                  # Sequential number for bed_id
            random.choice(letters),                     # Random letter for bed_letter
            new_room_number,                            # Sequential number for roomNumber
            random.choice(letters),                     # Random letter for unit
            random.choice(letters)                      # Random letter for wing
        ])
