import csv
import random

corporation_names_samples = ['Healthy People', 'We love Health', 'Hospitals Unite']
id_range = 100
headquarters_samples = [
    'Newark, NJ', 'Houston, TX', 'Atlanta, GA', 'Seattle, WA', 'Miami, FL', 
    'Chicago, IL', 'Denver, CO', 'Phoenix, AZ', 'Los Angeles, CA', 'Boston, MA'
]

# Define the range for percentOwnership (from 0 to 100)
percent_ownership_range = (0, 100)

# Write to the CSV file again with the updated headquarters values
with open('csv/corporation.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    # Write the header
    writer.writerow(['corporation_id', 'name', 'headquarters', 'percentOwnership'])

    # Write 100 rows with random values for each column
    for _ in range(100):
        writer.writerow([
            random.randint(1, id_range),                  # Random corporation_id
            random.choice(corporation_names_samples),     # Random name
            random.choice(headquarters_samples),          # Random headquarters from the updated list
            f"{random.uniform(*percent_ownership_range):.2f}%"  # Random percentOwnership formatted as a percentage string
        ])
