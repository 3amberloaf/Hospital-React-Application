import csv
import random

from uniqueID import generate_unique_id

corporation_names_samples = ['Healthy People', 'We love Health', 'Hospitals Unite']
id_range = 100
headquarters_samples = [
    'Newark, NJ', 'Houston, TX', 'Atlanta, GA', 'Seattle, WA', 'Miami, FL', 
    'Chicago, IL', 'Denver, CO', 'Phoenix, AZ', 'Los Angeles, CA', 'Boston, MA'
]

percent_ownership_range = (0, 100)

corporation_id_set = set()

with open('csv/corporation.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(['corporation_id', 'name', 'headquarters', 'percentOwnership'])

    for _ in range(100):
        corporation_id = generate_unique_id(corporation_id_set, id_range)
        writer.writerow([
            corporation_id,
            random.choice(corporation_names_samples),
            random.choice(headquarters_samples),
            f"{random.uniform(*percent_ownership_range):.2f}%"
        ])
