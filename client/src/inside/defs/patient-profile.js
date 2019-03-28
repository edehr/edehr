/* eslint-disable quotes */
export default function () {
  return {
    demographics: {
      pageTitle: "Demographics",
      pageDataKey: "demographics",
      generated: "2019-03-28T15:52:06-07:00",
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                label: "Last name",
                pageDataKey: "demographics",
                elementKey: "familyName",
                inputType: "text",
                formRow: "1",
                formColumn: "1",
                mandatory: "yes",
                dataParent: "demographics",
                fqn: "demographics.familyName"
              },
              {
                label: "First name",
                pageDataKey: "demographics",
                elementKey: "givenName",
                inputType: "text",
                formRow: "1",
                formColumn: "2",
                mandatory: "yes",
                dataParent: "demographics",
                fqn: "demographics.givenName"
              },
              {
                label: "Middle name(s)",
                pageDataKey: "demographics",
                elementKey: "middleName",
                inputType: "text",
                formRow: "1",
                formColumn: "3",
                dataParent: "demographics",
                fqn: "demographics.middleName"
              }
            ]
          },
          {
            formRow: "2",
            elements: [
              {
                label: "Preferred name",
                pageDataKey: "demographics",
                elementKey: "preferredName",
                inputType: "text",
                formRow: "2",
                formColumn: "1",
                dataParent: "demographics",
                fqn: "demographics.preferredName"
              },
              {
                label: "Date of birth",
                pageDataKey: "demographics",
                elementKey: "dateOfBirth",
                inputType: "text",
                formRow: "2",
                formColumn: "2",
                dataParent: "demographics",
                fqn: "demographics.dateOfBirth"
              },
              {
                label: "Age",
                pageDataKey: "demographics",
                elementKey: "personAge",
                inputType: "text",
                formRow: "2",
                formColumn: "3",
                mandatory: "yes",
                dataParent: "demographics",
                fqn: "demographics.personAge"
              }
            ]
          },
          {
            formRow: "3",
            elements: [
              {
                label: "Gender",
                pageDataKey: "demographics",
                elementKey: "gender",
                inputType: "select",
                formRow: "3",
                formColumn: "1",
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
                mandatory: "yes",
                dataParent: "demographics",
                fqn: "demographics.gender"
              },
              {
                label: "Martial status",
                pageDataKey: "demographics",
                elementKey: "martialStatus",
                inputType: "select",
                formRow: "3",
                formColumn: "2",
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
                dataParent: "demographics",
                fqn: "demographics.martialStatus"
              }
            ]
          },
          {
            formRow: "4",
            elements: [
              {
                label: "Primary language",
                pageDataKey: "demographics",
                elementKey: "languagePrimary",
                inputType: "select",
                formRow: "4",
                formColumn: "1",
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
                dataParent: "demographics",
                fqn: "demographics.languagePrimary"
              },
              {
                label: "Religion",
                pageDataKey: "demographics",
                elementKey: "religion",
                inputType: "text",
                formRow: "4",
                formColumn: "2",
                dataParent: "demographics",
                fqn: "demographics.religion"
              },
              {
                label: "Do you identify as an indigenous person?",
                pageDataKey: "demographics",
                elementKey: "indigenousIdentifyAs",
                inputType: "select",
                formRow: "4",
                formColumn: "3",
                options: [
                  {
                    text: "Yes"
                  },
                  {
                    text: "No"
                  }
                ],
                dataParent: "demographics",
                fqn: "demographics.indigenousIdentifyAs"
              }
            ]
          },
          {
            formRow: "5",
            elements: [
              {
                label: "Street address",
                pageDataKey: "demographics",
                elementKey: "streetAddress",
                inputType: "text",
                formRow: "5",
                formColumn: "1",
                dataParent: "demographics",
                fqn: "demographics.streetAddress"
              },
              {
                label: "City",
                pageDataKey: "demographics",
                elementKey: "city",
                inputType: "text",
                formRow: "5",
                formColumn: "3",
                dataParent: "demographics",
                fqn: "demographics.city"
              }
            ]
          },
          {
            formRow: "6",
            elements: [
              {
                label: "Country",
                pageDataKey: "demographics",
                elementKey: "country",
                inputType: "text",
                formRow: "6",
                formColumn: "1",
                defaultValue: "Canada",
                dataParent: "demographics",
                fqn: "demographics.country"
              },
              {
                label: "Postal code",
                pageDataKey: "demographics",
                elementKey: "postalCode",
                inputType: "text",
                formRow: "6",
                formColumn: "2",
                dataParent: "demographics",
                fqn: "demographics.postalCode"
              },
              {
                label: "No address",
                pageDataKey: "demographics",
                elementKey: "noAddress",
                inputType: "checkbox",
                formRow: "6",
                formColumn: "3",
                dataParent: "demographics",
                fqn: "demographics.noAddress"
              }
            ]
          },
          {
            formRow: "7",
            elements: [
              {
                label: "Primary phone number",
                pageDataKey: "demographics",
                elementKey: "phoneNumber",
                inputType: "text",
                formRow: "7",
                formColumn: "1",
                dataParent: "demographics",
                fqn: "demographics.phoneNumber"
              },
              {
                label: "Email",
                pageDataKey: "demographics",
                elementKey: "emailAddress",
                inputType: "text",
                formRow: "7",
                formColumn: "2",
                dataParent: "demographics",
                fqn: "demographics.emailAddress"
              },
              {
                label: "Occupation/student",
                pageDataKey: "demographics",
                elementKey: "occupationStudent",
                inputType: "text",
                formRow: "7",
                formColumn: "3",
                dataParent: "demographics",
                fqn: "demographics.occupationStudent"
              }
            ]
          },
          {
            formRow: "8",
            elements: [
              {
                label: "PHN",
                pageDataKey: "demographics",
                elementKey: "phn",
                inputType: "text",
                formRow: "8",
                formColumn: "1",
                dataParent: "demographics",
                fqn: "demographics.phn"
              },
              {
                label: "MRN",
                pageDataKey: "demographics",
                elementKey: "mrn",
                inputType: "text",
                formRow: "8",
                formColumn: "2",
                dataParent: "demographics",
                fqn: "demographics.mrn"
              },
              {
                label: "Patient service",
                pageDataKey: "demographics",
                elementKey: "patientService",
                inputType: "text",
                formRow: "8",
                formColumn: "3",
                dataParent: "demographics",
                fqn: "demographics.patientService"
              }
            ]
          },
          {
            formRow: "9",
            elements: [
              {
                label: "Next of kin name",
                pageDataKey: "demographics",
                elementKey: "nextOfKinName",
                inputType: "text",
                formRow: "9",
                formColumn: "1",
                dataParent: "demographics",
                fqn: "demographics.nextOfKinName"
              },
              {
                label: "Next of kin relationship",
                pageDataKey: "demographics",
                elementKey: "nextOfKinRelationship",
                inputType: "select",
                formRow: "9",
                formColumn: "2",
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
                dataParent: "demographics",
                fqn: "demographics.nextOfKinRelationship"
              },
              {
                label: "Next of kin phone",
                pageDataKey: "demographics",
                elementKey: "nextOfKinPhone",
                inputType: "text",
                formRow: "9",
                formColumn: "3",
                dataParent: "demographics",
                fqn: "demographics.nextOfKinPhone"
              }
            ]
          },
          {
            formRow: "10",
            elements: [
              {
                label: "Decision maker name",
                pageDataKey: "demographics",
                elementKey: "decisionMakerName",
                inputType: "text",
                formRow: "10",
                formColumn: "1",
                dataParent: "demographics",
                fqn: "demographics.decisionMakerName"
              },
              {
                label: "Decision maker relationship",
                pageDataKey: "demographics",
                elementKey: "decisionMakerRelationship",
                inputType: "select",
                formRow: "10",
                formColumn: "2",
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
                dataParent: "demographics",
                fqn: "demographics.decisionMakerRelationship"
              },
              {
                label: "Decision maker phone",
                pageDataKey: "demographics",
                elementKey: "decisionMakerPhone",
                inputType: "text",
                formRow: "10",
                formColumn: "3",
                dataParent: "demographics",
                fqn: "demographics.decisionMakerPhone"
              }
            ]
          }
        ],
        columnsCount: 3
      },
      pageData: {}
    },
    allergies: {
      pageTitle: "Allergies",
      pageDataKey: "allergies",
      generated: "2019-03-28T15:52:06-07:00",
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                label: "No known allergies",
                pageDataKey: "allergies",
                elementKey: "hasNoAllergies",
                inputType: "checkbox",
                formRow: "1",
                formColumn: "1",
                defaultValue: "TRUE",
                validation: "one of these two need to be filled",
                dataParent: "allergies",
                fqn: "allergies.hasNoAllergies"
              }
            ]
          },
          {
            formRow: "2",
            elements: [
              {
                label: "Allergies",
                pageDataKey: "allergies",
                elementKey: "allergies",
                inputType: "text",
                formRow: "2",
                formColumn: "1",
                validation: "one of these two need to be filled",
                dataParent: "allergies",
                fqn: "allergies.allergies"
              }
            ]
          }
        ],
        columnsCount: 1
      },
      pageData: {}
    },
    medical: {
      pageTitle: "Medical history",
      pageDataKey: "medical",
      generated: "2019-03-28T15:52:06-07:00",
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                label: "Past medical history",
                pageDataKey: "medical",
                elementKey: "history",
                inputType: "textarea",
                formRow: "1",
                formColumn: "1",
                dataParent: "medical",
                fqn: "medical.history"
              }
            ]
          }
        ],
        columnsCount: 1
      },
      pageData: {}
    },
    psychosocial: {
      pageTitle: "Psychosocial history",
      pageDataKey: "psychosocial",
      generated: "2019-03-28T15:52:06-07:00",
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                label: "Psychosocial history",
                pageDataKey: "psychosocial",
                elementKey: "history",
                inputType: "textarea",
                formRow: "1",
                formColumn: "1",
                dataParent: "psychosocial",
                fqn: "psychosocial.history"
              },
              {
                label: "Diet",
                pageDataKey: "psychosocial",
                elementKey: "diet",
                inputType: "textarea",
                formRow: "1",
                formColumn: "2",
                dataParent: "psychosocial",
                fqn: "psychosocial.diet"
              },
              {
                label: "Living situation",
                pageDataKey: "psychosocial",
                elementKey: "livingSituation",
                inputType: "textarea",
                formRow: "1",
                formColumn: "3",
                dataParent: "psychosocial",
                fqn: "psychosocial.livingSituation"
              }
            ]
          },
          {
            formRow: "2",
            elements: [
              {
                label: "Employment/school",
                pageDataKey: "psychosocial",
                elementKey: "employmentSchool",
                inputType: "textarea",
                formRow: "2",
                formColumn: "1",
                dataParent: "psychosocial",
                fqn: "psychosocial.employmentSchool"
              },
              {
                label: "Hobbies",
                pageDataKey: "psychosocial",
                elementKey: "hobbies",
                inputType: "textarea",
                formRow: "2",
                formColumn: "2",
                dataParent: "psychosocial",
                fqn: "psychosocial.hobbies"
              }
            ]
          },
          {
            formRow: "3",
            elements: [
              {
                pageDataKey: "psychosocial",
                elementKey: "behaviours",
                inputType: "fieldset",
                formRow: "3",
                formColumn: "1",
                dataParent: "psychosocial",
                fqn: "psychosocial.behaviours",
                elements: [
                  {
                    label: "Exercise",
                    pageDataKey: "psychosocial",
                    level2Key: "behaviours",
                    elementKey: "exercise",
                    inputType: "checkbox",
                    fsetRow: "1",
                    fsetCol: "1",
                    dataParent: "psychosocial.behaviours",
                    fqn: "psychosocial.behaviours.exercise",
                    formColumn: "1"
                  },
                  {
                    label: "Exercise frequency",
                    pageDataKey: "psychosocial",
                    level2Key: "behaviours",
                    elementKey: "exerciseFrequency",
                    inputType: "text",
                    formOption: "hideLabel",
                    fsetRow: "1",
                    fsetCol: "2",
                    dataParent: "psychosocial.behaviours",
                    fqn: "psychosocial.behaviours.exerciseFrequency",
                    formColumn: "2"
                  },
                  {
                    label: "Caffeine use",
                    pageDataKey: "psychosocial",
                    level2Key: "behaviours",
                    elementKey: "caffeineUse",
                    inputType: "checkbox",
                    fsetRow: "2",
                    fsetCol: "1",
                    dataParent: "psychosocial.behaviours",
                    fqn: "psychosocial.behaviours.caffeineUse",
                    formColumn: "1"
                  },
                  {
                    label: "Caffeine use frequency",
                    pageDataKey: "psychosocial",
                    level2Key: "behaviours",
                    elementKey: "caffeineUseFrequency",
                    inputType: "text",
                    formOption: "hideLabel",
                    fsetRow: "2",
                    fsetCol: "2",
                    dataParent: "psychosocial.behaviours",
                    fqn: "psychosocial.behaviours.caffeineUseFrequency",
                    formColumn: "2"
                  },
                  {
                    label: "Tobacco use",
                    pageDataKey: "psychosocial",
                    level2Key: "behaviours",
                    elementKey: "tobaccoUse",
                    inputType: "checkbox",
                    fsetRow: "3",
                    fsetCol: "1",
                    helperText: "Have you used any tobacco products in the last 6 months?-NL-Have you used any tobacco products in the last 7 days?",
                    dataParent: "psychosocial.behaviours",
                    fqn: "psychosocial.behaviours.tobaccoUse",
                    formColumn: "1"
                  },
                  {
                    label: "Tobacco use frequency",
                    pageDataKey: "psychosocial",
                    level2Key: "behaviours",
                    elementKey: "tobaccoUseFrequency",
                    inputType: "text",
                    formOption: "hideLabel",
                    fsetRow: "3",
                    fsetCol: "2",
                    dataParent: "psychosocial.behaviours",
                    fqn: "psychosocial.behaviours.tobaccoUseFrequency",
                    formColumn: "2"
                  },
                  {
                    label: "Cannabis use",
                    pageDataKey: "psychosocial",
                    level2Key: "behaviours",
                    elementKey: "cannabisUse",
                    inputType: "checkbox",
                    fsetRow: "4",
                    fsetCol: "1",
                    helperText: "Have you used any cannabis products in the last 6 months?-NL-Have you used any cannabis products in the last 7 days?",
                    dataParent: "psychosocial.behaviours",
                    fqn: "psychosocial.behaviours.cannabisUse",
                    formColumn: "1"
                  },
                  {
                    label: "Cannabis use frequency",
                    pageDataKey: "psychosocial",
                    level2Key: "behaviours",
                    elementKey: "cannabisUseFrequency",
                    inputType: "text",
                    formOption: "hideLabel",
                    fsetRow: "4",
                    fsetCol: "2",
                    dataParent: "psychosocial.behaviours",
                    fqn: "psychosocial.behaviours.cannabisUseFrequency",
                    formColumn: "2"
                  },
                  {
                    label: "Alcohol use",
                    pageDataKey: "psychosocial",
                    level2Key: "behaviours",
                    elementKey: "alcoholUse",
                    inputType: "checkbox",
                    fsetRow: "5",
                    fsetCol: "1",
                    helperText: "CAGE questionaire-NL-Have you ever felt that you should cut down on your drinking?-NL-Have you ever become annoyed by criticisms of your drinking?-NL-Have you ever felt guilty about your drinking?-NL-Have you ever had a morning eye opener to get rid of a hangover?",
                    dataParent: "psychosocial.behaviours",
                    fqn: "psychosocial.behaviours.alcoholUse",
                    formColumn: "1"
                  },
                  {
                    label: "Alcohol use frequency",
                    pageDataKey: "psychosocial",
                    level2Key: "behaviours",
                    elementKey: "alcoholUseFrequency",
                    inputType: "text",
                    formOption: "hideLabel",
                    fsetRow: "5",
                    fsetCol: "2",
                    dataParent: "psychosocial.behaviours",
                    fqn: "psychosocial.behaviours.alcoholUseFrequency",
                    formColumn: "2"
                  },
                  {
                    label: "Substance use",
                    pageDataKey: "psychosocial",
                    level2Key: "behaviours",
                    elementKey: "substanceUse",
                    inputType: "checkbox",
                    fsetRow: "6",
                    fsetCol: "1",
                    helperText: "Have you used any substances in the last 6 months?-NL-Have you used any substances in the last 7 days?-NL-If so, make notes about which ones.",
                    dataParent: "psychosocial.behaviours",
                    fqn: "psychosocial.behaviours.substanceUse",
                    formColumn: "1"
                  },
                  {
                    label: "Substance use frequency",
                    pageDataKey: "psychosocial",
                    level2Key: "behaviours",
                    elementKey: "substanceUseFrequency",
                    inputType: "text",
                    formOption: "hideLabel",
                    fsetRow: "6",
                    fsetCol: "2",
                    dataParent: "psychosocial.behaviours",
                    fqn: "psychosocial.behaviours.substanceUseFrequency",
                    formColumn: "2"
                  }
                ],
                containerType: "fieldset",
                containerKey: "behaviours",
                formFieldSet: {
                  rows: [
                    {
                      formRow: "1",
                      elements: [
                        {
                          label: "Exercise",
                          pageDataKey: "psychosocial",
                          level2Key: "behaviours",
                          elementKey: "exercise",
                          inputType: "checkbox",
                          fsetRow: "1",
                          fsetCol: "1",
                          dataParent: "psychosocial.behaviours",
                          fqn: "psychosocial.behaviours.exercise",
                          formColumn: "1"
                        },
                        {
                          label: "Exercise frequency",
                          pageDataKey: "psychosocial",
                          level2Key: "behaviours",
                          elementKey: "exerciseFrequency",
                          inputType: "text",
                          formOption: "hideLabel",
                          fsetRow: "1",
                          fsetCol: "2",
                          dataParent: "psychosocial.behaviours",
                          fqn: "psychosocial.behaviours.exerciseFrequency",
                          formColumn: "2"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          label: "Caffeine use",
                          pageDataKey: "psychosocial",
                          level2Key: "behaviours",
                          elementKey: "caffeineUse",
                          inputType: "checkbox",
                          fsetRow: "2",
                          fsetCol: "1",
                          dataParent: "psychosocial.behaviours",
                          fqn: "psychosocial.behaviours.caffeineUse",
                          formColumn: "1"
                        },
                        {
                          label: "Caffeine use frequency",
                          pageDataKey: "psychosocial",
                          level2Key: "behaviours",
                          elementKey: "caffeineUseFrequency",
                          inputType: "text",
                          formOption: "hideLabel",
                          fsetRow: "2",
                          fsetCol: "2",
                          dataParent: "psychosocial.behaviours",
                          fqn: "psychosocial.behaviours.caffeineUseFrequency",
                          formColumn: "2"
                        }
                      ]
                    },
                    {
                      formRow: "3",
                      elements: [
                        {
                          label: "Tobacco use",
                          pageDataKey: "psychosocial",
                          level2Key: "behaviours",
                          elementKey: "tobaccoUse",
                          inputType: "checkbox",
                          fsetRow: "3",
                          fsetCol: "1",
                          helperText: "Have you used any tobacco products in the last 6 months?-NL-Have you used any tobacco products in the last 7 days?",
                          dataParent: "psychosocial.behaviours",
                          fqn: "psychosocial.behaviours.tobaccoUse",
                          formColumn: "1"
                        },
                        {
                          label: "Tobacco use frequency",
                          pageDataKey: "psychosocial",
                          level2Key: "behaviours",
                          elementKey: "tobaccoUseFrequency",
                          inputType: "text",
                          formOption: "hideLabel",
                          fsetRow: "3",
                          fsetCol: "2",
                          dataParent: "psychosocial.behaviours",
                          fqn: "psychosocial.behaviours.tobaccoUseFrequency",
                          formColumn: "2"
                        }
                      ]
                    },
                    {
                      formRow: "4",
                      elements: [
                        {
                          label: "Cannabis use",
                          pageDataKey: "psychosocial",
                          level2Key: "behaviours",
                          elementKey: "cannabisUse",
                          inputType: "checkbox",
                          fsetRow: "4",
                          fsetCol: "1",
                          helperText: "Have you used any cannabis products in the last 6 months?-NL-Have you used any cannabis products in the last 7 days?",
                          dataParent: "psychosocial.behaviours",
                          fqn: "psychosocial.behaviours.cannabisUse",
                          formColumn: "1"
                        },
                        {
                          label: "Cannabis use frequency",
                          pageDataKey: "psychosocial",
                          level2Key: "behaviours",
                          elementKey: "cannabisUseFrequency",
                          inputType: "text",
                          formOption: "hideLabel",
                          fsetRow: "4",
                          fsetCol: "2",
                          dataParent: "psychosocial.behaviours",
                          fqn: "psychosocial.behaviours.cannabisUseFrequency",
                          formColumn: "2"
                        }
                      ]
                    },
                    {
                      formRow: "5",
                      elements: [
                        {
                          label: "Alcohol use",
                          pageDataKey: "psychosocial",
                          level2Key: "behaviours",
                          elementKey: "alcoholUse",
                          inputType: "checkbox",
                          fsetRow: "5",
                          fsetCol: "1",
                          helperText: "CAGE questionaire-NL-Have you ever felt that you should cut down on your drinking?-NL-Have you ever become annoyed by criticisms of your drinking?-NL-Have you ever felt guilty about your drinking?-NL-Have you ever had a morning eye opener to get rid of a hangover?",
                          dataParent: "psychosocial.behaviours",
                          fqn: "psychosocial.behaviours.alcoholUse",
                          formColumn: "1"
                        },
                        {
                          label: "Alcohol use frequency",
                          pageDataKey: "psychosocial",
                          level2Key: "behaviours",
                          elementKey: "alcoholUseFrequency",
                          inputType: "text",
                          formOption: "hideLabel",
                          fsetRow: "5",
                          fsetCol: "2",
                          dataParent: "psychosocial.behaviours",
                          fqn: "psychosocial.behaviours.alcoholUseFrequency",
                          formColumn: "2"
                        }
                      ]
                    },
                    {
                      formRow: "6",
                      elements: [
                        {
                          label: "Substance use",
                          pageDataKey: "psychosocial",
                          level2Key: "behaviours",
                          elementKey: "substanceUse",
                          inputType: "checkbox",
                          fsetRow: "6",
                          fsetCol: "1",
                          helperText: "Have you used any substances in the last 6 months?-NL-Have you used any substances in the last 7 days?-NL-If so, make notes about which ones.",
                          dataParent: "psychosocial.behaviours",
                          fqn: "psychosocial.behaviours.substanceUse",
                          formColumn: "1"
                        },
                        {
                          label: "Substance use frequency",
                          pageDataKey: "psychosocial",
                          level2Key: "behaviours",
                          elementKey: "substanceUseFrequency",
                          inputType: "text",
                          formOption: "hideLabel",
                          fsetRow: "6",
                          fsetCol: "2",
                          dataParent: "psychosocial.behaviours",
                          fqn: "psychosocial.behaviours.substanceUseFrequency",
                          formColumn: "2"
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
      },
      pageData: {}
    },
    surgical: {
      pageTitle: "Surgical history",
      pageDataKey: "surgical",
      generated: "2019-03-28T15:52:06-07:00",
      hasTable: true,
      tables: [
        {
          tableKey: "pastSurgery",
          label: "Past surgery",
          addButtonText: "Add a past surgery",
          tableCells: [
            {
              label: "Performing physician",
              pageDataKey: "surgical",
              level2Key: "pastSurgery",
              elementKey: "physician",
              inputType: "text",
              tableColumn: "1",
              fsetRow: "1",
              fsetCol: "1",
              dataParent: "surgical.pastSurgery",
              fqn: "surgical.pastSurgery.physician",
              tableKey: "pastSurgery"
            },
            {
              label: "Surgery/procedure",
              pageDataKey: "surgical",
              level2Key: "pastSurgery",
              elementKey: "procedure",
              inputType: "text",
              tableColumn: "2",
              fsetRow: "1",
              fsetCol: "2",
              dataParent: "surgical.pastSurgery",
              fqn: "surgical.pastSurgery.procedure",
              tableKey: "pastSurgery"
            },
            {
              label: "Time elapsed since surgery",
              pageDataKey: "surgical",
              level2Key: "pastSurgery",
              elementKey: "timeSince",
              inputType: "text",
              tableColumn: "3",
              fsetRow: "1",
              fsetCol: "3",
              dataParent: "surgical.pastSurgery",
              fqn: "surgical.pastSurgery.timeSince",
              tableKey: "pastSurgery"
            }
          ],
          tableForm: {
            rows: [],
            columnsCount: 0
          }
        },
        {
          tableKey: "previous",
          label: "Previous admission",
          addButtonText: "Add a previous appointment",
          tableCells: [
            {
              label: "Appointment with",
              pageDataKey: "surgical",
              level2Key: "previous",
              elementKey: "with",
              inputType: "text",
              tableColumn: "1",
              fsetRow: "1",
              fsetCol: "1",
              dataParent: "surgical.previous",
              fqn: "surgical.previous.with",
              tableKey: "previous"
            },
            {
              label: "Appointment details",
              pageDataKey: "surgical",
              level2Key: "previous",
              elementKey: "details",
              inputType: "text",
              tableColumn: "2",
              fsetRow: "1",
              fsetCol: "2",
              dataParent: "surgical.previous",
              fqn: "surgical.previous.details",
              tableKey: "previous"
            },
            {
              label: "Previous admission reason",
              pageDataKey: "surgical",
              level2Key: "previous",
              elementKey: "previousAdmissions",
              inputType: "text",
              tableColumn: "3",
              fsetRow: "2",
              fsetCol: "1",
              dataParent: "surgical.previous",
              fqn: "surgical.previous.previousAdmissions",
              tableKey: "previous"
            },
            {
              label: "Date",
              pageDataKey: "surgical",
              level2Key: "previous",
              elementKey: "previousAdmissionsDate",
              inputType: "date",
              tableColumn: "4",
              fsetRow: "2",
              fsetCol: "2",
              dataParent: "surgical.previous",
              fqn: "surgical.previous.previousAdmissionsDate",
              tableKey: "previous"
            },
            {
              label: "General comments",
              pageDataKey: "surgical",
              level2Key: "previous",
              elementKey: "comments",
              inputType: "textarea",
              tableColumn: "5",
              fsetRow: "3",
              fsetCol: "1",
              dataParent: "surgical.previous",
              fqn: "surgical.previous.comments",
              tableKey: "previous"
            }
          ],
          tableForm: {
            rows: [],
            columnsCount: 0
          }
        }
      ],
      pageData: {
        pastSurgery: [],
        previous: []
      }
    },
    immunization: {
      pageTitle: "Immunization history",
      pageDataKey: "immunization",
      generated: "2019-03-28T15:52:06-07:00",
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                label: "Hep A",
                pageDataKey: "immunization",
                elementKey: "hepA",
                inputType: "checkbox",
                formRow: "1",
                formColumn: "1",
                tableCss: "is-one-third",
                dataParent: "immunization",
                fqn: "immunization.hepA"
              },
              {
                label: "Hep A date",
                pageDataKey: "immunization",
                elementKey: "hepADate",
                inputType: "date",
                formRow: "1",
                formColumn: "2",
                formOption: "hideLabel",
                dataParent: "immunization",
                fqn: "immunization.hepADate"
              }
            ]
          },
          {
            formRow: "2",
            elements: [
              {
                label: "Hep B",
                pageDataKey: "immunization",
                elementKey: "hepB",
                inputType: "checkbox",
                formRow: "2",
                formColumn: "1",
                tableCss: "is-one-third",
                dataParent: "immunization",
                fqn: "immunization.hepB"
              },
              {
                label: "Hep B date",
                pageDataKey: "immunization",
                elementKey: "hepBDate",
                inputType: "date",
                formRow: "2",
                formColumn: "2",
                formOption: "hideLabel",
                dataParent: "immunization",
                fqn: "immunization.hepBDate"
              }
            ]
          },
          {
            formRow: "3",
            elements: [
              {
                label: "MMR",
                pageDataKey: "immunization",
                elementKey: "mmr",
                inputType: "checkbox",
                formRow: "3",
                formColumn: "1",
                tableCss: "is-one-third",
                dataParent: "immunization",
                fqn: "immunization.mmr"
              },
              {
                label: "MMR date",
                pageDataKey: "immunization",
                elementKey: "mmrDate",
                inputType: "date",
                formRow: "3",
                formColumn: "2",
                formOption: "hideLabel",
                dataParent: "immunization",
                fqn: "immunization.mmrDate"
              }
            ]
          },
          {
            formRow: "4",
            elements: [
              {
                label: "Pneumococcal",
                pageDataKey: "immunization",
                elementKey: "pneumococcal",
                inputType: "checkbox",
                formRow: "4",
                formColumn: "1",
                tableCss: "is-one-third",
                dataParent: "immunization",
                fqn: "immunization.pneumococcal"
              },
              {
                label: "Pneumococcal date",
                pageDataKey: "immunization",
                elementKey: "pneumococcalDate",
                inputType: "date",
                formRow: "4",
                formColumn: "2",
                formOption: "hideLabel",
                dataParent: "immunization",
                fqn: "immunization.pneumococcalDate"
              }
            ]
          },
          {
            formRow: "5",
            elements: [
              {
                label: "Polio diptheria pertussis",
                pageDataKey: "immunization",
                elementKey: "polioDiptheriaPertussis",
                inputType: "checkbox",
                formRow: "5",
                formColumn: "1",
                tableCss: "is-one-third",
                dataParent: "immunization",
                fqn: "immunization.polioDiptheriaPertussis"
              },
              {
                label: "Polio diptheria pertussis date",
                pageDataKey: "immunization",
                elementKey: "polioDiptheriaPertussisDate",
                inputType: "date",
                formRow: "5",
                formColumn: "2",
                formOption: "hideLabel",
                dataParent: "immunization",
                fqn: "immunization.polioDiptheriaPertussisDate"
              }
            ]
          },
          {
            formRow: "6",
            elements: [
              {
                label: "TB",
                pageDataKey: "immunization",
                elementKey: "tb",
                inputType: "checkbox",
                formRow: "6",
                formColumn: "1",
                tableCss: "is-one-third",
                dataParent: "immunization",
                fqn: "immunization.tb"
              },
              {
                label: "TB date",
                pageDataKey: "immunization",
                elementKey: "tbDate",
                inputType: "date",
                formRow: "6",
                formColumn: "2",
                formOption: "hideLabel",
                dataParent: "immunization",
                fqn: "immunization.tbDate"
              }
            ]
          },
          {
            formRow: "7",
            elements: [
              {
                label: "Tetanus",
                pageDataKey: "immunization",
                elementKey: "tetanus",
                inputType: "checkbox",
                formRow: "7",
                formColumn: "1",
                tableCss: "is-one-third",
                dataParent: "immunization",
                fqn: "immunization.tetanus"
              },
              {
                label: "Tetanus date",
                pageDataKey: "immunization",
                elementKey: "tetanusDate",
                inputType: "date",
                formRow: "7",
                formColumn: "2",
                formOption: "hideLabel",
                dataParent: "immunization",
                fqn: "immunization.tetanusDate"
              }
            ]
          },
          {
            formRow: "8",
            elements: [
              {
                pageDataKey: "immunization",
                elementKey: "other1",
                inputType: "text",
                formRow: "8",
                formColumn: "1",
                tableCss: "is-one-third",
                validation: "If other is selected, this is mandatory",
                dataParent: "immunization",
                fqn: "immunization.other1"
              },
              {
                label: "Date",
                pageDataKey: "immunization",
                elementKey: "otherDate1",
                inputType: "date",
                formRow: "8",
                formColumn: "2",
                formOption: "hideLabel",
                dataParent: "immunization",
                fqn: "immunization.otherDate1"
              }
            ]
          },
          {
            formRow: "9",
            elements: [
              {
                pageDataKey: "immunization",
                elementKey: "other2",
                inputType: "text",
                formRow: "9",
                formColumn: "1",
                tableCss: "is-one-third",
                validation: "If other is selected, this is mandatory",
                dataParent: "immunization",
                fqn: "immunization.other2"
              },
              {
                label: "Date",
                pageDataKey: "immunization",
                elementKey: "otherDate2",
                inputType: "date",
                formRow: "9",
                formColumn: "2",
                formOption: "hideLabel",
                dataParent: "immunization",
                fqn: "immunization.otherDate2"
              }
            ]
          },
          {
            formRow: "10",
            elements: [
              {
                pageDataKey: "immunization",
                elementKey: "other3",
                inputType: "text",
                formRow: "10",
                formColumn: "1",
                tableCss: "is-one-third",
                validation: "If other is selected, this is mandatory",
                dataParent: "immunization",
                fqn: "immunization.other3"
              },
              {
                label: "Date",
                pageDataKey: "immunization",
                elementKey: "otherDate3",
                inputType: "date",
                formRow: "10",
                formColumn: "2",
                formOption: "hideLabel",
                dataParent: "immunization",
                fqn: "immunization.otherDate3"
              }
            ]
          }
        ],
        columnsCount: 2
      },
      pageData: {}
    },
    familyHistory: {
      pageTitle: "Family history",
      pageDataKey: "familyHistory",
      generated: "2019-03-28T15:52:06-07:00",
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                label: "Family medical history",
                pageDataKey: "familyHistory",
                elementKey: "history",
                inputType: "textarea",
                formRow: "1",
                formColumn: "1",
                dataParent: "familyHistory",
                fqn: "familyHistory.history"
              }
            ]
          }
        ],
        columnsCount: 1
      },
      pageData: {}
    },
    careTeam: {
      pageTitle: "Care team",
      pageDataKey: "careTeam",
      generated: "2019-03-28T15:52:06-07:00",
      hasTable: true,
      tables: [
        {
          tableKey: "teams",
          addButtonText: "Add a care team member",
          tableCells: [
            {
              label: "Name",
              pageDataKey: "careTeam",
              level2Key: "teams",
              elementKey: "name",
              inputType: "text",
              formRow: "1",
              formColumn: "1",
              tableColumn: "1",
              tableCss: "is-one-third",
              dataParent: "careTeam.teams",
              fqn: "careTeam.teams.name",
              tableKey: "teams"
            },
            {
              label: "Profession",
              pageDataKey: "careTeam",
              level2Key: "teams",
              elementKey: "profession",
              inputType: "text",
              formRow: "1",
              formColumn: "2",
              tableColumn: "2",
              dataParent: "careTeam.teams",
              fqn: "careTeam.teams.profession",
              tableKey: "teams"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    label: "Name",
                    pageDataKey: "careTeam",
                    level2Key: "teams",
                    elementKey: "name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    tableColumn: "1",
                    tableCss: "is-one-third",
                    dataParent: "careTeam.teams",
                    fqn: "careTeam.teams.name",
                    tableKey: "teams"
                  },
                  {
                    label: "Profession",
                    pageDataKey: "careTeam",
                    level2Key: "teams",
                    elementKey: "profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    tableColumn: "2",
                    dataParent: "careTeam.teams",
                    fqn: "careTeam.teams.profession",
                    tableKey: "teams"
                  }
                ]
              }
            ],
            columnsCount: 2
          }
        }
      ],
      pageData: {
        teams: []
      }
    },
    pastAppointments: {
      pageTitle: "Past appointments",
      pageDataKey: "pastAppointments",
      generated: "2019-03-28T15:52:06-07:00",
      hasTable: true,
      tables: [
        {
          tableKey: "encounters",
          label: "Past encounters",
          addButtonText: "Add a past encounter",
          tableCells: [
            {
              label: "Date",
              pageDataKey: "pastAppointments",
              level2Key: "encounters",
              elementKey: "date",
              inputType: "date",
              formRow: "1",
              formColumn: "1",
              tableColumn: "1",
              dataParent: "pastAppointments.encounters",
              fqn: "pastAppointments.encounters.date",
              tableKey: "encounters"
            },
            {
              label: "Site",
              pageDataKey: "pastAppointments",
              level2Key: "encounters",
              elementKey: "site",
              inputType: "text",
              formRow: "1",
              formColumn: "2",
              tableColumn: "2",
              dataParent: "pastAppointments.encounters",
              fqn: "pastAppointments.encounters.site",
              tableKey: "encounters"
            },
            {
              label: "Diagnosis",
              pageDataKey: "pastAppointments",
              level2Key: "encounters",
              elementKey: "diagnosis",
              inputType: "text",
              formRow: "2",
              formColumn: "1",
              tableColumn: "3",
              dataParent: "pastAppointments.encounters",
              fqn: "pastAppointments.encounters.diagnosis",
              tableKey: "encounters"
            },
            {
              label: "Most responsible person",
              pageDataKey: "pastAppointments",
              level2Key: "encounters",
              elementKey: "mrp",
              inputType: "text",
              formRow: "2",
              formColumn: "2",
              tableColumn: "4",
              dataParent: "pastAppointments.encounters",
              fqn: "pastAppointments.encounters.mrp",
              tableKey: "encounters"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    label: "Date",
                    pageDataKey: "pastAppointments",
                    level2Key: "encounters",
                    elementKey: "date",
                    inputType: "date",
                    formRow: "1",
                    formColumn: "1",
                    tableColumn: "1",
                    dataParent: "pastAppointments.encounters",
                    fqn: "pastAppointments.encounters.date",
                    tableKey: "encounters"
                  },
                  {
                    label: "Site",
                    pageDataKey: "pastAppointments",
                    level2Key: "encounters",
                    elementKey: "site",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    tableColumn: "2",
                    dataParent: "pastAppointments.encounters",
                    fqn: "pastAppointments.encounters.site",
                    tableKey: "encounters"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    label: "Diagnosis",
                    pageDataKey: "pastAppointments",
                    level2Key: "encounters",
                    elementKey: "diagnosis",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "1",
                    tableColumn: "3",
                    dataParent: "pastAppointments.encounters",
                    fqn: "pastAppointments.encounters.diagnosis",
                    tableKey: "encounters"
                  },
                  {
                    label: "Most responsible person",
                    pageDataKey: "pastAppointments",
                    level2Key: "encounters",
                    elementKey: "mrp",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "2",
                    tableColumn: "4",
                    dataParent: "pastAppointments.encounters",
                    fqn: "pastAppointments.encounters.mrp",
                    tableKey: "encounters"
                  }
                ]
              }
            ],
            columnsCount: 2
          }
        },
        {
          tableKey: "outpatientAppointments",
          label: "Outpatient appointments",
          addButtonText: "Add a past appointment",
          tableCells: [
            {
              label: "Date",
              pageDataKey: "pastAppointments",
              level2Key: "outpatientAppointments",
              elementKey: "date",
              inputType: "text",
              formRow: "1",
              formColumn: "1",
              tableColumn: "1",
              dataParent: "pastAppointments.outpatientAppointments",
              fqn: "pastAppointments.outpatientAppointments.date",
              tableKey: "outpatientAppointments"
            },
            {
              label: "Site",
              pageDataKey: "pastAppointments",
              level2Key: "outpatientAppointments",
              elementKey: "site",
              inputType: "text",
              formRow: "1",
              formColumn: "2",
              tableColumn: "2",
              dataParent: "pastAppointments.outpatientAppointments",
              fqn: "pastAppointments.outpatientAppointments.site",
              tableKey: "outpatientAppointments"
            },
            {
              label: "Reason for visit",
              pageDataKey: "pastAppointments",
              level2Key: "outpatientAppointments",
              elementKey: "reasonForVisit",
              inputType: "text",
              formRow: "2",
              formColumn: "1",
              tableColumn: "3",
              dataParent: "pastAppointments.outpatientAppointments",
              fqn: "pastAppointments.outpatientAppointments.reasonForVisit",
              tableKey: "outpatientAppointments"
            },
            {
              label: "Diagnosis",
              pageDataKey: "pastAppointments",
              level2Key: "outpatientAppointments",
              elementKey: "diagnosis",
              inputType: "text",
              formRow: "2",
              formColumn: "2",
              tableColumn: "4",
              dataParent: "pastAppointments.outpatientAppointments",
              fqn: "pastAppointments.outpatientAppointments.diagnosis",
              tableKey: "outpatientAppointments"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    label: "Date",
                    pageDataKey: "pastAppointments",
                    level2Key: "outpatientAppointments",
                    elementKey: "date",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    tableColumn: "1",
                    dataParent: "pastAppointments.outpatientAppointments",
                    fqn: "pastAppointments.outpatientAppointments.date",
                    tableKey: "outpatientAppointments"
                  },
                  {
                    label: "Site",
                    pageDataKey: "pastAppointments",
                    level2Key: "outpatientAppointments",
                    elementKey: "site",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    tableColumn: "2",
                    dataParent: "pastAppointments.outpatientAppointments",
                    fqn: "pastAppointments.outpatientAppointments.site",
                    tableKey: "outpatientAppointments"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    label: "Reason for visit",
                    pageDataKey: "pastAppointments",
                    level2Key: "outpatientAppointments",
                    elementKey: "reasonForVisit",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "1",
                    tableColumn: "3",
                    dataParent: "pastAppointments.outpatientAppointments",
                    fqn: "pastAppointments.outpatientAppointments.reasonForVisit",
                    tableKey: "outpatientAppointments"
                  },
                  {
                    label: "Diagnosis",
                    pageDataKey: "pastAppointments",
                    level2Key: "outpatientAppointments",
                    elementKey: "diagnosis",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "2",
                    tableColumn: "4",
                    dataParent: "pastAppointments.outpatientAppointments",
                    fqn: "pastAppointments.outpatientAppointments.diagnosis",
                    tableKey: "outpatientAppointments"
                  }
                ]
              }
            ],
            columnsCount: 2
          }
        }
      ],
      pageData: {
        encounters: [],
        outpatientAppointments: []
      }
    }
  }
}