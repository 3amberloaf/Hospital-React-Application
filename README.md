1. Set up my React Application

```
npx create-react-app patient-management-app
cd patient-management-app
npm start

```

2. Set up the structure of application with folders/files under `src`

3. Add js to the files

4. Integrate  through `app.js` and style with css

5. Start the app 

```
npm start
```


# Create an API

1. Initialize a New Node.js Project

```
mkdir my-api
cd my-api
npm init -y
```

2. Install Express.js

```
npm install express
```

3. Configure node.js application with sql

```
npm install mysql2
```

# Set up routes to new pages

1. Import React Router and set it up at root of project

```
import ReactDOM from 'react-dom';
```

# Create the fake data

To ensure that each row in the CSV files has a unique primary key, we have to generate the keys sequentially rather than randomly. 

Random 
- This can cause duplicate primary keys
    ```
    # Write 100 rows with random values for each column
    for _ in range(100):
        writer.writerow({
            'emp_id': random.randint(1, emp_id_range),                  # Random emp_id
            'name': random.choice(name_samples),                        # Random name
            'phonenumber': random.choice(phone_number_samples),         # Random phonenumber
            'salary': random.randint(salary_range[0], salary_range[1]),  # Random salary
            'ssn': random.choice(ssn_samples),                         # Random ssn
            'gender': random.choice(gender_samples),                   # Random gender
            'address': random.choice(address_samples),                 # Random address from the US
            'type': random.choice(type_samples)                        # Random type 'full-time' or 'part-time'
        })
    ```

Sequentially
- Ensures uniqueness

```
for emp_id in range(1, 101):
        writer.writerow({
            'emp_id': emp_id,                                             # Sequential emp_id
            'name': random.choice(name_samples),                          # Random name
            'phonenumber': random.choice(phone_number_samples),           # Random phonenumber
            'salary': random.randint(salary_range[0], salary_range[1]),   # Random salary
            'ssn': random.choice(ssn_samples),                            # Random ssn
            'gender': random.choice(gender_samples),                      # Random gender
            'address': random.choice(address_samples),                    # Random address
            'type': random.choice(type_samples)                           # Random type 'full-time' or 'part-time'
        })
```