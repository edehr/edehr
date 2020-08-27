# Make Medications

> Tool to create the medications lookahead "database"

The scripts in this folder convert a static "database" of medications into a new list
that is optimized for use in a lookahead api.

The drug.txt file comes from
[https://www.canada.ca/en/health-canada/services/drugs-health-products/drug-products/drug-product-database/what-data-extract-drug-product-database.html](https://www.canada.ca/en/health-canada/services/drugs-health-products/drug-products/drug-product-database/what-data-extract-drug-product-database.html)

At this time the server api has a basic lookup api call
```
http://localhost:27000/lookahead/medications/tylenol
``` 

Next will change the api to return JSON with more fields from the database.


## Setup and usage
1. Download the allfiles.zip file and unnpack int the makeMeds/rawData folder
2. Run the script 
    ```bash
    node convertMedication < rawData/drug.txt | sort > medicationsList.csv
    ```
3. copy ```medicationsList.csv``` to /server/src/mcr/lookahead ready for the lookahead controller to use