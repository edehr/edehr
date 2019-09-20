/* eslint-disable quotes */
export default function () {
  return {
    demographics: {
      pageTitle: "Demographics",
      pageDataKey: "demographics",
      pageChildren: [
        {
          label: "First name",
          elementKey: "givenName",
          fqn: "demographics.givenName",
          dataCaseStudy: "Erin"
        },
        {
          label: "Middle name(s)",
          elementKey: "middleName",
          fqn: "demographics.middleName"
        },
        {
          label: "Last name",
          elementKey: "familyName",
          fqn: "demographics.familyName",
          dataCaseStudy: "Johns"
        },
        {
          label: "Preferred name",
          elementKey: "preferredName",
          fqn: "demographics.preferredName",
          dataCaseStudy: "Erin"
        },
        {
          label: "Date of birth",
          elementKey: "dateOfBirth",
          fqn: "demographics.dateOfBirth",
          dataCaseStudy: "09-SEP-19##"
        },
        {
          label: "Age",
          elementKey: "personAge",
          fqn: "demographics.personAge",
          dataCaseStudy: "74"
        },
        {
          label: "Height",
          defaultValue: "157",
          elementKey: "height",
          fqn: "demographics.height",
          suffix: "cm",
          dataCaseStudy: "157"
        },
        {
          label: "Weight",
          defaultValue: "63",
          elementKey: "weight",
          fqn: "demographics.weight",
          suffix: "kg",
          dataCaseStudy: "63"
        },
        {
          label: "Gender",
          elementKey: "gender",
          fqn: "demographics.gender",
          options: [
            {
              text: "Unknown"
            },
            {
              text: "Female"
            },
            {
              text: "Male"
            },
            {
              text: "Transgender female"
            },
            {
              text: "Transgender male"
            },
            {
              text: "Undifferentiated"
            },
            {
              text: "Prefer not to say"
            }
          ],
          dataCaseStudy: "Female"
        },
        {
          label: "Martial status",
          elementKey: "martialStatus",
          fqn: "demographics.martialStatus",
          options: [
            {
              text: "Married"
            },
            {
              text: "Single"
            },
            {
              text: "Life partner"
            },
            {
              text: "Divorced"
            },
            {
              text: "Separated"
            },
            {
              text: "Widowed"
            }
          ],
          dataCaseStudy: "Widow"
        },
        {
          label: "Primary language",
          elementKey: "languagePrimary",
          fqn: "demographics.languagePrimary",
          options: [
            {
              text: "English"
            },
            {
              text: "French"
            },
            {
              text: "Spanish"
            },
            {
              text: "German"
            },
            {
              text: "Chinese"
            }
          ],
          dataCaseStudy: "English"
        },
        {
          label: "Religion",
          elementKey: "religion",
          fqn: "demographics.religion"
        },
        {
          label: "Do you identify as an indigenous person?",
          elementKey: "indigenousIdentifyAs",
          fqn: "demographics.indigenousIdentifyAs",
          options: [
            {
              text: "Yes"
            },
            {
              text: "No"
            }
          ],
          dataCaseStudy: "No"
        },
        {
          label: "Street address",
          elementKey: "streetAddress",
          fqn: "demographics.streetAddress",
          dataCaseStudy: "402 Willow St."
        },
        {
          label: "City",
          elementKey: "city",
          fqn: "demographics.city",
          dataCaseStudy: "Vancouver"
        },
        {
          label: "Country",
          defaultValue: "Canada",
          elementKey: "country",
          fqn: "demographics.country",
          dataCaseStudy: "Canada"
        },
        {
          label: "Postal code",
          elementKey: "postalCode",
          fqn: "demographics.postalCode",
          dataCaseStudy: "V3F 9R2"
        },
        {
          label: "No address",
          defaultValue: "FALSE",
          elementKey: "noAddress",
          fqn: "demographics.noAddress"
        },
        {
          label: "Primary phone number",
          elementKey: "phoneNumber",
          fqn: "demographics.phoneNumber",
          dataCaseStudy: "(778) 555-2947"
        },
        {
          label: "Email",
          elementKey: "emailAddress",
          fqn: "demographics.emailAddress"
        },
        {
          label: "Occupation/student",
          elementKey: "occupationStudent",
          fqn: "demographics.occupationStudent",
          dataCaseStudy: "Retired"
        },
        {
          label: "PHN",
          elementKey: "phn",
          fqn: "demographics.phn",
          dataCaseStudy: "12345678"
        },
        {
          label: "MRN",
          elementKey: "mrn",
          fqn: "demographics.mrn"
        },
        {
          label: "Patient service",
          elementKey: "patientService",
          fqn: "demographics.patientService"
        },
        {
          label: "Next of kin name",
          elementKey: "nextOfKinName",
          fqn: "demographics.nextOfKinName",
          dataCaseStudy: "Thomas Johns"
        },
        {
          label: "Next of kin relationship",
          elementKey: "nextOfKinRelationship",
          fqn: "demographics.nextOfKinRelationship",
          options: [
            {
              text: "Wife"
            },
            {
              text: "Husband"
            },
            {
              text: "Mother"
            },
            {
              text: "Father"
            },
            {
              text: "Guardian"
            },
            {
              text: "Sister"
            },
            {
              text: "Brother"
            },
            {
              text: "Daughter"
            },
            {
              text: "Son"
            },
            {
              text: "Aunt"
            },
            {
              text: "Uncle"
            },
            {
              text: "Grandmother"
            },
            {
              text: "Grandfather"
            },
            {
              text: "Friend"
            },
            {
              text: "Other"
            }
          ],
          dataCaseStudy: "Son"
        },
        {
          label: "Next of kin phone",
          elementKey: "nextOfKinPhone",
          fqn: "demographics.nextOfKinPhone",
          dataCaseStudy: "604-555-9865"
        },
        {
          label: "Decision maker name",
          elementKey: "decisionMakerName",
          fqn: "demographics.decisionMakerName",
          dataCaseStudy: "Thomas Johns"
        },
        {
          label: "Decision maker relationship",
          elementKey: "decisionMakerRelationship",
          fqn: "demographics.decisionMakerRelationship",
          options: [
            {
              text: "Spouse"
            },
            {
              text: "Child"
            },
            {
              text: "Parent"
            },
            {
              text: "Sibling"
            },
            {
              text: "Grandparent"
            },
            {
              text: "Grandchild"
            },
            {
              text: "Friend"
            },
            {
              text: "Anyone else related by partnership"
            },
            {
              text: "Public guardian and trustee employee"
            },
            {
              text: "Other"
            }
          ],
          dataCaseStudy: "Son"
        },
        {
          label: "Decision maker phone",
          elementKey: "decisionMakerPhone",
          fqn: "demographics.decisionMakerPhone",
          dataCaseStudy: "604-555-9865"
        }
      ],
      generated: "2019-08-10T11:00:11-07:00",
      hasForm: true,
      pageForm: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                elementKey: "familyName",
                label: "Last name",
                inputType: "text",
                formRow: "1",
                formColumn: "1",
                dataParent: "demographics"
              },
              {
                elementKey: "givenName",
                label: "First name",
                inputType: "text",
                formRow: "1",
                formColumn: "2",
                dataParent: "demographics"
              },
              {
                elementKey: "middleName",
                label: "Middle name(s)",
                inputType: "text",
                formRow: "1",
                formColumn: "3",
                dataParent: "demographics"
              }
            ]
          },
          {
            formRow: "2",
            elements: [
              {
                elementKey: "preferredName",
                label: "Preferred name",
                inputType: "text",
                formRow: "2",
                formColumn: "1",
                dataParent: "demographics"
              },
              {
                elementKey: "dateOfBirth",
                label: "Date of birth",
                inputType: "text",
                formRow: "2",
                formColumn: "2",
                dataParent: "demographics"
              },
              {
                elementKey: "personAge",
                label: "Age",
                inputType: "text",
                formRow: "2",
                formColumn: "3",
                dataParent: "demographics"
              }
            ]
          },
          {
            formRow: "3",
            elements: [
              {
                elementKey: "height",
                label: "Height",
                inputType: "text",
                formRow: "3",
                formColumn: "1",
                formCss: "is-one-third",
                dataParent: "demographics"
              },
              {
                elementKey: "weight",
                label: "Weight",
                inputType: "text",
                formRow: "3",
                formColumn: "2",
                formCss: "is-one-third",
                dataParent: "demographics"
              }
            ]
          },
          {
            formRow: "4",
            elements: [
              {
                elementKey: "gender",
                label: "Gender",
                inputType: "select",
                formRow: "4",
                formColumn: "1",
                formCss: "is-one-third",
                dataParent: "demographics"
              },
              {
                elementKey: "martialStatus",
                label: "Martial status",
                inputType: "select",
                formRow: "4",
                formColumn: "2",
                formCss: "is-one-third",
                dataParent: "demographics"
              }
            ]
          },
          {
            formRow: "5",
            elements: [
              {
                elementKey: "languagePrimary",
                label: "Primary language",
                inputType: "select",
                formRow: "5",
                formColumn: "1",
                dataParent: "demographics"
              },
              {
                elementKey: "religion",
                label: "Religion",
                inputType: "text",
                formRow: "5",
                formColumn: "2",
                dataParent: "demographics"
              },
              {
                elementKey: "indigenousIdentifyAs",
                label: "Do you identify as an indigenous person?",
                inputType: "select",
                formRow: "5",
                formColumn: "3",
                dataParent: "demographics"
              }
            ]
          },
          {
            formRow: "6",
            elements: [
              {
                elementKey: "streetAddress",
                label: "Street address",
                inputType: "text",
                formRow: "6",
                formColumn: "1",
                formCss: "is-two-thirds",
                dataParent: "demographics"
              },
              {
                elementKey: "city",
                label: "City",
                inputType: "text",
                formRow: "6",
                formColumn: "3",
                dataParent: "demographics"
              }
            ]
          },
          {
            formRow: "7",
            elements: [
              {
                elementKey: "country",
                label: "Country",
                inputType: "text",
                formRow: "7",
                formColumn: "1",
                dataParent: "demographics"
              },
              {
                elementKey: "postalCode",
                label: "Postal code",
                inputType: "text",
                formRow: "7",
                formColumn: "2",
                dataParent: "demographics"
              },
              {
                elementKey: "noAddress",
                label: "No address",
                inputType: "checkbox",
                formRow: "7",
                formColumn: "3",
                dataParent: "demographics"
              }
            ]
          },
          {
            formRow: "8",
            elements: [
              {
                elementKey: "phoneNumber",
                label: "Primary phone number",
                inputType: "text",
                formRow: "8",
                formColumn: "1",
                dataParent: "demographics"
              },
              {
                elementKey: "emailAddress",
                label: "Email",
                inputType: "text",
                formRow: "8",
                formColumn: "2",
                dataParent: "demographics"
              },
              {
                elementKey: "occupationStudent",
                label: "Occupation/student",
                inputType: "text",
                formRow: "8",
                formColumn: "3",
                dataParent: "demographics"
              }
            ]
          },
          {
            formRow: "9",
            elements: [
              {
                elementKey: "phn",
                label: "PHN",
                inputType: "text",
                formRow: "9",
                formColumn: "1",
                dataParent: "demographics"
              },
              {
                elementKey: "mrn",
                label: "MRN",
                inputType: "text",
                formRow: "9",
                formColumn: "2",
                dataParent: "demographics"
              },
              {
                elementKey: "patientService",
                label: "Patient service",
                inputType: "text",
                formRow: "9",
                formColumn: "3",
                dataParent: "demographics"
              }
            ]
          },
          {
            formRow: "10",
            elements: [
              {
                elementKey: "nextOfKinName",
                label: "Next of kin name",
                inputType: "text",
                formRow: "10",
                formColumn: "1",
                dataParent: "demographics"
              },
              {
                elementKey: "nextOfKinRelationship",
                label: "Next of kin relationship",
                inputType: "select",
                formRow: "10",
                formColumn: "2",
                dataParent: "demographics"
              },
              {
                elementKey: "nextOfKinPhone",
                label: "Next of kin phone",
                inputType: "text",
                formRow: "10",
                formColumn: "3",
                dataParent: "demographics"
              }
            ]
          },
          {
            formRow: "11",
            elements: [
              {
                elementKey: "decisionMakerName",
                label: "Decision maker name",
                inputType: "text",
                formRow: "11",
                formColumn: "1",
                dataParent: "demographics"
              },
              {
                elementKey: "decisionMakerRelationship",
                label: "Decision maker relationship",
                inputType: "select",
                formRow: "11",
                formColumn: "2",
                dataParent: "demographics"
              },
              {
                elementKey: "decisionMakerPhone",
                label: "Decision maker phone",
                inputType: "text",
                formRow: "11",
                formColumn: "3",
                dataParent: "demographics"
              }
            ]
          }
        ],
        columnsCount: 3
      }
    },
    allergies: {
      pageTitle: "Allergies",
      pageDataKey: "allergies",
      pageChildren: [
        {
          label: "Allergies",
          elementKey: "allergies",
          fqn: "allergies.allergies"
        },
        {
          label: "No known allergies",
          defaultValue: "TRUE",
          elementKey: "hasNoAllergies",
          fqn: "allergies.hasNoAllergies",
          dataCaseStudy: "TRUE"
        }
      ],
      generated: "2019-08-10T11:00:11-07:00",
      hasForm: true,
      pageForm: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                elementKey: "hasNoAllergies",
                label: "No known allergies",
                inputType: "checkbox",
                formRow: "1",
                formColumn: "1",
                dataParent: "allergies"
              }
            ]
          },
          {
            formRow: "2",
            elements: [
              {
                elementKey: "allergies",
                label: "Allergies",
                inputType: "text",
                formRow: "2",
                formColumn: "1",
                formCss: "is-one-third",
                dataParent: "allergies"
              }
            ]
          }
        ],
        columnsCount: 1
      }
    },
    medical: {
      pageTitle: "Medical history",
      pageDataKey: "medical",
      pageChildren: [
        {
          label: "Past medical history",
          elementKey: "history",
          fqn: "medical.history"
        }
      ],
      generated: "2019-08-10T11:00:11-07:00",
      hasForm: true,
      pageForm: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                elementKey: "history",
                label: "Past medical history",
                inputType: "textarea",
                formRow: "1",
                formColumn: "1",
                dataParent: "medical"
              }
            ]
          }
        ],
        columnsCount: 1
      }
    },
    psychosocial: {
      pageTitle: "Psychosocial history",
      pageDataKey: "psychosocial",
      pageChildren: [
        {
          label: "Psychosocial history",
          elementKey: "history",
          fqn: "psychosocial.history",
          dataCaseStudy: "Feels down when she thinks about her lower financial status and her advancing age, and how she is becoming more forgetful and less energetic. Often feels alone and worries about falling and not being able to alert anyone to come to her rescue. Driving is becoming hard for her."
        },
        {
          label: "Diet",
          elementKey: "diet",
          fqn: "psychosocial.diet",
          dataCaseStudy: "Regular"
        },
        {
          label: "Living situation",
          elementKey: "livingSituation",
          fqn: "psychosocial.livingSituation",
          dataCaseStudy: "Son lives with her in her house"
        },
        {
          label: "Employment/school",
          elementKey: "employmentSchool",
          fqn: "psychosocial.employmentSchool",
          dataCaseStudy: "Retired hairdresser"
        },
        {
          label: "Hobbies",
          elementKey: "hobbies",
          fqn: "psychosocial.hobbies",
          dataCaseStudy: "Bingo, Netflix, playing Solitaire and Scrabble with friends on her iPad"
        },
        {
          label: "Exercise",
          elementKey: "exercise",
          fqn: "psychosocial.behaviours.exercise",
          dataCaseStudy: "TRUE"
        },
        {
          label: "Exercise frequency",
          dependantOn: "exercise",
          elementKey: "exerciseFrequency",
          fqn: "psychosocial.behaviours.exerciseFrequency",
          formOption: "hideLabel",
          dataCaseStudy: "< 1 day/week"
        },
        {
          label: "Caffeine use",
          elementKey: "caffeineUse",
          fqn: "psychosocial.behaviours.caffeineUse",
          dataCaseStudy: "TRUE"
        },
        {
          label: "Caffeine use frequency",
          dependantOn: "caffeineUse",
          elementKey: "caffeineUseFrequency",
          fqn: "psychosocial.behaviours.caffeineUseFrequency",
          formOption: "hideLabel",
          dataCaseStudy: "1-2 cups/day"
        },
        {
          label: "Tobacco use",
          elementKey: "tobaccoUse",
          fqn: "psychosocial.behaviours.tobaccoUse",
          helperText: "Have you used any tobacco products in the last 6 months?\nHave you used any tobacco products in the last 7 days?",
          dataCaseStudy: "TRUE",
          helperHtml: "<p>Have you used any tobacco products in the last 6 months?</p>\n<p>Have you used any tobacco products in the last 7 days?</p>"
        },
        {
          label: "Tobacco use frequency",
          dependantOn: "tobaccoUse",
          elementKey: "tobaccoUseFrequency",
          fqn: "psychosocial.behaviours.tobaccoUseFrequency",
          formOption: "hideLabel",
          dataCaseStudy: "History of smoking"
        },
        {
          label: "Cannabis use",
          elementKey: "cannabisUse",
          fqn: "psychosocial.behaviours.cannabisUse",
          helperText: "Have you used any cannabis products in the last 6 months?\nHave you used any cannabis products in the last 7 days?",
          helperHtml: "<p>Have you used any cannabis products in the last 6 months?</p>\n<p>Have you used any cannabis products in the last 7 days?</p>"
        },
        {
          label: "Cannabis use frequency",
          dependantOn: "cannabisUse",
          elementKey: "cannabisUseFrequency",
          fqn: "psychosocial.behaviours.cannabisUseFrequency",
          formOption: "hideLabel"
        },
        {
          label: "Alcohol use",
          elementKey: "alcoholUse",
          fqn: "psychosocial.behaviours.alcoholUse",
          helperText: "CAGE questionaire\nHave you ever felt that you should cut down on your drinking?\nHave you ever become annoyed by criticisms of your drinking?\nHave you ever felt guilty about your drinking?\nHave you ever had a morning eye opener to get rid of a hangover?",
          dataCaseStudy: "TRUE",
          helperHtml: "<p>CAGE questionaire</p>\n<p>Have you ever felt that you should cut down on your drinking?</p>\n<p>Have you ever become annoyed by criticisms of your drinking?</p>\n<p>Have you ever felt guilty about your drinking?</p>\n<p>Have you ever had a morning eye opener to get rid of a hangover?</p>"
        },
        {
          label: "Alcohol use frequency",
          dependantOn: "alcoholUse",
          elementKey: "alcoholUseFrequency",
          fqn: "psychosocial.behaviours.alcoholUseFrequency",
          formOption: "hideLabel",
          dataCaseStudy: "Social"
        },
        {
          label: "Substance use",
          elementKey: "substanceUse",
          fqn: "psychosocial.behaviours.substanceUse",
          helperText: "Have you used any substances in the last 6 months?\nHave you used any substances in the last 7 days?\nIf so, make notes about which ones.",
          helperHtml: "<p>Have you used any substances in the last 6 months?</p>\n<p>Have you used any substances in the last 7 days?</p>\n<p>If so, make notes about which ones.</p>"
        },
        {
          label: "Substance use frequency",
          dependantOn: "substanceUse",
          elementKey: "substanceUseFrequency",
          fqn: "psychosocial.behaviours.substanceUseFrequency",
          formOption: "hideLabel"
        }
      ],
      generated: "2019-08-10T11:00:11-07:00",
      hasForm: true,
      pageForm: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                elementKey: "history",
                label: "Psychosocial history",
                inputType: "textarea",
                formRow: "1",
                formColumn: "1",
                dataParent: "psychosocial"
              },
              {
                elementKey: "diet",
                label: "Diet",
                inputType: "textarea",
                formRow: "1",
                formColumn: "2",
                dataParent: "psychosocial"
              },
              {
                elementKey: "livingSituation",
                label: "Living situation",
                inputType: "textarea",
                formRow: "1",
                formColumn: "3",
                dataParent: "psychosocial"
              }
            ]
          },
          {
            formRow: "2",
            elements: [
              {
                elementKey: "employmentSchool",
                label: "Employment/school",
                inputType: "textarea",
                formRow: "2",
                formColumn: "1",
                dataParent: "psychosocial"
              },
              {
                elementKey: "hobbies",
                label: "Hobbies",
                inputType: "textarea",
                formRow: "2",
                formColumn: "2",
                dataParent: "psychosocial"
              }
            ]
          },
          {
            formRow: "3",
            elements: [
              {
                elementKey: "behaviours",
                inputType: "fieldset",
                formRow: "3",
                formColumn: "1",
                formCss: "check_with_text_group",
                dataParent: "psychosocial",
                formFieldSet: {
                  rows: [
                    {
                      formRow: "1",
                      elements: [
                        {
                          elementKey: "exercise",
                          label: "Exercise",
                          inputType: "checkbox",
                          fsetRow: "1",
                          formCss: "is-one-quarter",
                          dataParent: "psychosocial.behaviours"
                        },
                        {
                          elementKey: "exerciseFrequency",
                          label: "Exercise frequency",
                          inputType: "text",
                          fsetRow: "1",
                          formCss: "is-one-third",
                          dataParent: "psychosocial.behaviours"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          elementKey: "caffeineUse",
                          label: "Caffeine use",
                          inputType: "checkbox",
                          fsetRow: "2",
                          formCss: "is-one-quarter",
                          dataParent: "psychosocial.behaviours"
                        },
                        {
                          elementKey: "caffeineUseFrequency",
                          label: "Caffeine use frequency",
                          inputType: "text",
                          fsetRow: "2",
                          formCss: "is-one-third",
                          dataParent: "psychosocial.behaviours"
                        }
                      ]
                    },
                    {
                      formRow: "3",
                      elements: [
                        {
                          elementKey: "tobaccoUse",
                          label: "Tobacco use",
                          inputType: "checkbox",
                          fsetRow: "3",
                          formCss: "is-one-quarter",
                          dataParent: "psychosocial.behaviours"
                        },
                        {
                          elementKey: "tobaccoUseFrequency",
                          label: "Tobacco use frequency",
                          inputType: "text",
                          fsetRow: "3",
                          formCss: "is-one-third",
                          dataParent: "psychosocial.behaviours"
                        }
                      ]
                    },
                    {
                      formRow: "4",
                      elements: [
                        {
                          elementKey: "cannabisUse",
                          label: "Cannabis use",
                          inputType: "checkbox",
                          fsetRow: "4",
                          formCss: "is-one-quarter",
                          dataParent: "psychosocial.behaviours"
                        },
                        {
                          elementKey: "cannabisUseFrequency",
                          label: "Cannabis use frequency",
                          inputType: "text",
                          fsetRow: "4",
                          formCss: "is-one-third",
                          dataParent: "psychosocial.behaviours"
                        }
                      ]
                    },
                    {
                      formRow: "5",
                      elements: [
                        {
                          elementKey: "alcoholUse",
                          label: "Alcohol use",
                          inputType: "checkbox",
                          fsetRow: "5",
                          formCss: "is-one-quarter",
                          dataParent: "psychosocial.behaviours"
                        },
                        {
                          elementKey: "alcoholUseFrequency",
                          label: "Alcohol use frequency",
                          inputType: "text",
                          fsetRow: "5",
                          formCss: "is-one-third",
                          dataParent: "psychosocial.behaviours"
                        }
                      ]
                    },
                    {
                      formRow: "6",
                      elements: [
                        {
                          elementKey: "substanceUse",
                          label: "Substance use",
                          inputType: "checkbox",
                          fsetRow: "6",
                          formCss: "is-one-quarter",
                          dataParent: "psychosocial.behaviours"
                        },
                        {
                          elementKey: "substanceUseFrequency",
                          label: "Substance use frequency",
                          inputType: "text",
                          fsetRow: "6",
                          formCss: "is-one-third",
                          dataParent: "psychosocial.behaviours"
                        }
                      ]
                    }
                  ],
                  columnsCount: 2
                }
              }
            ]
          }
        ],
        columnsCount: 3
      }
    },
    surgical: {
      pageTitle: "Surgical history",
      pageDataKey: "surgical",
      pageChildren: [
        {
          label: "Performing physician",
          elementKey: "physician",
          fqn: "surgical.pastSurgery.physician"
        },
        {
          label: "Surgery/procedure",
          elementKey: "procedure",
          fqn: "surgical.pastSurgery.procedure",
          dataCaseStudy: "Cesarean section"
        },
        {
          label: "Time elapsed since surgery",
          elementKey: "timeSince",
          fqn: "surgical.pastSurgery.timeSince"
        },
        {
          label: "Appointment with",
          elementKey: "with",
          fqn: "surgical.previous.with"
        },
        {
          label: "Appointment details",
          elementKey: "details",
          fqn: "surgical.previous.details"
        },
        {
          label: "Previous admission reason",
          elementKey: "previousAdmissions",
          fqn: "surgical.previous.previousAdmissions"
        },
        {
          label: "Date",
          elementKey: "previousAdmissionsDate",
          fqn: "surgical.previous.previousAdmissionsDate"
        },
        {
          label: "General comments",
          elementKey: "comments",
          fqn: "surgical.previous.comments"
        }
      ],
      generated: "2019-08-10T11:00:11-07:00",
      hasTable: true,
      tables: [
        {
          pageDataKey: "surgical",
          tableKey: "pastSurgery",
          label: "Past surgery",
          addButtonText: "Add a past surgery",
          tableCells: [
            {
              elementKey: "physician",
              label: "Performing physician",
              tableColumn: "1",
              inputType: "text"
            },
            {
              elementKey: "procedure",
              label: "Surgery/procedure",
              tableColumn: "2",
              inputType: "text"
            },
            {
              elementKey: "timeSince",
              label: "Time elapsed since surgery",
              tableColumn: "3",
              inputType: "text"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    elementKey: "physician",
                    label: "Performing physician",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    dataParent: "surgical.pastSurgery",
                    tableKey: "pastSurgery"
                  },
                  {
                    elementKey: "procedure",
                    label: "Surgery/procedure",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    dataParent: "surgical.pastSurgery",
                    tableKey: "pastSurgery"
                  },
                  {
                    elementKey: "timeSince",
                    label: "Time elapsed since surgery",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "3",
                    dataParent: "surgical.pastSurgery",
                    tableKey: "pastSurgery"
                  }
                ]
              }
            ],
            columnsCount: 3
          }
        },
        {
          pageDataKey: "surgical",
          tableKey: "previous",
          label: "Previous admission",
          addButtonText: "Add a previous appointment",
          tableCells: [
            {
              elementKey: "with",
              label: "Appointment with",
              tableColumn: "1",
              inputType: "text"
            },
            {
              elementKey: "details",
              label: "Appointment details",
              tableColumn: "2",
              inputType: "text"
            },
            {
              elementKey: "previousAdmissions",
              label: "Previous admission reason",
              tableColumn: "3",
              inputType: "text"
            },
            {
              elementKey: "previousAdmissionsDate",
              label: "Date",
              tableColumn: "4",
              inputType: "date"
            },
            {
              elementKey: "comments",
              label: "General comments",
              tableColumn: "5",
              inputType: "textarea"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    elementKey: "with",
                    label: "Appointment with",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    formCss: "is-one-third",
                    dataParent: "surgical.previous",
                    tableKey: "previous"
                  },
                  {
                    elementKey: "details",
                    label: "Appointment details",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "is-one-third",
                    dataParent: "surgical.previous",
                    tableKey: "previous"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "previousAdmissions",
                    label: "Previous admission reason",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "1",
                    formCss: "is-one-third",
                    dataParent: "surgical.previous",
                    tableKey: "previous"
                  },
                  {
                    elementKey: "previousAdmissionsDate",
                    label: "Date",
                    inputType: "date",
                    formRow: "2",
                    formColumn: "2",
                    formCss: "is-one-third",
                    dataParent: "surgical.previous",
                    tableKey: "previous"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    elementKey: "comments",
                    label: "General comments",
                    inputType: "textarea",
                    formRow: "3",
                    formColumn: "1",
                    dataParent: "surgical.previous",
                    tableKey: "previous"
                  }
                ]
              }
            ],
            columnsCount: 2
          }
        }
      ]
    },
    immunization: {
      pageTitle: "Immunization history",
      pageDataKey: "immunization",
      pageChildren: [
        {
          label: "Hep A",
          elementKey: "hepA",
          fqn: "immunization.hepA"
        },
        {
          label: "Hep A date",
          dependantOn: "hepA",
          elementKey: "hepADate",
          fqn: "immunization.hepADate",
          formOption: "hideLabel"
        },
        {
          label: "Hep B",
          elementKey: "hepB",
          fqn: "immunization.hepB"
        },
        {
          label: "Hep B date",
          dependantOn: "hepB",
          elementKey: "hepBDate",
          fqn: "immunization.hepBDate",
          formOption: "hideLabel"
        },
        {
          label: "MMR",
          elementKey: "mmr",
          fqn: "immunization.mmr"
        },
        {
          label: "MMR date",
          dependantOn: "mmr",
          elementKey: "mmrDate",
          fqn: "immunization.mmrDate",
          formOption: "hideLabel"
        },
        {
          label: "Pneumococcal",
          elementKey: "pneumococcal",
          fqn: "immunization.pneumococcal"
        },
        {
          label: "Pneumococcal date",
          dependantOn: "pneumococcal",
          elementKey: "pneumococcalDate",
          fqn: "immunization.pneumococcalDate",
          formOption: "hideLabel"
        },
        {
          label: "Polio diptheria pertussis",
          elementKey: "polioDiptheriaPertussis",
          fqn: "immunization.polioDiptheriaPertussis"
        },
        {
          label: "Polio diptheria pertussis date",
          dependantOn: "polioDiptheriaPertussis",
          elementKey: "polioDiptheriaPertussisDate",
          fqn: "immunization.polioDiptheriaPertussisDate",
          formOption: "hideLabel"
        },
        {
          label: "TB",
          elementKey: "tb",
          fqn: "immunization.tb"
        },
        {
          label: "TB date",
          dependantOn: "tb",
          elementKey: "tbDate",
          fqn: "immunization.tbDate",
          formOption: "hideLabel"
        },
        {
          label: "Tetanus",
          elementKey: "tetanus",
          fqn: "immunization.tetanus"
        },
        {
          label: "Tetanus date",
          dependantOn: "tetanus",
          elementKey: "tetanusDate",
          fqn: "immunization.tetanusDate",
          formOption: "hideLabel"
        },
        {
          elementKey: "other1",
          fqn: "immunization.other1"
        },
        {
          label: "Date",
          elementKey: "otherDate1",
          fqn: "immunization.otherDate1",
          formOption: "hideLabel"
        },
        {
          elementKey: "other2",
          fqn: "immunization.other2"
        },
        {
          label: "Date",
          elementKey: "otherDate2",
          fqn: "immunization.otherDate2",
          formOption: "hideLabel"
        },
        {
          elementKey: "other3",
          fqn: "immunization.other3"
        },
        {
          label: "Date",
          elementKey: "otherDate3",
          fqn: "immunization.otherDate3",
          formOption: "hideLabel"
        }
      ],
      generated: "2019-08-10T11:00:11-07:00",
      hasForm: true,
      pageForm: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                elementKey: "hepA",
                label: "Hep A",
                inputType: "checkbox",
                formRow: "1",
                formColumn: "1",
                dataParent: "immunization"
              },
              {
                elementKey: "hepADate",
                label: "Hep A date",
                inputType: "date",
                formRow: "1",
                formColumn: "2",
                dataParent: "immunization"
              }
            ]
          },
          {
            formRow: "2",
            elements: [
              {
                elementKey: "hepB",
                label: "Hep B",
                inputType: "checkbox",
                formRow: "2",
                formColumn: "1",
                dataParent: "immunization"
              },
              {
                elementKey: "hepBDate",
                label: "Hep B date",
                inputType: "date",
                formRow: "2",
                formColumn: "2",
                dataParent: "immunization"
              }
            ]
          },
          {
            formRow: "3",
            elements: [
              {
                elementKey: "mmr",
                label: "MMR",
                inputType: "checkbox",
                formRow: "3",
                formColumn: "1",
                dataParent: "immunization"
              },
              {
                elementKey: "mmrDate",
                label: "MMR date",
                inputType: "date",
                formRow: "3",
                formColumn: "2",
                dataParent: "immunization"
              }
            ]
          },
          {
            formRow: "4",
            elements: [
              {
                elementKey: "pneumococcal",
                label: "Pneumococcal",
                inputType: "checkbox",
                formRow: "4",
                formColumn: "1",
                dataParent: "immunization"
              },
              {
                elementKey: "pneumococcalDate",
                label: "Pneumococcal date",
                inputType: "date",
                formRow: "4",
                formColumn: "2",
                dataParent: "immunization"
              }
            ]
          },
          {
            formRow: "5",
            elements: [
              {
                elementKey: "polioDiptheriaPertussis",
                label: "Polio diptheria pertussis",
                inputType: "checkbox",
                formRow: "5",
                formColumn: "1",
                dataParent: "immunization"
              },
              {
                elementKey: "polioDiptheriaPertussisDate",
                label: "Polio diptheria pertussis date",
                inputType: "date",
                formRow: "5",
                formColumn: "2",
                dataParent: "immunization"
              }
            ]
          },
          {
            formRow: "6",
            elements: [
              {
                elementKey: "tb",
                label: "TB",
                inputType: "checkbox",
                formRow: "6",
                formColumn: "1",
                dataParent: "immunization"
              },
              {
                elementKey: "tbDate",
                label: "TB date",
                inputType: "date",
                formRow: "6",
                formColumn: "2",
                dataParent: "immunization"
              }
            ]
          },
          {
            formRow: "7",
            elements: [
              {
                elementKey: "tetanus",
                label: "Tetanus",
                inputType: "checkbox",
                formRow: "7",
                formColumn: "1",
                dataParent: "immunization"
              },
              {
                elementKey: "tetanusDate",
                label: "Tetanus date",
                inputType: "date",
                formRow: "7",
                formColumn: "2",
                dataParent: "immunization"
              }
            ]
          },
          {
            formRow: "8",
            elements: [
              {
                elementKey: "other1",
                inputType: "text",
                formRow: "8",
                formColumn: "1",
                dataParent: "immunization"
              },
              {
                elementKey: "otherDate1",
                label: "Date",
                inputType: "date",
                formRow: "8",
                formColumn: "2",
                dataParent: "immunization"
              }
            ]
          },
          {
            formRow: "9",
            elements: [
              {
                elementKey: "other2",
                inputType: "text",
                formRow: "9",
                formColumn: "1",
                dataParent: "immunization"
              },
              {
                elementKey: "otherDate2",
                label: "Date",
                inputType: "date",
                formRow: "9",
                formColumn: "2",
                dataParent: "immunization"
              }
            ]
          },
          {
            formRow: "10",
            elements: [
              {
                elementKey: "other3",
                inputType: "text",
                formRow: "10",
                formColumn: "1",
                dataParent: "immunization"
              },
              {
                elementKey: "otherDate3",
                label: "Date",
                inputType: "date",
                formRow: "10",
                formColumn: "2",
                dataParent: "immunization"
              }
            ]
          }
        ],
        columnsCount: 2
      }
    },
    familyHistory: {
      pageTitle: "Family history",
      pageDataKey: "familyHistory",
      pageChildren: [
        {
          label: "Family medical history",
          elementKey: "history",
          fqn: "familyHistory.history"
        }
      ],
      generated: "2019-08-10T11:00:11-07:00",
      hasForm: true,
      pageForm: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                elementKey: "history",
                label: "Family medical history",
                inputType: "textarea",
                formRow: "1",
                formColumn: "1",
                dataParent: "familyHistory"
              }
            ]
          }
        ],
        columnsCount: 1
      }
    },
    careTeam: {
      pageTitle: "Care team",
      pageDataKey: "careTeam",
      pageChildren: [
        {
          label: "Name",
          elementKey: "name",
          fqn: "careTeam.teams.name",
          dataCaseStudy: "Dr. Singh-NL-Dr. Notley-NL-Jason-NL-Jackie-NL-Gurpreet-NL-Alexa-NL-Matt-NL-Serge-NL-Trache-NL-Dr. Hunnicutt-NL-Jim-NL-Gladys-NL-Herman"
        },
        {
          label: "Profession",
          elementKey: "profession",
          fqn: "careTeam.teams.profession",
          dataCaseStudy: "Physician-NL-Physician-NL-Nurse-NL-Nurse-NL-Medical radiograpeor-NL-Medical laboratory technician-NL-Medical radiographer-NL-RN-NL-Physician-NL-RN-NL-Pysiotherapy student-NL-Resp. therapist"
        }
      ],
      generated: "2019-08-10T11:00:11-07:00",
      hasTable: true,
      tables: [
        {
          pageDataKey: "careTeam",
          tableKey: "teams",
          addButtonText: "Add a care team member",
          tableCells: [
            {
              elementKey: "name",
              label: "Name",
              tableColumn: "1",
              tableCss: "is-one-third",
              inputType: "text"
            },
            {
              elementKey: "profession",
              label: "Profession",
              tableColumn: "2",
              inputType: "text"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    elementKey: "name",
                    label: "Name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    dataParent: "careTeam.teams",
                    tableKey: "teams"
                  },
                  {
                    elementKey: "profession",
                    label: "Profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    dataParent: "careTeam.teams",
                    tableKey: "teams"
                  }
                ]
              }
            ],
            columnsCount: 2
          }
        }
      ]
    },
    pastAppointments: {
      pageTitle: "Past appointments",
      pageDataKey: "pastAppointments",
      pageChildren: [
        {
          label: "Date",
          elementKey: "date",
          fqn: "pastAppointments.encounters.date"
        },
        {
          label: "Site",
          elementKey: "site",
          fqn: "pastAppointments.encounters.site"
        },
        {
          label: "Diagnosis",
          elementKey: "diagnosis",
          fqn: "pastAppointments.encounters.diagnosis",
          dataCaseStudy: "(none available)"
        },
        {
          label: "Most responsible person",
          elementKey: "mrp",
          fqn: "pastAppointments.encounters.mrp",
          dataCaseStudy: "(none available)"
        },
        {
          label: "Date",
          elementKey: "date",
          fqn: "pastAppointments.outpatientAppointments.date",
          dataCaseStudy: "1 week ago"
        },
        {
          label: "Site",
          elementKey: "site",
          fqn: "pastAppointments.outpatientAppointments.site",
          dataCaseStudy: "Clinic"
        },
        {
          label: "Reason for visit",
          elementKey: "reasonForVisit",
          fqn: "pastAppointments.outpatientAppointments.reasonForVisit",
          dataCaseStudy: "Shortness of breath x 24 hrs"
        },
        {
          label: "Diagnosis",
          elementKey: "diagnosis",
          fqn: "pastAppointments.outpatientAppointments.diagnosis",
          dataCaseStudy: "COPD"
        }
      ],
      generated: "2019-08-10T11:00:11-07:00",
      hasTable: true,
      tables: [
        {
          pageDataKey: "pastAppointments",
          tableKey: "encounters",
          label: "Past encounters",
          addButtonText: "Add a past encounter",
          tableCells: [
            {
              elementKey: "date",
              label: "Date",
              tableColumn: "1",
              inputType: "date"
            },
            {
              elementKey: "site",
              label: "Site",
              tableColumn: "2",
              inputType: "text"
            },
            {
              elementKey: "diagnosis",
              label: "Diagnosis",
              tableColumn: "3",
              inputType: "text"
            },
            {
              elementKey: "mrp",
              label: "Most responsible person",
              tableColumn: "4",
              inputType: "text"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    elementKey: "date",
                    label: "Date",
                    inputType: "date",
                    formRow: "1",
                    formColumn: "1",
                    dataParent: "pastAppointments.encounters",
                    tableKey: "encounters"
                  },
                  {
                    elementKey: "site",
                    label: "Site",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    dataParent: "pastAppointments.encounters",
                    tableKey: "encounters"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "diagnosis",
                    label: "Diagnosis",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "1",
                    dataParent: "pastAppointments.encounters",
                    tableKey: "encounters"
                  },
                  {
                    elementKey: "mrp",
                    label: "Most responsible person",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "2",
                    dataParent: "pastAppointments.encounters",
                    tableKey: "encounters"
                  }
                ]
              }
            ],
            columnsCount: 2
          }
        },
        {
          pageDataKey: "pastAppointments",
          tableKey: "outpatientAppointments",
          label: "Outpatient appointments",
          addButtonText: "Add a past appointment",
          tableCells: [
            {
              elementKey: "date",
              label: "Date",
              tableColumn: "1",
              inputType: "text"
            },
            {
              elementKey: "site",
              label: "Site",
              tableColumn: "2",
              inputType: "text"
            },
            {
              elementKey: "reasonForVisit",
              label: "Reason for visit",
              tableColumn: "3",
              inputType: "text"
            },
            {
              elementKey: "diagnosis",
              label: "Diagnosis",
              tableColumn: "4",
              inputType: "text"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    elementKey: "date",
                    label: "Date",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    dataParent: "pastAppointments.outpatientAppointments",
                    tableKey: "outpatientAppointments"
                  },
                  {
                    elementKey: "site",
                    label: "Site",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    dataParent: "pastAppointments.outpatientAppointments",
                    tableKey: "outpatientAppointments"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "reasonForVisit",
                    label: "Reason for visit",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "1",
                    dataParent: "pastAppointments.outpatientAppointments",
                    tableKey: "outpatientAppointments"
                  },
                  {
                    elementKey: "diagnosis",
                    label: "Diagnosis",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "2",
                    dataParent: "pastAppointments.outpatientAppointments",
                    tableKey: "outpatientAppointments"
                  }
                ]
              }
            ],
            columnsCount: 2
          }
        }
      ]
    }
  }
}