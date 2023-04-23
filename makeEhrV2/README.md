# EdEHR -- makeEHR

## Description

This is a set of scripts to generate the EHR pages from the ehrDefinitions. Its motivation and usage is explained in the [Code Generation Documentation](../code_generation.md).

## Instructions

Run ```deploy.sh``` to generate the client side routes (inside and outside) and inside menu. This script also generates all the EHR pages.

Inside refers to the EHR pages.
Outside refers to the LMS pages.

## auto pull from google project

The auto pull from the gsheets is set up only for the main developer. More users can be added via the project's Oauth Consent page. 

To reset the token first delete the .token.json file. Then rerun the deploy script. You will see a url to copy and paste into a browser.  Authenticate and you will be sent to another URL that will fail (it's localhost).  Copy the code from the url from the browser's address bar.  Past the code into the command line that is waiting for the code. Then hit return to continue.

For more information on how to maintain and extend it, please check [The Code Generation Documentation](../code_generation.md).