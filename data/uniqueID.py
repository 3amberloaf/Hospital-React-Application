import random

# Function to generate a unique ID
def generate_unique_id(existing_ids, id_range):
    while True:
        new_id = random.randint(1, id_range)
        if new_id not in existing_ids:
            existing_ids.add(new_id)
            return new_id