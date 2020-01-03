# Make Medications

> Tool to create the medications lookahead "database"

The scripts in this folder convert a static "database" of medications into a new list
that is optimized for use in a lookahead api.

The drug.txt file comes from
https://www.canada.ca/en/health-canada/services/drugs-health-products/drug-products/drug-product-database/what-data-extract-drug-product-database.html

Future enhancements are possible by obtaining all the files available and using the schema located 
here (https://www.canada.ca/en/health-canada/services/drugs-health-products/drug-products/drug-product-database/read-file-drug-product-database-data-extract.html)
and adding fields such as status, route, etc.

## Setup and usage
1. Copied the drugs.txt file from the client/public/assets/static-databases into this directory.
2. Run the script 
    ```bash
    node convertMedication < drug.txt | sort > medicationsList.csv
    ```
3. copy the results into place ready for the lookahead controller to use