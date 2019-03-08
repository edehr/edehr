/* eslint-disable quotes */
export default function () {
  return {
    demographics: {
      pageTitle: "Demographics",
      pageDataKey: "demographics",
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                elementKey: "familyName",
                fqn: "demographics.familyName",
                inputType: "text",
                label: "Last name",
                formColumn: "1",
                formRow: "1",
                pageDataKey: "demographics",
                dataParent: "demographics",
                page: "Demographics",
                mandatory: "yes"
              },
              {
                elementKey: "givenName",
                fqn: "demographics.givenName",
                inputType: "text",
                label: "First name",
                formColumn: "2",
                formRow: "1",
                pageDataKey: "demographics",
                dataParent: "demographics",
                page: "Demographics",
                mandatory: "yes"
              },
              {
                elementKey: "middleName",
                fqn: "demographics.middleName",
                inputType: "text",
                label: "Middle name(s)",
                formColumn: "3",
                formRow: "1",
                pageDataKey: "demographics",
                dataParent: "demographics",
                page: "Demographics"
              }
            ]
          },
          {
            formRow: "2",
            elements: [
              {
                elementKey: "preferredName",
                fqn: "demographics.preferredName",
                inputType: "text",
                label: "Preferred name",
                formColumn: "1",
                formRow: "2",
                pageDataKey: "demographics",
                dataParent: "demographics",
                page: "Demographics"
              },
              {
                elementKey: "dateOfBirth",
                fqn: "demographics.dateOfBirth",
                inputType: "text",
                label: "Date of birth",
                formColumn: "2",
                formRow: "2",
                pageDataKey: "demographics",
                dataParent: "demographics",
                page: "Demographics"
              },
              {
                elementKey: "personAge",
                fqn: "demographics.personAge",
                inputType: "text",
                label: "Age",
                formColumn: "3",
                formRow: "2",
                pageDataKey: "demographics",
                dataParent: "demographics",
                page: "Demographics",
                mandatory: "yes"
              }
            ]
          },
          {
            formRow: "3",
            elements: [
              {
                elementKey: "gender",
                fqn: "demographics.gender",
                inputType: "select",
                label: "Gender",
                formColumn: "1",
                formRow: "3",
                pageDataKey: "demographics",
                dataParent: "demographics",
                page: "Demographics",
                mandatory: "yes",
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
                ]
              },
              {
                elementKey: "martialStatus",
                fqn: "demographics.martialStatus",
                inputType: "select",
                label: "Martial status",
                formColumn: "2",
                formRow: "3",
                pageDataKey: "demographics",
                dataParent: "demographics",
                page: "Demographics",
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
                ]
              }
            ]
          },
          {
            formRow: "4",
            elements: [
              {
                elementKey: "languagePrimary",
                fqn: "demographics.languagePrimary",
                inputType: "select",
                label: "Primary language",
                formColumn: "1",
                formRow: "4",
                pageDataKey: "demographics",
                dataParent: "demographics",
                page: "Demographics",
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
                ]
              },
              {
                elementKey: "religion",
                fqn: "demographics.religion",
                inputType: "text",
                label: "Religion",
                formColumn: "2",
                formRow: "4",
                pageDataKey: "demographics",
                dataParent: "demographics",
                page: "Demographics"
              },
              {
                elementKey: "indigenousIdentifyAs",
                fqn: "demographics.indigenousIdentifyAs",
                inputType: "select",
                label: "Do you identify as an indigenous person?",
                formColumn: "3",
                formRow: "4",
                pageDataKey: "demographics",
                dataParent: "demographics",
                page: "Demographics",
                options: [
                  {
                    text: "Yes"
                  },
                  {
                    text: "No"
                  }
                ]
              }
            ]
          },
          {
            formRow: "5",
            elements: [
              {
                elementKey: "streetAddress",
                fqn: "demographics.streetAddress",
                inputType: "text",
                label: "Street address",
                formCss: "is-two-thirds",
                formColumn: "1",
                formRow: "5",
                pageDataKey: "demographics",
                dataParent: "demographics",
                page: "Demographics"
              },
              {
                elementKey: "city",
                fqn: "demographics.city",
                inputType: "text",
                label: "City",
                formColumn: "3",
                formRow: "5",
                pageDataKey: "demographics",
                dataParent: "demographics",
                page: "Demographics"
              }
            ]
          },
          {
            formRow: "6",
            elements: [
              {
                elementKey: "country",
                fqn: "demographics.country",
                inputType: "text",
                label: "Country",
                formColumn: "1",
                formRow: "6",
                pageDataKey: "demographics",
                dataParent: "demographics",
                page: "Demographics",
                defaultValue: "Canada"
              },
              {
                elementKey: "postalCode",
                fqn: "demographics.postalCode",
                inputType: "text",
                label: "Postal code",
                formColumn: "2",
                formRow: "6",
                pageDataKey: "demographics",
                dataParent: "demographics",
                page: "Demographics"
              },
              {
                elementKey: "noAddress",
                fqn: "demographics.noAddress",
                inputType: "checkbox",
                label: "No address",
                formColumn: "3",
                formRow: "6",
                pageDataKey: "demographics",
                dataParent: "demographics",
                page: "Demographics"
              }
            ]
          },
          {
            formRow: "7",
            elements: [
              {
                elementKey: "phoneNumber",
                fqn: "demographics.phoneNumber",
                inputType: "text",
                label: "Primary phone number",
                formColumn: "1",
                formRow: "7",
                pageDataKey: "demographics",
                dataParent: "demographics",
                page: "Demographics"
              },
              {
                elementKey: "emailAddress",
                fqn: "demographics.emailAddress",
                inputType: "text",
                label: "Email",
                formColumn: "2",
                formRow: "7",
                pageDataKey: "demographics",
                dataParent: "demographics",
                page: "Demographics"
              },
              {
                elementKey: "occupationStudent",
                fqn: "demographics.occupationStudent",
                inputType: "text",
                label: "Occupation/student",
                formColumn: "3",
                formRow: "7",
                pageDataKey: "demographics",
                dataParent: "demographics",
                page: "Demographics"
              }
            ]
          },
          {
            formRow: "8",
            elements: [
              {
                elementKey: "phn",
                fqn: "demographics.phn",
                inputType: "text",
                label: "PHN",
                formColumn: "1",
                formRow: "8",
                pageDataKey: "demographics",
                dataParent: "demographics",
                page: "Demographics"
              },
              {
                elementKey: "mrn",
                fqn: "demographics.mrn",
                inputType: "text",
                label: "MRN",
                formColumn: "2",
                formRow: "8",
                pageDataKey: "demographics",
                dataParent: "demographics",
                page: "Demographics"
              },
              {
                elementKey: "patientService",
                fqn: "demographics.patientService",
                inputType: "text",
                label: "Patient service",
                formColumn: "3",
                formRow: "8",
                pageDataKey: "demographics",
                dataParent: "demographics",
                page: "Demographics"
              }
            ]
          },
          {
            formRow: "9",
            elements: [
              {
                elementKey: "nextOfKinName",
                fqn: "demographics.nextOfKinName",
                inputType: "text",
                label: "Next of kin name",
                formColumn: "1",
                formRow: "9",
                pageDataKey: "demographics",
                dataParent: "demographics",
                page: "Demographics"
              },
              {
                elementKey: "nextOfKinRelationship",
                fqn: "demographics.nextOfKinRelationship",
                inputType: "select",
                label: "Next of kin relationship",
                formColumn: "2",
                formRow: "9",
                pageDataKey: "demographics",
                dataParent: "demographics",
                page: "Demographics",
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
                ]
              },
              {
                elementKey: "nextOfKinPhone",
                fqn: "demographics.nextOfKinPhone",
                inputType: "text",
                label: "Next of kin phone",
                formColumn: "3",
                formRow: "9",
                pageDataKey: "demographics",
                dataParent: "demographics",
                page: "Demographics"
              }
            ]
          },
          {
            formRow: "10",
            elements: [
              {
                elementKey: "decisionMakerName",
                fqn: "demographics.decisionMakerName",
                inputType: "text",
                label: "Decision maker name",
                formColumn: "1",
                formRow: "10",
                pageDataKey: "demographics",
                dataParent: "demographics",
                page: "Demographics"
              },
              {
                elementKey: "decisionMakerRelationship",
                fqn: "demographics.decisionMakerRelationship",
                inputType: "select",
                label: "Decision maker relationship",
                formColumn: "2",
                formRow: "10",
                pageDataKey: "demographics",
                dataParent: "demographics",
                page: "Demographics",
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
                ]
              },
              {
                elementKey: "decisionMakerPhone",
                fqn: "demographics.decisionMakerPhone",
                inputType: "text",
                label: "Decision maker phone",
                formColumn: "3",
                formRow: "10",
                pageDataKey: "demographics",
                dataParent: "demographics",
                page: "Demographics"
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
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                elementKey: "hasNoAllergies",
                fqn: "allergies.hasNoAllergies",
                inputType: "checkbox",
                label: "No known allergies",
                formColumn: "1",
                formRow: "1",
                pageDataKey: "allergies",
                dataParent: "allergies",
                page: "Allergies",
                defaultValue: "TRUE",
                validation: "one of these two need to be filled"
              }
            ]
          },
          {
            formRow: "2",
            elements: [
              {
                elementKey: "allergies",
                fqn: "allergies.allergies",
                inputType: "text",
                label: "Allergies",
                formCss: "is-one-third",
                formColumn: "1",
                formRow: "2",
                pageDataKey: "allergies",
                dataParent: "allergies",
                page: "Allergies",
                validation: "one of these two need to be filled"
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
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                elementKey: "history",
                fqn: "medical.history",
                inputType: "textarea",
                label: "Past medical history",
                formColumn: "1",
                formRow: "1",
                pageDataKey: "medical",
                dataParent: "medical",
                page: "History Medical"
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
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                elementKey: "history",
                fqn: "psychosocial.history",
                inputType: "textarea",
                label: "Psychosocial history",
                formColumn: "1",
                formRow: "1",
                pageDataKey: "psychosocial",
                dataParent: "psychosocial",
                page: "History Psychosocial"
              },
              {
                elementKey: "diet",
                fqn: "psychosocial.diet",
                inputType: "textarea",
                label: "Diet",
                formColumn: "2",
                formRow: "1",
                pageDataKey: "psychosocial",
                dataParent: "psychosocial",
                page: "History Psychosocial"
              },
              {
                elementKey: "livingSituation",
                fqn: "psychosocial.livingSituation",
                inputType: "textarea",
                label: "Living situation",
                formColumn: "3",
                formRow: "1",
                pageDataKey: "psychosocial",
                dataParent: "psychosocial",
                page: "History Psychosocial"
              }
            ]
          },
          {
            formRow: "2",
            elements: [
              {
                elementKey: "employmentSchool",
                fqn: "psychosocial.employmentSchool",
                inputType: "textarea",
                label: "Employment/school",
                formColumn: "1",
                formRow: "2",
                pageDataKey: "psychosocial",
                dataParent: "psychosocial",
                page: "History Psychosocial"
              },
              {
                elementKey: "hobbies",
                fqn: "psychosocial.hobbies",
                inputType: "textarea",
                label: "Hobbies",
                formColumn: "2",
                formRow: "2",
                pageDataKey: "psychosocial",
                dataParent: "psychosocial",
                page: "History Psychosocial"
              }
            ]
          },
          {
            formRow: "3",
            elements: [
              {
                elementKey: "behaviours",
                fqn: "psychosocial.behaviours",
                inputType: "fieldset",
                formCss: "check_with_text_group",
                formColumn: "1",
                formRow: "3",
                pageDataKey: "psychosocial",
                dataParent: "psychosocial",
                page: "History Psychosocial",
                elements: [
                  {
                    elementKey: "exercise",
                    fqn: "psychosocial.behaviours.exercise",
                    inputType: "checkbox",
                    label: "Exercise",
                    fsetRow: "1",
                    fsetCol: "1",
                    pageDataKey: "psychosocial",
                    dataParent: "psychosocial.behaviours",
                    level2Key: "behaviours",
                    page: "History Psychosocial",
                    formColumn: "1"
                  },
                  {
                    elementKey: "exerciseFrequency",
                    fqn: "psychosocial.behaviours.exerciseFrequency",
                    inputType: "text",
                    label: "Exercise frequency",
                    fsetRow: "1",
                    fsetCol: "2",
                    formOption: "hideLabel",
                    pageDataKey: "psychosocial",
                    dataParent: "psychosocial.behaviours",
                    level2Key: "behaviours",
                    page: "History Psychosocial",
                    formColumn: "2"
                  },
                  {
                    elementKey: "caffeineUse",
                    fqn: "psychosocial.behaviours.caffeineUse",
                    inputType: "checkbox",
                    label: "Caffeine use",
                    fsetRow: "2",
                    fsetCol: "1",
                    pageDataKey: "psychosocial",
                    dataParent: "psychosocial.behaviours",
                    level2Key: "behaviours",
                    page: "History Psychosocial",
                    formColumn: "1"
                  },
                  {
                    elementKey: "caffeineUseFrequency",
                    fqn: "psychosocial.behaviours.caffeineUseFrequency",
                    inputType: "text",
                    label: "Caffeine use frequency",
                    fsetRow: "2",
                    fsetCol: "2",
                    formOption: "hideLabel",
                    pageDataKey: "psychosocial",
                    dataParent: "psychosocial.behaviours",
                    level2Key: "behaviours",
                    page: "History Psychosocial",
                    formColumn: "2"
                  },
                  {
                    elementKey: "tobaccoUse",
                    fqn: "psychosocial.behaviours.tobaccoUse",
                    inputType: "checkbox",
                    label: "Tobacco use",
                    fsetRow: "3",
                    fsetCol: "1",
                    pageDataKey: "psychosocial",
                    dataParent: "psychosocial.behaviours",
                    level2Key: "behaviours",
                    page: "History Psychosocial",
                    helperText: "Have you used any tobacco products in the last 6 months?-NL-Have you used any tobacco products in the last 7 days?",
                    formColumn: "1"
                  },
                  {
                    elementKey: "tobaccoUseFrequency",
                    fqn: "psychosocial.behaviours.tobaccoUseFrequency",
                    inputType: "text",
                    label: "Tobacco use frequency",
                    fsetRow: "3",
                    fsetCol: "2",
                    formOption: "hideLabel",
                    pageDataKey: "psychosocial",
                    dataParent: "psychosocial.behaviours",
                    level2Key: "behaviours",
                    page: "History Psychosocial",
                    formColumn: "2"
                  },
                  {
                    elementKey: "cannabisUse",
                    fqn: "psychosocial.behaviours.cannabisUse",
                    inputType: "checkbox",
                    label: "Cannabis use",
                    fsetRow: "4",
                    fsetCol: "1",
                    pageDataKey: "psychosocial",
                    dataParent: "psychosocial.behaviours",
                    level2Key: "behaviours",
                    page: "History Psychosocial",
                    helperText: "Have you used any cannabis products in the last 6 months?-NL-Have you used any cannabis products in the last 7 days?",
                    formColumn: "1"
                  },
                  {
                    elementKey: "cannabisUseFrequency",
                    fqn: "psychosocial.behaviours.cannabisUseFrequency",
                    inputType: "text",
                    label: "Cannabis use frequency",
                    fsetRow: "4",
                    fsetCol: "2",
                    formOption: "hideLabel",
                    pageDataKey: "psychosocial",
                    dataParent: "psychosocial.behaviours",
                    level2Key: "behaviours",
                    page: "History Psychosocial",
                    formColumn: "2"
                  },
                  {
                    elementKey: "alcoholUse",
                    fqn: "psychosocial.behaviours.alcoholUse",
                    inputType: "checkbox",
                    label: "Alcohol use",
                    fsetRow: "5",
                    fsetCol: "1",
                    pageDataKey: "psychosocial",
                    dataParent: "psychosocial.behaviours",
                    level2Key: "behaviours",
                    page: "History Psychosocial",
                    helperText: "CAGE questionaire-NL-Have you ever felt that you should cut down on your drinking?-NL-Have you ever become annoyed by criticisms of your drinking?-NL-Have you ever felt guilty about your drinking?-NL-Have you ever had a morning eye opener to get rid of a hangover?",
                    formColumn: "1"
                  },
                  {
                    elementKey: "alcoholUseFrequency",
                    fqn: "psychosocial.behaviours.alcoholUseFrequency",
                    inputType: "text",
                    label: "Alcohol use frequency",
                    fsetRow: "5",
                    fsetCol: "2",
                    formOption: "hideLabel",
                    pageDataKey: "psychosocial",
                    dataParent: "psychosocial.behaviours",
                    level2Key: "behaviours",
                    page: "History Psychosocial",
                    formColumn: "2"
                  },
                  {
                    elementKey: "substanceUse",
                    fqn: "psychosocial.behaviours.substanceUse",
                    inputType: "checkbox",
                    label: "Substance use",
                    fsetRow: "6",
                    fsetCol: "1",
                    pageDataKey: "psychosocial",
                    dataParent: "psychosocial.behaviours",
                    level2Key: "behaviours",
                    page: "History Psychosocial",
                    helperText: "Have you used any substances in the last 6 months?-NL-Have you used any substances in the last 7 days?-NL-If so, make notes about which ones.",
                    formColumn: "1"
                  },
                  {
                    elementKey: "substanceUseFrequency",
                    fqn: "psychosocial.behaviours.substanceUseFrequency",
                    inputType: "text",
                    label: "Substance use frequency",
                    fsetRow: "6",
                    fsetCol: "2",
                    formOption: "hideLabel",
                    pageDataKey: "psychosocial",
                    dataParent: "psychosocial.behaviours",
                    level2Key: "behaviours",
                    page: "History Psychosocial",
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
                          elementKey: "exercise",
                          fqn: "psychosocial.behaviours.exercise",
                          inputType: "checkbox",
                          label: "Exercise",
                          fsetRow: "1",
                          fsetCol: "1",
                          pageDataKey: "psychosocial",
                          dataParent: "psychosocial.behaviours",
                          level2Key: "behaviours",
                          page: "History Psychosocial",
                          formColumn: "1"
                        },
                        {
                          elementKey: "exerciseFrequency",
                          fqn: "psychosocial.behaviours.exerciseFrequency",
                          inputType: "text",
                          label: "Exercise frequency",
                          fsetRow: "1",
                          fsetCol: "2",
                          formOption: "hideLabel",
                          pageDataKey: "psychosocial",
                          dataParent: "psychosocial.behaviours",
                          level2Key: "behaviours",
                          page: "History Psychosocial",
                          formColumn: "2"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          elementKey: "caffeineUse",
                          fqn: "psychosocial.behaviours.caffeineUse",
                          inputType: "checkbox",
                          label: "Caffeine use",
                          fsetRow: "2",
                          fsetCol: "1",
                          pageDataKey: "psychosocial",
                          dataParent: "psychosocial.behaviours",
                          level2Key: "behaviours",
                          page: "History Psychosocial",
                          formColumn: "1"
                        },
                        {
                          elementKey: "caffeineUseFrequency",
                          fqn: "psychosocial.behaviours.caffeineUseFrequency",
                          inputType: "text",
                          label: "Caffeine use frequency",
                          fsetRow: "2",
                          fsetCol: "2",
                          formOption: "hideLabel",
                          pageDataKey: "psychosocial",
                          dataParent: "psychosocial.behaviours",
                          level2Key: "behaviours",
                          page: "History Psychosocial",
                          formColumn: "2"
                        }
                      ]
                    },
                    {
                      formRow: "3",
                      elements: [
                        {
                          elementKey: "tobaccoUse",
                          fqn: "psychosocial.behaviours.tobaccoUse",
                          inputType: "checkbox",
                          label: "Tobacco use",
                          fsetRow: "3",
                          fsetCol: "1",
                          pageDataKey: "psychosocial",
                          dataParent: "psychosocial.behaviours",
                          level2Key: "behaviours",
                          page: "History Psychosocial",
                          helperText: "Have you used any tobacco products in the last 6 months?-NL-Have you used any tobacco products in the last 7 days?",
                          formColumn: "1"
                        },
                        {
                          elementKey: "tobaccoUseFrequency",
                          fqn: "psychosocial.behaviours.tobaccoUseFrequency",
                          inputType: "text",
                          label: "Tobacco use frequency",
                          fsetRow: "3",
                          fsetCol: "2",
                          formOption: "hideLabel",
                          pageDataKey: "psychosocial",
                          dataParent: "psychosocial.behaviours",
                          level2Key: "behaviours",
                          page: "History Psychosocial",
                          formColumn: "2"
                        }
                      ]
                    },
                    {
                      formRow: "4",
                      elements: [
                        {
                          elementKey: "cannabisUse",
                          fqn: "psychosocial.behaviours.cannabisUse",
                          inputType: "checkbox",
                          label: "Cannabis use",
                          fsetRow: "4",
                          fsetCol: "1",
                          pageDataKey: "psychosocial",
                          dataParent: "psychosocial.behaviours",
                          level2Key: "behaviours",
                          page: "History Psychosocial",
                          helperText: "Have you used any cannabis products in the last 6 months?-NL-Have you used any cannabis products in the last 7 days?",
                          formColumn: "1"
                        },
                        {
                          elementKey: "cannabisUseFrequency",
                          fqn: "psychosocial.behaviours.cannabisUseFrequency",
                          inputType: "text",
                          label: "Cannabis use frequency",
                          fsetRow: "4",
                          fsetCol: "2",
                          formOption: "hideLabel",
                          pageDataKey: "psychosocial",
                          dataParent: "psychosocial.behaviours",
                          level2Key: "behaviours",
                          page: "History Psychosocial",
                          formColumn: "2"
                        }
                      ]
                    },
                    {
                      formRow: "5",
                      elements: [
                        {
                          elementKey: "alcoholUse",
                          fqn: "psychosocial.behaviours.alcoholUse",
                          inputType: "checkbox",
                          label: "Alcohol use",
                          fsetRow: "5",
                          fsetCol: "1",
                          pageDataKey: "psychosocial",
                          dataParent: "psychosocial.behaviours",
                          level2Key: "behaviours",
                          page: "History Psychosocial",
                          helperText: "CAGE questionaire-NL-Have you ever felt that you should cut down on your drinking?-NL-Have you ever become annoyed by criticisms of your drinking?-NL-Have you ever felt guilty about your drinking?-NL-Have you ever had a morning eye opener to get rid of a hangover?",
                          formColumn: "1"
                        },
                        {
                          elementKey: "alcoholUseFrequency",
                          fqn: "psychosocial.behaviours.alcoholUseFrequency",
                          inputType: "text",
                          label: "Alcohol use frequency",
                          fsetRow: "5",
                          fsetCol: "2",
                          formOption: "hideLabel",
                          pageDataKey: "psychosocial",
                          dataParent: "psychosocial.behaviours",
                          level2Key: "behaviours",
                          page: "History Psychosocial",
                          formColumn: "2"
                        }
                      ]
                    },
                    {
                      formRow: "6",
                      elements: [
                        {
                          elementKey: "substanceUse",
                          fqn: "psychosocial.behaviours.substanceUse",
                          inputType: "checkbox",
                          label: "Substance use",
                          fsetRow: "6",
                          fsetCol: "1",
                          pageDataKey: "psychosocial",
                          dataParent: "psychosocial.behaviours",
                          level2Key: "behaviours",
                          page: "History Psychosocial",
                          helperText: "Have you used any substances in the last 6 months?-NL-Have you used any substances in the last 7 days?-NL-If so, make notes about which ones.",
                          formColumn: "1"
                        },
                        {
                          elementKey: "substanceUseFrequency",
                          fqn: "psychosocial.behaviours.substanceUseFrequency",
                          inputType: "text",
                          label: "Substance use frequency",
                          fsetRow: "6",
                          fsetCol: "2",
                          formOption: "hideLabel",
                          pageDataKey: "psychosocial",
                          dataParent: "psychosocial.behaviours",
                          level2Key: "behaviours",
                          page: "History Psychosocial",
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
      hasTable: true,
      tables: [
        {
          tableKey: "pastSurgery",
          addButtonText: "Add a past surgery",
          tableCells: [
            {
              elementKey: "physician",
              fqn: "surgical.pastSurgery.physician",
              inputType: "text",
              label: "Performing physician",
              tableColumn: "1",
              formColumn: "1",
              formRow: "1",
              pageDataKey: "surgical",
              dataParent: "surgical.pastSurgery",
              level2Key: "pastSurgery",
              page: "History Surgical",
              tableKey: "pastSurgery"
            },
            {
              elementKey: "procedure",
              fqn: "surgical.pastSurgery.procedure",
              inputType: "text",
              label: "Surgery/procedure",
              tableColumn: "2",
              formColumn: "1",
              formRow: "1",
              pageDataKey: "surgical",
              dataParent: "surgical.pastSurgery",
              level2Key: "pastSurgery",
              page: "History Surgical",
              tableKey: "pastSurgery"
            },
            {
              elementKey: "timeSince",
              fqn: "surgical.pastSurgery.timeSince",
              inputType: "text",
              label: "Time elapsed since surgery",
              tableColumn: "3",
              formColumn: "2",
              formRow: "1",
              pageDataKey: "surgical",
              dataParent: "surgical.pastSurgery",
              level2Key: "pastSurgery",
              page: "History Surgical",
              tableKey: "pastSurgery"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    elementKey: "physician",
                    fqn: "surgical.pastSurgery.physician",
                    inputType: "text",
                    label: "Performing physician",
                    tableColumn: "1",
                    formColumn: "1",
                    formRow: "1",
                    pageDataKey: "surgical",
                    dataParent: "surgical.pastSurgery",
                    level2Key: "pastSurgery",
                    page: "History Surgical",
                    tableKey: "pastSurgery"
                  },
                  {
                    elementKey: "procedure",
                    fqn: "surgical.pastSurgery.procedure",
                    inputType: "text",
                    label: "Surgery/procedure",
                    tableColumn: "2",
                    formColumn: "1",
                    formRow: "1",
                    pageDataKey: "surgical",
                    dataParent: "surgical.pastSurgery",
                    level2Key: "pastSurgery",
                    page: "History Surgical",
                    tableKey: "pastSurgery"
                  },
                  {
                    elementKey: "timeSince",
                    fqn: "surgical.pastSurgery.timeSince",
                    inputType: "text",
                    label: "Time elapsed since surgery",
                    tableColumn: "3",
                    formColumn: "2",
                    formRow: "1",
                    pageDataKey: "surgical",
                    dataParent: "surgical.pastSurgery",
                    level2Key: "pastSurgery",
                    page: "History Surgical",
                    tableKey: "pastSurgery"
                  }
                ]
              }
            ],
            columnsCount: 3
          }
        },
        {
          tableKey: "previous",
          addButtonText: "Add a previous appointment",
          tableCells: [
            {
              elementKey: "with",
              fqn: "surgical.previous.with",
              inputType: "text",
              label: "Appointment with",
              pageDataKey: "surgical",
              dataParent: "surgical.previous",
              level2Key: "previous",
              page: "History Surgical",
              tableKey: "previous"
            },
            {
              elementKey: "details",
              fqn: "surgical.previous.details",
              inputType: "text",
              label: "Appointment details",
              pageDataKey: "surgical",
              dataParent: "surgical.previous",
              level2Key: "previous",
              page: "History Surgical",
              tableKey: "previous"
            },
            {
              elementKey: "previousAdmissions",
              fqn: "surgical.previous.previousAdmissions",
              inputType: "text",
              label: "Previous admission reason",
              tableColumn: "1",
              formColumn: "1",
              formRow: "1",
              pageDataKey: "surgical",
              dataParent: "surgical.previous",
              level2Key: "previous",
              page: "History Surgical",
              tableKey: "previous"
            },
            {
              elementKey: "previousAdmissionsDate",
              fqn: "surgical.previous.previousAdmissionsDate",
              inputType: "date",
              label: "Date",
              tableColumn: "2",
              formColumn: "2",
              formRow: "1",
              pageDataKey: "surgical",
              dataParent: "surgical.previous",
              level2Key: "previous",
              page: "History Surgical",
              tableKey: "previous"
            },
            {
              elementKey: "comments",
              fqn: "surgical.previous.comments",
              inputType: "textarea",
              label: "General comments",
              tableColumn: "3",
              formColumn: "1",
              formRow: "2",
              pageDataKey: "surgical",
              dataParent: "surgical.previous",
              level2Key: "previous",
              page: "History Surgical",
              tableKey: "previous"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    elementKey: "previousAdmissions",
                    fqn: "surgical.previous.previousAdmissions",
                    inputType: "text",
                    label: "Previous admission reason",
                    tableColumn: "1",
                    formColumn: "1",
                    formRow: "1",
                    pageDataKey: "surgical",
                    dataParent: "surgical.previous",
                    level2Key: "previous",
                    page: "History Surgical",
                    tableKey: "previous"
                  },
                  {
                    elementKey: "previousAdmissionsDate",
                    fqn: "surgical.previous.previousAdmissionsDate",
                    inputType: "date",
                    label: "Date",
                    tableColumn: "2",
                    formColumn: "2",
                    formRow: "1",
                    pageDataKey: "surgical",
                    dataParent: "surgical.previous",
                    level2Key: "previous",
                    page: "History Surgical",
                    tableKey: "previous"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "comments",
                    fqn: "surgical.previous.comments",
                    inputType: "textarea",
                    label: "General comments",
                    tableColumn: "3",
                    formColumn: "1",
                    formRow: "2",
                    pageDataKey: "surgical",
                    dataParent: "surgical.previous",
                    level2Key: "previous",
                    page: "History Surgical",
                    tableKey: "previous"
                  }
                ]
              }
            ],
            columnsCount: 2
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
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                elementKey: "hepA",
                fqn: "immunization.hepA",
                inputType: "checkbox",
                label: "Hep A",
                formColumn: "1",
                formRow: "1",
                pageDataKey: "immunization",
                dataParent: "immunization",
                page: "History Immunization"
              },
              {
                elementKey: "hepADate",
                fqn: "immunization.hepADate",
                inputType: "date",
                label: "Hep A Date",
                formColumn: "2",
                formRow: "1",
                formOption: "hideLabel",
                pageDataKey: "immunization",
                dataParent: "immunization",
                page: "History Immunization"
              }
            ]
          },
          {
            formRow: "2",
            elements: [
              {
                elementKey: "hepB",
                fqn: "immunization.hepB",
                inputType: "checkbox",
                label: "Hep B",
                formColumn: "1",
                formRow: "2",
                pageDataKey: "immunization",
                dataParent: "immunization",
                page: "History Immunization"
              },
              {
                elementKey: "hepBDate",
                fqn: "immunization.hepBDate",
                inputType: "date",
                label: "Hep B Date",
                formColumn: "2",
                formRow: "2",
                formOption: "hideLabel",
                pageDataKey: "immunization",
                dataParent: "immunization",
                page: "History Immunization"
              }
            ]
          },
          {
            formRow: "3",
            elements: [
              {
                elementKey: "mmr",
                fqn: "immunization.mmr",
                inputType: "checkbox",
                label: "MMR",
                formColumn: "1",
                formRow: "3",
                pageDataKey: "immunization",
                dataParent: "immunization",
                page: "History Immunization"
              },
              {
                elementKey: "mmrDate",
                fqn: "immunization.mmrDate",
                inputType: "date",
                label: "MMR Date",
                formColumn: "2",
                formRow: "3",
                formOption: "hideLabel",
                pageDataKey: "immunization",
                dataParent: "immunization",
                page: "History Immunization"
              }
            ]
          },
          {
            formRow: "4",
            elements: [
              {
                elementKey: "pneumococcal",
                fqn: "immunization.pneumococcal",
                inputType: "checkbox",
                label: "Pneumococcal",
                formColumn: "1",
                formRow: "4",
                pageDataKey: "immunization",
                dataParent: "immunization",
                page: "History Immunization"
              },
              {
                elementKey: "pneumococcalDate",
                fqn: "immunization.pneumococcalDate",
                inputType: "date",
                label: "Pneumococcal Date",
                formColumn: "2",
                formRow: "4",
                formOption: "hideLabel",
                pageDataKey: "immunization",
                dataParent: "immunization",
                page: "History Immunization"
              }
            ]
          },
          {
            formRow: "5",
            elements: [
              {
                elementKey: "polioDiptheriaPertussis",
                fqn: "immunization.polioDiptheriaPertussis",
                inputType: "checkbox",
                label: "Polio diptheria pertussis",
                formColumn: "1",
                formRow: "5",
                pageDataKey: "immunization",
                dataParent: "immunization",
                page: "History Immunization"
              },
              {
                elementKey: "polioDiptheriaPertussisDate",
                fqn: "immunization.polioDiptheriaPertussisDate",
                inputType: "date",
                label: "Polio diptheria pertussis Date",
                formColumn: "2",
                formRow: "5",
                formOption: "hideLabel",
                pageDataKey: "immunization",
                dataParent: "immunization",
                page: "History Immunization"
              }
            ]
          },
          {
            formRow: "6",
            elements: [
              {
                elementKey: "tb",
                fqn: "immunization.tb",
                inputType: "checkbox",
                label: "TB",
                formColumn: "1",
                formRow: "6",
                pageDataKey: "immunization",
                dataParent: "immunization",
                page: "History Immunization"
              },
              {
                elementKey: "tbDate",
                fqn: "immunization.tbDate",
                inputType: "date",
                label: "TB Date",
                formColumn: "2",
                formRow: "6",
                formOption: "hideLabel",
                pageDataKey: "immunization",
                dataParent: "immunization",
                page: "History Immunization"
              }
            ]
          },
          {
            formRow: "7",
            elements: [
              {
                elementKey: "tetanus",
                fqn: "immunization.tetanus",
                inputType: "checkbox",
                label: "Tetanus",
                formColumn: "1",
                formRow: "7",
                pageDataKey: "immunization",
                dataParent: "immunization",
                page: "History Immunization"
              },
              {
                elementKey: "tetanusDate",
                fqn: "immunization.tetanusDate",
                inputType: "date",
                label: "Tetanus Date",
                formColumn: "2",
                formRow: "7",
                formOption: "hideLabel",
                pageDataKey: "immunization",
                dataParent: "immunization",
                page: "History Immunization"
              }
            ]
          },
          {
            formRow: "8",
            elements: [
              {
                elementKey: "other1",
                fqn: "immunization.other1",
                inputType: "text",
                formColumn: "1",
                formRow: "8",
                pageDataKey: "immunization",
                dataParent: "immunization",
                page: "History Immunization",
                validation: "If other is selected, this is mandatory"
              },
              {
                elementKey: "otherDate1",
                fqn: "immunization.otherDate1",
                inputType: "date",
                label: "Date",
                formColumn: "2",
                formRow: "8",
                formOption: "hideLabel",
                pageDataKey: "immunization",
                dataParent: "immunization",
                page: "History Immunization"
              }
            ]
          },
          {
            formRow: "9",
            elements: [
              {
                elementKey: "other2",
                fqn: "immunization.other2",
                inputType: "text",
                formColumn: "1",
                formRow: "9",
                pageDataKey: "immunization",
                dataParent: "immunization",
                page: "History Immunization",
                validation: "If other is selected, this is mandatory"
              },
              {
                elementKey: "otherDate2",
                fqn: "immunization.otherDate2",
                inputType: "date",
                label: "Date",
                formColumn: "2",
                formRow: "9",
                formOption: "hideLabel",
                pageDataKey: "immunization",
                dataParent: "immunization",
                page: "History Immunization"
              }
            ]
          },
          {
            formRow: "10",
            elements: [
              {
                elementKey: "other3",
                fqn: "immunization.other3",
                inputType: "text",
                formColumn: "1",
                formRow: "10",
                pageDataKey: "immunization",
                dataParent: "immunization",
                page: "History Immunization",
                validation: "If other is selected, this is mandatory"
              },
              {
                elementKey: "otherDate3",
                fqn: "immunization.otherDate3",
                inputType: "date",
                label: "Date",
                formColumn: "2",
                formRow: "10",
                formOption: "hideLabel",
                pageDataKey: "immunization",
                dataParent: "immunization",
                page: "History Immunization"
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
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                elementKey: "history",
                fqn: "familyHistory.history",
                inputType: "textarea",
                label: "Family medical history",
                formColumn: "1",
                formRow: "1",
                pageDataKey: "familyHistory",
                dataParent: "familyHistory",
                page: "History Family medical history"
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
      hasTable: true,
      tables: [
        {
          tableKey: "teams",
          addButtonText: "Add a care team member",
          tableCells: [
            {
              elementKey: "name",
              fqn: "careTeam.teams.name",
              inputType: "text",
              label: "Name",
              tableColumn: "1",
              formColumn: "1",
              formRow: "1",
              pageDataKey: "careTeam",
              dataParent: "careTeam.teams",
              level2Key: "teams",
              page: "Care team",
              tableKey: "teams"
            },
            {
              elementKey: "profession",
              fqn: "careTeam.teams.profession",
              inputType: "text",
              label: "Profession",
              tableColumn: "2",
              formColumn: "2",
              formRow: "1",
              pageDataKey: "careTeam",
              dataParent: "careTeam.teams",
              level2Key: "teams",
              page: "Care team",
              tableKey: "teams"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    elementKey: "name",
                    fqn: "careTeam.teams.name",
                    inputType: "text",
                    label: "Name",
                    tableColumn: "1",
                    formColumn: "1",
                    formRow: "1",
                    pageDataKey: "careTeam",
                    dataParent: "careTeam.teams",
                    level2Key: "teams",
                    page: "Care team",
                    tableKey: "teams"
                  },
                  {
                    elementKey: "profession",
                    fqn: "careTeam.teams.profession",
                    inputType: "text",
                    label: "Profession",
                    tableColumn: "2",
                    formColumn: "2",
                    formRow: "1",
                    pageDataKey: "careTeam",
                    dataParent: "careTeam.teams",
                    level2Key: "teams",
                    page: "Care team",
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
      hasTable: true,
      tables: [
        {
          tableKey: "encounters",
          addButtonText: "Add a past encounter",
          tableCells: [
            {
              elementKey: "date",
              fqn: "pastAppointments.encounters.date",
              inputType: "text",
              label: "Date",
              tableColumn: "1",
              formColumn: "1",
              formRow: "1",
              pageDataKey: "pastAppointments",
              dataParent: "pastAppointments.encounters",
              level2Key: "encounters",
              page: "Past appointments",
              tableKey: "encounters"
            },
            {
              elementKey: "site",
              fqn: "pastAppointments.encounters.site",
              inputType: "text",
              label: "Site",
              tableColumn: "2",
              formColumn: "2",
              formRow: "1",
              pageDataKey: "pastAppointments",
              dataParent: "pastAppointments.encounters",
              level2Key: "encounters",
              page: "Past appointments",
              tableKey: "encounters"
            },
            {
              elementKey: "diagnosis",
              fqn: "pastAppointments.encounters.diagnosis",
              inputType: "text",
              label: "Diagnosis",
              tableColumn: "3",
              formColumn: "1",
              formRow: "2",
              pageDataKey: "pastAppointments",
              dataParent: "pastAppointments.encounters",
              level2Key: "encounters",
              page: "Past appointments",
              tableKey: "encounters"
            },
            {
              elementKey: "mrp",
              fqn: "pastAppointments.encounters.mrp",
              inputType: "text",
              label: "Most responsible person",
              tableColumn: "4",
              formColumn: "2",
              formRow: "2",
              pageDataKey: "pastAppointments",
              dataParent: "pastAppointments.encounters",
              level2Key: "encounters",
              page: "Past appointments",
              tableKey: "encounters"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    elementKey: "date",
                    fqn: "pastAppointments.encounters.date",
                    inputType: "text",
                    label: "Date",
                    tableColumn: "1",
                    formColumn: "1",
                    formRow: "1",
                    pageDataKey: "pastAppointments",
                    dataParent: "pastAppointments.encounters",
                    level2Key: "encounters",
                    page: "Past appointments",
                    tableKey: "encounters"
                  },
                  {
                    elementKey: "site",
                    fqn: "pastAppointments.encounters.site",
                    inputType: "text",
                    label: "Site",
                    tableColumn: "2",
                    formColumn: "2",
                    formRow: "1",
                    pageDataKey: "pastAppointments",
                    dataParent: "pastAppointments.encounters",
                    level2Key: "encounters",
                    page: "Past appointments",
                    tableKey: "encounters"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "diagnosis",
                    fqn: "pastAppointments.encounters.diagnosis",
                    inputType: "text",
                    label: "Diagnosis",
                    tableColumn: "3",
                    formColumn: "1",
                    formRow: "2",
                    pageDataKey: "pastAppointments",
                    dataParent: "pastAppointments.encounters",
                    level2Key: "encounters",
                    page: "Past appointments",
                    tableKey: "encounters"
                  },
                  {
                    elementKey: "mrp",
                    fqn: "pastAppointments.encounters.mrp",
                    inputType: "text",
                    label: "Most responsible person",
                    tableColumn: "4",
                    formColumn: "2",
                    formRow: "2",
                    pageDataKey: "pastAppointments",
                    dataParent: "pastAppointments.encounters",
                    level2Key: "encounters",
                    page: "Past appointments",
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
          addButtonText: "Add a past appointment",
          tableCells: [
            {
              elementKey: "date",
              fqn: "pastAppointments.outpatientAppointments.date",
              inputType: "text",
              label: "Date",
              tableColumn: "1",
              formColumn: "1",
              formRow: "1",
              pageDataKey: "pastAppointments",
              dataParent: "pastAppointments.outpatientAppointments",
              level2Key: "outpatientAppointments",
              page: "Past appointments",
              tableKey: "outpatientAppointments"
            },
            {
              elementKey: "site",
              fqn: "pastAppointments.outpatientAppointments.site",
              inputType: "text",
              label: "Site",
              tableColumn: "2",
              formColumn: "2",
              formRow: "1",
              pageDataKey: "pastAppointments",
              dataParent: "pastAppointments.outpatientAppointments",
              level2Key: "outpatientAppointments",
              page: "Past appointments",
              tableKey: "outpatientAppointments"
            },
            {
              elementKey: "reasonForVisit",
              fqn: "pastAppointments.outpatientAppointments.reasonForVisit",
              inputType: "text",
              label: "Reason for visit",
              tableColumn: "3",
              formColumn: "1",
              formRow: "2",
              pageDataKey: "pastAppointments",
              dataParent: "pastAppointments.outpatientAppointments",
              level2Key: "outpatientAppointments",
              page: "Past appointments",
              tableKey: "outpatientAppointments"
            },
            {
              elementKey: "diagnosis",
              fqn: "pastAppointments.outpatientAppointments.diagnosis",
              inputType: "text",
              label: "Diagnosis",
              tableColumn: "4",
              formColumn: "2",
              formRow: "2",
              pageDataKey: "pastAppointments",
              dataParent: "pastAppointments.outpatientAppointments",
              level2Key: "outpatientAppointments",
              page: "Past appointments",
              tableKey: "outpatientAppointments"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    elementKey: "date",
                    fqn: "pastAppointments.outpatientAppointments.date",
                    inputType: "text",
                    label: "Date",
                    tableColumn: "1",
                    formColumn: "1",
                    formRow: "1",
                    pageDataKey: "pastAppointments",
                    dataParent: "pastAppointments.outpatientAppointments",
                    level2Key: "outpatientAppointments",
                    page: "Past appointments",
                    tableKey: "outpatientAppointments"
                  },
                  {
                    elementKey: "site",
                    fqn: "pastAppointments.outpatientAppointments.site",
                    inputType: "text",
                    label: "Site",
                    tableColumn: "2",
                    formColumn: "2",
                    formRow: "1",
                    pageDataKey: "pastAppointments",
                    dataParent: "pastAppointments.outpatientAppointments",
                    level2Key: "outpatientAppointments",
                    page: "Past appointments",
                    tableKey: "outpatientAppointments"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "reasonForVisit",
                    fqn: "pastAppointments.outpatientAppointments.reasonForVisit",
                    inputType: "text",
                    label: "Reason for visit",
                    tableColumn: "3",
                    formColumn: "1",
                    formRow: "2",
                    pageDataKey: "pastAppointments",
                    dataParent: "pastAppointments.outpatientAppointments",
                    level2Key: "outpatientAppointments",
                    page: "Past appointments",
                    tableKey: "outpatientAppointments"
                  },
                  {
                    elementKey: "diagnosis",
                    fqn: "pastAppointments.outpatientAppointments.diagnosis",
                    inputType: "text",
                    label: "Diagnosis",
                    tableColumn: "4",
                    formColumn: "2",
                    formRow: "2",
                    pageDataKey: "pastAppointments",
                    dataParent: "pastAppointments.outpatientAppointments",
                    level2Key: "outpatientAppointments",
                    page: "Past appointments",
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