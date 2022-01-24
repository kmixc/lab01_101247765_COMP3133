//Oliver Kmiec
//101247665
//Full Stack Development II

const fs = require('fs')
const csv = require('csv-parser');

//importing data from csv
const data = 'input_countries.csv'
const countryCheck = ['Canada', 'United States']

const title = 'Country,Year,Population'

// reading data from input countries
fs.createReadStream(data)
    .pipe(csv())
    .on('data', (row) => {
        if (countryCheck.includes(row.country)) {
            file = row.country + '.csv'
            fs.appendFileSync(file, Object.values(row).join(",") + '\n')
        }
    })
    .on('end', () => {
        console.log('CSV files Loaded');
    });

// remove files if they already exist
for (let country of countryCheck) {
    file = country + '.csv'
    try {
        fs.unlinkSync(file)
        console.log(file, 'deleted')
    } catch (err) {
        console.log(file, 'does not exist')
    }

    //appending content
    fs.appendFileSync(file, title + '\n')
}