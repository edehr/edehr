/* eslint-disable */
const DEFS = {
  "demographics": {
    "pageDataKey": "demographics",
    "pIndex": "1",
    "hasGridForm": true,
    "pageChildren": [
      {
        "elementKey": "givenName",
        "formIndex": "1",
        "formCss": "grid-span-2-columns",
        "inputType": "text",
        "fqn": "demographics.givenName"
      },
      {
        "elementKey": "middleName",
        "formIndex": "1",
        "inputType": "text",
        "fqn": "demographics.middleName"
      },
      {
        "elementKey": "preferredName",
        "formIndex": "1",
        "formCss": "grid-span-2-columns",
        "inputType": "text",
        "fqn": "demographics.preferredName"
      },
      {
        "elementKey": "pronouns",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "she",
            "text": "She/Her/Hers"
          },
          {
            "key": "he",
            "text": "He/Him/His"
          },
          {
            "key": "they",
            "text": "They/Them/Theirs"
          },
          {
            "key": "ze",
            "text": "Ze/Hir/Hirs"
          },
          {
            "key": "none",
            "text": "I do not use a pronoun"
          },
          {
            "key": "other",
            "text": "Other, please ask"
          },
          {
            "key": "all",
            "text": "I use all gender pronouns"
          }
        ],
        "fqn": "demographics.pronouns"
      },
      {
        "elementKey": "familyName",
        "formIndex": "1",
        "formCss": "grid-span-2-columns",
        "inputType": "text",
        "fqn": "demographics.familyName"
      },
      {
        "elementKey": "mrn",
        "formIndex": "1",
        "inputType": "text",
        "fqn": "demographics.mrn"
      },
      {
        "elementKey": "personAge",
        "formIndex": "1",
        "inputType": "personAge",
        "fqn": "demographics.personAge"
      },
      {
        "elementKey": "dateOfBirth",
        "dependentOn": "age:personAge",
        "formIndex": "1",
        "inputType": "mainDOB",
        "fqn": "demographics.dateOfBirth"
      },
      {
        "elementKey": "languagePrimary",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "English",
            "text": "English"
          },
          {
            "key": "French",
            "text": "French"
          },
          {
            "key": "Spanish",
            "text": "Spanish"
          },
          {
            "key": "German",
            "text": "German"
          },
          {
            "key": "Chinese",
            "text": "Chinese"
          },
          {
            "key": "Other",
            "text": "Other"
          }
        ],
        "fqn": "demographics.languagePrimary"
      },
      {
        "elementKey": "birthSex",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "male",
            "text": "Male"
          },
          {
            "key": "fem",
            "text": "Female"
          },
          {
            "key": "inter",
            "text": "Intersex"
          }
        ],
        "fqn": "demographics.birthSex"
      },
      {
        "elementKey": "gender",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Unknown",
            "text": "Unknown"
          },
          {
            "key": "Female",
            "text": "Female"
          },
          {
            "key": "Male",
            "text": "Male"
          },
          {
            "key": "Transgender female",
            "text": "Transgender female"
          },
          {
            "key": "Transgender male",
            "text": "Transgender male"
          },
          {
            "key": "Undifferentiated",
            "text": "Undifferentiated"
          },
          {
            "key": "Prefer not to say",
            "text": "Prefer not to say"
          }
        ],
        "fqn": "demographics.gender"
      },
      {
        "elementKey": "legalGender",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "M",
            "text": "M"
          },
          {
            "key": "F",
            "text": "F"
          },
          {
            "key": "X",
            "text": "X"
          }
        ],
        "fqn": "demographics.legalGender"
      },
      {
        "elementKey": "height",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "cm",
        "fqn": "demographics.height",
        "suffixText": "cm"
      },
      {
        "elementKey": "weight",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "kg",
        "fqn": "demographics.weight",
        "suffixText": "kg"
      },
      {
        "elementKey": "religion",
        "formIndex": "1",
        "inputType": "text",
        "fqn": "demographics.religion"
      },
      {
        "elementKey": "martialStatus",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Married",
            "text": "Married"
          },
          {
            "key": "Single",
            "text": "Single"
          },
          {
            "key": "Life partner",
            "text": "Life partner"
          },
          {
            "key": "Divorced",
            "text": "Divorced"
          },
          {
            "key": "Separated",
            "text": "Separated"
          },
          {
            "key": "Widowed",
            "text": "Widowed"
          }
        ],
        "fqn": "demographics.martialStatus"
      },
      {
        "elementKey": "indigenousIdentifyAs",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Yes",
            "text": "Yes"
          },
          {
            "key": "No",
            "text": "No"
          }
        ],
        "fqn": "demographics.indigenousIdentifyAs"
      },
      {
        "elementKey": "streetAddress",
        "formIndex": "1",
        "formCss": "grid-span-2-columns",
        "inputType": "text",
        "fqn": "demographics.streetAddress"
      },
      {
        "elementKey": "city",
        "formIndex": "1",
        "inputType": "text",
        "fqn": "demographics.city"
      },
      {
        "elementKey": "country",
        "formIndex": "1",
        "inputType": "text",
        "fqn": "demographics.country"
      },
      {
        "elementKey": "postalCode",
        "formIndex": "1",
        "inputType": "text",
        "fqn": "demographics.postalCode"
      },
      {
        "elementKey": "noAddress",
        "defaultValue": "FALSE",
        "formIndex": "1",
        "inputType": "checkbox",
        "fqn": "demographics.noAddress"
      },
      {
        "elementKey": "phoneNumber",
        "formIndex": "1",
        "inputType": "text",
        "fqn": "demographics.phoneNumber"
      },
      {
        "elementKey": "emailAddress",
        "formIndex": "1",
        "inputType": "text",
        "fqn": "demographics.emailAddress"
      },
      {
        "elementKey": "occupationStudent",
        "formIndex": "1",
        "inputType": "text",
        "fqn": "demographics.occupationStudent"
      },
      {
        "elementKey": "phn",
        "formIndex": "1",
        "inputType": "text",
        "fqn": "demographics.phn"
      },
      {
        "elementKey": "patientService",
        "formIndex": "1",
        "inputType": "text",
        "fqn": "demographics.patientService"
      },
      {
        "elementKey": "nextOfKinName",
        "formIndex": "1",
        "inputType": "text",
        "fqn": "demographics.nextOfKinName"
      },
      {
        "elementKey": "nextOfKinRelationship",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Wife",
            "text": "Wife"
          },
          {
            "key": "Husband",
            "text": "Husband"
          },
          {
            "key": "Mother",
            "text": "Mother"
          },
          {
            "key": "Father",
            "text": "Father"
          },
          {
            "key": "Guardian",
            "text": "Guardian"
          },
          {
            "key": "Sister",
            "text": "Sister"
          },
          {
            "key": "Brother",
            "text": "Brother"
          },
          {
            "key": "Daughter",
            "text": "Daughter"
          },
          {
            "key": "Son",
            "text": "Son"
          },
          {
            "key": "Aunt",
            "text": "Aunt"
          },
          {
            "key": "Uncle",
            "text": "Uncle"
          },
          {
            "key": "Grandmother",
            "text": "Grandmother"
          },
          {
            "key": "Grandfather",
            "text": "Grandfather"
          },
          {
            "key": "Friend",
            "text": "Friend"
          },
          {
            "key": "Other",
            "text": "Other"
          }
        ],
        "fqn": "demographics.nextOfKinRelationship"
      },
      {
        "elementKey": "nextOfKinPhone",
        "formIndex": "1",
        "inputType": "text",
        "fqn": "demographics.nextOfKinPhone"
      },
      {
        "elementKey": "decisionMakerName",
        "formIndex": "1",
        "inputType": "text",
        "fqn": "demographics.decisionMakerName"
      },
      {
        "elementKey": "decisionMakerRelationship",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Spouse",
            "text": "Spouse"
          },
          {
            "key": "Child",
            "text": "Child"
          },
          {
            "key": "Parent",
            "text": "Parent"
          },
          {
            "key": "Sibling",
            "text": "Sibling"
          },
          {
            "key": "Grandparent",
            "text": "Grandparent"
          },
          {
            "key": "Grandchild",
            "text": "Grandchild"
          },
          {
            "key": "Friend",
            "text": "Friend"
          },
          {
            "key": "Anyone else related by partnership",
            "text": "Anyone else related by partnership"
          },
          {
            "key": "Public guardian and trustee employee",
            "text": "Public guardian and trustee employee"
          },
          {
            "key": "Other",
            "text": "Other"
          }
        ],
        "fqn": "demographics.decisionMakerRelationship"
      },
      {
        "elementKey": "decisionMakerPhone",
        "formIndex": "1",
        "inputType": "text",
        "fqn": "demographics.decisionMakerPhone"
      }
    ],
    "pageElements": {
      "pageForm": {
        "elementKey": "pageForm",
        "pageElementIndex": "1",
        "formKey": "pageForm",
        "fqn": "demographics.pageForm",
        "isPageForm": true,
        "ehr_groups": [
          {
            "elementKey": "personGroup",
            "formCss": "section-divider grid-left-to-right-3",
            "fqn": "demographics.personGroup",
            "gIndex": "1",
            "gChildren": [
              "givenName",
              "middleName",
              "preferredName",
              "pronouns",
              "familyName",
              "mrn",
              "personAge",
              "dateOfBirth",
              "languagePrimary",
              "birthSex",
              "gender",
              "legalGender",
              "height",
              "weight",
              "religion",
              "martialStatus",
              "indigenousIdentifyAs"
            ]
          },
          {
            "elementKey": "addressGroup",
            "formCss": "section-divider grid-left-to-right-3",
            "fqn": "demographics.addressGroup",
            "gIndex": "2",
            "gChildren": [
              "streetAddress",
              "city",
              "country",
              "postalCode",
              "noAddress",
              "phoneNumber",
              "emailAddress",
              "occupationStudent",
              "phn",
              "patientService"
            ]
          },
          {
            "elementKey": "kinGroup",
            "formCss": "grid-left-to-right-3",
            "fqn": "demographics.kinGroup",
            "gIndex": "3",
            "gChildren": [
              "nextOfKinName",
              "nextOfKinRelationship",
              "nextOfKinPhone",
              "decisionMakerName",
              "decisionMakerRelationship",
              "decisionMakerPhone"
            ]
          }
        ]
      }
    }
  },
  "allergies": {
    "pageDataKey": "allergies",
    "pIndex": "2",
    "formOption": "no-tabs",
    "hasGridTable": true,
    "hasGridForm": true,
    "pageChildren": [
      {
        "elementKey": "checkbox",
        "formIndex": "1",
        "inputType": "checkbox",
        "fqn": "allergies.checkbox"
      },
      {
        "elementKey": "text",
        "formIndex": "1",
        "inputType": "text",
        "fqn": "allergies.text"
      },
      {
        "elementKey": "allergyList_name",
        "formIndex": "2",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "allergies.name"
      },
      {
        "elementKey": "allergyList_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "allergyList_profession",
        "formIndex": "2",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "allergies.profession"
      },
      {
        "elementKey": "allergyList_day",
        "formIndex": "2",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "allergies.day"
      },
      {
        "elementKey": "allergyList_time",
        "formIndex": "2",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "allergies.time"
      },
      {
        "elementKey": "allergen",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "2",
        "fqn": "allergies.allergen"
      },
      {
        "elementKey": "reaction",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "3",
        "fqn": "allergies.reaction"
      }
    ],
    "pageElements": {
      "pageForm": {
        "elementKey": "pageForm",
        "pageElementIndex": "1",
        "formKey": "pageForm",
        "fqn": "allergies.pageForm",
        "isPageForm": true,
        "ehr_groups": [
          {
            "elementKey": "formGroup",
            "formCss": "grid-left-to-right-1",
            "fqn": "allergies.formGroup",
            "gIndex": "1",
            "gChildren": [
              "checkbox",
              "text"
            ]
          }
        ]
      },
      "allergyList": {
        "elementKey": "allergyList",
        "pageElementIndex": "2",
        "pageKey": "allergies",
        "tableKey": "allergyList",
        "isTable": true,
        "form": {
          "elementKey": "allergyList",
          "label": "Allergies",
          "addButtonText": "Add an allergy",
          "formKey": "allergyList",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "allergies.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "allergyList_name",
                "allergyList_profession",
                "allergyList_day",
                "allergyList_time"
              ]
            },
            {
              "elementKey": "cGroup",
              "formCss": "grid-left-to-right-3",
              "fqn": "allergies.cGroup",
              "gIndex": "2",
              "gChildren": [
                "allergen",
                "reaction"
              ]
            }
          ],
          "ehr_data": {
            "allergyList_name": "",
            "allergyList_profession": "",
            "allergyList_day": "",
            "allergyList_time": "",
            "allergen": "",
            "reaction": ""
          }
        },
        "fqn": "allergies.allergyList",
        "tableChildren": [
          "allergyList_id",
          "allergyList_day",
          "allergyList_time",
          "allergen",
          "reaction",
          "allergyList_name",
          "allergyList_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "medical": {
    "pageDataKey": "medical",
    "pIndex": "3",
    "hasGridForm": true,
    "pageChildren": [
      {
        "elementKey": "history",
        "formIndex": "1",
        "inputType": "textarea",
        "fqn": "medical.history"
      }
    ],
    "pageElements": {
      "pageForm": {
        "elementKey": "pageForm",
        "pageElementIndex": "1",
        "formKey": "pageForm",
        "fqn": "medical.pageForm",
        "isPageForm": true,
        "ehr_groups": [
          {
            "elementKey": "cGroup",
            "formCss": "grid-left-to-right-1",
            "fqn": "medical.cGroup",
            "gIndex": "1",
            "gChildren": [
              "history"
            ]
          }
        ]
      }
    }
  },
  "psychosocial": {
    "pageDataKey": "psychosocial",
    "pIndex": "4",
    "hasGridForm": true,
    "pageChildren": [
      {
        "elementKey": "history",
        "formIndex": "1",
        "inputType": "textarea",
        "fqn": "psychosocial.history"
      },
      {
        "elementKey": "diet",
        "formIndex": "1",
        "inputType": "textarea",
        "fqn": "psychosocial.diet"
      },
      {
        "elementKey": "livingSituation",
        "formIndex": "1",
        "inputType": "textarea",
        "fqn": "psychosocial.livingSituation"
      },
      {
        "elementKey": "employmentSchool",
        "formIndex": "1",
        "inputType": "textarea",
        "fqn": "psychosocial.employmentSchool"
      },
      {
        "elementKey": "hobbies",
        "formIndex": "1",
        "inputType": "textarea",
        "fqn": "psychosocial.hobbies"
      },
      {
        "elementKey": "exercise",
        "formIndex": "1",
        "inputType": "checkbox",
        "fqn": "psychosocial.exercise"
      },
      {
        "elementKey": "exerciseText",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "text",
        "fqn": "psychosocial.exerciseText"
      },
      {
        "elementKey": "exerciseSpacer",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "psychosocial.exerciseSpacer"
      },
      {
        "elementKey": "caffeineUse",
        "formIndex": "1",
        "inputType": "checkbox",
        "fqn": "psychosocial.caffeineUse"
      },
      {
        "elementKey": "caffeineUseText",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "text",
        "fqn": "psychosocial.caffeineUseText"
      },
      {
        "elementKey": "caffeineUseSpacer",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "psychosocial.caffeineUseSpacer"
      },
      {
        "elementKey": "tobaccoUse",
        "formIndex": "1",
        "inputType": "checkbox",
        "fqn": "psychosocial.tobaccoUse"
      },
      {
        "elementKey": "tobaccoUseText",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "text",
        "fqn": "psychosocial.tobaccoUseText"
      },
      {
        "elementKey": "tobaccoUseSpacer",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "psychosocial.tobaccoUseSpacer"
      },
      {
        "elementKey": "cannabisUse",
        "formIndex": "1",
        "inputType": "checkbox",
        "fqn": "psychosocial.cannabisUse"
      },
      {
        "elementKey": "cannabisUseText",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "text",
        "fqn": "psychosocial.cannabisUseText"
      },
      {
        "elementKey": "cannabisUseSpacer",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "psychosocial.cannabisUseSpacer"
      },
      {
        "elementKey": "alcoholUse",
        "formIndex": "1",
        "inputType": "checkbox",
        "fqn": "psychosocial.alcoholUse"
      },
      {
        "elementKey": "alcoholUseText",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "text",
        "fqn": "psychosocial.alcoholUseText"
      },
      {
        "elementKey": "alcoholUseSpacer",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "psychosocial.alcoholUseSpacer"
      },
      {
        "elementKey": "substanceUse",
        "formIndex": "1",
        "inputType": "checkbox",
        "fqn": "psychosocial.substanceUse"
      },
      {
        "elementKey": "substanceUseText",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "text",
        "fqn": "psychosocial.substanceUseText"
      },
      {
        "elementKey": "substanceUseSpacer",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "psychosocial.substanceUseSpacer"
      }
    ],
    "pageElements": {
      "pageForm": {
        "elementKey": "pageForm",
        "pageElementIndex": "1",
        "formKey": "pageForm",
        "fqn": "psychosocial.pageForm",
        "isPageForm": true,
        "ehr_groups": [
          {
            "elementKey": "cGroup",
            "formCss": "grid-left-to-right-1",
            "fqn": "psychosocial.cGroup",
            "gIndex": "1",
            "gChildren": [
              "history",
              "diet",
              "livingSituation",
              "employmentSchool",
              "hobbies"
            ]
          },
          {
            "elementKey": "cGroup2",
            "formCss": "grid-left-to-right-3",
            "fqn": "psychosocial.cGroup2",
            "gIndex": "2",
            "gChildren": [
              "exercise",
              "exerciseText",
              "exerciseSpacer",
              "caffeineUse",
              "caffeineUseText",
              "caffeineUseSpacer",
              "tobaccoUse",
              "tobaccoUseText",
              "tobaccoUseSpacer",
              "cannabisUse",
              "cannabisUseText",
              "cannabisUseSpacer",
              "alcoholUse",
              "alcoholUseText",
              "alcoholUseSpacer",
              "substanceUse",
              "substanceUseText",
              "substanceUseSpacer"
            ]
          }
        ]
      }
    }
  },
  "surgical": {
    "pageDataKey": "surgical",
    "pIndex": "5",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "physician",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "1",
        "fqn": "surgical.physician"
      },
      {
        "elementKey": "pastSurgery_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "timeSince",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "2",
        "fqn": "surgical.timeSince"
      },
      {
        "elementKey": "procedure",
        "formIndex": "1",
        "formCss": "grid-span-3-columns",
        "inputType": "textarea",
        "tableColumn": "3",
        "fqn": "surgical.procedure"
      },
      {
        "elementKey": "previousAdmissionsDate",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "1",
        "fqn": "surgical.previousAdmissionsDate"
      },
      {
        "elementKey": "previous_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "with",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "2",
        "fqn": "surgical.with"
      },
      {
        "elementKey": "details",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "3",
        "fqn": "surgical.details"
      },
      {
        "elementKey": "previousAdmissions",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "4",
        "fqn": "surgical.previousAdmissions"
      },
      {
        "elementKey": "comments",
        "formIndex": "2",
        "formCss": "grid-span-3-columns",
        "inputType": "textarea",
        "tableColumn": "5",
        "fqn": "surgical.comments"
      }
    ],
    "pageElements": {
      "pastSurgery": {
        "elementKey": "pastSurgery",
        "pageElementIndex": "1",
        "pageKey": "surgical",
        "tableKey": "pastSurgery",
        "isTable": true,
        "form": {
          "elementKey": "pastSurgery",
          "label": "Previous surgeries",
          "addButtonText": "Add a previous surgery",
          "formKey": "pastSurgery",
          "ehr_groups": [
            {
              "elementKey": "pastSurgery",
              "formCss": "grid-left-to-right-3",
              "fqn": "surgical.pastSurgery",
              "gIndex": "1",
              "gChildren": [
                "physician",
                "timeSince",
                "procedure"
              ]
            }
          ],
          "ehr_data": {
            "physician": "",
            "timeSince": "",
            "procedure": ""
          }
        },
        "fqn": "surgical.pastSurgery",
        "tableChildren": [
          "pastSurgery_id",
          "procedure",
          "physician",
          "timeSince"
        ]
      },
      "previous": {
        "elementKey": "previous",
        "pageElementIndex": "2",
        "pageKey": "surgical",
        "tableKey": "previous",
        "isTable": true,
        "form": {
          "elementKey": "previous",
          "label": "Previous appointments",
          "addButtonText": "Add a previous appointment",
          "formKey": "previous",
          "ehr_groups": [
            {
              "elementKey": "previous",
              "formCss": "grid-left-to-right-3",
              "fqn": "surgical.previous",
              "gIndex": "1",
              "gChildren": [
                "previousAdmissionsDate",
                "with",
                "details",
                "previousAdmissions",
                "comments"
              ]
            }
          ],
          "ehr_data": {
            "previousAdmissionsDate": "",
            "with": "",
            "details": "",
            "previousAdmissions": "",
            "comments": ""
          }
        },
        "fqn": "surgical.previous",
        "tableChildren": [
          "previous_id",
          "details",
          "previousAdmissions",
          "comments",
          "previousAdmissionsDate",
          "with"
        ]
      }
    }
  },
  "immunization": {
    "pageDataKey": "immunization",
    "pIndex": "6",
    "hasGridForm": true,
    "pageChildren": [
      {
        "elementKey": "hepA",
        "formIndex": "1",
        "inputType": "checkbox",
        "fqn": "immunization.hepA"
      },
      {
        "elementKey": "hepADate",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "date",
        "fqn": "immunization.hepADate"
      },
      {
        "elementKey": "hepASpacer",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "immunization.hepASpacer"
      },
      {
        "elementKey": "hepB",
        "formIndex": "1",
        "inputType": "checkbox",
        "fqn": "immunization.hepB"
      },
      {
        "elementKey": "hepBDate",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "date",
        "fqn": "immunization.hepBDate"
      },
      {
        "elementKey": "hepBSpacer",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "immunization.hepBSpacer"
      },
      {
        "elementKey": "mmr",
        "formIndex": "1",
        "inputType": "checkbox",
        "fqn": "immunization.mmr"
      },
      {
        "elementKey": "mmrDate",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "date",
        "fqn": "immunization.mmrDate"
      },
      {
        "elementKey": "mmrSpacer",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "immunization.mmrSpacer"
      },
      {
        "elementKey": "pneumococcal",
        "formIndex": "1",
        "inputType": "checkbox",
        "fqn": "immunization.pneumococcal"
      },
      {
        "elementKey": "pneumococcalDate",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "date",
        "fqn": "immunization.pneumococcalDate"
      },
      {
        "elementKey": "pneumococcalSpacer",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "immunization.pneumococcalSpacer"
      },
      {
        "elementKey": "polioDiptheriaPertussis",
        "formIndex": "1",
        "inputType": "checkbox",
        "fqn": "immunization.polioDiptheriaPertussis"
      },
      {
        "elementKey": "polioDiptheriaPertussisDate",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "date",
        "fqn": "immunization.polioDiptheriaPertussisDate"
      },
      {
        "elementKey": "polioDiptheriaPertussisSpacer",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "immunization.polioDiptheriaPertussisSpacer"
      },
      {
        "elementKey": "tb",
        "formIndex": "1",
        "inputType": "checkbox",
        "fqn": "immunization.tb"
      },
      {
        "elementKey": "tbDate",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "date",
        "fqn": "immunization.tbDate"
      },
      {
        "elementKey": "tbSpacer",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "immunization.tbSpacer"
      },
      {
        "elementKey": "tetanus",
        "formIndex": "1",
        "inputType": "checkbox",
        "fqn": "immunization.tetanus"
      },
      {
        "elementKey": "tetanusDate",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "date",
        "fqn": "immunization.tetanusDate"
      },
      {
        "elementKey": "tetanusSpacer",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "immunization.tetanusSpacer"
      },
      {
        "elementKey": "covid",
        "formIndex": "1",
        "inputType": "checkbox",
        "fqn": "immunization.covid"
      },
      {
        "elementKey": "covidDate",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "date",
        "fqn": "immunization.covidDate"
      },
      {
        "elementKey": "covidSpacer",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "immunization.covidSpacer"
      },
      {
        "elementKey": "other1",
        "formIndex": "1",
        "inputType": "checkbox",
        "fqn": "immunization.other1"
      },
      {
        "elementKey": "other1Date",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "date",
        "fqn": "immunization.other1Date"
      },
      {
        "elementKey": "other1Spacer",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "immunization.other1Spacer"
      },
      {
        "elementKey": "other2",
        "formIndex": "1",
        "inputType": "checkbox",
        "fqn": "immunization.other2"
      },
      {
        "elementKey": "other2Date",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "date",
        "fqn": "immunization.other2Date"
      },
      {
        "elementKey": "other2Spacer",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "immunization.other2Spacer"
      },
      {
        "elementKey": "other3",
        "formIndex": "1",
        "inputType": "checkbox",
        "fqn": "immunization.other3"
      },
      {
        "elementKey": "other3Date",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "date",
        "fqn": "immunization.other3Date"
      },
      {
        "elementKey": "other3Spacer",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "immunization.other3Spacer"
      }
    ],
    "pageElements": {
      "pageForm": {
        "elementKey": "pageForm",
        "pageElementIndex": "1",
        "formKey": "pageForm",
        "fqn": "immunization.pageForm",
        "isPageForm": true,
        "ehr_groups": [
          {
            "elementKey": "cGroup",
            "formCss": "grid-left-to-right-3",
            "fqn": "immunization.cGroup",
            "gIndex": "1",
            "gChildren": [
              "hepA",
              "hepADate",
              "hepASpacer",
              "hepB",
              "hepBDate",
              "hepBSpacer",
              "mmr",
              "mmrDate",
              "mmrSpacer",
              "pneumococcal",
              "pneumococcalDate",
              "pneumococcalSpacer",
              "polioDiptheriaPertussis",
              "polioDiptheriaPertussisDate",
              "polioDiptheriaPertussisSpacer",
              "tb",
              "tbDate",
              "tbSpacer",
              "tetanus",
              "tetanusDate",
              "tetanusSpacer",
              "covid",
              "covidDate",
              "covidSpacer",
              "other1",
              "other1Date",
              "other1Spacer",
              "other2",
              "other2Date",
              "other2Spacer",
              "other3",
              "other3Date",
              "other3Spacer"
            ]
          }
        ]
      }
    }
  },
  "familyHistory": {
    "pageDataKey": "familyHistory",
    "pIndex": "7",
    "hasGridForm": true,
    "pageChildren": [
      {
        "elementKey": "history",
        "formIndex": "1",
        "inputType": "textarea",
        "fqn": "familyHistory.history"
      }
    ],
    "pageElements": {
      "pageForm": {
        "elementKey": "pageForm",
        "pageElementIndex": "1",
        "formKey": "pageForm",
        "fqn": "familyHistory.pageForm",
        "isPageForm": true,
        "ehr_groups": [
          {
            "elementKey": "cGroup",
            "formCss": "grid-left-to-right-1",
            "fqn": "familyHistory.cGroup",
            "gIndex": "1",
            "gChildren": [
              "history"
            ]
          }
        ]
      }
    }
  },
  "careTeam": {
    "pageDataKey": "careTeam",
    "pIndex": "8",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "name",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "1",
        "fqn": "careTeam.name"
      },
      {
        "elementKey": "teams_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "profession",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "2",
        "fqn": "careTeam.profession"
      }
    ],
    "pageElements": {
      "teams": {
        "elementKey": "teams",
        "pageElementIndex": "1",
        "pageKey": "careTeam",
        "tableKey": "teams",
        "isTable": true,
        "form": {
          "elementKey": "teams",
          "label": "Care team",
          "addButtonText": "Add a care team member",
          "formKey": "teams",
          "ehr_groups": [
            {
              "elementKey": "cGroup",
              "formCss": "grid-left-to-right-3",
              "fqn": "careTeam.cGroup",
              "gIndex": "1",
              "gChildren": [
                "name",
                "profession"
              ]
            }
          ],
          "ehr_data": {
            "name": "",
            "profession": ""
          }
        },
        "fqn": "careTeam.teams",
        "tableChildren": [
          "teams_id",
          "name",
          "profession"
        ]
      }
    }
  },
  "pastAppointments": {
    "pageDataKey": "pastAppointments",
    "pIndex": "9",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "encounterDate",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "1",
        "fqn": "pastAppointments.encounterDate"
      },
      {
        "elementKey": "encounters_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "site",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "2",
        "fqn": "pastAppointments.site"
      },
      {
        "elementKey": "diagnosis",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "3",
        "fqn": "pastAppointments.diagnosis"
      },
      {
        "elementKey": "mrp",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "4",
        "fqn": "pastAppointments.mrp"
      },
      {
        "elementKey": "appointmentDate",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "1",
        "fqn": "pastAppointments.appointmentDate"
      },
      {
        "elementKey": "outpatientAppointments_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "site",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "2",
        "fqn": "pastAppointments.site"
      },
      {
        "elementKey": "reasonForVisit",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "3",
        "fqn": "pastAppointments.reasonForVisit"
      },
      {
        "elementKey": "diagnosis",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "4",
        "fqn": "pastAppointments.diagnosis"
      }
    ],
    "pageElements": {
      "encounters": {
        "elementKey": "encounters",
        "pageElementIndex": "1",
        "pageKey": "pastAppointments",
        "tableKey": "encounters",
        "isTable": true,
        "form": {
          "elementKey": "encounters",
          "label": "Past encounters",
          "addButtonText": "Add a past encounter",
          "formKey": "encounters",
          "ehr_groups": [
            {
              "elementKey": "encounters",
              "formCss": "grid-left-to-right-3",
              "fqn": "pastAppointments.encounters",
              "gIndex": "1",
              "gChildren": [
                "encounterDate",
                "site",
                "diagnosis",
                "mrp"
              ]
            }
          ],
          "ehr_data": {
            "encounterDate": "",
            "site": "",
            "diagnosis": "",
            "mrp": ""
          }
        },
        "fqn": "pastAppointments.encounters",
        "tableChildren": [
          "encounters_id",
          "diagnosis",
          "mrp",
          "encounterDate",
          "site"
        ]
      },
      "outpatientAppointments": {
        "elementKey": "outpatientAppointments",
        "pageElementIndex": "2",
        "pageKey": "pastAppointments",
        "tableKey": "outpatientAppointments",
        "isTable": true,
        "form": {
          "elementKey": "outpatientAppointments",
          "label": "Past outpatient appointments",
          "addButtonText": "Add an outpatient appointment",
          "formKey": "outpatientAppointments",
          "ehr_groups": [
            {
              "elementKey": "outpatientAppointments",
              "formCss": "grid-left-to-right-3",
              "fqn": "pastAppointments.outpatientAppointments",
              "gIndex": "1",
              "gChildren": [
                "appointmentDate",
                "site",
                "reasonForVisit",
                "diagnosis"
              ]
            }
          ],
          "ehr_data": {
            "appointmentDate": "",
            "site": "",
            "reasonForVisit": "",
            "diagnosis": ""
          }
        },
        "fqn": "pastAppointments.outpatientAppointments",
        "tableChildren": [
          "outpatientAppointments_id",
          "reasonForVisit",
          "diagnosis",
          "appointmentDate",
          "site"
        ]
      }
    }
  },
  "visit": {
    "pageDataKey": "visit",
    "pIndex": "10",
    "hasGridTable": true,
    "hasGridForm": true,
    "pageChildren": [
      {
        "elementKey": "admissionDay",
        "defaultValue": "0",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": "TRUE",
        "validation": "visitDay",
        "fqn": "visit.admissionDay"
      },
      {
        "elementKey": "admissionTime",
        "defaultValue": "900",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": "TRUE",
        "validation": "time24",
        "fqn": "visit.admissionTime"
      },
      {
        "elementKey": "status",
        "formIndex": "1",
        "inputType": "select",
        "mandatory": "TRUE",
        "options": [
          {
            "key": "Admission in progress",
            "text": "Admission in progress"
          },
          {
            "key": "Admitted",
            "text": "Admitted"
          },
          {
            "key": "Inpatient",
            "text": "Inpatient"
          },
          {
            "key": "Outpatient",
            "text": "Outpatient"
          },
          {
            "key": "Surgical day care",
            "text": "Surgical day care"
          },
          {
            "key": "Discharge pending",
            "text": "Discharge pending"
          },
          {
            "key": "Discharged",
            "text": "Discharged"
          }
        ],
        "fqn": "visit.status"
      },
      {
        "elementKey": "locationLabel",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "visit.locationLabel"
      },
      {
        "elementKey": "consentForTreatment",
        "formIndex": "1",
        "inputType": "checkbox",
        "fqn": "visit.consentForTreatment"
      },
      {
        "elementKey": "consentForBlood",
        "formIndex": "1",
        "inputType": "checkbox",
        "fqn": "visit.consentForBlood"
      },
      {
        "elementKey": "codeStatus",
        "formIndex": "1",
        "inputType": "text",
        "fqn": "visit.codeStatus"
      },
      {
        "elementKey": "diagnosis",
        "formIndex": "1",
        "inputType": "textarea",
        "fqn": "visit.diagnosis"
      },
      {
        "elementKey": "notes",
        "formIndex": "1",
        "inputType": "textarea",
        "fqn": "visit.notes"
      },
      {
        "elementKey": "table_name",
        "formIndex": "3",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "visit.name"
      },
      {
        "elementKey": "table_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "table_profession",
        "formIndex": "3",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "visit.profession"
      },
      {
        "elementKey": "table_day",
        "formIndex": "3",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "visit.day"
      },
      {
        "elementKey": "table_time",
        "formIndex": "3",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "visit.time"
      },
      {
        "elementKey": "location",
        "formIndex": "3",
        "inputType": "text",
        "mandatory": "TRUE",
        "tableColumn": "2",
        "fqn": "visit.location"
      },
      {
        "elementKey": "transferInDay",
        "formIndex": "3",
        "inputType": "visitDay",
        "tableColumn": "3",
        "validation": "visitDay",
        "fqn": "visit.transferInDay"
      },
      {
        "elementKey": "transferInTime",
        "formIndex": "3",
        "inputType": "visitTime",
        "tableColumn": "4",
        "validation": "time24",
        "fqn": "visit.transferInTime"
      },
      {
        "elementKey": "aSpacer",
        "formIndex": "3",
        "inputType": "spacer",
        "fqn": "visit.aSpacer"
      },
      {
        "elementKey": "transferOutDay",
        "formIndex": "3",
        "inputType": "visitDay",
        "tableColumn": "5",
        "validation": "visitDay",
        "fqn": "visit.transferOutDay"
      },
      {
        "elementKey": "transferOutTime",
        "formIndex": "3",
        "inputType": "visitTime",
        "tableColumn": "6",
        "validation": "time24",
        "fqn": "visit.transferOutTime"
      },
      {
        "elementKey": "diagnosisTable_name",
        "formIndex": "2",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "visit.name"
      },
      {
        "elementKey": "diagnosisTable_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "diagnosisTable_profession",
        "formIndex": "2",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "visit.profession"
      },
      {
        "elementKey": "diagnosisTable_day",
        "formIndex": "2",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "visit.day"
      },
      {
        "elementKey": "diagnosisTable_time",
        "formIndex": "2",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "visit.time"
      },
      {
        "elementKey": "diagnosisRecord",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "2",
        "fqn": "visit.diagnosisRecord"
      },
      {
        "elementKey": "diagnosisDetails",
        "formIndex": "2",
        "inputType": "textarea",
        "tableColumn": "3",
        "fqn": "visit.diagnosisDetails"
      }
    ],
    "pageElements": {
      "pageForm": {
        "elementKey": "pageForm",
        "pageElementIndex": "1",
        "formKey": "pageForm",
        "fqn": "visit.pageForm",
        "isPageForm": true,
        "ehr_groups": [
          {
            "elementKey": "cGroup",
            "formCss": "grid-left-to-right-3",
            "fqn": "visit.cGroup",
            "gIndex": "1",
            "gChildren": [
              "admissionDay",
              "admissionTime",
              "status",
              "locationLabel",
              "consentForTreatment",
              "consentForBlood",
              "codeStatus"
            ]
          },
          {
            "elementKey": "cGroup2",
            "formCss": "grid-left-to-right-1",
            "fqn": "visit.cGroup2",
            "gIndex": "2",
            "gChildren": [
              "diagnosis",
              "notes"
            ]
          }
        ]
      },
      "diagnosisTable": {
        "elementKey": "diagnosisTable",
        "pageElementIndex": "2",
        "pageKey": "visit",
        "tableKey": "diagnosisTable",
        "isTable": true,
        "form": {
          "elementKey": "diagnosisTable",
          "label": "Diagnosis",
          "addButtonText": "Add a diagnosis record",
          "formKey": "diagnosisTable",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "visit.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "diagnosisTable_name",
                "diagnosisTable_profession",
                "diagnosisTable_day",
                "diagnosisTable_time"
              ]
            },
            {
              "elementKey": "cGroup3",
              "formCss": "grid-left-to-right-1",
              "fqn": "visit.cGroup3",
              "gIndex": "2",
              "gChildren": [
                "diagnosisRecord",
                "diagnosisDetails"
              ]
            }
          ],
          "ehr_data": {
            "diagnosisTable_name": "",
            "diagnosisTable_profession": "",
            "diagnosisTable_day": "",
            "diagnosisTable_time": "",
            "diagnosisRecord": "",
            "diagnosisDetails": ""
          }
        },
        "fqn": "visit.diagnosisTable",
        "tableChildren": [
          "diagnosisTable_id",
          "diagnosisTable_day",
          "diagnosisTable_time",
          "diagnosisRecord",
          "diagnosisDetails",
          "diagnosisTable_name",
          "diagnosisTable_profession"
        ],
        "hasRecHeader": true
      },
      "table": {
        "elementKey": "table",
        "pageElementIndex": "3",
        "pageKey": "visit",
        "tableKey": "table",
        "isTable": true,
        "form": {
          "elementKey": "table",
          "label": "Patient Location",
          "addButtonText": "Add a patient location",
          "formKey": "table",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "visit.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "table_name",
                "table_profession",
                "table_day",
                "table_time"
              ]
            },
            {
              "elementKey": "cGroup",
              "formCss": "grid-left-to-right-1",
              "fqn": "visit.cGroup",
              "gIndex": "2",
              "gChildren": [
                "location"
              ]
            },
            {
              "elementKey": "cGroup2",
              "formCss": "grid-left-to-right-3",
              "fqn": "visit.cGroup2",
              "gIndex": "3",
              "gChildren": [
                "transferInDay",
                "transferInTime",
                "aSpacer",
                "transferOutDay",
                "transferOutTime"
              ]
            }
          ],
          "ehr_data": {
            "table_name": "",
            "table_profession": "",
            "table_day": "",
            "table_time": "",
            "location": "",
            "transferInDay": "",
            "transferInTime": "",
            "transferOutDay": "",
            "transferOutTime": ""
          }
        },
        "fqn": "visit.table",
        "tableChildren": [
          "table_id",
          "table_day",
          "table_time",
          "location",
          "transferInDay",
          "transferInTime",
          "transferOutDay",
          "transferOutTime",
          "table_name",
          "table_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "vitals": {
    "pageDataKey": "vitals",
    "pIndex": "11",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "table_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "vitals.name"
      },
      {
        "elementKey": "table_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "table_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "vitals.profession"
      },
      {
        "elementKey": "table_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "vitals.day"
      },
      {
        "elementKey": "table_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "vitals.time"
      },
      {
        "elementKey": "systolic",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "2",
        "validation": "numeric",
        "fqn": "vitals.systolic"
      },
      {
        "elementKey": "diastolic",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "3",
        "validation": "numeric",
        "fqn": "vitals.diastolic"
      },
      {
        "elementKey": "patientPosition",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Supine",
            "text": "Supine"
          },
          {
            "key": "Sitting",
            "text": "Sitting"
          },
          {
            "key": "Standing",
            "text": "Standing"
          }
        ],
        "tableColumn": "4",
        "fqn": "vitals.patientPosition"
      },
      {
        "elementKey": "temperature",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "C",
        "tableColumn": "5",
        "validation": "numeric",
        "fqn": "vitals.temperature",
        "suffixText": "C"
      },
      {
        "elementKey": "source",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Oral",
            "text": "Oral"
          },
          {
            "key": "Axilla",
            "text": "Axilla"
          },
          {
            "key": "Rectal",
            "text": "Rectal"
          },
          {
            "key": "Tympanic",
            "text": "Tympanic"
          }
        ],
        "tableColumn": "6",
        "fqn": "vitals.source"
      },
      {
        "elementKey": "spacer1",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "vitals.spacer1"
      },
      {
        "elementKey": "strength",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Peripheral",
            "text": "Peripheral"
          },
          {
            "key": "Other",
            "text": "Other"
          }
        ],
        "tableColumn": "7",
        "fqn": "vitals.strength"
      },
      {
        "elementKey": "rate",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "8",
        "validation": "numeric",
        "fqn": "vitals.rate"
      },
      {
        "elementKey": "rhythm",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Regular",
            "text": "Regular"
          },
          {
            "key": "Irregular",
            "text": "Irregular"
          }
        ],
        "tableColumn": "9",
        "fqn": "vitals.rhythm"
      },
      {
        "elementKey": "respirationRate",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "10",
        "validation": "numeric",
        "fqn": "vitals.respirationRate"
      },
      {
        "elementKey": "spacer2",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "vitals.spacer2"
      },
      {
        "elementKey": "spacer3",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "vitals.spacer3"
      },
      {
        "elementKey": "oxygenSaturation",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "%",
        "tableColumn": "11",
        "validation": "numeric",
        "fqn": "vitals.oxygenSaturation",
        "suffixText": "%"
      },
      {
        "elementKey": "oxygenMode",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Room air",
            "text": "Room air"
          },
          {
            "key": "Nasal prongs",
            "text": "Nasal prongs"
          },
          {
            "key": "Simple face mask",
            "text": "Simple face mask"
          },
          {
            "key": "Rebreathing face mask",
            "text": "Rebreathing face mask"
          },
          {
            "key": "Optiflow",
            "text": "Optiflow"
          }
        ],
        "tableColumn": "12",
        "fqn": "vitals.oxygenMode"
      },
      {
        "elementKey": "flowRate",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "/lpm",
        "tableColumn": "13",
        "validation": "numeric",
        "fqn": "vitals.flowRate",
        "suffixText": "/lpm"
      },
      {
        "elementKey": "bloodSugar",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "mmol/L",
        "tableColumn": "14",
        "validation": "numeric",
        "fqn": "vitals.bloodSugar",
        "suffixText": "mmol/L"
      },
      {
        "elementKey": "cvp",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "15",
        "validation": "cvp",
        "fqn": "vitals.cvp"
      }
    ],
    "pageElements": {
      "table": {
        "elementKey": "table",
        "pageElementIndex": "1",
        "pageKey": "vitals",
        "tableKey": "table",
        "isTable": true,
        "form": {
          "elementKey": "table",
          "label": "Vital signs",
          "addButtonText": "Add vital signs",
          "formOption": "transpose",
          "formKey": "table",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "vitals.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "table_name",
                "table_profession",
                "table_day",
                "table_time"
              ]
            },
            {
              "elementKey": "cGroup",
              "formCss": "grid-left-to-right-3",
              "fqn": "vitals.cGroup",
              "gIndex": "2",
              "gChildren": [
                "systolic",
                "diastolic",
                "patientPosition",
                "temperature",
                "source",
                "spacer1",
                "strength",
                "rate",
                "rhythm",
                "respirationRate",
                "spacer2",
                "spacer3",
                "oxygenSaturation",
                "oxygenMode",
                "flowRate",
                "bloodSugar",
                "cvp"
              ]
            }
          ],
          "ehr_data": {
            "table_name": "",
            "table_profession": "",
            "table_day": "",
            "table_time": "",
            "systolic": "",
            "diastolic": "",
            "patientPosition": "",
            "temperature": "",
            "source": "",
            "strength": "",
            "rate": "",
            "rhythm": "",
            "respirationRate": "",
            "oxygenSaturation": "",
            "oxygenMode": "",
            "flowRate": "",
            "bloodSugar": "",
            "cvp": ""
          }
        },
        "fqn": "vitals.table",
        "tableChildren": [
          "table_id",
          "table_day",
          "table_time",
          "systolic",
          "diastolic",
          "patientPosition",
          "temperature",
          "source",
          "strength",
          "rate",
          "rhythm",
          "respirationRate",
          "oxygenSaturation",
          "oxygenMode",
          "flowRate",
          "bloodSugar",
          "cvp",
          "table_name",
          "table_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "fluidBalance": {
    "pageDataKey": "fluidBalance",
    "pIndex": "12",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "fluidInOutTable_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "fluidBalance.name"
      },
      {
        "elementKey": "fluidInOutTable_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "fluidInOutTable_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "fluidBalance.profession"
      },
      {
        "elementKey": "fluidInOutTable_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "fluidBalance.day"
      },
      {
        "elementKey": "fluidInOutTable_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "fluidBalance.time"
      },
      {
        "elementKey": "inOral",
        "formIndex": "1",
        "formCss": "number-short",
        "inputType": "number",
        "passToFunction": "totalInputs",
        "suffix": "mL",
        "tableColumn": "2",
        "validation": "numeric",
        "fqn": "fluidBalance.inOral",
        "suffixText": "mL"
      },
      {
        "elementKey": "inIV",
        "formIndex": "1",
        "formCss": "number-short",
        "inputType": "number",
        "passToFunction": "totalInputs",
        "suffix": "mL",
        "tableColumn": "3",
        "validation": "numeric",
        "fqn": "fluidBalance.inIV",
        "suffixText": "mL"
      },
      {
        "elementKey": "inEnteral",
        "formIndex": "1",
        "formCss": "number-short",
        "inputType": "number",
        "passToFunction": "totalInputs",
        "suffix": "mL",
        "tableColumn": "4",
        "validation": "numeric",
        "fqn": "fluidBalance.inEnteral",
        "suffixText": "mL"
      },
      {
        "elementKey": "inOther",
        "formIndex": "1",
        "formCss": "number-short",
        "inputType": "number",
        "passToFunction": "totalInputs",
        "suffix": "mL",
        "tableColumn": "5",
        "validation": "numeric",
        "fqn": "fluidBalance.inOther",
        "suffixText": "mL"
      },
      {
        "elementKey": "totalInputs",
        "calculationType": "sum",
        "formIndex": "1",
        "formCss": "number-short",
        "inputType": "calculatedValue",
        "passToFunction": "cumulativeTotal",
        "suffix": "mL",
        "tableColumn": "6",
        "fqn": "fluidBalance.totalInputs",
        "suffixText": "mL"
      },
      {
        "elementKey": "outUrine",
        "formIndex": "1",
        "formCss": "number-short",
        "inputType": "number",
        "passToFunction": "totalOutputs",
        "suffix": "mL",
        "tableColumn": "7",
        "validation": "numeric",
        "fqn": "fluidBalance.outUrine",
        "suffixText": "mL"
      },
      {
        "elementKey": "outDrains",
        "formIndex": "1",
        "formCss": "number-short",
        "inputType": "number",
        "passToFunction": "totalOutputs",
        "suffix": "mL",
        "tableColumn": "8",
        "validation": "numeric",
        "fqn": "fluidBalance.outDrains",
        "suffixText": "mL"
      },
      {
        "elementKey": "outBlood",
        "formIndex": "1",
        "formCss": "number-short",
        "inputType": "number",
        "passToFunction": "totalOutputs",
        "suffix": "mL",
        "tableColumn": "9",
        "validation": "numeric",
        "fqn": "fluidBalance.outBlood",
        "suffixText": "mL"
      },
      {
        "elementKey": "outOther",
        "formIndex": "1",
        "formCss": "number-short",
        "inputType": "number",
        "passToFunction": "totalOutputs",
        "suffix": "mL",
        "tableColumn": "10",
        "validation": "numeric",
        "fqn": "fluidBalance.outOther",
        "suffixText": "mL"
      },
      {
        "elementKey": "totalOutputs",
        "calculationType": "sum",
        "formIndex": "1",
        "formCss": "number-short",
        "inputType": "calculatedValue",
        "passToFunction": "cumulativeTotal",
        "suffix": "mL",
        "tableColumn": "11",
        "fqn": "fluidBalance.totalOutputs",
        "suffixText": "mL"
      },
      {
        "elementKey": "cumulativeTotal",
        "calculationType": "fluidBalance",
        "formIndex": "1",
        "formCss": "number-short",
        "inputType": "calculatedValue",
        "suffix": "mL",
        "tableColumn": "12",
        "fqn": "fluidBalance.cumulativeTotal",
        "suffixText": "mL"
      },
      {
        "elementKey": "comments",
        "formIndex": "1",
        "inputType": "textarea",
        "tableColumn": "13",
        "fqn": "fluidBalance.comments"
      },
      {
        "elementKey": "table_name",
        "formIndex": "2",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "fluidBalance.name"
      },
      {
        "elementKey": "table_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "table_profession",
        "formIndex": "2",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "fluidBalance.profession"
      },
      {
        "elementKey": "table_day",
        "formIndex": "2",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "fluidBalance.day"
      },
      {
        "elementKey": "table_time",
        "formIndex": "2",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "fluidBalance.time"
      },
      {
        "elementKey": "fluidIn",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "2",
        "fqn": "fluidBalance.fluidIn"
      },
      {
        "elementKey": "fluidOut",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "3",
        "fqn": "fluidBalance.fluidOut"
      }
    ],
    "pageElements": {
      "fluidInOutTable": {
        "elementKey": "fluidInOutTable",
        "pageElementIndex": "1",
        "pageKey": "fluidBalance",
        "tableKey": "fluidInOutTable",
        "isTable": true,
        "form": {
          "elementKey": "fluidInOutTable",
          "label": "Fluid balance",
          "addButtonText": "Add a fluid record",
          "formOption": "transpose",
          "formKey": "fluidInOutTable",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "fluidBalance.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "fluidInOutTable_name",
                "fluidInOutTable_profession",
                "fluidInOutTable_day",
                "fluidInOutTable_time"
              ]
            },
            {
              "elementKey": "cGroup",
              "formCss": "grid-left-to-right-4",
              "fqn": "fluidBalance.cGroup",
              "gIndex": "2",
              "gChildren": [
                "inOral",
                "inIV",
                "inEnteral",
                "inOther",
                "totalInputs"
              ]
            },
            {
              "elementKey": "cGroup2",
              "formCss": "grid-left-to-right-4",
              "fqn": "fluidBalance.cGroup2",
              "gIndex": "3",
              "gChildren": [
                "outUrine",
                "outDrains",
                "outBlood",
                "outOther",
                "totalOutputs"
              ]
            },
            {
              "elementKey": "cGroup3",
              "formCss": "grid-left-to-right-1",
              "fqn": "fluidBalance.cGroup3",
              "gIndex": "4",
              "gChildren": [
                "cumulativeTotal",
                "comments"
              ]
            }
          ],
          "ehr_data": {
            "fluidInOutTable_name": "",
            "fluidInOutTable_profession": "",
            "fluidInOutTable_day": "",
            "fluidInOutTable_time": "",
            "inOral": "",
            "inIV": "",
            "inEnteral": "",
            "inOther": "",
            "totalInputs": "",
            "outUrine": "",
            "outDrains": "",
            "outBlood": "",
            "outOther": "",
            "totalOutputs": "",
            "cumulativeTotal": "",
            "comments": ""
          }
        },
        "fqn": "fluidBalance.fluidInOutTable",
        "tableChildren": [
          "fluidInOutTable_id",
          "fluidInOutTable_day",
          "fluidInOutTable_time",
          "inOral",
          "inIV",
          "inEnteral",
          "inOther",
          "totalInputs",
          "outUrine",
          "outDrains",
          "outBlood",
          "outOther",
          "totalOutputs",
          "cumulativeTotal",
          "comments",
          "fluidInOutTable_name",
          "fluidInOutTable_profession"
        ],
        "hasRecHeader": true
      },
      "table": {
        "elementKey": "table",
        "pageElementIndex": "2",
        "pageKey": "fluidBalance",
        "tableKey": "table",
        "isTable": true,
        "form": {
          "elementKey": "table",
          "label": "Fluid balance v1",
          "addButtonText": "Add a fluid in/out record",
          "formKey": "table",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup2",
              "formCss": "record-header",
              "fqn": "fluidBalance.hdrGroup2",
              "gIndex": "1",
              "gChildren": [
                "table_name",
                "table_profession",
                "table_day",
                "table_time"
              ]
            },
            {
              "elementKey": "cGroup4",
              "formCss": "grid-left-to-right-3",
              "fqn": "fluidBalance.cGroup4",
              "gIndex": "2",
              "gChildren": [
                "fluidIn",
                "fluidOut"
              ]
            }
          ],
          "ehr_data": {
            "table_name": "",
            "table_profession": "",
            "table_day": "",
            "table_time": "",
            "fluidIn": "",
            "fluidOut": ""
          }
        },
        "fqn": "fluidBalance.table",
        "tableChildren": [
          "table_id",
          "table_day",
          "table_time",
          "fluidIn",
          "fluidOut",
          "table_name",
          "table_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "neurological": {
    "pageDataKey": "neurological",
    "pIndex": "14",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "table_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "neurological.name"
      },
      {
        "elementKey": "table_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "table_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "neurological.profession"
      },
      {
        "elementKey": "table_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "neurological.day"
      },
      {
        "elementKey": "table_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "neurological.time"
      },
      {
        "elementKey": "alert",
        "formIndex": "1",
        "inputType": "checkset",
        "options": [
          {
            "key": "alert",
            "text": "Alert"
          },
          {
            "key": "oriented",
            "text": "Oriented"
          },
          {
            "key": "slightlyDrowsy",
            "text": "Slightly Drowsy"
          },
          {
            "key": "drowsy",
            "text": "Drowsy"
          },
          {
            "key": "unresponsive",
            "text": "Unresponsive"
          }
        ],
        "tableColumn": "2",
        "fqn": "neurological.alert"
      },
      {
        "elementKey": "orientation",
        "formIndex": "1",
        "inputType": "checkset",
        "options": [
          {
            "key": "person",
            "text": "Person"
          },
          {
            "key": "place",
            "text": "Place"
          },
          {
            "key": "date",
            "text": "Time"
          },
          {
            "key": "situ",
            "text": "Situation"
          }
        ],
        "tableColumn": "3",
        "fqn": "neurological.orientation"
      },
      {
        "elementKey": "communication",
        "formIndex": "1",
        "inputType": "checkset",
        "options": [
          {
            "key": "verbal",
            "text": "Verbal"
          },
          {
            "key": "nonverbal",
            "text": "Nonverbal"
          },
          {
            "key": "slur",
            "text": "Slurred"
          },
          {
            "key": "aphasic",
            "text": "Aphasic"
          },
          {
            "key": "slow",
            "text": "Slow speech"
          },
          {
            "key": "rapid",
            "text": "Rapid speech"
          }
        ],
        "tableColumn": "4",
        "fqn": "neurological.communication"
      },
      {
        "elementKey": "eyeOpening",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "0 = Non testable",
            "text": "0 = Non testable"
          },
          {
            "key": "1 = None",
            "text": "1 = None"
          },
          {
            "key": "2 = To pressure",
            "text": "2 = To pressure"
          },
          {
            "key": "3 = To sound",
            "text": "3 = To sound"
          },
          {
            "key": "4 = Spontaneous",
            "text": "4 = Spontaneous"
          }
        ],
        "passToFunction": "glasgowCalculation",
        "tableColumn": "5",
        "fqn": "neurological.eyeOpening"
      },
      {
        "elementKey": "verbalResponse",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "0 = Non testable",
            "text": "0 = Non testable"
          },
          {
            "key": "1 = None",
            "text": "1 = None"
          },
          {
            "key": "2 = Sounds",
            "text": "2 = Sounds"
          },
          {
            "key": "3 = Words",
            "text": "3 = Words"
          },
          {
            "key": "4 = Confused",
            "text": "4 = Confused"
          },
          {
            "key": "5 = Oriented",
            "text": "5 = Oriented"
          }
        ],
        "passToFunction": "glasgowCalculation",
        "tableColumn": "6",
        "fqn": "neurological.verbalResponse"
      },
      {
        "elementKey": "bestMotorResponse",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "0 = Non testable",
            "text": "0 = Non testable"
          },
          {
            "key": "1 = None",
            "text": "1 = None"
          },
          {
            "key": "2 = Extension",
            "text": "2 = Extension"
          },
          {
            "key": "3 = Normal flexion",
            "text": "3 = Normal flexion"
          },
          {
            "key": "4 = Abnormal flexion",
            "text": "4 = Abnormal flexion"
          },
          {
            "key": "5 = Localising",
            "text": "5 = Localising"
          },
          {
            "key": "6 = Obeys commands",
            "text": "6 = Obeys commands"
          }
        ],
        "passToFunction": "glasgowCalculation",
        "tableColumn": "7",
        "fqn": "neurological.bestMotorResponse"
      },
      {
        "elementKey": "glasgowCalculation",
        "calculationType": "sum",
        "defaultValue": "0",
        "formIndex": "1",
        "inputType": "calculatedValue",
        "options": [
          {
            "key": "=14+14+14",
            "text": "=14+14+14"
          }
        ],
        "tableColumn": "8",
        "fqn": "neurological.glasgowCalculation"
      },
      {
        "elementKey": "loss",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "No",
            "text": "No"
          },
          {
            "key": "Yes",
            "text": "Yes"
          },
          {
            "key": "Unknown",
            "text": "Unknown"
          }
        ],
        "tableColumn": "9",
        "fqn": "neurological.loss"
      },
      {
        "elementKey": "duration",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "10",
        "fqn": "neurological.duration"
      },
      {
        "elementKey": "leftPupilSize",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "1",
            "text": "1"
          },
          {
            "key": "2",
            "text": "2"
          },
          {
            "key": "3",
            "text": "3"
          },
          {
            "key": "4",
            "text": "4"
          },
          {
            "key": "5",
            "text": "5"
          },
          {
            "key": "6",
            "text": "6"
          },
          {
            "key": "7",
            "text": "7"
          },
          {
            "key": "8",
            "text": "8"
          }
        ],
        "tableColumn": "11",
        "fqn": "neurological.leftPupilSize"
      },
      {
        "elementKey": "leftPupilResponseToLight",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Brisk",
            "text": "Brisk"
          },
          {
            "key": "Sluggish",
            "text": "Sluggish"
          },
          {
            "key": "Fixed",
            "text": "Fixed"
          }
        ],
        "tableColumn": "12",
        "fqn": "neurological.leftPupilResponseToLight"
      },
      {
        "elementKey": "spacerEys1",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "neurological.spacerEys1"
      },
      {
        "elementKey": "rightPupilSize",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "1",
            "text": "1"
          },
          {
            "key": "2",
            "text": "2"
          },
          {
            "key": "3",
            "text": "3"
          },
          {
            "key": "4",
            "text": "4"
          },
          {
            "key": "5",
            "text": "5"
          },
          {
            "key": "6",
            "text": "6"
          },
          {
            "key": "7",
            "text": "7"
          },
          {
            "key": "8",
            "text": "8"
          }
        ],
        "tableColumn": "13",
        "fqn": "neurological.rightPupilSize"
      },
      {
        "elementKey": "rightPupilResponseToLight",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Brisk",
            "text": "Brisk"
          },
          {
            "key": "Sluggish",
            "text": "Sluggish"
          },
          {
            "key": "Fixed",
            "text": "Fixed"
          }
        ],
        "tableColumn": "14",
        "fqn": "neurological.rightPupilResponseToLight"
      },
      {
        "elementKey": "bothPupils",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Equal",
            "text": "Equal"
          },
          {
            "key": "Unequal",
            "text": "Unequal"
          }
        ],
        "tableColumn": "15",
        "fqn": "neurological.bothPupils"
      },
      {
        "elementKey": "facialSymmetry",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "none",
            "text": "None"
          },
          {
            "key": "leftDroop",
            "text": "Left sided facial droop"
          },
          {
            "key": "rightDroop",
            "text": "Right sided facial droop"
          },
          {
            "key": "bilateral",
            "text": "Bilateral facial droop"
          }
        ],
        "tableColumn": "16",
        "fqn": "neurological.facialSymmetry"
      },
      {
        "elementKey": "handRight",
        "formIndex": "1",
        "inputType": "radioset",
        "options": [
          {
            "key": "strong",
            "text": "Strong"
          },
          {
            "key": "mod",
            "text": "Moderate"
          },
          {
            "key": "weak",
            "text": "Weak"
          },
          {
            "key": "flaccid",
            "text": "Flaccid"
          }
        ],
        "tableColumn": "17",
        "fqn": "neurological.handRight"
      },
      {
        "elementKey": "handLet",
        "formIndex": "1",
        "inputType": "radioset",
        "options": [
          {
            "key": "strong",
            "text": "Strong"
          },
          {
            "key": "mod",
            "text": "Moderate"
          },
          {
            "key": "weak",
            "text": "Weak"
          },
          {
            "key": "flaccid",
            "text": "Flaccid"
          }
        ],
        "tableColumn": "18",
        "fqn": "neurological.handLet"
      },
      {
        "elementKey": "armRight",
        "formIndex": "1",
        "inputType": "radioset",
        "options": [
          {
            "key": "strong",
            "text": "Strong"
          },
          {
            "key": "mod",
            "text": "Moderate"
          },
          {
            "key": "weak",
            "text": "Weak"
          },
          {
            "key": "flaccid",
            "text": "Flaccid"
          }
        ],
        "tableColumn": "19",
        "fqn": "neurological.armRight"
      },
      {
        "elementKey": "armLeft",
        "formIndex": "1",
        "inputType": "radioset",
        "options": [
          {
            "key": "strong",
            "text": "Strong"
          },
          {
            "key": "mod",
            "text": "Moderate"
          },
          {
            "key": "weak",
            "text": "Weak"
          },
          {
            "key": "flaccid",
            "text": "Flaccid"
          }
        ],
        "tableColumn": "20",
        "fqn": "neurological.armLeft"
      },
      {
        "elementKey": "legRight",
        "formIndex": "1",
        "inputType": "radioset",
        "options": [
          {
            "key": "strong",
            "text": "Strong"
          },
          {
            "key": "mod",
            "text": "Moderate"
          },
          {
            "key": "weak",
            "text": "Weak"
          },
          {
            "key": "flaccid",
            "text": "Flaccid"
          }
        ],
        "tableColumn": "21",
        "fqn": "neurological.legRight"
      },
      {
        "elementKey": "legLeft",
        "formIndex": "1",
        "inputType": "radioset",
        "options": [
          {
            "key": "strong",
            "text": "Strong"
          },
          {
            "key": "mod",
            "text": "Moderate"
          },
          {
            "key": "weak",
            "text": "Weak"
          },
          {
            "key": "flaccid",
            "text": "Flaccid"
          }
        ],
        "tableColumn": "22",
        "fqn": "neurological.legLeft"
      },
      {
        "elementKey": "armDrift",
        "formIndex": "1",
        "inputType": "radioset",
        "options": [
          {
            "key": "none",
            "text": "No arm drift"
          },
          {
            "key": "dRight",
            "text": "Right arm drift"
          },
          {
            "key": "dLeft",
            "text": "Left arm drift"
          },
          {
            "key": "other",
            "text": "Other"
          }
        ],
        "tableColumn": "23",
        "fqn": "neurological.armDrift"
      },
      {
        "elementKey": "otherArmDrift",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "24",
        "fqn": "neurological.otherArmDrift"
      },
      {
        "elementKey": "pressure",
        "formIndex": "1",
        "formCss": "grid-span-2-columns",
        "inputType": "text",
        "tableColumn": "25",
        "fqn": "neurological.pressure"
      },
      {
        "elementKey": "comments",
        "formIndex": "1",
        "formCss": "grid-span-3-columns",
        "inputType": "textarea",
        "tableColumn": "26",
        "fqn": "neurological.comments"
      },
      {
        "elementKey": "resourcesMini",
        "assetBase": "standardized-assessment-tools",
        "assetName": "mini-mental-health-screen.pdf",
        "formIndex": "1",
        "inputType": "assetLink",
        "fqn": "neurological.resourcesMini"
      },
      {
        "elementKey": "resourcesMorse",
        "assetBase": "standardized-assessment-tools",
        "assetName": "Morse-Fall-Scale-score.png",
        "formIndex": "1",
        "inputType": "assetLink",
        "fqn": "neurological.resourcesMorse"
      },
      {
        "elementKey": "strokeAssessmentTable_name",
        "formIndex": "2",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "neurological.name"
      },
      {
        "elementKey": "strokeAssessmentTable_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "strokeAssessmentTable_profession",
        "formIndex": "2",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "neurological.profession"
      },
      {
        "elementKey": "strokeAssessmentTable_day",
        "formIndex": "2",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "neurological.day"
      },
      {
        "elementKey": "strokeAssessmentTable_time",
        "formIndex": "2",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "neurological.time"
      },
      {
        "elementKey": "levelOfConciousness",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "0 = Alert; keenly responsive",
            "text": "0 = Alert; keenly responsive"
          },
          {
            "key": "1 = Not alert; but arousable by minor stimulation",
            "text": "1 = Not alert; but arousable by minor stimulation"
          },
          {
            "key": "2 = Not alert; requires repeated stimulation",
            "text": "2 = Not alert; requires repeated stimulation"
          },
          {
            "key": "3 = Unresponsive or responds only with reflex",
            "text": "3 = Unresponsive or responds only with reflex"
          }
        ],
        "passToFunction": "strokeAssessmentCalculation",
        "tableColumn": "2",
        "fqn": "neurological.levelOfConciousness"
      },
      {
        "elementKey": "levelOfConciousnessQuestions",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "0 = Answers two questions correctly",
            "text": "0 = Answers two questions correctly"
          },
          {
            "key": "1 = Answers one question correctly",
            "text": "1 = Answers one question correctly"
          },
          {
            "key": "2 = Answers neither question correctly",
            "text": "2 = Answers neither question correctly"
          }
        ],
        "passToFunction": "strokeAssessmentCalculation",
        "tableColumn": "3",
        "fqn": "neurological.levelOfConciousnessQuestions"
      },
      {
        "elementKey": "levelOfConciousnessCommands",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "0 = Performs both tasks correctly",
            "text": "0 = Performs both tasks correctly"
          },
          {
            "key": "1 = Performs one task correctly",
            "text": "1 = Performs one task correctly"
          },
          {
            "key": "2 = Performs neither task correctly",
            "text": "2 = Performs neither task correctly"
          }
        ],
        "passToFunction": "strokeAssessmentCalculation",
        "tableColumn": "4",
        "fqn": "neurological.levelOfConciousnessCommands"
      },
      {
        "elementKey": "motorLeftArm",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "0 = No drift",
            "text": "0 = No drift"
          },
          {
            "key": "1 = Drift",
            "text": "1 = Drift"
          },
          {
            "key": "2 = Some effort against gravity",
            "text": "2 = Some effort against gravity"
          },
          {
            "key": "3 = No effort against gravity; limb falls",
            "text": "3 = No effort against gravity; limb falls"
          },
          {
            "key": "4 = No movement",
            "text": "4 = No movement"
          }
        ],
        "passToFunction": "strokeAssessmentCalculation",
        "tableColumn": "5",
        "fqn": "neurological.motorLeftArm"
      },
      {
        "elementKey": "motorRightArm",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "0 = No drift",
            "text": "0 = No drift"
          },
          {
            "key": "1 = Drift",
            "text": "1 = Drift"
          },
          {
            "key": "2 = Some effort against gravity",
            "text": "2 = Some effort against gravity"
          },
          {
            "key": "3 = No effort against gravity; limb falls",
            "text": "3 = No effort against gravity; limb falls"
          },
          {
            "key": "4 = No movement",
            "text": "4 = No movement"
          }
        ],
        "passToFunction": "strokeAssessmentCalculation",
        "tableColumn": "6",
        "fqn": "neurological.motorRightArm"
      },
      {
        "elementKey": "spacerStroke1",
        "formIndex": "2",
        "inputType": "spacer",
        "fqn": "neurological.spacerStroke1"
      },
      {
        "elementKey": "motorLeftLeg",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "0 = No drift",
            "text": "0 = No drift"
          },
          {
            "key": "1 = Drift",
            "text": "1 = Drift"
          },
          {
            "key": "2 = Some effort against gravity",
            "text": "2 = Some effort against gravity"
          },
          {
            "key": "3 = No effort against gravity",
            "text": "3 = No effort against gravity"
          },
          {
            "key": "4 = No movement",
            "text": "4 = No movement"
          }
        ],
        "passToFunction": "strokeAssessmentCalculation",
        "tableColumn": "7",
        "fqn": "neurological.motorLeftLeg"
      },
      {
        "elementKey": "motorRightLeg",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "0 = No drift",
            "text": "0 = No drift"
          },
          {
            "key": "1 = Drift",
            "text": "1 = Drift"
          },
          {
            "key": "2 = Some effort against gravity",
            "text": "2 = Some effort against gravity"
          },
          {
            "key": "3 = No effort against gravity",
            "text": "3 = No effort against gravity"
          },
          {
            "key": "4 = No movement",
            "text": "4 = No movement"
          }
        ],
        "passToFunction": "strokeAssessmentCalculation",
        "tableColumn": "8",
        "fqn": "neurological.motorRightLeg"
      },
      {
        "elementKey": "limbAtaxia",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "0 = Absent",
            "text": "0 = Absent"
          },
          {
            "key": "1 = Present in one limb",
            "text": "1 = Present in one limb"
          },
          {
            "key": "2 = Present in two limbs",
            "text": "2 = Present in two limbs"
          }
        ],
        "passToFunction": "strokeAssessmentCalculation",
        "tableColumn": "9",
        "fqn": "neurological.limbAtaxia"
      },
      {
        "elementKey": "bestGaze",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "0 = No deviation",
            "text": "0 = No deviation"
          },
          {
            "key": "1 = Partial gaze palsy",
            "text": "1 = Partial gaze palsy"
          },
          {
            "key": "2 = Forced deviation",
            "text": "2 = Forced deviation"
          }
        ],
        "passToFunction": "strokeAssessmentCalculation",
        "tableColumn": "10",
        "fqn": "neurological.bestGaze"
      },
      {
        "elementKey": "visual",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "0 = No visual loss",
            "text": "0 = No visual loss"
          },
          {
            "key": "1 = Partial hemianopia",
            "text": "1 = Partial hemianopia"
          },
          {
            "key": "2 = Partial paralysis",
            "text": "2 = Partial paralysis"
          },
          {
            "key": "3 = Complete paralysis of one or both sides",
            "text": "3 = Complete paralysis of one or both sides"
          }
        ],
        "passToFunction": "strokeAssessmentCalculation",
        "tableColumn": "11",
        "fqn": "neurological.visual"
      },
      {
        "elementKey": "facialPalsy",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "0 = Normal symmetric movements",
            "text": "0 = Normal symmetric movements"
          },
          {
            "key": "1 = Minor paralysis",
            "text": "1 = Minor paralysis"
          },
          {
            "key": "2 = Partial paralysis",
            "text": "2 = Partial paralysis"
          },
          {
            "key": "3 = Complete paralysis of one or both sides",
            "text": "3 = Complete paralysis of one or both sides"
          }
        ],
        "passToFunction": "strokeAssessmentCalculation",
        "tableColumn": "12",
        "fqn": "neurological.facialPalsy"
      },
      {
        "elementKey": "sensory",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "0 = Normal; no sensory loss",
            "text": "0 = Normal; no sensory loss"
          },
          {
            "key": "1 = Mild-to-moderate sensory loss",
            "text": "1 = Mild-to-moderate sensory loss"
          },
          {
            "key": "2 = Severe to total sensory loss",
            "text": "2 = Severe to total sensory loss"
          }
        ],
        "passToFunction": "strokeAssessmentCalculation",
        "tableColumn": "13",
        "fqn": "neurological.sensory"
      },
      {
        "elementKey": "bestLanguage",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "0 = No aphasia; normal",
            "text": "0 = No aphasia; normal"
          },
          {
            "key": "1 = Mild to moderate aphasia",
            "text": "1 = Mild to moderate aphasia"
          },
          {
            "key": "2 = Severe aphasia",
            "text": "2 = Severe aphasia"
          },
          {
            "key": "3 = Mute, global aphasia",
            "text": "3 = Mute, global aphasia"
          }
        ],
        "passToFunction": "strokeAssessmentCalculation",
        "tableColumn": "14",
        "fqn": "neurological.bestLanguage"
      },
      {
        "elementKey": "dysarthria",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "0 = Normal",
            "text": "0 = Normal"
          },
          {
            "key": "1 = Mild to moderate",
            "text": "1 = Mild to moderate"
          },
          {
            "key": "2 = Severe dysarthria",
            "text": "2 = Severe dysarthria"
          }
        ],
        "passToFunction": "strokeAssessmentCalculation",
        "tableColumn": "15",
        "fqn": "neurological.dysarthria"
      },
      {
        "elementKey": "extinctionAndInattention",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "0 = No abnormality",
            "text": "0 = No abnormality"
          },
          {
            "key": "1 = Visual, tactile, auditory, spatial, or personal inattention",
            "text": "1 = Visual, tactile, auditory, spatial, or personal inattention"
          },
          {
            "key": "2 = Profound hemi-inattention or extinction",
            "text": "2 = Profound hemi-inattention or extinction"
          }
        ],
        "passToFunction": "strokeAssessmentCalculation",
        "tableColumn": "16",
        "fqn": "neurological.extinctionAndInattention"
      },
      {
        "elementKey": "strokeAssessmentCalculation",
        "calculationType": "sum",
        "defaultValue": "0",
        "formIndex": "2",
        "formCss": "grid-new-subsection",
        "inputType": "calculatedValue",
        "tableColumn": "17",
        "fqn": "neurological.strokeAssessmentCalculation"
      },
      {
        "elementKey": "strokeComments",
        "formIndex": "2",
        "formCss": "grid-span-3-columns",
        "inputType": "textarea",
        "tableColumn": "18",
        "fqn": "neurological.strokeComments"
      },
      {
        "elementKey": "del_table_name",
        "formIndex": "3",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "neurological.name"
      },
      {
        "elementKey": "del_table_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "del_table_profession",
        "formIndex": "3",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "neurological.profession"
      },
      {
        "elementKey": "del_table_day",
        "formIndex": "3",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "neurological.day"
      },
      {
        "elementKey": "del_table_time",
        "formIndex": "3",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "neurological.time"
      },
      {
        "elementKey": "del_individual",
        "formIndex": "3",
        "inputType": "checkset",
        "options": [
          {
            "key": "age75OrOlder",
            "text": "Age 75 or older"
          },
          {
            "key": "alcohol /Drug /TobaccoUse",
            "text": "Alcohol / drug / tobacco use"
          },
          {
            "key": "cognitiveImpairment",
            "text": "Cognitive impairment"
          },
          {
            "key": "functionalImpairment",
            "text": "Functional impairment"
          },
          {
            "key": "historyOfDepression",
            "text": "History of depression"
          },
          {
            "key": "previousDelirium",
            "text": "Previous delirium"
          },
          {
            "key": "reloaction",
            "text": "Reloaction"
          },
          {
            "key": "sleepDisturbance",
            "text": "Sleep disturbance"
          },
          {
            "key": "useOfRestraints",
            "text": "Use of restraints"
          },
          {
            "key": "vision /HearingLoss",
            "text": "Vision / hearing loss"
          }
        ],
        "tableColumn": "2",
        "fqn": "neurological.del_individual"
      },
      {
        "elementKey": "del_medicaal",
        "formIndex": "3",
        "inputType": "checkset",
        "options": [
          {
            "key": "advancedIllness",
            "text": "Advanced illness"
          },
          {
            "key": "chronicIllness",
            "text": "Chronic illness"
          },
          {
            "key": "electrolyteImbalance",
            "text": "Electrolyte imbalance"
          },
          {
            "key": "fever",
            "text": "Fever"
          },
          {
            "key": "historyOfTia /Stroke",
            "text": "History of TIA / stroke"
          },
          {
            "key": "hypotension",
            "text": "Hypotension"
          },
          {
            "key": "hypoxia",
            "text": "Hypoxia"
          },
          {
            "key": "infection",
            "text": "Infection"
          },
          {
            "key": "multipleCoMorbidities",
            "text": "Multiple co-morbidities"
          },
          {
            "key": "surgery /Anesthesia",
            "text": "Surgery / anesthesia"
          },
          {
            "key": "unrelievedPain",
            "text": "Unrelieved pain"
          }
        ],
        "tableColumn": "3",
        "fqn": "neurological.del_medicaal"
      },
      {
        "elementKey": "del_medication",
        "formIndex": "3",
        "inputType": "checkset",
        "options": [
          {
            "key": "antipsychotics",
            "text": "Antipsychotics"
          },
          {
            "key": "benzodiazepines",
            "text": "Benzodiazepines"
          },
          {
            "key": "cardiacDrugs",
            "text": "Cardiac drugs"
          },
          {
            "key": "opiodAnalgesics",
            "text": "Opiod analgesics"
          },
          {
            "key": "receiving5OrMoreMeds",
            "text": "Receiving 5 or more meds"
          }
        ],
        "tableColumn": "4",
        "fqn": "neurological.del_medication"
      },
      {
        "elementKey": "delLabel1",
        "formIndex": "3",
        "inputType": "form_label",
        "fqn": "neurological.delLabel1"
      },
      {
        "elementKey": "delLabel2",
        "formIndex": "3",
        "inputType": "form_label",
        "fqn": "neurological.delLabel2"
      },
      {
        "elementKey": "del_doCam",
        "formIndex": "3",
        "inputType": "checkbox",
        "tableColumn": "5",
        "fqn": "neurological.del_doCam"
      },
      {
        "elementKey": "delLabel3",
        "assetName": "https://www2.gov.bc.ca/assets/gov/health/practitioner-pro/bc-guidelines/cogimp-appendix-c.pdf",
        "formIndex": "3",
        "inputType": "externalLink",
        "fqn": "neurological.delLabel3"
      },
      {
        "elementKey": "del_comments",
        "formIndex": "3",
        "inputType": "textarea",
        "tableColumn": "6",
        "fqn": "neurological.del_comments"
      },
      {
        "elementKey": "cam_table_name",
        "formIndex": "4",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "neurological.name"
      },
      {
        "elementKey": "cam_table_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "cam_table_profession",
        "formIndex": "4",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "neurological.profession"
      },
      {
        "elementKey": "cam_table_day",
        "formIndex": "4",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "neurological.day"
      },
      {
        "elementKey": "cam_table_time",
        "formIndex": "4",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "neurological.time"
      },
      {
        "elementKey": "camLink",
        "assetName": "https://www2.gov.bc.ca/assets/gov/health/practitioner-pro/bc-guidelines/cogimp-appendix-c.pdf",
        "formIndex": "4",
        "inputType": "externalLink",
        "fqn": "neurological.camLink"
      },
      {
        "elementKey": "cam_1",
        "formIndex": "4",
        "inputType": "checkbox",
        "tableColumn": "2",
        "fqn": "neurological.cam_1"
      },
      {
        "elementKey": "cam_2",
        "formIndex": "4",
        "inputType": "checkbox",
        "tableColumn": "3",
        "fqn": "neurological.cam_2"
      },
      {
        "elementKey": "cam_3",
        "formIndex": "4",
        "inputType": "checkbox",
        "tableColumn": "4",
        "fqn": "neurological.cam_3"
      },
      {
        "elementKey": "cam_4",
        "formIndex": "4",
        "inputType": "checkbox",
        "tableColumn": "5",
        "fqn": "neurological.cam_4"
      },
      {
        "elementKey": "cam_assessment",
        "formIndex": "4",
        "inputType": "text",
        "tableColumn": "6",
        "fqn": "neurological.cam_assessment"
      }
    ],
    "pageElements": {
      "table": {
        "elementKey": "table",
        "pageElementIndex": "1",
        "pageKey": "neurological",
        "tableKey": "table",
        "isTable": true,
        "form": {
          "elementKey": "table",
          "label": "Neurological assessment",
          "addButtonText": "Add a neurological assessment",
          "formOption": "transpose",
          "formKey": "table",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "neurological.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "table_name",
                "table_profession",
                "table_day",
                "table_time"
              ]
            },
            {
              "elementKey": "overviewGroup",
              "formCss": "grid-left-to-right-3",
              "fqn": "neurological.overviewGroup",
              "gIndex": "2",
              "gChildren": [
                "alert",
                "orientation",
                "communication"
              ]
            },
            {
              "elementKey": "glasgowGroup",
              "formCss": "grid-left-to-right-3",
              "fqn": "neurological.glasgowGroup",
              "gIndex": "3",
              "gChildren": [
                "eyeOpening",
                "verbalResponse",
                "bestMotorResponse",
                "glasgowCalculation"
              ]
            },
            {
              "elementKey": "conciousGroup",
              "formCss": "grid-left-to-right-3",
              "fqn": "neurological.conciousGroup",
              "gIndex": "4",
              "gChildren": [
                "loss",
                "duration"
              ]
            },
            {
              "elementKey": "eyesGroup",
              "formCss": "grid-left-to-right-3",
              "fqn": "neurological.eyesGroup",
              "gIndex": "5",
              "gChildren": [
                "leftPupilSize",
                "leftPupilResponseToLight",
                "spacerEys1",
                "rightPupilSize",
                "rightPupilResponseToLight",
                "bothPupils"
              ]
            },
            {
              "elementKey": "facilaGroup",
              "formCss": "grid-left-to-right-3",
              "fqn": "neurological.facilaGroup",
              "gIndex": "6",
              "gChildren": [
                "facialSymmetry"
              ]
            },
            {
              "elementKey": "motoGroup",
              "formCss": "grid-left-to-right-2",
              "fqn": "neurological.motoGroup",
              "gIndex": "7",
              "gChildren": [
                "handRight",
                "handLet",
                "armRight",
                "armLeft",
                "legRight",
                "legLeft",
                "armDrift",
                "otherArmDrift",
                "pressure"
              ]
            },
            {
              "elementKey": "cGroup",
              "formCss": "grid-left-to-right-3",
              "fqn": "neurological.cGroup",
              "gIndex": "8",
              "gChildren": [
                "comments",
                "resourcesMini",
                "resourcesMorse"
              ]
            }
          ],
          "ehr_data": {
            "table_name": "",
            "table_profession": "",
            "table_day": "",
            "table_time": "",
            "alert": "",
            "orientation": "",
            "communication": "",
            "eyeOpening": "",
            "verbalResponse": "",
            "bestMotorResponse": "",
            "glasgowCalculation": "0",
            "loss": "",
            "duration": "",
            "leftPupilSize": "",
            "leftPupilResponseToLight": "",
            "rightPupilSize": "",
            "rightPupilResponseToLight": "",
            "bothPupils": "",
            "facialSymmetry": "",
            "handRight": "",
            "handLet": "",
            "armRight": "",
            "armLeft": "",
            "legRight": "",
            "legLeft": "",
            "armDrift": "",
            "otherArmDrift": "",
            "pressure": "",
            "comments": ""
          }
        },
        "fqn": "neurological.table",
        "tableChildren": [
          "table_id",
          "table_day",
          "table_time",
          "alert",
          "orientation",
          "communication",
          "eyeOpening",
          "verbalResponse",
          "bestMotorResponse",
          "glasgowCalculation",
          "loss",
          "duration",
          "leftPupilSize",
          "leftPupilResponseToLight",
          "rightPupilSize",
          "rightPupilResponseToLight",
          "bothPupils",
          "facialSymmetry",
          "handRight",
          "handLet",
          "armRight",
          "armLeft",
          "legRight",
          "legLeft",
          "armDrift",
          "otherArmDrift",
          "pressure",
          "comments",
          "table_name",
          "table_profession"
        ],
        "hasRecHeader": true
      },
      "strokeAssessmentTable": {
        "elementKey": "strokeAssessmentTable",
        "pageElementIndex": "2",
        "pageKey": "neurological",
        "tableKey": "strokeAssessmentTable",
        "isTable": true,
        "form": {
          "elementKey": "strokeAssessmentTable",
          "label": "Stroke assessment",
          "addButtonText": "Add a stroke assessment",
          "formOption": "transpose",
          "formKey": "strokeAssessmentTable",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup2",
              "formCss": "record-header",
              "fqn": "neurological.hdrGroup2",
              "gIndex": "1",
              "gChildren": [
                "strokeAssessmentTable_name",
                "strokeAssessmentTable_profession",
                "strokeAssessmentTable_day",
                "strokeAssessmentTable_time"
              ]
            },
            {
              "elementKey": "strokeGroup",
              "formCss": "grid-left-to-right-3",
              "fqn": "neurological.strokeGroup",
              "gIndex": "2",
              "gChildren": [
                "levelOfConciousness",
                "levelOfConciousnessQuestions",
                "levelOfConciousnessCommands",
                "motorLeftArm",
                "motorRightArm",
                "spacerStroke1",
                "motorLeftLeg",
                "motorRightLeg",
                "limbAtaxia",
                "bestGaze",
                "visual",
                "facialPalsy",
                "sensory",
                "bestLanguage",
                "dysarthria",
                "extinctionAndInattention",
                "strokeAssessmentCalculation",
                "strokeComments"
              ]
            }
          ],
          "ehr_data": {
            "strokeAssessmentTable_name": "",
            "strokeAssessmentTable_profession": "",
            "strokeAssessmentTable_day": "",
            "strokeAssessmentTable_time": "",
            "levelOfConciousness": "",
            "levelOfConciousnessQuestions": "",
            "levelOfConciousnessCommands": "",
            "motorLeftArm": "",
            "motorRightArm": "",
            "motorLeftLeg": "",
            "motorRightLeg": "",
            "limbAtaxia": "",
            "bestGaze": "",
            "visual": "",
            "facialPalsy": "",
            "sensory": "",
            "bestLanguage": "",
            "dysarthria": "",
            "extinctionAndInattention": "",
            "strokeAssessmentCalculation": "0",
            "strokeComments": ""
          }
        },
        "fqn": "neurological.strokeAssessmentTable",
        "tableChildren": [
          "strokeAssessmentTable_id",
          "strokeAssessmentTable_day",
          "strokeAssessmentTable_time",
          "levelOfConciousness",
          "levelOfConciousnessQuestions",
          "levelOfConciousnessCommands",
          "motorLeftArm",
          "motorRightArm",
          "motorLeftLeg",
          "motorRightLeg",
          "limbAtaxia",
          "bestGaze",
          "visual",
          "facialPalsy",
          "sensory",
          "bestLanguage",
          "dysarthria",
          "extinctionAndInattention",
          "strokeAssessmentCalculation",
          "strokeComments",
          "strokeAssessmentTable_name",
          "strokeAssessmentTable_profession"
        ],
        "hasRecHeader": true
      },
      "del_table": {
        "elementKey": "del_table",
        "pageElementIndex": "3",
        "pageKey": "neurological",
        "tableKey": "del_table",
        "isTable": true,
        "form": {
          "elementKey": "del_table",
          "label": "Delirium risk assessment",
          "addButtonText": "Add a delirium assessment",
          "formOption": "transpose",
          "formKey": "del_table",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup3",
              "formCss": "record-header",
              "fqn": "neurological.hdrGroup3",
              "gIndex": "1",
              "gChildren": [
                "del_table_name",
                "del_table_profession",
                "del_table_day",
                "del_table_time"
              ]
            },
            {
              "elementKey": "delGroup",
              "formCss": "grid-left-to-right-1",
              "fqn": "neurological.delGroup",
              "gIndex": "2",
              "gChildren": [
                "del_individual",
                "del_medicaal",
                "del_medication"
              ]
            },
            {
              "elementKey": "delGroup2",
              "formCss": "grid-left-to-right-1",
              "fqn": "neurological.delGroup2",
              "gIndex": "3",
              "gChildren": [
                "delLabel1",
                "delLabel2",
                "del_doCam",
                "delLabel3",
                "del_comments"
              ]
            }
          ],
          "ehr_data": {
            "del_table_name": "",
            "del_table_profession": "",
            "del_table_day": "",
            "del_table_time": "",
            "del_individual": "",
            "del_medicaal": "",
            "del_medication": "",
            "del_doCam": "",
            "del_comments": ""
          }
        },
        "fqn": "neurological.del_table",
        "tableChildren": [
          "del_table_id",
          "del_table_day",
          "del_table_time",
          "del_individual",
          "del_medicaal",
          "del_medication",
          "del_doCam",
          "del_comments",
          "del_table_name",
          "del_table_profession"
        ],
        "hasRecHeader": true
      },
      "cam_table": {
        "elementKey": "cam_table",
        "pageElementIndex": "4",
        "pageKey": "neurological",
        "tableKey": "cam_table",
        "isTable": true,
        "form": {
          "elementKey": "cam_table",
          "label": "CAM assessment",
          "addButtonText": "Add a confusion assessment",
          "formOption": "transpose",
          "formKey": "cam_table",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup4",
              "formCss": "record-header",
              "fqn": "neurological.hdrGroup4",
              "gIndex": "1",
              "gChildren": [
                "cam_table_name",
                "cam_table_profession",
                "cam_table_day",
                "cam_table_time"
              ]
            },
            {
              "elementKey": "camGroup",
              "formCss": "grid-left-to-right-1",
              "fqn": "neurological.camGroup",
              "gIndex": "2",
              "gChildren": [
                "camLink",
                "cam_1",
                "cam_2",
                "cam_3",
                "cam_4",
                "cam_assessment"
              ]
            }
          ],
          "ehr_data": {
            "cam_table_name": "",
            "cam_table_profession": "",
            "cam_table_day": "",
            "cam_table_time": "",
            "cam_1": "",
            "cam_2": "",
            "cam_3": "",
            "cam_4": "",
            "cam_assessment": ""
          }
        },
        "fqn": "neurological.cam_table",
        "tableChildren": [
          "cam_table_id",
          "cam_table_day",
          "cam_table_time",
          "cam_1",
          "cam_2",
          "cam_3",
          "cam_4",
          "cam_assessment",
          "cam_table_name",
          "cam_table_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "respiratory": {
    "pageDataKey": "respiratory",
    "pIndex": "15",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "table_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "respiratory.name"
      },
      {
        "elementKey": "table_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "table_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "respiratory.profession"
      },
      {
        "elementKey": "table_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "respiratory.day"
      },
      {
        "elementKey": "table_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "respiratory.time"
      },
      {
        "elementKey": "airway",
        "formIndex": "1",
        "inputType": "checkset",
        "options": [
          {
            "key": "patent",
            "text": "Patent"
          },
          {
            "key": "obstructed",
            "text": "Obstructed"
          },
          {
            "key": "oralEndotrachealTube",
            "text": "Oral endotracheal tube"
          },
          {
            "key": "other",
            "text": "Other"
          }
        ],
        "tableColumn": "2",
        "fqn": "respiratory.airway"
      },
      {
        "elementKey": "oxygenTherapy",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "3",
        "fqn": "respiratory.oxygenTherapy"
      },
      {
        "elementKey": "flowRate",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "/lpm",
        "tableColumn": "4",
        "fqn": "respiratory.flowRate",
        "suffixText": "/lpm"
      },
      {
        "elementKey": "lul",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Normal",
            "text": "Clear"
          },
          {
            "key": "Wheeze",
            "text": "Wheeze"
          },
          {
            "key": "Crackles",
            "text": "Crackles course"
          },
          {
            "key": "CracklesFine",
            "text": "Crackles fine"
          },
          {
            "key": "Absent",
            "text": "Absent"
          },
          {
            "key": "Decreased",
            "text": "Decreased"
          }
        ],
        "tableColumn": "5",
        "fqn": "respiratory.lul"
      },
      {
        "elementKey": "aSpacer2",
        "formIndex": "1",
        "formCss": "grid-new-subsection",
        "inputType": "spacer",
        "fqn": "respiratory.aSpacer2"
      },
      {
        "elementKey": "lll",
        "formIndex": "1",
        "formCss": "grid-new-subsection",
        "inputType": "select",
        "options": [
          {
            "key": "Normal",
            "text": "Clear"
          },
          {
            "key": "Wheeze",
            "text": "Wheeze"
          },
          {
            "key": "Crackles",
            "text": "Crackles course"
          },
          {
            "key": "CracklesFine",
            "text": "Crackles fine"
          },
          {
            "key": "Absent",
            "text": "Absent"
          },
          {
            "key": "Decreased",
            "text": "Decreased"
          }
        ],
        "tableColumn": "6",
        "fqn": "respiratory.lll"
      },
      {
        "elementKey": "rul",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Normal",
            "text": "Clear"
          },
          {
            "key": "Wheeze",
            "text": "Wheeze"
          },
          {
            "key": "Crackles",
            "text": "Crackles course"
          },
          {
            "key": "CracklesFine",
            "text": "Crackles fine"
          },
          {
            "key": "Absent",
            "text": "Absent"
          },
          {
            "key": "Decreased",
            "text": "Decreased"
          }
        ],
        "tableColumn": "7",
        "fqn": "respiratory.rul"
      },
      {
        "elementKey": "rml",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Normal",
            "text": "Clear"
          },
          {
            "key": "Wheeze",
            "text": "Wheeze"
          },
          {
            "key": "Crackles",
            "text": "Crackles course"
          },
          {
            "key": "CracklesFine",
            "text": "Crackles fine"
          },
          {
            "key": "Absent",
            "text": "Absent"
          },
          {
            "key": "Decreased",
            "text": "Decreased"
          }
        ],
        "tableColumn": "8",
        "fqn": "respiratory.rml"
      },
      {
        "elementKey": "rll",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Normal",
            "text": "Clear"
          },
          {
            "key": "Wheeze",
            "text": "Wheeze"
          },
          {
            "key": "Crackles",
            "text": "Crackles course"
          },
          {
            "key": "CracklesFine",
            "text": "Crackles fine"
          },
          {
            "key": "Absent",
            "text": "Absent"
          },
          {
            "key": "Decreased",
            "text": "Decreased"
          }
        ],
        "tableColumn": "9",
        "fqn": "respiratory.rll"
      },
      {
        "elementKey": "respiratoryRhythm",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Regular",
            "text": "Regular"
          },
          {
            "key": "Irregular",
            "text": "Irregular"
          },
          {
            "key": "Paradoxical",
            "text": "Paradoxical"
          }
        ],
        "tableColumn": "10",
        "fqn": "respiratory.respiratoryRhythm"
      },
      {
        "elementKey": "respiratoryDepth",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Normal",
            "text": "Normal"
          },
          {
            "key": "Shallow",
            "text": "Shallow"
          },
          {
            "key": "Deep",
            "text": "Deep"
          }
        ],
        "tableColumn": "11",
        "fqn": "respiratory.respiratoryDepth"
      },
      {
        "elementKey": "aSpacer4",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "respiratory.aSpacer4"
      },
      {
        "elementKey": "cough",
        "formIndex": "1",
        "formCss": "grid-new-subsection",
        "inputType": "select",
        "options": [
          {
            "key": "No",
            "text": "No"
          },
          {
            "key": "Nonproductive",
            "text": "Nonproductive"
          },
          {
            "key": "Productive",
            "text": "Productive"
          }
        ],
        "tableColumn": "12",
        "fqn": "respiratory.cough"
      },
      {
        "elementKey": "sputumColour",
        "formIndex": "1",
        "formCss": "grid-new-subsection",
        "inputType": "select",
        "options": [
          {
            "key": "Mucoid",
            "text": "Mucoid"
          },
          {
            "key": "Purulent",
            "text": "Purulent"
          },
          {
            "key": "Yellow-green",
            "text": "Yellow-green"
          },
          {
            "key": "Rust-coloured",
            "text": "Rust-coloured"
          },
          {
            "key": "Pink, blood tinged",
            "text": "Pink, blood tinged"
          },
          {
            "key": "Pink, frothy",
            "text": "Pink, frothy"
          },
          {
            "key": "Profuse, colourless",
            "text": "Profuse, colourless"
          },
          {
            "key": "Bloody",
            "text": "Bloody"
          }
        ],
        "tableColumn": "13",
        "fqn": "respiratory.sputumColour"
      },
      {
        "elementKey": "sputumComments",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "14",
        "fqn": "respiratory.sputumComments"
      },
      {
        "elementKey": "generalComments",
        "formIndex": "1",
        "formCss": "grid-span-3-columns",
        "inputType": "textarea",
        "tableColumn": "15",
        "fqn": "respiratory.generalComments"
      }
    ],
    "pageElements": {
      "table": {
        "elementKey": "table",
        "pageElementIndex": "1",
        "pageKey": "respiratory",
        "tableKey": "table",
        "isTable": true,
        "form": {
          "elementKey": "table",
          "label": "Respiratory assessment",
          "addButtonText": "Add a respiratory assessment",
          "formOption": "transpose",
          "formKey": "table",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "respiratory.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "table_name",
                "table_profession",
                "table_day",
                "table_time"
              ]
            },
            {
              "elementKey": "respGroup1",
              "formCss": "grid-left-to-right-3",
              "fqn": "respiratory.respGroup1",
              "gIndex": "2",
              "gChildren": [
                "airway",
                "oxygenTherapy",
                "flowRate"
              ]
            },
            {
              "elementKey": "respGroup2",
              "formCss": "grid-left-to-right-3",
              "fqn": "respiratory.respGroup2",
              "gIndex": "3",
              "gChildren": [
                "lul",
                "aSpacer2",
                "lll",
                "rul",
                "rml",
                "rll"
              ]
            },
            {
              "elementKey": "respGrou3",
              "formCss": "grid-left-to-right-3",
              "fqn": "respiratory.respGrou3",
              "gIndex": "4",
              "gChildren": [
                "respiratoryRhythm",
                "respiratoryDepth",
                "aSpacer4",
                "cough",
                "sputumColour",
                "sputumComments",
                "generalComments"
              ]
            }
          ],
          "ehr_data": {
            "table_name": "",
            "table_profession": "",
            "table_day": "",
            "table_time": "",
            "airway": "",
            "oxygenTherapy": "",
            "flowRate": "",
            "lul": "",
            "lll": "",
            "rul": "",
            "rml": "",
            "rll": "",
            "respiratoryRhythm": "",
            "respiratoryDepth": "",
            "cough": "",
            "sputumColour": "",
            "sputumComments": "",
            "generalComments": ""
          }
        },
        "fqn": "respiratory.table",
        "tableChildren": [
          "table_id",
          "table_day",
          "table_time",
          "airway",
          "oxygenTherapy",
          "flowRate",
          "lul",
          "lll",
          "rul",
          "rml",
          "rll",
          "respiratoryRhythm",
          "respiratoryDepth",
          "cough",
          "sputumColour",
          "sputumComments",
          "generalComments",
          "table_name",
          "table_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "cardiovascular": {
    "pageDataKey": "cardiovascular",
    "pIndex": "16",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "table_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "cardiovascular.name"
      },
      {
        "elementKey": "table_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "table_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "cardiovascular.profession"
      },
      {
        "elementKey": "table_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "cardiovascular.day"
      },
      {
        "elementKey": "table_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "cardiovascular.time"
      },
      {
        "elementKey": "pulse",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Regular",
            "text": "Regular"
          },
          {
            "key": "Irregular",
            "text": "Irregular"
          },
          {
            "key": "Normal",
            "text": "Normal"
          },
          {
            "key": "Weak",
            "text": "Weak"
          },
          {
            "key": "Bounding",
            "text": "Bounding"
          }
        ],
        "tableColumn": "2",
        "fqn": "cardiovascular.pulse"
      },
      {
        "elementKey": "skinAppearance",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Normal",
            "text": "Appropriate for ethnicity"
          },
          {
            "key": "clammy",
            "text": "Clammy"
          },
          {
            "key": "dry",
            "text": "Dry"
          },
          {
            "key": "Pale",
            "text": "Pale"
          },
          {
            "key": "Mottled",
            "text": "Mottled"
          },
          {
            "key": "Cyanotic",
            "text": "Cyanotic"
          },
          {
            "key": "Flushed",
            "text": "Flushed"
          },
          {
            "key": "Jaundiced",
            "text": "Jaundiced"
          }
        ],
        "tableColumn": "3",
        "fqn": "cardiovascular.skinAppearance"
      },
      {
        "elementKey": "spacer1",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "cardiovascular.spacer1"
      },
      {
        "elementKey": "labelCapRefill",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "cardiovascular.labelCapRefill"
      },
      {
        "elementKey": "labelTemperature",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "cardiovascular.labelTemperature"
      },
      {
        "elementKey": "labelPeripheral",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "cardiovascular.labelPeripheral"
      },
      {
        "elementKey": "labelNailBed",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "cardiovascular.labelNailBed"
      },
      {
        "elementKey": "cardLabel2",
        "formIndex": "1",
        "formCss": "bold-text",
        "inputType": "form_label",
        "fqn": "cardiovascular.cardLabel2"
      },
      {
        "elementKey": "capRefillLeftHand",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "select",
        "options": [
          {
            "key": "normal",
            "text": "< 3 seconds"
          },
          {
            "key": "delayed",
            "text": "> 3 seconds"
          }
        ],
        "tableColumn": "4",
        "fqn": "cardiovascular.capRefillLeftHand"
      },
      {
        "elementKey": "temperatureRightHand",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "select",
        "options": [
          {
            "key": "Warm",
            "text": "Warm"
          },
          {
            "key": "Cool",
            "text": "Cool"
          },
          {
            "key": "Hot",
            "text": "Hot"
          }
        ],
        "tableColumn": "5",
        "fqn": "cardiovascular.temperatureRightHand"
      },
      {
        "elementKey": "peripheralEdemaRightHand",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "select",
        "options": [
          {
            "key": "No",
            "text": "None (0)"
          },
          {
            "key": "g1",
            "text": "1+"
          },
          {
            "key": "g2",
            "text": "2+"
          },
          {
            "key": "g3",
            "text": "3+"
          },
          {
            "key": "g4",
            "text": "4+"
          }
        ],
        "tableColumn": "6",
        "fqn": "cardiovascular.peripheralEdemaRightHand"
      },
      {
        "elementKey": "nailBedColourRightHand",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "select",
        "options": [
          {
            "key": "Pink",
            "text": "Appropriate for ethnicity"
          },
          {
            "key": "Cyanotic",
            "text": "Cyanotic"
          }
        ],
        "tableColumn": "7",
        "fqn": "cardiovascular.nailBedColourRightHand"
      },
      {
        "elementKey": "cardLabel3",
        "formIndex": "1",
        "formCss": "bold-text",
        "inputType": "form_label",
        "fqn": "cardiovascular.cardLabel3"
      },
      {
        "elementKey": "capRefillRightHand",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "select",
        "options": [
          {
            "key": "normal",
            "text": "< 3 seconds"
          },
          {
            "key": "delayed",
            "text": "> 3 seconds"
          }
        ],
        "tableColumn": "8",
        "fqn": "cardiovascular.capRefillRightHand"
      },
      {
        "elementKey": "temperatureLeftHand",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "select",
        "options": [
          {
            "key": "Warm",
            "text": "Warm"
          },
          {
            "key": "Cool",
            "text": "Cool"
          },
          {
            "key": "Hot",
            "text": "Hot"
          }
        ],
        "tableColumn": "9",
        "fqn": "cardiovascular.temperatureLeftHand"
      },
      {
        "elementKey": "peripheralEdemaLeftHand",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "select",
        "options": [
          {
            "key": "No",
            "text": "None (0)"
          },
          {
            "key": "g1",
            "text": "1+"
          },
          {
            "key": "g2",
            "text": "2+"
          },
          {
            "key": "g3",
            "text": "3+"
          },
          {
            "key": "g4",
            "text": "4+"
          }
        ],
        "tableColumn": "10",
        "fqn": "cardiovascular.peripheralEdemaLeftHand"
      },
      {
        "elementKey": "nailBedColourLeftHand",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "select",
        "options": [
          {
            "key": "Pink",
            "text": "Appropriate for ethnicity"
          },
          {
            "key": "Cyanotic",
            "text": "Cyanotic"
          }
        ],
        "tableColumn": "11",
        "fqn": "cardiovascular.nailBedColourLeftHand"
      },
      {
        "elementKey": "carLabel4",
        "formIndex": "1",
        "formCss": "bold-text",
        "inputType": "form_label",
        "fqn": "cardiovascular.carLabel4"
      },
      {
        "elementKey": "capRefillRightFoot",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "select",
        "options": [
          {
            "key": "normal",
            "text": "< 3 seconds"
          },
          {
            "key": "delayed",
            "text": "> 3 seconds"
          }
        ],
        "tableColumn": "12",
        "fqn": "cardiovascular.capRefillRightFoot"
      },
      {
        "elementKey": "temperatureRightFoot",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "select",
        "options": [
          {
            "key": "Warm",
            "text": "Warm"
          },
          {
            "key": "Cool",
            "text": "Cool"
          },
          {
            "key": "Hot",
            "text": "Hot"
          }
        ],
        "tableColumn": "13",
        "fqn": "cardiovascular.temperatureRightFoot"
      },
      {
        "elementKey": "peripheralEdemaRightFoot",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "select",
        "options": [
          {
            "key": "No",
            "text": "None (0)"
          },
          {
            "key": "g1",
            "text": "1+"
          },
          {
            "key": "g2",
            "text": "2+"
          },
          {
            "key": "g3",
            "text": "3+"
          },
          {
            "key": "g4",
            "text": "4+"
          }
        ],
        "tableColumn": "14",
        "fqn": "cardiovascular.peripheralEdemaRightFoot"
      },
      {
        "elementKey": "nailBedColourRightFoot",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "select",
        "options": [
          {
            "key": "Pink",
            "text": "Appropriate for ethnicity"
          },
          {
            "key": "Cyanotic",
            "text": "Cyanotic"
          }
        ],
        "tableColumn": "15",
        "fqn": "cardiovascular.nailBedColourRightFoot"
      },
      {
        "elementKey": "cardLabel5",
        "formIndex": "1",
        "formCss": "bold-text",
        "inputType": "form_label",
        "fqn": "cardiovascular.cardLabel5"
      },
      {
        "elementKey": "capRefillLeftFoot",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "select",
        "options": [
          {
            "key": "normal",
            "text": "< 3 seconds"
          },
          {
            "key": "delayed",
            "text": "> 3 seconds"
          }
        ],
        "tableColumn": "16",
        "fqn": "cardiovascular.capRefillLeftFoot"
      },
      {
        "elementKey": "temperatureLeftFoot",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "select",
        "options": [
          {
            "key": "Warm",
            "text": "Warm"
          },
          {
            "key": "Cool",
            "text": "Cool"
          },
          {
            "key": "Hot",
            "text": "Hot"
          }
        ],
        "tableColumn": "17",
        "fqn": "cardiovascular.temperatureLeftFoot"
      },
      {
        "elementKey": "peripheralEdemaLeftFoot",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "select",
        "options": [
          {
            "key": "No",
            "text": "None (0)"
          },
          {
            "key": "g1",
            "text": "1+"
          },
          {
            "key": "g2",
            "text": "2+"
          },
          {
            "key": "g3",
            "text": "3+"
          },
          {
            "key": "g4",
            "text": "4+"
          }
        ],
        "tableColumn": "18",
        "fqn": "cardiovascular.peripheralEdemaLeftFoot"
      },
      {
        "elementKey": "nailBedColourLeftFoot",
        "formIndex": "1",
        "formOption": "hideLabel",
        "inputType": "select",
        "options": [
          {
            "key": "Pink",
            "text": "Appropriate for ethnicity"
          },
          {
            "key": "Cyanotic",
            "text": "Cyanotic"
          }
        ],
        "tableColumn": "19",
        "fqn": "cardiovascular.nailBedColourLeftFoot"
      },
      {
        "elementKey": "comments",
        "formIndex": "1",
        "inputType": "textarea",
        "tableColumn": "20",
        "fqn": "cardiovascular.comments"
      }
    ],
    "pageElements": {
      "table": {
        "elementKey": "table",
        "pageElementIndex": "1",
        "pageKey": "cardiovascular",
        "tableKey": "table",
        "isTable": true,
        "form": {
          "elementKey": "table",
          "label": "Cardiovascular assessment",
          "addButtonText": "Add a cardiovascular assessment",
          "formOption": "transpose",
          "formKey": "table",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "cardiovascular.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "table_name",
                "table_profession",
                "table_day",
                "table_time"
              ]
            },
            {
              "elementKey": "cardGroup1",
              "formCss": "grid-left-to-right-3",
              "fqn": "cardiovascular.cardGroup1",
              "gIndex": "2",
              "gChildren": [
                "pulse",
                "skinAppearance"
              ]
            },
            {
              "elementKey": "cardGroup1",
              "formCss": "grid-left-to-right-5",
              "fqn": "cardiovascular.cardGroup1",
              "gIndex": "3",
              "gChildren": [
                "spacer1",
                "labelCapRefill",
                "labelTemperature",
                "labelPeripheral",
                "labelNailBed"
              ]
            },
            {
              "elementKey": "cardGroup2",
              "formCss": "grid-left-to-right-5 cardio-group",
              "fqn": "cardiovascular.cardGroup2",
              "gIndex": "4",
              "gChildren": [
                "cardLabel2",
                "capRefillLeftHand",
                "temperatureRightHand",
                "peripheralEdemaRightHand",
                "nailBedColourRightHand"
              ]
            },
            {
              "elementKey": "cardGroup3",
              "formCss": "grid-left-to-right-5 cardio-group",
              "fqn": "cardiovascular.cardGroup3",
              "gIndex": "5",
              "gChildren": [
                "cardLabel3",
                "capRefillRightHand",
                "temperatureLeftHand",
                "peripheralEdemaLeftHand",
                "nailBedColourLeftHand"
              ]
            },
            {
              "elementKey": "cardGroup4",
              "formCss": "grid-left-to-right-5 cardio-group",
              "fqn": "cardiovascular.cardGroup4",
              "gIndex": "6",
              "gChildren": [
                "carLabel4",
                "capRefillRightFoot",
                "temperatureRightFoot",
                "peripheralEdemaRightFoot",
                "nailBedColourRightFoot"
              ]
            },
            {
              "elementKey": "cardGroup5",
              "formCss": "grid-left-to-right-5 cardio-group",
              "fqn": "cardiovascular.cardGroup5",
              "gIndex": "7",
              "gChildren": [
                "cardLabel5",
                "capRefillLeftFoot",
                "temperatureLeftFoot",
                "peripheralEdemaLeftFoot",
                "nailBedColourLeftFoot"
              ]
            },
            {
              "elementKey": "cardGroup6",
              "formCss": "grid-left-to-right-1",
              "fqn": "cardiovascular.cardGroup6",
              "gIndex": "8",
              "gChildren": [
                "comments"
              ]
            }
          ],
          "ehr_data": {
            "table_name": "",
            "table_profession": "",
            "table_day": "",
            "table_time": "",
            "pulse": "",
            "skinAppearance": "",
            "capRefillLeftHand": "",
            "temperatureRightHand": "",
            "peripheralEdemaRightHand": "",
            "nailBedColourRightHand": "",
            "capRefillRightHand": "",
            "temperatureLeftHand": "",
            "peripheralEdemaLeftHand": "",
            "nailBedColourLeftHand": "",
            "capRefillRightFoot": "",
            "temperatureRightFoot": "",
            "peripheralEdemaRightFoot": "",
            "nailBedColourRightFoot": "",
            "capRefillLeftFoot": "",
            "temperatureLeftFoot": "",
            "peripheralEdemaLeftFoot": "",
            "nailBedColourLeftFoot": "",
            "comments": ""
          }
        },
        "fqn": "cardiovascular.table",
        "tableChildren": [
          "table_id",
          "table_day",
          "table_time",
          "pulse",
          "skinAppearance",
          "capRefillLeftHand",
          "temperatureRightHand",
          "peripheralEdemaRightHand",
          "nailBedColourRightHand",
          "capRefillRightHand",
          "temperatureLeftHand",
          "peripheralEdemaLeftHand",
          "nailBedColourLeftHand",
          "capRefillRightFoot",
          "temperatureRightFoot",
          "peripheralEdemaRightFoot",
          "nailBedColourRightFoot",
          "capRefillLeftFoot",
          "temperatureLeftFoot",
          "peripheralEdemaLeftFoot",
          "nailBedColourLeftFoot",
          "comments",
          "table_name",
          "table_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "gastrointestinal": {
    "pageDataKey": "gastrointestinal",
    "pIndex": "17",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "table_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "gastrointestinal.name"
      },
      {
        "elementKey": "table_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "table_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "gastrointestinal.profession"
      },
      {
        "elementKey": "table_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "gastrointestinal.day"
      },
      {
        "elementKey": "table_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "gastrointestinal.time"
      },
      {
        "elementKey": "bowel",
        "formIndex": "1",
        "inputType": "checkset",
        "options": [
          {
            "key": "normal",
            "text": "Patient’s pre-hospital baseline"
          },
          {
            "key": "constipation",
            "text": "Constipation"
          },
          {
            "key": "diarrhea",
            "text": "Diarrhea"
          },
          {
            "key": "melena",
            "text": "Melena"
          },
          {
            "key": "incontinent",
            "text": "Incontinent"
          }
        ],
        "tableColumn": "2",
        "fqn": "gastrointestinal.bowel"
      },
      {
        "elementKey": "bSounds",
        "formIndex": "1",
        "inputType": "checkset",
        "options": [
          {
            "key": "none",
            "text": "None"
          },
          {
            "key": "luq",
            "text": "LUQ"
          },
          {
            "key": "ruq",
            "text": "RUQ"
          },
          {
            "key": "llq",
            "text": "LLQ"
          },
          {
            "key": "rlq",
            "text": "RLQ"
          },
          {
            "key": "hypoactive",
            "text": "Hypoactive"
          },
          {
            "key": "hyperactive",
            "text": "Hyperactive"
          }
        ],
        "tableColumn": "3",
        "fqn": "gastrointestinal.bSounds"
      },
      {
        "elementKey": "condition",
        "formIndex": "1",
        "inputType": "checkset",
        "options": [
          {
            "key": "soft",
            "text": "Soft"
          },
          {
            "key": "tender",
            "text": "Tender"
          },
          {
            "key": "rigid",
            "text": "Rigid"
          },
          {
            "key": "guarding",
            "text": "Guarding"
          },
          {
            "key": "distended",
            "text": "Distended"
          },
          {
            "key": "scars",
            "text": "Scars"
          }
        ],
        "tableColumn": "4",
        "fqn": "gastrointestinal.condition"
      },
      {
        "elementKey": "spacer1",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "gastrointestinal.spacer1"
      },
      {
        "elementKey": "spacer2",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "gastrointestinal.spacer2"
      },
      {
        "elementKey": "pain",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Yes",
            "text": "Yes"
          },
          {
            "key": "No",
            "text": "No"
          }
        ],
        "tableColumn": "5",
        "fqn": "gastrointestinal.pain"
      },
      {
        "elementKey": "spacer3",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "gastrointestinal.spacer3"
      },
      {
        "elementKey": "spacer4",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "gastrointestinal.spacer4"
      },
      {
        "elementKey": "instructionLabel",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "gastrointestinal.instructionLabel"
      },
      {
        "elementKey": "emesisPresent",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "None",
            "text": "None"
          },
          {
            "key": "Nausea",
            "text": "Nausea"
          },
          {
            "key": "Vomiting",
            "text": "Vomiting"
          }
        ],
        "tableColumn": "6",
        "fqn": "gastrointestinal.emesisPresent"
      },
      {
        "elementKey": "colour",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Greenish-yellow",
            "text": "Greenish-yellow"
          },
          {
            "key": "Blood-tinged",
            "text": "Blood-tinged"
          },
          {
            "key": "Bright red",
            "text": "Bright red"
          },
          {
            "key": "Dark red",
            "text": "Dark red"
          },
          {
            "key": "Black",
            "text": "Black"
          }
        ],
        "tableColumn": "7",
        "fqn": "gastrointestinal.colour"
      },
      {
        "elementKey": "amount",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Small",
            "text": "Small"
          },
          {
            "key": "Moderate",
            "text": "Moderate"
          },
          {
            "key": "Large",
            "text": "Large"
          }
        ],
        "tableColumn": "8",
        "fqn": "gastrointestinal.amount"
      },
      {
        "elementKey": "description",
        "formIndex": "1",
        "formCss": "grid-span-3-columns",
        "inputType": "textarea",
        "tableColumn": "9",
        "fqn": "gastrointestinal.description"
      },
      {
        "elementKey": "eating",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Regular",
            "text": "Regular"
          },
          {
            "key": "Difficult",
            "text": "Difficult"
          }
        ],
        "tableColumn": "10",
        "fqn": "gastrointestinal.eating"
      },
      {
        "elementKey": "reason",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "11",
        "fqn": "gastrointestinal.reason"
      },
      {
        "elementKey": "spacer5",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "gastrointestinal.spacer5"
      },
      {
        "elementKey": "npoSinceDay",
        "formIndex": "1",
        "inputType": "visitDay",
        "tableColumn": "12",
        "validation": "visitDay",
        "fqn": "gastrointestinal.npoSinceDay"
      },
      {
        "elementKey": "npoSinceTime",
        "formIndex": "1",
        "inputType": "visitTime",
        "tableColumn": "13",
        "validation": "time24",
        "fqn": "gastrointestinal.npoSinceTime"
      },
      {
        "elementKey": "weightLoss",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "14",
        "fqn": "gastrointestinal.weightLoss"
      },
      {
        "elementKey": "lastBm",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "15",
        "fqn": "gastrointestinal.lastBm"
      },
      {
        "elementKey": "stoolColour",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Brown",
            "text": "Brown"
          },
          {
            "key": "Green",
            "text": "Green"
          },
          {
            "key": "Clay coloured",
            "text": "Clay coloured"
          },
          {
            "key": "Yellow",
            "text": "Yellow"
          },
          {
            "key": "Black",
            "text": "Black"
          },
          {
            "key": "Bright red",
            "text": "Bright red"
          },
          {
            "key": "Dark red",
            "text": "Dark red"
          }
        ],
        "tableColumn": "16",
        "fqn": "gastrointestinal.stoolColour"
      },
      {
        "elementKey": "stoolDescription",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Runny",
            "text": "Runny"
          },
          {
            "key": "Hard pellets",
            "text": "Hard pellets"
          }
        ],
        "tableColumn": "17",
        "fqn": "gastrointestinal.stoolDescription"
      },
      {
        "elementKey": "stoolAmount",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "18",
        "fqn": "gastrointestinal.stoolAmount"
      },
      {
        "elementKey": "stoolSource",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Observed",
            "text": "Observed"
          },
          {
            "key": "As per patient observed",
            "text": "As per patient observed"
          },
          {
            "key": "Not observed",
            "text": "Not observed"
          }
        ],
        "tableColumn": "19",
        "fqn": "gastrointestinal.stoolSource"
      },
      {
        "elementKey": "comments",
        "formIndex": "1",
        "embedRef": ".",
        "inputType": "textarea",
        "tableColumn": "20",
        "fqn": "gastrointestinal.comments"
      }
    ],
    "pageElements": {
      "table": {
        "elementKey": "table",
        "pageElementIndex": "1",
        "pageKey": "gastrointestinal",
        "tableKey": "table",
        "isTable": true,
        "form": {
          "elementKey": "table",
          "label": "Gastrointestinal assessment",
          "addButtonText": "Add a gastrointestinal assessment",
          "formOption": "transpose",
          "formKey": "table",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "gastrointestinal.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "table_name",
                "table_profession",
                "table_day",
                "table_time"
              ]
            },
            {
              "elementKey": "gasGroup1",
              "formCss": "grid-left-to-right-3",
              "fqn": "gastrointestinal.gasGroup1",
              "gIndex": "2",
              "gChildren": [
                "bowel",
                "bSounds",
                "condition",
                "spacer1",
                "spacer2",
                "pain",
                "spacer3",
                "spacer4",
                "instructionLabel"
              ]
            },
            {
              "elementKey": "emesis",
              "formCss": "grid-left-to-right-3",
              "fqn": "gastrointestinal.emesis",
              "gIndex": "3",
              "gChildren": [
                "emesisPresent",
                "colour",
                "amount",
                "description"
              ]
            },
            {
              "elementKey": "eatingGroup",
              "formCss": "grid-left-to-right-3",
              "fqn": "gastrointestinal.eatingGroup",
              "gIndex": "4",
              "gChildren": [
                "eating",
                "reason",
                "spacer5",
                "npoSinceDay",
                "npoSinceTime",
                "weightLoss"
              ]
            },
            {
              "elementKey": "stool",
              "formCss": "grid-left-to-right-3",
              "fqn": "gastrointestinal.stool",
              "gIndex": "5",
              "gChildren": [
                "lastBm",
                "stoolColour",
                "stoolDescription",
                "stoolAmount",
                "stoolSource"
              ]
            },
            {
              "elementKey": "gasComments",
              "formCss": "grid-left-to-right-1 section-divider",
              "fqn": "gastrointestinal.gasComments",
              "gIndex": "6",
              "gChildren": [
                "comments"
              ]
            }
          ],
          "ehr_data": {
            "table_name": "",
            "table_profession": "",
            "table_day": "",
            "table_time": "",
            "bowel": "",
            "bSounds": "",
            "condition": "",
            "pain": "",
            "emesisPresent": "",
            "colour": "",
            "amount": "",
            "description": "",
            "eating": "",
            "reason": "",
            "npoSinceDay": "",
            "npoSinceTime": "",
            "weightLoss": "",
            "lastBm": "",
            "stoolColour": "",
            "stoolDescription": "",
            "stoolAmount": "",
            "stoolSource": "",
            "comments": ""
          }
        },
        "fqn": "gastrointestinal.table",
        "tableChildren": [
          "table_id",
          "table_day",
          "table_time",
          "bowel",
          "bSounds",
          "condition",
          "pain",
          "emesisPresent",
          "colour",
          "amount",
          "description",
          "eating",
          "reason",
          "npoSinceDay",
          "npoSinceTime",
          "weightLoss",
          "lastBm",
          "stoolColour",
          "stoolDescription",
          "stoolAmount",
          "stoolSource",
          "comments",
          "table_name",
          "table_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "genitourinary": {
    "pageDataKey": "genitourinary",
    "pIndex": "18",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "table_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "genitourinary.name"
      },
      {
        "elementKey": "table_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "table_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "genitourinary.profession"
      },
      {
        "elementKey": "table_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "genitourinary.day"
      },
      {
        "elementKey": "table_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "genitourinary.time"
      },
      {
        "elementKey": "urinaryGroup1",
        "formIndex": "1",
        "inputType": "checkset",
        "options": [
          {
            "key": "none",
            "text": "None"
          },
          {
            "key": "increasedFrequency",
            "text": "Increased frequency"
          },
          {
            "key": "dysuria",
            "text": "Dysuria"
          },
          {
            "key": "hermaturia",
            "text": "Hermaturia"
          },
          {
            "key": "oliguria",
            "text": "Oliguria"
          },
          {
            "key": "incontinence",
            "text": "Incontinence"
          },
          {
            "key": "retention",
            "text": "Retention"
          },
          {
            "key": "distention",
            "text": "Distention"
          }
        ],
        "tableColumn": "2",
        "fqn": "genitourinary.urinaryGroup1"
      },
      {
        "elementKey": "lastVoidedDay",
        "formIndex": "1",
        "inputType": "visitDay",
        "tableColumn": "3",
        "validation": "visitDay",
        "fqn": "genitourinary.lastVoidedDay"
      },
      {
        "elementKey": "lastVoidedTime",
        "formIndex": "1",
        "inputType": "visitTime",
        "tableColumn": "4",
        "validation": "time24",
        "fqn": "genitourinary.lastVoidedTime"
      },
      {
        "elementKey": "colour",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Pale yellow",
            "text": "Pale yellow"
          },
          {
            "key": "Dark yellow",
            "text": "Dark yellow"
          },
          {
            "key": "Amber",
            "text": "Amber"
          },
          {
            "key": "Red/blood",
            "text": "Red/blood"
          },
          {
            "key": "Other",
            "text": "Other"
          }
        ],
        "tableColumn": "5",
        "fqn": "genitourinary.colour"
      },
      {
        "elementKey": "consistency",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Clear",
            "text": "Clear"
          },
          {
            "key": "Hazy",
            "text": "Hazy"
          },
          {
            "key": "Cloudy",
            "text": "Cloudy"
          },
          {
            "key": "Turbid",
            "text": "Turbid"
          }
        ],
        "tableColumn": "6",
        "fqn": "genitourinary.consistency"
      },
      {
        "elementKey": "diaper",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Yes",
            "text": "Yes"
          },
          {
            "key": "No",
            "text": "No"
          }
        ],
        "tableColumn": "7",
        "fqn": "genitourinary.diaper"
      },
      {
        "elementKey": "toilettingMethod",
        "formIndex": "1",
        "inputType": "checkset",
        "options": [
          {
            "key": "bedpan",
            "text": "Bedpan"
          },
          {
            "key": "commode",
            "text": "Commode"
          },
          {
            "key": "urinal",
            "text": "Urinal"
          },
          {
            "key": "helpToTheToilet",
            "text": "Help to the toilet"
          },
          {
            "key": "brief",
            "text": "Brief"
          },
          {
            "key": "meshPant/pad",
            "text": "Mesh pant/pad"
          },
          {
            "key": "cleanIntermittentCatheter",
            "text": "Clean intermittent catheter"
          },
          {
            "key": "indwellingCatheter",
            "text": "Indwelling catheter"
          }
        ],
        "tableColumn": "8",
        "fqn": "genitourinary.toilettingMethod"
      },
      {
        "elementKey": "foley",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Yes",
            "text": "Yes"
          },
          {
            "key": "No",
            "text": "No"
          }
        ],
        "tableColumn": "9",
        "fqn": "genitourinary.foley"
      },
      {
        "elementKey": "foleyType",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "10",
        "fqn": "genitourinary.foleyType"
      },
      {
        "elementKey": "foleySize",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "11",
        "fqn": "genitourinary.foleySize"
      },
      {
        "elementKey": "lastChange",
        "formIndex": "1",
        "inputType": "visitDay",
        "tableColumn": "12",
        "validation": "visitDay",
        "fqn": "genitourinary.lastChange"
      },
      {
        "elementKey": "lastChangeTime",
        "formIndex": "1",
        "inputType": "visitTime",
        "tableColumn": "13",
        "validation": "time24",
        "fqn": "genitourinary.lastChangeTime"
      },
      {
        "elementKey": "pelvicPain",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Yes",
            "text": "Yes"
          },
          {
            "key": "No",
            "text": "No"
          }
        ],
        "tableColumn": "14",
        "fqn": "genitourinary.pelvicPain"
      },
      {
        "elementKey": "location",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "15",
        "fqn": "genitourinary.location"
      },
      {
        "elementKey": "pelvicPainSource",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Observed",
            "text": "Observed"
          },
          {
            "key": "As per patient observed",
            "text": "As per patient observed"
          },
          {
            "key": "Not observed",
            "text": "Not observed"
          }
        ],
        "tableColumn": "16",
        "fqn": "genitourinary.pelvicPainSource"
      },
      {
        "elementKey": "aLabel",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "genitourinary.aLabel"
      },
      {
        "elementKey": "discharge",
        "formIndex": "1",
        "inputType": "checkset",
        "options": [
          {
            "key": "discharge",
            "text": "Discharge"
          },
          {
            "key": "bleeding",
            "text": "Bleeding"
          }
        ],
        "tableColumn": "17",
        "fqn": "genitourinary.discharge"
      },
      {
        "elementKey": "lastMenstrualPeriodDate",
        "formIndex": "1",
        "inputType": "date",
        "tableColumn": "18",
        "fqn": "genitourinary.lastMenstrualPeriodDate"
      },
      {
        "elementKey": "description",
        "formIndex": "1",
        "formCss": "grid-span-3-columns",
        "inputType": "text",
        "tableColumn": "19",
        "fqn": "genitourinary.description"
      },
      {
        "elementKey": "pregnant",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Yes",
            "text": "Yes"
          },
          {
            "key": "No",
            "text": "No"
          },
          {
            "key": "Unknown",
            "text": "Unknown"
          }
        ],
        "tableColumn": "20",
        "fqn": "genitourinary.pregnant"
      },
      {
        "elementKey": "gravida",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "21",
        "fqn": "genitourinary.gravida"
      },
      {
        "elementKey": "para",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "22",
        "fqn": "genitourinary.para"
      },
      {
        "elementKey": "livingChildren",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "23",
        "fqn": "genitourinary.livingChildren"
      },
      {
        "elementKey": "comments",
        "formIndex": "1",
        "inputType": "textarea",
        "tableColumn": "24",
        "fqn": "genitourinary.comments"
      }
    ],
    "pageElements": {
      "table": {
        "elementKey": "table",
        "pageElementIndex": "1",
        "pageKey": "genitourinary",
        "tableKey": "table",
        "isTable": true,
        "form": {
          "elementKey": "table",
          "label": "Genitourinary assessment",
          "addButtonText": "Add a genitourinary assessment",
          "formOption": "transpose",
          "formKey": "table",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "genitourinary.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "table_name",
                "table_profession",
                "table_day",
                "table_time"
              ]
            },
            {
              "elementKey": "urinaryGroup2",
              "formCss": "grid-left-to-right-3",
              "fqn": "genitourinary.urinaryGroup2",
              "gIndex": "2",
              "gChildren": [
                "urinaryGroup1",
                "lastVoidedDay",
                "lastVoidedTime",
                "colour",
                "consistency",
                "diaper",
                "toilettingMethod"
              ]
            },
            {
              "elementKey": "foleyGroup",
              "formCss": "grid-left-to-right-3",
              "fqn": "genitourinary.foleyGroup",
              "gIndex": "3",
              "gChildren": [
                "foley",
                "foleyType",
                "foleySize",
                "lastChange",
                "lastChangeTime"
              ]
            },
            {
              "elementKey": "pelvicGroup",
              "formCss": "grid-left-to-right-3",
              "fqn": "genitourinary.pelvicGroup",
              "gIndex": "4",
              "gChildren": [
                "pelvicPain",
                "location",
                "pelvicPainSource",
                "aLabel"
              ]
            },
            {
              "elementKey": "vaginal",
              "formCss": "grid-left-to-right-3",
              "fqn": "genitourinary.vaginal",
              "gIndex": "5",
              "gChildren": [
                "discharge",
                "lastMenstrualPeriodDate",
                "description"
              ]
            },
            {
              "elementKey": "pregnantGroup",
              "formCss": "grid-left-to-right-3",
              "fqn": "genitourinary.pregnantGroup",
              "gIndex": "6",
              "gChildren": [
                "pregnant",
                "gravida",
                "para",
                "livingChildren"
              ]
            },
            {
              "elementKey": "cGroup18-7",
              "formCss": "grid-left-to-right-1",
              "fqn": "genitourinary.cGroup18-7",
              "gIndex": "7",
              "gChildren": [
                "comments"
              ]
            }
          ],
          "ehr_data": {
            "table_name": "",
            "table_profession": "",
            "table_day": "",
            "table_time": "",
            "urinaryGroup1": "",
            "lastVoidedDay": "",
            "lastVoidedTime": "",
            "colour": "",
            "consistency": "",
            "diaper": "",
            "toilettingMethod": "",
            "foley": "",
            "foleyType": "",
            "foleySize": "",
            "lastChange": "",
            "lastChangeTime": "",
            "pelvicPain": "",
            "location": "",
            "pelvicPainSource": "",
            "discharge": "",
            "lastMenstrualPeriodDate": "",
            "description": "",
            "pregnant": "",
            "gravida": "",
            "para": "",
            "livingChildren": "",
            "comments": ""
          }
        },
        "fqn": "genitourinary.table",
        "tableChildren": [
          "table_id",
          "table_day",
          "table_time",
          "urinaryGroup1",
          "lastVoidedDay",
          "lastVoidedTime",
          "colour",
          "consistency",
          "diaper",
          "toilettingMethod",
          "foley",
          "foleyType",
          "foleySize",
          "lastChange",
          "lastChangeTime",
          "pelvicPain",
          "location",
          "pelvicPainSource",
          "discharge",
          "lastMenstrualPeriodDate",
          "description",
          "pregnant",
          "gravida",
          "para",
          "livingChildren",
          "comments",
          "table_name",
          "table_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "musculoskeletal": {
    "pageDataKey": "musculoskeletal",
    "pIndex": "19",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "table_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "musculoskeletal.name"
      },
      {
        "elementKey": "table_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "table_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "musculoskeletal.profession"
      },
      {
        "elementKey": "table_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "musculoskeletal.day"
      },
      {
        "elementKey": "table_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "musculoskeletal.time"
      },
      {
        "elementKey": "swelling",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Present",
            "text": "Present"
          },
          {
            "key": "Absent",
            "text": "Absent"
          }
        ],
        "tableColumn": "2",
        "fqn": "musculoskeletal.swelling"
      },
      {
        "elementKey": "pain",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Present",
            "text": "Present"
          },
          {
            "key": "Absent",
            "text": "Absent"
          }
        ],
        "tableColumn": "3",
        "fqn": "musculoskeletal.pain"
      },
      {
        "elementKey": "deformity",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Present",
            "text": "Present"
          },
          {
            "key": "Absent",
            "text": "Absent"
          }
        ],
        "tableColumn": "4",
        "fqn": "musculoskeletal.deformity"
      },
      {
        "elementKey": "movement",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Normal",
            "text": "Normal"
          },
          {
            "key": "Decreased",
            "text": "Decreased"
          },
          {
            "key": "Absent",
            "text": "Absent"
          }
        ],
        "tableColumn": "5",
        "fqn": "musculoskeletal.movement"
      },
      {
        "elementKey": "sensation",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Present",
            "text": "Present"
          },
          {
            "key": "Absent",
            "text": "Absent"
          },
          {
            "key": "Numb",
            "text": "Numb"
          }
        ],
        "tableColumn": "6",
        "fqn": "musculoskeletal.sensation"
      },
      {
        "elementKey": "colour",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Flesh",
            "text": "Appropriate for ethnicity"
          },
          {
            "key": "Pale",
            "text": "Pale"
          },
          {
            "key": "Cynanotic",
            "text": "Cyanotic"
          }
        ],
        "tableColumn": "7",
        "fqn": "musculoskeletal.colour"
      },
      {
        "elementKey": "temp",
        "assetBase": "?",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Hot",
            "text": "Hot"
          },
          {
            "key": "Warm",
            "text": "Warm"
          },
          {
            "key": "Cold",
            "text": "Cold"
          }
        ],
        "tableColumn": "8",
        "fqn": "musculoskeletal.temp"
      },
      {
        "elementKey": "useOfAmbulatoryAid",
        "assetBase": "?",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Yes",
            "text": "Yes"
          },
          {
            "key": "No",
            "text": "No"
          }
        ],
        "tableColumn": "10",
        "fqn": "musculoskeletal.useOfAmbulatoryAid"
      },
      {
        "elementKey": "type",
        "assetBase": "?",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Walker",
            "text": "Walker"
          },
          {
            "key": "Cane",
            "text": "Cane"
          },
          {
            "key": "One crutch",
            "text": "One crutch"
          },
          {
            "key": "Two crutches",
            "text": "Two crutches"
          },
          {
            "key": "Wheelchair",
            "text": "Wheelchair"
          },
          {
            "key": "Other",
            "text": "Other"
          }
        ],
        "tableColumn": "11",
        "fqn": "musculoskeletal.type"
      },
      {
        "elementKey": "comments",
        "assetBase": "?",
        "formIndex": "1",
        "inputType": "textarea",
        "tableColumn": "12",
        "fqn": "musculoskeletal.comments"
      }
    ],
    "pageElements": {
      "table": {
        "elementKey": "table",
        "pageElementIndex": "1",
        "pageKey": "musculoskeletal",
        "tableKey": "table",
        "isTable": true,
        "form": {
          "elementKey": "table",
          "label": "Musculoskeletal assessment",
          "addButtonText": "Add a musculoskeletal assessment",
          "formOption": "transpose",
          "formKey": "table",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "musculoskeletal.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "table_name",
                "table_profession",
                "table_day",
                "table_time"
              ]
            },
            {
              "elementKey": "cGroup19-2",
              "formCss": "grid-left-to-right-3",
              "fqn": "musculoskeletal.cGroup19-2",
              "gIndex": "2",
              "gChildren": [
                "swelling",
                "pain",
                "deformity",
                "movement",
                "sensation",
                "colour",
                "temp"
              ]
            },
            {
              "elementKey": "gAmbulation",
              "formCss": "grid-left-to-right-3",
              "fqn": "musculoskeletal.gAmbulation",
              "gIndex": "3",
              "gChildren": [
                "useOfAmbulatoryAid",
                "type"
              ]
            },
            {
              "elementKey": "cGroup3",
              "formCss": "grid-left-to-right-1",
              "fqn": "musculoskeletal.cGroup3",
              "gIndex": "4",
              "gChildren": [
                "comments"
              ]
            }
          ],
          "ehr_data": {
            "table_name": "",
            "table_profession": "",
            "table_day": "",
            "table_time": "",
            "swelling": "",
            "pain": "",
            "deformity": "",
            "movement": "",
            "sensation": "",
            "colour": "",
            "temp": "",
            "useOfAmbulatoryAid": "",
            "type": "",
            "comments": ""
          }
        },
        "fqn": "musculoskeletal.table",
        "tableChildren": [
          "table_id",
          "table_day",
          "table_time",
          "swelling",
          "pain",
          "deformity",
          "movement",
          "sensation",
          "colour",
          "temp",
          "useOfAmbulatoryAid",
          "type",
          "comments",
          "table_name",
          "table_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "pain": {
    "pageDataKey": "pain",
    "pIndex": "20",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "table_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "pain.name"
      },
      {
        "elementKey": "table_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "table_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "pain.profession"
      },
      {
        "elementKey": "table_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "pain.day"
      },
      {
        "elementKey": "table_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "pain.time"
      },
      {
        "elementKey": "location",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "2",
        "fqn": "pain.location"
      },
      {
        "elementKey": "painScale",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "/10",
        "tableColumn": "3",
        "fqn": "pain.painScale",
        "suffixText": "/10"
      },
      {
        "elementKey": "respiratoryRate",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "br/min",
        "tableColumn": "4",
        "fqn": "pain.respiratoryRate",
        "suffixText": "br/min"
      },
      {
        "elementKey": "onset",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "5",
        "fqn": "pain.onset"
      },
      {
        "elementKey": "type",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "6",
        "fqn": "pain.type"
      },
      {
        "elementKey": "alleviationAssociatedSymptoms",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "7",
        "fqn": "pain.alleviationAssociatedSymptoms"
      },
      {
        "elementKey": "alleviation",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "8",
        "fqn": "pain.alleviation"
      },
      {
        "elementKey": "radiation",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "8",
        "fqn": "pain.radiation"
      },
      {
        "elementKey": "precipitatingEvents",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "9",
        "fqn": "pain.precipitatingEvents"
      },
      {
        "elementKey": "comments",
        "formIndex": "1",
        "formCss": "grid-span-3-columns",
        "inputType": "textarea",
        "tableColumn": "10",
        "fqn": "pain.comments"
      },
      {
        "elementKey": "location2",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "11",
        "fqn": "pain.location2"
      },
      {
        "elementKey": "painScale2",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "/10",
        "tableColumn": "12",
        "fqn": "pain.painScale2",
        "suffixText": "/10"
      },
      {
        "elementKey": "respiratoryRate2",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "br/min",
        "tableColumn": "13",
        "fqn": "pain.respiratoryRate2",
        "suffixText": "br/min"
      },
      {
        "elementKey": "onset2",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "14",
        "fqn": "pain.onset2"
      },
      {
        "elementKey": "type2",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "15",
        "fqn": "pain.type2"
      },
      {
        "elementKey": "alleviationAssociatedSymptoms2",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "16",
        "fqn": "pain.alleviationAssociatedSymptoms2"
      },
      {
        "elementKey": "alleviation2",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "17",
        "fqn": "pain.alleviation2"
      },
      {
        "elementKey": "radiation2",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "18",
        "fqn": "pain.radiation2"
      },
      {
        "elementKey": "precipitatingEvents2",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "19",
        "fqn": "pain.precipitatingEvents2"
      },
      {
        "elementKey": "comments2",
        "formIndex": "1",
        "formCss": "grid-span-3-columns",
        "inputType": "textarea",
        "tableColumn": "20",
        "fqn": "pain.comments2"
      }
    ],
    "pageElements": {
      "table": {
        "elementKey": "table",
        "pageElementIndex": "1",
        "pageKey": "pain",
        "tableKey": "table",
        "isTable": true,
        "form": {
          "elementKey": "table",
          "label": "Pain assessment",
          "addButtonText": "Add a pain assessment",
          "formOption": "transpose",
          "formKey": "table",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "pain.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "table_name",
                "table_profession",
                "table_day",
                "table_time"
              ]
            },
            {
              "elementKey": "cGroup20-2",
              "formCss": "grid-left-to-right-3",
              "fqn": "pain.cGroup20-2",
              "gIndex": "2",
              "gChildren": [
                "location",
                "painScale",
                "respiratoryRate",
                "onset",
                "type",
                "alleviationAssociatedSymptoms",
                "alleviation",
                "radiation",
                "precipitatingEvents",
                "comments"
              ]
            },
            {
              "elementKey": "cGroup20-3",
              "formCss": "grid-left-to-right-3",
              "fqn": "pain.cGroup20-3",
              "gIndex": "3",
              "gChildren": [
                "location2",
                "painScale2",
                "respiratoryRate2",
                "onset2",
                "type2",
                "alleviationAssociatedSymptoms2",
                "alleviation2",
                "radiation2",
                "precipitatingEvents2",
                "comments2"
              ]
            }
          ],
          "ehr_data": {
            "table_name": "",
            "table_profession": "",
            "table_day": "",
            "table_time": "",
            "location": "",
            "painScale": "",
            "respiratoryRate": "",
            "onset": "",
            "type": "",
            "alleviationAssociatedSymptoms": "",
            "alleviation": "",
            "radiation": "",
            "precipitatingEvents": "",
            "comments": "",
            "location2": "",
            "painScale2": "",
            "respiratoryRate2": "",
            "onset2": "",
            "type2": "",
            "alleviationAssociatedSymptoms2": "",
            "alleviation2": "",
            "radiation2": "",
            "precipitatingEvents2": "",
            "comments2": ""
          }
        },
        "fqn": "pain.table",
        "tableChildren": [
          "table_id",
          "table_day",
          "table_time",
          "location",
          "painScale",
          "respiratoryRate",
          "onset",
          "type",
          "alleviationAssociatedSymptoms",
          "alleviation",
          "radiation",
          "precipitatingEvents",
          "comments",
          "location2",
          "painScale2",
          "respiratoryRate2",
          "onset2",
          "type2",
          "alleviationAssociatedSymptoms2",
          "alleviation2",
          "radiation2",
          "precipitatingEvents2",
          "comments2",
          "table_name",
          "table_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "biopsychosocial": {
    "pageDataKey": "biopsychosocial",
    "pIndex": "21",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "table_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "biopsychosocial.name"
      },
      {
        "elementKey": "table_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "table_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "biopsychosocial.profession"
      },
      {
        "elementKey": "table_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "biopsychosocial.day"
      },
      {
        "elementKey": "table_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "biopsychosocial.time"
      },
      {
        "elementKey": "hygieneGrooming",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Good",
            "text": "Good"
          },
          {
            "key": "Requires attention",
            "text": "Requires attention"
          }
        ],
        "tableColumn": "2",
        "fqn": "biopsychosocial.hygieneGrooming"
      },
      {
        "elementKey": "hygieneComments",
        "formIndex": "1",
        "formCss": "grid-span-3-columns",
        "inputType": "textarea",
        "tableColumn": "3",
        "fqn": "biopsychosocial.hygieneComments"
      },
      {
        "elementKey": "behaviour",
        "formIndex": "1",
        "inputType": "checkset",
        "options": [
          {
            "key": "calm",
            "text": "Calm"
          },
          {
            "key": "cooperative",
            "text": "Cooperative"
          },
          {
            "key": "agitated",
            "text": "Agitated"
          },
          {
            "key": "flatAffect",
            "text": "Flat affect"
          },
          {
            "key": "threatening",
            "text": "Threatening"
          },
          {
            "key": "physicallyAgressive",
            "text": "Physically agressive"
          },
          {
            "key": "uncommunicative",
            "text": "Uncommunicative"
          }
        ],
        "tableColumn": "4",
        "fqn": "biopsychosocial.behaviour"
      },
      {
        "elementKey": "hallucinations",
        "formIndex": "1",
        "inputType": "checkset",
        "options": [
          {
            "key": "none",
            "text": "None"
          },
          {
            "key": "visual",
            "text": "Visual"
          },
          {
            "key": "auditory",
            "text": "Auditory"
          },
          {
            "key": "olafactory",
            "text": "Olafactory"
          }
        ],
        "tableColumn": "5",
        "fqn": "biopsychosocial.hallucinations"
      },
      {
        "elementKey": "suicidal",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "None",
            "text": "None"
          },
          {
            "key": "Ideation",
            "text": "Ideation"
          },
          {
            "key": "Attempt",
            "text": "Attempt"
          }
        ],
        "tableColumn": "6",
        "fqn": "biopsychosocial.suicidal"
      },
      {
        "elementKey": "homicidal",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "None",
            "text": "None"
          },
          {
            "key": "Ideation",
            "text": "Ideation"
          }
        ],
        "tableColumn": "7",
        "fqn": "biopsychosocial.homicidal"
      },
      {
        "elementKey": "speech",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Clear and coherent",
            "text": "Clear and coherent"
          },
          {
            "key": "Other",
            "text": "Other"
          }
        ],
        "tableColumn": "8",
        "fqn": "biopsychosocial.speech"
      },
      {
        "elementKey": "label21-4",
        "formIndex": "1",
        "formCss": "grid-span-3-columns",
        "inputType": "form_label",
        "fqn": "biopsychosocial.label21-4"
      },
      {
        "elementKey": "domesticViolence",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Didn't ask",
            "text": "Didn't ask"
          },
          {
            "key": "Yes",
            "text": "Yes"
          },
          {
            "key": "No",
            "text": "No"
          }
        ],
        "tableColumn": "9",
        "fqn": "biopsychosocial.domesticViolence"
      },
      {
        "elementKey": "label21-5",
        "formIndex": "1",
        "formCss": "grid-span-3-columns",
        "inputType": "form_label",
        "fqn": "biopsychosocial.label21-5"
      },
      {
        "elementKey": "requestContact",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Didn't ask",
            "text": "Didn't ask"
          },
          {
            "key": "Yes",
            "text": "Yes"
          },
          {
            "key": "No",
            "text": "No"
          }
        ],
        "tableColumn": "10",
        "fqn": "biopsychosocial.requestContact"
      },
      {
        "elementKey": "supportPerson",
        "formIndex": "1",
        "formCss": "grid-new-subsection",
        "inputType": "text",
        "tableColumn": "11",
        "fqn": "biopsychosocial.supportPerson"
      },
      {
        "elementKey": "supportComments",
        "formIndex": "1",
        "formCss": "grid-span-2-columns",
        "inputType": "textarea",
        "tableColumn": "12",
        "fqn": "biopsychosocial.supportComments"
      },
      {
        "elementKey": "securityPolicePresent",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "13",
        "fqn": "biopsychosocial.securityPolicePresent"
      },
      {
        "elementKey": "securityComments",
        "formIndex": "1",
        "formCss": "grid-span-2-columns",
        "inputType": "textarea",
        "tableColumn": "14",
        "fqn": "biopsychosocial.securityComments"
      },
      {
        "elementKey": "patientRestrained",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Yes",
            "text": "Yes"
          },
          {
            "key": "No",
            "text": "No"
          }
        ],
        "tableColumn": "15",
        "fqn": "biopsychosocial.patientRestrained"
      },
      {
        "elementKey": "restraintDay",
        "formIndex": "1",
        "inputType": "visitDay",
        "tableColumn": "16",
        "validation": "visitDay",
        "fqn": "biopsychosocial.restraintDay"
      },
      {
        "elementKey": "restraintTime",
        "formIndex": "1",
        "inputType": "visitTime",
        "tableColumn": "17",
        "validation": "time24",
        "fqn": "biopsychosocial.restraintTime"
      },
      {
        "elementKey": "restraintComments",
        "formIndex": "1",
        "formCss": "grid-span-3-columns",
        "inputType": "textarea",
        "tableColumn": "18",
        "fqn": "biopsychosocial.restraintComments"
      },
      {
        "elementKey": "generalComments",
        "formIndex": "1",
        "inputType": "textarea",
        "tableColumn": "19",
        "fqn": "biopsychosocial.generalComments"
      }
    ],
    "pageElements": {
      "table": {
        "elementKey": "table",
        "pageElementIndex": "1",
        "pageKey": "biopsychosocial",
        "tableKey": "table",
        "isTable": true,
        "form": {
          "elementKey": "table",
          "label": "Biopsychosocial assessment",
          "addButtonText": "Add a biopsychosocial assessment",
          "formOption": "transpose",
          "formKey": "table",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "biopsychosocial.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "table_name",
                "table_profession",
                "table_day",
                "table_time"
              ]
            },
            {
              "elementKey": "cGroup21-2",
              "formCss": "grid-left-to-right-3",
              "fqn": "biopsychosocial.cGroup21-2",
              "gIndex": "2",
              "gChildren": [
                "hygieneGrooming",
                "hygieneComments",
                "behaviour"
              ]
            },
            {
              "elementKey": "state",
              "formCss": "grid-left-to-right-3",
              "fqn": "biopsychosocial.state",
              "gIndex": "3",
              "gChildren": [
                "hallucinations",
                "suicidal",
                "homicidal",
                "speech"
              ]
            },
            {
              "elementKey": "support",
              "formCss": "grid-left-to-right-3",
              "fqn": "biopsychosocial.support",
              "gIndex": "4",
              "gChildren": [
                "label21-4",
                "domesticViolence",
                "label21-5",
                "requestContact",
                "supportPerson",
                "supportComments"
              ]
            },
            {
              "elementKey": "security",
              "formCss": "grid-left-to-right-3",
              "fqn": "biopsychosocial.security",
              "gIndex": "5",
              "gChildren": [
                "securityPolicePresent",
                "securityComments",
                "patientRestrained",
                "restraintDay",
                "restraintTime",
                "restraintComments"
              ]
            },
            {
              "elementKey": "cGroup21-6",
              "formCss": "grid-left-to-right-1",
              "fqn": "biopsychosocial.cGroup21-6",
              "gIndex": "6",
              "gChildren": [
                "generalComments"
              ]
            }
          ],
          "ehr_data": {
            "table_name": "",
            "table_profession": "",
            "table_day": "",
            "table_time": "",
            "hygieneGrooming": "",
            "hygieneComments": "",
            "behaviour": "",
            "hallucinations": "",
            "suicidal": "",
            "homicidal": "",
            "speech": "",
            "domesticViolence": "",
            "requestContact": "",
            "supportPerson": "",
            "supportComments": "",
            "securityPolicePresent": "",
            "securityComments": "",
            "patientRestrained": "",
            "restraintDay": "",
            "restraintTime": "",
            "restraintComments": "",
            "generalComments": ""
          }
        },
        "fqn": "biopsychosocial.table",
        "tableChildren": [
          "table_id",
          "table_day",
          "table_time",
          "hygieneGrooming",
          "hygieneComments",
          "behaviour",
          "hallucinations",
          "suicidal",
          "homicidal",
          "speech",
          "domesticViolence",
          "requestContact",
          "supportPerson",
          "supportComments",
          "securityPolicePresent",
          "securityComments",
          "patientRestrained",
          "restraintDay",
          "restraintTime",
          "restraintComments",
          "generalComments",
          "table_name",
          "table_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "nonmedOrders": {
    "pageDataKey": "nonmedOrders",
    "pIndex": "22",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "table_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "nonmedOrders.name"
      },
      {
        "elementKey": "table_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "table_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "nonmedOrders.profession"
      },
      {
        "elementKey": "table_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "nonmedOrders.day"
      },
      {
        "elementKey": "table_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "nonmedOrders.time"
      },
      {
        "elementKey": "order",
        "formIndex": "1",
        "formCss": "grid-span-2-columns",
        "inputType": "text",
        "tableColumn": "2",
        "fqn": "nonmedOrders.order"
      },
      {
        "elementKey": "orderedBy",
        "formIndex": "1",
        "inputType": "text",
        "mandatory": "TRUE",
        "tableColumn": "3",
        "fqn": "nonmedOrders.orderedBy"
      },
      {
        "elementKey": "reason",
        "formIndex": "1",
        "formCss": "grid-span-2-columns",
        "inputType": "text",
        "tableColumn": "4",
        "fqn": "nonmedOrders.reason"
      },
      {
        "elementKey": "status",
        "formIndex": "1",
        "inputType": "select",
        "mandatory": "TRUE",
        "options": [
          {
            "key": "Ordered",
            "text": "Ordered"
          },
          {
            "key": "In process",
            "text": "In process"
          },
          {
            "key": "Cancelled",
            "text": "Cancelled"
          },
          {
            "key": "Completed",
            "text": "Completed"
          },
          {
            "key": "Discontinued",
            "text": "Discontinued"
          }
        ],
        "tableColumn": "5",
        "fqn": "nonmedOrders.status"
      },
      {
        "elementKey": "comment",
        "formIndex": "1",
        "formCss": "grid-span-3-columns",
        "inputType": "textarea",
        "tableColumn": "6",
        "fqn": "nonmedOrders.comment"
      },
      {
        "elementKey": "dietOrders_name",
        "formIndex": "2",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "nonmedOrders.name"
      },
      {
        "elementKey": "dietOrders_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "dietOrders_profession",
        "formIndex": "2",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "nonmedOrders.profession"
      },
      {
        "elementKey": "dietOrders_day",
        "formIndex": "2",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "nonmedOrders.day"
      },
      {
        "elementKey": "dietOrders_time",
        "formIndex": "2",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "nonmedOrders.time"
      },
      {
        "elementKey": "diet_regular",
        "formIndex": "2",
        "inputType": "checkbox",
        "tableColumn": "2",
        "fqn": "nonmedOrders.diet_regular"
      },
      {
        "elementKey": "diet_npo",
        "formIndex": "2",
        "inputType": "checkbox",
        "tableColumn": "3",
        "fqn": "nonmedOrders.diet_npo"
      },
      {
        "elementKey": "diet_heart",
        "formIndex": "2",
        "inputType": "checkbox",
        "tableColumn": "4",
        "fqn": "nonmedOrders.diet_heart"
      },
      {
        "elementKey": "diet_diabetic",
        "formIndex": "2",
        "inputType": "checkbox",
        "tableColumn": "5",
        "fqn": "nonmedOrders.diet_diabetic"
      },
      {
        "elementKey": "diet_fluid",
        "formIndex": "2",
        "inputType": "checkbox",
        "tableColumn": "6",
        "fqn": "nonmedOrders.diet_fluid"
      },
      {
        "elementKey": "diet_fluid_amount",
        "formIndex": "2",
        "formCss": "grid-span-2-columns",
        "inputType": "text",
        "suffix": "mL/24h",
        "tableColumn": "7",
        "fqn": "nonmedOrders.diet_fluid_amount",
        "suffixText": "mL/24h"
      },
      {
        "elementKey": "diet_other",
        "formIndex": "2",
        "inputType": "checkbox",
        "tableColumn": "8",
        "fqn": "nonmedOrders.diet_other"
      },
      {
        "elementKey": "diet_other_explain",
        "formIndex": "2",
        "formCss": "grid-span-2-columns",
        "inputType": "text",
        "tableColumn": "9",
        "fqn": "nonmedOrders.diet_other_explain"
      },
      {
        "elementKey": "diet_comment",
        "formIndex": "2",
        "formCss": "grid-span-3-columns",
        "inputType": "textarea",
        "tableColumn": "10",
        "fqn": "nonmedOrders.diet_comment"
      }
    ],
    "pageElements": {
      "table": {
        "elementKey": "table",
        "pageElementIndex": "1",
        "pageKey": "nonmedOrders",
        "tableKey": "table",
        "isTable": true,
        "form": {
          "elementKey": "table",
          "label": "Nonmedication orders",
          "addButtonText": "Add an order",
          "formKey": "table",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "nonmedOrders.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "table_name",
                "table_profession",
                "table_day",
                "table_time"
              ]
            },
            {
              "elementKey": "cGroup22-2",
              "formCss": "grid-left-to-right-3",
              "fqn": "nonmedOrders.cGroup22-2",
              "gIndex": "2",
              "gChildren": [
                "order",
                "orderedBy",
                "reason",
                "status",
                "comment"
              ]
            }
          ],
          "ehr_data": {
            "table_name": "",
            "table_profession": "",
            "table_day": "",
            "table_time": "",
            "order": "",
            "orderedBy": "",
            "reason": "",
            "status": "",
            "comment": ""
          }
        },
        "fqn": "nonmedOrders.table",
        "tableChildren": [
          "table_id",
          "table_day",
          "table_time",
          "order",
          "orderedBy",
          "reason",
          "status",
          "comment",
          "table_name",
          "table_profession"
        ],
        "hasRecHeader": true
      },
      "dietOrders": {
        "elementKey": "dietOrders",
        "pageElementIndex": "2",
        "pageKey": "nonmedOrders",
        "tableKey": "dietOrders",
        "isTable": true,
        "form": {
          "elementKey": "dietOrders",
          "label": "Diet",
          "addButtonText": "Add a diet order",
          "formKey": "dietOrders",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "nonmedOrders.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "dietOrders_name",
                "dietOrders_profession",
                "dietOrders_day",
                "dietOrders_time"
              ]
            },
            {
              "elementKey": "cGroup22-2",
              "formCss": "grid-left-to-right-3",
              "fqn": "nonmedOrders.cGroup22-2",
              "gIndex": "2",
              "gChildren": [
                "diet_regular",
                "diet_npo",
                "diet_heart",
                "diet_diabetic"
              ]
            },
            {
              "elementKey": "cGroup22-3",
              "formCss": "grid-left-to-right-3",
              "fqn": "nonmedOrders.cGroup22-3",
              "gIndex": "3",
              "gChildren": [
                "diet_fluid",
                "diet_fluid_amount"
              ]
            },
            {
              "elementKey": "cGroup22-4",
              "formCss": "grid-left-to-right-3",
              "fqn": "nonmedOrders.cGroup22-4",
              "gIndex": "4",
              "gChildren": [
                "diet_other",
                "diet_other_explain",
                "diet_comment"
              ]
            }
          ],
          "ehr_data": {
            "dietOrders_name": "",
            "dietOrders_profession": "",
            "dietOrders_day": "",
            "dietOrders_time": "",
            "diet_regular": "",
            "diet_npo": "",
            "diet_heart": "",
            "diet_diabetic": "",
            "diet_fluid": "",
            "diet_fluid_amount": "",
            "diet_other": "",
            "diet_other_explain": "",
            "diet_comment": ""
          }
        },
        "fqn": "nonmedOrders.dietOrders",
        "tableChildren": [
          "dietOrders_id",
          "dietOrders_day",
          "dietOrders_time",
          "diet_regular",
          "diet_npo",
          "diet_heart",
          "diet_diabetic",
          "diet_fluid",
          "diet_fluid_amount",
          "diet_other",
          "diet_other_explain",
          "diet_comment",
          "dietOrders_name",
          "dietOrders_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "referrals": {
    "pageDataKey": "referrals",
    "pIndex": "23",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "table_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "referrals.name"
      },
      {
        "elementKey": "table_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "table_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "referrals.profession"
      },
      {
        "elementKey": "table_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "referrals.day"
      },
      {
        "elementKey": "table_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "referrals.time"
      },
      {
        "elementKey": "referralName",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "2",
        "fqn": "referrals.referralName"
      },
      {
        "elementKey": "referralProfession",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "3",
        "fqn": "referrals.referralProfession"
      },
      {
        "elementKey": "spacer23",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "referrals.spacer23"
      },
      {
        "elementKey": "appointmentDate",
        "formIndex": "1",
        "inputType": "date",
        "tableColumn": "4",
        "fqn": "referrals.appointmentDate"
      },
      {
        "elementKey": "appointmentTime",
        "formIndex": "1",
        "inputType": "visitTime",
        "tableColumn": "5",
        "validation": "time24",
        "fqn": "referrals.appointmentTime"
      },
      {
        "elementKey": "status",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Active",
            "text": "Active"
          },
          {
            "key": "Discharged",
            "text": "Discharged"
          }
        ],
        "tableColumn": "6",
        "fqn": "referrals.status"
      }
    ],
    "pageElements": {
      "table": {
        "elementKey": "table",
        "pageElementIndex": "1",
        "pageKey": "referrals",
        "tableKey": "table",
        "isTable": true,
        "form": {
          "elementKey": "table",
          "label": "Referrals",
          "addButtonText": "Add a referral",
          "formKey": "table",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "referrals.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "table_name",
                "table_profession",
                "table_day",
                "table_time"
              ]
            },
            {
              "elementKey": "cGroup23-2",
              "formCss": "grid-left-to-right-3",
              "fqn": "referrals.cGroup23-2",
              "gIndex": "2",
              "gChildren": [
                "referralName",
                "referralProfession",
                "spacer23",
                "appointmentDate",
                "appointmentTime",
                "status"
              ]
            }
          ],
          "ehr_data": {
            "table_name": "",
            "table_profession": "",
            "table_day": "",
            "table_time": "",
            "referralName": "",
            "referralProfession": "",
            "appointmentDate": "",
            "appointmentTime": "",
            "status": ""
          }
        },
        "fqn": "referrals.table",
        "tableChildren": [
          "table_id",
          "table_day",
          "table_time",
          "referralName",
          "referralProfession",
          "appointmentDate",
          "appointmentTime",
          "status",
          "table_name",
          "table_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "labRequisitions": {
    "pageDataKey": "labRequisitions",
    "pIndex": "24",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "table_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "labRequisitions.name"
      },
      {
        "elementKey": "table_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "table_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "labRequisitions.profession"
      },
      {
        "elementKey": "table_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "labRequisitions.day"
      },
      {
        "elementKey": "table_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "labRequisitions.time"
      },
      {
        "elementKey": "patientName",
        "formIndex": "1",
        "inputType": "ehrPatientName",
        "tableColumn": "2",
        "fqn": "labRequisitions.patientName"
      },
      {
        "elementKey": "patientHealthNumber",
        "formIndex": "1",
        "inputType": "ehrPHN",
        "tableColumn": "3",
        "fqn": "labRequisitions.patientHealthNumber"
      },
      {
        "elementKey": "dateOfBirth",
        "formIndex": "1",
        "inputType": "ehrDOB",
        "tableColumn": "4",
        "fqn": "labRequisitions.dateOfBirth"
      },
      {
        "elementKey": "location",
        "formIndex": "1",
        "inputType": "ehrLocation",
        "tableColumn": "5",
        "fqn": "labRequisitions.location"
      },
      {
        "elementKey": "dateRequired",
        "formIndex": "1",
        "inputType": "visitDay",
        "tableColumn": "6",
        "fqn": "labRequisitions.dateRequired"
      },
      {
        "elementKey": "reason",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "7",
        "fqn": "labRequisitions.reason"
      },
      {
        "elementKey": "hematology",
        "formIndex": "1",
        "inputType": "checkset",
        "options": [
          {
            "key": "cbc",
            "text": "CBC"
          },
          {
            "key": "cbcWithDifferential",
            "text": "CBC with differential"
          },
          {
            "key": "hemoglobin",
            "text": "Hemoglobin"
          },
          {
            "key": "hemoglobinA1C",
            "text": "Hemoglobin A1-C"
          }
        ],
        "tableColumn": "8",
        "fqn": "labRequisitions.hematology"
      },
      {
        "elementKey": "electrolytes",
        "formIndex": "1",
        "inputType": "checkset",
        "options": [
          {
            "key": "k",
            "text": "K"
          },
          {
            "key": "na",
            "text": "Na"
          },
          {
            "key": "chloride",
            "text": "Chloride"
          },
          {
            "key": "bicarbonate",
            "text": "Bicarbonate"
          },
          {
            "key": "calcium",
            "text": "Calcium"
          },
          {
            "key": "ionizedCalcium",
            "text": "Ionized Calcium"
          }
        ],
        "tableColumn": "9",
        "fqn": "labRequisitions.electrolytes"
      },
      {
        "elementKey": "bloodGas",
        "formIndex": "1",
        "inputType": "checkset",
        "options": [
          {
            "key": "arterialBloodGas",
            "text": "Arterial blood gas"
          },
          {
            "key": "venousBloodGas",
            "text": "Venous blood gas"
          },
          {
            "key": "fetalCordBloodGas",
            "text": "Fetal cord blood gas"
          }
        ],
        "tableColumn": "10",
        "fqn": "labRequisitions.bloodGas"
      },
      {
        "elementKey": "renalProfile",
        "formIndex": "1",
        "inputType": "checkset",
        "options": [
          {
            "key": "bun",
            "text": "BUN"
          },
          {
            "key": "creatinine",
            "text": "Creatinine"
          }
        ],
        "tableColumn": "11",
        "fqn": "labRequisitions.renalProfile"
      },
      {
        "elementKey": "liverFunction",
        "formIndex": "1",
        "inputType": "checkset",
        "options": [
          {
            "key": "ast",
            "text": "AST"
          },
          {
            "key": "ggt",
            "text": "GGT"
          },
          {
            "key": "alt",
            "text": "ALT"
          },
          {
            "key": "totalBirilubin",
            "text": "Total Birilubin"
          },
          {
            "key": "directBirilubin",
            "text": "Direct Birilubin"
          }
        ],
        "tableColumn": "12",
        "fqn": "labRequisitions.liverFunction"
      },
      {
        "elementKey": "urineAnalysis",
        "formIndex": "1",
        "inputType": "checkset",
        "options": [
          {
            "key": "r&m",
            "text": "R&M"
          },
          {
            "key": "urineElectrolytes",
            "text": "Urine electrolytes"
          },
          {
            "key": "urineCreatinine",
            "text": "Urine creatinine"
          }
        ],
        "tableColumn": "13",
        "fqn": "labRequisitions.urineAnalysis"
      },
      {
        "elementKey": "microbiologyCulture",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "culture",
            "text": "culture"
          },
          {
            "key": "senstitivity",
            "text": "senstitivity"
          }
        ],
        "tableColumn": "14",
        "fqn": "labRequisitions.microbiologyCulture"
      },
      {
        "elementKey": "microbiologyLocation",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Wound",
            "text": "Wound"
          },
          {
            "key": "Sputum",
            "text": "Sputum"
          },
          {
            "key": "Blood",
            "text": "Blood"
          },
          {
            "key": "Urine",
            "text": "Urine"
          },
          {
            "key": "Stool",
            "text": "Stool"
          }
        ],
        "tableColumn": "15",
        "fqn": "labRequisitions.microbiologyLocation"
      },
      {
        "elementKey": "histologyTissueType",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Skin",
            "text": "Skin"
          },
          {
            "key": "Blood",
            "text": "Blood"
          },
          {
            "key": "Organ",
            "text": "Organ"
          }
        ],
        "tableColumn": "16",
        "fqn": "labRequisitions.histologyTissueType"
      },
      {
        "elementKey": "histologyLocation",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "17",
        "fqn": "labRequisitions.histologyLocation"
      },
      {
        "elementKey": "requisitions_name",
        "formIndex": "2",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "labRequisitions.name"
      },
      {
        "elementKey": "requisitions_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "requisitions_profession",
        "formIndex": "2",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "labRequisitions.profession"
      },
      {
        "elementKey": "requisitions_day",
        "formIndex": "2",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "labRequisitions.day"
      },
      {
        "elementKey": "requisitions_time",
        "formIndex": "2",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "labRequisitions.time"
      },
      {
        "elementKey": "req_id",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "1",
        "fqn": "labRequisitions.req_id"
      },
      {
        "elementKey": "req_dateRequired",
        "formIndex": "2",
        "inputType": "visitDay",
        "tableColumn": "2",
        "validation": "visitDay",
        "fqn": "labRequisitions.req_dateRequired"
      },
      {
        "elementKey": "req_schedule",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "stat",
            "text": "Stat"
          },
          {
            "key": "urgent",
            "text": "Urgent"
          },
          {
            "key": "routine",
            "text": "Routine"
          }
        ],
        "tableColumn": "3",
        "fqn": "labRequisitions.req_schedule"
      },
      {
        "elementKey": "req_reason",
        "formIndex": "2",
        "formCss": "grid-span-3-columns",
        "inputType": "text",
        "tableColumn": "4",
        "fqn": "labRequisitions.req_reason"
      },
      {
        "elementKey": "req_hematology",
        "formIndex": "2",
        "inputType": "checkset",
        "options": [
          {
            "key": "CBC",
            "text": "CBC"
          },
          {
            "key": "CBC_Diff",
            "text": "CBC with differential"
          }
        ],
        "tableColumn": "5",
        "fqn": "labRequisitions.req_hematology"
      },
      {
        "elementKey": "req_cogagulation",
        "formIndex": "2",
        "inputType": "checkset",
        "options": [
          {
            "key": "fib",
            "text": "Fibrinogen"
          },
          {
            "key": "ddim",
            "text": "D-Dimer"
          },
          {
            "key": "inr",
            "text": "International normalised ratio (INR)"
          },
          {
            "key": "aptt",
            "text": "Activated partial thromboplastin time (PTT)"
          },
          {
            "key": "ptt",
            "text": "Partial thromboplastin time (PTT)"
          }
        ],
        "tableColumn": "6",
        "fqn": "labRequisitions.req_cogagulation"
      },
      {
        "elementKey": "req_tropinin",
        "formIndex": "2",
        "inputType": "checkset",
        "options": [
          {
            "key": "bnp",
            "text": "Brain natriuretic peptide(BNP)"
          },
          {
            "key": "tropI",
            "text": "Troponin I"
          },
          {
            "key": "tropT",
            "text": "Troponin T (TnT)"
          },
          {
            "key": "tropH",
            "text": "High-sensitivity troponin T"
          }
        ],
        "tableColumn": "7",
        "fqn": "labRequisitions.req_tropinin"
      },
      {
        "elementKey": "req_electrolytes",
        "formIndex": "2",
        "formCss": "grid-span-3-columns",
        "inputType": "checkset",
        "options": [
          {
            "key": "albumin",
            "text": "Albumin"
          },
          {
            "key": "hco3",
            "text": "Bicarbonate (HCO3)"
          },
          {
            "key": "CA",
            "text": "Calcium (Ca)"
          },
          {
            "key": "Ca_Ion",
            "text": "Calcium ionized"
          },
          {
            "key": "chloride",
            "text": "Chloride (Cl)"
          },
          {
            "key": "b12",
            "text": "B12"
          },
          {
            "key": "lipidProfileFasting",
            "text": "Lipid profile fasting - Total cholesterol, HDL, LDL, triglycerides"
          },
          {
            "key": "lipidProfileRandom",
            "text": "Lipid profile random - Total cholesterol, HDL, LDL, triglycerides"
          },
          {
            "key": "sCr",
            "text": "Serum Creatinine (sCr)"
          },
          {
            "key": "GFR",
            "text": "Glomerular Filtration Rate (GFR)"
          },
          {
            "key": "ck",
            "text": "Creatine kinase (CK)"
          },
          {
            "key": "ferritin",
            "text": "Ferritin"
          },
          {
            "key": "glucoseF",
            "text": "Glucose fasting"
          },
          {
            "key": "glucoseR",
            "text": "Glucose random"
          },
          {
            "key": "HbA1C",
            "text": "Hemoglobin A1-C"
          },
          {
            "key": "lactate",
            "text": "Lactate (on ice)"
          },
          {
            "key": "mg",
            "text": "Magnesium (Mg)"
          },
          {
            "key": "po4",
            "text": "Phosphate (PO4)"
          },
          {
            "key": "k",
            "text": "Potassium (K)"
          },
          {
            "key": "protein",
            "text": "Protein total"
          },
          {
            "key": "na",
            "text": "Sodium (Na)"
          },
          {
            "key": "urea",
            "text": "Urea"
          }
        ],
        "tableColumn": "8",
        "fqn": "labRequisitions.req_electrolytes"
      },
      {
        "elementKey": "req_liverFunction",
        "formIndex": "2",
        "formCss": "grid-span-3-columns",
        "inputType": "checkset",
        "options": [
          {
            "key": "alt",
            "text": "Alanine transaminase (ALT)"
          },
          {
            "key": "alp",
            "text": "Alkaline phosphatase (ALP)"
          },
          {
            "key": "ast",
            "text": "Aspartate transferase (AST)"
          },
          {
            "key": "bilirubinD",
            "text": "Bilirubin direct"
          },
          {
            "key": "bilirubinT",
            "text": "Bilirubin total"
          },
          {
            "key": "ggt",
            "text": "Gamma glutamyl transferase (GGT)"
          },
          {
            "key": "ldh",
            "text": "Lactate dehydrogenase (LDH)"
          },
          {
            "key": "lipase",
            "text": "Lipase"
          }
        ],
        "tableColumn": "9",
        "fqn": "labRequisitions.req_liverFunction"
      },
      {
        "elementKey": "req_renalProfile",
        "formIndex": "2",
        "inputType": "checkset",
        "options": [
          {
            "key": "bun",
            "text": "Blood urea nitrogen (BUN)"
          },
          {
            "key": "cr",
            "text": "Creatinine"
          }
        ],
        "tableColumn": "10",
        "fqn": "labRequisitions.req_renalProfile"
      },
      {
        "elementKey": "req_bloodGas",
        "formIndex": "2",
        "inputType": "checkset",
        "options": [
          {
            "key": "abg",
            "text": "Arterial blood gas (ABG)"
          },
          {
            "key": "fcbg",
            "text": "Venous blood gas (VBG)"
          },
          {
            "key": "vbg",
            "text": "Fetal cord blood gas (FCBG)"
          }
        ],
        "tableColumn": "11",
        "fqn": "labRequisitions.req_bloodGas"
      },
      {
        "elementKey": "req_urineAnalysis",
        "formIndex": "2",
        "inputType": "checkset",
        "options": [
          {
            "key": "acr",
            "text": "Albumin/creatinine ratio (ACR)"
          },
          {
            "key": "rm",
            "text": "Routine and microscopic (R&M)"
          },
          {
            "key": "preg",
            "text": "Pregnancy"
          },
          {
            "key": "u_el",
            "text": "Urine electrolytes"
          },
          {
            "key": "u_cr",
            "text": "Urine creatinine"
          }
        ],
        "tableColumn": "12",
        "fqn": "labRequisitions.req_urineAnalysis"
      },
      {
        "elementKey": "req_comments",
        "formIndex": "2",
        "inputType": "textarea",
        "options": [
          {
            "key": "ferritin:=Ferritin glucoseF:=Glucose fasting glucoseR:=Glucose random",
            "text": "ferritin:=Ferritin glucoseF:=Glucose fasting glucoseR:=Glucose random"
          }
        ],
        "tableColumn": "13",
        "fqn": "labRequisitions.req_comments"
      },
      {
        "elementKey": "histologyRequisitions_name",
        "formIndex": "3",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "labRequisitions.name"
      },
      {
        "elementKey": "histologyRequisitions_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "histologyRequisitions_profession",
        "formIndex": "3",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "labRequisitions.profession"
      },
      {
        "elementKey": "histologyRequisitions_day",
        "formIndex": "3",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "labRequisitions.day"
      },
      {
        "elementKey": "histologyRequisitions_time",
        "formIndex": "3",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "labRequisitions.time"
      },
      {
        "elementKey": "reqH_id",
        "formIndex": "3",
        "inputType": "text",
        "tableColumn": "1",
        "fqn": "labRequisitions.reqH_id"
      },
      {
        "elementKey": "reqH_dateRequired",
        "formIndex": "3",
        "inputType": "visitDay",
        "tableColumn": "2",
        "validation": "visitDay",
        "fqn": "labRequisitions.reqH_dateRequired"
      },
      {
        "elementKey": "reqH_schedule",
        "formIndex": "3",
        "inputType": "select",
        "options": [
          {
            "key": "stat",
            "text": "Stat"
          },
          {
            "key": "urgent",
            "text": "Urgent"
          },
          {
            "key": "routine",
            "text": "Routine"
          }
        ],
        "tableColumn": "3",
        "fqn": "labRequisitions.reqH_schedule"
      },
      {
        "elementKey": "reqH_reason",
        "formIndex": "3",
        "formCss": "grid-span-3-columns",
        "inputType": "text",
        "tableColumn": "3",
        "fqn": "labRequisitions.reqH_reason"
      },
      {
        "elementKey": "reqH_type",
        "formIndex": "3",
        "inputType": "select",
        "options": [
          {
            "key": "blood",
            "text": "Blood"
          },
          {
            "key": "organ",
            "text": "Organ"
          },
          {
            "key": "skin",
            "text": "Skin"
          }
        ],
        "tableColumn": "4",
        "fqn": "labRequisitions.reqH_type"
      },
      {
        "elementKey": "reqH_location",
        "formIndex": "3",
        "inputType": "text",
        "tableColumn": "5",
        "fqn": "labRequisitions.reqH_location"
      },
      {
        "elementKey": "reqH_comments",
        "formIndex": "3",
        "formCss": "grid-span-3-columns",
        "inputType": "textarea",
        "tableColumn": "6",
        "fqn": "labRequisitions.reqH_comments"
      },
      {
        "elementKey": "med_image_req_name",
        "formIndex": "4",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "labRequisitions.name"
      },
      {
        "elementKey": "med_image_req_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "med_image_req_profession",
        "formIndex": "4",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "labRequisitions.profession"
      },
      {
        "elementKey": "med_image_req_day",
        "formIndex": "4",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "labRequisitions.day"
      },
      {
        "elementKey": "med_image_req_time",
        "formIndex": "4",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "labRequisitions.time"
      },
      {
        "elementKey": "reqMi_id",
        "formIndex": "4",
        "inputType": "text",
        "tableColumn": "1",
        "fqn": "labRequisitions.reqMi_id"
      },
      {
        "elementKey": "reqMi_dateRequired",
        "formIndex": "4",
        "inputType": "visitDay",
        "tableColumn": "2",
        "validation": "visitDay",
        "fqn": "labRequisitions.reqMi_dateRequired"
      },
      {
        "elementKey": "reqMi_schedule",
        "formIndex": "4",
        "inputType": "select",
        "options": [
          {
            "key": "stat",
            "text": "Stat"
          },
          {
            "key": "urgent",
            "text": "Urgent"
          },
          {
            "key": "routine",
            "text": "Routine"
          }
        ],
        "tableColumn": "3",
        "fqn": "labRequisitions.reqMi_schedule"
      },
      {
        "elementKey": "reqMi_reason",
        "formIndex": "4",
        "formCss": "grid-span-3-columns",
        "inputType": "text",
        "tableColumn": "1",
        "fqn": "labRequisitions.reqMi_reason"
      },
      {
        "elementKey": "reqMi_type",
        "formIndex": "4",
        "inputType": "select",
        "options": [
          {
            "key": "angio",
            "text": "Angiogram"
          },
          {
            "key": "ecg",
            "text": "Echocardiogram"
          },
          {
            "key": "ekg",
            "text": "Electrocardiogram"
          },
          {
            "key": "ct",
            "text": "CT scan"
          },
          {
            "key": "mri",
            "text": "MRI"
          },
          {
            "key": "nuclear",
            "text": "Nuclear medicine"
          },
          {
            "key": "ultra",
            "text": "Ultrasound"
          },
          {
            "key": "xray",
            "text": "X-ray"
          }
        ],
        "tableColumn": "2",
        "fqn": "labRequisitions.reqMi_type"
      },
      {
        "elementKey": "reqMi_Location",
        "formIndex": "4",
        "inputType": "checkset",
        "options": [
          {
            "key": "ab",
            "text": "Abdomen"
          },
          {
            "key": "armL",
            "text": "Arm left"
          },
          {
            "key": "armR",
            "text": "Arm right"
          },
          {
            "key": "chest",
            "text": "Chest"
          },
          {
            "key": "head",
            "text": "Head"
          },
          {
            "key": "heart",
            "text": "Heart"
          },
          {
            "key": "neck",
            "text": "Neck"
          },
          {
            "key": "legL",
            "text": "Leg left"
          },
          {
            "key": "legR",
            "text": "Leg right"
          },
          {
            "key": "pelvis",
            "text": "Pelvis"
          }
        ],
        "fqn": "labRequisitions.reqMi_Location"
      },
      {
        "elementKey": "reqMi_mobile",
        "formIndex": "4",
        "formCss": "grid-new-subsection",
        "inputType": "checkbox",
        "fqn": "labRequisitions.reqMi_mobile"
      },
      {
        "elementKey": "reqMi_comments",
        "formIndex": "4",
        "formCss": "grid-span-3-columns",
        "inputType": "textarea",
        "fqn": "labRequisitions.reqMi_comments"
      },
      {
        "elementKey": "microRequisitions_name",
        "formIndex": "5",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "labRequisitions.name"
      },
      {
        "elementKey": "microRequisitions_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "microRequisitions_profession",
        "formIndex": "5",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "labRequisitions.profession"
      },
      {
        "elementKey": "microRequisitions_day",
        "formIndex": "5",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "labRequisitions.day"
      },
      {
        "elementKey": "microRequisitions_time",
        "formIndex": "5",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "labRequisitions.time"
      },
      {
        "elementKey": "reqMicro_id",
        "formIndex": "5",
        "inputType": "text",
        "tableColumn": "1",
        "fqn": "labRequisitions.reqMicro_id"
      },
      {
        "elementKey": "reqMicro_dateRequired",
        "formIndex": "5",
        "inputType": "visitDay",
        "tableColumn": "2",
        "validation": "visitDay",
        "fqn": "labRequisitions.reqMicro_dateRequired"
      },
      {
        "elementKey": "reqMi_schedule",
        "formIndex": "5",
        "inputType": "select",
        "options": [
          {
            "key": "stat",
            "text": "Stat"
          },
          {
            "key": "urgent",
            "text": "Urgent"
          },
          {
            "key": "routine",
            "text": "Routine"
          }
        ],
        "tableColumn": "3",
        "fqn": "labRequisitions.reqMi_schedule"
      },
      {
        "elementKey": "reqMicro_reason",
        "formIndex": "5",
        "formCss": "grid-span-3-columns",
        "inputType": "text",
        "tableColumn": "3",
        "fqn": "labRequisitions.reqMicro_reason"
      },
      {
        "elementKey": "reqMicro_culture",
        "formIndex": "5",
        "inputType": "select",
        "options": [
          {
            "key": "cs",
            "text": "Culture & sensitivity"
          },
          {
            "key": "parasite",
            "text": "Parisitology"
          }
        ],
        "tableColumn": "4",
        "fqn": "labRequisitions.reqMicro_culture"
      },
      {
        "elementKey": "reqMicro_location",
        "formIndex": "5",
        "inputType": "select",
        "options": [
          {
            "key": "blood",
            "text": "Blood"
          },
          {
            "key": "sputum",
            "text": "Sputum"
          },
          {
            "key": "stool",
            "text": "Stool"
          },
          {
            "key": "urine",
            "text": "Urine"
          },
          {
            "key": "wound",
            "text": "Wound"
          }
        ],
        "tableColumn": "5",
        "fqn": "labRequisitions.reqMicro_location"
      },
      {
        "elementKey": "reqMicro_comments",
        "formIndex": "5",
        "formCss": "grid-span-3-columns",
        "inputType": "textarea",
        "tableColumn": "6",
        "fqn": "labRequisitions.reqMicro_comments"
      }
    ],
    "pageElements": {
      "table": {
        "elementKey": "table",
        "pageElementIndex": "1",
        "pageKey": "labRequisitions",
        "tableKey": "table",
        "isTable": true,
        "form": {
          "elementKey": "table",
          "label": "Lab requisitions v1",
          "addButtonText": "Add a lab requisition assessment",
          "formKey": "table",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "labRequisitions.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "table_name",
                "table_profession",
                "table_day",
                "table_time"
              ]
            },
            {
              "elementKey": "demographics",
              "formCss": "grid-left-to-right-3",
              "fqn": "labRequisitions.demographics",
              "gIndex": "2",
              "gChildren": [
                "patientName",
                "patientHealthNumber",
                "dateOfBirth",
                "location",
                "dateRequired",
                "reason",
                "hematology",
                "electrolytes",
                "bloodGas",
                "renalProfile",
                "liverFunction",
                "urineAnalysis"
              ]
            },
            {
              "elementKey": "microbiology",
              "formCss": "grid-left-to-right-3",
              "fqn": "labRequisitions.microbiology",
              "gIndex": "3",
              "gChildren": [
                "microbiologyCulture",
                "microbiologyLocation"
              ]
            },
            {
              "elementKey": "histology",
              "formCss": "grid-left-to-right-3",
              "fqn": "labRequisitions.histology",
              "gIndex": "4",
              "gChildren": [
                "histologyTissueType",
                "histologyLocation"
              ]
            }
          ],
          "ehr_data": {
            "table_name": "",
            "table_profession": "",
            "table_day": "",
            "table_time": "",
            "patientName": "",
            "patientHealthNumber": "",
            "dateOfBirth": "",
            "location": "",
            "dateRequired": "",
            "reason": "",
            "hematology": "",
            "electrolytes": "",
            "bloodGas": "",
            "renalProfile": "",
            "liverFunction": "",
            "urineAnalysis": "",
            "microbiologyCulture": "",
            "microbiologyLocation": "",
            "histologyTissueType": "",
            "histologyLocation": ""
          }
        },
        "fqn": "labRequisitions.table",
        "tableChildren": [
          "table_id",
          "table_day",
          "table_time",
          "patientName",
          "patientHealthNumber",
          "dateOfBirth",
          "location",
          "dateRequired",
          "reason",
          "hematology",
          "electrolytes",
          "bloodGas",
          "renalProfile",
          "liverFunction",
          "urineAnalysis",
          "microbiologyCulture",
          "microbiologyLocation",
          "histologyTissueType",
          "histologyLocation",
          "table_name",
          "table_profession"
        ],
        "hasRecHeader": true
      },
      "requisitions": {
        "elementKey": "requisitions",
        "pageElementIndex": "2",
        "pageKey": "labRequisitions",
        "tableKey": "requisitions",
        "isTable": true,
        "form": {
          "elementKey": "requisitions",
          "label": "Lab requisitions",
          "addButtonText": "Add a lab requisition",
          "formOption": "transpose",
          "formKey": "requisitions",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "labRequisitions.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "requisitions_name",
                "requisitions_profession",
                "requisitions_day",
                "requisitions_time"
              ]
            },
            {
              "elementKey": "req_notice",
              "formCss": "grid-left-to-right-3",
              "fqn": "labRequisitions.req_notice",
              "gIndex": "2",
              "gChildren": [
                "req_id",
                "req_dateRequired",
                "req_schedule",
                "req_reason"
              ]
            },
            {
              "elementKey": "cGroup24-3",
              "formCss": "grid-left-to-right-3",
              "fqn": "labRequisitions.cGroup24-3",
              "gIndex": "3",
              "gChildren": [
                "req_hematology",
                "req_cogagulation"
              ]
            },
            {
              "elementKey": "cGroup24-4",
              "formCss": "grid-left-to-right-3",
              "fqn": "labRequisitions.cGroup24-4",
              "gIndex": "4",
              "gChildren": [
                "req_tropinin",
                "req_electrolytes",
                "req_liverFunction",
                "req_renalProfile"
              ]
            },
            {
              "elementKey": "cGroup24-5",
              "formCss": "grid-left-to-right-3",
              "fqn": "labRequisitions.cGroup24-5",
              "gIndex": "5",
              "gChildren": [
                "req_bloodGas"
              ]
            },
            {
              "elementKey": "cGroup24-6",
              "formCss": "grid-left-to-right-3",
              "fqn": "labRequisitions.cGroup24-6",
              "gIndex": "6",
              "gChildren": [
                "req_urineAnalysis"
              ]
            },
            {
              "elementKey": "cGroup24-7",
              "formCss": "grid-left-to-right-1",
              "fqn": "labRequisitions.cGroup24-7",
              "gIndex": "7",
              "gChildren": [
                "req_comments"
              ]
            }
          ],
          "ehr_data": {
            "requisitions_name": "",
            "requisitions_profession": "",
            "requisitions_day": "",
            "requisitions_time": "",
            "req_id": "",
            "req_dateRequired": "",
            "req_schedule": "",
            "req_reason": "",
            "req_hematology": "",
            "req_cogagulation": "",
            "req_tropinin": "",
            "req_electrolytes": "",
            "req_liverFunction": "",
            "req_renalProfile": "",
            "req_bloodGas": "",
            "req_urineAnalysis": "",
            "req_comments": ""
          }
        },
        "fqn": "labRequisitions.requisitions",
        "tableChildren": [
          "requisitions_id",
          "requisitions_day",
          "requisitions_time",
          "req_id",
          "req_dateRequired",
          "req_schedule",
          "req_reason",
          "req_hematology",
          "req_cogagulation",
          "req_tropinin",
          "req_electrolytes",
          "req_liverFunction",
          "req_renalProfile",
          "req_bloodGas",
          "req_urineAnalysis",
          "req_comments",
          "requisitions_name",
          "requisitions_profession"
        ],
        "hasRecHeader": true
      },
      "histologyRequisitions": {
        "elementKey": "histologyRequisitions",
        "pageElementIndex": "3",
        "pageKey": "labRequisitions",
        "tableKey": "histologyRequisitions",
        "isTable": true,
        "form": {
          "elementKey": "histologyRequisitions",
          "label": "Histology",
          "addButtonText": "Add a histology requisition",
          "formOption": "transpose",
          "formKey": "histologyRequisitions",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "labRequisitions.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "histologyRequisitions_name",
                "histologyRequisitions_profession",
                "histologyRequisitions_day",
                "histologyRequisitions_time"
              ]
            },
            {
              "elementKey": "cGroup24-2",
              "formCss": "grid-left-to-right-3",
              "fqn": "labRequisitions.cGroup24-2",
              "gIndex": "2",
              "gChildren": [
                "reqH_id",
                "reqH_dateRequired",
                "reqH_schedule",
                "reqH_reason"
              ]
            },
            {
              "elementKey": "cGroup24-3",
              "formCss": "grid-left-to-right-3",
              "fqn": "labRequisitions.cGroup24-3",
              "gIndex": "3",
              "gChildren": [
                "reqH_type",
                "reqH_location",
                "reqH_comments"
              ]
            }
          ],
          "ehr_data": {
            "histologyRequisitions_name": "",
            "histologyRequisitions_profession": "",
            "histologyRequisitions_day": "",
            "histologyRequisitions_time": "",
            "reqH_id": "",
            "reqH_dateRequired": "",
            "reqH_schedule": "",
            "reqH_reason": "",
            "reqH_type": "",
            "reqH_location": "",
            "reqH_comments": ""
          }
        },
        "fqn": "labRequisitions.histologyRequisitions",
        "tableChildren": [
          "histologyRequisitions_id",
          "histologyRequisitions_day",
          "histologyRequisitions_time",
          "reqH_id",
          "reqH_dateRequired",
          "reqH_schedule",
          "reqH_reason",
          "reqH_type",
          "reqH_location",
          "reqH_comments",
          "histologyRequisitions_name",
          "histologyRequisitions_profession"
        ],
        "hasRecHeader": true
      },
      "med_image_req": {
        "elementKey": "med_image_req",
        "pageElementIndex": "4",
        "pageKey": "labRequisitions",
        "tableKey": "med_image_req",
        "isTable": true,
        "form": {
          "elementKey": "med_image_req",
          "label": "Medical Imaging",
          "addButtonText": "Add a medical imaging requisition",
          "formOption": "transpose",
          "formKey": "med_image_req",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "labRequisitions.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "med_image_req_name",
                "med_image_req_profession",
                "med_image_req_day",
                "med_image_req_time"
              ]
            },
            {
              "elementKey": "reqMi_notice",
              "formCss": "grid-left-to-right-3",
              "fqn": "labRequisitions.reqMi_notice",
              "gIndex": "2",
              "gChildren": [
                "reqMi_id",
                "reqMi_dateRequired",
                "reqMi_schedule",
                "reqMi_reason"
              ]
            },
            {
              "elementKey": "cGroup24-3",
              "formCss": "grid-left-to-right-3",
              "fqn": "labRequisitions.cGroup24-3",
              "gIndex": "3",
              "gChildren": [
                "reqMi_type",
                "reqMi_Location",
                "reqMi_mobile",
                "reqMi_comments"
              ]
            }
          ],
          "ehr_data": {
            "med_image_req_name": "",
            "med_image_req_profession": "",
            "med_image_req_day": "",
            "med_image_req_time": "",
            "reqMi_id": "",
            "reqMi_dateRequired": "",
            "reqMi_schedule": "",
            "reqMi_reason": "",
            "reqMi_type": "",
            "reqMi_Location": "",
            "reqMi_mobile": "",
            "reqMi_comments": ""
          }
        },
        "fqn": "labRequisitions.med_image_req",
        "tableChildren": [
          "med_image_req_id",
          "med_image_req_day",
          "med_image_req_time",
          "reqMi_id",
          "reqMi_dateRequired",
          "reqMi_schedule",
          "reqMi_reason",
          "reqMi_type",
          "med_image_req_name",
          "med_image_req_profession"
        ],
        "hasRecHeader": true
      },
      "microRequisitions": {
        "elementKey": "microRequisitions",
        "pageElementIndex": "5",
        "pageKey": "labRequisitions",
        "tableKey": "microRequisitions",
        "isTable": true,
        "form": {
          "elementKey": "microRequisitions",
          "label": "Microbiology",
          "addButtonText": "Add a microbiology requisition",
          "formOption": "transpose",
          "formKey": "microRequisitions",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "labRequisitions.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "microRequisitions_name",
                "microRequisitions_profession",
                "microRequisitions_day",
                "microRequisitions_time"
              ]
            },
            {
              "elementKey": "cGroup24-2",
              "formCss": "grid-left-to-right-3",
              "fqn": "labRequisitions.cGroup24-2",
              "gIndex": "2",
              "gChildren": [
                "reqMicro_id",
                "reqMicro_dateRequired",
                "reqMi_schedule",
                "reqMicro_reason"
              ]
            },
            {
              "elementKey": "cGroup24-3",
              "formCss": "grid-left-to-right-3",
              "fqn": "labRequisitions.cGroup24-3",
              "gIndex": "3",
              "gChildren": [
                "reqMicro_culture",
                "reqMicro_location",
                "reqMicro_comments"
              ]
            }
          ],
          "ehr_data": {
            "microRequisitions_name": "",
            "microRequisitions_profession": "",
            "microRequisitions_day": "",
            "microRequisitions_time": "",
            "reqMicro_id": "",
            "reqMicro_dateRequired": "",
            "reqMi_schedule": "",
            "reqMicro_reason": "",
            "reqMicro_culture": "",
            "reqMicro_location": "",
            "reqMicro_comments": ""
          }
        },
        "fqn": "labRequisitions.microRequisitions",
        "tableChildren": [
          "microRequisitions_id",
          "microRequisitions_day",
          "microRequisitions_time",
          "reqMicro_id",
          "reqMicro_dateRequired",
          "reqMi_schedule",
          "reqMicro_reason",
          "reqMicro_culture",
          "reqMicro_location",
          "reqMicro_comments",
          "microRequisitions_name",
          "microRequisitions_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "medicationOrders": {
    "pageDataKey": "medicationOrders",
    "pIndex": "25",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "table_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "medicationOrders.name"
      },
      {
        "elementKey": "table_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "table_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "medicationOrders.profession"
      },
      {
        "elementKey": "table_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "medicationOrders.day"
      },
      {
        "elementKey": "table_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "medicationOrders.time"
      },
      {
        "elementKey": "medication",
        "formIndex": "1",
        "formCss": "grid-span-2-columns",
        "inputType": "lookahead",
        "tableColumn": "2",
        "fqn": "medicationOrders.medication"
      },
      {
        "elementKey": "dose",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "3",
        "fqn": "medicationOrders.dose"
      },
      {
        "elementKey": "route",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Oral",
            "text": "Oral"
          },
          {
            "key": "Inhaler",
            "text": "Inhaler"
          },
          {
            "key": "Intravenous",
            "text": "Intravenous"
          },
          {
            "key": "Intramuscular",
            "text": "Intramuscular"
          },
          {
            "key": "Nasal",
            "text": "Nasal"
          },
          {
            "key": "Nebulized",
            "text": "Nebulized"
          },
          {
            "key": "Subcutaneous",
            "text": "Subcutaneous"
          },
          {
            "key": "Sublingual",
            "text": "Sublingual"
          },
          {
            "key": "Rectal",
            "text": "Rectal"
          },
          {
            "key": "Topical",
            "text": "Topical"
          },
          {
            "key": "Vaginal",
            "text": "Vaginal"
          }
        ],
        "tableColumn": "4",
        "fqn": "medicationOrders.route"
      },
      {
        "elementKey": "startMeds",
        "formIndex": "1",
        "inputType": "visitDay",
        "tableColumn": "5",
        "validation": "visitDay",
        "fqn": "medicationOrders.startMeds"
      },
      {
        "elementKey": "endMeds",
        "formIndex": "1",
        "inputType": "visitDay",
        "tableColumn": "6",
        "validation": "visitDay",
        "fqn": "medicationOrders.endMeds"
      },
      {
        "elementKey": "administration",
        "defaultValue": "sched",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "sched",
            "text": "Scheduled"
          },
          {
            "key": "prn",
            "text": "PRN (as needed)"
          },
          {
            "key": "once",
            "text": "Once"
          },
          {
            "key": "stat",
            "text": "Stat"
          },
          {
            "key": "od",
            "text": "OD (Once a Day)"
          },
          {
            "key": "set",
            "text": "Set times"
          }
        ],
        "tableColumn": "7",
        "fqn": "medicationOrders.administration"
      },
      {
        "elementKey": "scheduled",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "BID / q12h",
            "text": "BID / q12h"
          },
          {
            "key": "TID",
            "text": "TID"
          },
          {
            "key": "q8h",
            "text": "q8h"
          },
          {
            "key": "QID",
            "text": "QID"
          },
          {
            "key": "q6h",
            "text": "q6h"
          },
          {
            "key": "q4h",
            "text": "q4h"
          }
        ],
        "tableColumn": "9",
        "fqn": "medicationOrders.scheduled"
      },
      {
        "elementKey": "prn1",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "10",
        "validation": "time24",
        "fqn": "medicationOrders.prn1"
      },
      {
        "elementKey": "prn2",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "11",
        "validation": "time24",
        "fqn": "medicationOrders.prn2"
      },
      {
        "elementKey": "prn3",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "12",
        "validation": "time24",
        "fqn": "medicationOrders.prn3"
      },
      {
        "elementKey": "prn4",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "13",
        "validation": "time24",
        "fqn": "medicationOrders.prn4"
      },
      {
        "elementKey": "prn5",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "14",
        "validation": "time24",
        "fqn": "medicationOrders.prn5"
      },
      {
        "elementKey": "prn6",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "15",
        "validation": "time24",
        "fqn": "medicationOrders.prn6"
      },
      {
        "elementKey": "once",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "10",
        "fqn": "medicationOrders.once"
      },
      {
        "elementKey": "stat",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "10",
        "fqn": "medicationOrders.stat"
      },
      {
        "elementKey": "instructions",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "16",
        "fqn": "medicationOrders.instructions"
      },
      {
        "elementKey": "reason",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "17",
        "fqn": "medicationOrders.reason"
      },
      {
        "elementKey": "notes",
        "formIndex": "1",
        "inputType": "textarea",
        "tableColumn": "18",
        "fqn": "medicationOrders.notes"
      },
      {
        "elementKey": "medicationOrdersTable_name",
        "formIndex": "2",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "medicationOrders.name"
      },
      {
        "elementKey": "medicationOrdersTable_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "medicationOrdersTable_profession",
        "formIndex": "2",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "medicationOrders.profession"
      },
      {
        "elementKey": "medicationOrdersTable_day",
        "formIndex": "2",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "medicationOrders.day"
      },
      {
        "elementKey": "medicationOrdersTable_time",
        "formIndex": "2",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "medicationOrders.time"
      },
      {
        "elementKey": "med_medication",
        "formIndex": "2",
        "inputType": "lookahead",
        "mandatory": "TRUE",
        "tableColumn": "2",
        "fqn": "medicationOrders.med_medication"
      },
      {
        "elementKey": "med_dose",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "3",
        "fqn": "medicationOrders.med_dose"
      },
      {
        "elementKey": "med_timing",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "cont",
            "text": "Continuous"
          },
          {
            "key": "once",
            "text": "Once"
          },
          {
            "key": "prn",
            "text": "PRN (as needed)"
          },
          {
            "key": "sched",
            "text": "Scheduled"
          },
          {
            "key": "set",
            "text": "Set times"
          },
          {
            "key": "stat",
            "text": "Stat"
          }
        ],
        "tableColumn": "4",
        "fqn": "medicationOrders.med_timing"
      },
      {
        "elementKey": "med_route",
        "formIndex": "2",
        "inputType": "checkset",
        "options": [
          {
            "key": "oral",
            "text": "PO"
          },
          {
            "key": "bucc",
            "text": "Buccal"
          },
          {
            "key": "epidural",
            "text": "Epidural"
          },
          {
            "key": "impl",
            "text": "Implant"
          },
          {
            "key": "inha",
            "text": "Inhalation"
          },
          {
            "key": "inje",
            "text": "Injection (obsolete)"
          },
          {
            "key": "intradermal",
            "text": "Intradermal"
          },
          {
            "key": "intramuscular",
            "text": "Intramuscular"
          },
          {
            "key": "intraosseous",
            "text": "Intraosseous"
          },
          {
            "key": "intraperitoneal",
            "text": "Intraperitoneal"
          },
          {
            "key": "intrathecal",
            "text": "Intrathecal"
          },
          {
            "key": "intra",
            "text": "Intravenous"
          },
          {
            "key": "nasa",
            "text": "Nasal"
          },
          {
            "key": "nebu",
            "text": "Nebulization"
          },
          {
            "key": "ocul",
            "text": "Ocular"
          },
          {
            "key": "otic",
            "text": "Otic"
          },
          {
            "key": "rect",
            "text": "Rectal"
          },
          {
            "key": "subc",
            "text": "Subcutaneous"
          },
          {
            "key": "subl",
            "text": "Sublingual"
          },
          {
            "key": "topical",
            "text": "Topical"
          },
          {
            "key": "tran",
            "text": "Transdermal"
          },
          {
            "key": "vagi",
            "text": "Vaginal"
          }
        ],
        "tableColumn": "5",
        "fqn": "medicationOrders.med_route"
      },
      {
        "elementKey": "med_reason",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "6",
        "fqn": "medicationOrders.med_reason"
      },
      {
        "elementKey": "med_injectionLocation",
        "formIndex": "2",
        "formOption": "hideElement",
        "inputType": "select",
        "options": [
          {
            "key": "arterial",
            "text": "Arterial"
          },
          {
            "key": "epidural",
            "text": "Epidural"
          },
          {
            "key": "intramuscular",
            "text": "Intramuscular"
          },
          {
            "key": "intraosseous",
            "text": "Intraosseous"
          },
          {
            "key": "intraperitoneal",
            "text": "Intraperitoneal"
          },
          {
            "key": "intrathecal",
            "text": "Intrathecal"
          },
          {
            "key": "intravenous",
            "text": "Intravenous"
          },
          {
            "key": "subcutaneous",
            "text": "Subcutaneous"
          }
        ],
        "tableColumn": "7",
        "fqn": "medicationOrders.med_injectionLocation"
      },
      {
        "elementKey": "med_alert",
        "formIndex": "2",
        "inputType": "checkset",
        "options": [
          {
            "key": "cytotoxic",
            "text": "Cytotoxic"
          },
          {
            "key": "alert",
            "text": "High alert"
          },
          {
            "key": "confusion",
            "text": "Potential medication name confusion"
          },
          {
            "key": "second",
            "text": "Second signature required"
          }
        ],
        "tableColumn": "8",
        "fqn": "medicationOrders.med_alert"
      },
      {
        "elementKey": "med_status",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "orde",
            "text": "Ordered"
          },
          {
            "key": "appr",
            "text": "Approved"
          },
          {
            "key": "disp",
            "text": "Dispensed"
          },
          {
            "key": "sche",
            "text": "Scheduled"
          },
          {
            "key": "reac",
            "text": "Reactivated"
          },
          {
            "key": "erro",
            "text": "Error"
          }
        ],
        "tableColumn": "9",
        "fqn": "medicationOrders.med_status"
      },
      {
        "elementKey": "med_scheduled",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "OD",
            "text": "Daily"
          },
          {
            "key": "BID",
            "text": "BID"
          },
          {
            "key": "TID",
            "text": "TID"
          },
          {
            "key": "QID",
            "text": "QID"
          },
          {
            "key": "Q12H",
            "text": "Q12H"
          },
          {
            "key": "Q8H",
            "text": "Q8H"
          },
          {
            "key": "Q6H",
            "text": "Q6H"
          },
          {
            "key": "Q4H",
            "text": "Q4H"
          },
          {
            "key": "Q2H",
            "text": "Q2H"
          },
          {
            "key": "Q1H",
            "text": "Q1H"
          }
        ],
        "tableColumn": "9",
        "fqn": "medicationOrders.med_scheduled"
      },
      {
        "elementKey": "med_prnMaxDosage",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "10",
        "fqn": "medicationOrders.med_prnMaxDosage"
      },
      {
        "elementKey": "med_time1",
        "dependentOn": "onChange:med_scheduled",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "11",
        "validation": "time24",
        "fqn": "medicationOrders.med_time1"
      },
      {
        "elementKey": "med_time2",
        "dependentOn": "onChange:med_scheduled",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "12",
        "validation": "time24",
        "fqn": "medicationOrders.med_time2"
      },
      {
        "elementKey": "med_time3",
        "dependentOn": "onChange:med_scheduled",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "13",
        "validation": "time24",
        "fqn": "medicationOrders.med_time3"
      },
      {
        "elementKey": "med_time4",
        "dependentOn": "onChange:med_scheduled",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "14",
        "validation": "time24",
        "fqn": "medicationOrders.med_time4"
      },
      {
        "elementKey": "med_time5",
        "dependentOn": "onChange:med_scheduled",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "15",
        "validation": "time24",
        "fqn": "medicationOrders.med_time5"
      },
      {
        "elementKey": "med_time6",
        "dependentOn": "onChange:med_scheduled",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "16",
        "validation": "time24",
        "fqn": "medicationOrders.med_time6"
      },
      {
        "elementKey": "med_continuous_description",
        "formIndex": "2",
        "inputType": "textarea",
        "tableColumn": "17",
        "fqn": "medicationOrders.med_continuous_description"
      },
      {
        "elementKey": "med_instructions",
        "formIndex": "2",
        "inputType": "textarea",
        "tableColumn": "18",
        "fqn": "medicationOrders.med_instructions"
      },
      {
        "elementKey": "med_aux_data",
        "formIndex": "2",
        "formOption": "hideElement",
        "inputType": "aux_data",
        "fqn": "medicationOrders.med_aux_data"
      },
      {
        "elementKey": "medicationOrderAux_name",
        "formIndex": "3",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "medicationOrders.name"
      },
      {
        "elementKey": "medicationOrderAux_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "medicationOrderAux_profession",
        "formIndex": "3",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "medicationOrders.profession"
      },
      {
        "elementKey": "medicationOrderAux_day",
        "formIndex": "3",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "medicationOrders.day"
      },
      {
        "elementKey": "medicationOrderAux_time",
        "formIndex": "3",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "medicationOrders.time"
      },
      {
        "elementKey": "aux_med_dose",
        "formIndex": "3",
        "inputType": "text",
        "tableColumn": "1",
        "fqn": "medicationOrders.aux_med_dose"
      },
      {
        "elementKey": "aux_med_status",
        "formIndex": "3",
        "inputType": "select",
        "options": [
          {
            "key": "appr",
            "text": "Approved"
          },
          {
            "key": "disp",
            "text": "Dispensed"
          },
          {
            "key": "admi",
            "text": "Administered"
          },
          {
            "key": "sche",
            "text": "Scheduled"
          },
          {
            "key": "hold",
            "text": "On Hold"
          },
          {
            "key": "dose",
            "text": "Dose Change"
          },
          {
            "key": "disc",
            "text": "Discontinued"
          },
          {
            "key": "canc",
            "text": "Cancelled"
          },
          {
            "key": "expi",
            "text": "Expired"
          },
          {
            "key": "reac",
            "text": "Reactivated"
          },
          {
            "key": "erro",
            "text": "Error"
          }
        ],
        "tableColumn": "2",
        "fqn": "medicationOrders.aux_med_status"
      },
      {
        "elementKey": "aux_med_prnMaxDosage",
        "formIndex": "3",
        "inputType": "text",
        "tableColumn": "2",
        "fqn": "medicationOrders.aux_med_prnMaxDosage"
      },
      {
        "elementKey": "aux_med_reason",
        "formIndex": "3",
        "inputType": "text",
        "tableColumn": "1",
        "fqn": "medicationOrders.aux_med_reason"
      },
      {
        "elementKey": "aux_med_instructions",
        "formIndex": "3",
        "inputType": "textarea",
        "tableColumn": "1",
        "fqn": "medicationOrders.aux_med_instructions"
      }
    ],
    "pageElements": {
      "table": {
        "elementKey": "table",
        "pageElementIndex": "1",
        "pageKey": "medicationOrders",
        "tableKey": "table",
        "isTable": true,
        "form": {
          "elementKey": "table",
          "label": "Medication orders v1",
          "addButtonText": "Add a v1 medication order",
          "formKey": "table",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "medicationOrders.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "table_name",
                "table_profession",
                "table_day",
                "table_time"
              ]
            },
            {
              "elementKey": "group1",
              "formCss": "grid-left-to-right-3",
              "fqn": "medicationOrders.group1",
              "gIndex": "2",
              "gChildren": [
                "medication",
                "dose",
                "route",
                "startMeds",
                "endMeds"
              ]
            },
            {
              "elementKey": "adminGroup",
              "formCss": "grid-left-to-right-3",
              "fqn": "medicationOrders.adminGroup",
              "gIndex": "3",
              "gChildren": [
                "administration"
              ]
            },
            {
              "elementKey": "schedGroup",
              "dependentOn": "visble:administration=sched,prn",
              "formCss": "grid-left-to-right-3",
              "fqn": "medicationOrders.schedGroup",
              "gIndex": "4",
              "gChildren": [
                "scheduled"
              ]
            },
            {
              "elementKey": "prnGroup",
              "dependentOn": "visble:administration=set",
              "formCss": "grid-left-to-right-3",
              "fqn": "medicationOrders.prnGroup",
              "gIndex": "5",
              "gChildren": [
                "prn1",
                "prn2",
                "prn3",
                "prn4",
                "prn5",
                "prn6"
              ]
            },
            {
              "elementKey": "onceGroup",
              "dependentOn": "visble:administration=once",
              "formCss": "grid-left-to-right-3",
              "fqn": "medicationOrders.onceGroup",
              "gIndex": "6",
              "gChildren": [
                "once"
              ]
            },
            {
              "elementKey": "statGroup",
              "dependentOn": "visble:administration=stat",
              "formCss": "grid-left-to-right-3",
              "fqn": "medicationOrders.statGroup",
              "gIndex": "7",
              "gChildren": [
                "stat"
              ]
            },
            {
              "elementKey": "group2",
              "formCss": "grid-left-to-right-3",
              "fqn": "medicationOrders.group2",
              "gIndex": "8",
              "gChildren": [
                "instructions",
                "reason",
                "notes"
              ]
            }
          ],
          "ehr_data": {
            "table_name": "",
            "table_profession": "",
            "table_day": "",
            "table_time": "",
            "medication": "",
            "dose": "",
            "route": "",
            "startMeds": "",
            "endMeds": "",
            "administration": "sched",
            "scheduled": "",
            "prn1": "",
            "prn2": "",
            "prn3": "",
            "prn4": "",
            "prn5": "",
            "prn6": "",
            "once": "",
            "stat": "",
            "instructions": "",
            "reason": "",
            "notes": ""
          }
        },
        "fqn": "medicationOrders.table",
        "tableChildren": [
          "table_id",
          "table_day",
          "table_time",
          "medication",
          "dose",
          "route",
          "startMeds",
          "endMeds",
          "administration",
          "scheduled",
          "prn1",
          "prn2",
          "prn3",
          "prn4",
          "prn5",
          "prn6",
          "once",
          "stat",
          "instructions",
          "reason",
          "notes",
          "table_name",
          "table_profession"
        ],
        "hasRecHeader": true
      },
      "medicationOrdersTable": {
        "elementKey": "medicationOrdersTable",
        "pageElementIndex": "2",
        "pageKey": "medicationOrders",
        "tableKey": "medicationOrdersTable",
        "isTable": true,
        "tableAction": "medAdminRec.marTable",
        "auxTableRef": "medicationOrderAux",
        "form": {
          "elementKey": "medicationOrdersTable",
          "label": "Medication orders",
          "addButtonText": "Add a medication order",
          "formKey": "medicationOrdersTable",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "medicationOrders.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "medicationOrdersTable_name",
                "medicationOrdersTable_profession",
                "medicationOrdersTable_day",
                "medicationOrdersTable_time"
              ]
            },
            {
              "elementKey": "med_group_main",
              "formCss": "grid-left-to-right-1",
              "fqn": "medicationOrders.med_group_main",
              "gIndex": "2",
              "gChildren": [
                "med_medication",
                "med_dose",
                "med_timing",
                "med_route",
                "med_reason",
                "med_injectionLocation",
                "med_alert",
                "med_status"
              ]
            },
            {
              "elementKey": "med_group_with_times",
              "dependentOn": "visble:med_timing=prn,sched,set",
              "formCss": "grid-left-to-right-3",
              "fqn": "medicationOrders.med_group_with_times",
              "gIndex": "3",
              "gChildren": [
                "med_scheduled"
              ]
            },
            {
              "elementKey": "med_prn_group",
              "dependentOn": "visble:med_timing=prn",
              "formCss": "grid-left-to-right-3",
              "fqn": "medicationOrders.med_prn_group",
              "gIndex": "4",
              "gChildren": [
                "med_prnMaxDosage"
              ]
            },
            {
              "elementKey": "med_group_times",
              "dependentOn": "visble:med_timing=prn,sched,set",
              "formCss": "grid-left-to-right-3",
              "fqn": "medicationOrders.med_group_times",
              "gIndex": "5",
              "gChildren": [
                "med_time1",
                "med_time2",
                "med_time3",
                "med_time4",
                "med_time5",
                "med_time6"
              ]
            },
            {
              "elementKey": "med_group_infusion_c1",
              "dependentOn": "visble:med_timing=cont",
              "formCss": "grid-left-to-right-1",
              "fqn": "medicationOrders.med_group_infusion_c1",
              "gIndex": "6",
              "gChildren": [
                "med_continuous_description"
              ]
            },
            {
              "elementKey": "med_group_notes",
              "formCss": "grid-left-to-right-1",
              "fqn": "medicationOrders.med_group_notes",
              "gIndex": "7",
              "gChildren": [
                "med_instructions",
                "med_aux_data"
              ]
            }
          ],
          "ehr_data": {
            "medicationOrdersTable_name": "",
            "medicationOrdersTable_profession": "",
            "medicationOrdersTable_day": "",
            "medicationOrdersTable_time": "",
            "med_medication": "",
            "med_dose": "",
            "med_timing": "",
            "med_route": "",
            "med_reason": "",
            "med_injectionLocation": "",
            "med_alert": "",
            "med_status": "",
            "med_scheduled": "",
            "med_prnMaxDosage": "",
            "med_time1": "",
            "med_time2": "",
            "med_time3": "",
            "med_time4": "",
            "med_time5": "",
            "med_time6": "",
            "med_continuous_description": "",
            "med_instructions": ""
          }
        },
        "fqn": "medicationOrders.medicationOrdersTable",
        "tableActionType": "hideButton",
        "taTargetPageKey": "medAdminRec",
        "taTargetTableKey": "marTable",
        "taSourcePageKey": "medicationOrders",
        "taSourceTableKey": "medicationOrdersTable",
        "tableChildren": [
          "medicationOrdersTable_id",
          "medicationOrdersTable_day",
          "medicationOrdersTable_time",
          "med_medication",
          "med_dose",
          "med_timing",
          "med_route",
          "med_reason",
          "med_injectionLocation",
          "med_alert",
          "med_status",
          "med_scheduled",
          "med_prnMaxDosage",
          "med_time1",
          "med_time2",
          "med_time3",
          "med_time4",
          "med_time5",
          "med_time6",
          "med_continuous_description",
          "med_instructions",
          "medicationOrdersTable_name",
          "medicationOrdersTable_profession"
        ],
        "hasRecHeader": true
      },
      "medicationOrderAux": {
        "elementKey": "medicationOrderAux",
        "pageElementIndex": "3",
        "pageKey": "medicationOrders",
        "tableKey": "medicationOrderAux",
        "mainTableKey": "medicationOrdersTable",
        "isTable": true,
        "isAuxTable": true,
        "form": {
          "elementKey": "medicationOrderAux",
          "label": "Change Med Order",
          "addButtonText": "Update Medication Order",
          "formKey": "medicationOrderAux",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "medicationOrders.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "medicationOrderAux_name",
                "medicationOrderAux_profession",
                "medicationOrderAux_day",
                "medicationOrderAux_time"
              ]
            },
            {
              "elementKey": "aux_med_group_main",
              "formCss": "grid-left-to-right-3",
              "fqn": "medicationOrders.aux_med_group_main",
              "gIndex": "2",
              "gChildren": [
                "aux_med_dose",
                "aux_med_status",
                "aux_med_prnMaxDosage"
              ]
            },
            {
              "elementKey": "aux_med_group_notes",
              "formCss": "grid-left-to-right-1",
              "fqn": "medicationOrders.aux_med_group_notes",
              "gIndex": "3",
              "gChildren": [
                "aux_med_reason",
                "aux_med_instructions"
              ]
            }
          ],
          "ehr_data": {
            "medicationOrderAux_name": "",
            "medicationOrderAux_profession": "",
            "medicationOrderAux_day": "",
            "medicationOrderAux_time": "",
            "aux_med_dose": "",
            "aux_med_status": "",
            "aux_med_prnMaxDosage": "",
            "aux_med_reason": "",
            "aux_med_instructions": ""
          }
        },
        "fqn": "medicationOrders.medicationOrdersTable.medicationOrderAux",
        "tableChildren": [
          "medicationOrderAux_id",
          "medicationOrderAux_day",
          "medicationOrderAux_time",
          "aux_med_dose",
          "aux_med_status",
          "aux_med_prnMaxDosage",
          "aux_med_reason",
          "aux_med_instructions",
          "medicationOrderAux_name",
          "medicationOrderAux_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "medAdminRec": {
    "pageDataKey": "medAdminRec",
    "pIndex": "26",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "medStatus",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Active",
            "text": "Active"
          },
          {
            "key": "Hold",
            "text": "Hold"
          },
          {
            "key": "Discontinued",
            "text": "Discontinued"
          }
        ],
        "tableColumn": "1",
        "fqn": "medAdminRec.medStatus"
      },
      {
        "elementKey": "table_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "adminStatus",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Administered",
            "text": "Administered"
          },
          {
            "key": "Refused",
            "text": "Refused"
          },
          {
            "key": "Missed",
            "text": "Missed"
          },
          {
            "key": "Skipped",
            "text": "Skipped"
          }
        ],
        "tableColumn": "2",
        "fqn": "medAdminRec.adminStatus"
      },
      {
        "elementKey": "medication",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "3",
        "fqn": "medAdminRec.medication"
      },
      {
        "elementKey": "route",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "4",
        "fqn": "medAdminRec.route"
      },
      {
        "elementKey": "todayPlan",
        "formIndex": "1",
        "inputType": "text",
        "options": [
          {
            "key": "[Today's day] plan",
            "text": "[Today's day] plan"
          }
        ],
        "tableColumn": "5",
        "fqn": "medAdminRec.todayPlan"
      },
      {
        "elementKey": "todayGiven",
        "formIndex": "1",
        "inputType": "text",
        "options": [
          {
            "key": "[Today's day] given",
            "text": "[Today's day] given"
          }
        ],
        "tableColumn": "6",
        "fqn": "medAdminRec.todayGiven"
      },
      {
        "elementKey": "administeredBy",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "7",
        "fqn": "medAdminRec.administeredBy"
      },
      {
        "elementKey": "adminProfession",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "8",
        "fqn": "medAdminRec.adminProfession"
      },
      {
        "elementKey": "administeredTime",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "9",
        "fqn": "medAdminRec.administeredTime"
      },
      {
        "elementKey": "marTable_name",
        "formIndex": "2",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "medAdminRec.name"
      },
      {
        "elementKey": "marTable_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "marTable_profession",
        "formIndex": "2",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "medAdminRec.profession"
      },
      {
        "elementKey": "marTable_day",
        "formIndex": "2",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "medAdminRec.day"
      },
      {
        "elementKey": "marTable_time",
        "formIndex": "2",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "medAdminRec.time"
      },
      {
        "elementKey": "med_order_embedded",
        "formIndex": "2",
        "embedRef": "medicationOrders.medicationOrdersTable",
        "inputType": "ehr_embedded",
        "passToFunction": "[mo_medOrder mo_medDetails mo_alert mo_route mo_timing mo_medInstructions mo_medReason mo_id]",
        "tableColumn": "13",
        "fqn": "medAdminRec.med_order_embedded"
      },
      {
        "elementKey": "mo_medOrder",
        "calculationType": "medOrderSummary(medicationOrders,medicationOrdersTable)",
        "formIndex": "2",
        "formCss": "grid-span-4-columns",
        "inputType": "calculatedValue",
        "tableColumn": "2",
        "fqn": "medAdminRec.mo_medOrder"
      },
      {
        "elementKey": "mo_medDetails",
        "calculationType": "medOrderDetails(medicationOrders,medicationOrdersTable)",
        "formIndex": "2",
        "formCss": "grid-span-4-columns",
        "inputType": "calculatedValue",
        "fqn": "medAdminRec.mo_medDetails"
      },
      {
        "elementKey": "mo_medInstructions",
        "calculationType": "embedValue(medicationOrders, medicationOrdersTable, med_instructions)",
        "formIndex": "2",
        "formCss": "grid-span-4-columns",
        "inputType": "calculatedValue",
        "fqn": "medAdminRec.mo_medInstructions"
      },
      {
        "elementKey": "mo_medReason",
        "calculationType": "embedValue(medicationOrders, medicationOrdersTable, med_reason)",
        "formIndex": "2",
        "formCss": "grid-span-4-columns",
        "inputType": "calculatedValue",
        "fqn": "medAdminRec.mo_medReason"
      },
      {
        "elementKey": "mo_route",
        "calculationType": "medAdminRoute(medicationOrders, medicationOrdersTable, med_route)",
        "formIndex": "2",
        "inputType": "calculatedValue",
        "tableColumn": "3",
        "fqn": "medAdminRec.mo_route"
      },
      {
        "elementKey": "mo_timing",
        "calculationType": "medAdminTiming(medicationOrders, medicationOrdersTable, med_timing)",
        "formIndex": "2",
        "inputType": "calculatedValue",
        "tableColumn": "4",
        "fqn": "medAdminRec.mo_timing"
      },
      {
        "elementKey": "mo_schedDay",
        "formIndex": "2",
        "formCss": "visit-day",
        "formOption": "elementViewOnly",
        "inputType": "visitDay",
        "tableColumn": "7",
        "fqn": "medAdminRec.mo_schedDay"
      },
      {
        "elementKey": "mo_schedTime",
        "formIndex": "2",
        "formCss": "visit-time",
        "formOption": "elementViewOnly",
        "inputType": "visitTime",
        "tableColumn": "8",
        "fqn": "medAdminRec.mo_schedTime"
      },
      {
        "elementKey": "mo_id",
        "calculationType": "embedValue(medicationOrders, medicationOrdersTable, medicationOrdersTable_id)",
        "formIndex": "2",
        "formOption": "hideElement",
        "inputType": "calculatedValue",
        "fqn": "medAdminRec.mo_id"
      },
      {
        "elementKey": "mo_alert",
        "calculationType": "medAdminAlert(medicationOrders,medicationOrdersTable)",
        "formIndex": "2",
        "formCss": "grid-span-4-columns",
        "inputType": "calculatedValue",
        "tableColumn": "11",
        "fqn": "medAdminRec.mo_alert"
      },
      {
        "elementKey": "mar_status",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "Administered",
            "text": "Administered"
          },
          {
            "key": "Held",
            "text": "Held"
          },
          {
            "key": "Refused",
            "text": "Refused"
          },
          {
            "key": "Missed",
            "text": "Missed"
          },
          {
            "key": "Skipped",
            "text": "Skipped"
          }
        ],
        "tableColumn": "4",
        "fqn": "medAdminRec.mar_status"
      },
      {
        "elementKey": "mar_dose",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "5",
        "fqn": "medAdminRec.mar_dose"
      },
      {
        "elementKey": "mar_spacer4",
        "formIndex": "2",
        "inputType": "spacer",
        "fqn": "medAdminRec.mar_spacer4"
      },
      {
        "elementKey": "mar_route",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "oral",
            "text": "PO"
          },
          {
            "key": "bucc",
            "text": "Buccal"
          },
          {
            "key": "epidural",
            "text": "Epidural"
          },
          {
            "key": "impl",
            "text": "Implant"
          },
          {
            "key": "inha",
            "text": "Inhalation"
          },
          {
            "key": "inje",
            "text": "Injection (obsolete)"
          },
          {
            "key": "intradermal",
            "text": "Intradermal"
          },
          {
            "key": "intramuscular",
            "text": "Intramuscular"
          },
          {
            "key": "intraosseous",
            "text": "Intraosseous"
          },
          {
            "key": "intraperitoneal",
            "text": "Intraperitoneal"
          },
          {
            "key": "intrathecal",
            "text": "Intrathecal"
          },
          {
            "key": "intra",
            "text": "Intravenous"
          },
          {
            "key": "nasa",
            "text": "Nasal"
          },
          {
            "key": "nebu",
            "text": "Nebulization"
          },
          {
            "key": "ocul",
            "text": "Ocular"
          },
          {
            "key": "otic",
            "text": "Otic"
          },
          {
            "key": "rect",
            "text": "Rectal"
          },
          {
            "key": "subc",
            "text": "Subcutaneous"
          },
          {
            "key": "subl",
            "text": "Sublingual"
          },
          {
            "key": "topical",
            "text": "Topical"
          },
          {
            "key": "tran",
            "text": "Transdermal"
          },
          {
            "key": "vagi",
            "text": "Vaginal"
          }
        ],
        "tableColumn": "6",
        "fqn": "medAdminRec.mar_route"
      },
      {
        "elementKey": "mar_event_day",
        "formIndex": "2",
        "formCss": "visit-day",
        "inputType": "visitDay",
        "tableColumn": "9",
        "validation": "visitDay",
        "fqn": "medAdminRec.mar_event_day"
      },
      {
        "elementKey": "mar_event_time",
        "formIndex": "2",
        "formCss": "visit-time",
        "inputType": "visitTime",
        "tableColumn": "10",
        "validation": "time24",
        "fqn": "medAdminRec.mar_event_time"
      },
      {
        "elementKey": "mar_location",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "12",
        "fqn": "medAdminRec.mar_location"
      },
      {
        "elementKey": "mar_secSigName",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "13",
        "fqn": "medAdminRec.mar_secSigName"
      },
      {
        "elementKey": "mar_barCodeCheck",
        "formIndex": "2",
        "formOption": "elementViewOnly",
        "inputType": "checkbox",
        "tableColumn": "14",
        "fqn": "medAdminRec.mar_barCodeCheck"
      },
      {
        "elementKey": "mar_comments",
        "formIndex": "2",
        "inputType": "textarea",
        "tableColumn": "15",
        "fqn": "medAdminRec.mar_comments"
      },
      {
        "elementKey": "mar_internal",
        "formIndex": "2",
        "inputType": "textarea",
        "tableColumn": "16",
        "fqn": "medAdminRec.mar_internal"
      }
    ],
    "pageElements": {
      "table": {
        "elementKey": "table",
        "pageElementIndex": "1",
        "pageKey": "medAdminRec",
        "tableKey": "table",
        "isTable": true,
        "form": {
          "elementKey": "table",
          "label": "Medication administration records v1",
          "addButtonText": "Administered",
          "formKey": "table",
          "ehr_groups": [
            {
              "elementKey": "medGroup1",
              "formCss": "grid-left-to-right-3",
              "fqn": "medAdminRec.medGroup1",
              "gIndex": "1",
              "gChildren": [
                "medStatus",
                "adminStatus",
                "medication",
                "route",
                "todayPlan",
                "todayGiven",
                "administeredBy",
                "adminProfession",
                "administeredTime"
              ]
            }
          ],
          "ehr_data": {
            "medStatus": "",
            "adminStatus": "",
            "medication": "",
            "route": "",
            "todayPlan": "",
            "todayGiven": "",
            "administeredBy": "",
            "adminProfession": "",
            "administeredTime": ""
          }
        },
        "fqn": "medAdminRec.table",
        "tableChildren": [
          "table_id",
          "medication",
          "route",
          "todayPlan",
          "todayGiven",
          "administeredBy",
          "adminProfession",
          "administeredTime",
          "medStatus",
          "adminStatus"
        ]
      },
      "marTable": {
        "elementKey": "marTable",
        "pageElementIndex": "2",
        "pageKey": "medAdminRec",
        "tableKey": "marTable",
        "isTable": true,
        "form": {
          "elementKey": "marTable",
          "label": "Medication administration records",
          "addButtonText": "NONE",
          "formKey": "marTable",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "medAdminRec.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "marTable_name",
                "marTable_profession",
                "marTable_day",
                "marTable_time"
              ]
            },
            {
              "elementKey": "medGroup1",
              "formOption": "hideGroup",
              "formCss": "grid-left-to-right-3",
              "fqn": "medAdminRec.medGroup1",
              "gIndex": "2",
              "gChildren": [
                "med_order_embedded"
              ]
            },
            {
              "elementKey": "medGroup2",
              "formCss": "embedded-data grid-left-to-right-4",
              "fqn": "medAdminRec.medGroup2",
              "gIndex": "3",
              "gChildren": [
                "mo_medOrder",
                "mo_medDetails",
                "mo_medInstructions",
                "mo_medReason",
                "mo_route",
                "mo_timing",
                "mo_schedDay",
                "mo_schedTime",
                "mo_id",
                "mo_alert"
              ]
            },
            {
              "elementKey": "medGroup3",
              "formCss": "grid-left-to-right-3",
              "fqn": "medAdminRec.medGroup3",
              "gIndex": "4",
              "gChildren": [
                "mar_status",
                "mar_dose",
                "mar_spacer4",
                "mar_route",
                "mar_event_day",
                "mar_event_time",
                "mar_location",
                "mar_secSigName",
                "mar_barCodeCheck"
              ]
            },
            {
              "elementKey": "mar_group_notes",
              "formCss": "grid-left-to-right-1",
              "fqn": "medAdminRec.mar_group_notes",
              "gIndex": "5",
              "gChildren": [
                "mar_comments",
                "mar_internal"
              ]
            }
          ],
          "ehr_data": {
            "marTable_name": "",
            "marTable_profession": "",
            "marTable_day": "",
            "marTable_time": "",
            "med_order_embedded": "",
            "mo_medOrder": "",
            "mo_medDetails": "",
            "mo_medInstructions": "",
            "mo_medReason": "",
            "mo_route": "",
            "mo_timing": "",
            "mo_schedDay": "",
            "mo_schedTime": "",
            "mo_id": "",
            "mo_alert": "",
            "mar_status": "",
            "mar_dose": "",
            "mar_route": "",
            "mar_event_day": "",
            "mar_event_time": "",
            "mar_location": "",
            "mar_secSigName": "",
            "mar_barCodeCheck": "",
            "mar_comments": "",
            "mar_internal": ""
          }
        },
        "fqn": "medAdminRec.marTable",
        "tableChildren": [
          "marTable_id",
          "marTable_day",
          "marTable_time",
          "med_order_embedded",
          "mo_medOrder",
          "mo_route",
          "mo_timing",
          "mo_schedDay",
          "mo_schedTime",
          "mo_alert",
          "mar_status",
          "mar_dose",
          "mar_route",
          "mar_event_day",
          "mar_event_time",
          "mar_location",
          "mar_secSigName",
          "mar_barCodeCheck",
          "mar_comments",
          "mar_internal",
          "marTable_name",
          "marTable_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "dischargeSummary": {
    "pageDataKey": "dischargeSummary",
    "pIndex": "27",
    "hasGridForm": true,
    "pageChildren": [
      {
        "elementKey": "admissionDay",
        "defaultValue": "0",
        "formIndex": "1",
        "inputType": "visitDay",
        "validation": "visitDay",
        "fqn": "dischargeSummary.admissionDay"
      },
      {
        "elementKey": "dischargingPhysician/np",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Dr. Notley",
            "text": "Dr. Notley"
          },
          {
            "key": "Dr. Hunicutt",
            "text": "Dr. Hunicutt"
          },
          {
            "key": "Dr. Lee",
            "text": "Dr. Lee"
          },
          {
            "key": "Dr. Malik",
            "text": "Dr. Malik"
          },
          {
            "key": "Dr. Ng",
            "text": "Dr. Ng"
          },
          {
            "key": "Dr. Walker",
            "text": "Dr. Walker"
          },
          {
            "key": "Dr. Brooks",
            "text": "Dr. Brooks"
          }
        ],
        "fqn": "dischargeSummary.dischargingPhysician/np"
      },
      {
        "elementKey": "spacer27",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "dischargeSummary.spacer27"
      },
      {
        "elementKey": "clinicalSummary",
        "formIndex": "1",
        "formCss": "grid-span-2-columns",
        "inputType": "textarea",
        "fqn": "dischargeSummary.clinicalSummary"
      },
      {
        "elementKey": "dischargeDiagnosis",
        "formIndex": "2",
        "formCss": "grid-span-3-columns",
        "inputType": "textarea",
        "fqn": "dischargeSummary.dischargeDiagnosis"
      },
      {
        "elementKey": "dischargeEducation",
        "formIndex": "2",
        "formCss": "grid-span-3-columns",
        "inputType": "textarea",
        "fqn": "dischargeSummary.dischargeEducation"
      },
      {
        "elementKey": "spacer28",
        "formIndex": "2",
        "inputType": "spacer",
        "fqn": "dischargeSummary.spacer28"
      },
      {
        "elementKey": "dischargeDay",
        "formIndex": "2",
        "inputType": "visitDay",
        "validation": "visitDay",
        "fqn": "dischargeSummary.dischargeDay"
      },
      {
        "elementKey": "dischargeTime",
        "formIndex": "2",
        "inputType": "visitTime",
        "validation": "time24",
        "fqn": "dischargeSummary.dischargeTime"
      },
      {
        "elementKey": "dischargedTo",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "Home",
            "text": "Home"
          },
          {
            "key": "Expired",
            "text": "Expired"
          },
          {
            "key": "Transferred",
            "text": "Transferred"
          }
        ],
        "fqn": "dischargeSummary.dischargedTo"
      },
      {
        "elementKey": "transferedTo",
        "formIndex": "2",
        "inputType": "text",
        "fqn": "dischargeSummary.transferedTo"
      },
      {
        "elementKey": "leavingBy",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "Taxi",
            "text": "Taxi"
          },
          {
            "key": "Family",
            "text": "Family"
          },
          {
            "key": "Ambulance",
            "text": "Ambulance"
          },
          {
            "key": "Walk out/wheelchair",
            "text": "Walk out/wheelchair"
          }
        ],
        "fqn": "dischargeSummary.leavingBy"
      }
    ],
    "pageElements": {
      "pageForm": {
        "elementKey": "pageForm",
        "pageElementIndex": "1",
        "formKey": "pageForm",
        "fqn": "dischargeSummary.pageForm",
        "isPageForm": true,
        "ehr_groups": [
          {
            "elementKey": "cGroup27-1",
            "formCss": "grid-left-to-right-3",
            "fqn": "dischargeSummary.cGroup27-1",
            "gIndex": "1",
            "gChildren": [
              "admissionDay",
              "dischargingPhysician/np",
              "spacer27",
              "clinicalSummary"
            ]
          }
        ]
      },
      "pageForm2": {
        "elementKey": "pageForm2",
        "pageElementIndex": "2",
        "formKey": "pageForm2",
        "fqn": "dischargeSummary.pageForm2",
        "isPageForm": true,
        "ehr_groups": [
          {
            "elementKey": "cGroup27-1",
            "formCss": "grid-left-to-right-3",
            "fqn": "dischargeSummary.cGroup27-1",
            "gIndex": "1",
            "gChildren": [
              "dischargeDiagnosis",
              "dischargeEducation",
              "spacer28",
              "dischargeDay",
              "dischargeTime",
              "dischargedTo",
              "transferedTo",
              "leavingBy"
            ]
          }
        ]
      }
    }
  },
  "billing": {
    "pageDataKey": "billing",
    "pIndex": "28",
    "hasGridForm": true,
    "pageChildren": [
      {
        "elementKey": "paymentType",
        "formIndex": "1",
        "inputType": "checkset",
        "options": [
          {
            "key": "msp",
            "text": "MSP"
          },
          {
            "key": "thirdParty",
            "text": "Third party"
          },
          {
            "key": "federal",
            "text": "Federal"
          }
        ],
        "fqn": "billing.paymentType"
      }
    ],
    "pageElements": {
      "pageForm": {
        "elementKey": "pageForm",
        "pageElementIndex": "1",
        "formKey": "pageForm",
        "fqn": "billing.pageForm",
        "isPageForm": true,
        "ehr_groups": [
          {
            "elementKey": "cGroup28-1",
            "formCss": "grid-left-to-right-3",
            "fqn": "billing.cGroup28-1",
            "gIndex": "1",
            "gChildren": [
              "paymentType"
            ]
          }
        ]
      }
    }
  },
  "progressNotes": {
    "pageDataKey": "progressNotes",
    "pIndex": "29",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "table_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "progressNotes.name"
      },
      {
        "elementKey": "table_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "table_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "progressNotes.profession"
      },
      {
        "elementKey": "table_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "progressNotes.day"
      },
      {
        "elementKey": "table_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "progressNotes.time"
      },
      {
        "elementKey": "note",
        "formIndex": "1",
        "inputType": "textarea",
        "tableColumn": "2",
        "fqn": "progressNotes.note"
      },
      {
        "elementKey": "sbar_name",
        "formIndex": "2",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "progressNotes.name"
      },
      {
        "elementKey": "sbar_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "sbar_profession",
        "formIndex": "2",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "progressNotes.profession"
      },
      {
        "elementKey": "sbar_day",
        "formIndex": "2",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "progressNotes.day"
      },
      {
        "elementKey": "sbar_time",
        "formIndex": "2",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "progressNotes.time"
      },
      {
        "elementKey": "situation",
        "formIndex": "2",
        "inputType": "textarea",
        "tableColumn": "2",
        "fqn": "progressNotes.situation"
      },
      {
        "elementKey": "background",
        "formIndex": "2",
        "inputType": "textarea",
        "tableColumn": "3",
        "fqn": "progressNotes.background"
      },
      {
        "elementKey": "assessment",
        "formIndex": "2",
        "inputType": "textarea",
        "tableColumn": "4",
        "fqn": "progressNotes.assessment"
      },
      {
        "elementKey": "recommendation",
        "formIndex": "2",
        "inputType": "textarea",
        "tableColumn": "5",
        "fqn": "progressNotes.recommendation"
      }
    ],
    "pageElements": {
      "table": {
        "elementKey": "table",
        "pageElementIndex": "1",
        "pageKey": "progressNotes",
        "tableKey": "table",
        "isTable": true,
        "form": {
          "elementKey": "table",
          "label": "Progress notes",
          "addButtonText": "Add an encounter note",
          "formKey": "table",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "progressNotes.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "table_name",
                "table_profession",
                "table_day",
                "table_time"
              ]
            },
            {
              "elementKey": "cGroup29-2",
              "formCss": "grid-left-to-right-1",
              "fqn": "progressNotes.cGroup29-2",
              "gIndex": "2",
              "gChildren": [
                "note"
              ]
            }
          ],
          "ehr_data": {
            "table_name": "",
            "table_profession": "",
            "table_day": "",
            "table_time": "",
            "note": ""
          }
        },
        "fqn": "progressNotes.table",
        "tableChildren": [
          "table_id",
          "table_day",
          "table_time",
          "note",
          "table_name",
          "table_profession"
        ],
        "hasRecHeader": true
      },
      "sbar": {
        "elementKey": "sbar",
        "pageElementIndex": "2",
        "pageKey": "progressNotes",
        "tableKey": "sbar",
        "isTable": true,
        "form": {
          "elementKey": "sbar",
          "label": "SBAR notes",
          "addButtonText": "Add a SBAR note",
          "formKey": "sbar",
          "ehr_groups": [
            {
              "elementKey": "sbarHdr",
              "formCss": "record-header",
              "fqn": "progressNotes.sbarHdr",
              "gIndex": "1",
              "gChildren": [
                "sbar_name",
                "sbar_profession",
                "sbar_day",
                "sbar_time"
              ]
            },
            {
              "elementKey": "sbarNotes",
              "formCss": "grid-left-to-right-1",
              "fqn": "progressNotes.sbarNotes",
              "gIndex": "2",
              "gChildren": [
                "situation",
                "background",
                "assessment",
                "recommendation"
              ]
            }
          ],
          "ehr_data": {
            "sbar_name": "",
            "sbar_profession": "",
            "sbar_day": "",
            "sbar_time": "",
            "situation": "",
            "background": "",
            "assessment": "",
            "recommendation": ""
          }
        },
        "fqn": "progressNotes.sbar",
        "tableChildren": [
          "sbar_id",
          "sbar_day",
          "sbar_time",
          "situation",
          "background",
          "assessment",
          "recommendation",
          "sbar_name",
          "sbar_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "carePlan": {
    "pageDataKey": "carePlan",
    "pIndex": "30",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "table_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "carePlan.name"
      },
      {
        "elementKey": "table_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "table_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "carePlan.profession"
      },
      {
        "elementKey": "table_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "carePlan.day"
      },
      {
        "elementKey": "table_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "carePlan.time"
      },
      {
        "elementKey": "clinical",
        "formIndex": "1",
        "inputType": "textarea",
        "tableColumn": "2",
        "fqn": "carePlan.clinical"
      },
      {
        "elementKey": "goal",
        "formIndex": "1",
        "inputType": "textarea",
        "tableColumn": "3",
        "fqn": "carePlan.goal"
      },
      {
        "elementKey": "interventions",
        "formIndex": "1",
        "inputType": "textarea",
        "tableColumn": "4",
        "fqn": "carePlan.interventions"
      },
      {
        "elementKey": "evaluation",
        "formIndex": "1",
        "inputType": "textarea",
        "tableColumn": "5",
        "fqn": "carePlan.evaluation"
      },
      {
        "elementKey": "status",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "In progress",
            "text": "In progress"
          },
          {
            "key": "Complete",
            "text": "Complete"
          }
        ],
        "tableColumn": "6",
        "fqn": "carePlan.status"
      }
    ],
    "pageElements": {
      "table": {
        "elementKey": "table",
        "pageElementIndex": "1",
        "pageKey": "carePlan",
        "tableKey": "table",
        "isTable": true,
        "form": {
          "elementKey": "table",
          "label": "Care plan",
          "addButtonText": "Add a care plan",
          "formKey": "table",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "carePlan.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "table_name",
                "table_profession",
                "table_day",
                "table_time"
              ]
            },
            {
              "elementKey": "cGroup30-2",
              "formCss": "grid-left-to-right-3",
              "fqn": "carePlan.cGroup30-2",
              "gIndex": "2",
              "gChildren": [
                "clinical",
                "goal",
                "interventions",
                "evaluation",
                "status"
              ]
            }
          ],
          "ehr_data": {
            "table_name": "",
            "table_profession": "",
            "table_day": "",
            "table_time": "",
            "clinical": "",
            "goal": "",
            "interventions": "",
            "evaluation": "",
            "status": ""
          }
        },
        "fqn": "carePlan.table",
        "tableChildren": [
          "table_id",
          "table_day",
          "table_time",
          "clinical",
          "goal",
          "interventions",
          "evaluation",
          "status",
          "table_name",
          "table_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "consults": {
    "pageDataKey": "consults",
    "pIndex": "31",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "table_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "consults.name"
      },
      {
        "elementKey": "table_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "table_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "consults.profession"
      },
      {
        "elementKey": "table_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "consults.day"
      },
      {
        "elementKey": "table_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "consults.time"
      },
      {
        "elementKey": "consultReport",
        "formIndex": "1",
        "inputType": "ehrFile",
        "tableColumn": "2",
        "fqn": "consults.consultReport"
      },
      {
        "elementKey": "comments",
        "formIndex": "1",
        "inputType": "textarea",
        "tableColumn": "3",
        "fqn": "consults.comments"
      }
    ],
    "pageElements": {
      "table": {
        "elementKey": "table",
        "pageElementIndex": "1",
        "pageKey": "consults",
        "tableKey": "table",
        "isTable": true,
        "form": {
          "elementKey": "table",
          "label": "Consults",
          "addButtonText": "Add a consultation report",
          "formKey": "table",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "consults.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "table_name",
                "table_profession",
                "table_day",
                "table_time"
              ]
            },
            {
              "elementKey": "cGroup31-2",
              "formCss": "grid-left-to-right-3",
              "fqn": "consults.cGroup31-2",
              "gIndex": "2",
              "gChildren": [
                "consultReport",
                "comments"
              ]
            }
          ],
          "ehr_data": {
            "table_name": "",
            "table_profession": "",
            "table_day": "",
            "table_time": "",
            "consultReport": "",
            "comments": ""
          }
        },
        "fqn": "consults.table",
        "tableChildren": [
          "table_id",
          "table_day",
          "table_time",
          "consultReport",
          "comments",
          "table_name",
          "table_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "labResults": {
    "pageDataKey": "labResults",
    "pIndex": "32",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "table_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "labResults.name"
      },
      {
        "elementKey": "table_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "table_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "labResults.profession"
      },
      {
        "elementKey": "table_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "labResults.day"
      },
      {
        "elementKey": "table_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "labResults.time"
      },
      {
        "elementKey": "laboratoryReport",
        "formIndex": "1",
        "inputType": "ehrFile",
        "tableColumn": "2",
        "fqn": "labResults.laboratoryReport"
      },
      {
        "elementKey": "comments",
        "formIndex": "1",
        "inputType": "textarea",
        "tableColumn": "3",
        "fqn": "labResults.comments"
      },
      {
        "elementKey": "labResultGeneral_name",
        "formIndex": "2",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "labResults.name"
      },
      {
        "elementKey": "labResultGeneral_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "labResultGeneral_profession",
        "formIndex": "2",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "labResults.profession"
      },
      {
        "elementKey": "labResultGeneral_day",
        "formIndex": "2",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "labResults.day"
      },
      {
        "elementKey": "labResultGeneral_time",
        "formIndex": "2",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "labResults.time"
      },
      {
        "elementKey": "urinOrderPhys",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "2",
        "fqn": "labResults.urinOrderPhys"
      },
      {
        "elementKey": "lrh_HCO3",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "21–32 mmol/L",
        "tableColumn": "3",
        "fqn": "labResults.lrh_HCO3",
        "suffixText": "21–32 mmol/L"
      },
      {
        "elementKey": "lrh_Ca",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "2.12–2.52 mmol/L",
        "tableColumn": "4",
        "fqn": "labResults.lrh_Ca",
        "suffixText": "2.12–2.52 mmol/L"
      },
      {
        "elementKey": "lrh_Ca_Ion",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "1.14–1.28 mmol/L",
        "tableColumn": "5",
        "fqn": "labResults.lrh_Ca_Ion",
        "suffixText": "1.14–1.28 mmol/L"
      },
      {
        "elementKey": "lrh_CO2",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "23–28 mmol/L",
        "tableColumn": "6",
        "fqn": "labResults.lrh_CO2",
        "suffixText": "23–28 mmol/L"
      },
      {
        "elementKey": "lrh_chloride",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "98 - 107 mmol/L",
        "tableColumn": "7",
        "fqn": "labResults.lrh_chloride",
        "suffixText": "98 - 107 mmol/L"
      },
      {
        "elementKey": "lrh_ck",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "F: 30 - 190 IU/L-NL-M: 30 - 250 IU/L",
        "tableColumn": "8",
        "fqn": "labResults.lrh_ck",
        "suffixText": "F: 30 - 190 IU/L\nM: 30 - 250 IU/L"
      },
      {
        "elementKey": "lrh_glucose",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "3.9 - 5.6 mmol/L (fasting)",
        "tableColumn": "9",
        "fqn": "labResults.lrh_glucose",
        "suffixText": "3.9 - 5.6 mmol/L (fasting)"
      },
      {
        "elementKey": "lrh_Mg",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "0.74–1.03 mmol/L",
        "tableColumn": "10",
        "fqn": "labResults.lrh_Mg",
        "suffixText": "0.74–1.03 mmol/L"
      },
      {
        "elementKey": "lrh_PO4",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "0.81–1.58 mmol/L",
        "tableColumn": "11",
        "fqn": "labResults.lrh_PO4",
        "suffixText": "0.81–1.58 mmol/L"
      },
      {
        "elementKey": "lrh_K",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "3.5–5.1 mmol/L",
        "tableColumn": "12",
        "fqn": "labResults.lrh_K",
        "suffixText": "3.5–5.1 mmol/L"
      },
      {
        "elementKey": "lrh_Na",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "136–146 mmol/L",
        "tableColumn": "13",
        "fqn": "labResults.lrh_Na",
        "suffixText": "136–146 mmol/L"
      },
      {
        "elementKey": "lrh_bun",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "F: 22–75 µmol/L-NL-M: 49–93 µmol/L",
        "tableColumn": "14",
        "fqn": "labResults.lrh_bun",
        "suffixText": "F: 22–75 µmol/L\nM: 49–93 µmol/L"
      },
      {
        "elementKey": "lrh_cr",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "F: 22–75 µmol/L-NL-M: 49–93 µmol/L",
        "tableColumn": "15",
        "fqn": "labResults.lrh_cr",
        "suffixText": "F: 22–75 µmol/L\nM: 49–93 µmol/L"
      },
      {
        "elementKey": "lrh_egfr",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "> 60 mL/min",
        "tableColumn": "16",
        "fqn": "labResults.lrh_egfr",
        "suffixText": "> 60 mL/min"
      },
      {
        "elementKey": "lrh_alt",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "17–63 IU/L",
        "tableColumn": "17",
        "fqn": "labResults.lrh_alt",
        "suffixText": "17–63 IU/L"
      },
      {
        "elementKey": "lrh_ast",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "15–37 IU/L",
        "tableColumn": "18",
        "fqn": "labResults.lrh_ast",
        "suffixText": "15–37 IU/L"
      },
      {
        "elementKey": "lrh_alp",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "50–136 IU/L",
        "tableColumn": "19",
        "fqn": "labResults.lrh_alp",
        "suffixText": "50–136 IU/L"
      },
      {
        "elementKey": "lrh_bilirubinD",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "2–9 µmol/L",
        "tableColumn": "20",
        "fqn": "labResults.lrh_bilirubinD",
        "suffixText": "2–9 µmol/L"
      },
      {
        "elementKey": "lrh_bilirubinT",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "3–17 µmol/L",
        "tableColumn": "21",
        "fqn": "labResults.lrh_bilirubinT",
        "suffixText": "3–17 µmol/L"
      },
      {
        "elementKey": "lrh_ggt",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "F: 5.0–55.0 IU/L-NL-M: 15.0–85.0 IU/L",
        "tableColumn": "22",
        "fqn": "labResults.lrh_ggt",
        "suffixText": "F: 5.0–55.0 IU/L\nM: 15.0–85.0 IU/L"
      },
      {
        "elementKey": "lrh_ldh",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "100–205 IU/L",
        "tableColumn": "23",
        "fqn": "labResults.lrh_ldh",
        "suffixText": "100–205 IU/L"
      },
      {
        "elementKey": "lrh_lipase",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "73–393 IU/L",
        "tableColumn": "24",
        "fqn": "labResults.lrh_lipase",
        "suffixText": "73–393 IU/L"
      },
      {
        "elementKey": "lrh_abg_hco3",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "22–27 mmol/L",
        "tableColumn": "25",
        "fqn": "labResults.lrh_abg_hco3",
        "suffixText": "22–27 mmol/L"
      },
      {
        "elementKey": "lrh_abg_o2sat",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "96-100%",
        "tableColumn": "26",
        "fqn": "labResults.lrh_abg_o2sat",
        "suffixText": "96-100%"
      },
      {
        "elementKey": "lrh_abg_pco2",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "32–45 mm Hg",
        "tableColumn": "27",
        "fqn": "labResults.lrh_abg_pco2",
        "suffixText": "32–45 mm Hg"
      },
      {
        "elementKey": "lrh_po2",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "83–116 mm Hg",
        "tableColumn": "28",
        "fqn": "labResults.lrh_po2",
        "suffixText": "83–116 mm Hg"
      },
      {
        "elementKey": "lrh_abg_ph",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "7.38–7.46",
        "tableColumn": "29",
        "fqn": "labResults.lrh_abg_ph",
        "suffixText": "7.38–7.46"
      },
      {
        "elementKey": "lru_bnp",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "≤ 50 pg/mL",
        "tableColumn": "30",
        "fqn": "labResults.lru_bnp",
        "suffixText": "≤ 50 pg/mL"
      },
      {
        "elementKey": "lrh_lrtrop_I",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "< 0.03 ng/mL",
        "tableColumn": "31",
        "fqn": "labResults.lrh_lrtrop_I",
        "suffixText": "< 0.03 ng/mL"
      },
      {
        "elementKey": "lrh_lrtrop_T",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "< 0.1 ng/mL",
        "tableColumn": "32",
        "fqn": "labResults.lrh_lrtrop_T",
        "suffixText": "< 0.1 ng/mL"
      },
      {
        "elementKey": "lrh_lrtrop_H",
        "formIndex": "2",
        "inputType": "lab_result",
        "suffix": "F: < 14 ng/L-NL-M: < 22 ng/L",
        "tableColumn": "33",
        "fqn": "labResults.lrh_lrtrop_H",
        "suffixText": "F: < 14 ng/L\nM: < 22 ng/L"
      },
      {
        "elementKey": "lrh_bloodGroup",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "A-",
            "text": "A-"
          },
          {
            "key": "A+",
            "text": "A+"
          },
          {
            "key": "B-",
            "text": "B-"
          },
          {
            "key": "B+",
            "text": "B+"
          },
          {
            "key": "AB-",
            "text": "AB-"
          },
          {
            "key": "AB+",
            "text": "AB+"
          },
          {
            "key": "O-",
            "text": "O-"
          },
          {
            "key": "O+",
            "text": "O+"
          }
        ],
        "tableColumn": "34",
        "fqn": "labResults.lrh_bloodGroup"
      },
      {
        "elementKey": "lrh_antibody",
        "formIndex": "2",
        "inputType": "checkbox",
        "tableColumn": "35",
        "fqn": "labResults.lrh_antibody"
      },
      {
        "elementKey": "lrh_gen_comments",
        "formIndex": "2",
        "inputType": "textarea",
        "tableColumn": "36",
        "fqn": "labResults.lrh_gen_comments"
      },
      {
        "elementKey": "labResultHematology_name",
        "formIndex": "3",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "labResults.name"
      },
      {
        "elementKey": "labResultHematology_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "labResultHematology_profession",
        "formIndex": "3",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "labResults.profession"
      },
      {
        "elementKey": "labResultHematology_day",
        "formIndex": "3",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "labResults.day"
      },
      {
        "elementKey": "labResultHematology_time",
        "formIndex": "3",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "labResults.time"
      },
      {
        "elementKey": "lrh_HbA1C",
        "formIndex": "3",
        "inputType": "lab_result",
        "suffix": "4.8%–6.0%",
        "tableColumn": "2",
        "fqn": "labResults.lrh_HbA1C",
        "suffixText": "4.8%–6.0%"
      },
      {
        "elementKey": "lrh_Hgb",
        "formIndex": "3",
        "inputType": "lab_result",
        "suffix": "115-155 g/L",
        "tableColumn": "3",
        "fqn": "labResults.lrh_Hgb",
        "suffixText": "115-155 g/L"
      },
      {
        "elementKey": "lrh_hct",
        "formIndex": "3",
        "inputType": "lab_result",
        "suffix": "0.42 – 0.52 L/L",
        "tableColumn": "4",
        "fqn": "labResults.lrh_hct",
        "suffixText": "0.42 – 0.52 L/L"
      },
      {
        "elementKey": "lrh_platelets",
        "formIndex": "3",
        "inputType": "lab_result",
        "suffix": "130-380 x 10^9 /L",
        "tableColumn": "5",
        "fqn": "labResults.lrh_platelets",
        "suffixText": "130-380 x 10^9 /L"
      },
      {
        "elementKey": "lrh_rbc",
        "formIndex": "3",
        "inputType": "lab_result",
        "suffix": "3.50-5.00 x 10^12 /L",
        "tableColumn": "6",
        "fqn": "labResults.lrh_rbc",
        "suffixText": "3.50-5.00 x 10^12 /L"
      },
      {
        "elementKey": "lrh_wbc",
        "formIndex": "3",
        "inputType": "lab_result",
        "suffix": "3.5–10.5 × 10^9/L",
        "tableColumn": "7",
        "fqn": "labResults.lrh_wbc",
        "suffixText": "3.5–10.5 × 10^9/L"
      },
      {
        "elementKey": "lrh_basophils",
        "formIndex": "3",
        "inputType": "lab_result",
        "suffix": "0-0.1 x 10^9 /L",
        "tableColumn": "8",
        "fqn": "labResults.lrh_basophils",
        "suffixText": "0-0.1 x 10^9 /L"
      },
      {
        "elementKey": "lrh_eosinophils",
        "formIndex": "3",
        "inputType": "lab_result",
        "suffix": "0-0.5 x 10^9 /L",
        "tableColumn": "9",
        "fqn": "labResults.lrh_eosinophils",
        "suffixText": "0-0.5 x 10^9 /L"
      },
      {
        "elementKey": "lrh_lymphocytes",
        "formIndex": "3",
        "inputType": "lab_result",
        "suffix": "F: 0.8-3.3 x 10^9 /L-NL-M: 0.8–3.5 × 10^9/L",
        "tableColumn": "10",
        "fqn": "labResults.lrh_lymphocytes",
        "suffixText": "F: 0.8-3.3 x 10^9 /L\nM: 0.8–3.5 × 10^9/L"
      },
      {
        "elementKey": "lrh_monocytes",
        "formIndex": "3",
        "inputType": "lab_result",
        "suffix": "0.1-1.0 x 10^9 /L",
        "tableColumn": "11",
        "fqn": "labResults.lrh_monocytes",
        "suffixText": "0.1-1.0 x 10^9 /L"
      },
      {
        "elementKey": "lrh_neutrophils",
        "formIndex": "3",
        "inputType": "lab_result",
        "suffix": "2.0-7.5 x 10^9 /L",
        "tableColumn": "12",
        "fqn": "labResults.lrh_neutrophils",
        "suffixText": "2.0-7.5 x 10^9 /L"
      },
      {
        "elementKey": "lrh_comments",
        "formIndex": "3",
        "inputType": "textarea",
        "tableColumn": "13",
        "fqn": "labResults.lrh_comments"
      },
      {
        "elementKey": "labResultCoagulation_name",
        "formIndex": "4",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "labResults.name"
      },
      {
        "elementKey": "labResultCoagulation_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "labResultCoagulation_profession",
        "formIndex": "4",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "labResults.profession"
      },
      {
        "elementKey": "labResultCoagulation_day",
        "formIndex": "4",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "labResults.day"
      },
      {
        "elementKey": "labResultCoagulation_time",
        "formIndex": "4",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "labResults.time"
      },
      {
        "elementKey": "coag_fib",
        "formIndex": "4",
        "inputType": "lab_result",
        "suffix": "2-4 g/L",
        "tableColumn": "2",
        "fqn": "labResults.coag_fib",
        "suffixText": "2-4 g/L"
      },
      {
        "elementKey": "coag_ddimer",
        "formIndex": "4",
        "inputType": "lab_result",
        "tableColumn": "3",
        "fqn": "labResults.coag_ddimer"
      },
      {
        "elementKey": "coag_inr",
        "formIndex": "4",
        "inputType": "lab_result",
        "suffix": "0.9-1.2",
        "tableColumn": "4",
        "fqn": "labResults.coag_inr",
        "suffixText": "0.9-1.2"
      },
      {
        "elementKey": "coag_ptt",
        "formIndex": "4",
        "inputType": "lab_result",
        "tableColumn": "5",
        "fqn": "labResults.coag_ptt"
      },
      {
        "elementKey": "coag_appt",
        "formIndex": "4",
        "inputType": "lab_result",
        "suffix": "22-30 s",
        "tableColumn": "6",
        "fqn": "labResults.coag_appt",
        "suffixText": "22-30 s"
      },
      {
        "elementKey": "coag_comments",
        "formIndex": "4",
        "inputType": "textarea",
        "tableColumn": "7",
        "fqn": "labResults.coag_comments"
      },
      {
        "elementKey": "labResultUrine_name",
        "formIndex": "5",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "labResults.name"
      },
      {
        "elementKey": "labResultUrine_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "labResultUrine_profession",
        "formIndex": "5",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "labResults.profession"
      },
      {
        "elementKey": "labResultUrine_day",
        "formIndex": "5",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "labResults.day"
      },
      {
        "elementKey": "labResultUrine_time",
        "formIndex": "5",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "labResults.time"
      },
      {
        "elementKey": "lru_calrity",
        "formIndex": "5",
        "inputType": "lab_result",
        "suffix": "Normal: Clear",
        "tableColumn": "2",
        "fqn": "labResults.lru_calrity",
        "suffixText": "Normal: Clear"
      },
      {
        "elementKey": "lru_colour",
        "formIndex": "5",
        "inputType": "lab_result",
        "suffix": "Normal: Pale to dark yellow",
        "tableColumn": "3",
        "fqn": "labResults.lru_colour",
        "suffixText": "Normal: Pale to dark yellow"
      },
      {
        "elementKey": "lru_ordour",
        "formIndex": "5",
        "inputType": "lab_result",
        "suffix": "Slightly \"nutty\" odour",
        "tableColumn": "4",
        "fqn": "labResults.lru_ordour",
        "suffixText": "Slightly \"nutty\" odour"
      },
      {
        "elementKey": "lru_gravity",
        "formIndex": "5",
        "inputType": "lab_result",
        "suffix": "1.005–1.030",
        "tableColumn": "5",
        "fqn": "labResults.lru_gravity",
        "suffixText": "1.005–1.030"
      },
      {
        "elementKey": "lru_albumin",
        "formIndex": "5",
        "inputType": "lab_result",
        "suffix": "< 30mg",
        "tableColumn": "5",
        "fqn": "labResults.lru_albumin",
        "suffixText": "< 30mg"
      },
      {
        "elementKey": "lru_acr",
        "formIndex": "5",
        "inputType": "lab_result",
        "suffix": "≤ 2.0 g/mol Cr",
        "tableColumn": "6",
        "fqn": "labResults.lru_acr",
        "suffixText": "≤ 2.0 g/mol Cr"
      },
      {
        "elementKey": "lru_aldosterone",
        "formIndex": "5",
        "inputType": "lab_result",
        "suffix": "13.9–52.6 nmol/24 hour",
        "tableColumn": "7",
        "fqn": "labResults.lru_aldosterone",
        "suffixText": "13.9–52.6 nmol/24 hour"
      },
      {
        "elementKey": "lru_calcium",
        "formIndex": "5",
        "inputType": "lab_result",
        "suffix": "< 6.2 mmol/d",
        "tableColumn": "8",
        "fqn": "labResults.lru_calcium",
        "suffixText": "< 6.2 mmol/d"
      },
      {
        "elementKey": "lru_catecholamines",
        "formIndex": "5",
        "inputType": "lab_result",
        "suffix": "< 591 nmol/m2/24 hours",
        "tableColumn": "9",
        "fqn": "labResults.lru_catecholamines",
        "suffixText": "< 591 nmol/m2/24 hours"
      },
      {
        "elementKey": "lru_cortisol",
        "formIndex": "5",
        "inputType": "lab_result",
        "suffix": "< 248 nmol/24 hours",
        "tableColumn": "10",
        "fqn": "labResults.lru_cortisol",
        "suffixText": "< 248 nmol/24 hours"
      },
      {
        "elementKey": "lru_glucose",
        "formIndex": "5",
        "inputType": "lab_result",
        "suffix": "60–830 mcmol/L",
        "tableColumn": "11",
        "fqn": "labResults.lru_glucose",
        "suffixText": "60–830 mcmol/L"
      },
      {
        "elementKey": "lru_ketones",
        "formIndex": "5",
        "inputType": "lab_result",
        "suffix": "none",
        "tableColumn": "12",
        "fqn": "labResults.lru_ketones",
        "suffixText": "none"
      },
      {
        "elementKey": "lru_leukocyte",
        "formIndex": "5",
        "inputType": "lab_result",
        "tableColumn": "13",
        "fqn": "labResults.lru_leukocyte"
      },
      {
        "elementKey": "lru_nitrates",
        "formIndex": "5",
        "inputType": "lab_result",
        "tableColumn": "14",
        "fqn": "labResults.lru_nitrates"
      },
      {
        "elementKey": "lru_osmolality",
        "formIndex": "5",
        "inputType": "lab_result",
        "suffix": "38–1400 mOsm/kg H2O",
        "tableColumn": "15",
        "fqn": "labResults.lru_osmolality",
        "suffixText": "38–1400 mOsm/kg H2O"
      },
      {
        "elementKey": "lru_ph",
        "formIndex": "5",
        "inputType": "lab_result",
        "suffix": "5.0–8.5",
        "tableColumn": "16",
        "fqn": "labResults.lru_ph",
        "suffixText": "5.0–8.5"
      },
      {
        "elementKey": "lru_phosphate",
        "formIndex": "5",
        "inputType": "lab_result",
        "suffix": "Adult: 1.0-1.5 mmol/L-NL-Child: 1.3-2.3 mmol/L",
        "tableColumn": "17",
        "fqn": "labResults.lru_phosphate",
        "suffixText": "Adult: 1.0-1.5 mmol/L\nChild: 1.3-2.3 mmol/L"
      },
      {
        "elementKey": "lru_protein",
        "formIndex": "5",
        "inputType": "lab_result",
        "suffix": "None",
        "tableColumn": "18",
        "fqn": "labResults.lru_protein",
        "suffixText": "None"
      },
      {
        "elementKey": "lru_sodium",
        "formIndex": "5",
        "inputType": "lab_result",
        "suffix": "40-220 mmol/d",
        "tableColumn": "19",
        "fqn": "labResults.lru_sodium",
        "suffixText": "40-220 mmol/d"
      },
      {
        "elementKey": "lru_speccificGravity",
        "formIndex": "5",
        "inputType": "lab_result",
        "suffix": "1.005–1.030",
        "tableColumn": "20",
        "fqn": "labResults.lru_speccificGravity",
        "suffixText": "1.005–1.030"
      },
      {
        "elementKey": "lru_uricAcid",
        "formIndex": "5",
        "inputType": "lab_result",
        "suffix": "1.48–4.43 mmol/24 hours",
        "tableColumn": "21",
        "fqn": "labResults.lru_uricAcid",
        "suffixText": "1.48–4.43 mmol/24 hours"
      },
      {
        "elementKey": "lru_urobilinogen",
        "formIndex": "5",
        "inputType": "lab_result",
        "suffix": "≤ 16.0 µmol/L",
        "tableColumn": "22",
        "fqn": "labResults.lru_urobilinogen",
        "suffixText": "≤ 16.0 µmol/L"
      },
      {
        "elementKey": "lru_casts",
        "formIndex": "5",
        "inputType": "lab_result",
        "tableColumn": "23",
        "fqn": "labResults.lru_casts"
      },
      {
        "elementKey": "lru_crystals",
        "formIndex": "5",
        "inputType": "lab_result",
        "tableColumn": "24",
        "fqn": "labResults.lru_crystals"
      },
      {
        "elementKey": "lru_epitehlial",
        "formIndex": "5",
        "inputType": "lab_result",
        "tableColumn": "25",
        "fqn": "labResults.lru_epitehlial"
      },
      {
        "elementKey": "lru_rbc",
        "formIndex": "5",
        "inputType": "lab_result",
        "tableColumn": "26",
        "fqn": "labResults.lru_rbc"
      },
      {
        "elementKey": "lru_wbc",
        "formIndex": "5",
        "inputType": "lab_result",
        "tableColumn": "27",
        "fqn": "labResults.lru_wbc"
      },
      {
        "elementKey": "lruComments",
        "formIndex": "5",
        "inputType": "textarea",
        "tableColumn": "28",
        "fqn": "labResults.lruComments"
      }
    ],
    "pageElements": {
      "table": {
        "elementKey": "table",
        "pageElementIndex": "1",
        "pageKey": "labResults",
        "tableKey": "table",
        "isTable": true,
        "form": {
          "elementKey": "table",
          "label": "Laboratory reports v1",
          "addButtonText": "Add a laboratory report",
          "formKey": "table",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "labResults.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "table_name",
                "table_profession",
                "table_day",
                "table_time"
              ]
            },
            {
              "elementKey": "cGroup32-1",
              "formCss": "grid-left-to-right-3",
              "fqn": "labResults.cGroup32-1",
              "gIndex": "2",
              "gChildren": [
                "laboratoryReport",
                "comments"
              ]
            }
          ],
          "ehr_data": {
            "table_name": "",
            "table_profession": "",
            "table_day": "",
            "table_time": "",
            "laboratoryReport": "",
            "comments": ""
          }
        },
        "fqn": "labResults.table",
        "tableChildren": [
          "table_id",
          "table_day",
          "table_time",
          "laboratoryReport",
          "comments",
          "table_name",
          "table_profession"
        ],
        "hasRecHeader": true
      },
      "labResultGeneral": {
        "elementKey": "labResultGeneral",
        "pageElementIndex": "2",
        "pageKey": "labResults",
        "tableKey": "labResultGeneral",
        "isTable": true,
        "form": {
          "elementKey": "labResultGeneral",
          "label": "General",
          "addButtonText": "Create a laboratory report",
          "formOption": "transpose",
          "formKey": "labResultGeneral",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "labResults.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "labResultGeneral_name",
                "labResultGeneral_profession",
                "labResultGeneral_day",
                "labResultGeneral_time"
              ]
            },
            {
              "elementKey": "cAccGroup",
              "formCss": "grid-left-to-right-3",
              "fqn": "labResults.cAccGroup",
              "gIndex": "2",
              "gChildren": [
                "urinOrderPhys"
              ]
            },
            {
              "elementKey": "cChemGroup",
              "formCss": "grid-left-to-right-1",
              "fqn": "labResults.cChemGroup",
              "gIndex": "3",
              "gChildren": [
                "lrh_HCO3",
                "lrh_Ca",
                "lrh_Ca_Ion",
                "lrh_CO2",
                "lrh_chloride",
                "lrh_ck",
                "lrh_glucose",
                "lrh_Mg",
                "lrh_PO4",
                "lrh_K",
                "lrh_Na"
              ]
            },
            {
              "elementKey": "cRenalGroup",
              "formCss": "grid-left-to-right-1",
              "fqn": "labResults.cRenalGroup",
              "gIndex": "4",
              "gChildren": [
                "lrh_bun",
                "lrh_cr",
                "lrh_egfr"
              ]
            },
            {
              "elementKey": "cLiverGroup",
              "formCss": "grid-left-to-right-1",
              "fqn": "labResults.cLiverGroup",
              "gIndex": "5",
              "gChildren": [
                "lrh_alt",
                "lrh_ast",
                "lrh_alp",
                "lrh_bilirubinD",
                "lrh_bilirubinT",
                "lrh_ggt",
                "lrh_ldh",
                "lrh_lipase"
              ]
            },
            {
              "elementKey": "cBloodGasGroup",
              "formCss": "grid-left-to-right-1",
              "fqn": "labResults.cBloodGasGroup",
              "gIndex": "6",
              "gChildren": [
                "lrh_abg_hco3",
                "lrh_abg_o2sat",
                "lrh_abg_pco2",
                "lrh_po2",
                "lrh_abg_ph"
              ]
            },
            {
              "elementKey": "cCardiac",
              "formCss": "grid-left-to-right-1",
              "fqn": "labResults.cCardiac",
              "gIndex": "7",
              "gChildren": [
                "lru_bnp",
                "lrh_lrtrop_I",
                "lrh_lrtrop_T",
                "lrh_lrtrop_H"
              ]
            },
            {
              "elementKey": "cGroup32-6",
              "formCss": "grid-left-to-right-1",
              "fqn": "labResults.cGroup32-6",
              "gIndex": "8",
              "gChildren": [
                "lrh_bloodGroup",
                "lrh_antibody"
              ]
            },
            {
              "elementKey": "cGroup32-7",
              "formCss": "grid-left-to-right-1",
              "fqn": "labResults.cGroup32-7",
              "gIndex": "9",
              "gChildren": [
                "lrh_gen_comments"
              ]
            }
          ],
          "ehr_data": {
            "labResultGeneral_name": "",
            "labResultGeneral_profession": "",
            "labResultGeneral_day": "",
            "labResultGeneral_time": "",
            "urinOrderPhys": "",
            "lrh_HCO3": "",
            "lrh_Ca": "",
            "lrh_Ca_Ion": "",
            "lrh_CO2": "",
            "lrh_chloride": "",
            "lrh_ck": "",
            "lrh_glucose": "",
            "lrh_Mg": "",
            "lrh_PO4": "",
            "lrh_K": "",
            "lrh_Na": "",
            "lrh_bun": "",
            "lrh_cr": "",
            "lrh_egfr": "",
            "lrh_alt": "",
            "lrh_ast": "",
            "lrh_alp": "",
            "lrh_bilirubinD": "",
            "lrh_bilirubinT": "",
            "lrh_ggt": "",
            "lrh_ldh": "",
            "lrh_lipase": "",
            "lrh_abg_hco3": "",
            "lrh_abg_o2sat": "",
            "lrh_abg_pco2": "",
            "lrh_po2": "",
            "lrh_abg_ph": "",
            "lru_bnp": "",
            "lrh_lrtrop_I": "",
            "lrh_lrtrop_T": "",
            "lrh_lrtrop_H": "",
            "lrh_bloodGroup": "",
            "lrh_antibody": "",
            "lrh_gen_comments": ""
          }
        },
        "fqn": "labResults.labResultGeneral",
        "tableChildren": [
          "labResultGeneral_id",
          "labResultGeneral_day",
          "labResultGeneral_time",
          "urinOrderPhys",
          "lrh_HCO3",
          "lrh_Ca",
          "lrh_Ca_Ion",
          "lrh_CO2",
          "lrh_chloride",
          "lrh_ck",
          "lrh_glucose",
          "lrh_Mg",
          "lrh_PO4",
          "lrh_K",
          "lrh_Na",
          "lrh_bun",
          "lrh_cr",
          "lrh_egfr",
          "lrh_alt",
          "lrh_ast",
          "lrh_alp",
          "lrh_bilirubinD",
          "lrh_bilirubinT",
          "lrh_ggt",
          "lrh_ldh",
          "lrh_lipase",
          "lrh_abg_hco3",
          "lrh_abg_o2sat",
          "lrh_abg_pco2",
          "lrh_po2",
          "lrh_abg_ph",
          "lru_bnp",
          "lrh_lrtrop_I",
          "lrh_lrtrop_T",
          "lrh_lrtrop_H",
          "lrh_bloodGroup",
          "lrh_antibody",
          "lrh_gen_comments",
          "labResultGeneral_name",
          "labResultGeneral_profession"
        ],
        "hasRecHeader": true
      },
      "labResultHematology": {
        "elementKey": "labResultHematology",
        "pageElementIndex": "3",
        "pageKey": "labResults",
        "tableKey": "labResultHematology",
        "isTable": true,
        "form": {
          "elementKey": "labResultHematology",
          "label": "Hematology",
          "addButtonText": "Create a hematology laboratory report",
          "formOption": "transpose",
          "formKey": "labResultHematology",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "labResults.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "labResultHematology_name",
                "labResultHematology_profession",
                "labResultHematology_day",
                "labResultHematology_time"
              ]
            },
            {
              "elementKey": "cGroup32-2",
              "formCss": "grid-left-to-right-1",
              "fqn": "labResults.cGroup32-2",
              "gIndex": "2",
              "gChildren": [
                "lrh_HbA1C",
                "lrh_Hgb",
                "lrh_hct",
                "lrh_platelets",
                "lrh_rbc",
                "lrh_wbc"
              ]
            },
            {
              "elementKey": "cGroup32-3",
              "formCss": "grid-left-to-right-1",
              "fqn": "labResults.cGroup32-3",
              "gIndex": "3",
              "gChildren": [
                "lrh_basophils",
                "lrh_eosinophils",
                "lrh_lymphocytes",
                "lrh_monocytes",
                "lrh_neutrophils"
              ]
            },
            {
              "elementKey": "cGroup32-4",
              "formCss": "grid-left-to-right-1",
              "fqn": "labResults.cGroup32-4",
              "gIndex": "4",
              "gChildren": [
                "lrh_comments"
              ]
            }
          ],
          "ehr_data": {
            "labResultHematology_name": "",
            "labResultHematology_profession": "",
            "labResultHematology_day": "",
            "labResultHematology_time": "",
            "lrh_HbA1C": "",
            "lrh_Hgb": "",
            "lrh_hct": "",
            "lrh_platelets": "",
            "lrh_rbc": "",
            "lrh_wbc": "",
            "lrh_basophils": "",
            "lrh_eosinophils": "",
            "lrh_lymphocytes": "",
            "lrh_monocytes": "",
            "lrh_neutrophils": "",
            "lrh_comments": ""
          }
        },
        "fqn": "labResults.labResultHematology",
        "tableChildren": [
          "labResultHematology_id",
          "labResultHematology_day",
          "labResultHematology_time",
          "lrh_HbA1C",
          "lrh_Hgb",
          "lrh_hct",
          "lrh_platelets",
          "lrh_rbc",
          "lrh_wbc",
          "lrh_basophils",
          "lrh_eosinophils",
          "lrh_lymphocytes",
          "lrh_monocytes",
          "lrh_neutrophils",
          "lrh_comments",
          "labResultHematology_name",
          "labResultHematology_profession"
        ],
        "hasRecHeader": true
      },
      "labResultCoagulation": {
        "elementKey": "labResultCoagulation",
        "pageElementIndex": "4",
        "pageKey": "labResults",
        "tableKey": "labResultCoagulation",
        "isTable": true,
        "form": {
          "elementKey": "labResultCoagulation",
          "label": "Coagulation",
          "addButtonText": "Create a coagulation laboratory report",
          "formOption": "transpose",
          "formKey": "labResultCoagulation",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "labResults.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "labResultCoagulation_name",
                "labResultCoagulation_profession",
                "labResultCoagulation_day",
                "labResultCoagulation_time"
              ]
            },
            {
              "elementKey": "cGroup32-2",
              "formCss": "grid-left-to-right-1",
              "fqn": "labResults.cGroup32-2",
              "gIndex": "2",
              "gChildren": [
                "coag_fib",
                "coag_ddimer",
                "coag_inr",
                "coag_ptt",
                "coag_appt"
              ]
            },
            {
              "elementKey": "cGroup32-3",
              "formCss": "grid-left-to-right-1",
              "fqn": "labResults.cGroup32-3",
              "gIndex": "3",
              "gChildren": [
                "coag_comments"
              ]
            }
          ],
          "ehr_data": {
            "labResultCoagulation_name": "",
            "labResultCoagulation_profession": "",
            "labResultCoagulation_day": "",
            "labResultCoagulation_time": "",
            "coag_fib": "",
            "coag_ddimer": "",
            "coag_inr": "",
            "coag_ptt": "",
            "coag_appt": "",
            "coag_comments": ""
          }
        },
        "fqn": "labResults.labResultCoagulation",
        "tableChildren": [
          "labResultCoagulation_id",
          "labResultCoagulation_day",
          "labResultCoagulation_time",
          "coag_fib",
          "coag_ddimer",
          "coag_inr",
          "coag_ptt",
          "coag_appt",
          "coag_comments",
          "labResultCoagulation_name",
          "labResultCoagulation_profession"
        ],
        "hasRecHeader": true
      },
      "labResultUrine": {
        "elementKey": "labResultUrine",
        "pageElementIndex": "5",
        "pageKey": "labResults",
        "tableKey": "labResultUrine",
        "isTable": true,
        "form": {
          "elementKey": "labResultUrine",
          "label": "Urine analysis",
          "addButtonText": "Create a urinary laboratory report",
          "formOption": "transpose",
          "formKey": "labResultUrine",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "labResults.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "labResultUrine_name",
                "labResultUrine_profession",
                "labResultUrine_day",
                "labResultUrine_time"
              ]
            },
            {
              "elementKey": "cGroup32-2",
              "formCss": "grid-left-to-right-1",
              "fqn": "labResults.cGroup32-2",
              "gIndex": "2",
              "gChildren": [
                "lru_calrity",
                "lru_colour",
                "lru_ordour",
                "lru_gravity"
              ]
            },
            {
              "elementKey": "cGroup32-3",
              "formCss": "grid-left-to-right-1",
              "fqn": "labResults.cGroup32-3",
              "gIndex": "3",
              "gChildren": [
                "lru_albumin",
                "lru_acr",
                "lru_aldosterone",
                "lru_calcium",
                "lru_catecholamines",
                "lru_cortisol",
                "lru_glucose",
                "lru_ketones",
                "lru_leukocyte",
                "lru_nitrates",
                "lru_osmolality",
                "lru_ph",
                "lru_phosphate",
                "lru_protein",
                "lru_sodium",
                "lru_speccificGravity",
                "lru_uricAcid",
                "lru_urobilinogen"
              ]
            },
            {
              "elementKey": "cGroup32-4",
              "formCss": "grid-left-to-right-1",
              "fqn": "labResults.cGroup32-4",
              "gIndex": "4",
              "gChildren": [
                "lru_casts",
                "lru_crystals",
                "lru_epitehlial",
                "lru_rbc",
                "lru_wbc"
              ]
            },
            {
              "elementKey": "cGroup32-5",
              "formCss": "grid-left-to-right-1",
              "fqn": "labResults.cGroup32-5",
              "gIndex": "5",
              "gChildren": [
                "lruComments"
              ]
            }
          ],
          "ehr_data": {
            "labResultUrine_name": "",
            "labResultUrine_profession": "",
            "labResultUrine_day": "",
            "labResultUrine_time": "",
            "lru_calrity": "",
            "lru_colour": "",
            "lru_ordour": "",
            "lru_gravity": "",
            "lru_albumin": "",
            "lru_acr": "",
            "lru_aldosterone": "",
            "lru_calcium": "",
            "lru_catecholamines": "",
            "lru_cortisol": "",
            "lru_glucose": "",
            "lru_ketones": "",
            "lru_leukocyte": "",
            "lru_nitrates": "",
            "lru_osmolality": "",
            "lru_ph": "",
            "lru_phosphate": "",
            "lru_protein": "",
            "lru_sodium": "",
            "lru_speccificGravity": "",
            "lru_uricAcid": "",
            "lru_urobilinogen": "",
            "lru_casts": "",
            "lru_crystals": "",
            "lru_epitehlial": "",
            "lru_rbc": "",
            "lru_wbc": "",
            "lruComments": ""
          }
        },
        "fqn": "labResults.labResultUrine",
        "tableChildren": [
          "labResultUrine_id",
          "labResultUrine_day",
          "labResultUrine_time",
          "lru_calrity",
          "lru_colour",
          "lru_ordour",
          "lru_gravity",
          "lru_albumin",
          "lru_acr",
          "lru_aldosterone",
          "lru_calcium",
          "lru_catecholamines",
          "lru_cortisol",
          "lru_glucose",
          "lru_ketones",
          "lru_leukocyte",
          "lru_nitrates",
          "lru_osmolality",
          "lru_ph",
          "lru_phosphate",
          "lru_protein",
          "lru_sodium",
          "lru_speccificGravity",
          "lru_uricAcid",
          "lru_urobilinogen",
          "lru_casts",
          "lru_crystals",
          "lru_epitehlial",
          "lru_rbc",
          "lru_wbc",
          "lruComments",
          "labResultUrine_name",
          "labResultUrine_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "medicalImaging": {
    "pageDataKey": "medicalImaging",
    "pIndex": "33",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "table_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "medicalImaging.name"
      },
      {
        "elementKey": "table_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "table_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "medicalImaging.profession"
      },
      {
        "elementKey": "table_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "medicalImaging.day"
      },
      {
        "elementKey": "table_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "medicalImaging.time"
      },
      {
        "elementKey": "laboratoryReport",
        "formIndex": "1",
        "inputType": "ehrFile",
        "tableColumn": "2",
        "fqn": "medicalImaging.laboratoryReport"
      },
      {
        "elementKey": "comments",
        "formIndex": "1",
        "inputType": "textarea",
        "tableColumn": "3",
        "fqn": "medicalImaging.comments"
      }
    ],
    "pageElements": {
      "table": {
        "elementKey": "table",
        "pageElementIndex": "1",
        "pageKey": "medicalImaging",
        "tableKey": "table",
        "isTable": true,
        "form": {
          "elementKey": "table",
          "label": "Medical imaging",
          "addButtonText": "Add a report or image",
          "formKey": "table",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "medicalImaging.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "table_name",
                "table_profession",
                "table_day",
                "table_time"
              ]
            },
            {
              "elementKey": "cGroup33-2",
              "formCss": "grid-left-to-right-3",
              "fqn": "medicalImaging.cGroup33-2",
              "gIndex": "2",
              "gChildren": [
                "laboratoryReport",
                "comments"
              ]
            }
          ],
          "ehr_data": {
            "table_name": "",
            "table_profession": "",
            "table_day": "",
            "table_time": "",
            "laboratoryReport": "",
            "comments": ""
          }
        },
        "fqn": "medicalImaging.table",
        "tableChildren": [
          "table_id",
          "table_day",
          "table_time",
          "laboratoryReport",
          "comments",
          "table_name",
          "table_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "operationReports": {
    "pageDataKey": "operationReports",
    "pIndex": "34",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "table_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "operationReports.name"
      },
      {
        "elementKey": "table_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "table_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "operationReports.profession"
      },
      {
        "elementKey": "table_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "operationReports.day"
      },
      {
        "elementKey": "table_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "operationReports.time"
      },
      {
        "elementKey": "laboratoryReport",
        "formIndex": "1",
        "inputType": "ehrFile",
        "tableColumn": "2",
        "fqn": "operationReports.laboratoryReport"
      },
      {
        "elementKey": "comments",
        "formIndex": "1",
        "inputType": "textarea",
        "tableColumn": "3",
        "fqn": "operationReports.comments"
      }
    ],
    "pageElements": {
      "table": {
        "elementKey": "table",
        "pageElementIndex": "1",
        "pageKey": "operationReports",
        "tableKey": "table",
        "isTable": true,
        "form": {
          "elementKey": "table",
          "label": "Operative and anaesthesia records",
          "addButtonText": "Add a report",
          "formKey": "table",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "operationReports.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "table_name",
                "table_profession",
                "table_day",
                "table_time"
              ]
            },
            {
              "elementKey": "cGroup34-2",
              "formCss": "grid-left-to-right-3",
              "fqn": "operationReports.cGroup34-2",
              "gIndex": "2",
              "gChildren": [
                "laboratoryReport",
                "comments"
              ]
            }
          ],
          "ehr_data": {
            "table_name": "",
            "table_profession": "",
            "table_day": "",
            "table_time": "",
            "laboratoryReport": "",
            "comments": ""
          }
        },
        "fqn": "operationReports.table",
        "tableChildren": [
          "table_id",
          "table_day",
          "table_time",
          "laboratoryReport",
          "comments",
          "table_name",
          "table_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "assessmentTools": {
    "pageDataKey": "assessmentTools",
    "pIndex": "35",
    "formOption": "formOption",
    "hasGridForm": true,
    "pageChildren": [
      {
        "elementKey": "admissions1_1",
        "assetBase": "standardized-assessment-tools",
        "assetName": "the-canadian-ed-triage-and-acuity-scale.gif",
        "formIndex": "1",
        "inputType": "assetLink",
        "fqn": "assessmentTools.admissions1_1"
      },
      {
        "elementKey": "admissions2_1",
        "assetBase": "standardized-assessment-tools",
        "assetName": "patient-health-questionnaire.pdf",
        "formIndex": "1",
        "inputType": "assetLink",
        "fqn": "assessmentTools.admissions2_1"
      },
      {
        "elementKey": "admissions3_1",
        "assetBase": "standardized-assessment-tools",
        "assetName": "audit.pdf",
        "formIndex": "1",
        "inputType": "assetLink",
        "fqn": "assessmentTools.admissions3_1"
      },
      {
        "elementKey": "painAssessment1_1",
        "assetBase": "standardized-assessment-tools",
        "assetName": "opqrstuv.pdf",
        "formIndex": "1",
        "inputType": "assetLink",
        "fqn": "assessmentTools.painAssessment1_1"
      },
      {
        "elementKey": "painAssessment2_1",
        "assetBase": "standardized-assessment-tools",
        "assetName": "numeric-rating-scale.pdf",
        "formIndex": "1",
        "inputType": "assetLink",
        "fqn": "assessmentTools.painAssessment2_1"
      },
      {
        "elementKey": "neuroAssessment1_1",
        "assetBase": "standardized-assessment-tools",
        "assetName": "glasgow-coma-scale.pdf",
        "formIndex": "1",
        "inputType": "assetLink",
        "fqn": "assessmentTools.neuroAssessment1_1"
      },
      {
        "elementKey": "neuroAssessment2_1",
        "assetBase": "standardized-assessment-tools",
        "assetName": "mini-mental-health-screen.pdf",
        "formIndex": "1",
        "inputType": "assetLink",
        "fqn": "assessmentTools.neuroAssessment2_1"
      },
      {
        "elementKey": "neuroAssessment3_1",
        "assetBase": "standardized-assessment-tools",
        "assetName": "richmond-agitation-sedation-scale-rass.pdf",
        "formIndex": "1",
        "inputType": "assetLink",
        "fqn": "assessmentTools.neuroAssessment3_1"
      },
      {
        "elementKey": "fallRisk1_1",
        "assetBase": "standardized-assessment-tools",
        "assetName": "fall-risk-assessment-tool.pdf",
        "formIndex": "1",
        "inputType": "assetLink",
        "fqn": "assessmentTools.fallRisk1_1"
      },
      {
        "elementKey": "fallRisk2_1",
        "assetBase": "standardized-assessment-tools",
        "assetName": "risk-for-falls.png",
        "formIndex": "1",
        "inputType": "assetLink",
        "fqn": "assessmentTools.fallRisk2_1"
      },
      {
        "elementKey": "notes1_1",
        "assetBase": "standardized-assessment-tools",
        "assetName": "consultation-form.pdf",
        "formIndex": "1",
        "inputType": "assetLink",
        "fqn": "assessmentTools.notes1_1"
      },
      {
        "elementKey": "educational1_1",
        "assetBase": "standardized-assessment-tools",
        "assetName": "copd-assessment-test.pdf",
        "formIndex": "1",
        "inputType": "assetLink",
        "fqn": "assessmentTools.educational1_1"
      },
      {
        "elementKey": "educational2_1",
        "assetBase": "standardized-assessment-tools",
        "assetName": "bristol-stool-chart.pdf",
        "formIndex": "1",
        "inputType": "assetLink",
        "fqn": "assessmentTools.educational2_1"
      },
      {
        "elementKey": "wound1_1",
        "assetBase": "standardized-assessment-tools",
        "assetName": "braden-scale.pdf",
        "formIndex": "1",
        "inputType": "assetLink",
        "fqn": "assessmentTools.wound1_1"
      },
      {
        "elementKey": "medication1_1",
        "assetBase": "standardized-assessment-tools",
        "assetName": "best_possible_medication.pdf",
        "formIndex": "1",
        "inputType": "assetLink",
        "fqn": "assessmentTools.medication1_1"
      }
    ],
    "pageElements": {
      "pageForm": {
        "elementKey": "pageForm",
        "pageElementIndex": "1",
        "formKey": "pageForm",
        "fqn": "assessmentTools.pageForm",
        "isPageForm": true,
        "ehr_groups": [
          {
            "elementKey": "cGroup35-1",
            "formCss": "grid-left-to-right-3",
            "fqn": "assessmentTools.cGroup35-1",
            "gIndex": "1",
            "gChildren": [
              {
                "elementKey": "admissions",
                "fqn": "assessmentTools.admissions",
                "sgChildren": [
                  "admissions1_1",
                  "admissions2_1",
                  "admissions3_1"
                ]
              },
              {
                "elementKey": "painAssessment",
                "fqn": "assessmentTools.painAssessment",
                "sgChildren": [
                  "painAssessment1_1",
                  "painAssessment2_1"
                ]
              },
              {
                "elementKey": "neuroAssessment",
                "fqn": "assessmentTools.neuroAssessment",
                "sgChildren": [
                  "neuroAssessment1_1",
                  "neuroAssessment2_1",
                  "neuroAssessment3_1"
                ]
              },
              {
                "elementKey": "fallRisk",
                "fqn": "assessmentTools.fallRisk",
                "sgChildren": [
                  "fallRisk1_1",
                  "fallRisk2_1"
                ]
              },
              {
                "elementKey": "notes",
                "fqn": "assessmentTools.notes",
                "sgChildren": [
                  "notes1_1"
                ]
              },
              {
                "elementKey": "educational",
                "fqn": "assessmentTools.educational",
                "sgChildren": [
                  "educational1_1",
                  "educational2_1"
                ]
              },
              {
                "elementKey": "wound",
                "fqn": "assessmentTools.wound",
                "sgChildren": [
                  "wound1_1"
                ]
              },
              {
                "elementKey": "medication",
                "fqn": "assessmentTools.medication",
                "sgChildren": [
                  "medication1_1"
                ]
              }
            ]
          }
        ]
      }
    }
  },
  "codeLookup": {
    "pageDataKey": "codeLookup",
    "pIndex": "36",
    "hasGridForm": true,
    "pageChildren": [
      {
        "elementKey": "snomed",
        "formIndex": "1",
        "inputType": "text",
        "fqn": "codeLookup.snomed"
      },
      {
        "elementKey": "icf",
        "formIndex": "1",
        "inputType": "text",
        "fqn": "codeLookup.icf"
      }
    ],
    "pageElements": {
      "pageForm": {
        "elementKey": "pageForm",
        "pageElementIndex": "1",
        "formKey": "pageForm",
        "fqn": "codeLookup.pageForm",
        "isPageForm": true,
        "ehr_groups": [
          {
            "elementKey": "cGroup36-1",
            "formCss": "grid-left-to-right-3",
            "fqn": "codeLookup.cGroup36-1",
            "gIndex": "1",
            "gChildren": [
              "snomed",
              "icf"
            ]
          }
        ]
      }
    }
  },
  "diagnosticCodes": {
    "pageDataKey": "diagnosticCodes",
    "pIndex": "37",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "table_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "diagnosticCodes.name"
      },
      {
        "elementKey": "table_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "table_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "diagnosticCodes.profession"
      },
      {
        "elementKey": "table_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "diagnosticCodes.day"
      },
      {
        "elementKey": "table_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "diagnosticCodes.time"
      },
      {
        "elementKey": "icd10",
        "assetBase": "static-databases",
        "assetName": "icd-10-medical-diagnosis-codes.pdf",
        "formIndex": "1",
        "inputType": "assetLink",
        "tableColumn": "2",
        "fqn": "diagnosticCodes.icd10"
      },
      {
        "elementKey": "condition",
        "formIndex": "1",
        "inputType": "text",
        "mandatory": "yes",
        "tableColumn": "3",
        "fqn": "diagnosticCodes.condition"
      },
      {
        "elementKey": "code",
        "formIndex": "1",
        "inputType": "text",
        "mandatory": "yes",
        "tableColumn": "4",
        "fqn": "diagnosticCodes.code"
      },
      {
        "elementKey": "type",
        "formIndex": "1",
        "inputType": "select",
        "mandatory": "yes",
        "options": [
          {
            "key": "M",
            "text": "M"
          },
          {
            "key": "1",
            "text": "1"
          },
          {
            "key": "2",
            "text": "2"
          },
          {
            "key": "3",
            "text": "3"
          }
        ],
        "tableColumn": "5",
        "fqn": "diagnosticCodes.type"
      },
      {
        "elementKey": "prefix",
        "formIndex": "1",
        "inputType": "text",
        "mandatory": "no",
        "tableColumn": "6",
        "fqn": "diagnosticCodes.prefix"
      },
      {
        "elementKey": "cluster",
        "formIndex": "1",
        "inputType": "text",
        "mandatory": "no",
        "tableColumn": "7",
        "fqn": "diagnosticCodes.cluster"
      }
    ],
    "pageElements": {
      "table": {
        "elementKey": "table",
        "pageElementIndex": "1",
        "pageKey": "diagnosticCodes",
        "tableKey": "table",
        "isTable": true,
        "form": {
          "elementKey": "table",
          "label": "Diagnostic codes (ICD-10)",
          "addButtonText": "Add a diagnostic code",
          "formKey": "table",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "diagnosticCodes.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "table_name",
                "table_profession",
                "table_day",
                "table_time"
              ]
            },
            {
              "elementKey": "cGroup37-2",
              "formCss": "grid-left-to-right-3",
              "fqn": "diagnosticCodes.cGroup37-2",
              "gIndex": "2",
              "gChildren": [
                "icd10",
                "condition",
                "code",
                "type",
                "prefix",
                "cluster"
              ]
            }
          ],
          "ehr_data": {
            "table_name": "",
            "table_profession": "",
            "table_day": "",
            "table_time": "",
            "condition": "",
            "code": "",
            "type": "",
            "prefix": "",
            "cluster": ""
          }
        },
        "fqn": "diagnosticCodes.table",
        "tableChildren": [
          "table_id",
          "table_day",
          "table_time",
          "icd10",
          "condition",
          "code",
          "type",
          "prefix",
          "cluster",
          "table_name",
          "table_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "interventionCodes": {
    "pageDataKey": "interventionCodes",
    "pIndex": "38",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "table_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "interventionCodes.name"
      },
      {
        "elementKey": "table_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "table_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "interventionCodes.profession"
      },
      {
        "elementKey": "table_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "interventionCodes.day"
      },
      {
        "elementKey": "table_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "interventionCodes.time"
      },
      {
        "elementKey": "intervention",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "2",
        "fqn": "interventionCodes.intervention"
      },
      {
        "elementKey": "status",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "3",
        "fqn": "interventionCodes.status"
      },
      {
        "elementKey": "laterally",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "4",
        "fqn": "interventionCodes.laterally"
      },
      {
        "elementKey": "extent",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "5",
        "fqn": "interventionCodes.extent"
      }
    ],
    "pageElements": {
      "table": {
        "elementKey": "table",
        "pageElementIndex": "1",
        "pageKey": "interventionCodes",
        "tableKey": "table",
        "isTable": true,
        "form": {
          "elementKey": "table",
          "label": "Intervention codes",
          "addButtonText": "Add an intervention code",
          "formKey": "table",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "interventionCodes.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "table_name",
                "table_profession",
                "table_day",
                "table_time"
              ]
            },
            {
              "elementKey": "cGroup38-2",
              "formCss": "grid-left-to-right-1",
              "fqn": "interventionCodes.cGroup38-2",
              "gIndex": "2",
              "gChildren": [
                "intervention",
                "status",
                "laterally",
                "extent"
              ]
            },
            {
              "elementKey": "label",
              "formCss": "grid-left-to-right-3",
              "fqn": "interventionCodes.label",
              "gIndex": "3",
              "gChildren": []
            }
          ],
          "ehr_data": {
            "table_name": "",
            "table_profession": "",
            "table_day": "",
            "table_time": "",
            "intervention": "",
            "status": "",
            "laterally": "",
            "extent": ""
          }
        },
        "fqn": "interventionCodes.table",
        "tableChildren": [
          "table_id",
          "table_day",
          "table_time",
          "intervention",
          "status",
          "laterally",
          "extent",
          "table_name",
          "table_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "caseMixGroup": {
    "pageDataKey": "caseMixGroup",
    "pIndex": "39",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "table_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "caseMixGroup.name"
      },
      {
        "elementKey": "table_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "table_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "caseMixGroup.profession"
      },
      {
        "elementKey": "table_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "caseMixGroup.day"
      },
      {
        "elementKey": "table_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "caseMixGroup.time"
      },
      {
        "elementKey": "clinicalCategory",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "2",
        "fqn": "caseMixGroup.clinicalCategory"
      },
      {
        "elementKey": "caseMixNumber",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "3",
        "fqn": "caseMixGroup.caseMixNumber"
      },
      {
        "elementKey": "resourceIntensity",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "4",
        "fqn": "caseMixGroup.resourceIntensity"
      },
      {
        "elementKey": "expectedStay",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "5",
        "fqn": "caseMixGroup.expectedStay"
      },
      {
        "elementKey": "analysis",
        "formIndex": "1",
        "inputType": "textarea",
        "tableColumn": "6",
        "fqn": "caseMixGroup.analysis"
      }
    ],
    "pageElements": {
      "table": {
        "elementKey": "table",
        "pageElementIndex": "1",
        "pageKey": "caseMixGroup",
        "tableKey": "table",
        "isTable": true,
        "form": {
          "elementKey": "table",
          "label": "Case mix group",
          "addButtonText": "Add a case mix group",
          "formKey": "table",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "caseMixGroup.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "table_name",
                "table_profession",
                "table_day",
                "table_time"
              ]
            },
            {
              "elementKey": "cGroup39-2",
              "formCss": "grid-left-to-right-3",
              "fqn": "caseMixGroup.cGroup39-2",
              "gIndex": "2",
              "gChildren": [
                "clinicalCategory",
                "caseMixNumber",
                "resourceIntensity",
                "expectedStay",
                "analysis"
              ]
            }
          ],
          "ehr_data": {
            "table_name": "",
            "table_profession": "",
            "table_day": "",
            "table_time": "",
            "clinicalCategory": "",
            "caseMixNumber": "",
            "resourceIntensity": "",
            "expectedStay": "",
            "analysis": ""
          }
        },
        "fqn": "caseMixGroup.table",
        "tableChildren": [
          "table_id",
          "table_day",
          "table_time",
          "clinicalCategory",
          "caseMixNumber",
          "resourceIntensity",
          "expectedStay",
          "analysis",
          "table_name",
          "table_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "integumentaryAssessment": {
    "pageDataKey": "integumentaryAssessment",
    "pIndex": "42",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "tableIncision_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "integumentaryAssessment.name"
      },
      {
        "elementKey": "tableIncision_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "tableIncision_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "integumentaryAssessment.profession"
      },
      {
        "elementKey": "tableIncision_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "integumentaryAssessment.day"
      },
      {
        "elementKey": "tableIncision_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "integumentaryAssessment.time"
      },
      {
        "elementKey": "incisionLabel",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Incision 1",
            "text": "Incision 1"
          },
          {
            "key": "Incision 2",
            "text": "Incision 2"
          },
          {
            "key": "Incision 3",
            "text": "Incision 3"
          },
          {
            "key": "Incision 4",
            "text": "Incision 4"
          }
        ],
        "tableColumn": "2",
        "fqn": "integumentaryAssessment.incisionLabel"
      },
      {
        "elementKey": "incisionLocation",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Head",
            "text": "Head"
          },
          {
            "key": "Face",
            "text": "Face"
          },
          {
            "key": "Neck",
            "text": "Neck"
          },
          {
            "key": "Chest",
            "text": "Chest"
          },
          {
            "key": "Arm (Left)",
            "text": "Arm (Left)"
          },
          {
            "key": "Arm (Right)",
            "text": "Arm (Right)"
          },
          {
            "key": "Hand (Left)",
            "text": "Hand (Left)"
          },
          {
            "key": "Hand (Right)",
            "text": "Hand (Right)"
          },
          {
            "key": "Abdomen",
            "text": "Abdomen"
          },
          {
            "key": "Back",
            "text": "Back"
          },
          {
            "key": "Pelvis",
            "text": "Pelvis"
          },
          {
            "key": "Buttock",
            "text": "Buttock"
          },
          {
            "key": "Leg (Left)",
            "text": "Leg (Left)"
          },
          {
            "key": "Leg (Right)",
            "text": "Leg (Right)"
          },
          {
            "key": "Foot (Left)",
            "text": "Foot (Left)"
          },
          {
            "key": "Foot (Right)",
            "text": "Foot (Right)"
          }
        ],
        "tableColumn": "3",
        "fqn": "integumentaryAssessment.incisionLocation"
      },
      {
        "elementKey": "postOpDay",
        "formIndex": "1",
        "inputType": "visitDay",
        "tableColumn": "4",
        "validation": "visitDay",
        "fqn": "integumentaryAssessment.postOpDay"
      },
      {
        "elementKey": "opProcedure",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "5",
        "fqn": "integumentaryAssessment.opProcedure"
      },
      {
        "elementKey": "closureMethod",
        "formIndex": "1",
        "inputType": "checkset",
        "options": [
          {
            "key": "sutures",
            "text": "Sutures"
          },
          {
            "key": "staples",
            "text": "Staples"
          },
          {
            "key": "retentionSutures",
            "text": "Retention Sutures"
          },
          {
            "key": "surgiGlue",
            "text": "SurgiGlue"
          },
          {
            "key": "steriStrip",
            "text": "Steri-Strip"
          },
          {
            "key": "notApplicable",
            "text": "Not Applicable"
          }
        ],
        "tableColumn": "6",
        "fqn": "integumentaryAssessment.closureMethod"
      },
      {
        "elementKey": "incisionProfileImage",
        "formIndex": "1",
        "inputType": "ehrFile",
        "tableColumn": "7",
        "fqn": "integumentaryAssessment.incisionProfileImage"
      },
      {
        "elementKey": "incisionProfileComments",
        "formIndex": "1",
        "formCss": "grid-span-3-columns",
        "inputType": "textarea",
        "tableColumn": "8",
        "fqn": "integumentaryAssessment.incisionProfileComments"
      },
      {
        "elementKey": "tableIncisionAssessment_name",
        "formIndex": "2",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "integumentaryAssessment.name"
      },
      {
        "elementKey": "tableIncisionAssessment_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "tableIncisionAssessment_profession",
        "formIndex": "2",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "integumentaryAssessment.profession"
      },
      {
        "elementKey": "tableIncisionAssessment_day",
        "formIndex": "2",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "integumentaryAssessment.day"
      },
      {
        "elementKey": "tableIncisionAssessment_time",
        "formIndex": "2",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "integumentaryAssessment.time"
      },
      {
        "elementKey": "incisionLabel",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "Incision 1",
            "text": "Incision 1"
          },
          {
            "key": "Incision 2",
            "text": "Incision 2"
          },
          {
            "key": "Incision 3",
            "text": "Incision 3"
          },
          {
            "key": "Incision 4",
            "text": "Incision 4"
          }
        ],
        "tableColumn": "2",
        "fqn": "integumentaryAssessment.incisionLabel"
      },
      {
        "elementKey": "incisionStatus",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "Approximated",
            "text": "Approximated"
          },
          {
            "key": "Fully Epithelialized",
            "text": "Fully Epithelialized"
          },
          {
            "key": "Tenuous",
            "text": "Tenuous"
          },
          {
            "key": "Gaping",
            "text": "Gaping"
          }
        ],
        "tableColumn": "3",
        "fqn": "integumentaryAssessment.incisionStatus"
      },
      {
        "elementKey": "incisionStatusImage",
        "formIndex": "2",
        "inputType": "ehrFile",
        "tableColumn": "4",
        "fqn": "integumentaryAssessment.incisionStatusImage"
      },
      {
        "elementKey": "closureChanges",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "5",
        "fqn": "integumentaryAssessment.closureChanges"
      },
      {
        "elementKey": "exudateAmount",
        "formIndex": "2",
        "inputType": "checkset",
        "options": [
          {
            "key": "none",
            "text": "None"
          },
          {
            "key": "small",
            "text": "Small"
          },
          {
            "key": "moderate",
            "text": "Moderate"
          },
          {
            "key": "large",
            "text": "Large"
          }
        ],
        "tableColumn": "6",
        "fqn": "integumentaryAssessment.exudateAmount"
      },
      {
        "elementKey": "exudateType",
        "formIndex": "2",
        "inputType": "checkset",
        "options": [
          {
            "key": "serous",
            "text": "Serous"
          },
          {
            "key": "sanguineous",
            "text": "Sanguineous"
          },
          {
            "key": "purulent",
            "text": "Purulent"
          },
          {
            "key": "other",
            "text": "Other"
          },
          {
            "key": "notApplicable",
            "text": "Not Applicable"
          }
        ],
        "tableColumn": "7",
        "fqn": "integumentaryAssessment.exudateType"
      },
      {
        "elementKey": "periIncisionSkin",
        "formIndex": "2",
        "inputType": "checkset",
        "options": [
          {
            "key": "intact",
            "text": "Intact"
          },
          {
            "key": "macerated",
            "text": "Macerated"
          },
          {
            "key": "blistersErythemaLessThan2Cm",
            "text": "Blisters Erythema less than 2cm"
          },
          {
            "key": "erythemaGreaterThan2Cm",
            "text": "Erythema greater than 2cm"
          },
          {
            "key": "indurationLessThan2Cm",
            "text": "Induration less than 2cm"
          },
          {
            "key": "indurationGreaterThan2Cm",
            "text": "Induration greater than 2cm"
          },
          {
            "key": "other",
            "text": "Other"
          }
        ],
        "tableColumn": "8",
        "fqn": "integumentaryAssessment.periIncisionSkin"
      },
      {
        "elementKey": "periIncisionSkinOther",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "9",
        "fqn": "integumentaryAssessment.periIncisionSkinOther"
      },
      {
        "elementKey": "incisionStatusComments",
        "formIndex": "2",
        "formCss": "grid-span-3-columns",
        "inputType": "textarea",
        "tableColumn": "10",
        "fqn": "integumentaryAssessment.incisionStatusComments"
      },
      {
        "elementKey": "tableWound_name",
        "formIndex": "3",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "integumentaryAssessment.name"
      },
      {
        "elementKey": "tableWound_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "tableWound_profession",
        "formIndex": "3",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "integumentaryAssessment.profession"
      },
      {
        "elementKey": "tableWound_day",
        "formIndex": "3",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "integumentaryAssessment.day"
      },
      {
        "elementKey": "tableWound_time",
        "formIndex": "3",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "integumentaryAssessment.time"
      },
      {
        "elementKey": "woundLocation",
        "formIndex": "3",
        "inputType": "select",
        "options": [
          {
            "key": "Head",
            "text": "Head"
          },
          {
            "key": "Face",
            "text": "Face"
          },
          {
            "key": "Neck",
            "text": "Neck"
          },
          {
            "key": "Chest",
            "text": "Chest"
          },
          {
            "key": "Arm (Left)",
            "text": "Arm (Left)"
          },
          {
            "key": "Arm (Right)",
            "text": "Arm (Right)"
          },
          {
            "key": "Hand (Left)",
            "text": "Hand (Left)"
          },
          {
            "key": "Hand (Right)",
            "text": "Hand (Right)"
          },
          {
            "key": "Abdomen",
            "text": "Abdomen"
          },
          {
            "key": "Back",
            "text": "Back"
          },
          {
            "key": "Pelvis",
            "text": "Pelvis"
          },
          {
            "key": "Buttock",
            "text": "Buttock"
          },
          {
            "key": "Leg (Left)",
            "text": "Leg (Left)"
          },
          {
            "key": "Leg (Right)",
            "text": "Leg (Right)"
          },
          {
            "key": "Foot (Left)",
            "text": "Foot (Left)"
          },
          {
            "key": "Foot (Right)",
            "text": "Foot (Right)"
          }
        ],
        "tableColumn": "2",
        "fqn": "integumentaryAssessment.woundLocation"
      },
      {
        "elementKey": "woundLabel",
        "formIndex": "3",
        "inputType": "select",
        "options": [
          {
            "key": "Wound A",
            "text": "Wound A"
          },
          {
            "key": "Wound B",
            "text": "Wound B"
          },
          {
            "key": "Wound C",
            "text": "Wound C"
          },
          {
            "key": "Wound D",
            "text": "Wound D"
          }
        ],
        "tableColumn": "3",
        "fqn": "integumentaryAssessment.woundLabel"
      },
      {
        "elementKey": "woundDayOnset",
        "formIndex": "3",
        "inputType": "visitDay",
        "tableColumn": "4",
        "validation": "visitDay",
        "fqn": "integumentaryAssessment.woundDayOnset"
      },
      {
        "elementKey": "stageType",
        "formIndex": "3",
        "formCss": "grid-span-3-columns",
        "inputType": "checkset",
        "options": [
          {
            "key": "pressureInjuryStage1",
            "text": "Pressure Injury Stage 1"
          },
          {
            "key": "pressureInjuryStage2",
            "text": "Pressure Injury Stage 2"
          },
          {
            "key": "pressureInjuryStage3",
            "text": "Pressure Injury Stage 3"
          },
          {
            "key": "pressureInjuryStage4",
            "text": "Pressure Injury Stage 4"
          },
          {
            "key": "pressureInjuryUnstageable",
            "text": "Pressure Injury Unstageable"
          },
          {
            "key": "pressureInjuryDeepTissueInjury",
            "text": "Pressure Injury Deep Tissue Injury"
          },
          {
            "key": "surgicalSecondaryIntent",
            "text": "Surgical Secondary Intent"
          },
          {
            "key": "skinTear",
            "text": "Skin Tear"
          },
          {
            "key": "abscess",
            "text": "Abscess"
          },
          {
            "key": "burn",
            "text": "Burn"
          },
          {
            "key": "venousUlcer",
            "text": "Venous Ulcer"
          },
          {
            "key": "arterialUlcer",
            "text": "Arterial Ulcer"
          },
          {
            "key": "mixedVenous/arterialUlcer",
            "text": "Mixed Venous/Arterial Ulcer"
          },
          {
            "key": "diabetic/neuropathicUlcer",
            "text": "Diabetic/Neuropathic Ulcer"
          },
          {
            "key": "other",
            "text": "Other"
          }
        ],
        "tableColumn": "5",
        "fqn": "integumentaryAssessment.stageType"
      },
      {
        "elementKey": "stageOther",
        "dependentOn": "visble:stageType=other",
        "formIndex": "3",
        "inputType": "text",
        "tableColumn": "6",
        "fqn": "integumentaryAssessment.stageOther"
      },
      {
        "elementKey": "goalOfCare",
        "formIndex": "3",
        "inputType": "select",
        "options": [
          {
            "key": "To heal",
            "text": "To heal"
          },
          {
            "key": "To maintain",
            "text": "To maintain"
          },
          {
            "key": "To monitor/manage",
            "text": "To monitor/manage"
          }
        ],
        "tableColumn": "7",
        "fqn": "integumentaryAssessment.goalOfCare"
      },
      {
        "elementKey": "woundProfileImage",
        "formIndex": "3",
        "inputType": "ehrFile",
        "tableColumn": "8",
        "fqn": "integumentaryAssessment.woundProfileImage"
      },
      {
        "elementKey": "woundProfileComments",
        "formIndex": "3",
        "formCss": "grid-span-3-columns",
        "inputType": "textarea",
        "tableColumn": "9",
        "fqn": "integumentaryAssessment.woundProfileComments"
      },
      {
        "elementKey": "tableWoundAssessment_name",
        "formIndex": "4",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "integumentaryAssessment.name"
      },
      {
        "elementKey": "tableWoundAssessment_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "tableWoundAssessment_profession",
        "formIndex": "4",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "integumentaryAssessment.profession"
      },
      {
        "elementKey": "tableWoundAssessment_day",
        "formIndex": "4",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "integumentaryAssessment.day"
      },
      {
        "elementKey": "tableWoundAssessment_time",
        "formIndex": "4",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "integumentaryAssessment.time"
      },
      {
        "elementKey": "woundLabel",
        "formIndex": "4",
        "inputType": "select",
        "options": [
          {
            "key": "Wound A",
            "text": "Wound A"
          },
          {
            "key": "Wound B",
            "text": "Wound B"
          },
          {
            "key": "Wound C",
            "text": "Wound C"
          },
          {
            "key": "Wound D",
            "text": "Wound D"
          }
        ],
        "tableColumn": "2",
        "fqn": "integumentaryAssessment.woundLabel"
      },
      {
        "elementKey": "woundAssessmentImage",
        "formIndex": "4",
        "inputType": "ehrFile",
        "tableColumn": "3",
        "fqn": "integumentaryAssessment.woundAssessmentImage"
      },
      {
        "elementKey": "length",
        "formIndex": "4",
        "inputType": "text",
        "tableColumn": "4",
        "fqn": "integumentaryAssessment.length"
      },
      {
        "elementKey": "width",
        "formIndex": "4",
        "inputType": "text",
        "tableColumn": "5",
        "fqn": "integumentaryAssessment.width"
      },
      {
        "elementKey": "depth",
        "formIndex": "4",
        "inputType": "text",
        "tableColumn": "6",
        "fqn": "integumentaryAssessment.depth"
      },
      {
        "elementKey": "sinusDepth1",
        "formIndex": "4",
        "inputType": "text",
        "tableColumn": "7",
        "fqn": "integumentaryAssessment.sinusDepth1"
      },
      {
        "elementKey": "sinusDepthLocation1",
        "formIndex": "4",
        "inputType": "select",
        "options": [
          {
            "key": "1",
            "text": "1"
          },
          {
            "key": "2",
            "text": "2"
          },
          {
            "key": "3",
            "text": "3"
          },
          {
            "key": "4",
            "text": "4"
          },
          {
            "key": "5",
            "text": "5"
          },
          {
            "key": "6",
            "text": "6"
          },
          {
            "key": "7",
            "text": "7"
          },
          {
            "key": "8",
            "text": "8"
          },
          {
            "key": "9",
            "text": "9"
          },
          {
            "key": "10",
            "text": "10"
          },
          {
            "key": "11",
            "text": "11"
          },
          {
            "key": "12",
            "text": "12"
          }
        ],
        "tableColumn": "8",
        "fqn": "integumentaryAssessment.sinusDepthLocation1"
      },
      {
        "elementKey": "spacer42",
        "formIndex": "4",
        "inputType": "spacer",
        "fqn": "integumentaryAssessment.spacer42"
      },
      {
        "elementKey": "sinusDepth2",
        "formIndex": "4",
        "inputType": "text",
        "tableColumn": "9",
        "fqn": "integumentaryAssessment.sinusDepth2"
      },
      {
        "elementKey": "sinusDepthLocation2",
        "formIndex": "4",
        "inputType": "select",
        "options": [
          {
            "key": "1",
            "text": "1"
          },
          {
            "key": "2",
            "text": "2"
          },
          {
            "key": "3",
            "text": "3"
          },
          {
            "key": "4",
            "text": "4"
          },
          {
            "key": "5",
            "text": "5"
          },
          {
            "key": "6",
            "text": "6"
          },
          {
            "key": "7",
            "text": "7"
          },
          {
            "key": "8",
            "text": "8"
          },
          {
            "key": "9",
            "text": "9"
          },
          {
            "key": "10",
            "text": "10"
          },
          {
            "key": "11",
            "text": "11"
          },
          {
            "key": "12",
            "text": "12"
          }
        ],
        "tableColumn": "10",
        "fqn": "integumentaryAssessment.sinusDepthLocation2"
      },
      {
        "elementKey": "spacer43",
        "formIndex": "4",
        "inputType": "spacer",
        "fqn": "integumentaryAssessment.spacer43"
      },
      {
        "elementKey": "underminingDepth1",
        "formIndex": "4",
        "inputType": "text",
        "tableColumn": "11",
        "fqn": "integumentaryAssessment.underminingDepth1"
      },
      {
        "elementKey": "underminingDepthLocation1A",
        "formIndex": "4",
        "inputType": "select",
        "options": [
          {
            "key": "1",
            "text": "1"
          },
          {
            "key": "2",
            "text": "2"
          },
          {
            "key": "3",
            "text": "3"
          },
          {
            "key": "4",
            "text": "4"
          },
          {
            "key": "5",
            "text": "5"
          },
          {
            "key": "6",
            "text": "6"
          },
          {
            "key": "7",
            "text": "7"
          },
          {
            "key": "8",
            "text": "8"
          },
          {
            "key": "9",
            "text": "9"
          },
          {
            "key": "10",
            "text": "10"
          },
          {
            "key": "11",
            "text": "11"
          },
          {
            "key": "12",
            "text": "12"
          }
        ],
        "tableColumn": "12",
        "fqn": "integumentaryAssessment.underminingDepthLocation1A"
      },
      {
        "elementKey": "underminingDepthLocation1B",
        "formIndex": "4",
        "inputType": "select",
        "options": [
          {
            "key": "1",
            "text": "1"
          },
          {
            "key": "2",
            "text": "2"
          },
          {
            "key": "3",
            "text": "3"
          },
          {
            "key": "4",
            "text": "4"
          },
          {
            "key": "5",
            "text": "5"
          },
          {
            "key": "6",
            "text": "6"
          },
          {
            "key": "7",
            "text": "7"
          },
          {
            "key": "8",
            "text": "8"
          },
          {
            "key": "9",
            "text": "9"
          },
          {
            "key": "10",
            "text": "10"
          },
          {
            "key": "11",
            "text": "11"
          },
          {
            "key": "12",
            "text": "12"
          }
        ],
        "tableColumn": "13",
        "fqn": "integumentaryAssessment.underminingDepthLocation1B"
      },
      {
        "elementKey": "underminingDepth2",
        "formIndex": "4",
        "inputType": "text",
        "tableColumn": "14",
        "fqn": "integumentaryAssessment.underminingDepth2"
      },
      {
        "elementKey": "underminingDepthLocation2A",
        "formIndex": "4",
        "inputType": "select",
        "options": [
          {
            "key": "1",
            "text": "1"
          },
          {
            "key": "2",
            "text": "2"
          },
          {
            "key": "3",
            "text": "3"
          },
          {
            "key": "4",
            "text": "4"
          },
          {
            "key": "5",
            "text": "5"
          },
          {
            "key": "6",
            "text": "6"
          },
          {
            "key": "7",
            "text": "7"
          },
          {
            "key": "8",
            "text": "8"
          },
          {
            "key": "9",
            "text": "9"
          },
          {
            "key": "10",
            "text": "10"
          },
          {
            "key": "11",
            "text": "11"
          },
          {
            "key": "12",
            "text": "12"
          }
        ],
        "tableColumn": "15",
        "fqn": "integumentaryAssessment.underminingDepthLocation2A"
      },
      {
        "elementKey": "underminingDepthLocation2B",
        "formIndex": "4",
        "inputType": "select",
        "options": [
          {
            "key": "1",
            "text": "1"
          },
          {
            "key": "2",
            "text": "2"
          },
          {
            "key": "3",
            "text": "3"
          },
          {
            "key": "4",
            "text": "4"
          },
          {
            "key": "5",
            "text": "5"
          },
          {
            "key": "6",
            "text": "6"
          },
          {
            "key": "7",
            "text": "7"
          },
          {
            "key": "8",
            "text": "8"
          },
          {
            "key": "9",
            "text": "9"
          },
          {
            "key": "10",
            "text": "10"
          },
          {
            "key": "11",
            "text": "11"
          },
          {
            "key": "12",
            "text": "12"
          }
        ],
        "tableColumn": "16",
        "fqn": "integumentaryAssessment.underminingDepthLocation2B"
      },
      {
        "elementKey": "pinkred",
        "formIndex": "4",
        "inputType": "select",
        "options": [
          {
            "key": "10",
            "text": "10%"
          },
          {
            "key": "20",
            "text": "20%"
          },
          {
            "key": "30",
            "text": "30%"
          },
          {
            "key": "40",
            "text": "40%"
          },
          {
            "key": "50",
            "text": "50%"
          },
          {
            "key": "60",
            "text": "60%"
          },
          {
            "key": "70",
            "text": "70%"
          },
          {
            "key": "80",
            "text": "80%"
          },
          {
            "key": "90",
            "text": "90%"
          },
          {
            "key": "100",
            "text": "100%"
          }
        ],
        "passToFunction": "woundBedCalculation",
        "tableColumn": "17",
        "fqn": "integumentaryAssessment.pinkred"
      },
      {
        "elementKey": "granulation",
        "formIndex": "4",
        "inputType": "select",
        "options": [
          {
            "key": "10",
            "text": "10%"
          },
          {
            "key": "20",
            "text": "20%"
          },
          {
            "key": "30",
            "text": "30%"
          },
          {
            "key": "40",
            "text": "40%"
          },
          {
            "key": "50",
            "text": "50%"
          },
          {
            "key": "60",
            "text": "60%"
          },
          {
            "key": "70",
            "text": "70%"
          },
          {
            "key": "80",
            "text": "80%"
          },
          {
            "key": "90",
            "text": "90%"
          },
          {
            "key": "100",
            "text": "100%"
          }
        ],
        "passToFunction": "woundBedCalculation",
        "tableColumn": "18",
        "fqn": "integumentaryAssessment.granulation"
      },
      {
        "elementKey": "nongranulated",
        "formIndex": "4",
        "inputType": "select",
        "options": [
          {
            "key": "10",
            "text": "10%"
          },
          {
            "key": "20",
            "text": "20%"
          },
          {
            "key": "30",
            "text": "30%"
          },
          {
            "key": "40",
            "text": "40%"
          },
          {
            "key": "50",
            "text": "50%"
          },
          {
            "key": "60",
            "text": "60%"
          },
          {
            "key": "70",
            "text": "70%"
          },
          {
            "key": "80",
            "text": "80%"
          },
          {
            "key": "90",
            "text": "90%"
          },
          {
            "key": "100",
            "text": "100%"
          }
        ],
        "passToFunction": "woundBedCalculation",
        "tableColumn": "19",
        "fqn": "integumentaryAssessment.nongranulated"
      },
      {
        "elementKey": "slough",
        "formIndex": "4",
        "inputType": "select",
        "options": [
          {
            "key": "10",
            "text": "10%"
          },
          {
            "key": "20",
            "text": "20%"
          },
          {
            "key": "30",
            "text": "30%"
          },
          {
            "key": "40",
            "text": "40%"
          },
          {
            "key": "50",
            "text": "50%"
          },
          {
            "key": "60",
            "text": "60%"
          },
          {
            "key": "70",
            "text": "70%"
          },
          {
            "key": "80",
            "text": "80%"
          },
          {
            "key": "90",
            "text": "90%"
          },
          {
            "key": "100",
            "text": "100%"
          }
        ],
        "passToFunction": "woundBedCalculation",
        "tableColumn": "20",
        "fqn": "integumentaryAssessment.slough"
      },
      {
        "elementKey": "escharBoggy",
        "formIndex": "4",
        "inputType": "select",
        "options": [
          {
            "key": "10",
            "text": "10%"
          },
          {
            "key": "20",
            "text": "20%"
          },
          {
            "key": "30",
            "text": "30%"
          },
          {
            "key": "40",
            "text": "40%"
          },
          {
            "key": "50",
            "text": "50%"
          },
          {
            "key": "60",
            "text": "60%"
          },
          {
            "key": "70",
            "text": "70%"
          },
          {
            "key": "80",
            "text": "80%"
          },
          {
            "key": "90",
            "text": "90%"
          },
          {
            "key": "100",
            "text": "100%"
          }
        ],
        "passToFunction": "woundBedCalculation",
        "tableColumn": "21",
        "fqn": "integumentaryAssessment.escharBoggy"
      },
      {
        "elementKey": "escharStable",
        "formIndex": "4",
        "inputType": "select",
        "options": [
          {
            "key": "10",
            "text": "10%"
          },
          {
            "key": "20",
            "text": "20%"
          },
          {
            "key": "30",
            "text": "30%"
          },
          {
            "key": "40",
            "text": "40%"
          },
          {
            "key": "50",
            "text": "50%"
          },
          {
            "key": "60",
            "text": "60%"
          },
          {
            "key": "70",
            "text": "70%"
          },
          {
            "key": "80",
            "text": "80%"
          },
          {
            "key": "90",
            "text": "90%"
          },
          {
            "key": "100",
            "text": "100%"
          }
        ],
        "passToFunction": "woundBedCalculation",
        "tableColumn": "22",
        "fqn": "integumentaryAssessment.escharStable"
      },
      {
        "elementKey": "foreign",
        "formIndex": "4",
        "inputType": "select",
        "options": [
          {
            "key": "10",
            "text": "10%"
          },
          {
            "key": "20",
            "text": "20%"
          },
          {
            "key": "30",
            "text": "30%"
          },
          {
            "key": "40",
            "text": "40%"
          },
          {
            "key": "50",
            "text": "50%"
          },
          {
            "key": "60",
            "text": "60%"
          },
          {
            "key": "70",
            "text": "70%"
          },
          {
            "key": "80",
            "text": "80%"
          },
          {
            "key": "90",
            "text": "90%"
          },
          {
            "key": "100",
            "text": "100%"
          }
        ],
        "passToFunction": "woundBedCalculation",
        "tableColumn": "23",
        "fqn": "integumentaryAssessment.foreign"
      },
      {
        "elementKey": "underlying",
        "formIndex": "4",
        "inputType": "select",
        "options": [
          {
            "key": "10",
            "text": "10%"
          },
          {
            "key": "20",
            "text": "20%"
          },
          {
            "key": "30",
            "text": "30%"
          },
          {
            "key": "40",
            "text": "40%"
          },
          {
            "key": "50",
            "text": "50%"
          },
          {
            "key": "60",
            "text": "60%"
          },
          {
            "key": "70",
            "text": "70%"
          },
          {
            "key": "80",
            "text": "80%"
          },
          {
            "key": "90",
            "text": "90%"
          },
          {
            "key": "100",
            "text": "100%"
          }
        ],
        "passToFunction": "woundBedCalculation",
        "tableColumn": "24",
        "fqn": "integumentaryAssessment.underlying"
      },
      {
        "elementKey": "notVisible",
        "formIndex": "4",
        "inputType": "select",
        "options": [
          {
            "key": "10",
            "text": "10%"
          },
          {
            "key": "20",
            "text": "20%"
          },
          {
            "key": "30",
            "text": "30%"
          },
          {
            "key": "40",
            "text": "40%"
          },
          {
            "key": "50",
            "text": "50%"
          },
          {
            "key": "60",
            "text": "60%"
          },
          {
            "key": "70",
            "text": "70%"
          },
          {
            "key": "80",
            "text": "80%"
          },
          {
            "key": "90",
            "text": "90%"
          },
          {
            "key": "100",
            "text": "100%"
          }
        ],
        "passToFunction": "woundBedCalculation",
        "tableColumn": "25",
        "fqn": "integumentaryAssessment.notVisible"
      },
      {
        "elementKey": "other",
        "formIndex": "4",
        "inputType": "select",
        "options": [
          {
            "key": "10",
            "text": "10%"
          },
          {
            "key": "20",
            "text": "20%"
          },
          {
            "key": "30",
            "text": "30%"
          },
          {
            "key": "40",
            "text": "40%"
          },
          {
            "key": "50",
            "text": "50%"
          },
          {
            "key": "60",
            "text": "60%"
          },
          {
            "key": "70",
            "text": "70%"
          },
          {
            "key": "80",
            "text": "80%"
          },
          {
            "key": "90",
            "text": "90%"
          },
          {
            "key": "100",
            "text": "100%"
          }
        ],
        "passToFunction": "woundBedCalculation",
        "tableColumn": "26",
        "fqn": "integumentaryAssessment.other"
      },
      {
        "elementKey": "woundBedCalculation",
        "calculationType": "sum",
        "defaultValue": "0",
        "formIndex": "4",
        "inputType": "calculatedValue",
        "tableColumn": "27",
        "validation": "range(0,100)",
        "fqn": "integumentaryAssessment.woundBedCalculation"
      },
      {
        "elementKey": "exudateAmount",
        "formIndex": "4",
        "inputType": "select",
        "options": [
          {
            "key": "None",
            "text": "None"
          },
          {
            "key": "Scant/small",
            "text": "Scant/small"
          },
          {
            "key": "Moderate",
            "text": "Moderate"
          },
          {
            "key": "Large/copious",
            "text": "Large/copious"
          }
        ],
        "tableColumn": "28",
        "fqn": "integumentaryAssessment.exudateAmount"
      },
      {
        "elementKey": "exudateType",
        "formIndex": "4",
        "inputType": "checkset",
        "options": [
          {
            "key": "serous",
            "text": "Serous"
          },
          {
            "key": "sanguineous",
            "text": "Sanguineous"
          },
          {
            "key": "purulent",
            "text": "Purulent"
          },
          {
            "key": "other",
            "text": "Other"
          }
        ],
        "tableColumn": "29",
        "fqn": "integumentaryAssessment.exudateType"
      },
      {
        "elementKey": "odour",
        "formIndex": "4",
        "inputType": "select",
        "options": [
          {
            "key": "Yes",
            "text": "Yes"
          },
          {
            "key": "No",
            "text": "No"
          }
        ],
        "tableColumn": "30",
        "fqn": "integumentaryAssessment.odour"
      },
      {
        "elementKey": "woundEdge",
        "formIndex": "4",
        "inputType": "checkset",
        "options": [
          {
            "key": "diffuse",
            "text": "Diffuse"
          },
          {
            "key": "demarcated",
            "text": "Demarcated"
          },
          {
            "key": "attached",
            "text": "Attached"
          },
          {
            "key": "notAttached",
            "text": "Not attached"
          },
          {
            "key": "epithelialization",
            "text": "Epithelialization"
          },
          {
            "key": "rolled",
            "text": "Rolled"
          }
        ],
        "tableColumn": "31",
        "fqn": "integumentaryAssessment.woundEdge"
      },
      {
        "elementKey": "periWoundSkin",
        "formIndex": "4",
        "inputType": "checkset",
        "options": [
          {
            "key": "intact",
            "text": "Intact"
          },
          {
            "key": "fragile",
            "text": "Fragile"
          },
          {
            "key": "macerated",
            "text": "Macerated"
          },
          {
            "key": "excoriated/denuded",
            "text": "Excoriated/Denuded"
          },
          {
            "key": "erythema (2CmOrLess)",
            "text": "Erythema (2cm or less)"
          },
          {
            "key": "indurated (2CmOrLess)",
            "text": "Indurated (2cm or less)"
          },
          {
            "key": "indurated (greaterThan2Cm)",
            "text": "Indurated (greater than 2cm)"
          },
          {
            "key": "erythema (greaterThan2Cm)",
            "text": "Erythema (greater than 2cm)"
          },
          {
            "key": "increasedWarmth",
            "text": "Increased Warmth"
          },
          {
            "key": "other",
            "text": "Other"
          }
        ],
        "tableColumn": "32",
        "fqn": "integumentaryAssessment.periWoundSkin"
      },
      {
        "elementKey": "woundPain",
        "formIndex": "4",
        "inputType": "text",
        "suffix": "/10",
        "tableColumn": "33",
        "validation": "range(0,10)",
        "fqn": "integumentaryAssessment.woundPain",
        "suffixText": "/10"
      },
      {
        "elementKey": "packingOut",
        "formIndex": "4",
        "inputType": "text",
        "tableColumn": "34",
        "fqn": "integumentaryAssessment.packingOut"
      },
      {
        "elementKey": "packinIn",
        "formIndex": "4",
        "inputType": "text",
        "tableColumn": "35",
        "fqn": "integumentaryAssessment.packinIn"
      },
      {
        "elementKey": "spacer44",
        "formIndex": "4",
        "inputType": "spacer",
        "fqn": "integumentaryAssessment.spacer44"
      },
      {
        "elementKey": "treatmentComplete",
        "formIndex": "4",
        "inputType": "select",
        "options": [
          {
            "key": "Yes",
            "text": "Yes"
          },
          {
            "key": "No",
            "text": "No"
          }
        ],
        "tableColumn": "36",
        "fqn": "integumentaryAssessment.treatmentComplete"
      },
      {
        "elementKey": "woundAssessmentComments",
        "formIndex": "4",
        "formCss": "grid-span-3-columns",
        "inputType": "textarea",
        "tableColumn": "37",
        "fqn": "integumentaryAssessment.woundAssessmentComments"
      }
    ],
    "pageElements": {
      "tableIncision": {
        "elementKey": "tableIncision",
        "pageElementIndex": "1",
        "pageKey": "integumentaryAssessment",
        "tableKey": "tableIncision",
        "isTable": true,
        "form": {
          "elementKey": "tableIncision",
          "label": "Incision profile",
          "addButtonText": "Add an incision profile",
          "formKey": "tableIncision",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "integumentaryAssessment.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "tableIncision_name",
                "tableIncision_profession",
                "tableIncision_day",
                "tableIncision_time"
              ]
            },
            {
              "elementKey": "incisionLocationGroup",
              "formCss": "grid-left-to-right-3",
              "fqn": "integumentaryAssessment.incisionLocationGroup",
              "gIndex": "2",
              "gChildren": [
                "incisionLabel",
                "incisionLocation",
                "postOpDay",
                "opProcedure",
                "closureMethod",
                "incisionProfileImage",
                "incisionProfileComments"
              ]
            }
          ],
          "ehr_data": {
            "tableIncision_name": "",
            "tableIncision_profession": "",
            "tableIncision_day": "",
            "tableIncision_time": "",
            "incisionLabel": "",
            "incisionLocation": "",
            "postOpDay": "",
            "opProcedure": "",
            "closureMethod": "",
            "incisionProfileImage": "",
            "incisionProfileComments": ""
          }
        },
        "fqn": "integumentaryAssessment.tableIncision",
        "tableChildren": [
          "tableIncision_id",
          "tableIncision_day",
          "tableIncision_time",
          "incisionLabel",
          "incisionLocation",
          "postOpDay",
          "opProcedure",
          "closureMethod",
          "incisionProfileImage",
          "incisionProfileComments",
          "tableIncision_name",
          "tableIncision_profession"
        ],
        "hasRecHeader": true
      },
      "tableIncisionAssessment": {
        "elementKey": "tableIncisionAssessment",
        "pageElementIndex": "2",
        "pageKey": "integumentaryAssessment",
        "tableKey": "tableIncisionAssessment",
        "isTable": true,
        "form": {
          "elementKey": "tableIncisionAssessment",
          "label": "Incision assessment",
          "addButtonText": "Add an incision assessment",
          "formOption": "transpose",
          "formKey": "tableIncisionAssessment",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "integumentaryAssessment.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "tableIncisionAssessment_name",
                "tableIncisionAssessment_profession",
                "tableIncisionAssessment_day",
                "tableIncisionAssessment_time"
              ]
            },
            {
              "elementKey": "incisionStatusGroup",
              "formCss": "grid-left-to-right-3",
              "fqn": "integumentaryAssessment.incisionStatusGroup",
              "gIndex": "2",
              "gChildren": [
                "incisionLabel",
                "incisionStatus",
                "incisionStatusImage",
                "closureChanges"
              ]
            },
            {
              "elementKey": "exudateGroup",
              "formCss": "grid-left-to-right-3",
              "fqn": "integumentaryAssessment.exudateGroup",
              "gIndex": "3",
              "gChildren": [
                "exudateAmount",
                "exudateType"
              ]
            },
            {
              "elementKey": "periIncisionGroup",
              "formCss": "grid-left-to-right-3",
              "fqn": "integumentaryAssessment.periIncisionGroup",
              "gIndex": "4",
              "gChildren": [
                "periIncisionSkin",
                "periIncisionSkinOther",
                "incisionStatusComments"
              ]
            }
          ],
          "ehr_data": {
            "tableIncisionAssessment_name": "",
            "tableIncisionAssessment_profession": "",
            "tableIncisionAssessment_day": "",
            "tableIncisionAssessment_time": "",
            "incisionLabel": "",
            "incisionStatus": "",
            "incisionStatusImage": "",
            "closureChanges": "",
            "exudateAmount": "",
            "exudateType": "",
            "periIncisionSkin": "",
            "periIncisionSkinOther": "",
            "incisionStatusComments": ""
          }
        },
        "fqn": "integumentaryAssessment.tableIncisionAssessment",
        "tableChildren": [
          "tableIncisionAssessment_id",
          "tableIncisionAssessment_day",
          "tableIncisionAssessment_time",
          "incisionLabel",
          "incisionStatus",
          "incisionStatusImage",
          "closureChanges",
          "exudateAmount",
          "exudateType",
          "periIncisionSkin",
          "periIncisionSkinOther",
          "incisionStatusComments",
          "tableIncisionAssessment_name",
          "tableIncisionAssessment_profession"
        ],
        "hasRecHeader": true
      },
      "tableWound": {
        "elementKey": "tableWound",
        "pageElementIndex": "3",
        "pageKey": "integumentaryAssessment",
        "tableKey": "tableWound",
        "isTable": true,
        "form": {
          "elementKey": "tableWound",
          "label": "Wound profile",
          "addButtonText": "Add a wound profile",
          "formKey": "tableWound",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "integumentaryAssessment.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "tableWound_name",
                "tableWound_profession",
                "tableWound_day",
                "tableWound_time"
              ]
            },
            {
              "elementKey": "cGroup2",
              "formCss": "grid-left-to-right-3",
              "fqn": "integumentaryAssessment.cGroup2",
              "gIndex": "2",
              "gChildren": [
                "woundLocation",
                "woundLabel",
                "woundDayOnset"
              ]
            },
            {
              "elementKey": "woundTypeGroup",
              "formCss": "grid-left-to-right-3",
              "fqn": "integumentaryAssessment.woundTypeGroup",
              "gIndex": "3",
              "gChildren": [
                "stageType",
                "stageOther",
                "goalOfCare",
                "woundProfileImage",
                "woundProfileComments"
              ]
            }
          ],
          "ehr_data": {
            "tableWound_name": "",
            "tableWound_profession": "",
            "tableWound_day": "",
            "tableWound_time": "",
            "woundLocation": "",
            "woundLabel": "",
            "woundDayOnset": "",
            "stageType": "",
            "stageOther": "",
            "goalOfCare": "",
            "woundProfileImage": "",
            "woundProfileComments": ""
          }
        },
        "fqn": "integumentaryAssessment.tableWound",
        "tableChildren": [
          "tableWound_id",
          "tableWound_day",
          "tableWound_time",
          "woundLocation",
          "woundLabel",
          "woundDayOnset",
          "stageType",
          "stageOther",
          "goalOfCare",
          "woundProfileImage",
          "woundProfileComments",
          "tableWound_name",
          "tableWound_profession"
        ],
        "hasRecHeader": true
      },
      "tableWoundAssessment": {
        "elementKey": "tableWoundAssessment",
        "pageElementIndex": "4",
        "pageKey": "integumentaryAssessment",
        "tableKey": "tableWoundAssessment",
        "isTable": true,
        "form": {
          "elementKey": "tableWoundAssessment",
          "label": "Wound assessment",
          "addButtonText": "Add a wound assessment",
          "formOption": "transpose",
          "formKey": "tableWoundAssessment",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "integumentaryAssessment.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "tableWoundAssessment_name",
                "tableWoundAssessment_profession",
                "tableWoundAssessment_day",
                "tableWoundAssessment_time"
              ]
            },
            {
              "elementKey": "woundMeasureGroup",
              "formCss": "grid-left-to-right-3",
              "fqn": "integumentaryAssessment.woundMeasureGroup",
              "gIndex": "2",
              "gChildren": [
                "woundLabel",
                "woundAssessmentImage"
              ]
            },
            {
              "elementKey": "woundMeasureGroup",
              "formCss": "grid-left-to-right-3",
              "fqn": "integumentaryAssessment.woundMeasureGroup",
              "gIndex": "3",
              "gChildren": [
                "length",
                "width",
                "depth",
                "sinusDepth1",
                "sinusDepthLocation1",
                "spacer42",
                "sinusDepth2",
                "sinusDepthLocation2",
                "spacer43",
                "underminingDepth1",
                "underminingDepthLocation1A",
                "underminingDepthLocation1B",
                "underminingDepth2",
                "underminingDepthLocation2A",
                "underminingDepthLocation2B"
              ]
            },
            {
              "elementKey": "woundBed",
              "formCss": "grid-left-to-right-3",
              "fqn": "integumentaryAssessment.woundBed",
              "gIndex": "4",
              "gChildren": [
                "pinkred",
                "granulation",
                "nongranulated",
                "slough",
                "escharBoggy",
                "escharStable",
                "foreign",
                "underlying",
                "notVisible",
                "other",
                "woundBedCalculation"
              ]
            },
            {
              "elementKey": "cGroup5",
              "formCss": "grid-left-to-right-3",
              "fqn": "integumentaryAssessment.cGroup5",
              "gIndex": "5",
              "gChildren": [
                "exudateAmount",
                "exudateType"
              ]
            },
            {
              "elementKey": "cGroup6",
              "formCss": "grid-left-to-right-3",
              "fqn": "integumentaryAssessment.cGroup6",
              "gIndex": "6",
              "gChildren": [
                "odour"
              ]
            },
            {
              "elementKey": "cGroup7",
              "formCss": "grid-left-to-right-3",
              "fqn": "integumentaryAssessment.cGroup7",
              "gIndex": "7",
              "gChildren": [
                "woundEdge",
                "periWoundSkin"
              ]
            },
            {
              "elementKey": "cGroup8",
              "formCss": "grid-left-to-right-3",
              "fqn": "integumentaryAssessment.cGroup8",
              "gIndex": "8",
              "gChildren": [
                "woundPain"
              ]
            },
            {
              "elementKey": "cGroup9",
              "formCss": "grid-left-to-right-3",
              "fqn": "integumentaryAssessment.cGroup9",
              "gIndex": "9",
              "gChildren": [
                "packingOut",
                "packinIn",
                "spacer44",
                "treatmentComplete",
                "woundAssessmentComments"
              ]
            }
          ],
          "ehr_data": {
            "tableWoundAssessment_name": "",
            "tableWoundAssessment_profession": "",
            "tableWoundAssessment_day": "",
            "tableWoundAssessment_time": "",
            "woundLabel": "",
            "woundAssessmentImage": "",
            "length": "",
            "width": "",
            "depth": "",
            "sinusDepth1": "",
            "sinusDepthLocation1": "",
            "sinusDepth2": "",
            "sinusDepthLocation2": "",
            "underminingDepth1": "",
            "underminingDepthLocation1A": "",
            "underminingDepthLocation1B": "",
            "underminingDepth2": "",
            "underminingDepthLocation2A": "",
            "underminingDepthLocation2B": "",
            "pinkred": "",
            "granulation": "",
            "nongranulated": "",
            "slough": "",
            "escharBoggy": "",
            "escharStable": "",
            "foreign": "",
            "underlying": "",
            "notVisible": "",
            "other": "",
            "woundBedCalculation": "0",
            "exudateAmount": "",
            "exudateType": "",
            "odour": "",
            "woundEdge": "",
            "periWoundSkin": "",
            "woundPain": "",
            "packingOut": "",
            "packinIn": "",
            "treatmentComplete": "",
            "woundAssessmentComments": ""
          }
        },
        "fqn": "integumentaryAssessment.tableWoundAssessment",
        "tableChildren": [
          "tableWoundAssessment_id",
          "tableWoundAssessment_day",
          "tableWoundAssessment_time",
          "woundLabel",
          "woundAssessmentImage",
          "length",
          "width",
          "depth",
          "sinusDepth1",
          "sinusDepthLocation1",
          "sinusDepth2",
          "sinusDepthLocation2",
          "underminingDepth1",
          "underminingDepthLocation1A",
          "underminingDepthLocation1B",
          "underminingDepth2",
          "underminingDepthLocation2A",
          "underminingDepthLocation2B",
          "pinkred",
          "granulation",
          "nongranulated",
          "slough",
          "escharBoggy",
          "escharStable",
          "foreign",
          "underlying",
          "notVisible",
          "other",
          "woundBedCalculation",
          "exudateAmount",
          "exudateType",
          "odour",
          "woundEdge",
          "periWoundSkin",
          "woundPain",
          "packingOut",
          "packinIn",
          "treatmentComplete",
          "woundAssessmentComments",
          "tableWoundAssessment_name",
          "tableWoundAssessment_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "hematology": {
    "pageDataKey": "hematology",
    "pIndex": "43",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "tableCbcAnalysis_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "hematology.name"
      },
      {
        "elementKey": "tableCbcAnalysis_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "tableCbcAnalysis_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "hematology.profession"
      },
      {
        "elementKey": "tableCbcAnalysis_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "hematology.day"
      },
      {
        "elementKey": "tableCbcAnalysis_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "hematology.time"
      },
      {
        "elementKey": "wbc",
        "formIndex": "1",
        "inputType": "number",
        "mandatory": "TRUE",
        "suffix": "10^9/L",
        "tableColumn": "2",
        "validation": "numeric",
        "fqn": "hematology.wbc",
        "suffixText": "10^9/L"
      },
      {
        "elementKey": "wbc-interp",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "low",
            "text": "low"
          },
          {
            "key": "normal",
            "text": "normal"
          },
          {
            "key": "high",
            "text": "high"
          }
        ],
        "tableColumn": "3",
        "fqn": "hematology.wbc-interp"
      },
      {
        "elementKey": "spacer1",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "hematology.spacer1"
      },
      {
        "elementKey": "rbc",
        "formIndex": "1",
        "inputType": "number",
        "suffix": "10^12/L",
        "tableColumn": "4",
        "validation": "numeric",
        "fqn": "hematology.rbc",
        "suffixText": "10^12/L"
      },
      {
        "elementKey": "rbc-interp",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "low",
            "text": "low"
          },
          {
            "key": "normal",
            "text": "normal"
          },
          {
            "key": "high",
            "text": "high"
          }
        ],
        "tableColumn": "5",
        "fqn": "hematology.rbc-interp"
      },
      {
        "elementKey": "spacer2",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "hematology.spacer2"
      },
      {
        "elementKey": "hgb",
        "formIndex": "1",
        "inputType": "number",
        "suffix": "g/L",
        "tableColumn": "6",
        "validation": "numeric",
        "fqn": "hematology.hgb",
        "suffixText": "g/L"
      },
      {
        "elementKey": "hgb-interp",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "low",
            "text": "low"
          },
          {
            "key": "normal",
            "text": "normal"
          },
          {
            "key": "high",
            "text": "high"
          }
        ],
        "tableColumn": "7",
        "fqn": "hematology.hgb-interp"
      },
      {
        "elementKey": "spacer3",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "hematology.spacer3"
      },
      {
        "elementKey": "HCT",
        "formIndex": "1",
        "inputType": "number",
        "suffix": "L/L",
        "tableColumn": "8",
        "validation": "numeric",
        "fqn": "hematology.HCT",
        "suffixText": "L/L"
      },
      {
        "elementKey": "HCT-interp",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "low",
            "text": "low"
          },
          {
            "key": "normal",
            "text": "normal"
          },
          {
            "key": "high",
            "text": "high"
          }
        ],
        "tableColumn": "9",
        "fqn": "hematology.HCT-interp"
      },
      {
        "elementKey": "spacer4",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "hematology.spacer4"
      },
      {
        "elementKey": "MCV",
        "formIndex": "1",
        "inputType": "number",
        "suffix": "fL",
        "tableColumn": "10",
        "validation": "numeric",
        "fqn": "hematology.MCV",
        "suffixText": "fL"
      },
      {
        "elementKey": "MCV-interp",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "low",
            "text": "low"
          },
          {
            "key": "normal",
            "text": "normal"
          },
          {
            "key": "high",
            "text": "high"
          }
        ],
        "tableColumn": "11",
        "fqn": "hematology.MCV-interp"
      },
      {
        "elementKey": "spacer5",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "hematology.spacer5"
      },
      {
        "elementKey": "MCH",
        "formIndex": "1",
        "inputType": "number",
        "suffix": "pg",
        "tableColumn": "12",
        "validation": "numeric",
        "fqn": "hematology.MCH",
        "suffixText": "pg"
      },
      {
        "elementKey": "MCH-interp",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "low",
            "text": "low"
          },
          {
            "key": "normal",
            "text": "normal"
          },
          {
            "key": "high",
            "text": "high"
          }
        ],
        "tableColumn": "13",
        "fqn": "hematology.MCH-interp"
      },
      {
        "elementKey": "spacer6",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "hematology.spacer6"
      },
      {
        "elementKey": "MCHC",
        "formIndex": "1",
        "inputType": "number",
        "suffix": "g/L",
        "tableColumn": "14",
        "validation": "numeric",
        "fqn": "hematology.MCHC",
        "suffixText": "g/L"
      },
      {
        "elementKey": "MCHC-interp",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "low",
            "text": "low"
          },
          {
            "key": "normal",
            "text": "normal"
          },
          {
            "key": "high",
            "text": "high"
          }
        ],
        "tableColumn": "15",
        "fqn": "hematology.MCHC-interp"
      },
      {
        "elementKey": "spacer7",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "hematology.spacer7"
      },
      {
        "elementKey": "RDW",
        "formIndex": "1",
        "inputType": "number",
        "suffix": "%",
        "tableColumn": "16",
        "validation": "numeric",
        "fqn": "hematology.RDW",
        "suffixText": "%"
      },
      {
        "elementKey": "RDW-interp",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "low",
            "text": "low"
          },
          {
            "key": "normal",
            "text": "normal"
          },
          {
            "key": "high",
            "text": "high"
          }
        ],
        "tableColumn": "17",
        "fqn": "hematology.RDW-interp"
      },
      {
        "elementKey": "spacer8",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "hematology.spacer8"
      },
      {
        "elementKey": "PLT",
        "formIndex": "1",
        "inputType": "number",
        "mandatory": "TRUE",
        "suffix": "10^9/L",
        "tableColumn": "18",
        "validation": "numeric",
        "fqn": "hematology.PLT",
        "suffixText": "10^9/L"
      },
      {
        "elementKey": "PLT-interp",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "low",
            "text": "low"
          },
          {
            "key": "normal",
            "text": "normal"
          },
          {
            "key": "high",
            "text": "high"
          }
        ],
        "tableColumn": "19",
        "fqn": "hematology.PLT-interp"
      },
      {
        "elementKey": "spacer9",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "hematology.spacer9"
      },
      {
        "elementKey": "MPV",
        "formIndex": "1",
        "inputType": "number",
        "suffix": "fL",
        "tableColumn": "20",
        "validation": "numeric",
        "fqn": "hematology.MPV",
        "suffixText": "fL"
      },
      {
        "elementKey": "MPV-interp",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "low",
            "text": "low"
          },
          {
            "key": "normal",
            "text": "normal"
          },
          {
            "key": "high",
            "text": "high"
          }
        ],
        "tableColumn": "21",
        "fqn": "hematology.MPV-interp"
      },
      {
        "elementKey": "spacer10",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "hematology.spacer10"
      },
      {
        "elementKey": "cbcScatterPlot",
        "formIndex": "1",
        "formCss": "grid-new-subsection",
        "inputType": "ehrFile",
        "tableColumn": "22",
        "fqn": "hematology.cbcScatterPlot"
      },
      {
        "elementKey": "comments",
        "formIndex": "1",
        "formCss": "grid-span-2-columns",
        "inputType": "textarea",
        "tableColumn": "23",
        "fqn": "hematology.comments"
      },
      {
        "elementKey": "tablePbfReview_name",
        "formIndex": "2",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "hematology.name"
      },
      {
        "elementKey": "tablePbfReview_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "tablePbfReview_profession",
        "formIndex": "2",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "hematology.profession"
      },
      {
        "elementKey": "tablePbfReview_day",
        "formIndex": "2",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "hematology.day"
      },
      {
        "elementKey": "tablePbfReview_time",
        "formIndex": "2",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "hematology.time"
      },
      {
        "elementKey": "bloodAnalysis",
        "formIndex": "2",
        "embedRef": "hematology.tableCbcAnalysis",
        "inputType": "ehr_embedded",
        "passToFunction": "[wbcAnalysis, pltAnalysis, cellCntSegNeutrophilAbs, cellCntBandCellsAbs, cellCntLymphAbs, cellCntMonoAbs, cellCntEosinAbs, cellCntBasoAbs, cellCntMetaAbs, cellCntMyeloAbs, cellCntPromyeloAbs, cellCntBlastAbs, cellCntReactiveLymphsAbs, cellCntOtherAbs]",
        "tableColumn": "2",
        "fqn": "hematology.bloodAnalysis"
      },
      {
        "elementKey": "actionsTaken",
        "formIndex": "2",
        "formCss": "grid-span-2-columns",
        "inputType": "textarea",
        "tableColumn": "3",
        "fqn": "hematology.actionsTaken"
      },
      {
        "elementKey": "scanComments",
        "formIndex": "2",
        "formCss": "grid-span-2-columns",
        "inputType": "textarea",
        "tableColumn": "4",
        "fqn": "hematology.scanComments"
      },
      {
        "elementKey": "wbc-1",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "wbcAverage",
        "tableColumn": "5",
        "validation": "numeric",
        "fqn": "hematology.wbc-1"
      },
      {
        "elementKey": "wbc-2",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "wbcAverage",
        "tableColumn": "6",
        "validation": "numeric",
        "fqn": "hematology.wbc-2"
      },
      {
        "elementKey": "wbc-3",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "wbcAverage",
        "tableColumn": "7",
        "validation": "numeric",
        "fqn": "hematology.wbc-3"
      },
      {
        "elementKey": "wbc-4",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "wbcAverage",
        "tableColumn": "8",
        "validation": "numeric",
        "fqn": "hematology.wbc-4"
      },
      {
        "elementKey": "wbc-5",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "wbcAverage",
        "tableColumn": "9",
        "validation": "numeric",
        "fqn": "hematology.wbc-5"
      },
      {
        "elementKey": "wbc-6",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "wbcAverage",
        "tableColumn": "10",
        "validation": "numeric",
        "fqn": "hematology.wbc-6"
      },
      {
        "elementKey": "wbc-7",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "wbcAverage",
        "tableColumn": "11",
        "validation": "numeric",
        "fqn": "hematology.wbc-7"
      },
      {
        "elementKey": "wbc-8",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "wbcAverage",
        "tableColumn": "12",
        "validation": "numeric",
        "fqn": "hematology.wbc-8"
      },
      {
        "elementKey": "wbc-9",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "wbcAverage",
        "tableColumn": "13",
        "validation": "numeric",
        "fqn": "hematology.wbc-9"
      },
      {
        "elementKey": "wbc-10",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "wbcAverage",
        "tableColumn": "14",
        "validation": "numeric",
        "fqn": "hematology.wbc-10"
      },
      {
        "elementKey": "wbcFieldFactor",
        "defaultValue": "1.8",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "wbcEstimate",
        "tableColumn": "15",
        "validation": "numeric",
        "fqn": "hematology.wbcFieldFactor"
      },
      {
        "elementKey": "wbcAverage",
        "calculationType": "average",
        "decimals": "1",
        "formIndex": "2",
        "inputType": "calculatedValue",
        "passToFunction": "wbcEstimate",
        "tableColumn": "16",
        "validation": "numeric",
        "fqn": "hematology.wbcAverage"
      },
      {
        "elementKey": "wbcEstimate",
        "calculationType": "product",
        "decimals": "1",
        "formIndex": "2",
        "inputType": "calculatedValue",
        "tableColumn": "17",
        "validation": "numeric",
        "fqn": "hematology.wbcEstimate"
      },
      {
        "elementKey": "wbcAnalysis",
        "calculationType": "embedValue(hematology,tableCbcAnalysis,wbc)",
        "decimals": "1",
        "formIndex": "2",
        "inputType": "calculatedValue",
        "passToFunction": "[wbcLowRange, wbcHighRange]",
        "tableColumn": "18",
        "validation": "numeric",
        "fqn": "hematology.wbcAnalysis"
      },
      {
        "elementKey": "wbcLowRange",
        "calculationType": "multiplyBy(0.75, 1)",
        "decimals": "1",
        "formIndex": "2",
        "inputType": "calculatedValue",
        "tableColumn": "19",
        "validation": "numeric",
        "fqn": "hematology.wbcLowRange"
      },
      {
        "elementKey": "wbcHighRange",
        "calculationType": "multiplyBy(1.25, 1)",
        "decimals": "1",
        "formIndex": "2",
        "inputType": "calculatedValue",
        "tableColumn": "20",
        "validation": "numeric",
        "fqn": "hematology.wbcHighRange"
      },
      {
        "elementKey": "wbcComment",
        "formIndex": "2",
        "formCss": "grid-span-2-columns",
        "inputType": "text",
        "tableColumn": "21",
        "fqn": "hematology.wbcComment"
      },
      {
        "elementKey": "wbcCorrectedWbc",
        "formIndex": "2",
        "inputType": "number",
        "tableColumn": "22",
        "fqn": "hematology.wbcCorrectedWbc"
      },
      {
        "elementKey": "plt-1",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "pltAverage",
        "tableColumn": "22",
        "validation": "numeric",
        "fqn": "hematology.plt-1"
      },
      {
        "elementKey": "plt-2",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "pltAverage",
        "tableColumn": "23",
        "validation": "numeric",
        "fqn": "hematology.plt-2"
      },
      {
        "elementKey": "plt-3",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "pltAverage",
        "tableColumn": "24",
        "validation": "numeric",
        "fqn": "hematology.plt-3"
      },
      {
        "elementKey": "plt-4",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "pltAverage",
        "tableColumn": "25",
        "validation": "numeric",
        "fqn": "hematology.plt-4"
      },
      {
        "elementKey": "plt-5",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "pltAverage",
        "tableColumn": "26",
        "validation": "numeric",
        "fqn": "hematology.plt-5"
      },
      {
        "elementKey": "plt-6",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "pltAverage",
        "tableColumn": "27",
        "validation": "numeric",
        "fqn": "hematology.plt-6"
      },
      {
        "elementKey": "plt-7",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "pltAverage",
        "tableColumn": "28",
        "validation": "numeric",
        "fqn": "hematology.plt-7"
      },
      {
        "elementKey": "plt-8",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "pltAverage",
        "tableColumn": "29",
        "validation": "numeric",
        "fqn": "hematology.plt-8"
      },
      {
        "elementKey": "plt-9",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "pltAverage",
        "tableColumn": "30",
        "validation": "numeric",
        "fqn": "hematology.plt-9"
      },
      {
        "elementKey": "plt-10",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "pltAverage",
        "tableColumn": "31",
        "validation": "numeric",
        "fqn": "hematology.plt-10"
      },
      {
        "elementKey": "pltFieldFactor",
        "defaultValue": "11.1",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "pltEstimate",
        "tableColumn": "32",
        "validation": "numeric",
        "fqn": "hematology.pltFieldFactor"
      },
      {
        "elementKey": "pltAverage",
        "calculationType": "average",
        "decimals": "1",
        "formIndex": "2",
        "inputType": "calculatedValue",
        "passToFunction": "pltEstimate",
        "tableColumn": "33",
        "validation": "numeric",
        "fqn": "hematology.pltAverage"
      },
      {
        "elementKey": "pltEstimate",
        "calculationType": "product",
        "decimals": "0",
        "formIndex": "2",
        "inputType": "calculatedValue",
        "tableColumn": "34",
        "validation": "numeric",
        "fqn": "hematology.pltEstimate"
      },
      {
        "elementKey": "pltAnalysis",
        "calculationType": "embedValue(hematology,tableCbcAnalysis,PLT)",
        "formIndex": "2",
        "inputType": "calculatedValue",
        "passToFunction": "[pltLowRange, pltHighRange]",
        "tableColumn": "35",
        "validation": "numeric",
        "fqn": "hematology.pltAnalysis"
      },
      {
        "elementKey": "pltLowRange",
        "calculationType": "multiplyBy(0.75, 0)",
        "decimals": "0",
        "formIndex": "2",
        "inputType": "calculatedValue",
        "tableColumn": "36",
        "validation": "numeric",
        "fqn": "hematology.pltLowRange"
      },
      {
        "elementKey": "pltHighRange",
        "calculationType": "multiplyBy(1.25, 0)",
        "decimals": "0",
        "formIndex": "2",
        "inputType": "calculatedValue",
        "tableColumn": "37",
        "validation": "numeric",
        "fqn": "hematology.pltHighRange"
      },
      {
        "elementKey": "pltComment",
        "formIndex": "2",
        "formCss": "grid-span-2-columns",
        "inputType": "text",
        "tableColumn": "38",
        "fqn": "hematology.pltComment"
      },
      {
        "elementKey": "pltNormalMorphology",
        "formIndex": "2",
        "inputType": "checkbox",
        "tableColumn": "39",
        "fqn": "hematology.pltNormalMorphology"
      },
      {
        "elementKey": "pltMorphology",
        "formIndex": "2",
        "formCss": "form_label_short",
        "inputType": "boxcheckset",
        "options": [
          {
            "key": "Hypogranular",
            "text": "Hypogranular"
          },
          {
            "key": "Large or Giant Forms",
            "text": "Large or Giant Forms"
          },
          {
            "key": "Megakaryocytic Fragments",
            "text": "Megakaryocytic Fragments"
          },
          {
            "key": "Platelet Clumps",
            "text": "Platelet Clumps"
          },
          {
            "key": "Platelet Satellitism",
            "text": "Platelet Satellitism"
          },
          {
            "key": "Dysplastic",
            "text": "Dysplastic"
          }
        ],
        "tableColumn": "40",
        "fqn": "hematology.pltMorphology"
      },
      {
        "elementKey": "label43-7-1",
        "formIndex": "2",
        "inputType": "formTableHeader",
        "validation": "numeric",
        "fqn": "hematology.label43-7-1"
      },
      {
        "elementKey": "label43-7-2",
        "formIndex": "2",
        "inputType": "formTableHeader",
        "validation": "numeric",
        "fqn": "hematology.label43-7-2"
      },
      {
        "elementKey": "label43-7-3",
        "formIndex": "2",
        "inputType": "formTableHeader",
        "validation": "numeric",
        "fqn": "hematology.label43-7-3"
      },
      {
        "elementKey": "label43-7-4",
        "formIndex": "2",
        "inputType": "formTableText",
        "validation": "numeric",
        "fqn": "hematology.label43-7-4"
      },
      {
        "elementKey": "cellCntSegNeutrophil",
        "formIndex": "2",
        "inputType": "number",
        "mandatory": "TRUE",
        "passToFunction": "[ cellCntTotal cellCntSegNeutrophilAbs]",
        "tableColumn": "41",
        "validation": "numeric",
        "fqn": "hematology.cellCntSegNeutrophil"
      },
      {
        "elementKey": "cellCntSegNeutrophilAbs",
        "calculationType": "wbcAbs",
        "decimals": "1",
        "formIndex": "2",
        "inputType": "calculatedValue",
        "passToFunction": "cellCntAbsTotal",
        "tableColumn": "42",
        "validation": "numeric",
        "fqn": "hematology.cellCntSegNeutrophilAbs"
      },
      {
        "elementKey": "label43-7-5",
        "formIndex": "2",
        "inputType": "formTableText",
        "validation": "numeric",
        "fqn": "hematology.label43-7-5"
      },
      {
        "elementKey": "cellCntBandCells",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "[ cellCntTotal cellCntBandCellsAbs ]",
        "tableColumn": "43",
        "validation": "numeric",
        "fqn": "hematology.cellCntBandCells"
      },
      {
        "elementKey": "cellCntBandCellsAbs",
        "calculationType": "wbcAbs",
        "decimals": "1",
        "formIndex": "2",
        "inputType": "calculatedValue",
        "passToFunction": "cellCntAbsTotal",
        "tableColumn": "44",
        "validation": "numeric",
        "fqn": "hematology.cellCntBandCellsAbs"
      },
      {
        "elementKey": "label43-7-6",
        "formIndex": "2",
        "inputType": "formTableText",
        "validation": "numeric",
        "fqn": "hematology.label43-7-6"
      },
      {
        "elementKey": "cellCntLymph",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "[ cellCntTotal cellCntLymphAbs ]",
        "tableColumn": "45",
        "validation": "numeric",
        "fqn": "hematology.cellCntLymph"
      },
      {
        "elementKey": "cellCntLymphAbs",
        "calculationType": "wbcAbs",
        "decimals": "1",
        "formIndex": "2",
        "inputType": "calculatedValue",
        "passToFunction": "cellCntAbsTotal",
        "tableColumn": "46",
        "validation": "numeric",
        "fqn": "hematology.cellCntLymphAbs"
      },
      {
        "elementKey": "label43-7-7",
        "formIndex": "2",
        "inputType": "formTableText",
        "validation": "numeric",
        "fqn": "hematology.label43-7-7"
      },
      {
        "elementKey": "cellCntMono",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "[ cellCntTotal cellCntMonoAbs ]",
        "tableColumn": "47",
        "validation": "numeric",
        "fqn": "hematology.cellCntMono"
      },
      {
        "elementKey": "cellCntMonoAbs",
        "calculationType": "wbcAbs",
        "decimals": "1",
        "formIndex": "2",
        "inputType": "calculatedValue",
        "passToFunction": "cellCntAbsTotal",
        "tableColumn": "48",
        "validation": "numeric",
        "fqn": "hematology.cellCntMonoAbs"
      },
      {
        "elementKey": "label43-7-8",
        "formIndex": "2",
        "inputType": "formTableText",
        "validation": "numeric",
        "fqn": "hematology.label43-7-8"
      },
      {
        "elementKey": "cellCntEosin",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "[ cellCntTotal cellCntEosinAbs ]",
        "tableColumn": "49",
        "validation": "numeric",
        "fqn": "hematology.cellCntEosin"
      },
      {
        "elementKey": "cellCntEosinAbs",
        "calculationType": "wbcAbs",
        "decimals": "1",
        "formIndex": "2",
        "inputType": "calculatedValue",
        "passToFunction": "cellCntAbsTotal",
        "tableColumn": "50",
        "validation": "numeric",
        "fqn": "hematology.cellCntEosinAbs"
      },
      {
        "elementKey": "label43-7-9",
        "formIndex": "2",
        "inputType": "formTableText",
        "validation": "numeric",
        "fqn": "hematology.label43-7-9"
      },
      {
        "elementKey": "cellCntBaso",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "[ cellCntTotal cellCntBasoAbs ]",
        "tableColumn": "51",
        "validation": "numeric",
        "fqn": "hematology.cellCntBaso"
      },
      {
        "elementKey": "cellCntBasoAbs",
        "calculationType": "wbcAbs",
        "decimals": "1",
        "formIndex": "2",
        "inputType": "calculatedValue",
        "passToFunction": "cellCntAbsTotal",
        "tableColumn": "52",
        "validation": "numeric",
        "fqn": "hematology.cellCntBasoAbs"
      },
      {
        "elementKey": "label43-7-10",
        "formIndex": "2",
        "inputType": "formTableText",
        "validation": "numeric",
        "fqn": "hematology.label43-7-10"
      },
      {
        "elementKey": "cellCntMeta",
        "defaultValue": "0",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "[ cellCntTotal cellCntMetaAbs ]",
        "tableColumn": "53",
        "validation": "numeric",
        "fqn": "hematology.cellCntMeta"
      },
      {
        "elementKey": "cellCntMetaAbs",
        "calculationType": "wbcAbs",
        "decimals": "1",
        "defaultValue": "0",
        "formIndex": "2",
        "inputType": "calculatedValue",
        "passToFunction": "cellCntAbsTotal",
        "tableColumn": "54",
        "validation": "numeric",
        "fqn": "hematology.cellCntMetaAbs"
      },
      {
        "elementKey": "label43-7-11",
        "formIndex": "2",
        "inputType": "formTableText",
        "validation": "numeric",
        "fqn": "hematology.label43-7-11"
      },
      {
        "elementKey": "cellCntMyelo",
        "defaultValue": "0",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "[ cellCntTotal cellCntMyeloAbs ]",
        "tableColumn": "55",
        "validation": "numeric",
        "fqn": "hematology.cellCntMyelo"
      },
      {
        "elementKey": "cellCntMyeloAbs",
        "calculationType": "wbcAbs",
        "decimals": "1",
        "defaultValue": "0",
        "formIndex": "2",
        "inputType": "calculatedValue",
        "passToFunction": "cellCntAbsTotal",
        "tableColumn": "56",
        "validation": "numeric",
        "fqn": "hematology.cellCntMyeloAbs"
      },
      {
        "elementKey": "label43-7-12",
        "formIndex": "2",
        "inputType": "formTableText",
        "validation": "numeric",
        "fqn": "hematology.label43-7-12"
      },
      {
        "elementKey": "cellCntPromyelo",
        "defaultValue": "0",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "[ cellCntTotal cellCntPromyeloAbs ]",
        "tableColumn": "57",
        "validation": "numeric",
        "fqn": "hematology.cellCntPromyelo"
      },
      {
        "elementKey": "cellCntPromyeloAbs",
        "calculationType": "wbcAbs",
        "decimals": "1",
        "defaultValue": "0",
        "formIndex": "2",
        "inputType": "calculatedValue",
        "passToFunction": "cellCntAbsTotal",
        "tableColumn": "58",
        "validation": "numeric",
        "fqn": "hematology.cellCntPromyeloAbs"
      },
      {
        "elementKey": "label43-7-13",
        "formIndex": "2",
        "inputType": "formTableText",
        "validation": "numeric",
        "fqn": "hematology.label43-7-13"
      },
      {
        "elementKey": "cellCntBlast",
        "defaultValue": "0",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "[ cellCntTotal cellCntBlastAbs ]",
        "tableColumn": "59",
        "validation": "numeric",
        "fqn": "hematology.cellCntBlast"
      },
      {
        "elementKey": "cellCntBlastAbs",
        "calculationType": "wbcAbs",
        "decimals": "1",
        "defaultValue": "0",
        "formIndex": "2",
        "inputType": "calculatedValue",
        "passToFunction": "cellCntAbsTotal",
        "tableColumn": "60",
        "validation": "numeric",
        "fqn": "hematology.cellCntBlastAbs"
      },
      {
        "elementKey": "label43-7-15",
        "formIndex": "2",
        "inputType": "formTableText",
        "validation": "numeric",
        "fqn": "hematology.label43-7-15"
      },
      {
        "elementKey": "cellCntOther",
        "formIndex": "2",
        "inputType": "number",
        "passToFunction": "[ cellCntTotal cellCntOtherAbs ]",
        "tableColumn": "61",
        "validation": "numeric",
        "fqn": "hematology.cellCntOther"
      },
      {
        "elementKey": "cellCntOtherAbs",
        "calculationType": "wbcAbs",
        "decimals": "1",
        "formIndex": "2",
        "inputType": "calculatedValue",
        "passToFunction": "cellCntAbsTotal",
        "tableColumn": "62",
        "validation": "numeric",
        "fqn": "hematology.cellCntOtherAbs"
      },
      {
        "elementKey": "cellCntOtherSpecify",
        "formIndex": "2",
        "formCss": "form-table-span-2",
        "inputType": "text",
        "tableColumn": "63",
        "fqn": "hematology.cellCntOtherSpecify"
      },
      {
        "elementKey": "spacer11",
        "formIndex": "2",
        "inputType": "spacer",
        "fqn": "hematology.spacer11"
      },
      {
        "elementKey": "label43-7-16",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "hematology.label43-7-16"
      },
      {
        "elementKey": "cellCntTotal",
        "calculationType": "sum",
        "decimals": "0",
        "formIndex": "2",
        "inputType": "calculatedValue",
        "tableColumn": "64",
        "fqn": "hematology.cellCntTotal"
      },
      {
        "elementKey": "cellCntAbsTotal",
        "calculationType": "sum",
        "decimals": "1",
        "formIndex": "2",
        "inputType": "calculatedValue",
        "tableColumn": "65",
        "fqn": "hematology.cellCntAbsTotal"
      },
      {
        "elementKey": "cellCntNRBCs",
        "formIndex": "2",
        "formCss": "field_full_line input-element-small",
        "inputType": "number",
        "tableColumn": "66",
        "fqn": "hematology.cellCntNRBCs"
      },
      {
        "elementKey": "cellCntComment",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "67",
        "fqn": "hematology.cellCntComment"
      },
      {
        "elementKey": "wbcmNormalMorphology",
        "formIndex": "2",
        "formCss": "wbcmNormalMorphology",
        "inputType": "checkbox",
        "tableColumn": "68",
        "fqn": "hematology.wbcmNormalMorphology"
      },
      {
        "elementKey": "wbcmAbnormalMorphology",
        "formIndex": "2",
        "formCss": "wbcmAbnormalMorphology",
        "inputType": "checkbox",
        "tableColumn": "69",
        "fqn": "hematology.wbcmAbnormalMorphology"
      },
      {
        "elementKey": "wbcmAbnormalTypeMorphology",
        "formIndex": "2",
        "formCss": "wbcmAbnormalTypeMorphology",
        "inputType": "boxcheckset",
        "options": [
          {
            "key": "Immature Cells",
            "text": "Immature Cells"
          },
          {
            "key": "Hypersegmented Neutrophils",
            "text": "Hypersegmented Neutrophils"
          },
          {
            "key": "Dysplastic Cells",
            "text": "Dysplastic Cells"
          },
          {
            "key": "Pelger-Huët Cells",
            "text": "Pelger-Huët Cells"
          },
          {
            "key": "Auer Rods",
            "text": "Auer Rods"
          },
          {
            "key": "Smudge Cells",
            "text": "Smudge Cells"
          },
          {
            "key": "Reactive Lymphocytes",
            "text": "Reactive Lymphocytes"
          },
          {
            "key": "Disintegrated Cells",
            "text": "Disintegrated Cells"
          }
        ],
        "tableColumn": "70",
        "fqn": "hematology.wbcmAbnormalTypeMorphology"
      },
      {
        "elementKey": "wbcmToxicTypeMorphology",
        "formIndex": "2",
        "formCss": "wbcmToxicTypeMorphology",
        "inputType": "boxcheckset",
        "options": [
          {
            "key": "Döhle Bodies",
            "text": "Döhle Bodies"
          },
          {
            "key": "Toxic Granulation",
            "text": "Toxic Granulation"
          },
          {
            "key": "Toxic Vacuolation",
            "text": "Toxic Vacuolation"
          }
        ],
        "tableColumn": "71",
        "fqn": "hematology.wbcmToxicTypeMorphology"
      },
      {
        "elementKey": "rcmNormal",
        "formIndex": "2",
        "formCss": "rcm-one-part",
        "inputType": "checkbox",
        "tableColumn": "72",
        "fqn": "hematology.rcmNormal"
      },
      {
        "elementKey": "rcmConsistent",
        "formIndex": "2",
        "formCss": "rcm-two-part-1",
        "inputType": "checkbox",
        "tableColumn": "73",
        "fqn": "hematology.rcmConsistent"
      },
      {
        "elementKey": "rcmMcvMchc",
        "formIndex": "2",
        "formCss": "rcm-two-part-2 rcmMcvMchc",
        "inputType": "text",
        "tableColumn": "74",
        "fqn": "hematology.rcmMcvMchc"
      },
      {
        "elementKey": "rcmAnisocytosis",
        "formIndex": "2",
        "formCss": "rcm-one-part-indented",
        "inputType": "checkbox",
        "tableColumn": "75",
        "fqn": "hematology.rcmAnisocytosis"
      },
      {
        "elementKey": "rcmPolychromasia",
        "formIndex": "2",
        "formCss": "rcm-one-part-indented",
        "inputType": "checkbox",
        "tableColumn": "76",
        "fqn": "hematology.rcmPolychromasia"
      },
      {
        "elementKey": "rcmRouleaux",
        "formIndex": "2",
        "formCss": "rcm-one-part-indented",
        "inputType": "checkbox",
        "tableColumn": "77",
        "fqn": "hematology.rcmRouleaux"
      },
      {
        "elementKey": "rcmAcanthocytes",
        "formIndex": "2",
        "formCss": "rcm-two-part-1",
        "inputType": "checkbox",
        "tableColumn": "78",
        "fqn": "hematology.rcmAcanthocytes"
      },
      {
        "elementKey": "rcmAcanthocytesGrading",
        "formIndex": "2",
        "formCss": "rcm-two-part-2",
        "inputType": "select",
        "options": [
          {
            "key": "1+",
            "text": "1+"
          },
          {
            "key": "2+",
            "text": "2+"
          },
          {
            "key": "3+",
            "text": "3+"
          },
          {
            "key": "4+",
            "text": "4+"
          }
        ],
        "tableColumn": "79",
        "fqn": "hematology.rcmAcanthocytesGrading"
      },
      {
        "elementKey": "rcmCodocytes",
        "formIndex": "2",
        "formCss": "rcm-two-part-1",
        "inputType": "checkbox",
        "tableColumn": "80",
        "fqn": "hematology.rcmCodocytes"
      },
      {
        "elementKey": "rcmCodocytesGrading",
        "formIndex": "2",
        "formCss": "rcm-two-part-2",
        "inputType": "select",
        "options": [
          {
            "key": "1+",
            "text": "1+"
          },
          {
            "key": "2+",
            "text": "2+"
          },
          {
            "key": "3+",
            "text": "3+"
          },
          {
            "key": "4+",
            "text": "4+"
          }
        ],
        "tableColumn": "81",
        "fqn": "hematology.rcmCodocytesGrading"
      },
      {
        "elementKey": "rcmDacryocytes",
        "formIndex": "2",
        "formCss": "rcm-two-part-1",
        "inputType": "checkbox",
        "tableColumn": "82",
        "fqn": "hematology.rcmDacryocytes"
      },
      {
        "elementKey": "rcmDacryocytesGrading",
        "formIndex": "2",
        "formCss": "rcm-two-part-2",
        "inputType": "select",
        "options": [
          {
            "key": "1+",
            "text": "1+"
          },
          {
            "key": "2+",
            "text": "2+"
          },
          {
            "key": "3+",
            "text": "3+"
          },
          {
            "key": "4+",
            "text": "4+"
          }
        ],
        "tableColumn": "83",
        "fqn": "hematology.rcmDacryocytesGrading"
      },
      {
        "elementKey": "rcmDrepanocytes",
        "formIndex": "2",
        "formCss": "rcm-two-part-1",
        "inputType": "checkbox",
        "tableColumn": "84",
        "fqn": "hematology.rcmDrepanocytes"
      },
      {
        "elementKey": "rcmDrepanocytesGrading",
        "formIndex": "2",
        "formCss": "rcm-two-part-2",
        "inputType": "select",
        "options": [
          {
            "key": "1+",
            "text": "1+"
          },
          {
            "key": "2+",
            "text": "2+"
          },
          {
            "key": "3+",
            "text": "3+"
          },
          {
            "key": "4+",
            "text": "4+"
          }
        ],
        "tableColumn": "85",
        "fqn": "hematology.rcmDrepanocytesGrading"
      },
      {
        "elementKey": "rcmEchinocytes",
        "formIndex": "2",
        "formCss": "rcm-two-part-1",
        "inputType": "checkbox",
        "tableColumn": "86",
        "fqn": "hematology.rcmEchinocytes"
      },
      {
        "elementKey": "rcmEchinocytesGrading",
        "formIndex": "2",
        "formCss": "rcm-two-part-2",
        "inputType": "select",
        "options": [
          {
            "key": "1+",
            "text": "1+"
          },
          {
            "key": "2+",
            "text": "2+"
          },
          {
            "key": "3+",
            "text": "3+"
          },
          {
            "key": "4+",
            "text": "4+"
          }
        ],
        "tableColumn": "87",
        "fqn": "hematology.rcmEchinocytesGrading"
      },
      {
        "elementKey": "rcmOvalocytes",
        "formIndex": "2",
        "formCss": "rcm-two-part-1",
        "inputType": "checkbox",
        "tableColumn": "88",
        "fqn": "hematology.rcmOvalocytes"
      },
      {
        "elementKey": "rcmOvalocytesGrading",
        "formIndex": "2",
        "formCss": "rcm-two-part-2",
        "inputType": "select",
        "options": [
          {
            "key": "1+",
            "text": "1+"
          },
          {
            "key": "2+",
            "text": "2+"
          },
          {
            "key": "3+",
            "text": "3+"
          },
          {
            "key": "4+",
            "text": "4+"
          }
        ],
        "tableColumn": "89",
        "fqn": "hematology.rcmOvalocytesGrading"
      },
      {
        "elementKey": "rcmMacroOvalocytes",
        "formIndex": "2",
        "formCss": "rcm-two-part-1",
        "inputType": "checkbox",
        "tableColumn": "90",
        "fqn": "hematology.rcmMacroOvalocytes"
      },
      {
        "elementKey": "rcmMacroOvalocytesGrading",
        "formIndex": "2",
        "formCss": "rcm-two-part-2",
        "inputType": "select",
        "options": [
          {
            "key": "1+",
            "text": "1+"
          },
          {
            "key": "2+",
            "text": "2+"
          },
          {
            "key": "3+",
            "text": "3+"
          },
          {
            "key": "4+",
            "text": "4+"
          }
        ],
        "tableColumn": "91",
        "fqn": "hematology.rcmMacroOvalocytesGrading"
      },
      {
        "elementKey": "rcmStomatocytes",
        "formIndex": "2",
        "formCss": "rcm-two-part-1",
        "inputType": "checkbox",
        "tableColumn": "92",
        "fqn": "hematology.rcmStomatocytes"
      },
      {
        "elementKey": "rcmStomatocytesGrading",
        "formIndex": "2",
        "formCss": "rcm-two-part-2",
        "inputType": "select",
        "options": [
          {
            "key": "1+",
            "text": "1+"
          },
          {
            "key": "2+",
            "text": "2+"
          },
          {
            "key": "3+",
            "text": "3+"
          },
          {
            "key": "4+",
            "text": "4+"
          }
        ],
        "tableColumn": "93",
        "fqn": "hematology.rcmStomatocytesGrading"
      },
      {
        "elementKey": "rcmSpherocytes",
        "formIndex": "2",
        "formCss": "rcm-two-part-1",
        "inputType": "checkbox",
        "tableColumn": "94",
        "fqn": "hematology.rcmSpherocytes"
      },
      {
        "elementKey": "rcmSpherocytesGrading",
        "formIndex": "2",
        "formCss": "rcm-two-part-2",
        "inputType": "select",
        "options": [
          {
            "key": "1+",
            "text": "1+"
          },
          {
            "key": "2+",
            "text": "2+"
          },
          {
            "key": "3+",
            "text": "3+"
          },
          {
            "key": "4+",
            "text": "4+"
          }
        ],
        "tableColumn": "95",
        "fqn": "hematology.rcmSpherocytesGrading"
      },
      {
        "elementKey": "rcmICC",
        "formIndex": "2",
        "formCss": "rcm-two-part-1",
        "inputType": "checkbox",
        "tableColumn": "96",
        "fqn": "hematology.rcmICC"
      },
      {
        "elementKey": "rcmICCGrading",
        "formIndex": "2",
        "formCss": "rcm-two-part-2",
        "inputType": "select",
        "options": [
          {
            "key": "1+",
            "text": "1+"
          },
          {
            "key": "2+",
            "text": "2+"
          },
          {
            "key": "3+",
            "text": "3+"
          },
          {
            "key": "4+",
            "text": "4+"
          }
        ],
        "tableColumn": "97",
        "fqn": "hematology.rcmICCGrading"
      },
      {
        "elementKey": "rcmICCSchistocytes",
        "formIndex": "2",
        "formCss": "rcm-two-part-1",
        "inputType": "checkbox",
        "tableColumn": "98",
        "fqn": "hematology.rcmICCSchistocytes"
      },
      {
        "elementKey": "rcmICCSchistocytesGrading",
        "formIndex": "2",
        "formCss": "rcm-two-part-2",
        "inputType": "select",
        "options": [
          {
            "key": "1+",
            "text": "1+"
          },
          {
            "key": "2+",
            "text": "2+"
          },
          {
            "key": "3+",
            "text": "3+"
          },
          {
            "key": "4+",
            "text": "4+"
          }
        ],
        "tableColumn": "99",
        "fqn": "hematology.rcmICCSchistocytesGrading"
      },
      {
        "elementKey": "rcmBasophilicStippling",
        "formIndex": "2",
        "inputType": "checkbox",
        "tableColumn": "100",
        "fqn": "hematology.rcmBasophilicStippling"
      },
      {
        "elementKey": "rcmHowellJollyBodies",
        "formIndex": "2",
        "inputType": "checkbox",
        "tableColumn": "101",
        "fqn": "hematology.rcmHowellJollyBodies"
      },
      {
        "elementKey": "rcmPappenheimerBodies",
        "formIndex": "2",
        "inputType": "checkbox",
        "tableColumn": "102",
        "fqn": "hematology.rcmPappenheimerBodies"
      },
      {
        "elementKey": "rcmMalariaType",
        "formIndex": "2",
        "formCss": "form_label_short, rcmMalariaType",
        "inputType": "boxcheckset",
        "options": [
          {
            "key": "Gametocyte",
            "text": "Gametocyte"
          },
          {
            "key": "Ring Form/Trophozoite",
            "text": "Ring Form/Trophozoite"
          },
          {
            "key": "Schizont",
            "text": "Schizont"
          }
        ],
        "tableColumn": "103",
        "fqn": "hematology.rcmMalariaType"
      },
      {
        "elementKey": "rbcComments",
        "formIndex": "2",
        "inputType": "textarea",
        "tableColumn": "104",
        "fqn": "hematology.rbcComments"
      },
      {
        "elementKey": "referralToHema",
        "formIndex": "2",
        "inputType": "checkbox",
        "tableColumn": "105",
        "fqn": "hematology.referralToHema"
      },
      {
        "elementKey": "explain",
        "formIndex": "2",
        "inputType": "textarea",
        "tableColumn": "106",
        "fqn": "hematology.explain"
      }
    ],
    "pageElements": {
      "tableCbcAnalysis": {
        "elementKey": "tableCbcAnalysis",
        "pageElementIndex": "1",
        "pageKey": "hematology",
        "tableKey": "tableCbcAnalysis",
        "isTable": true,
        "tableAction": "hematology.tablePbfReview",
        "form": {
          "elementKey": "tableCbcAnalysis",
          "label": "CBC analysis",
          "addButtonText": "Add a CBC Report",
          "formKey": "tableCbcAnalysis",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "hematology.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "tableCbcAnalysis_name",
                "tableCbcAnalysis_profession",
                "tableCbcAnalysis_day",
                "tableCbcAnalysis_time"
              ]
            },
            {
              "elementKey": "cGroup43-2",
              "formCss": "grid-left-to-right-3",
              "fqn": "hematology.cGroup43-2",
              "gIndex": "2",
              "gChildren": [
                "wbc",
                "wbc-interp",
                "spacer1",
                "rbc",
                "rbc-interp",
                "spacer2",
                "hgb",
                "hgb-interp",
                "spacer3",
                "HCT",
                "HCT-interp",
                "spacer4",
                "MCV",
                "MCV-interp",
                "spacer5",
                "MCH",
                "MCH-interp",
                "spacer6",
                "MCHC",
                "MCHC-interp",
                "spacer7",
                "RDW",
                "RDW-interp",
                "spacer8",
                "PLT",
                "PLT-interp",
                "spacer9",
                "MPV",
                "MPV-interp",
                "spacer10"
              ]
            },
            {
              "elementKey": "cGroup43-3",
              "formCss": "grid-left-to-right-3",
              "fqn": "hematology.cGroup43-3",
              "gIndex": "3",
              "gChildren": [
                "cbcScatterPlot",
                "comments"
              ]
            }
          ],
          "ehr_data": {
            "tableCbcAnalysis_name": "",
            "tableCbcAnalysis_profession": "",
            "tableCbcAnalysis_day": "",
            "tableCbcAnalysis_time": "",
            "wbc": "",
            "wbc-interp": "",
            "rbc": "",
            "rbc-interp": "",
            "hgb": "",
            "hgb-interp": "",
            "HCT": "",
            "HCT-interp": "",
            "MCV": "",
            "MCV-interp": "",
            "MCH": "",
            "MCH-interp": "",
            "MCHC": "",
            "MCHC-interp": "",
            "RDW": "",
            "RDW-interp": "",
            "PLT": "",
            "PLT-interp": "",
            "MPV": "",
            "MPV-interp": "",
            "cbcScatterPlot": "",
            "comments": ""
          }
        },
        "fqn": "hematology.tableCbcAnalysis",
        "tableActionType": "openDialog",
        "taTargetPageKey": "hematology",
        "taTargetTableKey": "tablePbfReview",
        "taSourcePageKey": "hematology",
        "taSourceTableKey": "tableCbcAnalysis",
        "tableChildren": [
          "tableCbcAnalysis_id",
          "tableCbcAnalysis_day",
          "tableCbcAnalysis_time",
          "wbc",
          "wbc-interp",
          "rbc",
          "rbc-interp",
          "hgb",
          "hgb-interp",
          "HCT",
          "HCT-interp",
          "MCV",
          "MCV-interp",
          "MCH",
          "MCH-interp",
          "MCHC",
          "MCHC-interp",
          "RDW",
          "RDW-interp",
          "PLT",
          "PLT-interp",
          "MPV",
          "MPV-interp",
          "cbcScatterPlot",
          "comments",
          "tableCbcAnalysis_name",
          "tableCbcAnalysis_profession"
        ],
        "hasRecHeader": true
      },
      "tablePbfReview": {
        "elementKey": "tablePbfReview",
        "pageElementIndex": "2",
        "pageKey": "hematology",
        "tableKey": "tablePbfReview",
        "isTable": true,
        "form": {
          "elementKey": "tablePbfReview",
          "label": "PBF Review",
          "addButtonText": "NONE",
          "formKey": "tablePbfReview",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "hematology.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "tablePbfReview_name",
                "tablePbfReview_profession",
                "tablePbfReview_day",
                "tablePbfReview_time"
              ]
            },
            {
              "elementKey": "cGroup43-2",
              "formCss": "grid-left-to-right-1",
              "fqn": "hematology.cGroup43-2",
              "gIndex": "2",
              "gChildren": [
                "bloodAnalysis"
              ]
            },
            {
              "elementKey": "cGroup43-3",
              "formCss": "grid-left-to-right-1",
              "fqn": "hematology.cGroup43-3",
              "gIndex": "3",
              "gChildren": [
                "actionsTaken",
                "scanComments"
              ]
            },
            {
              "elementKey": "cGroup43-4",
              "formCss": "grid-left-to-right-4",
              "fqn": "hematology.cGroup43-4",
              "gIndex": "4",
              "gChildren": [
                "wbc-1",
                "wbc-2",
                "wbc-3",
                "wbc-4",
                "wbc-5",
                "wbc-6",
                "wbc-7",
                "wbc-8",
                "wbc-9",
                "wbc-10",
                "wbcFieldFactor",
                "wbcAverage",
                "wbcEstimate",
                "wbcAnalysis",
                "wbcLowRange",
                "wbcHighRange",
                "wbcComment",
                "wbcCorrectedWbc"
              ]
            },
            {
              "elementKey": "cGroup43-5",
              "formCss": "grid-left-to-right-4",
              "fqn": "hematology.cGroup43-5",
              "gIndex": "5",
              "gChildren": [
                "plt-1",
                "plt-2",
                "plt-3",
                "plt-4",
                "plt-5",
                "plt-6",
                "plt-7",
                "plt-8",
                "plt-9",
                "plt-10",
                "pltFieldFactor",
                "pltAverage",
                "pltEstimate",
                "pltAnalysis",
                "pltLowRange",
                "pltHighRange",
                "pltComment"
              ]
            },
            {
              "elementKey": "cGroup43-6",
              "formCss": "grid-left-to-right-3",
              "fqn": "hematology.cGroup43-6",
              "gIndex": "6",
              "gChildren": [
                "pltNormalMorphology",
                "pltMorphology"
              ]
            },
            {
              "elementKey": "cGroup43-7",
              "formCss": "form-table-group wbc-differential-group",
              "fqn": "hematology.cGroup43-7",
              "gIndex": "7",
              "gChildren": [
                "label43-7-1",
                "label43-7-2",
                "label43-7-3",
                "label43-7-4",
                "cellCntSegNeutrophil",
                "cellCntSegNeutrophilAbs",
                "label43-7-5",
                "cellCntBandCells",
                "cellCntBandCellsAbs",
                "label43-7-6",
                "cellCntLymph",
                "cellCntLymphAbs",
                "label43-7-7",
                "cellCntMono",
                "cellCntMonoAbs",
                "label43-7-8",
                "cellCntEosin",
                "cellCntEosinAbs",
                "label43-7-9",
                "cellCntBaso",
                "cellCntBasoAbs",
                "label43-7-10",
                "cellCntMeta",
                "cellCntMetaAbs",
                "label43-7-11",
                "cellCntMyelo",
                "cellCntMyeloAbs",
                "label43-7-12",
                "cellCntPromyelo",
                "cellCntPromyeloAbs",
                "label43-7-13",
                "cellCntBlast",
                "cellCntBlastAbs",
                "label43-7-15",
                "cellCntOther",
                "cellCntOtherAbs",
                "cellCntOtherSpecify",
                "spacer11",
                "label43-7-16",
                "cellCntTotal",
                "cellCntAbsTotal"
              ]
            },
            {
              "elementKey": "cGroup43-8",
              "formCss": "grid-left-to-right-1",
              "fqn": "hematology.cGroup43-8",
              "gIndex": "8",
              "gChildren": [
                "cellCntNRBCs",
                "cellCntComment"
              ]
            },
            {
              "elementKey": "cGroup43-9",
              "formCss": "grid-left-to-right-custom wbcMorphologyGroup",
              "fqn": "hematology.cGroup43-9",
              "gIndex": "9",
              "gChildren": [
                "wbcmNormalMorphology",
                "wbcmAbnormalMorphology",
                "wbcmAbnormalTypeMorphology",
                "wbcmToxicTypeMorphology"
              ]
            },
            {
              "elementKey": "cGroup43-10",
              "formCss": "rcm-morphology-group",
              "fqn": "hematology.cGroup43-10",
              "gIndex": "10",
              "gChildren": [
                "rcmNormal",
                "rcmConsistent",
                "rcmMcvMchc",
                "rcmAnisocytosis",
                "rcmPolychromasia",
                "rcmRouleaux",
                "rcmAcanthocytes",
                "rcmAcanthocytesGrading",
                "rcmCodocytes",
                "rcmCodocytesGrading",
                "rcmDacryocytes",
                "rcmDacryocytesGrading",
                "rcmDrepanocytes",
                "rcmDrepanocytesGrading",
                "rcmEchinocytes",
                "rcmEchinocytesGrading",
                "rcmOvalocytes",
                "rcmOvalocytesGrading",
                "rcmMacroOvalocytes",
                "rcmMacroOvalocytesGrading",
                "rcmStomatocytes",
                "rcmStomatocytesGrading",
                "rcmSpherocytes",
                "rcmSpherocytesGrading",
                "rcmICC",
                "rcmICCGrading",
                "rcmICCSchistocytes",
                "rcmICCSchistocytesGrading"
              ]
            },
            {
              "elementKey": "cGroup43-11",
              "formCss": "grid-left-to-right-3",
              "fqn": "hematology.cGroup43-11",
              "gIndex": "11",
              "gChildren": [
                "rcmBasophilicStippling",
                "rcmHowellJollyBodies",
                "rcmPappenheimerBodies",
                "rcmMalariaType"
              ]
            },
            {
              "elementKey": "cGroup43-12",
              "formCss": "grid-left-to-right-1",
              "fqn": "hematology.cGroup43-12",
              "gIndex": "12",
              "gChildren": [
                "rbcComments"
              ]
            },
            {
              "elementKey": "cGroup43-13",
              "formCss": "grid-left-to-right-1",
              "fqn": "hematology.cGroup43-13",
              "gIndex": "13",
              "gChildren": [
                "referralToHema",
                "explain"
              ]
            }
          ],
          "ehr_data": {
            "tablePbfReview_name": "",
            "tablePbfReview_profession": "",
            "tablePbfReview_day": "",
            "tablePbfReview_time": "",
            "bloodAnalysis": "",
            "actionsTaken": "",
            "scanComments": "",
            "wbc-1": "",
            "wbc-2": "",
            "wbc-3": "",
            "wbc-4": "",
            "wbc-5": "",
            "wbc-6": "",
            "wbc-7": "",
            "wbc-8": "",
            "wbc-9": "",
            "wbc-10": "",
            "wbcFieldFactor": "1.8",
            "wbcAverage": "",
            "wbcEstimate": "",
            "wbcAnalysis": "",
            "wbcLowRange": "",
            "wbcHighRange": "",
            "wbcComment": "",
            "wbcCorrectedWbc": "",
            "plt-1": "",
            "plt-2": "",
            "plt-3": "",
            "plt-4": "",
            "plt-5": "",
            "plt-6": "",
            "plt-7": "",
            "plt-8": "",
            "plt-9": "",
            "plt-10": "",
            "pltFieldFactor": "11.1",
            "pltAverage": "",
            "pltEstimate": "",
            "pltAnalysis": "",
            "pltLowRange": "",
            "pltHighRange": "",
            "pltComment": "",
            "pltNormalMorphology": "",
            "pltMorphology": "",
            "cellCntSegNeutrophil": "",
            "cellCntSegNeutrophilAbs": "",
            "cellCntBandCells": "",
            "cellCntBandCellsAbs": "",
            "cellCntLymph": "",
            "cellCntLymphAbs": "",
            "cellCntMono": "",
            "cellCntMonoAbs": "",
            "cellCntEosin": "",
            "cellCntEosinAbs": "",
            "cellCntBaso": "",
            "cellCntBasoAbs": "",
            "cellCntMeta": "0",
            "cellCntMetaAbs": "0",
            "cellCntMyelo": "0",
            "cellCntMyeloAbs": "0",
            "cellCntPromyelo": "0",
            "cellCntPromyeloAbs": "0",
            "cellCntBlast": "0",
            "cellCntBlastAbs": "0",
            "cellCntOther": "",
            "cellCntOtherAbs": "",
            "cellCntOtherSpecify": "",
            "cellCntTotal": "",
            "cellCntAbsTotal": "",
            "cellCntNRBCs": "",
            "cellCntComment": "",
            "wbcmNormalMorphology": "",
            "wbcmAbnormalMorphology": "",
            "wbcmAbnormalTypeMorphology": "",
            "wbcmToxicTypeMorphology": "",
            "rcmNormal": "",
            "rcmConsistent": "",
            "rcmMcvMchc": "",
            "rcmAnisocytosis": "",
            "rcmPolychromasia": "",
            "rcmRouleaux": "",
            "rcmAcanthocytes": "",
            "rcmAcanthocytesGrading": "",
            "rcmCodocytes": "",
            "rcmCodocytesGrading": "",
            "rcmDacryocytes": "",
            "rcmDacryocytesGrading": "",
            "rcmDrepanocytes": "",
            "rcmDrepanocytesGrading": "",
            "rcmEchinocytes": "",
            "rcmEchinocytesGrading": "",
            "rcmOvalocytes": "",
            "rcmOvalocytesGrading": "",
            "rcmMacroOvalocytes": "",
            "rcmMacroOvalocytesGrading": "",
            "rcmStomatocytes": "",
            "rcmStomatocytesGrading": "",
            "rcmSpherocytes": "",
            "rcmSpherocytesGrading": "",
            "rcmICC": "",
            "rcmICCGrading": "",
            "rcmICCSchistocytes": "",
            "rcmICCSchistocytesGrading": "",
            "rcmBasophilicStippling": "",
            "rcmHowellJollyBodies": "",
            "rcmPappenheimerBodies": "",
            "rcmMalariaType": "",
            "rbcComments": "",
            "referralToHema": "",
            "explain": ""
          }
        },
        "fqn": "hematology.tablePbfReview",
        "tableChildren": [
          "tablePbfReview_id",
          "tablePbfReview_day",
          "tablePbfReview_time",
          "bloodAnalysis",
          "actionsTaken",
          "scanComments",
          "wbc-1",
          "wbc-2",
          "wbc-3",
          "wbc-4",
          "wbc-5",
          "wbc-6",
          "wbc-7",
          "wbc-8",
          "wbc-9",
          "wbc-10",
          "wbcFieldFactor",
          "wbcAverage",
          "wbcEstimate",
          "wbcAnalysis",
          "wbcLowRange",
          "wbcHighRange",
          "wbcComment",
          "wbcCorrectedWbc",
          "plt-1",
          "plt-2",
          "plt-3",
          "plt-4",
          "plt-5",
          "plt-6",
          "plt-7",
          "plt-8",
          "plt-9",
          "plt-10",
          "pltFieldFactor",
          "pltAverage",
          "pltEstimate",
          "pltAnalysis",
          "pltLowRange",
          "pltHighRange",
          "pltComment",
          "pltNormalMorphology",
          "pltMorphology",
          "cellCntSegNeutrophil",
          "cellCntSegNeutrophilAbs",
          "cellCntBandCells",
          "cellCntBandCellsAbs",
          "cellCntLymph",
          "cellCntLymphAbs",
          "cellCntMono",
          "cellCntMonoAbs",
          "cellCntEosin",
          "cellCntEosinAbs",
          "cellCntBaso",
          "cellCntBasoAbs",
          "cellCntMeta",
          "cellCntMetaAbs",
          "cellCntMyelo",
          "cellCntMyeloAbs",
          "cellCntPromyelo",
          "cellCntPromyeloAbs",
          "cellCntBlast",
          "cellCntBlastAbs",
          "cellCntOther",
          "cellCntOtherAbs",
          "cellCntOtherSpecify",
          "cellCntTotal",
          "cellCntAbsTotal",
          "cellCntNRBCs",
          "cellCntComment",
          "wbcmNormalMorphology",
          "wbcmAbnormalMorphology",
          "wbcmAbnormalTypeMorphology",
          "wbcmToxicTypeMorphology",
          "rcmNormal",
          "rcmConsistent",
          "rcmMcvMchc",
          "rcmAnisocytosis",
          "rcmPolychromasia",
          "rcmRouleaux",
          "rcmAcanthocytes",
          "rcmAcanthocytesGrading",
          "rcmCodocytes",
          "rcmCodocytesGrading",
          "rcmDacryocytes",
          "rcmDacryocytesGrading",
          "rcmDrepanocytes",
          "rcmDrepanocytesGrading",
          "rcmEchinocytes",
          "rcmEchinocytesGrading",
          "rcmOvalocytes",
          "rcmOvalocytesGrading",
          "rcmMacroOvalocytes",
          "rcmMacroOvalocytesGrading",
          "rcmStomatocytes",
          "rcmStomatocytesGrading",
          "rcmSpherocytes",
          "rcmSpherocytesGrading",
          "rcmICC",
          "rcmICCGrading",
          "rcmICCSchistocytes",
          "rcmICCSchistocytesGrading",
          "rcmBasophilicStippling",
          "rcmHowellJollyBodies",
          "rcmPappenheimerBodies",
          "rcmMalariaType",
          "rbcComments",
          "referralToHema",
          "explain",
          "tablePbfReview_name",
          "tablePbfReview_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "dishargeplan": {
    "pageDataKey": "dishargeplan",
    "pIndex": "44",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "table_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "dishargeplan.name"
      },
      {
        "elementKey": "table_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "table_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "dishargeplan.profession"
      },
      {
        "elementKey": "table_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "dishargeplan.day"
      },
      {
        "elementKey": "table_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "dishargeplan.time"
      },
      {
        "elementKey": "goal",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "2",
        "fqn": "dishargeplan.goal"
      },
      {
        "elementKey": "interventions",
        "formIndex": "1",
        "formCss": "grid-span-3-columns",
        "inputType": "textarea",
        "tableColumn": "3",
        "fqn": "dishargeplan.interventions"
      },
      {
        "elementKey": "evaluation",
        "formIndex": "1",
        "formCss": "grid-span-3-columns",
        "inputType": "textarea",
        "tableColumn": "4",
        "fqn": "dishargeplan.evaluation"
      },
      {
        "elementKey": "status",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "In progress",
            "text": "In progress"
          },
          {
            "key": "Complete",
            "text": "Complete"
          }
        ],
        "tableColumn": "5",
        "fqn": "dishargeplan.status"
      }
    ],
    "pageElements": {
      "table": {
        "elementKey": "table",
        "pageElementIndex": "1",
        "pageKey": "dishargeplan",
        "tableKey": "table",
        "isTable": true,
        "form": {
          "elementKey": "table",
          "label": "Discharge plan",
          "addButtonText": "Add a discharge planning note",
          "formKey": "table",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "dishargeplan.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "table_name",
                "table_profession",
                "table_day",
                "table_time"
              ]
            },
            {
              "elementKey": "cGroup44-2",
              "formCss": "grid-left-to-right-3",
              "fqn": "dishargeplan.cGroup44-2",
              "gIndex": "2",
              "gChildren": [
                "goal",
                "interventions",
                "evaluation",
                "status"
              ]
            }
          ],
          "ehr_data": {
            "table_name": "",
            "table_profession": "",
            "table_day": "",
            "table_time": "",
            "goal": "",
            "interventions": "",
            "evaluation": "",
            "status": ""
          }
        },
        "fqn": "dishargeplan.table",
        "tableChildren": [
          "table_id",
          "table_day",
          "table_time",
          "goal",
          "interventions",
          "evaluation",
          "status",
          "table_name",
          "table_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "medLabChemistry": {
    "pageDataKey": "medLabChemistry",
    "pIndex": "45",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "tableQcChemistry_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "medLabChemistry.name"
      },
      {
        "elementKey": "tableQcChemistry_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "tableQcChemistry_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "medLabChemistry.profession"
      },
      {
        "elementKey": "tableQcChemistry_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "medLabChemistry.day"
      },
      {
        "elementKey": "tableQcChemistry_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "medLabChemistry.time"
      },
      {
        "elementKey": "label55-11",
        "formIndex": "1",
        "formCss": "grid-span-2-columns",
        "inputType": "form_label",
        "fqn": "medLabChemistry.label55-11"
      },
      {
        "elementKey": "label55-12",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabChemistry.label55-12"
      },
      {
        "elementKey": "chemQcAllAcceptable",
        "formIndex": "1",
        "inputType": "radioset",
        "options": [
          {
            "key": "y",
            "text": "Yes"
          },
          {
            "key": "n",
            "text": "No"
          },
          {
            "key": "na",
            "text": "N/A"
          }
        ],
        "tableColumn": "89",
        "fqn": "medLabChemistry.chemQcAllAcceptable"
      },
      {
        "elementKey": "label55-13",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabChemistry.label55-13"
      },
      {
        "elementKey": "chemQcAllDuplicatesAcceptable",
        "formIndex": "1",
        "inputType": "radioset",
        "options": [
          {
            "key": "y",
            "text": "Yes"
          },
          {
            "key": "n",
            "text": "No"
          },
          {
            "key": "na",
            "text": "N/A"
          }
        ],
        "tableColumn": "90",
        "fqn": "medLabChemistry.chemQcAllDuplicatesAcceptable"
      },
      {
        "elementKey": "label55-14",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabChemistry.label55-14"
      },
      {
        "elementKey": "chemQcAllPlausible",
        "formIndex": "1",
        "inputType": "radioset",
        "options": [
          {
            "key": "y",
            "text": "Yes"
          },
          {
            "key": "n",
            "text": "No"
          },
          {
            "key": "na",
            "text": "N/A"
          }
        ],
        "tableColumn": "91",
        "fqn": "medLabChemistry.chemQcAllPlausible"
      },
      {
        "elementKey": "label55-15",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabChemistry.label55-15"
      },
      {
        "elementKey": "chemQcAllCanBeReported",
        "formIndex": "1",
        "inputType": "radioset",
        "options": [
          {
            "key": "y",
            "text": "Yes"
          },
          {
            "key": "n",
            "text": "No"
          },
          {
            "key": "na",
            "text": "N/A"
          }
        ],
        "tableColumn": "92",
        "fqn": "medLabChemistry.chemQcAllCanBeReported"
      },
      {
        "elementKey": "label55-16",
        "formIndex": "1",
        "formCss": "grid-new-subsection grid-span-2-columns no-border",
        "inputType": "form_label",
        "fqn": "medLabChemistry.label55-16"
      },
      {
        "elementKey": "label55-17",
        "formIndex": "1",
        "formCss": "grid-new-subsection grid-span-2-columns no-border",
        "inputType": "form_label",
        "fqn": "medLabChemistry.label55-17"
      },
      {
        "elementKey": "label55-18",
        "formIndex": "1",
        "inputType": "formTableHeader",
        "fqn": "medLabChemistry.label55-18"
      },
      {
        "elementKey": "label55-19",
        "formIndex": "1",
        "inputType": "formTableHeader",
        "fqn": "medLabChemistry.label55-19"
      },
      {
        "elementKey": "label55-20",
        "formIndex": "1",
        "inputType": "formTableHeader",
        "fqn": "medLabChemistry.label55-20"
      },
      {
        "elementKey": "label55-21",
        "formIndex": "1",
        "inputType": "formTableHeader",
        "fqn": "medLabChemistry.label55-21"
      },
      {
        "elementKey": "label55-22",
        "formIndex": "1",
        "inputType": "formTableText",
        "fqn": "medLabChemistry.label55-22"
      },
      {
        "elementKey": "chmQcAnalyte1",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "93",
        "fqn": "medLabChemistry.chmQcAnalyte1"
      },
      {
        "elementKey": "chmQcLevel1",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "94",
        "fqn": "medLabChemistry.chmQcLevel1"
      },
      {
        "elementKey": "chmQcRule1",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "95",
        "fqn": "medLabChemistry.chmQcRule1"
      },
      {
        "elementKey": "chmQcSeRe1",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "96",
        "fqn": "medLabChemistry.chmQcSeRe1"
      },
      {
        "elementKey": "chmQcDescribe1",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "97",
        "fqn": "medLabChemistry.chmQcDescribe1"
      },
      {
        "elementKey": "chmQcAnalyte2",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "98",
        "fqn": "medLabChemistry.chmQcAnalyte2"
      },
      {
        "elementKey": "chmQcLevel2",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "99",
        "fqn": "medLabChemistry.chmQcLevel2"
      },
      {
        "elementKey": "chmQcRule2",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "100",
        "fqn": "medLabChemistry.chmQcRule2"
      },
      {
        "elementKey": "chmQcSeRe2",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "101",
        "fqn": "medLabChemistry.chmQcSeRe2"
      },
      {
        "elementKey": "chmQcDescribe2",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "102",
        "fqn": "medLabChemistry.chmQcDescribe2"
      },
      {
        "elementKey": "chmQcAnalyte3",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "103",
        "fqn": "medLabChemistry.chmQcAnalyte3"
      },
      {
        "elementKey": "chmQcLevel3",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "104",
        "fqn": "medLabChemistry.chmQcLevel3"
      },
      {
        "elementKey": "chmQcRule3",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "105",
        "fqn": "medLabChemistry.chmQcRule3"
      },
      {
        "elementKey": "chmQcSeRe3",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "106",
        "fqn": "medLabChemistry.chmQcSeRe3"
      },
      {
        "elementKey": "chmQcDescribe3",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "107",
        "fqn": "medLabChemistry.chmQcDescribe3"
      },
      {
        "elementKey": "chmQcAnalyte4",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "108",
        "fqn": "medLabChemistry.chmQcAnalyte4"
      },
      {
        "elementKey": "chmQcLevel4",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "109",
        "fqn": "medLabChemistry.chmQcLevel4"
      },
      {
        "elementKey": "chmQcRule4",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "110",
        "fqn": "medLabChemistry.chmQcRule4"
      },
      {
        "elementKey": "chmQcSeRe4",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "111",
        "fqn": "medLabChemistry.chmQcSeRe4"
      },
      {
        "elementKey": "chmQcDescribe4",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "112",
        "fqn": "medLabChemistry.chmQcDescribe4"
      },
      {
        "elementKey": "label55-112",
        "formIndex": "1",
        "formCss": "grid-new-subsection grid-span-2-columns no-border",
        "inputType": "form_label",
        "fqn": "medLabChemistry.label55-112"
      },
      {
        "elementKey": "label55-113",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabChemistry.label55-113"
      },
      {
        "elementKey": "label55-114",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabChemistry.label55-114"
      },
      {
        "elementKey": "cqcPendAnal_1",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "113",
        "fqn": "medLabChemistry.cqcPendAnal_1"
      },
      {
        "elementKey": "cqcPendResult_1",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "114",
        "fqn": "medLabChemistry.cqcPendResult_1"
      },
      {
        "elementKey": "cqcPendAnal_2",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "115",
        "fqn": "medLabChemistry.cqcPendAnal_2"
      },
      {
        "elementKey": "cqcPendResult_2",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "116",
        "fqn": "medLabChemistry.cqcPendResult_2"
      },
      {
        "elementKey": "cqcPendAnal_3",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "117",
        "fqn": "medLabChemistry.cqcPendAnal_3"
      },
      {
        "elementKey": "cqcPendResult_3",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "118",
        "fqn": "medLabChemistry.cqcPendResult_3"
      },
      {
        "elementKey": "cqcPendAnal_4",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "119",
        "fqn": "medLabChemistry.cqcPendAnal_4"
      },
      {
        "elementKey": "cqcPendResult_4",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "120",
        "fqn": "medLabChemistry.cqcPendResult_4"
      },
      {
        "elementKey": "tableChem_name",
        "formIndex": "2",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "medLabChemistry.name"
      },
      {
        "elementKey": "tableChem_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "tableChem_profession",
        "formIndex": "2",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "medLabChemistry.profession"
      },
      {
        "elementKey": "tableChem_day",
        "formIndex": "2",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "medLabChemistry.day"
      },
      {
        "elementKey": "tableChem_time",
        "formIndex": "2",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "medLabChemistry.time"
      },
      {
        "elementKey": "chemAccession",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "2",
        "fqn": "medLabChemistry.chemAccession"
      },
      {
        "elementKey": "chemCollDay",
        "defaultValue": "Today",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "3",
        "fqn": "medLabChemistry.chemCollDay"
      },
      {
        "elementKey": "chemCollTime",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "4",
        "fqn": "medLabChemistry.chemCollTime"
      },
      {
        "elementKey": "urinOrderPhys",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "5",
        "fqn": "medLabChemistry.urinOrderPhys"
      },
      {
        "elementKey": "label45-3-1",
        "formIndex": "2",
        "inputType": "formTableHeader",
        "options": [
          {
            "key": "Clear",
            "text": "Clear"
          },
          {
            "key": "Hazy",
            "text": "Hazy"
          },
          {
            "key": "Cloudy",
            "text": "Cloudy"
          },
          {
            "key": "Turbid",
            "text": "Turbid"
          }
        ],
        "fqn": "medLabChemistry.label45-3-1"
      },
      {
        "elementKey": "label45-3-2",
        "formIndex": "2",
        "inputType": "formTableHeader",
        "options": [
          {
            "key": "Colorless",
            "text": "Colorless"
          },
          {
            "key": "Pale yellow",
            "text": "Pale yellow"
          },
          {
            "key": "Yellow",
            "text": "Yellow"
          },
          {
            "key": "Amber",
            "text": "Amber"
          },
          {
            "key": "Orange",
            "text": "Orange"
          },
          {
            "key": "Red",
            "text": "Red"
          },
          {
            "key": "Pink",
            "text": "Pink"
          },
          {
            "key": "Brown",
            "text": "Brown"
          },
          {
            "key": "Green",
            "text": "Green"
          }
        ],
        "fqn": "medLabChemistry.label45-3-2"
      },
      {
        "elementKey": "label45-3-3",
        "formIndex": "2",
        "inputType": "formTableHeader",
        "fqn": "medLabChemistry.label45-3-3"
      },
      {
        "elementKey": "label45-3-4",
        "formIndex": "2",
        "inputType": "formTableHeader",
        "fqn": "medLabChemistry.label45-3-4"
      },
      {
        "elementKey": "label45-3-5",
        "formIndex": "2",
        "inputType": "formTableText",
        "suffix": "mmol/L",
        "fqn": "medLabChemistry.label45-3-5",
        "suffixText": "mmol/L"
      },
      {
        "elementKey": "chemSodium",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "6",
        "fqn": "medLabChemistry.chemSodium"
      },
      {
        "elementKey": "chemSodiumFlag",
        "formIndex": "2",
        "formCss": "chem-results-lhclch",
        "inputType": "radioset",
        "options": [
          {
            "key": "CL",
            "text": "CL"
          },
          {
            "key": "L",
            "text": "L"
          },
          {
            "key": "H",
            "text": "H"
          },
          {
            "key": "CH",
            "text": "CH"
          }
        ],
        "tableColumn": "7",
        "fqn": "medLabChemistry.chemSodiumFlag"
      },
      {
        "elementKey": "chemSodiumRange",
        "defaultValue": "135 – 145 mmol/L",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "8",
        "fqn": "medLabChemistry.chemSodiumRange"
      },
      {
        "elementKey": "label45-3-7",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabChemistry.label45-3-7"
      },
      {
        "elementKey": "chemPotassium",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "9",
        "fqn": "medLabChemistry.chemPotassium"
      },
      {
        "elementKey": "chemPotassiumFlag",
        "formIndex": "2",
        "formCss": "chem-results-lhclch",
        "inputType": "radioset",
        "options": [
          {
            "key": "CL",
            "text": "CL"
          },
          {
            "key": "L",
            "text": "L"
          },
          {
            "key": "H",
            "text": "H"
          },
          {
            "key": "CH",
            "text": "CH"
          }
        ],
        "tableColumn": "10",
        "fqn": "medLabChemistry.chemPotassiumFlag"
      },
      {
        "elementKey": "chemPotassiumRange",
        "defaultValue": "3.5–5.1 mmol/L",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "11",
        "fqn": "medLabChemistry.chemPotassiumRange"
      },
      {
        "elementKey": "label45-3-9",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabChemistry.label45-3-9"
      },
      {
        "elementKey": "chemChloride",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "12",
        "fqn": "medLabChemistry.chemChloride"
      },
      {
        "elementKey": "chemChlorideFlag",
        "formIndex": "2",
        "formCss": "chem-results-lhclch",
        "inputType": "radioset",
        "options": [
          {
            "key": "CL",
            "text": "CL"
          },
          {
            "key": "L",
            "text": "L"
          },
          {
            "key": "H",
            "text": "H"
          },
          {
            "key": "CH",
            "text": "CH"
          }
        ],
        "tableColumn": "13",
        "fqn": "medLabChemistry.chemChlorideFlag"
      },
      {
        "elementKey": "chemChlorideRange",
        "defaultValue": "95 – 107 mmol/L",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "14",
        "fqn": "medLabChemistry.chemChlorideRange"
      },
      {
        "elementKey": "label45-3-11",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabChemistry.label45-3-11"
      },
      {
        "elementKey": "chemtCO2",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "15",
        "fqn": "medLabChemistry.chemtCO2"
      },
      {
        "elementKey": "chemtCO2Flag",
        "formIndex": "2",
        "formCss": "chem-results-lhclch",
        "inputType": "radioset",
        "options": [
          {
            "key": "CL",
            "text": "CL"
          },
          {
            "key": "L",
            "text": "L"
          },
          {
            "key": "H",
            "text": "H"
          },
          {
            "key": "CH",
            "text": "CH"
          }
        ],
        "tableColumn": "16",
        "fqn": "medLabChemistry.chemtCO2Flag"
      },
      {
        "elementKey": "chemtCO2Range",
        "defaultValue": "22 – 31 mmol/L",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "17",
        "fqn": "medLabChemistry.chemtCO2Range"
      },
      {
        "elementKey": "label45-3-13",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabChemistry.label45-3-13"
      },
      {
        "elementKey": "chemAnionGap",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "18",
        "fqn": "medLabChemistry.chemAnionGap"
      },
      {
        "elementKey": "chemAnionGapFlag",
        "formIndex": "2",
        "formCss": "chem-results-lhclch",
        "inputType": "radioset",
        "options": [
          {
            "key": "CL",
            "text": "CL"
          },
          {
            "key": "L",
            "text": "L"
          },
          {
            "key": "H",
            "text": "H"
          },
          {
            "key": "CH",
            "text": "CH"
          }
        ],
        "tableColumn": "19",
        "fqn": "medLabChemistry.chemAnionGapFlag"
      },
      {
        "elementKey": "chemAnionGapRange",
        "defaultValue": "8 – 16 mmol/L",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "20",
        "fqn": "medLabChemistry.chemAnionGapRange"
      },
      {
        "elementKey": "label45-3-15",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabChemistry.label45-3-15"
      },
      {
        "elementKey": "chemOsmalityMeasured",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "21",
        "fqn": "medLabChemistry.chemOsmalityMeasured"
      },
      {
        "elementKey": "chemOsmalityMeasuredFlag",
        "formIndex": "2",
        "formCss": "chem-results-lhclch",
        "inputType": "radioset",
        "options": [
          {
            "key": "CL",
            "text": "CL"
          },
          {
            "key": "L",
            "text": "L"
          },
          {
            "key": "H",
            "text": "H"
          },
          {
            "key": "CH",
            "text": "CH"
          }
        ],
        "tableColumn": "22",
        "fqn": "medLabChemistry.chemOsmalityMeasuredFlag"
      },
      {
        "elementKey": "chemOsmalityMeasuredRange",
        "defaultValue": "275 – 295 mOsm/kg",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "23",
        "fqn": "medLabChemistry.chemOsmalityMeasuredRange"
      },
      {
        "elementKey": "label45-3-17",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabChemistry.label45-3-17"
      },
      {
        "elementKey": "chemOsmalityCalculated",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "24",
        "fqn": "medLabChemistry.chemOsmalityCalculated"
      },
      {
        "elementKey": "chemOsmalityCalculatedFlag",
        "formIndex": "2",
        "formCss": "chem-results-lhclch",
        "inputType": "radioset",
        "options": [
          {
            "key": "CL",
            "text": "CL"
          },
          {
            "key": "L",
            "text": "L"
          },
          {
            "key": "H",
            "text": "H"
          },
          {
            "key": "CH",
            "text": "CH"
          }
        ],
        "tableColumn": "25",
        "fqn": "medLabChemistry.chemOsmalityCalculatedFlag"
      },
      {
        "elementKey": "chemOsmalityCalculatedRange",
        "defaultValue": "275 – 295 mOsm/kg",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "26",
        "fqn": "medLabChemistry.chemOsmalityCalculatedRange"
      },
      {
        "elementKey": "label45-3-19",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabChemistry.label45-3-19"
      },
      {
        "elementKey": "chemOsmolarGap",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "27",
        "fqn": "medLabChemistry.chemOsmolarGap"
      },
      {
        "elementKey": "chemOsmolarGapFlag",
        "formIndex": "2",
        "formCss": "chem-results-lhclch",
        "inputType": "radioset",
        "options": [
          {
            "key": "CL",
            "text": "CL"
          },
          {
            "key": "L",
            "text": "L"
          },
          {
            "key": "H",
            "text": "H"
          },
          {
            "key": "CH",
            "text": "CH"
          }
        ],
        "tableColumn": "28",
        "fqn": "medLabChemistry.chemOsmolarGapFlag"
      },
      {
        "elementKey": "chemOsmolarGapRange",
        "defaultValue": "≤ 10 mOsm/kg",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "29",
        "fqn": "medLabChemistry.chemOsmolarGapRange"
      },
      {
        "elementKey": "label45-3-22",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabChemistry.label45-3-22"
      },
      {
        "elementKey": "chemGlugoseFastingRandom",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "30",
        "fqn": "medLabChemistry.chemGlugoseFastingRandom"
      },
      {
        "elementKey": "chemGlugoseFastingRandomFlag",
        "formIndex": "2",
        "formCss": "chem-results-lhclch",
        "inputType": "radioset",
        "options": [
          {
            "key": "CL",
            "text": "CL"
          },
          {
            "key": "L",
            "text": "L"
          },
          {
            "key": "H",
            "text": "H"
          },
          {
            "key": "CH",
            "text": "CH"
          }
        ],
        "tableColumn": "31",
        "fqn": "medLabChemistry.chemGlugoseFastingRandomFlag"
      },
      {
        "elementKey": "chemGlugoseFastingRandomRange",
        "defaultValue": "F(3.6-6.0) R(3.6-11.0)mmol/L",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "32",
        "fqn": "medLabChemistry.chemGlugoseFastingRandomRange"
      },
      {
        "elementKey": "label45-3-24",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabChemistry.label45-3-24"
      },
      {
        "elementKey": "chemCreatinine",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "33",
        "fqn": "medLabChemistry.chemCreatinine"
      },
      {
        "elementKey": "chemCreatinineFlag",
        "formIndex": "2",
        "formCss": "chem-results-lhclch",
        "inputType": "radioset",
        "options": [
          {
            "key": "CL",
            "text": "CL"
          },
          {
            "key": "L",
            "text": "L"
          },
          {
            "key": "H",
            "text": "H"
          },
          {
            "key": "CH",
            "text": "CH"
          }
        ],
        "tableColumn": "34",
        "fqn": "medLabChemistry.chemCreatinineFlag"
      },
      {
        "elementKey": "chemCreatinineRange",
        "defaultValue": "M(60-115) F(40-95) umol/L",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "35",
        "fqn": "medLabChemistry.chemCreatinineRange"
      },
      {
        "elementKey": "label45-3-26",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabChemistry.label45-3-26"
      },
      {
        "elementKey": "chemUreaBun",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "36",
        "fqn": "medLabChemistry.chemUreaBun"
      },
      {
        "elementKey": "chemUreaBunFlag",
        "formIndex": "2",
        "formCss": "chem-results-lhclch",
        "inputType": "radioset",
        "options": [
          {
            "key": "CL",
            "text": "CL"
          },
          {
            "key": "L",
            "text": "L"
          },
          {
            "key": "H",
            "text": "H"
          },
          {
            "key": "CH",
            "text": "CH"
          }
        ],
        "tableColumn": "37",
        "fqn": "medLabChemistry.chemUreaBunFlag"
      },
      {
        "elementKey": "chemUreaBunRange",
        "defaultValue": "2.0 – 8.2 mmol/L",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "38",
        "fqn": "medLabChemistry.chemUreaBunRange"
      },
      {
        "elementKey": "label55-1",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabChemistry.label55-1"
      },
      {
        "elementKey": "chemCalcium",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "39",
        "fqn": "medLabChemistry.chemCalcium"
      },
      {
        "elementKey": "chemCalciumFlag",
        "formIndex": "2",
        "formCss": "chem-results-lhclch",
        "inputType": "radioset",
        "options": [
          {
            "key": "CL",
            "text": "CL"
          },
          {
            "key": "L",
            "text": "L"
          },
          {
            "key": "H",
            "text": "H"
          },
          {
            "key": "CH",
            "text": "CH"
          }
        ],
        "tableColumn": "40",
        "fqn": "medLabChemistry.chemCalciumFlag"
      },
      {
        "elementKey": "chemCalciumRange",
        "defaultValue": "2.10 – 2.55 mmol/L",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "41",
        "fqn": "medLabChemistry.chemCalciumRange"
      },
      {
        "elementKey": "label55-3",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabChemistry.label55-3"
      },
      {
        "elementKey": "chemMagnesium",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "42",
        "fqn": "medLabChemistry.chemMagnesium"
      },
      {
        "elementKey": "chemMagnesiumFlag",
        "formIndex": "2",
        "formCss": "chem-results-lhclch",
        "inputType": "radioset",
        "options": [
          {
            "key": "CL",
            "text": "CL"
          },
          {
            "key": "L",
            "text": "L"
          },
          {
            "key": "H",
            "text": "H"
          },
          {
            "key": "CH",
            "text": "CH"
          }
        ],
        "tableColumn": "43",
        "fqn": "medLabChemistry.chemMagnesiumFlag"
      },
      {
        "elementKey": "chemMagnesiumRange",
        "defaultValue": "0.70 – 1.10 mmol/L",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "44",
        "fqn": "medLabChemistry.chemMagnesiumRange"
      },
      {
        "elementKey": "label55-5",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabChemistry.label55-5"
      },
      {
        "elementKey": "chemPhosphorus",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "45",
        "fqn": "medLabChemistry.chemPhosphorus"
      },
      {
        "elementKey": "chemPhosphorusFlag",
        "formIndex": "2",
        "formCss": "chem-results-lhclch",
        "inputType": "radioset",
        "options": [
          {
            "key": "CL",
            "text": "CL"
          },
          {
            "key": "L",
            "text": "L"
          },
          {
            "key": "H",
            "text": "H"
          },
          {
            "key": "CH",
            "text": "CH"
          }
        ],
        "tableColumn": "46",
        "fqn": "medLabChemistry.chemPhosphorusFlag"
      },
      {
        "elementKey": "chemPhosphorusRange",
        "defaultValue": "0.80 – 1.45 mmol/L",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "47",
        "fqn": "medLabChemistry.chemPhosphorusRange"
      },
      {
        "elementKey": "label55-7",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabChemistry.label55-7"
      },
      {
        "elementKey": "chemTotalProtein",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "48",
        "fqn": "medLabChemistry.chemTotalProtein"
      },
      {
        "elementKey": "chemTotalProteinFlag",
        "formIndex": "2",
        "formCss": "chem-results-lhclch",
        "inputType": "radioset",
        "options": [
          {
            "key": "CL",
            "text": "CL"
          },
          {
            "key": "L",
            "text": "L"
          },
          {
            "key": "H",
            "text": "H"
          },
          {
            "key": "CH",
            "text": "CH"
          }
        ],
        "tableColumn": "49",
        "fqn": "medLabChemistry.chemTotalProteinFlag"
      },
      {
        "elementKey": "chemTotalProteinRange",
        "defaultValue": "62 – 82 g/L",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "50",
        "fqn": "medLabChemistry.chemTotalProteinRange"
      },
      {
        "elementKey": "label55-9",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabChemistry.label55-9"
      },
      {
        "elementKey": "chemAlbumin",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "51",
        "fqn": "medLabChemistry.chemAlbumin"
      },
      {
        "elementKey": "chemAlbuminFlag",
        "formIndex": "2",
        "formCss": "chem-results-lhclch",
        "inputType": "radioset",
        "options": [
          {
            "key": "CL",
            "text": "CL"
          },
          {
            "key": "L",
            "text": "L"
          },
          {
            "key": "H",
            "text": "H"
          },
          {
            "key": "CH",
            "text": "CH"
          }
        ],
        "tableColumn": "52",
        "fqn": "medLabChemistry.chemAlbuminFlag"
      },
      {
        "elementKey": "chemAlbuminRange",
        "defaultValue": "34 – 50 g/L",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "53",
        "fqn": "medLabChemistry.chemAlbuminRange"
      },
      {
        "elementKey": "chemOpt1Analyte",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "54",
        "fqn": "medLabChemistry.chemOpt1Analyte"
      },
      {
        "elementKey": "chemOpt1Result",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "55",
        "fqn": "medLabChemistry.chemOpt1Result"
      },
      {
        "elementKey": "chemOpt1Type",
        "formIndex": "2",
        "formCss": "chem-results-lhclch",
        "inputType": "radioset",
        "options": [
          {
            "key": "CL",
            "text": "CL"
          },
          {
            "key": "L",
            "text": "L"
          },
          {
            "key": "H",
            "text": "H"
          },
          {
            "key": "CH",
            "text": "CH"
          }
        ],
        "tableColumn": "56",
        "fqn": "medLabChemistry.chemOpt1Type"
      },
      {
        "elementKey": "chemOpt1RI",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "57",
        "fqn": "medLabChemistry.chemOpt1RI"
      },
      {
        "elementKey": "chemOpt2Analyte",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "58",
        "fqn": "medLabChemistry.chemOpt2Analyte"
      },
      {
        "elementKey": "chemOpt2Result",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "59",
        "fqn": "medLabChemistry.chemOpt2Result"
      },
      {
        "elementKey": "chemOpt2Type",
        "formIndex": "2",
        "formCss": "chem-results-lhclch",
        "inputType": "radioset",
        "options": [
          {
            "key": "CL",
            "text": "CL"
          },
          {
            "key": "L",
            "text": "L"
          },
          {
            "key": "H",
            "text": "H"
          },
          {
            "key": "CH",
            "text": "CH"
          }
        ],
        "tableColumn": "60",
        "fqn": "medLabChemistry.chemOpt2Type"
      },
      {
        "elementKey": "chemOpt2RI",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "61",
        "fqn": "medLabChemistry.chemOpt2RI"
      },
      {
        "elementKey": "chemOpt3Analyte",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "62",
        "fqn": "medLabChemistry.chemOpt3Analyte"
      },
      {
        "elementKey": "chemOpt3Result",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "63",
        "fqn": "medLabChemistry.chemOpt3Result"
      },
      {
        "elementKey": "chemOpt3Type",
        "formIndex": "2",
        "formCss": "chem-results-lhclch",
        "inputType": "radioset",
        "options": [
          {
            "key": "CL",
            "text": "CL"
          },
          {
            "key": "L",
            "text": "L"
          },
          {
            "key": "H",
            "text": "H"
          },
          {
            "key": "CH",
            "text": "CH"
          }
        ],
        "tableColumn": "64",
        "fqn": "medLabChemistry.chemOpt3Type"
      },
      {
        "elementKey": "chemOpt3RI",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "65",
        "fqn": "medLabChemistry.chemOpt3RI"
      },
      {
        "elementKey": "chemOpt4Analyte",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "66",
        "fqn": "medLabChemistry.chemOpt4Analyte"
      },
      {
        "elementKey": "chemOpt4Result",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "67",
        "fqn": "medLabChemistry.chemOpt4Result"
      },
      {
        "elementKey": "chemOpt4Type",
        "formIndex": "2",
        "formCss": "chem-results-lhclch",
        "inputType": "radioset",
        "options": [
          {
            "key": "CL",
            "text": "CL"
          },
          {
            "key": "L",
            "text": "L"
          },
          {
            "key": "H",
            "text": "H"
          },
          {
            "key": "CH",
            "text": "CH"
          }
        ],
        "tableColumn": "68",
        "fqn": "medLabChemistry.chemOpt4Type"
      },
      {
        "elementKey": "chemOpt4RI",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "69",
        "fqn": "medLabChemistry.chemOpt4RI"
      },
      {
        "elementKey": "chemOpt5Analyte",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "70",
        "fqn": "medLabChemistry.chemOpt5Analyte"
      },
      {
        "elementKey": "chemOpt5Result",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "71",
        "fqn": "medLabChemistry.chemOpt5Result"
      },
      {
        "elementKey": "chemOpt5Type",
        "formIndex": "2",
        "formCss": "chem-results-lhclch",
        "inputType": "radioset",
        "options": [
          {
            "key": "CL",
            "text": "CL"
          },
          {
            "key": "L",
            "text": "L"
          },
          {
            "key": "H",
            "text": "H"
          },
          {
            "key": "CH",
            "text": "CH"
          }
        ],
        "tableColumn": "72",
        "fqn": "medLabChemistry.chemOpt5Type"
      },
      {
        "elementKey": "chemOpt5RI",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "73",
        "fqn": "medLabChemistry.chemOpt5RI"
      },
      {
        "elementKey": "chemOpt6Analyte",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "74",
        "fqn": "medLabChemistry.chemOpt6Analyte"
      },
      {
        "elementKey": "chemOpt6Result",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "75",
        "fqn": "medLabChemistry.chemOpt6Result"
      },
      {
        "elementKey": "chemOpt6Type",
        "formIndex": "2",
        "formCss": "chem-results-lhclch",
        "inputType": "radioset",
        "options": [
          {
            "key": "CL",
            "text": "CL"
          },
          {
            "key": "L",
            "text": "L"
          },
          {
            "key": "H",
            "text": "H"
          },
          {
            "key": "CH",
            "text": "CH"
          }
        ],
        "tableColumn": "76",
        "fqn": "medLabChemistry.chemOpt6Type"
      },
      {
        "elementKey": "chemOpt6RI",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "77",
        "fqn": "medLabChemistry.chemOpt6RI"
      },
      {
        "elementKey": "chemOpt7Analyte",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "78",
        "fqn": "medLabChemistry.chemOpt7Analyte"
      },
      {
        "elementKey": "chemOpt7Result",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "79",
        "fqn": "medLabChemistry.chemOpt7Result"
      },
      {
        "elementKey": "chemOpt7Type",
        "formIndex": "2",
        "formCss": "chem-results-lhclch",
        "inputType": "radioset",
        "options": [
          {
            "key": "CL",
            "text": "CL"
          },
          {
            "key": "L",
            "text": "L"
          },
          {
            "key": "H",
            "text": "H"
          },
          {
            "key": "CH",
            "text": "CH"
          }
        ],
        "tableColumn": "80",
        "fqn": "medLabChemistry.chemOpt7Type"
      },
      {
        "elementKey": "chemOpt7RI",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "81",
        "fqn": "medLabChemistry.chemOpt7RI"
      },
      {
        "elementKey": "chemOpt8Analyte",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "82",
        "fqn": "medLabChemistry.chemOpt8Analyte"
      },
      {
        "elementKey": "chemOpt8Result",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "83",
        "fqn": "medLabChemistry.chemOpt8Result"
      },
      {
        "elementKey": "chemOpt8Type",
        "formIndex": "2",
        "formCss": "chem-results-lhclch",
        "inputType": "radioset",
        "options": [
          {
            "key": "CL",
            "text": "CL"
          },
          {
            "key": "L",
            "text": "L"
          },
          {
            "key": "H",
            "text": "H"
          },
          {
            "key": "CH",
            "text": "CH"
          }
        ],
        "tableColumn": "84",
        "fqn": "medLabChemistry.chemOpt8Type"
      },
      {
        "elementKey": "chemOpt8RI",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "85",
        "fqn": "medLabChemistry.chemOpt8RI"
      },
      {
        "elementKey": "urnInternal",
        "formIndex": "2",
        "inputType": "textarea",
        "tableColumn": "86",
        "fqn": "medLabChemistry.urnInternal"
      },
      {
        "elementKey": "chemSpecimumType",
        "formIndex": "2",
        "inputType": "checkset",
        "options": [
          {
            "key": "serum",
            "text": "Serum"
          },
          {
            "key": "urinine",
            "text": "Urinine"
          },
          {
            "key": "wholeBlood",
            "text": "Whole blood"
          }
        ],
        "tableColumn": "87",
        "fqn": "medLabChemistry.chemSpecimumType"
      },
      {
        "elementKey": "chemSerumAppearance",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "88",
        "fqn": "medLabChemistry.chemSerumAppearance"
      },
      {
        "elementKey": "chemInterpLabel",
        "formIndex": "2",
        "inputType": "form_label",
        "fqn": "medLabChemistry.chemInterpLabel"
      },
      {
        "elementKey": "chemInterpValue",
        "formIndex": "2",
        "inputType": "radioset",
        "options": [
          {
            "key": "y",
            "text": "Yes"
          },
          {
            "key": "n",
            "text": "No"
          },
          {
            "key": "na",
            "text": "N/A"
          }
        ],
        "tableColumn": "89",
        "fqn": "medLabChemistry.chemInterpValue"
      },
      {
        "elementKey": "label55-40",
        "formIndex": "2",
        "formCss": "grid-span-2-columns",
        "inputType": "form_label",
        "fqn": "medLabChemistry.label55-40"
      },
      {
        "elementKey": "chemInterpReason",
        "formIndex": "2",
        "formCss": "grid-span-2-columns",
        "inputType": "text",
        "tableColumn": "90",
        "fqn": "medLabChemistry.chemInterpReason"
      },
      {
        "elementKey": "chemPhLabel",
        "formIndex": "2",
        "inputType": "form_label",
        "fqn": "medLabChemistry.chemPhLabel"
      },
      {
        "elementKey": "chemPhValue",
        "formIndex": "2",
        "inputType": "radioset",
        "options": [
          {
            "key": "y",
            "text": "Yes"
          },
          {
            "key": "n",
            "text": "No"
          },
          {
            "key": "na",
            "text": "N/A"
          }
        ],
        "tableColumn": "91",
        "fqn": "medLabChemistry.chemPhValue"
      },
      {
        "elementKey": "label55-41",
        "formIndex": "2",
        "formCss": "grid-new-subsection grid-span-2-columns no-border",
        "inputType": "form_label",
        "fqn": "medLabChemistry.label55-41"
      }
    ],
    "pageElements": {
      "tableQcChemistry": {
        "elementKey": "tableQcChemistry",
        "pageElementIndex": "1",
        "pageKey": "medLabChemistry",
        "tableKey": "tableQcChemistry",
        "isTable": true,
        "form": {
          "elementKey": "tableQcChemistry",
          "label": "Chemistry QC",
          "addButtonText": "Create a chemistry QC report",
          "formKey": "tableQcChemistry",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "medLabChemistry.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "tableQcChemistry_name",
                "tableQcChemistry_profession",
                "tableQcChemistry_day",
                "tableQcChemistry_time"
              ]
            },
            {
              "elementKey": "cGroup45-6",
              "formCss": "chem-qc-assay form-table-group",
              "fqn": "medLabChemistry.cGroup45-6",
              "gIndex": "2",
              "gChildren": [
                "label55-11",
                "label55-12",
                "chemQcAllAcceptable",
                "label55-13",
                "chemQcAllDuplicatesAcceptable",
                "label55-14",
                "chemQcAllPlausible",
                "label55-15",
                "chemQcAllCanBeReported",
                "label55-16",
                "label55-17"
              ]
            },
            {
              "elementKey": "cGroup45-7",
              "formCss": "chem-qc-trouble form-table-group",
              "fqn": "medLabChemistry.cGroup45-7",
              "gIndex": "3",
              "gChildren": [
                "label55-18",
                "label55-19",
                "label55-20",
                "label55-21",
                "label55-22",
                "chmQcAnalyte1",
                "chmQcLevel1",
                "chmQcRule1",
                "chmQcSeRe1",
                "chmQcDescribe1",
                "chmQcAnalyte2",
                "chmQcLevel2",
                "chmQcRule2",
                "chmQcSeRe2",
                "chmQcDescribe2",
                "chmQcAnalyte3",
                "chmQcLevel3",
                "chmQcRule3",
                "chmQcSeRe3",
                "chmQcDescribe3",
                "chmQcAnalyte4",
                "chmQcLevel4",
                "chmQcRule4",
                "chmQcSeRe4",
                "chmQcDescribe4"
              ]
            },
            {
              "elementKey": "cGroup46-5",
              "formCss": "med-lab-urin-qc-pending-table form-table-group",
              "fqn": "medLabChemistry.cGroup46-5",
              "gIndex": "4",
              "gChildren": [
                "label55-112",
                "label55-113",
                "label55-114",
                "cqcPendAnal_1",
                "cqcPendResult_1",
                "cqcPendAnal_2",
                "cqcPendResult_2",
                "cqcPendAnal_3",
                "cqcPendResult_3",
                "cqcPendAnal_4",
                "cqcPendResult_4"
              ]
            }
          ],
          "ehr_data": {
            "tableQcChemistry_name": "",
            "tableQcChemistry_profession": "",
            "tableQcChemistry_day": "",
            "tableQcChemistry_time": "",
            "chemQcAllAcceptable": "",
            "chemQcAllDuplicatesAcceptable": "",
            "chemQcAllPlausible": "",
            "chemQcAllCanBeReported": "",
            "chmQcAnalyte1": "",
            "chmQcLevel1": "",
            "chmQcRule1": "",
            "chmQcSeRe1": "",
            "chmQcDescribe1": "",
            "chmQcAnalyte2": "",
            "chmQcLevel2": "",
            "chmQcRule2": "",
            "chmQcSeRe2": "",
            "chmQcDescribe2": "",
            "chmQcAnalyte3": "",
            "chmQcLevel3": "",
            "chmQcRule3": "",
            "chmQcSeRe3": "",
            "chmQcDescribe3": "",
            "chmQcAnalyte4": "",
            "chmQcLevel4": "",
            "chmQcRule4": "",
            "chmQcSeRe4": "",
            "chmQcDescribe4": "",
            "cqcPendAnal_1": "",
            "cqcPendResult_1": "",
            "cqcPendAnal_2": "",
            "cqcPendResult_2": "",
            "cqcPendAnal_3": "",
            "cqcPendResult_3": "",
            "cqcPendAnal_4": "",
            "cqcPendResult_4": ""
          }
        },
        "fqn": "medLabChemistry.tableQcChemistry",
        "tableChildren": [
          "tableQcChemistry_id",
          "tableQcChemistry_day",
          "tableQcChemistry_time",
          "chemQcAllAcceptable",
          "chemQcAllDuplicatesAcceptable",
          "chemQcAllPlausible",
          "chemQcAllCanBeReported",
          "chmQcAnalyte1",
          "chmQcLevel1",
          "chmQcRule1",
          "chmQcSeRe1",
          "chmQcDescribe1",
          "chmQcAnalyte2",
          "chmQcLevel2",
          "chmQcRule2",
          "chmQcSeRe2",
          "chmQcDescribe2",
          "chmQcAnalyte3",
          "chmQcLevel3",
          "chmQcRule3",
          "chmQcSeRe3",
          "chmQcDescribe3",
          "chmQcAnalyte4",
          "chmQcLevel4",
          "chmQcRule4",
          "chmQcSeRe4",
          "chmQcDescribe4",
          "cqcPendAnal_1",
          "cqcPendResult_1",
          "cqcPendAnal_2",
          "cqcPendResult_2",
          "cqcPendAnal_3",
          "cqcPendResult_3",
          "cqcPendAnal_4",
          "cqcPendResult_4",
          "tableQcChemistry_name",
          "tableQcChemistry_profession"
        ],
        "hasRecHeader": true
      },
      "tableChem": {
        "elementKey": "tableChem",
        "pageElementIndex": "2",
        "pageKey": "medLabChemistry",
        "tableKey": "tableChem",
        "isTable": true,
        "form": {
          "elementKey": "tableChem",
          "label": "Chemistry analysis",
          "addButtonText": "Create a chemistry lab report",
          "formKey": "tableChem",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "medLabChemistry.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "tableChem_name",
                "tableChem_profession",
                "tableChem_day",
                "tableChem_time"
              ]
            },
            {
              "elementKey": "cGroup45-2",
              "formCss": "grid-left-to-right-3",
              "fqn": "medLabChemistry.cGroup45-2",
              "gIndex": "2",
              "gChildren": [
                "chemAccession",
                "chemCollDay",
                "chemCollTime",
                "urinOrderPhys"
              ]
            },
            {
              "elementKey": "cGroup45-3",
              "formCss": "chem-results-table form-table-group",
              "fqn": "medLabChemistry.cGroup45-3",
              "gIndex": "3",
              "gChildren": [
                "label45-3-1",
                "label45-3-2",
                "label45-3-3",
                "label45-3-4",
                "label45-3-5",
                "chemSodium",
                "chemSodiumFlag",
                "chemSodiumRange",
                "label45-3-7",
                "chemPotassium",
                "chemPotassiumFlag",
                "chemPotassiumRange",
                "label45-3-9",
                "chemChloride",
                "chemChlorideFlag",
                "chemChlorideRange",
                "label45-3-11",
                "chemtCO2",
                "chemtCO2Flag",
                "chemtCO2Range",
                "label45-3-13",
                "chemAnionGap",
                "chemAnionGapFlag",
                "chemAnionGapRange",
                "label45-3-15",
                "chemOsmalityMeasured",
                "chemOsmalityMeasuredFlag",
                "chemOsmalityMeasuredRange",
                "label45-3-17",
                "chemOsmalityCalculated",
                "chemOsmalityCalculatedFlag",
                "chemOsmalityCalculatedRange",
                "label45-3-19",
                "chemOsmolarGap",
                "chemOsmolarGapFlag",
                "chemOsmolarGapRange",
                "label45-3-22",
                "chemGlugoseFastingRandom",
                "chemGlugoseFastingRandomFlag",
                "chemGlugoseFastingRandomRange",
                "label45-3-24",
                "chemCreatinine",
                "chemCreatinineFlag",
                "chemCreatinineRange",
                "label45-3-26",
                "chemUreaBun",
                "chemUreaBunFlag",
                "chemUreaBunRange",
                "label55-1",
                "chemCalcium",
                "chemCalciumFlag",
                "chemCalciumRange",
                "label55-3",
                "chemMagnesium",
                "chemMagnesiumFlag",
                "chemMagnesiumRange",
                "label55-5",
                "chemPhosphorus",
                "chemPhosphorusFlag",
                "chemPhosphorusRange",
                "label55-7",
                "chemTotalProtein",
                "chemTotalProteinFlag",
                "chemTotalProteinRange",
                "label55-9",
                "chemAlbumin",
                "chemAlbuminFlag",
                "chemAlbuminRange",
                "chemOpt1Analyte",
                "chemOpt1Result",
                "chemOpt1Type",
                "chemOpt1RI",
                "chemOpt2Analyte",
                "chemOpt2Result",
                "chemOpt2Type",
                "chemOpt2RI",
                "chemOpt3Analyte",
                "chemOpt3Result",
                "chemOpt3Type",
                "chemOpt3RI",
                "chemOpt4Analyte",
                "chemOpt4Result",
                "chemOpt4Type",
                "chemOpt4RI",
                "chemOpt5Analyte",
                "chemOpt5Result",
                "chemOpt5Type",
                "chemOpt5RI",
                "chemOpt6Analyte",
                "chemOpt6Result",
                "chemOpt6Type",
                "chemOpt6RI",
                "chemOpt7Analyte",
                "chemOpt7Result",
                "chemOpt7Type",
                "chemOpt7RI",
                "chemOpt8Analyte",
                "chemOpt8Result",
                "chemOpt8Type",
                "chemOpt8RI"
              ]
            },
            {
              "elementKey": "cGroup45-4",
              "formCss": "grid-left-to-right-1",
              "fqn": "medLabChemistry.cGroup45-4",
              "gIndex": "4",
              "gChildren": [
                "urnInternal"
              ]
            },
            {
              "elementKey": "cGroup45-5",
              "formCss": "grid-left-to-right-3",
              "fqn": "medLabChemistry.cGroup45-5",
              "gIndex": "5",
              "gChildren": [
                "chemSpecimumType",
                "chemSerumAppearance"
              ]
            },
            {
              "elementKey": "cGroup45-4",
              "formCss": "grid-left-to-right-2",
              "fqn": "medLabChemistry.cGroup45-4",
              "gIndex": "6",
              "gChildren": [
                "chemInterpLabel",
                "chemInterpValue",
                "label55-40",
                "chemInterpReason"
              ]
            },
            {
              "elementKey": "cGroup45-4",
              "formCss": "grid-left-to-right-2",
              "fqn": "medLabChemistry.cGroup45-4",
              "gIndex": "7",
              "gChildren": [
                "chemPhLabel",
                "chemPhValue",
                "label55-41"
              ]
            }
          ],
          "ehr_data": {
            "tableChem_name": "",
            "tableChem_profession": "",
            "tableChem_day": "",
            "tableChem_time": "",
            "chemAccession": "",
            "chemCollDay": "Today",
            "chemCollTime": "",
            "urinOrderPhys": "",
            "chemSodium": "",
            "chemSodiumFlag": "",
            "chemSodiumRange": "135 – 145 mmol/L",
            "chemPotassium": "",
            "chemPotassiumFlag": "",
            "chemPotassiumRange": "3.5–5.1 mmol/L",
            "chemChloride": "",
            "chemChlorideFlag": "",
            "chemChlorideRange": "95 – 107 mmol/L",
            "chemtCO2": "",
            "chemtCO2Flag": "",
            "chemtCO2Range": "22 – 31 mmol/L",
            "chemAnionGap": "",
            "chemAnionGapFlag": "",
            "chemAnionGapRange": "8 – 16 mmol/L",
            "chemOsmalityMeasured": "",
            "chemOsmalityMeasuredFlag": "",
            "chemOsmalityMeasuredRange": "275 – 295 mOsm/kg",
            "chemOsmalityCalculated": "",
            "chemOsmalityCalculatedFlag": "",
            "chemOsmalityCalculatedRange": "275 – 295 mOsm/kg",
            "chemOsmolarGap": "",
            "chemOsmolarGapFlag": "",
            "chemOsmolarGapRange": "≤ 10 mOsm/kg",
            "chemGlugoseFastingRandom": "",
            "chemGlugoseFastingRandomFlag": "",
            "chemGlugoseFastingRandomRange": "F(3.6-6.0) R(3.6-11.0)mmol/L",
            "chemCreatinine": "",
            "chemCreatinineFlag": "",
            "chemCreatinineRange": "M(60-115) F(40-95) umol/L",
            "chemUreaBun": "",
            "chemUreaBunFlag": "",
            "chemUreaBunRange": "2.0 – 8.2 mmol/L",
            "chemCalcium": "",
            "chemCalciumFlag": "",
            "chemCalciumRange": "2.10 – 2.55 mmol/L",
            "chemMagnesium": "",
            "chemMagnesiumFlag": "",
            "chemMagnesiumRange": "0.70 – 1.10 mmol/L",
            "chemPhosphorus": "",
            "chemPhosphorusFlag": "",
            "chemPhosphorusRange": "0.80 – 1.45 mmol/L",
            "chemTotalProtein": "",
            "chemTotalProteinFlag": "",
            "chemTotalProteinRange": "62 – 82 g/L",
            "chemAlbumin": "",
            "chemAlbuminFlag": "",
            "chemAlbuminRange": "34 – 50 g/L",
            "chemOpt1Analyte": "",
            "chemOpt1Result": "",
            "chemOpt1Type": "",
            "chemOpt1RI": "",
            "chemOpt2Analyte": "",
            "chemOpt2Result": "",
            "chemOpt2Type": "",
            "chemOpt2RI": "",
            "chemOpt3Analyte": "",
            "chemOpt3Result": "",
            "chemOpt3Type": "",
            "chemOpt3RI": "",
            "chemOpt4Analyte": "",
            "chemOpt4Result": "",
            "chemOpt4Type": "",
            "chemOpt4RI": "",
            "chemOpt5Analyte": "",
            "chemOpt5Result": "",
            "chemOpt5Type": "",
            "chemOpt5RI": "",
            "chemOpt6Analyte": "",
            "chemOpt6Result": "",
            "chemOpt6Type": "",
            "chemOpt6RI": "",
            "chemOpt7Analyte": "",
            "chemOpt7Result": "",
            "chemOpt7Type": "",
            "chemOpt7RI": "",
            "chemOpt8Analyte": "",
            "chemOpt8Result": "",
            "chemOpt8Type": "",
            "chemOpt8RI": "",
            "urnInternal": "",
            "chemSpecimumType": "",
            "chemSerumAppearance": "",
            "chemInterpValue": "",
            "chemInterpReason": "",
            "chemPhValue": ""
          }
        },
        "fqn": "medLabChemistry.tableChem",
        "tableChildren": [
          "tableChem_id",
          "tableChem_day",
          "tableChem_time",
          "chemAccession",
          "chemCollDay",
          "chemCollTime",
          "urinOrderPhys",
          "chemSodium",
          "chemSodiumFlag",
          "chemSodiumRange",
          "chemPotassium",
          "chemPotassiumFlag",
          "chemPotassiumRange",
          "chemChloride",
          "chemChlorideFlag",
          "chemChlorideRange",
          "chemtCO2",
          "chemtCO2Flag",
          "chemtCO2Range",
          "chemAnionGap",
          "chemAnionGapFlag",
          "chemAnionGapRange",
          "chemOsmalityMeasured",
          "chemOsmalityMeasuredFlag",
          "chemOsmalityMeasuredRange",
          "chemOsmalityCalculated",
          "chemOsmalityCalculatedFlag",
          "chemOsmalityCalculatedRange",
          "chemOsmolarGap",
          "chemOsmolarGapFlag",
          "chemOsmolarGapRange",
          "chemGlugoseFastingRandom",
          "chemGlugoseFastingRandomFlag",
          "chemGlugoseFastingRandomRange",
          "chemCreatinine",
          "chemCreatinineFlag",
          "chemCreatinineRange",
          "chemUreaBun",
          "chemUreaBunFlag",
          "chemUreaBunRange",
          "chemCalcium",
          "chemCalciumFlag",
          "chemCalciumRange",
          "chemMagnesium",
          "chemMagnesiumFlag",
          "chemMagnesiumRange",
          "chemPhosphorus",
          "chemPhosphorusFlag",
          "chemPhosphorusRange",
          "chemTotalProtein",
          "chemTotalProteinFlag",
          "chemTotalProteinRange",
          "chemAlbumin",
          "chemAlbuminFlag",
          "chemAlbuminRange",
          "chemOpt1Analyte",
          "chemOpt1Result",
          "chemOpt1Type",
          "chemOpt1RI",
          "chemOpt2Analyte",
          "chemOpt2Result",
          "chemOpt2Type",
          "chemOpt2RI",
          "chemOpt3Analyte",
          "chemOpt3Result",
          "chemOpt3Type",
          "chemOpt3RI",
          "chemOpt4Analyte",
          "chemOpt4Result",
          "chemOpt4Type",
          "chemOpt4RI",
          "chemOpt5Analyte",
          "chemOpt5Result",
          "chemOpt5Type",
          "chemOpt5RI",
          "chemOpt6Analyte",
          "chemOpt6Result",
          "chemOpt6Type",
          "chemOpt6RI",
          "chemOpt7Analyte",
          "chemOpt7Result",
          "chemOpt7Type",
          "chemOpt7RI",
          "chemOpt8Analyte",
          "chemOpt8Result",
          "chemOpt8Type",
          "chemOpt8RI",
          "urnInternal",
          "chemSpecimumType",
          "chemSerumAppearance",
          "chemInterpValue",
          "chemInterpReason",
          "chemPhValue",
          "tableChem_name",
          "tableChem_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "medLabUrinalysis": {
    "pageDataKey": "medLabUrinalysis",
    "pIndex": "46",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "tableUrinalysis_name",
        "formIndex": "2",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "medLabUrinalysis.name"
      },
      {
        "elementKey": "tableUrinalysis_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "tableUrinalysis_profession",
        "formIndex": "2",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "medLabUrinalysis.profession"
      },
      {
        "elementKey": "tableUrinalysis_day",
        "formIndex": "2",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "medLabUrinalysis.day"
      },
      {
        "elementKey": "tableUrinalysis_time",
        "formIndex": "2",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "medLabUrinalysis.time"
      },
      {
        "elementKey": "urinAccession",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "2",
        "fqn": "medLabUrinalysis.urinAccession"
      },
      {
        "elementKey": "urinCollDay",
        "defaultValue": "Today",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "3",
        "fqn": "medLabUrinalysis.urinCollDay"
      },
      {
        "elementKey": "urinCollTime",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "4",
        "fqn": "medLabUrinalysis.urinCollTime"
      },
      {
        "elementKey": "urinOrderPhys",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "5",
        "fqn": "medLabUrinalysis.urinOrderPhys"
      },
      {
        "elementKey": "urinTransparency",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "Clear",
            "text": "Clear"
          },
          {
            "key": "Hazy",
            "text": "Hazy"
          },
          {
            "key": "Cloudy",
            "text": "Cloudy"
          },
          {
            "key": "Turbid",
            "text": "Turbid"
          }
        ],
        "tableColumn": "5",
        "fqn": "medLabUrinalysis.urinTransparency"
      },
      {
        "elementKey": "urinColour",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "Colorless",
            "text": "Colorless"
          },
          {
            "key": "Pale yellow",
            "text": "Pale yellow"
          },
          {
            "key": "Yellow",
            "text": "Yellow"
          },
          {
            "key": "Amber",
            "text": "Amber"
          },
          {
            "key": "Orange",
            "text": "Orange"
          },
          {
            "key": "Red",
            "text": "Red"
          },
          {
            "key": "Pink",
            "text": "Pink"
          },
          {
            "key": "Brown",
            "text": "Brown"
          },
          {
            "key": "Green",
            "text": "Green"
          }
        ],
        "tableColumn": "6",
        "fqn": "medLabUrinalysis.urinColour"
      },
      {
        "elementKey": "label55-25",
        "formIndex": "2",
        "inputType": "formTableHeader",
        "fqn": "medLabUrinalysis.label55-25"
      },
      {
        "elementKey": "label55-26",
        "formIndex": "2",
        "inputType": "formTableHeader",
        "fqn": "medLabUrinalysis.label55-26"
      },
      {
        "elementKey": "label55-27",
        "formIndex": "2",
        "inputType": "formTableHeader",
        "fqn": "medLabUrinalysis.label55-27"
      },
      {
        "elementKey": "label55-28",
        "formIndex": "2",
        "inputType": "formTableHeader",
        "fqn": "medLabUrinalysis.label55-28"
      },
      {
        "elementKey": "label55-29",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-29"
      },
      {
        "elementKey": "uchemManGlucose",
        "formIndex": "2",
        "inputType": "text",
        "suffix": "mmol/L",
        "tableColumn": "7",
        "fqn": "medLabUrinalysis.uchemManGlucose",
        "suffixText": "mmol/L"
      },
      {
        "elementKey": "uchemAutoGlucose",
        "formIndex": "2",
        "inputType": "text",
        "suffix": "mmol/L",
        "tableColumn": "8",
        "fqn": "medLabUrinalysis.uchemAutoGlucose",
        "suffixText": "mmol/L"
      },
      {
        "elementKey": "label55-30",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-30"
      },
      {
        "elementKey": "label55-31",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-31"
      },
      {
        "elementKey": "uchemManBilirubin",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "9",
        "fqn": "medLabUrinalysis.uchemManBilirubin"
      },
      {
        "elementKey": "uchemAutoBilirubin",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "10",
        "fqn": "medLabUrinalysis.uchemAutoBilirubin"
      },
      {
        "elementKey": "label55-32",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-32"
      },
      {
        "elementKey": "label55-33",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-33"
      },
      {
        "elementKey": "uchemManKetone",
        "formIndex": "2",
        "inputType": "text",
        "suffix": "mmol/L",
        "tableColumn": "11",
        "fqn": "medLabUrinalysis.uchemManKetone",
        "suffixText": "mmol/L"
      },
      {
        "elementKey": "uchemAutoKetone",
        "formIndex": "2",
        "inputType": "text",
        "suffix": "mmol/L",
        "tableColumn": "12",
        "fqn": "medLabUrinalysis.uchemAutoKetone",
        "suffixText": "mmol/L"
      },
      {
        "elementKey": "label55-34",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-34"
      },
      {
        "elementKey": "label55-35",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-35"
      },
      {
        "elementKey": "uchemManSpecificGravity",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "13",
        "fqn": "medLabUrinalysis.uchemManSpecificGravity"
      },
      {
        "elementKey": "uchemAutoSpecificGravity",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "14",
        "fqn": "medLabUrinalysis.uchemAutoSpecificGravity"
      },
      {
        "elementKey": "label55-36",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-36"
      },
      {
        "elementKey": "label55-37",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-37"
      },
      {
        "elementKey": "uchemManBlood",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "15",
        "fqn": "medLabUrinalysis.uchemManBlood"
      },
      {
        "elementKey": "uchemAutoBlood",
        "formIndex": "2",
        "inputType": "text",
        "suffix": "Ery/μL",
        "tableColumn": "16",
        "fqn": "medLabUrinalysis.uchemAutoBlood",
        "suffixText": "Ery/μL"
      },
      {
        "elementKey": "label55-38",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-38"
      },
      {
        "elementKey": "label55-39",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-39"
      },
      {
        "elementKey": "uchemManpH",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "17",
        "fqn": "medLabUrinalysis.uchemManpH"
      },
      {
        "elementKey": "uchemAutopH",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "18",
        "fqn": "medLabUrinalysis.uchemAutopH"
      },
      {
        "elementKey": "label55-40",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-40"
      },
      {
        "elementKey": "label55-41",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-41"
      },
      {
        "elementKey": "uchemManProtein",
        "formIndex": "2",
        "inputType": "text",
        "suffix": "g/L",
        "tableColumn": "19",
        "fqn": "medLabUrinalysis.uchemManProtein",
        "suffixText": "g/L"
      },
      {
        "elementKey": "uchemAutoProtein",
        "formIndex": "2",
        "inputType": "text",
        "suffix": "g/L",
        "tableColumn": "20",
        "fqn": "medLabUrinalysis.uchemAutoProtein",
        "suffixText": "g/L"
      },
      {
        "elementKey": "label55-42",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-42"
      },
      {
        "elementKey": "label55-43",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-43"
      },
      {
        "elementKey": "uchemManUrobilinogen",
        "formIndex": "2",
        "inputType": "text",
        "suffix": "μmol/L",
        "tableColumn": "21",
        "fqn": "medLabUrinalysis.uchemManUrobilinogen",
        "suffixText": "μmol/L"
      },
      {
        "elementKey": "uchemAutoUrobilinogen",
        "formIndex": "2",
        "inputType": "text",
        "suffix": "μmol/L",
        "tableColumn": "22",
        "fqn": "medLabUrinalysis.uchemAutoUrobilinogen",
        "suffixText": "μmol/L"
      },
      {
        "elementKey": "label55-44",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-44"
      },
      {
        "elementKey": "label55-45",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-45"
      },
      {
        "elementKey": "uchemManNitrite",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "23",
        "fqn": "medLabUrinalysis.uchemManNitrite"
      },
      {
        "elementKey": "uchemAutoNitrite",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "24",
        "fqn": "medLabUrinalysis.uchemAutoNitrite"
      },
      {
        "elementKey": "label55-46",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-46"
      },
      {
        "elementKey": "label55-47",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-47"
      },
      {
        "elementKey": "uchemManLeukocytes",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "25",
        "fqn": "medLabUrinalysis.uchemManLeukocytes"
      },
      {
        "elementKey": "uchemAutoLeukocytes",
        "formIndex": "2",
        "inputType": "text",
        "suffix": "Leu/μL",
        "tableColumn": "26",
        "fqn": "medLabUrinalysis.uchemAutoLeukocytes",
        "suffixText": "Leu/μL"
      },
      {
        "elementKey": "label55-48",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-48"
      },
      {
        "elementKey": "uchemMicroIndicater",
        "defaultValue": "TRUE",
        "formIndex": "2",
        "inputType": "checkbox",
        "tableColumn": "27",
        "fqn": "medLabUrinalysis.uchemMicroIndicater"
      },
      {
        "elementKey": "urnDiscMA",
        "formIndex": "2",
        "inputType": "textarea",
        "tableColumn": "28",
        "fqn": "medLabUrinalysis.urnDiscMA"
      },
      {
        "elementKey": "uchemInstructorlComment",
        "formIndex": "2",
        "inputType": "textarea",
        "tableColumn": "29",
        "fqn": "medLabUrinalysis.uchemInstructorlComment"
      },
      {
        "elementKey": "uchemSulfosalicylic",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "negative",
            "text": "negative"
          },
          {
            "key": "trace",
            "text": "trace"
          },
          {
            "key": "+1",
            "text": "+1"
          },
          {
            "key": "+2",
            "text": "+2"
          },
          {
            "key": "+3",
            "text": "+3"
          },
          {
            "key": "+4",
            "text": "+4"
          }
        ],
        "tableColumn": "30",
        "fqn": "medLabUrinalysis.uchemSulfosalicylic"
      },
      {
        "elementKey": "uchemIcotest",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "negative",
            "text": "negative"
          },
          {
            "key": "positive",
            "text": "positive"
          }
        ],
        "tableColumn": "31",
        "fqn": "medLabUrinalysis.uchemIcotest"
      },
      {
        "elementKey": "label55-49",
        "formIndex": "2",
        "inputType": "formTableHeader",
        "fqn": "medLabUrinalysis.label55-49"
      },
      {
        "elementKey": "label55-50",
        "formIndex": "2",
        "inputType": "formTableHeader",
        "fqn": "medLabUrinalysis.label55-50"
      },
      {
        "elementKey": "label55-51",
        "formIndex": "2",
        "inputType": "formTableHeader",
        "fqn": "medLabUrinalysis.label55-51"
      },
      {
        "elementKey": "label55-52",
        "formIndex": "2",
        "inputType": "formTableHeader",
        "fqn": "medLabUrinalysis.label55-52"
      },
      {
        "elementKey": "label55-53",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-53"
      },
      {
        "elementKey": "umicroWBC",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "0-1",
            "text": "0-1"
          },
          {
            "key": "2-5",
            "text": "2-5"
          },
          {
            "key": "6-10",
            "text": "6-10"
          },
          {
            "key": "11-20",
            "text": "11-20"
          },
          {
            "key": "21-50",
            "text": "21-50"
          },
          {
            "key": "50+",
            "text": "50+"
          },
          {
            "key": "none",
            "text": "None seen"
          },
          {
            "key": "present",
            "text": "Present"
          },
          {
            "key": "field",
            "text": "Obscures field"
          }
        ],
        "tableColumn": "32",
        "fqn": "medLabUrinalysis.umicroWBC"
      },
      {
        "elementKey": "spacer12",
        "formIndex": "2",
        "inputType": "spacer",
        "fqn": "medLabUrinalysis.spacer12"
      },
      {
        "elementKey": "label55-54",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-54"
      },
      {
        "elementKey": "label55-55",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-55"
      },
      {
        "elementKey": "umicroRBC",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "1",
            "text": "0-1"
          },
          {
            "key": "5",
            "text": "2-5"
          },
          {
            "key": "10",
            "text": "6-10"
          },
          {
            "key": "20",
            "text": "11-20"
          },
          {
            "key": "50",
            "text": "21-50"
          },
          {
            "key": "plus",
            "text": "50+"
          },
          {
            "key": "none",
            "text": "None seen"
          },
          {
            "key": "present",
            "text": "Present"
          },
          {
            "key": "field",
            "text": "Obscures field"
          }
        ],
        "tableColumn": "33",
        "fqn": "medLabUrinalysis.umicroRBC"
      },
      {
        "elementKey": "spacer13",
        "formIndex": "2",
        "inputType": "spacer",
        "fqn": "medLabUrinalysis.spacer13"
      },
      {
        "elementKey": "label55-56",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-56"
      },
      {
        "elementKey": "label55-57",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-57"
      },
      {
        "elementKey": "umicroEpithelial",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "2",
            "text": "0-2"
          },
          {
            "key": "5",
            "text": "3-5"
          },
          {
            "key": "10",
            "text": "6-10"
          },
          {
            "key": "plus",
            "text": "10+"
          },
          {
            "key": "none",
            "text": "None seen"
          },
          {
            "key": "present",
            "text": "Present"
          },
          {
            "key": "field",
            "text": "Obscures field"
          }
        ],
        "tableColumn": "34",
        "fqn": "medLabUrinalysis.umicroEpithelial"
      },
      {
        "elementKey": "umicroTypesEpithelial Cells",
        "formIndex": "2",
        "inputType": "checkset",
        "options": [
          {
            "key": "squamous",
            "text": "Squamous"
          },
          {
            "key": "transitional",
            "text": "Transitional"
          },
          {
            "key": "rte",
            "text": "RTE"
          }
        ],
        "tableColumn": "35",
        "fqn": "medLabUrinalysis.umicroTypesEpithelial Cells"
      },
      {
        "elementKey": "label55-58",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-58"
      },
      {
        "elementKey": "label55-59",
        "formIndex": "2",
        "formCss": "form-table-span-4-rows",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-59"
      },
      {
        "elementKey": "umicrocCastsResults1",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "2",
            "text": "0-2"
          },
          {
            "key": "5",
            "text": "3-5"
          },
          {
            "key": "10",
            "text": "6-10"
          },
          {
            "key": "plus",
            "text": "10+"
          },
          {
            "key": "none",
            "text": "None seen"
          },
          {
            "key": "present",
            "text": "Present"
          },
          {
            "key": "field",
            "text": "Obscures field"
          }
        ],
        "tableColumn": "36",
        "fqn": "medLabUrinalysis.umicrocCastsResults1"
      },
      {
        "elementKey": "umicrocCastsType1",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "Hyaline",
            "text": "Hyaline"
          },
          {
            "key": "Granular",
            "text": "Granular"
          },
          {
            "key": "Epithelial",
            "text": "Epithelial"
          },
          {
            "key": "RBC",
            "text": "RBC"
          },
          {
            "key": "WBC",
            "text": "WBC"
          },
          {
            "key": "Waxy",
            "text": "Waxy"
          },
          {
            "key": "Fatty",
            "text": "Fatty"
          }
        ],
        "tableColumn": "37",
        "fqn": "medLabUrinalysis.umicrocCastsType1"
      },
      {
        "elementKey": "label55-60",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-60"
      },
      {
        "elementKey": "umicrocCastsResults2",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "2",
            "text": "0-2"
          },
          {
            "key": "5",
            "text": "3-5"
          },
          {
            "key": "10",
            "text": "6-10"
          },
          {
            "key": "plus",
            "text": "10+"
          },
          {
            "key": "none",
            "text": "None seen"
          },
          {
            "key": "present",
            "text": "Present"
          },
          {
            "key": "field",
            "text": "Obscures field"
          }
        ],
        "tableColumn": "38",
        "fqn": "medLabUrinalysis.umicrocCastsResults2"
      },
      {
        "elementKey": "umicrocCastsType2",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "Hyaline",
            "text": "Hyaline"
          },
          {
            "key": "Granular",
            "text": "Granular"
          },
          {
            "key": "Epithelial",
            "text": "Epithelial"
          },
          {
            "key": "RBC",
            "text": "RBC"
          },
          {
            "key": "WBC",
            "text": "WBC"
          },
          {
            "key": "Waxy",
            "text": "Waxy"
          },
          {
            "key": "Fatty",
            "text": "Fatty"
          }
        ],
        "tableColumn": "39",
        "fqn": "medLabUrinalysis.umicrocCastsType2"
      },
      {
        "elementKey": "label55-61",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-61"
      },
      {
        "elementKey": "umicrocCastsResults3",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "2",
            "text": "0-2"
          },
          {
            "key": "5",
            "text": "3-5"
          },
          {
            "key": "10",
            "text": "6-10"
          },
          {
            "key": "plus",
            "text": "10+"
          },
          {
            "key": "none",
            "text": "None seen"
          },
          {
            "key": "present",
            "text": "Present"
          },
          {
            "key": "field",
            "text": "Obscures field"
          }
        ],
        "tableColumn": "40",
        "fqn": "medLabUrinalysis.umicrocCastsResults3"
      },
      {
        "elementKey": "umicrocCastsType3",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "Hyaline",
            "text": "Hyaline"
          },
          {
            "key": "Granular",
            "text": "Granular"
          },
          {
            "key": "Epithelial",
            "text": "Epithelial"
          },
          {
            "key": "RBC",
            "text": "RBC"
          },
          {
            "key": "WBC",
            "text": "WBC"
          },
          {
            "key": "Waxy",
            "text": "Waxy"
          },
          {
            "key": "Fatty",
            "text": "Fatty"
          }
        ],
        "tableColumn": "41",
        "fqn": "medLabUrinalysis.umicrocCastsType3"
      },
      {
        "elementKey": "label55-62",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-62"
      },
      {
        "elementKey": "umicrocCastsResults4",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "2",
            "text": "0-2"
          },
          {
            "key": "5",
            "text": "3-5"
          },
          {
            "key": "10",
            "text": "6-10"
          },
          {
            "key": "plus",
            "text": "10+"
          },
          {
            "key": "none",
            "text": "None seen"
          },
          {
            "key": "present",
            "text": "Present"
          },
          {
            "key": "field",
            "text": "Obscures field"
          }
        ],
        "tableColumn": "42",
        "fqn": "medLabUrinalysis.umicrocCastsResults4"
      },
      {
        "elementKey": "umicrocCastsType4",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "Hyaline",
            "text": "Hyaline"
          },
          {
            "key": "Granular",
            "text": "Granular"
          },
          {
            "key": "Epithelial",
            "text": "Epithelial"
          },
          {
            "key": "RBC",
            "text": "RBC"
          },
          {
            "key": "WBC",
            "text": "WBC"
          },
          {
            "key": "Waxy",
            "text": "Waxy"
          },
          {
            "key": "Fatty",
            "text": "Fatty"
          }
        ],
        "tableColumn": "43",
        "fqn": "medLabUrinalysis.umicrocCastsType4"
      },
      {
        "elementKey": "label55-63",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-63"
      },
      {
        "elementKey": "label55-64",
        "formIndex": "2",
        "formCss": "form-table-span-2-rows",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-64"
      },
      {
        "elementKey": "umicroCrystalsNonePresent",
        "formIndex": "2",
        "formCss": "form-table-span-3",
        "inputType": "checkbox",
        "tableColumn": "44",
        "fqn": "medLabUrinalysis.umicroCrystalsNonePresent"
      },
      {
        "elementKey": "umicroCrystalsPresent",
        "formIndex": "2",
        "inputType": "boxcheckset",
        "options": [
          {
            "key": "calciumOxalate",
            "text": "Calcium Oxalate"
          },
          {
            "key": "calciumCarbonate",
            "text": "Calcium carbonate"
          },
          {
            "key": "uricAcid",
            "text": "Uric Acid"
          },
          {
            "key": "calciumPhosphate",
            "text": "Calcium Phosphate"
          },
          {
            "key": "triplePhosphate",
            "text": "Triple Phosphate"
          },
          {
            "key": "amorphousUrates",
            "text": "Amorphous Urates"
          },
          {
            "key": "amorphousPhosphates",
            "text": "Amorphous Phosphates"
          },
          {
            "key": "cystine",
            "text": "Cystine"
          },
          {
            "key": "tyrosine",
            "text": "Tyrosine"
          },
          {
            "key": "cholesterol",
            "text": "Cholesterol"
          },
          {
            "key": "ammoniumBiurate",
            "text": "Ammonium Biurate"
          },
          {
            "key": "hippuricAcid",
            "text": "Hippuric Acid"
          },
          {
            "key": "bilirubin",
            "text": "Bilirubin"
          },
          {
            "key": "leucine",
            "text": "Leucine"
          },
          {
            "key": "sulfonamides",
            "text": "Sulfonamides"
          }
        ],
        "tableColumn": "45",
        "fqn": "medLabUrinalysis.umicroCrystalsPresent"
      },
      {
        "elementKey": "umicroCrystalsObscures",
        "formIndex": "2",
        "inputType": "boxcheckset",
        "options": [
          {
            "key": "calciumOxalate",
            "text": "Calcium Oxalate"
          },
          {
            "key": "calciumCarbonate",
            "text": "Calcium carbonate"
          },
          {
            "key": "uricAcid",
            "text": "Uric Acid"
          },
          {
            "key": "calciumPhosphate",
            "text": "Calcium Phosphate"
          },
          {
            "key": "triplePhosphate",
            "text": "Triple Phosphate"
          },
          {
            "key": "amorphousUrates",
            "text": "Amorphous Urates"
          },
          {
            "key": "amorphousPhosphates",
            "text": "Amorphous Phosphates"
          },
          {
            "key": "cystine",
            "text": "Cystine"
          },
          {
            "key": "tyrosine",
            "text": "Tyrosine"
          },
          {
            "key": "cholesterol",
            "text": "Cholesterol"
          },
          {
            "key": "ammoniumBiurate",
            "text": "Ammonium Biurate"
          },
          {
            "key": "hippuricAcid",
            "text": "Hippuric Acid"
          },
          {
            "key": "bilirubin",
            "text": "Bilirubin"
          },
          {
            "key": "leucine",
            "text": "Leucine"
          },
          {
            "key": "sulfonamides",
            "text": "Sulfonamides"
          }
        ],
        "tableColumn": "46",
        "fqn": "medLabUrinalysis.umicroCrystalsObscures"
      },
      {
        "elementKey": "label55-65",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-65"
      },
      {
        "elementKey": "label55-66",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-66"
      },
      {
        "elementKey": "umicroYeast",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "none",
            "text": "None seen"
          },
          {
            "key": "present",
            "text": "Present"
          },
          {
            "key": "field",
            "text": "Obscures field"
          }
        ],
        "tableColumn": "47",
        "fqn": "medLabUrinalysis.umicroYeast"
      },
      {
        "elementKey": "label55-67",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-67"
      },
      {
        "elementKey": "label55-68",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-68"
      },
      {
        "elementKey": "label55-69",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-69"
      },
      {
        "elementKey": "umicroBacteria",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "none",
            "text": "None seen"
          },
          {
            "key": "present",
            "text": "Present"
          },
          {
            "key": "field",
            "text": "Obscures field"
          }
        ],
        "tableColumn": "48",
        "fqn": "medLabUrinalysis.umicroBacteria"
      },
      {
        "elementKey": "label55-70",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-70"
      },
      {
        "elementKey": "label55-71",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-71"
      },
      {
        "elementKey": "label55-72",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-72"
      },
      {
        "elementKey": "umicroOther",
        "formIndex": "2",
        "inputType": "checkset",
        "options": [
          {
            "key": "mucous",
            "text": "Mucous"
          },
          {
            "key": "sperm",
            "text": "Sperm"
          }
        ],
        "tableColumn": "49",
        "fqn": "medLabUrinalysis.umicroOther"
      },
      {
        "elementKey": "spacer14",
        "formIndex": "2",
        "inputType": "spacer",
        "fqn": "medLabUrinalysis.spacer14"
      },
      {
        "elementKey": "label55-73",
        "formIndex": "2",
        "inputType": "formTableText",
        "fqn": "medLabUrinalysis.label55-73"
      },
      {
        "elementKey": "urnInternal",
        "formIndex": "2",
        "inputType": "textarea",
        "tableColumn": "50",
        "fqn": "medLabUrinalysis.urnInternal"
      },
      {
        "elementKey": "urnDiscCE",
        "formIndex": "2",
        "inputType": "textarea",
        "tableColumn": "51",
        "fqn": "medLabUrinalysis.urnDiscCE"
      },
      {
        "elementKey": "urnInstructor2",
        "formIndex": "2",
        "inputType": "textarea",
        "tableColumn": "52",
        "fqn": "medLabUrinalysis.urnInstructor2"
      },
      {
        "elementKey": "tableQcUrinalysis_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "medLabUrinalysis.name"
      },
      {
        "elementKey": "tableQcUrinalysis_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "tableQcUrinalysis_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "medLabUrinalysis.profession"
      },
      {
        "elementKey": "tableQcUrinalysis_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "medLabUrinalysis.day"
      },
      {
        "elementKey": "tableQcUrinalysis_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "medLabUrinalysis.time"
      },
      {
        "elementKey": "uqcManOrClinitek",
        "formIndex": "1",
        "formCss": "grid-span-2-columns",
        "inputType": "radioset",
        "options": [
          {
            "key": "Manual",
            "text": "Manual"
          },
          {
            "key": "Clinitek",
            "text": "Clinitek"
          }
        ],
        "passToFunction": "[uqcQcType uqcAbnormalRefRangeGlucose  uqcAbnormalRefRangeBilirubin uqcAbnormalRefRangeKetone uqcAbnormalRefRangeBlood uqcAbnormalRefRangeProtein uqcAbnormalRefRangeLeukocytes]",
        "tableColumn": "2",
        "fqn": "medLabUrinalysis.uqcManOrClinitek"
      },
      {
        "elementKey": "uqcMultistixLotNum",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "3",
        "fqn": "medLabUrinalysis.uqcMultistixLotNum"
      },
      {
        "elementKey": "uqcMultistixExp",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "4",
        "fqn": "medLabUrinalysis.uqcMultistixExp"
      },
      {
        "elementKey": "uqcQcType",
        "calculationType": "text",
        "formIndex": "1",
        "formCss": "form-table-span-7 form-table-center-content header-3",
        "inputType": "calculatedText",
        "options": [
          {
            "key": "manual",
            "text": "Manual reading of QC using Multistix 10G"
          },
          {
            "key": "clinitek",
            "text": "Clinitek reading of QC using Multistix 10G"
          }
        ],
        "tableColumn": "5",
        "fqn": "medLabUrinalysis.uqcQcType"
      },
      {
        "elementKey": "label55-74",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-74"
      },
      {
        "elementKey": "label55-75",
        "formIndex": "1",
        "formCss": "form-table-span-3 form-table-center-content",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-75"
      },
      {
        "elementKey": "label55-76",
        "formIndex": "1",
        "formCss": "form-table-span-3 form-table-center-content",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-76"
      },
      {
        "elementKey": "label55-77",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-77"
      },
      {
        "elementKey": "uqcNormalLotNum",
        "formIndex": "1",
        "formCss": "form-table-span-3",
        "inputType": "text",
        "tableColumn": "6",
        "fqn": "medLabUrinalysis.uqcNormalLotNum"
      },
      {
        "elementKey": "uqcAbnormalLotNum",
        "formIndex": "1",
        "formCss": "form-table-span-3",
        "inputType": "text",
        "tableColumn": "7",
        "fqn": "medLabUrinalysis.uqcAbnormalLotNum"
      },
      {
        "elementKey": "label55-78",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-78"
      },
      {
        "elementKey": "uqcNormalExpDate",
        "formIndex": "1",
        "formCss": "form-table-span-3",
        "inputType": "text",
        "tableColumn": "8",
        "fqn": "medLabUrinalysis.uqcNormalExpDate"
      },
      {
        "elementKey": "uqcAbnormalExpDate",
        "formIndex": "1",
        "formCss": "form-table-span-3",
        "inputType": "text",
        "tableColumn": "9",
        "fqn": "medLabUrinalysis.uqcAbnormalExpDate"
      },
      {
        "elementKey": "spacer15",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "medLabUrinalysis.spacer15"
      },
      {
        "elementKey": "label55-79",
        "formIndex": "1",
        "formCss": "form-table-span-2 form-table-center-content",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-79"
      },
      {
        "elementKey": "label55-80",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-80"
      },
      {
        "elementKey": "label55-81",
        "formIndex": "1",
        "formCss": "form-table-span-2 form-table-center-content",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-81"
      },
      {
        "elementKey": "label55-82",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-82"
      },
      {
        "elementKey": "spacer16",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "medLabUrinalysis.spacer16"
      },
      {
        "elementKey": "label55-83",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-83"
      },
      {
        "elementKey": "label55-84",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-84"
      },
      {
        "elementKey": "spacer17",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "medLabUrinalysis.spacer17"
      },
      {
        "elementKey": "label55-85",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-85"
      },
      {
        "elementKey": "label55-86",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-86"
      },
      {
        "elementKey": "spacer18",
        "formIndex": "1",
        "inputType": "spacer",
        "fqn": "medLabUrinalysis.spacer18"
      },
      {
        "elementKey": "label55-87",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-87"
      },
      {
        "elementKey": "uqcNormalRunGlucose",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "10",
        "fqn": "medLabUrinalysis.uqcNormalRunGlucose"
      },
      {
        "elementKey": "uqcNormalRepeatGlucose",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "11",
        "fqn": "medLabUrinalysis.uqcNormalRepeatGlucose"
      },
      {
        "elementKey": "label55-88",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-88"
      },
      {
        "elementKey": "uqcAbnormalRunGlucose",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "12",
        "fqn": "medLabUrinalysis.uqcAbnormalRunGlucose"
      },
      {
        "elementKey": "uqcAbnormalRepeatGlucose",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "13",
        "fqn": "medLabUrinalysis.uqcAbnormalRepeatGlucose"
      },
      {
        "elementKey": "uqcAbnormalRefRangeGlucose",
        "calculationType": "text",
        "formIndex": "1",
        "inputType": "calculatedText",
        "options": [
          {
            "key": "manual",
            "text": ">= 5.5 mmol/L"
          },
          {
            "key": "clinitek",
            "text": ">= 3 mmol/L"
          }
        ],
        "fqn": "medLabUrinalysis.uqcAbnormalRefRangeGlucose"
      },
      {
        "elementKey": "label55-89",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-89"
      },
      {
        "elementKey": "uqcNormalRunBilirubin",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "14",
        "fqn": "medLabUrinalysis.uqcNormalRunBilirubin"
      },
      {
        "elementKey": "uqcNormalRepeatBilirubin",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "15",
        "fqn": "medLabUrinalysis.uqcNormalRepeatBilirubin"
      },
      {
        "elementKey": "label55-90",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-90"
      },
      {
        "elementKey": "uqcAbnormalRunBilirubin",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "16",
        "fqn": "medLabUrinalysis.uqcAbnormalRunBilirubin"
      },
      {
        "elementKey": "uqcAbnormalRepeatBilirubin",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "17",
        "fqn": "medLabUrinalysis.uqcAbnormalRepeatBilirubin"
      },
      {
        "elementKey": "uqcAbnormalRefRangeBilirubin",
        "calculationType": "text",
        "formIndex": "1",
        "inputType": "calculatedText",
        "options": [
          {
            "key": "manual",
            "text": "Small to Large"
          },
          {
            "key": "clinitek",
            "text": ">= Small"
          }
        ],
        "fqn": "medLabUrinalysis.uqcAbnormalRefRangeBilirubin"
      },
      {
        "elementKey": "label55-91",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-91"
      },
      {
        "elementKey": "uqcNormalRunKetone",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "18",
        "fqn": "medLabUrinalysis.uqcNormalRunKetone"
      },
      {
        "elementKey": "uqcNormalRepeatKetone",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "19",
        "fqn": "medLabUrinalysis.uqcNormalRepeatKetone"
      },
      {
        "elementKey": "label55-92",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-92"
      },
      {
        "elementKey": "uqcAbnormalRunKetone",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "20",
        "fqn": "medLabUrinalysis.uqcAbnormalRunKetone"
      },
      {
        "elementKey": "uqcAbnormalRepeatKetone",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "21",
        "fqn": "medLabUrinalysis.uqcAbnormalRepeatKetone"
      },
      {
        "elementKey": "uqcAbnormalRefRangeKetone",
        "calculationType": "text",
        "formIndex": "1",
        "inputType": "calculatedText",
        "options": [
          {
            "key": "manual",
            "text": ">= 0.5 mmol/L"
          },
          {
            "key": "clinitek",
            "text": ">= trace mmol/L"
          }
        ],
        "fqn": "medLabUrinalysis.uqcAbnormalRefRangeKetone"
      },
      {
        "elementKey": "label55-93",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-93"
      },
      {
        "elementKey": "uqcNormalRunSpecific Gravity",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "22",
        "fqn": "medLabUrinalysis.uqcNormalRunSpecific Gravity"
      },
      {
        "elementKey": "uqcNormalRepeatSpecific Gravity",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "23",
        "fqn": "medLabUrinalysis.uqcNormalRepeatSpecific Gravity"
      },
      {
        "elementKey": "label55-94",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-94"
      },
      {
        "elementKey": "uqcAbnormalRunSpecific Gravity",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "24",
        "fqn": "medLabUrinalysis.uqcAbnormalRunSpecific Gravity"
      },
      {
        "elementKey": "uqcAbnormalRepeatSpecific Gravity",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "25",
        "fqn": "medLabUrinalysis.uqcAbnormalRepeatSpecific Gravity"
      },
      {
        "elementKey": "label55-95",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-95"
      },
      {
        "elementKey": "label55-96",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-96"
      },
      {
        "elementKey": "uqcNormalRunBlood",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "26",
        "fqn": "medLabUrinalysis.uqcNormalRunBlood"
      },
      {
        "elementKey": "uqcNormalRepeatBlood",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "27",
        "fqn": "medLabUrinalysis.uqcNormalRepeatBlood"
      },
      {
        "elementKey": "label55-97",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-97"
      },
      {
        "elementKey": "uqcAbnormalRunBlood",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "28",
        "fqn": "medLabUrinalysis.uqcAbnormalRunBlood"
      },
      {
        "elementKey": "uqcAbnormalRepeatBlood",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "29",
        "fqn": "medLabUrinalysis.uqcAbnormalRepeatBlood"
      },
      {
        "elementKey": "uqcAbnormalRefRangeBlood",
        "calculationType": "text",
        "formIndex": "1",
        "inputType": "calculatedText",
        "options": [
          {
            "key": "manual",
            "text": ">= Small"
          },
          {
            "key": "clinitek",
            "text": ">= 25 Ery/μL"
          }
        ],
        "fqn": "medLabUrinalysis.uqcAbnormalRefRangeBlood"
      },
      {
        "elementKey": "label55-98",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-98"
      },
      {
        "elementKey": "uqcNormalRunpH",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "30",
        "fqn": "medLabUrinalysis.uqcNormalRunpH"
      },
      {
        "elementKey": "uqcNormalRepeatpH",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "31",
        "fqn": "medLabUrinalysis.uqcNormalRepeatpH"
      },
      {
        "elementKey": "label55-99",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-99"
      },
      {
        "elementKey": "uqcAbnormalRunpH",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "32",
        "fqn": "medLabUrinalysis.uqcAbnormalRunpH"
      },
      {
        "elementKey": "uqcAbnormalRepeatpH",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "33",
        "fqn": "medLabUrinalysis.uqcAbnormalRepeatpH"
      },
      {
        "elementKey": "label55-100",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-100"
      },
      {
        "elementKey": "label55-101",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-101"
      },
      {
        "elementKey": "uqcNormalRunProtein",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "34",
        "fqn": "medLabUrinalysis.uqcNormalRunProtein"
      },
      {
        "elementKey": "uqcNormalRepeatProtein",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "35",
        "fqn": "medLabUrinalysis.uqcNormalRepeatProtein"
      },
      {
        "elementKey": "label55-102",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-102"
      },
      {
        "elementKey": "uqcAbnormalRunProtein",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "36",
        "fqn": "medLabUrinalysis.uqcAbnormalRunProtein"
      },
      {
        "elementKey": "uqcAbnormalRepeatProtein",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "37",
        "fqn": "medLabUrinalysis.uqcAbnormalRepeatProtein"
      },
      {
        "elementKey": "uqcAbnormalRefRangeProtein",
        "calculationType": "text",
        "formIndex": "1",
        "inputType": "calculatedText",
        "options": [
          {
            "key": "manual",
            "text": ">= 0.3 g/L"
          },
          {
            "key": "clinitek",
            "text": ">= 1.0 g/L"
          }
        ],
        "fqn": "medLabUrinalysis.uqcAbnormalRefRangeProtein"
      },
      {
        "elementKey": "label55-103",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-103"
      },
      {
        "elementKey": "uqcNormalRunUrobilinogen",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "38",
        "fqn": "medLabUrinalysis.uqcNormalRunUrobilinogen"
      },
      {
        "elementKey": "uqcNormalRepeatUrobilinogen",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "39",
        "fqn": "medLabUrinalysis.uqcNormalRepeatUrobilinogen"
      },
      {
        "elementKey": "label55-104",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-104"
      },
      {
        "elementKey": "uqcAbnormalRunUrobilinogen",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "40",
        "fqn": "medLabUrinalysis.uqcAbnormalRunUrobilinogen"
      },
      {
        "elementKey": "uqcAbnormalRepeatUrobilinogen",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "41",
        "fqn": "medLabUrinalysis.uqcAbnormalRepeatUrobilinogen"
      },
      {
        "elementKey": "label55-105",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-105"
      },
      {
        "elementKey": "label55-106",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-106"
      },
      {
        "elementKey": "uqcNormalRunNitrite",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "42",
        "fqn": "medLabUrinalysis.uqcNormalRunNitrite"
      },
      {
        "elementKey": "uqcNormalRepeatNitrite",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "43",
        "fqn": "medLabUrinalysis.uqcNormalRepeatNitrite"
      },
      {
        "elementKey": "label55-107",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-107"
      },
      {
        "elementKey": "uqcAbnormalRunNitrite",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "44",
        "fqn": "medLabUrinalysis.uqcAbnormalRunNitrite"
      },
      {
        "elementKey": "uqcAbnormalRepeatNitrite",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "45",
        "fqn": "medLabUrinalysis.uqcAbnormalRepeatNitrite"
      },
      {
        "elementKey": "label55-108",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-108"
      },
      {
        "elementKey": "label55-109",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-109"
      },
      {
        "elementKey": "uqcNormalRunLeukocytes",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "46",
        "fqn": "medLabUrinalysis.uqcNormalRunLeukocytes"
      },
      {
        "elementKey": "uqcNormalRepeatLeukocytes",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "47",
        "fqn": "medLabUrinalysis.uqcNormalRepeatLeukocytes"
      },
      {
        "elementKey": "label55-110",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-110"
      },
      {
        "elementKey": "uqcAbnormalRunLeukocytes",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "48",
        "fqn": "medLabUrinalysis.uqcAbnormalRunLeukocytes"
      },
      {
        "elementKey": "uqcAbnormalRepeatLeukocytes",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "49",
        "fqn": "medLabUrinalysis.uqcAbnormalRepeatLeukocytes"
      },
      {
        "elementKey": "uqcAbnormalRefRangeLeukocytes",
        "calculationType": "text",
        "formIndex": "1",
        "inputType": "calculatedText",
        "options": [
          {
            "key": "manual",
            "text": ">= Small"
          },
          {
            "key": "clinitek",
            "text": ">= 70 Leu//μL"
          }
        ],
        "fqn": "medLabUrinalysis.uqcAbnormalRefRangeLeukocytes"
      },
      {
        "elementKey": "uqcPerformedBy",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "50",
        "fqn": "medLabUrinalysis.uqcPerformedBy"
      },
      {
        "elementKey": "label55-111",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-111"
      },
      {
        "elementKey": "uqcSomeQcUnacceptable",
        "formIndex": "1",
        "formCss": "uqcSomeQcUnacceptable",
        "inputType": "radioset",
        "options": [
          {
            "key": "Yes",
            "text": "Yes"
          },
          {
            "key": "No",
            "text": "No"
          }
        ],
        "tableColumn": "51",
        "fqn": "medLabUrinalysis.uqcSomeQcUnacceptable"
      },
      {
        "elementKey": "label55-112",
        "formIndex": "1",
        "formCss": "grid-span-2-columns",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-112"
      },
      {
        "elementKey": "label55-113",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-113"
      },
      {
        "elementKey": "label55-114",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabUrinalysis.label55-114"
      },
      {
        "elementKey": "uqcPendAnal_1",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "52",
        "fqn": "medLabUrinalysis.uqcPendAnal_1"
      },
      {
        "elementKey": "uqcPendResult_1",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "53",
        "fqn": "medLabUrinalysis.uqcPendResult_1"
      },
      {
        "elementKey": "uqcPendAnal_2",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "54",
        "fqn": "medLabUrinalysis.uqcPendAnal_2"
      },
      {
        "elementKey": "uqcPendResult_2",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "55",
        "fqn": "medLabUrinalysis.uqcPendResult_2"
      },
      {
        "elementKey": "uqcPendAnal_3",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "56",
        "fqn": "medLabUrinalysis.uqcPendAnal_3"
      },
      {
        "elementKey": "uqcPendResult_3",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "57",
        "fqn": "medLabUrinalysis.uqcPendResult_3"
      },
      {
        "elementKey": "uqcPendAnal_4",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "58",
        "fqn": "medLabUrinalysis.uqcPendAnal_4"
      },
      {
        "elementKey": "uqcPendResult_4",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "59",
        "fqn": "medLabUrinalysis.uqcPendResult_4"
      }
    ],
    "pageElements": {
      "tableQcUrinalysis": {
        "elementKey": "tableQcUrinalysis",
        "pageElementIndex": "1",
        "pageKey": "medLabUrinalysis",
        "tableKey": "tableQcUrinalysis",
        "isTable": true,
        "form": {
          "elementKey": "tableQcUrinalysis",
          "label": "Urinalysis QC",
          "addButtonText": "Create a urinalysis QC report",
          "formKey": "tableQcUrinalysis",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "medLabUrinalysis.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "tableQcUrinalysis_name",
                "tableQcUrinalysis_profession",
                "tableQcUrinalysis_day",
                "tableQcUrinalysis_time"
              ]
            },
            {
              "elementKey": "cGroup46-2",
              "formCss": "grid-left-to-right-2",
              "fqn": "medLabUrinalysis.cGroup46-2",
              "gIndex": "2",
              "gChildren": [
                "uqcManOrClinitek",
                "uqcMultistixLotNum",
                "uqcMultistixExp"
              ]
            },
            {
              "elementKey": "cGroup46-3",
              "formCss": "med-lab-urin-qc-table form-table-group",
              "fqn": "medLabUrinalysis.cGroup46-3",
              "gIndex": "3",
              "gChildren": [
                "uqcQcType",
                "label55-74",
                "label55-75",
                "label55-76",
                "label55-77",
                "uqcNormalLotNum",
                "uqcAbnormalLotNum",
                "label55-78",
                "uqcNormalExpDate",
                "uqcAbnormalExpDate",
                "spacer15",
                "label55-79",
                "label55-80",
                "label55-81",
                "label55-82",
                "spacer16",
                "label55-83",
                "label55-84",
                "spacer17",
                "label55-85",
                "label55-86",
                "spacer18",
                "label55-87",
                "uqcNormalRunGlucose",
                "uqcNormalRepeatGlucose",
                "label55-88",
                "uqcAbnormalRunGlucose",
                "uqcAbnormalRepeatGlucose",
                "uqcAbnormalRefRangeGlucose",
                "label55-89",
                "uqcNormalRunBilirubin",
                "uqcNormalRepeatBilirubin",
                "label55-90",
                "uqcAbnormalRunBilirubin",
                "uqcAbnormalRepeatBilirubin",
                "uqcAbnormalRefRangeBilirubin",
                "label55-91",
                "uqcNormalRunKetone",
                "uqcNormalRepeatKetone",
                "label55-92",
                "uqcAbnormalRunKetone",
                "uqcAbnormalRepeatKetone",
                "uqcAbnormalRefRangeKetone",
                "label55-93",
                "uqcNormalRunSpecific Gravity",
                "uqcNormalRepeatSpecific Gravity",
                "label55-94",
                "uqcAbnormalRunSpecific Gravity",
                "uqcAbnormalRepeatSpecific Gravity",
                "label55-95",
                "label55-96",
                "uqcNormalRunBlood",
                "uqcNormalRepeatBlood",
                "label55-97",
                "uqcAbnormalRunBlood",
                "uqcAbnormalRepeatBlood",
                "uqcAbnormalRefRangeBlood",
                "label55-98",
                "uqcNormalRunpH",
                "uqcNormalRepeatpH",
                "label55-99",
                "uqcAbnormalRunpH",
                "uqcAbnormalRepeatpH",
                "label55-100",
                "label55-101",
                "uqcNormalRunProtein",
                "uqcNormalRepeatProtein",
                "label55-102",
                "uqcAbnormalRunProtein",
                "uqcAbnormalRepeatProtein",
                "uqcAbnormalRefRangeProtein",
                "label55-103",
                "uqcNormalRunUrobilinogen",
                "uqcNormalRepeatUrobilinogen",
                "label55-104",
                "uqcAbnormalRunUrobilinogen",
                "uqcAbnormalRepeatUrobilinogen",
                "label55-105",
                "label55-106",
                "uqcNormalRunNitrite",
                "uqcNormalRepeatNitrite",
                "label55-107",
                "uqcAbnormalRunNitrite",
                "uqcAbnormalRepeatNitrite",
                "label55-108",
                "label55-109",
                "uqcNormalRunLeukocytes",
                "uqcNormalRepeatLeukocytes",
                "label55-110",
                "uqcAbnormalRunLeukocytes",
                "uqcAbnormalRepeatLeukocytes",
                "uqcAbnormalRefRangeLeukocytes"
              ]
            },
            {
              "elementKey": "cGroup46-4",
              "formCss": "grid-left-to-right-1",
              "fqn": "medLabUrinalysis.cGroup46-4",
              "gIndex": "4",
              "gChildren": [
                "uqcPerformedBy",
                "label55-111",
                "uqcSomeQcUnacceptable"
              ]
            },
            {
              "elementKey": "cGroup46-5",
              "formCss": "med-lab-urin-qc-pending-table form-table-group",
              "fqn": "medLabUrinalysis.cGroup46-5",
              "gIndex": "5",
              "gChildren": [
                "label55-112",
                "label55-113",
                "label55-114",
                "uqcPendAnal_1",
                "uqcPendResult_1",
                "uqcPendAnal_2",
                "uqcPendResult_2",
                "uqcPendAnal_3",
                "uqcPendResult_3",
                "uqcPendAnal_4",
                "uqcPendResult_4"
              ]
            }
          ],
          "ehr_data": {
            "tableQcUrinalysis_name": "",
            "tableQcUrinalysis_profession": "",
            "tableQcUrinalysis_day": "",
            "tableQcUrinalysis_time": "",
            "uqcManOrClinitek": "",
            "uqcMultistixLotNum": "",
            "uqcMultistixExp": "",
            "uqcQcType": "",
            "uqcNormalLotNum": "",
            "uqcAbnormalLotNum": "",
            "uqcNormalExpDate": "",
            "uqcAbnormalExpDate": "",
            "uqcNormalRunGlucose": "",
            "uqcNormalRepeatGlucose": "",
            "uqcAbnormalRunGlucose": "",
            "uqcAbnormalRepeatGlucose": "",
            "uqcAbnormalRefRangeGlucose": "",
            "uqcNormalRunBilirubin": "",
            "uqcNormalRepeatBilirubin": "",
            "uqcAbnormalRunBilirubin": "",
            "uqcAbnormalRepeatBilirubin": "",
            "uqcAbnormalRefRangeBilirubin": "",
            "uqcNormalRunKetone": "",
            "uqcNormalRepeatKetone": "",
            "uqcAbnormalRunKetone": "",
            "uqcAbnormalRepeatKetone": "",
            "uqcAbnormalRefRangeKetone": "",
            "uqcNormalRunSpecific Gravity": "",
            "uqcNormalRepeatSpecific Gravity": "",
            "uqcAbnormalRunSpecific Gravity": "",
            "uqcAbnormalRepeatSpecific Gravity": "",
            "uqcNormalRunBlood": "",
            "uqcNormalRepeatBlood": "",
            "uqcAbnormalRunBlood": "",
            "uqcAbnormalRepeatBlood": "",
            "uqcAbnormalRefRangeBlood": "",
            "uqcNormalRunpH": "",
            "uqcNormalRepeatpH": "",
            "uqcAbnormalRunpH": "",
            "uqcAbnormalRepeatpH": "",
            "uqcNormalRunProtein": "",
            "uqcNormalRepeatProtein": "",
            "uqcAbnormalRunProtein": "",
            "uqcAbnormalRepeatProtein": "",
            "uqcAbnormalRefRangeProtein": "",
            "uqcNormalRunUrobilinogen": "",
            "uqcNormalRepeatUrobilinogen": "",
            "uqcAbnormalRunUrobilinogen": "",
            "uqcAbnormalRepeatUrobilinogen": "",
            "uqcNormalRunNitrite": "",
            "uqcNormalRepeatNitrite": "",
            "uqcAbnormalRunNitrite": "",
            "uqcAbnormalRepeatNitrite": "",
            "uqcNormalRunLeukocytes": "",
            "uqcNormalRepeatLeukocytes": "",
            "uqcAbnormalRunLeukocytes": "",
            "uqcAbnormalRepeatLeukocytes": "",
            "uqcAbnormalRefRangeLeukocytes": "",
            "uqcPerformedBy": "",
            "uqcSomeQcUnacceptable": "",
            "uqcPendAnal_1": "",
            "uqcPendResult_1": "",
            "uqcPendAnal_2": "",
            "uqcPendResult_2": "",
            "uqcPendAnal_3": "",
            "uqcPendResult_3": "",
            "uqcPendAnal_4": "",
            "uqcPendResult_4": ""
          }
        },
        "fqn": "medLabUrinalysis.tableQcUrinalysis",
        "tableChildren": [
          "tableQcUrinalysis_id",
          "tableQcUrinalysis_day",
          "tableQcUrinalysis_time",
          "uqcManOrClinitek",
          "uqcMultistixLotNum",
          "uqcMultistixExp",
          "uqcQcType",
          "uqcNormalLotNum",
          "uqcAbnormalLotNum",
          "uqcNormalExpDate",
          "uqcAbnormalExpDate",
          "uqcNormalRunGlucose",
          "uqcNormalRepeatGlucose",
          "uqcAbnormalRunGlucose",
          "uqcAbnormalRepeatGlucose",
          "uqcNormalRunBilirubin",
          "uqcNormalRepeatBilirubin",
          "uqcAbnormalRunBilirubin",
          "uqcAbnormalRepeatBilirubin",
          "uqcNormalRunKetone",
          "uqcNormalRepeatKetone",
          "uqcAbnormalRunKetone",
          "uqcAbnormalRepeatKetone",
          "uqcNormalRunSpecific Gravity",
          "uqcNormalRepeatSpecific Gravity",
          "uqcAbnormalRunSpecific Gravity",
          "uqcAbnormalRepeatSpecific Gravity",
          "uqcNormalRunBlood",
          "uqcNormalRepeatBlood",
          "uqcAbnormalRunBlood",
          "uqcAbnormalRepeatBlood",
          "uqcNormalRunpH",
          "uqcNormalRepeatpH",
          "uqcAbnormalRunpH",
          "uqcAbnormalRepeatpH",
          "uqcNormalRunProtein",
          "uqcNormalRepeatProtein",
          "uqcAbnormalRunProtein",
          "uqcAbnormalRepeatProtein",
          "uqcNormalRunUrobilinogen",
          "uqcNormalRepeatUrobilinogen",
          "uqcAbnormalRunUrobilinogen",
          "uqcAbnormalRepeatUrobilinogen",
          "uqcNormalRunNitrite",
          "uqcNormalRepeatNitrite",
          "uqcAbnormalRunNitrite",
          "uqcAbnormalRepeatNitrite",
          "uqcNormalRunLeukocytes",
          "uqcNormalRepeatLeukocytes",
          "uqcAbnormalRunLeukocytes",
          "uqcAbnormalRepeatLeukocytes",
          "uqcPerformedBy",
          "uqcSomeQcUnacceptable",
          "uqcPendAnal_1",
          "uqcPendResult_1",
          "uqcPendAnal_2",
          "uqcPendResult_2",
          "uqcPendAnal_3",
          "uqcPendResult_3",
          "uqcPendAnal_4",
          "uqcPendResult_4",
          "tableQcUrinalysis_name",
          "tableQcUrinalysis_profession"
        ],
        "hasRecHeader": true
      },
      "tableUrinalysis": {
        "elementKey": "tableUrinalysis",
        "pageElementIndex": "2",
        "pageKey": "medLabUrinalysis",
        "tableKey": "tableUrinalysis",
        "isTable": true,
        "form": {
          "elementKey": "tableUrinalysis",
          "label": "Urinalysis",
          "addButtonText": "Create a urinalysis report",
          "formKey": "tableUrinalysis",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "medLabUrinalysis.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "tableUrinalysis_name",
                "tableUrinalysis_profession",
                "tableUrinalysis_day",
                "tableUrinalysis_time"
              ]
            },
            {
              "elementKey": "cGroup46-2",
              "formCss": "grid-left-to-right-3",
              "fqn": "medLabUrinalysis.cGroup46-2",
              "gIndex": "2",
              "gChildren": [
                "urinAccession",
                "urinCollDay",
                "urinCollTime",
                "urinOrderPhys"
              ]
            },
            {
              "elementKey": "cGroup46-3",
              "formCss": "grid-left-to-right-2",
              "fqn": "medLabUrinalysis.cGroup46-3",
              "gIndex": "3",
              "gChildren": [
                "urinTransparency",
                "urinColour"
              ]
            },
            {
              "elementKey": "cGroup46-4",
              "formCss": "urin-macro-exam form-table-group",
              "fqn": "medLabUrinalysis.cGroup46-4",
              "gIndex": "4",
              "gChildren": [
                "label55-25",
                "label55-26",
                "label55-27",
                "label55-28",
                "label55-29",
                "uchemManGlucose",
                "uchemAutoGlucose",
                "label55-30",
                "label55-31",
                "uchemManBilirubin",
                "uchemAutoBilirubin",
                "label55-32",
                "label55-33",
                "uchemManKetone",
                "uchemAutoKetone",
                "label55-34",
                "label55-35",
                "uchemManSpecificGravity",
                "uchemAutoSpecificGravity",
                "label55-36",
                "label55-37",
                "uchemManBlood",
                "uchemAutoBlood",
                "label55-38",
                "label55-39",
                "uchemManpH",
                "uchemAutopH",
                "label55-40",
                "label55-41",
                "uchemManProtein",
                "uchemAutoProtein",
                "label55-42",
                "label55-43",
                "uchemManUrobilinogen",
                "uchemAutoUrobilinogen",
                "label55-44",
                "label55-45",
                "uchemManNitrite",
                "uchemAutoNitrite",
                "label55-46",
                "label55-47",
                "uchemManLeukocytes",
                "uchemAutoLeukocytes",
                "label55-48"
              ]
            },
            {
              "elementKey": "cGroup46-5",
              "formCss": "grid-left-to-right-1",
              "fqn": "medLabUrinalysis.cGroup46-5",
              "gIndex": "5",
              "gChildren": [
                "uchemMicroIndicater",
                "urnDiscMA",
                "uchemInstructorlComment"
              ]
            },
            {
              "elementKey": "cGroup46-6",
              "formCss": "grid-left-to-right-1",
              "fqn": "medLabUrinalysis.cGroup46-6",
              "gIndex": "6",
              "gChildren": [
                "uchemSulfosalicylic",
                "uchemIcotest"
              ]
            },
            {
              "elementKey": "cGroup46-7",
              "formCss": "med-lab-urin-micro form-table-group",
              "fqn": "medLabUrinalysis.cGroup46-7",
              "gIndex": "7",
              "gChildren": [
                "label55-49",
                "label55-50",
                "label55-51",
                "label55-52",
                "label55-53",
                "umicroWBC",
                "spacer12",
                "label55-54",
                "label55-55",
                "umicroRBC",
                "spacer13",
                "label55-56",
                "label55-57",
                "umicroEpithelial",
                "umicroTypesEpithelial Cells",
                "label55-58",
                "label55-59",
                "umicrocCastsResults1",
                "umicrocCastsType1",
                "label55-60",
                "umicrocCastsResults2",
                "umicrocCastsType2",
                "label55-61",
                "umicrocCastsResults3",
                "umicrocCastsType3",
                "label55-62",
                "umicrocCastsResults4",
                "umicrocCastsType4",
                "label55-63",
                "label55-64",
                "umicroCrystalsNonePresent",
                "umicroCrystalsPresent",
                "umicroCrystalsObscures",
                "label55-65",
                "label55-66",
                "umicroYeast",
                "label55-67",
                "label55-68",
                "label55-69",
                "umicroBacteria",
                "label55-70",
                "label55-71",
                "label55-72",
                "umicroOther",
                "spacer14",
                "label55-73"
              ]
            },
            {
              "elementKey": "cGroup46-8",
              "formCss": "grid-left-to-right-1",
              "fqn": "medLabUrinalysis.cGroup46-8",
              "gIndex": "8",
              "gChildren": [
                "urnInternal",
                "urnDiscCE",
                "urnInstructor2"
              ]
            }
          ],
          "ehr_data": {
            "tableUrinalysis_name": "",
            "tableUrinalysis_profession": "",
            "tableUrinalysis_day": "",
            "tableUrinalysis_time": "",
            "urinAccession": "",
            "urinCollDay": "Today",
            "urinCollTime": "",
            "urinOrderPhys": "",
            "urinTransparency": "",
            "urinColour": "",
            "uchemManGlucose": "",
            "uchemAutoGlucose": "",
            "uchemManBilirubin": "",
            "uchemAutoBilirubin": "",
            "uchemManKetone": "",
            "uchemAutoKetone": "",
            "uchemManSpecificGravity": "",
            "uchemAutoSpecificGravity": "",
            "uchemManBlood": "",
            "uchemAutoBlood": "",
            "uchemManpH": "",
            "uchemAutopH": "",
            "uchemManProtein": "",
            "uchemAutoProtein": "",
            "uchemManUrobilinogen": "",
            "uchemAutoUrobilinogen": "",
            "uchemManNitrite": "",
            "uchemAutoNitrite": "",
            "uchemManLeukocytes": "",
            "uchemAutoLeukocytes": "",
            "uchemMicroIndicater": "TRUE",
            "urnDiscMA": "",
            "uchemInstructorlComment": "",
            "uchemSulfosalicylic": "",
            "uchemIcotest": "",
            "umicroWBC": "",
            "umicroRBC": "",
            "umicroEpithelial": "",
            "umicroTypesEpithelial Cells": "",
            "umicrocCastsResults1": "",
            "umicrocCastsType1": "",
            "umicrocCastsResults2": "",
            "umicrocCastsType2": "",
            "umicrocCastsResults3": "",
            "umicrocCastsType3": "",
            "umicrocCastsResults4": "",
            "umicrocCastsType4": "",
            "umicroCrystalsNonePresent": "",
            "umicroCrystalsPresent": "",
            "umicroCrystalsObscures": "",
            "umicroYeast": "",
            "umicroBacteria": "",
            "umicroOther": "",
            "urnInternal": "",
            "urnDiscCE": "",
            "urnInstructor2": ""
          }
        },
        "fqn": "medLabUrinalysis.tableUrinalysis",
        "tableChildren": [
          "tableUrinalysis_id",
          "tableUrinalysis_day",
          "tableUrinalysis_time",
          "urinAccession",
          "urinCollDay",
          "urinCollTime",
          "urinOrderPhys",
          "urinTransparency",
          "urinColour",
          "uchemManGlucose",
          "uchemAutoGlucose",
          "uchemManBilirubin",
          "uchemAutoBilirubin",
          "uchemManKetone",
          "uchemAutoKetone",
          "uchemManSpecificGravity",
          "uchemAutoSpecificGravity",
          "uchemManBlood",
          "uchemAutoBlood",
          "uchemManpH",
          "uchemAutopH",
          "uchemManProtein",
          "uchemAutoProtein",
          "uchemManUrobilinogen",
          "uchemAutoUrobilinogen",
          "uchemManNitrite",
          "uchemAutoNitrite",
          "uchemManLeukocytes",
          "uchemAutoLeukocytes",
          "uchemMicroIndicater",
          "urnDiscMA",
          "uchemInstructorlComment",
          "uchemSulfosalicylic",
          "uchemIcotest",
          "umicroWBC",
          "umicroRBC",
          "umicroEpithelial",
          "umicroTypesEpithelial Cells",
          "umicrocCastsResults1",
          "umicrocCastsType1",
          "umicrocCastsResults2",
          "umicrocCastsType2",
          "umicrocCastsResults3",
          "umicrocCastsType3",
          "umicrocCastsResults4",
          "umicrocCastsType4",
          "umicroCrystalsNonePresent",
          "umicroCrystalsPresent",
          "umicroCrystalsObscures",
          "umicroYeast",
          "umicroBacteria",
          "umicroOther",
          "urnInternal",
          "urnDiscCE",
          "urnInstructor2",
          "tableUrinalysis_name",
          "tableUrinalysis_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "orderSets": {
    "pageDataKey": "orderSets",
    "pIndex": "48",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "insulinOrderSets_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "orderSets.name"
      },
      {
        "elementKey": "insulinOrderSets_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "insulinOrderSets_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "orderSets.profession"
      },
      {
        "elementKey": "insulinOrderSets_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "orderSets.day"
      },
      {
        "elementKey": "insulinOrderSets_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "orderSets.time"
      },
      {
        "elementKey": "insulinOrderSetForm",
        "formIndex": "1",
        "formOption": "insulin-orders",
        "inputType": "custom_form",
        "tableColumn": "2",
        "fqn": "orderSets.insulinOrderSetForm"
      },
      {
        "elementKey": "preprintOrderSet_name",
        "formIndex": "2",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "orderSets.name"
      },
      {
        "elementKey": "preprintOrderSet_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "preprintOrderSet_profession",
        "formIndex": "2",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "orderSets.profession"
      },
      {
        "elementKey": "preprintOrderSet_day",
        "formIndex": "2",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "orderSets.day"
      },
      {
        "elementKey": "preprintOrderSet_time",
        "formIndex": "2",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "orderSets.time"
      },
      {
        "elementKey": "preOrderSetFile",
        "formIndex": "2",
        "inputType": "ehrFile",
        "tableColumn": "2",
        "fqn": "orderSets.preOrderSetFile"
      }
    ],
    "pageElements": {
      "insulinOrderSets": {
        "elementKey": "insulinOrderSets",
        "pageElementIndex": "1",
        "pageKey": "orderSets",
        "tableKey": "insulinOrderSets",
        "isTable": true,
        "form": {
          "elementKey": "insulinOrderSets",
          "label": "Insulin",
          "addButtonText": "Add an Insulin Order Set",
          "formKey": "insulinOrderSets",
          "ehr_groups": [
            {
              "elementKey": "cGroup48-1",
              "formCss": "record-header",
              "fqn": "orderSets.cGroup48-1",
              "gIndex": "1",
              "gChildren": [
                "insulinOrderSets_name",
                "insulinOrderSets_profession",
                "insulinOrderSets_day",
                "insulinOrderSets_time"
              ]
            },
            {
              "elementKey": "cGroup48-2",
              "formCss": "grid-left-to-right-1",
              "fqn": "orderSets.cGroup48-2",
              "gIndex": "2",
              "gChildren": [
                "insulinOrderSetForm"
              ]
            }
          ],
          "ehr_data": {
            "insulinOrderSets_name": "",
            "insulinOrderSets_profession": "",
            "insulinOrderSets_day": "",
            "insulinOrderSets_time": "",
            "insulinOrderSetForm": ""
          }
        },
        "fqn": "orderSets.insulinOrderSets",
        "tableChildren": [
          "insulinOrderSets_id",
          "insulinOrderSets_day",
          "insulinOrderSets_time",
          "insulinOrderSetForm",
          "insulinOrderSets_name",
          "insulinOrderSets_profession"
        ],
        "hasRecHeader": true
      },
      "preprintOrderSet": {
        "elementKey": "preprintOrderSet",
        "pageElementIndex": "2",
        "pageKey": "orderSets",
        "tableKey": "preprintOrderSet",
        "isTable": true,
        "form": {
          "elementKey": "preprintOrderSet",
          "label": "Preprinted",
          "addButtonText": "Add a preprinted order set",
          "formKey": "preprintOrderSet",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "orderSets.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "preprintOrderSet_name",
                "preprintOrderSet_profession",
                "preprintOrderSet_day",
                "preprintOrderSet_time"
              ]
            },
            {
              "elementKey": "cGroup48-2",
              "formCss": "grid-left-to-right-3",
              "fqn": "orderSets.cGroup48-2",
              "gIndex": "2",
              "gChildren": [
                "preOrderSetFile"
              ]
            }
          ],
          "ehr_data": {
            "preprintOrderSet_name": "",
            "preprintOrderSet_profession": "",
            "preprintOrderSet_day": "",
            "preprintOrderSet_time": "",
            "preOrderSetFile": ""
          }
        },
        "fqn": "orderSets.preprintOrderSet",
        "tableChildren": [
          "preprintOrderSet_id",
          "preprintOrderSet_day",
          "preprintOrderSet_time",
          "preOrderSetFile",
          "preprintOrderSet_name",
          "preprintOrderSet_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "medLabAccession": {
    "pageDataKey": "medLabAccession",
    "pIndex": "50",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "mlAccessioning_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "medLabAccession.name"
      },
      {
        "elementKey": "mlAccessioning_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "mlAccessioning_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "medLabAccession.profession"
      },
      {
        "elementKey": "mlAccessioning_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "medLabAccession.day"
      },
      {
        "elementKey": "mlAccessioning_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "medLabAccession.time"
      },
      {
        "elementKey": "accessionID",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "2",
        "fqn": "medLabAccession.accessionID"
      },
      {
        "elementKey": "accRequisitionID",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "3",
        "fqn": "medLabAccession.accRequisitionID"
      },
      {
        "elementKey": "accSpecimenType",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Blood",
            "text": "Blood"
          },
          {
            "key": "Urine",
            "text": "Urine"
          },
          {
            "key": "Tissue",
            "text": "Tissue"
          },
          {
            "key": "Saliva",
            "text": "Saliva"
          },
          {
            "key": "Stool",
            "text": "Stool"
          },
          {
            "key": "Swab",
            "text": "Swab"
          },
          {
            "key": "Sputum",
            "text": "Sputum"
          },
          {
            "key": "Fluid",
            "text": "Fluid"
          },
          {
            "key": "Bone",
            "text": "Bone"
          },
          {
            "key": "Hair",
            "text": "Hair"
          }
        ],
        "tableColumn": "4",
        "fqn": "medLabAccession.accSpecimenType"
      },
      {
        "elementKey": "accTestPanel",
        "formIndex": "1",
        "formCss": "grid-span-3-columns",
        "inputType": "checkset",
        "options": [
          {
            "key": "cbc",
            "text": "CBC (Complete Blood Count)"
          },
          {
            "key": "hba1c",
            "text": "HbA1c (Glycated Hemoglobin)"
          },
          {
            "key": "ptinr",
            "text": "PT/INR (Prothrombin Time/International Normalized Ratio)"
          },
          {
            "key": "coag",
            "text": "Coagulation Profile"
          },
          {
            "key": "cmp",
            "text": "CMP (Comprehensive Metabolic Panel)"
          },
          {
            "key": "glufast",
            "text": "Glucose, Fasting"
          },
          {
            "key": "glurandom",
            "text": "Glucose, Random"
          },
          {
            "key": "iron",
            "text": "Iron Studies"
          },
          {
            "key": "lipid",
            "text": "Lipid Panel"
          },
          {
            "key": "psa",
            "text": "PSA (Prostate-Specific Antigen)"
          },
          {
            "key": "thyroid",
            "text": "Thyroid Panel"
          },
          {
            "key": "troponin",
            "text": "Troponin"
          },
          {
            "key": "tsh",
            "text": "TSH (Thyroid-Stimulating Hormone)"
          },
          {
            "key": "vitd",
            "text": "Vitamin D Levels"
          },
          {
            "key": "pregblood",
            "text": "Pregnancy test, blood"
          },
          {
            "key": "pregurin",
            "text": "Pregnancy test, urine"
          },
          {
            "key": "urinalysis",
            "text": "Urinalysis"
          },
          {
            "key": "bgasa",
            "text": "Blood gas, arterial"
          },
          {
            "key": "bgasv",
            "text": "Blood gas, veneous"
          },
          {
            "key": "bgasf",
            "text": "Blood gase, fetal cord"
          },
          {
            "key": "hepatitisc",
            "text": "Hepatitis C Antibody Test"
          },
          {
            "key": "other",
            "text": "Other"
          }
        ],
        "tableColumn": "5",
        "fqn": "medLabAccession.accTestPanel"
      },
      {
        "elementKey": "accTestOther",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "6",
        "fqn": "medLabAccession.accTestOther"
      },
      {
        "elementKey": "preAnalytic",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "7",
        "fqn": "medLabAccession.preAnalytic"
      },
      {
        "elementKey": "postAnalytic",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "8",
        "fqn": "medLabAccession.postAnalytic"
      },
      {
        "elementKey": "collectionDate",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "9",
        "fqn": "medLabAccession.collectionDate"
      },
      {
        "elementKey": "collectionTime",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "10",
        "fqn": "medLabAccession.collectionTime"
      },
      {
        "elementKey": "collectionLocation",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "11",
        "fqn": "medLabAccession.collectionLocation"
      },
      {
        "elementKey": "accComments",
        "formIndex": "1",
        "inputType": "textarea",
        "tableColumn": "12",
        "fqn": "medLabAccession.accComments"
      },
      {
        "elementKey": "mlChain_name",
        "formIndex": "2",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "medLabAccession.name"
      },
      {
        "elementKey": "mlChain_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "mlChain_profession",
        "formIndex": "2",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "medLabAccession.profession"
      },
      {
        "elementKey": "mlChain_day",
        "formIndex": "2",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "medLabAccession.day"
      },
      {
        "elementKey": "mlChain_time",
        "formIndex": "2",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "medLabAccession.time"
      },
      {
        "elementKey": "chainAccessionID",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "2",
        "fqn": "medLabAccession.chainAccessionID"
      },
      {
        "elementKey": "chainEvent",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "3",
        "fqn": "medLabAccession.chainEvent"
      },
      {
        "elementKey": "chainDate",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "4",
        "fqn": "medLabAccession.chainDate"
      },
      {
        "elementKey": "chainTime",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "5",
        "fqn": "medLabAccession.chainTime"
      },
      {
        "elementKey": "chainDetails",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "6",
        "fqn": "medLabAccession.chainDetails"
      },
      {
        "elementKey": "chainComments",
        "formIndex": "2",
        "inputType": "textarea",
        "tableColumn": "7",
        "fqn": "medLabAccession.chainComments"
      },
      {
        "elementKey": "mlTestStatus_name",
        "formIndex": "3",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "medLabAccession.name"
      },
      {
        "elementKey": "mlTestStatus_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "mlTestStatus_profession",
        "formIndex": "3",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "medLabAccession.profession"
      },
      {
        "elementKey": "mlTestStatus_day",
        "formIndex": "3",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "medLabAccession.day"
      },
      {
        "elementKey": "mlTestStatus_time",
        "formIndex": "3",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "medLabAccession.time"
      },
      {
        "elementKey": "testAccessionID",
        "formIndex": "3",
        "inputType": "text",
        "tableColumn": "2",
        "fqn": "medLabAccession.testAccessionID"
      },
      {
        "elementKey": "testStatus",
        "formIndex": "3",
        "inputType": "text",
        "tableColumn": "3",
        "fqn": "medLabAccession.testStatus"
      },
      {
        "elementKey": "testDate",
        "formIndex": "3",
        "inputType": "text",
        "tableColumn": "4",
        "fqn": "medLabAccession.testDate"
      },
      {
        "elementKey": "testTime",
        "formIndex": "3",
        "inputType": "text",
        "tableColumn": "5",
        "fqn": "medLabAccession.testTime"
      },
      {
        "elementKey": "testComments",
        "formIndex": "3",
        "inputType": "textarea",
        "tableColumn": "6",
        "fqn": "medLabAccession.testComments"
      }
    ],
    "pageElements": {
      "mlAccessioning": {
        "elementKey": "mlAccessioning",
        "pageElementIndex": "1",
        "pageKey": "medLabAccession",
        "tableKey": "mlAccessioning",
        "isTable": true,
        "form": {
          "elementKey": "mlAccessioning",
          "label": "Accessioning",
          "addButtonText": "Create an accessioning record",
          "formKey": "mlAccessioning",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "medLabAccession.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "mlAccessioning_name",
                "mlAccessioning_profession",
                "mlAccessioning_day",
                "mlAccessioning_time"
              ]
            },
            {
              "elementKey": "cGroup50-2",
              "formCss": "grid-left-to-right-3",
              "fqn": "medLabAccession.cGroup50-2",
              "gIndex": "2",
              "gChildren": [
                "accessionID",
                "accRequisitionID",
                "accSpecimenType",
                "accTestPanel",
                "accTestOther",
                "preAnalytic",
                "postAnalytic",
                "collectionDate",
                "collectionTime",
                "collectionLocation"
              ]
            },
            {
              "elementKey": "cGroup50-3",
              "formCss": "grid-left-to-right-1",
              "fqn": "medLabAccession.cGroup50-3",
              "gIndex": "3",
              "gChildren": [
                "accComments"
              ]
            }
          ],
          "ehr_data": {
            "mlAccessioning_name": "",
            "mlAccessioning_profession": "",
            "mlAccessioning_day": "",
            "mlAccessioning_time": "",
            "accessionID": "",
            "accRequisitionID": "",
            "accSpecimenType": "",
            "accTestPanel": "",
            "accTestOther": "",
            "preAnalytic": "",
            "postAnalytic": "",
            "collectionDate": "",
            "collectionTime": "",
            "collectionLocation": "",
            "accComments": ""
          }
        },
        "fqn": "medLabAccession.mlAccessioning",
        "tableChildren": [
          "mlAccessioning_id",
          "mlAccessioning_day",
          "mlAccessioning_time",
          "accessionID",
          "accRequisitionID",
          "accSpecimenType",
          "accTestPanel",
          "accTestOther",
          "preAnalytic",
          "postAnalytic",
          "collectionDate",
          "collectionTime",
          "collectionLocation",
          "accComments",
          "mlAccessioning_name",
          "mlAccessioning_profession"
        ],
        "hasRecHeader": true
      },
      "mlChain": {
        "elementKey": "mlChain",
        "pageElementIndex": "2",
        "pageKey": "medLabAccession",
        "tableKey": "mlChain",
        "isTable": true,
        "form": {
          "elementKey": "mlChain",
          "label": "Chain of Custody",
          "addButtonText": "Create a chain of custody record",
          "formKey": "mlChain",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "medLabAccession.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "mlChain_name",
                "mlChain_profession",
                "mlChain_day",
                "mlChain_time"
              ]
            },
            {
              "elementKey": "cGroup50-2",
              "formCss": "grid-left-to-right-3",
              "fqn": "medLabAccession.cGroup50-2",
              "gIndex": "2",
              "gChildren": [
                "chainAccessionID",
                "chainEvent",
                "chainDate",
                "chainTime",
                "chainDetails",
                "chainComments"
              ]
            }
          ],
          "ehr_data": {
            "mlChain_name": "",
            "mlChain_profession": "",
            "mlChain_day": "",
            "mlChain_time": "",
            "chainAccessionID": "",
            "chainEvent": "",
            "chainDate": "",
            "chainTime": "",
            "chainDetails": "",
            "chainComments": ""
          }
        },
        "fqn": "medLabAccession.mlChain",
        "tableChildren": [
          "mlChain_id",
          "mlChain_day",
          "mlChain_time",
          "chainAccessionID",
          "chainEvent",
          "chainDate",
          "chainTime",
          "chainDetails",
          "chainComments",
          "mlChain_name",
          "mlChain_profession"
        ],
        "hasRecHeader": true
      },
      "mlTestStatus": {
        "elementKey": "mlTestStatus",
        "pageElementIndex": "3",
        "pageKey": "medLabAccession",
        "tableKey": "mlTestStatus",
        "isTable": true,
        "form": {
          "elementKey": "mlTestStatus",
          "label": "Test Status",
          "addButtonText": "Create a test status record",
          "formKey": "mlTestStatus",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "medLabAccession.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "mlTestStatus_name",
                "mlTestStatus_profession",
                "mlTestStatus_day",
                "mlTestStatus_time"
              ]
            },
            {
              "elementKey": "cGroup50-2",
              "formCss": "grid-left-to-right-3",
              "fqn": "medLabAccession.cGroup50-2",
              "gIndex": "2",
              "gChildren": [
                "testAccessionID",
                "testStatus",
                "testDate",
                "testTime",
                "testComments"
              ]
            }
          ],
          "ehr_data": {
            "mlTestStatus_name": "",
            "mlTestStatus_profession": "",
            "mlTestStatus_day": "",
            "mlTestStatus_time": "",
            "testAccessionID": "",
            "testStatus": "",
            "testDate": "",
            "testTime": "",
            "testComments": ""
          }
        },
        "fqn": "medLabAccession.mlTestStatus",
        "tableChildren": [
          "mlTestStatus_id",
          "mlTestStatus_day",
          "mlTestStatus_time",
          "testAccessionID",
          "testStatus",
          "testDate",
          "testTime",
          "testComments",
          "mlTestStatus_name",
          "mlTestStatus_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "specialIndicators": {
    "pageDataKey": "specialIndicators",
    "pIndex": "51",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "precautionList_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "specialIndicators.name"
      },
      {
        "elementKey": "precautionList_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "precautionList_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "specialIndicators.profession"
      },
      {
        "elementKey": "precautionList_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "specialIndicators.day"
      },
      {
        "elementKey": "precautionList_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "specialIndicators.time"
      },
      {
        "elementKey": "precautionIndicator",
        "formIndex": "1",
        "inputType": "select",
        "options": [
          {
            "key": "Airborne",
            "text": "Airborne Precautions"
          },
          {
            "key": "Contact",
            "text": "Contact Precautions"
          },
          {
            "key": "Droplet",
            "text": "Droplet Precautions"
          },
          {
            "key": "DC",
            "text": "Droplet/Contact Precautions"
          },
          {
            "key": "Routine",
            "text": "Routine Precautions"
          }
        ],
        "tableColumn": "2",
        "fqn": "specialIndicators.precautionIndicator"
      },
      {
        "elementKey": "precautionComment",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "3",
        "fqn": "specialIndicators.precautionComment"
      },
      {
        "elementKey": "riskList_name",
        "formIndex": "2",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "specialIndicators.name"
      },
      {
        "elementKey": "riskList_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "riskList_profession",
        "formIndex": "2",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "specialIndicators.profession"
      },
      {
        "elementKey": "riskList_day",
        "formIndex": "2",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "specialIndicators.day"
      },
      {
        "elementKey": "riskList_time",
        "formIndex": "2",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "specialIndicators.time"
      },
      {
        "elementKey": "riskIndicator",
        "formIndex": "2",
        "inputType": "select",
        "options": [
          {
            "key": "AVB",
            "text": "AVB (Aggressive Violent Behaviour"
          },
          {
            "key": "ARO",
            "text": "ARO (Antibiotic Resistant Organism)"
          },
          {
            "key": "DNA",
            "text": "DNA (Do Not Acknowledge)"
          }
        ],
        "tableColumn": "2",
        "fqn": "specialIndicators.riskIndicator"
      },
      {
        "elementKey": "riskComment",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "3",
        "fqn": "specialIndicators.riskComment"
      }
    ],
    "pageElements": {
      "precautionList": {
        "elementKey": "precautionList",
        "pageElementIndex": "1",
        "pageKey": "specialIndicators",
        "tableKey": "precautionList",
        "isTable": true,
        "form": {
          "elementKey": "precautionList",
          "label": "Precautions",
          "addButtonText": "Add an precaution",
          "formKey": "precautionList",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "specialIndicators.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "precautionList_name",
                "precautionList_profession",
                "precautionList_day",
                "precautionList_time"
              ]
            },
            {
              "elementKey": "cGroup",
              "formCss": "grid-left-to-right-2",
              "fqn": "specialIndicators.cGroup",
              "gIndex": "2",
              "gChildren": [
                "precautionIndicator",
                "precautionComment"
              ]
            }
          ],
          "ehr_data": {
            "precautionList_name": "",
            "precautionList_profession": "",
            "precautionList_day": "",
            "precautionList_time": "",
            "precautionIndicator": "",
            "precautionComment": ""
          }
        },
        "fqn": "specialIndicators.precautionList",
        "tableChildren": [
          "precautionList_id",
          "precautionList_day",
          "precautionList_time",
          "precautionIndicator",
          "precautionComment",
          "precautionList_name",
          "precautionList_profession"
        ],
        "hasRecHeader": true
      },
      "riskList": {
        "elementKey": "riskList",
        "pageElementIndex": "2",
        "pageKey": "specialIndicators",
        "tableKey": "riskList",
        "isTable": true,
        "form": {
          "elementKey": "riskList",
          "label": "Indicators",
          "addButtonText": "Add an indicator",
          "formKey": "riskList",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "specialIndicators.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "riskList_name",
                "riskList_profession",
                "riskList_day",
                "riskList_time"
              ]
            },
            {
              "elementKey": "cGroup",
              "formCss": "grid-left-to-right-2",
              "fqn": "specialIndicators.cGroup",
              "gIndex": "2",
              "gChildren": [
                "riskIndicator",
                "riskComment"
              ]
            }
          ],
          "ehr_data": {
            "riskList_name": "",
            "riskList_profession": "",
            "riskList_day": "",
            "riskList_time": "",
            "riskIndicator": "",
            "riskComment": ""
          }
        },
        "fqn": "specialIndicators.riskList",
        "tableChildren": [
          "riskList_id",
          "riskList_day",
          "riskList_time",
          "riskIndicator",
          "riskComment",
          "riskList_name",
          "riskList_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "medLabPhoneLog": {
    "pageDataKey": "medLabPhoneLog",
    "pIndex": "52",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "phLogTable_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "medLabPhoneLog.name"
      },
      {
        "elementKey": "phLogTable_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "phLogTable_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "medLabPhoneLog.profession"
      },
      {
        "elementKey": "phLogTable_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "medLabPhoneLog.day"
      },
      {
        "elementKey": "phLogTable_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "medLabPhoneLog.time"
      },
      {
        "elementKey": "testAccessionID",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "2",
        "fqn": "medLabPhoneLog.testAccessionID"
      },
      {
        "elementKey": "mlphRecipient",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "3",
        "fqn": "medLabPhoneLog.mlphRecipient"
      },
      {
        "elementKey": "mlphReadBack",
        "formIndex": "1",
        "inputType": "checkbox",
        "tableColumn": "4",
        "fqn": "medLabPhoneLog.mlphReadBack"
      },
      {
        "elementKey": "mlplReason",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "5",
        "fqn": "medLabPhoneLog.mlplReason"
      },
      {
        "elementKey": "accComments",
        "formIndex": "1",
        "inputType": "textarea",
        "tableColumn": "6",
        "fqn": "medLabPhoneLog.accComments"
      }
    ],
    "pageElements": {
      "phLogTable": {
        "elementKey": "phLogTable",
        "pageElementIndex": "1",
        "pageKey": "medLabPhoneLog",
        "tableKey": "phLogTable",
        "isTable": true,
        "form": {
          "elementKey": "phLogTable",
          "label": "Phone Log",
          "addButtonText": "Create a phone log",
          "formKey": "phLogTable",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "medLabPhoneLog.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "phLogTable_name",
                "phLogTable_profession",
                "phLogTable_day",
                "phLogTable_time"
              ]
            },
            {
              "elementKey": "cGroup50-2",
              "formCss": "grid-left-to-right-3",
              "fqn": "medLabPhoneLog.cGroup50-2",
              "gIndex": "2",
              "gChildren": [
                "testAccessionID",
                "mlphRecipient",
                "mlphReadBack"
              ]
            },
            {
              "elementKey": "cGroup50-3",
              "formCss": "grid-left-to-right-1",
              "fqn": "medLabPhoneLog.cGroup50-3",
              "gIndex": "3",
              "gChildren": [
                "mlplReason",
                "accComments"
              ]
            }
          ],
          "ehr_data": {
            "phLogTable_name": "",
            "phLogTable_profession": "",
            "phLogTable_day": "",
            "phLogTable_time": "",
            "testAccessionID": "",
            "mlphRecipient": "",
            "mlphReadBack": "",
            "mlplReason": "",
            "accComments": ""
          }
        },
        "fqn": "medLabPhoneLog.phLogTable",
        "tableChildren": [
          "phLogTable_id",
          "phLogTable_day",
          "phLogTable_time",
          "testAccessionID",
          "mlphRecipient",
          "mlphReadBack",
          "mlplReason",
          "accComments",
          "phLogTable_name",
          "phLogTable_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "leveyJennings": {
    "pageDataKey": "leveyJennings",
    "pIndex": "53",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "tableLJ_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "leveyJennings.name"
      },
      {
        "elementKey": "tableLJ_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "tableLJ_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "leveyJennings.profession"
      },
      {
        "elementKey": "tableLJ_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "leveyJennings.day"
      },
      {
        "elementKey": "tableLJ_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "leveyJennings.time"
      },
      {
        "elementKey": "ljAnalyte",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "2",
        "fqn": "leveyJennings.ljAnalyte"
      },
      {
        "elementKey": "ljUseControl",
        "formIndex": "1",
        "inputType": "checkbox",
        "tableColumn": "3",
        "fqn": "leveyJennings.ljUseControl"
      },
      {
        "elementKey": "ljControl",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "4",
        "fqn": "leveyJennings.ljControl"
      },
      {
        "elementKey": "ljStdDev",
        "formIndex": "1",
        "inputType": "decimal2",
        "tableColumn": "5",
        "fqn": "leveyJennings.ljStdDev"
      },
      {
        "elementKey": "ljValue1",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "6",
        "fqn": "leveyJennings.ljValue1"
      },
      {
        "elementKey": "ljValue2",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "7",
        "fqn": "leveyJennings.ljValue2"
      },
      {
        "elementKey": "ljValue3",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "8",
        "fqn": "leveyJennings.ljValue3"
      },
      {
        "elementKey": "ljValue4",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "9",
        "fqn": "leveyJennings.ljValue4"
      },
      {
        "elementKey": "ljValue5",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "10",
        "fqn": "leveyJennings.ljValue5"
      },
      {
        "elementKey": "ljValue6",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "11",
        "fqn": "leveyJennings.ljValue6"
      },
      {
        "elementKey": "ljValue7",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "12",
        "fqn": "leveyJennings.ljValue7"
      },
      {
        "elementKey": "ljValue8",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "13",
        "fqn": "leveyJennings.ljValue8"
      },
      {
        "elementKey": "ljValue9",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "14",
        "fqn": "leveyJennings.ljValue9"
      },
      {
        "elementKey": "ljValue10",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "15",
        "fqn": "leveyJennings.ljValue10"
      },
      {
        "elementKey": "ljValue11",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "16",
        "fqn": "leveyJennings.ljValue11"
      },
      {
        "elementKey": "ljValue12",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "17",
        "fqn": "leveyJennings.ljValue12"
      },
      {
        "elementKey": "ljValue13",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "18",
        "fqn": "leveyJennings.ljValue13"
      },
      {
        "elementKey": "ljValue14",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "19",
        "fqn": "leveyJennings.ljValue14"
      },
      {
        "elementKey": "ljValue15",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "20",
        "fqn": "leveyJennings.ljValue15"
      },
      {
        "elementKey": "ljValue16",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "21",
        "fqn": "leveyJennings.ljValue16"
      },
      {
        "elementKey": "ljValue17",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "22",
        "fqn": "leveyJennings.ljValue17"
      },
      {
        "elementKey": "ljValue18",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "23",
        "fqn": "leveyJennings.ljValue18"
      },
      {
        "elementKey": "ljValue19",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "24",
        "fqn": "leveyJennings.ljValue19"
      },
      {
        "elementKey": "ljValue20",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "25",
        "fqn": "leveyJennings.ljValue20"
      },
      {
        "elementKey": "ljValue21",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "26",
        "fqn": "leveyJennings.ljValue21"
      },
      {
        "elementKey": "ljValue22",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "27",
        "fqn": "leveyJennings.ljValue22"
      },
      {
        "elementKey": "ljValue23",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "28",
        "fqn": "leveyJennings.ljValue23"
      },
      {
        "elementKey": "ljValue24",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "29",
        "fqn": "leveyJennings.ljValue24"
      },
      {
        "elementKey": "ljValue25",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "30",
        "fqn": "leveyJennings.ljValue25"
      },
      {
        "elementKey": "ljValue26",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "31",
        "fqn": "leveyJennings.ljValue26"
      },
      {
        "elementKey": "ljValue27",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "32",
        "fqn": "leveyJennings.ljValue27"
      },
      {
        "elementKey": "ljValue28",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "33",
        "fqn": "leveyJennings.ljValue28"
      },
      {
        "elementKey": "ljValue29",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "34",
        "fqn": "leveyJennings.ljValue29"
      },
      {
        "elementKey": "ljValue30",
        "formIndex": "1",
        "inputType": "number",
        "tableColumn": "35",
        "fqn": "leveyJennings.ljValue30"
      },
      {
        "elementKey": "ljcomments",
        "formIndex": "1",
        "formCss": "grid-span-3-columns",
        "inputType": "textarea",
        "tableColumn": "36",
        "fqn": "leveyJennings.ljcomments"
      },
      {
        "elementKey": "lj_aux_data",
        "formIndex": "1",
        "formOption": "hideElement",
        "inputType": "aux_data",
        "fqn": "leveyJennings.lj_aux_data"
      },
      {
        "elementKey": "ljAuxEntryTable_name",
        "formIndex": "2",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "leveyJennings.name"
      },
      {
        "elementKey": "ljAuxEntryTable_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "ljAuxEntryTable_profession",
        "formIndex": "2",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "leveyJennings.profession"
      },
      {
        "elementKey": "ljAuxEntryTable_day",
        "formIndex": "2",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "leveyJennings.day"
      },
      {
        "elementKey": "ljAuxEntryTable_time",
        "formIndex": "2",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "leveyJennings.time"
      },
      {
        "elementKey": "ljAuxValue",
        "formIndex": "2",
        "inputType": "text",
        "tableColumn": "1",
        "fqn": "leveyJennings.ljAuxValue"
      }
    ],
    "pageElements": {
      "tableLJ": {
        "elementKey": "tableLJ",
        "pageElementIndex": "1",
        "pageKey": "leveyJennings",
        "tableKey": "tableLJ",
        "isTable": true,
        "auxTableRef": "ljAuxEntryTable",
        "form": {
          "elementKey": "tableLJ",
          "label": "Levey-Jennings",
          "addButtonText": "Add a Levey-Jennings Chart",
          "formOption": "openToEdit",
          "formKey": "tableLJ",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "leveyJennings.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "tableLJ_name",
                "tableLJ_profession",
                "tableLJ_day",
                "tableLJ_time"
              ]
            },
            {
              "elementKey": "ljGroup1",
              "formCss": "grid-left-to-right-3",
              "fqn": "leveyJennings.ljGroup1",
              "gIndex": "2",
              "gChildren": [
                "ljAnalyte",
                "ljUseControl",
                "ljControl",
                "ljStdDev",
                "ljValue1",
                "ljValue2",
                "ljValue3",
                "ljValue4",
                "ljValue5",
                "ljValue6",
                "ljValue7",
                "ljValue8",
                "ljValue9",
                "ljValue10",
                "ljValue11",
                "ljValue12",
                "ljValue13",
                "ljValue14",
                "ljValue15",
                "ljValue16",
                "ljValue17",
                "ljValue18",
                "ljValue19",
                "ljValue20",
                "ljValue21",
                "ljValue22",
                "ljValue23",
                "ljValue24",
                "ljValue25",
                "ljValue26",
                "ljValue27",
                "ljValue28",
                "ljValue29",
                "ljValue30",
                "ljcomments",
                "lj_aux_data"
              ]
            }
          ],
          "ehr_data": {
            "tableLJ_name": "",
            "tableLJ_profession": "",
            "tableLJ_day": "",
            "tableLJ_time": "",
            "ljAnalyte": "",
            "ljUseControl": "",
            "ljControl": "",
            "ljStdDev": "",
            "ljValue1": "",
            "ljValue2": "",
            "ljValue3": "",
            "ljValue4": "",
            "ljValue5": "",
            "ljValue6": "",
            "ljValue7": "",
            "ljValue8": "",
            "ljValue9": "",
            "ljValue10": "",
            "ljValue11": "",
            "ljValue12": "",
            "ljValue13": "",
            "ljValue14": "",
            "ljValue15": "",
            "ljValue16": "",
            "ljValue17": "",
            "ljValue18": "",
            "ljValue19": "",
            "ljValue20": "",
            "ljValue21": "",
            "ljValue22": "",
            "ljValue23": "",
            "ljValue24": "",
            "ljValue25": "",
            "ljValue26": "",
            "ljValue27": "",
            "ljValue28": "",
            "ljValue29": "",
            "ljValue30": "",
            "ljcomments": ""
          }
        },
        "fqn": "leveyJennings.tableLJ",
        "tableChildren": [
          "tableLJ_id",
          "tableLJ_day",
          "tableLJ_time",
          "ljAnalyte",
          "ljUseControl",
          "ljControl",
          "ljStdDev",
          "ljValue1",
          "ljValue2",
          "ljValue3",
          "ljValue4",
          "ljValue5",
          "ljValue6",
          "ljValue7",
          "ljValue8",
          "ljValue9",
          "ljValue10",
          "ljValue11",
          "ljValue12",
          "ljValue13",
          "ljValue14",
          "ljValue15",
          "ljValue16",
          "ljValue17",
          "ljValue18",
          "ljValue19",
          "ljValue20",
          "ljValue21",
          "ljValue22",
          "ljValue23",
          "ljValue24",
          "ljValue25",
          "ljValue26",
          "ljValue27",
          "ljValue28",
          "ljValue29",
          "ljValue30",
          "ljcomments",
          "tableLJ_name",
          "tableLJ_profession"
        ],
        "hasRecHeader": true
      },
      "ljAuxEntryTable": {
        "elementKey": "ljAuxEntryTable",
        "pageElementIndex": "2",
        "pageKey": "leveyJennings",
        "tableKey": "ljAuxEntryTable",
        "mainTableKey": "tableLJ",
        "isTable": true,
        "isAuxTable": true,
        "form": {
          "elementKey": "ljAuxEntryTable",
          "label": "LJvalue",
          "addButtonText": "Add LJ value",
          "formKey": "ljAuxEntryTable",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "leveyJennings.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "ljAuxEntryTable_name",
                "ljAuxEntryTable_profession",
                "ljAuxEntryTable_day",
                "ljAuxEntryTable_time"
              ]
            },
            {
              "elementKey": "auxljgroup",
              "formCss": "grid-left-to-right-1",
              "fqn": "leveyJennings.auxljgroup",
              "gIndex": "2",
              "gChildren": [
                "ljAuxValue"
              ]
            }
          ],
          "ehr_data": {
            "ljAuxEntryTable_name": "",
            "ljAuxEntryTable_profession": "",
            "ljAuxEntryTable_day": "",
            "ljAuxEntryTable_time": "",
            "ljAuxValue": ""
          }
        },
        "fqn": "leveyJennings.tableLJ.ljAuxEntryTable",
        "tableChildren": [
          "ljAuxEntryTable_id",
          "ljAuxEntryTable_day",
          "ljAuxEntryTable_time",
          "ljAuxValue",
          "ljAuxEntryTable_name",
          "ljAuxEntryTable_profession"
        ],
        "hasRecHeader": true
      }
    }
  },
  "medLabBody": {
    "pageDataKey": "medLabBody",
    "pIndex": "54",
    "hasGridTable": true,
    "pageChildren": [
      {
        "elementKey": "tableLabBody_name",
        "formIndex": "1",
        "inputType": "practitionerName",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "medLabBody.name"
      },
      {
        "elementKey": "tableLabBody_id",
        "inputType": "generatedId",
        "tableColumn": 0,
        "label": "Row id",
        "tableCss": "row-id"
      },
      {
        "elementKey": "tableLabBody_profession",
        "formIndex": "1",
        "inputType": "practitionerProfession",
        "tableColumn": "1",
        "recHeader": true,
        "fqn": "medLabBody.profession"
      },
      {
        "elementKey": "tableLabBody_day",
        "formIndex": "1",
        "inputType": "visitDay",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "visitDay",
        "recHeader": true,
        "fqn": "medLabBody.day"
      },
      {
        "elementKey": "tableLabBody_time",
        "formIndex": "1",
        "inputType": "visitTime",
        "mandatory": true,
        "tableColumn": "1",
        "validation": "time24",
        "recHeader": true,
        "fqn": "medLabBody.time"
      },
      {
        "elementKey": "bdyAccession",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "2",
        "fqn": "medLabBody.bdyAccession"
      },
      {
        "elementKey": "bdyCollDay",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "3",
        "fqn": "medLabBody.bdyCollDay"
      },
      {
        "elementKey": "bdyCollTime",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "4",
        "fqn": "medLabBody.bdyCollTime"
      },
      {
        "elementKey": "bdyOrderPhys",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "5",
        "fqn": "medLabBody.bdyOrderPhys"
      },
      {
        "elementKey": "bdyLabel1",
        "formIndex": "1",
        "inputType": "formTableHeader",
        "fqn": "medLabBody.bdyLabel1"
      },
      {
        "elementKey": "bdyLabel2",
        "formIndex": "1",
        "inputType": "formTableHeader",
        "fqn": "medLabBody.bdyLabel2"
      },
      {
        "elementKey": "bdyLabel3",
        "formIndex": "1",
        "inputType": "formTableHeader",
        "fqn": "medLabBody.bdyLabel3"
      },
      {
        "elementKey": "bdyWBCLabel",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabBody.bdyWBCLabel"
      },
      {
        "elementKey": "bdyWBC",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "10^6/L",
        "tableColumn": "6",
        "fqn": "medLabBody.bdyWBC",
        "suffixText": "10^6/L"
      },
      {
        "elementKey": "bdyWBCRefInt",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "7",
        "fqn": "medLabBody.bdyWBCRefInt"
      },
      {
        "elementKey": "bdyRBCLabel",
        "formIndex": "1",
        "inputType": "form_label",
        "fqn": "medLabBody.bdyRBCLabel"
      },
      {
        "elementKey": "bdyRBC",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "10^6/L",
        "tableColumn": "8",
        "fqn": "medLabBody.bdyRBC",
        "suffixText": "10^6/L"
      },
      {
        "elementKey": "bdyRBCRefInt",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "9",
        "fqn": "medLabBody.bdyRBCRefInt"
      },
      {
        "elementKey": "bdyType",
        "formIndex": "1",
        "formCss": "grid-span-3-columns",
        "inputType": "checkset",
        "options": [
          {
            "key": "blood",
            "text": "Blood"
          },
          {
            "key": "csfl",
            "text": "Cerebrospinal Fluid (CSF)"
          },
          {
            "key": "syno",
            "text": "Synovial Fluid"
          },
          {
            "key": "pleu",
            "text": "Pleural Fluid"
          },
          {
            "key": "periton",
            "text": "Peritoneal Fluid"
          },
          {
            "key": "pericar",
            "text": "Pericardial Fluid"
          },
          {
            "key": "sptm",
            "text": "Sputum"
          },
          {
            "key": "smen",
            "text": "Semen"
          },
          {
            "key": "vag",
            "text": "Vaginal Fluid"
          },
          {
            "key": "amniotic",
            "text": "Amniotic Fluid"
          },
          {
            "key": "saliva",
            "text": "Saliva"
          },
          {
            "key": "wdext",
            "text": "Wound Exudate"
          },
          {
            "key": "dialy",
            "text": "Dialysis Fluid"
          },
          {
            "key": "cvswb",
            "text": "Cervical/Vaginal Swabs"
          },
          {
            "key": "npdsc",
            "text": "Nipple Discharge"
          },
          {
            "key": "saspi",
            "text": "Salivary Gland Aspirate"
          }
        ],
        "tableColumn": "10",
        "fqn": "medLabBody.bdyType"
      },
      {
        "elementKey": "bdyColour",
        "formIndex": "1",
        "inputType": "checkset",
        "options": [
          {
            "key": "clrless",
            "text": "Colorless"
          },
          {
            "key": "red",
            "text": "Red"
          },
          {
            "key": "xanth",
            "text": "Xanthochromic"
          },
          {
            "key": "sxanth",
            "text": "Slightly Xanthochromic"
          }
        ],
        "tableColumn": "11",
        "fqn": "medLabBody.bdyColour"
      },
      {
        "elementKey": "bdyClarity",
        "formIndex": "1",
        "inputType": "checkset",
        "options": [
          {
            "key": "clear",
            "text": "Clear"
          },
          {
            "key": "hazy",
            "text": "Hazy"
          },
          {
            "key": "cloudy",
            "text": "Cloudy"
          },
          {
            "key": "turbid",
            "text": "Turbid"
          },
          {
            "key": "bloody",
            "text": "Bloody"
          }
        ],
        "tableColumn": "12",
        "fqn": "medLabBody.bdyClarity"
      },
      {
        "elementKey": "bdyVolume",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "mL",
        "tableColumn": "13",
        "fqn": "medLabBody.bdyVolume",
        "suffixText": "mL"
      },
      {
        "elementKey": "bdyLabel5",
        "formIndex": "1",
        "inputType": "formTableHeader",
        "fqn": "medLabBody.bdyLabel5"
      },
      {
        "elementKey": "bdyLabel6",
        "formIndex": "1",
        "inputType": "formTableHeader",
        "fqn": "medLabBody.bdyLabel6"
      },
      {
        "elementKey": "bdyLabel7",
        "formIndex": "1",
        "inputType": "formTableHeader",
        "fqn": "medLabBody.bdyLabel7"
      },
      {
        "elementKey": "bdyLabel8",
        "formIndex": "1",
        "inputType": "formTableHeader",
        "fqn": "medLabBody.bdyLabel8"
      },
      {
        "elementKey": "bdyLabel9",
        "formIndex": "1",
        "inputType": "formTableHeader",
        "fqn": "medLabBody.bdyLabel9"
      },
      {
        "elementKey": "bdyLabel10",
        "formIndex": "1",
        "inputType": "formTableText",
        "fqn": "medLabBody.bdyLabel10"
      },
      {
        "elementKey": "bdyNeutrophilsrel",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "%",
        "tableColumn": "14",
        "fqn": "medLabBody.bdyNeutrophilsrel",
        "suffixText": "%"
      },
      {
        "elementKey": "bdyNeutrophilsabs",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "10^6/L",
        "tableColumn": "15",
        "fqn": "medLabBody.bdyNeutrophilsabs",
        "suffixText": "10^6/L"
      },
      {
        "elementKey": "bdyNeutrophilsrelref",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "%",
        "tableColumn": "16",
        "fqn": "medLabBody.bdyNeutrophilsrelref",
        "suffixText": "%"
      },
      {
        "elementKey": "bdyNeutrophilsabsref",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "10^6/L",
        "tableColumn": "17",
        "fqn": "medLabBody.bdyNeutrophilsabsref",
        "suffixText": "10^6/L"
      },
      {
        "elementKey": "bdyLabel11",
        "formIndex": "1",
        "inputType": "formTableText",
        "fqn": "medLabBody.bdyLabel11"
      },
      {
        "elementKey": "bdyLymphocytesrel",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "%",
        "tableColumn": "18",
        "fqn": "medLabBody.bdyLymphocytesrel",
        "suffixText": "%"
      },
      {
        "elementKey": "bdyLymphocytesabs",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "10^6/L",
        "tableColumn": "19",
        "fqn": "medLabBody.bdyLymphocytesabs",
        "suffixText": "10^6/L"
      },
      {
        "elementKey": "bdyLymphocytesrelref",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "%",
        "tableColumn": "20",
        "fqn": "medLabBody.bdyLymphocytesrelref",
        "suffixText": "%"
      },
      {
        "elementKey": "bdyLymphocytesabsref",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "10^6/L",
        "tableColumn": "21",
        "fqn": "medLabBody.bdyLymphocytesabsref",
        "suffixText": "10^6/L"
      },
      {
        "elementKey": "bdyLabel12",
        "formIndex": "1",
        "inputType": "formTableText",
        "fqn": "medLabBody.bdyLabel12"
      },
      {
        "elementKey": "bdyMonocytesrel",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "%",
        "tableColumn": "22",
        "fqn": "medLabBody.bdyMonocytesrel",
        "suffixText": "%"
      },
      {
        "elementKey": "bdyMonocytesabs",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "10^6/L",
        "tableColumn": "23",
        "fqn": "medLabBody.bdyMonocytesabs",
        "suffixText": "10^6/L"
      },
      {
        "elementKey": "bdyMonocytesrelref",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "%",
        "tableColumn": "24",
        "fqn": "medLabBody.bdyMonocytesrelref",
        "suffixText": "%"
      },
      {
        "elementKey": "bdyMonocytesabsref",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "10^6/L",
        "tableColumn": "25",
        "fqn": "medLabBody.bdyMonocytesabsref",
        "suffixText": "10^6/L"
      },
      {
        "elementKey": "bdyLabel13",
        "formIndex": "1",
        "inputType": "formTableText",
        "fqn": "medLabBody.bdyLabel13"
      },
      {
        "elementKey": "bdyMacrophagerel",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "%",
        "tableColumn": "26",
        "fqn": "medLabBody.bdyMacrophagerel",
        "suffixText": "%"
      },
      {
        "elementKey": "bdyMacrophageabs",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "10^6/L",
        "tableColumn": "27",
        "fqn": "medLabBody.bdyMacrophageabs",
        "suffixText": "10^6/L"
      },
      {
        "elementKey": "bdyMacrophagerelref",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "%",
        "tableColumn": "28",
        "fqn": "medLabBody.bdyMacrophagerelref",
        "suffixText": "%"
      },
      {
        "elementKey": "bdyMacrophageabsref",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "10^6/L",
        "tableColumn": "29",
        "fqn": "medLabBody.bdyMacrophageabsref",
        "suffixText": "10^6/L"
      },
      {
        "elementKey": "bdyOther1label",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "30",
        "fqn": "medLabBody.bdyOther1label"
      },
      {
        "elementKey": "bdyOther1rel",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "%",
        "tableColumn": "31",
        "fqn": "medLabBody.bdyOther1rel",
        "suffixText": "%"
      },
      {
        "elementKey": "bdyOther1abs",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "10^6/L",
        "tableColumn": "32",
        "fqn": "medLabBody.bdyOther1abs",
        "suffixText": "10^6/L"
      },
      {
        "elementKey": "bdyOther1relref",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "%",
        "tableColumn": "33",
        "fqn": "medLabBody.bdyOther1relref",
        "suffixText": "%"
      },
      {
        "elementKey": "bdyOther1absref",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "10^6/L",
        "tableColumn": "34",
        "fqn": "medLabBody.bdyOther1absref",
        "suffixText": "10^6/L"
      },
      {
        "elementKey": "bdyOther2label",
        "formIndex": "1",
        "inputType": "text",
        "tableColumn": "35",
        "fqn": "medLabBody.bdyOther2label"
      },
      {
        "elementKey": "bdyOther2rel",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "%",
        "tableColumn": "36",
        "fqn": "medLabBody.bdyOther2rel",
        "suffixText": "%"
      },
      {
        "elementKey": "bdyOther2abs",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "10^6/L",
        "tableColumn": "37",
        "fqn": "medLabBody.bdyOther2abs",
        "suffixText": "10^6/L"
      },
      {
        "elementKey": "bdyOther2relref",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "%",
        "tableColumn": "38",
        "fqn": "medLabBody.bdyOther2relref",
        "suffixText": "%"
      },
      {
        "elementKey": "bdyOther2absref",
        "formIndex": "1",
        "inputType": "text",
        "suffix": "10^6/L",
        "tableColumn": "39",
        "fqn": "medLabBody.bdyOther2absref",
        "suffixText": "10^6/L"
      },
      {
        "elementKey": "bdyComments",
        "formIndex": "1",
        "inputType": "textarea",
        "tableColumn": "40",
        "fqn": "medLabBody.bdyComments"
      },
      {
        "elementKey": "bdyInternal",
        "formIndex": "1",
        "inputType": "textarea",
        "tableColumn": "41",
        "fqn": "medLabBody.bdyInternal"
      }
    ],
    "pageElements": {
      "tableLabBody": {
        "elementKey": "tableLabBody",
        "pageElementIndex": "1",
        "pageKey": "medLabBody",
        "tableKey": "tableLabBody",
        "isTable": true,
        "form": {
          "elementKey": "tableLabBody",
          "label": "Body Fluids",
          "addButtonText": "Add a Bodily Fluid Report",
          "formKey": "tableLabBody",
          "ehr_groups": [
            {
              "elementKey": "hdrGroup",
              "formCss": "record-header",
              "fqn": "medLabBody.hdrGroup",
              "gIndex": "1",
              "gChildren": [
                "tableLabBody_name",
                "tableLabBody_profession",
                "tableLabBody_day",
                "tableLabBody_time"
              ]
            },
            {
              "elementKey": "bdyGroup1",
              "formCss": "grid-left-to-right-4",
              "fqn": "medLabBody.bdyGroup1",
              "gIndex": "2",
              "gChildren": [
                "bdyAccession",
                "bdyCollDay",
                "bdyCollTime",
                "bdyOrderPhys"
              ]
            },
            {
              "elementKey": "bdyGroup2",
              "formCss": "body-main-table form-table-group",
              "fqn": "medLabBody.bdyGroup2",
              "gIndex": "3",
              "gChildren": [
                "bdyLabel1",
                "bdyLabel2",
                "bdyLabel3",
                "bdyWBCLabel",
                "bdyWBC",
                "bdyWBCRefInt",
                "bdyRBCLabel",
                "bdyRBC",
                "bdyRBCRefInt"
              ]
            },
            {
              "elementKey": "bdyGroup3",
              "formCss": "grid-left-to-right-3",
              "fqn": "medLabBody.bdyGroup3",
              "gIndex": "4",
              "gChildren": [
                "bdyType",
                "bdyColour",
                "bdyClarity",
                "bdyVolume"
              ]
            },
            {
              "elementKey": "bdyGroup4",
              "formCss": "body-diff-table form-table-group",
              "fqn": "medLabBody.bdyGroup4",
              "gIndex": "5",
              "gChildren": [
                "bdyLabel5",
                "bdyLabel6",
                "bdyLabel7",
                "bdyLabel8",
                "bdyLabel9",
                "bdyLabel10",
                "bdyNeutrophilsrel",
                "bdyNeutrophilsabs",
                "bdyNeutrophilsrelref",
                "bdyNeutrophilsabsref",
                "bdyLabel11",
                "bdyLymphocytesrel",
                "bdyLymphocytesabs",
                "bdyLymphocytesrelref",
                "bdyLymphocytesabsref",
                "bdyLabel12",
                "bdyMonocytesrel",
                "bdyMonocytesabs",
                "bdyMonocytesrelref",
                "bdyMonocytesabsref",
                "bdyLabel13",
                "bdyMacrophagerel",
                "bdyMacrophageabs",
                "bdyMacrophagerelref",
                "bdyMacrophageabsref",
                "bdyOther1label",
                "bdyOther1rel",
                "bdyOther1abs",
                "bdyOther1relref",
                "bdyOther1absref",
                "bdyOther2label",
                "bdyOther2rel",
                "bdyOther2abs",
                "bdyOther2relref",
                "bdyOther2absref"
              ]
            },
            {
              "elementKey": "bdyGroup5",
              "formCss": "grid-left-to-right-1",
              "fqn": "medLabBody.bdyGroup5",
              "gIndex": "6",
              "gChildren": [
                "bdyComments",
                "bdyInternal"
              ]
            }
          ],
          "ehr_data": {
            "tableLabBody_name": "",
            "tableLabBody_profession": "",
            "tableLabBody_day": "",
            "tableLabBody_time": "",
            "bdyAccession": "",
            "bdyCollDay": "",
            "bdyCollTime": "",
            "bdyOrderPhys": "",
            "bdyWBC": "",
            "bdyWBCRefInt": "",
            "bdyRBC": "",
            "bdyRBCRefInt": "",
            "bdyType": "",
            "bdyColour": "",
            "bdyClarity": "",
            "bdyVolume": "",
            "bdyNeutrophilsrel": "",
            "bdyNeutrophilsabs": "",
            "bdyNeutrophilsrelref": "",
            "bdyNeutrophilsabsref": "",
            "bdyLymphocytesrel": "",
            "bdyLymphocytesabs": "",
            "bdyLymphocytesrelref": "",
            "bdyLymphocytesabsref": "",
            "bdyMonocytesrel": "",
            "bdyMonocytesabs": "",
            "bdyMonocytesrelref": "",
            "bdyMonocytesabsref": "",
            "bdyMacrophagerel": "",
            "bdyMacrophageabs": "",
            "bdyMacrophagerelref": "",
            "bdyMacrophageabsref": "",
            "bdyOther1label": "",
            "bdyOther1rel": "",
            "bdyOther1abs": "",
            "bdyOther1relref": "",
            "bdyOther1absref": "",
            "bdyOther2label": "",
            "bdyOther2rel": "",
            "bdyOther2abs": "",
            "bdyOther2relref": "",
            "bdyOther2absref": "",
            "bdyComments": "",
            "bdyInternal": ""
          }
        },
        "fqn": "medLabBody.tableLabBody",
        "tableChildren": [
          "tableLabBody_id",
          "tableLabBody_day",
          "tableLabBody_time",
          "bdyAccession",
          "bdyCollDay",
          "bdyCollTime",
          "bdyOrderPhys",
          "bdyWBC",
          "bdyWBCRefInt",
          "bdyRBC",
          "bdyRBCRefInt",
          "bdyType",
          "bdyColour",
          "bdyClarity",
          "bdyVolume",
          "bdyNeutrophilsrel",
          "bdyNeutrophilsabs",
          "bdyNeutrophilsrelref",
          "bdyNeutrophilsabsref",
          "bdyLymphocytesrel",
          "bdyLymphocytesabs",
          "bdyLymphocytesrelref",
          "bdyLymphocytesabsref",
          "bdyMonocytesrel",
          "bdyMonocytesabs",
          "bdyMonocytesrelref",
          "bdyMonocytesabsref",
          "bdyMacrophagerel",
          "bdyMacrophageabs",
          "bdyMacrophagerelref",
          "bdyMacrophageabsref",
          "bdyOther1label",
          "bdyOther1rel",
          "bdyOther1abs",
          "bdyOther1relref",
          "bdyOther1absref",
          "bdyOther2label",
          "bdyOther2rel",
          "bdyOther2abs",
          "bdyOther2relref",
          "bdyOther2absref",
          "bdyComments",
          "bdyInternal",
          "tableLabBody_name",
          "tableLabBody_profession"
        ],
        "hasRecHeader": true
      }
    }
  }
}
export default DEFS