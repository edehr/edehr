export default function () {
  return {
    demographics: {
      pageDataKey: 'demographics',
      pageTitle: 'Demographics',
      pIndex: '1',
      isV2: true,
      hasGridForm: true,
      pageChildren: [
        {
          elementKey: 'givenName',
          dataCaseStudy: 'Erin',
          formIndex: '1',
          inputType: 'text',
          label: 'First name',
          fqn: 'demographics.givenName'
        },
        {
          elementKey: 'middleName',
          formIndex: '1',
          inputType: 'text',
          label: 'Middle name(s)',
          fqn: 'demographics.middleName'
        },
        {
          elementKey: 'familyName',
          dataCaseStudy: 'Johns',
          formIndex: '1',
          inputType: 'text',
          label: 'Last name',
          fqn: 'demographics.familyName'
        },
        {
          elementKey: 'preferredName',
          dataCaseStudy: 'Erin',
          formIndex: '1',
          inputType: 'text',
          label: 'Preferred name',
          tableCss: 'hr-table',
          fqn: 'demographics.preferredName'
        },
        {
          elementKey: 'dateOfBirth',
          dataCaseStudy: '09-SEP-19##',
          formIndex: '1',
          inputType: 'text',
          label: 'Date of birth',
          fqn: 'demographics.dateOfBirth'
        },
        {
          elementKey: 'personAge',
          dataCaseStudy: '74',
          formIndex: '1',
          inputType: 'text',
          label: 'Age',
          fqn: 'demographics.personAge'
        },
        {
          elementKey: 'height',
          dataCaseStudy: '157',
          defaultValue: '157',
          formIndex: '1',
          inputType: 'text',
          label: 'Height',
          suffix: 'cm',
          fqn: 'demographics.height'
        },
        {
          elementKey: 'weight',
          dataCaseStudy: '63',
          defaultValue: '49',
          formIndex: '1',
          inputType: 'text',
          label: 'Weight',
          suffix: 'kg',
          fqn: 'demographics.weight'
        },
        {
          elementKey: 'gender',
          dataCaseStudy: 'Female',
          formIndex: '1',
          inputType: 'select',
          label: 'Gender',
          options: [
            {
              key: 'Unknown',
              text: 'Unknown'
            },
            {
              key: 'Female',
              text: 'Female'
            },
            {
              key: 'Male',
              text: 'Male'
            },
            {
              key: 'Transgender female',
              text: 'Transgender female'
            },
            {
              key: 'Transgender male',
              text: 'Transgender male'
            },
            {
              key: 'Undifferentiated',
              text: 'Undifferentiated'
            },
            {
              key: 'Prefer not to say',
              text: 'Prefer not to say'
            }
          ],
          tableCss: 'hr-table',
          fqn: 'demographics.gender'
        },
        {
          elementKey: 'martialStatus',
          dataCaseStudy: 'Widow',
          formIndex: '1',
          inputType: 'select',
          label: 'Martial status',
          options: [
            {
              key: 'Married',
              text: 'Married'
            },
            {
              key: 'Single',
              text: 'Single'
            },
            {
              key: 'Life partner',
              text: 'Life partner'
            },
            {
              key: 'Divorced',
              text: 'Divorced'
            },
            {
              key: 'Separated',
              text: 'Separated'
            },
            {
              key: 'Widowed',
              text: 'Widowed'
            }
          ],
          fqn: 'demographics.martialStatus'
        },
        {
          elementKey: 'languagePrimary',
          dataCaseStudy: 'English',
          formIndex: '1',
          inputType: 'select',
          label: 'Primary language',
          options: [
            {
              key: 'English',
              text: 'English'
            },
            {
              key: 'French',
              text: 'French'
            },
            {
              key: 'Spanish',
              text: 'Spanish'
            },
            {
              key: 'German',
              text: 'German'
            },
            {
              key: 'Chinese',
              text: 'Chinese'
            }
          ],
          fqn: 'demographics.languagePrimary'
        },
        {
          elementKey: 'religion',
          formIndex: '1',
          inputType: 'text',
          label: 'Religion',
          fqn: 'demographics.religion'
        },
        {
          elementKey: 'indigenousIdentifyAs',
          dataCaseStudy: 'No',
          formIndex: '1',
          inputType: 'select',
          label: 'Do you identify as an indigenous person?',
          options: [
            {
              key: 'Yes',
              text: 'Yes'
            },
            {
              key: 'No',
              text: 'No'
            }
          ],
          tableCss: 'hr-table',
          fqn: 'demographics.indigenousIdentifyAs'
        },
        {
          elementKey: 'streetAddress',
          dataCaseStudy: '402 Willow St.',
          formIndex: '1',
          formCss: 'grid-span-2-columns',
          inputType: 'text',
          label: 'Street address',
          fqn: 'demographics.streetAddress'
        },
        {
          elementKey: 'city',
          dataCaseStudy: 'Vancouver',
          formIndex: '1',
          inputType: 'text',
          label: 'City',
          fqn: 'demographics.city'
        },
        {
          elementKey: 'country',
          dataCaseStudy: 'Canada',
          defaultValue: 'Canada',
          formIndex: '1',
          inputType: 'text',
          label: 'Country',
          fqn: 'demographics.country'
        },
        {
          elementKey: 'postalCode',
          dataCaseStudy: 'V3F 9R2',
          formIndex: '1',
          inputType: 'text',
          label: 'Postal code',
          fqn: 'demographics.postalCode'
        },
        {
          elementKey: 'noAddress',
          defaultValue: false,
          formIndex: '1',
          inputType: 'checkbox',
          label: 'No address',
          tableCss: 'hr-table',
          fqn: 'demographics.noAddress'
        },
        {
          elementKey: 'phoneNumber',
          dataCaseStudy: '(778) 555-2947',
          formIndex: '1',
          inputType: 'text',
          label: 'Primary phone number',
          fqn: 'demographics.phoneNumber'
        },
        {
          elementKey: 'emailAddress',
          formIndex: '1',
          inputType: 'text',
          label: 'Email',
          tableCss: 'hr-table',
          fqn: 'demographics.emailAddress'
        },
        {
          elementKey: 'occupationStudent',
          dataCaseStudy: 'Retired',
          formIndex: '1',
          inputType: 'text',
          label: 'Occupation/student',
          fqn: 'demographics.occupationStudent'
        },
        {
          elementKey: 'phn',
          dataCaseStudy: '12345678',
          formIndex: '1',
          inputType: 'text',
          label: 'PHN',
          fqn: 'demographics.phn'
        },
        {
          elementKey: 'mrn',
          formIndex: '1',
          inputType: 'text',
          label: 'MRN',
          fqn: 'demographics.mrn'
        },
        {
          elementKey: 'patientService',
          formIndex: '1',
          inputType: 'text',
          label: 'Patient service',
          tableCss: 'hr-table',
          fqn: 'demographics.patientService'
        },
        {
          elementKey: 'nextOfKinName',
          dataCaseStudy: 'Thomas Johns',
          formIndex: '1',
          inputType: 'text',
          label: 'Next of kin name',
          fqn: 'demographics.nextOfKinName'
        },
        {
          elementKey: 'nextOfKinRelationship',
          dataCaseStudy: 'Son',
          formIndex: '1',
          inputType: 'select',
          label: 'Next of kin relationship',
          options: [
            {
              key: 'Wife',
              text: 'Wife'
            },
            {
              key: 'Husband',
              text: 'Husband'
            },
            {
              key: 'Mother',
              text: 'Mother'
            },
            {
              key: 'Father',
              text: 'Father'
            },
            {
              key: 'Guardian',
              text: 'Guardian'
            },
            {
              key: 'Sister',
              text: 'Sister'
            },
            {
              key: 'Brother',
              text: 'Brother'
            },
            {
              key: 'Daughter',
              text: 'Daughter'
            },
            {
              key: 'Son',
              text: 'Son'
            },
            {
              key: 'Aunt',
              text: 'Aunt'
            },
            {
              key: 'Uncle',
              text: 'Uncle'
            },
            {
              key: 'Grandmother',
              text: 'Grandmother'
            },
            {
              key: 'Grandfather',
              text: 'Grandfather'
            },
            {
              key: 'Friend',
              text: 'Friend'
            },
            {
              key: 'Other',
              text: 'Other'
            }
          ],
          fqn: 'demographics.nextOfKinRelationship'
        },
        {
          elementKey: 'nextOfKinPhone',
          dataCaseStudy: '604-555-9865',
          formIndex: '1',
          inputType: 'text',
          label: 'Next of kin phone',
          tableCss: 'hr-table',
          fqn: 'demographics.nextOfKinPhone'
        },
        {
          elementKey: 'decisionMakerName',
          dataCaseStudy: 'Thomas Johns',
          formIndex: '1',
          inputType: 'text',
          label: 'Decision maker name',
          fqn: 'demographics.decisionMakerName'
        },
        {
          elementKey: 'decisionMakerRelationship',
          dataCaseStudy: 'Son',
          formIndex: '1',
          inputType: 'select',
          label: 'Decision maker relationship',
          options: [
            {
              key: 'Spouse',
              text: 'Spouse'
            },
            {
              key: 'Child',
              text: 'Child'
            },
            {
              key: 'Parent',
              text: 'Parent'
            },
            {
              key: 'Sibling',
              text: 'Sibling'
            },
            {
              key: 'Grandparent',
              text: 'Grandparent'
            },
            {
              key: 'Grandchild',
              text: 'Grandchild'
            },
            {
              key: 'Friend',
              text: 'Friend'
            },
            {
              key: 'Anyone else related by partnership',
              text: 'Anyone else related by partnership'
            },
            {
              key: 'Public guardian and trustee employee',
              text: 'Public guardian and trustee employee'
            },
            {
              key: 'Other',
              text: 'Other'
            }
          ],
          fqn: 'demographics.decisionMakerRelationship'
        },
        {
          elementKey: 'decisionMakerPhone',
          dataCaseStudy: '604-555-9865',
          formIndex: '1',
          inputType: 'text',
          label: 'Decision maker phone',
          fqn: 'demographics.decisionMakerPhone'
        }
      ],
      generated: '2020-02-10T11:05:37-02:00',
      pageElements: {
        pageForm: {
          elementKey: 'pageForm',
          formKey: 'pageForm',
          isPageForm: true,
          ehr_groups: [
            {
              elementKey: 'ehr_group1',
              formCss: 'section-divider',
              gIndex: '1',
              gChildren: [
                'givenName',
                'middleName',
                'familyName',
                'preferredName',
                'dateOfBirth',
                'personAge',
                'height',
                'weight',
                'gender',
                'martialStatus',
                'languagePrimary',
                'religion',
                'indigenousIdentifyAs'
              ]
            },
            {
              elementKey: 'ehr_group2',
              formCss: 'section-divider',
              gIndex: '2',
              gChildren: [
                'streetAddress',
                'city',
                'country',
                'postalCode',
                'noAddress',
                'phoneNumber',
                'emailAddress',
                'occupationStudent',
                'phn',
                'mrn',
                'patientService'
              ]
            },
            {
              elementKey: 'ehr_group3',
              gIndex: '3',
              gChildren: [
                'nextOfKinName',
                'nextOfKinRelationship',
                'nextOfKinPhone',
                'decisionMakerName',
                'decisionMakerRelationship',
                'decisionMakerPhone'
              ]
            }
          ]
        }
      }
    },
    allergies: {
      pageDataKey: 'allergies',
      pageTitle: 'Allergies',
      pIndex: '2',
      isV2: true,
      hasGridForm: true,
      pageChildren: [
        {
          elementKey: 'checkbox',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'No known allergies',
          fqn: 'allergies.checkbox'
        },
        {
          elementKey: 'text',
          dataCaseStudy: true,
          defaultValue: true,
          formIndex: '1',
          inputType: 'text',
          label: 'Allergies',
          fqn: 'allergies.text'
        }
      ],
      generated: '2020-02-10T11:05:37-02:00',
      pageElements: {
        pageForm: {
          elementKey: 'pageForm',
          formKey: 'pageForm',
          isPageForm: true,
          ehr_groups: [
            {
              elementKey: 'ehr_group4',
              formCss: 'grid-left-to-right-1',
              gIndex: '1',
              gChildren: [
                'checkbox',
                'text'
              ]
            }
          ]
        }
      }
    },
    medical: {
      pageDataKey: 'medical',
      pageTitle: 'Medical history',
      pIndex: '3',
      isV2: true,
      hasGridForm: true,
      pageChildren: [
        {
          elementKey: 'history',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Past medical history',
          fqn: 'medical.history'
        }
      ],
      generated: '2020-02-10T11:05:37-02:00',
      pageElements: {
        pageForm: {
          elementKey: 'pageForm',
          formKey: 'pageForm',
          isPageForm: true,
          ehr_groups: [
            {
              elementKey: 'ehr_group5',
              formCss: 'grid-left-to-right-1',
              gIndex: '1',
              gChildren: [
                'history'
              ]
            }
          ]
        }
      }
    },
    psychosocial: {
      pageDataKey: 'psychosocial',
      pageTitle: 'Psychosocial history',
      pIndex: '4',
      isV2: true,
      hasGridForm: true,
      pageChildren: [
        {
          elementKey: 'history',
          dataCaseStudy: 'Feels down when she thinks about her lower financial status and her advancing age, and how she is becoming more forgetful and less energetic. Often feels alone and worries about falling and not being able to alert anyone to come to her rescue. Driving is becoming hard for her.',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Psychosocial history',
          fqn: 'psychosocial.history'
        },
        {
          elementKey: 'diet',
          dataCaseStudy: 'Regular',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Diet',
          fqn: 'psychosocial.diet'
        },
        {
          elementKey: 'livingSituation',
          dataCaseStudy: 'Son lives with her in her house',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Living situation',
          fqn: 'psychosocial.livingSituation'
        },
        {
          elementKey: 'employmentSchool',
          dataCaseStudy: 'Retired hairdresser',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Employment/school',
          fqn: 'psychosocial.employmentSchool'
        },
        {
          elementKey: 'hobbies',
          dataCaseStudy: 'Bingo, Netflix, playing Solitaire and Scrabble with friends on her iPad',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Hobbies',
          fqn: 'psychosocial.hobbies'
        },
        {
          elementKey: 'exercise',
          dataCaseStudy: true,
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Exercise',
          fqn: 'psychosocial.exercise'
        },
        {
          elementKey: 'exerciseText',
          dataCaseStudy: '< 1 day/week',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'text',
          label: 'Exercise',
          fqn: 'psychosocial.exerciseText'
        },
        {
          elementKey: 'spacer8',
          formIndex: '1',
          inputType: 'spacer',
          label: 'Exercise',
          fqn: 'psychosocial.spacer8'
        },
        {
          elementKey: 'caffeineUse',
          dataCaseStudy: true,
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Caffeine use',
          fqn: 'psychosocial.caffeineUse'
        },
        {
          elementKey: 'caffeineUseText',
          dataCaseStudy: '1-2 cups/day',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'text',
          label: 'Caffeine use',
          fqn: 'psychosocial.caffeineUseText'
        },
        {
          elementKey: 'spacer9',
          formIndex: '1',
          inputType: 'spacer',
          label: 'Caffeine use',
          fqn: 'psychosocial.spacer9'
        },
        {
          elementKey: 'tobaccoUse',
          dataCaseStudy: true,
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Tobacco use',
          fqn: 'psychosocial.tobaccoUse'
        },
        {
          elementKey: 'tobaccoUseText',
          dataCaseStudy: '1-2 cups/day',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'text',
          label: 'Tobacco use',
          fqn: 'psychosocial.tobaccoUseText'
        },
        {
          elementKey: 'spacer10',
          formIndex: '1',
          inputType: 'spacer',
          label: 'Tobacco use',
          fqn: 'psychosocial.spacer10'
        },
        {
          elementKey: 'cannabisUse',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Cannabis use',
          fqn: 'psychosocial.cannabisUse'
        },
        {
          elementKey: 'cannabisUseText',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'text',
          label: 'Cannabis use',
          fqn: 'psychosocial.cannabisUseText'
        },
        {
          elementKey: 'spacer11',
          formIndex: '1',
          inputType: 'spacer',
          label: 'Cannabis use',
          fqn: 'psychosocial.spacer11'
        },
        {
          elementKey: 'alcoholUse',
          dataCaseStudy: true,
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Alcohol use',
          fqn: 'psychosocial.alcoholUse'
        },
        {
          elementKey: 'alcoholUseText',
          dataCaseStudy: 'Social',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'text',
          label: 'Alcohol use',
          fqn: 'psychosocial.alcoholUseText'
        },
        {
          elementKey: 'spacer12',
          formIndex: '1',
          inputType: 'spacer',
          label: 'Alcohol use',
          fqn: 'psychosocial.spacer12'
        },
        {
          elementKey: 'substanceUse',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Substance use',
          fqn: 'psychosocial.substanceUse'
        },
        {
          elementKey: 'substanceUseText',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'text',
          label: 'Substance use',
          fqn: 'psychosocial.substanceUseText'
        },
        {
          elementKey: 'spacer13',
          formIndex: '1',
          inputType: 'spacer',
          label: 'Substance use',
          fqn: 'psychosocial.spacer13'
        }
      ],
      generated: '2020-02-10T11:05:37-02:00',
      pageElements: {
        pageForm: {
          elementKey: 'pageForm',
          formKey: 'pageForm',
          isPageForm: true,
          ehr_groups: [
            {
              elementKey: 'ehr_group6',
              gIndex: '1',
              gChildren: [
                'history',
                'diet',
                'livingSituation',
                'employmentSchool',
                'hobbies'
              ]
            },
            {
              elementKey: 'ehr_group7',
              gIndex: '2',
              gChildren: [
                'exercise',
                'exerciseText',
                'spacer8',
                'caffeineUse',
                'caffeineUseText',
                'spacer9',
                'tobaccoUse',
                'tobaccoUseText',
                'spacer10',
                'cannabisUse',
                'cannabisUseText',
                'spacer11',
                'alcoholUse',
                'alcoholUseText',
                'spacer12',
                'substanceUse',
                'substanceUseText',
                'spacer13'
              ]
            }
          ]
        }
      }
    },
    surgical: {
      pageDataKey: 'surgical',
      pageTitle: 'Surgical history',
      pIndex: '5',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'date',
          formIndex: '1',
          inputType: 'text',
          label: 'Date',
          tableColumn: '1',
          fqn: 'surgical.date'
        },
        {
          elementKey: 'physician',
          formIndex: '1',
          inputType: 'text',
          label: 'Performing physician',
          tableColumn: '2',
          fqn: 'surgical.physician'
        },
        {
          elementKey: 'procedure',
          dataCaseStudy: 'Cesarean section',
          formIndex: '1',
          inputType: 'text',
          label: 'Surgery/procedure',
          tableColumn: '3',
          fqn: 'surgical.procedure'
        },
        {
          elementKey: 'previousAdmissionsDate',
          formIndex: '2',
          inputType: 'date',
          label: 'Date',
          tableColumn: '1',
          fqn: 'surgical.previousAdmissionsDate'
        },
        {
          elementKey: 'with',
          formIndex: '2',
          inputType: 'text',
          label: 'Appointment with',
          tableColumn: '2',
          fqn: 'surgical.with'
        },
        {
          elementKey: 'details',
          formIndex: '2',
          inputType: 'text',
          label: 'Appointment details',
          tableColumn: '3',
          fqn: 'surgical.details'
        },
        {
          elementKey: 'previousAdmissions',
          formIndex: '2',
          inputType: 'text',
          label: 'Previous appointment reason',
          tableColumn: '4',
          fqn: 'surgical.previousAdmissions'
        },
        {
          elementKey: 'comments',
          formIndex: '2',
          inputType: 'textarea',
          label: 'General comments',
          tableColumn: '5',
          fqn: 'surgical.comments'
        }
      ],
      generated: '2020-02-10T11:05:37-02:00',
      pageElements: {
        pastSurgery: {
          elementKey: 'pastSurgery',
          tableKey: 'pastSurgery',
          isTable: true,
          hasRecHeader: false,
          label: 'Previous surgeries',
          addButtonText: 'Add a previous surgery',
          ehr_list: [
            {
              ehr_list_index: '1',
              items: [
                'date'
              ]
            },
            {
              ehr_list_index: '2',
              items: [
                'physician'
              ]
            },
            {
              ehr_list_index: '3',
              items: [
                'procedure'
              ]
            }
          ],
          form: {
            elementKey: 'pastSurgery',
            label: 'Previous surgeries',
            addButtonText: 'Add a previous surgery',
            formKey: 'pastSurgery',
            ehr_groups: [
              {
                elementKey: 'pastSurgery',
                gIndex: '1',
                gChildren: [
                  'date',
                  'physician',
                  'procedure'
                ]
              }
            ],
            ehr_data: {
              date: '',
              physician: '',
              procedure: ''
            }
          }
        },
        previous: {
          elementKey: 'previous',
          tableKey: 'previous',
          isTable: true,
          hasRecHeader: false,
          label: 'Previous appointments',
          addButtonText: 'Add a previous appointment',
          ehr_list: [
            {
              ehr_list_index: '1',
              items: [
                'previousAdmissionsDate'
              ]
            },
            {
              ehr_list_index: '2',
              items: [
                'with'
              ]
            },
            {
              ehr_list_index: '3',
              items: [
                'details'
              ]
            },
            {
              ehr_list_index: '4',
              items: [
                'previousAdmissions'
              ]
            },
            {
              ehr_list_index: '5',
              items: [
                'comments'
              ]
            }
          ],
          form: {
            elementKey: 'previous',
            label: 'Previous appointments',
            addButtonText: 'Add a previous appointment',
            formKey: 'previous',
            ehr_groups: [
              {
                elementKey: 'previous',
                gIndex: '1',
                gChildren: [
                  'previousAdmissionsDate',
                  'with',
                  'details',
                  'previousAdmissions'
                ]
              },
              {
                elementKey: 'ehr_group14',
                formCss: 'grid-left-to-right-1',
                gIndex: '2',
                gChildren: [
                  'comments'
                ]
              }
            ],
            ehr_data: {
              previousAdmissionsDate: '',
              with: '',
              details: '',
              previousAdmissions: '',
              comments: ''
            }
          }
        }
      }
    },
    immunization: {
      pageDataKey: 'immunization',
      pageTitle: 'Immunization history',
      pIndex: '6',
      isV2: true,
      hasGridForm: true,
      pageChildren: [
        {
          elementKey: 'hepA',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Hep A',
          fqn: 'immunization.hepA'
        },
        {
          elementKey: 'hepADate',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'date',
          label: 'Hep A',
          fqn: 'immunization.hepADate'
        },
        {
          elementKey: 'spacer16',
          formIndex: '1',
          inputType: 'spacer',
          label: 'Hep A',
          fqn: 'immunization.spacer16'
        },
        {
          elementKey: 'hepB',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Hep B',
          fqn: 'immunization.hepB'
        },
        {
          elementKey: 'hepBDate',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'date',
          label: 'Hep B',
          fqn: 'immunization.hepBDate'
        },
        {
          elementKey: 'spacer17',
          formIndex: '1',
          inputType: 'spacer',
          label: 'Hep B',
          fqn: 'immunization.spacer17'
        },
        {
          elementKey: 'mmr',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'MMR',
          fqn: 'immunization.mmr'
        },
        {
          elementKey: 'mmrDate',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'date',
          label: 'MMR',
          fqn: 'immunization.mmrDate'
        },
        {
          elementKey: 'spacer18',
          formIndex: '1',
          inputType: 'spacer',
          label: 'MMR',
          fqn: 'immunization.spacer18'
        },
        {
          elementKey: 'pneumococcal',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Pneumococcal',
          fqn: 'immunization.pneumococcal'
        },
        {
          elementKey: 'pneumococcalDate',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'date',
          label: 'Pneumococcal',
          fqn: 'immunization.pneumococcalDate'
        },
        {
          elementKey: 'spacer19',
          formIndex: '1',
          inputType: 'spacer',
          label: 'Pneumococcal',
          fqn: 'immunization.spacer19'
        },
        {
          elementKey: 'polioDiptheriaPertussis',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Polio diptheria pertussis',
          fqn: 'immunization.polioDiptheriaPertussis'
        },
        {
          elementKey: 'polioDiptheriaPertussisDate',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'date',
          label: 'Polio diptheria pertussis',
          fqn: 'immunization.polioDiptheriaPertussisDate'
        },
        {
          elementKey: 'spacer20',
          formIndex: '1',
          inputType: 'spacer',
          label: 'Polio diptheria pertussis',
          fqn: 'immunization.spacer20'
        },
        {
          elementKey: 'tb',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'TB',
          fqn: 'immunization.tb'
        },
        {
          elementKey: 'tbDate',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'date',
          label: 'TB',
          fqn: 'immunization.tbDate'
        },
        {
          elementKey: 'spacer21',
          formIndex: '1',
          inputType: 'spacer',
          label: 'TB',
          fqn: 'immunization.spacer21'
        },
        {
          elementKey: 'tetanus',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Tetanus',
          fqn: 'immunization.tetanus'
        },
        {
          elementKey: 'tetanusDate',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'date',
          label: 'Tetanus',
          fqn: 'immunization.tetanusDate'
        },
        {
          elementKey: 'spacer22',
          formIndex: '1',
          inputType: 'spacer',
          label: 'Tetanus',
          fqn: 'immunization.spacer22'
        },
        {
          elementKey: 'other1',
          formIndex: '1',
          inputType: 'text',
          fqn: 'immunization.other1'
        },
        {
          elementKey: 'other1Date',
          formIndex: '1',
          inputType: 'date',
          fqn: 'immunization.other1Date'
        },
        {
          elementKey: 'spacer23',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'immunization.spacer23'
        },
        {
          elementKey: 'other2',
          formIndex: '1',
          inputType: 'text',
          fqn: 'immunization.other2'
        },
        {
          elementKey: 'other2Date',
          formIndex: '1',
          inputType: 'date',
          fqn: 'immunization.other2Date'
        },
        {
          elementKey: 'spacer24',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'immunization.spacer24'
        },
        {
          elementKey: 'other3',
          formIndex: '1',
          inputType: 'text',
          fqn: 'immunization.other3'
        },
        {
          elementKey: 'other3Date',
          formIndex: '1',
          inputType: 'date',
          fqn: 'immunization.other3Date'
        },
        {
          elementKey: 'spacer25',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'immunization.spacer25'
        }
      ],
      generated: '2020-02-10T11:05:37-02:00',
      pageElements: {
        pageForm: {
          elementKey: 'pageForm',
          formKey: 'pageForm',
          isPageForm: true,
          ehr_groups: [
            {
              elementKey: 'ehr_group15',
              gIndex: '1',
              gChildren: [
                'hepA',
                'hepADate',
                'spacer16',
                'hepB',
                'hepBDate',
                'spacer17',
                'mmr',
                'mmrDate',
                'spacer18',
                'pneumococcal',
                'pneumococcalDate',
                'spacer19',
                'polioDiptheriaPertussis',
                'polioDiptheriaPertussisDate',
                'spacer20',
                'tb',
                'tbDate',
                'spacer21',
                'tetanus',
                'tetanusDate',
                'spacer22',
                'other1',
                'other1Date',
                'spacer23',
                'other2',
                'other2Date',
                'spacer24',
                'other3',
                'other3Date',
                'spacer25'
              ]
            }
          ]
        }
      }
    },
    familyHistory: {
      pageDataKey: 'familyHistory',
      pageTitle: 'Family history',
      pIndex: '7',
      isV2: true,
      hasGridForm: true,
      pageChildren: [
        {
          elementKey: 'history',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Family medical history',
          fqn: 'familyHistory.history'
        }
      ],
      generated: '2020-02-10T11:05:37-02:00',
      pageElements: {
        pageForm: {
          elementKey: 'pageForm',
          formKey: 'pageForm',
          isPageForm: true,
          ehr_groups: [
            {
              elementKey: 'ehr_group26',
              formCss: 'grid-left-to-right-1',
              gIndex: '1',
              gChildren: [
                'history'
              ]
            }
          ]
        }
      }
    },
    careTeam: {
      pageDataKey: 'careTeam',
      pageTitle: 'Care team',
      pIndex: '8',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'name',
          dataCaseStudy: 'Dr. Singh-NL-Dr. Notley-NL-Jason-NL-Jackie-NL-Gurpreet-NL-Alexa-NL-Matt-NL-Serge-NL-Trache-NL-Dr. Hunnicutt-NL-Jim-NL-Gladys-NL-Herman',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          fqn: 'careTeam.name'
        },
        {
          elementKey: 'profession',
          dataCaseStudy: 'Physician-NL-Physician-NL-Nurse-NL-Nurse-NL-Medical radiograpeor-NL-Medical laboratory technician-NL-Medical radiographer-NL-RN-NL-Physician-NL-RN-NL-Pysiotherapy student-NL-Resp. therapist',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '2',
          fqn: 'careTeam.profession'
        }
      ],
      generated: '2020-02-10T11:05:37-02:00',
      pageElements: {
        teams: {
          elementKey: 'teams',
          tableKey: 'teams',
          isTable: true,
          hasRecHeader: false,
          addButtonText: 'Add a care team member',
          ehr_list: [
            {
              ehr_list_index: '1',
              items: [
                'name'
              ]
            },
            {
              ehr_list_index: '2',
              items: [
                'profession'
              ]
            }
          ],
          form: {
            elementKey: 'teams',
            addButtonText: 'Add a care team member',
            formKey: 'teams',
            ehr_groups: [
              {
                elementKey: 'ehr_group27',
                gIndex: '1',
                gChildren: [
                  'name',
                  'profession'
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: ''
            }
          }
        }
      }
    },
    pastAppointments: {
      pageDataKey: 'pastAppointments',
      pageTitle: 'Past appointments',
      pIndex: '9',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'date',
          formIndex: '1',
          inputType: 'date',
          label: 'Date',
          tableColumn: '1',
          fqn: 'pastAppointments.date'
        },
        {
          elementKey: 'site',
          formIndex: '1',
          inputType: 'text',
          label: 'Site',
          tableColumn: '2',
          fqn: 'pastAppointments.site'
        },
        {
          elementKey: 'diagnosis',
          formIndex: '1',
          inputType: 'text',
          label: 'Diagnosis',
          tableColumn: '3',
          fqn: 'pastAppointments.diagnosis'
        },
        {
          elementKey: 'mrp',
          formIndex: '1',
          inputType: 'text',
          label: 'Most responsible person',
          tableColumn: '4',
          fqn: 'pastAppointments.mrp'
        },
        {
          elementKey: 'date',
          dataCaseStudy: '1 week ago',
          formIndex: '2',
          inputType: 'text',
          label: 'Date',
          tableColumn: '1',
          fqn: 'pastAppointments.date'
        },
        {
          elementKey: 'site',
          dataCaseStudy: 'Clinic',
          formIndex: '2',
          inputType: 'text',
          label: 'Site',
          tableColumn: '2',
          fqn: 'pastAppointments.site'
        },
        {
          elementKey: 'reasonForVisit',
          dataCaseStudy: 'Shortness of breath x 24 hrs',
          formIndex: '2',
          inputType: 'text',
          label: 'Reason for visit',
          tableColumn: '3',
          fqn: 'pastAppointments.reasonForVisit'
        },
        {
          elementKey: 'diagnosis',
          dataCaseStudy: 'COPD',
          formIndex: '2',
          inputType: 'text',
          label: 'Diagnosis',
          tableColumn: '4',
          fqn: 'pastAppointments.diagnosis'
        }
      ],
      generated: '2020-02-10T11:05:37-02:00',
      pageElements: {
        encounters: {
          elementKey: 'encounters',
          tableKey: 'encounters',
          isTable: true,
          hasRecHeader: false,
          addButtonText: 'Add a past appointment',
          ehr_list: [
            {
              ehr_list_index: '1',
              items: [
                'date'
              ]
            },
            {
              ehr_list_index: '2',
              items: [
                'site'
              ]
            },
            {
              ehr_list_index: '3',
              items: [
                'diagnosis'
              ]
            },
            {
              ehr_list_index: '4',
              items: [
                'mrp'
              ]
            }
          ],
          form: {
            elementKey: 'encounters',
            addButtonText: 'Add a past appointment',
            formKey: 'encounters',
            ehr_groups: [
              {
                elementKey: 'encounters',
                gIndex: '1',
                gChildren: [
                  'date',
                  'site',
                  'diagnosis',
                  'mrp'
                ]
              }
            ],
            ehr_data: {
              date: '',
              site: '',
              diagnosis: '',
              mrp: ''
            }
          }
        },
        outpatientAppointments: {
          elementKey: 'outpatientAppointments',
          tableKey: 'outpatientAppointments',
          isTable: true,
          hasRecHeader: false,
          addButtonText: 'Add an outpatient appointment',
          ehr_list: [
            {
              ehr_list_index: '1',
              items: [
                'date'
              ]
            },
            {
              ehr_list_index: '2',
              items: [
                'site'
              ]
            },
            {
              ehr_list_index: '3',
              items: [
                'reasonForVisit'
              ]
            },
            {
              ehr_list_index: '4',
              items: [
                'diagnosis'
              ]
            }
          ],
          form: {
            elementKey: 'outpatientAppointments',
            addButtonText: 'Add an outpatient appointment',
            formKey: 'outpatientAppointments',
            ehr_groups: [
              {
                elementKey: 'outpatientAppointments',
                gIndex: '1',
                gChildren: [
                  'date',
                  'site',
                  'reasonForVisit',
                  'diagnosis'
                ]
              }
            ],
            ehr_data: {
              date: '',
              site: '',
              reasonForVisit: '',
              diagnosis: ''
            }
          }
        }
      }
    }
  }
}