/* eslint-disable */
const DEFS = {
  'demographics': {
    'pageDataKey': 'demographics',
    'pageTitle': 'Demographics',
    'pIndex': '1',
    'hasGridForm': true,
    'pageChildren': [
      {
        'elementKey': 'givenName',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'First name',
        'fqn': 'demographics.givenName'
      },
      {
        'elementKey': 'middleName',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Middle name(s)',
        'fqn': 'demographics.middleName'
      },
      {
        'elementKey': 'familyName',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Last name',
        'fqn': 'demographics.familyName'
      },
      {
        'elementKey': 'preferredName',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Preferred name',
        'fqn': 'demographics.preferredName'
      },
      {
        'elementKey': 'dateOfBirth',
        'dependentOn': 'age:personAge',
        'formIndex': '1',
        'inputType': 'mainDOB',
        'label': 'Date of birth',
        'fqn': 'demographics.dateOfBirth'
      },
      {
        'elementKey': 'personAge',
        'formIndex': '1',
        'inputType': 'personAge',
        'label': 'Age',
        'fqn': 'demographics.personAge'
      },
      {
        'elementKey': 'height',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Height',
        'suffix': 'cm',
        'fqn': 'demographics.height',
        'suffixText': '<p>cm</p>',
        'suffixHtml': 'cm'
      },
      {
        'elementKey': 'weight',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Weight',
        'suffix': 'kg',
        'fqn': 'demographics.weight',
        'suffixText': '<p>kg</p>',
        'suffixHtml': 'kg'
      },
      {
        'elementKey': 'gender',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Gender',
        'options': [
          {
            'key': 'Unknown',
            'text': 'Unknown'
          },
          {
            'key': 'Female',
            'text': 'Female'
          },
          {
            'key': 'Male',
            'text': 'Male'
          },
          {
            'key': 'Transgender female',
            'text': 'Transgender female'
          },
          {
            'key': 'Transgender male',
            'text': 'Transgender male'
          },
          {
            'key': 'Undifferentiated',
            'text': 'Undifferentiated'
          },
          {
            'key': 'Prefer not to say',
            'text': 'Prefer not to say'
          }
        ],
        'fqn': 'demographics.gender'
      },
      {
        'elementKey': 'martialStatus',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Martial status',
        'options': [
          {
            'key': 'Married',
            'text': 'Married'
          },
          {
            'key': 'Single',
            'text': 'Single'
          },
          {
            'key': 'Life partner',
            'text': 'Life partner'
          },
          {
            'key': 'Divorced',
            'text': 'Divorced'
          },
          {
            'key': 'Separated',
            'text': 'Separated'
          },
          {
            'key': 'Widowed',
            'text': 'Widowed'
          }
        ],
        'fqn': 'demographics.martialStatus'
      },
      {
        'elementKey': 'languagePrimary',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Primary language',
        'options': [
          {
            'key': 'English',
            'text': 'English'
          },
          {
            'key': 'French',
            'text': 'French'
          },
          {
            'key': 'Spanish',
            'text': 'Spanish'
          },
          {
            'key': 'German',
            'text': 'German'
          },
          {
            'key': 'Chinese',
            'text': 'Chinese'
          }
        ],
        'fqn': 'demographics.languagePrimary'
      },
      {
        'elementKey': 'religion',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Religion',
        'fqn': 'demographics.religion'
      },
      {
        'elementKey': 'indigenousIdentifyAs',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Do you identify as an indigenous person?',
        'options': [
          {
            'key': 'Yes',
            'text': 'Yes'
          },
          {
            'key': 'No',
            'text': 'No'
          }
        ],
        'fqn': 'demographics.indigenousIdentifyAs'
      },
      {
        'elementKey': 'streetAddress',
        'formIndex': '1',
        'formCss': 'grid-span-2-columns',
        'inputType': 'text',
        'label': 'Street address',
        'fqn': 'demographics.streetAddress'
      },
      {
        'elementKey': 'city',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'City',
        'fqn': 'demographics.city'
      },
      {
        'elementKey': 'country',
        'defaultValue': 'Canada',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Country',
        'fqn': 'demographics.country'
      },
      {
        'elementKey': 'postalCode',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Postal code',
        'fqn': 'demographics.postalCode'
      },
      {
        'elementKey': 'noAddress',
        'defaultValue': false,
        'formIndex': '1',
        'inputType': 'checkbox',
        'label': 'No address',
        'fqn': 'demographics.noAddress'
      },
      {
        'elementKey': 'phoneNumber',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Primary phone number',
        'fqn': 'demographics.phoneNumber'
      },
      {
        'elementKey': 'emailAddress',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Email',
        'fqn': 'demographics.emailAddress'
      },
      {
        'elementKey': 'occupationStudent',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Occupation/student',
        'fqn': 'demographics.occupationStudent'
      },
      {
        'elementKey': 'phn',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'PHN',
        'fqn': 'demographics.phn'
      },
      {
        'elementKey': 'mrn',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'MRN',
        'fqn': 'demographics.mrn'
      },
      {
        'elementKey': 'patientService',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Patient service',
        'fqn': 'demographics.patientService'
      },
      {
        'elementKey': 'nextOfKinName',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Next of kin name',
        'fqn': 'demographics.nextOfKinName'
      },
      {
        'elementKey': 'nextOfKinRelationship',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Next of kin relationship',
        'options': [
          {
            'key': 'Wife',
            'text': 'Wife'
          },
          {
            'key': 'Husband',
            'text': 'Husband'
          },
          {
            'key': 'Mother',
            'text': 'Mother'
          },
          {
            'key': 'Father',
            'text': 'Father'
          },
          {
            'key': 'Guardian',
            'text': 'Guardian'
          },
          {
            'key': 'Sister',
            'text': 'Sister'
          },
          {
            'key': 'Brother',
            'text': 'Brother'
          },
          {
            'key': 'Daughter',
            'text': 'Daughter'
          },
          {
            'key': 'Son',
            'text': 'Son'
          },
          {
            'key': 'Aunt',
            'text': 'Aunt'
          },
          {
            'key': 'Uncle',
            'text': 'Uncle'
          },
          {
            'key': 'Grandmother',
            'text': 'Grandmother'
          },
          {
            'key': 'Grandfather',
            'text': 'Grandfather'
          },
          {
            'key': 'Friend',
            'text': 'Friend'
          },
          {
            'key': 'Other',
            'text': 'Other'
          }
        ],
        'fqn': 'demographics.nextOfKinRelationship'
      },
      {
        'elementKey': 'nextOfKinPhone',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Next of kin phone',
        'fqn': 'demographics.nextOfKinPhone'
      },
      {
        'elementKey': 'decisionMakerName',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Decision maker name',
        'fqn': 'demographics.decisionMakerName'
      },
      {
        'elementKey': 'decisionMakerRelationship',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Decision maker relationship',
        'options': [
          {
            'key': 'Spouse',
            'text': 'Spouse'
          },
          {
            'key': 'Child',
            'text': 'Child'
          },
          {
            'key': 'Parent',
            'text': 'Parent'
          },
          {
            'key': 'Sibling',
            'text': 'Sibling'
          },
          {
            'key': 'Grandparent',
            'text': 'Grandparent'
          },
          {
            'key': 'Grandchild',
            'text': 'Grandchild'
          },
          {
            'key': 'Friend',
            'text': 'Friend'
          },
          {
            'key': 'Anyone else related by partnership',
            'text': 'Anyone else related by partnership'
          },
          {
            'key': 'Public guardian and trustee employee',
            'text': 'Public guardian and trustee employee'
          },
          {
            'key': 'Other',
            'text': 'Other'
          }
        ],
        'fqn': 'demographics.decisionMakerRelationship'
      },
      {
        'elementKey': 'decisionMakerPhone',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Decision maker phone',
        'fqn': 'demographics.decisionMakerPhone'
      }
    ],
    'pageElements': {
      'pageForm': {
        'elementKey': 'pageForm',
        'pageElementIndex': '1',
        'formKey': 'pageForm',
        'isPageForm': true,
        'ehr_groups': [
          {
            'elementKey': 'ehr_group1',
            'formCss': 'section-divider grid-left-to-right-3',
            'gIndex': '1',
            'gChildren': [
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
            'elementKey': 'ehr_group2',
            'formCss': 'section-divider grid-left-to-right-3',
            'gIndex': '2',
            'gChildren': [
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
            'elementKey': 'ehr_group3',
            'formCss': 'grid-left-to-right-3',
            'gIndex': '3',
            'gChildren': [
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
  'allergies': {
    'pageDataKey': 'allergies',
    'pageTitle': 'Allergies',
    'pIndex': '2',
    'hasGridForm': true,
    'pageChildren': [
      {
        'elementKey': 'checkbox',
        'formIndex': '1',
        'inputType': 'checkbox',
        'label': 'No known allergies',
        'fqn': 'allergies.checkbox'
      },
      {
        'elementKey': 'text',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Allergies',
        'fqn': 'allergies.text'
      }
    ],
    'pageElements': {
      'pageForm': {
        'elementKey': 'pageForm',
        'pageElementIndex': '1',
        'formKey': 'pageForm',
        'isPageForm': true,
        'ehr_groups': [
          {
            'elementKey': 'ehr_group4',
            'formCss': 'grid-left-to-right-1',
            'gIndex': '1',
            'gChildren': [
              'checkbox',
              'text'
            ]
          }
        ]
      }
    }
  },
  'medical': {
    'pageDataKey': 'medical',
    'pageTitle': 'Medical history',
    'pIndex': '3',
    'hasGridForm': true,
    'pageChildren': [
      {
        'elementKey': 'history',
        'formIndex': '1',
        'inputType': 'textarea',
        'label': 'Past medical history',
        'fqn': 'medical.history'
      }
    ],
    'pageElements': {
      'pageForm': {
        'elementKey': 'pageForm',
        'pageElementIndex': '1',
        'formKey': 'pageForm',
        'isPageForm': true,
        'ehr_groups': [
          {
            'elementKey': 'ehr_group5',
            'formCss': 'grid-left-to-right-1',
            'gIndex': '1',
            'gChildren': [
              'history'
            ]
          }
        ]
      }
    }
  },
  'psychosocial': {
    'pageDataKey': 'psychosocial',
    'pageTitle': 'Psychosocial history',
    'pIndex': '4',
    'hasGridForm': true,
    'pageChildren': [
      {
        'elementKey': 'history',
        'formIndex': '1',
        'inputType': 'textarea',
        'label': 'Psychosocial history',
        'fqn': 'psychosocial.history'
      },
      {
        'elementKey': 'diet',
        'formIndex': '1',
        'inputType': 'textarea',
        'label': 'Diet',
        'fqn': 'psychosocial.diet'
      },
      {
        'elementKey': 'livingSituation',
        'formIndex': '1',
        'inputType': 'textarea',
        'label': 'Living situation',
        'fqn': 'psychosocial.livingSituation'
      },
      {
        'elementKey': 'employmentSchool',
        'formIndex': '1',
        'inputType': 'textarea',
        'label': 'Employment/school',
        'fqn': 'psychosocial.employmentSchool'
      },
      {
        'elementKey': 'hobbies',
        'formIndex': '1',
        'inputType': 'textarea',
        'label': 'Hobbies',
        'fqn': 'psychosocial.hobbies'
      },
      {
        'elementKey': 'exercise',
        'formIndex': '1',
        'inputType': 'checkbox',
        'label': 'Exercise',
        'fqn': 'psychosocial.exercise'
      },
      {
        'elementKey': 'exerciseText',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'text',
        'label': 'Exercise',
        'fqn': 'psychosocial.exerciseText'
      },
      {
        'elementKey': 'spacer8',
        'formIndex': '1',
        'inputType': 'spacer',
        'label': 'Exercise',
        'fqn': 'psychosocial.spacer8'
      },
      {
        'elementKey': 'caffeineUse',
        'formIndex': '1',
        'inputType': 'checkbox',
        'label': 'Caffeine use',
        'fqn': 'psychosocial.caffeineUse'
      },
      {
        'elementKey': 'caffeineUseText',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'text',
        'label': 'Caffeine use',
        'fqn': 'psychosocial.caffeineUseText'
      },
      {
        'elementKey': 'spacer9',
        'formIndex': '1',
        'inputType': 'spacer',
        'label': 'Caffeine use',
        'fqn': 'psychosocial.spacer9'
      },
      {
        'elementKey': 'tobaccoUse',
        'formIndex': '1',
        'helperText': 'Have you used any tobacco products in the last 6 months?\nHave you used any tobacco products in the last 7 days?',
        'inputType': 'checkbox',
        'label': 'Tobacco use',
        'fqn': 'psychosocial.tobaccoUse',
        'helperHtml': '<p>Have you used any tobacco products in the last 6 months?</p>\n<p>Have you used any tobacco products in the last 7 days?</p>'
      },
      {
        'elementKey': 'tobaccoUseText',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'text',
        'label': 'Tobacco use',
        'fqn': 'psychosocial.tobaccoUseText'
      },
      {
        'elementKey': 'spacer10',
        'formIndex': '1',
        'inputType': 'spacer',
        'label': 'Tobacco use',
        'fqn': 'psychosocial.spacer10'
      },
      {
        'elementKey': 'cannabisUse',
        'formIndex': '1',
        'helperText': 'Have you used any cannabis products in the last 6 months?\nHave you used any cannabis products in the last 7 days?',
        'inputType': 'checkbox',
        'label': 'Cannabis use',
        'fqn': 'psychosocial.cannabisUse',
        'helperHtml': '<p>Have you used any cannabis products in the last 6 months?</p>\n<p>Have you used any cannabis products in the last 7 days?</p>'
      },
      {
        'elementKey': 'cannabisUseText',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'text',
        'label': 'Cannabis use',
        'fqn': 'psychosocial.cannabisUseText'
      },
      {
        'elementKey': 'spacer11',
        'formIndex': '1',
        'inputType': 'spacer',
        'label': 'Cannabis use',
        'fqn': 'psychosocial.spacer11'
      },
      {
        'elementKey': 'alcoholUse',
        'formIndex': '1',
        'helperText': 'CAGE questionnaire\nHave you ever felt that you should cut down on your drinking?\nHave you ever become annoyed by criticisms of your drinking?\nHave you ever felt guilty about your drinking?\nHave you ever had a morning eye opener to get rid of a hangover?',
        'inputType': 'checkbox',
        'label': 'Alcohol use',
        'fqn': 'psychosocial.alcoholUse',
        'helperHtml': '<p>CAGE questionnaire</p>\n<p>Have you ever felt that you should cut down on your drinking?</p>\n<p>Have you ever become annoyed by criticisms of your drinking?</p>\n<p>Have you ever felt guilty about your drinking?</p>\n<p>Have you ever had a morning eye opener to get rid of a hangover?</p>'
      },
      {
        'elementKey': 'alcoholUseText',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'text',
        'label': 'Alcohol use',
        'fqn': 'psychosocial.alcoholUseText'
      },
      {
        'elementKey': 'spacer12',
        'formIndex': '1',
        'inputType': 'spacer',
        'label': 'Alcohol use',
        'fqn': 'psychosocial.spacer12'
      },
      {
        'elementKey': 'substanceUse',
        'formIndex': '1',
        'helperText': 'Have you used any substances in the last 6 months?\nHave you used any substances in the last 7 days?\nIf so, make notes about which ones.',
        'inputType': 'checkbox',
        'label': 'Substance use',
        'fqn': 'psychosocial.substanceUse',
        'helperHtml': '<p>Have you used any substances in the last 6 months?</p>\n<p>Have you used any substances in the last 7 days?</p>\n<p>If so, make notes about which ones.</p>'
      },
      {
        'elementKey': 'substanceUseText',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'text',
        'label': 'Substance use',
        'fqn': 'psychosocial.substanceUseText'
      },
      {
        'elementKey': 'spacer13',
        'formIndex': '1',
        'inputType': 'spacer',
        'label': 'Substance use',
        'fqn': 'psychosocial.spacer13'
      }
    ],
    'pageElements': {
      'pageForm': {
        'elementKey': 'pageForm',
        'pageElementIndex': '1',
        'formKey': 'pageForm',
        'isPageForm': true,
        'ehr_groups': [
          {
            'elementKey': 'ehr_group6',
            'formCss': 'grid-left-to-right-1',
            'gIndex': '1',
            'gChildren': [
              'history',
              'diet',
              'livingSituation',
              'employmentSchool',
              'hobbies'
            ]
          },
          {
            'elementKey': 'ehr_group7',
            'formCss': 'grid-left-to-right-3',
            'gIndex': '2',
            'gChildren': [
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
  'surgical': {
    'pageDataKey': 'surgical',
    'pageTitle': 'Surgical history',
    'pIndex': '5',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'physician',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Performing physician',
        'tableColumn': '1',
        'fqn': 'surgical.physician'
      },
      {
        'elementKey': 'pastSurgery_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'timeSince',
        'formIndex': '1',
        'helperText': 'Describe when this happened prior to current visit. E.g. 6 years ago',
        'inputType': 'text',
        'label': 'Time Since',
        'tableColumn': '2',
        'fqn': 'surgical.timeSince',
        'helperHtml': '<p>Describe when this happened prior to current visit. E.g. 6 years ago</p>'
      },
      {
        'elementKey': 'procedure',
        'formIndex': '1',
        'formCss': 'grid-span-3-columns',
        'inputType': 'textarea',
        'label': 'Surgery/procedure',
        'tableColumn': '3',
        'fqn': 'surgical.procedure'
      },
      {
        'elementKey': 'previousAdmissionsDate',
        'formIndex': '2',
        'helperText': 'Describe when this happened prior to current visit. E.g. 1 month ago',
        'inputType': 'text',
        'label': 'Date',
        'tableColumn': '1',
        'fqn': 'surgical.previousAdmissionsDate',
        'helperHtml': '<p>Describe when this happened prior to current visit. E.g. 1 month ago</p>'
      },
      {
        'elementKey': 'previous_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'with',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Appointment with',
        'tableColumn': '2',
        'fqn': 'surgical.with'
      },
      {
        'elementKey': 'details',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Appointment details',
        'tableColumn': '3',
        'fqn': 'surgical.details'
      },
      {
        'elementKey': 'previousAdmissions',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Previous appointment reason',
        'tableColumn': '4',
        'fqn': 'surgical.previousAdmissions'
      },
      {
        'elementKey': 'comments',
        'formIndex': '2',
        'formCss': 'grid-span-3-columns',
        'inputType': 'textarea',
        'label': 'General comments',
        'tableColumn': '5',
        'fqn': 'surgical.comments'
      }
    ],
    'pageElements': {
      'pastSurgery': {
        'elementKey': 'pastSurgery',
        'pageElementIndex': '1',
        'pageKey': 'surgical',
        'tableKey': 'pastSurgery',
        'isTable': true,
        'label': 'Previous surgeries',
        'addButtonText': 'Add a previous surgery',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'pastSurgery_id'
            ]
          },
          {
            'ehr_list_index': '1',
            'items': [
              'physician'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'timeSince'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'procedure'
            ]
          }
        ],
        'form': {
          'elementKey': 'pastSurgery',
          'label': 'Previous surgeries',
          'addButtonText': 'Add a previous surgery',
          'formKey': 'pastSurgery',
          'ehr_groups': [
            {
              'elementKey': 'pastSurgery',
              'label': 'Previous surgeries',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '1',
              'gChildren': [
                'physician',
                'timeSince',
                'procedure'
              ]
            }
          ],
          'ehr_data': {
            'physician': '',
            'timeSince': '',
            'procedure': ''
          }
        },
        'tableChildren': [
          'pastSurgery_id',
          'physician',
          'timeSince',
          'procedure'
        ]
      },
      'previous': {
        'elementKey': 'previous',
        'pageElementIndex': '2',
        'pageKey': 'surgical',
        'tableKey': 'previous',
        'isTable': true,
        'label': 'Previous appointments',
        'addButtonText': 'Add a previous appointment',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'previous_id'
            ]
          },
          {
            'ehr_list_index': '1',
            'items': [
              'previousAdmissionsDate'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'with'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'details'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'previousAdmissions'
            ]
          },
          {
            'ehr_list_index': '5',
            'items': [
              'comments'
            ]
          }
        ],
        'form': {
          'elementKey': 'previous',
          'label': 'Previous appointments',
          'addButtonText': 'Add a previous appointment',
          'formKey': 'previous',
          'ehr_groups': [
            {
              'elementKey': 'previous',
              'label': 'Previous appointments',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '1',
              'gChildren': [
                'previousAdmissionsDate',
                'with',
                'details',
                'previousAdmissions',
                'comments'
              ]
            }
          ],
          'ehr_data': {
            'previousAdmissionsDate': '',
            'with': '',
            'details': '',
            'previousAdmissions': '',
            'comments': ''
          }
        },
        'tableChildren': [
          'previous_id',
          'previousAdmissionsDate',
          'with',
          'details',
          'previousAdmissions',
          'comments'
        ]
      }
    }
  },
  'immunization': {
    'pageDataKey': 'immunization',
    'pageTitle': 'Immunization history',
    'pIndex': '6',
    'hasGridForm': true,
    'pageChildren': [
      {
        'elementKey': 'hepA',
        'formIndex': '1',
        'inputType': 'checkbox',
        'label': 'Hep A',
        'fqn': 'immunization.hepA'
      },
      {
        'elementKey': 'hepADate',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'date',
        'label': 'Hep A',
        'fqn': 'immunization.hepADate'
      },
      {
        'elementKey': 'spacer15',
        'formIndex': '1',
        'inputType': 'spacer',
        'label': 'Hep A',
        'fqn': 'immunization.spacer15'
      },
      {
        'elementKey': 'hepB',
        'formIndex': '1',
        'inputType': 'checkbox',
        'label': 'Hep B',
        'fqn': 'immunization.hepB'
      },
      {
        'elementKey': 'hepBDate',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'date',
        'label': 'Hep B',
        'fqn': 'immunization.hepBDate'
      },
      {
        'elementKey': 'spacer16',
        'formIndex': '1',
        'inputType': 'spacer',
        'label': 'Hep B',
        'fqn': 'immunization.spacer16'
      },
      {
        'elementKey': 'mmr',
        'formIndex': '1',
        'inputType': 'checkbox',
        'label': 'MMR',
        'fqn': 'immunization.mmr'
      },
      {
        'elementKey': 'mmrDate',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'date',
        'label': 'MMR',
        'fqn': 'immunization.mmrDate'
      },
      {
        'elementKey': 'spacer17',
        'formIndex': '1',
        'inputType': 'spacer',
        'label': 'MMR',
        'fqn': 'immunization.spacer17'
      },
      {
        'elementKey': 'pneumococcal',
        'formIndex': '1',
        'inputType': 'checkbox',
        'label': 'Pneumococcal',
        'fqn': 'immunization.pneumococcal'
      },
      {
        'elementKey': 'pneumococcalDate',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'date',
        'label': 'Pneumococcal',
        'fqn': 'immunization.pneumococcalDate'
      },
      {
        'elementKey': 'spacer18',
        'formIndex': '1',
        'inputType': 'spacer',
        'label': 'Pneumococcal',
        'fqn': 'immunization.spacer18'
      },
      {
        'elementKey': 'polioDiptheriaPertussis',
        'formIndex': '1',
        'inputType': 'checkbox',
        'label': 'Polio diptheria pertussis',
        'fqn': 'immunization.polioDiptheriaPertussis'
      },
      {
        'elementKey': 'polioDiptheriaPertussisDate',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'date',
        'label': 'Polio diptheria pertussis',
        'fqn': 'immunization.polioDiptheriaPertussisDate'
      },
      {
        'elementKey': 'spacer19',
        'formIndex': '1',
        'inputType': 'spacer',
        'label': 'Polio diptheria pertussis',
        'fqn': 'immunization.spacer19'
      },
      {
        'elementKey': 'tb',
        'formIndex': '1',
        'inputType': 'checkbox',
        'label': 'TB',
        'fqn': 'immunization.tb'
      },
      {
        'elementKey': 'tbDate',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'date',
        'label': 'TB',
        'fqn': 'immunization.tbDate'
      },
      {
        'elementKey': 'spacer20',
        'formIndex': '1',
        'inputType': 'spacer',
        'label': 'TB',
        'fqn': 'immunization.spacer20'
      },
      {
        'elementKey': 'tetanus',
        'formIndex': '1',
        'inputType': 'checkbox',
        'label': 'Tetanus',
        'fqn': 'immunization.tetanus'
      },
      {
        'elementKey': 'tetanusDate',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'date',
        'label': 'Tetanus',
        'fqn': 'immunization.tetanusDate'
      },
      {
        'elementKey': 'spacer21',
        'formIndex': '1',
        'inputType': 'spacer',
        'label': 'Tetanus',
        'fqn': 'immunization.spacer21'
      },
      {
        'elementKey': 'covid',
        'formIndex': '1',
        'inputType': 'checkbox',
        'label': 'COVID-19',
        'fqn': 'immunization.covid'
      },
      {
        'elementKey': 'covidDate',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'date',
        'label': 'COVID-19',
        'fqn': 'immunization.covidDate'
      },
      {
        'elementKey': 'spacer22',
        'formIndex': '1',
        'inputType': 'spacer',
        'label': 'COVID-19',
        'fqn': 'immunization.spacer22'
      },
      {
        'elementKey': 'other1',
        'formIndex': '1',
        'inputType': 'checkbox',
        'label': 'Other',
        'fqn': 'immunization.other1'
      },
      {
        'elementKey': 'other1Date',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'date',
        'label': 'Other',
        'fqn': 'immunization.other1Date'
      },
      {
        'elementKey': 'spacer23',
        'formIndex': '1',
        'inputType': 'spacer',
        'label': 'Other',
        'fqn': 'immunization.spacer23'
      },
      {
        'elementKey': 'other2',
        'formIndex': '1',
        'inputType': 'checkbox',
        'label': 'Other',
        'fqn': 'immunization.other2'
      },
      {
        'elementKey': 'other2Date',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'date',
        'label': 'Other',
        'fqn': 'immunization.other2Date'
      },
      {
        'elementKey': 'spacer24',
        'formIndex': '1',
        'inputType': 'spacer',
        'label': 'Other',
        'fqn': 'immunization.spacer24'
      },
      {
        'elementKey': 'other3',
        'formIndex': '1',
        'inputType': 'checkbox',
        'label': 'Other',
        'fqn': 'immunization.other3'
      },
      {
        'elementKey': 'other3Date',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'date',
        'label': 'Other',
        'fqn': 'immunization.other3Date'
      },
      {
        'elementKey': 'spacer25',
        'formIndex': '1',
        'inputType': 'spacer',
        'label': 'Other',
        'fqn': 'immunization.spacer25'
      }
    ],
    'pageElements': {
      'pageForm': {
        'elementKey': 'pageForm',
        'pageElementIndex': '1',
        'formKey': 'pageForm',
        'isPageForm': true,
        'ehr_groups': [
          {
            'elementKey': 'ehr_group14',
            'formCss': 'grid-left-to-right-3',
            'gIndex': '1',
            'gChildren': [
              'hepA',
              'hepADate',
              'spacer15',
              'hepB',
              'hepBDate',
              'spacer16',
              'mmr',
              'mmrDate',
              'spacer17',
              'pneumococcal',
              'pneumococcalDate',
              'spacer18',
              'polioDiptheriaPertussis',
              'polioDiptheriaPertussisDate',
              'spacer19',
              'tb',
              'tbDate',
              'spacer20',
              'tetanus',
              'tetanusDate',
              'spacer21',
              'covid',
              'covidDate',
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
  'familyHistory': {
    'pageDataKey': 'familyHistory',
    'pageTitle': 'Family history',
    'pIndex': '7',
    'hasGridForm': true,
    'pageChildren': [
      {
        'elementKey': 'history',
        'formIndex': '1',
        'inputType': 'textarea',
        'label': 'Family medical history',
        'fqn': 'familyHistory.history'
      }
    ],
    'pageElements': {
      'pageForm': {
        'elementKey': 'pageForm',
        'pageElementIndex': '1',
        'formKey': 'pageForm',
        'isPageForm': true,
        'ehr_groups': [
          {
            'elementKey': 'ehr_group26',
            'formCss': 'grid-left-to-right-1',
            'gIndex': '1',
            'gChildren': [
              'history'
            ]
          }
        ]
      }
    }
  },
  'careTeam': {
    'pageDataKey': 'careTeam',
    'pageTitle': 'Care team',
    'pIndex': '8',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'name',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Name',
        'tableColumn': '1',
        'fqn': 'careTeam.name'
      },
      {
        'elementKey': 'teams_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'profession',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Profession',
        'tableColumn': '2',
        'fqn': 'careTeam.profession'
      }
    ],
    'pageElements': {
      'teams': {
        'elementKey': 'teams',
        'pageElementIndex': '1',
        'pageKey': 'careTeam',
        'tableKey': 'teams',
        'isTable': true,
        'label': 'Care team',
        'addButtonText': 'Add a care team member',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'teams_id'
            ]
          },
          {
            'ehr_list_index': '1',
            'items': [
              'name'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'profession'
            ]
          }
        ],
        'form': {
          'elementKey': 'teams',
          'label': 'Care team',
          'addButtonText': 'Add a care team member',
          'formKey': 'teams',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group27',
              'label': 'Care team',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '1',
              'gChildren': [
                'name',
                'profession'
              ]
            }
          ],
          'ehr_data': {
            'name': '',
            'profession': ''
          }
        },
        'tableChildren': [
          'teams_id',
          'name',
          'profession'
        ]
      }
    }
  },
  'pastAppointments': {
    'pageDataKey': 'pastAppointments',
    'pageTitle': 'Past appointments',
    'pIndex': '9',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'encounterDate',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Date',
        'tableColumn': '1',
        'fqn': 'pastAppointments.encounterDate'
      },
      {
        'elementKey': 'encounters_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'site',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Site',
        'tableColumn': '2',
        'fqn': 'pastAppointments.site'
      },
      {
        'elementKey': 'diagnosis',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Diagnosis',
        'tableColumn': '3',
        'fqn': 'pastAppointments.diagnosis'
      },
      {
        'elementKey': 'mrp',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Most responsible person',
        'tableColumn': '4',
        'fqn': 'pastAppointments.mrp'
      },
      {
        'elementKey': 'appointmentDate',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Appointment Day',
        'tableColumn': '1',
        'fqn': 'pastAppointments.appointmentDate'
      },
      {
        'elementKey': 'outpatientAppointments_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'site',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Site',
        'tableColumn': '2',
        'fqn': 'pastAppointments.site'
      },
      {
        'elementKey': 'reasonForVisit',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Reason for visit',
        'tableColumn': '3',
        'fqn': 'pastAppointments.reasonForVisit'
      },
      {
        'elementKey': 'diagnosis',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Diagnosis',
        'tableColumn': '4',
        'fqn': 'pastAppointments.diagnosis'
      }
    ],
    'pageElements': {
      'encounters': {
        'elementKey': 'encounters',
        'pageElementIndex': '1',
        'pageKey': 'pastAppointments',
        'tableKey': 'encounters',
        'isTable': true,
        'label': 'Past encounters',
        'addButtonText': 'Add a past encounter',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'encounters_id'
            ]
          },
          {
            'ehr_list_index': '1',
            'items': [
              'encounterDate'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'site'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'diagnosis'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'mrp'
            ]
          }
        ],
        'form': {
          'elementKey': 'encounters',
          'label': 'Past encounters',
          'addButtonText': 'Add a past encounter',
          'formKey': 'encounters',
          'ehr_groups': [
            {
              'elementKey': 'encounters',
              'label': 'Past encounters',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '1',
              'gChildren': [
                'encounterDate',
                'site',
                'diagnosis',
                'mrp'
              ]
            }
          ],
          'ehr_data': {
            'encounterDate': '',
            'site': '',
            'diagnosis': '',
            'mrp': ''
          }
        },
        'tableChildren': [
          'encounters_id',
          'encounterDate',
          'site',
          'diagnosis',
          'mrp'
        ]
      },
      'outpatientAppointments': {
        'elementKey': 'outpatientAppointments',
        'pageElementIndex': '2',
        'pageKey': 'pastAppointments',
        'tableKey': 'outpatientAppointments',
        'isTable': true,
        'label': 'Past outpatient appointments',
        'addButtonText': 'Add an outpatient appointment',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'outpatientAppointments_id'
            ]
          },
          {
            'ehr_list_index': '1',
            'items': [
              'appointmentDate'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'site'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'reasonForVisit'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'diagnosis'
            ]
          }
        ],
        'form': {
          'elementKey': 'outpatientAppointments',
          'label': 'Past outpatient appointments',
          'addButtonText': 'Add an outpatient appointment',
          'formKey': 'outpatientAppointments',
          'ehr_groups': [
            {
              'elementKey': 'outpatientAppointments',
              'label': 'Past outpatient appointments',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '1',
              'gChildren': [
                'appointmentDate',
                'site',
                'reasonForVisit',
                'diagnosis'
              ]
            }
          ],
          'ehr_data': {
            'appointmentDate': '',
            'site': '',
            'reasonForVisit': '',
            'diagnosis': ''
          }
        },
        'tableChildren': [
          'outpatientAppointments_id',
          'appointmentDate',
          'site',
          'reasonForVisit',
          'diagnosis'
        ]
      }
    }
  },
  'visit': {
    'pageDataKey': 'visit',
    'pageTitle': 'Admission, diagnosis, location',
    'pIndex': '10',
    'hasGridTable': true,
    'hasGridForm': true,
    'pageChildren': [
      {
        'elementKey': 'admissionDay',
        'defaultValue': '0',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Admission day',
        'mandatory': true,
        'fqn': 'visit.admissionDay'
      },
      {
        'elementKey': 'admissionTime',
        'defaultValue': '900',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Admission time',
        'mandatory': true,
        'fqn': 'visit.admissionTime'
      },
      {
        'elementKey': 'status',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Admission status',
        'mandatory': true,
        'options': [
          {
            'key': 'Admission in progress',
            'text': 'Admission in progress'
          },
          {
            'key': 'Admitted',
            'text': 'Admitted'
          },
          {
            'key': 'Inpatient',
            'text': 'Inpatient'
          },
          {
            'key': 'Outpatient',
            'text': 'Outpatient'
          },
          {
            'key': 'Surgical day care',
            'text': 'Surgical day care'
          },
          {
            'key': 'Discharge pending',
            'text': 'Discharge pending'
          },
          {
            'key': 'Discharged',
            'text': 'Discharged'
          }
        ],
        'fqn': 'visit.status'
      },
      {
        'elementKey': 'locationLabel',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'See Location tab for patient location',
        'fqn': 'visit.locationLabel'
      },
      {
        'elementKey': 'consentForTreatment',
        'formIndex': '1',
        'inputType': 'checkbox',
        'label': 'Consent for treatment',
        'fqn': 'visit.consentForTreatment'
      },
      {
        'elementKey': 'consentForBlood',
        'formIndex': '1',
        'inputType': 'checkbox',
        'label': 'Consent for blood products',
        'fqn': 'visit.consentForBlood'
      },
      {
        'elementKey': 'codeStatus',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Code status',
        'fqn': 'visit.codeStatus'
      },
      {
        'elementKey': 'diagnosis',
        'formIndex': '1',
        'inputType': 'textarea',
        'label': 'Physician admitting diagnosis',
        'fqn': 'visit.diagnosis'
      },
      {
        'elementKey': 'notes',
        'formIndex': '1',
        'inputType': 'textarea',
        'label': 'Admitting notes',
        'fqn': 'visit.notes'
      },
      {
        'elementKey': 'location',
        'formIndex': '3',
        'helperText': 'hospital, ward #, room #, home, out patient clinic',
        'inputType': 'text',
        'label': 'Patient location',
        'mandatory': true,
        'tableColumn': '1',
        'fqn': 'visit.location',
        'helperHtml': '<p>hospital, ward #, room #, home, out patient clinic</p>'
      },
      {
        'elementKey': 'table_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'transferInDay',
        'formIndex': '3',
        'inputType': 'visitDay',
        'label': 'Transfer in day',
        'tableColumn': '2',
        'validation': 'visitDay',
        'fqn': 'visit.transferInDay'
      },
      {
        'elementKey': 'transferInTime',
        'formIndex': '3',
        'inputType': 'visitTime',
        'label': 'Transfer in time',
        'tableColumn': '3',
        'validation': 'time24',
        'fqn': 'visit.transferInTime'
      },
      {
        'elementKey': 'aSpacer',
        'formIndex': '3',
        'inputType': 'spacer',
        'fqn': 'visit.aSpacer'
      },
      {
        'elementKey': 'transferOutDay',
        'formIndex': '3',
        'inputType': 'visitDay',
        'label': 'Transfer out day',
        'tableColumn': '4',
        'validation': 'visitDay',
        'fqn': 'visit.transferOutDay'
      },
      {
        'elementKey': 'transferOutTime',
        'formIndex': '3',
        'inputType': 'visitTime',
        'label': 'Transfer out time',
        'tableColumn': '5',
        'validation': 'time24',
        'fqn': 'visit.transferOutTime'
      },
      {
        'elementKey': 'diagnosisTable_name',
        'formIndex': '2',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'visit.name'
      },
      {
        'elementKey': 'diagnosisTable_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'diagnosisTable_profession',
        'formIndex': '2',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'visit.profession'
      },
      {
        'elementKey': 'diagnosisTable_day',
        'formIndex': '2',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'visit.day'
      },
      {
        'elementKey': 'diagnosisTable_time',
        'formIndex': '2',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'visit.time'
      },
      {
        'elementKey': 'diagnosisRecord',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Diagnosis',
        'tableColumn': '2',
        'fqn': 'visit.diagnosisRecord'
      },
      {
        'elementKey': 'diagnosisDetails',
        'formIndex': '2',
        'inputType': 'textarea',
        'label': 'Details',
        'tableColumn': '3',
        'fqn': 'visit.diagnosisDetails'
      }
    ],
    'pageElements': {
      'pageForm': {
        'elementKey': 'pageForm',
        'label': 'Visit Details',
        'pageElementIndex': '1',
        'formKey': 'pageForm',
        'isPageForm': true,
        'ehr_groups': [
          {
            'elementKey': 'ehr_group28',
            'label': 'Admission',
            'formCss': 'grid-left-to-right-3',
            'gIndex': '1',
            'gChildren': [
              'admissionDay',
              'admissionTime',
              'status',
              'locationLabel',
              'consentForTreatment',
              'consentForBlood',
              'codeStatus'
            ]
          },
          {
            'elementKey': 'ehr_group29',
            'formCss': 'grid-left-to-right-1',
            'gIndex': '2',
            'gChildren': [
              'diagnosis',
              'notes'
            ]
          }
        ]
      },
      'diagnosisTable': {
        'elementKey': 'diagnosisTable',
        'pageElementIndex': '2',
        'pageKey': 'visit',
        'tableKey': 'diagnosisTable',
        'isTable': true,
        'label': 'Diagnosis',
        'addButtonText': 'Add a diagnosis record',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'diagnosisTable_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'diagnosisTable_name',
              'diagnosisTable_profession',
              'diagnosisTable_day',
              'diagnosisTable_time'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'diagnosisRecord'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'diagnosisDetails'
            ]
          }
        ],
        'form': {
          'elementKey': 'diagnosisTable',
          'label': 'Diagnosis',
          'addButtonText': 'Add a diagnosis record',
          'formKey': 'diagnosisTable',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group32',
              'label': 'Diagnosis',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'diagnosisTable_name',
                'diagnosisTable_profession',
                'diagnosisTable_day',
                'diagnosisTable_time'
              ]
            },
            {
              'elementKey': 'ehr_group33',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '2',
              'gChildren': [
                'diagnosisRecord',
                'diagnosisDetails'
              ]
            }
          ],
          'ehr_data': {
            'diagnosisTable_name': '',
            'diagnosisTable_profession': '',
            'diagnosisTable_day': '',
            'diagnosisTable_time': '',
            'diagnosisRecord': '',
            'diagnosisDetails': ''
          }
        },
        'tableChildren': [
          'diagnosisTable_id',
          'diagnosisTable_name',
          'diagnosisTable_profession',
          'diagnosisTable_day',
          'diagnosisTable_time',
          'diagnosisRecord',
          'diagnosisDetails'
        ],
        'hasRecHeader': true
      },
      'table': {
        'elementKey': 'table',
        'pageElementIndex': '3',
        'pageKey': 'visit',
        'tableKey': 'table',
        'isTable': true,
        'label': 'Patient Location',
        'addButtonText': 'Add a patient location',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'table_id'
            ]
          },
          {
            'ehr_list_index': '1',
            'items': [
              'location'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'transferInDay'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'transferInTime'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'transferOutDay'
            ]
          },
          {
            'ehr_list_index': '5',
            'items': [
              'transferOutTime'
            ]
          }
        ],
        'form': {
          'elementKey': 'table',
          'label': 'Patient Location',
          'addButtonText': 'Add a patient location',
          'formKey': 'table',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group30',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '1',
              'gChildren': [
                'location'
              ]
            },
            {
              'elementKey': 'ehr_group31',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'transferInDay',
                'transferInTime',
                'aSpacer',
                'transferOutDay',
                'transferOutTime'
              ]
            }
          ],
          'ehr_data': {
            'location': '',
            'transferInDay': '',
            'transferInTime': '',
            'transferOutDay': '',
            'transferOutTime': ''
          }
        },
        'tableChildren': [
          'table_id',
          'location',
          'transferInDay',
          'transferInTime',
          'transferOutDay',
          'transferOutTime'
        ]
      }
    }
  },
  'vitals': {
    'pageDataKey': 'vitals',
    'pageTitle': 'Vital signs',
    'pIndex': '11',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'table_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'vitals.name'
      },
      {
        'elementKey': 'table_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'table_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'vitals.profession'
      },
      {
        'elementKey': 'table_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'vitals.day'
      },
      {
        'elementKey': 'table_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'vitals.time'
      },
      {
        'elementKey': 'systolic',
        'addButtonText': 'Add a row to the test table',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Systolic blood pressure',
        'tableColumn': '2',
        'tableLabel': 'Systolic blood pressure',
        'validation': 'numeric',
        'fqn': 'vitals.systolic'
      },
      {
        'elementKey': 'diastolic',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Diastolic blood pressure',
        'tableColumn': '3',
        'tableLabel': 'Diastolic blood pressure',
        'validation': 'numeric',
        'fqn': 'vitals.diastolic'
      },
      {
        'elementKey': 'patientPosition',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Patient position',
        'options': [
          {
            'key': 'Supine',
            'text': 'Supine'
          },
          {
            'key': 'Sitting',
            'text': 'Sitting'
          },
          {
            'key': 'Standing',
            'text': 'Standing'
          }
        ],
        'tableColumn': '4',
        'tableLabel': 'Patient position',
        'fqn': 'vitals.patientPosition'
      },
      {
        'elementKey': 'temperature',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Temperature',
        'suffix': 'C',
        'tableColumn': '5',
        'tableLabel': 'Temperature',
        'validation': 'numeric',
        'fqn': 'vitals.temperature',
        'suffixText': '<p>C</p>',
        'suffixHtml': 'C'
      },
      {
        'elementKey': 'source',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Temperature source',
        'options': [
          {
            'key': 'Oral',
            'text': 'Oral'
          },
          {
            'key': 'Axilla',
            'text': 'Axilla'
          },
          {
            'key': 'Rectal',
            'text': 'Rectal'
          },
          {
            'key': 'Tympanic',
            'text': 'Tympanic'
          }
        ],
        'tableColumn': '6',
        'tableLabel': 'Source',
        'fqn': 'vitals.source'
      },
      {
        'elementKey': 'spacer36',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'vitals.spacer36'
      },
      {
        'elementKey': 'strength',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Pulse site',
        'options': [
          {
            'key': 'Peripheral',
            'text': 'Peripheral'
          },
          {
            'key': 'Other',
            'text': 'Other'
          }
        ],
        'tableColumn': '7',
        'tableLabel': 'Pulse site',
        'fqn': 'vitals.strength'
      },
      {
        'elementKey': 'rate',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Pulse rate',
        'tableColumn': '8',
        'tableLabel': 'Pulse rate',
        'validation': 'numeric',
        'fqn': 'vitals.rate'
      },
      {
        'elementKey': 'rhythm',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Pulse rhythm',
        'options': [
          {
            'key': 'Regular',
            'text': 'Regular'
          },
          {
            'key': 'Irregular',
            'text': 'Irregular'
          }
        ],
        'tableColumn': '9',
        'tableLabel': 'Pulse rhythm',
        'fqn': 'vitals.rhythm'
      },
      {
        'elementKey': 'respirationRate',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Respiration rate',
        'tableColumn': '10',
        'tableLabel': 'Respiration rate',
        'validation': 'numeric',
        'fqn': 'vitals.respirationRate'
      },
      {
        'elementKey': 'spacer37',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'vitals.spacer37'
      },
      {
        'elementKey': 'spacer38',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'vitals.spacer38'
      },
      {
        'elementKey': 'oxygenSaturation',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Oxygen saturation',
        'suffix': '%',
        'tableColumn': '11',
        'tableLabel': 'Oxygen saturation',
        'validation': 'numeric',
        'fqn': 'vitals.oxygenSaturation',
        'suffixText': '<p>%</p>',
        'suffixHtml': '%'
      },
      {
        'elementKey': 'oxygenMode',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Oxygen mode',
        'options': [
          {
            'key': 'Room air',
            'text': 'Room air'
          },
          {
            'key': 'Nasal prongs',
            'text': 'Nasal prongs'
          },
          {
            'key': 'Simple face mask',
            'text': 'Simple face mask'
          },
          {
            'key': 'Rebreathing face mask',
            'text': 'Rebreathing face mask'
          },
          {
            'key': 'Optiflow',
            'text': 'Optiflow'
          }
        ],
        'tableColumn': '12',
        'tableLabel': 'Oxygen mode',
        'fqn': 'vitals.oxygenMode'
      },
      {
        'elementKey': 'flowRate',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Flow rate',
        'suffix': '/lpm',
        'tableColumn': '13',
        'tableLabel': 'Flow rate',
        'validation': 'numeric',
        'fqn': 'vitals.flowRate',
        'suffixText': '<p>/lpm</p>',
        'suffixHtml': '/lpm'
      },
      {
        'elementKey': 'bloodSugar',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Blood sugar',
        'suffix': 'mmol/L',
        'tableColumn': '14',
        'tableLabel': 'Blood sugar',
        'validation': 'numeric',
        'fqn': 'vitals.bloodSugar',
        'suffixText': '<p>mmol/L</p>',
        'suffixHtml': 'mmol/L'
      },
      {
        'elementKey': 'cvp',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'CVP',
        'tableColumn': '15',
        'tableLabel': 'CVP (Central Venous Pressure)',
        'validation': 'cvp',
        'fqn': 'vitals.cvp'
      }
    ],
    'pageElements': {
      'table': {
        'elementKey': 'table',
        'pageElementIndex': '1',
        'pageKey': 'vitals',
        'tableKey': 'table',
        'isTable': true,
        'label': 'Vital signs',
        'addButtonText': 'Add vital signs',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'table_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'table_name',
              'table_profession',
              'table_day',
              'table_time'
            ]
          },
          {
            'label': 'Systolic blood pressure',
            'ehr_list_index': '2',
            'items': [
              'systolic'
            ]
          },
          {
            'label': 'Diastolic blood pressure',
            'ehr_list_index': '3',
            'items': [
              'diastolic'
            ]
          },
          {
            'label': 'Patient position',
            'ehr_list_index': '4',
            'items': [
              'patientPosition'
            ]
          },
          {
            'label': 'Temperature',
            'ehr_list_index': '5',
            'items': [
              'temperature'
            ]
          },
          {
            'label': 'Source',
            'ehr_list_index': '6',
            'items': [
              'source'
            ]
          },
          {
            'label': 'Pulse site',
            'ehr_list_index': '7',
            'items': [
              'strength'
            ]
          },
          {
            'label': 'Pulse rate',
            'ehr_list_index': '8',
            'items': [
              'rate'
            ]
          },
          {
            'label': 'Pulse rhythm',
            'ehr_list_index': '9',
            'items': [
              'rhythm'
            ]
          },
          {
            'label': 'Respiration rate',
            'ehr_list_index': '10',
            'items': [
              'respirationRate'
            ]
          },
          {
            'label': 'Oxygen saturation',
            'ehr_list_index': '11',
            'items': [
              'oxygenSaturation'
            ]
          },
          {
            'label': 'Oxygen mode',
            'ehr_list_index': '12',
            'items': [
              'oxygenMode'
            ]
          },
          {
            'label': 'Flow rate',
            'ehr_list_index': '13',
            'items': [
              'flowRate'
            ]
          },
          {
            'label': 'Blood sugar',
            'ehr_list_index': '14',
            'items': [
              'bloodSugar'
            ]
          },
          {
            'label': 'CVP (Central Venous Pressure)',
            'ehr_list_index': '15',
            'items': [
              'cvp'
            ]
          }
        ],
        'form': {
          'elementKey': 'table',
          'label': 'Vital signs',
          'addButtonText': 'Add vital signs',
          'formOption': 'transpose',
          'formKey': 'table',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group34',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'table_name',
                'table_profession',
                'table_day',
                'table_time'
              ]
            },
            {
              'elementKey': 'ehr_group35',
              'label': 'Vital signs',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'systolic',
                'diastolic',
                'patientPosition',
                'temperature',
                'source',
                'spacer36',
                'strength',
                'rate',
                'rhythm',
                'respirationRate',
                'spacer37',
                'spacer38',
                'oxygenSaturation',
                'oxygenMode',
                'flowRate',
                'bloodSugar',
                'cvp'
              ]
            }
          ],
          'ehr_data': {
            'table_name': '',
            'table_profession': '',
            'table_day': '',
            'table_time': '',
            'systolic': '',
            'diastolic': '',
            'patientPosition': '',
            'temperature': '',
            'source': '',
            'strength': '',
            'rate': '',
            'rhythm': '',
            'respirationRate': '',
            'oxygenSaturation': '',
            'oxygenMode': '',
            'flowRate': '',
            'bloodSugar': '',
            'cvp': ''
          }
        },
        'tableChildren': [
          'table_id',
          'table_name',
          'table_profession',
          'table_day',
          'table_time',
          'systolic',
          'diastolic',
          'patientPosition',
          'temperature',
          'source',
          'strength',
          'rate',
          'rhythm',
          'respirationRate',
          'oxygenSaturation',
          'oxygenMode',
          'flowRate',
          'bloodSugar',
          'cvp'
        ],
        'hasRecHeader': true
      }
    }
  },
  'fluidBalance': {
    'pageDataKey': 'fluidBalance',
    'pageTitle': 'Fluid balance',
    'pIndex': '12',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'table_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'fluidBalance.name'
      },
      {
        'elementKey': 'table_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'table_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'fluidBalance.profession'
      },
      {
        'elementKey': 'table_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'fluidBalance.day'
      },
      {
        'elementKey': 'table_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'fluidBalance.time'
      },
      {
        'elementKey': 'fluidIn',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Fluid in',
        'tableColumn': '2',
        'tableLabel': 'Fluid in',
        'fqn': 'fluidBalance.fluidIn'
      },
      {
        'elementKey': 'fluidOut',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Fluid out',
        'tableColumn': '3',
        'tableLabel': 'Fluid out',
        'fqn': 'fluidBalance.fluidOut'
      }
    ],
    'pageElements': {
      'table': {
        'elementKey': 'table',
        'pageElementIndex': '1',
        'pageKey': 'fluidBalance',
        'tableKey': 'table',
        'isTable': true,
        'label': 'Fluid balance',
        'addButtonText': 'Add a fluid in/out record',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'table_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'table_name',
              'table_profession',
              'table_day',
              'table_time'
            ]
          },
          {
            'label': 'Fluid in',
            'ehr_list_index': '2',
            'items': [
              'fluidIn'
            ]
          },
          {
            'label': 'Fluid out',
            'ehr_list_index': '3',
            'items': [
              'fluidOut'
            ]
          }
        ],
        'form': {
          'elementKey': 'table',
          'label': 'Fluid balance',
          'addButtonText': 'Add a fluid in/out record',
          'formKey': 'table',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group39',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'table_name',
                'table_profession',
                'table_day',
                'table_time'
              ]
            },
            {
              'elementKey': 'ehr_group40',
              'label': 'Fluid balance',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'fluidIn',
                'fluidOut'
              ]
            }
          ],
          'ehr_data': {
            'table_name': '',
            'table_profession': '',
            'table_day': '',
            'table_time': '',
            'fluidIn': '',
            'fluidOut': ''
          }
        },
        'tableChildren': [
          'table_id',
          'table_name',
          'table_profession',
          'table_day',
          'table_time',
          'fluidIn',
          'fluidOut'
        ],
        'hasRecHeader': true
      }
    }
  },
  'neurological': {
    'pageDataKey': 'neurological',
    'pageTitle': 'Neurological assessments',
    'pIndex': '14',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'table_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'neurological.name'
      },
      {
        'elementKey': 'table_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'table_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'neurological.profession'
      },
      {
        'elementKey': 'table_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'neurological.day'
      },
      {
        'elementKey': 'table_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'neurological.time'
      },
      {
        'elementKey': 'alert',
        'formIndex': '1',
        'formCss': 'grid-span-2-columns',
        'inputType': 'checkset',
        'label': 'Status',
        'options': [
          {
            'key': 'alert',
            'text': 'Alert'
          },
          {
            'key': 'oriented',
            'text': 'Oriented'
          },
          {
            'key': 'confused',
            'text': 'Confused'
          },
          {
            'key': 'drowsy',
            'text': 'Drowsy'
          },
          {
            'key': 'unresponsive',
            'text': 'Unresponsive'
          },
          {
            'key': 'dizziness',
            'text': 'Dizziness'
          },
          {
            'key': 'blurredVision',
            'text': 'Blurred vision'
          }
        ],
        'tableColumn': '2',
        'tableLabel': 'Status',
        'fqn': 'neurological.alert'
      },
      {
        'elementKey': 'eyeOpening',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Eye opening',
        'options': [
          {
            'key': '0 = Non testable',
            'text': '0 = Non testable'
          },
          {
            'key': '1 = None',
            'text': '1 = None'
          },
          {
            'key': '2 = To pressure',
            'text': '2 = To pressure'
          },
          {
            'key': '3 = To sound',
            'text': '3 = To sound'
          },
          {
            'key': '4 = Spontaneous',
            'text': '4 = Spontaneous'
          }
        ],
        'passToFunction': 'glasgowCalculation',
        'tableColumn': '3',
        'tableLabel': 'Eye opening',
        'fqn': 'neurological.eyeOpening'
      },
      {
        'elementKey': 'verbalResponse',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Verbal response',
        'options': [
          {
            'key': '0 = Non testable',
            'text': '0 = Non testable'
          },
          {
            'key': '1 = None',
            'text': '1 = None'
          },
          {
            'key': '2 = Sounds',
            'text': '2 = Sounds'
          },
          {
            'key': '3 = Words',
            'text': '3 = Words'
          },
          {
            'key': '4 = Confused',
            'text': '4 = Confused'
          },
          {
            'key': '5 = Oriented',
            'text': '5 = Oriented'
          }
        ],
        'passToFunction': 'glasgowCalculation',
        'tableColumn': '4',
        'tableLabel': 'Verbal response',
        'fqn': 'neurological.verbalResponse'
      },
      {
        'elementKey': 'bestMotorResponse',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Best motor response',
        'options': [
          {
            'key': '0 = Non testable',
            'text': '0 = Non testable'
          },
          {
            'key': '1 = None',
            'text': '1 = None'
          },
          {
            'key': '2 = Extension',
            'text': '2 = Extension'
          },
          {
            'key': '3 = Normal flexion',
            'text': '3 = Normal flexion'
          },
          {
            'key': '4 = Abnormal flexion',
            'text': '4 = Abnormal flexion'
          },
          {
            'key': '5 = Localising',
            'text': '5 = Localising'
          },
          {
            'key': '6 = Obeys commands',
            'text': '6 = Obeys commands'
          }
        ],
        'passToFunction': 'glasgowCalculation',
        'tableColumn': '5',
        'tableLabel': 'Best motor response',
        'fqn': 'neurological.bestMotorResponse'
      },
      {
        'elementKey': 'glasgowCalculation',
        'calculationType': 'sum',
        'defaultValue': '0',
        'formIndex': '1',
        'inputType': 'calculatedValue',
        'label': 'Glasgow Coma Scale',
        'options': [
          {
            'key': '=14+14+14',
            'text': '=14+14+14'
          }
        ],
        'tableColumn': '6',
        'tableLabel': 'Glasgow Coma Scale',
        'fqn': 'neurological.glasgowCalculation'
      },
      {
        'elementKey': 'loss',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Loss of conciousness',
        'options': [
          {
            'key': 'No',
            'text': 'No'
          },
          {
            'key': 'Yes',
            'text': 'Yes'
          },
          {
            'key': 'Unknown',
            'text': 'Unknown'
          }
        ],
        'tableColumn': '7',
        'tableLabel': 'Loss of conciousness',
        'fqn': 'neurological.loss'
      },
      {
        'elementKey': 'duration',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Duration',
        'tableColumn': '8',
        'tableLabel': 'Duration',
        'fqn': 'neurological.duration'
      },
      {
        'elementKey': 'leftPupilSize',
        'formIndex': '1',
        'formCss': 'grid-new-subsection',
        'inputType': 'select',
        'label': 'Left pupil size',
        'options': [
          {
            'key': '1',
            'text': '1'
          },
          {
            'key': '2',
            'text': '2'
          },
          {
            'key': '3',
            'text': '3'
          },
          {
            'key': '4',
            'text': '4'
          },
          {
            'key': '5',
            'text': '5'
          },
          {
            'key': '6',
            'text': '6'
          },
          {
            'key': '7',
            'text': '7'
          },
          {
            'key': '8',
            'text': '8'
          }
        ],
        'tableColumn': '9',
        'tableLabel': 'Left pupil size',
        'fqn': 'neurological.leftPupilSize'
      },
      {
        'elementKey': 'leftPupilResponseToLight',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Left pupil response to light',
        'options': [
          {
            'key': 'Brisk',
            'text': 'Brisk'
          },
          {
            'key': 'Sluggish',
            'text': 'Sluggish'
          },
          {
            'key': 'Fixed',
            'text': 'Fixed'
          }
        ],
        'tableColumn': '10',
        'tableLabel': 'Left pupil response to light',
        'fqn': 'neurological.leftPupilResponseToLight'
      },
      {
        'elementKey': 'spacer45',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'neurological.spacer45'
      },
      {
        'elementKey': 'rightPupilSize',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Right pupil size',
        'options': [
          {
            'key': '1',
            'text': '1'
          },
          {
            'key': '2',
            'text': '2'
          },
          {
            'key': '3',
            'text': '3'
          },
          {
            'key': '4',
            'text': '4'
          },
          {
            'key': '5',
            'text': '5'
          },
          {
            'key': '6',
            'text': '6'
          },
          {
            'key': '7',
            'text': '7'
          },
          {
            'key': '8',
            'text': '8'
          }
        ],
        'tableColumn': '11',
        'tableLabel': 'Right pupil size',
        'fqn': 'neurological.rightPupilSize'
      },
      {
        'elementKey': 'rightPupilResponseToLight',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Right pupil response to light',
        'options': [
          {
            'key': 'Brisk',
            'text': 'Brisk'
          },
          {
            'key': 'Sluggish',
            'text': 'Sluggish'
          },
          {
            'key': 'Fixed',
            'text': 'Fixed'
          }
        ],
        'tableColumn': '12',
        'tableLabel': 'Right pupil response to light',
        'fqn': 'neurological.rightPupilResponseToLight'
      },
      {
        'elementKey': 'bothPupils',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Both pupils',
        'options': [
          {
            'key': 'Equal',
            'text': 'Equal'
          },
          {
            'key': 'Unequal',
            'text': 'Unequal'
          }
        ],
        'tableColumn': '13',
        'tableLabel': 'Both pupils',
        'fqn': 'neurological.bothPupils'
      },
      {
        'elementKey': 'comments',
        'formIndex': '1',
        'formCss': 'grid-span-3-columns',
        'inputType': 'textarea',
        'label': 'General comments',
        'tableColumn': '14',
        'tableLabel': 'General comments',
        'fqn': 'neurological.comments'
      },
      {
        'elementKey': 'resources',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': '<b>Resources</b><p><a target=\'_blank\' href=\'/assets/standardized-assessment-tools/Morse-Fall-Scale-score.png\'>Morse Fall Score </a></br><a target=\'_blank\' href=\'/assets/standardized-assessment-tools/mini-mental-health-screen.pdf\'>Mini-mental state examination (MMSE)</a></p>',
        'fqn': 'neurological.resources'
      },
      {
        'elementKey': 'levelOfConciousness',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Level of conciousness',
        'options': [
          {
            'key': '0 = Alert; keenly responsive',
            'text': '0 = Alert; keenly responsive'
          },
          {
            'key': '1 = Not alert; but arousable by minor stimulation',
            'text': '1 = Not alert; but arousable by minor stimulation'
          },
          {
            'key': '2 = Not alert; requires repeated stimulation',
            'text': '2 = Not alert; requires repeated stimulation'
          },
          {
            'key': '3 = Unresponsive or responds only with reflex',
            'text': '3 = Unresponsive or responds only with reflex'
          }
        ],
        'passToFunction': 'strokeAssessmentCalculation',
        'tableColumn': '15',
        'tableLabel': 'Level of conciousness',
        'fqn': 'neurological.levelOfConciousness'
      },
      {
        'elementKey': 'levelOfConciousnessQuestions',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Level of conciousness questions',
        'options': [
          {
            'key': '0 = Answers two questions correctly',
            'text': '0 = Answers two questions correctly'
          },
          {
            'key': '1 = Answers one question correctly',
            'text': '1 = Answers one question correctly'
          },
          {
            'key': '2 = Answers neither question correctly',
            'text': '2 = Answers neither question correctly'
          }
        ],
        'passToFunction': 'strokeAssessmentCalculation',
        'tableColumn': '16',
        'tableLabel': 'Response to questions',
        'fqn': 'neurological.levelOfConciousnessQuestions'
      },
      {
        'elementKey': 'levelOfConciousnessCommands',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Level of conciousness commands',
        'options': [
          {
            'key': '0 = Performs both tasks correctly',
            'text': '0 = Performs both tasks correctly'
          },
          {
            'key': '1 = Performs one task correctly',
            'text': '1 = Performs one task correctly'
          },
          {
            'key': '2 = Performs neither task correctly',
            'text': '2 = Performs neither task correctly'
          }
        ],
        'passToFunction': 'strokeAssessmentCalculation',
        'tableColumn': '17',
        'tableLabel': 'Response to commands',
        'fqn': 'neurological.levelOfConciousnessCommands'
      },
      {
        'elementKey': 'motorLeftArm',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Motor - left arm',
        'options': [
          {
            'key': '0 = No drift',
            'text': '0 = No drift'
          },
          {
            'key': '1 = Drift',
            'text': '1 = Drift'
          },
          {
            'key': '2 = Some effort against gravity',
            'text': '2 = Some effort against gravity'
          },
          {
            'key': '3 = No effort against gravity; limb falls',
            'text': '3 = No effort against gravity; limb falls'
          },
          {
            'key': '4 = No movement',
            'text': '4 = No movement'
          }
        ],
        'passToFunction': 'strokeAssessmentCalculation',
        'tableColumn': '18',
        'tableLabel': 'Motor - left arm',
        'fqn': 'neurological.motorLeftArm'
      },
      {
        'elementKey': 'motorRightArm',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Motor - right arm',
        'options': [
          {
            'key': '0 = No drift',
            'text': '0 = No drift'
          },
          {
            'key': '1 = Drift',
            'text': '1 = Drift'
          },
          {
            'key': '2 = Some effort against gravity',
            'text': '2 = Some effort against gravity'
          },
          {
            'key': '3 = No effort against gravity; limb falls',
            'text': '3 = No effort against gravity; limb falls'
          },
          {
            'key': '4 = No movement',
            'text': '4 = No movement'
          }
        ],
        'passToFunction': 'strokeAssessmentCalculation',
        'tableColumn': '19',
        'tableLabel': 'Motor - right arm',
        'fqn': 'neurological.motorRightArm'
      },
      {
        'elementKey': 'spacer47',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'neurological.spacer47'
      },
      {
        'elementKey': 'motorLeftLeg',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Motor - left leg',
        'options': [
          {
            'key': '0 = No drift',
            'text': '0 = No drift'
          },
          {
            'key': '1 = Drift',
            'text': '1 = Drift'
          },
          {
            'key': '2 = Some effort against gravity',
            'text': '2 = Some effort against gravity'
          },
          {
            'key': '3 = No effort against gravity',
            'text': '3 = No effort against gravity'
          },
          {
            'key': '4 = No movement',
            'text': '4 = No movement'
          }
        ],
        'passToFunction': 'strokeAssessmentCalculation',
        'tableColumn': '20',
        'tableLabel': 'Motor - left leg',
        'fqn': 'neurological.motorLeftLeg'
      },
      {
        'elementKey': 'motorRightLeg',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Motor - right leg',
        'options': [
          {
            'key': '0 = No drift',
            'text': '0 = No drift'
          },
          {
            'key': '1 = Drift',
            'text': '1 = Drift'
          },
          {
            'key': '2 = Some effort against gravity',
            'text': '2 = Some effort against gravity'
          },
          {
            'key': '3 = No effort against gravity',
            'text': '3 = No effort against gravity'
          },
          {
            'key': '4 = No movement',
            'text': '4 = No movement'
          }
        ],
        'passToFunction': 'strokeAssessmentCalculation',
        'tableColumn': '21',
        'tableLabel': 'Motor - right leg',
        'fqn': 'neurological.motorRightLeg'
      },
      {
        'elementKey': 'limbAtaxia',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Limb ataxia',
        'options': [
          {
            'key': '0 = Absent',
            'text': '0 = Absent'
          },
          {
            'key': '1 = Present in one limb',
            'text': '1 = Present in one limb'
          },
          {
            'key': '2 = Present in two limbs',
            'text': '2 = Present in two limbs'
          }
        ],
        'passToFunction': 'strokeAssessmentCalculation',
        'tableColumn': '22',
        'tableLabel': 'Limb ataxia',
        'fqn': 'neurological.limbAtaxia'
      },
      {
        'elementKey': 'bestGaze',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Best gaze',
        'options': [
          {
            'key': '0 = Normal',
            'text': '0 = Normal'
          },
          {
            'key': '1 = Partial gaze palsy',
            'text': '1 = Partial gaze palsy'
          },
          {
            'key': '2 = Forced deviation',
            'text': '2 = Forced deviation'
          }
        ],
        'passToFunction': 'strokeAssessmentCalculation',
        'tableColumn': '23',
        'tableLabel': 'Best gaze',
        'fqn': 'neurological.bestGaze'
      },
      {
        'elementKey': 'visual',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Visual',
        'options': [
          {
            'key': '0 = No visual loss',
            'text': '0 = No visual loss'
          },
          {
            'key': '1 = Partial hemianopia',
            'text': '1 = Partial hemianopia'
          },
          {
            'key': '2 = Partial paralysis',
            'text': '2 = Partial paralysis'
          },
          {
            'key': '3 = Complete paralysis of one or both sides',
            'text': '3 = Complete paralysis of one or both sides'
          }
        ],
        'passToFunction': 'strokeAssessmentCalculation',
        'tableColumn': '24',
        'tableLabel': 'Visual',
        'fqn': 'neurological.visual'
      },
      {
        'elementKey': 'facialPalsy',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Facial palsy',
        'options': [
          {
            'key': '0 = Normal symmetric movements',
            'text': '0 = Normal symmetric movements'
          },
          {
            'key': '1 = Minor paralysis',
            'text': '1 = Minor paralysis'
          },
          {
            'key': '2 = Partial paralysis',
            'text': '2 = Partial paralysis'
          },
          {
            'key': '3 = Complete paralysis of one or both sides',
            'text': '3 = Complete paralysis of one or both sides'
          }
        ],
        'passToFunction': 'strokeAssessmentCalculation',
        'tableColumn': '25',
        'tableLabel': 'Facial palsy',
        'fqn': 'neurological.facialPalsy'
      },
      {
        'elementKey': 'sensory',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Sensory',
        'options': [
          {
            'key': '0 = Normal; no sensory loss',
            'text': '0 = Normal; no sensory loss'
          },
          {
            'key': '1 = Mild-to-moderate sensory loss',
            'text': '1 = Mild-to-moderate sensory loss'
          },
          {
            'key': '2 = Severe to total sensory loss',
            'text': '2 = Severe to total sensory loss'
          }
        ],
        'passToFunction': 'strokeAssessmentCalculation',
        'tableColumn': '26',
        'tableLabel': 'Sensory',
        'fqn': 'neurological.sensory'
      },
      {
        'elementKey': 'bestLanguage',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Best language',
        'options': [
          {
            'key': '0 = No aphasia; normal',
            'text': '0 = No aphasia; normal'
          },
          {
            'key': '1 = Mild to moderate aphasia',
            'text': '1 = Mild to moderate aphasia'
          },
          {
            'key': '2 = Severe aphasia',
            'text': '2 = Severe aphasia'
          },
          {
            'key': '3 = Mute, global aphasia',
            'text': '3 = Mute, global aphasia'
          }
        ],
        'passToFunction': 'strokeAssessmentCalculation',
        'tableColumn': '27',
        'tableLabel': 'Best language',
        'fqn': 'neurological.bestLanguage'
      },
      {
        'elementKey': 'dysarthria',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Dysarthria',
        'options': [
          {
            'key': '0 = Normal',
            'text': '0 = Normal'
          },
          {
            'key': '1 = Mild to moderate',
            'text': '1 = Mild to moderate'
          },
          {
            'key': '2 = Severe dysarthria',
            'text': '2 = Severe dysarthria'
          }
        ],
        'passToFunction': 'strokeAssessmentCalculation',
        'tableColumn': '28',
        'tableLabel': 'Dysarthria',
        'fqn': 'neurological.dysarthria'
      },
      {
        'elementKey': 'extinctionAndInattention',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Extinction and inattention',
        'options': [
          {
            'key': '0 = No abnormality',
            'text': '0 = No abnormality'
          },
          {
            'key': '1 = Visual, tactile, auditory, spatial, or personal inattention',
            'text': '1 = Visual, tactile, auditory, spatial, or personal inattention'
          },
          {
            'key': '2 = Profound hemi-inattention or extinction',
            'text': '2 = Profound hemi-inattention or extinction'
          }
        ],
        'passToFunction': 'strokeAssessmentCalculation',
        'tableColumn': '29',
        'tableLabel': 'Extinction and inattention',
        'fqn': 'neurological.extinctionAndInattention'
      },
      {
        'elementKey': 'strokeAssessmentCalculation',
        'calculationType': 'sum',
        'defaultValue': '0',
        'formIndex': '1',
        'formCss': 'grid-new-subsection',
        'inputType': 'calculatedValue',
        'label': '<b>Stroke assessment calculation</b>',
        'tableColumn': '30',
        'tableLabel': 'Stroke assessment score',
        'fqn': 'neurological.strokeAssessmentCalculation'
      },
      {
        'elementKey': 'del_table_name',
        'formIndex': '2',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'neurological.name'
      },
      {
        'elementKey': 'del_table_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'del_table_profession',
        'formIndex': '2',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'neurological.profession'
      },
      {
        'elementKey': 'del_table_day',
        'formIndex': '2',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'neurological.day'
      },
      {
        'elementKey': 'del_table_time',
        'formIndex': '2',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'neurological.time'
      },
      {
        'elementKey': 'del_individual',
        'formIndex': '2',
        'inputType': 'checkset',
        'label': 'Individual / Environmental Risks',
        'options': [
          {
            'key': 'age75OrOlder',
            'text': 'Age 75 or older'
          },
          {
            'key': 'alcohol /Drug /TobaccoUse',
            'text': 'Alcohol / drug / tobacco use'
          },
          {
            'key': 'cognitiveImpairment',
            'text': 'Cognitive impairment'
          },
          {
            'key': 'functionalImpairment',
            'text': 'Functional impairment'
          },
          {
            'key': 'historyOfDepression',
            'text': 'History of depression'
          },
          {
            'key': 'previousDelirium',
            'text': 'Previous delirium'
          },
          {
            'key': 'reloaction',
            'text': 'Reloaction'
          },
          {
            'key': 'sleepDisturbance',
            'text': 'Sleep disturbance'
          },
          {
            'key': 'useOfRestraints',
            'text': 'Use of restraints'
          },
          {
            'key': 'vision /HearingLoss',
            'text': 'Vision / hearing loss'
          }
        ],
        'tableColumn': '2',
        'fqn': 'neurological.del_individual'
      },
      {
        'elementKey': 'del_medicaal',
        'formIndex': '2',
        'inputType': 'checkset',
        'label': 'Medical risks',
        'options': [
          {
            'key': 'advancedIllness',
            'text': 'Advanced illness'
          },
          {
            'key': 'chronicIllness',
            'text': 'Chronic illness'
          },
          {
            'key': 'electrolyteImbalance',
            'text': 'Electrolyte imbalance'
          },
          {
            'key': 'fever',
            'text': 'Fever'
          },
          {
            'key': 'historyOfTia /Stroke',
            'text': 'History of TIA / stroke'
          },
          {
            'key': 'hypotension',
            'text': 'Hypotension'
          },
          {
            'key': 'hypoxia',
            'text': 'Hypoxia'
          },
          {
            'key': 'infection',
            'text': 'Infection'
          },
          {
            'key': 'multipleCoMorbidities',
            'text': 'Multiple co-morbidities'
          },
          {
            'key': 'surgery /Anesthesia',
            'text': 'Surgery / anesthesia'
          },
          {
            'key': 'unrelievedPain',
            'text': 'Unrelieved pain'
          }
        ],
        'tableColumn': '3',
        'fqn': 'neurological.del_medicaal'
      },
      {
        'elementKey': 'del_medication',
        'formIndex': '2',
        'inputType': 'checkset',
        'label': 'Medication risks',
        'options': [
          {
            'key': 'antipsychotics',
            'text': 'Antipsychotics'
          },
          {
            'key': 'benzodiazepines',
            'text': 'Benzodiazepines'
          },
          {
            'key': 'cardiacDrugs',
            'text': 'Cardiac drugs'
          },
          {
            'key': 'opiodAnalgesics',
            'text': 'Opiod analgesics'
          },
          {
            'key': 'receiving5OrMoreMeds',
            'text': 'Receiving 5 or more meds'
          }
        ],
        'tableColumn': '4',
        'fqn': 'neurological.del_medication'
      },
      {
        'elementKey': 'form_label50',
        'formIndex': '2',
        'formCss': 'grid-span-3-columns',
        'inputType': 'form_label',
        'label': '<p>&bull; Person has 3 or more risk factors: Initiate CAM screening everying 12 hours and intitate PRISME.</p><p>&bull; Person has less than 3 risk factors: DO NOT intiate CAM but continue to monitor for changes in risk factors and initiate as appropriate PRISME.</p>',
        'fqn': 'neurological.form_label50'
      },
      {
        'elementKey': 'del_doCam',
        'formIndex': '2',
        'inputType': 'checkbox',
        'label': 'Initiate CAM and PRISME',
        'tableColumn': '5',
        'fqn': 'neurological.del_doCam'
      },
      {
        'elementKey': 'form_label51',
        'formIndex': '2',
        'formCss': 'grid-span-3-columns',
        'inputType': 'form_label',
        'label': 'See CAM assessments as per <a target=\'_blank\' href=\'https://www2.gov.bc.ca/assets/gov/health/practitioner-pro/bc-guidelines/cogimp-appendix-c.pdf\'>BC Guidlines.ca Delirium Screening and Assessment Tools – CAM & PRISME</a>',
        'fqn': 'neurological.form_label51'
      },
      {
        'elementKey': 'del_comments',
        'formIndex': '2',
        'formCss': 'grid-span-3-columns',
        'inputType': 'textarea',
        'label': 'Comments',
        'tableColumn': '6',
        'fqn': 'neurological.del_comments'
      },
      {
        'elementKey': 'cam_table_name',
        'formIndex': '3',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'neurological.name'
      },
      {
        'elementKey': 'cam_table_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'cam_table_profession',
        'formIndex': '3',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'neurological.profession'
      },
      {
        'elementKey': 'cam_table_day',
        'formIndex': '3',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'neurological.day'
      },
      {
        'elementKey': 'cam_table_time',
        'formIndex': '3',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'neurological.time'
      },
      {
        'elementKey': 'form_label54',
        'formIndex': '3',
        'inputType': 'form_label',
        'label': '<a target=\'_blank\' href=\'https://www2.gov.bc.ca/assets/gov/health/practitioner-pro/bc-guidelines/cogimp-appendix-c.pdf\'>BC Guidlines.ca Delirium Screening and Assessment Tools – CAM & PRISME</a>',
        'fqn': 'neurological.form_label54'
      },
      {
        'elementKey': 'cam_1',
        'formIndex': '3',
        'inputType': 'checkbox',
        'label': 'Feature 1: Acute onset and fluctuating course',
        'tableColumn': '2',
        'fqn': 'neurological.cam_1'
      },
      {
        'elementKey': 'cam_2',
        'formIndex': '3',
        'inputType': 'checkbox',
        'label': 'Feature 2: Inattention',
        'tableColumn': '3',
        'fqn': 'neurological.cam_2'
      },
      {
        'elementKey': 'cam_3',
        'formIndex': '3',
        'inputType': 'checkbox',
        'label': 'Feature 3: Disorganized thinking',
        'tableColumn': '4',
        'fqn': 'neurological.cam_3'
      },
      {
        'elementKey': 'cam_4',
        'formIndex': '3',
        'inputType': 'checkbox',
        'label': 'Feature 4: Altered level of consciousness',
        'tableColumn': '5',
        'fqn': 'neurological.cam_4'
      },
      {
        'elementKey': 'cam_assessment',
        'formIndex': '3',
        'inputType': 'text',
        'label': 'Assessment',
        'tableColumn': '6',
        'fqn': 'neurological.cam_assessment'
      }
    ],
    'pageElements': {
      'table': {
        'elementKey': 'table',
        'pageElementIndex': '1',
        'pageKey': 'neurological',
        'tableKey': 'table',
        'isTable': true,
        'label': 'Neurological assessment',
        'addButtonText': 'Add a neurological assessment',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'table_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'table_name',
              'table_profession',
              'table_day',
              'table_time'
            ]
          },
          {
            'label': 'Status',
            'ehr_list_index': '2',
            'items': [
              'alert'
            ]
          },
          {
            'label': 'Eye opening',
            'ehr_list_index': '3',
            'items': [
              'eyeOpening'
            ]
          },
          {
            'label': 'Verbal response',
            'ehr_list_index': '4',
            'items': [
              'verbalResponse'
            ]
          },
          {
            'label': 'Best motor response',
            'ehr_list_index': '5',
            'items': [
              'bestMotorResponse'
            ]
          },
          {
            'label': 'Glasgow Coma Scale',
            'ehr_list_index': '6',
            'items': [
              'glasgowCalculation'
            ]
          },
          {
            'label': 'Loss of conciousness',
            'ehr_list_index': '7',
            'items': [
              'loss'
            ]
          },
          {
            'label': 'Duration',
            'ehr_list_index': '8',
            'items': [
              'duration'
            ]
          },
          {
            'label': 'Left pupil size',
            'ehr_list_index': '9',
            'items': [
              'leftPupilSize'
            ]
          },
          {
            'label': 'Left pupil response to light',
            'ehr_list_index': '10',
            'items': [
              'leftPupilResponseToLight'
            ]
          },
          {
            'label': 'Right pupil size',
            'ehr_list_index': '11',
            'items': [
              'rightPupilSize'
            ]
          },
          {
            'label': 'Right pupil response to light',
            'ehr_list_index': '12',
            'items': [
              'rightPupilResponseToLight'
            ]
          },
          {
            'label': 'Both pupils',
            'ehr_list_index': '13',
            'items': [
              'bothPupils'
            ]
          },
          {
            'label': 'General comments',
            'ehr_list_index': '14',
            'items': [
              'comments'
            ]
          },
          {
            'label': 'Level of conciousness',
            'ehr_list_index': '15',
            'items': [
              'levelOfConciousness'
            ]
          },
          {
            'label': 'Response to questions',
            'ehr_list_index': '16',
            'items': [
              'levelOfConciousnessQuestions'
            ]
          },
          {
            'label': 'Response to commands',
            'ehr_list_index': '17',
            'items': [
              'levelOfConciousnessCommands'
            ]
          },
          {
            'label': 'Motor - left arm',
            'ehr_list_index': '18',
            'items': [
              'motorLeftArm'
            ]
          },
          {
            'label': 'Motor - right arm',
            'ehr_list_index': '19',
            'items': [
              'motorRightArm'
            ]
          },
          {
            'label': 'Motor - left leg',
            'ehr_list_index': '20',
            'items': [
              'motorLeftLeg'
            ]
          },
          {
            'label': 'Motor - right leg',
            'ehr_list_index': '21',
            'items': [
              'motorRightLeg'
            ]
          },
          {
            'label': 'Limb ataxia',
            'ehr_list_index': '22',
            'items': [
              'limbAtaxia'
            ]
          },
          {
            'label': 'Best gaze',
            'ehr_list_index': '23',
            'items': [
              'bestGaze'
            ]
          },
          {
            'label': 'Visual',
            'ehr_list_index': '24',
            'items': [
              'visual'
            ]
          },
          {
            'label': 'Facial palsy',
            'ehr_list_index': '25',
            'items': [
              'facialPalsy'
            ]
          },
          {
            'label': 'Sensory',
            'ehr_list_index': '26',
            'items': [
              'sensory'
            ]
          },
          {
            'label': 'Best language',
            'ehr_list_index': '27',
            'items': [
              'bestLanguage'
            ]
          },
          {
            'label': 'Dysarthria',
            'ehr_list_index': '28',
            'items': [
              'dysarthria'
            ]
          },
          {
            'label': 'Extinction and inattention',
            'ehr_list_index': '29',
            'items': [
              'extinctionAndInattention'
            ]
          },
          {
            'label': 'Stroke assessment score',
            'ehr_list_index': '30',
            'items': [
              'strokeAssessmentCalculation'
            ]
          }
        ],
        'form': {
          'elementKey': 'table',
          'label': 'Neurological assessment',
          'addButtonText': 'Add a neurological assessment',
          'formOption': 'transpose',
          'formKey': 'table',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group41',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'table_name',
                'table_profession',
                'table_day',
                'table_time'
              ]
            },
            {
              'elementKey': 'ehr_group42',
              'formCss': 'section-divider',
              'gIndex': '2',
              'gChildren': [
                'alert'
              ]
            },
            {
              'elementKey': 'ehr_group43',
              'label': 'Glasgow Coma Scale',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '3',
              'gChildren': [
                'eyeOpening',
                'verbalResponse',
                'bestMotorResponse',
                'glasgowCalculation'
              ]
            },
            {
              'elementKey': 'ehr_group44',
              'label': 'Conciousness',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '4',
              'gChildren': [
                'loss',
                'duration',
                'leftPupilSize',
                'leftPupilResponseToLight',
                'spacer45',
                'rightPupilSize',
                'rightPupilResponseToLight',
                'bothPupils',
                'comments',
                'resources'
              ]
            },
            {
              'elementKey': 'ehr_group46',
              'label': 'Stroke assessment',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '5',
              'gChildren': [
                'levelOfConciousness',
                'levelOfConciousnessQuestions',
                'levelOfConciousnessCommands',
                'motorLeftArm',
                'motorRightArm',
                'spacer47',
                'motorLeftLeg',
                'motorRightLeg',
                'limbAtaxia',
                'bestGaze',
                'visual',
                'facialPalsy',
                'sensory',
                'bestLanguage',
                'dysarthria',
                'extinctionAndInattention',
                'strokeAssessmentCalculation'
              ]
            }
          ],
          'ehr_data': {
            'table_name': '',
            'table_profession': '',
            'table_day': '',
            'table_time': '',
            'alert': '',
            'eyeOpening': '',
            'verbalResponse': '',
            'bestMotorResponse': '',
            'glasgowCalculation': '0',
            'loss': '',
            'duration': '',
            'leftPupilSize': '',
            'leftPupilResponseToLight': '',
            'rightPupilSize': '',
            'rightPupilResponseToLight': '',
            'bothPupils': '',
            'comments': '',
            'levelOfConciousness': '',
            'levelOfConciousnessQuestions': '',
            'levelOfConciousnessCommands': '',
            'motorLeftArm': '',
            'motorRightArm': '',
            'motorLeftLeg': '',
            'motorRightLeg': '',
            'limbAtaxia': '',
            'bestGaze': '',
            'visual': '',
            'facialPalsy': '',
            'sensory': '',
            'bestLanguage': '',
            'dysarthria': '',
            'extinctionAndInattention': '',
            'strokeAssessmentCalculation': '0'
          }
        },
        'tableChildren': [
          'table_id',
          'table_name',
          'table_profession',
          'table_day',
          'table_time',
          'alert',
          'eyeOpening',
          'verbalResponse',
          'bestMotorResponse',
          'glasgowCalculation',
          'loss',
          'duration',
          'leftPupilSize',
          'leftPupilResponseToLight',
          'rightPupilSize',
          'rightPupilResponseToLight',
          'bothPupils',
          'comments',
          'levelOfConciousness',
          'levelOfConciousnessQuestions',
          'levelOfConciousnessCommands',
          'motorLeftArm',
          'motorRightArm',
          'motorLeftLeg',
          'motorRightLeg',
          'limbAtaxia',
          'bestGaze',
          'visual',
          'facialPalsy',
          'sensory',
          'bestLanguage',
          'dysarthria',
          'extinctionAndInattention',
          'strokeAssessmentCalculation'
        ],
        'hasRecHeader': true
      },
      'del_table': {
        'elementKey': 'del_table',
        'pageElementIndex': '2',
        'pageKey': 'neurological',
        'tableKey': 'del_table',
        'isTable': true,
        'label': 'Delirium risk assessment',
        'addButtonText': 'Add a risk assessment',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'del_table_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'del_table_name',
              'del_table_profession',
              'del_table_day',
              'del_table_time'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'del_individual'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'del_medicaal'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'del_medication'
            ]
          },
          {
            'ehr_list_index': '5',
            'items': [
              'del_doCam'
            ]
          },
          {
            'ehr_list_index': '6',
            'items': [
              'del_comments'
            ]
          }
        ],
        'form': {
          'elementKey': 'del_table',
          'label': 'Delirium risk assessment',
          'addButtonText': 'Add a risk assessment',
          'formOption': 'transpose',
          'formKey': 'del_table',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group48',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'del_table_name',
                'del_table_profession',
                'del_table_day',
                'del_table_time'
              ]
            },
            {
              'elementKey': 'ehr_group49',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'del_individual',
                'del_medicaal',
                'del_medication',
                'form_label50',
                'del_doCam',
                'form_label51',
                'del_comments'
              ]
            }
          ],
          'ehr_data': {
            'del_table_name': '',
            'del_table_profession': '',
            'del_table_day': '',
            'del_table_time': '',
            'del_individual': '',
            'del_medicaal': '',
            'del_medication': '',
            'del_doCam': '',
            'del_comments': ''
          }
        },
        'tableChildren': [
          'del_table_id',
          'del_table_name',
          'del_table_profession',
          'del_table_day',
          'del_table_time',
          'del_individual',
          'del_medicaal',
          'del_medication',
          'del_doCam',
          'del_comments'
        ],
        'hasRecHeader': true
      },
      'cam_table': {
        'elementKey': 'cam_table',
        'pageElementIndex': '3',
        'pageKey': 'neurological',
        'tableKey': 'cam_table',
        'isTable': true,
        'label': 'CAM assessment',
        'addButtonText': 'Add a confusion assessment',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'cam_table_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'cam_table_name',
              'cam_table_profession',
              'cam_table_day',
              'cam_table_time'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'cam_1'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'cam_2'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'cam_3'
            ]
          },
          {
            'ehr_list_index': '5',
            'items': [
              'cam_4'
            ]
          },
          {
            'ehr_list_index': '6',
            'items': [
              'cam_assessment'
            ]
          }
        ],
        'form': {
          'elementKey': 'cam_table',
          'label': 'CAM assessment',
          'addButtonText': 'Add a confusion assessment',
          'formOption': 'transpose',
          'formKey': 'cam_table',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group52',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'cam_table_name',
                'cam_table_profession',
                'cam_table_day',
                'cam_table_time'
              ]
            },
            {
              'elementKey': 'ehr_group53',
              'label': 'CAM assessment',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '2',
              'gChildren': [
                'form_label54',
                'cam_1',
                'cam_2',
                'cam_3',
                'cam_4',
                'cam_assessment'
              ]
            }
          ],
          'ehr_data': {
            'cam_table_name': '',
            'cam_table_profession': '',
            'cam_table_day': '',
            'cam_table_time': '',
            'cam_1': '',
            'cam_2': '',
            'cam_3': '',
            'cam_4': '',
            'cam_assessment': ''
          }
        },
        'tableChildren': [
          'cam_table_id',
          'cam_table_name',
          'cam_table_profession',
          'cam_table_day',
          'cam_table_time',
          'cam_1',
          'cam_2',
          'cam_3',
          'cam_4',
          'cam_assessment'
        ],
        'hasRecHeader': true
      }
    }
  },
  'respiratory': {
    'pageDataKey': 'respiratory',
    'pageTitle': 'Respiratory assessment',
    'pIndex': '15',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'table_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'respiratory.name'
      },
      {
        'elementKey': 'table_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'table_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'respiratory.profession'
      },
      {
        'elementKey': 'table_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'respiratory.day'
      },
      {
        'elementKey': 'table_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'respiratory.time'
      },
      {
        'elementKey': 'airway',
        'formIndex': '1',
        'inputType': 'checkset',
        'label': 'Airway',
        'options': [
          {
            'key': 'patent',
            'text': 'Patent'
          },
          {
            'key': 'obstructed',
            'text': 'Obstructed'
          },
          {
            'key': 'oralEndotrachealTube',
            'text': 'Oral endotracheal tube'
          },
          {
            'key': 'other',
            'text': 'Other'
          }
        ],
        'tableColumn': '2',
        'tableLabel': 'Airway',
        'fqn': 'respiratory.airway'
      },
      {
        'elementKey': 'oxygenTherapy',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Oxygen therapy',
        'tableColumn': '3',
        'tableLabel': 'Oxygen therapy',
        'fqn': 'respiratory.oxygenTherapy'
      },
      {
        'elementKey': 'flowRate',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Flow rate',
        'suffix': '/lpm',
        'tableColumn': '4',
        'tableLabel': 'Flow rate',
        'fqn': 'respiratory.flowRate',
        'suffixText': '<p>/lpm</p>',
        'suffixHtml': '/lpm'
      },
      {
        'elementKey': 'lul',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Left upper lung',
        'options': [
          {
            'key': 'Normal',
            'text': 'Normal'
          },
          {
            'key': 'Wheeze',
            'text': 'Wheeze'
          },
          {
            'key': 'Crackles',
            'text': 'Crackles'
          },
          {
            'key': 'Absent',
            'text': 'Absent'
          },
          {
            'key': 'Decreased',
            'text': 'Decreased'
          }
        ],
        'tableColumn': '5',
        'tableLabel': 'Left upper lung',
        'fqn': 'respiratory.lul'
      },
      {
        'elementKey': 'rul',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Right upper lung',
        'options': [
          {
            'key': 'Normal',
            'text': 'Normal'
          },
          {
            'key': 'Wheeze',
            'text': 'Wheeze'
          },
          {
            'key': 'Crackles',
            'text': 'Crackles'
          },
          {
            'key': 'Absent',
            'text': 'Absent'
          },
          {
            'key': 'Decreased',
            'text': 'Decreased'
          }
        ],
        'tableColumn': '6',
        'tableLabel': 'Right upper lung',
        'fqn': 'respiratory.rul'
      },
      {
        'elementKey': 'aSpacer2',
        'formIndex': '1',
        'formCss': 'grid-new-subsection',
        'inputType': 'spacer',
        'fqn': 'respiratory.aSpacer2'
      },
      {
        'elementKey': 'rml',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Right middle lung',
        'options': [
          {
            'key': 'Normal',
            'text': 'Normal'
          },
          {
            'key': 'Wheeze',
            'text': 'Wheeze'
          },
          {
            'key': 'Crackles',
            'text': 'Crackles'
          },
          {
            'key': 'Absent',
            'text': 'Absent'
          },
          {
            'key': 'Decreased',
            'text': 'Decreased'
          }
        ],
        'tableColumn': '7',
        'tableLabel': 'Right middle lung',
        'fqn': 'respiratory.rml'
      },
      {
        'elementKey': 'lll',
        'formIndex': '1',
        'formCss': 'grid-new-subsection',
        'inputType': 'select',
        'label': 'Left lower lung',
        'options': [
          {
            'key': 'Normal',
            'text': 'Normal'
          },
          {
            'key': 'Wheeze',
            'text': 'Wheeze'
          },
          {
            'key': 'Crackles',
            'text': 'Crackles'
          },
          {
            'key': 'Absent',
            'text': 'Absent'
          },
          {
            'key': 'Decreased',
            'text': 'Decreased'
          }
        ],
        'tableColumn': '8',
        'tableLabel': 'Left lower lung',
        'fqn': 'respiratory.lll'
      },
      {
        'elementKey': 'rll',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Right lower lung',
        'options': [
          {
            'key': 'Normal',
            'text': 'Normal'
          },
          {
            'key': 'Wheeze',
            'text': 'Wheeze'
          },
          {
            'key': 'Crackles',
            'text': 'Crackles'
          },
          {
            'key': 'Absent',
            'text': 'Absent'
          },
          {
            'key': 'Decreased',
            'text': 'Decreased'
          }
        ],
        'tableColumn': '9',
        'tableLabel': 'Right lower lung',
        'fqn': 'respiratory.rll'
      },
      {
        'elementKey': 'aSpacer3',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'respiratory.aSpacer3'
      },
      {
        'elementKey': 'respiratoryRhythm',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Respiratory rhythm',
        'options': [
          {
            'key': 'Regular',
            'text': 'Regular'
          },
          {
            'key': 'Irregular',
            'text': 'Irregular'
          },
          {
            'key': 'Paradoxical',
            'text': 'Paradoxical'
          }
        ],
        'tableColumn': '10',
        'tableLabel': 'Respiratory rhythm',
        'fqn': 'respiratory.respiratoryRhythm'
      },
      {
        'elementKey': 'respiratoryDepth',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Respiratory depth',
        'options': [
          {
            'key': 'Normal',
            'text': 'Normal'
          },
          {
            'key': 'Shallow',
            'text': 'Shallow'
          },
          {
            'key': 'Deep',
            'text': 'Deep'
          }
        ],
        'tableColumn': '11',
        'tableLabel': 'Respiratory depth',
        'fqn': 'respiratory.respiratoryDepth'
      },
      {
        'elementKey': 'aSpacer4',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'respiratory.aSpacer4'
      },
      {
        'elementKey': 'cough',
        'formIndex': '1',
        'formCss': 'grid-new-subsection',
        'inputType': 'select',
        'label': 'Cough',
        'options': [
          {
            'key': 'No',
            'text': 'No'
          },
          {
            'key': 'Nonproductive',
            'text': 'Nonproductive'
          },
          {
            'key': 'Productive',
            'text': 'Productive'
          }
        ],
        'tableColumn': '12',
        'tableLabel': 'Cough',
        'fqn': 'respiratory.cough'
      },
      {
        'elementKey': 'sputumColour',
        'formIndex': '1',
        'formCss': 'grid-new-subsection',
        'inputType': 'select',
        'label': 'Sputum colour',
        'options': [
          {
            'key': 'Mucoid',
            'text': 'Mucoid'
          },
          {
            'key': 'Purulent',
            'text': 'Purulent'
          },
          {
            'key': 'Yellow-green',
            'text': 'Yellow-green'
          },
          {
            'key': 'Rust-coloured',
            'text': 'Rust-coloured'
          },
          {
            'key': 'Pink, blood tinged',
            'text': 'Pink, blood tinged'
          },
          {
            'key': 'Pink, frothy',
            'text': 'Pink, frothy'
          },
          {
            'key': 'Profuse, colourless',
            'text': 'Profuse, colourless'
          },
          {
            'key': 'Bloody',
            'text': 'Bloody'
          }
        ],
        'tableColumn': '13',
        'tableLabel': 'Sputum colour',
        'fqn': 'respiratory.sputumColour'
      },
      {
        'elementKey': 'sputumComments',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Sputum comments',
        'tableColumn': '14',
        'tableLabel': 'Sputum comments',
        'fqn': 'respiratory.sputumComments'
      },
      {
        'elementKey': 'generalComments',
        'formIndex': '1',
        'formCss': 'grid-span-3-columns',
        'inputType': 'textarea',
        'label': 'Comments',
        'tableColumn': '15',
        'tableLabel': 'Comments',
        'fqn': 'respiratory.generalComments'
      }
    ],
    'pageElements': {
      'table': {
        'elementKey': 'table',
        'pageElementIndex': '1',
        'pageKey': 'respiratory',
        'tableKey': 'table',
        'isTable': true,
        'label': 'Respiratory assessment',
        'addButtonText': 'Add a respiratory assessment',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'table_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'table_name',
              'table_profession',
              'table_day',
              'table_time'
            ]
          },
          {
            'label': 'Airway',
            'ehr_list_index': '2',
            'items': [
              'airway'
            ]
          },
          {
            'label': 'Oxygen therapy',
            'ehr_list_index': '3',
            'items': [
              'oxygenTherapy'
            ]
          },
          {
            'label': 'Flow rate',
            'ehr_list_index': '4',
            'items': [
              'flowRate'
            ]
          },
          {
            'label': 'Left upper lung',
            'ehr_list_index': '5',
            'items': [
              'lul'
            ]
          },
          {
            'label': 'Right upper lung',
            'ehr_list_index': '6',
            'items': [
              'rul'
            ]
          },
          {
            'label': 'Right middle lung',
            'ehr_list_index': '7',
            'items': [
              'rml'
            ]
          },
          {
            'label': 'Left lower lung',
            'ehr_list_index': '8',
            'items': [
              'lll'
            ]
          },
          {
            'label': 'Right lower lung',
            'ehr_list_index': '9',
            'items': [
              'rll'
            ]
          },
          {
            'label': 'Respiratory rhythm',
            'ehr_list_index': '10',
            'items': [
              'respiratoryRhythm'
            ]
          },
          {
            'label': 'Respiratory depth',
            'ehr_list_index': '11',
            'items': [
              'respiratoryDepth'
            ]
          },
          {
            'label': 'Cough',
            'ehr_list_index': '12',
            'items': [
              'cough'
            ]
          },
          {
            'label': 'Sputum colour',
            'ehr_list_index': '13',
            'items': [
              'sputumColour'
            ]
          },
          {
            'label': 'Sputum comments',
            'ehr_list_index': '14',
            'items': [
              'sputumComments'
            ]
          },
          {
            'label': 'Comments',
            'ehr_list_index': '15',
            'items': [
              'generalComments'
            ]
          }
        ],
        'form': {
          'elementKey': 'table',
          'label': 'Respiratory assessment',
          'addButtonText': 'Add a respiratory assessment',
          'formOption': 'transpose',
          'formKey': 'table',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group55',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'table_name',
                'table_profession',
                'table_day',
                'table_time'
              ]
            },
            {
              'elementKey': 'ehr_group56',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'airway',
                'oxygenTherapy',
                'flowRate'
              ]
            },
            {
              'elementKey': 'ehr_group57',
              'label': 'Lungs',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '3',
              'gChildren': [
                'lul',
                'rul',
                'aSpacer2',
                'rml',
                'lll',
                'rll',
                'aSpacer3'
              ]
            },
            {
              'elementKey': 'ehr_group58',
              'label': 'Characteristics',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '4',
              'gChildren': [
                'respiratoryRhythm',
                'respiratoryDepth',
                'aSpacer4',
                'cough',
                'sputumColour',
                'sputumComments',
                'generalComments'
              ]
            }
          ],
          'ehr_data': {
            'table_name': '',
            'table_profession': '',
            'table_day': '',
            'table_time': '',
            'airway': '',
            'oxygenTherapy': '',
            'flowRate': '',
            'lul': '',
            'rul': '',
            'rml': '',
            'lll': '',
            'rll': '',
            'respiratoryRhythm': '',
            'respiratoryDepth': '',
            'cough': '',
            'sputumColour': '',
            'sputumComments': '',
            'generalComments': ''
          }
        },
        'tableChildren': [
          'table_id',
          'table_name',
          'table_profession',
          'table_day',
          'table_time',
          'airway',
          'oxygenTherapy',
          'flowRate',
          'lul',
          'rul',
          'rml',
          'lll',
          'rll',
          'respiratoryRhythm',
          'respiratoryDepth',
          'cough',
          'sputumColour',
          'sputumComments',
          'generalComments'
        ],
        'hasRecHeader': true
      }
    }
  },
  'cardiovascular': {
    'pageDataKey': 'cardiovascular',
    'pageTitle': 'Cardiovascular assessment',
    'pIndex': '16',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'table_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'cardiovascular.name'
      },
      {
        'elementKey': 'table_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'table_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'cardiovascular.profession'
      },
      {
        'elementKey': 'table_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'cardiovascular.day'
      },
      {
        'elementKey': 'table_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'cardiovascular.time'
      },
      {
        'elementKey': 'pulse',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Pulse',
        'options': [
          {
            'key': 'Regular',
            'text': 'Regular'
          },
          {
            'key': 'Irregular',
            'text': 'Irregular'
          },
          {
            'key': 'Normal',
            'text': 'Normal'
          },
          {
            'key': 'Weak',
            'text': 'Weak'
          },
          {
            'key': 'Bounding',
            'text': 'Bounding'
          }
        ],
        'tableColumn': '2',
        'tableLabel': 'Pulse',
        'fqn': 'cardiovascular.pulse'
      },
      {
        'elementKey': 'skinAppearance',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Skin appearance',
        'options': [
          {
            'key': 'Normal',
            'text': 'Normal'
          },
          {
            'key': 'Pale',
            'text': 'Pale'
          },
          {
            'key': 'Mottled',
            'text': 'Mottled'
          },
          {
            'key': 'Cyanotic',
            'text': 'Cyanotic'
          },
          {
            'key': 'Flushed',
            'text': 'Flushed'
          },
          {
            'key': 'Jaundiced',
            'text': 'Jaundiced'
          }
        ],
        'tableColumn': '3',
        'tableLabel': 'Skin appearance',
        'fqn': 'cardiovascular.skinAppearance'
      },
      {
        'elementKey': 'spacer62',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'cardiovascular.spacer62'
      },
      {
        'elementKey': 'labelCapRefill',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'Capillary refill',
        'fqn': 'cardiovascular.labelCapRefill'
      },
      {
        'elementKey': 'labelTemperature',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'Temperature',
        'fqn': 'cardiovascular.labelTemperature'
      },
      {
        'elementKey': 'labelPeripheral',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'Peripheral edema',
        'fqn': 'cardiovascular.labelPeripheral'
      },
      {
        'elementKey': 'labelNailBed',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'Nail bed colour',
        'fqn': 'cardiovascular.labelNailBed'
      },
      {
        'elementKey': 'form_label64',
        'formIndex': '1',
        'formCss': 'bold-text',
        'inputType': 'form_label',
        'label': 'Left hand',
        'fqn': 'cardiovascular.form_label64'
      },
      {
        'elementKey': 'capRefillLeftHand',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'select',
        'options': [
          {
            'key': 'Normal < 3 seconds',
            'text': 'Normal < 3 seconds'
          },
          {
            'key': 'Delayed > 3 seconds',
            'text': 'Delayed > 3 seconds'
          }
        ],
        'tableColumn': '4',
        'tableLabel': 'Cap refill: Right hand',
        'fqn': 'cardiovascular.capRefillLeftHand'
      },
      {
        'elementKey': 'temperatureRightHand',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'select',
        'options': [
          {
            'key': 'Warm',
            'text': 'Warm'
          },
          {
            'key': 'Cool',
            'text': 'Cool'
          },
          {
            'key': 'Hot',
            'text': 'Hot'
          }
        ],
        'tableColumn': '5',
        'tableLabel': 'Temperature: Right hand',
        'fqn': 'cardiovascular.temperatureRightHand'
      },
      {
        'elementKey': 'peripheralEdemaRightHand',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'select',
        'options': [
          {
            'key': 'No',
            'text': 'No'
          },
          {
            'key': 'Ankle',
            'text': 'Ankle'
          },
          {
            'key': 'Pedal',
            'text': 'Pedal'
          },
          {
            'key': 'Sacral',
            'text': 'Sacral'
          },
          {
            'key': 'Pitting',
            'text': 'Pitting'
          }
        ],
        'tableColumn': '6',
        'tableLabel': 'Peripheral edema: Right hand',
        'fqn': 'cardiovascular.peripheralEdemaRightHand'
      },
      {
        'elementKey': 'nailBedColourRightHand',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'select',
        'options': [
          {
            'key': 'Pink',
            'text': 'Pink'
          },
          {
            'key': 'Cyanotic',
            'text': 'Cyanotic'
          }
        ],
        'tableColumn': '7',
        'tableLabel': 'Nail bed colour: Right hand',
        'fqn': 'cardiovascular.nailBedColourRightHand'
      },
      {
        'elementKey': 'form_label66',
        'formIndex': '1',
        'formCss': 'bold-text',
        'inputType': 'form_label',
        'label': 'Right hand',
        'fqn': 'cardiovascular.form_label66'
      },
      {
        'elementKey': 'capRefillRightHand',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'select',
        'options': [
          {
            'key': 'Normal < 3 seconds',
            'text': 'Normal < 3 seconds'
          },
          {
            'key': 'Delayed > 3 seconds',
            'text': 'Delayed > 3 seconds'
          }
        ],
        'tableColumn': '8',
        'tableLabel': 'Cap refill: Left hand',
        'fqn': 'cardiovascular.capRefillRightHand'
      },
      {
        'elementKey': 'temperatureLeftHand',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'select',
        'options': [
          {
            'key': 'Warm',
            'text': 'Warm'
          },
          {
            'key': 'Cool',
            'text': 'Cool'
          },
          {
            'key': 'Hot',
            'text': 'Hot'
          }
        ],
        'tableColumn': '9',
        'tableLabel': 'Temperature: Left hand',
        'fqn': 'cardiovascular.temperatureLeftHand'
      },
      {
        'elementKey': 'peripheralEdemaLeftHand',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'select',
        'options': [
          {
            'key': 'No',
            'text': 'No'
          },
          {
            'key': 'Ankle',
            'text': 'Ankle'
          },
          {
            'key': 'Pedal',
            'text': 'Pedal'
          },
          {
            'key': 'Sacral',
            'text': 'Sacral'
          },
          {
            'key': 'Pitting',
            'text': 'Pitting'
          }
        ],
        'tableColumn': '10',
        'tableLabel': 'Peripheral edema: Left hand',
        'fqn': 'cardiovascular.peripheralEdemaLeftHand'
      },
      {
        'elementKey': 'nailBedColourLeftHand',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'select',
        'options': [
          {
            'key': 'Pink',
            'text': 'Pink'
          },
          {
            'key': 'Cyanotic',
            'text': 'Cyanotic'
          }
        ],
        'tableColumn': '11',
        'tableLabel': 'Nail bed colour: Left hand',
        'fqn': 'cardiovascular.nailBedColourLeftHand'
      },
      {
        'elementKey': 'form_label68',
        'formIndex': '1',
        'formCss': 'bold-text',
        'inputType': 'form_label',
        'label': 'Right foot',
        'fqn': 'cardiovascular.form_label68'
      },
      {
        'elementKey': 'capRefillRightFoot',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'select',
        'options': [
          {
            'key': 'Normal < 3 seconds',
            'text': 'Normal < 3 seconds'
          },
          {
            'key': 'Delayed > 3 seconds',
            'text': 'Delayed > 3 seconds'
          }
        ],
        'tableColumn': '12',
        'tableLabel': 'Cap refill: Right foot',
        'fqn': 'cardiovascular.capRefillRightFoot'
      },
      {
        'elementKey': 'temperatureRightFoot',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'select',
        'options': [
          {
            'key': 'Warm',
            'text': 'Warm'
          },
          {
            'key': 'Cool',
            'text': 'Cool'
          },
          {
            'key': 'Hot',
            'text': 'Hot'
          }
        ],
        'tableColumn': '13',
        'tableLabel': 'Temperature: Right foot',
        'fqn': 'cardiovascular.temperatureRightFoot'
      },
      {
        'elementKey': 'peripheralEdemaRightFoot',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'select',
        'options': [
          {
            'key': 'No',
            'text': 'No'
          },
          {
            'key': 'Ankle',
            'text': 'Ankle'
          },
          {
            'key': 'Pedal',
            'text': 'Pedal'
          },
          {
            'key': 'Sacral',
            'text': 'Sacral'
          },
          {
            'key': 'Pitting',
            'text': 'Pitting'
          }
        ],
        'tableColumn': '14',
        'tableLabel': 'Peripheral edema: Right foot',
        'fqn': 'cardiovascular.peripheralEdemaRightFoot'
      },
      {
        'elementKey': 'nailBedColourRightFoot',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'select',
        'options': [
          {
            'key': 'Pink',
            'text': 'Pink'
          },
          {
            'key': 'Cyanotic',
            'text': 'Cyanotic'
          }
        ],
        'tableColumn': '15',
        'tableLabel': 'Nail bed colour: Right Foot',
        'fqn': 'cardiovascular.nailBedColourRightFoot'
      },
      {
        'elementKey': 'form_label70',
        'formIndex': '1',
        'formCss': 'bold-text',
        'inputType': 'form_label',
        'label': 'Left foot',
        'fqn': 'cardiovascular.form_label70'
      },
      {
        'elementKey': 'capRefillLeftFoot',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'select',
        'options': [
          {
            'key': 'Normal < 3 seconds',
            'text': 'Normal < 3 seconds'
          },
          {
            'key': 'Delayed > 3 seconds',
            'text': 'Delayed > 3 seconds'
          }
        ],
        'tableColumn': '16',
        'tableLabel': 'Cap refill: Left foot',
        'fqn': 'cardiovascular.capRefillLeftFoot'
      },
      {
        'elementKey': 'temperatureLeftFoot',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'select',
        'options': [
          {
            'key': 'Warm',
            'text': 'Warm'
          },
          {
            'key': 'Cool',
            'text': 'Cool'
          },
          {
            'key': 'Hot',
            'text': 'Hot'
          }
        ],
        'tableColumn': '17',
        'tableLabel': 'Temperature: Left foot',
        'fqn': 'cardiovascular.temperatureLeftFoot'
      },
      {
        'elementKey': 'peripheralEdemaLeftFoot',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'select',
        'options': [
          {
            'key': 'No',
            'text': 'No'
          },
          {
            'key': 'Ankle',
            'text': 'Ankle'
          },
          {
            'key': 'Pedal',
            'text': 'Pedal'
          },
          {
            'key': 'Sacral',
            'text': 'Sacral'
          },
          {
            'key': 'Pitting',
            'text': 'Pitting'
          }
        ],
        'tableColumn': '18',
        'tableLabel': 'Peripheral edema: Left foot',
        'fqn': 'cardiovascular.peripheralEdemaLeftFoot'
      },
      {
        'elementKey': 'nailBedColourLeftFoot',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'select',
        'options': [
          {
            'key': 'Pink',
            'text': 'Pink'
          },
          {
            'key': 'Cyanotic',
            'text': 'Cyanotic'
          }
        ],
        'tableColumn': '19',
        'tableLabel': 'Nail bed colour: Left foot',
        'fqn': 'cardiovascular.nailBedColourLeftFoot'
      },
      {
        'elementKey': 'comments',
        'formIndex': '1',
        'inputType': 'textarea',
        'label': 'Comments',
        'tableColumn': '20',
        'tableLabel': 'Comments',
        'fqn': 'cardiovascular.comments'
      }
    ],
    'pageElements': {
      'table': {
        'elementKey': 'table',
        'pageElementIndex': '1',
        'pageKey': 'cardiovascular',
        'tableKey': 'table',
        'isTable': true,
        'label': 'Cardiovascular assessment',
        'addButtonText': 'Add a cardiovascular assessment',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'table_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'table_name',
              'table_profession',
              'table_day',
              'table_time'
            ]
          },
          {
            'label': 'Pulse',
            'ehr_list_index': '2',
            'items': [
              'pulse'
            ]
          },
          {
            'label': 'Skin appearance',
            'ehr_list_index': '3',
            'items': [
              'skinAppearance'
            ]
          },
          {
            'label': 'Cap refill: Right hand',
            'ehr_list_index': '4',
            'items': [
              'capRefillLeftHand'
            ]
          },
          {
            'label': 'Temperature: Right hand',
            'ehr_list_index': '5',
            'items': [
              'temperatureRightHand'
            ]
          },
          {
            'label': 'Peripheral edema: Right hand',
            'ehr_list_index': '6',
            'items': [
              'peripheralEdemaRightHand'
            ]
          },
          {
            'label': 'Nail bed colour: Right hand',
            'ehr_list_index': '7',
            'items': [
              'nailBedColourRightHand'
            ]
          },
          {
            'label': 'Cap refill: Left hand',
            'ehr_list_index': '8',
            'items': [
              'capRefillRightHand'
            ]
          },
          {
            'label': 'Temperature: Left hand',
            'ehr_list_index': '9',
            'items': [
              'temperatureLeftHand'
            ]
          },
          {
            'label': 'Peripheral edema: Left hand',
            'ehr_list_index': '10',
            'items': [
              'peripheralEdemaLeftHand'
            ]
          },
          {
            'label': 'Nail bed colour: Left hand',
            'ehr_list_index': '11',
            'items': [
              'nailBedColourLeftHand'
            ]
          },
          {
            'label': 'Cap refill: Right foot',
            'ehr_list_index': '12',
            'items': [
              'capRefillRightFoot'
            ]
          },
          {
            'label': 'Temperature: Right foot',
            'ehr_list_index': '13',
            'items': [
              'temperatureRightFoot'
            ]
          },
          {
            'label': 'Peripheral edema: Right foot',
            'ehr_list_index': '14',
            'items': [
              'peripheralEdemaRightFoot'
            ]
          },
          {
            'label': 'Nail bed colour: Right Foot',
            'ehr_list_index': '15',
            'items': [
              'nailBedColourRightFoot'
            ]
          },
          {
            'label': 'Cap refill: Left foot',
            'ehr_list_index': '16',
            'items': [
              'capRefillLeftFoot'
            ]
          },
          {
            'label': 'Temperature: Left foot',
            'ehr_list_index': '17',
            'items': [
              'temperatureLeftFoot'
            ]
          },
          {
            'label': 'Peripheral edema: Left foot',
            'ehr_list_index': '18',
            'items': [
              'peripheralEdemaLeftFoot'
            ]
          },
          {
            'label': 'Nail bed colour: Left foot',
            'ehr_list_index': '19',
            'items': [
              'nailBedColourLeftFoot'
            ]
          },
          {
            'label': 'Comments',
            'ehr_list_index': '20',
            'items': [
              'comments'
            ]
          }
        ],
        'form': {
          'elementKey': 'table',
          'label': 'Cardiovascular assessment',
          'addButtonText': 'Add a cardiovascular assessment',
          'formOption': 'transpose',
          'formKey': 'table',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group59',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'table_name',
                'table_profession',
                'table_day',
                'table_time'
              ]
            },
            {
              'elementKey': 'ehr_group60',
              'label': 'General',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'pulse',
                'skinAppearance'
              ]
            },
            {
              'elementKey': 'ehr_group61',
              'label': 'Extremities',
              'formCss': 'grid-left-to-right-5',
              'gIndex': '3',
              'gChildren': [
                'spacer62',
                'labelCapRefill',
                'labelTemperature',
                'labelPeripheral',
                'labelNailBed'
              ]
            },
            {
              'elementKey': 'ehr_group63',
              'formCss': 'grid-left-to-right-5 cardio-group',
              'gIndex': '4',
              'gChildren': [
                'form_label64',
                'capRefillLeftHand',
                'temperatureRightHand',
                'peripheralEdemaRightHand',
                'nailBedColourRightHand'
              ]
            },
            {
              'elementKey': 'ehr_group65',
              'formCss': 'grid-left-to-right-5 cardio-group',
              'gIndex': '5',
              'gChildren': [
                'form_label66',
                'capRefillRightHand',
                'temperatureLeftHand',
                'peripheralEdemaLeftHand',
                'nailBedColourLeftHand'
              ]
            },
            {
              'elementKey': 'ehr_group67',
              'formCss': 'grid-left-to-right-5 cardio-group',
              'gIndex': '6',
              'gChildren': [
                'form_label68',
                'capRefillRightFoot',
                'temperatureRightFoot',
                'peripheralEdemaRightFoot',
                'nailBedColourRightFoot'
              ]
            },
            {
              'elementKey': 'ehr_group69',
              'formCss': 'grid-left-to-right-5 cardio-group',
              'gIndex': '7',
              'gChildren': [
                'form_label70',
                'capRefillLeftFoot',
                'temperatureLeftFoot',
                'peripheralEdemaLeftFoot',
                'nailBedColourLeftFoot'
              ]
            },
            {
              'elementKey': 'ehr_group71',
              'label': 'Comments',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '8',
              'gChildren': [
                'comments'
              ]
            }
          ],
          'ehr_data': {
            'table_name': '',
            'table_profession': '',
            'table_day': '',
            'table_time': '',
            'pulse': '',
            'skinAppearance': '',
            'capRefillLeftHand': '',
            'temperatureRightHand': '',
            'peripheralEdemaRightHand': '',
            'nailBedColourRightHand': '',
            'capRefillRightHand': '',
            'temperatureLeftHand': '',
            'peripheralEdemaLeftHand': '',
            'nailBedColourLeftHand': '',
            'capRefillRightFoot': '',
            'temperatureRightFoot': '',
            'peripheralEdemaRightFoot': '',
            'nailBedColourRightFoot': '',
            'capRefillLeftFoot': '',
            'temperatureLeftFoot': '',
            'peripheralEdemaLeftFoot': '',
            'nailBedColourLeftFoot': '',
            'comments': ''
          }
        },
        'tableChildren': [
          'table_id',
          'table_name',
          'table_profession',
          'table_day',
          'table_time',
          'pulse',
          'skinAppearance',
          'capRefillLeftHand',
          'temperatureRightHand',
          'peripheralEdemaRightHand',
          'nailBedColourRightHand',
          'capRefillRightHand',
          'temperatureLeftHand',
          'peripheralEdemaLeftHand',
          'nailBedColourLeftHand',
          'capRefillRightFoot',
          'temperatureRightFoot',
          'peripheralEdemaRightFoot',
          'nailBedColourRightFoot',
          'capRefillLeftFoot',
          'temperatureLeftFoot',
          'peripheralEdemaLeftFoot',
          'nailBedColourLeftFoot',
          'comments'
        ],
        'hasRecHeader': true
      }
    }
  },
  'gastrointestinal': {
    'pageDataKey': 'gastrointestinal',
    'pageTitle': 'Gastrointestinal assessment',
    'pIndex': '17',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'table_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'gastrointestinal.name'
      },
      {
        'elementKey': 'table_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'table_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'gastrointestinal.profession'
      },
      {
        'elementKey': 'table_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'gastrointestinal.day'
      },
      {
        'elementKey': 'table_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'gastrointestinal.time'
      },
      {
        'elementKey': 'bowel',
        'formIndex': '1',
        'inputType': 'checkset',
        'label': 'Bowel',
        'options': [
          {
            'key': 'normal',
            'text': 'Normal'
          },
          {
            'key': 'constipation',
            'text': 'Constipation'
          },
          {
            'key': 'diarrhea',
            'text': 'Diarrhea'
          },
          {
            'key': 'melena',
            'text': 'Melena'
          },
          {
            'key': 'incontinent',
            'text': 'Incontinent'
          }
        ],
        'tableColumn': '2',
        'tableLabel': 'Bowel',
        'fqn': 'gastrointestinal.bowel'
      },
      {
        'elementKey': 'bSounds',
        'formIndex': '1',
        'inputType': 'checkset',
        'label': 'Bowel sounds',
        'options': [
          {
            'key': 'none',
            'text': 'None'
          },
          {
            'key': 'luq',
            'text': 'LUQ'
          },
          {
            'key': 'ruq',
            'text': 'RUQ'
          },
          {
            'key': 'llq',
            'text': 'LLQ'
          },
          {
            'key': 'rlq',
            'text': 'RLQ'
          },
          {
            'key': 'hypoactive',
            'text': 'Hypoactive'
          },
          {
            'key': 'hyperactive',
            'text': 'Hyperactive'
          }
        ],
        'tableColumn': '3',
        'tableLabel': 'Bowel sounds',
        'fqn': 'gastrointestinal.bSounds'
      },
      {
        'elementKey': 'condition',
        'formIndex': '1',
        'inputType': 'checkset',
        'label': 'Abdomen',
        'options': [
          {
            'key': 'soft',
            'text': 'Soft'
          },
          {
            'key': 'tender',
            'text': 'Tender'
          },
          {
            'key': 'rigid',
            'text': 'Rigid'
          },
          {
            'key': 'guarding',
            'text': 'Guarding'
          },
          {
            'key': 'distended',
            'text': 'Distended'
          },
          {
            'key': 'scars',
            'text': 'Scars'
          }
        ],
        'tableColumn': '4',
        'tableLabel': 'Abdomen',
        'fqn': 'gastrointestinal.condition'
      },
      {
        'elementKey': 'spacer74',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'gastrointestinal.spacer74'
      },
      {
        'elementKey': 'spacer75',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'gastrointestinal.spacer75'
      },
      {
        'elementKey': 'pain',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Abdominal pain',
        'options': [
          {
            'key': 'Yes',
            'text': 'Yes'
          },
          {
            'key': 'No',
            'text': 'No'
          }
        ],
        'tableColumn': '5',
        'tableLabel': 'Abdominal pain',
        'fqn': 'gastrointestinal.pain'
      },
      {
        'elementKey': 'spacer76',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'gastrointestinal.spacer76'
      },
      {
        'elementKey': 'spacer77',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'gastrointestinal.spacer77'
      },
      {
        'elementKey': 'aLabel',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'If answered yes, please complete the <a href=\'/assets/standardized-assessment-tools/numeric-rating-scale.pdf\'>pain assessment</a>.',
        'fqn': 'gastrointestinal.aLabel'
      },
      {
        'elementKey': 'emesisPresent',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Emesis present?',
        'options': [
          {
            'key': 'None',
            'text': 'None'
          },
          {
            'key': 'Nausea',
            'text': 'Nausea'
          },
          {
            'key': 'Vomiting',
            'text': 'Vomiting'
          }
        ],
        'tableColumn': '6',
        'tableLabel': 'Emesis present?',
        'fqn': 'gastrointestinal.emesisPresent'
      },
      {
        'elementKey': 'colour',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Emesis colour',
        'options': [
          {
            'key': 'Greenish-yellow',
            'text': 'Greenish-yellow'
          },
          {
            'key': 'Blood-tinged',
            'text': 'Blood-tinged'
          },
          {
            'key': 'Bright red',
            'text': 'Bright red'
          },
          {
            'key': 'Dark red',
            'text': 'Dark red'
          },
          {
            'key': 'Black',
            'text': 'Black'
          }
        ],
        'tableColumn': '7',
        'tableLabel': 'Emesis colour',
        'fqn': 'gastrointestinal.colour'
      },
      {
        'elementKey': 'amount',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Approximate volume',
        'options': [
          {
            'key': 'Small',
            'text': 'Small'
          },
          {
            'key': 'Moderate',
            'text': 'Moderate'
          },
          {
            'key': 'Large',
            'text': 'Large'
          }
        ],
        'tableColumn': '8',
        'tableLabel': 'Approximate volume',
        'fqn': 'gastrointestinal.amount'
      },
      {
        'elementKey': 'description',
        'formIndex': '1',
        'formCss': 'grid-span-3-columns',
        'inputType': 'textarea',
        'label': 'Description',
        'tableColumn': '9',
        'tableLabel': 'Description',
        'fqn': 'gastrointestinal.description'
      },
      {
        'elementKey': 'eating',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Difficulty',
        'options': [
          {
            'key': 'Regular',
            'text': 'Regular'
          },
          {
            'key': 'Difficult',
            'text': 'Difficult'
          }
        ],
        'tableColumn': '10',
        'tableLabel': 'Difficulty',
        'fqn': 'gastrointestinal.eating'
      },
      {
        'elementKey': 'reason',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Reason',
        'tableColumn': '11',
        'tableLabel': 'Reason',
        'fqn': 'gastrointestinal.reason'
      },
      {
        'elementKey': 'spacer78',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'gastrointestinal.spacer78'
      },
      {
        'elementKey': 'npoSinceDay',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'NPO since day',
        'tableColumn': '12',
        'tableLabel': 'NPO since day',
        'fqn': 'gastrointestinal.npoSinceDay'
      },
      {
        'elementKey': 'npoSinceTime',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'NPO since time',
        'tableColumn': '13',
        'tableLabel': 'NPO since time',
        'fqn': 'gastrointestinal.npoSinceTime'
      },
      {
        'elementKey': 'weightLoss',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Weight loss',
        'tableColumn': '14',
        'tableLabel': 'Weight loss',
        'fqn': 'gastrointestinal.weightLoss'
      },
      {
        'elementKey': 'lastBm',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Last bowel movement',
        'tableColumn': '15',
        'tableLabel': 'Last bowel movement',
        'fqn': 'gastrointestinal.lastBm'
      },
      {
        'elementKey': 'stoolColour',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Stool colour',
        'options': [
          {
            'key': 'Brown',
            'text': 'Brown'
          },
          {
            'key': 'Green',
            'text': 'Green'
          },
          {
            'key': 'Clay coloured',
            'text': 'Clay coloured'
          },
          {
            'key': 'Yellow',
            'text': 'Yellow'
          },
          {
            'key': 'Black',
            'text': 'Black'
          },
          {
            'key': 'Bright red',
            'text': 'Bright red'
          },
          {
            'key': 'Dark red',
            'text': 'Dark red'
          }
        ],
        'tableColumn': '16',
        'tableLabel': 'Stool colour',
        'fqn': 'gastrointestinal.stoolColour'
      },
      {
        'elementKey': 'stoolDescription',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Description',
        'options': [
          {
            'key': 'Runny',
            'text': 'Runny'
          },
          {
            'key': 'Hard pellets',
            'text': 'Hard pellets'
          }
        ],
        'tableColumn': '17',
        'tableLabel': 'Description',
        'fqn': 'gastrointestinal.stoolDescription'
      },
      {
        'elementKey': 'stoolAmount',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Amount',
        'tableColumn': '18',
        'tableLabel': 'Amount',
        'fqn': 'gastrointestinal.stoolAmount'
      },
      {
        'elementKey': 'stoolSource',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Source',
        'options': [
          {
            'key': 'Observed',
            'text': 'Observed'
          },
          {
            'key': 'As per patient observed',
            'text': 'As per patient observed'
          },
          {
            'key': 'Not observed',
            'text': 'Not observed'
          }
        ],
        'tableColumn': '19',
        'tableLabel': 'Source',
        'fqn': 'gastrointestinal.stoolSource'
      },
      {
        'elementKey': 'comments',
        'formIndex': '1',
        'inputType': 'textarea',
        'label': 'Comments',
        'tableColumn': '20',
        'tableLabel': 'Comments',
        'fqn': 'gastrointestinal.comments'
      }
    ],
    'pageElements': {
      'table': {
        'elementKey': 'table',
        'pageElementIndex': '1',
        'pageKey': 'gastrointestinal',
        'tableKey': 'table',
        'isTable': true,
        'label': 'Gastrointestinal assessment',
        'addButtonText': 'Add a gastrointestinal assessment',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'table_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'table_name',
              'table_profession',
              'table_day',
              'table_time'
            ]
          },
          {
            'label': 'Bowel',
            'ehr_list_index': '2',
            'items': [
              'bowel'
            ]
          },
          {
            'label': 'Bowel sounds',
            'ehr_list_index': '3',
            'items': [
              'bSounds'
            ]
          },
          {
            'label': 'Abdomen',
            'ehr_list_index': '4',
            'items': [
              'condition'
            ]
          },
          {
            'label': 'Abdominal pain',
            'ehr_list_index': '5',
            'items': [
              'pain'
            ]
          },
          {
            'label': 'Emesis present?',
            'ehr_list_index': '6',
            'items': [
              'emesisPresent'
            ]
          },
          {
            'label': 'Emesis colour',
            'ehr_list_index': '7',
            'items': [
              'colour'
            ]
          },
          {
            'label': 'Approximate volume',
            'ehr_list_index': '8',
            'items': [
              'amount'
            ]
          },
          {
            'label': 'Description',
            'ehr_list_index': '9',
            'items': [
              'description'
            ]
          },
          {
            'label': 'Difficulty',
            'ehr_list_index': '10',
            'items': [
              'eating'
            ]
          },
          {
            'label': 'Reason',
            'ehr_list_index': '11',
            'items': [
              'reason'
            ]
          },
          {
            'label': 'NPO since day',
            'ehr_list_index': '12',
            'items': [
              'npoSinceDay'
            ]
          },
          {
            'label': 'NPO since time',
            'ehr_list_index': '13',
            'items': [
              'npoSinceTime'
            ]
          },
          {
            'label': 'Weight loss',
            'ehr_list_index': '14',
            'items': [
              'weightLoss'
            ]
          },
          {
            'label': 'Last bowel movement',
            'ehr_list_index': '15',
            'items': [
              'lastBm'
            ]
          },
          {
            'label': 'Stool colour',
            'ehr_list_index': '16',
            'items': [
              'stoolColour'
            ]
          },
          {
            'label': 'Description',
            'ehr_list_index': '17',
            'items': [
              'stoolDescription'
            ]
          },
          {
            'label': 'Amount',
            'ehr_list_index': '18',
            'items': [
              'stoolAmount'
            ]
          },
          {
            'label': 'Source',
            'ehr_list_index': '19',
            'items': [
              'stoolSource'
            ]
          },
          {
            'label': 'Comments',
            'ehr_list_index': '20',
            'items': [
              'comments'
            ]
          }
        ],
        'form': {
          'elementKey': 'table',
          'label': 'Gastrointestinal assessment',
          'addButtonText': 'Add a gastrointestinal assessment',
          'formOption': 'transpose',
          'formKey': 'table',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group72',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'table_name',
                'table_profession',
                'table_day',
                'table_time'
              ]
            },
            {
              'elementKey': 'ehr_group73',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'bowel',
                'bSounds',
                'condition',
                'spacer74',
                'spacer75',
                'pain',
                'spacer76',
                'spacer77',
                'aLabel'
              ]
            },
            {
              'elementKey': 'emesis',
              'label': 'Emesis',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '3',
              'gChildren': [
                'emesisPresent',
                'colour',
                'amount',
                'description'
              ]
            },
            {
              'elementKey': 'eatingGroup',
              'label': 'Eating',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '4',
              'gChildren': [
                'eating',
                'reason',
                'spacer78',
                'npoSinceDay',
                'npoSinceTime',
                'weightLoss'
              ]
            },
            {
              'elementKey': 'stool',
              'label': 'Stool',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '5',
              'gChildren': [
                'lastBm',
                'stoolColour',
                'stoolDescription',
                'stoolAmount',
                'stoolSource'
              ]
            },
            {
              'elementKey': 'ehr_group79',
              'formCss': 'grid-left-to-right-1 section-divider',
              'gIndex': '6',
              'gChildren': [
                'comments'
              ]
            }
          ],
          'ehr_data': {
            'table_name': '',
            'table_profession': '',
            'table_day': '',
            'table_time': '',
            'bowel': '',
            'bSounds': '',
            'condition': '',
            'pain': '',
            'emesisPresent': '',
            'colour': '',
            'amount': '',
            'description': '',
            'eating': '',
            'reason': '',
            'npoSinceDay': '',
            'npoSinceTime': '',
            'weightLoss': '',
            'lastBm': '',
            'stoolColour': '',
            'stoolDescription': '',
            'stoolAmount': '',
            'stoolSource': '',
            'comments': ''
          }
        },
        'tableChildren': [
          'table_id',
          'table_name',
          'table_profession',
          'table_day',
          'table_time',
          'bowel',
          'bSounds',
          'condition',
          'pain',
          'emesisPresent',
          'colour',
          'amount',
          'description',
          'eating',
          'reason',
          'npoSinceDay',
          'npoSinceTime',
          'weightLoss',
          'lastBm',
          'stoolColour',
          'stoolDescription',
          'stoolAmount',
          'stoolSource',
          'comments'
        ],
        'hasRecHeader': true
      }
    }
  },
  'genitourinary': {
    'pageDataKey': 'genitourinary',
    'pageTitle': 'Genitourinary assessment',
    'pIndex': '18',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'table_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'genitourinary.name'
      },
      {
        'elementKey': 'table_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'table_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'genitourinary.profession'
      },
      {
        'elementKey': 'table_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'genitourinary.day'
      },
      {
        'elementKey': 'table_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'genitourinary.time'
      },
      {
        'elementKey': 'urinaryGroup1',
        'formIndex': '1',
        'inputType': 'checkset',
        'label': 'Urinary symptoms',
        'options': [
          {
            'key': 'none',
            'text': 'None'
          },
          {
            'key': 'increasedFrequency',
            'text': 'Increased frequency'
          },
          {
            'key': 'dysuria',
            'text': 'Dysuria'
          },
          {
            'key': 'hermaturia',
            'text': 'Hermaturia'
          },
          {
            'key': 'oliguria',
            'text': 'Oliguria'
          },
          {
            'key': 'incontinence',
            'text': 'Incontinence'
          },
          {
            'key': 'retention',
            'text': 'Retention'
          },
          {
            'key': 'distention',
            'text': 'Distention'
          }
        ],
        'tableColumn': '2',
        'tableLabel': 'Urinary symptoms',
        'fqn': 'genitourinary.urinaryGroup1'
      },
      {
        'elementKey': 'lastVoidedDay',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Last voided day',
        'tableColumn': '3',
        'tableLabel': 'Last voided day',
        'fqn': 'genitourinary.lastVoidedDay'
      },
      {
        'elementKey': 'lastVoidedTime',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Last voided time',
        'tableColumn': '4',
        'tableLabel': 'Last voided time',
        'fqn': 'genitourinary.lastVoidedTime'
      },
      {
        'elementKey': 'colour',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Urine colour',
        'options': [
          {
            'key': 'Pale yellow',
            'text': 'Pale yellow'
          },
          {
            'key': 'Dark yellow',
            'text': 'Dark yellow'
          },
          {
            'key': 'Amber',
            'text': 'Amber'
          },
          {
            'key': 'Red/blood',
            'text': 'Red/blood'
          },
          {
            'key': 'Other',
            'text': 'Other'
          }
        ],
        'tableColumn': '5',
        'tableLabel': 'Urine colour',
        'fqn': 'genitourinary.colour'
      },
      {
        'elementKey': 'consistency',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Urine consistency',
        'options': [
          {
            'key': 'Clear',
            'text': 'Clear'
          },
          {
            'key': 'Cloudy',
            'text': 'Cloudy'
          },
          {
            'key': 'Foamy',
            'text': 'Foamy'
          },
          {
            'key': 'Other',
            'text': 'Other'
          }
        ],
        'tableColumn': '6',
        'tableLabel': 'Urine consistency',
        'fqn': 'genitourinary.consistency'
      },
      {
        'elementKey': 'diaper',
        'formIndex': '1',
        'helperText': 'Does the patient need the assistance of a brief, condom catheter, or etc.',
        'inputType': 'select',
        'label': 'Continence containment device',
        'options': [
          {
            'key': 'Yes',
            'text': 'Yes'
          },
          {
            'key': 'No',
            'text': 'No'
          }
        ],
        'tableColumn': '7',
        'tableLabel': 'Continence containment device',
        'fqn': 'genitourinary.diaper',
        'helperHtml': '<p>Does the patient need the assistance of a brief, condom catheter, or etc.</p>'
      },
      {
        'elementKey': 'toilettingMethod',
        'formIndex': '1',
        'inputType': 'checkset',
        'label': 'Toiletting method',
        'options': [
          {
            'key': 'bedpan',
            'text': 'Bedpan'
          },
          {
            'key': 'comode',
            'text': 'Comode'
          },
          {
            'key': 'urinal',
            'text': 'Urinal'
          },
          {
            'key': 'helpToTheToilet',
            'text': 'Help to the toilet'
          },
          {
            'key': 'brief',
            'text': 'Brief'
          },
          {
            'key': 'meshPant/pad',
            'text': 'Mesh pant/pad'
          },
          {
            'key': 'cleanIntermittentCatheter',
            'text': 'Clean intermittent catheter'
          },
          {
            'key': 'indwellingCatheter',
            'text': 'Indwelling catheter'
          }
        ],
        'tableColumn': '8',
        'fqn': 'genitourinary.toilettingMethod'
      },
      {
        'elementKey': 'foley',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Indwelling Catheter',
        'options': [
          {
            'key': 'Yes',
            'text': 'Yes'
          },
          {
            'key': 'No',
            'text': 'No'
          }
        ],
        'tableColumn': '9',
        'tableLabel': 'Indwelling Catheter',
        'fqn': 'genitourinary.foley'
      },
      {
        'elementKey': 'foleyType',
        'formIndex': '1',
        'helperText': 'eg. indwelling catheter',
        'inputType': 'text',
        'label': 'Type',
        'tableColumn': '10',
        'tableLabel': 'Type',
        'fqn': 'genitourinary.foleyType',
        'helperHtml': '<p>eg. indwelling catheter</p>'
      },
      {
        'elementKey': 'foleySize',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Size',
        'tableColumn': '11',
        'tableLabel': 'Size',
        'fqn': 'genitourinary.foleySize'
      },
      {
        'elementKey': 'lastChange',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Last catheter change (day)',
        'tableColumn': '12',
        'tableLabel': 'Last catheter change (day)',
        'fqn': 'genitourinary.lastChange'
      },
      {
        'elementKey': 'lastChangeTime',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Last catheter change (time)',
        'tableColumn': '13',
        'tableLabel': 'Last catheter change (time)',
        'fqn': 'genitourinary.lastChangeTime'
      },
      {
        'elementKey': 'pelvicPain',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Pelvic pain',
        'options': [
          {
            'key': 'Yes',
            'text': 'Yes'
          },
          {
            'key': 'No',
            'text': 'No'
          }
        ],
        'tableColumn': '14',
        'tableLabel': 'Pelvic pain',
        'fqn': 'genitourinary.pelvicPain'
      },
      {
        'elementKey': 'location',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Location',
        'tableColumn': '15',
        'tableLabel': 'Location',
        'fqn': 'genitourinary.location'
      },
      {
        'elementKey': 'pelvicPainSource',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Pelvic pain source',
        'options': [
          {
            'key': 'Observed',
            'text': 'Observed'
          },
          {
            'key': 'As per patient observed',
            'text': 'As per patient observed'
          },
          {
            'key': 'Not observed',
            'text': 'Not observed'
          }
        ],
        'tableColumn': '16',
        'tableLabel': 'Pelvic pain source',
        'fqn': 'genitourinary.pelvicPainSource'
      },
      {
        'elementKey': 'aLabel',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'If answered yes, please complete the pain assessment',
        'fqn': 'genitourinary.aLabel'
      },
      {
        'elementKey': 'discharge',
        'formIndex': '1',
        'inputType': 'checkset',
        'label': 'Discharge',
        'options': [
          {
            'key': 'discharge',
            'text': 'Discharge'
          },
          {
            'key': 'bleeding',
            'text': 'Bleeding'
          }
        ],
        'tableColumn': '17',
        'tableLabel': 'Discharge',
        'fqn': 'genitourinary.discharge'
      },
      {
        'elementKey': 'lastMenstrualPeriodDate',
        'formIndex': '1',
        'inputType': 'date',
        'label': 'Last menstrual period date',
        'tableColumn': '18',
        'tableLabel': 'Last menstrual period date',
        'fqn': 'genitourinary.lastMenstrualPeriodDate'
      },
      {
        'elementKey': 'description',
        'formIndex': '1',
        'formCss': 'grid-span-3-columns',
        'inputType': 'text',
        'label': 'Description',
        'tableColumn': '19',
        'tableLabel': 'Description',
        'fqn': 'genitourinary.description'
      },
      {
        'elementKey': 'pregnant',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Pregnant',
        'options': [
          {
            'key': 'Yes',
            'text': 'Yes'
          },
          {
            'key': 'No',
            'text': 'No'
          },
          {
            'key': 'Unknown',
            'text': 'Unknown'
          }
        ],
        'tableColumn': '20',
        'tableLabel': 'Pregnant',
        'fqn': 'genitourinary.pregnant'
      },
      {
        'elementKey': 'gravida',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Gravida (number of pregnancies)',
        'tableColumn': '21',
        'tableLabel': 'Gravida (number of pregnancies)',
        'fqn': 'genitourinary.gravida'
      },
      {
        'elementKey': 'para',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Para (number of children)',
        'tableColumn': '22',
        'tableLabel': 'Para (number of children)',
        'fqn': 'genitourinary.para'
      },
      {
        'elementKey': 'livingChildren',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Living children',
        'tableColumn': '23',
        'tableLabel': 'Living children',
        'fqn': 'genitourinary.livingChildren'
      },
      {
        'elementKey': 'comments',
        'formIndex': '1',
        'inputType': 'textarea',
        'label': 'Comments',
        'tableColumn': '24',
        'tableLabel': 'Comments',
        'fqn': 'genitourinary.comments'
      }
    ],
    'pageElements': {
      'table': {
        'elementKey': 'table',
        'pageElementIndex': '1',
        'pageKey': 'genitourinary',
        'tableKey': 'table',
        'isTable': true,
        'label': 'Genitourinary assessment',
        'addButtonText': 'Add a genitourinary assessment',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'table_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'table_name',
              'table_profession',
              'table_day',
              'table_time'
            ]
          },
          {
            'label': 'Urinary symptoms',
            'ehr_list_index': '2',
            'items': [
              'urinaryGroup1'
            ]
          },
          {
            'label': 'Last voided day',
            'ehr_list_index': '3',
            'items': [
              'lastVoidedDay'
            ]
          },
          {
            'label': 'Last voided time',
            'ehr_list_index': '4',
            'items': [
              'lastVoidedTime'
            ]
          },
          {
            'label': 'Urine colour',
            'ehr_list_index': '5',
            'items': [
              'colour'
            ]
          },
          {
            'label': 'Urine consistency',
            'ehr_list_index': '6',
            'items': [
              'consistency'
            ]
          },
          {
            'label': 'Continence containment device',
            'ehr_list_index': '7',
            'items': [
              'diaper'
            ]
          },
          {
            'ehr_list_index': '8',
            'items': [
              'toilettingMethod'
            ]
          },
          {
            'label': 'Indwelling Catheter',
            'ehr_list_index': '9',
            'items': [
              'foley'
            ]
          },
          {
            'label': 'Type',
            'ehr_list_index': '10',
            'items': [
              'foleyType'
            ]
          },
          {
            'label': 'Size',
            'ehr_list_index': '11',
            'items': [
              'foleySize'
            ]
          },
          {
            'label': 'Last catheter change (day)',
            'ehr_list_index': '12',
            'items': [
              'lastChange'
            ]
          },
          {
            'label': 'Last catheter change (time)',
            'ehr_list_index': '13',
            'items': [
              'lastChangeTime'
            ]
          },
          {
            'label': 'Pelvic pain',
            'ehr_list_index': '14',
            'items': [
              'pelvicPain'
            ]
          },
          {
            'label': 'Location',
            'ehr_list_index': '15',
            'items': [
              'location'
            ]
          },
          {
            'label': 'Pelvic pain source',
            'ehr_list_index': '16',
            'items': [
              'pelvicPainSource'
            ]
          },
          {
            'label': 'Discharge',
            'ehr_list_index': '17',
            'items': [
              'discharge'
            ]
          },
          {
            'label': 'Last menstrual period date',
            'ehr_list_index': '18',
            'items': [
              'lastMenstrualPeriodDate'
            ]
          },
          {
            'label': 'Description',
            'ehr_list_index': '19',
            'items': [
              'description'
            ]
          },
          {
            'label': 'Pregnant',
            'ehr_list_index': '20',
            'items': [
              'pregnant'
            ]
          },
          {
            'label': 'Gravida (number of pregnancies)',
            'ehr_list_index': '21',
            'items': [
              'gravida'
            ]
          },
          {
            'label': 'Para (number of children)',
            'ehr_list_index': '22',
            'items': [
              'para'
            ]
          },
          {
            'label': 'Living children',
            'ehr_list_index': '23',
            'items': [
              'livingChildren'
            ]
          },
          {
            'label': 'Comments',
            'ehr_list_index': '24',
            'items': [
              'comments'
            ]
          }
        ],
        'form': {
          'elementKey': 'table',
          'label': 'Genitourinary assessment',
          'addButtonText': 'Add a genitourinary assessment',
          'formOption': 'transpose',
          'formKey': 'table',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group80',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'table_name',
                'table_profession',
                'table_day',
                'table_time'
              ]
            },
            {
              'elementKey': 'urinaryGroup2',
              'label': 'Urinary',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'urinaryGroup1',
                'lastVoidedDay',
                'lastVoidedTime',
                'colour',
                'consistency',
                'diaper',
                'toilettingMethod'
              ]
            },
            {
              'elementKey': 'foleyGroup',
              'label': 'Indwelling Catheter',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '3',
              'gChildren': [
                'foley',
                'foleyType',
                'foleySize',
                'lastChange',
                'lastChangeTime'
              ]
            },
            {
              'elementKey': 'pelvicGroup',
              'label': 'Pelvic',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '4',
              'gChildren': [
                'pelvicPain',
                'location',
                'pelvicPainSource',
                'aLabel'
              ]
            },
            {
              'elementKey': 'vaginal',
              'label': 'Vagina',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '5',
              'gChildren': [
                'discharge',
                'lastMenstrualPeriodDate',
                'description'
              ]
            },
            {
              'elementKey': 'pregnantGroup',
              'label': 'Pregnancy',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '6',
              'gChildren': [
                'pregnant',
                'gravida',
                'para',
                'livingChildren'
              ]
            },
            {
              'elementKey': 'ehr_group81',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '7',
              'gChildren': [
                'comments'
              ]
            }
          ],
          'ehr_data': {
            'table_name': '',
            'table_profession': '',
            'table_day': '',
            'table_time': '',
            'urinaryGroup1': '',
            'lastVoidedDay': '',
            'lastVoidedTime': '',
            'colour': '',
            'consistency': '',
            'diaper': '',
            'toilettingMethod': '',
            'foley': '',
            'foleyType': '',
            'foleySize': '',
            'lastChange': '',
            'lastChangeTime': '',
            'pelvicPain': '',
            'location': '',
            'pelvicPainSource': '',
            'discharge': '',
            'lastMenstrualPeriodDate': '',
            'description': '',
            'pregnant': '',
            'gravida': '',
            'para': '',
            'livingChildren': '',
            'comments': ''
          }
        },
        'tableChildren': [
          'table_id',
          'table_name',
          'table_profession',
          'table_day',
          'table_time',
          'urinaryGroup1',
          'lastVoidedDay',
          'lastVoidedTime',
          'colour',
          'consistency',
          'diaper',
          'toilettingMethod',
          'foley',
          'foleyType',
          'foleySize',
          'lastChange',
          'lastChangeTime',
          'pelvicPain',
          'location',
          'pelvicPainSource',
          'discharge',
          'lastMenstrualPeriodDate',
          'description',
          'pregnant',
          'gravida',
          'para',
          'livingChildren',
          'comments'
        ],
        'hasRecHeader': true
      }
    }
  },
  'musculoskeletal': {
    'pageDataKey': 'musculoskeletal',
    'pageTitle': 'Musculoskeletal assessment',
    'pIndex': '19',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'table_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'musculoskeletal.name'
      },
      {
        'elementKey': 'table_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'table_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'musculoskeletal.profession'
      },
      {
        'elementKey': 'table_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'musculoskeletal.day'
      },
      {
        'elementKey': 'table_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'musculoskeletal.time'
      },
      {
        'elementKey': 'swelling',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Swelling',
        'options': [
          {
            'key': 'Present',
            'text': 'Present'
          },
          {
            'key': 'Absent',
            'text': 'Absent'
          }
        ],
        'tableColumn': '2',
        'tableLabel': 'Swelling',
        'fqn': 'musculoskeletal.swelling'
      },
      {
        'elementKey': 'pain',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Pain',
        'options': [
          {
            'key': 'Present',
            'text': 'Present'
          },
          {
            'key': 'Absent',
            'text': 'Absent'
          }
        ],
        'tableColumn': '3',
        'tableLabel': 'Pain',
        'fqn': 'musculoskeletal.pain'
      },
      {
        'elementKey': 'deformity',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Deformity',
        'options': [
          {
            'key': 'Present',
            'text': 'Present'
          },
          {
            'key': 'Absent',
            'text': 'Absent'
          }
        ],
        'tableColumn': '4',
        'tableLabel': 'Deformity',
        'fqn': 'musculoskeletal.deformity'
      },
      {
        'elementKey': 'movement',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Movement',
        'options': [
          {
            'key': 'Normal',
            'text': 'Normal'
          },
          {
            'key': 'Decreased',
            'text': 'Decreased'
          },
          {
            'key': 'Absent',
            'text': 'Absent'
          }
        ],
        'tableColumn': '5',
        'tableLabel': 'Movement',
        'fqn': 'musculoskeletal.movement'
      },
      {
        'elementKey': 'sensation',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Sensation',
        'options': [
          {
            'key': 'Present',
            'text': 'Present'
          },
          {
            'key': 'Absent',
            'text': 'Absent'
          },
          {
            'key': 'Numb',
            'text': 'Numb'
          }
        ],
        'tableColumn': '6',
        'tableLabel': 'Sensation',
        'fqn': 'musculoskeletal.sensation'
      },
      {
        'elementKey': 'pulse',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Pulse',
        'options': [
          {
            'key': 'Absent',
            'text': 'Absent'
          },
          {
            'key': 'Weak',
            'text': 'Weak'
          },
          {
            'key': 'Moderate',
            'text': 'Moderate'
          },
          {
            'key': 'Strong',
            'text': 'Strong'
          },
          {
            'key': 'Bounding',
            'text': 'Bounding'
          }
        ],
        'tableColumn': '7',
        'tableLabel': 'Pulse',
        'fqn': 'musculoskeletal.pulse'
      },
      {
        'elementKey': 'colour',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Colour',
        'options': [
          {
            'key': 'Flesh',
            'text': 'Flesh'
          },
          {
            'key': 'Pale',
            'text': 'Pale'
          },
          {
            'key': 'Cynanotic',
            'text': 'Cynanotic'
          }
        ],
        'tableColumn': '8',
        'tableLabel': 'Colour',
        'fqn': 'musculoskeletal.colour'
      },
      {
        'elementKey': 'temp',
        'assetBase': '?',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Temp',
        'options': [
          {
            'key': 'Hot',
            'text': 'Hot'
          },
          {
            'key': 'Warm',
            'text': 'Warm'
          },
          {
            'key': 'Cold',
            'text': 'Cold'
          }
        ],
        'tableColumn': '9',
        'tableLabel': 'Temp',
        'fqn': 'musculoskeletal.temp'
      },
      {
        'elementKey': 'spacer84',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'musculoskeletal.spacer84'
      },
      {
        'elementKey': 'useOfAmbulatoryAid',
        'assetBase': '?',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Use of ambulatory aid',
        'options': [
          {
            'key': 'Yes',
            'text': 'Yes'
          },
          {
            'key': 'No',
            'text': 'No'
          }
        ],
        'tableColumn': '10',
        'tableLabel': 'Use of ambulatory aid',
        'fqn': 'musculoskeletal.useOfAmbulatoryAid'
      },
      {
        'elementKey': 'type',
        'assetBase': '?',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Type',
        'options': [
          {
            'key': 'Walker',
            'text': 'Walker'
          },
          {
            'key': 'Cane',
            'text': 'Cane'
          },
          {
            'key': 'One crutch',
            'text': 'One crutch'
          },
          {
            'key': 'Two crutches',
            'text': 'Two crutches'
          },
          {
            'key': 'Wheelchair',
            'text': 'Wheelchair'
          },
          {
            'key': 'Other',
            'text': 'Other'
          }
        ],
        'tableColumn': '11',
        'tableLabel': 'Type',
        'fqn': 'musculoskeletal.type'
      },
      {
        'elementKey': 'comments',
        'assetBase': '?',
        'formIndex': '1',
        'inputType': 'textarea',
        'label': 'Comments',
        'tableColumn': '12',
        'tableLabel': 'Comments',
        'fqn': 'musculoskeletal.comments'
      }
    ],
    'pageElements': {
      'table': {
        'elementKey': 'table',
        'pageElementIndex': '1',
        'pageKey': 'musculoskeletal',
        'tableKey': 'table',
        'isTable': true,
        'label': 'Musculoskeletal assessment',
        'addButtonText': 'Add a musculoskeletal assessment',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'table_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'table_name',
              'table_profession',
              'table_day',
              'table_time'
            ]
          },
          {
            'label': 'Swelling',
            'ehr_list_index': '2',
            'items': [
              'swelling'
            ]
          },
          {
            'label': 'Pain',
            'ehr_list_index': '3',
            'items': [
              'pain'
            ]
          },
          {
            'label': 'Deformity',
            'ehr_list_index': '4',
            'items': [
              'deformity'
            ]
          },
          {
            'label': 'Movement',
            'ehr_list_index': '5',
            'items': [
              'movement'
            ]
          },
          {
            'label': 'Sensation',
            'ehr_list_index': '6',
            'items': [
              'sensation'
            ]
          },
          {
            'label': 'Pulse',
            'ehr_list_index': '7',
            'items': [
              'pulse'
            ]
          },
          {
            'label': 'Colour',
            'ehr_list_index': '8',
            'items': [
              'colour'
            ]
          },
          {
            'label': 'Temp',
            'ehr_list_index': '9',
            'items': [
              'temp'
            ]
          },
          {
            'label': 'Use of ambulatory aid',
            'ehr_list_index': '10',
            'items': [
              'useOfAmbulatoryAid'
            ]
          },
          {
            'label': 'Type',
            'ehr_list_index': '11',
            'items': [
              'type'
            ]
          },
          {
            'label': 'Comments',
            'ehr_list_index': '12',
            'items': [
              'comments'
            ]
          }
        ],
        'form': {
          'elementKey': 'table',
          'label': 'Musculoskeletal assessment',
          'addButtonText': 'Add a musculoskeletal assessment',
          'formOption': 'transpose',
          'formKey': 'table',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group82',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'table_name',
                'table_profession',
                'table_day',
                'table_time'
              ]
            },
            {
              'elementKey': 'ehr_group83',
              'tableLabel': 'Assessments',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'swelling',
                'pain',
                'deformity',
                'movement',
                'sensation',
                'pulse',
                'colour',
                'temp',
                'spacer84',
                'useOfAmbulatoryAid',
                'type'
              ]
            },
            {
              'elementKey': 'ehr_group85',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '3',
              'gChildren': [
                'comments'
              ]
            }
          ],
          'ehr_data': {
            'table_name': '',
            'table_profession': '',
            'table_day': '',
            'table_time': '',
            'swelling': '',
            'pain': '',
            'deformity': '',
            'movement': '',
            'sensation': '',
            'pulse': '',
            'colour': '',
            'temp': '',
            'useOfAmbulatoryAid': '',
            'type': '',
            'comments': ''
          }
        },
        'tableChildren': [
          'table_id',
          'table_name',
          'table_profession',
          'table_day',
          'table_time',
          'swelling',
          'pain',
          'deformity',
          'movement',
          'sensation',
          'pulse',
          'colour',
          'temp',
          'useOfAmbulatoryAid',
          'type',
          'comments'
        ],
        'hasRecHeader': true
      }
    }
  },
  'pain': {
    'pageDataKey': 'pain',
    'pageTitle': 'Pain assessment',
    'pIndex': '20',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'table_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'pain.name'
      },
      {
        'elementKey': 'table_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'table_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'pain.profession'
      },
      {
        'elementKey': 'table_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'pain.day'
      },
      {
        'elementKey': 'table_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'pain.time'
      },
      {
        'elementKey': 'location',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Location',
        'tableColumn': '2',
        'tableLabel': 'Location',
        'fqn': 'pain.location'
      },
      {
        'elementKey': 'painScale',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Pain intensity (0-10)',
        'suffix': '/10',
        'tableColumn': '3',
        'tableLabel': 'Pain intensity (0-10)',
        'fqn': 'pain.painScale',
        'suffixText': '<p>/10</p>',
        'suffixHtml': '/10'
      },
      {
        'elementKey': 'respiratoryRate',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Respiratory rate',
        'suffix': 'br/min',
        'tableColumn': '4',
        'tableLabel': 'Respiratory rate',
        'fqn': 'pain.respiratoryRate',
        'suffixText': '<p>br/min</p>',
        'suffixHtml': 'br/min'
      },
      {
        'elementKey': 'onset',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Onset',
        'tableColumn': '5',
        'tableLabel': 'Onset',
        'fqn': 'pain.onset'
      },
      {
        'elementKey': 'type',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Type',
        'tableColumn': '6',
        'tableLabel': 'Type',
        'fqn': 'pain.type'
      },
      {
        'elementKey': 'alleviationAssociatedSymptoms',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Alleviation & associated symptoms',
        'tableColumn': '7',
        'tableLabel': 'Alleviation & associated symptoms',
        'fqn': 'pain.alleviationAssociatedSymptoms'
      },
      {
        'elementKey': 'radiation',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Radiation',
        'tableColumn': '8',
        'tableLabel': 'Radiation',
        'fqn': 'pain.radiation'
      },
      {
        'elementKey': 'precipitatingEvents',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Precipitating events',
        'tableColumn': '9',
        'tableLabel': 'Precipitating events',
        'fqn': 'pain.precipitatingEvents'
      },
      {
        'elementKey': 'comments',
        'formIndex': '1',
        'formCss': 'grid-span-3-columns',
        'inputType': 'textarea',
        'label': 'Comments',
        'tableColumn': '10',
        'tableLabel': 'Comments',
        'fqn': 'pain.comments'
      },
      {
        'elementKey': 'location2',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Location',
        'tableColumn': '11',
        'tableLabel': 'Location',
        'fqn': 'pain.location2'
      },
      {
        'elementKey': 'painScale2',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Pain intensity (0-10)',
        'suffix': '/10',
        'tableColumn': '12',
        'tableLabel': 'Pain intensity (0-10)',
        'fqn': 'pain.painScale2',
        'suffixText': '<p>/10</p>',
        'suffixHtml': '/10'
      },
      {
        'elementKey': 'respiratoryRate2',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Respiratory rate',
        'suffix': 'br/min',
        'tableColumn': '13',
        'tableLabel': 'Respiratory rate',
        'fqn': 'pain.respiratoryRate2',
        'suffixText': '<p>br/min</p>',
        'suffixHtml': 'br/min'
      },
      {
        'elementKey': 'onset2',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Onset',
        'tableColumn': '14',
        'tableLabel': 'Onset',
        'fqn': 'pain.onset2'
      },
      {
        'elementKey': 'type2',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Type',
        'tableColumn': '15',
        'tableLabel': 'Type',
        'fqn': 'pain.type2'
      },
      {
        'elementKey': 'alleviationAssociatedSymptoms2',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Alleviation & associated symptoms',
        'tableColumn': '16',
        'tableLabel': 'Alleviation & associated symptoms',
        'fqn': 'pain.alleviationAssociatedSymptoms2'
      },
      {
        'elementKey': 'radiation2',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Radiation',
        'tableColumn': '17',
        'tableLabel': 'Radiation',
        'fqn': 'pain.radiation2'
      },
      {
        'elementKey': 'precipitatingEvents2',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Precipitating events',
        'tableColumn': '18',
        'tableLabel': 'Precipitating events',
        'fqn': 'pain.precipitatingEvents2'
      },
      {
        'elementKey': 'comments2',
        'formIndex': '1',
        'formCss': 'grid-span-3-columns',
        'inputType': 'textarea',
        'label': 'Comments',
        'tableColumn': '19',
        'tableLabel': 'Comments',
        'fqn': 'pain.comments2'
      }
    ],
    'pageElements': {
      'table': {
        'elementKey': 'table',
        'pageElementIndex': '1',
        'pageKey': 'pain',
        'tableKey': 'table',
        'isTable': true,
        'label': 'Pain assessment',
        'addButtonText': 'Add a pain assessment',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'table_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'table_name',
              'table_profession',
              'table_day',
              'table_time'
            ]
          },
          {
            'label': 'Location',
            'ehr_list_index': '2',
            'items': [
              'location'
            ]
          },
          {
            'label': 'Pain intensity (0-10)',
            'ehr_list_index': '3',
            'items': [
              'painScale'
            ]
          },
          {
            'label': 'Respiratory rate',
            'ehr_list_index': '4',
            'items': [
              'respiratoryRate'
            ]
          },
          {
            'label': 'Onset',
            'ehr_list_index': '5',
            'items': [
              'onset'
            ]
          },
          {
            'label': 'Type',
            'ehr_list_index': '6',
            'items': [
              'type'
            ]
          },
          {
            'label': 'Alleviation & associated symptoms',
            'ehr_list_index': '7',
            'items': [
              'alleviationAssociatedSymptoms'
            ]
          },
          {
            'label': 'Radiation',
            'ehr_list_index': '8',
            'items': [
              'radiation'
            ]
          },
          {
            'label': 'Precipitating events',
            'ehr_list_index': '9',
            'items': [
              'precipitatingEvents'
            ]
          },
          {
            'label': 'Comments',
            'ehr_list_index': '10',
            'items': [
              'comments'
            ]
          },
          {
            'label': 'Location',
            'ehr_list_index': '11',
            'items': [
              'location2'
            ]
          },
          {
            'label': 'Pain intensity (0-10)',
            'ehr_list_index': '12',
            'items': [
              'painScale2'
            ]
          },
          {
            'label': 'Respiratory rate',
            'ehr_list_index': '13',
            'items': [
              'respiratoryRate2'
            ]
          },
          {
            'label': 'Onset',
            'ehr_list_index': '14',
            'items': [
              'onset2'
            ]
          },
          {
            'label': 'Type',
            'ehr_list_index': '15',
            'items': [
              'type2'
            ]
          },
          {
            'label': 'Alleviation & associated symptoms',
            'ehr_list_index': '16',
            'items': [
              'alleviationAssociatedSymptoms2'
            ]
          },
          {
            'label': 'Radiation',
            'ehr_list_index': '17',
            'items': [
              'radiation2'
            ]
          },
          {
            'label': 'Precipitating events',
            'ehr_list_index': '18',
            'items': [
              'precipitatingEvents2'
            ]
          },
          {
            'label': 'Comments',
            'ehr_list_index': '19',
            'items': [
              'comments2'
            ]
          }
        ],
        'form': {
          'elementKey': 'table',
          'label': 'Pain assessment',
          'addButtonText': 'Add a pain assessment',
          'formOption': 'transpose',
          'formKey': 'table',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group99',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'table_name',
                'table_profession',
                'table_day',
                'table_time'
              ]
            },
            {
              'elementKey': 'ehr_group100',
              'label': 'Primary pain site',
              'tableLabel': 'Primary pain site',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'location',
                'painScale',
                'respiratoryRate',
                'onset',
                'type',
                'alleviationAssociatedSymptoms',
                'radiation',
                'precipitatingEvents',
                'comments'
              ]
            },
            {
              'elementKey': 'ehr_group101',
              'label': 'Secondary pain site',
              'tableLabel': 'Secondary pain site',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '3',
              'gChildren': [
                'location2',
                'painScale2',
                'respiratoryRate2',
                'onset2',
                'type2',
                'alleviationAssociatedSymptoms2',
                'radiation2',
                'precipitatingEvents2',
                'comments2'
              ]
            }
          ],
          'ehr_data': {
            'table_name': '',
            'table_profession': '',
            'table_day': '',
            'table_time': '',
            'location': '',
            'painScale': '',
            'respiratoryRate': '',
            'onset': '',
            'type': '',
            'alleviationAssociatedSymptoms': '',
            'radiation': '',
            'precipitatingEvents': '',
            'comments': '',
            'location2': '',
            'painScale2': '',
            'respiratoryRate2': '',
            'onset2': '',
            'type2': '',
            'alleviationAssociatedSymptoms2': '',
            'radiation2': '',
            'precipitatingEvents2': '',
            'comments2': ''
          }
        },
        'tableChildren': [
          'table_id',
          'table_name',
          'table_profession',
          'table_day',
          'table_time',
          'location',
          'painScale',
          'respiratoryRate',
          'onset',
          'type',
          'alleviationAssociatedSymptoms',
          'radiation',
          'precipitatingEvents',
          'comments',
          'location2',
          'painScale2',
          'respiratoryRate2',
          'onset2',
          'type2',
          'alleviationAssociatedSymptoms2',
          'radiation2',
          'precipitatingEvents2',
          'comments2'
        ],
        'hasRecHeader': true
      }
    }
  },
  'biopsychosocial': {
    'pageDataKey': 'biopsychosocial',
    'pageTitle': 'Biopsychosocial assessment',
    'pIndex': '21',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'table_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'biopsychosocial.name'
      },
      {
        'elementKey': 'table_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'table_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'biopsychosocial.profession'
      },
      {
        'elementKey': 'table_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'biopsychosocial.day'
      },
      {
        'elementKey': 'table_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'biopsychosocial.time'
      },
      {
        'elementKey': 'hygieneGrooming',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Hygiene',
        'options': [
          {
            'key': 'Good',
            'text': 'Good'
          },
          {
            'key': 'Requires attention',
            'text': 'Requires attention'
          }
        ],
        'tableColumn': '2',
        'fqn': 'biopsychosocial.hygieneGrooming'
      },
      {
        'elementKey': 'hygieneComments',
        'formIndex': '1',
        'formCss': 'grid-span-3-columns',
        'inputType': 'textarea',
        'label': 'Hygiene comments',
        'tableColumn': '3',
        'fqn': 'biopsychosocial.hygieneComments'
      },
      {
        'elementKey': 'behaviour',
        'formIndex': '1',
        'inputType': 'checkset',
        'label': 'Behaviour',
        'options': [
          {
            'key': 'calm',
            'text': 'Calm'
          },
          {
            'key': 'cooperative',
            'text': 'Cooperative'
          },
          {
            'key': 'agitated',
            'text': 'Agitated'
          },
          {
            'key': 'flatAffect',
            'text': 'Flat affect'
          },
          {
            'key': 'threatening',
            'text': 'Threatening'
          },
          {
            'key': 'physicallyAgressive',
            'text': 'Physically agressive'
          },
          {
            'key': 'uncommunicative',
            'text': 'Uncommunicative'
          }
        ],
        'tableColumn': '4',
        'fqn': 'biopsychosocial.behaviour'
      },
      {
        'elementKey': 'hallucinations',
        'formIndex': '1',
        'inputType': 'checkset',
        'label': 'Hallucinations',
        'options': [
          {
            'key': 'none',
            'text': 'None'
          },
          {
            'key': 'visual',
            'text': 'Visual'
          },
          {
            'key': 'auditory',
            'text': 'Auditory'
          },
          {
            'key': 'olafactory',
            'text': 'Olafactory'
          }
        ],
        'tableColumn': '5',
        'fqn': 'biopsychosocial.hallucinations'
      },
      {
        'elementKey': 'suicidal',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Suicidal',
        'options': [
          {
            'key': 'None',
            'text': 'None'
          },
          {
            'key': 'Ideation',
            'text': 'Ideation'
          },
          {
            'key': 'Attempt',
            'text': 'Attempt'
          }
        ],
        'tableColumn': '6',
        'fqn': 'biopsychosocial.suicidal'
      },
      {
        'elementKey': 'homicidal',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Homicidal',
        'options': [
          {
            'key': 'None',
            'text': 'None'
          },
          {
            'key': 'Ideation',
            'text': 'Ideation'
          }
        ],
        'tableColumn': '7',
        'fqn': 'biopsychosocial.homicidal'
      },
      {
        'elementKey': 'speech',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Speech',
        'options': [
          {
            'key': 'Clear and coherent',
            'text': 'Clear and coherent'
          },
          {
            'key': 'Other',
            'text': 'Other'
          }
        ],
        'tableColumn': '8',
        'fqn': 'biopsychosocial.speech'
      },
      {
        'elementKey': 'form_label104',
        'formIndex': '1',
        'formCss': 'grid-span-3-columns',
        'inputType': 'form_label',
        'label': 'From our experience in the hospital, we know that domestic violence can be a problem. Is this a factor in your life?',
        'fqn': 'biopsychosocial.form_label104'
      },
      {
        'elementKey': 'domesticViolence',
        'formIndex': '1',
        'inputType': 'select',
        'options': [
          {
            'key': 'Didn\'t ask',
            'text': 'Didn\'t ask'
          },
          {
            'key': 'Yes',
            'text': 'Yes'
          },
          {
            'key': 'No',
            'text': 'No'
          }
        ],
        'tableColumn': '9',
        'tableLabel': 'Domestic violence?',
        'fqn': 'biopsychosocial.domesticViolence'
      },
      {
        'elementKey': 'form_label105',
        'formIndex': '1',
        'formCss': 'grid-span-3-columns',
        'inputType': 'form_label',
        'label': 'Would you like to speak to a social worker?',
        'fqn': 'biopsychosocial.form_label105'
      },
      {
        'elementKey': 'requestContact',
        'formIndex': '1',
        'inputType': 'select',
        'options': [
          {
            'key': 'Didn\'t ask',
            'text': 'Didn\'t ask'
          },
          {
            'key': 'Yes',
            'text': 'Yes'
          },
          {
            'key': 'No',
            'text': 'No'
          }
        ],
        'tableColumn': '10',
        'tableLabel': 'Social worker?',
        'fqn': 'biopsychosocial.requestContact'
      },
      {
        'elementKey': 'supportPerson',
        'formIndex': '1',
        'formCss': 'grid-new-subsection',
        'inputType': 'text',
        'label': 'Support person',
        'tableColumn': '11',
        'fqn': 'biopsychosocial.supportPerson'
      },
      {
        'elementKey': 'supportComments',
        'formIndex': '1',
        'formCss': 'grid-span-2-columns',
        'inputType': 'textarea',
        'label': 'Support comments',
        'tableColumn': '12',
        'fqn': 'biopsychosocial.supportComments'
      },
      {
        'elementKey': 'securityPolicePresent',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Security/police present',
        'tableColumn': '13',
        'fqn': 'biopsychosocial.securityPolicePresent'
      },
      {
        'elementKey': 'securityComments',
        'formIndex': '1',
        'formCss': 'grid-span-2-columns',
        'inputType': 'textarea',
        'label': 'Security comments',
        'tableColumn': '14',
        'fqn': 'biopsychosocial.securityComments'
      },
      {
        'elementKey': 'patientRestrained',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Patient restrained',
        'options': [
          {
            'key': 'Yes',
            'text': 'Yes'
          },
          {
            'key': 'No',
            'text': 'No'
          }
        ],
        'tableColumn': '15',
        'fqn': 'biopsychosocial.patientRestrained'
      },
      {
        'elementKey': 'restraintDay',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'tableColumn': '16',
        'fqn': 'biopsychosocial.restraintDay'
      },
      {
        'elementKey': 'restraintTime',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'tableColumn': '17',
        'fqn': 'biopsychosocial.restraintTime'
      },
      {
        'elementKey': 'restraintComments',
        'formIndex': '1',
        'formCss': 'grid-span-3-columns',
        'inputType': 'textarea',
        'label': 'Restraint comments',
        'tableColumn': '18',
        'fqn': 'biopsychosocial.restraintComments'
      },
      {
        'elementKey': 'generalComments',
        'formIndex': '1',
        'inputType': 'textarea',
        'label': 'General comments',
        'tableColumn': '19',
        'fqn': 'biopsychosocial.generalComments'
      }
    ],
    'pageElements': {
      'table': {
        'elementKey': 'table',
        'pageElementIndex': '1',
        'pageKey': 'biopsychosocial',
        'tableKey': 'table',
        'isTable': true,
        'label': 'Biopsychosocial assessment',
        'addButtonText': 'Add a biopsychosocial assessment',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'table_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'table_name',
              'table_profession',
              'table_day',
              'table_time'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'hygieneGrooming'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'hygieneComments'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'behaviour'
            ]
          },
          {
            'ehr_list_index': '5',
            'items': [
              'hallucinations'
            ]
          },
          {
            'ehr_list_index': '6',
            'items': [
              'suicidal'
            ]
          },
          {
            'ehr_list_index': '7',
            'items': [
              'homicidal'
            ]
          },
          {
            'ehr_list_index': '8',
            'items': [
              'speech'
            ]
          },
          {
            'label': 'Domestic violence?',
            'ehr_list_index': '9',
            'items': [
              'domesticViolence'
            ]
          },
          {
            'label': 'Social worker?',
            'ehr_list_index': '10',
            'items': [
              'requestContact'
            ]
          },
          {
            'ehr_list_index': '11',
            'items': [
              'supportPerson'
            ]
          },
          {
            'ehr_list_index': '12',
            'items': [
              'supportComments'
            ]
          },
          {
            'ehr_list_index': '13',
            'items': [
              'securityPolicePresent'
            ]
          },
          {
            'ehr_list_index': '14',
            'items': [
              'securityComments'
            ]
          },
          {
            'ehr_list_index': '15',
            'items': [
              'patientRestrained'
            ]
          },
          {
            'ehr_list_index': '16',
            'items': [
              'restraintDay'
            ]
          },
          {
            'ehr_list_index': '17',
            'items': [
              'restraintTime'
            ]
          },
          {
            'ehr_list_index': '18',
            'items': [
              'restraintComments'
            ]
          },
          {
            'ehr_list_index': '19',
            'items': [
              'generalComments'
            ]
          }
        ],
        'form': {
          'elementKey': 'table',
          'label': 'Biopsychosocial assessment',
          'addButtonText': 'Add a biopsychosocial assessment',
          'formOption': 'transpose',
          'formKey': 'table',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group102',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'table_name',
                'table_profession',
                'table_day',
                'table_time'
              ]
            },
            {
              'elementKey': 'ehr_group103',
              'label': 'Biology',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'hygieneGrooming',
                'hygieneComments',
                'behaviour'
              ]
            },
            {
              'elementKey': 'state',
              'label': 'Psychological',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '3',
              'gChildren': [
                'hallucinations',
                'suicidal',
                'homicidal',
                'speech'
              ]
            },
            {
              'elementKey': 'support',
              'label': 'Social',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '4',
              'gChildren': [
                'form_label104',
                'domesticViolence',
                'form_label105',
                'requestContact',
                'supportPerson',
                'supportComments'
              ]
            },
            {
              'elementKey': 'security',
              'label': 'Security & Restraint',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '5',
              'gChildren': [
                'securityPolicePresent',
                'securityComments',
                'patientRestrained',
                'restraintDay',
                'restraintTime',
                'restraintComments'
              ]
            },
            {
              'elementKey': 'ehr_group106',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '6',
              'gChildren': [
                'generalComments'
              ]
            }
          ],
          'ehr_data': {
            'table_name': '',
            'table_profession': '',
            'table_day': '',
            'table_time': '',
            'hygieneGrooming': '',
            'hygieneComments': '',
            'behaviour': '',
            'hallucinations': '',
            'suicidal': '',
            'homicidal': '',
            'speech': '',
            'domesticViolence': '',
            'requestContact': '',
            'supportPerson': '',
            'supportComments': '',
            'securityPolicePresent': '',
            'securityComments': '',
            'patientRestrained': '',
            'restraintDay': '',
            'restraintTime': '',
            'restraintComments': '',
            'generalComments': ''
          }
        },
        'tableChildren': [
          'table_id',
          'table_name',
          'table_profession',
          'table_day',
          'table_time',
          'hygieneGrooming',
          'hygieneComments',
          'behaviour',
          'hallucinations',
          'suicidal',
          'homicidal',
          'speech',
          'domesticViolence',
          'requestContact',
          'supportPerson',
          'supportComments',
          'securityPolicePresent',
          'securityComments',
          'patientRestrained',
          'restraintDay',
          'restraintTime',
          'restraintComments',
          'generalComments'
        ],
        'hasRecHeader': true
      }
    }
  },
  'nonmedOrders': {
    'pageDataKey': 'nonmedOrders',
    'pageTitle': 'Non-medication orders',
    'pIndex': '22',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'table_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'nonmedOrders.name'
      },
      {
        'elementKey': 'table_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'table_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'nonmedOrders.profession'
      },
      {
        'elementKey': 'table_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'nonmedOrders.day'
      },
      {
        'elementKey': 'table_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'nonmedOrders.time'
      },
      {
        'elementKey': 'order',
        'formIndex': '1',
        'formCss': 'grid-span-2-columns',
        'inputType': 'text',
        'label': 'Order',
        'tableColumn': '2',
        'fqn': 'nonmedOrders.order'
      },
      {
        'elementKey': 'orderedBy',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Ordered by',
        'mandatory': true,
        'tableColumn': '3',
        'fqn': 'nonmedOrders.orderedBy'
      },
      {
        'elementKey': 'reason',
        'formIndex': '1',
        'formCss': 'grid-span-2-columns',
        'inputType': 'text',
        'label': 'Reason',
        'tableColumn': '4',
        'fqn': 'nonmedOrders.reason'
      },
      {
        'elementKey': 'status',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Status',
        'mandatory': true,
        'options': [
          {
            'key': 'Ordered',
            'text': 'Ordered'
          },
          {
            'key': 'In process',
            'text': 'In process'
          },
          {
            'key': 'Cancelled',
            'text': 'Cancelled'
          },
          {
            'key': 'Completed',
            'text': 'Completed'
          },
          {
            'key': 'Discontinued',
            'text': 'Discontinued'
          }
        ],
        'tableColumn': '5',
        'fqn': 'nonmedOrders.status'
      },
      {
        'elementKey': 'comment',
        'formIndex': '1',
        'formCss': 'grid-span-3-columns',
        'inputType': 'textarea',
        'label': 'Comment',
        'tableColumn': '6',
        'fqn': 'nonmedOrders.comment'
      },
      {
        'elementKey': 'dietOrders_name',
        'formIndex': '2',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'nonmedOrders.name'
      },
      {
        'elementKey': 'dietOrders_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'dietOrders_profession',
        'formIndex': '2',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'nonmedOrders.profession'
      },
      {
        'elementKey': 'dietOrders_day',
        'formIndex': '2',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'nonmedOrders.day'
      },
      {
        'elementKey': 'dietOrders_time',
        'formIndex': '2',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'nonmedOrders.time'
      },
      {
        'elementKey': 'diet_regular',
        'formIndex': '2',
        'inputType': 'checkbox',
        'label': 'Regular Diet (dietitian may adjust)',
        'tableColumn': '2',
        'tableLabel': 'Regular',
        'fqn': 'nonmedOrders.diet_regular'
      },
      {
        'elementKey': 'diet_npo',
        'formIndex': '2',
        'inputType': 'checkbox',
        'label': 'NPO medications with sips',
        'tableColumn': '3',
        'tableLabel': 'NPO',
        'fqn': 'nonmedOrders.diet_npo'
      },
      {
        'elementKey': 'diet_heart',
        'formIndex': '2',
        'inputType': 'checkbox',
        'label': 'Healthy Heart Diet (dietitian may adjust)',
        'tableColumn': '4',
        'tableLabel': 'Heart',
        'fqn': 'nonmedOrders.diet_heart'
      },
      {
        'elementKey': 'diet_diabetic',
        'formIndex': '2',
        'inputType': 'checkbox',
        'label': 'Diabetic Diet (dietitian may adjust)',
        'tableColumn': '5',
        'tableLabel': 'Diabetic',
        'fqn': 'nonmedOrders.diet_diabetic'
      },
      {
        'elementKey': 'diet_fluid',
        'formIndex': '2',
        'inputType': 'checkbox',
        'label': 'Restrict Fluid Intake to',
        'tableColumn': '6',
        'tableLabel': 'Restrict fluids',
        'fqn': 'nonmedOrders.diet_fluid'
      },
      {
        'elementKey': 'diet_fluid_amount',
        'formIndex': '2',
        'formCss': 'grid-span-2-columns',
        'inputType': 'text',
        'suffix': 'mL/24h',
        'tableColumn': '7',
        'tableLabel': 'Restrict to',
        'fqn': 'nonmedOrders.diet_fluid_amount',
        'suffixText': '<p>mL/24h</p>',
        'suffixHtml': 'mL/24h'
      },
      {
        'elementKey': 'diet_other',
        'formIndex': '2',
        'inputType': 'checkbox',
        'label': 'Other diet (dietitian may adjust):',
        'tableColumn': '8',
        'tableLabel': 'Other',
        'fqn': 'nonmedOrders.diet_other'
      },
      {
        'elementKey': 'diet_other_explain',
        'formIndex': '2',
        'formCss': 'grid-span-2-columns',
        'inputType': 'text',
        'tableColumn': '9',
        'tableLabel': 'Explain',
        'fqn': 'nonmedOrders.diet_other_explain'
      },
      {
        'elementKey': 'diet_comment',
        'formIndex': '2',
        'formCss': 'grid-span-3-columns',
        'inputType': 'textarea',
        'label': 'Comment',
        'tableColumn': '10',
        'tableLabel': 'Comment',
        'fqn': 'nonmedOrders.diet_comment'
      }
    ],
    'pageElements': {
      'table': {
        'elementKey': 'table',
        'pageElementIndex': '1',
        'pageKey': 'nonmedOrders',
        'tableKey': 'table',
        'isTable': true,
        'label': 'Nonmedication orders',
        'addButtonText': 'Add an order',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'table_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'table_name',
              'table_profession',
              'table_day',
              'table_time'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'order'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'orderedBy'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'reason'
            ]
          },
          {
            'ehr_list_index': '5',
            'items': [
              'status'
            ]
          },
          {
            'ehr_list_index': '6',
            'items': [
              'comment'
            ]
          }
        ],
        'form': {
          'elementKey': 'table',
          'label': 'Nonmedication orders',
          'addButtonText': 'Add an order',
          'formKey': 'table',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group107',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'table_name',
                'table_profession',
                'table_day',
                'table_time'
              ]
            },
            {
              'elementKey': 'ehr_group108',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'order',
                'orderedBy',
                'reason',
                'status',
                'comment'
              ]
            }
          ],
          'ehr_data': {
            'table_name': '',
            'table_profession': '',
            'table_day': '',
            'table_time': '',
            'order': '',
            'orderedBy': '',
            'reason': '',
            'status': '',
            'comment': ''
          }
        },
        'tableChildren': [
          'table_id',
          'table_name',
          'table_profession',
          'table_day',
          'table_time',
          'order',
          'orderedBy',
          'reason',
          'status',
          'comment'
        ],
        'hasRecHeader': true
      },
      'dietOrders': {
        'elementKey': 'dietOrders',
        'pageElementIndex': '2',
        'pageKey': 'nonmedOrders',
        'tableKey': 'dietOrders',
        'isTable': true,
        'label': 'Diet',
        'addButtonText': 'Add a diet order',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'dietOrders_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'dietOrders_name',
              'dietOrders_profession',
              'dietOrders_day',
              'dietOrders_time'
            ]
          },
          {
            'label': 'Regular',
            'ehr_list_index': '2',
            'items': [
              'diet_regular'
            ]
          },
          {
            'label': 'NPO',
            'ehr_list_index': '3',
            'items': [
              'diet_npo'
            ]
          },
          {
            'label': 'Heart',
            'ehr_list_index': '4',
            'items': [
              'diet_heart'
            ]
          },
          {
            'label': 'Diabetic',
            'ehr_list_index': '5',
            'items': [
              'diet_diabetic'
            ]
          },
          {
            'label': 'Restrict fluids',
            'ehr_list_index': '6',
            'items': [
              'diet_fluid'
            ]
          },
          {
            'label': 'Restrict to',
            'ehr_list_index': '7',
            'items': [
              'diet_fluid_amount'
            ]
          },
          {
            'label': 'Other',
            'ehr_list_index': '8',
            'items': [
              'diet_other'
            ]
          },
          {
            'label': 'Explain',
            'ehr_list_index': '9',
            'items': [
              'diet_other_explain'
            ]
          },
          {
            'label': 'Comment',
            'ehr_list_index': '10',
            'items': [
              'diet_comment'
            ]
          }
        ],
        'form': {
          'elementKey': 'dietOrders',
          'label': 'Diet',
          'addButtonText': 'Add a diet order',
          'formKey': 'dietOrders',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group109',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'dietOrders_name',
                'dietOrders_profession',
                'dietOrders_day',
                'dietOrders_time'
              ]
            },
            {
              'elementKey': 'ehr_group110',
              'label': 'Diet type',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'diet_regular',
                'diet_npo',
                'diet_heart',
                'diet_diabetic'
              ]
            },
            {
              'elementKey': 'ehr_group111',
              'label': 'Restrictions',
              'tableLabel': 'Restrictions',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '3',
              'gChildren': [
                'diet_fluid',
                'diet_fluid_amount'
              ]
            },
            {
              'elementKey': 'ehr_group112',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '4',
              'gChildren': [
                'diet_other',
                'diet_other_explain',
                'diet_comment'
              ]
            }
          ],
          'ehr_data': {
            'dietOrders_name': '',
            'dietOrders_profession': '',
            'dietOrders_day': '',
            'dietOrders_time': '',
            'diet_regular': '',
            'diet_npo': '',
            'diet_heart': '',
            'diet_diabetic': '',
            'diet_fluid': '',
            'diet_fluid_amount': '',
            'diet_other': '',
            'diet_other_explain': '',
            'diet_comment': ''
          }
        },
        'tableChildren': [
          'dietOrders_id',
          'dietOrders_name',
          'dietOrders_profession',
          'dietOrders_day',
          'dietOrders_time',
          'diet_regular',
          'diet_npo',
          'diet_heart',
          'diet_diabetic',
          'diet_fluid',
          'diet_fluid_amount',
          'diet_other',
          'diet_other_explain',
          'diet_comment'
        ],
        'hasRecHeader': true
      }
    }
  },
  'referrals': {
    'pageDataKey': 'referrals',
    'pageTitle': 'Referrals to other disciplines',
    'pIndex': '23',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'table_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'referrals.name'
      },
      {
        'elementKey': 'table_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'table_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'referrals.profession'
      },
      {
        'elementKey': 'table_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'referrals.day'
      },
      {
        'elementKey': 'table_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'referrals.time'
      },
      {
        'elementKey': 'referralName',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Referral name',
        'tableColumn': '2',
        'tableLabel': 'Referral name',
        'fqn': 'referrals.referralName'
      },
      {
        'elementKey': 'referralProfession',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Referral profession',
        'tableColumn': '3',
        'tableLabel': 'Referral profession',
        'fqn': 'referrals.referralProfession'
      },
      {
        'elementKey': 'spacer115',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'referrals.spacer115'
      },
      {
        'elementKey': 'appointmentDate',
        'formIndex': '1',
        'inputType': 'date',
        'label': 'Appointment date',
        'tableColumn': '4',
        'tableLabel': 'Appointment date',
        'fqn': 'referrals.appointmentDate'
      },
      {
        'elementKey': 'appointmentTime',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Appointment time',
        'tableColumn': '5',
        'tableLabel': 'Appointment time',
        'fqn': 'referrals.appointmentTime'
      },
      {
        'elementKey': 'status',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Status',
        'options': [
          {
            'key': 'Active',
            'text': 'Active'
          },
          {
            'key': 'Discharged',
            'text': 'Discharged'
          }
        ],
        'tableColumn': '6',
        'tableLabel': 'Status',
        'fqn': 'referrals.status'
      }
    ],
    'pageElements': {
      'table': {
        'elementKey': 'table',
        'pageElementIndex': '1',
        'pageKey': 'referrals',
        'tableKey': 'table',
        'isTable': true,
        'label': 'Referrals',
        'addButtonText': 'Add a referral',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'table_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'table_name',
              'table_profession',
              'table_day',
              'table_time'
            ]
          },
          {
            'label': 'Referral name',
            'ehr_list_index': '2',
            'items': [
              'referralName'
            ]
          },
          {
            'label': 'Referral profession',
            'ehr_list_index': '3',
            'items': [
              'referralProfession'
            ]
          },
          {
            'label': 'Appointment date',
            'ehr_list_index': '4',
            'items': [
              'appointmentDate'
            ]
          },
          {
            'label': 'Appointment time',
            'ehr_list_index': '5',
            'items': [
              'appointmentTime'
            ]
          },
          {
            'label': 'Status',
            'ehr_list_index': '6',
            'items': [
              'status'
            ]
          }
        ],
        'form': {
          'elementKey': 'table',
          'label': 'Referrals',
          'addButtonText': 'Add a referral',
          'formKey': 'table',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group113',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'table_name',
                'table_profession',
                'table_day',
                'table_time'
              ]
            },
            {
              'elementKey': 'ehr_group114',
              'label': 'Referral',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'referralName',
                'referralProfession',
                'spacer115',
                'appointmentDate',
                'appointmentTime',
                'status'
              ]
            }
          ],
          'ehr_data': {
            'table_name': '',
            'table_profession': '',
            'table_day': '',
            'table_time': '',
            'referralName': '',
            'referralProfession': '',
            'appointmentDate': '',
            'appointmentTime': '',
            'status': ''
          }
        },
        'tableChildren': [
          'table_id',
          'table_name',
          'table_profession',
          'table_day',
          'table_time',
          'referralName',
          'referralProfession',
          'appointmentDate',
          'appointmentTime',
          'status'
        ],
        'hasRecHeader': true
      }
    }
  },
  'labRequisitions': {
    'pageDataKey': 'labRequisitions',
    'pageTitle': 'Lab requisitions',
    'pIndex': '24',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'table_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'labRequisitions.name'
      },
      {
        'elementKey': 'table_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'table_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'labRequisitions.profession'
      },
      {
        'elementKey': 'table_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'labRequisitions.day'
      },
      {
        'elementKey': 'table_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'labRequisitions.time'
      },
      {
        'elementKey': 'patientName',
        'formIndex': '1',
        'inputType': 'ehrPatientName',
        'label': 'Patient Name',
        'tableColumn': '2',
        'fqn': 'labRequisitions.patientName'
      },
      {
        'elementKey': 'patientHealthNumber',
        'formIndex': '1',
        'inputType': 'ehrPHN',
        'label': 'PHN',
        'tableColumn': '3',
        'fqn': 'labRequisitions.patientHealthNumber'
      },
      {
        'elementKey': 'dateOfBirth',
        'formIndex': '1',
        'inputType': 'ehrDOB',
        'label': 'DOB',
        'tableColumn': '4',
        'fqn': 'labRequisitions.dateOfBirth'
      },
      {
        'elementKey': 'location',
        'formIndex': '1',
        'inputType': 'ehrLocation',
        'label': 'Location',
        'tableColumn': '5',
        'fqn': 'labRequisitions.location'
      },
      {
        'elementKey': 'dateRequired',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Date required',
        'tableColumn': '6',
        'fqn': 'labRequisitions.dateRequired'
      },
      {
        'elementKey': 'reason',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Reason test is required',
        'tableColumn': '7',
        'fqn': 'labRequisitions.reason'
      },
      {
        'elementKey': 'hematology',
        'formIndex': '1',
        'inputType': 'checkset',
        'label': 'Hematology',
        'options': [
          {
            'key': 'cbc',
            'text': 'CBC'
          },
          {
            'key': 'cbcWithDifferential',
            'text': 'CBC with differential'
          },
          {
            'key': 'hemoglobin',
            'text': 'Hemoglobin'
          },
          {
            'key': 'hemoglobinA1C',
            'text': 'Hemoglobin A1-C'
          }
        ],
        'tableColumn': '8',
        'fqn': 'labRequisitions.hematology'
      },
      {
        'elementKey': 'electrolytes',
        'formIndex': '1',
        'inputType': 'checkset',
        'label': 'Electrolytes',
        'options': [
          {
            'key': 'k',
            'text': 'K'
          },
          {
            'key': 'na',
            'text': 'Na'
          },
          {
            'key': 'chloride',
            'text': 'Chloride'
          },
          {
            'key': 'bicarbonate',
            'text': 'Bicarbonate'
          },
          {
            'key': 'calcium',
            'text': 'Calcium'
          },
          {
            'key': 'ionizedCalcium',
            'text': 'Ionized Calcium'
          }
        ],
        'tableColumn': '9',
        'fqn': 'labRequisitions.electrolytes'
      },
      {
        'elementKey': 'bloodGas',
        'formIndex': '1',
        'inputType': 'checkset',
        'label': 'Blood Gas',
        'options': [
          {
            'key': 'arterialBloodGas',
            'text': 'Arterial blood gas'
          },
          {
            'key': 'venousBloodGas',
            'text': 'Venous blood gas'
          },
          {
            'key': 'fetalCordBloodGas',
            'text': 'Fetal cord blood gas'
          }
        ],
        'tableColumn': '10',
        'fqn': 'labRequisitions.bloodGas'
      },
      {
        'elementKey': 'renalProfile',
        'formIndex': '1',
        'inputType': 'checkset',
        'label': 'Renal Profile',
        'options': [
          {
            'key': 'bun',
            'text': 'BUN'
          },
          {
            'key': 'creatinine',
            'text': 'Creatinine'
          }
        ],
        'tableColumn': '11',
        'fqn': 'labRequisitions.renalProfile'
      },
      {
        'elementKey': 'liverFunction',
        'formIndex': '1',
        'inputType': 'checkset',
        'label': 'Liver Function',
        'options': [
          {
            'key': 'ast',
            'text': 'AST'
          },
          {
            'key': 'ggt',
            'text': 'GGT'
          },
          {
            'key': 'alt',
            'text': 'ALT'
          },
          {
            'key': 'totalBirilubin',
            'text': 'Total Birilubin'
          },
          {
            'key': 'directBirilubin',
            'text': 'Direct Birilubin'
          }
        ],
        'tableColumn': '12',
        'fqn': 'labRequisitions.liverFunction'
      },
      {
        'elementKey': 'urineAnalysis',
        'formIndex': '1',
        'inputType': 'checkset',
        'label': 'Urine Analysis',
        'options': [
          {
            'key': 'r&m',
            'text': 'R&M'
          },
          {
            'key': 'urineElectrolytes',
            'text': 'Urine electrolytes'
          },
          {
            'key': 'urineCreatinine',
            'text': 'Urine creatinine'
          }
        ],
        'tableColumn': '13',
        'fqn': 'labRequisitions.urineAnalysis'
      },
      {
        'elementKey': 'microbiologyCulture',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Type of Culture',
        'options': [
          {
            'key': 'culture',
            'text': 'culture'
          },
          {
            'key': 'senstitivity',
            'text': 'senstitivity'
          }
        ],
        'tableColumn': '14',
        'fqn': 'labRequisitions.microbiologyCulture'
      },
      {
        'elementKey': 'microbiologyLocation',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Location',
        'options': [
          {
            'key': 'Wound',
            'text': 'Wound'
          },
          {
            'key': 'Sputum',
            'text': 'Sputum'
          },
          {
            'key': 'Blood',
            'text': 'Blood'
          },
          {
            'key': 'Urine',
            'text': 'Urine'
          },
          {
            'key': 'Stool',
            'text': 'Stool'
          }
        ],
        'tableColumn': '15',
        'fqn': 'labRequisitions.microbiologyLocation'
      },
      {
        'elementKey': 'histologyTissueType',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Tissue Type',
        'options': [
          {
            'key': 'Skin',
            'text': 'Skin'
          },
          {
            'key': 'Blood',
            'text': 'Blood'
          },
          {
            'key': 'Organ',
            'text': 'Organ'
          }
        ],
        'tableColumn': '16',
        'fqn': 'labRequisitions.histologyTissueType'
      },
      {
        'elementKey': 'histologyLocation',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Location',
        'tableColumn': '17',
        'fqn': 'labRequisitions.histologyLocation'
      },
      {
        'elementKey': 'requisitions_name',
        'formIndex': '2',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'labRequisitions.name'
      },
      {
        'elementKey': 'requisitions_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'requisitions_profession',
        'formIndex': '2',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'labRequisitions.profession'
      },
      {
        'elementKey': 'requisitions_day',
        'formIndex': '2',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'labRequisitions.day'
      },
      {
        'elementKey': 'requisitions_time',
        'formIndex': '2',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'labRequisitions.time'
      },
      {
        'elementKey': 'req_noticeLabel',
        'formIndex': '2',
        'formCss': 'grid-span-3-columns',
        'helperText': 'This version of lab requisitions is under development. Use at your own risk. Recommend you continue to use the other v1 lab req for any work that you want to keep.  When this new lab req is ready all older versions will be converted to the new version.',
        'inputType': 'form_label',
        'label': 'This lab requisition form is a prototype.',
        'fqn': 'labRequisitions.req_noticeLabel',
        'helperHtml': '<p>This version of lab requisitions is under development. Use at your own risk. Recommend you continue to use the other v1 lab req for any work that you want to keep.  When this new lab req is ready all older versions will be converted to the new version.</p>'
      },
      {
        'elementKey': 'req_dateRequired',
        'formIndex': '2',
        'inputType': 'visitDay',
        'label': 'Date required',
        'tableColumn': '2',
        'fqn': 'labRequisitions.req_dateRequired'
      },
      {
        'elementKey': 'req_reason',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Reason test is required',
        'tableColumn': '3',
        'fqn': 'labRequisitions.req_reason'
      },
      {
        'elementKey': 'req_hematology',
        'formIndex': '2',
        'inputType': 'checkset',
        'label': 'Hematology',
        'options': [
          {
            'key': 'CBC',
            'text': 'CBC'
          },
          {
            'key': 'CBC_Diff',
            'text': 'CBC with differential'
          }
        ],
        'tableColumn': '4',
        'fqn': 'labRequisitions.req_hematology'
      },
      {
        'elementKey': 'req_cogagulation',
        'formIndex': '2',
        'inputType': 'checkset',
        'label': 'Coagulation',
        'options': [
          {
            'key': 'fib',
            'text': 'Fibrinogen'
          },
          {
            'key': 'ddim',
            'text': 'D-Dimer'
          },
          {
            'key': 'inr',
            'text': 'International normalised ratio (INR)'
          },
          {
            'key': 'aptt',
            'text': 'Activated partial thromboplastin time (PTT)'
          },
          {
            'key': 'ptt',
            'text': 'Partial thromboplastin time (PTT)'
          }
        ],
        'tableColumn': '5',
        'fqn': 'labRequisitions.req_cogagulation'
      },
      {
        'elementKey': 'req_electrolytes',
        'formIndex': '2',
        'inputType': 'checkset',
        'label': 'Electrolytes',
        'options': [
          {
            'key': 'hco3',
            'text': 'Bicarbonate (HCO3)'
          },
          {
            'key': 'CA',
            'text': 'Calcium (Ca)'
          },
          {
            'key': 'Ca_Ion',
            'text': 'Calcium ionized'
          },
          {
            'key': 'chloride',
            'text': 'Chloride (Cl)'
          },
          {
            'key': 'ck',
            'text': 'Creatinine kinase'
          },
          {
            'key': 'ferritin',
            'text': 'Ferritin'
          },
          {
            'key': 'glucoseF',
            'text': 'Glucose fasting'
          },
          {
            'key': 'glucoseR',
            'text': 'Glucose random'
          },
          {
            'key': 'HbA1C',
            'text': 'Hemoglobin A1-C'
          },
          {
            'key': 'mg',
            'text': 'Magnesium (Mg)'
          },
          {
            'key': 'po4',
            'text': 'Phosphate (PO4)'
          },
          {
            'key': 'k',
            'text': 'Potassium (K)'
          },
          {
            'key': 'na',
            'text': 'Sodium (Na)'
          }
        ],
        'tableColumn': '6',
        'fqn': 'labRequisitions.req_electrolytes'
      },
      {
        'elementKey': 'req_liverFunction',
        'formIndex': '2',
        'inputType': 'checkset',
        'label': 'Liver Function',
        'options': [
          {
            'key': 'alt',
            'text': 'Alanine transaminase (ALT)'
          },
          {
            'key': 'alp',
            'text': 'Alkaline phosphatase (ALP)'
          },
          {
            'key': 'ast',
            'text': 'Aspartate transferase (AST)'
          },
          {
            'key': 'bilirubinD',
            'text': 'Bilirubin direct'
          },
          {
            'key': 'bilirubinT',
            'text': 'Bilirubin total'
          },
          {
            'key': 'ggt',
            'text': 'Gamma glutamyl transferase (GGT)'
          },
          {
            'key': 'ldh',
            'text': 'Lactate dehydrogenase (LDH)'
          },
          {
            'key': 'lipase',
            'text': 'Lipase'
          }
        ],
        'tableColumn': '7',
        'fqn': 'labRequisitions.req_liverFunction'
      },
      {
        'elementKey': 'req_renalProfile',
        'formIndex': '2',
        'inputType': 'checkset',
        'label': 'Renal Profile',
        'options': [
          {
            'key': 'bun',
            'text': 'Blood urea nitrogen (BUN)'
          },
          {
            'key': 'cr',
            'text': 'Creatinine'
          }
        ],
        'tableColumn': '8',
        'fqn': 'labRequisitions.req_renalProfile'
      },
      {
        'elementKey': 'req_bloodGas',
        'formIndex': '2',
        'inputType': 'checkset',
        'label': 'Blood Gas',
        'options': [
          {
            'key': 'abg',
            'text': 'Arterial blood gas (ABG)'
          },
          {
            'key': 'fcbg',
            'text': 'Venous blood gas (VBG)'
          },
          {
            'key': 'vbg',
            'text': 'Fetal cord blood gas (FCBG)'
          }
        ],
        'tableColumn': '9',
        'fqn': 'labRequisitions.req_bloodGas'
      },
      {
        'elementKey': 'req_urineAnalysis',
        'formIndex': '2',
        'inputType': 'checkset',
        'label': 'Urine Analysis',
        'options': [
          {
            'key': 'acr',
            'text': 'Albumin/creatinine ratio (ACR)'
          },
          {
            'key': 'rm',
            'text': 'Routine and microscopic (R&M)'
          },
          {
            'key': 'preg',
            'text': 'Pregnancy'
          },
          {
            'key': 'u_el',
            'text': 'Urine electrolytes'
          },
          {
            'key': 'u_cr',
            'text': 'Urine creatinine'
          }
        ],
        'tableColumn': '10',
        'fqn': 'labRequisitions.req_urineAnalysis'
      },
      {
        'elementKey': 'req_comments',
        'formIndex': '2',
        'inputType': 'textarea',
        'label': 'Comments',
        'options': [
          {
            'key': 'ferritin:=Ferritin glucoseF:=Glucose fasting glucoseR:=Glucose random',
            'text': 'ferritin:=Ferritin glucoseF:=Glucose fasting glucoseR:=Glucose random'
          }
        ],
        'tableColumn': '11',
        'tableLabel': 'Comments',
        'fqn': 'labRequisitions.req_comments'
      },
      {
        'elementKey': 'histologyRequisitions_name',
        'formIndex': '3',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'labRequisitions.name'
      },
      {
        'elementKey': 'histologyRequisitions_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'histologyRequisitions_profession',
        'formIndex': '3',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'labRequisitions.profession'
      },
      {
        'elementKey': 'histologyRequisitions_day',
        'formIndex': '3',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'labRequisitions.day'
      },
      {
        'elementKey': 'histologyRequisitions_time',
        'formIndex': '3',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'labRequisitions.time'
      },
      {
        'elementKey': 'reqH_noticeLabel',
        'formIndex': '3',
        'formCss': 'grid-span-3-columns',
        'helperText': 'This version of lab requisitions is under development. Use at your own risk. Recommend you continue to use the other v1 lab req for any work that you want to keep.  When this new lab req is ready all older versions will be converted to the new version.',
        'inputType': 'form_label',
        'label': 'This lab requisition form is a prototype.',
        'fqn': 'labRequisitions.reqH_noticeLabel',
        'helperHtml': '<p>This version of lab requisitions is under development. Use at your own risk. Recommend you continue to use the other v1 lab req for any work that you want to keep.  When this new lab req is ready all older versions will be converted to the new version.</p>'
      },
      {
        'elementKey': 'reqH_dateRequired',
        'formIndex': '3',
        'inputType': 'visitDay',
        'label': 'Date required',
        'tableColumn': '2',
        'fqn': 'labRequisitions.reqH_dateRequired'
      },
      {
        'elementKey': 'reqH_reason',
        'formIndex': '3',
        'inputType': 'text',
        'label': 'Reason test is required',
        'tableColumn': '3',
        'fqn': 'labRequisitions.reqH_reason'
      },
      {
        'elementKey': 'reqH_type',
        'formIndex': '3',
        'inputType': 'select',
        'label': 'Tissue Type',
        'options': [
          {
            'key': 'blood',
            'text': 'Blood'
          },
          {
            'key': 'organ',
            'text': 'Organ'
          },
          {
            'key': 'skin',
            'text': 'Skin'
          }
        ],
        'tableColumn': '4',
        'fqn': 'labRequisitions.reqH_type'
      },
      {
        'elementKey': 'reqH_location',
        'formIndex': '3',
        'inputType': 'text',
        'label': 'Location',
        'tableColumn': '5',
        'fqn': 'labRequisitions.reqH_location'
      },
      {
        'elementKey': 'reqH_comments',
        'formIndex': '3',
        'formCss': 'grid-span-3-columns',
        'inputType': 'textarea',
        'label': 'Comments',
        'tableColumn': '6',
        'fqn': 'labRequisitions.reqH_comments'
      },
      {
        'elementKey': 'med_image_req_name',
        'formIndex': '4',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'labRequisitions.name'
      },
      {
        'elementKey': 'med_image_req_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'med_image_req_profession',
        'formIndex': '4',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'labRequisitions.profession'
      },
      {
        'elementKey': 'med_image_req_day',
        'formIndex': '4',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'labRequisitions.day'
      },
      {
        'elementKey': 'med_image_req_time',
        'formIndex': '4',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'labRequisitions.time'
      },
      {
        'elementKey': 'reqMi_noticeLabel',
        'formIndex': '4',
        'formCss': 'grid-span-3-columns',
        'helperText': 'This version of lab requisitions is under development. Use at your own risk. Recommend you continue to use the other v1 lab req for any work that you want to keep.  When this new lab req is ready all older versions will be converted to the new version.',
        'inputType': 'form_label',
        'label': 'This lab requisition form is a prototype.',
        'fqn': 'labRequisitions.reqMi_noticeLabel',
        'helperHtml': '<p>This version of lab requisitions is under development. Use at your own risk. Recommend you continue to use the other v1 lab req for any work that you want to keep.  When this new lab req is ready all older versions will be converted to the new version.</p>'
      },
      {
        'elementKey': 'reqMi_type',
        'formIndex': '4',
        'inputType': 'select',
        'label': 'Type of diagnositc',
        'options': [
          {
            'key': 'angio',
            'text': 'Angiogram'
          },
          {
            'key': 'ecg',
            'text': 'Echo cardiogram'
          },
          {
            'key': 'ct',
            'text': 'CT scan'
          },
          {
            'key': 'mri',
            'text': 'MRI'
          },
          {
            'key': 'nuclear',
            'text': 'Nuclear medicine'
          },
          {
            'key': 'ultra',
            'text': 'Ultrasound'
          },
          {
            'key': 'xray',
            'text': 'X-ray'
          }
        ],
        'tableColumn': '2',
        'fqn': 'labRequisitions.reqMi_type'
      },
      {
        'elementKey': 'reqMi_dateRequired',
        'formIndex': '4',
        'inputType': 'visitDay',
        'label': 'Date required',
        'tableColumn': '3',
        'fqn': 'labRequisitions.reqMi_dateRequired'
      },
      {
        'elementKey': 'reqMi_reason',
        'formIndex': '4',
        'formCss': 'grid-span-2-columns grid-new-subsection',
        'inputType': 'text',
        'label': 'Reason test is required',
        'tableColumn': '4',
        'fqn': 'labRequisitions.reqMi_reason'
      },
      {
        'elementKey': 'reqMi_Location',
        'formIndex': '4',
        'inputType': 'checkset',
        'label': 'Location',
        'options': [
          {
            'key': 'ab',
            'text': 'Abdomen'
          },
          {
            'key': 'armL',
            'text': 'Arm left'
          },
          {
            'key': 'armR',
            'text': 'Arm right'
          },
          {
            'key': 'chest',
            'text': 'Chest'
          },
          {
            'key': 'head',
            'text': 'Head'
          },
          {
            'key': 'heart',
            'text': 'Heart'
          },
          {
            'key': 'neck',
            'text': 'Neck'
          },
          {
            'key': 'legL',
            'text': 'Leg left'
          },
          {
            'key': 'legR',
            'text': 'Leg right'
          },
          {
            'key': 'pelvis',
            'text': 'Pelvis'
          }
        ],
        'tableColumn': '5',
        'fqn': 'labRequisitions.reqMi_Location'
      },
      {
        'elementKey': 'reqMi_mobile',
        'formIndex': '4',
        'formCss': 'grid-new-subsection',
        'inputType': 'checkbox',
        'label': 'Is the test to be performed portably?',
        'tableColumn': '6',
        'fqn': 'labRequisitions.reqMi_mobile'
      },
      {
        'elementKey': 'reqMi_comments',
        'formIndex': '4',
        'formCss': 'grid-span-3-columns',
        'inputType': 'textarea',
        'label': 'Comments',
        'tableColumn': '7',
        'fqn': 'labRequisitions.reqMi_comments'
      },
      {
        'elementKey': 'microRequisitions_name',
        'formIndex': '5',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'labRequisitions.name'
      },
      {
        'elementKey': 'microRequisitions_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'microRequisitions_profession',
        'formIndex': '5',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'labRequisitions.profession'
      },
      {
        'elementKey': 'microRequisitions_day',
        'formIndex': '5',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'labRequisitions.day'
      },
      {
        'elementKey': 'microRequisitions_time',
        'formIndex': '5',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'labRequisitions.time'
      },
      {
        'elementKey': 'reqMicro_noticeLabel',
        'formIndex': '5',
        'formCss': 'grid-span-3-columns',
        'helperText': 'This version of lab requisitions is under development. Use at your own risk. Recommend you continue to use the other v1 lab req for any work that you want to keep.  When this new lab req is ready all older versions will be converted to the new version.',
        'inputType': 'form_label',
        'label': 'This lab requisition form is a prototype.',
        'fqn': 'labRequisitions.reqMicro_noticeLabel',
        'helperHtml': '<p>This version of lab requisitions is under development. Use at your own risk. Recommend you continue to use the other v1 lab req for any work that you want to keep.  When this new lab req is ready all older versions will be converted to the new version.</p>'
      },
      {
        'elementKey': 'reqMicro_dateRequired',
        'formIndex': '5',
        'inputType': 'visitDay',
        'label': 'Date required',
        'tableColumn': '2',
        'fqn': 'labRequisitions.reqMicro_dateRequired'
      },
      {
        'elementKey': 'reqMicro_reason',
        'formIndex': '5',
        'inputType': 'text',
        'label': 'Reason test is required',
        'tableColumn': '3',
        'fqn': 'labRequisitions.reqMicro_reason'
      },
      {
        'elementKey': 'reqMicro_culture',
        'formIndex': '5',
        'inputType': 'select',
        'label': 'Type of Culture',
        'options': [
          {
            'key': 'cs',
            'text': 'Culture & sensitivity'
          },
          {
            'key': 'parasite',
            'text': 'Parisitology'
          }
        ],
        'tableColumn': '4',
        'fqn': 'labRequisitions.reqMicro_culture'
      },
      {
        'elementKey': 'reqMicro_location',
        'formIndex': '5',
        'inputType': 'select',
        'label': 'Location',
        'options': [
          {
            'key': 'blood',
            'text': 'Blood'
          },
          {
            'key': 'sputum',
            'text': 'Sputum'
          },
          {
            'key': 'stool',
            'text': 'Stool'
          },
          {
            'key': 'urine',
            'text': 'Urine'
          },
          {
            'key': 'wound',
            'text': 'Wound'
          }
        ],
        'tableColumn': '5',
        'fqn': 'labRequisitions.reqMicro_location'
      },
      {
        'elementKey': 'reqMicro_comments',
        'formIndex': '5',
        'formCss': 'grid-span-3-columns',
        'inputType': 'textarea',
        'label': 'Comments',
        'tableColumn': '6',
        'fqn': 'labRequisitions.reqMicro_comments'
      },
      {
        'elementKey': 'reqTroponinTable_name',
        'formIndex': '6',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'labRequisitions.name'
      },
      {
        'elementKey': 'reqTroponinTable_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'reqTroponinTable_profession',
        'formIndex': '6',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'labRequisitions.profession'
      },
      {
        'elementKey': 'reqTroponinTable_day',
        'formIndex': '6',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'labRequisitions.day'
      },
      {
        'elementKey': 'reqTroponinTable_time',
        'formIndex': '6',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'labRequisitions.time'
      },
      {
        'elementKey': 'reqT_dateRequired',
        'formIndex': '6',
        'inputType': 'visitDay',
        'label': 'Date required',
        'tableColumn': '1',
        'fqn': 'labRequisitions.reqT_dateRequired'
      },
      {
        'elementKey': 'reqT_reason',
        'formIndex': '6',
        'inputType': 'text',
        'label': 'Reason test is required',
        'tableColumn': '2',
        'fqn': 'labRequisitions.reqT_reason'
      },
      {
        'elementKey': 'reqt_tropinin',
        'formIndex': '6',
        'inputType': 'checkset',
        'label': 'Troponin',
        'options': [
          {
            'key': 'tropI',
            'text': 'Troponin I'
          },
          {
            'key': 'tropT',
            'text': 'Troponin T (TnT)'
          },
          {
            'key': 'tropH',
            'text': 'High-sensitivity troponin T'
          }
        ],
        'tableColumn': '2',
        'fqn': 'labRequisitions.reqt_tropinin'
      },
      {
        'elementKey': 'reqt_comments',
        'formIndex': '6',
        'formCss': 'grid-span-3-columns',
        'inputType': 'textarea',
        'label': 'Comments',
        'tableColumn': '3',
        'fqn': 'labRequisitions.reqt_comments'
      }
    ],
    'pageElements': {
      'table': {
        'elementKey': 'table',
        'pageElementIndex': '1',
        'pageKey': 'labRequisitions',
        'tableKey': 'table',
        'isTable': true,
        'label': 'Lab requisitions v1',
        'addButtonText': 'Add a lab requisition assessment',
        'tableLabel': 'This table data needs to be updated. Contact EdEHR for assistance.',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'table_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'table_name',
              'table_profession',
              'table_day',
              'table_time'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'patientName'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'patientHealthNumber'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'dateOfBirth'
            ]
          },
          {
            'ehr_list_index': '5',
            'items': [
              'location'
            ]
          },
          {
            'ehr_list_index': '6',
            'items': [
              'dateRequired'
            ]
          },
          {
            'ehr_list_index': '7',
            'items': [
              'reason'
            ]
          },
          {
            'ehr_list_index': '8',
            'items': [
              'hematology'
            ]
          },
          {
            'ehr_list_index': '9',
            'items': [
              'electrolytes'
            ]
          },
          {
            'ehr_list_index': '10',
            'items': [
              'bloodGas'
            ]
          },
          {
            'ehr_list_index': '11',
            'items': [
              'renalProfile'
            ]
          },
          {
            'ehr_list_index': '12',
            'items': [
              'liverFunction'
            ]
          },
          {
            'ehr_list_index': '13',
            'items': [
              'urineAnalysis'
            ]
          },
          {
            'ehr_list_index': '14',
            'items': [
              'microbiologyCulture'
            ]
          },
          {
            'ehr_list_index': '15',
            'items': [
              'microbiologyLocation'
            ]
          },
          {
            'ehr_list_index': '16',
            'items': [
              'histologyTissueType'
            ]
          },
          {
            'ehr_list_index': '17',
            'items': [
              'histologyLocation'
            ]
          }
        ],
        'form': {
          'elementKey': 'table',
          'label': 'Lab requisitions v1',
          'addButtonText': 'Add a lab requisition assessment',
          'formKey': 'table',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group121',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'table_name',
                'table_profession',
                'table_day',
                'table_time'
              ]
            },
            {
              'elementKey': 'demographics',
              'label': 'Demographic',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'patientName',
                'patientHealthNumber',
                'dateOfBirth',
                'location',
                'dateRequired',
                'reason',
                'hematology',
                'electrolytes',
                'bloodGas',
                'renalProfile',
                'liverFunction',
                'urineAnalysis'
              ]
            },
            {
              'elementKey': 'microbiology',
              'label': 'Microbiology',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '3',
              'gChildren': [
                'microbiologyCulture',
                'microbiologyLocation'
              ]
            },
            {
              'elementKey': 'histology',
              'label': 'Histology',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '4',
              'gChildren': [
                'histologyTissueType',
                'histologyLocation'
              ]
            }
          ],
          'ehr_data': {
            'table_name': '',
            'table_profession': '',
            'table_day': '',
            'table_time': '',
            'patientName': '',
            'patientHealthNumber': '',
            'dateOfBirth': '',
            'location': '',
            'dateRequired': '',
            'reason': '',
            'hematology': '',
            'electrolytes': '',
            'bloodGas': '',
            'renalProfile': '',
            'liverFunction': '',
            'urineAnalysis': '',
            'microbiologyCulture': '',
            'microbiologyLocation': '',
            'histologyTissueType': '',
            'histologyLocation': ''
          }
        },
        'tableChildren': [
          'table_id',
          'table_name',
          'table_profession',
          'table_day',
          'table_time',
          'patientName',
          'patientHealthNumber',
          'dateOfBirth',
          'location',
          'dateRequired',
          'reason',
          'hematology',
          'electrolytes',
          'bloodGas',
          'renalProfile',
          'liverFunction',
          'urineAnalysis',
          'microbiologyCulture',
          'microbiologyLocation',
          'histologyTissueType',
          'histologyLocation'
        ],
        'hasRecHeader': true
      },
      'requisitions': {
        'elementKey': 'requisitions',
        'pageElementIndex': '2',
        'pageKey': 'labRequisitions',
        'tableKey': 'requisitions',
        'isTable': true,
        'label': 'Lab requisitions',
        'addButtonText': 'Add a lab requisition',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'requisitions_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'requisitions_name',
              'requisitions_profession',
              'requisitions_day',
              'requisitions_time'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'req_dateRequired'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'req_reason'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'req_hematology'
            ]
          },
          {
            'ehr_list_index': '5',
            'items': [
              'req_cogagulation'
            ]
          },
          {
            'ehr_list_index': '6',
            'items': [
              'req_electrolytes'
            ]
          },
          {
            'ehr_list_index': '7',
            'items': [
              'req_liverFunction'
            ]
          },
          {
            'ehr_list_index': '8',
            'items': [
              'req_renalProfile'
            ]
          },
          {
            'ehr_list_index': '9',
            'items': [
              'req_bloodGas'
            ]
          },
          {
            'ehr_list_index': '10',
            'items': [
              'req_urineAnalysis'
            ]
          },
          {
            'label': 'Comments',
            'ehr_list_index': '11',
            'items': [
              'req_comments'
            ]
          }
        ],
        'form': {
          'elementKey': 'requisitions',
          'label': 'Lab requisitions',
          'addButtonText': 'Add a lab requisition',
          'formOption': 'transpose',
          'formKey': 'requisitions',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group122',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'requisitions_name',
                'requisitions_profession',
                'requisitions_day',
                'requisitions_time'
              ]
            },
            {
              'elementKey': 'req_notice',
              'label': 'Requisition',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'req_noticeLabel',
                'req_dateRequired',
                'req_reason'
              ]
            },
            {
              'elementKey': 'ehr_group123',
              'label': 'Hematology/Coagulation',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '3',
              'gChildren': [
                'req_hematology',
                'req_cogagulation'
              ]
            },
            {
              'elementKey': 'ehr_group124',
              'label': 'Chemistry',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '4',
              'gChildren': [
                'req_electrolytes',
                'req_liverFunction',
                'req_renalProfile'
              ]
            },
            {
              'elementKey': 'ehr_group125',
              'label': 'Blood Gas',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '5',
              'gChildren': [
                'req_bloodGas'
              ]
            },
            {
              'elementKey': 'ehr_group126',
              'label': 'Urinalysis',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '6',
              'gChildren': [
                'req_urineAnalysis'
              ]
            },
            {
              'elementKey': 'ehr_group127',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '7',
              'gChildren': [
                'req_comments'
              ]
            }
          ],
          'ehr_data': {
            'requisitions_name': '',
            'requisitions_profession': '',
            'requisitions_day': '',
            'requisitions_time': '',
            'req_dateRequired': '',
            'req_reason': '',
            'req_hematology': '',
            'req_cogagulation': '',
            'req_electrolytes': '',
            'req_liverFunction': '',
            'req_renalProfile': '',
            'req_bloodGas': '',
            'req_urineAnalysis': '',
            'req_comments': ''
          }
        },
        'tableChildren': [
          'requisitions_id',
          'requisitions_name',
          'requisitions_profession',
          'requisitions_day',
          'requisitions_time',
          'req_dateRequired',
          'req_reason',
          'req_hematology',
          'req_cogagulation',
          'req_electrolytes',
          'req_liverFunction',
          'req_renalProfile',
          'req_bloodGas',
          'req_urineAnalysis',
          'req_comments'
        ],
        'hasRecHeader': true
      },
      'histologyRequisitions': {
        'elementKey': 'histologyRequisitions',
        'pageElementIndex': '3',
        'pageKey': 'labRequisitions',
        'tableKey': 'histologyRequisitions',
        'isTable': true,
        'label': 'Histology',
        'addButtonText': 'Add a histology requisition',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'histologyRequisitions_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'histologyRequisitions_name',
              'histologyRequisitions_profession',
              'histologyRequisitions_day',
              'histologyRequisitions_time'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'reqH_dateRequired'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'reqH_reason'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'reqH_type'
            ]
          },
          {
            'ehr_list_index': '5',
            'items': [
              'reqH_location'
            ]
          },
          {
            'ehr_list_index': '6',
            'items': [
              'reqH_comments'
            ]
          }
        ],
        'form': {
          'elementKey': 'histologyRequisitions',
          'label': 'Histology',
          'addButtonText': 'Add a histology requisition',
          'formOption': 'transpose',
          'formKey': 'histologyRequisitions',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group128',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'histologyRequisitions_name',
                'histologyRequisitions_profession',
                'histologyRequisitions_day',
                'histologyRequisitions_time'
              ]
            },
            {
              'elementKey': 'ehr_group129',
              'label': 'Requisition',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'reqH_noticeLabel',
                'reqH_dateRequired',
                'reqH_reason'
              ]
            },
            {
              'elementKey': 'ehr_group130',
              'label': 'Test',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '3',
              'gChildren': [
                'reqH_type',
                'reqH_location',
                'reqH_comments'
              ]
            }
          ],
          'ehr_data': {
            'histologyRequisitions_name': '',
            'histologyRequisitions_profession': '',
            'histologyRequisitions_day': '',
            'histologyRequisitions_time': '',
            'reqH_dateRequired': '',
            'reqH_reason': '',
            'reqH_type': '',
            'reqH_location': '',
            'reqH_comments': ''
          }
        },
        'tableChildren': [
          'histologyRequisitions_id',
          'histologyRequisitions_name',
          'histologyRequisitions_profession',
          'histologyRequisitions_day',
          'histologyRequisitions_time',
          'reqH_dateRequired',
          'reqH_reason',
          'reqH_type',
          'reqH_location',
          'reqH_comments'
        ],
        'hasRecHeader': true
      },
      'med_image_req': {
        'elementKey': 'med_image_req',
        'pageElementIndex': '4',
        'pageKey': 'labRequisitions',
        'tableKey': 'med_image_req',
        'isTable': true,
        'label': 'Medical Imaging',
        'addButtonText': 'Add a medical imaging requisition',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'med_image_req_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'med_image_req_name',
              'med_image_req_profession',
              'med_image_req_day',
              'med_image_req_time'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'reqMi_type'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'reqMi_dateRequired'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'reqMi_reason'
            ]
          },
          {
            'ehr_list_index': '5',
            'items': [
              'reqMi_Location'
            ]
          },
          {
            'ehr_list_index': '6',
            'items': [
              'reqMi_mobile'
            ]
          },
          {
            'ehr_list_index': '7',
            'items': [
              'reqMi_comments'
            ]
          }
        ],
        'form': {
          'elementKey': 'med_image_req',
          'label': 'Medical Imaging',
          'addButtonText': 'Add a medical imaging requisition',
          'formOption': 'transpose',
          'formKey': 'med_image_req',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group131',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'med_image_req_name',
                'med_image_req_profession',
                'med_image_req_day',
                'med_image_req_time'
              ]
            },
            {
              'elementKey': 'reqMi_notice',
              'label': 'Requisition',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'reqMi_noticeLabel',
                'reqMi_type',
                'reqMi_dateRequired'
              ]
            },
            {
              'elementKey': 'ehr_group132',
              'label': 'Test',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '3',
              'gChildren': [
                'reqMi_reason',
                'reqMi_Location',
                'reqMi_mobile',
                'reqMi_comments'
              ]
            }
          ],
          'ehr_data': {
            'med_image_req_name': '',
            'med_image_req_profession': '',
            'med_image_req_day': '',
            'med_image_req_time': '',
            'reqMi_type': '',
            'reqMi_dateRequired': '',
            'reqMi_reason': '',
            'reqMi_Location': '',
            'reqMi_mobile': '',
            'reqMi_comments': ''
          }
        },
        'tableChildren': [
          'med_image_req_id',
          'med_image_req_name',
          'med_image_req_profession',
          'med_image_req_day',
          'med_image_req_time',
          'reqMi_type',
          'reqMi_dateRequired',
          'reqMi_reason',
          'reqMi_Location',
          'reqMi_mobile',
          'reqMi_comments'
        ],
        'hasRecHeader': true
      },
      'microRequisitions': {
        'elementKey': 'microRequisitions',
        'pageElementIndex': '5',
        'pageKey': 'labRequisitions',
        'tableKey': 'microRequisitions',
        'isTable': true,
        'label': 'Microbiology',
        'addButtonText': 'Add a microbiology requisition',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'microRequisitions_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'microRequisitions_name',
              'microRequisitions_profession',
              'microRequisitions_day',
              'microRequisitions_time'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'reqMicro_dateRequired'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'reqMicro_reason'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'reqMicro_culture'
            ]
          },
          {
            'ehr_list_index': '5',
            'items': [
              'reqMicro_location'
            ]
          },
          {
            'ehr_list_index': '6',
            'items': [
              'reqMicro_comments'
            ]
          }
        ],
        'form': {
          'elementKey': 'microRequisitions',
          'label': 'Microbiology',
          'addButtonText': 'Add a microbiology requisition',
          'formOption': 'transpose',
          'formKey': 'microRequisitions',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group133',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'microRequisitions_name',
                'microRequisitions_profession',
                'microRequisitions_day',
                'microRequisitions_time'
              ]
            },
            {
              'elementKey': 'ehr_group134',
              'label': 'Requisition',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'reqMicro_noticeLabel',
                'reqMicro_dateRequired',
                'reqMicro_reason'
              ]
            },
            {
              'elementKey': 'ehr_group135',
              'label': 'Test',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '3',
              'gChildren': [
                'reqMicro_culture',
                'reqMicro_location',
                'reqMicro_comments'
              ]
            }
          ],
          'ehr_data': {
            'microRequisitions_name': '',
            'microRequisitions_profession': '',
            'microRequisitions_day': '',
            'microRequisitions_time': '',
            'reqMicro_dateRequired': '',
            'reqMicro_reason': '',
            'reqMicro_culture': '',
            'reqMicro_location': '',
            'reqMicro_comments': ''
          }
        },
        'tableChildren': [
          'microRequisitions_id',
          'microRequisitions_name',
          'microRequisitions_profession',
          'microRequisitions_day',
          'microRequisitions_time',
          'reqMicro_dateRequired',
          'reqMicro_reason',
          'reqMicro_culture',
          'reqMicro_location',
          'reqMicro_comments'
        ],
        'hasRecHeader': true
      },
      'reqTroponinTable': {
        'elementKey': 'reqTroponinTable',
        'pageElementIndex': '6',
        'pageKey': 'labRequisitions',
        'tableKey': 'reqTroponinTable',
        'isTable': true,
        'label': 'Troponin',
        'addButtonText': 'Add a troponin lab requisition',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'reqTroponinTable_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'reqTroponinTable_name',
              'reqTroponinTable_profession',
              'reqTroponinTable_day',
              'reqTroponinTable_time',
              'reqT_dateRequired'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'reqT_reason',
              'reqt_tropinin'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'reqt_comments'
            ]
          }
        ],
        'form': {
          'elementKey': 'reqTroponinTable',
          'label': 'Troponin',
          'addButtonText': 'Add a troponin lab requisition',
          'formOption': 'transpose',
          'formKey': 'reqTroponinTable',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group136',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'reqTroponinTable_name',
                'reqTroponinTable_profession',
                'reqTroponinTable_day',
                'reqTroponinTable_time'
              ]
            },
            {
              'elementKey': 'ehr_group137',
              'label': 'Requisition',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'reqT_dateRequired',
                'reqT_reason'
              ]
            },
            {
              'elementKey': 'ehr_group138',
              'label': 'Test',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '3',
              'gChildren': [
                'reqt_tropinin',
                'reqt_comments'
              ]
            }
          ],
          'ehr_data': {
            'reqTroponinTable_name': '',
            'reqTroponinTable_profession': '',
            'reqTroponinTable_day': '',
            'reqTroponinTable_time': '',
            'reqT_dateRequired': '',
            'reqT_reason': '',
            'reqt_tropinin': '',
            'reqt_comments': ''
          }
        },
        'tableChildren': [
          'reqTroponinTable_id',
          'reqTroponinTable_name',
          'reqTroponinTable_profession',
          'reqTroponinTable_day',
          'reqTroponinTable_time',
          'reqT_dateRequired',
          'reqT_reason',
          'reqt_tropinin',
          'reqt_comments'
        ],
        'hasRecHeader': true
      }
    }
  },
  'medicationOrders': {
    'pageDataKey': 'medicationOrders',
    'pageTitle': 'Medication orders',
    'pIndex': '25',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'table_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'medicationOrders.name'
      },
      {
        'elementKey': 'table_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'table_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'medicationOrders.profession'
      },
      {
        'elementKey': 'table_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'medicationOrders.day'
      },
      {
        'elementKey': 'table_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'medicationOrders.time'
      },
      {
        'elementKey': 'medication',
        'formIndex': '1',
        'formCss': 'grid-span-2-columns',
        'inputType': 'lookahead',
        'label': '<a href=\'/assets/static-databases/drug.txt\' target=\'_blank\'>Medication</a>',
        'tableColumn': '2',
        'tableLabel': 'Medication',
        'fqn': 'medicationOrders.medication'
      },
      {
        'elementKey': 'dose',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Dose',
        'tableColumn': '3',
        'tableLabel': 'Dose',
        'fqn': 'medicationOrders.dose'
      },
      {
        'elementKey': 'route',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Route',
        'options': [
          {
            'key': 'Oral',
            'text': 'Oral'
          },
          {
            'key': 'Inhaler',
            'text': 'Inhaler'
          },
          {
            'key': 'Intravenous',
            'text': 'Intravenous'
          },
          {
            'key': 'Intramuscular',
            'text': 'Intramuscular'
          },
          {
            'key': 'Nasal',
            'text': 'Nasal'
          },
          {
            'key': 'Nebulized',
            'text': 'Nebulized'
          },
          {
            'key': 'Subcutaneous',
            'text': 'Subcutaneous'
          },
          {
            'key': 'Sublingual',
            'text': 'Sublingual'
          },
          {
            'key': 'Rectal',
            'text': 'Rectal'
          },
          {
            'key': 'Topical',
            'text': 'Topical'
          },
          {
            'key': 'Vaginal',
            'text': 'Vaginal'
          }
        ],
        'tableColumn': '4',
        'tableLabel': 'Route',
        'fqn': 'medicationOrders.route'
      },
      {
        'elementKey': 'startMeds',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Start day',
        'tableColumn': '5',
        'tableLabel': 'Start day',
        'fqn': 'medicationOrders.startMeds'
      },
      {
        'elementKey': 'endMeds',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'End day',
        'tableColumn': '6',
        'tableLabel': 'End day',
        'fqn': 'medicationOrders.endMeds'
      },
      {
        'elementKey': 'administration',
        'defaultValue': 'sched',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Administration',
        'options': [
          {
            'key': 'sched',
            'text': 'Scheduled'
          },
          {
            'key': 'prn',
            'text': 'PRN (as needed)'
          },
          {
            'key': 'once',
            'text': 'Once'
          },
          {
            'key': 'stat',
            'text': 'Stat'
          },
          {
            'key': 'od',
            'text': 'OD (Once a Day)'
          },
          {
            'key': 'set',
            'text': 'Set times'
          }
        ],
        'tableColumn': '7',
        'tableLabel': 'Administration',
        'fqn': 'medicationOrders.administration'
      },
      {
        'elementKey': 'scheduled',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Scheduled',
        'options': [
          {
            'key': 'BID / q12h',
            'text': 'BID / q12h'
          },
          {
            'key': 'TID',
            'text': 'TID'
          },
          {
            'key': 'q8h',
            'text': 'q8h'
          },
          {
            'key': 'QID',
            'text': 'QID'
          },
          {
            'key': 'q6h',
            'text': 'q6h'
          },
          {
            'key': 'q4h',
            'text': 'q4h'
          }
        ],
        'tableColumn': '9',
        'tableLabel': 'Scheduled',
        'fqn': 'medicationOrders.scheduled'
      },
      {
        'elementKey': 'prn1',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'PRN 1',
        'tableColumn': '10',
        'validation': 'time24',
        'fqn': 'medicationOrders.prn1'
      },
      {
        'elementKey': 'prn2',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'PRN 2',
        'tableColumn': '11',
        'validation': 'time24',
        'fqn': 'medicationOrders.prn2'
      },
      {
        'elementKey': 'prn3',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'PRN 3',
        'tableColumn': '12',
        'validation': 'time24',
        'fqn': 'medicationOrders.prn3'
      },
      {
        'elementKey': 'prn4',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'PRN 4',
        'tableColumn': '13',
        'validation': 'time24',
        'fqn': 'medicationOrders.prn4'
      },
      {
        'elementKey': 'prn5',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'PRN 5',
        'tableColumn': '14',
        'validation': 'time24',
        'fqn': 'medicationOrders.prn5'
      },
      {
        'elementKey': 'prn6',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'PRN 6',
        'tableColumn': '15',
        'validation': 'time24',
        'fqn': 'medicationOrders.prn6'
      },
      {
        'elementKey': 'once',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Once',
        'tableColumn': '10',
        'fqn': 'medicationOrders.once'
      },
      {
        'elementKey': 'stat',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Stat',
        'tableColumn': '10',
        'fqn': 'medicationOrders.stat'
      },
      {
        'elementKey': 'instructions',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Instructions',
        'tableColumn': '16',
        'tableLabel': 'Instructions',
        'fqn': 'medicationOrders.instructions'
      },
      {
        'elementKey': 'reason',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Reason',
        'tableColumn': '17',
        'tableLabel': 'Reason',
        'fqn': 'medicationOrders.reason'
      },
      {
        'elementKey': 'notes',
        'formIndex': '1',
        'inputType': 'textarea',
        'label': 'Notes',
        'tableColumn': '18',
        'tableLabel': 'Notes',
        'fqn': 'medicationOrders.notes'
      },
      {
        'elementKey': 'medicationOrdersTable_name',
        'formIndex': '2',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'medicationOrders.name'
      },
      {
        'elementKey': 'medicationOrdersTable_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'medicationOrdersTable_profession',
        'formIndex': '2',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'medicationOrders.profession'
      },
      {
        'elementKey': 'medicationOrdersTable_day',
        'formIndex': '2',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'medicationOrders.day'
      },
      {
        'elementKey': 'medicationOrdersTable_time',
        'formIndex': '2',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'medicationOrders.time'
      },
      {
        'elementKey': 'med_timing',
        'formIndex': '2',
        'inputType': 'select',
        'label': 'Timing',
        'options': [
          {
            'key': 'cont',
            'text': 'Continuous'
          },
          {
            'key': 'od',
            'text': 'OD (Once a Day)'
          },
          {
            'key': 'once',
            'text': 'Once'
          },
          {
            'key': 'prn',
            'text': 'PRN (as needed)'
          },
          {
            'key': 'sched',
            'text': 'Scheduled'
          },
          {
            'key': 'set',
            'text': 'Set times'
          },
          {
            'key': 'stat',
            'text': 'Stat'
          }
        ],
        'tableColumn': '2',
        'fqn': 'medicationOrders.med_timing'
      },
      {
        'elementKey': 'med_route',
        'formIndex': '2',
        'inputType': 'select',
        'label': 'Route',
        'options': [
          {
            'key': 'oral',
            'text': 'Oral'
          },
          {
            'key': 'bucc',
            'text': 'Buccal'
          },
          {
            'key': 'cuta',
            'text': 'Cutaneous'
          },
          {
            'key': 'impl',
            'text': 'Implant'
          },
          {
            'key': 'inha',
            'text': 'Inhalation'
          },
          {
            'key': 'inje',
            'text': 'Injection'
          },
          {
            'key': 'intra',
            'text': 'Intravenous'
          },
          {
            'key': 'nasa',
            'text': 'Nasal'
          },
          {
            'key': 'nebu',
            'text': 'Nebulization'
          },
          {
            'key': 'ocul',
            'text': 'Ocular'
          },
          {
            'key': 'otic',
            'text': 'Otic'
          },
          {
            'key': 'rect',
            'text': 'Rectal'
          },
          {
            'key': 'subl',
            'text': 'Sublingual'
          },
          {
            'key': 'tran',
            'text': 'Transdermal'
          },
          {
            'key': 'vagi',
            'text': 'Vaginal'
          }
        ],
        'tableColumn': '3',
        'fqn': 'medicationOrders.med_route'
      },
      {
        'elementKey': 'med_reason',
        'formIndex': '2',
        'formCss': 'grid-span-3-columns',
        'inputType': 'text',
        'label': 'Reason',
        'tableColumn': '4',
        'fqn': 'medicationOrders.med_reason'
      },
      {
        'elementKey': 'med_injectionLocation',
        'formIndex': '2',
        'inputType': 'select',
        'label': 'Injection location',
        'options': [
          {
            'key': 'arterial',
            'text': 'Arterial'
          },
          {
            'key': 'epidural',
            'text': 'Epidural'
          },
          {
            'key': 'intramuscular',
            'text': 'Intramuscular'
          },
          {
            'key': 'intraosseous',
            'text': 'Intraosseous'
          },
          {
            'key': 'intraperitoneal',
            'text': 'Intraperitoneal'
          },
          {
            'key': 'intrathecal',
            'text': 'Intrathecal'
          },
          {
            'key': 'intravenous',
            'text': 'Intravenous'
          },
          {
            'key': 'subcutaneous',
            'text': 'Subcutaneous'
          }
        ],
        'tableColumn': '5',
        'fqn': 'medicationOrders.med_injectionLocation'
      },
      {
        'elementKey': 'med_medication',
        'formIndex': '2',
        'helperText': 'For your reference, here is a link to the EdEHR medications table. <a href=\'/assets/static-databases/drug.txt\' target=\'_blank\'>Medications</a>. Source is <a href=\'https://www.canada.ca/en/health-canada/services/drugs-health-products/drug-products/drug-product-database/what-data-extract-drug-product-database.html\' target=\'_blank\'>https://www.canada.ca/en/health-canada/services/drugs-health-products/drug-products/drug-product-database/what-data-extract-drug-product-database.html</a>',
        'inputType': 'lookahead',
        'label': 'Medication',
        'mandatory': true,
        'tableColumn': '6',
        'tableLabel': 'Medication',
        'fqn': 'medicationOrders.med_medication',
        'helperHtml': '<p>For your reference, here is a link to the EdEHR medications table. <a href=\'/assets/static-databases/drug.txt\' target=\'_blank\'>Medications</a>. Source is <a href=\'https://www.canada.ca/en/health-canada/services/drugs-health-products/drug-products/drug-product-database/what-data-extract-drug-product-database.html\' target=\'_blank\'>https://www.canada.ca/en/health-canada/services/drugs-health-products/drug-products/drug-product-database/what-data-extract-drug-product-database.html</a></p>'
      },
      {
        'elementKey': 'med_dose',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Dose',
        'tableColumn': '7',
        'fqn': 'medicationOrders.med_dose'
      },
      {
        'elementKey': 'med_secondSig',
        'formIndex': '2',
        'inputType': 'checkbox',
        'label': 'Second signature required',
        'tableColumn': '8',
        'fqn': 'medicationOrders.med_secondSig'
      },
      {
        'elementKey': 'med_scheduled',
        'formIndex': '2',
        'inputType': 'select',
        'label': 'Scheduled',
        'options': [
          {
            'key': 'BID',
            'text': 'BID'
          },
          {
            'key': 'TID',
            'text': 'TID'
          },
          {
            'key': 'QID',
            'text': 'QID'
          },
          {
            'key': 'Q12H',
            'text': 'Q12H'
          },
          {
            'key': 'Q8H',
            'text': 'Q8H'
          },
          {
            'key': 'Q6H',
            'text': 'Q6H'
          },
          {
            'key': 'Q4H',
            'text': 'Q4H'
          },
          {
            'key': 'Q2H',
            'text': 'Q2H'
          },
          {
            'key': 'Q1H',
            'text': 'Q1H'
          }
        ],
        'tableColumn': '9',
        'fqn': 'medicationOrders.med_scheduled'
      },
      {
        'elementKey': 'med_prnMaxDosage',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Max dosage',
        'tableColumn': '10',
        'fqn': 'medicationOrders.med_prnMaxDosage'
      },
      {
        'elementKey': 'med_time1',
        'dependentOn': 'onChange:med_scheduled',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Time 1',
        'tableColumn': '11',
        'validation': 'time24',
        'fqn': 'medicationOrders.med_time1'
      },
      {
        'elementKey': 'med_time2',
        'dependentOn': 'onChange:med_scheduled',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Time 2',
        'tableColumn': '12',
        'validation': 'time24',
        'fqn': 'medicationOrders.med_time2'
      },
      {
        'elementKey': 'med_time3',
        'dependentOn': 'onChange:med_scheduled',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Time 3',
        'tableColumn': '13',
        'validation': 'time24',
        'fqn': 'medicationOrders.med_time3'
      },
      {
        'elementKey': 'med_time4',
        'dependentOn': 'onChange:med_scheduled',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Time 4',
        'tableColumn': '14',
        'validation': 'time24',
        'fqn': 'medicationOrders.med_time4'
      },
      {
        'elementKey': 'med_time5',
        'dependentOn': 'onChange:med_scheduled',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Time 5',
        'tableColumn': '15',
        'validation': 'time24',
        'fqn': 'medicationOrders.med_time5'
      },
      {
        'elementKey': 'med_time6',
        'dependentOn': 'onChange:med_scheduled',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Time 6',
        'tableColumn': '16',
        'validation': 'time24',
        'fqn': 'medicationOrders.med_time6'
      },
      {
        'elementKey': 'med_continuous_description',
        'formIndex': '2',
        'inputType': 'textarea',
        'label': 'Continuous description',
        'tableColumn': '17',
        'fqn': 'medicationOrders.med_continuous_description'
      },
      {
        'elementKey': 'med_instructions',
        'formIndex': '2',
        'inputType': 'textarea',
        'label': 'Instructions',
        'suffix': 'medAdminRec',
        'tableColumn': '18',
        'tableLabel': 'Instructions',
        'fqn': 'medicationOrders.med_instructions',
        'suffixText': '<p>medAdminRec</p>',
        'suffixHtml': 'medAdminRec'
      }
    ],
    'pageElements': {
      'table': {
        'elementKey': 'table',
        'pageElementIndex': '1',
        'pageKey': 'medicationOrders',
        'tableKey': 'table',
        'isTable': true,
        'label': 'Medication orders v1',
        'addButtonText': 'Add a v1 medication order',
        'tableLabel': 'This data is for an older version and it needs to be updated. Contact EdEHR for assistance.',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'table_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'table_name',
              'table_profession',
              'table_day',
              'table_time'
            ]
          },
          {
            'label': 'Medication',
            'ehr_list_index': '2',
            'items': [
              'medication'
            ]
          },
          {
            'label': 'Dose',
            'ehr_list_index': '3',
            'items': [
              'dose'
            ]
          },
          {
            'label': 'Route',
            'ehr_list_index': '4',
            'items': [
              'route'
            ]
          },
          {
            'label': 'Start day',
            'ehr_list_index': '5',
            'items': [
              'startMeds'
            ]
          },
          {
            'label': 'End day',
            'ehr_list_index': '6',
            'items': [
              'endMeds'
            ]
          },
          {
            'label': 'Administration',
            'ehr_list_index': '7',
            'items': [
              'administration'
            ]
          },
          {
            'label': 'Scheduled',
            'ehr_list_index': '9',
            'items': [
              'scheduled'
            ]
          },
          {
            'ehr_list_index': '10',
            'items': [
              'prn1',
              'once',
              'stat'
            ]
          },
          {
            'ehr_list_index': '11',
            'items': [
              'prn2'
            ]
          },
          {
            'ehr_list_index': '12',
            'items': [
              'prn3'
            ]
          },
          {
            'ehr_list_index': '13',
            'items': [
              'prn4'
            ]
          },
          {
            'ehr_list_index': '14',
            'items': [
              'prn5'
            ]
          },
          {
            'ehr_list_index': '15',
            'items': [
              'prn6'
            ]
          },
          {
            'label': 'Instructions',
            'ehr_list_index': '16',
            'items': [
              'instructions'
            ]
          },
          {
            'label': 'Reason',
            'ehr_list_index': '17',
            'items': [
              'reason'
            ]
          },
          {
            'label': 'Notes',
            'ehr_list_index': '18',
            'items': [
              'notes'
            ]
          }
        ],
        'form': {
          'elementKey': 'table',
          'label': 'Medication orders v1',
          'addButtonText': 'Add a v1 medication order',
          'formKey': 'table',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group143',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'table_name',
                'table_profession',
                'table_day',
                'table_time'
              ]
            },
            {
              'elementKey': 'ehr_group144',
              'label': 'Medication',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'medication',
                'dose',
                'route',
                'startMeds',
                'endMeds'
              ]
            },
            {
              'elementKey': 'adminGroup',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '3',
              'gChildren': [
                'administration'
              ]
            },
            {
              'elementKey': 'schedGroup',
              'dependentOn': 'visble:administration=sched,prn',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '4',
              'gChildren': [
                'scheduled'
              ]
            },
            {
              'elementKey': 'prnGroup',
              'dependentOn': 'visble:administration=set',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '5',
              'gChildren': [
                'prn1',
                'prn2',
                'prn3',
                'prn4',
                'prn5',
                'prn6'
              ]
            },
            {
              'elementKey': 'onceGroup',
              'dependentOn': 'visble:administration=once',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '6',
              'gChildren': [
                'once'
              ]
            },
            {
              'elementKey': 'statGroup',
              'dependentOn': 'visble:administration=stat',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '7',
              'gChildren': [
                'stat'
              ]
            },
            {
              'elementKey': 'ehr_group145',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '8',
              'gChildren': [
                'instructions',
                'reason',
                'notes'
              ]
            }
          ],
          'ehr_data': {
            'table_name': '',
            'table_profession': '',
            'table_day': '',
            'table_time': '',
            'medication': '',
            'dose': '',
            'route': '',
            'startMeds': '',
            'endMeds': '',
            'administration': 'sched',
            'scheduled': '',
            'prn1': '',
            'prn2': '',
            'prn3': '',
            'prn4': '',
            'prn5': '',
            'prn6': '',
            'once': '',
            'stat': '',
            'instructions': '',
            'reason': '',
            'notes': ''
          }
        },
        'tableChildren': [
          'table_id',
          'table_name',
          'table_profession',
          'table_day',
          'table_time',
          'medication',
          'dose',
          'route',
          'startMeds',
          'endMeds',
          'administration',
          'scheduled',
          'prn1',
          'prn2',
          'prn3',
          'prn4',
          'prn5',
          'prn6',
          'once',
          'stat',
          'instructions',
          'reason',
          'notes'
        ],
        'hasRecHeader': true
      },
      'medicationOrdersTable': {
        'elementKey': 'medicationOrdersTable',
        'pageElementIndex': '2',
        'pageKey': 'medicationOrders',
        'tableKey': 'medicationOrdersTable',
        'isTable': true,
        'label': 'Medication orders',
        'addButtonText': 'Add a medication order',
        'tableAction': 'medAdminRec.marTable',
        'tableActionLabel': 'MAR',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'medicationOrdersTable_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'medicationOrdersTable_name',
              'medicationOrdersTable_profession',
              'medicationOrdersTable_day',
              'medicationOrdersTable_time'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'med_timing'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'med_route'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'med_reason'
            ]
          },
          {
            'ehr_list_index': '5',
            'items': [
              'med_injectionLocation'
            ]
          },
          {
            'label': 'Medication',
            'ehr_list_index': '6',
            'items': [
              'med_medication'
            ]
          },
          {
            'ehr_list_index': '7',
            'items': [
              'med_dose'
            ]
          },
          {
            'ehr_list_index': '8',
            'items': [
              'med_secondSig'
            ]
          },
          {
            'ehr_list_index': '9',
            'items': [
              'med_scheduled'
            ]
          },
          {
            'ehr_list_index': '10',
            'items': [
              'med_prnMaxDosage'
            ]
          },
          {
            'ehr_list_index': '11',
            'items': [
              'med_time1'
            ]
          },
          {
            'ehr_list_index': '12',
            'items': [
              'med_time2'
            ]
          },
          {
            'ehr_list_index': '13',
            'items': [
              'med_time3'
            ]
          },
          {
            'ehr_list_index': '14',
            'items': [
              'med_time4'
            ]
          },
          {
            'ehr_list_index': '15',
            'items': [
              'med_time5'
            ]
          },
          {
            'ehr_list_index': '16',
            'items': [
              'med_time6'
            ]
          },
          {
            'ehr_list_index': '17',
            'items': [
              'med_continuous_description'
            ]
          },
          {
            'label': 'Instructions',
            'ehr_list_index': '18',
            'items': [
              'med_instructions'
            ]
          }
        ],
        'form': {
          'elementKey': 'medicationOrdersTable',
          'label': 'Medication orders',
          'addButtonText': 'Add a medication order',
          'formKey': 'medicationOrdersTable',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group146',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'medicationOrdersTable_name',
                'medicationOrdersTable_profession',
                'medicationOrdersTable_day',
                'medicationOrdersTable_time'
              ]
            },
            {
              'elementKey': 'med_group_main',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'med_timing',
                'med_route',
                'med_reason'
              ]
            },
            {
              'elementKey': 'med_group_inje',
              'dependentOn': 'visble:med_route=inje,intra',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '3',
              'gChildren': [
                'med_injectionLocation'
              ]
            },
            {
              'elementKey': 'med_group_non_continuous',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '4',
              'gChildren': [
                'med_medication',
                'med_dose',
                'med_secondSig'
              ]
            },
            {
              'elementKey': 'med_group_with_times',
              'dependentOn': 'visble:med_timing=prn,sched,set',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '5',
              'gChildren': [
                'med_scheduled'
              ]
            },
            {
              'elementKey': 'med_prn_group',
              'dependentOn': 'visble:med_timing=prn',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '6',
              'gChildren': [
                'med_prnMaxDosage'
              ]
            },
            {
              'elementKey': 'med_group_times',
              'dependentOn': 'visble:med_timing=prn,sched,set',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '7',
              'gChildren': [
                'med_time1',
                'med_time2',
                'med_time3',
                'med_time4',
                'med_time5',
                'med_time6'
              ]
            },
            {
              'elementKey': 'med_group_infusion_c1',
              'dependentOn': 'visble:med_timing=cont',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '8',
              'gChildren': [
                'med_continuous_description'
              ]
            },
            {
              'elementKey': 'med_group_notes',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '9',
              'gChildren': [
                'med_instructions'
              ]
            }
          ],
          'ehr_data': {
            'medicationOrdersTable_name': '',
            'medicationOrdersTable_profession': '',
            'medicationOrdersTable_day': '',
            'medicationOrdersTable_time': '',
            'med_timing': '',
            'med_route': '',
            'med_reason': '',
            'med_injectionLocation': '',
            'med_medication': '',
            'med_dose': '',
            'med_secondSig': '',
            'med_scheduled': '',
            'med_prnMaxDosage': '',
            'med_time1': '',
            'med_time2': '',
            'med_time3': '',
            'med_time4': '',
            'med_time5': '',
            'med_time6': '',
            'med_continuous_description': '',
            'med_instructions': ''
          }
        },
        'tableActionType': 'hideButton',
        'taTargetPageKey': 'medAdminRec',
        'taTargetTableKey': 'marTable',
        'taSourcePageKey': 'medicationOrders',
        'taSourceTableKey': 'medicationOrdersTable',
        'tableChildren': [
          'medicationOrdersTable_id',
          'medicationOrdersTable_name',
          'medicationOrdersTable_profession',
          'medicationOrdersTable_day',
          'medicationOrdersTable_time',
          'med_timing',
          'med_route',
          'med_reason',
          'med_injectionLocation',
          'med_medication',
          'med_dose',
          'med_secondSig',
          'med_scheduled',
          'med_prnMaxDosage',
          'med_time1',
          'med_time2',
          'med_time3',
          'med_time4',
          'med_time5',
          'med_time6',
          'med_continuous_description',
          'med_instructions'
        ],
        'hasRecHeader': true
      }
    }
  },
  'medAdminRec': {
    'pageDataKey': 'medAdminRec',
    'pageTitle': 'Medication administration records',
    'pIndex': '26',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'medStatus',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Medication status',
        'options': [
          {
            'key': 'Active',
            'text': 'Active'
          },
          {
            'key': 'Hold',
            'text': 'Hold'
          },
          {
            'key': 'Discontinued',
            'text': 'Discontinued'
          },
          {
            'key': '',
            'text': ''
          }
        ],
        'tableColumn': '1',
        'tableLabel': 'Medication status',
        'fqn': 'medAdminRec.medStatus'
      },
      {
        'elementKey': 'table_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'adminStatus',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Administration status',
        'options': [
          {
            'key': 'Administered',
            'text': 'Administered'
          },
          {
            'key': 'Refused',
            'text': 'Refused'
          },
          {
            'key': 'Missed',
            'text': 'Missed'
          },
          {
            'key': 'Skipped',
            'text': 'Skipped'
          }
        ],
        'tableColumn': '2',
        'tableLabel': 'Administration status',
        'fqn': 'medAdminRec.adminStatus'
      },
      {
        'elementKey': 'medication',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Medication',
        'tableColumn': '3',
        'tableLabel': 'Medication',
        'fqn': 'medAdminRec.medication'
      },
      {
        'elementKey': 'route',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Route',
        'tableColumn': '4',
        'tableLabel': 'Route',
        'fqn': 'medAdminRec.route'
      },
      {
        'elementKey': 'todayPlan',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Today\'s plan',
        'options': [
          {
            'key': '[Today\'s day] plan',
            'text': '[Today\'s day] plan'
          }
        ],
        'tableColumn': '5',
        'tableLabel': 'Today\'s plan',
        'fqn': 'medAdminRec.todayPlan'
      },
      {
        'elementKey': 'todayGiven',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Today\'s given',
        'options': [
          {
            'key': '[Today\'s day] given',
            'text': '[Today\'s day] given'
          }
        ],
        'tableColumn': '6',
        'tableLabel': 'Today\'s given',
        'fqn': 'medAdminRec.todayGiven'
      },
      {
        'elementKey': 'administeredBy',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Administered by',
        'tableColumn': '7',
        'tableLabel': 'Administered by',
        'fqn': 'medAdminRec.administeredBy'
      },
      {
        'elementKey': 'adminProfession',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Profession',
        'tableColumn': '8',
        'tableLabel': 'Profession',
        'fqn': 'medAdminRec.adminProfession'
      },
      {
        'elementKey': 'administeredTime',
        'formIndex': '1',
        'helperText': 'Enter time delivered or say if not delivered.',
        'inputType': 'text',
        'label': 'Administered time',
        'tableColumn': '9',
        'tableLabel': 'Administered time',
        'fqn': 'medAdminRec.administeredTime',
        'helperHtml': '<p>Enter time delivered or say if not delivered.</p>'
      },
      {
        'elementKey': 'marTable_name',
        'formIndex': '2',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'medAdminRec.name'
      },
      {
        'elementKey': 'marTable_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'marTable_profession',
        'formIndex': '2',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'medAdminRec.profession'
      },
      {
        'elementKey': 'marTable_day',
        'formIndex': '2',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'medAdminRec.day'
      },
      {
        'elementKey': 'marTable_time',
        'formIndex': '2',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'medAdminRec.time'
      },
      {
        'elementKey': 'med_order_embedded',
        'formIndex': '2',
        'embedRef': 'medicationOrders.medicationOrdersTable',
        'inputType': 'ehr_embedded',
        'passToFunction': '[mo_medOrder mo_timing mo_medInstructions mo_id mo_secondSig]',
        'fqn': 'medAdminRec.med_order_embedded'
      },
      {
        'elementKey': 'mo_medOrder',
        'calculationType': 'medOrderSummary(medicationOrders,medicationOrdersTable)',
        'formIndex': '2',
        'formCss': 'grid-span-3-columns',
        'inputType': 'calculatedValue',
        'label': 'Med order',
        'tableColumn': '2',
        'fqn': 'medAdminRec.mo_medOrder'
      },
      {
        'elementKey': 'mo_medInstructions',
        'calculationType': 'embedValue(medicationOrders, medicationOrdersTable, med_instructions)',
        'formIndex': '2',
        'formCss': 'grid-span-3-columns',
        'inputType': 'calculatedValue',
        'label': 'Instructions',
        'fqn': 'medAdminRec.mo_medInstructions'
      },
      {
        'elementKey': 'mo_timing',
        'calculationType': 'embedValue(medicationOrders, medicationOrdersTable, med_timing)',
        'formIndex': '2',
        'inputType': 'calculatedValue',
        'label': 'Timing',
        'tableColumn': '3',
        'fqn': 'medAdminRec.mo_timing'
      },
      {
        'elementKey': 'mo_schedDay',
        'calculationType': 'embedValue(medicationOrders, medicationOrdersTable, med_instructions)',
        'formIndex': '2',
        'formOption': 'elementViewOnly',
        'inputType': 'visitDay',
        'label': 'Scheduled day',
        'tableColumn': '4',
        'fqn': 'medAdminRec.mo_schedDay'
      },
      {
        'elementKey': 'mo_schedTime',
        'formIndex': '2',
        'formOption': 'elementViewOnly',
        'inputType': 'visitTime',
        'label': 'Scheduled time',
        'tableColumn': '5',
        'fqn': 'medAdminRec.mo_schedTime'
      },
      {
        'elementKey': 'mo_id',
        'calculationType': 'embedValue(medicationOrders, medicationOrdersTable, medicationOrdersTable_id)',
        'formIndex': '2',
        'formOption': 'hideElement',
        'inputType': 'calculatedValue',
        'label': 'Med Order Id',
        'fqn': 'medAdminRec.mo_id'
      },
      {
        'elementKey': 'mo_secondSig',
        'calculationType': 'embedValue(medicationOrders, medicationOrdersTable, med_secondSig)',
        'formIndex': '2',
        'formCss': 'grid-span-3-columns',
        'inputType': 'calculatedBool',
        'label': 'Second signature required',
        'tableColumn': '6',
        'fqn': 'medAdminRec.mo_secondSig'
      },
      {
        'elementKey': 'mar_status',
        'formIndex': '2',
        'inputType': 'select',
        'label': 'Status',
        'options': [
          {
            'key': 'Administered',
            'text': 'Administered'
          },
          {
            'key': 'Refused',
            'text': 'Refused'
          },
          {
            'key': 'Missed',
            'text': 'Missed'
          },
          {
            'key': 'Skipped',
            'text': 'Skipped'
          }
        ],
        'tableColumn': '7',
        'fqn': 'medAdminRec.mar_status'
      },
      {
        'elementKey': 'mar_dose',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Dose given',
        'tableColumn': '8',
        'fqn': 'medAdminRec.mar_dose'
      },
      {
        'elementKey': 'mar_route',
        'formIndex': '2',
        'inputType': 'select',
        'label': 'Route',
        'options': [
          {
            'key': 'oral',
            'text': 'Oral'
          },
          {
            'key': 'bucc',
            'text': 'Buccal'
          },
          {
            'key': 'cuta',
            'text': 'Cutaneous'
          },
          {
            'key': 'impl',
            'text': 'Implant'
          },
          {
            'key': 'inha',
            'text': 'Inhalation'
          },
          {
            'key': 'inje',
            'text': 'Injection'
          },
          {
            'key': 'intra',
            'text': 'Intravenous'
          },
          {
            'key': 'nasa',
            'text': 'Nasal'
          },
          {
            'key': 'nebu',
            'text': 'Nebulization'
          },
          {
            'key': 'ocul',
            'text': 'Ocular'
          },
          {
            'key': 'otic',
            'text': 'Otic'
          },
          {
            'key': 'rect',
            'text': 'Rectal'
          },
          {
            'key': 'subl',
            'text': 'Sublingual'
          },
          {
            'key': 'tran',
            'text': 'Transdermal'
          },
          {
            'key': 'vagi',
            'text': 'Vaginal'
          }
        ],
        'tableColumn': '9',
        'fqn': 'medAdminRec.mar_route'
      },
      {
        'elementKey': 'mar_injectionLocation',
        'formIndex': '2',
        'inputType': 'select',
        'label': 'Injection location',
        'options': [
          {
            'key': 'arterial',
            'text': 'Arterial'
          },
          {
            'key': 'epidural',
            'text': 'Epidural'
          },
          {
            'key': 'intramuscular',
            'text': 'Intramuscular'
          },
          {
            'key': 'intraosseous',
            'text': 'Intraosseous'
          },
          {
            'key': 'intraperitoneal',
            'text': 'Intraperitoneal'
          },
          {
            'key': 'intrathecal',
            'text': 'Intrathecal'
          },
          {
            'key': 'intravenous',
            'text': 'Intravenous'
          },
          {
            'key': 'subcutaneous',
            'text': 'Subcutaneous'
          }
        ],
        'tableColumn': '10',
        'fqn': 'medAdminRec.mar_injectionLocation'
      },
      {
        'elementKey': 'mar_comments',
        'formIndex': '2',
        'inputType': 'textarea',
        'label': 'Comments',
        'tableColumn': '11',
        'fqn': 'medAdminRec.mar_comments'
      },
      {
        'elementKey': 'mar_secSigName',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Second Signature',
        'tableColumn': '12',
        'fqn': 'medAdminRec.mar_secSigName'
      }
    ],
    'pageElements': {
      'table': {
        'elementKey': 'table',
        'pageElementIndex': '1',
        'pageKey': 'medAdminRec',
        'tableKey': 'table',
        'isTable': true,
        'label': 'Medication administration records',
        'addButtonText': 'Administered',
        'tableLabel': 'This data is for an older version and it needs to be updated. Contact EdEHR for assistance.',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'table_id'
            ]
          },
          {
            'label': 'Medication status',
            'ehr_list_index': '1',
            'items': [
              'medStatus'
            ]
          },
          {
            'label': 'Administration status',
            'ehr_list_index': '2',
            'items': [
              'adminStatus'
            ]
          },
          {
            'label': 'Medication',
            'ehr_list_index': '3',
            'items': [
              'medication'
            ]
          },
          {
            'label': 'Route',
            'ehr_list_index': '4',
            'items': [
              'route'
            ]
          },
          {
            'label': 'Today\'s plan',
            'ehr_list_index': '5',
            'items': [
              'todayPlan'
            ]
          },
          {
            'label': 'Today\'s given',
            'ehr_list_index': '6',
            'items': [
              'todayGiven'
            ]
          },
          {
            'label': 'Administered by',
            'ehr_list_index': '7',
            'items': [
              'administeredBy'
            ]
          },
          {
            'label': 'Profession',
            'ehr_list_index': '8',
            'items': [
              'adminProfession'
            ]
          },
          {
            'label': 'Administered time',
            'ehr_list_index': '9',
            'items': [
              'administeredTime'
            ]
          }
        ],
        'form': {
          'elementKey': 'table',
          'label': 'Medication administration records',
          'addButtonText': 'Administered',
          'formKey': 'table',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group147',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '1',
              'gChildren': [
                'medStatus',
                'adminStatus',
                'medication',
                'route',
                'todayPlan',
                'todayGiven',
                'administeredBy',
                'adminProfession',
                'administeredTime'
              ]
            }
          ],
          'ehr_data': {
            'medStatus': '',
            'adminStatus': '',
            'medication': '',
            'route': '',
            'todayPlan': '',
            'todayGiven': '',
            'administeredBy': '',
            'adminProfession': '',
            'administeredTime': ''
          }
        },
        'tableChildren': [
          'table_id',
          'medStatus',
          'adminStatus',
          'medication',
          'route',
          'todayPlan',
          'todayGiven',
          'administeredBy',
          'adminProfession',
          'administeredTime'
        ]
      },
      'marTable': {
        'elementKey': 'marTable',
        'pageElementIndex': '2',
        'pageKey': 'medAdminRec',
        'tableKey': 'marTable',
        'isTable': true,
        'label': 'Medication administration records',
        'addButtonText': 'NONE',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'marTable_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'marTable_name',
              'marTable_profession',
              'marTable_day',
              'marTable_time'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'mo_medOrder'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'mo_timing'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'mo_schedDay'
            ]
          },
          {
            'ehr_list_index': '5',
            'items': [
              'mo_schedTime'
            ]
          },
          {
            'ehr_list_index': '6',
            'items': [
              'mo_secondSig'
            ]
          },
          {
            'ehr_list_index': '7',
            'items': [
              'mar_status'
            ]
          },
          {
            'ehr_list_index': '8',
            'items': [
              'mar_dose'
            ]
          },
          {
            'ehr_list_index': '9',
            'items': [
              'mar_route'
            ]
          },
          {
            'ehr_list_index': '10',
            'items': [
              'mar_injectionLocation'
            ]
          },
          {
            'ehr_list_index': '11',
            'items': [
              'mar_comments'
            ]
          },
          {
            'ehr_list_index': '12',
            'items': [
              'mar_secSigName'
            ]
          }
        ],
        'form': {
          'elementKey': 'marTable',
          'label': 'Medication administration records',
          'addButtonText': 'NONE',
          'formKey': 'marTable',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group148',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'marTable_name',
                'marTable_profession',
                'marTable_day',
                'marTable_time'
              ]
            },
            {
              'elementKey': 'ehr_group149',
              'formOption': 'hideGroup',
              'label': 'Med order ref',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'med_order_embedded'
              ]
            },
            {
              'elementKey': 'ehr_group150',
              'label': 'Med order',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '3',
              'gChildren': [
                'mo_medOrder',
                'mo_medInstructions',
                'mo_timing',
                'mo_schedDay',
                'mo_schedTime',
                'mo_id',
                'mo_secondSig'
              ]
            },
            {
              'elementKey': 'ehr_group151',
              'label': 'Med admin',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '4',
              'gChildren': [
                'mar_status',
                'mar_dose',
                'mar_route'
              ]
            },
            {
              'elementKey': 'mar_group_inje',
              'dependentOn': 'visble:mar_route=inje,intra',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '5',
              'gChildren': [
                'mar_injectionLocation'
              ]
            },
            {
              'elementKey': 'mar_group_notes',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '6',
              'gChildren': [
                'mar_comments'
              ]
            },
            {
              'elementKey': 'mar_group_sec',
              'dependentOn': 'visble:mo_secondSig',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '7',
              'gChildren': [
                'mar_secSigName'
              ]
            }
          ],
          'ehr_data': {
            'marTable_name': '',
            'marTable_profession': '',
            'marTable_day': '',
            'marTable_time': '',
            'med_order_embedded': '',
            'mo_medOrder': '',
            'mo_medInstructions': '',
            'mo_timing': '',
            'mo_schedDay': '',
            'mo_schedTime': '',
            'mo_id': '',
            'mo_secondSig': '',
            'mar_status': '',
            'mar_dose': '',
            'mar_route': '',
            'mar_injectionLocation': '',
            'mar_comments': '',
            'mar_secSigName': ''
          }
        },
        'tableChildren': [
          'marTable_id',
          'marTable_name',
          'marTable_profession',
          'marTable_day',
          'marTable_time',
          'mo_medOrder',
          'mo_timing',
          'mo_schedDay',
          'mo_schedTime',
          'mo_secondSig',
          'mar_status',
          'mar_dose',
          'mar_route',
          'mar_injectionLocation',
          'mar_comments',
          'mar_secSigName'
        ],
        'hasRecHeader': true
      }
    }
  },
  'dischargeSummary': {
    'pageDataKey': 'dischargeSummary',
    'pageTitle': 'Discharge summary',
    'pIndex': '27',
    'hasGridForm': true,
    'pageChildren': [
      {
        'elementKey': 'admissionDay',
        'defaultValue': '0',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Admission day',
        'fqn': 'dischargeSummary.admissionDay'
      },
      {
        'elementKey': 'dischargingPhysician/np',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Discharging physician/NP',
        'options': [
          {
            'key': 'Dr. Notley',
            'text': 'Dr. Notley'
          },
          {
            'key': 'Dr. Hunicutt',
            'text': 'Dr. Hunicutt'
          },
          {
            'key': 'Dr. Lee',
            'text': 'Dr. Lee'
          },
          {
            'key': 'Dr. Malik',
            'text': 'Dr. Malik'
          },
          {
            'key': 'Dr. Ng',
            'text': 'Dr. Ng'
          },
          {
            'key': 'Dr. Walker',
            'text': 'Dr. Walker'
          },
          {
            'key': 'Dr. Brooks',
            'text': 'Dr. Brooks'
          }
        ],
        'fqn': 'dischargeSummary.dischargingPhysician/np'
      },
      {
        'elementKey': 'spacer117',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'dischargeSummary.spacer117'
      },
      {
        'elementKey': 'clinicalSummary',
        'formIndex': '1',
        'formCss': 'grid-span-2-columns',
        'inputType': 'textarea',
        'label': 'Clinical summary',
        'fqn': 'dischargeSummary.clinicalSummary'
      },
      {
        'elementKey': 'dischargeDiagnosis',
        'formIndex': '2',
        'inputType': 'textarea',
        'label': 'Discharge diagnosis',
        'fqn': 'dischargeSummary.dischargeDiagnosis'
      },
      {
        'elementKey': 'dischargeEducation',
        'formIndex': '2',
        'inputType': 'textarea',
        'label': 'Discharge education',
        'fqn': 'dischargeSummary.dischargeEducation'
      },
      {
        'elementKey': 'spacer119',
        'formIndex': '2',
        'inputType': 'spacer',
        'fqn': 'dischargeSummary.spacer119'
      },
      {
        'elementKey': 'dischargeDay',
        'formIndex': '2',
        'inputType': 'visitDay',
        'label': 'Discharge day',
        'fqn': 'dischargeSummary.dischargeDay'
      },
      {
        'elementKey': 'dischargeTime',
        'formIndex': '2',
        'inputType': 'visitTime',
        'label': 'Discharge time',
        'fqn': 'dischargeSummary.dischargeTime'
      },
      {
        'elementKey': 'dischargedTo',
        'formIndex': '2',
        'inputType': 'select',
        'label': 'Discharged to',
        'options': [
          {
            'key': 'Home',
            'text': 'Home'
          },
          {
            'key': 'Expired',
            'text': 'Expired'
          },
          {
            'key': 'Transferred',
            'text': 'Transferred'
          }
        ],
        'fqn': 'dischargeSummary.dischargedTo'
      },
      {
        'elementKey': 'transferedTo',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Transferred to',
        'fqn': 'dischargeSummary.transferedTo'
      },
      {
        'elementKey': 'leavingBy',
        'formIndex': '2',
        'inputType': 'select',
        'label': 'Leaving by',
        'options': [
          {
            'key': 'Taxi',
            'text': 'Taxi'
          },
          {
            'key': 'Family',
            'text': 'Family'
          },
          {
            'key': 'Ambulance',
            'text': 'Ambulance'
          },
          {
            'key': 'Walk out/wheelchair',
            'text': 'Walk out/wheelchair'
          }
        ],
        'fqn': 'dischargeSummary.leavingBy'
      }
    ],
    'pageElements': {
      'pageForm': {
        'elementKey': 'pageForm',
        'pageElementIndex': '1',
        'formKey': 'pageForm',
        'isPageForm': true,
        'ehr_groups': [
          {
            'elementKey': 'ehr_group116',
            'formCss': 'section-divider grid-left-to-right-3',
            'gIndex': '1',
            'gChildren': [
              'admissionDay',
              'dischargingPhysician/np',
              'spacer117',
              'clinicalSummary'
            ]
          }
        ]
      },
      'pageForm2': {
        'elementKey': 'pageForm2',
        'pageElementIndex': '2',
        'formKey': 'pageForm2',
        'isPageForm': true,
        'ehr_groups': [
          {
            'elementKey': 'ehr_group118',
            'formCss': 'grid-left-to-right-3',
            'gIndex': '1',
            'gChildren': [
              'dischargeDiagnosis',
              'dischargeEducation',
              'spacer119',
              'dischargeDay',
              'dischargeTime',
              'dischargedTo',
              'transferedTo',
              'leavingBy'
            ]
          }
        ]
      }
    }
  },
  'billing': {
    'pageDataKey': 'billing',
    'pageTitle': 'Billing',
    'pIndex': '28',
    'hasGridForm': true,
    'pageChildren': [
      {
        'elementKey': 'paymentType',
        'formIndex': '1',
        'inputType': 'checkset',
        'label': 'Payment type',
        'options': [
          {
            'key': 'msp',
            'text': 'MSP'
          },
          {
            'key': 'thirdParty',
            'text': 'Third party'
          },
          {
            'key': 'federal',
            'text': 'Federal'
          }
        ],
        'fqn': 'billing.paymentType'
      }
    ],
    'pageElements': {
      'pageForm': {
        'elementKey': 'pageForm',
        'pageElementIndex': '1',
        'formKey': 'pageForm',
        'isPageForm': true,
        'ehr_groups': [
          {
            'elementKey': 'ehr_group120',
            'formCss': 'grid-left-to-right-3',
            'gIndex': '1',
            'gChildren': [
              'paymentType'
            ]
          }
        ]
      }
    }
  },
  'progressNotes': {
    'pageDataKey': 'progressNotes',
    'pageTitle': 'Progress notes',
    'pIndex': '29',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'table_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'progressNotes.name'
      },
      {
        'elementKey': 'table_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'table_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'progressNotes.profession'
      },
      {
        'elementKey': 'table_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'progressNotes.day'
      },
      {
        'elementKey': 'table_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'progressNotes.time'
      },
      {
        'elementKey': 'note',
        'formIndex': '1',
        'inputType': 'textarea',
        'label': 'Encounter note',
        'tableColumn': '2',
        'tableLabel': 'Encounter note',
        'fqn': 'progressNotes.note'
      }
    ],
    'pageElements': {
      'table': {
        'elementKey': 'table',
        'pageElementIndex': '1',
        'pageKey': 'progressNotes',
        'tableKey': 'table',
        'isTable': true,
        'label': 'Progress notes',
        'addButtonText': 'Add an encounter note',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'table_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'table_name',
              'table_profession',
              'table_day',
              'table_time'
            ]
          },
          {
            'label': 'Encounter note',
            'ehr_list_index': '2',
            'items': [
              'note'
            ]
          }
        ],
        'form': {
          'elementKey': 'table',
          'label': 'Progress notes',
          'addButtonText': 'Add an encounter note',
          'formKey': 'table',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group370',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'table_name',
                'table_profession',
                'table_day',
                'table_time'
              ]
            },
            {
              'elementKey': 'ehr_group371',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '2',
              'gChildren': [
                'note'
              ]
            }
          ],
          'ehr_data': {
            'table_name': '',
            'table_profession': '',
            'table_day': '',
            'table_time': '',
            'note': ''
          }
        },
        'tableChildren': [
          'table_id',
          'table_name',
          'table_profession',
          'table_day',
          'table_time',
          'note'
        ],
        'hasRecHeader': true
      }
    }
  },
  'carePlan': {
    'pageDataKey': 'carePlan',
    'pageTitle': 'Interprofessional plan of care',
    'pIndex': '30',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'table_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'carePlan.name'
      },
      {
        'elementKey': 'table_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'table_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'carePlan.profession'
      },
      {
        'elementKey': 'table_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'carePlan.day'
      },
      {
        'elementKey': 'table_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'carePlan.time'
      },
      {
        'elementKey': 'clinical',
        'formIndex': '1',
        'inputType': 'textarea',
        'label': 'Clinical issue',
        'tableColumn': '2',
        'tableLabel': 'Clinical issue',
        'fqn': 'carePlan.clinical'
      },
      {
        'elementKey': 'goal',
        'formIndex': '1',
        'inputType': 'textarea',
        'label': 'Goal of care',
        'tableColumn': '3',
        'tableLabel': 'Goal of care',
        'fqn': 'carePlan.goal'
      },
      {
        'elementKey': 'interventions',
        'formIndex': '1',
        'inputType': 'textarea',
        'label': 'Intervention',
        'tableColumn': '4',
        'tableLabel': 'Intervention',
        'fqn': 'carePlan.interventions'
      },
      {
        'elementKey': 'evaluation',
        'formIndex': '1',
        'inputType': 'textarea',
        'label': 'Evaluation of intervention',
        'tableColumn': '5',
        'tableLabel': 'Evaluation of intervention',
        'fqn': 'carePlan.evaluation'
      },
      {
        'elementKey': 'status',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Status',
        'options': [
          {
            'key': 'In progress',
            'text': 'In progress'
          },
          {
            'key': 'Complete',
            'text': 'Complete'
          }
        ],
        'tableColumn': '6',
        'tableLabel': 'Status',
        'fqn': 'carePlan.status'
      }
    ],
    'pageElements': {
      'table': {
        'elementKey': 'table',
        'pageElementIndex': '1',
        'pageKey': 'carePlan',
        'tableKey': 'table',
        'isTable': true,
        'label': 'Care plan',
        'addButtonText': 'Add a care plan',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'table_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'table_name',
              'table_profession',
              'table_day',
              'table_time'
            ]
          },
          {
            'label': 'Clinical issue',
            'ehr_list_index': '2',
            'items': [
              'clinical'
            ]
          },
          {
            'label': 'Goal of care',
            'ehr_list_index': '3',
            'items': [
              'goal'
            ]
          },
          {
            'label': 'Intervention',
            'ehr_list_index': '4',
            'items': [
              'interventions'
            ]
          },
          {
            'label': 'Evaluation of intervention',
            'ehr_list_index': '5',
            'items': [
              'evaluation'
            ]
          },
          {
            'label': 'Status',
            'ehr_list_index': '6',
            'items': [
              'status'
            ]
          }
        ],
        'form': {
          'elementKey': 'table',
          'label': 'Care plan',
          'addButtonText': 'Add a care plan',
          'formKey': 'table',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group372',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'table_name',
                'table_profession',
                'table_day',
                'table_time'
              ]
            },
            {
              'elementKey': 'ehr_group373',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'clinical',
                'goal',
                'interventions',
                'evaluation',
                'status'
              ]
            }
          ],
          'ehr_data': {
            'table_name': '',
            'table_profession': '',
            'table_day': '',
            'table_time': '',
            'clinical': '',
            'goal': '',
            'interventions': '',
            'evaluation': '',
            'status': ''
          }
        },
        'tableChildren': [
          'table_id',
          'table_name',
          'table_profession',
          'table_day',
          'table_time',
          'clinical',
          'goal',
          'interventions',
          'evaluation',
          'status'
        ],
        'hasRecHeader': true
      }
    }
  },
  'consults': {
    'pageDataKey': 'consults',
    'pageTitle': 'Consults',
    'pIndex': '31',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'table_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'consults.name'
      },
      {
        'elementKey': 'table_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'table_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'consults.profession'
      },
      {
        'elementKey': 'table_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'consults.day'
      },
      {
        'elementKey': 'table_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'consults.time'
      },
      {
        'elementKey': 'consultReport',
        'formIndex': '1',
        'inputType': 'ehrFile',
        'label': 'Consult Report',
        'tableColumn': '2',
        'tableLabel': 'Consult Report',
        'fqn': 'consults.consultReport'
      },
      {
        'elementKey': 'comments',
        'formIndex': '1',
        'inputType': 'textarea',
        'label': 'Comments',
        'tableColumn': '3',
        'tableLabel': 'Comments',
        'fqn': 'consults.comments'
      }
    ],
    'pageElements': {
      'table': {
        'elementKey': 'table',
        'pageElementIndex': '1',
        'pageKey': 'consults',
        'tableKey': 'table',
        'isTable': true,
        'label': 'Consults',
        'addButtonText': 'Add a consultation report',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'table_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'table_name',
              'table_profession',
              'table_day',
              'table_time'
            ]
          },
          {
            'label': 'Consult Report',
            'ehr_list_index': '2',
            'items': [
              'consultReport'
            ]
          },
          {
            'label': 'Comments',
            'ehr_list_index': '3',
            'items': [
              'comments'
            ]
          }
        ],
        'form': {
          'elementKey': 'table',
          'label': 'Consults',
          'addButtonText': 'Add a consultation report',
          'formKey': 'table',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group376',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'table_name',
                'table_profession',
                'table_day',
                'table_time'
              ]
            },
            {
              'elementKey': 'ehr_group377',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'consultReport',
                'comments'
              ]
            }
          ],
          'ehr_data': {
            'table_name': '',
            'table_profession': '',
            'table_day': '',
            'table_time': '',
            'consultReport': '',
            'comments': ''
          }
        },
        'tableChildren': [
          'table_id',
          'table_name',
          'table_profession',
          'table_day',
          'table_time',
          'consultReport',
          'comments'
        ],
        'hasRecHeader': true
      }
    }
  },
  'labResults': {
    'pageDataKey': 'labResults',
    'pageTitle': 'Laboratory reports',
    'pIndex': '32',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'table_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'labResults.name'
      },
      {
        'elementKey': 'table_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'table_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'labResults.profession'
      },
      {
        'elementKey': 'table_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'labResults.day'
      },
      {
        'elementKey': 'table_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'labResults.time'
      },
      {
        'elementKey': 'laboratoryReport',
        'formIndex': '1',
        'inputType': 'ehrFile',
        'label': 'Laboratory Report',
        'tableColumn': '2',
        'tableLabel': 'Laboratory Report',
        'fqn': 'labResults.laboratoryReport'
      },
      {
        'elementKey': 'comments',
        'formIndex': '1',
        'inputType': 'textarea',
        'label': 'Comments',
        'tableColumn': '3',
        'tableLabel': 'Comments',
        'fqn': 'labResults.comments'
      },
      {
        'elementKey': 'labResultHematology_name',
        'formIndex': '2',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'labResults.name'
      },
      {
        'elementKey': 'labResultHematology_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'labResultHematology_profession',
        'formIndex': '2',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'labResults.profession'
      },
      {
        'elementKey': 'labResultHematology_day',
        'formIndex': '2',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'labResults.day'
      },
      {
        'elementKey': 'labResultHematology_time',
        'formIndex': '2',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'labResults.time'
      },
      {
        'elementKey': 'lrh_HbA1C',
        'formIndex': '2',
        'inputType': 'lab_result',
        'label': 'Hemoglobin A1-C',
        'suffix': '4.8%–6.0%',
        'tableColumn': '2',
        'tableLabel': 'Hemoglobin A1-C',
        'fqn': 'labResults.lrh_HbA1C',
        'suffixText': '<p>4.8%–6.0%</p>',
        'suffixHtml': '4.8%–6.0%'
      },
      {
        'elementKey': 'lrh_Hgb',
        'formIndex': '2',
        'inputType': 'lab_result',
        'label': 'Hemoglobin',
        'suffix': '115-155 g/L',
        'tableColumn': '3',
        'tableLabel': 'Hemoglobin',
        'fqn': 'labResults.lrh_Hgb',
        'suffixText': '<p>115-155 g/L</p>',
        'suffixHtml': '115-155 g/L'
      },
      {
        'elementKey': 'lrh_hct',
        'formIndex': '2',
        'inputType': 'lab_result',
        'label': 'Hematocrit',
        'suffix': '0.42 – 0.52 L/L',
        'tableColumn': '4',
        'fqn': 'labResults.lrh_hct',
        'suffixText': '<p>0.42 – 0.52 L/L</p>',
        'suffixHtml': '0.42 – 0.52 L/L'
      },
      {
        'elementKey': 'lrh_platelets',
        'formIndex': '2',
        'inputType': 'lab_result',
        'label': 'Platelets',
        'suffix': '130-380 x 10^9 /L',
        'tableColumn': '5',
        'fqn': 'labResults.lrh_platelets',
        'suffixText': '<p>130-380 x 10^9 /L</p>',
        'suffixHtml': '130-380 x 10^9 /L'
      },
      {
        'elementKey': 'lrh_rbc',
        'formIndex': '2',
        'inputType': 'lab_result',
        'label': 'RBC',
        'suffix': '3.50-5.00 x 10^12 /L',
        'tableColumn': '6',
        'fqn': 'labResults.lrh_rbc',
        'suffixText': '<p>3.50-5.00 x 10^12 /L</p>',
        'suffixHtml': '3.50-5.00 x 10^12 /L'
      },
      {
        'elementKey': 'lrh_wbc',
        'formIndex': '2',
        'inputType': 'lab_result',
        'label': 'WBC',
        'suffix': '3.5–10.5 × 10^9/L',
        'tableColumn': '7',
        'fqn': 'labResults.lrh_wbc',
        'suffixText': '<p>3.5–10.5 × 10^9/L</p>',
        'suffixHtml': '3.5–10.5 × 10^9/L'
      },
      {
        'elementKey': 'lrh_basophils',
        'formIndex': '2',
        'inputType': 'lab_result',
        'label': 'Basophils',
        'suffix': '0-0.1 x 10^9 /L',
        'tableColumn': '8',
        'fqn': 'labResults.lrh_basophils',
        'suffixText': '<p>0-0.1 x 10^9 /L</p>',
        'suffixHtml': '0-0.1 x 10^9 /L'
      },
      {
        'elementKey': 'lrh_eosinophils',
        'formIndex': '2',
        'inputType': 'lab_result',
        'label': 'Eosinophils',
        'suffix': '0-0.5 x 10^9 /L',
        'tableColumn': '9',
        'fqn': 'labResults.lrh_eosinophils',
        'suffixText': '<p>0-0.5 x 10^9 /L</p>',
        'suffixHtml': '0-0.5 x 10^9 /L'
      },
      {
        'elementKey': 'lrh_lymphocytes',
        'formIndex': '2',
        'inputType': 'lab_result',
        'label': 'Lymphocytes',
        'suffix': 'F: 0.8-3.3 x 10^9 /L-NL-M: 0.8–3.5 × 10^9/L',
        'tableColumn': '10',
        'fqn': 'labResults.lrh_lymphocytes',
        'suffixText': '<p>F: 0.8-3.3 x 10^9 /L</p>\n<p>M: 0.8–3.5 × 10^9/L</p>',
        'suffixHtml': 'F: 0.8-3.3 x 10^9 /L\nM: 0.8–3.5 × 10^9/L'
      },
      {
        'elementKey': 'lrh_monocytes',
        'formIndex': '2',
        'inputType': 'lab_result',
        'label': 'Monocytes',
        'suffix': '0.1-1.0 x 10^9 /L',
        'tableColumn': '11',
        'fqn': 'labResults.lrh_monocytes',
        'suffixText': '<p>0.1-1.0 x 10^9 /L</p>',
        'suffixHtml': '0.1-1.0 x 10^9 /L'
      },
      {
        'elementKey': 'lrh_neutrophils',
        'formIndex': '2',
        'inputType': 'lab_result',
        'label': 'Neutrophils',
        'suffix': '2.0-7.5 x 10^9 /L',
        'tableColumn': '12',
        'fqn': 'labResults.lrh_neutrophils',
        'suffixText': '<p>2.0-7.5 x 10^9 /L</p>',
        'suffixHtml': '2.0-7.5 x 10^9 /L'
      },
      {
        'elementKey': 'labResultCoagulation_name',
        'formIndex': '3',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'labResults.name'
      },
      {
        'elementKey': 'labResultCoagulation_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'labResultCoagulation_profession',
        'formIndex': '3',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'labResults.profession'
      },
      {
        'elementKey': 'labResultCoagulation_day',
        'formIndex': '3',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'labResults.day'
      },
      {
        'elementKey': 'labResultCoagulation_time',
        'formIndex': '3',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'labResults.time'
      },
      {
        'elementKey': 'coag_fib',
        'formIndex': '3',
        'inputType': 'lab_result',
        'label': 'Fibrinogen',
        'suffix': '2-4 g/L',
        'tableColumn': '2',
        'fqn': 'labResults.coag_fib',
        'suffixText': '<p>2-4 g/L</p>',
        'suffixHtml': '2-4 g/L'
      },
      {
        'elementKey': 'coag_ddimer',
        'formIndex': '3',
        'inputType': 'lab_result',
        'label': 'D-Dimer',
        'tableColumn': '3',
        'fqn': 'labResults.coag_ddimer'
      },
      {
        'elementKey': 'coag_inr',
        'formIndex': '3',
        'inputType': 'lab_result',
        'label': 'International normalised ratio (INR)',
        'suffix': '0.9-1.2',
        'tableColumn': '4',
        'fqn': 'labResults.coag_inr',
        'suffixText': '<p>0.9-1.2</p>',
        'suffixHtml': '0.9-1.2'
      },
      {
        'elementKey': 'coag_ptt',
        'formIndex': '3',
        'inputType': 'lab_result',
        'label': 'Partial thromboplastin time (PTT)',
        'tableColumn': '5',
        'fqn': 'labResults.coag_ptt'
      },
      {
        'elementKey': 'coag_appt',
        'formIndex': '3',
        'inputType': 'lab_result',
        'label': 'Activated partial thromboplastin time (aPTT)',
        'suffix': '22-30 s',
        'tableColumn': '6',
        'fqn': 'labResults.coag_appt',
        'suffixText': '<p>22-30 s</p>',
        'suffixHtml': '22-30 s'
      },
      {
        'elementKey': 'labResultGeneral_name',
        'formIndex': '4',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'labResults.name'
      },
      {
        'elementKey': 'labResultGeneral_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'labResultGeneral_profession',
        'formIndex': '4',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'labResults.profession'
      },
      {
        'elementKey': 'labResultGeneral_day',
        'formIndex': '4',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'labResults.day'
      },
      {
        'elementKey': 'labResultGeneral_time',
        'formIndex': '4',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'labResults.time'
      },
      {
        'elementKey': 'lrh_HCO3',
        'formIndex': '4',
        'inputType': 'lab_result',
        'label': 'Bicarbonate',
        'suffix': '21–32 mmol/L',
        'tableColumn': '2',
        'fqn': 'labResults.lrh_HCO3',
        'suffixText': '<p>21–32 mmol/L</p>',
        'suffixHtml': '21–32 mmol/L'
      },
      {
        'elementKey': 'lrh_Ca',
        'formIndex': '4',
        'inputType': 'lab_result',
        'label': 'Calcium',
        'suffix': '2.12–2.52 mmol/L',
        'tableColumn': '3',
        'fqn': 'labResults.lrh_Ca',
        'suffixText': '<p>2.12–2.52 mmol/L</p>',
        'suffixHtml': '2.12–2.52 mmol/L'
      },
      {
        'elementKey': 'lrh_Ca_Ion',
        'formIndex': '4',
        'inputType': 'lab_result',
        'label': 'Calcium Ionized',
        'suffix': '1.14–1.28 mmol/L',
        'tableColumn': '4',
        'fqn': 'labResults.lrh_Ca_Ion',
        'suffixText': '<p>1.14–1.28 mmol/L</p>',
        'suffixHtml': '1.14–1.28 mmol/L'
      },
      {
        'elementKey': 'lrh_CO2',
        'formIndex': '4',
        'inputType': 'lab_result',
        'label': 'Carbon dioxide (CO2)',
        'suffix': '23–28 mmol/L',
        'tableColumn': '5',
        'fqn': 'labResults.lrh_CO2',
        'suffixText': '<p>23–28 mmol/L</p>',
        'suffixHtml': '23–28 mmol/L'
      },
      {
        'elementKey': 'lrh_chloride',
        'formIndex': '4',
        'inputType': 'lab_result',
        'label': 'Chloride',
        'suffix': '98 - 107 mmol/L',
        'tableColumn': '6',
        'fqn': 'labResults.lrh_chloride',
        'suffixText': '<p>98 - 107 mmol/L</p>',
        'suffixHtml': '98 - 107 mmol/L'
      },
      {
        'elementKey': 'lrh_ck',
        'formIndex': '4',
        'inputType': 'lab_result',
        'label': 'Creatinine Kinase',
        'suffix': 'F: 30 - 190 IU/L-NL-M: 30 - 250 IU/L',
        'tableColumn': '7',
        'fqn': 'labResults.lrh_ck',
        'suffixText': '<p>F: 30 - 190 IU/L</p>\n<p>M: 30 - 250 IU/L</p>',
        'suffixHtml': 'F: 30 - 190 IU/L\nM: 30 - 250 IU/L'
      },
      {
        'elementKey': 'lrh_glucose',
        'formIndex': '4',
        'inputType': 'lab_result',
        'label': 'Glucose',
        'suffix': '3.9 - 5.6 mmol/L (fasting)',
        'tableColumn': '8',
        'fqn': 'labResults.lrh_glucose',
        'suffixText': '<p>3.9 - 5.6 mmol/L (fasting)</p>',
        'suffixHtml': '3.9 - 5.6 mmol/L (fasting)'
      },
      {
        'elementKey': 'lrh_Mg',
        'formIndex': '4',
        'inputType': 'lab_result',
        'label': 'Magnesium',
        'suffix': '0.74–1.03 mmol/L',
        'tableColumn': '9',
        'fqn': 'labResults.lrh_Mg',
        'suffixText': '<p>0.74–1.03 mmol/L</p>',
        'suffixHtml': '0.74–1.03 mmol/L'
      },
      {
        'elementKey': 'lrh_PO4',
        'formIndex': '4',
        'inputType': 'lab_result',
        'label': 'Phosphate',
        'suffix': '0.81–1.58 mmol/L',
        'tableColumn': '10',
        'fqn': 'labResults.lrh_PO4',
        'suffixText': '<p>0.81–1.58 mmol/L</p>',
        'suffixHtml': '0.81–1.58 mmol/L'
      },
      {
        'elementKey': 'lrh_K',
        'formIndex': '4',
        'inputType': 'lab_result',
        'label': 'Potassium',
        'suffix': '3.5–5.1 mmol/L',
        'tableColumn': '11',
        'fqn': 'labResults.lrh_K',
        'suffixText': '<p>3.5–5.1 mmol/L</p>',
        'suffixHtml': '3.5–5.1 mmol/L'
      },
      {
        'elementKey': 'lrh_Na',
        'formIndex': '4',
        'inputType': 'lab_result',
        'label': 'Sodium',
        'suffix': '136–146 mmol/L',
        'tableColumn': '12',
        'fqn': 'labResults.lrh_Na',
        'suffixText': '<p>136–146 mmol/L</p>',
        'suffixHtml': '136–146 mmol/L'
      },
      {
        'elementKey': 'lrh_bun',
        'formIndex': '4',
        'inputType': 'lab_result',
        'label': 'Blood Urea Nitrogen',
        'suffix': 'F: 22–75 µmol/L-NL-M: 49–93 µmol/L',
        'tableColumn': '13',
        'fqn': 'labResults.lrh_bun',
        'suffixText': '<p>F: 22–75 µmol/L</p>\n<p>M: 49–93 µmol/L</p>',
        'suffixHtml': 'F: 22–75 µmol/L\nM: 49–93 µmol/L'
      },
      {
        'elementKey': 'lrh_cr',
        'formIndex': '4',
        'inputType': 'lab_result',
        'label': 'Creatinine',
        'suffix': 'F: 22–75 µmol/L-NL-M: 49–93 µmol/L',
        'tableColumn': '14',
        'fqn': 'labResults.lrh_cr',
        'suffixText': '<p>F: 22–75 µmol/L</p>\n<p>M: 49–93 µmol/L</p>',
        'suffixHtml': 'F: 22–75 µmol/L\nM: 49–93 µmol/L'
      },
      {
        'elementKey': 'lrh_egfr',
        'formIndex': '4',
        'inputType': 'lab_result',
        'label': 'Estimated GFR',
        'suffix': '> 60 mL/min',
        'tableColumn': '15',
        'fqn': 'labResults.lrh_egfr',
        'suffixText': '<p>> 60 mL/min</p>',
        'suffixHtml': '> 60 mL/min'
      },
      {
        'elementKey': 'lrh_alt',
        'formIndex': '4',
        'inputType': 'lab_result',
        'label': 'Alanine transaminase (ALT)',
        'suffix': '17–63 IU/L',
        'tableColumn': '16',
        'fqn': 'labResults.lrh_alt',
        'suffixText': '<p>17–63 IU/L</p>',
        'suffixHtml': '17–63 IU/L'
      },
      {
        'elementKey': 'lrh_ast',
        'formIndex': '4',
        'inputType': 'lab_result',
        'label': 'Aspartate transferase (AST)',
        'suffix': '15–37 IU/L',
        'tableColumn': '17',
        'fqn': 'labResults.lrh_ast',
        'suffixText': '<p>15–37 IU/L</p>',
        'suffixHtml': '15–37 IU/L'
      },
      {
        'elementKey': 'lrh_alp',
        'formIndex': '4',
        'inputType': 'lab_result',
        'label': 'Alkaline phosphatase (ALP)',
        'suffix': '50–136 IU/L',
        'tableColumn': '18',
        'fqn': 'labResults.lrh_alp',
        'suffixText': '<p>50–136 IU/L</p>',
        'suffixHtml': '50–136 IU/L'
      },
      {
        'elementKey': 'lrh_bilirubinD',
        'formIndex': '4',
        'inputType': 'lab_result',
        'label': 'Bilirubin direct',
        'suffix': '2–9 µmol/L',
        'tableColumn': '19',
        'fqn': 'labResults.lrh_bilirubinD',
        'suffixText': '<p>2–9 µmol/L</p>',
        'suffixHtml': '2–9 µmol/L'
      },
      {
        'elementKey': 'lrh_bilirubinT',
        'formIndex': '4',
        'inputType': 'lab_result',
        'label': 'Bilirubin total',
        'suffix': '3–17 µmol/L',
        'tableColumn': '20',
        'fqn': 'labResults.lrh_bilirubinT',
        'suffixText': '<p>3–17 µmol/L</p>',
        'suffixHtml': '3–17 µmol/L'
      },
      {
        'elementKey': 'lrh_ggt',
        'formIndex': '4',
        'inputType': 'lab_result',
        'label': 'Gamma glutamyl transferase (GGT)',
        'suffix': 'F: 5.0–55.0 IU/L-NL-M: 15.0–85.0 IU/L',
        'tableColumn': '21',
        'fqn': 'labResults.lrh_ggt',
        'suffixText': '<p>F: 5.0–55.0 IU/L</p>\n<p>M: 15.0–85.0 IU/L</p>',
        'suffixHtml': 'F: 5.0–55.0 IU/L\nM: 15.0–85.0 IU/L'
      },
      {
        'elementKey': 'lrh_ldh',
        'formIndex': '4',
        'inputType': 'lab_result',
        'label': 'Lactate dehydrogenase (LDH)',
        'suffix': '100–205 IU/L',
        'tableColumn': '22',
        'fqn': 'labResults.lrh_ldh',
        'suffixText': '<p>100–205 IU/L</p>',
        'suffixHtml': '100–205 IU/L'
      },
      {
        'elementKey': 'lrh_lipase',
        'formIndex': '4',
        'inputType': 'lab_result',
        'label': 'Lipase',
        'suffix': '73–393 IU/L',
        'tableColumn': '23',
        'fqn': 'labResults.lrh_lipase',
        'suffixText': '<p>73–393 IU/L</p>',
        'suffixHtml': '73–393 IU/L'
      },
      {
        'elementKey': 'lrh_abg_hco3',
        'formIndex': '4',
        'inputType': 'lab_result',
        'label': 'Bicarbonate HCO3',
        'suffix': '22–27 mmol/L',
        'tableColumn': '24',
        'fqn': 'labResults.lrh_abg_hco3',
        'suffixText': '<p>22–27 mmol/L</p>',
        'suffixHtml': '22–27 mmol/L'
      },
      {
        'elementKey': 'lrh_abg_o2sat',
        'formIndex': '4',
        'inputType': 'lab_result',
        'label': 'Oxygen saturation (O2Sat)',
        'suffix': '96-100%',
        'tableColumn': '25',
        'fqn': 'labResults.lrh_abg_o2sat',
        'suffixText': '<p>96-100%</p>',
        'suffixHtml': '96-100%'
      },
      {
        'elementKey': 'lrh_abg_pco2',
        'formIndex': '4',
        'inputType': 'lab_result',
        'label': 'Partial pressure of carbon dioxide (PcO2)',
        'suffix': '32–45 mm Hg',
        'tableColumn': '26',
        'fqn': 'labResults.lrh_abg_pco2',
        'suffixText': '<p>32–45 mm Hg</p>',
        'suffixHtml': '32–45 mm Hg'
      },
      {
        'elementKey': 'lrh_po2',
        'formIndex': '4',
        'inputType': 'lab_result',
        'label': 'Partial pressure of oxygen (PO2)',
        'suffix': '83–116 mm Hg',
        'tableColumn': '27',
        'fqn': 'labResults.lrh_po2',
        'suffixText': '<p>83–116 mm Hg</p>',
        'suffixHtml': '83–116 mm Hg'
      },
      {
        'elementKey': 'lrh_abg_ph',
        'formIndex': '4',
        'inputType': 'lab_result',
        'label': 'ph',
        'suffix': '7.38–7.46',
        'tableColumn': '28',
        'fqn': 'labResults.lrh_abg_ph',
        'suffixText': '<p>7.38–7.46</p>',
        'suffixHtml': '7.38–7.46'
      },
      {
        'elementKey': 'lrh_bloodGroup',
        'formIndex': '4',
        'inputType': 'select',
        'label': 'Blood group',
        'options': [
          {
            'key': 'A-',
            'text': 'A-'
          },
          {
            'key': 'A+',
            'text': 'A+'
          },
          {
            'key': 'B-',
            'text': 'B-'
          },
          {
            'key': 'B+',
            'text': 'B+'
          },
          {
            'key': 'AB-',
            'text': 'AB-'
          },
          {
            'key': 'AB+',
            'text': 'AB+'
          },
          {
            'key': 'O-',
            'text': 'O-'
          },
          {
            'key': 'O+',
            'text': 'O+'
          }
        ],
        'tableColumn': '29',
        'fqn': 'labResults.lrh_bloodGroup'
      },
      {
        'elementKey': 'lrh_antibody',
        'formIndex': '4',
        'inputType': 'checkbox',
        'label': 'Antibody positive',
        'tableColumn': '30',
        'fqn': 'labResults.lrh_antibody'
      },
      {
        'elementKey': 'troponinTable_name',
        'formIndex': '5',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'labResults.name'
      },
      {
        'elementKey': 'troponinTable_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'troponinTable_profession',
        'formIndex': '5',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'labResults.profession'
      },
      {
        'elementKey': 'troponinTable_day',
        'formIndex': '5',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'labResults.day'
      },
      {
        'elementKey': 'troponinTable_time',
        'formIndex': '5',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'labResults.time'
      },
      {
        'elementKey': 'lrtrop_I',
        'formIndex': '5',
        'inputType': 'lab_result',
        'label': 'Troponin I',
        'suffix': '< 0.03 ng/mL',
        'tableColumn': '2',
        'fqn': 'labResults.lrtrop_I',
        'suffixText': '<p>< 0.03 ng/mL</p>',
        'suffixHtml': '< 0.03 ng/mL'
      },
      {
        'elementKey': 'lrtrop_T',
        'formIndex': '5',
        'inputType': 'lab_result',
        'label': 'Troponin T (TnT)',
        'suffix': '< 0.1 ng/mL',
        'tableColumn': '3',
        'fqn': 'labResults.lrtrop_T',
        'suffixText': '<p>< 0.1 ng/mL</p>',
        'suffixHtml': '< 0.1 ng/mL'
      },
      {
        'elementKey': 'lrtrop_H',
        'formIndex': '5',
        'inputType': 'lab_result',
        'label': 'High-sensitivity troponin T',
        'suffix': 'F: < 14 ng/L-NL-M: < 22 ng/L',
        'tableColumn': '4',
        'fqn': 'labResults.lrtrop_H',
        'suffixText': '<p>F: < 14 ng/L</p>\n<p>M: < 22 ng/L</p>',
        'suffixHtml': 'F: < 14 ng/L\nM: < 22 ng/L'
      },
      {
        'elementKey': 'labResultUrine_name',
        'formIndex': '6',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'labResults.name'
      },
      {
        'elementKey': 'labResultUrine_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'labResultUrine_profession',
        'formIndex': '6',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'labResults.profession'
      },
      {
        'elementKey': 'labResultUrine_day',
        'formIndex': '6',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'labResults.day'
      },
      {
        'elementKey': 'labResultUrine_time',
        'formIndex': '6',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'labResults.time'
      },
      {
        'elementKey': 'lru_calrity',
        'formIndex': '6',
        'inputType': 'lab_result',
        'label': 'Calrity',
        'suffix': 'Normal: Clear',
        'tableColumn': '2',
        'fqn': 'labResults.lru_calrity',
        'suffixText': '<p>Normal: Clear</p>',
        'suffixHtml': 'Normal: Clear'
      },
      {
        'elementKey': 'lru_colour',
        'formIndex': '6',
        'inputType': 'lab_result',
        'label': 'Colour',
        'suffix': 'Normal: Pale to dark yellow',
        'tableColumn': '3',
        'fqn': 'labResults.lru_colour',
        'suffixText': '<p>Normal: Pale to dark yellow</p>',
        'suffixHtml': 'Normal: Pale to dark yellow'
      },
      {
        'elementKey': 'lru_ordour',
        'formIndex': '6',
        'inputType': 'lab_result',
        'label': 'Ordour',
        'suffix': 'Slightly \'nutty\' odour',
        'tableColumn': '4',
        'fqn': 'labResults.lru_ordour',
        'suffixText': '<p>Slightly \'nutty\' odour</p>',
        'suffixHtml': 'Slightly \'nutty\' odour'
      },
      {
        'elementKey': 'lru_gravity',
        'formIndex': '6',
        'inputType': 'lab_result',
        'label': 'Specific gravity',
        'suffix': '1.005–1.030',
        'tableColumn': '5',
        'fqn': 'labResults.lru_gravity',
        'suffixText': '<p>1.005–1.030</p>',
        'suffixHtml': '1.005–1.030'
      },
      {
        'elementKey': 'lru_albumin',
        'formIndex': '6',
        'inputType': 'lab_result',
        'label': 'Albumin',
        'suffix': '< 30mg',
        'tableColumn': '5',
        'fqn': 'labResults.lru_albumin',
        'suffixText': '<p>< 30mg</p>',
        'suffixHtml': '< 30mg'
      },
      {
        'elementKey': 'lru_acr',
        'formIndex': '6',
        'inputType': 'lab_result',
        'label': 'Albumin to creatinine ratio',
        'suffix': '≤ 2.0 g/mol Cr',
        'tableColumn': '6',
        'fqn': 'labResults.lru_acr',
        'suffixText': '<p>≤ 2.0 g/mol Cr</p>',
        'suffixHtml': '≤ 2.0 g/mol Cr'
      },
      {
        'elementKey': 'lru_aldosterone',
        'formIndex': '6',
        'inputType': 'lab_result',
        'label': 'Aldosterone',
        'suffix': '13.9–52.6 nmol/24 hour',
        'tableColumn': '7',
        'fqn': 'labResults.lru_aldosterone',
        'suffixText': '<p>13.9–52.6 nmol/24 hour</p>',
        'suffixHtml': '13.9–52.6 nmol/24 hour'
      },
      {
        'elementKey': 'lru_calcium',
        'formIndex': '6',
        'inputType': 'lab_result',
        'label': 'Calcium',
        'suffix': '< 6.2 mmol/d',
        'tableColumn': '8',
        'fqn': 'labResults.lru_calcium',
        'suffixText': '<p>< 6.2 mmol/d</p>',
        'suffixHtml': '< 6.2 mmol/d'
      },
      {
        'elementKey': 'lru_catecholamines',
        'formIndex': '6',
        'inputType': 'lab_result',
        'label': 'Catecholamines',
        'suffix': '< 591 nmol/m2/24 hours',
        'tableColumn': '9',
        'fqn': 'labResults.lru_catecholamines',
        'suffixText': '<p>< 591 nmol/m2/24 hours</p>',
        'suffixHtml': '< 591 nmol/m2/24 hours'
      },
      {
        'elementKey': 'lru_cortisol',
        'formIndex': '6',
        'inputType': 'lab_result',
        'label': 'Cortisol',
        'suffix': '< 248 nmol/24 hours',
        'tableColumn': '10',
        'fqn': 'labResults.lru_cortisol',
        'suffixText': '<p>< 248 nmol/24 hours</p>',
        'suffixHtml': '< 248 nmol/24 hours'
      },
      {
        'elementKey': 'lru_glucose',
        'formIndex': '6',
        'inputType': 'lab_result',
        'label': 'Glucose',
        'suffix': '60–830 mcmol/L',
        'tableColumn': '11',
        'fqn': 'labResults.lru_glucose',
        'suffixText': '<p>60–830 mcmol/L</p>',
        'suffixHtml': '60–830 mcmol/L'
      },
      {
        'elementKey': 'lru_ketones',
        'formIndex': '6',
        'inputType': 'lab_result',
        'label': 'Ketones',
        'suffix': 'none',
        'tableColumn': '12',
        'fqn': 'labResults.lru_ketones',
        'suffixText': '<p>none</p>',
        'suffixHtml': 'none'
      },
      {
        'elementKey': 'lru_leukocyte',
        'formIndex': '6',
        'inputType': 'lab_result',
        'label': 'Leukocyte esterase (WBC esterase)',
        'tableColumn': '13',
        'fqn': 'labResults.lru_leukocyte'
      },
      {
        'elementKey': 'lru_nitrates',
        'formIndex': '6',
        'inputType': 'lab_result',
        'label': 'Nitrates',
        'tableColumn': '14',
        'fqn': 'labResults.lru_nitrates'
      },
      {
        'elementKey': 'lru_osmolality',
        'formIndex': '6',
        'inputType': 'lab_result',
        'label': 'Osmolality',
        'suffix': '38–1400 mOsm/kg H2O',
        'tableColumn': '15',
        'fqn': 'labResults.lru_osmolality',
        'suffixText': '<p>38–1400 mOsm/kg H2O</p>',
        'suffixHtml': '38–1400 mOsm/kg H2O'
      },
      {
        'elementKey': 'lru_ph',
        'formIndex': '6',
        'inputType': 'lab_result',
        'label': 'pH',
        'suffix': '5.0–8.5',
        'tableColumn': '16',
        'fqn': 'labResults.lru_ph',
        'suffixText': '<p>5.0–8.5</p>',
        'suffixHtml': '5.0–8.5'
      },
      {
        'elementKey': 'lru_phosphate',
        'formIndex': '6',
        'inputType': 'lab_result',
        'label': 'Phosphate',
        'suffix': 'Adult: 1.0-1.5 mmol/L-NL-Child: 1.3-2.3 mmol/L',
        'tableColumn': '17',
        'fqn': 'labResults.lru_phosphate',
        'suffixText': '<p>Adult: 1.0-1.5 mmol/L</p>\n<p>Child: 1.3-2.3 mmol/L</p>',
        'suffixHtml': 'Adult: 1.0-1.5 mmol/L\nChild: 1.3-2.3 mmol/L'
      },
      {
        'elementKey': 'lru_protein',
        'formIndex': '6',
        'inputType': 'lab_result',
        'label': 'Protein',
        'suffix': 'None',
        'tableColumn': '18',
        'fqn': 'labResults.lru_protein',
        'suffixText': '<p>None</p>',
        'suffixHtml': 'None'
      },
      {
        'elementKey': 'lru_sodium',
        'formIndex': '6',
        'inputType': 'lab_result',
        'label': 'Sodium',
        'suffix': '40-220 mmol/d',
        'tableColumn': '19',
        'fqn': 'labResults.lru_sodium',
        'suffixText': '<p>40-220 mmol/d</p>',
        'suffixHtml': '40-220 mmol/d'
      },
      {
        'elementKey': 'lru_speccificGravity',
        'formIndex': '6',
        'inputType': 'lab_result',
        'label': 'Speccific gravity',
        'suffix': '1.005–1.030',
        'tableColumn': '20',
        'fqn': 'labResults.lru_speccificGravity',
        'suffixText': '<p>1.005–1.030</p>',
        'suffixHtml': '1.005–1.030'
      },
      {
        'elementKey': 'lru_uricAcid',
        'formIndex': '6',
        'inputType': 'lab_result',
        'label': 'Uric acid',
        'suffix': '1.48–4.43 mmol/24 hours',
        'tableColumn': '21',
        'fqn': 'labResults.lru_uricAcid',
        'suffixText': '<p>1.48–4.43 mmol/24 hours</p>',
        'suffixHtml': '1.48–4.43 mmol/24 hours'
      },
      {
        'elementKey': 'lru_urobilinogen',
        'formIndex': '6',
        'inputType': 'lab_result',
        'label': 'Urobilinogen',
        'suffix': '≤ 16.0 µmol/L',
        'tableColumn': '22',
        'fqn': 'labResults.lru_urobilinogen',
        'suffixText': '<p>≤ 16.0 µmol/L</p>',
        'suffixHtml': '≤ 16.0 µmol/L'
      },
      {
        'elementKey': 'lru_casts',
        'formIndex': '6',
        'inputType': 'lab_result',
        'label': 'Casts',
        'tableColumn': '23',
        'fqn': 'labResults.lru_casts'
      },
      {
        'elementKey': 'lru_crystals',
        'formIndex': '6',
        'inputType': 'lab_result',
        'label': 'Crystals',
        'tableColumn': '24',
        'fqn': 'labResults.lru_crystals'
      },
      {
        'elementKey': 'lru_epitehlial',
        'formIndex': '6',
        'inputType': 'lab_result',
        'label': 'Epithelial cells',
        'tableColumn': '25',
        'fqn': 'labResults.lru_epitehlial'
      },
      {
        'elementKey': 'lru_rbc',
        'formIndex': '6',
        'inputType': 'lab_result',
        'label': 'RBC',
        'tableColumn': '26',
        'fqn': 'labResults.lru_rbc'
      },
      {
        'elementKey': 'lru_wbc',
        'formIndex': '6',
        'inputType': 'lab_result',
        'label': 'WBC',
        'tableColumn': '27',
        'fqn': 'labResults.lru_wbc'
      }
    ],
    'pageElements': {
      'table': {
        'elementKey': 'table',
        'pageElementIndex': '1',
        'pageKey': 'labResults',
        'tableKey': 'table',
        'isTable': true,
        'label': 'Laboratory reports v1',
        'addButtonText': 'Add a laboratory report',
        'tableLabel': 'This data is for an older version and it needs to be updated. Contact EdEHR for assistance.',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'table_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'table_name',
              'table_profession',
              'table_day',
              'table_time'
            ]
          },
          {
            'label': 'Laboratory Report',
            'ehr_list_index': '2',
            'items': [
              'laboratoryReport'
            ]
          },
          {
            'label': 'Comments',
            'ehr_list_index': '3',
            'items': [
              'comments'
            ]
          }
        ],
        'form': {
          'elementKey': 'table',
          'label': 'Laboratory reports v1',
          'addButtonText': 'Add a laboratory report',
          'formKey': 'table',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group382',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'table_name',
                'table_profession',
                'table_day',
                'table_time'
              ]
            },
            {
              'elementKey': 'ehr_group383',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'laboratoryReport',
                'comments'
              ]
            }
          ],
          'ehr_data': {
            'table_name': '',
            'table_profession': '',
            'table_day': '',
            'table_time': '',
            'laboratoryReport': '',
            'comments': ''
          }
        },
        'tableChildren': [
          'table_id',
          'table_name',
          'table_profession',
          'table_day',
          'table_time',
          'laboratoryReport',
          'comments'
        ],
        'hasRecHeader': true
      },
      'labResultHematology': {
        'elementKey': 'labResultHematology',
        'pageElementIndex': '2',
        'pageKey': 'labResults',
        'tableKey': 'labResultHematology',
        'isTable': true,
        'label': 'Hematology',
        'addButtonText': 'Create a hematology laboratory report',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'labResultHematology_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'labResultHematology_name',
              'labResultHematology_profession',
              'labResultHematology_day',
              'labResultHematology_time'
            ]
          },
          {
            'label': 'Hemoglobin A1-C',
            'ehr_list_index': '2',
            'items': [
              'lrh_HbA1C'
            ]
          },
          {
            'label': 'Hemoglobin',
            'ehr_list_index': '3',
            'items': [
              'lrh_Hgb'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'lrh_hct'
            ]
          },
          {
            'ehr_list_index': '5',
            'items': [
              'lrh_platelets'
            ]
          },
          {
            'ehr_list_index': '6',
            'items': [
              'lrh_rbc'
            ]
          },
          {
            'ehr_list_index': '7',
            'items': [
              'lrh_wbc'
            ]
          },
          {
            'ehr_list_index': '8',
            'items': [
              'lrh_basophils'
            ]
          },
          {
            'ehr_list_index': '9',
            'items': [
              'lrh_eosinophils'
            ]
          },
          {
            'ehr_list_index': '10',
            'items': [
              'lrh_lymphocytes'
            ]
          },
          {
            'ehr_list_index': '11',
            'items': [
              'lrh_monocytes'
            ]
          },
          {
            'ehr_list_index': '12',
            'items': [
              'lrh_neutrophils'
            ]
          }
        ],
        'form': {
          'elementKey': 'labResultHematology',
          'label': 'Hematology',
          'addButtonText': 'Create a hematology laboratory report',
          'formOption': 'transpose',
          'formKey': 'labResultHematology',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group384',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'labResultHematology_name',
                'labResultHematology_profession',
                'labResultHematology_day',
                'labResultHematology_time'
              ]
            },
            {
              'elementKey': 'ehr_group385',
              'label': 'Hematology',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '2',
              'gChildren': [
                'lrh_HbA1C',
                'lrh_Hgb',
                'lrh_hct',
                'lrh_platelets',
                'lrh_rbc',
                'lrh_wbc'
              ]
            },
            {
              'elementKey': 'ehr_group386',
              'label': 'WBC Types',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '3',
              'gChildren': [
                'lrh_basophils',
                'lrh_eosinophils',
                'lrh_lymphocytes',
                'lrh_monocytes',
                'lrh_neutrophils'
              ]
            }
          ],
          'ehr_data': {
            'labResultHematology_name': '',
            'labResultHematology_profession': '',
            'labResultHematology_day': '',
            'labResultHematology_time': '',
            'lrh_HbA1C': '',
            'lrh_Hgb': '',
            'lrh_hct': '',
            'lrh_platelets': '',
            'lrh_rbc': '',
            'lrh_wbc': '',
            'lrh_basophils': '',
            'lrh_eosinophils': '',
            'lrh_lymphocytes': '',
            'lrh_monocytes': '',
            'lrh_neutrophils': ''
          }
        },
        'tableChildren': [
          'labResultHematology_id',
          'labResultHematology_name',
          'labResultHematology_profession',
          'labResultHematology_day',
          'labResultHematology_time',
          'lrh_HbA1C',
          'lrh_Hgb',
          'lrh_hct',
          'lrh_platelets',
          'lrh_rbc',
          'lrh_wbc',
          'lrh_basophils',
          'lrh_eosinophils',
          'lrh_lymphocytes',
          'lrh_monocytes',
          'lrh_neutrophils'
        ],
        'hasRecHeader': true
      },
      'labResultCoagulation': {
        'elementKey': 'labResultCoagulation',
        'pageElementIndex': '3',
        'pageKey': 'labResults',
        'tableKey': 'labResultCoagulation',
        'isTable': true,
        'label': 'Coagulation',
        'addButtonText': 'Create a coagulation laboratory report',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'labResultCoagulation_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'labResultCoagulation_name',
              'labResultCoagulation_profession',
              'labResultCoagulation_day',
              'labResultCoagulation_time'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'coag_fib'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'coag_ddimer'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'coag_inr'
            ]
          },
          {
            'ehr_list_index': '5',
            'items': [
              'coag_ptt'
            ]
          },
          {
            'ehr_list_index': '6',
            'items': [
              'coag_appt'
            ]
          }
        ],
        'form': {
          'elementKey': 'labResultCoagulation',
          'label': 'Coagulation',
          'addButtonText': 'Create a coagulation laboratory report',
          'formKey': 'labResultCoagulation',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group387',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'labResultCoagulation_name',
                'labResultCoagulation_profession',
                'labResultCoagulation_day',
                'labResultCoagulation_time'
              ]
            },
            {
              'elementKey': 'ehr_group388',
              'label': 'Coagulation',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '2',
              'gChildren': [
                'coag_fib',
                'coag_ddimer',
                'coag_inr',
                'coag_ptt',
                'coag_appt'
              ]
            }
          ],
          'ehr_data': {
            'labResultCoagulation_name': '',
            'labResultCoagulation_profession': '',
            'labResultCoagulation_day': '',
            'labResultCoagulation_time': '',
            'coag_fib': '',
            'coag_ddimer': '',
            'coag_inr': '',
            'coag_ptt': '',
            'coag_appt': ''
          }
        },
        'tableChildren': [
          'labResultCoagulation_id',
          'labResultCoagulation_name',
          'labResultCoagulation_profession',
          'labResultCoagulation_day',
          'labResultCoagulation_time',
          'coag_fib',
          'coag_ddimer',
          'coag_inr',
          'coag_ptt',
          'coag_appt'
        ],
        'hasRecHeader': true
      },
      'labResultGeneral': {
        'elementKey': 'labResultGeneral',
        'pageElementIndex': '4',
        'pageKey': 'labResults',
        'tableKey': 'labResultGeneral',
        'isTable': true,
        'label': 'General',
        'addButtonText': 'Create a laboratory report',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'labResultGeneral_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'labResultGeneral_name',
              'labResultGeneral_profession',
              'labResultGeneral_day',
              'labResultGeneral_time'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'lrh_HCO3'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'lrh_Ca'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'lrh_Ca_Ion'
            ]
          },
          {
            'ehr_list_index': '5',
            'items': [
              'lrh_CO2'
            ]
          },
          {
            'ehr_list_index': '6',
            'items': [
              'lrh_chloride'
            ]
          },
          {
            'ehr_list_index': '7',
            'items': [
              'lrh_ck'
            ]
          },
          {
            'ehr_list_index': '8',
            'items': [
              'lrh_glucose'
            ]
          },
          {
            'ehr_list_index': '9',
            'items': [
              'lrh_Mg'
            ]
          },
          {
            'ehr_list_index': '10',
            'items': [
              'lrh_PO4'
            ]
          },
          {
            'ehr_list_index': '11',
            'items': [
              'lrh_K'
            ]
          },
          {
            'ehr_list_index': '12',
            'items': [
              'lrh_Na'
            ]
          },
          {
            'ehr_list_index': '13',
            'items': [
              'lrh_bun'
            ]
          },
          {
            'ehr_list_index': '14',
            'items': [
              'lrh_cr'
            ]
          },
          {
            'ehr_list_index': '15',
            'items': [
              'lrh_egfr'
            ]
          },
          {
            'ehr_list_index': '16',
            'items': [
              'lrh_alt'
            ]
          },
          {
            'ehr_list_index': '17',
            'items': [
              'lrh_ast'
            ]
          },
          {
            'ehr_list_index': '18',
            'items': [
              'lrh_alp'
            ]
          },
          {
            'ehr_list_index': '19',
            'items': [
              'lrh_bilirubinD'
            ]
          },
          {
            'ehr_list_index': '20',
            'items': [
              'lrh_bilirubinT'
            ]
          },
          {
            'ehr_list_index': '21',
            'items': [
              'lrh_ggt'
            ]
          },
          {
            'ehr_list_index': '22',
            'items': [
              'lrh_ldh'
            ]
          },
          {
            'ehr_list_index': '23',
            'items': [
              'lrh_lipase'
            ]
          },
          {
            'ehr_list_index': '24',
            'items': [
              'lrh_abg_hco3'
            ]
          },
          {
            'ehr_list_index': '25',
            'items': [
              'lrh_abg_o2sat'
            ]
          },
          {
            'ehr_list_index': '26',
            'items': [
              'lrh_abg_pco2'
            ]
          },
          {
            'ehr_list_index': '27',
            'items': [
              'lrh_po2'
            ]
          },
          {
            'ehr_list_index': '28',
            'items': [
              'lrh_abg_ph'
            ]
          },
          {
            'ehr_list_index': '29',
            'items': [
              'lrh_bloodGroup'
            ]
          },
          {
            'ehr_list_index': '30',
            'items': [
              'lrh_antibody'
            ]
          }
        ],
        'form': {
          'elementKey': 'labResultGeneral',
          'label': 'General',
          'addButtonText': 'Create a laboratory report',
          'formOption': 'transpose',
          'formKey': 'labResultGeneral',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group389',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'labResultGeneral_name',
                'labResultGeneral_profession',
                'labResultGeneral_day',
                'labResultGeneral_time'
              ]
            },
            {
              'elementKey': 'ehr_group390',
              'label': 'Chemistry',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '2',
              'gChildren': [
                'lrh_HCO3',
                'lrh_Ca',
                'lrh_Ca_Ion',
                'lrh_CO2',
                'lrh_chloride',
                'lrh_ck',
                'lrh_glucose',
                'lrh_Mg',
                'lrh_PO4',
                'lrh_K',
                'lrh_Na'
              ]
            },
            {
              'elementKey': 'ehr_group391',
              'label': 'Renal Profile',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '3',
              'gChildren': [
                'lrh_bun',
                'lrh_cr',
                'lrh_egfr'
              ]
            },
            {
              'elementKey': 'ehr_group392',
              'label': 'Liver function',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '4',
              'gChildren': [
                'lrh_alt',
                'lrh_ast',
                'lrh_alp',
                'lrh_bilirubinD',
                'lrh_bilirubinT',
                'lrh_ggt',
                'lrh_ldh',
                'lrh_lipase'
              ]
            },
            {
              'elementKey': 'ehr_group393',
              'label': 'Blood gas tests',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '5',
              'gChildren': [
                'lrh_abg_hco3',
                'lrh_abg_o2sat',
                'lrh_abg_pco2',
                'lrh_po2',
                'lrh_abg_ph'
              ]
            },
            {
              'elementKey': 'ehr_group394',
              'label': 'Group and screen',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '6',
              'gChildren': [
                'lrh_bloodGroup',
                'lrh_antibody'
              ]
            }
          ],
          'ehr_data': {
            'labResultGeneral_name': '',
            'labResultGeneral_profession': '',
            'labResultGeneral_day': '',
            'labResultGeneral_time': '',
            'lrh_HCO3': '',
            'lrh_Ca': '',
            'lrh_Ca_Ion': '',
            'lrh_CO2': '',
            'lrh_chloride': '',
            'lrh_ck': '',
            'lrh_glucose': '',
            'lrh_Mg': '',
            'lrh_PO4': '',
            'lrh_K': '',
            'lrh_Na': '',
            'lrh_bun': '',
            'lrh_cr': '',
            'lrh_egfr': '',
            'lrh_alt': '',
            'lrh_ast': '',
            'lrh_alp': '',
            'lrh_bilirubinD': '',
            'lrh_bilirubinT': '',
            'lrh_ggt': '',
            'lrh_ldh': '',
            'lrh_lipase': '',
            'lrh_abg_hco3': '',
            'lrh_abg_o2sat': '',
            'lrh_abg_pco2': '',
            'lrh_po2': '',
            'lrh_abg_ph': '',
            'lrh_bloodGroup': '',
            'lrh_antibody': ''
          }
        },
        'tableChildren': [
          'labResultGeneral_id',
          'labResultGeneral_name',
          'labResultGeneral_profession',
          'labResultGeneral_day',
          'labResultGeneral_time',
          'lrh_HCO3',
          'lrh_Ca',
          'lrh_Ca_Ion',
          'lrh_CO2',
          'lrh_chloride',
          'lrh_ck',
          'lrh_glucose',
          'lrh_Mg',
          'lrh_PO4',
          'lrh_K',
          'lrh_Na',
          'lrh_bun',
          'lrh_cr',
          'lrh_egfr',
          'lrh_alt',
          'lrh_ast',
          'lrh_alp',
          'lrh_bilirubinD',
          'lrh_bilirubinT',
          'lrh_ggt',
          'lrh_ldh',
          'lrh_lipase',
          'lrh_abg_hco3',
          'lrh_abg_o2sat',
          'lrh_abg_pco2',
          'lrh_po2',
          'lrh_abg_ph',
          'lrh_bloodGroup',
          'lrh_antibody'
        ],
        'hasRecHeader': true
      },
      'troponinTable': {
        'elementKey': 'troponinTable',
        'pageElementIndex': '5',
        'pageKey': 'labResults',
        'tableKey': 'troponinTable',
        'isTable': true,
        'label': 'Troponin',
        'addButtonText': 'Create a troponin laboratory report',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'troponinTable_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'troponinTable_name',
              'troponinTable_profession',
              'troponinTable_day',
              'troponinTable_time'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'lrtrop_I'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'lrtrop_T'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'lrtrop_H'
            ]
          }
        ],
        'form': {
          'elementKey': 'troponinTable',
          'label': 'Troponin',
          'addButtonText': 'Create a troponin laboratory report',
          'formOption': 'transpose',
          'formKey': 'troponinTable',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group395',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'troponinTable_name',
                'troponinTable_profession',
                'troponinTable_day',
                'troponinTable_time'
              ]
            },
            {
              'elementKey': 'ehr_group396',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '2',
              'gChildren': [
                'lrtrop_I',
                'lrtrop_T',
                'lrtrop_H'
              ]
            }
          ],
          'ehr_data': {
            'troponinTable_name': '',
            'troponinTable_profession': '',
            'troponinTable_day': '',
            'troponinTable_time': '',
            'lrtrop_I': '',
            'lrtrop_T': '',
            'lrtrop_H': ''
          }
        },
        'tableChildren': [
          'troponinTable_id',
          'troponinTable_name',
          'troponinTable_profession',
          'troponinTable_day',
          'troponinTable_time',
          'lrtrop_I',
          'lrtrop_T',
          'lrtrop_H'
        ],
        'hasRecHeader': true
      },
      'labResultUrine': {
        'elementKey': 'labResultUrine',
        'pageElementIndex': '6',
        'pageKey': 'labResults',
        'tableKey': 'labResultUrine',
        'isTable': true,
        'label': 'Urine analysis',
        'addButtonText': 'Create a urinary laboratory report',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'labResultUrine_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'labResultUrine_name',
              'labResultUrine_profession',
              'labResultUrine_day',
              'labResultUrine_time'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'lru_calrity'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'lru_colour'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'lru_ordour'
            ]
          },
          {
            'ehr_list_index': '5',
            'items': [
              'lru_gravity',
              'lru_albumin'
            ]
          },
          {
            'ehr_list_index': '6',
            'items': [
              'lru_acr'
            ]
          },
          {
            'ehr_list_index': '7',
            'items': [
              'lru_aldosterone'
            ]
          },
          {
            'ehr_list_index': '8',
            'items': [
              'lru_calcium'
            ]
          },
          {
            'ehr_list_index': '9',
            'items': [
              'lru_catecholamines'
            ]
          },
          {
            'ehr_list_index': '10',
            'items': [
              'lru_cortisol'
            ]
          },
          {
            'ehr_list_index': '11',
            'items': [
              'lru_glucose'
            ]
          },
          {
            'ehr_list_index': '12',
            'items': [
              'lru_ketones'
            ]
          },
          {
            'ehr_list_index': '13',
            'items': [
              'lru_leukocyte'
            ]
          },
          {
            'ehr_list_index': '14',
            'items': [
              'lru_nitrates'
            ]
          },
          {
            'ehr_list_index': '15',
            'items': [
              'lru_osmolality'
            ]
          },
          {
            'ehr_list_index': '16',
            'items': [
              'lru_ph'
            ]
          },
          {
            'ehr_list_index': '17',
            'items': [
              'lru_phosphate'
            ]
          },
          {
            'ehr_list_index': '18',
            'items': [
              'lru_protein'
            ]
          },
          {
            'ehr_list_index': '19',
            'items': [
              'lru_sodium'
            ]
          },
          {
            'ehr_list_index': '20',
            'items': [
              'lru_speccificGravity'
            ]
          },
          {
            'ehr_list_index': '21',
            'items': [
              'lru_uricAcid'
            ]
          },
          {
            'ehr_list_index': '22',
            'items': [
              'lru_urobilinogen'
            ]
          },
          {
            'ehr_list_index': '23',
            'items': [
              'lru_casts'
            ]
          },
          {
            'ehr_list_index': '24',
            'items': [
              'lru_crystals'
            ]
          },
          {
            'ehr_list_index': '25',
            'items': [
              'lru_epitehlial'
            ]
          },
          {
            'ehr_list_index': '26',
            'items': [
              'lru_rbc'
            ]
          },
          {
            'ehr_list_index': '27',
            'items': [
              'lru_wbc'
            ]
          }
        ],
        'form': {
          'elementKey': 'labResultUrine',
          'label': 'Urine analysis',
          'addButtonText': 'Create a urinary laboratory report',
          'formOption': 'transpose',
          'formKey': 'labResultUrine',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group397',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'labResultUrine_name',
                'labResultUrine_profession',
                'labResultUrine_day',
                'labResultUrine_time'
              ]
            },
            {
              'elementKey': 'ehr_group398',
              'label': 'General',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '2',
              'gChildren': [
                'lru_calrity',
                'lru_colour',
                'lru_ordour',
                'lru_gravity'
              ]
            },
            {
              'elementKey': 'ehr_group399',
              'label': 'Chemistry',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '3',
              'gChildren': [
                'lru_albumin',
                'lru_acr',
                'lru_aldosterone',
                'lru_calcium',
                'lru_catecholamines',
                'lru_cortisol',
                'lru_glucose',
                'lru_ketones',
                'lru_leukocyte',
                'lru_nitrates',
                'lru_osmolality',
                'lru_ph',
                'lru_phosphate',
                'lru_protein',
                'lru_sodium',
                'lru_speccificGravity',
                'lru_uricAcid',
                'lru_urobilinogen'
              ]
            },
            {
              'elementKey': 'ehr_group400',
              'label': 'Microsopy',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '4',
              'gChildren': [
                'lru_casts',
                'lru_crystals',
                'lru_epitehlial',
                'lru_rbc',
                'lru_wbc'
              ]
            }
          ],
          'ehr_data': {
            'labResultUrine_name': '',
            'labResultUrine_profession': '',
            'labResultUrine_day': '',
            'labResultUrine_time': '',
            'lru_calrity': '',
            'lru_colour': '',
            'lru_ordour': '',
            'lru_gravity': '',
            'lru_albumin': '',
            'lru_acr': '',
            'lru_aldosterone': '',
            'lru_calcium': '',
            'lru_catecholamines': '',
            'lru_cortisol': '',
            'lru_glucose': '',
            'lru_ketones': '',
            'lru_leukocyte': '',
            'lru_nitrates': '',
            'lru_osmolality': '',
            'lru_ph': '',
            'lru_phosphate': '',
            'lru_protein': '',
            'lru_sodium': '',
            'lru_speccificGravity': '',
            'lru_uricAcid': '',
            'lru_urobilinogen': '',
            'lru_casts': '',
            'lru_crystals': '',
            'lru_epitehlial': '',
            'lru_rbc': '',
            'lru_wbc': ''
          }
        },
        'tableChildren': [
          'labResultUrine_id',
          'labResultUrine_name',
          'labResultUrine_profession',
          'labResultUrine_day',
          'labResultUrine_time',
          'lru_calrity',
          'lru_colour',
          'lru_ordour',
          'lru_gravity',
          'lru_albumin',
          'lru_acr',
          'lru_aldosterone',
          'lru_calcium',
          'lru_catecholamines',
          'lru_cortisol',
          'lru_glucose',
          'lru_ketones',
          'lru_leukocyte',
          'lru_nitrates',
          'lru_osmolality',
          'lru_ph',
          'lru_phosphate',
          'lru_protein',
          'lru_sodium',
          'lru_speccificGravity',
          'lru_uricAcid',
          'lru_urobilinogen',
          'lru_casts',
          'lru_crystals',
          'lru_epitehlial',
          'lru_rbc',
          'lru_wbc'
        ],
        'hasRecHeader': true
      }
    }
  },
  'medicalImaging': {
    'pageDataKey': 'medicalImaging',
    'pageTitle': 'Medical imaging',
    'pIndex': '33',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'table_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'medicalImaging.name'
      },
      {
        'elementKey': 'table_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'table_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'medicalImaging.profession'
      },
      {
        'elementKey': 'table_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'medicalImaging.day'
      },
      {
        'elementKey': 'table_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'medicalImaging.time'
      },
      {
        'elementKey': 'laboratoryReport',
        'formIndex': '1',
        'inputType': 'ehrFile',
        'label': 'Medical imaging',
        'tableColumn': '2',
        'tableLabel': 'Medical imaging',
        'fqn': 'medicalImaging.laboratoryReport'
      },
      {
        'elementKey': 'comments',
        'formIndex': '1',
        'inputType': 'textarea',
        'label': 'Comments',
        'tableColumn': '3',
        'tableLabel': 'Comments',
        'fqn': 'medicalImaging.comments'
      }
    ],
    'pageElements': {
      'table': {
        'elementKey': 'table',
        'pageElementIndex': '1',
        'pageKey': 'medicalImaging',
        'tableKey': 'table',
        'isTable': true,
        'label': 'Medical imaging',
        'addButtonText': 'Add a report or image',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'table_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'table_name',
              'table_profession',
              'table_day',
              'table_time'
            ]
          },
          {
            'label': 'Medical imaging',
            'ehr_list_index': '2',
            'items': [
              'laboratoryReport'
            ]
          },
          {
            'label': 'Comments',
            'ehr_list_index': '3',
            'items': [
              'comments'
            ]
          }
        ],
        'form': {
          'elementKey': 'table',
          'label': 'Medical imaging',
          'addButtonText': 'Add a report or image',
          'formKey': 'table',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group378',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'table_name',
                'table_profession',
                'table_day',
                'table_time'
              ]
            },
            {
              'elementKey': 'ehr_group379',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'laboratoryReport',
                'comments'
              ]
            }
          ],
          'ehr_data': {
            'table_name': '',
            'table_profession': '',
            'table_day': '',
            'table_time': '',
            'laboratoryReport': '',
            'comments': ''
          }
        },
        'tableChildren': [
          'table_id',
          'table_name',
          'table_profession',
          'table_day',
          'table_time',
          'laboratoryReport',
          'comments'
        ],
        'hasRecHeader': true
      }
    }
  },
  'operationReports': {
    'pageDataKey': 'operationReports',
    'pageTitle': 'Operative and anaesthesia records',
    'pIndex': '34',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'table_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'operationReports.name'
      },
      {
        'elementKey': 'table_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'table_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'operationReports.profession'
      },
      {
        'elementKey': 'table_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'operationReports.day'
      },
      {
        'elementKey': 'table_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'operationReports.time'
      },
      {
        'elementKey': 'laboratoryReport',
        'formIndex': '1',
        'inputType': 'ehrFile',
        'label': 'Operative and anaesthesia records',
        'tableColumn': '2',
        'tableLabel': 'Operative and anaesthesia records',
        'fqn': 'operationReports.laboratoryReport'
      },
      {
        'elementKey': 'comments',
        'formIndex': '1',
        'inputType': 'textarea',
        'label': 'Comments',
        'tableColumn': '3',
        'tableLabel': 'Comments',
        'fqn': 'operationReports.comments'
      }
    ],
    'pageElements': {
      'table': {
        'elementKey': 'table',
        'pageElementIndex': '1',
        'pageKey': 'operationReports',
        'tableKey': 'table',
        'isTable': true,
        'label': 'Operative and anaesthesia records',
        'addButtonText': 'Add a report',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'table_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'table_name',
              'table_profession',
              'table_day',
              'table_time'
            ]
          },
          {
            'label': 'Operative and anaesthesia records',
            'ehr_list_index': '2',
            'items': [
              'laboratoryReport'
            ]
          },
          {
            'label': 'Comments',
            'ehr_list_index': '3',
            'items': [
              'comments'
            ]
          }
        ],
        'form': {
          'elementKey': 'table',
          'label': 'Operative and anaesthesia records',
          'addButtonText': 'Add a report',
          'formKey': 'table',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group380',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'table_name',
                'table_profession',
                'table_day',
                'table_time'
              ]
            },
            {
              'elementKey': 'ehr_group381',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'laboratoryReport',
                'comments'
              ]
            }
          ],
          'ehr_data': {
            'table_name': '',
            'table_profession': '',
            'table_day': '',
            'table_time': '',
            'laboratoryReport': '',
            'comments': ''
          }
        },
        'tableChildren': [
          'table_id',
          'table_name',
          'table_profession',
          'table_day',
          'table_time',
          'laboratoryReport',
          'comments'
        ],
        'hasRecHeader': true
      }
    }
  },
  'assessmentTools': {
    'pageDataKey': 'assessmentTools',
    'pageTitle': 'Standardized assessment tools',
    'pIndex': '35',
    'hasGridForm': true,
    'pageChildren': [
      {
        'elementKey': 'admissions1_1',
        'assetBase': 'standardized-assessment-tools',
        'assetName': 'the-canadian-ed-triage-and-acuity-scale.gif',
        'formIndex': '1',
        'inputType': 'assetLink',
        'label': 'Triage scale',
        'fqn': 'assessmentTools.admissions1_1'
      },
      {
        'elementKey': 'admissions2_1',
        'assetBase': 'standardized-assessment-tools',
        'assetName': 'patient-health-questionnaire.pdf',
        'formIndex': '1',
        'inputType': 'assetLink',
        'label': 'Patient health questionaire',
        'fqn': 'assessmentTools.admissions2_1'
      },
      {
        'elementKey': 'admissions3_1',
        'assetBase': 'standardized-assessment-tools',
        'assetName': 'audit.pdf',
        'formIndex': '1',
        'inputType': 'assetLink',
        'label': 'Alcohol consumption',
        'fqn': 'assessmentTools.admissions3_1'
      },
      {
        'elementKey': 'painAssessment1_1',
        'assetBase': 'standardized-assessment-tools',
        'assetName': 'opqrstuv.pdf',
        'formIndex': '1',
        'inputType': 'assetLink',
        'label': 'OPQRSTUV',
        'fqn': 'assessmentTools.painAssessment1_1'
      },
      {
        'elementKey': 'painAssessment2_1',
        'assetBase': 'standardized-assessment-tools',
        'assetName': 'numeric-rating-scale.pdf',
        'formIndex': '1',
        'inputType': 'assetLink',
        'label': '0-10 numeric rating scale',
        'fqn': 'assessmentTools.painAssessment2_1'
      },
      {
        'elementKey': 'neuroAssessment1_1',
        'assetBase': 'standardized-assessment-tools',
        'assetName': 'glasgow-coma-scale.pdf',
        'formIndex': '1',
        'inputType': 'assetLink',
        'label': 'Glasgow coma scale',
        'fqn': 'assessmentTools.neuroAssessment1_1'
      },
      {
        'elementKey': 'neuroAssessment2_1',
        'assetBase': 'standardized-assessment-tools',
        'assetName': 'mini-mental-health-screen.pdf',
        'formIndex': '1',
        'inputType': 'assetLink',
        'label': 'Mini mental state examination',
        'fqn': 'assessmentTools.neuroAssessment2_1'
      },
      {
        'elementKey': 'neuroAssessment3_1',
        'assetBase': 'standardized-assessment-tools',
        'assetName': 'richmond-agitation-sedation-scale-rass.pdf',
        'formIndex': '1',
        'inputType': 'assetLink',
        'label': 'Richmond agitation scale',
        'fqn': 'assessmentTools.neuroAssessment3_1'
      },
      {
        'elementKey': 'fallRisk1_1',
        'assetBase': 'standardized-assessment-tools',
        'assetName': 'fall-risk-assessment-tool.pdf',
        'formIndex': '1',
        'inputType': 'assetLink',
        'label': 'Fall assessment',
        'fqn': 'assessmentTools.fallRisk1_1'
      },
      {
        'elementKey': 'fallRisk2_1',
        'assetBase': 'standardized-assessment-tools',
        'assetName': 'risk-for-falls.png',
        'formIndex': '1',
        'inputType': 'assetLink',
        'label': 'Risk for falls',
        'fqn': 'assessmentTools.fallRisk2_1'
      },
      {
        'elementKey': 'notes1_1',
        'assetBase': 'standardized-assessment-tools',
        'assetName': 'consultation-form.pdf',
        'formIndex': '1',
        'inputType': 'assetLink',
        'label': 'Consult and referral note template',
        'fqn': 'assessmentTools.notes1_1'
      },
      {
        'elementKey': 'educational1_1',
        'assetBase': 'standardized-assessment-tools',
        'assetName': 'copd-assessment-test.pdf',
        'formIndex': '1',
        'inputType': 'assetLink',
        'label': 'COPD assessment',
        'fqn': 'assessmentTools.educational1_1'
      },
      {
        'elementKey': 'educational2_1',
        'assetBase': 'standardized-assessment-tools',
        'assetName': 'bristol-stool-chart.pdf',
        'formIndex': '1',
        'inputType': 'assetLink',
        'label': 'Bristol stool chart',
        'fqn': 'assessmentTools.educational2_1'
      },
      {
        'elementKey': 'wound1_1',
        'assetBase': 'standardized-assessment-tools',
        'assetName': 'braden-scale.pdf',
        'formIndex': '1',
        'inputType': 'assetLink',
        'label': 'Braden scale',
        'fqn': 'assessmentTools.wound1_1'
      },
      {
        'elementKey': 'medication1_1',
        'assetBase': 'standardized-assessment-tools',
        'assetName': 'best_possible_medication.pdf',
        'formIndex': '1',
        'inputType': 'assetLink',
        'label': 'Best possible medication history',
        'fqn': 'assessmentTools.medication1_1'
      }
    ],
    'pageElements': {
      'pageForm': {
        'elementKey': 'pageForm',
        'pageElementIndex': '1',
        'formKey': 'pageForm',
        'isPageForm': true,
        'ehr_groups': [
          {
            'elementKey': 'ehr_group401',
            'formCss': 'grid-left-to-right-3',
            'gIndex': '1',
            'gChildren': [
              {
                'elementKey': 'admissions',
                'label': 'Admissions',
                'sgChildren': [
                  'admissions1_1',
                  'admissions2_1',
                  'admissions3_1'
                ]
              },
              {
                'elementKey': 'painAssessment',
                'label': 'Pain assessment',
                'sgChildren': [
                  'painAssessment1_1',
                  'painAssessment2_1'
                ]
              },
              {
                'elementKey': 'neuroAssessment',
                'label': 'Neurological assessment',
                'sgChildren': [
                  'neuroAssessment1_1',
                  'neuroAssessment2_1',
                  'neuroAssessment3_1'
                ]
              },
              {
                'elementKey': 'fallRisk',
                'label': 'Falls risk',
                'sgChildren': [
                  'fallRisk1_1',
                  'fallRisk2_1'
                ]
              },
              {
                'elementKey': 'notes',
                'label': 'Notes',
                'sgChildren': [
                  'notes1_1'
                ]
              },
              {
                'elementKey': 'educational',
                'label': 'Educational resources',
                'sgChildren': [
                  'educational1_1',
                  'educational2_1'
                ]
              },
              {
                'elementKey': 'wound',
                'label': 'Wound assessment',
                'sgChildren': [
                  'wound1_1'
                ]
              },
              {
                'elementKey': 'medication',
                'label': 'Medication',
                'sgChildren': [
                  'medication1_1'
                ]
              }
            ]
          }
        ]
      }
    }
  },
  'codeLookup': {
    'pageDataKey': 'codeLookup',
    'pageTitle': 'Code lookup',
    'pIndex': '36',
    'hasGridForm': true,
    'pageChildren': [
      {
        'elementKey': 'snomed',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'SnomedCT',
        'fqn': 'codeLookup.snomed'
      },
      {
        'elementKey': 'icf',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'ICB',
        'fqn': 'codeLookup.icf'
      }
    ],
    'pageElements': {
      'pageForm': {
        'elementKey': 'pageForm',
        'pageElementIndex': '1',
        'formKey': 'pageForm',
        'isPageForm': true,
        'ehr_groups': [
          {
            'elementKey': 'ehr_group402',
            'formCss': 'grid-left-to-right-3',
            'gIndex': '1',
            'gChildren': [
              'snomed',
              'icf'
            ]
          }
        ]
      }
    }
  },
  'diagnosticCodes': {
    'pageDataKey': 'diagnosticCodes',
    'pageTitle': 'Diagnostic codes (ICD-10)',
    'pIndex': '37',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'table_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'diagnosticCodes.name'
      },
      {
        'elementKey': 'table_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'table_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'diagnosticCodes.profession'
      },
      {
        'elementKey': 'table_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'diagnosticCodes.day'
      },
      {
        'elementKey': 'table_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'diagnosticCodes.time'
      },
      {
        'elementKey': 'icd10',
        'assetBase': 'static-databases',
        'assetName': 'icd-10-medical-diagnosis-codes.pdf',
        'formIndex': '1',
        'inputType': 'text',
        'label': '<a href=\'/assets/static-databases/icd-10-medical-diagnosis-codes.pdf\' target=\'_blank\'>ICD-10 database</a>',
        'tableColumn': '2',
        'tableLabel': 'ICD-10',
        'fqn': 'diagnosticCodes.icd10'
      },
      {
        'elementKey': 'condition',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Condition',
        'mandatory': 'yes',
        'tableColumn': '3',
        'tableLabel': 'Condition',
        'fqn': 'diagnosticCodes.condition'
      },
      {
        'elementKey': 'code',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Diagnosis code',
        'mandatory': 'yes',
        'tableColumn': '4',
        'tableLabel': 'Diagnosis code',
        'fqn': 'diagnosticCodes.code'
      },
      {
        'elementKey': 'type',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Diagnosis type',
        'mandatory': 'yes',
        'options': [
          {
            'key': 'M',
            'text': 'M'
          },
          {
            'key': '1',
            'text': '1'
          },
          {
            'key': '2',
            'text': '2'
          },
          {
            'key': '3',
            'text': '3'
          }
        ],
        'tableColumn': '5',
        'tableLabel': 'Diagnosis type',
        'fqn': 'diagnosticCodes.type'
      },
      {
        'elementKey': 'prefix',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Prefix',
        'mandatory': 'no',
        'tableColumn': '6',
        'tableLabel': 'Prefix',
        'fqn': 'diagnosticCodes.prefix'
      },
      {
        'elementKey': 'cluster',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Diagnosis cluster',
        'mandatory': 'no',
        'tableColumn': '7',
        'tableLabel': 'Diagnosis cluster',
        'fqn': 'diagnosticCodes.cluster'
      }
    ],
    'pageElements': {
      'table': {
        'elementKey': 'table',
        'pageElementIndex': '1',
        'pageKey': 'diagnosticCodes',
        'tableKey': 'table',
        'isTable': true,
        'label': 'Diagnostic codes (ICD-10)',
        'addButtonText': 'Add a diagnostic code',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'table_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'table_name',
              'table_profession',
              'table_day',
              'table_time'
            ]
          },
          {
            'label': 'ICD-10',
            'ehr_list_index': '2',
            'items': [
              'icd10'
            ]
          },
          {
            'label': 'Condition',
            'ehr_list_index': '3',
            'items': [
              'condition'
            ]
          },
          {
            'label': 'Diagnosis code',
            'ehr_list_index': '4',
            'items': [
              'code'
            ]
          },
          {
            'label': 'Diagnosis type',
            'ehr_list_index': '5',
            'items': [
              'type'
            ]
          },
          {
            'label': 'Prefix',
            'ehr_list_index': '6',
            'items': [
              'prefix'
            ]
          },
          {
            'label': 'Diagnosis cluster',
            'ehr_list_index': '7',
            'items': [
              'cluster'
            ]
          }
        ],
        'form': {
          'elementKey': 'table',
          'label': 'Diagnostic codes (ICD-10)',
          'addButtonText': 'Add a diagnostic code',
          'formKey': 'table',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group403',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'table_name',
                'table_profession',
                'table_day',
                'table_time'
              ]
            },
            {
              'elementKey': 'ehr_group404',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'icd10',
                'condition',
                'code',
                'type',
                'prefix',
                'cluster'
              ]
            }
          ],
          'ehr_data': {
            'table_name': '',
            'table_profession': '',
            'table_day': '',
            'table_time': '',
            'icd10': '',
            'condition': '',
            'code': '',
            'type': '',
            'prefix': '',
            'cluster': ''
          }
        },
        'tableChildren': [
          'table_id',
          'table_name',
          'table_profession',
          'table_day',
          'table_time',
          'icd10',
          'condition',
          'code',
          'type',
          'prefix',
          'cluster'
        ],
        'hasRecHeader': true
      }
    }
  },
  'interventionCodes': {
    'pageDataKey': 'interventionCodes',
    'pageTitle': 'Intervention codes',
    'pIndex': '38',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'table_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'interventionCodes.name'
      },
      {
        'elementKey': 'table_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'table_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'interventionCodes.profession'
      },
      {
        'elementKey': 'table_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'interventionCodes.day'
      },
      {
        'elementKey': 'table_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'interventionCodes.time'
      },
      {
        'elementKey': 'intervention',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Intervention',
        'tableColumn': '2',
        'tableLabel': 'Intervention',
        'fqn': 'interventionCodes.intervention'
      },
      {
        'elementKey': 'status',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Status',
        'tableColumn': '3',
        'tableLabel': 'Status',
        'fqn': 'interventionCodes.status'
      },
      {
        'elementKey': 'laterally',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Laterally',
        'tableColumn': '4',
        'tableLabel': 'Laterally',
        'fqn': 'interventionCodes.laterally'
      },
      {
        'elementKey': 'extent',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Extent',
        'tableColumn': '5',
        'tableLabel': 'Extent',
        'fqn': 'interventionCodes.extent'
      }
    ],
    'pageElements': {
      'table': {
        'elementKey': 'table',
        'pageElementIndex': '1',
        'pageKey': 'interventionCodes',
        'tableKey': 'table',
        'isTable': true,
        'label': 'Intervention codes',
        'addButtonText': 'Add an intervention code',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'table_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'table_name',
              'table_profession',
              'table_day',
              'table_time'
            ]
          },
          {
            'label': 'Intervention',
            'ehr_list_index': '2',
            'items': [
              'intervention'
            ]
          },
          {
            'label': 'Status',
            'ehr_list_index': '3',
            'items': [
              'status'
            ]
          },
          {
            'label': 'Laterally',
            'ehr_list_index': '4',
            'items': [
              'laterally'
            ]
          },
          {
            'label': 'Extent',
            'ehr_list_index': '5',
            'items': [
              'extent'
            ]
          }
        ],
        'form': {
          'elementKey': 'table',
          'label': 'Intervention codes',
          'addButtonText': 'Add an intervention code',
          'formKey': 'table',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group405',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'table_name',
                'table_profession',
                'table_day',
                'table_time'
              ]
            },
            {
              'elementKey': 'ehr_group406',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '2',
              'gChildren': [
                'intervention',
                'status',
                'laterally',
                'extent'
              ]
            },
            {
              'elementKey': 'label',
              'label': 'Intervention code attributes',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '3',
              'gChildren': []
            }
          ],
          'ehr_data': {
            'table_name': '',
            'table_profession': '',
            'table_day': '',
            'table_time': '',
            'intervention': '',
            'status': '',
            'laterally': '',
            'extent': ''
          }
        },
        'tableChildren': [
          'table_id',
          'table_name',
          'table_profession',
          'table_day',
          'table_time',
          'intervention',
          'status',
          'laterally',
          'extent'
        ],
        'hasRecHeader': true
      }
    }
  },
  'caseMixGroup': {
    'pageDataKey': 'caseMixGroup',
    'pageTitle': 'Case mix group',
    'pIndex': '39',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'table_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'caseMixGroup.name'
      },
      {
        'elementKey': 'table_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'table_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'caseMixGroup.profession'
      },
      {
        'elementKey': 'table_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'caseMixGroup.day'
      },
      {
        'elementKey': 'table_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'caseMixGroup.time'
      },
      {
        'elementKey': 'clinicalCategory',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Major clinical category',
        'tableColumn': '2',
        'tableLabel': 'Category',
        'fqn': 'caseMixGroup.clinicalCategory'
      },
      {
        'elementKey': 'caseMixNumber',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Case mix number',
        'tableColumn': '3',
        'tableLabel': 'Case mix number',
        'fqn': 'caseMixGroup.caseMixNumber'
      },
      {
        'elementKey': 'resourceIntensity',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Resource intensity weight',
        'tableColumn': '4',
        'tableLabel': 'Resource intensity weight',
        'fqn': 'caseMixGroup.resourceIntensity'
      },
      {
        'elementKey': 'expectedStay',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Expected length of stay',
        'tableColumn': '5',
        'tableLabel': 'Expected length of stay',
        'fqn': 'caseMixGroup.expectedStay'
      },
      {
        'elementKey': 'analysis',
        'formIndex': '1',
        'inputType': 'textarea',
        'label': 'Analysis',
        'tableColumn': '6',
        'tableLabel': 'Analysis',
        'fqn': 'caseMixGroup.analysis'
      }
    ],
    'pageElements': {
      'table': {
        'elementKey': 'table',
        'pageElementIndex': '1',
        'pageKey': 'caseMixGroup',
        'tableKey': 'table',
        'isTable': true,
        'label': 'Case mix group',
        'addButtonText': 'Add a case mix group',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'table_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'table_name',
              'table_profession',
              'table_day',
              'table_time'
            ]
          },
          {
            'label': 'Category',
            'ehr_list_index': '2',
            'items': [
              'clinicalCategory'
            ]
          },
          {
            'label': 'Case mix number',
            'ehr_list_index': '3',
            'items': [
              'caseMixNumber'
            ]
          },
          {
            'label': 'Resource intensity weight',
            'ehr_list_index': '4',
            'items': [
              'resourceIntensity'
            ]
          },
          {
            'label': 'Expected length of stay',
            'ehr_list_index': '5',
            'items': [
              'expectedStay'
            ]
          },
          {
            'label': 'Analysis',
            'ehr_list_index': '6',
            'items': [
              'analysis'
            ]
          }
        ],
        'form': {
          'elementKey': 'table',
          'label': 'Case mix group',
          'addButtonText': 'Add a case mix group',
          'formKey': 'table',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group407',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'table_name',
                'table_profession',
                'table_day',
                'table_time'
              ]
            },
            {
              'elementKey': 'ehr_group408',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'clinicalCategory',
                'caseMixNumber',
                'resourceIntensity',
                'expectedStay',
                'analysis'
              ]
            }
          ],
          'ehr_data': {
            'table_name': '',
            'table_profession': '',
            'table_day': '',
            'table_time': '',
            'clinicalCategory': '',
            'caseMixNumber': '',
            'resourceIntensity': '',
            'expectedStay': '',
            'analysis': ''
          }
        },
        'tableChildren': [
          'table_id',
          'table_name',
          'table_profession',
          'table_day',
          'table_time',
          'clinicalCategory',
          'caseMixNumber',
          'resourceIntensity',
          'expectedStay',
          'analysis'
        ],
        'hasRecHeader': true
      }
    }
  },
  'testPage': {
    'pageDataKey': 'testPage',
    'pageTitle': 'Test Page',
    'pIndex': '40',
    'hasGridTable': true,
    'hasGridForm': true,
    'pageChildren': [
      {
        'elementKey': 'pcustom_form',
        'formIndex': '1',
        'formOption': 'insulin-orders',
        'inputType': 'custom_form',
        'label': 'CForm',
        'fqn': 'testPage.pcustom_form'
      },
      {
        'elementKey': 'pform_label',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': '<b>a form <i>label</i></b>',
        'fqn': 'testPage.pform_label'
      },
      {
        'elementKey': 'pspacer',
        'formIndex': '1',
        'inputType': 'spacer',
        'label': 'spacer',
        'fqn': 'testPage.pspacer'
      },
      {
        'elementKey': 'name',
        'defaultValue': '80',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'weight',
        'mandatory': true,
        'suffix': 'lb',
        'fqn': 'testPage.name',
        'suffixText': '<p>lb</p>',
        'suffixHtml': 'lb'
      },
      {
        'elementKey': 'pcheckbox',
        'defaultValue': true,
        'formIndex': '1',
        'helperText': 'a checkbox iinput',
        'inputType': 'checkbox',
        'label': 'checkbox',
        'fqn': 'testPage.pcheckbox',
        'helperHtml': '<p>a checkbox iinput</p>'
      },
      {
        'elementKey': 'defaultText',
        'defaultValue': 'some default',
        'dependentOn': 'disable:pcheckbox',
        'formIndex': '1',
        'helperText': 'a text input',
        'inputType': 'text',
        'label': 'disabledOnCheck',
        'fqn': 'testPage.defaultText',
        'helperHtml': '<p>a text input</p>'
      },
      {
        'elementKey': 'passetLink',
        'assetBase': 'standardized-assessment-tools',
        'assetName': 'the-canadian-ed-triage-and-acuity-scale.gif',
        'formIndex': '1',
        'inputType': 'assetLink',
        'label': 'assetLink',
        'fqn': 'testPage.passetLink'
      },
      {
        'elementKey': 'pselect',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'select',
        'options': [
          {
            'key': '1=a choice 1',
            'text': '1=a choice 1'
          },
          {
            'key': '2=b choice 1',
            'text': '2=b choice 1'
          },
          {
            'key': '3=c choice 1',
            'text': '3=c choice 1'
          }
        ],
        'passToFunction': 'p-cValue1',
        'fqn': 'testPage.pselect'
      },
      {
        'elementKey': 'pselect2',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'select',
        'options': [
          {
            'key': '1=a choice 2',
            'text': '1=a choice 2'
          },
          {
            'key': '2=b choice 2',
            'text': '2=b choice 2'
          },
          {
            'key': '3=c choice 2',
            'text': '3=c choice 2'
          }
        ],
        'passToFunction': 'p-cValue1',
        'fqn': 'testPage.pselect2'
      },
      {
        'elementKey': 'p-cValue1',
        'calculationType': 'sum',
        'formIndex': '1',
        'helperText': 'a calculated value based on the select \'pselect1\' on this page',
        'inputType': 'calculatedValue',
        'label': 'calculatedValue',
        'fqn': 'testPage.p-cValue1',
        'helperHtml': '<p>a calculated value based on the select \'pselect1\' on this page</p>'
      },
      {
        'elementKey': 'aFile',
        'formIndex': '1',
        'inputType': 'ehrFile',
        'label': 'A File',
        'fqn': 'testPage.aFile'
      },
      {
        'elementKey': 'pcheckset',
        'defaultValue': 'check_option_1,all',
        'formIndex': '1',
        'inputType': 'checkset',
        'label': 'checkset',
        'options': [
          {
            'key': 'checkOption1',
            'text': 'check option 1'
          },
          {
            'key': 'checkOption2',
            'text': 'check option 2'
          },
          {
            'key': 'anotherOption',
            'text': 'another option'
          },
          {
            'key': 'allOptionsAreSelectable',
            'text': 'all options are selectable'
          }
        ],
        'fqn': 'testPage.pcheckset'
      },
      {
        'elementKey': 'dayValue',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'fqn': 'testPage.dayValue'
      },
      {
        'elementKey': 'timeValue',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'fqn': 'testPage.timeValue'
      },
      {
        'elementKey': 'forCalc',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'select',
        'options': [
          {
            'key': '1 = Yes',
            'text': '1 = Yes'
          },
          {
            'key': '2 = No',
            'text': '2 = No'
          }
        ],
        'passToFunction': 'p-cValue2',
        'fqn': 'testPage.forCalc'
      },
      {
        'elementKey': 'p-cValue2',
        'calculationType': 'sum',
        'formIndex': '1',
        'inputType': 'calculatedValue',
        'label': 'calculatedValue',
        'fqn': 'testPage.p-cValue2'
      },
      {
        'elementKey': 'pcheckbox2',
        'formIndex': '1',
        'inputType': 'checkbox',
        'label': 'checkbox',
        'fqn': 'testPage.pcheckbox2'
      },
      {
        'elementKey': 'ptext2',
        'dependentOn': 'disable:pcheckbox2',
        'formIndex': '1',
        'formOption': 'hideLabel',
        'inputType': 'text',
        'label': 'text',
        'fqn': 'testPage.ptext2'
      },
      {
        'elementKey': 'pform_labeltest',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': '<b>a NEW <i>label</i></b>',
        'fqn': 'testPage.pform_labeltest'
      },
      {
        'elementKey': 'pform_label2',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': '<b>a form <i>label</i></b>',
        'fqn': 'testPage.pform_label2'
      },
      {
        'elementKey': 'pspacer2',
        'formIndex': '1',
        'inputType': 'spacer',
        'label': 'spacer',
        'fqn': 'testPage.pspacer2'
      },
      {
        'elementKey': 'passetLink2',
        'assetBase': 'standardized-assessment-tools',
        'assetName': 'the-canadian-ed-triage-and-acuity-scale.gif',
        'formIndex': '1',
        'inputType': 'assetLink',
        'label': 'assetLink',
        'fqn': 'testPage.passetLink2'
      },
      {
        'elementKey': 'pvisitDay2',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'visitDay',
        'fqn': 'testPage.pvisitDay2'
      },
      {
        'elementKey': 'name',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Text 1',
        'fqn': 'testPage.name'
      },
      {
        'elementKey': 'table1_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 't2',
        'formIndex': '2',
        'helperText': 'a text input',
        'inputType': 'text',
        'label': 'Text 2',
        'tableColumn': '2',
        'tableLabel': 'Text 2',
        'fqn': 'testPage.t2',
        'helperHtml': '<p>a text input</p>'
      },
      {
        'elementKey': 'form2_name',
        'formIndex': '3',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'testPage.name'
      },
      {
        'elementKey': 'form2_profession',
        'formIndex': '3',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'recHeader': true,
        'fqn': 'testPage.profession'
      },
      {
        'elementKey': 'form2_day',
        'formIndex': '3',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'testPage.day'
      },
      {
        'elementKey': 'form2_time',
        'formIndex': '3',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'testPage.time'
      },
      {
        'elementKey': 'textDate',
        'formIndex': '3',
        'inputType': 'text',
        'label': 'TextDate',
        'fqn': 'testPage.textDate'
      },
      {
        'elementKey': 'textDateDate',
        'formIndex': '3',
        'inputType': 'date',
        'label': 'TextDate',
        'fqn': 'testPage.textDateDate'
      },
      {
        'elementKey': 'spacer414',
        'formIndex': '3',
        'inputType': 'spacer',
        'label': 'TextDate',
        'fqn': 'testPage.spacer414'
      },
      {
        'elementKey': 'name',
        'formIndex': '3',
        'inputType': 'text',
        'label': 'Name',
        'fqn': 'testPage.name'
      },
      {
        'elementKey': 'place',
        'formIndex': '3',
        'inputType': 'text',
        'label': 'Place',
        'fqn': 'testPage.place'
      }
    ],
    'pageElements': {
      'form1': {
        'elementKey': 'form1',
        'label': 'Form 1',
        'pageElementIndex': '1',
        'formKey': 'form1',
        'isPageForm': true,
        'ehr_groups': [
          {
            'elementKey': 'ehr_group409',
            'label': 'A group label',
            'formCss': 'grid-left-to-right-1',
            'gIndex': '1',
            'gChildren': [
              'pcustom_form'
            ]
          },
          {
            'elementKey': 'ehr_group410',
            'label': 'A group label',
            'formCss': 'grid-left-to-right-3',
            'gIndex': '2',
            'gChildren': [
              'pform_label',
              'pspacer',
              'name',
              'pcheckbox',
              'defaultText',
              'passetLink',
              'pselect',
              'pselect2',
              'p-cValue1',
              'aFile'
            ]
          },
          {
            'elementKey': 'ehr_group411',
            'label': 'Second group',
            'formCss': 'grid-left-to-right-3',
            'gIndex': '3',
            'gChildren': [
              {
                'elementKey': 'subgroup1',
                'label': 'subgroup 1',
                'sgChildren': [
                  'pcheckset'
                ]
              },
              {
                'elementKey': 'subgroup2',
                'label': 'subgroup 2',
                'sgChildren': [
                  'dayValue',
                  'timeValue',
                  'forCalc',
                  'p-cValue2'
                ]
              },
              {
                'elementKey': 'subgroup3',
                'label': 'subgroup 3',
                'sgChildren': [
                  'pcheckbox2',
                  'ptext2',
                  'pform_labeltest',
                  'pform_label2',
                  'pspacer2',
                  'passetLink2',
                  'pvisitDay2'
                ]
              }
            ]
          }
        ]
      },
      'table1': {
        'elementKey': 'table1',
        'pageElementIndex': '2',
        'pageKey': 'testPage',
        'tableKey': 'table1',
        'isTable': true,
        'label': 'Test table 1',
        'addButtonText': 'Add a row to the test table',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'table1_id'
            ]
          },
          {
            'label': 'Text 1',
            'ehr_list_index': '1',
            'items': [
              'name'
            ]
          },
          {
            'label': 'Text 2',
            'ehr_list_index': '2',
            'items': [
              't2'
            ]
          }
        ],
        'form': {
          'elementKey': 'table1',
          'label': 'Test table 1',
          'addButtonText': 'Add a row to the test table',
          'formKey': 'table1',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group412',
              'label': 'Group 1',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '1',
              'gChildren': [
                'name',
                't2'
              ]
            }
          ],
          'ehr_data': {
            'name': '80',
            't2': ''
          }
        },
        'tableChildren': [
          'table1_id',
          'name',
          't2'
        ]
      },
      'form2': {
        'elementKey': 'form2',
        'label': 'Form 2',
        'pageElementIndex': '3',
        'formKey': 'form2',
        'isPageForm': true,
        'ehr_groups': [
          {
            'elementKey': 'ehr_group413',
            'label': 'A group label',
            'formCss': 'grid-left-to-right-3',
            'gIndex': '1',
            'gChildren': [
              'form2_name',
              'form2_profession',
              'form2_day',
              'form2_time',
              'textDate',
              'textDateDate',
              'spacer414',
              'name',
              'place'
            ]
          }
        ]
      }
    }
  },
  'testTable': {
    'pageDataKey': 'testTable',
    'pageTitle': 'Test Table',
    'pIndex': '41',
    'hasGridTable': true,
    'hasGridForm': true,
    'pageChildren': [
      {
        'elementKey': 'e1',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': '<b>a form <i>label</i></b>',
        'fqn': 'testTable.e1'
      },
      {
        'elementKey': 'e2',
        'formIndex': '1',
        'inputType': 'spacer',
        'label': 'spacer',
        'fqn': 'testTable.e2'
      },
      {
        'elementKey': 'weight',
        'defaultValue': '80',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Weight',
        'mandatory': true,
        'suffix': 'lb',
        'tableColumn': '2',
        'tableLabel': 'Wieght',
        'fqn': 'testTable.weight',
        'suffixText': '<p>lb</p>',
        'suffixHtml': 'lb'
      },
      {
        'elementKey': 'table1_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'pcheckbox',
        'defaultValue': true,
        'formIndex': '1',
        'helperText': 'a checkbox iinput',
        'inputType': 'checkbox',
        'label': 'checkbox',
        'tableColumn': '1',
        'tableLabel': 'A bool',
        'fqn': 'testTable.pcheckbox',
        'helperHtml': '<p>a checkbox iinput</p>'
      },
      {
        'elementKey': 'defaultText',
        'defaultValue': 'some default',
        'dependentOn': 'disable:pcheckbox',
        'formIndex': '1',
        'helperText': 'a text input',
        'inputType': 'text',
        'label': 'text',
        'tableColumn': '3',
        'tableLabel': 'Text',
        'fqn': 'testTable.defaultText',
        'helperHtml': '<p>a text input</p>'
      },
      {
        'elementKey': 'e6',
        'assetBase': 'standardized-assessment-tools',
        'assetName': 'the-canadian-ed-triage-and-acuity-scale.gif',
        'formIndex': '1',
        'inputType': 'assetLink',
        'label': 'assetLink',
        'fqn': 'testTable.e6'
      },
      {
        'elementKey': 'e7',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'select',
        'options': [
          {
            'key': '1',
            'text': 'a choice 1'
          },
          {
            'key': '2',
            'text': 'b choice 1'
          },
          {
            'key': '3',
            'text': 'c choice 1'
          }
        ],
        'passToFunction': 'p-cValue1',
        'tableColumn': '5',
        'tableLabel': 'Selects',
        'fqn': 'testTable.e7'
      },
      {
        'elementKey': 'e8',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'select',
        'options': [
          {
            'key': '1',
            'text': 'a choice 2'
          },
          {
            'key': '2',
            'text': 'b choice 2'
          },
          {
            'key': '3',
            'text': 'c choice 2'
          }
        ],
        'passToFunction': 'p-cValue1',
        'tableColumn': '5',
        'fqn': 'testTable.e8'
      },
      {
        'elementKey': 'p-cValue1',
        'calculationType': 'sum',
        'formIndex': '1',
        'helperText': 'a calculated value based on the select \'pselect1\' on this page',
        'inputType': 'calculatedValue',
        'label': 'calculatedValue',
        'tableColumn': '5',
        'fqn': 'testTable.p-cValue1',
        'helperHtml': '<p>a calculated value based on the select \'pselect1\' on this page</p>'
      },
      {
        'elementKey': 'e10',
        'defaultValue': 'check1,other',
        'formIndex': '1',
        'inputType': 'checkset',
        'label': 'checkset',
        'options': [
          {
            'key': 'check1',
            'text': 'check option 1'
          },
          {
            'key': 'check2',
            'text': 'check option 2'
          },
          {
            'key': 'other',
            'text': 'another option'
          },
          {
            'key': 'all',
            'text': 'all options are selectable'
          }
        ],
        'tableColumn': '4',
        'tableLabel': 'Set',
        'fqn': 'testTable.e10'
      },
      {
        'elementKey': 'dayValue',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '7',
        'tableLabel': 'Day',
        'fqn': 'testTable.dayValue'
      },
      {
        'elementKey': 'timeValue',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '8',
        'tableLabel': 'Time',
        'fqn': 'testTable.timeValue'
      },
      {
        'elementKey': 'forCalc',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'select',
        'options': [
          {
            'key': '1',
            'text': 'Yes'
          },
          {
            'key': '2',
            'text': 'No'
          }
        ],
        'passToFunction': 'p-cValue2',
        'tableColumn': '9',
        'tableLabel': 'Source',
        'fqn': 'testTable.forCalc'
      },
      {
        'elementKey': 'p-cValue2',
        'calculationType': 'sum',
        'formIndex': '1',
        'inputType': 'calculatedValue',
        'label': 'calculatedValue',
        'tableColumn': '10',
        'tableLabel': 'Calculated',
        'fqn': 'testTable.p-cValue2'
      },
      {
        'elementKey': 'g4',
        'formIndex': '1',
        'inputType': 'checkbox',
        'label': 'checkbox',
        'tableColumn': '12',
        'tableLabel': 'Bool',
        'fqn': 'testTable.g4'
      },
      {
        'elementKey': 'g5',
        'dependentOn': 'disable:g4',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'text',
        'tableColumn': '13',
        'tableLabel': 'Text',
        'fqn': 'testTable.g5'
      },
      {
        'elementKey': 'g6',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': '<b>a form <i>label</i></b>',
        'tableColumn': '14',
        'tableLabel': 'Lable',
        'fqn': 'testTable.g6'
      },
      {
        'elementKey': 'g7',
        'formIndex': '1',
        'inputType': 'spacer',
        'label': 'spacer',
        'fqn': 'testTable.g7'
      },
      {
        'elementKey': 'g8',
        'assetBase': 'standardized-assessment-tools',
        'assetName': 'the-canadian-ed-triage-and-acuity-scale.gif',
        'formIndex': '1',
        'inputType': 'assetLink',
        'label': 'assetLink',
        'fqn': 'testTable.g8'
      },
      {
        'elementKey': 'g9',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'visitDay',
        'tableColumn': '15',
        'tableLabel': 'Date',
        'fqn': 'testTable.g9'
      },
      {
        'elementKey': 'e11',
        'formIndex': '1',
        'inputType': 'textarea',
        'label': 'textarea',
        'tableColumn': '6',
        'tableLabel': 'Long text',
        'fqn': 'testTable.e11'
      },
      {
        'elementKey': 'stacked_name',
        'formIndex': '2',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'testTable.name'
      },
      {
        'elementKey': 'stacked_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'stacked_profession',
        'formIndex': '2',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'testTable.profession'
      },
      {
        'elementKey': 'stacked_day',
        'formIndex': '2',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'testTable.day'
      },
      {
        'elementKey': 'stacked_time',
        'formIndex': '2',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'testTable.time'
      },
      {
        'elementKey': 'cd1',
        'formIndex': '2',
        'inputType': 'checkbox',
        'label': 'C D 1',
        'tableColumn': '2',
        'tableLabel': 'Chk 1',
        'fqn': 'testTable.cd1'
      },
      {
        'elementKey': 'cd1Date',
        'formIndex': '2',
        'formOption': 'hideLabel',
        'inputType': 'date',
        'label': 'C D 1',
        'tableColumn': '2',
        'tableLabel': 'Chk 1',
        'fqn': 'testTable.cd1Date'
      },
      {
        'elementKey': 'spacer420',
        'formIndex': '2',
        'inputType': 'spacer',
        'label': 'C D 1',
        'tableColumn': '2',
        'tableLabel': 'Chk 1',
        'fqn': 'testTable.spacer420'
      },
      {
        'elementKey': 'cd2',
        'formIndex': '2',
        'inputType': 'checkbox',
        'label': 'C D 2',
        'tableColumn': '3',
        'tableLabel': 'Chk 2',
        'fqn': 'testTable.cd2'
      },
      {
        'elementKey': 'cd2Date',
        'formIndex': '2',
        'formOption': 'hideLabel',
        'inputType': 'date',
        'label': 'C D 2',
        'tableColumn': '3',
        'tableLabel': 'Chk 2',
        'fqn': 'testTable.cd2Date'
      },
      {
        'elementKey': 'spacer421',
        'formIndex': '2',
        'inputType': 'spacer',
        'label': 'C D 2',
        'tableColumn': '3',
        'tableLabel': 'Chk 2',
        'fqn': 'testTable.spacer421'
      },
      {
        'elementKey': 'td1',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'TextDate',
        'tableColumn': '4',
        'tableLabel': 'Txt 1',
        'fqn': 'testTable.td1'
      },
      {
        'elementKey': 'td1Date',
        'formIndex': '2',
        'inputType': 'date',
        'label': 'TextDate',
        'tableColumn': '4',
        'tableLabel': 'Txt 1',
        'fqn': 'testTable.td1Date'
      },
      {
        'elementKey': 'spacer422',
        'formIndex': '2',
        'inputType': 'spacer',
        'label': 'TextDate',
        'tableColumn': '4',
        'tableLabel': 'Txt 1',
        'fqn': 'testTable.spacer422'
      },
      {
        'elementKey': 'referralName',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Referral name',
        'tableColumn': '5',
        'tableLabel': 'Referral',
        'fqn': 'testTable.referralName'
      },
      {
        'elementKey': 'referralProfession',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Referral profession',
        'tableColumn': '5',
        'fqn': 'testTable.referralProfession'
      },
      {
        'elementKey': 'spacer1',
        'formIndex': '2',
        'inputType': 'spacer',
        'label': 'even spacers need a element key',
        'fqn': 'testTable.spacer1'
      },
      {
        'elementKey': 'appointmentDate',
        'formIndex': '2',
        'inputType': 'visitDay',
        'label': 'Appointment date',
        'tableColumn': '6',
        'tableLabel': 'Appointment',
        'fqn': 'testTable.appointmentDate'
      },
      {
        'elementKey': 'appointmentTime',
        'formIndex': '2',
        'inputType': 'visitTime',
        'label': 'Appointment time',
        'tableColumn': '6',
        'tableLabel': 'Appointment',
        'fqn': 'testTable.appointmentTime'
      },
      {
        'elementKey': 'status',
        'formIndex': '2',
        'inputType': 'select',
        'label': 'Status',
        'options': [
          {
            'key': 'Active',
            'text': 'Active'
          },
          {
            'key': 'Discharged',
            'text': 'Discharged'
          }
        ],
        'tableColumn': '7',
        'tableLabel': 'Status',
        'fqn': 'testTable.status'
      },
      {
        'elementKey': 'administration',
        'defaultValue': 'sched',
        'formIndex': '3',
        'inputType': 'select',
        'label': 'Administration',
        'options': [
          {
            'key': 'sched',
            'text': 'Scheduled'
          },
          {
            'key': 'prn',
            'text': 'PRN (as needed)'
          },
          {
            'key': 'once',
            'text': 'Once'
          },
          {
            'key': 'stat',
            'text': 'Stat'
          }
        ],
        'tableColumn': '7',
        'tableLabel': 'Administration',
        'fqn': 'testTable.administration'
      },
      {
        'elementKey': 'scheduled',
        'formIndex': '3',
        'inputType': 'select',
        'label': 'Scheduled',
        'options': [
          {
            'key': 'QI',
            'text': 'QI'
          },
          {
            'key': 'BID / q12h',
            'text': 'BID / q12h'
          },
          {
            'key': 'TID',
            'text': 'TID'
          },
          {
            'key': 'q8h',
            'text': 'q8h'
          },
          {
            'key': 'QID',
            'text': 'QID'
          },
          {
            'key': 'q6h',
            'text': 'q6h'
          },
          {
            'key': 'q4h',
            'text': 'q4h'
          }
        ],
        'tableColumn': '9',
        'tableLabel': 'Scheduled',
        'fqn': 'testTable.scheduled'
      },
      {
        'elementKey': 'prn1',
        'formIndex': '3',
        'inputType': 'text',
        'label': 'PRN 1',
        'tableColumn': '10',
        'fqn': 'testTable.prn1'
      },
      {
        'elementKey': 'prn2',
        'formIndex': '3',
        'inputType': 'text',
        'label': 'PRN 2',
        'tableColumn': '11',
        'fqn': 'testTable.prn2'
      },
      {
        'elementKey': 'prn3',
        'formIndex': '3',
        'inputType': 'text',
        'label': 'PRN 3',
        'tableColumn': '12',
        'fqn': 'testTable.prn3'
      },
      {
        'elementKey': 'prn4',
        'formIndex': '3',
        'inputType': 'text',
        'label': 'PRN 4',
        'tableColumn': '13',
        'fqn': 'testTable.prn4'
      },
      {
        'elementKey': 'prn5',
        'formIndex': '3',
        'inputType': 'text',
        'label': 'PRN 5',
        'tableColumn': '14',
        'fqn': 'testTable.prn5'
      },
      {
        'elementKey': 'prn6',
        'formIndex': '3',
        'inputType': 'text',
        'label': 'PRN 6',
        'tableColumn': '15',
        'fqn': 'testTable.prn6'
      },
      {
        'elementKey': 'once',
        'formIndex': '3',
        'inputType': 'text',
        'label': 'Once',
        'tableColumn': '10',
        'fqn': 'testTable.once'
      },
      {
        'elementKey': 'stat',
        'formIndex': '3',
        'inputType': 'text',
        'label': 'Stat',
        'tableColumn': '10',
        'fqn': 'testTable.stat'
      }
    ],
    'pageElements': {
      'table1': {
        'elementKey': 'table1',
        'pageElementIndex': '1',
        'pageKey': 'testTable',
        'tableKey': 'table1',
        'isTable': true,
        'label': 'Test table 1',
        'addButtonText': 'Add a row to the test table',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'table1_id'
            ]
          },
          {
            'label': 'A bool',
            'ehr_list_index': '1',
            'items': [
              'pcheckbox'
            ]
          },
          {
            'label': 'Wieght',
            'ehr_list_index': '2',
            'items': [
              'weight'
            ]
          },
          {
            'label': 'Text',
            'ehr_list_index': '3',
            'items': [
              'defaultText'
            ]
          },
          {
            'label': 'Set',
            'ehr_list_index': '4',
            'items': [
              'e10'
            ]
          },
          {
            'label': 'Selects',
            'ehr_list_index': '5',
            'items': [
              'e7',
              'e8',
              'p-cValue1'
            ]
          },
          {
            'label': 'Long text',
            'ehr_list_index': '6',
            'items': [
              'e11'
            ]
          },
          {
            'label': 'Day',
            'ehr_list_index': '7',
            'items': [
              'dayValue'
            ]
          },
          {
            'label': 'Time',
            'ehr_list_index': '8',
            'items': [
              'timeValue'
            ]
          },
          {
            'label': 'Source',
            'ehr_list_index': '9',
            'items': [
              'forCalc'
            ]
          },
          {
            'label': 'Calculated',
            'ehr_list_index': '10',
            'items': [
              'p-cValue2'
            ]
          },
          {
            'label': 'Bool',
            'ehr_list_index': '12',
            'items': [
              'g4'
            ]
          },
          {
            'label': 'Text',
            'ehr_list_index': '13',
            'items': [
              'g5'
            ]
          },
          {
            'label': 'Lable',
            'ehr_list_index': '14',
            'items': [
              'g6'
            ]
          },
          {
            'label': 'Date',
            'ehr_list_index': '15',
            'items': [
              'g9'
            ]
          }
        ],
        'form': {
          'elementKey': 'table1',
          'label': 'Test table 1',
          'addButtonText': 'Add a row to the test table',
          'formKey': 'table1',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group415',
              'label': 'Group 1',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '1',
              'gChildren': [
                'e1',
                'e2',
                'weight',
                'pcheckbox',
                'defaultText',
                'e6',
                'e7',
                'e8',
                'p-cValue1'
              ]
            },
            {
              'elementKey': 'ehr_group416',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                {
                  'elementKey': 'subgroup1',
                  'label': 'subgroup 1',
                  'sgChildren': [
                    'e10'
                  ]
                },
                {
                  'elementKey': 'subgroup2',
                  'label': 'subgroup 2',
                  'sgChildren': [
                    'dayValue',
                    'timeValue',
                    'forCalc',
                    'p-cValue2'
                  ]
                },
                {
                  'elementKey': 'subgroup3',
                  'label': 'subgroup 3',
                  'sgChildren': [
                    'g4',
                    'g5',
                    'g6',
                    'g7',
                    'g8',
                    'g9'
                  ]
                }
              ]
            },
            {
              'elementKey': 'ehr_group417',
              'formOption': '1',
              'formCss': 'full-width',
              'gIndex': '3',
              'gChildren': [
                'e11'
              ]
            }
          ],
          'ehr_data': {
            'weight': '80',
            'pcheckbox': true,
            'defaultText': 'some default',
            'e7': '',
            'e8': '',
            'p-cValue1': '',
            'e10': 'check1,other',
            'dayValue': '',
            'timeValue': '',
            'forCalc': '',
            'p-cValue2': '',
            'g4': '',
            'g5': '',
            'g9': '',
            'e11': ''
          }
        },
        'tableChildren': [
          'table1_id',
          'weight',
          'pcheckbox',
          'defaultText',
          'e7',
          'e8',
          'p-cValue1',
          'e10',
          'dayValue',
          'timeValue',
          'forCalc',
          'p-cValue2',
          'g4',
          'g5',
          'g6',
          'g9',
          'e11'
        ]
      },
      'stacked': {
        'elementKey': 'stacked',
        'pageElementIndex': '2',
        'pageKey': 'testTable',
        'tableKey': 'stacked',
        'isTable': true,
        'label': 'Stacked table',
        'addButtonText': 'Add a stacked row',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'stacked_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'stacked_name',
              'stacked_profession',
              'stacked_day',
              'stacked_time'
            ]
          },
          {
            'label': 'Chk 1',
            'ehr_list_index': '2',
            'items': [
              'cd1',
              'cd1Date',
              'spacer420'
            ]
          },
          {
            'label': 'Chk 2',
            'ehr_list_index': '3',
            'items': [
              'cd2',
              'cd2Date',
              'spacer421'
            ]
          },
          {
            'label': 'Txt 1',
            'ehr_list_index': '4',
            'items': [
              'td1',
              'td1Date',
              'spacer422'
            ]
          },
          {
            'label': 'Referral',
            'ehr_list_index': '5',
            'items': [
              'referralName',
              'referralProfession'
            ]
          },
          {
            'label': 'Appointment',
            'ehr_list_index': '6',
            'items': [
              'appointmentDate',
              'appointmentTime'
            ]
          },
          {
            'label': 'Status',
            'ehr_list_index': '7',
            'items': [
              'status'
            ]
          }
        ],
        'form': {
          'elementKey': 'stacked',
          'label': 'Stacked table',
          'addButtonText': 'Add a stacked row',
          'formKey': 'stacked',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group418',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'stacked_name',
                'stacked_profession',
                'stacked_day',
                'stacked_time'
              ]
            },
            {
              'elementKey': 'ehr_group419',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'cd1',
                'cd1Date',
                'spacer420',
                'cd2',
                'cd2Date',
                'spacer421',
                'td1',
                'td1Date',
                'spacer422'
              ]
            },
            {
              'elementKey': 'ehr_group423',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '3',
              'gChildren': [
                'referralName',
                'referralProfession',
                'spacer1',
                'appointmentDate',
                'appointmentTime',
                'status'
              ]
            }
          ],
          'ehr_data': {
            'stacked_name': '',
            'stacked_profession': '',
            'stacked_day': '',
            'stacked_time': '',
            'cd1': '',
            'cd1Date': '',
            'cd2': '',
            'cd2Date': '',
            'td1': '',
            'td1Date': '',
            'referralName': '',
            'referralProfession': '',
            'appointmentDate': '',
            'appointmentTime': '',
            'status': ''
          }
        },
        'tableChildren': [
          'stacked_id',
          'stacked_name',
          'stacked_profession',
          'stacked_day',
          'stacked_time',
          'cd1',
          'cd1Date',
          'spacer420',
          'cd2',
          'cd2Date',
          'spacer421',
          'td1',
          'td1Date',
          'spacer422',
          'referralName',
          'referralProfession',
          'appointmentDate',
          'appointmentTime',
          'status'
        ],
        'hasRecHeader': true
      },
      'form3': {
        'elementKey': 'form3',
        'label': 'Form 3',
        'pageElementIndex': '3',
        'formKey': 'form3',
        'isPageForm': true,
        'ehr_groups': [
          {
            'elementKey': 'adminGroup',
            'formCss': 'grid-left-to-right-3',
            'gIndex': '1',
            'gChildren': [
              'administration'
            ]
          },
          {
            'elementKey': 'schedGroup',
            'dependentOn': 'visble:administration=sched',
            'formCss': 'grid-left-to-right-3',
            'gIndex': '2',
            'gChildren': [
              'scheduled'
            ]
          },
          {
            'elementKey': 'prnGroup',
            'dependentOn': 'visble:administration=prn',
            'formCss': 'grid-left-to-right-3',
            'gIndex': '3',
            'gChildren': [
              'prn1',
              'prn2',
              'prn3',
              'prn4',
              'prn5',
              'prn6'
            ]
          },
          {
            'elementKey': 'onceGroup',
            'dependentOn': 'visble:administration=once',
            'formCss': 'grid-left-to-right-3',
            'gIndex': '4',
            'gChildren': [
              'once'
            ]
          },
          {
            'elementKey': 'statGroup',
            'dependentOn': 'visble:administration=stat',
            'formCss': 'grid-left-to-right-3',
            'gIndex': '5',
            'gChildren': [
              'stat'
            ]
          }
        ]
      }
    }
  },
  'integumentaryAssessment': {
    'pageDataKey': 'integumentaryAssessment',
    'pageTitle': 'Integumentary assessment',
    'pIndex': '42',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'tableIncision_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'integumentaryAssessment.name'
      },
      {
        'elementKey': 'tableIncision_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'tableIncision_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'integumentaryAssessment.profession'
      },
      {
        'elementKey': 'tableIncision_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'integumentaryAssessment.day'
      },
      {
        'elementKey': 'tableIncision_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'integumentaryAssessment.time'
      },
      {
        'elementKey': 'incisionLabel',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Incision label',
        'options': [
          {
            'key': 'Incision 1',
            'text': 'Incision 1'
          },
          {
            'key': 'Incision 2',
            'text': 'Incision 2'
          },
          {
            'key': 'Incision 3',
            'text': 'Incision 3'
          },
          {
            'key': 'Incision 4',
            'text': 'Incision 4'
          }
        ],
        'tableColumn': '2',
        'fqn': 'integumentaryAssessment.incisionLabel'
      },
      {
        'elementKey': 'incisionLocation',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Incision location',
        'options': [
          {
            'key': 'Head',
            'text': 'Head'
          },
          {
            'key': 'Face',
            'text': 'Face'
          },
          {
            'key': 'Neck',
            'text': 'Neck'
          },
          {
            'key': 'Chest',
            'text': 'Chest'
          },
          {
            'key': 'Arm (Left)',
            'text': 'Arm (Left)'
          },
          {
            'key': 'Arm (Right)',
            'text': 'Arm (Right)'
          },
          {
            'key': 'Hand (Left)',
            'text': 'Hand (Left)'
          },
          {
            'key': 'Hand (Right)',
            'text': 'Hand (Right)'
          },
          {
            'key': 'Abdomen',
            'text': 'Abdomen'
          },
          {
            'key': 'Back',
            'text': 'Back'
          },
          {
            'key': 'Pelvis',
            'text': 'Pelvis'
          },
          {
            'key': 'Buttock',
            'text': 'Buttock'
          },
          {
            'key': 'Leg (Left)',
            'text': 'Leg (Left)'
          },
          {
            'key': 'Leg (Right)',
            'text': 'Leg (Right)'
          },
          {
            'key': 'Foot (Left)',
            'text': 'Foot (Left)'
          },
          {
            'key': 'Foot (Right)',
            'text': 'Foot (Right)'
          },
          {
            'key': '',
            'text': ''
          }
        ],
        'tableColumn': '3',
        'fqn': 'integumentaryAssessment.incisionLocation'
      },
      {
        'elementKey': 'postOpDay',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Post Operative Day',
        'tableColumn': '4',
        'fqn': 'integumentaryAssessment.postOpDay'
      },
      {
        'elementKey': 'opProcedure',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Operative Procedure',
        'tableColumn': '5',
        'fqn': 'integumentaryAssessment.opProcedure'
      },
      {
        'elementKey': 'closureMethod',
        'formIndex': '1',
        'inputType': 'checkset',
        'label': 'Closure Method',
        'options': [
          {
            'key': 'sutures',
            'text': 'Sutures'
          },
          {
            'key': 'staples',
            'text': 'Staples'
          },
          {
            'key': 'retentionSutures',
            'text': 'Retention Sutures'
          },
          {
            'key': 'surgiGlue',
            'text': 'SurgiGlue'
          },
          {
            'key': 'steriStrip',
            'text': 'Steri-Strip'
          },
          {
            'key': 'notApplicable',
            'text': 'Not Applicable'
          }
        ],
        'tableColumn': '6',
        'fqn': 'integumentaryAssessment.closureMethod'
      },
      {
        'elementKey': 'incisionProfileImage',
        'formIndex': '1',
        'inputType': 'ehrFile',
        'label': 'Image',
        'tableColumn': '7',
        'fqn': 'integumentaryAssessment.incisionProfileImage'
      },
      {
        'elementKey': 'incisionProfileComments',
        'formIndex': '1',
        'formCss': 'grid-span-3-columns',
        'inputType': 'textarea',
        'label': 'Comments',
        'tableColumn': '8',
        'fqn': 'integumentaryAssessment.incisionProfileComments'
      },
      {
        'elementKey': 'tableIncisionAssessment_name',
        'formIndex': '2',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'integumentaryAssessment.name'
      },
      {
        'elementKey': 'tableIncisionAssessment_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'tableIncisionAssessment_profession',
        'formIndex': '2',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'integumentaryAssessment.profession'
      },
      {
        'elementKey': 'tableIncisionAssessment_day',
        'formIndex': '2',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'integumentaryAssessment.day'
      },
      {
        'elementKey': 'tableIncisionAssessment_time',
        'formIndex': '2',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'integumentaryAssessment.time'
      },
      {
        'elementKey': 'incisionLabel',
        'formIndex': '2',
        'helperText': 'Enter incision label 1 to 4',
        'inputType': 'select',
        'label': 'Incision label',
        'options': [
          {
            'key': 'Incision 1',
            'text': 'Incision 1'
          },
          {
            'key': 'Incision 2',
            'text': 'Incision 2'
          },
          {
            'key': 'Incision 3',
            'text': 'Incision 3'
          },
          {
            'key': 'Incision 4',
            'text': 'Incision 4'
          }
        ],
        'tableColumn': '2',
        'fqn': 'integumentaryAssessment.incisionLabel',
        'helperHtml': '<p>Enter incision label 1 to 4</p>'
      },
      {
        'elementKey': 'incisionStatus',
        'formIndex': '2',
        'inputType': 'select',
        'label': 'Incision Status',
        'options': [
          {
            'key': 'Approximated',
            'text': 'Approximated'
          },
          {
            'key': 'Fully Epithelialized',
            'text': 'Fully Epithelialized'
          },
          {
            'key': 'Tenuous',
            'text': 'Tenuous'
          },
          {
            'key': 'Gaping',
            'text': 'Gaping'
          }
        ],
        'tableColumn': '3',
        'fqn': 'integumentaryAssessment.incisionStatus'
      },
      {
        'elementKey': 'incisionStatusImage',
        'formIndex': '2',
        'inputType': 'ehrFile',
        'label': 'Image',
        'tableColumn': '4',
        'fqn': 'integumentaryAssessment.incisionStatusImage'
      },
      {
        'elementKey': 'closureChanges',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Change in closure',
        'tableColumn': '5',
        'fqn': 'integumentaryAssessment.closureChanges'
      },
      {
        'elementKey': 'exudateAmount',
        'formIndex': '2',
        'inputType': 'checkset',
        'label': 'Exudate Amount',
        'options': [
          {
            'key': 'none',
            'text': 'None'
          },
          {
            'key': 'small',
            'text': 'Small'
          },
          {
            'key': 'moderate',
            'text': 'Moderate'
          },
          {
            'key': 'large',
            'text': 'Large'
          }
        ],
        'tableColumn': '6',
        'fqn': 'integumentaryAssessment.exudateAmount'
      },
      {
        'elementKey': 'exudateType',
        'formIndex': '2',
        'inputType': 'checkset',
        'label': 'Exudate Type',
        'options': [
          {
            'key': 'serous',
            'text': 'Serous'
          },
          {
            'key': 'sanguineous',
            'text': 'Sanguineous'
          },
          {
            'key': 'purulent',
            'text': 'Purulent'
          },
          {
            'key': 'other',
            'text': 'Other'
          },
          {
            'key': 'notApplicable',
            'text': 'Not Applicable'
          }
        ],
        'tableColumn': '7',
        'fqn': 'integumentaryAssessment.exudateType'
      },
      {
        'elementKey': 'periIncisionSkin',
        'formIndex': '2',
        'inputType': 'checkset',
        'label': 'Peri-Incisional Skin',
        'options': [
          {
            'key': 'intact',
            'text': 'Intact'
          },
          {
            'key': 'macerated',
            'text': 'Macerated'
          },
          {
            'key': 'blistersErythemaLessThan2Cm',
            'text': 'Blisters Erythema less than 2cm'
          },
          {
            'key': 'erythemaGreaterThan2Cm',
            'text': 'Erythema greater than 2cm'
          },
          {
            'key': 'indurationLessThan2Cm',
            'text': 'Induration less than 2cm'
          },
          {
            'key': 'indurationGreaterThan2Cm',
            'text': 'Induration greater than 2cm'
          },
          {
            'key': 'other',
            'text': 'Other'
          }
        ],
        'tableColumn': '8',
        'fqn': 'integumentaryAssessment.periIncisionSkin'
      },
      {
        'elementKey': 'periIncisionSkinOther',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Other',
        'tableColumn': '9',
        'fqn': 'integumentaryAssessment.periIncisionSkinOther'
      },
      {
        'elementKey': 'incisionStatusComments',
        'formIndex': '2',
        'formCss': 'grid-span-3-columns',
        'inputType': 'textarea',
        'label': 'Comments',
        'tableColumn': '10',
        'tableLabel': 'Comments',
        'fqn': 'integumentaryAssessment.incisionStatusComments'
      },
      {
        'elementKey': 'tableWound_name',
        'formIndex': '3',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'integumentaryAssessment.name'
      },
      {
        'elementKey': 'tableWound_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'tableWound_profession',
        'formIndex': '3',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'integumentaryAssessment.profession'
      },
      {
        'elementKey': 'tableWound_day',
        'formIndex': '3',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'integumentaryAssessment.day'
      },
      {
        'elementKey': 'tableWound_time',
        'formIndex': '3',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'integumentaryAssessment.time'
      },
      {
        'elementKey': 'woundLocation',
        'formIndex': '3',
        'inputType': 'select',
        'label': 'Wound location',
        'options': [
          {
            'key': 'Head',
            'text': 'Head'
          },
          {
            'key': 'Face',
            'text': 'Face'
          },
          {
            'key': 'Neck',
            'text': 'Neck'
          },
          {
            'key': 'Chest',
            'text': 'Chest'
          },
          {
            'key': 'Arm (Left)',
            'text': 'Arm (Left)'
          },
          {
            'key': 'Arm (Right)',
            'text': 'Arm (Right)'
          },
          {
            'key': 'Hand (Left)',
            'text': 'Hand (Left)'
          },
          {
            'key': 'Hand (Right)',
            'text': 'Hand (Right)'
          },
          {
            'key': 'Abdomen',
            'text': 'Abdomen'
          },
          {
            'key': 'Back',
            'text': 'Back'
          },
          {
            'key': 'Pelvis',
            'text': 'Pelvis'
          },
          {
            'key': 'Buttock',
            'text': 'Buttock'
          },
          {
            'key': 'Leg (Left)',
            'text': 'Leg (Left)'
          },
          {
            'key': 'Leg (Right)',
            'text': 'Leg (Right)'
          },
          {
            'key': 'Foot (Left)',
            'text': 'Foot (Left)'
          },
          {
            'key': 'Foot (Right)',
            'text': 'Foot (Right)'
          },
          {
            'key': '',
            'text': ''
          }
        ],
        'tableColumn': '2',
        'tableLabel': 'Wound location',
        'fqn': 'integumentaryAssessment.woundLocation'
      },
      {
        'elementKey': 'woundLabel',
        'formIndex': '3',
        'inputType': 'select',
        'label': 'Wound label',
        'options': [
          {
            'key': 'Wound A',
            'text': 'Wound A'
          },
          {
            'key': 'Wound B',
            'text': 'Wound B'
          },
          {
            'key': 'Wound C',
            'text': 'Wound C'
          },
          {
            'key': 'Wound D',
            'text': 'Wound D'
          }
        ],
        'tableColumn': '3',
        'tableLabel': 'Wound label',
        'fqn': 'integumentaryAssessment.woundLabel'
      },
      {
        'elementKey': 'woundDayOnset',
        'formIndex': '3',
        'inputType': 'visitDay',
        'label': 'Wound day of onset',
        'tableColumn': '4',
        'tableLabel': 'Wound day of onset',
        'fqn': 'integumentaryAssessment.woundDayOnset'
      },
      {
        'elementKey': 'stageType',
        'formIndex': '3',
        'helperText': 'Pressure Injury Stage 1– Intact skin with localized nonblanchable erythema; darkly pigmented skin may not show visible blanching but will appear different than the colour of surrounding skin.\nPressure Injury Stage 2– Partial thickness wound presenting as a shallow open ulcer with a red / pink wound bed, slough may be present but does not obscure the depth of tissue loss; may also present as an intact or open/ruptured serum-filled or serosanguineous filled blister.\nPressure Injury Stage 3– Full thickness wound; subcutaneous tissue may be visible but bone, tendon and muscle are not exposed; may include undermining and/or sinus tracks; slough or eschar may be present but does not obscure the depth of tissue loss.\nPressure Injury Stage 4– Full thickness wound with exposed bone, tendon or muscle; often includes undermining and/or sinus tracks; slough or eschar may be present on some parts of the wound bed but does not obscure the depth of tissue loss.\nPressure Injury Unstageable – A wound in which the wound bed is covered by sufficient slough and / or eschar to preclude staging.\nPressure Injury Deep Tissue Injury – A localized purple or maroon area of intact skin or a blood filled blister that occur when underlying soft tissue is damaged from friction or shear.\nSurgical Wounds Secondary intention: Incision has dehisced and surgical closure is not possible; wounds must heal by granulation\nSkin Tear: Skin tears are the result of trauma caused by shearing, friction, or blunt force to the skin. Consider risk factors (i.e.: advanced age, immobility, inadequate hydration/nutrition, falls)\nAbscess: A local collection of purulent and/or sanguineous drainage that may be incised and drained.\nBurn: Tissue loss/damage as a result from thermal, chemical, electrical, and radiation sources.\nVenous Ulcer: Caused by venous insufficiency due to valve dysfunction, complete or partial blockage of the deep veins, and / or failure of the calf muscle pump.\nArterial Ulcer: Caused by a disruption to arterial blood flow leading to moderate / severe tissue ischemia.\nMixed Arterial/Venous Ulcer: Caused by both venous insufficiency and disrupted arterial blood flow.\nDiabetic/Neuropathic Ulcers: A result of neuropathy, structural foot changes, and/or altered blood flow related to diabetes mellitus (or alcoholism, renal failure, HIV, late stage syphilis, trauma and surgery).\n',
        'inputType': 'checkset',
        'label': 'Wound Etiology/Type',
        'options': [
          {
            'key': 'pressureInjuryStage1',
            'text': 'Pressure Injury Stage 1'
          },
          {
            'key': 'pressureInjuryStage2',
            'text': 'Pressure Injury Stage 2'
          },
          {
            'key': 'pressureInjuryStage3',
            'text': 'Pressure Injury Stage 3'
          },
          {
            'key': 'pressureInjuryStage4',
            'text': 'Pressure Injury Stage 4'
          },
          {
            'key': 'pressureInjuryUnstageable',
            'text': 'Pressure Injury Unstageable'
          },
          {
            'key': 'pressureInjuryDeepTissueInjury',
            'text': 'Pressure Injury Deep Tissue Injury'
          },
          {
            'key': 'surgicalSecondaryIntent',
            'text': 'Surgical Secondary Intent'
          },
          {
            'key': 'skinTear',
            'text': 'Skin Tear'
          },
          {
            'key': 'abscess',
            'text': 'Abscess'
          },
          {
            'key': 'burn',
            'text': 'Burn'
          },
          {
            'key': 'venousUlcer',
            'text': 'Venous Ulcer'
          },
          {
            'key': 'arterialUlcer',
            'text': 'Arterial Ulcer'
          },
          {
            'key': 'mixedVenous/arterialUlcer',
            'text': 'Mixed Venous/Arterial Ulcer'
          },
          {
            'key': 'diabetic/neuropathicUlcer',
            'text': 'Diabetic/Neuropathic Ulcer'
          },
          {
            'key': 'other',
            'text': 'Other'
          }
        ],
        'tableColumn': '5',
        'tableLabel': 'Wound Etiology/Type',
        'fqn': 'integumentaryAssessment.stageType',
        'helperHtml': '<p>Pressure Injury Stage 1– Intact skin with localized nonblanchable erythema; darkly pigmented skin may not show visible blanching but will appear different than the colour of surrounding skin.</p>\n<p>Pressure Injury Stage 2– Partial thickness wound presenting as a shallow open ulcer with a red / pink wound bed, slough may be present but does not obscure the depth of tissue loss; may also present as an intact or open/ruptured serum-filled or serosanguineous filled blister.</p>\n<p>Pressure Injury Stage 3– Full thickness wound; subcutaneous tissue may be visible but bone, tendon and muscle are not exposed; may include undermining and/or sinus tracks; slough or eschar may be present but does not obscure the depth of tissue loss.</p>\n<p>Pressure Injury Stage 4– Full thickness wound with exposed bone, tendon or muscle; often includes undermining and/or sinus tracks; slough or eschar may be present on some parts of the wound bed but does not obscure the depth of tissue loss.</p>\n<p>Pressure Injury Unstageable – A wound in which the wound bed is covered by sufficient slough and / or eschar to preclude staging.</p>\n<p>Pressure Injury Deep Tissue Injury – A localized purple or maroon area of intact skin or a blood filled blister that occur when underlying soft tissue is damaged from friction or shear.</p>\n<p>Surgical Wounds Secondary intention: Incision has dehisced and surgical closure is not possible; wounds must heal by granulation</p>\n<p>Skin Tear: Skin tears are the result of trauma caused by shearing, friction, or blunt force to the skin. Consider risk factors (i.e.: advanced age, immobility, inadequate hydration/nutrition, falls)</p>\n<p>Abscess: A local collection of purulent and/or sanguineous drainage that may be incised and drained.</p>\n<p>Burn: Tissue loss/damage as a result from thermal, chemical, electrical, and radiation sources.</p>\n<p>Venous Ulcer: Caused by venous insufficiency due to valve dysfunction, complete or partial blockage of the deep veins, and / or failure of the calf muscle pump.</p>\n<p>Arterial Ulcer: Caused by a disruption to arterial blood flow leading to moderate / severe tissue ischemia.</p>\n<p>Mixed Arterial/Venous Ulcer: Caused by both venous insufficiency and disrupted arterial blood flow.</p>\n<p>Diabetic/Neuropathic Ulcers: A result of neuropathy, structural foot changes, and/or altered blood flow related to diabetes mellitus (or alcoholism, renal failure, HIV, late stage syphilis, trauma and surgery).</p>\n<p></p>'
      },
      {
        'elementKey': 'stageOther',
        'dependentOn': 'visble:stageType=other',
        'formIndex': '3',
        'inputType': 'text',
        'label': 'Other',
        'tableColumn': '6',
        'tableLabel': 'Other',
        'fqn': 'integumentaryAssessment.stageOther'
      },
      {
        'elementKey': 'goalOfCare',
        'formIndex': '3',
        'inputType': 'select',
        'label': 'Goal of care',
        'options': [
          {
            'key': 'To heal',
            'text': 'To heal'
          },
          {
            'key': 'To maintain',
            'text': 'To maintain'
          },
          {
            'key': 'To monitor/manage',
            'text': 'To monitor/manage'
          }
        ],
        'tableColumn': '7',
        'tableLabel': 'Goal of care',
        'fqn': 'integumentaryAssessment.goalOfCare'
      },
      {
        'elementKey': 'woundProfileImage',
        'formIndex': '3',
        'inputType': 'ehrFile',
        'label': 'Image',
        'tableColumn': '8',
        'tableLabel': 'Image',
        'fqn': 'integumentaryAssessment.woundProfileImage'
      },
      {
        'elementKey': 'woundProfileComments',
        'formIndex': '3',
        'formCss': 'grid-span-3-columns',
        'inputType': 'textarea',
        'label': 'Comments',
        'tableColumn': '9',
        'tableLabel': 'Comments',
        'fqn': 'integumentaryAssessment.woundProfileComments'
      },
      {
        'elementKey': 'tableWoundAssessment_name',
        'formIndex': '4',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'integumentaryAssessment.name'
      },
      {
        'elementKey': 'tableWoundAssessment_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'tableWoundAssessment_profession',
        'formIndex': '4',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'integumentaryAssessment.profession'
      },
      {
        'elementKey': 'tableWoundAssessment_day',
        'formIndex': '4',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'integumentaryAssessment.day'
      },
      {
        'elementKey': 'tableWoundAssessment_time',
        'formIndex': '4',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'integumentaryAssessment.time'
      },
      {
        'elementKey': 'woundLabel',
        'formIndex': '4',
        'inputType': 'select',
        'label': 'Wound label',
        'options': [
          {
            'key': 'Wound A',
            'text': 'Wound A'
          },
          {
            'key': 'Wound B',
            'text': 'Wound B'
          },
          {
            'key': 'Wound C',
            'text': 'Wound C'
          },
          {
            'key': 'Wound D',
            'text': 'Wound D'
          }
        ],
        'tableColumn': '2',
        'tableLabel': 'Wound label',
        'fqn': 'integumentaryAssessment.woundLabel'
      },
      {
        'elementKey': 'woundAssessmentImage',
        'formIndex': '4',
        'inputType': 'ehrFile',
        'label': 'Image',
        'tableColumn': '3',
        'tableLabel': 'Image',
        'fqn': 'integumentaryAssessment.woundAssessmentImage'
      },
      {
        'elementKey': 'length',
        'formIndex': '4',
        'inputType': 'text',
        'label': 'Length cm.mm',
        'tableColumn': '4',
        'tableLabel': 'Length cm.mm',
        'fqn': 'integumentaryAssessment.length'
      },
      {
        'elementKey': 'width',
        'formIndex': '4',
        'inputType': 'text',
        'label': 'Width cm.mm',
        'tableColumn': '5',
        'tableLabel': 'Width cm.mm',
        'fqn': 'integumentaryAssessment.width'
      },
      {
        'elementKey': 'depth',
        'formIndex': '4',
        'inputType': 'text',
        'label': 'Depth cm.mm',
        'tableColumn': '6',
        'tableLabel': 'Depth cm.mm',
        'fqn': 'integumentaryAssessment.depth'
      },
      {
        'elementKey': 'sinusDepth1',
        'formIndex': '4',
        'inputType': 'text',
        'label': 'Sinus/tunnel 1 depth cm.mm',
        'tableColumn': '7',
        'tableLabel': 'Sinus/tunnel 1 depth cm.mm',
        'fqn': 'integumentaryAssessment.sinusDepth1'
      },
      {
        'elementKey': 'sinusDepthLocation1',
        'formIndex': '4',
        'inputType': 'select',
        'label': 'Location',
        'options': [
          {
            'key': '1',
            'text': '1'
          },
          {
            'key': '2',
            'text': '2'
          },
          {
            'key': '3',
            'text': '3'
          },
          {
            'key': '4',
            'text': '4'
          },
          {
            'key': '5',
            'text': '5'
          },
          {
            'key': '6',
            'text': '6'
          },
          {
            'key': '7',
            'text': '7'
          },
          {
            'key': '8',
            'text': '8'
          },
          {
            'key': '9',
            'text': '9'
          },
          {
            'key': '10',
            'text': '10'
          },
          {
            'key': '11',
            'text': '11'
          },
          {
            'key': '12',
            'text': '12'
          }
        ],
        'tableColumn': '8',
        'tableLabel': 'Location',
        'fqn': 'integumentaryAssessment.sinusDepthLocation1'
      },
      {
        'elementKey': 'spacer91',
        'formIndex': '4',
        'inputType': 'spacer',
        'fqn': 'integumentaryAssessment.spacer91'
      },
      {
        'elementKey': 'sinusDepth2',
        'formIndex': '4',
        'inputType': 'text',
        'label': 'Sinus/tunnel 2 depth cm.mm',
        'tableColumn': '9',
        'tableLabel': 'Sinus/tunnel 2 depth cm.mm',
        'fqn': 'integumentaryAssessment.sinusDepth2'
      },
      {
        'elementKey': 'sinusDepthLocation2',
        'formIndex': '4',
        'inputType': 'select',
        'label': 'Location',
        'options': [
          {
            'key': '1',
            'text': '1'
          },
          {
            'key': '2',
            'text': '2'
          },
          {
            'key': '3',
            'text': '3'
          },
          {
            'key': '4',
            'text': '4'
          },
          {
            'key': '5',
            'text': '5'
          },
          {
            'key': '6',
            'text': '6'
          },
          {
            'key': '7',
            'text': '7'
          },
          {
            'key': '8',
            'text': '8'
          },
          {
            'key': '9',
            'text': '9'
          },
          {
            'key': '10',
            'text': '10'
          },
          {
            'key': '11',
            'text': '11'
          },
          {
            'key': '12',
            'text': '12'
          }
        ],
        'tableColumn': '10',
        'tableLabel': 'Location',
        'fqn': 'integumentaryAssessment.sinusDepthLocation2'
      },
      {
        'elementKey': 'spacer92',
        'formIndex': '4',
        'inputType': 'spacer',
        'fqn': 'integumentaryAssessment.spacer92'
      },
      {
        'elementKey': 'underminingDepth1',
        'formIndex': '4',
        'inputType': 'text',
        'label': 'Undermining 1 depth cm.mm',
        'tableColumn': '11',
        'tableLabel': 'Undermining 1 depth cm.mm',
        'fqn': 'integumentaryAssessment.underminingDepth1'
      },
      {
        'elementKey': 'underminingDepthLocation1A',
        'formIndex': '4',
        'inputType': 'select',
        'label': 'Location',
        'options': [
          {
            'key': '1',
            'text': '1'
          },
          {
            'key': '2',
            'text': '2'
          },
          {
            'key': '3',
            'text': '3'
          },
          {
            'key': '4',
            'text': '4'
          },
          {
            'key': '5',
            'text': '5'
          },
          {
            'key': '6',
            'text': '6'
          },
          {
            'key': '7',
            'text': '7'
          },
          {
            'key': '8',
            'text': '8'
          },
          {
            'key': '9',
            'text': '9'
          },
          {
            'key': '10',
            'text': '10'
          },
          {
            'key': '11',
            'text': '11'
          },
          {
            'key': '12',
            'text': '12'
          }
        ],
        'tableColumn': '12',
        'tableLabel': 'Location',
        'fqn': 'integumentaryAssessment.underminingDepthLocation1A'
      },
      {
        'elementKey': 'underminingDepthLocation1B',
        'formIndex': '4',
        'inputType': 'select',
        'label': 'Location',
        'options': [
          {
            'key': '1',
            'text': '1'
          },
          {
            'key': '2',
            'text': '2'
          },
          {
            'key': '3',
            'text': '3'
          },
          {
            'key': '4',
            'text': '4'
          },
          {
            'key': '5',
            'text': '5'
          },
          {
            'key': '6',
            'text': '6'
          },
          {
            'key': '7',
            'text': '7'
          },
          {
            'key': '8',
            'text': '8'
          },
          {
            'key': '9',
            'text': '9'
          },
          {
            'key': '10',
            'text': '10'
          },
          {
            'key': '11',
            'text': '11'
          },
          {
            'key': '12',
            'text': '12'
          }
        ],
        'tableColumn': '13',
        'tableLabel': 'Location',
        'fqn': 'integumentaryAssessment.underminingDepthLocation1B'
      },
      {
        'elementKey': 'underminingDepth2',
        'formIndex': '4',
        'inputType': 'text',
        'label': 'Undermining 2 depth cm.mm',
        'tableColumn': '14',
        'tableLabel': 'Undermining 2 depth cm.mm',
        'fqn': 'integumentaryAssessment.underminingDepth2'
      },
      {
        'elementKey': 'underminingDepthLocation2A',
        'formIndex': '4',
        'inputType': 'select',
        'label': 'Location',
        'options': [
          {
            'key': '1',
            'text': '1'
          },
          {
            'key': '2',
            'text': '2'
          },
          {
            'key': '3',
            'text': '3'
          },
          {
            'key': '4',
            'text': '4'
          },
          {
            'key': '5',
            'text': '5'
          },
          {
            'key': '6',
            'text': '6'
          },
          {
            'key': '7',
            'text': '7'
          },
          {
            'key': '8',
            'text': '8'
          },
          {
            'key': '9',
            'text': '9'
          },
          {
            'key': '10',
            'text': '10'
          },
          {
            'key': '11',
            'text': '11'
          },
          {
            'key': '12',
            'text': '12'
          }
        ],
        'tableColumn': '15',
        'tableLabel': 'Location',
        'fqn': 'integumentaryAssessment.underminingDepthLocation2A'
      },
      {
        'elementKey': 'underminingDepthLocation2B',
        'formIndex': '4',
        'inputType': 'select',
        'label': 'Location',
        'options': [
          {
            'key': '1',
            'text': '1'
          },
          {
            'key': '2',
            'text': '2'
          },
          {
            'key': '3',
            'text': '3'
          },
          {
            'key': '4',
            'text': '4'
          },
          {
            'key': '5',
            'text': '5'
          },
          {
            'key': '6',
            'text': '6'
          },
          {
            'key': '7',
            'text': '7'
          },
          {
            'key': '8',
            'text': '8'
          },
          {
            'key': '9',
            'text': '9'
          },
          {
            'key': '10',
            'text': '10'
          },
          {
            'key': '11',
            'text': '11'
          },
          {
            'key': '12',
            'text': '12'
          }
        ],
        'tableColumn': '16',
        'tableLabel': 'Location',
        'fqn': 'integumentaryAssessment.underminingDepthLocation2B'
      },
      {
        'elementKey': 'pinkred',
        'formIndex': '4',
        'helperText': 'Superficial (pink/red): Clean, open pink/red area with non-measurable depth',
        'inputType': 'select',
        'label': '% Superficial (pink/red)',
        'options': [
          {
            'key': '10',
            'text': '10%'
          },
          {
            'key': '20',
            'text': '20%'
          },
          {
            'key': '30',
            'text': '30%'
          },
          {
            'key': '40',
            'text': '40%'
          },
          {
            'key': '50',
            'text': '50%'
          },
          {
            'key': '60',
            'text': '60%'
          },
          {
            'key': '70',
            'text': '70%'
          },
          {
            'key': '80',
            'text': '80%'
          },
          {
            'key': '90',
            'text': '90%'
          },
          {
            'key': '100',
            'text': '100%'
          }
        ],
        'passToFunction': 'woundBedCalculation',
        'tableColumn': '17',
        'tableLabel': '% Superficial (pink/red)',
        'fqn': 'integumentaryAssessment.pinkred',
        'helperHtml': '<p>Superficial (pink/red): Clean, open pink/red area with non-measurable depth</p>'
      },
      {
        'elementKey': 'granulation',
        'formIndex': '4',
        'helperText': 'Granulation Tissue: Firm, red, moist, pebbled healthy tissue',
        'inputType': 'select',
        'label': '% Granulation',
        'options': [
          {
            'key': '10',
            'text': '10%'
          },
          {
            'key': '20',
            'text': '20%'
          },
          {
            'key': '30',
            'text': '30%'
          },
          {
            'key': '40',
            'text': '40%'
          },
          {
            'key': '50',
            'text': '50%'
          },
          {
            'key': '60',
            'text': '60%'
          },
          {
            'key': '70',
            'text': '70%'
          },
          {
            'key': '80',
            'text': '80%'
          },
          {
            'key': '90',
            'text': '90%'
          },
          {
            'key': '100',
            'text': '100%'
          }
        ],
        'passToFunction': 'woundBedCalculation',
        'tableColumn': '18',
        'tableLabel': '% Granulation',
        'fqn': 'integumentaryAssessment.granulation',
        'helperHtml': '<p>Granulation Tissue: Firm, red, moist, pebbled healthy tissue</p>'
      },
      {
        'elementKey': 'nongranulated',
        'formIndex': '4',
        'helperText': 'Nongranulated: Pink to red tissue that is smooth and non-pebbled in appearance.',
        'inputType': 'select',
        'label': '% Nongranulated',
        'options': [
          {
            'key': '10',
            'text': '10%'
          },
          {
            'key': '20',
            'text': '20%'
          },
          {
            'key': '30',
            'text': '30%'
          },
          {
            'key': '40',
            'text': '40%'
          },
          {
            'key': '50',
            'text': '50%'
          },
          {
            'key': '60',
            'text': '60%'
          },
          {
            'key': '70',
            'text': '70%'
          },
          {
            'key': '80',
            'text': '80%'
          },
          {
            'key': '90',
            'text': '90%'
          },
          {
            'key': '100',
            'text': '100%'
          }
        ],
        'passToFunction': 'woundBedCalculation',
        'tableColumn': '19',
        'tableLabel': '% Nongranulated',
        'fqn': 'integumentaryAssessment.nongranulated',
        'helperHtml': '<p>Nongranulated: Pink to red tissue that is smooth and non-pebbled in appearance.</p>'
      },
      {
        'elementKey': 'slough',
        'formIndex': '4',
        'helperText': 'Slough: Moist or wet, loose or firmly attached, yellow to brown dead tissue',
        'inputType': 'select',
        'label': '% Slough',
        'options': [
          {
            'key': '10',
            'text': '10%'
          },
          {
            'key': '20',
            'text': '20%'
          },
          {
            'key': '30',
            'text': '30%'
          },
          {
            'key': '40',
            'text': '40%'
          },
          {
            'key': '50',
            'text': '50%'
          },
          {
            'key': '60',
            'text': '60%'
          },
          {
            'key': '70',
            'text': '70%'
          },
          {
            'key': '80',
            'text': '80%'
          },
          {
            'key': '90',
            'text': '90%'
          },
          {
            'key': '100',
            'text': '100%'
          }
        ],
        'passToFunction': 'woundBedCalculation',
        'tableColumn': '20',
        'tableLabel': '% Slough',
        'fqn': 'integumentaryAssessment.slough',
        'helperHtml': '<p>Slough: Moist or wet, loose or firmly attached, yellow to brown dead tissue</p>'
      },
      {
        'elementKey': 'escharBoggy',
        'formIndex': '4',
        'helperText': 'Eschar (soft, boggy): Soft necrotic tissue which is black, brown, grey, or tan in color. It may be firmly or loosely attached to the wound edges and wound base; fluctuance and drainage may be present.',
        'inputType': 'select',
        'label': '% Eschar (soft, boggy)',
        'options': [
          {
            'key': '10',
            'text': '10%'
          },
          {
            'key': '20',
            'text': '20%'
          },
          {
            'key': '30',
            'text': '30%'
          },
          {
            'key': '40',
            'text': '40%'
          },
          {
            'key': '50',
            'text': '50%'
          },
          {
            'key': '60',
            'text': '60%'
          },
          {
            'key': '70',
            'text': '70%'
          },
          {
            'key': '80',
            'text': '80%'
          },
          {
            'key': '90',
            'text': '90%'
          },
          {
            'key': '100',
            'text': '100%'
          }
        ],
        'passToFunction': 'woundBedCalculation',
        'tableColumn': '21',
        'tableLabel': '% Eschar (soft, boggy)',
        'fqn': 'integumentaryAssessment.escharBoggy',
        'helperHtml': '<p>Eschar (soft, boggy): Soft necrotic tissue which is black, brown, grey, or tan in color. It may be firmly or loosely attached to the wound edges and wound base; fluctuance and drainage may be present.</p>'
      },
      {
        'elementKey': 'escharStable',
        'formIndex': '4',
        'helperText': 'Eschar (dry, stable): Firm, dry necrotic tissue with an absence of drainage, edema, erythema or fluctuance. It is black or brown in color and is attached to the wound edges and wound base',
        'inputType': 'select',
        'label': '% Eschar (dry, stable)',
        'options': [
          {
            'key': '10',
            'text': '10%'
          },
          {
            'key': '20',
            'text': '20%'
          },
          {
            'key': '30',
            'text': '30%'
          },
          {
            'key': '40',
            'text': '40%'
          },
          {
            'key': '50',
            'text': '50%'
          },
          {
            'key': '60',
            'text': '60%'
          },
          {
            'key': '70',
            'text': '70%'
          },
          {
            'key': '80',
            'text': '80%'
          },
          {
            'key': '90',
            'text': '90%'
          },
          {
            'key': '100',
            'text': '100%'
          }
        ],
        'passToFunction': 'woundBedCalculation',
        'tableColumn': '22',
        'tableLabel': '% Eschar (dry, stable)',
        'fqn': 'integumentaryAssessment.escharStable',
        'helperHtml': '<p>Eschar (dry, stable): Firm, dry necrotic tissue with an absence of drainage, edema, erythema or fluctuance. It is black or brown in color and is attached to the wound edges and wound base</p>'
      },
      {
        'elementKey': 'foreign',
        'formIndex': '4',
        'helperText': 'Foreign body: Sutures, mesh, hardware',
        'inputType': 'select',
        'label': '% Foreign body',
        'options': [
          {
            'key': '10',
            'text': '10%'
          },
          {
            'key': '20',
            'text': '20%'
          },
          {
            'key': '30',
            'text': '30%'
          },
          {
            'key': '40',
            'text': '40%'
          },
          {
            'key': '50',
            'text': '50%'
          },
          {
            'key': '60',
            'text': '60%'
          },
          {
            'key': '70',
            'text': '70%'
          },
          {
            'key': '80',
            'text': '80%'
          },
          {
            'key': '90',
            'text': '90%'
          },
          {
            'key': '100',
            'text': '100%'
          }
        ],
        'passToFunction': 'woundBedCalculation',
        'tableColumn': '23',
        'tableLabel': '% Foreign body',
        'fqn': 'integumentaryAssessment.foreign',
        'helperHtml': '<p>Foreign body: Sutures, mesh, hardware</p>'
      },
      {
        'elementKey': 'underlying',
        'formIndex': '4',
        'helperText': 'Underlying structures: Faschia, tendon, bone',
        'inputType': 'select',
        'label': '% Underlying structures',
        'options': [
          {
            'key': '10',
            'text': '10%'
          },
          {
            'key': '20',
            'text': '20%'
          },
          {
            'key': '30',
            'text': '30%'
          },
          {
            'key': '40',
            'text': '40%'
          },
          {
            'key': '50',
            'text': '50%'
          },
          {
            'key': '60',
            'text': '60%'
          },
          {
            'key': '70',
            'text': '70%'
          },
          {
            'key': '80',
            'text': '80%'
          },
          {
            'key': '90',
            'text': '90%'
          },
          {
            'key': '100',
            'text': '100%'
          }
        ],
        'passToFunction': 'woundBedCalculation',
        'tableColumn': '24',
        'tableLabel': '% Underlying structures',
        'fqn': 'integumentaryAssessment.underlying',
        'helperHtml': '<p>Underlying structures: Faschia, tendon, bone</p>'
      },
      {
        'elementKey': 'notVisible',
        'formIndex': '4',
        'helperText': 'Not visible: A portion or all of the open wound bed that cannot be visualized',
        'inputType': 'select',
        'label': '% Not visible',
        'options': [
          {
            'key': '10',
            'text': '10%'
          },
          {
            'key': '20',
            'text': '20%'
          },
          {
            'key': '30',
            'text': '30%'
          },
          {
            'key': '40',
            'text': '40%'
          },
          {
            'key': '50',
            'text': '50%'
          },
          {
            'key': '60',
            'text': '60%'
          },
          {
            'key': '70',
            'text': '70%'
          },
          {
            'key': '80',
            'text': '80%'
          },
          {
            'key': '90',
            'text': '90%'
          },
          {
            'key': '100',
            'text': '100%'
          }
        ],
        'passToFunction': 'woundBedCalculation',
        'tableColumn': '25',
        'tableLabel': '% Not visible',
        'fqn': 'integumentaryAssessment.notVisible',
        'helperHtml': '<p>Not visible: A portion or all of the open wound bed that cannot be visualized</p>'
      },
      {
        'elementKey': 'other',
        'formIndex': '4',
        'inputType': 'select',
        'label': '% Other',
        'options': [
          {
            'key': '10',
            'text': '10%'
          },
          {
            'key': '20',
            'text': '20%'
          },
          {
            'key': '30',
            'text': '30%'
          },
          {
            'key': '40',
            'text': '40%'
          },
          {
            'key': '50',
            'text': '50%'
          },
          {
            'key': '60',
            'text': '60%'
          },
          {
            'key': '70',
            'text': '70%'
          },
          {
            'key': '80',
            'text': '80%'
          },
          {
            'key': '90',
            'text': '90%'
          },
          {
            'key': '100',
            'text': '100%'
          }
        ],
        'passToFunction': 'woundBedCalculation',
        'tableColumn': '26',
        'tableLabel': '% Other',
        'fqn': 'integumentaryAssessment.other'
      },
      {
        'elementKey': 'woundBedCalculation',
        'calculationType': 'sum',
        'defaultValue': '0',
        'formIndex': '4',
        'inputType': 'calculatedValue',
        'label': 'Wound bed calculation',
        'tableColumn': '27',
        'tableLabel': 'Wound bed calculation',
        'validation': 'range(0,100)',
        'fqn': 'integumentaryAssessment.woundBedCalculation'
      },
      {
        'elementKey': 'exudateAmount',
        'formIndex': '4',
        'inputType': 'select',
        'label': 'Exudate amount',
        'options': [
          {
            'key': 'None',
            'text': 'None'
          },
          {
            'key': 'Scant/small',
            'text': 'Scant/small'
          },
          {
            'key': 'Moderate',
            'text': 'Moderate'
          },
          {
            'key': 'Large/copious',
            'text': 'Large/copious'
          }
        ],
        'tableColumn': '28',
        'tableLabel': 'Exudate amount',
        'fqn': 'integumentaryAssessment.exudateAmount'
      },
      {
        'elementKey': 'exudateType',
        'formIndex': '4',
        'inputType': 'checkset',
        'label': 'Exudate type',
        'options': [
          {
            'key': 'serous',
            'text': 'Serous'
          },
          {
            'key': 'sanguineous',
            'text': 'Sanguineous'
          },
          {
            'key': 'purulent',
            'text': 'Purulent'
          },
          {
            'key': 'other',
            'text': 'Other'
          }
        ],
        'tableColumn': '29',
        'tableLabel': 'Exudate type',
        'fqn': 'integumentaryAssessment.exudateType'
      },
      {
        'elementKey': 'odour',
        'formIndex': '4',
        'inputType': 'select',
        'label': 'Odour present after cleansing',
        'options': [
          {
            'key': 'Yes',
            'text': 'Yes'
          },
          {
            'key': 'No',
            'text': 'No'
          }
        ],
        'tableColumn': '30',
        'tableLabel': 'Odour present after cleansing',
        'fqn': 'integumentaryAssessment.odour'
      },
      {
        'elementKey': 'woundEdge',
        'formIndex': '4',
        'helperText': 'Wound Edge: The perimeter of the wound\nDiffuse: Not well defined, indistinct, difficult to clearly define wound outline\nDemarcated: Well defined, distinct, easy to clearly define wound outline\nAttached: Edge appears flush with wound bed or as a “sloping” edge\nNot attached: Edge appears as a “cliff”\nEpithelializing: New, pink to purple, shiny migrating tissue\nRolled: Epithelial wound edge of a cavity wound which rolls under\n\n',
        'inputType': 'checkset',
        'label': 'Wound edge',
        'options': [
          {
            'key': 'diffuse',
            'text': 'Diffuse'
          },
          {
            'key': 'demarcated',
            'text': 'Demarcated'
          },
          {
            'key': 'attached',
            'text': 'Attached'
          },
          {
            'key': 'notAttached',
            'text': 'Not attached'
          },
          {
            'key': 'epithelialization',
            'text': 'Epithelialization'
          },
          {
            'key': 'rolled',
            'text': 'Rolled'
          }
        ],
        'tableColumn': '31',
        'tableLabel': 'Wound edge',
        'fqn': 'integumentaryAssessment.woundEdge',
        'helperHtml': '<p>Wound Edge: The perimeter of the wound</p>\n<p>Diffuse: Not well defined, indistinct, difficult to clearly define wound outline</p>\n<p>Demarcated: Well defined, distinct, easy to clearly define wound outline</p>\n<p>Attached: Edge appears flush with wound bed or as a “sloping” edge</p>\n<p>Not attached: Edge appears as a “cliff”</p>\n<p>Epithelializing: New, pink to purple, shiny migrating tissue</p>\n<p>Rolled: Epithelial wound edge of a cavity wound which rolls under</p>\n<p></p>\n<p></p>'
      },
      {
        'elementKey': 'periWoundSkin',
        'formIndex': '4',
        'helperText': 'Intact: Unbroken skin\nFragile: Skin that is at risk for breakdown\nMacerated: Wet, white looking skin\nExcoriated/denuded: loss of tissue\nErythema (2cm or less): Redness of the skin; may be intense bright red to dark red that DOES NOT extend 2cm from the wound edge\nIndurated (2cm or less): Abnormal firmness of the tissues with palpable margins that DOES NOT extend 2cm from the wound edge\nErythema (greater than 2cm): Redness of the skin; may be intense bright red to dark red that extends 2cm from the wound edge\nIndurated (greater than 2cm): Abnormal firmness of the tissues with palpable margins that extends 2cm from the wound edge\nIncreased warmth: Increased warmth when compared to skin in adjacent area\n',
        'inputType': 'checkset',
        'label': 'Peri-wound skin',
        'options': [
          {
            'key': 'intact',
            'text': 'Intact'
          },
          {
            'key': 'fragile',
            'text': 'Fragile'
          },
          {
            'key': 'macerated',
            'text': 'Macerated'
          },
          {
            'key': 'excoriated/denuded',
            'text': 'Excoriated/Denuded'
          },
          {
            'key': 'erythema (2CmOrLess)',
            'text': 'Erythema (2cm or less)'
          },
          {
            'key': 'indurated (2CmOrLess)',
            'text': 'Indurated (2cm or less)'
          },
          {
            'key': 'indurated (greaterThan2Cm)',
            'text': 'Indurated (greater than 2cm)'
          },
          {
            'key': 'erythema (greaterThan2Cm)',
            'text': 'Erythema (greater than 2cm)'
          },
          {
            'key': 'increasedWarmth',
            'text': 'Increased Warmth'
          },
          {
            'key': 'other',
            'text': 'Other'
          },
          {
            'key': '',
            'text': ''
          }
        ],
        'tableColumn': '32',
        'tableLabel': 'Peri-wound skin',
        'fqn': 'integumentaryAssessment.periWoundSkin',
        'helperHtml': '<p>Intact: Unbroken skin</p>\n<p>Fragile: Skin that is at risk for breakdown</p>\n<p>Macerated: Wet, white looking skin</p>\n<p>Excoriated/denuded: loss of tissue</p>\n<p>Erythema (2cm or less): Redness of the skin; may be intense bright red to dark red that DOES NOT extend 2cm from the wound edge</p>\n<p>Indurated (2cm or less): Abnormal firmness of the tissues with palpable margins that DOES NOT extend 2cm from the wound edge</p>\n<p>Erythema (greater than 2cm): Redness of the skin; may be intense bright red to dark red that extends 2cm from the wound edge</p>\n<p>Indurated (greater than 2cm): Abnormal firmness of the tissues with palpable margins that extends 2cm from the wound edge</p>\n<p>Increased warmth: Increased warmth when compared to skin in adjacent area</p>\n<p></p>'
      },
      {
        'elementKey': 'woundPain',
        'formIndex': '4',
        'helperText': 'Scored from 10 point analogue Pain Scale\nSee Pain Assessment for details',
        'inputType': 'text',
        'label': 'Wound pain',
        'suffix': '/10',
        'tableColumn': '33',
        'tableLabel': 'Wound pain',
        'validation': 'range(0,10)',
        'fqn': 'integumentaryAssessment.woundPain',
        'helperHtml': '<p>Scored from 10 point analogue Pain Scale</p>\n<p>See Pain Assessment for details</p>',
        'suffixText': '<p>/10</p>',
        'suffixHtml': '/10'
      },
      {
        'elementKey': 'packingOut',
        'formIndex': '4',
        'helperText': 'Any depth 1cm or greater, count packing pieces',
        'inputType': 'text',
        'label': 'Packing out',
        'tableColumn': '34',
        'tableLabel': 'Packing out',
        'fqn': 'integumentaryAssessment.packingOut',
        'helperHtml': '<p>Any depth 1cm or greater, count packing pieces</p>'
      },
      {
        'elementKey': 'packinIn',
        'formIndex': '4',
        'helperText': 'Any depth 1cm or greater, count packing pieces',
        'inputType': 'text',
        'label': 'Packing in',
        'tableColumn': '35',
        'tableLabel': 'Packing in',
        'fqn': 'integumentaryAssessment.packinIn',
        'helperHtml': '<p>Any depth 1cm or greater, count packing pieces</p>'
      },
      {
        'elementKey': 'spacer98',
        'formIndex': '4',
        'inputType': 'spacer',
        'fqn': 'integumentaryAssessment.spacer98'
      },
      {
        'elementKey': 'treatmentComplete',
        'formIndex': '4',
        'inputType': 'select',
        'label': 'Treatments as per plan of care',
        'options': [
          {
            'key': 'Yes',
            'text': 'Yes'
          },
          {
            'key': 'No',
            'text': 'No'
          }
        ],
        'tableColumn': '36',
        'tableLabel': 'Treatments as per plan of care',
        'fqn': 'integumentaryAssessment.treatmentComplete'
      },
      {
        'elementKey': 'woundAssessmentComments',
        'formIndex': '4',
        'formCss': 'grid-span-3-columns',
        'inputType': 'textarea',
        'label': 'Comments',
        'tableColumn': '37',
        'tableLabel': 'Comments',
        'fqn': 'integumentaryAssessment.woundAssessmentComments'
      }
    ],
    'pageElements': {
      'tableIncision': {
        'elementKey': 'tableIncision',
        'pageElementIndex': '1',
        'pageKey': 'integumentaryAssessment',
        'tableKey': 'tableIncision',
        'isTable': true,
        'label': 'Incision profile',
        'addButtonText': 'Add an incision profile',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'tableIncision_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'tableIncision_name',
              'tableIncision_profession',
              'tableIncision_day',
              'tableIncision_time'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'incisionLabel'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'incisionLocation'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'postOpDay'
            ]
          },
          {
            'ehr_list_index': '5',
            'items': [
              'opProcedure'
            ]
          },
          {
            'ehr_list_index': '6',
            'items': [
              'closureMethod'
            ]
          },
          {
            'ehr_list_index': '7',
            'items': [
              'incisionProfileImage'
            ]
          },
          {
            'ehr_list_index': '8',
            'items': [
              'incisionProfileComments'
            ]
          }
        ],
        'form': {
          'elementKey': 'tableIncision',
          'label': 'Incision profile',
          'addButtonText': 'Add an incision profile',
          'formKey': 'tableIncision',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group86',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'tableIncision_name',
                'tableIncision_profession',
                'tableIncision_day',
                'tableIncision_time'
              ]
            },
            {
              'elementKey': 'incisionLocationGroup',
              'label': 'Incision Location',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'incisionLabel',
                'incisionLocation',
                'postOpDay',
                'opProcedure',
                'closureMethod',
                'incisionProfileImage',
                'incisionProfileComments'
              ]
            }
          ],
          'ehr_data': {
            'tableIncision_name': '',
            'tableIncision_profession': '',
            'tableIncision_day': '',
            'tableIncision_time': '',
            'incisionLabel': '',
            'incisionLocation': '',
            'postOpDay': '',
            'opProcedure': '',
            'closureMethod': '',
            'incisionProfileImage': '',
            'incisionProfileComments': ''
          }
        },
        'tableChildren': [
          'tableIncision_id',
          'tableIncision_name',
          'tableIncision_profession',
          'tableIncision_day',
          'tableIncision_time',
          'incisionLabel',
          'incisionLocation',
          'postOpDay',
          'opProcedure',
          'closureMethod',
          'incisionProfileImage',
          'incisionProfileComments'
        ],
        'hasRecHeader': true
      },
      'tableIncisionAssessment': {
        'elementKey': 'tableIncisionAssessment',
        'pageElementIndex': '2',
        'pageKey': 'integumentaryAssessment',
        'tableKey': 'tableIncisionAssessment',
        'isTable': true,
        'label': 'Incision assessment',
        'addButtonText': 'Add an incision assessment',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'tableIncisionAssessment_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'tableIncisionAssessment_name',
              'tableIncisionAssessment_profession',
              'tableIncisionAssessment_day',
              'tableIncisionAssessment_time'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'incisionLabel'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'incisionStatus'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'incisionStatusImage'
            ]
          },
          {
            'ehr_list_index': '5',
            'items': [
              'closureChanges'
            ]
          },
          {
            'ehr_list_index': '6',
            'items': [
              'exudateAmount'
            ]
          },
          {
            'ehr_list_index': '7',
            'items': [
              'exudateType'
            ]
          },
          {
            'ehr_list_index': '8',
            'items': [
              'periIncisionSkin'
            ]
          },
          {
            'ehr_list_index': '9',
            'items': [
              'periIncisionSkinOther'
            ]
          },
          {
            'label': 'Comments',
            'ehr_list_index': '10',
            'items': [
              'incisionStatusComments'
            ]
          }
        ],
        'form': {
          'elementKey': 'tableIncisionAssessment',
          'label': 'Incision assessment',
          'addButtonText': 'Add an incision assessment',
          'formOption': 'transpose',
          'formKey': 'tableIncisionAssessment',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group87',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'tableIncisionAssessment_name',
                'tableIncisionAssessment_profession',
                'tableIncisionAssessment_day',
                'tableIncisionAssessment_time'
              ]
            },
            {
              'elementKey': 'incisionStatusGroup',
              'label': 'Incision',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'incisionLabel',
                'incisionStatus',
                'incisionStatusImage',
                'closureChanges'
              ]
            },
            {
              'elementKey': 'exudateGroup',
              'label': 'Exudate Charateristics',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '3',
              'gChildren': [
                'exudateAmount',
                'exudateType'
              ]
            },
            {
              'elementKey': 'periIncisionGroup',
              'label': 'Peri-Incisional Skin',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '4',
              'gChildren': [
                'periIncisionSkin',
                'periIncisionSkinOther',
                'incisionStatusComments'
              ]
            }
          ],
          'ehr_data': {
            'tableIncisionAssessment_name': '',
            'tableIncisionAssessment_profession': '',
            'tableIncisionAssessment_day': '',
            'tableIncisionAssessment_time': '',
            'incisionLabel': '',
            'incisionStatus': '',
            'incisionStatusImage': '',
            'closureChanges': '',
            'exudateAmount': '',
            'exudateType': '',
            'periIncisionSkin': '',
            'periIncisionSkinOther': '',
            'incisionStatusComments': ''
          }
        },
        'tableChildren': [
          'tableIncisionAssessment_id',
          'tableIncisionAssessment_name',
          'tableIncisionAssessment_profession',
          'tableIncisionAssessment_day',
          'tableIncisionAssessment_time',
          'incisionLabel',
          'incisionStatus',
          'incisionStatusImage',
          'closureChanges',
          'exudateAmount',
          'exudateType',
          'periIncisionSkin',
          'periIncisionSkinOther',
          'incisionStatusComments'
        ],
        'hasRecHeader': true
      },
      'tableWound': {
        'elementKey': 'tableWound',
        'pageElementIndex': '3',
        'pageKey': 'integumentaryAssessment',
        'tableKey': 'tableWound',
        'isTable': true,
        'label': 'Wound profile',
        'addButtonText': 'Add a wound profile',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'tableWound_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'tableWound_name',
              'tableWound_profession',
              'tableWound_day',
              'tableWound_time'
            ]
          },
          {
            'label': 'Wound location',
            'ehr_list_index': '2',
            'items': [
              'woundLocation'
            ]
          },
          {
            'label': 'Wound label',
            'ehr_list_index': '3',
            'items': [
              'woundLabel'
            ]
          },
          {
            'label': 'Wound day of onset',
            'ehr_list_index': '4',
            'items': [
              'woundDayOnset'
            ]
          },
          {
            'label': 'Wound Etiology/Type',
            'ehr_list_index': '5',
            'items': [
              'stageType'
            ]
          },
          {
            'label': 'Other',
            'ehr_list_index': '6',
            'items': [
              'stageOther'
            ]
          },
          {
            'label': 'Goal of care',
            'ehr_list_index': '7',
            'items': [
              'goalOfCare'
            ]
          },
          {
            'label': 'Image',
            'ehr_list_index': '8',
            'items': [
              'woundProfileImage'
            ]
          },
          {
            'label': 'Comments',
            'ehr_list_index': '9',
            'items': [
              'woundProfileComments'
            ]
          }
        ],
        'form': {
          'elementKey': 'tableWound',
          'label': 'Wound profile',
          'addButtonText': 'Add a wound profile',
          'formKey': 'tableWound',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group88',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'tableWound_name',
                'tableWound_profession',
                'tableWound_day',
                'tableWound_time'
              ]
            },
            {
              'elementKey': 'ehr_group89',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'woundLocation',
                'woundLabel',
                'woundDayOnset'
              ]
            },
            {
              'elementKey': 'woundTypeGroup',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '3',
              'gChildren': [
                'stageType',
                'stageOther',
                'goalOfCare',
                'woundProfileImage',
                'woundProfileComments'
              ]
            }
          ],
          'ehr_data': {
            'tableWound_name': '',
            'tableWound_profession': '',
            'tableWound_day': '',
            'tableWound_time': '',
            'woundLocation': '',
            'woundLabel': '',
            'woundDayOnset': '',
            'stageType': '',
            'stageOther': '',
            'goalOfCare': '',
            'woundProfileImage': '',
            'woundProfileComments': ''
          }
        },
        'tableChildren': [
          'tableWound_id',
          'tableWound_name',
          'tableWound_profession',
          'tableWound_day',
          'tableWound_time',
          'woundLocation',
          'woundLabel',
          'woundDayOnset',
          'stageType',
          'stageOther',
          'goalOfCare',
          'woundProfileImage',
          'woundProfileComments'
        ],
        'hasRecHeader': true
      },
      'tableWoundAssessment': {
        'elementKey': 'tableWoundAssessment',
        'pageElementIndex': '4',
        'pageKey': 'integumentaryAssessment',
        'tableKey': 'tableWoundAssessment',
        'isTable': true,
        'label': 'Wound assessment',
        'addButtonText': 'Add a wound assessment',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'tableWoundAssessment_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'tableWoundAssessment_name',
              'tableWoundAssessment_profession',
              'tableWoundAssessment_day',
              'tableWoundAssessment_time'
            ]
          },
          {
            'label': 'Wound label',
            'ehr_list_index': '2',
            'items': [
              'woundLabel'
            ]
          },
          {
            'label': 'Image',
            'ehr_list_index': '3',
            'items': [
              'woundAssessmentImage'
            ]
          },
          {
            'label': 'Length cm.mm',
            'ehr_list_index': '4',
            'items': [
              'length'
            ]
          },
          {
            'label': 'Width cm.mm',
            'ehr_list_index': '5',
            'items': [
              'width'
            ]
          },
          {
            'label': 'Depth cm.mm',
            'ehr_list_index': '6',
            'items': [
              'depth'
            ]
          },
          {
            'label': 'Sinus/tunnel 1 depth cm.mm',
            'ehr_list_index': '7',
            'items': [
              'sinusDepth1'
            ]
          },
          {
            'label': 'Location',
            'ehr_list_index': '8',
            'items': [
              'sinusDepthLocation1'
            ]
          },
          {
            'label': 'Sinus/tunnel 2 depth cm.mm',
            'ehr_list_index': '9',
            'items': [
              'sinusDepth2'
            ]
          },
          {
            'label': 'Location',
            'ehr_list_index': '10',
            'items': [
              'sinusDepthLocation2'
            ]
          },
          {
            'label': 'Undermining 1 depth cm.mm',
            'ehr_list_index': '11',
            'items': [
              'underminingDepth1'
            ]
          },
          {
            'label': 'Location',
            'ehr_list_index': '12',
            'items': [
              'underminingDepthLocation1A'
            ]
          },
          {
            'label': 'Location',
            'ehr_list_index': '13',
            'items': [
              'underminingDepthLocation1B'
            ]
          },
          {
            'label': 'Undermining 2 depth cm.mm',
            'ehr_list_index': '14',
            'items': [
              'underminingDepth2'
            ]
          },
          {
            'label': 'Location',
            'ehr_list_index': '15',
            'items': [
              'underminingDepthLocation2A'
            ]
          },
          {
            'label': 'Location',
            'ehr_list_index': '16',
            'items': [
              'underminingDepthLocation2B'
            ]
          },
          {
            'label': '% Superficial (pink/red)',
            'ehr_list_index': '17',
            'items': [
              'pinkred'
            ]
          },
          {
            'label': '% Granulation',
            'ehr_list_index': '18',
            'items': [
              'granulation'
            ]
          },
          {
            'label': '% Nongranulated',
            'ehr_list_index': '19',
            'items': [
              'nongranulated'
            ]
          },
          {
            'label': '% Slough',
            'ehr_list_index': '20',
            'items': [
              'slough'
            ]
          },
          {
            'label': '% Eschar (soft, boggy)',
            'ehr_list_index': '21',
            'items': [
              'escharBoggy'
            ]
          },
          {
            'label': '% Eschar (dry, stable)',
            'ehr_list_index': '22',
            'items': [
              'escharStable'
            ]
          },
          {
            'label': '% Foreign body',
            'ehr_list_index': '23',
            'items': [
              'foreign'
            ]
          },
          {
            'label': '% Underlying structures',
            'ehr_list_index': '24',
            'items': [
              'underlying'
            ]
          },
          {
            'label': '% Not visible',
            'ehr_list_index': '25',
            'items': [
              'notVisible'
            ]
          },
          {
            'label': '% Other',
            'ehr_list_index': '26',
            'items': [
              'other'
            ]
          },
          {
            'label': 'Wound bed calculation',
            'ehr_list_index': '27',
            'items': [
              'woundBedCalculation'
            ]
          },
          {
            'label': 'Exudate amount',
            'ehr_list_index': '28',
            'items': [
              'exudateAmount'
            ]
          },
          {
            'label': 'Exudate type',
            'ehr_list_index': '29',
            'items': [
              'exudateType'
            ]
          },
          {
            'label': 'Odour present after cleansing',
            'ehr_list_index': '30',
            'items': [
              'odour'
            ]
          },
          {
            'label': 'Wound edge',
            'ehr_list_index': '31',
            'items': [
              'woundEdge'
            ]
          },
          {
            'label': 'Peri-wound skin',
            'ehr_list_index': '32',
            'items': [
              'periWoundSkin'
            ]
          },
          {
            'label': 'Wound pain',
            'ehr_list_index': '33',
            'items': [
              'woundPain'
            ]
          },
          {
            'label': 'Packing out',
            'ehr_list_index': '34',
            'items': [
              'packingOut'
            ]
          },
          {
            'label': 'Packing in',
            'ehr_list_index': '35',
            'items': [
              'packinIn'
            ]
          },
          {
            'label': 'Treatments as per plan of care',
            'ehr_list_index': '36',
            'items': [
              'treatmentComplete'
            ]
          },
          {
            'label': 'Comments',
            'ehr_list_index': '37',
            'items': [
              'woundAssessmentComments'
            ]
          }
        ],
        'form': {
          'elementKey': 'tableWoundAssessment',
          'label': 'Wound assessment',
          'addButtonText': 'Add a wound assessment',
          'formOption': 'transpose',
          'formKey': 'tableWoundAssessment',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group90',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'tableWoundAssessment_name',
                'tableWoundAssessment_profession',
                'tableWoundAssessment_day',
                'tableWoundAssessment_time'
              ]
            },
            {
              'elementKey': 'woundMeasureGroup',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'woundLabel',
                'woundAssessmentImage'
              ]
            },
            {
              'elementKey': 'woundMeasureGroup',
              'label': 'Wound measurements',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '3',
              'gChildren': [
                'length',
                'width',
                'depth',
                'sinusDepth1',
                'sinusDepthLocation1',
                'spacer91',
                'sinusDepth2',
                'sinusDepthLocation2',
                'spacer92',
                'underminingDepth1',
                'underminingDepthLocation1A',
                'underminingDepthLocation1B',
                'underminingDepth2',
                'underminingDepthLocation2A',
                'underminingDepthLocation2B'
              ]
            },
            {
              'elementKey': 'woundBed',
              'label': 'Wound bed',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '4',
              'gChildren': [
                'pinkred',
                'granulation',
                'nongranulated',
                'slough',
                'escharBoggy',
                'escharStable',
                'foreign',
                'underlying',
                'notVisible',
                'other',
                'woundBedCalculation'
              ]
            },
            {
              'elementKey': 'ehr_group93',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '5',
              'gChildren': [
                'exudateAmount',
                'exudateType'
              ]
            },
            {
              'elementKey': 'ehr_group94',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '6',
              'gChildren': [
                'odour'
              ]
            },
            {
              'elementKey': 'ehr_group95',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '7',
              'gChildren': [
                'woundEdge',
                'periWoundSkin'
              ]
            },
            {
              'elementKey': 'ehr_group96',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '8',
              'gChildren': [
                'woundPain'
              ]
            },
            {
              'elementKey': 'ehr_group97',
              'label': 'Treatment',
              'formCss': 'section-divider grid-left-to-right-3',
              'gIndex': '9',
              'gChildren': [
                'packingOut',
                'packinIn',
                'spacer98',
                'treatmentComplete',
                'woundAssessmentComments'
              ]
            }
          ],
          'ehr_data': {
            'tableWoundAssessment_name': '',
            'tableWoundAssessment_profession': '',
            'tableWoundAssessment_day': '',
            'tableWoundAssessment_time': '',
            'woundLabel': '',
            'woundAssessmentImage': '',
            'length': '',
            'width': '',
            'depth': '',
            'sinusDepth1': '',
            'sinusDepthLocation1': '',
            'sinusDepth2': '',
            'sinusDepthLocation2': '',
            'underminingDepth1': '',
            'underminingDepthLocation1A': '',
            'underminingDepthLocation1B': '',
            'underminingDepth2': '',
            'underminingDepthLocation2A': '',
            'underminingDepthLocation2B': '',
            'pinkred': '',
            'granulation': '',
            'nongranulated': '',
            'slough': '',
            'escharBoggy': '',
            'escharStable': '',
            'foreign': '',
            'underlying': '',
            'notVisible': '',
            'other': '',
            'woundBedCalculation': '0',
            'exudateAmount': '',
            'exudateType': '',
            'odour': '',
            'woundEdge': '',
            'periWoundSkin': '',
            'woundPain': '',
            'packingOut': '',
            'packinIn': '',
            'treatmentComplete': '',
            'woundAssessmentComments': ''
          }
        },
        'tableChildren': [
          'tableWoundAssessment_id',
          'tableWoundAssessment_name',
          'tableWoundAssessment_profession',
          'tableWoundAssessment_day',
          'tableWoundAssessment_time',
          'woundLabel',
          'woundAssessmentImage',
          'length',
          'width',
          'depth',
          'sinusDepth1',
          'sinusDepthLocation1',
          'sinusDepth2',
          'sinusDepthLocation2',
          'underminingDepth1',
          'underminingDepthLocation1A',
          'underminingDepthLocation1B',
          'underminingDepth2',
          'underminingDepthLocation2A',
          'underminingDepthLocation2B',
          'pinkred',
          'granulation',
          'nongranulated',
          'slough',
          'escharBoggy',
          'escharStable',
          'foreign',
          'underlying',
          'notVisible',
          'other',
          'woundBedCalculation',
          'exudateAmount',
          'exudateType',
          'odour',
          'woundEdge',
          'periWoundSkin',
          'woundPain',
          'packingOut',
          'packinIn',
          'treatmentComplete',
          'woundAssessmentComments'
        ],
        'hasRecHeader': true
      }
    }
  },
  'hematology': {
    'pageDataKey': 'hematology',
    'pageTitle': 'Med Lab Hematology',
    'pIndex': '43',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'tableCbcAnalysis_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'hematology.name'
      },
      {
        'elementKey': 'tableCbcAnalysis_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'tableCbcAnalysis_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'hematology.profession'
      },
      {
        'elementKey': 'tableCbcAnalysis_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'hematology.day'
      },
      {
        'elementKey': 'tableCbcAnalysis_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'hematology.time'
      },
      {
        'elementKey': 'wbc',
        'formIndex': '1',
        'helperText': 'White blood cell count',
        'inputType': 'number',
        'label': 'WBC',
        'mandatory': true,
        'suffix': '10^9/L',
        'tableColumn': '2',
        'validation': 'numeric',
        'fqn': 'hematology.wbc',
        'helperHtml': '<p>White blood cell count</p>',
        'suffixText': '<p>10^9/L</p>',
        'suffixHtml': '10^9/L'
      },
      {
        'elementKey': 'wbc-interp',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Interpretation',
        'options': [
          {
            'key': 'low',
            'text': 'low'
          },
          {
            'key': 'normal',
            'text': 'normal'
          },
          {
            'key': 'high',
            'text': 'high'
          }
        ],
        'tableColumn': '3',
        'fqn': 'hematology.wbc-interp'
      },
      {
        'elementKey': 'spacer154',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'hematology.spacer154'
      },
      {
        'elementKey': 'rbc',
        'formIndex': '1',
        'helperText': 'Red blood cell count',
        'inputType': 'number',
        'label': 'RBC',
        'suffix': '10^12/L',
        'tableColumn': '4',
        'validation': 'numeric',
        'fqn': 'hematology.rbc',
        'helperHtml': '<p>Red blood cell count</p>',
        'suffixText': '<p>10^12/L</p>',
        'suffixHtml': '10^12/L'
      },
      {
        'elementKey': 'rbc-interp',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Interpretation',
        'options': [
          {
            'key': 'low',
            'text': 'low'
          },
          {
            'key': 'normal',
            'text': 'normal'
          },
          {
            'key': 'high',
            'text': 'high'
          }
        ],
        'tableColumn': '5',
        'fqn': 'hematology.rbc-interp'
      },
      {
        'elementKey': 'spacer155',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'hematology.spacer155'
      },
      {
        'elementKey': 'hgb',
        'formIndex': '1',
        'helperText': 'Hemoglobin',
        'inputType': 'number',
        'label': 'HGB',
        'suffix': 'g/L',
        'tableColumn': '6',
        'validation': 'numeric',
        'fqn': 'hematology.hgb',
        'helperHtml': '<p>Hemoglobin</p>',
        'suffixText': '<p>g/L</p>',
        'suffixHtml': 'g/L'
      },
      {
        'elementKey': 'hgb-interp',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Interpretation',
        'options': [
          {
            'key': 'low',
            'text': 'low'
          },
          {
            'key': 'normal',
            'text': 'normal'
          },
          {
            'key': 'high',
            'text': 'high'
          }
        ],
        'tableColumn': '7',
        'fqn': 'hematology.hgb-interp'
      },
      {
        'elementKey': 'spacer156',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'hematology.spacer156'
      },
      {
        'elementKey': 'HCT',
        'formIndex': '1',
        'helperText': 'Hematocrit',
        'inputType': 'number',
        'label': 'HCT',
        'suffix': 'L/L',
        'tableColumn': '8',
        'validation': 'numeric',
        'fqn': 'hematology.HCT',
        'helperHtml': '<p>Hematocrit</p>',
        'suffixText': '<p>L/L</p>',
        'suffixHtml': 'L/L'
      },
      {
        'elementKey': 'HCT-interp',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Interpretation',
        'options': [
          {
            'key': 'low',
            'text': 'low'
          },
          {
            'key': 'normal',
            'text': 'normal'
          },
          {
            'key': 'high',
            'text': 'high'
          }
        ],
        'tableColumn': '9',
        'fqn': 'hematology.HCT-interp'
      },
      {
        'elementKey': 'spacer157',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'hematology.spacer157'
      },
      {
        'elementKey': 'MCV',
        'formIndex': '1',
        'helperText': 'Mean Cell Volume',
        'inputType': 'number',
        'label': 'MCV',
        'suffix': 'fL',
        'tableColumn': '10',
        'validation': 'numeric',
        'fqn': 'hematology.MCV',
        'helperHtml': '<p>Mean Cell Volume</p>',
        'suffixText': '<p>fL</p>',
        'suffixHtml': 'fL'
      },
      {
        'elementKey': 'MCV-interp',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Interpretation',
        'options': [
          {
            'key': 'low',
            'text': 'low'
          },
          {
            'key': 'normal',
            'text': 'normal'
          },
          {
            'key': 'high',
            'text': 'high'
          }
        ],
        'tableColumn': '11',
        'fqn': 'hematology.MCV-interp'
      },
      {
        'elementKey': 'spacer158',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'hematology.spacer158'
      },
      {
        'elementKey': 'MCH',
        'formIndex': '1',
        'helperText': 'Mean Cell Hemoglobin',
        'inputType': 'number',
        'label': 'MCH',
        'suffix': 'pg',
        'tableColumn': '12',
        'validation': 'numeric',
        'fqn': 'hematology.MCH',
        'helperHtml': '<p>Mean Cell Hemoglobin</p>',
        'suffixText': '<p>pg</p>',
        'suffixHtml': 'pg'
      },
      {
        'elementKey': 'MCH-interp',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Interpretation',
        'options': [
          {
            'key': 'low',
            'text': 'low'
          },
          {
            'key': 'normal',
            'text': 'normal'
          },
          {
            'key': 'high',
            'text': 'high'
          }
        ],
        'tableColumn': '13',
        'fqn': 'hematology.MCH-interp'
      },
      {
        'elementKey': 'spacer159',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'hematology.spacer159'
      },
      {
        'elementKey': 'MCHC',
        'formIndex': '1',
        'helperText': 'Mean Cell Hemoglobin Concentration',
        'inputType': 'number',
        'label': 'MCHC',
        'suffix': 'g/L',
        'tableColumn': '14',
        'validation': 'numeric',
        'fqn': 'hematology.MCHC',
        'helperHtml': '<p>Mean Cell Hemoglobin Concentration</p>',
        'suffixText': '<p>g/L</p>',
        'suffixHtml': 'g/L'
      },
      {
        'elementKey': 'MCHC-interp',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Interpretation',
        'options': [
          {
            'key': 'low',
            'text': 'low'
          },
          {
            'key': 'normal',
            'text': 'normal'
          },
          {
            'key': 'high',
            'text': 'high'
          }
        ],
        'tableColumn': '15',
        'fqn': 'hematology.MCHC-interp'
      },
      {
        'elementKey': 'spacer160',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'hematology.spacer160'
      },
      {
        'elementKey': 'RDW',
        'formIndex': '1',
        'helperText': 'Red Cell Distribution Width CV',
        'inputType': 'number',
        'label': 'RDW',
        'suffix': '%',
        'tableColumn': '16',
        'validation': 'numeric',
        'fqn': 'hematology.RDW',
        'helperHtml': '<p>Red Cell Distribution Width CV</p>',
        'suffixText': '<p>%</p>',
        'suffixHtml': '%'
      },
      {
        'elementKey': 'RDW-interp',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Interpretation',
        'options': [
          {
            'key': 'low',
            'text': 'low'
          },
          {
            'key': 'normal',
            'text': 'normal'
          },
          {
            'key': 'high',
            'text': 'high'
          }
        ],
        'tableColumn': '17',
        'fqn': 'hematology.RDW-interp'
      },
      {
        'elementKey': 'spacer161',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'hematology.spacer161'
      },
      {
        'elementKey': 'PLT',
        'formIndex': '1',
        'helperText': 'Platelet Count',
        'inputType': 'number',
        'label': 'PLT',
        'mandatory': true,
        'suffix': '10^9/L',
        'tableColumn': '18',
        'validation': 'numeric',
        'fqn': 'hematology.PLT',
        'helperHtml': '<p>Platelet Count</p>',
        'suffixText': '<p>10^9/L</p>',
        'suffixHtml': '10^9/L'
      },
      {
        'elementKey': 'PLT-interp',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Interpretation',
        'options': [
          {
            'key': 'low',
            'text': 'low'
          },
          {
            'key': 'normal',
            'text': 'normal'
          },
          {
            'key': 'high',
            'text': 'high'
          }
        ],
        'tableColumn': '19',
        'fqn': 'hematology.PLT-interp'
      },
      {
        'elementKey': 'spacer162',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'hematology.spacer162'
      },
      {
        'elementKey': 'MPV',
        'formIndex': '1',
        'helperText': 'Mean Platelet Volume',
        'inputType': 'number',
        'label': 'MPV',
        'suffix': 'fL',
        'tableColumn': '20',
        'validation': 'numeric',
        'fqn': 'hematology.MPV',
        'helperHtml': '<p>Mean Platelet Volume</p>',
        'suffixText': '<p>fL</p>',
        'suffixHtml': 'fL'
      },
      {
        'elementKey': 'MPV-interp',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Interpretation',
        'options': [
          {
            'key': 'low',
            'text': 'low'
          },
          {
            'key': 'normal',
            'text': 'normal'
          },
          {
            'key': 'high',
            'text': 'high'
          }
        ],
        'tableColumn': '21',
        'fqn': 'hematology.MPV-interp'
      },
      {
        'elementKey': 'spacer163',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'hematology.spacer163'
      },
      {
        'elementKey': 'cbcScatterPlot',
        'formIndex': '1',
        'formCss': 'grid-new-subsection',
        'inputType': 'ehrFile',
        'label': 'CBC scatter plot',
        'tableColumn': '22',
        'fqn': 'hematology.cbcScatterPlot'
      },
      {
        'elementKey': 'comments',
        'formIndex': '1',
        'formCss': 'grid-span-2-columns',
        'inputType': 'textarea',
        'label': 'CBC Comments',
        'tableColumn': '23',
        'fqn': 'hematology.comments'
      },
      {
        'elementKey': 'tablePbfReview_name',
        'formIndex': '2',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'hematology.name'
      },
      {
        'elementKey': 'tablePbfReview_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'tablePbfReview_profession',
        'formIndex': '2',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'hematology.profession'
      },
      {
        'elementKey': 'tablePbfReview_day',
        'formIndex': '2',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'hematology.day'
      },
      {
        'elementKey': 'tablePbfReview_time',
        'formIndex': '2',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'hematology.time'
      },
      {
        'elementKey': 'bloodAnalysis',
        'formIndex': '2',
        'embedRef': 'hematology.tableCbcAnalysis',
        'inputType': 'ehr_embedded',
        'label': 'CBC Analysis',
        'passToFunction': '[wbcAnalysis, pltAnalysis, cellCntSegNeutrophilAbs, cellCntBandCellsAbs, cellCntLymphAbs, cellCntMonoAbs, cellCntEosinAbs, cellCntBasoAbs, cellCntMetaAbs, cellCntMyeloAbs, cellCntPromyeloAbs, cellCntBlastAbs, cellCntReactiveLymphsAbs, cellCntOtherAbs]',
        'tableColumn': '2',
        'fqn': 'hematology.bloodAnalysis'
      },
      {
        'elementKey': 'actionsRequired',
        'formIndex': '2',
        'inputType': 'checkbox',
        'label': 'Actions required',
        'suffix': '10^9/L',
        'tableColumn': '3',
        'fqn': 'hematology.actionsRequired',
        'suffixText': '<p>10^9/L</p>',
        'suffixHtml': '10^9/L'
      },
      {
        'elementKey': 'actionsTaken',
        'formIndex': '2',
        'formCss': 'grid-span-2-columns',
        'inputType': 'textarea',
        'label': 'Actions taken',
        'suffix': '10^12/L',
        'tableColumn': '4',
        'fqn': 'hematology.actionsTaken',
        'suffixText': '<p>10^12/L</p>',
        'suffixHtml': '10^12/L'
      },
      {
        'elementKey': 'scanComments',
        'formIndex': '2',
        'formCss': 'grid-span-2-columns',
        'inputType': 'textarea',
        'label': 'Scan comments',
        'suffix': '10^12/L',
        'tableColumn': '5',
        'fqn': 'hematology.scanComments',
        'suffixText': '<p>10^12/L</p>',
        'suffixHtml': '10^12/L'
      },
      {
        'elementKey': 'wbc-1',
        'formIndex': '2',
        'inputType': 'number',
        'label': 'WBC - 1',
        'passToFunction': 'wbcAverage',
        'tableColumn': '6',
        'validation': 'numeric',
        'fqn': 'hematology.wbc-1'
      },
      {
        'elementKey': 'wbc-2',
        'formIndex': '2',
        'inputType': 'number',
        'label': 'WBC - 2',
        'passToFunction': 'wbcAverage',
        'tableColumn': '7',
        'validation': 'numeric',
        'fqn': 'hematology.wbc-2'
      },
      {
        'elementKey': 'wbc-3',
        'formIndex': '2',
        'inputType': 'number',
        'label': 'WBC - 3',
        'passToFunction': 'wbcAverage',
        'tableColumn': '8',
        'validation': 'numeric',
        'fqn': 'hematology.wbc-3'
      },
      {
        'elementKey': 'wbc-4',
        'formIndex': '2',
        'inputType': 'number',
        'label': 'WBC - 4',
        'passToFunction': 'wbcAverage',
        'tableColumn': '9',
        'validation': 'numeric',
        'fqn': 'hematology.wbc-4'
      },
      {
        'elementKey': 'wbc-5',
        'formIndex': '2',
        'inputType': 'number',
        'label': 'WBC - 5',
        'passToFunction': 'wbcAverage',
        'tableColumn': '10',
        'validation': 'numeric',
        'fqn': 'hematology.wbc-5'
      },
      {
        'elementKey': 'wbc-6',
        'formIndex': '2',
        'inputType': 'number',
        'label': 'WBC - 6',
        'passToFunction': 'wbcAverage',
        'tableColumn': '11',
        'validation': 'numeric',
        'fqn': 'hematology.wbc-6'
      },
      {
        'elementKey': 'wbc-7',
        'formIndex': '2',
        'inputType': 'number',
        'label': 'WBC - 7',
        'passToFunction': 'wbcAverage',
        'tableColumn': '12',
        'validation': 'numeric',
        'fqn': 'hematology.wbc-7'
      },
      {
        'elementKey': 'wbc-8',
        'formIndex': '2',
        'inputType': 'number',
        'label': 'WBC - 8',
        'passToFunction': 'wbcAverage',
        'tableColumn': '13',
        'validation': 'numeric',
        'fqn': 'hematology.wbc-8'
      },
      {
        'elementKey': 'wbc-9',
        'formIndex': '2',
        'inputType': 'number',
        'label': 'WBC - 9',
        'passToFunction': 'wbcAverage',
        'tableColumn': '14',
        'validation': 'numeric',
        'fqn': 'hematology.wbc-9'
      },
      {
        'elementKey': 'wbc-10',
        'formIndex': '2',
        'inputType': 'number',
        'label': 'WBC - 10',
        'passToFunction': 'wbcAverage',
        'tableColumn': '15',
        'validation': 'numeric',
        'fqn': 'hematology.wbc-10'
      },
      {
        'elementKey': 'wbcFieldFactor',
        'defaultValue': '1.8',
        'formIndex': '2',
        'inputType': 'number',
        'label': 'WBC field factor',
        'passToFunction': 'wbcEstimate',
        'tableColumn': '16',
        'validation': 'numeric',
        'fqn': 'hematology.wbcFieldFactor'
      },
      {
        'elementKey': 'wbcAverage',
        'calculationType': 'average',
        'decimals': '1',
        'formIndex': '2',
        'inputType': 'calculatedValue',
        'label': 'WBC average',
        'passToFunction': 'wbcEstimate',
        'tableColumn': '17',
        'validation': 'numeric',
        'fqn': 'hematology.wbcAverage'
      },
      {
        'elementKey': 'wbcEstimate',
        'calculationType': 'product',
        'decimals': '1',
        'formIndex': '2',
        'inputType': 'calculatedValue',
        'label': 'WBC estimate',
        'tableColumn': '18',
        'validation': 'numeric',
        'fqn': 'hematology.wbcEstimate'
      },
      {
        'elementKey': 'wbcAnalysis',
        'calculationType': 'embedValue(hematology,tableCbcAnalysis,wbc)',
        'decimals': '1',
        'formIndex': '2',
        'inputType': 'calculatedValue',
        'label': 'WBC count',
        'passToFunction': '[wbcLowRange, wbcHighRange]',
        'tableColumn': '19',
        'validation': 'numeric',
        'fqn': 'hematology.wbcAnalysis'
      },
      {
        'elementKey': 'wbcLowRange',
        'calculationType': 'multiplyBy(0.75, 1)',
        'decimals': '1',
        'formIndex': '2',
        'inputType': 'calculatedValue',
        'label': 'WBC acceptable range (low)',
        'tableColumn': '20',
        'validation': 'numeric',
        'fqn': 'hematology.wbcLowRange'
      },
      {
        'elementKey': 'wbcHighRange',
        'calculationType': 'multiplyBy(1.25, 1)',
        'decimals': '1',
        'formIndex': '2',
        'inputType': 'calculatedValue',
        'label': 'WBC acceptable range (high)',
        'tableColumn': '21',
        'validation': 'numeric',
        'fqn': 'hematology.wbcHighRange'
      },
      {
        'elementKey': 'wbcComment',
        'formIndex': '2',
        'formCss': 'grid-span-2-columns',
        'inputType': 'text',
        'label': 'Internal WBC comment',
        'tableColumn': '22',
        'fqn': 'hematology.wbcComment'
      },
      {
        'elementKey': 'wbcCorrectedWbc',
        'formIndex': '2',
        'inputType': 'number',
        'label': 'Corrected WBC Count',
        'tableColumn': '23',
        'fqn': 'hematology.wbcCorrectedWbc'
      },
      {
        'elementKey': 'plt-1',
        'formIndex': '2',
        'inputType': 'number',
        'label': 'PLT - 1',
        'passToFunction': 'pltAverage',
        'tableColumn': '23',
        'validation': 'numeric',
        'fqn': 'hematology.plt-1'
      },
      {
        'elementKey': 'plt-2',
        'formIndex': '2',
        'inputType': 'number',
        'label': 'PLT - 2',
        'passToFunction': 'pltAverage',
        'tableColumn': '24',
        'validation': 'numeric',
        'fqn': 'hematology.plt-2'
      },
      {
        'elementKey': 'plt-3',
        'formIndex': '2',
        'inputType': 'number',
        'label': 'PLT - 3',
        'passToFunction': 'pltAverage',
        'tableColumn': '25',
        'validation': 'numeric',
        'fqn': 'hematology.plt-3'
      },
      {
        'elementKey': 'plt-4',
        'formIndex': '2',
        'inputType': 'number',
        'label': 'PLT - 4',
        'passToFunction': 'pltAverage',
        'tableColumn': '26',
        'validation': 'numeric',
        'fqn': 'hematology.plt-4'
      },
      {
        'elementKey': 'plt-5',
        'formIndex': '2',
        'inputType': 'number',
        'label': 'PLT - 5',
        'passToFunction': 'pltAverage',
        'tableColumn': '27',
        'validation': 'numeric',
        'fqn': 'hematology.plt-5'
      },
      {
        'elementKey': 'plt-6',
        'formIndex': '2',
        'inputType': 'number',
        'label': 'PLT - 6',
        'passToFunction': 'pltAverage',
        'tableColumn': '28',
        'validation': 'numeric',
        'fqn': 'hematology.plt-6'
      },
      {
        'elementKey': 'plt-7',
        'formIndex': '2',
        'inputType': 'number',
        'label': 'PLT - 7',
        'passToFunction': 'pltAverage',
        'tableColumn': '29',
        'validation': 'numeric',
        'fqn': 'hematology.plt-7'
      },
      {
        'elementKey': 'plt-8',
        'formIndex': '2',
        'inputType': 'number',
        'label': 'PLT - 8',
        'passToFunction': 'pltAverage',
        'tableColumn': '30',
        'validation': 'numeric',
        'fqn': 'hematology.plt-8'
      },
      {
        'elementKey': 'plt-9',
        'formIndex': '2',
        'inputType': 'number',
        'label': 'PLT - 9',
        'passToFunction': 'pltAverage',
        'tableColumn': '31',
        'validation': 'numeric',
        'fqn': 'hematology.plt-9'
      },
      {
        'elementKey': 'plt-10',
        'formIndex': '2',
        'inputType': 'number',
        'label': 'PLT - 10',
        'passToFunction': 'pltAverage',
        'tableColumn': '32',
        'validation': 'numeric',
        'fqn': 'hematology.plt-10'
      },
      {
        'elementKey': 'pltFieldFactor',
        'defaultValue': '11.1',
        'formIndex': '2',
        'inputType': 'number',
        'label': 'PLT field factor',
        'passToFunction': 'pltEstimate',
        'tableColumn': '33',
        'validation': 'numeric',
        'fqn': 'hematology.pltFieldFactor'
      },
      {
        'elementKey': 'pltAverage',
        'calculationType': 'average',
        'decimals': '1',
        'formIndex': '2',
        'inputType': 'calculatedValue',
        'label': 'PLT average',
        'passToFunction': 'pltEstimate',
        'tableColumn': '34',
        'validation': 'numeric',
        'fqn': 'hematology.pltAverage'
      },
      {
        'elementKey': 'pltEstimate',
        'calculationType': 'product',
        'decimals': '0',
        'formIndex': '2',
        'inputType': 'calculatedValue',
        'label': 'PLT estimate',
        'tableColumn': '35',
        'validation': 'numeric',
        'fqn': 'hematology.pltEstimate'
      },
      {
        'elementKey': 'pltAnalysis',
        'calculationType': 'embedValue(hematology,tableCbcAnalysis,PLT)',
        'formIndex': '2',
        'inputType': 'calculatedValue',
        'label': 'PLT count',
        'passToFunction': '[pltLowRange, pltHighRange]',
        'tableColumn': '36',
        'validation': 'numeric',
        'fqn': 'hematology.pltAnalysis'
      },
      {
        'elementKey': 'pltLowRange',
        'calculationType': 'multiplyBy(0.75, 0)',
        'decimals': '0',
        'formIndex': '2',
        'inputType': 'calculatedValue',
        'label': 'PLT acceptable range (low)',
        'tableColumn': '37',
        'validation': 'numeric',
        'fqn': 'hematology.pltLowRange'
      },
      {
        'elementKey': 'pltHighRange',
        'calculationType': 'multiplyBy(1.25, 0)',
        'decimals': '0',
        'formIndex': '2',
        'inputType': 'calculatedValue',
        'label': 'PLT acceptable range (high)',
        'tableColumn': '38',
        'validation': 'numeric',
        'fqn': 'hematology.pltHighRange'
      },
      {
        'elementKey': 'pltComment',
        'formIndex': '2',
        'formCss': 'grid-span-2-columns',
        'inputType': 'text',
        'label': 'Internal PLT comment',
        'tableColumn': '39',
        'fqn': 'hematology.pltComment'
      },
      {
        'elementKey': 'pltNormalMorphology',
        'formIndex': '2',
        'inputType': 'checkbox',
        'label': 'Normal',
        'tableColumn': '40',
        'fqn': 'hematology.pltNormalMorphology'
      },
      {
        'elementKey': 'pltMorphology',
        'formIndex': '2',
        'formCss': 'form_label_short',
        'inputType': 'boxcheckset',
        'label': 'Abnormal Type',
        'options': [
          {
            'key': 'Hypogranular',
            'text': 'Hypogranular'
          },
          {
            'key': 'Large or Giant Forms',
            'text': 'Large or Giant Forms'
          },
          {
            'key': 'Megakaryocytic Fragments',
            'text': 'Megakaryocytic Fragments'
          },
          {
            'key': 'Platelet Clumps',
            'text': 'Platelet Clumps'
          },
          {
            'key': 'Platelet Satellitism',
            'text': 'Platelet Satellitism'
          },
          {
            'key': 'Dysplastic',
            'text': 'Dysplastic'
          }
        ],
        'tableColumn': '41',
        'fqn': 'hematology.pltMorphology'
      },
      {
        'elementKey': 'formTableHeader172',
        'formIndex': '2',
        'inputType': 'formTableHeader',
        'label': 'Type',
        'validation': 'numeric',
        'fqn': 'hematology.formTableHeader172'
      },
      {
        'elementKey': 'formTableHeader173',
        'formIndex': '2',
        'inputType': 'formTableHeader',
        'label': 'Result',
        'validation': 'numeric',
        'fqn': 'hematology.formTableHeader173'
      },
      {
        'elementKey': 'formTableHeader174',
        'formIndex': '2',
        'inputType': 'formTableHeader',
        'label': 'Absolute',
        'validation': 'numeric',
        'fqn': 'hematology.formTableHeader174'
      },
      {
        'elementKey': 'formTableText175',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Segmented Neutrophil',
        'validation': 'numeric',
        'fqn': 'hematology.formTableText175'
      },
      {
        'elementKey': 'cellCntSegNeutrophil',
        'formIndex': '2',
        'inputType': 'number',
        'mandatory': true,
        'passToFunction': '[ cellCntTotal cellCntSegNeutrophilAbs]',
        'tableColumn': '42',
        'tableLabel': 'Segmented Neutrophil',
        'validation': 'numeric',
        'fqn': 'hematology.cellCntSegNeutrophil'
      },
      {
        'elementKey': 'cellCntSegNeutrophilAbs',
        'calculationType': 'wbcAbs',
        'decimals': '1',
        'formIndex': '2',
        'inputType': 'calculatedValue',
        'passToFunction': 'cellCntAbsTotal',
        'tableColumn': '43',
        'tableLabel': 'Absolute',
        'validation': 'numeric',
        'fqn': 'hematology.cellCntSegNeutrophilAbs'
      },
      {
        'elementKey': 'formTableText176',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Band Neutrophil',
        'validation': 'numeric',
        'fqn': 'hematology.formTableText176'
      },
      {
        'elementKey': 'cellCntBandCells',
        'formIndex': '2',
        'inputType': 'number',
        'passToFunction': '[ cellCntTotal cellCntBandCellsAbs ]',
        'tableColumn': '44',
        'tableLabel': 'Band Neutrophil',
        'validation': 'numeric',
        'fqn': 'hematology.cellCntBandCells'
      },
      {
        'elementKey': 'cellCntBandCellsAbs',
        'calculationType': 'wbcAbs',
        'decimals': '1',
        'formIndex': '2',
        'inputType': 'calculatedValue',
        'passToFunction': 'cellCntAbsTotal',
        'tableColumn': '45',
        'tableLabel': 'Absolute',
        'validation': 'numeric',
        'fqn': 'hematology.cellCntBandCellsAbs'
      },
      {
        'elementKey': 'formTableText177',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Lymphocyte',
        'validation': 'numeric',
        'fqn': 'hematology.formTableText177'
      },
      {
        'elementKey': 'cellCntLymph',
        'formIndex': '2',
        'inputType': 'number',
        'passToFunction': '[ cellCntTotal cellCntLymphAbs ]',
        'tableColumn': '46',
        'tableLabel': 'Lymphocyte',
        'validation': 'numeric',
        'fqn': 'hematology.cellCntLymph'
      },
      {
        'elementKey': 'cellCntLymphAbs',
        'calculationType': 'wbcAbs',
        'decimals': '1',
        'formIndex': '2',
        'inputType': 'calculatedValue',
        'passToFunction': 'cellCntAbsTotal',
        'tableColumn': '47',
        'tableLabel': 'Absolute',
        'validation': 'numeric',
        'fqn': 'hematology.cellCntLymphAbs'
      },
      {
        'elementKey': 'formTableText178',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Monocyte',
        'validation': 'numeric',
        'fqn': 'hematology.formTableText178'
      },
      {
        'elementKey': 'cellCntMono',
        'formIndex': '2',
        'inputType': 'number',
        'passToFunction': '[ cellCntTotal cellCntMonoAbs ]',
        'tableColumn': '48',
        'tableLabel': 'Monocyte',
        'validation': 'numeric',
        'fqn': 'hematology.cellCntMono'
      },
      {
        'elementKey': 'cellCntMonoAbs',
        'calculationType': 'wbcAbs',
        'decimals': '1',
        'formIndex': '2',
        'inputType': 'calculatedValue',
        'passToFunction': 'cellCntAbsTotal',
        'tableColumn': '49',
        'tableLabel': 'Absolute',
        'validation': 'numeric',
        'fqn': 'hematology.cellCntMonoAbs'
      },
      {
        'elementKey': 'formTableText179',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Eosinophil',
        'validation': 'numeric',
        'fqn': 'hematology.formTableText179'
      },
      {
        'elementKey': 'cellCntEosin',
        'formIndex': '2',
        'inputType': 'number',
        'passToFunction': '[ cellCntTotal cellCntEosinAbs ]',
        'tableColumn': '50',
        'tableLabel': 'Eosinophil',
        'validation': 'numeric',
        'fqn': 'hematology.cellCntEosin'
      },
      {
        'elementKey': 'cellCntEosinAbs',
        'calculationType': 'wbcAbs',
        'decimals': '1',
        'formIndex': '2',
        'inputType': 'calculatedValue',
        'passToFunction': 'cellCntAbsTotal',
        'tableColumn': '51',
        'tableLabel': 'Absolute',
        'validation': 'numeric',
        'fqn': 'hematology.cellCntEosinAbs'
      },
      {
        'elementKey': 'formTableText180',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Basophil',
        'validation': 'numeric',
        'fqn': 'hematology.formTableText180'
      },
      {
        'elementKey': 'cellCntBaso',
        'formIndex': '2',
        'inputType': 'number',
        'passToFunction': '[ cellCntTotal cellCntBasoAbs ]',
        'tableColumn': '52',
        'tableLabel': 'Basophil',
        'validation': 'numeric',
        'fqn': 'hematology.cellCntBaso'
      },
      {
        'elementKey': 'cellCntBasoAbs',
        'calculationType': 'wbcAbs',
        'decimals': '1',
        'formIndex': '2',
        'inputType': 'calculatedValue',
        'passToFunction': 'cellCntAbsTotal',
        'tableColumn': '53',
        'tableLabel': 'Absolute',
        'validation': 'numeric',
        'fqn': 'hematology.cellCntBasoAbs'
      },
      {
        'elementKey': 'formTableText181',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Metamyelocyte',
        'validation': 'numeric',
        'fqn': 'hematology.formTableText181'
      },
      {
        'elementKey': 'cellCntMeta',
        'formIndex': '2',
        'inputType': 'number',
        'passToFunction': '[ cellCntTotal cellCntMetaAbs ]',
        'tableColumn': '54',
        'tableLabel': 'Metamyelocyte',
        'validation': 'numeric',
        'fqn': 'hematology.cellCntMeta'
      },
      {
        'elementKey': 'cellCntMetaAbs',
        'calculationType': 'wbcAbs',
        'decimals': '1',
        'formIndex': '2',
        'inputType': 'calculatedValue',
        'passToFunction': 'cellCntAbsTotal',
        'tableColumn': '55',
        'tableLabel': 'Absolute',
        'validation': 'numeric',
        'fqn': 'hematology.cellCntMetaAbs'
      },
      {
        'elementKey': 'formTableText182',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Myelocyte',
        'validation': 'numeric',
        'fqn': 'hematology.formTableText182'
      },
      {
        'elementKey': 'cellCntMyelo',
        'formIndex': '2',
        'inputType': 'number',
        'passToFunction': '[ cellCntTotal cellCntMyeloAbs ]',
        'tableColumn': '56',
        'tableLabel': 'Myelocyte',
        'validation': 'numeric',
        'fqn': 'hematology.cellCntMyelo'
      },
      {
        'elementKey': 'cellCntMyeloAbs',
        'calculationType': 'wbcAbs',
        'decimals': '1',
        'formIndex': '2',
        'inputType': 'calculatedValue',
        'passToFunction': 'cellCntAbsTotal',
        'tableColumn': '57',
        'tableLabel': 'Absolute',
        'validation': 'numeric',
        'fqn': 'hematology.cellCntMyeloAbs'
      },
      {
        'elementKey': 'formTableText183',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Promyelocyte',
        'validation': 'numeric',
        'fqn': 'hematology.formTableText183'
      },
      {
        'elementKey': 'cellCntPromyelo',
        'formIndex': '2',
        'inputType': 'number',
        'passToFunction': '[ cellCntTotal cellCntPromyeloAbs ]',
        'tableColumn': '58',
        'tableLabel': 'Promyelocyte',
        'validation': 'numeric',
        'fqn': 'hematology.cellCntPromyelo'
      },
      {
        'elementKey': 'cellCntPromyeloAbs',
        'calculationType': 'wbcAbs',
        'decimals': '1',
        'formIndex': '2',
        'inputType': 'calculatedValue',
        'passToFunction': 'cellCntAbsTotal',
        'tableColumn': '59',
        'tableLabel': 'Absolute',
        'validation': 'numeric',
        'fqn': 'hematology.cellCntPromyeloAbs'
      },
      {
        'elementKey': 'formTableText184',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Blast',
        'validation': 'numeric',
        'fqn': 'hematology.formTableText184'
      },
      {
        'elementKey': 'cellCntBlast',
        'formIndex': '2',
        'inputType': 'number',
        'passToFunction': '[ cellCntTotal cellCntBlastAbs ]',
        'tableColumn': '60',
        'tableLabel': 'Blast',
        'validation': 'numeric',
        'fqn': 'hematology.cellCntBlast'
      },
      {
        'elementKey': 'cellCntBlastAbs',
        'calculationType': 'wbcAbs',
        'decimals': '1',
        'formIndex': '2',
        'inputType': 'calculatedValue',
        'passToFunction': 'cellCntAbsTotal',
        'tableColumn': '61',
        'tableLabel': 'Absolute',
        'validation': 'numeric',
        'fqn': 'hematology.cellCntBlastAbs'
      },
      {
        'elementKey': 'formTableText185',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Reactive Lymphocyte',
        'validation': 'numeric',
        'fqn': 'hematology.formTableText185'
      },
      {
        'elementKey': 'cellCntReactiveLymphs',
        'formIndex': '2',
        'inputType': 'number',
        'passToFunction': '[ cellCntTotal cellCntReactiveLymphsAbs ]',
        'tableColumn': '62',
        'tableLabel': 'Reactive Lymphocyte',
        'validation': 'numeric',
        'fqn': 'hematology.cellCntReactiveLymphs'
      },
      {
        'elementKey': 'cellCntReactiveLymphsAbs',
        'calculationType': 'wbcAbs',
        'decimals': '1',
        'formIndex': '2',
        'inputType': 'calculatedValue',
        'passToFunction': 'cellCntAbsTotal',
        'tableColumn': '63',
        'tableLabel': 'Absolute',
        'validation': 'numeric',
        'fqn': 'hematology.cellCntReactiveLymphsAbs'
      },
      {
        'elementKey': 'formTableText186',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Other',
        'validation': 'numeric',
        'fqn': 'hematology.formTableText186'
      },
      {
        'elementKey': 'cellCntOther',
        'formIndex': '2',
        'inputType': 'number',
        'passToFunction': '[ cellCntTotal cellCntOtherAbs ]',
        'tableColumn': '64',
        'tableLabel': 'Other',
        'validation': 'numeric',
        'fqn': 'hematology.cellCntOther'
      },
      {
        'elementKey': 'cellCntOtherAbs',
        'calculationType': 'wbcAbs',
        'decimals': '1',
        'formIndex': '2',
        'inputType': 'calculatedValue',
        'passToFunction': 'cellCntAbsTotal',
        'tableColumn': '65',
        'tableLabel': 'Absolute',
        'validation': 'numeric',
        'fqn': 'hematology.cellCntOtherAbs'
      },
      {
        'elementKey': 'cellCntOtherSpecify',
        'formIndex': '2',
        'formCss': 'form-table-span-2',
        'inputType': 'text',
        'label': 'Specify',
        'tableColumn': '66',
        'tableLabel': 'Specify',
        'fqn': 'hematology.cellCntOtherSpecify'
      },
      {
        'elementKey': 'spacer187',
        'formIndex': '2',
        'inputType': 'spacer',
        'fqn': 'hematology.spacer187'
      },
      {
        'elementKey': 'formTableText188',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Total',
        'fqn': 'hematology.formTableText188'
      },
      {
        'elementKey': 'cellCntTotal',
        'calculationType': 'sum',
        'decimals': '0',
        'formIndex': '2',
        'inputType': 'calculatedValue',
        'tableColumn': '67',
        'tableLabel': 'Total',
        'fqn': 'hematology.cellCntTotal'
      },
      {
        'elementKey': 'cellCntAbsTotal',
        'calculationType': 'sum',
        'decimals': '1',
        'formIndex': '2',
        'inputType': 'calculatedValue',
        'tableColumn': '68',
        'tableLabel': 'Abs Total',
        'fqn': 'hematology.cellCntAbsTotal'
      },
      {
        'elementKey': 'cellCntNRBCs',
        'formIndex': '2',
        'formCss': 'field_full_line input-element-small',
        'helperText': 'nucleated red blood cells',
        'inputType': 'number',
        'label': 'NRBCs',
        'tableColumn': '69',
        'fqn': 'hematology.cellCntNRBCs',
        'helperHtml': '<p>nucleated red blood cells</p>'
      },
      {
        'elementKey': 'cellCntComment',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Internal WBC Diff comment',
        'tableColumn': '70',
        'fqn': 'hematology.cellCntComment'
      },
      {
        'elementKey': 'wbcmNormalMorphology',
        'formIndex': '2',
        'inputType': 'checkbox',
        'label': 'Normal',
        'tableColumn': '71',
        'fqn': 'hematology.wbcmNormalMorphology'
      },
      {
        'elementKey': 'wbcmAbnormalTypeMorphology',
        'formIndex': '2',
        'inputType': 'boxcheckset',
        'label': 'Abnormal',
        'options': [
          {
            'key': 'Immature Cells',
            'text': 'Immature Cells'
          },
          {
            'key': 'Hypersegmented Neutrophils',
            'text': 'Hypersegmented Neutrophils'
          },
          {
            'key': 'Dysplastic Cells',
            'text': 'Dysplastic Cells'
          },
          {
            'key': 'Pelger-Huët Cells',
            'text': 'Pelger-Huët Cells'
          },
          {
            'key': 'Auer Rods',
            'text': 'Auer Rods'
          },
          {
            'key': 'Smudge Cells',
            'text': 'Smudge Cells'
          },
          {
            'key': 'Lymphoma Cells',
            'text': 'Lymphoma Cells'
          },
          {
            'key': 'Hairy Cells',
            'text': 'Hairy Cells'
          },
          {
            'key': 'Necrobiotic Cells',
            'text': 'Necrobiotic Cells'
          }
        ],
        'tableColumn': '72',
        'fqn': 'hematology.wbcmAbnormalTypeMorphology'
      },
      {
        'elementKey': 'wbcmToxicTypeMorphology',
        'formIndex': '2',
        'inputType': 'boxcheckset',
        'label': 'Toxic Signs',
        'options': [
          {
            'key': 'Döhle Bodies',
            'text': 'Döhle Bodies'
          },
          {
            'key': 'Toxic Granulation',
            'text': 'Toxic Granulation'
          },
          {
            'key': 'Toxic Vacuolation',
            'text': 'Toxic Vacuolation'
          }
        ],
        'tableColumn': '73',
        'fqn': 'hematology.wbcmToxicTypeMorphology'
      },
      {
        'elementKey': 'rcmNormal',
        'formIndex': '2',
        'formCss': 'rcm-one-part',
        'inputType': 'checkbox',
        'label': 'Normal',
        'tableColumn': '74',
        'fqn': 'hematology.rcmNormal'
      },
      {
        'elementKey': 'rcmConsistent',
        'formIndex': '2',
        'formCss': 'rcm-two-part-1',
        'inputType': 'checkbox',
        'label': 'Consistent with indices',
        'tableColumn': '75',
        'fqn': 'hematology.rcmConsistent'
      },
      {
        'elementKey': 'rcmMcvMchc',
        'formIndex': '2',
        'formCss': 'rcm-two-part-2 rcmMcvMchc',
        'inputType': 'text',
        'label': 'MCV/MCHC Interpretation',
        'tableColumn': '76',
        'fqn': 'hematology.rcmMcvMchc'
      },
      {
        'elementKey': 'rcmAnisocytosis',
        'formIndex': '2',
        'formCss': 'rcm-one-part-indented',
        'inputType': 'checkbox',
        'label': 'Anisocytosis',
        'tableColumn': '77',
        'fqn': 'hematology.rcmAnisocytosis'
      },
      {
        'elementKey': 'rcmPolychromasia',
        'formIndex': '2',
        'formCss': 'rcm-one-part-indented',
        'inputType': 'checkbox',
        'label': 'Polychromasia',
        'tableColumn': '78',
        'fqn': 'hematology.rcmPolychromasia'
      },
      {
        'elementKey': 'rcmAcanthocytes',
        'formIndex': '2',
        'formCss': 'rcm-two-part-1',
        'inputType': 'checkbox',
        'label': 'Acanthocytes',
        'tableColumn': '79',
        'fqn': 'hematology.rcmAcanthocytes'
      },
      {
        'elementKey': 'rcmAcanthocytesGrading',
        'formIndex': '2',
        'formCss': 'rcm-two-part-2',
        'inputType': 'select',
        'label': 'grading',
        'options': [
          {
            'key': '1+',
            'text': '1+'
          },
          {
            'key': '2+',
            'text': '2+'
          },
          {
            'key': '3+',
            'text': '3+'
          },
          {
            'key': '4+',
            'text': '4+'
          }
        ],
        'tableColumn': '80',
        'fqn': 'hematology.rcmAcanthocytesGrading'
      },
      {
        'elementKey': 'rcmCodocytes',
        'formIndex': '2',
        'formCss': 'rcm-two-part-1',
        'inputType': 'checkbox',
        'label': 'Codocytes (Target Cells)',
        'tableColumn': '81',
        'fqn': 'hematology.rcmCodocytes'
      },
      {
        'elementKey': 'rcmCodocytesGrading',
        'formIndex': '2',
        'formCss': 'rcm-two-part-2',
        'inputType': 'select',
        'label': 'grading',
        'options': [
          {
            'key': '1+',
            'text': '1+'
          },
          {
            'key': '2+',
            'text': '2+'
          },
          {
            'key': '3+',
            'text': '3+'
          },
          {
            'key': '4+',
            'text': '4+'
          }
        ],
        'tableColumn': '82',
        'fqn': 'hematology.rcmCodocytesGrading'
      },
      {
        'elementKey': 'rcmDacryocytes',
        'formIndex': '2',
        'formCss': 'rcm-two-part-1',
        'inputType': 'checkbox',
        'label': 'Dacryocytes (Tear Drop Cells)',
        'tableColumn': '83',
        'fqn': 'hematology.rcmDacryocytes'
      },
      {
        'elementKey': 'rcmDacryocytesGrading',
        'formIndex': '2',
        'formCss': 'rcm-two-part-2',
        'inputType': 'select',
        'label': 'grading',
        'options': [
          {
            'key': '1+',
            'text': '1+'
          },
          {
            'key': '2+',
            'text': '2+'
          },
          {
            'key': '3+',
            'text': '3+'
          },
          {
            'key': '4+',
            'text': '4+'
          }
        ],
        'tableColumn': '84',
        'fqn': 'hematology.rcmDacryocytesGrading'
      },
      {
        'elementKey': 'rcmDrepanocytes',
        'formIndex': '2',
        'formCss': 'rcm-two-part-1',
        'inputType': 'checkbox',
        'label': 'Drepanocytes (Sickle Cells)',
        'tableColumn': '85',
        'fqn': 'hematology.rcmDrepanocytes'
      },
      {
        'elementKey': 'rcmDrepanocytesGrading',
        'formIndex': '2',
        'formCss': 'rcm-two-part-2',
        'inputType': 'select',
        'label': 'grading',
        'options': [
          {
            'key': '1+',
            'text': '1+'
          },
          {
            'key': '2+',
            'text': '2+'
          },
          {
            'key': '3+',
            'text': '3+'
          },
          {
            'key': '4+',
            'text': '4+'
          }
        ],
        'tableColumn': '86',
        'fqn': 'hematology.rcmDrepanocytesGrading'
      },
      {
        'elementKey': 'rcmEchinocytes',
        'formIndex': '2',
        'formCss': 'rcm-two-part-1',
        'inputType': 'checkbox',
        'label': 'Echinocytes (Burr Cells)',
        'tableColumn': '87',
        'fqn': 'hematology.rcmEchinocytes'
      },
      {
        'elementKey': 'rcmEchinocytesGrading',
        'formIndex': '2',
        'formCss': 'rcm-two-part-2',
        'inputType': 'select',
        'label': 'grading',
        'options': [
          {
            'key': '1+',
            'text': '1+'
          },
          {
            'key': '2+',
            'text': '2+'
          },
          {
            'key': '3+',
            'text': '3+'
          },
          {
            'key': '4+',
            'text': '4+'
          }
        ],
        'tableColumn': '88',
        'fqn': 'hematology.rcmEchinocytesGrading'
      },
      {
        'elementKey': 'rcmOvalocytes',
        'formIndex': '2',
        'formCss': 'rcm-two-part-1',
        'inputType': 'checkbox',
        'label': 'Elliptocytes/Ovalocytes',
        'tableColumn': '89',
        'fqn': 'hematology.rcmOvalocytes'
      },
      {
        'elementKey': 'rcmOvalocytesGrading',
        'formIndex': '2',
        'formCss': 'rcm-two-part-2',
        'inputType': 'select',
        'label': 'grading',
        'options': [
          {
            'key': '1+',
            'text': '1+'
          },
          {
            'key': '2+',
            'text': '2+'
          },
          {
            'key': '3+',
            'text': '3+'
          },
          {
            'key': '4+',
            'text': '4+'
          }
        ],
        'tableColumn': '90',
        'fqn': 'hematology.rcmOvalocytesGrading'
      },
      {
        'elementKey': 'rcmMacroOvalocytes',
        'formIndex': '2',
        'formCss': 'rcm-two-part-1',
        'inputType': 'checkbox',
        'label': 'Macro-ovalocytes',
        'tableColumn': '91',
        'fqn': 'hematology.rcmMacroOvalocytes'
      },
      {
        'elementKey': 'rcmMacroOvalocytesGrading',
        'formIndex': '2',
        'formCss': 'rcm-two-part-2',
        'inputType': 'select',
        'label': 'grading',
        'options': [
          {
            'key': '1+',
            'text': '1+'
          },
          {
            'key': '2+',
            'text': '2+'
          },
          {
            'key': '3+',
            'text': '3+'
          },
          {
            'key': '4+',
            'text': '4+'
          }
        ],
        'tableColumn': '92',
        'fqn': 'hematology.rcmMacroOvalocytesGrading'
      },
      {
        'elementKey': 'rcmStomatocytes',
        'formIndex': '2',
        'formCss': 'rcm-two-part-1',
        'inputType': 'checkbox',
        'label': 'Stomatocytes',
        'tableColumn': '93',
        'fqn': 'hematology.rcmStomatocytes'
      },
      {
        'elementKey': 'rcmStomatocytesGrading',
        'formIndex': '2',
        'formCss': 'rcm-two-part-2',
        'inputType': 'select',
        'label': 'grading',
        'options': [
          {
            'key': '1+',
            'text': '1+'
          },
          {
            'key': '2+',
            'text': '2+'
          },
          {
            'key': '3+',
            'text': '3+'
          },
          {
            'key': '4+',
            'text': '4+'
          }
        ],
        'tableColumn': '94',
        'fqn': 'hematology.rcmStomatocytesGrading'
      },
      {
        'elementKey': 'rcmSpherocytes',
        'formIndex': '2',
        'formCss': 'rcm-two-part-1',
        'inputType': 'checkbox',
        'label': 'Spherocytes',
        'tableColumn': '95',
        'fqn': 'hematology.rcmSpherocytes'
      },
      {
        'elementKey': 'rcmSpherocytesGrading',
        'formIndex': '2',
        'formCss': 'rcm-two-part-2',
        'inputType': 'select',
        'label': 'grading',
        'options': [
          {
            'key': '1+',
            'text': '1+'
          },
          {
            'key': '2+',
            'text': '2+'
          },
          {
            'key': '3+',
            'text': '3+'
          },
          {
            'key': '4+',
            'text': '4+'
          }
        ],
        'tableColumn': '96',
        'fqn': 'hematology.rcmSpherocytesGrading'
      },
      {
        'elementKey': 'rcmICC',
        'formIndex': '2',
        'formCss': 'rcm-two-part-1',
        'inputType': 'checkbox',
        'label': 'Irregularly Contracted Cells (ICC)',
        'tableColumn': '97',
        'fqn': 'hematology.rcmICC'
      },
      {
        'elementKey': 'rcmICCGrading',
        'formIndex': '2',
        'formCss': 'rcm-two-part-2',
        'inputType': 'select',
        'label': 'grading',
        'options': [
          {
            'key': '1+',
            'text': '1+'
          },
          {
            'key': '2+',
            'text': '2+'
          },
          {
            'key': '3+',
            'text': '3+'
          },
          {
            'key': '4+',
            'text': '4+'
          }
        ],
        'tableColumn': '98',
        'fqn': 'hematology.rcmICCGrading'
      },
      {
        'elementKey': 'rcmICCSchistocytes',
        'formIndex': '2',
        'formCss': 'rcm-two-part-1',
        'inputType': 'checkbox',
        'label': 'Schistocytes',
        'tableColumn': '99',
        'fqn': 'hematology.rcmICCSchistocytes'
      },
      {
        'elementKey': 'rcmICCSchistocytesGrading',
        'formIndex': '2',
        'formCss': 'rcm-two-part-2',
        'inputType': 'select',
        'label': 'grading',
        'options': [
          {
            'key': '1+',
            'text': '1+'
          },
          {
            'key': '2+',
            'text': '2+'
          },
          {
            'key': '3+',
            'text': '3+'
          },
          {
            'key': '4+',
            'text': '4+'
          }
        ],
        'tableColumn': '100',
        'fqn': 'hematology.rcmICCSchistocytesGrading'
      },
      {
        'elementKey': 'rcmBasophilicStippling',
        'formIndex': '2',
        'inputType': 'checkbox',
        'label': 'Basophilic Stippling',
        'tableColumn': '101',
        'fqn': 'hematology.rcmBasophilicStippling'
      },
      {
        'elementKey': 'rcmHowellJollyBodies',
        'formIndex': '2',
        'inputType': 'checkbox',
        'label': 'Howell-Jolly Bodies',
        'tableColumn': '102',
        'fqn': 'hematology.rcmHowellJollyBodies'
      },
      {
        'elementKey': 'rcmPappenheimerBodies',
        'formIndex': '2',
        'inputType': 'checkbox',
        'label': 'Pappenheimer Bodies',
        'tableColumn': '103',
        'fqn': 'hematology.rcmPappenheimerBodies'
      },
      {
        'elementKey': 'rcmMalariaType',
        'formIndex': '2',
        'formCss': 'form_label_short, rcmMalariaType',
        'inputType': 'boxcheckset',
        'label': 'Malaria;Type',
        'options': [
          {
            'key': 'Gametocyte',
            'text': 'Gametocyte'
          },
          {
            'key': 'Ring Form/Trophozoite',
            'text': 'Ring Form/Trophozoite'
          },
          {
            'key': 'Schizont',
            'text': 'Schizont'
          }
        ],
        'tableColumn': '104',
        'fqn': 'hematology.rcmMalariaType'
      },
      {
        'elementKey': 'rbcComments',
        'formIndex': '2',
        'inputType': 'textarea',
        'label': 'Internal RBC comments',
        'tableColumn': '105',
        'fqn': 'hematology.rbcComments'
      },
      {
        'elementKey': 'referralToHema',
        'formIndex': '2',
        'inputType': 'checkbox',
        'label': 'Referral to hematopathologist',
        'tableColumn': '106',
        'fqn': 'hematology.referralToHema'
      },
      {
        'elementKey': 'explain',
        'formIndex': '2',
        'inputType': 'textarea',
        'label': 'Reason for referral',
        'tableColumn': '107',
        'fqn': 'hematology.explain'
      }
    ],
    'pageElements': {
      'tableCbcAnalysis': {
        'elementKey': 'tableCbcAnalysis',
        'pageElementIndex': '1',
        'pageKey': 'hematology',
        'tableKey': 'tableCbcAnalysis',
        'isTable': true,
        'label': 'CBC analysis',
        'addButtonText': 'Add a CBC Report',
        'tableAction': 'hematology.tablePbfReview',
        'tableActionLabel': 'PBF Review',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'tableCbcAnalysis_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'tableCbcAnalysis_name',
              'tableCbcAnalysis_profession',
              'tableCbcAnalysis_day',
              'tableCbcAnalysis_time'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'wbc'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'wbc-interp'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'rbc'
            ]
          },
          {
            'ehr_list_index': '5',
            'items': [
              'rbc-interp'
            ]
          },
          {
            'ehr_list_index': '6',
            'items': [
              'hgb'
            ]
          },
          {
            'ehr_list_index': '7',
            'items': [
              'hgb-interp'
            ]
          },
          {
            'ehr_list_index': '8',
            'items': [
              'HCT'
            ]
          },
          {
            'ehr_list_index': '9',
            'items': [
              'HCT-interp'
            ]
          },
          {
            'ehr_list_index': '10',
            'items': [
              'MCV'
            ]
          },
          {
            'ehr_list_index': '11',
            'items': [
              'MCV-interp'
            ]
          },
          {
            'ehr_list_index': '12',
            'items': [
              'MCH'
            ]
          },
          {
            'ehr_list_index': '13',
            'items': [
              'MCH-interp'
            ]
          },
          {
            'ehr_list_index': '14',
            'items': [
              'MCHC'
            ]
          },
          {
            'ehr_list_index': '15',
            'items': [
              'MCHC-interp'
            ]
          },
          {
            'ehr_list_index': '16',
            'items': [
              'RDW'
            ]
          },
          {
            'ehr_list_index': '17',
            'items': [
              'RDW-interp'
            ]
          },
          {
            'ehr_list_index': '18',
            'items': [
              'PLT'
            ]
          },
          {
            'ehr_list_index': '19',
            'items': [
              'PLT-interp'
            ]
          },
          {
            'ehr_list_index': '20',
            'items': [
              'MPV'
            ]
          },
          {
            'ehr_list_index': '21',
            'items': [
              'MPV-interp'
            ]
          },
          {
            'ehr_list_index': '22',
            'items': [
              'cbcScatterPlot'
            ]
          },
          {
            'ehr_list_index': '23',
            'items': [
              'comments'
            ]
          }
        ],
        'form': {
          'elementKey': 'tableCbcAnalysis',
          'label': 'CBC analysis',
          'addButtonText': 'Add a CBC Report',
          'formKey': 'tableCbcAnalysis',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group152',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'tableCbcAnalysis_name',
                'tableCbcAnalysis_profession',
                'tableCbcAnalysis_day',
                'tableCbcAnalysis_time'
              ]
            },
            {
              'elementKey': 'ehr_group153',
              'label': 'Automated analyzer',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'wbc',
                'wbc-interp',
                'spacer154',
                'rbc',
                'rbc-interp',
                'spacer155',
                'hgb',
                'hgb-interp',
                'spacer156',
                'HCT',
                'HCT-interp',
                'spacer157',
                'MCV',
                'MCV-interp',
                'spacer158',
                'MCH',
                'MCH-interp',
                'spacer159',
                'MCHC',
                'MCHC-interp',
                'spacer160',
                'RDW',
                'RDW-interp',
                'spacer161',
                'PLT',
                'PLT-interp',
                'spacer162',
                'MPV',
                'MPV-interp',
                'spacer163'
              ]
            },
            {
              'elementKey': 'ehr_group164',
              'label': 'Scatter plot and comments',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '3',
              'gChildren': [
                'cbcScatterPlot',
                'comments'
              ]
            }
          ],
          'ehr_data': {
            'tableCbcAnalysis_name': '',
            'tableCbcAnalysis_profession': '',
            'tableCbcAnalysis_day': '',
            'tableCbcAnalysis_time': '',
            'wbc': '',
            'wbc-interp': '',
            'rbc': '',
            'rbc-interp': '',
            'hgb': '',
            'hgb-interp': '',
            'HCT': '',
            'HCT-interp': '',
            'MCV': '',
            'MCV-interp': '',
            'MCH': '',
            'MCH-interp': '',
            'MCHC': '',
            'MCHC-interp': '',
            'RDW': '',
            'RDW-interp': '',
            'PLT': '',
            'PLT-interp': '',
            'MPV': '',
            'MPV-interp': '',
            'cbcScatterPlot': '',
            'comments': ''
          }
        },
        'tableActionType': 'openDialog',
        'taTargetPageKey': 'hematology',
        'taTargetTableKey': 'tablePbfReview',
        'taSourcePageKey': 'hematology',
        'taSourceTableKey': 'tableCbcAnalysis',
        'tableChildren': [
          'tableCbcAnalysis_id',
          'tableCbcAnalysis_name',
          'tableCbcAnalysis_profession',
          'tableCbcAnalysis_day',
          'tableCbcAnalysis_time',
          'wbc',
          'wbc-interp',
          'rbc',
          'rbc-interp',
          'hgb',
          'hgb-interp',
          'HCT',
          'HCT-interp',
          'MCV',
          'MCV-interp',
          'MCH',
          'MCH-interp',
          'MCHC',
          'MCHC-interp',
          'RDW',
          'RDW-interp',
          'PLT',
          'PLT-interp',
          'MPV',
          'MPV-interp',
          'cbcScatterPlot',
          'comments'
        ],
        'hasRecHeader': true
      },
      'tablePbfReview': {
        'elementKey': 'tablePbfReview',
        'pageElementIndex': '2',
        'pageKey': 'hematology',
        'tableKey': 'tablePbfReview',
        'isTable': true,
        'label': 'PBF Review',
        'addButtonText': 'NONE',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'tablePbfReview_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'tablePbfReview_name',
              'tablePbfReview_profession',
              'tablePbfReview_day',
              'tablePbfReview_time'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'bloodAnalysis'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'actionsRequired'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'actionsTaken'
            ]
          },
          {
            'ehr_list_index': '5',
            'items': [
              'scanComments'
            ]
          },
          {
            'ehr_list_index': '6',
            'items': [
              'wbc-1'
            ]
          },
          {
            'ehr_list_index': '7',
            'items': [
              'wbc-2'
            ]
          },
          {
            'ehr_list_index': '8',
            'items': [
              'wbc-3'
            ]
          },
          {
            'ehr_list_index': '9',
            'items': [
              'wbc-4'
            ]
          },
          {
            'ehr_list_index': '10',
            'items': [
              'wbc-5'
            ]
          },
          {
            'ehr_list_index': '11',
            'items': [
              'wbc-6'
            ]
          },
          {
            'ehr_list_index': '12',
            'items': [
              'wbc-7'
            ]
          },
          {
            'ehr_list_index': '13',
            'items': [
              'wbc-8'
            ]
          },
          {
            'ehr_list_index': '14',
            'items': [
              'wbc-9'
            ]
          },
          {
            'ehr_list_index': '15',
            'items': [
              'wbc-10'
            ]
          },
          {
            'ehr_list_index': '16',
            'items': [
              'wbcFieldFactor'
            ]
          },
          {
            'ehr_list_index': '17',
            'items': [
              'wbcAverage'
            ]
          },
          {
            'ehr_list_index': '18',
            'items': [
              'wbcEstimate'
            ]
          },
          {
            'ehr_list_index': '19',
            'items': [
              'wbcAnalysis'
            ]
          },
          {
            'ehr_list_index': '20',
            'items': [
              'wbcLowRange'
            ]
          },
          {
            'ehr_list_index': '21',
            'items': [
              'wbcHighRange'
            ]
          },
          {
            'ehr_list_index': '22',
            'items': [
              'wbcComment'
            ]
          },
          {
            'ehr_list_index': '23',
            'items': [
              'wbcCorrectedWbc',
              'plt-1'
            ]
          },
          {
            'ehr_list_index': '24',
            'items': [
              'plt-2'
            ]
          },
          {
            'ehr_list_index': '25',
            'items': [
              'plt-3'
            ]
          },
          {
            'ehr_list_index': '26',
            'items': [
              'plt-4'
            ]
          },
          {
            'ehr_list_index': '27',
            'items': [
              'plt-5'
            ]
          },
          {
            'ehr_list_index': '28',
            'items': [
              'plt-6'
            ]
          },
          {
            'ehr_list_index': '29',
            'items': [
              'plt-7'
            ]
          },
          {
            'ehr_list_index': '30',
            'items': [
              'plt-8'
            ]
          },
          {
            'ehr_list_index': '31',
            'items': [
              'plt-9'
            ]
          },
          {
            'ehr_list_index': '32',
            'items': [
              'plt-10'
            ]
          },
          {
            'ehr_list_index': '33',
            'items': [
              'pltFieldFactor'
            ]
          },
          {
            'ehr_list_index': '34',
            'items': [
              'pltAverage'
            ]
          },
          {
            'ehr_list_index': '35',
            'items': [
              'pltEstimate'
            ]
          },
          {
            'ehr_list_index': '36',
            'items': [
              'pltAnalysis'
            ]
          },
          {
            'ehr_list_index': '37',
            'items': [
              'pltLowRange'
            ]
          },
          {
            'ehr_list_index': '38',
            'items': [
              'pltHighRange'
            ]
          },
          {
            'ehr_list_index': '39',
            'items': [
              'pltComment'
            ]
          },
          {
            'ehr_list_index': '40',
            'items': [
              'pltNormalMorphology'
            ]
          },
          {
            'ehr_list_index': '41',
            'items': [
              'pltMorphology'
            ]
          },
          {
            'label': 'Segmented Neutrophil',
            'ehr_list_index': '42',
            'items': [
              'cellCntSegNeutrophil'
            ]
          },
          {
            'label': 'Absolute',
            'ehr_list_index': '43',
            'items': [
              'cellCntSegNeutrophilAbs'
            ]
          },
          {
            'label': 'Band Neutrophil',
            'ehr_list_index': '44',
            'items': [
              'cellCntBandCells'
            ]
          },
          {
            'label': 'Absolute',
            'ehr_list_index': '45',
            'items': [
              'cellCntBandCellsAbs'
            ]
          },
          {
            'label': 'Lymphocyte',
            'ehr_list_index': '46',
            'items': [
              'cellCntLymph'
            ]
          },
          {
            'label': 'Absolute',
            'ehr_list_index': '47',
            'items': [
              'cellCntLymphAbs'
            ]
          },
          {
            'label': 'Monocyte',
            'ehr_list_index': '48',
            'items': [
              'cellCntMono'
            ]
          },
          {
            'label': 'Absolute',
            'ehr_list_index': '49',
            'items': [
              'cellCntMonoAbs'
            ]
          },
          {
            'label': 'Eosinophil',
            'ehr_list_index': '50',
            'items': [
              'cellCntEosin'
            ]
          },
          {
            'label': 'Absolute',
            'ehr_list_index': '51',
            'items': [
              'cellCntEosinAbs'
            ]
          },
          {
            'label': 'Basophil',
            'ehr_list_index': '52',
            'items': [
              'cellCntBaso'
            ]
          },
          {
            'label': 'Absolute',
            'ehr_list_index': '53',
            'items': [
              'cellCntBasoAbs'
            ]
          },
          {
            'label': 'Metamyelocyte',
            'ehr_list_index': '54',
            'items': [
              'cellCntMeta'
            ]
          },
          {
            'label': 'Absolute',
            'ehr_list_index': '55',
            'items': [
              'cellCntMetaAbs'
            ]
          },
          {
            'label': 'Myelocyte',
            'ehr_list_index': '56',
            'items': [
              'cellCntMyelo'
            ]
          },
          {
            'label': 'Absolute',
            'ehr_list_index': '57',
            'items': [
              'cellCntMyeloAbs'
            ]
          },
          {
            'label': 'Promyelocyte',
            'ehr_list_index': '58',
            'items': [
              'cellCntPromyelo'
            ]
          },
          {
            'label': 'Absolute',
            'ehr_list_index': '59',
            'items': [
              'cellCntPromyeloAbs'
            ]
          },
          {
            'label': 'Blast',
            'ehr_list_index': '60',
            'items': [
              'cellCntBlast'
            ]
          },
          {
            'label': 'Absolute',
            'ehr_list_index': '61',
            'items': [
              'cellCntBlastAbs'
            ]
          },
          {
            'label': 'Reactive Lymphocyte',
            'ehr_list_index': '62',
            'items': [
              'cellCntReactiveLymphs'
            ]
          },
          {
            'label': 'Absolute',
            'ehr_list_index': '63',
            'items': [
              'cellCntReactiveLymphsAbs'
            ]
          },
          {
            'label': 'Other',
            'ehr_list_index': '64',
            'items': [
              'cellCntOther'
            ]
          },
          {
            'label': 'Absolute',
            'ehr_list_index': '65',
            'items': [
              'cellCntOtherAbs'
            ]
          },
          {
            'label': 'Specify',
            'ehr_list_index': '66',
            'items': [
              'cellCntOtherSpecify'
            ]
          },
          {
            'label': 'Total',
            'ehr_list_index': '67',
            'items': [
              'cellCntTotal'
            ]
          },
          {
            'label': 'Abs Total',
            'ehr_list_index': '68',
            'items': [
              'cellCntAbsTotal'
            ]
          },
          {
            'ehr_list_index': '69',
            'items': [
              'cellCntNRBCs'
            ]
          },
          {
            'ehr_list_index': '70',
            'items': [
              'cellCntComment'
            ]
          },
          {
            'ehr_list_index': '71',
            'items': [
              'wbcmNormalMorphology'
            ]
          },
          {
            'ehr_list_index': '72',
            'items': [
              'wbcmAbnormalTypeMorphology'
            ]
          },
          {
            'ehr_list_index': '73',
            'items': [
              'wbcmToxicTypeMorphology'
            ]
          },
          {
            'ehr_list_index': '74',
            'items': [
              'rcmNormal'
            ]
          },
          {
            'ehr_list_index': '75',
            'items': [
              'rcmConsistent'
            ]
          },
          {
            'ehr_list_index': '76',
            'items': [
              'rcmMcvMchc'
            ]
          },
          {
            'ehr_list_index': '77',
            'items': [
              'rcmAnisocytosis'
            ]
          },
          {
            'ehr_list_index': '78',
            'items': [
              'rcmPolychromasia'
            ]
          },
          {
            'ehr_list_index': '79',
            'items': [
              'rcmAcanthocytes'
            ]
          },
          {
            'ehr_list_index': '80',
            'items': [
              'rcmAcanthocytesGrading'
            ]
          },
          {
            'ehr_list_index': '81',
            'items': [
              'rcmCodocytes'
            ]
          },
          {
            'ehr_list_index': '82',
            'items': [
              'rcmCodocytesGrading'
            ]
          },
          {
            'ehr_list_index': '83',
            'items': [
              'rcmDacryocytes'
            ]
          },
          {
            'ehr_list_index': '84',
            'items': [
              'rcmDacryocytesGrading'
            ]
          },
          {
            'ehr_list_index': '85',
            'items': [
              'rcmDrepanocytes'
            ]
          },
          {
            'ehr_list_index': '86',
            'items': [
              'rcmDrepanocytesGrading'
            ]
          },
          {
            'ehr_list_index': '87',
            'items': [
              'rcmEchinocytes'
            ]
          },
          {
            'ehr_list_index': '88',
            'items': [
              'rcmEchinocytesGrading'
            ]
          },
          {
            'ehr_list_index': '89',
            'items': [
              'rcmOvalocytes'
            ]
          },
          {
            'ehr_list_index': '90',
            'items': [
              'rcmOvalocytesGrading'
            ]
          },
          {
            'ehr_list_index': '91',
            'items': [
              'rcmMacroOvalocytes'
            ]
          },
          {
            'ehr_list_index': '92',
            'items': [
              'rcmMacroOvalocytesGrading'
            ]
          },
          {
            'ehr_list_index': '93',
            'items': [
              'rcmStomatocytes'
            ]
          },
          {
            'ehr_list_index': '94',
            'items': [
              'rcmStomatocytesGrading'
            ]
          },
          {
            'ehr_list_index': '95',
            'items': [
              'rcmSpherocytes'
            ]
          },
          {
            'ehr_list_index': '96',
            'items': [
              'rcmSpherocytesGrading'
            ]
          },
          {
            'ehr_list_index': '97',
            'items': [
              'rcmICC'
            ]
          },
          {
            'ehr_list_index': '98',
            'items': [
              'rcmICCGrading'
            ]
          },
          {
            'ehr_list_index': '99',
            'items': [
              'rcmICCSchistocytes'
            ]
          },
          {
            'ehr_list_index': '100',
            'items': [
              'rcmICCSchistocytesGrading'
            ]
          },
          {
            'ehr_list_index': '101',
            'items': [
              'rcmBasophilicStippling'
            ]
          },
          {
            'ehr_list_index': '102',
            'items': [
              'rcmHowellJollyBodies'
            ]
          },
          {
            'ehr_list_index': '103',
            'items': [
              'rcmPappenheimerBodies'
            ]
          },
          {
            'ehr_list_index': '104',
            'items': [
              'rcmMalariaType'
            ]
          },
          {
            'ehr_list_index': '105',
            'items': [
              'rbcComments'
            ]
          },
          {
            'ehr_list_index': '106',
            'items': [
              'referralToHema'
            ]
          },
          {
            'ehr_list_index': '107',
            'items': [
              'explain'
            ]
          }
        ],
        'form': {
          'elementKey': 'tablePbfReview',
          'label': 'PBF Review',
          'addButtonText': 'NONE',
          'formKey': 'tablePbfReview',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group165',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'tablePbfReview_name',
                'tablePbfReview_profession',
                'tablePbfReview_day',
                'tablePbfReview_time'
              ]
            },
            {
              'elementKey': 'ehr_group166',
              'label': 'CBC Analysis',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '2',
              'gChildren': [
                'bloodAnalysis'
              ]
            },
            {
              'elementKey': 'ehr_group167',
              'label': 'Actions',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '3',
              'gChildren': [
                'actionsRequired',
                'actionsTaken',
                'scanComments'
              ]
            },
            {
              'elementKey': 'ehr_group168',
              'label': 'WBC Estimate',
              'formCss': 'grid-left-to-right-4',
              'gIndex': '4',
              'gChildren': [
                'wbc-1',
                'wbc-2',
                'wbc-3',
                'wbc-4',
                'wbc-5',
                'wbc-6',
                'wbc-7',
                'wbc-8',
                'wbc-9',
                'wbc-10',
                'wbcFieldFactor',
                'wbcAverage',
                'wbcEstimate',
                'wbcAnalysis',
                'wbcLowRange',
                'wbcHighRange',
                'wbcComment',
                'wbcCorrectedWbc'
              ]
            },
            {
              'elementKey': 'ehr_group169',
              'label': 'PLT Estimate',
              'formCss': 'grid-left-to-right-4',
              'gIndex': '5',
              'gChildren': [
                'plt-1',
                'plt-2',
                'plt-3',
                'plt-4',
                'plt-5',
                'plt-6',
                'plt-7',
                'plt-8',
                'plt-9',
                'plt-10',
                'pltFieldFactor',
                'pltAverage',
                'pltEstimate',
                'pltAnalysis',
                'pltLowRange',
                'pltHighRange',
                'pltComment'
              ]
            },
            {
              'elementKey': 'ehr_group170',
              'label': 'PLT morphology',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '6',
              'gChildren': [
                'pltNormalMorphology',
                'pltMorphology'
              ]
            },
            {
              'elementKey': 'ehr_group171',
              'label': 'WBC Differential',
              'formCss': 'form-table-group wbc-differential-group',
              'gIndex': '7',
              'gChildren': [
                'formTableHeader172',
                'formTableHeader173',
                'formTableHeader174',
                'formTableText175',
                'cellCntSegNeutrophil',
                'cellCntSegNeutrophilAbs',
                'formTableText176',
                'cellCntBandCells',
                'cellCntBandCellsAbs',
                'formTableText177',
                'cellCntLymph',
                'cellCntLymphAbs',
                'formTableText178',
                'cellCntMono',
                'cellCntMonoAbs',
                'formTableText179',
                'cellCntEosin',
                'cellCntEosinAbs',
                'formTableText180',
                'cellCntBaso',
                'cellCntBasoAbs',
                'formTableText181',
                'cellCntMeta',
                'cellCntMetaAbs',
                'formTableText182',
                'cellCntMyelo',
                'cellCntMyeloAbs',
                'formTableText183',
                'cellCntPromyelo',
                'cellCntPromyeloAbs',
                'formTableText184',
                'cellCntBlast',
                'cellCntBlastAbs',
                'formTableText185',
                'cellCntReactiveLymphs',
                'cellCntReactiveLymphsAbs',
                'formTableText186',
                'cellCntOther',
                'cellCntOtherAbs',
                'cellCntOtherSpecify',
                'spacer187',
                'formTableText188',
                'cellCntTotal',
                'cellCntAbsTotal'
              ]
            },
            {
              'elementKey': 'ehr_group189',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '8',
              'gChildren': [
                'cellCntNRBCs',
                'cellCntComment'
              ]
            },
            {
              'elementKey': 'ehr_group190',
              'label': 'White Cell Morphology',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '9',
              'gChildren': [
                'wbcmNormalMorphology',
                'wbcmAbnormalTypeMorphology',
                'wbcmToxicTypeMorphology'
              ]
            },
            {
              'elementKey': 'ehr_group191',
              'label': 'Red Cell Morphology',
              'formCss': 'rcm-morphology-group',
              'gIndex': '10',
              'gChildren': [
                'rcmNormal',
                'rcmConsistent',
                'rcmMcvMchc',
                'rcmAnisocytosis',
                'rcmPolychromasia',
                'rcmAcanthocytes',
                'rcmAcanthocytesGrading',
                'rcmCodocytes',
                'rcmCodocytesGrading',
                'rcmDacryocytes',
                'rcmDacryocytesGrading',
                'rcmDrepanocytes',
                'rcmDrepanocytesGrading',
                'rcmEchinocytes',
                'rcmEchinocytesGrading',
                'rcmOvalocytes',
                'rcmOvalocytesGrading',
                'rcmMacroOvalocytes',
                'rcmMacroOvalocytesGrading',
                'rcmStomatocytes',
                'rcmStomatocytesGrading',
                'rcmSpherocytes',
                'rcmSpherocytesGrading',
                'rcmICC',
                'rcmICCGrading',
                'rcmICCSchistocytes',
                'rcmICCSchistocytesGrading'
              ]
            },
            {
              'elementKey': 'ehr_group192',
              'label': 'RBC Inclusions',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '11',
              'gChildren': [
                'rcmBasophilicStippling',
                'rcmHowellJollyBodies',
                'rcmPappenheimerBodies',
                'rcmMalariaType'
              ]
            },
            {
              'elementKey': 'ehr_group193',
              'label': 'Internal',
              'formCss': 'section-divider grid-left-to-right-1',
              'gIndex': '12',
              'gChildren': [
                'rbcComments'
              ]
            },
            {
              'elementKey': 'ehr_group194',
              'label': 'Referral',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '13',
              'gChildren': [
                'referralToHema',
                'explain'
              ]
            }
          ],
          'ehr_data': {
            'tablePbfReview_name': '',
            'tablePbfReview_profession': '',
            'tablePbfReview_day': '',
            'tablePbfReview_time': '',
            'bloodAnalysis': '',
            'actionsRequired': '',
            'actionsTaken': '',
            'scanComments': '',
            'wbc-1': '',
            'wbc-2': '',
            'wbc-3': '',
            'wbc-4': '',
            'wbc-5': '',
            'wbc-6': '',
            'wbc-7': '',
            'wbc-8': '',
            'wbc-9': '',
            'wbc-10': '',
            'wbcFieldFactor': '1.8',
            'wbcAverage': '',
            'wbcEstimate': '',
            'wbcAnalysis': '',
            'wbcLowRange': '',
            'wbcHighRange': '',
            'wbcComment': '',
            'wbcCorrectedWbc': '',
            'plt-1': '',
            'plt-2': '',
            'plt-3': '',
            'plt-4': '',
            'plt-5': '',
            'plt-6': '',
            'plt-7': '',
            'plt-8': '',
            'plt-9': '',
            'plt-10': '',
            'pltFieldFactor': '11.1',
            'pltAverage': '',
            'pltEstimate': '',
            'pltAnalysis': '',
            'pltLowRange': '',
            'pltHighRange': '',
            'pltComment': '',
            'pltNormalMorphology': '',
            'pltMorphology': '',
            'cellCntSegNeutrophil': '',
            'cellCntSegNeutrophilAbs': '',
            'cellCntBandCells': '',
            'cellCntBandCellsAbs': '',
            'cellCntLymph': '',
            'cellCntLymphAbs': '',
            'cellCntMono': '',
            'cellCntMonoAbs': '',
            'cellCntEosin': '',
            'cellCntEosinAbs': '',
            'cellCntBaso': '',
            'cellCntBasoAbs': '',
            'cellCntMeta': '',
            'cellCntMetaAbs': '',
            'cellCntMyelo': '',
            'cellCntMyeloAbs': '',
            'cellCntPromyelo': '',
            'cellCntPromyeloAbs': '',
            'cellCntBlast': '',
            'cellCntBlastAbs': '',
            'cellCntReactiveLymphs': '',
            'cellCntReactiveLymphsAbs': '',
            'cellCntOther': '',
            'cellCntOtherAbs': '',
            'cellCntOtherSpecify': '',
            'cellCntTotal': '',
            'cellCntAbsTotal': '',
            'cellCntNRBCs': '',
            'cellCntComment': '',
            'wbcmNormalMorphology': '',
            'wbcmAbnormalTypeMorphology': '',
            'wbcmToxicTypeMorphology': '',
            'rcmNormal': '',
            'rcmConsistent': '',
            'rcmMcvMchc': '',
            'rcmAnisocytosis': '',
            'rcmPolychromasia': '',
            'rcmAcanthocytes': '',
            'rcmAcanthocytesGrading': '',
            'rcmCodocytes': '',
            'rcmCodocytesGrading': '',
            'rcmDacryocytes': '',
            'rcmDacryocytesGrading': '',
            'rcmDrepanocytes': '',
            'rcmDrepanocytesGrading': '',
            'rcmEchinocytes': '',
            'rcmEchinocytesGrading': '',
            'rcmOvalocytes': '',
            'rcmOvalocytesGrading': '',
            'rcmMacroOvalocytes': '',
            'rcmMacroOvalocytesGrading': '',
            'rcmStomatocytes': '',
            'rcmStomatocytesGrading': '',
            'rcmSpherocytes': '',
            'rcmSpherocytesGrading': '',
            'rcmICC': '',
            'rcmICCGrading': '',
            'rcmICCSchistocytes': '',
            'rcmICCSchistocytesGrading': '',
            'rcmBasophilicStippling': '',
            'rcmHowellJollyBodies': '',
            'rcmPappenheimerBodies': '',
            'rcmMalariaType': '',
            'rbcComments': '',
            'referralToHema': '',
            'explain': ''
          }
        },
        'tableChildren': [
          'tablePbfReview_id',
          'tablePbfReview_name',
          'tablePbfReview_profession',
          'tablePbfReview_day',
          'tablePbfReview_time',
          'bloodAnalysis',
          'actionsRequired',
          'actionsTaken',
          'scanComments',
          'wbc-1',
          'wbc-2',
          'wbc-3',
          'wbc-4',
          'wbc-5',
          'wbc-6',
          'wbc-7',
          'wbc-8',
          'wbc-9',
          'wbc-10',
          'wbcFieldFactor',
          'wbcAverage',
          'wbcEstimate',
          'wbcAnalysis',
          'wbcLowRange',
          'wbcHighRange',
          'wbcComment',
          'wbcCorrectedWbc',
          'plt-1',
          'plt-2',
          'plt-3',
          'plt-4',
          'plt-5',
          'plt-6',
          'plt-7',
          'plt-8',
          'plt-9',
          'plt-10',
          'pltFieldFactor',
          'pltAverage',
          'pltEstimate',
          'pltAnalysis',
          'pltLowRange',
          'pltHighRange',
          'pltComment',
          'pltNormalMorphology',
          'pltMorphology',
          'cellCntSegNeutrophil',
          'cellCntSegNeutrophilAbs',
          'cellCntBandCells',
          'cellCntBandCellsAbs',
          'cellCntLymph',
          'cellCntLymphAbs',
          'cellCntMono',
          'cellCntMonoAbs',
          'cellCntEosin',
          'cellCntEosinAbs',
          'cellCntBaso',
          'cellCntBasoAbs',
          'cellCntMeta',
          'cellCntMetaAbs',
          'cellCntMyelo',
          'cellCntMyeloAbs',
          'cellCntPromyelo',
          'cellCntPromyeloAbs',
          'cellCntBlast',
          'cellCntBlastAbs',
          'cellCntReactiveLymphs',
          'cellCntReactiveLymphsAbs',
          'cellCntOther',
          'cellCntOtherAbs',
          'cellCntOtherSpecify',
          'cellCntTotal',
          'cellCntAbsTotal',
          'cellCntNRBCs',
          'cellCntComment',
          'wbcmNormalMorphology',
          'wbcmAbnormalTypeMorphology',
          'wbcmToxicTypeMorphology',
          'rcmNormal',
          'rcmConsistent',
          'rcmMcvMchc',
          'rcmAnisocytosis',
          'rcmPolychromasia',
          'rcmAcanthocytes',
          'rcmAcanthocytesGrading',
          'rcmCodocytes',
          'rcmCodocytesGrading',
          'rcmDacryocytes',
          'rcmDacryocytesGrading',
          'rcmDrepanocytes',
          'rcmDrepanocytesGrading',
          'rcmEchinocytes',
          'rcmEchinocytesGrading',
          'rcmOvalocytes',
          'rcmOvalocytesGrading',
          'rcmMacroOvalocytes',
          'rcmMacroOvalocytesGrading',
          'rcmStomatocytes',
          'rcmStomatocytesGrading',
          'rcmSpherocytes',
          'rcmSpherocytesGrading',
          'rcmICC',
          'rcmICCGrading',
          'rcmICCSchistocytes',
          'rcmICCSchistocytesGrading',
          'rcmBasophilicStippling',
          'rcmHowellJollyBodies',
          'rcmPappenheimerBodies',
          'rcmMalariaType',
          'rbcComments',
          'referralToHema',
          'explain'
        ],
        'hasRecHeader': true
      }
    }
  },
  'dishargeplan': {
    'pageDataKey': 'dishargeplan',
    'pageTitle': 'Discharge plan',
    'pIndex': '44',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'table_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'dishargeplan.name'
      },
      {
        'elementKey': 'table_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'table_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'dishargeplan.profession'
      },
      {
        'elementKey': 'table_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'dishargeplan.day'
      },
      {
        'elementKey': 'table_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'dishargeplan.time'
      },
      {
        'elementKey': 'goal',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Goal',
        'tableColumn': '2',
        'tableLabel': 'Goal',
        'fqn': 'dishargeplan.goal'
      },
      {
        'elementKey': 'interventions',
        'formIndex': '1',
        'formCss': 'grid-span-3-columns',
        'inputType': 'textarea',
        'label': 'Intervention',
        'tableColumn': '3',
        'tableLabel': 'Intervention',
        'fqn': 'dishargeplan.interventions'
      },
      {
        'elementKey': 'evaluation',
        'formIndex': '1',
        'formCss': 'grid-span-3-columns',
        'inputType': 'textarea',
        'label': 'Evaluation of intervention',
        'tableColumn': '4',
        'tableLabel': 'Evaluation of intervention',
        'fqn': 'dishargeplan.evaluation'
      },
      {
        'elementKey': 'status',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Status',
        'options': [
          {
            'key': 'In progress',
            'text': 'In progress'
          },
          {
            'key': 'Complete',
            'text': 'Complete'
          }
        ],
        'tableColumn': '5',
        'tableLabel': 'Status',
        'fqn': 'dishargeplan.status'
      }
    ],
    'pageElements': {
      'table': {
        'elementKey': 'table',
        'pageElementIndex': '1',
        'pageKey': 'dishargeplan',
        'tableKey': 'table',
        'isTable': true,
        'label': 'Discharge plan',
        'addButtonText': 'Add a discharge planning note',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'table_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'table_name',
              'table_profession',
              'table_day',
              'table_time'
            ]
          },
          {
            'label': 'Goal',
            'ehr_list_index': '2',
            'items': [
              'goal'
            ]
          },
          {
            'label': 'Intervention',
            'ehr_list_index': '3',
            'items': [
              'interventions'
            ]
          },
          {
            'label': 'Evaluation of intervention',
            'ehr_list_index': '4',
            'items': [
              'evaluation'
            ]
          },
          {
            'label': 'Status',
            'ehr_list_index': '5',
            'items': [
              'status'
            ]
          }
        ],
        'form': {
          'elementKey': 'table',
          'label': 'Discharge plan',
          'addButtonText': 'Add a discharge planning note',
          'formKey': 'table',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group374',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'table_name',
                'table_profession',
                'table_day',
                'table_time'
              ]
            },
            {
              'elementKey': 'ehr_group375',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'goal',
                'interventions',
                'evaluation',
                'status'
              ]
            }
          ],
          'ehr_data': {
            'table_name': '',
            'table_profession': '',
            'table_day': '',
            'table_time': '',
            'goal': '',
            'interventions': '',
            'evaluation': '',
            'status': ''
          }
        },
        'tableChildren': [
          'table_id',
          'table_name',
          'table_profession',
          'table_day',
          'table_time',
          'goal',
          'interventions',
          'evaluation',
          'status'
        ],
        'hasRecHeader': true
      }
    }
  },
  'medLabChemistry': {
    'pageDataKey': 'medLabChemistry',
    'pageTitle': 'Med Lab Chemistry',
    'pIndex': '45',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'tableChem_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'medLabChemistry.name'
      },
      {
        'elementKey': 'tableChem_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'tableChem_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'medLabChemistry.profession'
      },
      {
        'elementKey': 'tableChem_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'medLabChemistry.day'
      },
      {
        'elementKey': 'tableChem_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'medLabChemistry.time'
      },
      {
        'elementKey': 'chemAccession',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Accession Id',
        'tableColumn': '2',
        'fqn': 'medLabChemistry.chemAccession'
      },
      {
        'elementKey': 'chemCollDay',
        'defaultValue': 'Today',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Collection day',
        'tableColumn': '3',
        'fqn': 'medLabChemistry.chemCollDay'
      },
      {
        'elementKey': 'chemCollTime',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Collection time',
        'tableColumn': '4',
        'fqn': 'medLabChemistry.chemCollTime'
      },
      {
        'elementKey': 'formTableHeader198',
        'formIndex': '1',
        'inputType': 'formTableHeader',
        'label': 'Analyte',
        'options': [
          {
            'key': 'Clear',
            'text': 'Clear'
          },
          {
            'key': 'Hazy',
            'text': 'Hazy'
          },
          {
            'key': 'Cloudy',
            'text': 'Cloudy'
          },
          {
            'key': 'Turbid',
            'text': 'Turbid'
          }
        ],
        'fqn': 'medLabChemistry.formTableHeader198'
      },
      {
        'elementKey': 'formTableHeader199',
        'formIndex': '1',
        'inputType': 'formTableHeader',
        'label': 'Patient Result',
        'options': [
          {
            'key': 'Colorless',
            'text': 'Colorless'
          },
          {
            'key': 'Pale yellow',
            'text': 'Pale yellow'
          },
          {
            'key': 'Yellow',
            'text': 'Yellow'
          },
          {
            'key': 'Amber',
            'text': 'Amber'
          },
          {
            'key': 'Orange',
            'text': 'Orange'
          },
          {
            'key': 'Red',
            'text': 'Red'
          },
          {
            'key': 'Pink',
            'text': 'Pink'
          },
          {
            'key': 'Brown',
            'text': 'Brown'
          },
          {
            'key': 'Green',
            'text': 'Green'
          }
        ],
        'fqn': 'medLabChemistry.formTableHeader199'
      },
      {
        'elementKey': 'formTableHeader200',
        'formIndex': '1',
        'inputType': 'formTableHeader',
        'label': 'Flag',
        'fqn': 'medLabChemistry.formTableHeader200'
      },
      {
        'elementKey': 'formTableHeader201',
        'formIndex': '1',
        'inputType': 'formTableHeader',
        'label': 'Reference Interval',
        'fqn': 'medLabChemistry.formTableHeader201'
      },
      {
        'elementKey': 'formTableText202',
        'formIndex': '1',
        'inputType': 'formTableText',
        'label': 'Sodium',
        'suffix': 'mmol/L',
        'fqn': 'medLabChemistry.formTableText202',
        'suffixText': '<p>mmol/L</p>',
        'suffixHtml': 'mmol/L'
      },
      {
        'elementKey': 'chemSodium',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '5',
        'tableLabel': 'Sodium',
        'fqn': 'medLabChemistry.chemSodium'
      },
      {
        'elementKey': 'chemSodiumFlag',
        'formIndex': '1',
        'formCss': 'chem-results-lhclch',
        'inputType': 'radioset',
        'options': [
          {
            'key': 'L',
            'text': 'L'
          },
          {
            'key': 'H',
            'text': 'H'
          },
          {
            'key': 'CL',
            'text': 'CL'
          },
          {
            'key': 'CH',
            'text': 'CH'
          }
        ],
        'tableColumn': '6',
        'tableLabel': 'Flag',
        'fqn': 'medLabChemistry.chemSodiumFlag'
      },
      {
        'elementKey': 'formTableText203',
        'formIndex': '1',
        'inputType': 'formTableText',
        'label': '135 – 145 mmol/L',
        'fqn': 'medLabChemistry.formTableText203'
      },
      {
        'elementKey': 'formTableText204',
        'formIndex': '1',
        'inputType': 'formTableText',
        'label': 'Potassium',
        'fqn': 'medLabChemistry.formTableText204'
      },
      {
        'elementKey': 'chemPotassium',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '1',
        'tableLabel': 'Potassium',
        'fqn': 'medLabChemistry.chemPotassium'
      },
      {
        'elementKey': 'chemPotassiumFlag',
        'formIndex': '1',
        'formCss': 'chem-results-lhclch',
        'inputType': 'radioset',
        'options': [
          {
            'key': 'L',
            'text': 'L'
          },
          {
            'key': 'H',
            'text': 'H'
          },
          {
            'key': 'CL',
            'text': 'CL'
          },
          {
            'key': 'CH',
            'text': 'CH'
          }
        ],
        'tableColumn': '2',
        'tableLabel': 'Flag',
        'fqn': 'medLabChemistry.chemPotassiumFlag'
      },
      {
        'elementKey': 'formTableText205',
        'formIndex': '1',
        'inputType': 'formTableText',
        'fqn': 'medLabChemistry.formTableText205'
      },
      {
        'elementKey': 'formTableText206',
        'formIndex': '1',
        'inputType': 'formTableText',
        'label': 'Chloride',
        'fqn': 'medLabChemistry.formTableText206'
      },
      {
        'elementKey': 'chemChloride',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '7',
        'tableLabel': 'Chloride',
        'fqn': 'medLabChemistry.chemChloride'
      },
      {
        'elementKey': 'chemChlorideFlag',
        'formIndex': '1',
        'formCss': 'chem-results-lhclch',
        'inputType': 'radioset',
        'options': [
          {
            'key': 'L',
            'text': 'L'
          },
          {
            'key': 'H',
            'text': 'H'
          },
          {
            'key': 'CL',
            'text': 'CL'
          },
          {
            'key': 'CH',
            'text': 'CH'
          }
        ],
        'tableColumn': '8',
        'tableLabel': 'Flag',
        'fqn': 'medLabChemistry.chemChlorideFlag'
      },
      {
        'elementKey': 'formTableText207',
        'formIndex': '1',
        'inputType': 'formTableText',
        'fqn': 'medLabChemistry.formTableText207'
      },
      {
        'elementKey': 'formTableText208',
        'formIndex': '1',
        'inputType': 'formTableText',
        'label': 'tCO2',
        'fqn': 'medLabChemistry.formTableText208'
      },
      {
        'elementKey': 'chemtCO2',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '3',
        'tableLabel': 'tCO2',
        'fqn': 'medLabChemistry.chemtCO2'
      },
      {
        'elementKey': 'chemtCO2Flag',
        'formIndex': '1',
        'formCss': 'chem-results-lhclch',
        'inputType': 'radioset',
        'options': [
          {
            'key': 'L',
            'text': 'L'
          },
          {
            'key': 'H',
            'text': 'H'
          },
          {
            'key': 'CL',
            'text': 'CL'
          },
          {
            'key': 'CH',
            'text': 'CH'
          }
        ],
        'tableColumn': '4',
        'tableLabel': 'Flag',
        'fqn': 'medLabChemistry.chemtCO2Flag'
      },
      {
        'elementKey': 'formTableText209',
        'formIndex': '1',
        'inputType': 'formTableText',
        'fqn': 'medLabChemistry.formTableText209'
      },
      {
        'elementKey': 'formTableText210',
        'formIndex': '1',
        'inputType': 'formTableText',
        'label': 'Anion Gap',
        'fqn': 'medLabChemistry.formTableText210'
      },
      {
        'elementKey': 'chemAnionGap',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '5',
        'tableLabel': 'Anion Gap',
        'fqn': 'medLabChemistry.chemAnionGap'
      },
      {
        'elementKey': 'chemAnionGapFlag',
        'formIndex': '1',
        'formCss': 'chem-results-lhclch',
        'inputType': 'radioset',
        'options': [
          {
            'key': 'L',
            'text': 'L'
          },
          {
            'key': 'H',
            'text': 'H'
          },
          {
            'key': 'CL',
            'text': 'CL'
          },
          {
            'key': 'CH',
            'text': 'CH'
          }
        ],
        'tableColumn': '6',
        'tableLabel': 'Flag',
        'fqn': 'medLabChemistry.chemAnionGapFlag'
      },
      {
        'elementKey': 'formTableText211',
        'formIndex': '1',
        'inputType': 'formTableText',
        'fqn': 'medLabChemistry.formTableText211'
      },
      {
        'elementKey': 'formTableText212',
        'formIndex': '1',
        'inputType': 'formTableText',
        'label': 'Osmality, Measured',
        'fqn': 'medLabChemistry.formTableText212'
      },
      {
        'elementKey': 'chemOsmalityMeasured',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '7',
        'tableLabel': 'Osmality, Measured',
        'fqn': 'medLabChemistry.chemOsmalityMeasured'
      },
      {
        'elementKey': 'chemOsmalityMeasuredFlag',
        'formIndex': '1',
        'formCss': 'chem-results-lhclch',
        'inputType': 'radioset',
        'options': [
          {
            'key': 'L',
            'text': 'L'
          },
          {
            'key': 'H',
            'text': 'H'
          },
          {
            'key': 'CL',
            'text': 'CL'
          },
          {
            'key': 'CH',
            'text': 'CH'
          }
        ],
        'tableColumn': '8',
        'tableLabel': 'Flag',
        'fqn': 'medLabChemistry.chemOsmalityMeasuredFlag'
      },
      {
        'elementKey': 'formTableText213',
        'formIndex': '1',
        'inputType': 'formTableText',
        'fqn': 'medLabChemistry.formTableText213'
      },
      {
        'elementKey': 'formTableText214',
        'formIndex': '1',
        'inputType': 'formTableText',
        'label': 'Osmality, Calculated',
        'fqn': 'medLabChemistry.formTableText214'
      },
      {
        'elementKey': 'chemOsmalityCalculated',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '9',
        'tableLabel': 'Osmality, Calculated',
        'fqn': 'medLabChemistry.chemOsmalityCalculated'
      },
      {
        'elementKey': 'chemOsmalityCalculatedFlag',
        'formIndex': '1',
        'formCss': 'chem-results-lhclch',
        'inputType': 'radioset',
        'options': [
          {
            'key': 'L',
            'text': 'L'
          },
          {
            'key': 'H',
            'text': 'H'
          },
          {
            'key': 'CL',
            'text': 'CL'
          },
          {
            'key': 'CH',
            'text': 'CH'
          }
        ],
        'tableColumn': '10',
        'tableLabel': 'Flag',
        'fqn': 'medLabChemistry.chemOsmalityCalculatedFlag'
      },
      {
        'elementKey': 'formTableText215',
        'formIndex': '1',
        'inputType': 'formTableText',
        'fqn': 'medLabChemistry.formTableText215'
      },
      {
        'elementKey': 'formTableText216',
        'formIndex': '1',
        'inputType': 'formTableText',
        'label': 'Osmolar Gap',
        'fqn': 'medLabChemistry.formTableText216'
      },
      {
        'elementKey': 'chemOsmolarGap',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '11',
        'tableLabel': 'Osmolar Gap',
        'fqn': 'medLabChemistry.chemOsmolarGap'
      },
      {
        'elementKey': 'chemOsmolarGapFlag',
        'formIndex': '1',
        'formCss': 'chem-results-lhclch',
        'inputType': 'radioset',
        'options': [
          {
            'key': 'L',
            'text': 'L'
          },
          {
            'key': 'H',
            'text': 'H'
          },
          {
            'key': 'CL',
            'text': 'CL'
          },
          {
            'key': 'CH',
            'text': 'CH'
          }
        ],
        'tableColumn': '12',
        'tableLabel': 'Flag',
        'fqn': 'medLabChemistry.chemOsmolarGapFlag'
      },
      {
        'elementKey': 'formTableText217',
        'formIndex': '1',
        'inputType': 'formTableText',
        'fqn': 'medLabChemistry.formTableText217'
      },
      {
        'elementKey': 'formTableText218',
        'formIndex': '1',
        'inputType': 'formTableText',
        'label': 'Glugose (Fasting Random)',
        'fqn': 'medLabChemistry.formTableText218'
      },
      {
        'elementKey': 'chemGlugoseFastingRandom',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '13',
        'tableLabel': 'Glugose (Fasting Random)',
        'fqn': 'medLabChemistry.chemGlugoseFastingRandom'
      },
      {
        'elementKey': 'chemGlugoseFastingRandomFlag',
        'formIndex': '1',
        'formCss': 'chem-results-lhclch',
        'inputType': 'radioset',
        'options': [
          {
            'key': 'L',
            'text': 'L'
          },
          {
            'key': 'H',
            'text': 'H'
          },
          {
            'key': 'CL',
            'text': 'CL'
          },
          {
            'key': 'CH',
            'text': 'CH'
          }
        ],
        'tableColumn': '14',
        'tableLabel': 'Flag',
        'fqn': 'medLabChemistry.chemGlugoseFastingRandomFlag'
      },
      {
        'elementKey': 'formTableText219',
        'formIndex': '1',
        'inputType': 'formTableText',
        'fqn': 'medLabChemistry.formTableText219'
      },
      {
        'elementKey': 'formTableText220',
        'formIndex': '1',
        'inputType': 'formTableText',
        'label': 'Creatinine',
        'fqn': 'medLabChemistry.formTableText220'
      },
      {
        'elementKey': 'chemCreatinine',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '15',
        'tableLabel': 'Creatinine',
        'fqn': 'medLabChemistry.chemCreatinine'
      },
      {
        'elementKey': 'chemCreatinineFlag',
        'formIndex': '1',
        'formCss': 'chem-results-lhclch',
        'inputType': 'radioset',
        'options': [
          {
            'key': 'L',
            'text': 'L'
          },
          {
            'key': 'H',
            'text': 'H'
          },
          {
            'key': 'CL',
            'text': 'CL'
          },
          {
            'key': 'CH',
            'text': 'CH'
          }
        ],
        'tableColumn': '16',
        'tableLabel': 'Flag',
        'fqn': 'medLabChemistry.chemCreatinineFlag'
      },
      {
        'elementKey': 'formTableText221',
        'formIndex': '1',
        'inputType': 'formTableText',
        'fqn': 'medLabChemistry.formTableText221'
      },
      {
        'elementKey': 'formTableText222',
        'formIndex': '1',
        'inputType': 'formTableText',
        'label': 'Urea (BUN)',
        'fqn': 'medLabChemistry.formTableText222'
      },
      {
        'elementKey': 'chemUreaBun',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '17',
        'tableLabel': 'Urea (BUN)',
        'fqn': 'medLabChemistry.chemUreaBun'
      },
      {
        'elementKey': 'chemUreaBunFlag',
        'formIndex': '1',
        'formCss': 'chem-results-lhclch',
        'inputType': 'radioset',
        'options': [
          {
            'key': 'L',
            'text': 'L'
          },
          {
            'key': 'H',
            'text': 'H'
          },
          {
            'key': 'CL',
            'text': 'CL'
          },
          {
            'key': 'CH',
            'text': 'CH'
          }
        ],
        'tableColumn': '18',
        'tableLabel': 'Flag',
        'fqn': 'medLabChemistry.chemUreaBunFlag'
      },
      {
        'elementKey': 'formTableText223',
        'formIndex': '1',
        'inputType': 'formTableText',
        'fqn': 'medLabChemistry.formTableText223'
      },
      {
        'elementKey': 'formTableText224',
        'formIndex': '1',
        'inputType': 'formTableText',
        'label': 'Calcium',
        'fqn': 'medLabChemistry.formTableText224'
      },
      {
        'elementKey': 'chemCalcium',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '19',
        'tableLabel': 'Calcium',
        'fqn': 'medLabChemistry.chemCalcium'
      },
      {
        'elementKey': 'chemCalciumFlag',
        'formIndex': '1',
        'formCss': 'chem-results-lhclch',
        'inputType': 'radioset',
        'options': [
          {
            'key': 'L',
            'text': 'L'
          },
          {
            'key': 'H',
            'text': 'H'
          },
          {
            'key': 'CL',
            'text': 'CL'
          },
          {
            'key': 'CH',
            'text': 'CH'
          }
        ],
        'tableColumn': '20',
        'tableLabel': 'Flag',
        'fqn': 'medLabChemistry.chemCalciumFlag'
      },
      {
        'elementKey': 'formTableText225',
        'formIndex': '1',
        'inputType': 'formTableText',
        'fqn': 'medLabChemistry.formTableText225'
      },
      {
        'elementKey': 'formTableText226',
        'formIndex': '1',
        'inputType': 'formTableText',
        'label': 'Magnesium',
        'fqn': 'medLabChemistry.formTableText226'
      },
      {
        'elementKey': 'chemMagnesium',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '21',
        'tableLabel': 'Magnesium',
        'fqn': 'medLabChemistry.chemMagnesium'
      },
      {
        'elementKey': 'chemMagnesiumFlag',
        'formIndex': '1',
        'formCss': 'chem-results-lhclch',
        'inputType': 'radioset',
        'options': [
          {
            'key': 'L',
            'text': 'L'
          },
          {
            'key': 'H',
            'text': 'H'
          },
          {
            'key': 'CL',
            'text': 'CL'
          },
          {
            'key': 'CH',
            'text': 'CH'
          }
        ],
        'tableColumn': '22',
        'tableLabel': 'Flag',
        'fqn': 'medLabChemistry.chemMagnesiumFlag'
      },
      {
        'elementKey': 'formTableText227',
        'formIndex': '1',
        'inputType': 'formTableText',
        'fqn': 'medLabChemistry.formTableText227'
      },
      {
        'elementKey': 'formTableText228',
        'formIndex': '1',
        'inputType': 'formTableText',
        'label': 'Phosphorus',
        'fqn': 'medLabChemistry.formTableText228'
      },
      {
        'elementKey': 'chemPhosphorus',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '23',
        'tableLabel': 'Phosphorus',
        'fqn': 'medLabChemistry.chemPhosphorus'
      },
      {
        'elementKey': 'chemPhosphorusFlag',
        'formIndex': '1',
        'formCss': 'chem-results-lhclch',
        'inputType': 'radioset',
        'options': [
          {
            'key': 'L',
            'text': 'L'
          },
          {
            'key': 'H',
            'text': 'H'
          },
          {
            'key': 'CL',
            'text': 'CL'
          },
          {
            'key': 'CH',
            'text': 'CH'
          }
        ],
        'tableColumn': '24',
        'tableLabel': 'Flag',
        'fqn': 'medLabChemistry.chemPhosphorusFlag'
      },
      {
        'elementKey': 'formTableText229',
        'formIndex': '1',
        'inputType': 'formTableText',
        'fqn': 'medLabChemistry.formTableText229'
      },
      {
        'elementKey': 'formTableText230',
        'formIndex': '1',
        'inputType': 'formTableText',
        'label': 'Total Protein',
        'fqn': 'medLabChemistry.formTableText230'
      },
      {
        'elementKey': 'chemTotalProtein',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '25',
        'tableLabel': 'Total Protein',
        'fqn': 'medLabChemistry.chemTotalProtein'
      },
      {
        'elementKey': 'chemTotalProteinFlag',
        'formIndex': '1',
        'formCss': 'chem-results-lhclch',
        'inputType': 'radioset',
        'options': [
          {
            'key': 'L',
            'text': 'L'
          },
          {
            'key': 'H',
            'text': 'H'
          },
          {
            'key': 'CL',
            'text': 'CL'
          },
          {
            'key': 'CH',
            'text': 'CH'
          }
        ],
        'tableColumn': '26',
        'tableLabel': 'Flag',
        'fqn': 'medLabChemistry.chemTotalProteinFlag'
      },
      {
        'elementKey': 'formTableText231',
        'formIndex': '1',
        'inputType': 'formTableText',
        'fqn': 'medLabChemistry.formTableText231'
      },
      {
        'elementKey': 'formTableText232',
        'formIndex': '1',
        'inputType': 'formTableText',
        'label': 'Albumin',
        'fqn': 'medLabChemistry.formTableText232'
      },
      {
        'elementKey': 'chemAlbumin',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '27',
        'tableLabel': 'Albumin',
        'fqn': 'medLabChemistry.chemAlbumin'
      },
      {
        'elementKey': 'chemAlbuminFlag',
        'formIndex': '1',
        'formCss': 'chem-results-lhclch',
        'inputType': 'radioset',
        'options': [
          {
            'key': 'L',
            'text': 'L'
          },
          {
            'key': 'H',
            'text': 'H'
          },
          {
            'key': 'CL',
            'text': 'CL'
          },
          {
            'key': 'CH',
            'text': 'CH'
          }
        ],
        'tableColumn': '28',
        'fqn': 'medLabChemistry.chemAlbuminFlag'
      },
      {
        'elementKey': 'formTableText233',
        'formIndex': '1',
        'inputType': 'formTableText',
        'fqn': 'medLabChemistry.formTableText233'
      },
      {
        'elementKey': 'chemOpt1Analyte',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '29',
        'tableLabel': 'Analyte',
        'fqn': 'medLabChemistry.chemOpt1Analyte'
      },
      {
        'elementKey': 'chemOpt1Result',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '30',
        'tableLabel': 'Result',
        'fqn': 'medLabChemistry.chemOpt1Result'
      },
      {
        'elementKey': 'chemOpt1Type',
        'formIndex': '1',
        'formCss': 'chem-results-lhclch',
        'inputType': 'radioset',
        'options': [
          {
            'key': 'L',
            'text': 'L'
          },
          {
            'key': 'H',
            'text': 'H'
          },
          {
            'key': 'CL',
            'text': 'CL'
          },
          {
            'key': 'CH',
            'text': 'CH'
          }
        ],
        'tableColumn': '31',
        'tableLabel': 'Type',
        'fqn': 'medLabChemistry.chemOpt1Type'
      },
      {
        'elementKey': 'chemOpt1RI',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '32',
        'tableLabel': 'RI',
        'fqn': 'medLabChemistry.chemOpt1RI'
      },
      {
        'elementKey': 'chemOpt2Analyte',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '32',
        'tableLabel': 'Analyte',
        'fqn': 'medLabChemistry.chemOpt2Analyte'
      },
      {
        'elementKey': 'chemOpt2Result',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '33',
        'tableLabel': 'Result',
        'fqn': 'medLabChemistry.chemOpt2Result'
      },
      {
        'elementKey': 'chemOpt2Type',
        'formIndex': '1',
        'formCss': 'chem-results-lhclch',
        'inputType': 'radioset',
        'options': [
          {
            'key': 'L',
            'text': 'L'
          },
          {
            'key': 'H',
            'text': 'H'
          },
          {
            'key': 'CL',
            'text': 'CL'
          },
          {
            'key': 'CH',
            'text': 'CH'
          }
        ],
        'tableColumn': '34',
        'tableLabel': 'Type',
        'fqn': 'medLabChemistry.chemOpt2Type'
      },
      {
        'elementKey': 'chemOpt2RI',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '35',
        'tableLabel': 'RI',
        'fqn': 'medLabChemistry.chemOpt2RI'
      },
      {
        'elementKey': 'chemOpt3Analyte',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '35',
        'tableLabel': 'Analyte',
        'fqn': 'medLabChemistry.chemOpt3Analyte'
      },
      {
        'elementKey': 'chemOpt3Result',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '36',
        'tableLabel': 'Result',
        'fqn': 'medLabChemistry.chemOpt3Result'
      },
      {
        'elementKey': 'chemOpt3Type',
        'formIndex': '1',
        'formCss': 'chem-results-lhclch',
        'inputType': 'radioset',
        'options': [
          {
            'key': 'L',
            'text': 'L'
          },
          {
            'key': 'H',
            'text': 'H'
          },
          {
            'key': 'CL',
            'text': 'CL'
          },
          {
            'key': 'CH',
            'text': 'CH'
          }
        ],
        'tableColumn': '37',
        'tableLabel': 'Type',
        'fqn': 'medLabChemistry.chemOpt3Type'
      },
      {
        'elementKey': 'chemOpt3RI',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '38',
        'tableLabel': 'RI',
        'fqn': 'medLabChemistry.chemOpt3RI'
      },
      {
        'elementKey': 'chemOpt4Analyte',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '38',
        'tableLabel': 'Analyte',
        'fqn': 'medLabChemistry.chemOpt4Analyte'
      },
      {
        'elementKey': 'chemOpt4Result',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '39',
        'tableLabel': 'Result',
        'fqn': 'medLabChemistry.chemOpt4Result'
      },
      {
        'elementKey': 'chemOpt4Type',
        'formIndex': '1',
        'formCss': 'chem-results-lhclch',
        'inputType': 'radioset',
        'options': [
          {
            'key': 'L',
            'text': 'L'
          },
          {
            'key': 'H',
            'text': 'H'
          },
          {
            'key': 'CL',
            'text': 'CL'
          },
          {
            'key': 'CH',
            'text': 'CH'
          }
        ],
        'tableColumn': '40',
        'tableLabel': 'Type',
        'fqn': 'medLabChemistry.chemOpt4Type'
      },
      {
        'elementKey': 'chemOpt4RI',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '41',
        'tableLabel': 'RI',
        'fqn': 'medLabChemistry.chemOpt4RI'
      },
      {
        'elementKey': 'chemOpt5Analyte',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '41',
        'tableLabel': 'Analyte',
        'fqn': 'medLabChemistry.chemOpt5Analyte'
      },
      {
        'elementKey': 'chemOpt5Result',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '42',
        'tableLabel': 'Result',
        'fqn': 'medLabChemistry.chemOpt5Result'
      },
      {
        'elementKey': 'chemOpt5Type',
        'formIndex': '1',
        'formCss': 'chem-results-lhclch',
        'inputType': 'radioset',
        'options': [
          {
            'key': 'L',
            'text': 'L'
          },
          {
            'key': 'H',
            'text': 'H'
          },
          {
            'key': 'CL',
            'text': 'CL'
          },
          {
            'key': 'CH',
            'text': 'CH'
          }
        ],
        'tableColumn': '43',
        'tableLabel': 'Type',
        'fqn': 'medLabChemistry.chemOpt5Type'
      },
      {
        'elementKey': 'chemOpt5RI',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '44',
        'tableLabel': 'RI',
        'fqn': 'medLabChemistry.chemOpt5RI'
      },
      {
        'elementKey': 'chemOpt6Analyte',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '44',
        'tableLabel': 'Analyte',
        'fqn': 'medLabChemistry.chemOpt6Analyte'
      },
      {
        'elementKey': 'chemOpt6Result',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '45',
        'tableLabel': 'Result',
        'fqn': 'medLabChemistry.chemOpt6Result'
      },
      {
        'elementKey': 'chemOpt6Type',
        'formIndex': '1',
        'formCss': 'chem-results-lhclch',
        'inputType': 'radioset',
        'options': [
          {
            'key': 'L',
            'text': 'L'
          },
          {
            'key': 'H',
            'text': 'H'
          },
          {
            'key': 'CL',
            'text': 'CL'
          },
          {
            'key': 'CH',
            'text': 'CH'
          }
        ],
        'tableColumn': '46',
        'tableLabel': 'Type',
        'fqn': 'medLabChemistry.chemOpt6Type'
      },
      {
        'elementKey': 'chemOpt6RI',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '47',
        'tableLabel': 'RI',
        'fqn': 'medLabChemistry.chemOpt6RI'
      },
      {
        'elementKey': 'chemOpt7Analyte',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '47',
        'tableLabel': 'Analyte',
        'fqn': 'medLabChemistry.chemOpt7Analyte'
      },
      {
        'elementKey': 'chemOpt7Result',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '48',
        'tableLabel': 'Result',
        'fqn': 'medLabChemistry.chemOpt7Result'
      },
      {
        'elementKey': 'chemOpt7Type',
        'formIndex': '1',
        'formCss': 'chem-results-lhclch',
        'inputType': 'radioset',
        'options': [
          {
            'key': 'L',
            'text': 'L'
          },
          {
            'key': 'H',
            'text': 'H'
          },
          {
            'key': 'CL',
            'text': 'CL'
          },
          {
            'key': 'CH',
            'text': 'CH'
          }
        ],
        'tableColumn': '49',
        'tableLabel': 'Type',
        'fqn': 'medLabChemistry.chemOpt7Type'
      },
      {
        'elementKey': 'chemOpt7RI',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '50',
        'tableLabel': 'RI',
        'fqn': 'medLabChemistry.chemOpt7RI'
      },
      {
        'elementKey': 'chemOpt8Analyte',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '50',
        'tableLabel': 'Analyte',
        'fqn': 'medLabChemistry.chemOpt8Analyte'
      },
      {
        'elementKey': 'chemOpt8Result',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '51',
        'tableLabel': 'Result',
        'fqn': 'medLabChemistry.chemOpt8Result'
      },
      {
        'elementKey': 'chemOpt8Type',
        'formIndex': '1',
        'formCss': 'chem-results-lhclch',
        'inputType': 'radioset',
        'options': [
          {
            'key': 'L',
            'text': 'L'
          },
          {
            'key': 'H',
            'text': 'H'
          },
          {
            'key': 'CL',
            'text': 'CL'
          },
          {
            'key': 'CH',
            'text': 'CH'
          }
        ],
        'tableColumn': '52',
        'tableLabel': 'Type',
        'fqn': 'medLabChemistry.chemOpt8Type'
      },
      {
        'elementKey': 'chemOpt8RI',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '53',
        'tableLabel': 'RI',
        'fqn': 'medLabChemistry.chemOpt8RI'
      },
      {
        'elementKey': 'urnInternal',
        'formIndex': '1',
        'inputType': 'textarea',
        'label': 'Technologists comments',
        'tableColumn': '54',
        'fqn': 'medLabChemistry.urnInternal'
      },
      {
        'elementKey': 'chemSpecimumType',
        'formIndex': '1',
        'inputType': 'checkset',
        'label': 'Specimum type',
        'options': [
          {
            'key': 'serum',
            'text': 'Serum'
          },
          {
            'key': 'urinine',
            'text': 'Urinine'
          },
          {
            'key': 'wholeBlood',
            'text': 'Whole blood'
          }
        ],
        'tableColumn': '55',
        'fqn': 'medLabChemistry.chemSpecimumType'
      },
      {
        'elementKey': 'chemSerumAppearance',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Serum appearance',
        'tableColumn': '56',
        'fqn': 'medLabChemistry.chemSerumAppearance'
      },
      {
        'elementKey': 'form_label237',
        'formIndex': '1',
        'formCss': 'chem-qc-assay-into',
        'inputType': 'form_label',
        'label': 'Answer the following questions by selecting one of the options:',
        'fqn': 'medLabChemistry.form_label237'
      },
      {
        'elementKey': 'form_label238',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': '1. Are all QC* and calibrators (if applicable) within acceptable limits?-NL-*refer to Levey-Jennings Chart if available',
        'fqn': 'medLabChemistry.form_label238'
      },
      {
        'elementKey': 'chemQcAllAcceptable',
        'formIndex': '1',
        'inputType': 'radioset',
        'options': [
          {
            'key': 'y',
            'text': 'Yes'
          },
          {
            'key': 'n',
            'text': 'No'
          },
          {
            'key': 'na',
            'text': 'N/A'
          }
        ],
        'tableColumn': '57',
        'fqn': 'medLabChemistry.chemQcAllAcceptable'
      },
      {
        'elementKey': 'form_label239',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': '2.  If an assay was performed in duplicate* are all duplicates within acceptable limits?-NL-*repeats and dilutions are not considered duplicates-NL--NL-',
        'fqn': 'medLabChemistry.form_label239'
      },
      {
        'elementKey': 'chemQcAllDuplicatesAcceptable',
        'formIndex': '1',
        'inputType': 'radioset',
        'options': [
          {
            'key': 'y',
            'text': 'Yes'
          },
          {
            'key': 'n',
            'text': 'No'
          },
          {
            'key': 'na',
            'text': 'N/A'
          }
        ],
        'tableColumn': '58',
        'fqn': 'medLabChemistry.chemQcAllDuplicatesAcceptable'
      },
      {
        'elementKey': 'form_label240',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': '3. Are results plausible or physiologically possible based on post-analytical checks?',
        'fqn': 'medLabChemistry.form_label240'
      },
      {
        'elementKey': 'chemQcAllPlausible',
        'formIndex': '1',
        'inputType': 'radioset',
        'options': [
          {
            'key': 'y',
            'text': 'Yes'
          },
          {
            'key': 'n',
            'text': 'No'
          },
          {
            'key': 'na',
            'text': 'N/A'
          }
        ],
        'tableColumn': '59',
        'fqn': 'medLabChemistry.chemQcAllPlausible'
      },
      {
        'elementKey': 'form_label241',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'Can all patient results be reported?',
        'fqn': 'medLabChemistry.form_label241'
      },
      {
        'elementKey': 'chemQcAllCanBeReported',
        'formIndex': '1',
        'inputType': 'radioset',
        'options': [
          {
            'key': 'y',
            'text': 'Yes'
          },
          {
            'key': 'n',
            'text': 'No'
          },
          {
            'key': 'na',
            'text': 'N/A'
          }
        ],
        'tableColumn': '60',
        'fqn': 'medLabChemistry.chemQcAllCanBeReported'
      },
      {
        'elementKey': 'form_label242',
        'formIndex': '1',
        'formCss': 'grid-new-subsection grid-span-3-columns',
        'inputType': 'form_label',
        'label': 'If any questions in this section are answered NO or any results are PENDING, complete the following tables:',
        'fqn': 'medLabChemistry.form_label242'
      },
      {
        'elementKey': 'form_label243',
        'formIndex': '1',
        'formCss': 'grid-new-subsection grid-span-3-columns',
        'inputType': 'form_label',
        'label': 'Quality Control Troubleshooting Table (*SE=Systematic error, RE=Random error)',
        'fqn': 'medLabChemistry.form_label243'
      },
      {
        'elementKey': 'formTableHeader245',
        'formIndex': '1',
        'inputType': 'formTableHeader',
        'label': 'Analyte',
        'fqn': 'medLabChemistry.formTableHeader245'
      },
      {
        'elementKey': 'formTableHeader246',
        'formIndex': '1',
        'inputType': 'formTableHeader',
        'label': 'QC level',
        'fqn': 'medLabChemistry.formTableHeader246'
      },
      {
        'elementKey': 'formTableHeader247',
        'formIndex': '1',
        'inputType': 'formTableHeader',
        'label': 'QC rule failed',
        'fqn': 'medLabChemistry.formTableHeader247'
      },
      {
        'elementKey': 'formTableHeader248',
        'formIndex': '1',
        'inputType': 'formTableHeader',
        'label': 'SE or RE*',
        'fqn': 'medLabChemistry.formTableHeader248'
      },
      {
        'elementKey': 'formTableText249',
        'formIndex': '1',
        'inputType': 'formTableText',
        'label': 'Describe trouble shooting required',
        'fqn': 'medLabChemistry.formTableText249'
      },
      {
        'elementKey': 'chmQcAnalyte1',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '61',
        'tableLabel': 'Analyte',
        'fqn': 'medLabChemistry.chmQcAnalyte1'
      },
      {
        'elementKey': 'chmQcLevel1',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '62',
        'tableLabel': 'QC Level',
        'fqn': 'medLabChemistry.chmQcLevel1'
      },
      {
        'elementKey': 'chmQcRule1',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '63',
        'tableLabel': 'QC rule failed',
        'fqn': 'medLabChemistry.chmQcRule1'
      },
      {
        'elementKey': 'chmQcSeRe1',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '64',
        'tableLabel': 'SE or RE',
        'fqn': 'medLabChemistry.chmQcSeRe1'
      },
      {
        'elementKey': 'chmQcDescribe1',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '65',
        'tableLabel': 'Describe',
        'fqn': 'medLabChemistry.chmQcDescribe1'
      },
      {
        'elementKey': 'chmQcAnalyte2',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '66',
        'tableLabel': 'Analyte',
        'fqn': 'medLabChemistry.chmQcAnalyte2'
      },
      {
        'elementKey': 'chmQcLevel2',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '67',
        'tableLabel': 'QC Level',
        'fqn': 'medLabChemistry.chmQcLevel2'
      },
      {
        'elementKey': 'chmQcRule2',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '68',
        'tableLabel': 'QC rule failed',
        'fqn': 'medLabChemistry.chmQcRule2'
      },
      {
        'elementKey': 'chmQcSeRe2',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '69',
        'tableLabel': 'SE or RE',
        'fqn': 'medLabChemistry.chmQcSeRe2'
      },
      {
        'elementKey': 'chmQcDescribe2',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '70',
        'tableLabel': 'Describe',
        'fqn': 'medLabChemistry.chmQcDescribe2'
      },
      {
        'elementKey': 'chmQcAnalyte3',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '71',
        'tableLabel': 'Analyte',
        'fqn': 'medLabChemistry.chmQcAnalyte3'
      },
      {
        'elementKey': 'chmQcLevel3',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '72',
        'tableLabel': 'QC Level',
        'fqn': 'medLabChemistry.chmQcLevel3'
      },
      {
        'elementKey': 'chmQcRule3',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '73',
        'tableLabel': 'QC rule failed',
        'fqn': 'medLabChemistry.chmQcRule3'
      },
      {
        'elementKey': 'chmQcSeRe3',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '74',
        'tableLabel': 'SE or RE',
        'fqn': 'medLabChemistry.chmQcSeRe3'
      },
      {
        'elementKey': 'chmQcDescribe3',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '75',
        'tableLabel': 'Describe',
        'fqn': 'medLabChemistry.chmQcDescribe3'
      },
      {
        'elementKey': 'chmQcAnalyte4',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '76',
        'tableLabel': 'Analyte',
        'fqn': 'medLabChemistry.chmQcAnalyte4'
      },
      {
        'elementKey': 'chmQcLevel4',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '77',
        'tableLabel': 'QC Level',
        'fqn': 'medLabChemistry.chmQcLevel4'
      },
      {
        'elementKey': 'chmQcRule4',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '78',
        'tableLabel': 'QC rule failed',
        'fqn': 'medLabChemistry.chmQcRule4'
      },
      {
        'elementKey': 'chmQcSeRe4',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '79',
        'tableLabel': 'SE or RE',
        'fqn': 'medLabChemistry.chmQcSeRe4'
      },
      {
        'elementKey': 'chmQcDescribe4',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '80',
        'tableLabel': 'Describe',
        'fqn': 'medLabChemistry.chmQcDescribe4'
      },
      {
        'elementKey': 'form_label251',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'this chemistry form is a work in progress and other tables are planned to be placed here',
        'fqn': 'medLabChemistry.form_label251'
      },
      {
        'elementKey': 'form_label252',
        'formIndex': '1',
        'inputType': 'form_label',
        'fqn': 'medLabChemistry.form_label252'
      }
    ],
    'pageElements': {
      'tableChem': {
        'elementKey': 'tableChem',
        'pageElementIndex': '1',
        'pageKey': 'medLabChemistry',
        'tableKey': 'tableChem',
        'isTable': true,
        'label': 'Chemistry analysis',
        'addButtonText': 'Create a chemistry lab report',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'tableChem_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'tableChem_name',
              'tableChem_profession',
              'tableChem_day',
              'tableChem_time',
              'chemPotassium'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'chemAccession',
              'chemPotassiumFlag'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'chemCollDay',
              'chemtCO2'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'chemCollTime',
              'chemtCO2Flag'
            ]
          },
          {
            'label': 'Sodium',
            'ehr_list_index': '5',
            'items': [
              'chemSodium',
              'chemAnionGap'
            ]
          },
          {
            'label': 'Flag',
            'ehr_list_index': '6',
            'items': [
              'chemSodiumFlag',
              'chemAnionGapFlag'
            ]
          },
          {
            'label': 'Chloride',
            'ehr_list_index': '7',
            'items': [
              'chemChloride',
              'chemOsmalityMeasured'
            ]
          },
          {
            'label': 'Flag',
            'ehr_list_index': '8',
            'items': [
              'chemChlorideFlag',
              'chemOsmalityMeasuredFlag'
            ]
          },
          {
            'label': 'Osmality, Calculated',
            'ehr_list_index': '9',
            'items': [
              'chemOsmalityCalculated'
            ]
          },
          {
            'label': 'Flag',
            'ehr_list_index': '10',
            'items': [
              'chemOsmalityCalculatedFlag'
            ]
          },
          {
            'label': 'Osmolar Gap',
            'ehr_list_index': '11',
            'items': [
              'chemOsmolarGap'
            ]
          },
          {
            'label': 'Flag',
            'ehr_list_index': '12',
            'items': [
              'chemOsmolarGapFlag'
            ]
          },
          {
            'label': 'Glugose (Fasting Random)',
            'ehr_list_index': '13',
            'items': [
              'chemGlugoseFastingRandom'
            ]
          },
          {
            'label': 'Flag',
            'ehr_list_index': '14',
            'items': [
              'chemGlugoseFastingRandomFlag'
            ]
          },
          {
            'label': 'Creatinine',
            'ehr_list_index': '15',
            'items': [
              'chemCreatinine'
            ]
          },
          {
            'label': 'Flag',
            'ehr_list_index': '16',
            'items': [
              'chemCreatinineFlag'
            ]
          },
          {
            'label': 'Urea (BUN)',
            'ehr_list_index': '17',
            'items': [
              'chemUreaBun'
            ]
          },
          {
            'label': 'Flag',
            'ehr_list_index': '18',
            'items': [
              'chemUreaBunFlag'
            ]
          },
          {
            'label': 'Calcium',
            'ehr_list_index': '19',
            'items': [
              'chemCalcium'
            ]
          },
          {
            'label': 'Flag',
            'ehr_list_index': '20',
            'items': [
              'chemCalciumFlag'
            ]
          },
          {
            'label': 'Magnesium',
            'ehr_list_index': '21',
            'items': [
              'chemMagnesium'
            ]
          },
          {
            'label': 'Flag',
            'ehr_list_index': '22',
            'items': [
              'chemMagnesiumFlag'
            ]
          },
          {
            'label': 'Phosphorus',
            'ehr_list_index': '23',
            'items': [
              'chemPhosphorus'
            ]
          },
          {
            'label': 'Flag',
            'ehr_list_index': '24',
            'items': [
              'chemPhosphorusFlag'
            ]
          },
          {
            'label': 'Total Protein',
            'ehr_list_index': '25',
            'items': [
              'chemTotalProtein'
            ]
          },
          {
            'label': 'Flag',
            'ehr_list_index': '26',
            'items': [
              'chemTotalProteinFlag'
            ]
          },
          {
            'label': 'Albumin',
            'ehr_list_index': '27',
            'items': [
              'chemAlbumin'
            ]
          },
          {
            'ehr_list_index': '28',
            'items': [
              'chemAlbuminFlag'
            ]
          },
          {
            'label': 'Analyte',
            'ehr_list_index': '29',
            'items': [
              'chemOpt1Analyte'
            ]
          },
          {
            'label': 'Result',
            'ehr_list_index': '30',
            'items': [
              'chemOpt1Result'
            ]
          },
          {
            'label': 'Type',
            'ehr_list_index': '31',
            'items': [
              'chemOpt1Type'
            ]
          },
          {
            'label': 'RI',
            'ehr_list_index': '32',
            'items': [
              'chemOpt1RI',
              'chemOpt2Analyte'
            ]
          },
          {
            'label': 'Result',
            'ehr_list_index': '33',
            'items': [
              'chemOpt2Result'
            ]
          },
          {
            'label': 'Type',
            'ehr_list_index': '34',
            'items': [
              'chemOpt2Type'
            ]
          },
          {
            'label': 'RI',
            'ehr_list_index': '35',
            'items': [
              'chemOpt2RI',
              'chemOpt3Analyte'
            ]
          },
          {
            'label': 'Result',
            'ehr_list_index': '36',
            'items': [
              'chemOpt3Result'
            ]
          },
          {
            'label': 'Type',
            'ehr_list_index': '37',
            'items': [
              'chemOpt3Type'
            ]
          },
          {
            'label': 'RI',
            'ehr_list_index': '38',
            'items': [
              'chemOpt3RI',
              'chemOpt4Analyte'
            ]
          },
          {
            'label': 'Result',
            'ehr_list_index': '39',
            'items': [
              'chemOpt4Result'
            ]
          },
          {
            'label': 'Type',
            'ehr_list_index': '40',
            'items': [
              'chemOpt4Type'
            ]
          },
          {
            'label': 'RI',
            'ehr_list_index': '41',
            'items': [
              'chemOpt4RI',
              'chemOpt5Analyte'
            ]
          },
          {
            'label': 'Result',
            'ehr_list_index': '42',
            'items': [
              'chemOpt5Result'
            ]
          },
          {
            'label': 'Type',
            'ehr_list_index': '43',
            'items': [
              'chemOpt5Type'
            ]
          },
          {
            'label': 'RI',
            'ehr_list_index': '44',
            'items': [
              'chemOpt5RI',
              'chemOpt6Analyte'
            ]
          },
          {
            'label': 'Result',
            'ehr_list_index': '45',
            'items': [
              'chemOpt6Result'
            ]
          },
          {
            'label': 'Type',
            'ehr_list_index': '46',
            'items': [
              'chemOpt6Type'
            ]
          },
          {
            'label': 'RI',
            'ehr_list_index': '47',
            'items': [
              'chemOpt6RI',
              'chemOpt7Analyte'
            ]
          },
          {
            'label': 'Result',
            'ehr_list_index': '48',
            'items': [
              'chemOpt7Result'
            ]
          },
          {
            'label': 'Type',
            'ehr_list_index': '49',
            'items': [
              'chemOpt7Type'
            ]
          },
          {
            'label': 'RI',
            'ehr_list_index': '50',
            'items': [
              'chemOpt7RI',
              'chemOpt8Analyte'
            ]
          },
          {
            'label': 'Result',
            'ehr_list_index': '51',
            'items': [
              'chemOpt8Result'
            ]
          },
          {
            'label': 'Type',
            'ehr_list_index': '52',
            'items': [
              'chemOpt8Type'
            ]
          },
          {
            'label': 'RI',
            'ehr_list_index': '53',
            'items': [
              'chemOpt8RI'
            ]
          },
          {
            'ehr_list_index': '54',
            'items': [
              'urnInternal'
            ]
          },
          {
            'ehr_list_index': '55',
            'items': [
              'chemSpecimumType'
            ]
          },
          {
            'ehr_list_index': '56',
            'items': [
              'chemSerumAppearance'
            ]
          },
          {
            'ehr_list_index': '57',
            'items': [
              'chemQcAllAcceptable'
            ]
          },
          {
            'ehr_list_index': '58',
            'items': [
              'chemQcAllDuplicatesAcceptable'
            ]
          },
          {
            'ehr_list_index': '59',
            'items': [
              'chemQcAllPlausible'
            ]
          },
          {
            'ehr_list_index': '60',
            'items': [
              'chemQcAllCanBeReported'
            ]
          },
          {
            'label': 'Analyte',
            'ehr_list_index': '61',
            'items': [
              'chmQcAnalyte1'
            ]
          },
          {
            'label': 'QC Level',
            'ehr_list_index': '62',
            'items': [
              'chmQcLevel1'
            ]
          },
          {
            'label': 'QC rule failed',
            'ehr_list_index': '63',
            'items': [
              'chmQcRule1'
            ]
          },
          {
            'label': 'SE or RE',
            'ehr_list_index': '64',
            'items': [
              'chmQcSeRe1'
            ]
          },
          {
            'label': 'Describe',
            'ehr_list_index': '65',
            'items': [
              'chmQcDescribe1'
            ]
          },
          {
            'label': 'Analyte',
            'ehr_list_index': '66',
            'items': [
              'chmQcAnalyte2'
            ]
          },
          {
            'label': 'QC Level',
            'ehr_list_index': '67',
            'items': [
              'chmQcLevel2'
            ]
          },
          {
            'label': 'QC rule failed',
            'ehr_list_index': '68',
            'items': [
              'chmQcRule2'
            ]
          },
          {
            'label': 'SE or RE',
            'ehr_list_index': '69',
            'items': [
              'chmQcSeRe2'
            ]
          },
          {
            'label': 'Describe',
            'ehr_list_index': '70',
            'items': [
              'chmQcDescribe2'
            ]
          },
          {
            'label': 'Analyte',
            'ehr_list_index': '71',
            'items': [
              'chmQcAnalyte3'
            ]
          },
          {
            'label': 'QC Level',
            'ehr_list_index': '72',
            'items': [
              'chmQcLevel3'
            ]
          },
          {
            'label': 'QC rule failed',
            'ehr_list_index': '73',
            'items': [
              'chmQcRule3'
            ]
          },
          {
            'label': 'SE or RE',
            'ehr_list_index': '74',
            'items': [
              'chmQcSeRe3'
            ]
          },
          {
            'label': 'Describe',
            'ehr_list_index': '75',
            'items': [
              'chmQcDescribe3'
            ]
          },
          {
            'label': 'Analyte',
            'ehr_list_index': '76',
            'items': [
              'chmQcAnalyte4'
            ]
          },
          {
            'label': 'QC Level',
            'ehr_list_index': '77',
            'items': [
              'chmQcLevel4'
            ]
          },
          {
            'label': 'QC rule failed',
            'ehr_list_index': '78',
            'items': [
              'chmQcRule4'
            ]
          },
          {
            'label': 'SE or RE',
            'ehr_list_index': '79',
            'items': [
              'chmQcSeRe4'
            ]
          },
          {
            'label': 'Describe',
            'ehr_list_index': '80',
            'items': [
              'chmQcDescribe4'
            ]
          }
        ],
        'form': {
          'elementKey': 'tableChem',
          'label': 'Chemistry analysis',
          'addButtonText': 'Create a chemistry lab report',
          'formKey': 'tableChem',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group195',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'tableChem_name',
                'tableChem_profession',
                'tableChem_day',
                'tableChem_time'
              ]
            },
            {
              'elementKey': 'ehr_group196',
              'label': 'Accessioning',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'chemAccession',
                'chemCollDay',
                'chemCollTime'
              ]
            },
            {
              'elementKey': 'ehr_group197',
              'label': 'Analysis',
              'formCss': 'chem-results-table form-table-group',
              'gIndex': '3',
              'gChildren': [
                'formTableHeader198',
                'formTableHeader199',
                'formTableHeader200',
                'formTableHeader201',
                'formTableText202',
                'chemSodium',
                'chemSodiumFlag',
                'formTableText203',
                'formTableText204',
                'chemPotassium',
                'chemPotassiumFlag',
                'formTableText205',
                'formTableText206',
                'chemChloride',
                'chemChlorideFlag',
                'formTableText207',
                'formTableText208',
                'chemtCO2',
                'chemtCO2Flag',
                'formTableText209',
                'formTableText210',
                'chemAnionGap',
                'chemAnionGapFlag',
                'formTableText211',
                'formTableText212',
                'chemOsmalityMeasured',
                'chemOsmalityMeasuredFlag',
                'formTableText213',
                'formTableText214',
                'chemOsmalityCalculated',
                'chemOsmalityCalculatedFlag',
                'formTableText215',
                'formTableText216',
                'chemOsmolarGap',
                'chemOsmolarGapFlag',
                'formTableText217',
                'formTableText218',
                'chemGlugoseFastingRandom',
                'chemGlugoseFastingRandomFlag',
                'formTableText219',
                'formTableText220',
                'chemCreatinine',
                'chemCreatinineFlag',
                'formTableText221',
                'formTableText222',
                'chemUreaBun',
                'chemUreaBunFlag',
                'formTableText223',
                'formTableText224',
                'chemCalcium',
                'chemCalciumFlag',
                'formTableText225',
                'formTableText226',
                'chemMagnesium',
                'chemMagnesiumFlag',
                'formTableText227',
                'formTableText228',
                'chemPhosphorus',
                'chemPhosphorusFlag',
                'formTableText229',
                'formTableText230',
                'chemTotalProtein',
                'chemTotalProteinFlag',
                'formTableText231',
                'formTableText232',
                'chemAlbumin',
                'chemAlbuminFlag',
                'formTableText233',
                'chemOpt1Analyte',
                'chemOpt1Result',
                'chemOpt1Type',
                'chemOpt1RI',
                'chemOpt2Analyte',
                'chemOpt2Result',
                'chemOpt2Type',
                'chemOpt2RI',
                'chemOpt3Analyte',
                'chemOpt3Result',
                'chemOpt3Type',
                'chemOpt3RI',
                'chemOpt4Analyte',
                'chemOpt4Result',
                'chemOpt4Type',
                'chemOpt4RI',
                'chemOpt5Analyte',
                'chemOpt5Result',
                'chemOpt5Type',
                'chemOpt5RI',
                'chemOpt6Analyte',
                'chemOpt6Result',
                'chemOpt6Type',
                'chemOpt6RI',
                'chemOpt7Analyte',
                'chemOpt7Result',
                'chemOpt7Type',
                'chemOpt7RI',
                'chemOpt8Analyte',
                'chemOpt8Result',
                'chemOpt8Type',
                'chemOpt8RI'
              ]
            },
            {
              'elementKey': 'ehr_group234',
              'label': 'Lab Use Only',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '4',
              'gChildren': [
                'urnInternal'
              ]
            },
            {
              'elementKey': 'ehr_group235',
              'label': 'Sample Evaluation',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '5',
              'gChildren': [
                'chemSpecimumType',
                'chemSerumAppearance'
              ]
            },
            {
              'elementKey': 'ehr_group236',
              'label': 'QC & Assay evaluation',
              'formCss': 'chem-qc-assay form-table-group',
              'gIndex': '6',
              'gChildren': [
                'form_label237',
                'form_label238',
                'chemQcAllAcceptable',
                'form_label239',
                'chemQcAllDuplicatesAcceptable',
                'form_label240',
                'chemQcAllPlausible',
                'form_label241',
                'chemQcAllCanBeReported',
                'form_label242',
                'form_label243'
              ]
            },
            {
              'elementKey': 'ehr_group244',
              'label': 'QC table',
              'formCss': 'chem-qc-trouble form-table-group',
              'gIndex': '7',
              'gChildren': [
                'formTableHeader245',
                'formTableHeader246',
                'formTableHeader247',
                'formTableHeader248',
                'formTableText249',
                'chmQcAnalyte1',
                'chmQcLevel1',
                'chmQcRule1',
                'chmQcSeRe1',
                'chmQcDescribe1',
                'chmQcAnalyte2',
                'chmQcLevel2',
                'chmQcRule2',
                'chmQcSeRe2',
                'chmQcDescribe2',
                'chmQcAnalyte3',
                'chmQcLevel3',
                'chmQcRule3',
                'chmQcSeRe3',
                'chmQcDescribe3',
                'chmQcAnalyte4',
                'chmQcLevel4',
                'chmQcRule4',
                'chmQcSeRe4',
                'chmQcDescribe4'
              ]
            },
            {
              'elementKey': 'ehr_group250',
              'label': 'WIP',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '8',
              'gChildren': [
                'form_label251',
                'form_label252'
              ]
            }
          ],
          'ehr_data': {
            'tableChem_name': '',
            'tableChem_profession': '',
            'tableChem_day': '',
            'tableChem_time': '',
            'chemAccession': '',
            'chemCollDay': 'Today',
            'chemCollTime': '',
            'chemSodium': '',
            'chemSodiumFlag': '',
            'chemPotassium': '',
            'chemPotassiumFlag': '',
            'chemChloride': '',
            'chemChlorideFlag': '',
            'chemtCO2': '',
            'chemtCO2Flag': '',
            'chemAnionGap': '',
            'chemAnionGapFlag': '',
            'chemOsmalityMeasured': '',
            'chemOsmalityMeasuredFlag': '',
            'chemOsmalityCalculated': '',
            'chemOsmalityCalculatedFlag': '',
            'chemOsmolarGap': '',
            'chemOsmolarGapFlag': '',
            'chemGlugoseFastingRandom': '',
            'chemGlugoseFastingRandomFlag': '',
            'chemCreatinine': '',
            'chemCreatinineFlag': '',
            'chemUreaBun': '',
            'chemUreaBunFlag': '',
            'chemCalcium': '',
            'chemCalciumFlag': '',
            'chemMagnesium': '',
            'chemMagnesiumFlag': '',
            'chemPhosphorus': '',
            'chemPhosphorusFlag': '',
            'chemTotalProtein': '',
            'chemTotalProteinFlag': '',
            'chemAlbumin': '',
            'chemAlbuminFlag': '',
            'chemOpt1Analyte': '',
            'chemOpt1Result': '',
            'chemOpt1Type': '',
            'chemOpt1RI': '',
            'chemOpt2Analyte': '',
            'chemOpt2Result': '',
            'chemOpt2Type': '',
            'chemOpt2RI': '',
            'chemOpt3Analyte': '',
            'chemOpt3Result': '',
            'chemOpt3Type': '',
            'chemOpt3RI': '',
            'chemOpt4Analyte': '',
            'chemOpt4Result': '',
            'chemOpt4Type': '',
            'chemOpt4RI': '',
            'chemOpt5Analyte': '',
            'chemOpt5Result': '',
            'chemOpt5Type': '',
            'chemOpt5RI': '',
            'chemOpt6Analyte': '',
            'chemOpt6Result': '',
            'chemOpt6Type': '',
            'chemOpt6RI': '',
            'chemOpt7Analyte': '',
            'chemOpt7Result': '',
            'chemOpt7Type': '',
            'chemOpt7RI': '',
            'chemOpt8Analyte': '',
            'chemOpt8Result': '',
            'chemOpt8Type': '',
            'chemOpt8RI': '',
            'urnInternal': '',
            'chemSpecimumType': '',
            'chemSerumAppearance': '',
            'chemQcAllAcceptable': '',
            'chemQcAllDuplicatesAcceptable': '',
            'chemQcAllPlausible': '',
            'chemQcAllCanBeReported': '',
            'chmQcAnalyte1': '',
            'chmQcLevel1': '',
            'chmQcRule1': '',
            'chmQcSeRe1': '',
            'chmQcDescribe1': '',
            'chmQcAnalyte2': '',
            'chmQcLevel2': '',
            'chmQcRule2': '',
            'chmQcSeRe2': '',
            'chmQcDescribe2': '',
            'chmQcAnalyte3': '',
            'chmQcLevel3': '',
            'chmQcRule3': '',
            'chmQcSeRe3': '',
            'chmQcDescribe3': '',
            'chmQcAnalyte4': '',
            'chmQcLevel4': '',
            'chmQcRule4': '',
            'chmQcSeRe4': '',
            'chmQcDescribe4': ''
          }
        },
        'tableChildren': [
          'tableChem_id',
          'tableChem_name',
          'tableChem_profession',
          'tableChem_day',
          'tableChem_time',
          'chemAccession',
          'chemCollDay',
          'chemCollTime',
          'chemSodium',
          'chemSodiumFlag',
          'chemPotassium',
          'chemPotassiumFlag',
          'chemChloride',
          'chemChlorideFlag',
          'chemtCO2',
          'chemtCO2Flag',
          'chemAnionGap',
          'chemAnionGapFlag',
          'chemOsmalityMeasured',
          'chemOsmalityMeasuredFlag',
          'chemOsmalityCalculated',
          'chemOsmalityCalculatedFlag',
          'chemOsmolarGap',
          'chemOsmolarGapFlag',
          'chemGlugoseFastingRandom',
          'chemGlugoseFastingRandomFlag',
          'chemCreatinine',
          'chemCreatinineFlag',
          'chemUreaBun',
          'chemUreaBunFlag',
          'chemCalcium',
          'chemCalciumFlag',
          'chemMagnesium',
          'chemMagnesiumFlag',
          'chemPhosphorus',
          'chemPhosphorusFlag',
          'chemTotalProtein',
          'chemTotalProteinFlag',
          'chemAlbumin',
          'chemAlbuminFlag',
          'chemOpt1Analyte',
          'chemOpt1Result',
          'chemOpt1Type',
          'chemOpt1RI',
          'chemOpt2Analyte',
          'chemOpt2Result',
          'chemOpt2Type',
          'chemOpt2RI',
          'chemOpt3Analyte',
          'chemOpt3Result',
          'chemOpt3Type',
          'chemOpt3RI',
          'chemOpt4Analyte',
          'chemOpt4Result',
          'chemOpt4Type',
          'chemOpt4RI',
          'chemOpt5Analyte',
          'chemOpt5Result',
          'chemOpt5Type',
          'chemOpt5RI',
          'chemOpt6Analyte',
          'chemOpt6Result',
          'chemOpt6Type',
          'chemOpt6RI',
          'chemOpt7Analyte',
          'chemOpt7Result',
          'chemOpt7Type',
          'chemOpt7RI',
          'chemOpt8Analyte',
          'chemOpt8Result',
          'chemOpt8Type',
          'chemOpt8RI',
          'urnInternal',
          'chemSpecimumType',
          'chemSerumAppearance',
          'chemQcAllAcceptable',
          'chemQcAllDuplicatesAcceptable',
          'chemQcAllPlausible',
          'chemQcAllCanBeReported',
          'chmQcAnalyte1',
          'chmQcLevel1',
          'chmQcRule1',
          'chmQcSeRe1',
          'chmQcDescribe1',
          'chmQcAnalyte2',
          'chmQcLevel2',
          'chmQcRule2',
          'chmQcSeRe2',
          'chmQcDescribe2',
          'chmQcAnalyte3',
          'chmQcLevel3',
          'chmQcRule3',
          'chmQcSeRe3',
          'chmQcDescribe3',
          'chmQcAnalyte4',
          'chmQcLevel4',
          'chmQcRule4',
          'chmQcSeRe4',
          'chmQcDescribe4'
        ],
        'hasRecHeader': true
      }
    }
  },
  'medLabUrinalysis': {
    'pageDataKey': 'medLabUrinalysis',
    'pageTitle': 'Med Lab Urinalysis',
    'pIndex': '46',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'tableUrinalysis_name',
        'formIndex': '2',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'medLabUrinalysis.name'
      },
      {
        'elementKey': 'tableUrinalysis_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'tableUrinalysis_profession',
        'formIndex': '2',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'medLabUrinalysis.profession'
      },
      {
        'elementKey': 'tableUrinalysis_day',
        'formIndex': '2',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'medLabUrinalysis.day'
      },
      {
        'elementKey': 'tableUrinalysis_time',
        'formIndex': '2',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'medLabUrinalysis.time'
      },
      {
        'elementKey': 'urinAccession',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Accession Id',
        'tableColumn': '2',
        'fqn': 'medLabUrinalysis.urinAccession'
      },
      {
        'elementKey': 'urinCollDay',
        'defaultValue': 'Today',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Collection day',
        'tableColumn': '3',
        'fqn': 'medLabUrinalysis.urinCollDay'
      },
      {
        'elementKey': 'urinCollTime',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Collection time',
        'tableColumn': '4',
        'fqn': 'medLabUrinalysis.urinCollTime'
      },
      {
        'elementKey': 'urinOrderPhys',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Ordering physician',
        'tableColumn': '5',
        'fqn': 'medLabUrinalysis.urinOrderPhys'
      },
      {
        'elementKey': 'urinTransparency',
        'formIndex': '2',
        'inputType': 'select',
        'label': 'Transparency',
        'options': [
          {
            'key': 'Clear',
            'text': 'Clear'
          },
          {
            'key': 'Hazy',
            'text': 'Hazy'
          },
          {
            'key': 'Cloudy',
            'text': 'Cloudy'
          },
          {
            'key': 'Turbid',
            'text': 'Turbid'
          }
        ],
        'tableColumn': '5',
        'fqn': 'medLabUrinalysis.urinTransparency'
      },
      {
        'elementKey': 'urinColour',
        'formIndex': '2',
        'inputType': 'select',
        'label': 'Colour',
        'options': [
          {
            'key': 'Colorless',
            'text': 'Colorless'
          },
          {
            'key': 'Pale yellow',
            'text': 'Pale yellow'
          },
          {
            'key': 'Yellow',
            'text': 'Yellow'
          },
          {
            'key': 'Amber',
            'text': 'Amber'
          },
          {
            'key': 'Orange',
            'text': 'Orange'
          },
          {
            'key': 'Red',
            'text': 'Red'
          },
          {
            'key': 'Pink',
            'text': 'Pink'
          },
          {
            'key': 'Brown',
            'text': 'Brown'
          },
          {
            'key': 'Green',
            'text': 'Green'
          }
        ],
        'tableColumn': '6',
        'fqn': 'medLabUrinalysis.urinColour'
      },
      {
        'elementKey': 'formTableHeader257',
        'formIndex': '2',
        'inputType': 'formTableHeader',
        'label': 'Reagent Strip',
        'fqn': 'medLabUrinalysis.formTableHeader257'
      },
      {
        'elementKey': 'formTableHeader258',
        'formIndex': '2',
        'inputType': 'formTableHeader',
        'label': 'Manual',
        'fqn': 'medLabUrinalysis.formTableHeader258'
      },
      {
        'elementKey': 'formTableHeader259',
        'formIndex': '2',
        'inputType': 'formTableHeader',
        'label': 'Automated',
        'fqn': 'medLabUrinalysis.formTableHeader259'
      },
      {
        'elementKey': 'formTableHeader260',
        'formIndex': '2',
        'inputType': 'formTableHeader',
        'label': 'Reference Interval',
        'fqn': 'medLabUrinalysis.formTableHeader260'
      },
      {
        'elementKey': 'formTableText261',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Glucose',
        'fqn': 'medLabUrinalysis.formTableText261'
      },
      {
        'elementKey': 'uchemManGlucose',
        'formIndex': '2',
        'inputType': 'text',
        'suffix': 'mmol/L',
        'tableColumn': '7',
        'tableLabel': 'Manual Glucose',
        'fqn': 'medLabUrinalysis.uchemManGlucose',
        'suffixText': '<p>mmol/L</p>',
        'suffixHtml': 'mmol/L'
      },
      {
        'elementKey': 'uchemAutoGlucose',
        'formIndex': '2',
        'inputType': 'text',
        'suffix': 'mmol/L',
        'tableColumn': '8',
        'tableLabel': 'Auto Glucose',
        'fqn': 'medLabUrinalysis.uchemAutoGlucose',
        'suffixText': '<p>mmol/L</p>',
        'suffixHtml': 'mmol/L'
      },
      {
        'elementKey': 'formTableText262',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Negative (mmol/L)',
        'fqn': 'medLabUrinalysis.formTableText262'
      },
      {
        'elementKey': 'formTableText263',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Bilirubin',
        'fqn': 'medLabUrinalysis.formTableText263'
      },
      {
        'elementKey': 'uchemManBilirubin',
        'formIndex': '2',
        'inputType': 'text',
        'tableColumn': '9',
        'tableLabel': 'Manual Bilirubin',
        'fqn': 'medLabUrinalysis.uchemManBilirubin'
      },
      {
        'elementKey': 'uchemAutoBilirubin',
        'formIndex': '2',
        'inputType': 'text',
        'tableColumn': '10',
        'tableLabel': 'Auto Bilirubin',
        'fqn': 'medLabUrinalysis.uchemAutoBilirubin'
      },
      {
        'elementKey': 'formTableText264',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Negative',
        'fqn': 'medLabUrinalysis.formTableText264'
      },
      {
        'elementKey': 'formTableText265',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Ketone',
        'fqn': 'medLabUrinalysis.formTableText265'
      },
      {
        'elementKey': 'uchemManKetone',
        'formIndex': '2',
        'inputType': 'text',
        'suffix': 'mmol/L',
        'tableColumn': '11',
        'tableLabel': 'Manual Ketone',
        'fqn': 'medLabUrinalysis.uchemManKetone',
        'suffixText': '<p>mmol/L</p>',
        'suffixHtml': 'mmol/L'
      },
      {
        'elementKey': 'uchemAutoKetone',
        'formIndex': '2',
        'inputType': 'text',
        'suffix': 'mmol/L',
        'tableColumn': '12',
        'tableLabel': 'Auto Ketone',
        'fqn': 'medLabUrinalysis.uchemAutoKetone',
        'suffixText': '<p>mmol/L</p>',
        'suffixHtml': 'mmol/L'
      },
      {
        'elementKey': 'formTableText266',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Negative (mmol/L)',
        'fqn': 'medLabUrinalysis.formTableText266'
      },
      {
        'elementKey': 'formTableText267',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Specific Gravity',
        'fqn': 'medLabUrinalysis.formTableText267'
      },
      {
        'elementKey': 'uchemManSpecificGravity',
        'formIndex': '2',
        'inputType': 'text',
        'tableColumn': '13',
        'tableLabel': 'Manual Specific Gravity',
        'fqn': 'medLabUrinalysis.uchemManSpecificGravity'
      },
      {
        'elementKey': 'uchemAutoSpecificGravity',
        'formIndex': '2',
        'inputType': 'text',
        'tableColumn': '14',
        'tableLabel': 'Auto Specific Gravity',
        'fqn': 'medLabUrinalysis.uchemAutoSpecificGravity'
      },
      {
        'elementKey': 'formTableText268',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': '1.005 - 1.030',
        'fqn': 'medLabUrinalysis.formTableText268'
      },
      {
        'elementKey': 'formTableText269',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Blood',
        'fqn': 'medLabUrinalysis.formTableText269'
      },
      {
        'elementKey': 'uchemManBlood',
        'formIndex': '2',
        'inputType': 'text',
        'tableColumn': '15',
        'tableLabel': 'Manual Blood',
        'fqn': 'medLabUrinalysis.uchemManBlood'
      },
      {
        'elementKey': 'uchemAutoBlood',
        'formIndex': '2',
        'inputType': 'text',
        'suffix': 'Ery/μL',
        'tableColumn': '16',
        'tableLabel': 'Auto Blood',
        'fqn': 'medLabUrinalysis.uchemAutoBlood',
        'suffixText': '<p>Ery/μL</p>',
        'suffixHtml': 'Ery/μL'
      },
      {
        'elementKey': 'formTableText270',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Negative (Ery/μL)',
        'fqn': 'medLabUrinalysis.formTableText270'
      },
      {
        'elementKey': 'formTableText271',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'pH',
        'fqn': 'medLabUrinalysis.formTableText271'
      },
      {
        'elementKey': 'uchemManpH',
        'formIndex': '2',
        'inputType': 'text',
        'tableColumn': '17',
        'tableLabel': 'Manual pH',
        'fqn': 'medLabUrinalysis.uchemManpH'
      },
      {
        'elementKey': 'uchemAutopH',
        'formIndex': '2',
        'inputType': 'text',
        'tableColumn': '18',
        'tableLabel': 'Auto pH',
        'fqn': 'medLabUrinalysis.uchemAutopH'
      },
      {
        'elementKey': 'formTableText272',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': '5.0 - 8.0',
        'fqn': 'medLabUrinalysis.formTableText272'
      },
      {
        'elementKey': 'formTableText273',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Protein',
        'fqn': 'medLabUrinalysis.formTableText273'
      },
      {
        'elementKey': 'uchemManProtein',
        'formIndex': '2',
        'inputType': 'text',
        'suffix': 'g/L',
        'tableColumn': '19',
        'tableLabel': 'Manual Protein',
        'fqn': 'medLabUrinalysis.uchemManProtein',
        'suffixText': '<p>g/L</p>',
        'suffixHtml': 'g/L'
      },
      {
        'elementKey': 'uchemAutoProtein',
        'formIndex': '2',
        'inputType': 'text',
        'suffix': 'g/L',
        'tableColumn': '20',
        'tableLabel': 'Auto Protein',
        'fqn': 'medLabUrinalysis.uchemAutoProtein',
        'suffixText': '<p>g/L</p>',
        'suffixHtml': 'g/L'
      },
      {
        'elementKey': 'formTableText274',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Negative (g/L)',
        'fqn': 'medLabUrinalysis.formTableText274'
      },
      {
        'elementKey': 'formTableText275',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Urobilinogen',
        'fqn': 'medLabUrinalysis.formTableText275'
      },
      {
        'elementKey': 'uchemManUrobilinogen',
        'formIndex': '2',
        'inputType': 'text',
        'suffix': 'μmol/L',
        'tableColumn': '21',
        'tableLabel': 'Manual Urobilinogen',
        'fqn': 'medLabUrinalysis.uchemManUrobilinogen',
        'suffixText': '<p>μmol/L</p>',
        'suffixHtml': 'μmol/L'
      },
      {
        'elementKey': 'uchemAutoUrobilinogen',
        'formIndex': '2',
        'inputType': 'text',
        'suffix': 'μmol/L',
        'tableColumn': '22',
        'tableLabel': 'Auto Urobilinogen',
        'fqn': 'medLabUrinalysis.uchemAutoUrobilinogen',
        'suffixText': '<p>μmol/L</p>',
        'suffixHtml': 'μmol/L'
      },
      {
        'elementKey': 'formTableText276',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': '≤ 3.2 μmol/L',
        'fqn': 'medLabUrinalysis.formTableText276'
      },
      {
        'elementKey': 'formTableText277',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Nitrite',
        'fqn': 'medLabUrinalysis.formTableText277'
      },
      {
        'elementKey': 'uchemManNitrite',
        'formIndex': '2',
        'inputType': 'text',
        'tableColumn': '23',
        'tableLabel': 'Manual Nitrite',
        'fqn': 'medLabUrinalysis.uchemManNitrite'
      },
      {
        'elementKey': 'uchemAutoNitrite',
        'formIndex': '2',
        'inputType': 'text',
        'tableColumn': '24',
        'tableLabel': 'Auto Nitrite',
        'fqn': 'medLabUrinalysis.uchemAutoNitrite'
      },
      {
        'elementKey': 'formTableText278',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Negative',
        'fqn': 'medLabUrinalysis.formTableText278'
      },
      {
        'elementKey': 'formTableText279',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Leukocytes',
        'fqn': 'medLabUrinalysis.formTableText279'
      },
      {
        'elementKey': 'uchemManLeukocytes',
        'formIndex': '2',
        'inputType': 'text',
        'tableColumn': '25',
        'tableLabel': 'Manual Leukocytes',
        'fqn': 'medLabUrinalysis.uchemManLeukocytes'
      },
      {
        'elementKey': 'uchemAutoLeukocytes',
        'formIndex': '2',
        'inputType': 'text',
        'suffix': 'Leu/μL',
        'tableColumn': '26',
        'tableLabel': 'Auto Leukocytes',
        'fqn': 'medLabUrinalysis.uchemAutoLeukocytes',
        'suffixText': '<p>Leu/μL</p>',
        'suffixHtml': 'Leu/μL'
      },
      {
        'elementKey': 'formTableText280',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Negative (Leu/μL)',
        'fqn': 'medLabUrinalysis.formTableText280'
      },
      {
        'elementKey': 'uchemMicroIndicater',
        'defaultValue': true,
        'formIndex': '2',
        'inputType': 'checkbox',
        'label': 'Microscopic indicated',
        'tableColumn': '27',
        'fqn': 'medLabUrinalysis.uchemMicroIndicater'
      },
      {
        'elementKey': 'urnDiscMA',
        'formIndex': '2',
        'inputType': 'textarea',
        'label': 'Discrepancies manual vs auto',
        'tableColumn': '28',
        'fqn': 'medLabUrinalysis.urnDiscMA'
      },
      {
        'elementKey': 'uchemInstructorlComment',
        'formIndex': '2',
        'inputType': 'textarea',
        'label': 'Instructors\' comment',
        'tableColumn': '29',
        'fqn': 'medLabUrinalysis.uchemInstructorlComment'
      },
      {
        'elementKey': 'uchemSulfosalicylic',
        'formIndex': '2',
        'helperText': 'Sulfosalicylic acid',
        'inputType': 'select',
        'label': 'SSA Test',
        'options': [
          {
            'key': 'negative',
            'text': 'negative'
          },
          {
            'key': 'trace',
            'text': 'trace'
          },
          {
            'key': '+1',
            'text': '+1'
          },
          {
            'key': '+2',
            'text': '+2'
          },
          {
            'key': '+3',
            'text': '+3'
          },
          {
            'key': '+4',
            'text': '+4'
          }
        ],
        'tableColumn': '30',
        'fqn': 'medLabUrinalysis.uchemSulfosalicylic',
        'helperHtml': '<p>Sulfosalicylic acid</p>'
      },
      {
        'elementKey': 'uchemIcotest',
        'formIndex': '2',
        'inputType': 'select',
        'label': 'Ictotest',
        'options': [
          {
            'key': 'negative',
            'text': 'negative'
          },
          {
            'key': 'positive',
            'text': 'positive'
          }
        ],
        'tableColumn': '31',
        'fqn': 'medLabUrinalysis.uchemIcotest'
      },
      {
        'elementKey': 'formTableHeader284',
        'formIndex': '2',
        'inputType': 'formTableHeader',
        'fqn': 'medLabUrinalysis.formTableHeader284'
      },
      {
        'elementKey': 'formTableHeader285',
        'formIndex': '2',
        'inputType': 'formTableHeader',
        'label': 'Patient Results',
        'fqn': 'medLabUrinalysis.formTableHeader285'
      },
      {
        'elementKey': 'formTableHeader286',
        'formIndex': '2',
        'inputType': 'formTableHeader',
        'label': 'Type',
        'fqn': 'medLabUrinalysis.formTableHeader286'
      },
      {
        'elementKey': 'formTableHeader287',
        'formIndex': '2',
        'inputType': 'formTableHeader',
        'label': 'Reference Interval',
        'fqn': 'medLabUrinalysis.formTableHeader287'
      },
      {
        'elementKey': 'formTableText288',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'WBC',
        'fqn': 'medLabUrinalysis.formTableText288'
      },
      {
        'elementKey': 'umicroWBC',
        'formIndex': '2',
        'inputType': 'select',
        'options': [
          {
            'key': '0-1',
            'text': '0-1'
          },
          {
            'key': '2-5',
            'text': '2-5'
          },
          {
            'key': '6-10',
            'text': '6-10'
          },
          {
            'key': '11-20',
            'text': '11-20'
          },
          {
            'key': '21-50',
            'text': '21-50'
          },
          {
            'key': '50+',
            'text': '50+'
          },
          {
            'key': 'none',
            'text': 'None seen'
          },
          {
            'key': 'present',
            'text': 'Present'
          },
          {
            'key': 'field',
            'text': 'Obscures field'
          }
        ],
        'tableColumn': '32',
        'tableLabel': 'WBC',
        'fqn': 'medLabUrinalysis.umicroWBC'
      },
      {
        'elementKey': 'spacer289',
        'formIndex': '2',
        'inputType': 'spacer',
        'fqn': 'medLabUrinalysis.spacer289'
      },
      {
        'elementKey': 'formTableText290',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': '0-5/ HPF',
        'fqn': 'medLabUrinalysis.formTableText290'
      },
      {
        'elementKey': 'formTableText291',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'RBC',
        'fqn': 'medLabUrinalysis.formTableText291'
      },
      {
        'elementKey': 'umicroRBC',
        'formIndex': '2',
        'inputType': 'select',
        'options': [
          {
            'key': '1',
            'text': '0-1'
          },
          {
            'key': '5',
            'text': '2-5'
          },
          {
            'key': '10',
            'text': '6-10'
          },
          {
            'key': '20',
            'text': '11-20'
          },
          {
            'key': '50',
            'text': '21-50'
          },
          {
            'key': 'plus',
            'text': '50+'
          },
          {
            'key': 'none',
            'text': 'None seen'
          },
          {
            'key': 'present',
            'text': 'Present'
          },
          {
            'key': 'field',
            'text': 'Obscures field'
          }
        ],
        'tableColumn': '33',
        'tableLabel': 'RBC',
        'fqn': 'medLabUrinalysis.umicroRBC'
      },
      {
        'elementKey': 'spacer292',
        'formIndex': '2',
        'inputType': 'spacer',
        'fqn': 'medLabUrinalysis.spacer292'
      },
      {
        'elementKey': 'formTableText293',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': '0-5/ HPF',
        'fqn': 'medLabUrinalysis.formTableText293'
      },
      {
        'elementKey': 'formTableText294',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Epithelial Cells',
        'fqn': 'medLabUrinalysis.formTableText294'
      },
      {
        'elementKey': 'umicroEpithelial',
        'formIndex': '2',
        'inputType': 'select',
        'options': [
          {
            'key': '2',
            'text': '0-2'
          },
          {
            'key': '5',
            'text': '3-5'
          },
          {
            'key': '10',
            'text': '6-10'
          },
          {
            'key': 'plus',
            'text': '10+'
          },
          {
            'key': 'none',
            'text': 'None seen'
          },
          {
            'key': 'present',
            'text': 'Present'
          },
          {
            'key': 'field',
            'text': 'Obscures field'
          }
        ],
        'tableColumn': '34',
        'tableLabel': 'Epithelial Cells',
        'fqn': 'medLabUrinalysis.umicroEpithelial'
      },
      {
        'elementKey': 'umicroTypesEpithelial Cells',
        'formIndex': '2',
        'inputType': 'checkset',
        'options': [
          {
            'key': 'squamous',
            'text': 'Squamous'
          },
          {
            'key': 'transitional',
            'text': 'Transitional'
          },
          {
            'key': 'rte',
            'text': 'RTE'
          }
        ],
        'tableColumn': '35',
        'tableLabel': 'Types',
        'fqn': 'medLabUrinalysis.umicroTypesEpithelial Cells'
      },
      {
        'elementKey': 'formTableText295',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': '0-2/ HPF',
        'fqn': 'medLabUrinalysis.formTableText295'
      },
      {
        'elementKey': 'formTableText296',
        'formIndex': '2',
        'formCss': 'form-table-span-4-rows',
        'inputType': 'formTableText',
        'label': 'Casts',
        'fqn': 'medLabUrinalysis.formTableText296'
      },
      {
        'elementKey': 'umicrocCastsResults1',
        'formIndex': '2',
        'inputType': 'select',
        'options': [
          {
            'key': '2',
            'text': '0-2'
          },
          {
            'key': '5',
            'text': '3-5'
          },
          {
            'key': '10',
            'text': '6-10'
          },
          {
            'key': 'plus',
            'text': '10+'
          },
          {
            'key': 'none',
            'text': 'None seen'
          },
          {
            'key': 'present',
            'text': 'Present'
          },
          {
            'key': 'field',
            'text': 'Obscures field'
          }
        ],
        'tableColumn': '36',
        'tableLabel': 'Cast results 1',
        'fqn': 'medLabUrinalysis.umicrocCastsResults1'
      },
      {
        'elementKey': 'umicrocCastsType1',
        'formIndex': '2',
        'inputType': 'select',
        'options': [
          {
            'key': 'Hyaline',
            'text': 'Hyaline'
          },
          {
            'key': 'Granular',
            'text': 'Granular'
          },
          {
            'key': 'Epithelial',
            'text': 'Epithelial'
          },
          {
            'key': 'RBC',
            'text': 'RBC'
          },
          {
            'key': 'WBC',
            'text': 'WBC'
          },
          {
            'key': 'Waxy',
            'text': 'Waxy'
          },
          {
            'key': 'Fatty',
            'text': 'Fatty'
          }
        ],
        'tableColumn': '37',
        'tableLabel': 'Cast type 1',
        'fqn': 'medLabUrinalysis.umicrocCastsType1'
      },
      {
        'elementKey': 'formTableText297',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': '0-2/LPF',
        'fqn': 'medLabUrinalysis.formTableText297'
      },
      {
        'elementKey': 'umicrocCastsResults2',
        'formIndex': '2',
        'inputType': 'select',
        'options': [
          {
            'key': '2',
            'text': '0-2'
          },
          {
            'key': '5',
            'text': '3-5'
          },
          {
            'key': '10',
            'text': '6-10'
          },
          {
            'key': 'plus',
            'text': '10+'
          },
          {
            'key': 'none',
            'text': 'None seen'
          },
          {
            'key': 'present',
            'text': 'Present'
          },
          {
            'key': 'field',
            'text': 'Obscures field'
          }
        ],
        'tableColumn': '38',
        'tableLabel': 'Cast results 2',
        'fqn': 'medLabUrinalysis.umicrocCastsResults2'
      },
      {
        'elementKey': 'umicrocCastsType2',
        'formIndex': '2',
        'inputType': 'select',
        'options': [
          {
            'key': 'Hyaline',
            'text': 'Hyaline'
          },
          {
            'key': 'Granular',
            'text': 'Granular'
          },
          {
            'key': 'Epithelial',
            'text': 'Epithelial'
          },
          {
            'key': 'RBC',
            'text': 'RBC'
          },
          {
            'key': 'WBC',
            'text': 'WBC'
          },
          {
            'key': 'Waxy',
            'text': 'Waxy'
          },
          {
            'key': 'Fatty',
            'text': 'Fatty'
          }
        ],
        'tableColumn': '39',
        'tableLabel': 'Cast type 2',
        'fqn': 'medLabUrinalysis.umicrocCastsType2'
      },
      {
        'elementKey': 'formTableText298',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': '0-2/LPF',
        'fqn': 'medLabUrinalysis.formTableText298'
      },
      {
        'elementKey': 'umicrocCastsResults3',
        'formIndex': '2',
        'inputType': 'select',
        'options': [
          {
            'key': '2',
            'text': '0-2'
          },
          {
            'key': '5',
            'text': '3-5'
          },
          {
            'key': '10',
            'text': '6-10'
          },
          {
            'key': 'plus',
            'text': '10+'
          },
          {
            'key': 'none',
            'text': 'None seen'
          },
          {
            'key': 'present',
            'text': 'Present'
          },
          {
            'key': 'field',
            'text': 'Obscures field'
          }
        ],
        'tableColumn': '40',
        'tableLabel': 'Cast results 3',
        'fqn': 'medLabUrinalysis.umicrocCastsResults3'
      },
      {
        'elementKey': 'umicrocCastsType3',
        'formIndex': '2',
        'inputType': 'select',
        'options': [
          {
            'key': 'Hyaline',
            'text': 'Hyaline'
          },
          {
            'key': 'Granular',
            'text': 'Granular'
          },
          {
            'key': 'Epithelial',
            'text': 'Epithelial'
          },
          {
            'key': 'RBC',
            'text': 'RBC'
          },
          {
            'key': 'WBC',
            'text': 'WBC'
          },
          {
            'key': 'Waxy',
            'text': 'Waxy'
          },
          {
            'key': 'Fatty',
            'text': 'Fatty'
          }
        ],
        'tableColumn': '41',
        'tableLabel': 'Cast type 3',
        'fqn': 'medLabUrinalysis.umicrocCastsType3'
      },
      {
        'elementKey': 'formTableText299',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': '0-2/LPF',
        'fqn': 'medLabUrinalysis.formTableText299'
      },
      {
        'elementKey': 'umicrocCastsResults4',
        'formIndex': '2',
        'inputType': 'select',
        'options': [
          {
            'key': '2',
            'text': '0-2'
          },
          {
            'key': '5',
            'text': '3-5'
          },
          {
            'key': '10',
            'text': '6-10'
          },
          {
            'key': 'plus',
            'text': '10+'
          },
          {
            'key': 'none',
            'text': 'None seen'
          },
          {
            'key': 'present',
            'text': 'Present'
          },
          {
            'key': 'field',
            'text': 'Obscures field'
          }
        ],
        'tableColumn': '42',
        'tableLabel': 'Cast results 4',
        'fqn': 'medLabUrinalysis.umicrocCastsResults4'
      },
      {
        'elementKey': 'umicrocCastsType4',
        'formIndex': '2',
        'inputType': 'select',
        'options': [
          {
            'key': 'Hyaline',
            'text': 'Hyaline'
          },
          {
            'key': 'Granular',
            'text': 'Granular'
          },
          {
            'key': 'Epithelial',
            'text': 'Epithelial'
          },
          {
            'key': 'RBC',
            'text': 'RBC'
          },
          {
            'key': 'WBC',
            'text': 'WBC'
          },
          {
            'key': 'Waxy',
            'text': 'Waxy'
          },
          {
            'key': 'Fatty',
            'text': 'Fatty'
          }
        ],
        'tableColumn': '43',
        'tableLabel': 'Cast type 4',
        'fqn': 'medLabUrinalysis.umicrocCastsType4'
      },
      {
        'elementKey': 'formTableText300',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': '0-2/LPF',
        'fqn': 'medLabUrinalysis.formTableText300'
      },
      {
        'elementKey': 'formTableText301',
        'formIndex': '2',
        'formCss': 'form-table-span-2-rows',
        'inputType': 'formTableText',
        'label': 'Crystals',
        'fqn': 'medLabUrinalysis.formTableText301'
      },
      {
        'elementKey': 'umicroCrystalsNonePresent',
        'formIndex': '2',
        'formCss': 'form-table-span-3',
        'inputType': 'checkbox',
        'label': 'None seen',
        'tableColumn': '44',
        'fqn': 'medLabUrinalysis.umicroCrystalsNonePresent'
      },
      {
        'elementKey': 'umicroCrystalsPresent',
        'formIndex': '2',
        'helperText': 'none:=None seen\npresent:=Present\nfield:=Obscures field',
        'inputType': 'boxcheckset',
        'label': 'Present',
        'options': [
          {
            'key': 'calciumOxalate',
            'text': 'Calcium Oxalate'
          },
          {
            'key': 'calciumCarbonate',
            'text': 'Calcium carbonate'
          },
          {
            'key': 'uricAcid',
            'text': 'Uric Acid'
          },
          {
            'key': 'calciumPhosphate',
            'text': 'Calcium Phosphate'
          },
          {
            'key': 'triplePhosphate',
            'text': 'Triple Phosphate'
          },
          {
            'key': 'amorphousUrates',
            'text': 'Amorphous Urates'
          },
          {
            'key': 'amorphousPhosphates',
            'text': 'Amorphous Phosphates'
          },
          {
            'key': 'cystine',
            'text': 'Cystine'
          },
          {
            'key': 'tyrosine',
            'text': 'Tyrosine'
          },
          {
            'key': 'cholesterol',
            'text': 'Cholesterol'
          },
          {
            'key': 'ammoniumBiurate',
            'text': 'Ammonium Biurate'
          },
          {
            'key': 'hippuricAcid',
            'text': 'Hippuric Acid'
          },
          {
            'key': 'bilirubin',
            'text': 'Bilirubin'
          },
          {
            'key': 'leucine',
            'text': 'Leucine'
          },
          {
            'key': 'sulfonamides',
            'text': 'Sulfonamides'
          }
        ],
        'tableColumn': '45',
        'fqn': 'medLabUrinalysis.umicroCrystalsPresent',
        'helperHtml': '<p>none:=None seen</p>\n<p>present:=Present</p>\n<p>field:=Obscures field</p>'
      },
      {
        'elementKey': 'umicroCrystalsObscures',
        'formIndex': '2',
        'inputType': 'boxcheckset',
        'label': 'Obscures field',
        'options': [
          {
            'key': 'calciumOxalate',
            'text': 'Calcium Oxalate'
          },
          {
            'key': 'calciumCarbonate',
            'text': 'Calcium carbonate'
          },
          {
            'key': 'uricAcid',
            'text': 'Uric Acid'
          },
          {
            'key': 'calciumPhosphate',
            'text': 'Calcium Phosphate'
          },
          {
            'key': 'triplePhosphate',
            'text': 'Triple Phosphate'
          },
          {
            'key': 'amorphousUrates',
            'text': 'Amorphous Urates'
          },
          {
            'key': 'amorphousPhosphates',
            'text': 'Amorphous Phosphates'
          },
          {
            'key': 'cystine',
            'text': 'Cystine'
          },
          {
            'key': 'tyrosine',
            'text': 'Tyrosine'
          },
          {
            'key': 'cholesterol',
            'text': 'Cholesterol'
          },
          {
            'key': 'ammoniumBiurate',
            'text': 'Ammonium Biurate'
          },
          {
            'key': 'hippuricAcid',
            'text': 'Hippuric Acid'
          },
          {
            'key': 'bilirubin',
            'text': 'Bilirubin'
          },
          {
            'key': 'leucine',
            'text': 'Leucine'
          },
          {
            'key': 'sulfonamides',
            'text': 'Sulfonamides'
          }
        ],
        'tableColumn': '46',
        'fqn': 'medLabUrinalysis.umicroCrystalsObscures'
      },
      {
        'elementKey': 'formTableText302',
        'formIndex': '2',
        'inputType': 'formTableText',
        'fqn': 'medLabUrinalysis.formTableText302'
      },
      {
        'elementKey': 'formTableText303',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Yeast',
        'fqn': 'medLabUrinalysis.formTableText303'
      },
      {
        'elementKey': 'umicroYeast',
        'formIndex': '2',
        'inputType': 'select',
        'options': [
          {
            'key': 'none',
            'text': 'None seen'
          },
          {
            'key': 'present',
            'text': 'Present'
          },
          {
            'key': 'field',
            'text': 'Obscures field'
          }
        ],
        'tableColumn': '47',
        'tableLabel': 'Yeast',
        'fqn': 'medLabUrinalysis.umicroYeast'
      },
      {
        'elementKey': 'formTableText304',
        'formIndex': '2',
        'inputType': 'formTableText',
        'fqn': 'medLabUrinalysis.formTableText304'
      },
      {
        'elementKey': 'formTableText305',
        'formIndex': '2',
        'inputType': 'formTableText',
        'fqn': 'medLabUrinalysis.formTableText305'
      },
      {
        'elementKey': 'formTableText306',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Bacteria',
        'fqn': 'medLabUrinalysis.formTableText306'
      },
      {
        'elementKey': 'umicroBacteria',
        'formIndex': '2',
        'inputType': 'select',
        'options': [
          {
            'key': 'none',
            'text': 'None seen'
          },
          {
            'key': 'present',
            'text': 'Present'
          },
          {
            'key': 'field',
            'text': 'Obscures field'
          }
        ],
        'tableColumn': '48',
        'tableLabel': 'Bacteria',
        'fqn': 'medLabUrinalysis.umicroBacteria'
      },
      {
        'elementKey': 'formTableText307',
        'formIndex': '2',
        'inputType': 'formTableText',
        'fqn': 'medLabUrinalysis.formTableText307'
      },
      {
        'elementKey': 'formTableText308',
        'formIndex': '2',
        'inputType': 'formTableText',
        'fqn': 'medLabUrinalysis.formTableText308'
      },
      {
        'elementKey': 'formTableText309',
        'formIndex': '2',
        'inputType': 'formTableText',
        'label': 'Other',
        'fqn': 'medLabUrinalysis.formTableText309'
      },
      {
        'elementKey': 'umicroOther',
        'formIndex': '2',
        'inputType': 'checkset',
        'options': [
          {
            'key': 'mucous',
            'text': 'Mucous'
          },
          {
            'key': 'sperm',
            'text': 'Sperm'
          },
          {
            'key': 'fibers',
            'text': 'Fibers'
          },
          {
            'key': 'starch',
            'text': 'Starch'
          }
        ],
        'tableColumn': '49',
        'tableLabel': 'Other',
        'fqn': 'medLabUrinalysis.umicroOther'
      },
      {
        'elementKey': 'spacer310',
        'formIndex': '2',
        'inputType': 'spacer',
        'fqn': 'medLabUrinalysis.spacer310'
      },
      {
        'elementKey': 'formTableText311',
        'formIndex': '2',
        'inputType': 'formTableText',
        'fqn': 'medLabUrinalysis.formTableText311'
      },
      {
        'elementKey': 'urnInternal',
        'formIndex': '2',
        'inputType': 'textarea',
        'label': 'Department comments and dilutions',
        'tableColumn': '50',
        'fqn': 'medLabUrinalysis.urnInternal'
      },
      {
        'elementKey': 'urnDiscCE',
        'formIndex': '2',
        'inputType': 'textarea',
        'label': 'Discrepancies chem vs micro',
        'tableColumn': '51',
        'fqn': 'medLabUrinalysis.urnDiscCE'
      },
      {
        'elementKey': 'urnInstructor2',
        'formIndex': '2',
        'inputType': 'textarea',
        'label': 'Instructors\' comment',
        'tableColumn': '52',
        'fqn': 'medLabUrinalysis.urnInstructor2'
      },
      {
        'elementKey': 'tableQcUrinalysis_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'medLabUrinalysis.name'
      },
      {
        'elementKey': 'tableQcUrinalysis_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'tableQcUrinalysis_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'medLabUrinalysis.profession'
      },
      {
        'elementKey': 'tableQcUrinalysis_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'medLabUrinalysis.day'
      },
      {
        'elementKey': 'tableQcUrinalysis_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'medLabUrinalysis.time'
      },
      {
        'elementKey': 'uqcManOrClinitek',
        'formIndex': '1',
        'formCss': 'grid-span-2-columns',
        'inputType': 'radioset',
        'label': 'Type',
        'options': [
          {
            'key': 'Manual',
            'text': 'Manual'
          },
          {
            'key': 'Clinitek',
            'text': 'Clinitek'
          }
        ],
        'passToFunction': '[uqcQcType uqcAbnormalRefRangeGlucose  uqcAbnormalRefRangeBilirubin uqcAbnormalRefRangeKetone uqcAbnormalRefRangeBlood uqcAbnormalRefRangeProtein uqcAbnormalRefRangeLeukocytes]',
        'tableColumn': '2',
        'fqn': 'medLabUrinalysis.uqcManOrClinitek'
      },
      {
        'elementKey': 'uqcMultistixLotNum',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Multistix Lot #',
        'tableColumn': '3',
        'fqn': 'medLabUrinalysis.uqcMultistixLotNum'
      },
      {
        'elementKey': 'uqcMultistixExp',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Multistix Exp date',
        'tableColumn': '4',
        'fqn': 'medLabUrinalysis.uqcMultistixExp'
      },
      {
        'elementKey': 'uqcQcType',
        'calculationType': 'text',
        'formIndex': '1',
        'formCss': 'form-table-span-7 form-table-center-content header-3',
        'inputType': 'calculatedText',
        'options': [
          {
            'key': 'manual',
            'text': 'Manual reading of QC using Multistix 10G'
          },
          {
            'key': 'clinitek',
            'text': 'Clinitek reading of QC using Multistix 10G'
          }
        ],
        'tableColumn': '5',
        'fqn': 'medLabUrinalysis.uqcQcType'
      },
      {
        'elementKey': 'form_label316',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'QC Level',
        'fqn': 'medLabUrinalysis.form_label316'
      },
      {
        'elementKey': 'form_label317',
        'formIndex': '1',
        'formCss': 'form-table-span-3 form-table-center-content',
        'inputType': 'form_label',
        'label': 'Normal QC',
        'fqn': 'medLabUrinalysis.form_label317'
      },
      {
        'elementKey': 'form_label318',
        'formIndex': '1',
        'formCss': 'form-table-span-3 form-table-center-content',
        'inputType': 'form_label',
        'label': 'Abnormal QC',
        'fqn': 'medLabUrinalysis.form_label318'
      },
      {
        'elementKey': 'form_label319',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'QC Lot #',
        'fqn': 'medLabUrinalysis.form_label319'
      },
      {
        'elementKey': 'uqcNormalLotNum',
        'formIndex': '1',
        'formCss': 'form-table-span-3',
        'inputType': 'text',
        'tableColumn': '6',
        'tableLabel': 'Normal Lot #',
        'fqn': 'medLabUrinalysis.uqcNormalLotNum'
      },
      {
        'elementKey': 'uqcAbnormalLotNum',
        'formIndex': '1',
        'formCss': 'form-table-span-3',
        'inputType': 'text',
        'tableColumn': '7',
        'tableLabel': 'Abnormal Lot #',
        'fqn': 'medLabUrinalysis.uqcAbnormalLotNum'
      },
      {
        'elementKey': 'form_label320',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'QC Exp Date',
        'fqn': 'medLabUrinalysis.form_label320'
      },
      {
        'elementKey': 'uqcNormalExpDate',
        'formIndex': '1',
        'formCss': 'form-table-span-3',
        'inputType': 'text',
        'tableColumn': '8',
        'tableLabel': 'QC Exp Date Normal',
        'fqn': 'medLabUrinalysis.uqcNormalExpDate'
      },
      {
        'elementKey': 'uqcAbnormalExpDate',
        'formIndex': '1',
        'formCss': 'form-table-span-3',
        'inputType': 'text',
        'tableColumn': '9',
        'tableLabel': 'QC Exp Date Abnormal',
        'fqn': 'medLabUrinalysis.uqcAbnormalExpDate'
      },
      {
        'elementKey': 'spacer321',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'medLabUrinalysis.spacer321'
      },
      {
        'elementKey': 'form_label322',
        'formIndex': '1',
        'formCss': 'form-table-span-2 form-table-center-content',
        'inputType': 'form_label',
        'label': 'QC results',
        'fqn': 'medLabUrinalysis.form_label322'
      },
      {
        'elementKey': 'form_label323',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'QC range',
        'fqn': 'medLabUrinalysis.form_label323'
      },
      {
        'elementKey': 'form_label324',
        'formIndex': '1',
        'formCss': 'form-table-span-2 form-table-center-content',
        'inputType': 'form_label',
        'label': 'QC results',
        'fqn': 'medLabUrinalysis.form_label324'
      },
      {
        'elementKey': 'form_label325',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'QC Range',
        'fqn': 'medLabUrinalysis.form_label325'
      },
      {
        'elementKey': 'spacer326',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'medLabUrinalysis.spacer326'
      },
      {
        'elementKey': 'form_label327',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'Run 1',
        'fqn': 'medLabUrinalysis.form_label327'
      },
      {
        'elementKey': 'form_label328',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'Repeat',
        'fqn': 'medLabUrinalysis.form_label328'
      },
      {
        'elementKey': 'spacer329',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'medLabUrinalysis.spacer329'
      },
      {
        'elementKey': 'form_label330',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'Run 1',
        'fqn': 'medLabUrinalysis.form_label330'
      },
      {
        'elementKey': 'form_label331',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'Repeat',
        'fqn': 'medLabUrinalysis.form_label331'
      },
      {
        'elementKey': 'spacer332',
        'formIndex': '1',
        'inputType': 'spacer',
        'fqn': 'medLabUrinalysis.spacer332'
      },
      {
        'elementKey': 'form_label333',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'Glucose',
        'fqn': 'medLabUrinalysis.form_label333'
      },
      {
        'elementKey': 'uqcNormalRunGlucose',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '10',
        'tableLabel': 'Normal Glucose',
        'fqn': 'medLabUrinalysis.uqcNormalRunGlucose'
      },
      {
        'elementKey': 'uqcNormalRepeatGlucose',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '11',
        'tableLabel': 'Repeat',
        'fqn': 'medLabUrinalysis.uqcNormalRepeatGlucose'
      },
      {
        'elementKey': 'form_label334',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'Negative',
        'fqn': 'medLabUrinalysis.form_label334'
      },
      {
        'elementKey': 'uqcAbnormalRunGlucose',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '12',
        'tableLabel': 'Abnormal Glucose',
        'fqn': 'medLabUrinalysis.uqcAbnormalRunGlucose'
      },
      {
        'elementKey': 'uqcAbnormalRepeatGlucose',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '13',
        'tableLabel': 'Repeat',
        'fqn': 'medLabUrinalysis.uqcAbnormalRepeatGlucose'
      },
      {
        'elementKey': 'uqcAbnormalRefRangeGlucose',
        'calculationType': 'text',
        'formIndex': '1',
        'inputType': 'calculatedText',
        'options': [
          {
            'key': 'manual',
            'text': '>= 5.5 mmol/L'
          },
          {
            'key': 'clinitek',
            'text': '>= 3 mmol/L'
          }
        ],
        'fqn': 'medLabUrinalysis.uqcAbnormalRefRangeGlucose'
      },
      {
        'elementKey': 'form_label335',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'Bilirubin',
        'fqn': 'medLabUrinalysis.form_label335'
      },
      {
        'elementKey': 'uqcNormalRunBilirubin',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '14',
        'tableLabel': 'Normal Bilirubin',
        'fqn': 'medLabUrinalysis.uqcNormalRunBilirubin'
      },
      {
        'elementKey': 'uqcNormalRepeatBilirubin',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '15',
        'tableLabel': 'Repeat',
        'fqn': 'medLabUrinalysis.uqcNormalRepeatBilirubin'
      },
      {
        'elementKey': 'form_label336',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'Negative',
        'fqn': 'medLabUrinalysis.form_label336'
      },
      {
        'elementKey': 'uqcAbnormalRunBilirubin',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '16',
        'tableLabel': 'Abnormal Bilirubin',
        'fqn': 'medLabUrinalysis.uqcAbnormalRunBilirubin'
      },
      {
        'elementKey': 'uqcAbnormalRepeatBilirubin',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '17',
        'tableLabel': 'Repeat',
        'fqn': 'medLabUrinalysis.uqcAbnormalRepeatBilirubin'
      },
      {
        'elementKey': 'uqcAbnormalRefRangeBilirubin',
        'calculationType': 'text',
        'formIndex': '1',
        'inputType': 'calculatedText',
        'options': [
          {
            'key': 'manual',
            'text': 'Small to Large'
          },
          {
            'key': 'clinitek',
            'text': '>= Small'
          }
        ],
        'fqn': 'medLabUrinalysis.uqcAbnormalRefRangeBilirubin'
      },
      {
        'elementKey': 'form_label337',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'Ketone',
        'fqn': 'medLabUrinalysis.form_label337'
      },
      {
        'elementKey': 'uqcNormalRunKetone',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '18',
        'tableLabel': 'Normal Ketone',
        'fqn': 'medLabUrinalysis.uqcNormalRunKetone'
      },
      {
        'elementKey': 'uqcNormalRepeatKetone',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '19',
        'tableLabel': 'Repeat',
        'fqn': 'medLabUrinalysis.uqcNormalRepeatKetone'
      },
      {
        'elementKey': 'form_label338',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'Negative',
        'fqn': 'medLabUrinalysis.form_label338'
      },
      {
        'elementKey': 'uqcAbnormalRunKetone',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '20',
        'tableLabel': 'Abnormal Ketone',
        'fqn': 'medLabUrinalysis.uqcAbnormalRunKetone'
      },
      {
        'elementKey': 'uqcAbnormalRepeatKetone',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '21',
        'tableLabel': 'Repeat',
        'fqn': 'medLabUrinalysis.uqcAbnormalRepeatKetone'
      },
      {
        'elementKey': 'uqcAbnormalRefRangeKetone',
        'calculationType': 'text',
        'formIndex': '1',
        'inputType': 'calculatedText',
        'options': [
          {
            'key': 'manual',
            'text': '>= 0.5 mmol/L'
          },
          {
            'key': 'clinitek',
            'text': '>= trace'
          }
        ],
        'fqn': 'medLabUrinalysis.uqcAbnormalRefRangeKetone'
      },
      {
        'elementKey': 'form_label339',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'Specific Gravity',
        'fqn': 'medLabUrinalysis.form_label339'
      },
      {
        'elementKey': 'uqcNormalRunSpecific Gravity',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '22',
        'tableLabel': 'Normal Specific Gravity',
        'fqn': 'medLabUrinalysis.uqcNormalRunSpecific Gravity'
      },
      {
        'elementKey': 'uqcNormalRepeatSpecific Gravity',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '23',
        'tableLabel': 'Repeat',
        'fqn': 'medLabUrinalysis.uqcNormalRepeatSpecific Gravity'
      },
      {
        'elementKey': 'form_label340',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': '1.005 - 1.030',
        'fqn': 'medLabUrinalysis.form_label340'
      },
      {
        'elementKey': 'uqcAbnormalRunSpecific Gravity',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '24',
        'tableLabel': 'Abnormal Specific Gravity',
        'fqn': 'medLabUrinalysis.uqcAbnormalRunSpecific Gravity'
      },
      {
        'elementKey': 'uqcAbnormalRepeatSpecific Gravity',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '25',
        'tableLabel': 'Repeat',
        'fqn': 'medLabUrinalysis.uqcAbnormalRepeatSpecific Gravity'
      },
      {
        'elementKey': 'form_label341',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': '1.005 - 1.030',
        'fqn': 'medLabUrinalysis.form_label341'
      },
      {
        'elementKey': 'form_label342',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'Blood',
        'fqn': 'medLabUrinalysis.form_label342'
      },
      {
        'elementKey': 'uqcNormalRunBlood',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '26',
        'tableLabel': 'Normal Blood',
        'fqn': 'medLabUrinalysis.uqcNormalRunBlood'
      },
      {
        'elementKey': 'uqcNormalRepeatBlood',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '27',
        'tableLabel': 'Repeat',
        'fqn': 'medLabUrinalysis.uqcNormalRepeatBlood'
      },
      {
        'elementKey': 'form_label343',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'Negative',
        'fqn': 'medLabUrinalysis.form_label343'
      },
      {
        'elementKey': 'uqcAbnormalRunBlood',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '28',
        'tableLabel': 'Abnormal Blood',
        'fqn': 'medLabUrinalysis.uqcAbnormalRunBlood'
      },
      {
        'elementKey': 'uqcAbnormalRepeatBlood',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '29',
        'tableLabel': 'Repeat',
        'fqn': 'medLabUrinalysis.uqcAbnormalRepeatBlood'
      },
      {
        'elementKey': 'uqcAbnormalRefRangeBlood',
        'calculationType': 'text',
        'formIndex': '1',
        'inputType': 'calculatedText',
        'options': [
          {
            'key': 'manual',
            'text': '>= Small'
          },
          {
            'key': 'clinitek',
            'text': '>= 25 Ery/μL'
          }
        ],
        'fqn': 'medLabUrinalysis.uqcAbnormalRefRangeBlood'
      },
      {
        'elementKey': 'form_label344',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'pH',
        'fqn': 'medLabUrinalysis.form_label344'
      },
      {
        'elementKey': 'uqcNormalRunpH',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '30',
        'tableLabel': 'Normal pH',
        'fqn': 'medLabUrinalysis.uqcNormalRunpH'
      },
      {
        'elementKey': 'uqcNormalRepeatpH',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '31',
        'tableLabel': 'Repeat',
        'fqn': 'medLabUrinalysis.uqcNormalRepeatpH'
      },
      {
        'elementKey': 'form_label345',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': '5.0 - 8.0',
        'fqn': 'medLabUrinalysis.form_label345'
      },
      {
        'elementKey': 'uqcAbnormalRunpH',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '32',
        'tableLabel': 'Abnormal pH',
        'fqn': 'medLabUrinalysis.uqcAbnormalRunpH'
      },
      {
        'elementKey': 'uqcAbnormalRepeatpH',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '33',
        'tableLabel': 'Repeat',
        'fqn': 'medLabUrinalysis.uqcAbnormalRepeatpH'
      },
      {
        'elementKey': 'form_label346',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': '6.0 - 8.5',
        'fqn': 'medLabUrinalysis.form_label346'
      },
      {
        'elementKey': 'form_label347',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'Protein',
        'fqn': 'medLabUrinalysis.form_label347'
      },
      {
        'elementKey': 'uqcNormalRunProtein',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '34',
        'tableLabel': 'Normal Protein',
        'fqn': 'medLabUrinalysis.uqcNormalRunProtein'
      },
      {
        'elementKey': 'uqcNormalRepeatProtein',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '35',
        'tableLabel': 'Repeat',
        'fqn': 'medLabUrinalysis.uqcNormalRepeatProtein'
      },
      {
        'elementKey': 'form_label348',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'Negative',
        'fqn': 'medLabUrinalysis.form_label348'
      },
      {
        'elementKey': 'uqcAbnormalRunProtein',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '36',
        'tableLabel': 'Abnormal Protein',
        'fqn': 'medLabUrinalysis.uqcAbnormalRunProtein'
      },
      {
        'elementKey': 'uqcAbnormalRepeatProtein',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '37',
        'tableLabel': 'Repeat',
        'fqn': 'medLabUrinalysis.uqcAbnormalRepeatProtein'
      },
      {
        'elementKey': 'uqcAbnormalRefRangeProtein',
        'calculationType': 'text',
        'formIndex': '1',
        'inputType': 'calculatedText',
        'options': [
          {
            'key': 'manual',
            'text': '>= 0.3 g/L'
          },
          {
            'key': 'clinitek',
            'text': '>= 1.0 g/L'
          }
        ],
        'fqn': 'medLabUrinalysis.uqcAbnormalRefRangeProtein'
      },
      {
        'elementKey': 'form_label349',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'Urobilinogen',
        'fqn': 'medLabUrinalysis.form_label349'
      },
      {
        'elementKey': 'uqcNormalRunUrobilinogen',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '38',
        'tableLabel': 'Normal Urobilinogen',
        'fqn': 'medLabUrinalysis.uqcNormalRunUrobilinogen'
      },
      {
        'elementKey': 'uqcNormalRepeatUrobilinogen',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '39',
        'tableLabel': 'Repeat',
        'fqn': 'medLabUrinalysis.uqcNormalRepeatUrobilinogen'
      },
      {
        'elementKey': 'form_label350',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': '<= 3.2 μmol/L',
        'fqn': 'medLabUrinalysis.form_label350'
      },
      {
        'elementKey': 'uqcAbnormalRunUrobilinogen',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '40',
        'tableLabel': 'Abnormal Urobilinogen',
        'fqn': 'medLabUrinalysis.uqcAbnormalRunUrobilinogen'
      },
      {
        'elementKey': 'uqcAbnormalRepeatUrobilinogen',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '41',
        'tableLabel': 'Repeat',
        'fqn': 'medLabUrinalysis.uqcAbnormalRepeatUrobilinogen'
      },
      {
        'elementKey': 'form_label351',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': '>= 16 μmol/L',
        'fqn': 'medLabUrinalysis.form_label351'
      },
      {
        'elementKey': 'form_label352',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'Nitrite',
        'fqn': 'medLabUrinalysis.form_label352'
      },
      {
        'elementKey': 'uqcNormalRunNitrite',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '42',
        'tableLabel': 'Normal Nitrite',
        'fqn': 'medLabUrinalysis.uqcNormalRunNitrite'
      },
      {
        'elementKey': 'uqcNormalRepeatNitrite',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '43',
        'tableLabel': 'Repeat',
        'fqn': 'medLabUrinalysis.uqcNormalRepeatNitrite'
      },
      {
        'elementKey': 'form_label353',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'Negative',
        'fqn': 'medLabUrinalysis.form_label353'
      },
      {
        'elementKey': 'uqcAbnormalRunNitrite',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '44',
        'tableLabel': 'Abnormal Nitrite',
        'fqn': 'medLabUrinalysis.uqcAbnormalRunNitrite'
      },
      {
        'elementKey': 'uqcAbnormalRepeatNitrite',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '45',
        'tableLabel': 'Repeat',
        'fqn': 'medLabUrinalysis.uqcAbnormalRepeatNitrite'
      },
      {
        'elementKey': 'form_label354',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'Positive',
        'fqn': 'medLabUrinalysis.form_label354'
      },
      {
        'elementKey': 'form_label355',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'Leukocytes',
        'fqn': 'medLabUrinalysis.form_label355'
      },
      {
        'elementKey': 'uqcNormalRunLeukocytes',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '46',
        'tableLabel': 'Normal Leukocytes',
        'fqn': 'medLabUrinalysis.uqcNormalRunLeukocytes'
      },
      {
        'elementKey': 'uqcNormalRepeatLeukocytes',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '47',
        'tableLabel': 'Repeat',
        'fqn': 'medLabUrinalysis.uqcNormalRepeatLeukocytes'
      },
      {
        'elementKey': 'form_label356',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'Negative',
        'fqn': 'medLabUrinalysis.form_label356'
      },
      {
        'elementKey': 'uqcAbnormalRunLeukocytes',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '48',
        'tableLabel': 'Abnormal Leukocytes',
        'fqn': 'medLabUrinalysis.uqcAbnormalRunLeukocytes'
      },
      {
        'elementKey': 'uqcAbnormalRepeatLeukocytes',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '49',
        'tableLabel': 'Repeat',
        'fqn': 'medLabUrinalysis.uqcAbnormalRepeatLeukocytes'
      },
      {
        'elementKey': 'uqcAbnormalRefRangeLeukocytes',
        'calculationType': 'text',
        'formIndex': '1',
        'inputType': 'calculatedText',
        'options': [
          {
            'key': 'manual',
            'text': '>= Small'
          },
          {
            'key': 'clinitek',
            'text': '>= 70 Leu//μL'
          }
        ],
        'fqn': 'medLabUrinalysis.uqcAbnormalRefRangeLeukocytes'
      },
      {
        'elementKey': 'uqcPerformedBy',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Performed by',
        'tableColumn': '50',
        'fqn': 'medLabUrinalysis.uqcPerformedBy'
      },
      {
        'elementKey': 'form_label358',
        'formIndex': '1',
        'inputType': 'form_label',
        'fqn': 'medLabUrinalysis.form_label358'
      },
      {
        'elementKey': 'uqcSomeQcUnacceptable',
        'formIndex': '1',
        'formCss': 'uqcSomeQcUnacceptable',
        'inputType': 'radioset',
        'label': 'Are any QC outside of acceptable limits?',
        'options': [
          {
            'key': 'Yes',
            'text': 'Yes'
          },
          {
            'key': 'No',
            'text': 'No'
          }
        ],
        'tableColumn': '51',
        'tableLabel': 'Some QC pending',
        'fqn': 'medLabUrinalysis.uqcSomeQcUnacceptable'
      },
      {
        'elementKey': 'form_label360',
        'formIndex': '1',
        'formCss': 'grid-span-2-columns',
        'inputType': 'form_label',
        'label': 'Reporting “pending” to patient care staff indicates that results are unavailable and awaiting validation by the technologist before results are released.',
        'fqn': 'medLabUrinalysis.form_label360'
      },
      {
        'elementKey': 'form_label361',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'Pending analyte',
        'fqn': 'medLabUrinalysis.form_label361'
      },
      {
        'elementKey': 'form_label362',
        'formIndex': '1',
        'inputType': 'form_label',
        'label': 'Pending result (include units)',
        'fqn': 'medLabUrinalysis.form_label362'
      },
      {
        'elementKey': 'uqcPendAnal_1',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '52',
        'fqn': 'medLabUrinalysis.uqcPendAnal_1'
      },
      {
        'elementKey': 'uqcPendResult_1',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '53',
        'fqn': 'medLabUrinalysis.uqcPendResult_1'
      },
      {
        'elementKey': 'uqcPendAnal_2',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '54',
        'fqn': 'medLabUrinalysis.uqcPendAnal_2'
      },
      {
        'elementKey': 'uqcPendResult_2',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '55',
        'fqn': 'medLabUrinalysis.uqcPendResult_2'
      },
      {
        'elementKey': 'uqcPendAnal_3',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '56',
        'fqn': 'medLabUrinalysis.uqcPendAnal_3'
      },
      {
        'elementKey': 'uqcPendResult_3',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '57',
        'fqn': 'medLabUrinalysis.uqcPendResult_3'
      },
      {
        'elementKey': 'uqcPendAnal_4',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '58',
        'fqn': 'medLabUrinalysis.uqcPendAnal_4'
      },
      {
        'elementKey': 'uqcPendResult_4',
        'formIndex': '1',
        'inputType': 'text',
        'tableColumn': '59',
        'fqn': 'medLabUrinalysis.uqcPendResult_4'
      }
    ],
    'pageElements': {
      'tableQcUrinalysis': {
        'elementKey': 'tableQcUrinalysis',
        'pageElementIndex': '1',
        'pageKey': 'medLabUrinalysis',
        'tableKey': 'tableQcUrinalysis',
        'isTable': true,
        'label': 'Urinalysis QC',
        'addButtonText': 'Create a urinalysis QC report',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'tableQcUrinalysis_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'tableQcUrinalysis_name',
              'tableQcUrinalysis_profession',
              'tableQcUrinalysis_day',
              'tableQcUrinalysis_time'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'uqcManOrClinitek'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'uqcMultistixLotNum'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'uqcMultistixExp'
            ]
          },
          {
            'ehr_list_index': '5',
            'items': [
              'uqcQcType'
            ]
          },
          {
            'label': 'Normal Lot #',
            'ehr_list_index': '6',
            'items': [
              'uqcNormalLotNum'
            ]
          },
          {
            'label': 'Abnormal Lot #',
            'ehr_list_index': '7',
            'items': [
              'uqcAbnormalLotNum'
            ]
          },
          {
            'label': 'QC Exp Date Normal',
            'ehr_list_index': '8',
            'items': [
              'uqcNormalExpDate'
            ]
          },
          {
            'label': 'QC Exp Date Abnormal',
            'ehr_list_index': '9',
            'items': [
              'uqcAbnormalExpDate'
            ]
          },
          {
            'label': 'Normal Glucose',
            'ehr_list_index': '10',
            'items': [
              'uqcNormalRunGlucose'
            ]
          },
          {
            'label': 'Repeat',
            'ehr_list_index': '11',
            'items': [
              'uqcNormalRepeatGlucose'
            ]
          },
          {
            'label': 'Abnormal Glucose',
            'ehr_list_index': '12',
            'items': [
              'uqcAbnormalRunGlucose'
            ]
          },
          {
            'label': 'Repeat',
            'ehr_list_index': '13',
            'items': [
              'uqcAbnormalRepeatGlucose'
            ]
          },
          {
            'label': 'Normal Bilirubin',
            'ehr_list_index': '14',
            'items': [
              'uqcNormalRunBilirubin'
            ]
          },
          {
            'label': 'Repeat',
            'ehr_list_index': '15',
            'items': [
              'uqcNormalRepeatBilirubin'
            ]
          },
          {
            'label': 'Abnormal Bilirubin',
            'ehr_list_index': '16',
            'items': [
              'uqcAbnormalRunBilirubin'
            ]
          },
          {
            'label': 'Repeat',
            'ehr_list_index': '17',
            'items': [
              'uqcAbnormalRepeatBilirubin'
            ]
          },
          {
            'label': 'Normal Ketone',
            'ehr_list_index': '18',
            'items': [
              'uqcNormalRunKetone'
            ]
          },
          {
            'label': 'Repeat',
            'ehr_list_index': '19',
            'items': [
              'uqcNormalRepeatKetone'
            ]
          },
          {
            'label': 'Abnormal Ketone',
            'ehr_list_index': '20',
            'items': [
              'uqcAbnormalRunKetone'
            ]
          },
          {
            'label': 'Repeat',
            'ehr_list_index': '21',
            'items': [
              'uqcAbnormalRepeatKetone'
            ]
          },
          {
            'label': 'Normal Specific Gravity',
            'ehr_list_index': '22',
            'items': [
              'uqcNormalRunSpecific Gravity'
            ]
          },
          {
            'label': 'Repeat',
            'ehr_list_index': '23',
            'items': [
              'uqcNormalRepeatSpecific Gravity'
            ]
          },
          {
            'label': 'Abnormal Specific Gravity',
            'ehr_list_index': '24',
            'items': [
              'uqcAbnormalRunSpecific Gravity'
            ]
          },
          {
            'label': 'Repeat',
            'ehr_list_index': '25',
            'items': [
              'uqcAbnormalRepeatSpecific Gravity'
            ]
          },
          {
            'label': 'Normal Blood',
            'ehr_list_index': '26',
            'items': [
              'uqcNormalRunBlood'
            ]
          },
          {
            'label': 'Repeat',
            'ehr_list_index': '27',
            'items': [
              'uqcNormalRepeatBlood'
            ]
          },
          {
            'label': 'Abnormal Blood',
            'ehr_list_index': '28',
            'items': [
              'uqcAbnormalRunBlood'
            ]
          },
          {
            'label': 'Repeat',
            'ehr_list_index': '29',
            'items': [
              'uqcAbnormalRepeatBlood'
            ]
          },
          {
            'label': 'Normal pH',
            'ehr_list_index': '30',
            'items': [
              'uqcNormalRunpH'
            ]
          },
          {
            'label': 'Repeat',
            'ehr_list_index': '31',
            'items': [
              'uqcNormalRepeatpH'
            ]
          },
          {
            'label': 'Abnormal pH',
            'ehr_list_index': '32',
            'items': [
              'uqcAbnormalRunpH'
            ]
          },
          {
            'label': 'Repeat',
            'ehr_list_index': '33',
            'items': [
              'uqcAbnormalRepeatpH'
            ]
          },
          {
            'label': 'Normal Protein',
            'ehr_list_index': '34',
            'items': [
              'uqcNormalRunProtein'
            ]
          },
          {
            'label': 'Repeat',
            'ehr_list_index': '35',
            'items': [
              'uqcNormalRepeatProtein'
            ]
          },
          {
            'label': 'Abnormal Protein',
            'ehr_list_index': '36',
            'items': [
              'uqcAbnormalRunProtein'
            ]
          },
          {
            'label': 'Repeat',
            'ehr_list_index': '37',
            'items': [
              'uqcAbnormalRepeatProtein'
            ]
          },
          {
            'label': 'Normal Urobilinogen',
            'ehr_list_index': '38',
            'items': [
              'uqcNormalRunUrobilinogen'
            ]
          },
          {
            'label': 'Repeat',
            'ehr_list_index': '39',
            'items': [
              'uqcNormalRepeatUrobilinogen'
            ]
          },
          {
            'label': 'Abnormal Urobilinogen',
            'ehr_list_index': '40',
            'items': [
              'uqcAbnormalRunUrobilinogen'
            ]
          },
          {
            'label': 'Repeat',
            'ehr_list_index': '41',
            'items': [
              'uqcAbnormalRepeatUrobilinogen'
            ]
          },
          {
            'label': 'Normal Nitrite',
            'ehr_list_index': '42',
            'items': [
              'uqcNormalRunNitrite'
            ]
          },
          {
            'label': 'Repeat',
            'ehr_list_index': '43',
            'items': [
              'uqcNormalRepeatNitrite'
            ]
          },
          {
            'label': 'Abnormal Nitrite',
            'ehr_list_index': '44',
            'items': [
              'uqcAbnormalRunNitrite'
            ]
          },
          {
            'label': 'Repeat',
            'ehr_list_index': '45',
            'items': [
              'uqcAbnormalRepeatNitrite'
            ]
          },
          {
            'label': 'Normal Leukocytes',
            'ehr_list_index': '46',
            'items': [
              'uqcNormalRunLeukocytes'
            ]
          },
          {
            'label': 'Repeat',
            'ehr_list_index': '47',
            'items': [
              'uqcNormalRepeatLeukocytes'
            ]
          },
          {
            'label': 'Abnormal Leukocytes',
            'ehr_list_index': '48',
            'items': [
              'uqcAbnormalRunLeukocytes'
            ]
          },
          {
            'label': 'Repeat',
            'ehr_list_index': '49',
            'items': [
              'uqcAbnormalRepeatLeukocytes'
            ]
          },
          {
            'ehr_list_index': '50',
            'items': [
              'uqcPerformedBy'
            ]
          },
          {
            'label': 'Some QC pending',
            'ehr_list_index': '51',
            'items': [
              'uqcSomeQcUnacceptable'
            ]
          },
          {
            'ehr_list_index': '52',
            'items': [
              'uqcPendAnal_1'
            ]
          },
          {
            'ehr_list_index': '53',
            'items': [
              'uqcPendResult_1'
            ]
          },
          {
            'ehr_list_index': '54',
            'items': [
              'uqcPendAnal_2'
            ]
          },
          {
            'ehr_list_index': '55',
            'items': [
              'uqcPendResult_2'
            ]
          },
          {
            'ehr_list_index': '56',
            'items': [
              'uqcPendAnal_3'
            ]
          },
          {
            'ehr_list_index': '57',
            'items': [
              'uqcPendResult_3'
            ]
          },
          {
            'ehr_list_index': '58',
            'items': [
              'uqcPendAnal_4'
            ]
          },
          {
            'ehr_list_index': '59',
            'items': [
              'uqcPendResult_4'
            ]
          }
        ],
        'form': {
          'elementKey': 'tableQcUrinalysis',
          'label': 'Urinalysis QC',
          'addButtonText': 'Create a urinalysis QC report',
          'formKey': 'tableQcUrinalysis',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group313',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'tableQcUrinalysis_name',
                'tableQcUrinalysis_profession',
                'tableQcUrinalysis_day',
                'tableQcUrinalysis_time'
              ]
            },
            {
              'elementKey': 'ehr_group314',
              'formCss': 'grid-left-to-right-2',
              'gIndex': '2',
              'gChildren': [
                'uqcManOrClinitek',
                'uqcMultistixLotNum',
                'uqcMultistixExp'
              ]
            },
            {
              'elementKey': 'ehr_group315',
              'formCss': 'med-lab-urin-qc-table form-table-group',
              'gIndex': '3',
              'gChildren': [
                'uqcQcType',
                'form_label316',
                'form_label317',
                'form_label318',
                'form_label319',
                'uqcNormalLotNum',
                'uqcAbnormalLotNum',
                'form_label320',
                'uqcNormalExpDate',
                'uqcAbnormalExpDate',
                'spacer321',
                'form_label322',
                'form_label323',
                'form_label324',
                'form_label325',
                'spacer326',
                'form_label327',
                'form_label328',
                'spacer329',
                'form_label330',
                'form_label331',
                'spacer332',
                'form_label333',
                'uqcNormalRunGlucose',
                'uqcNormalRepeatGlucose',
                'form_label334',
                'uqcAbnormalRunGlucose',
                'uqcAbnormalRepeatGlucose',
                'uqcAbnormalRefRangeGlucose',
                'form_label335',
                'uqcNormalRunBilirubin',
                'uqcNormalRepeatBilirubin',
                'form_label336',
                'uqcAbnormalRunBilirubin',
                'uqcAbnormalRepeatBilirubin',
                'uqcAbnormalRefRangeBilirubin',
                'form_label337',
                'uqcNormalRunKetone',
                'uqcNormalRepeatKetone',
                'form_label338',
                'uqcAbnormalRunKetone',
                'uqcAbnormalRepeatKetone',
                'uqcAbnormalRefRangeKetone',
                'form_label339',
                'uqcNormalRunSpecific Gravity',
                'uqcNormalRepeatSpecific Gravity',
                'form_label340',
                'uqcAbnormalRunSpecific Gravity',
                'uqcAbnormalRepeatSpecific Gravity',
                'form_label341',
                'form_label342',
                'uqcNormalRunBlood',
                'uqcNormalRepeatBlood',
                'form_label343',
                'uqcAbnormalRunBlood',
                'uqcAbnormalRepeatBlood',
                'uqcAbnormalRefRangeBlood',
                'form_label344',
                'uqcNormalRunpH',
                'uqcNormalRepeatpH',
                'form_label345',
                'uqcAbnormalRunpH',
                'uqcAbnormalRepeatpH',
                'form_label346',
                'form_label347',
                'uqcNormalRunProtein',
                'uqcNormalRepeatProtein',
                'form_label348',
                'uqcAbnormalRunProtein',
                'uqcAbnormalRepeatProtein',
                'uqcAbnormalRefRangeProtein',
                'form_label349',
                'uqcNormalRunUrobilinogen',
                'uqcNormalRepeatUrobilinogen',
                'form_label350',
                'uqcAbnormalRunUrobilinogen',
                'uqcAbnormalRepeatUrobilinogen',
                'form_label351',
                'form_label352',
                'uqcNormalRunNitrite',
                'uqcNormalRepeatNitrite',
                'form_label353',
                'uqcAbnormalRunNitrite',
                'uqcAbnormalRepeatNitrite',
                'form_label354',
                'form_label355',
                'uqcNormalRunLeukocytes',
                'uqcNormalRepeatLeukocytes',
                'form_label356',
                'uqcAbnormalRunLeukocytes',
                'uqcAbnormalRepeatLeukocytes',
                'uqcAbnormalRefRangeLeukocytes'
              ]
            },
            {
              'elementKey': 'ehr_group357',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '4',
              'gChildren': [
                'uqcPerformedBy',
                'form_label358',
                'uqcSomeQcUnacceptable'
              ]
            },
            {
              'elementKey': 'ehr_group359',
              'formCss': 'med-lab-urin-qc-pending-table form-table-group',
              'gIndex': '5',
              'gChildren': [
                'form_label360',
                'form_label361',
                'form_label362',
                'uqcPendAnal_1',
                'uqcPendResult_1',
                'uqcPendAnal_2',
                'uqcPendResult_2',
                'uqcPendAnal_3',
                'uqcPendResult_3',
                'uqcPendAnal_4',
                'uqcPendResult_4'
              ]
            }
          ],
          'ehr_data': {
            'tableQcUrinalysis_name': '',
            'tableQcUrinalysis_profession': '',
            'tableQcUrinalysis_day': '',
            'tableQcUrinalysis_time': '',
            'uqcManOrClinitek': '',
            'uqcMultistixLotNum': '',
            'uqcMultistixExp': '',
            'uqcQcType': '',
            'uqcNormalLotNum': '',
            'uqcAbnormalLotNum': '',
            'uqcNormalExpDate': '',
            'uqcAbnormalExpDate': '',
            'uqcNormalRunGlucose': '',
            'uqcNormalRepeatGlucose': '',
            'uqcAbnormalRunGlucose': '',
            'uqcAbnormalRepeatGlucose': '',
            'uqcAbnormalRefRangeGlucose': '',
            'uqcNormalRunBilirubin': '',
            'uqcNormalRepeatBilirubin': '',
            'uqcAbnormalRunBilirubin': '',
            'uqcAbnormalRepeatBilirubin': '',
            'uqcAbnormalRefRangeBilirubin': '',
            'uqcNormalRunKetone': '',
            'uqcNormalRepeatKetone': '',
            'uqcAbnormalRunKetone': '',
            'uqcAbnormalRepeatKetone': '',
            'uqcAbnormalRefRangeKetone': '',
            'uqcNormalRunSpecific Gravity': '',
            'uqcNormalRepeatSpecific Gravity': '',
            'uqcAbnormalRunSpecific Gravity': '',
            'uqcAbnormalRepeatSpecific Gravity': '',
            'uqcNormalRunBlood': '',
            'uqcNormalRepeatBlood': '',
            'uqcAbnormalRunBlood': '',
            'uqcAbnormalRepeatBlood': '',
            'uqcAbnormalRefRangeBlood': '',
            'uqcNormalRunpH': '',
            'uqcNormalRepeatpH': '',
            'uqcAbnormalRunpH': '',
            'uqcAbnormalRepeatpH': '',
            'uqcNormalRunProtein': '',
            'uqcNormalRepeatProtein': '',
            'uqcAbnormalRunProtein': '',
            'uqcAbnormalRepeatProtein': '',
            'uqcAbnormalRefRangeProtein': '',
            'uqcNormalRunUrobilinogen': '',
            'uqcNormalRepeatUrobilinogen': '',
            'uqcAbnormalRunUrobilinogen': '',
            'uqcAbnormalRepeatUrobilinogen': '',
            'uqcNormalRunNitrite': '',
            'uqcNormalRepeatNitrite': '',
            'uqcAbnormalRunNitrite': '',
            'uqcAbnormalRepeatNitrite': '',
            'uqcNormalRunLeukocytes': '',
            'uqcNormalRepeatLeukocytes': '',
            'uqcAbnormalRunLeukocytes': '',
            'uqcAbnormalRepeatLeukocytes': '',
            'uqcAbnormalRefRangeLeukocytes': '',
            'uqcPerformedBy': '',
            'uqcSomeQcUnacceptable': '',
            'uqcPendAnal_1': '',
            'uqcPendResult_1': '',
            'uqcPendAnal_2': '',
            'uqcPendResult_2': '',
            'uqcPendAnal_3': '',
            'uqcPendResult_3': '',
            'uqcPendAnal_4': '',
            'uqcPendResult_4': ''
          }
        },
        'tableChildren': [
          'tableQcUrinalysis_id',
          'tableQcUrinalysis_name',
          'tableQcUrinalysis_profession',
          'tableQcUrinalysis_day',
          'tableQcUrinalysis_time',
          'uqcManOrClinitek',
          'uqcMultistixLotNum',
          'uqcMultistixExp',
          'uqcQcType',
          'uqcNormalLotNum',
          'uqcAbnormalLotNum',
          'uqcNormalExpDate',
          'uqcAbnormalExpDate',
          'uqcNormalRunGlucose',
          'uqcNormalRepeatGlucose',
          'uqcAbnormalRunGlucose',
          'uqcAbnormalRepeatGlucose',
          'uqcNormalRunBilirubin',
          'uqcNormalRepeatBilirubin',
          'uqcAbnormalRunBilirubin',
          'uqcAbnormalRepeatBilirubin',
          'uqcNormalRunKetone',
          'uqcNormalRepeatKetone',
          'uqcAbnormalRunKetone',
          'uqcAbnormalRepeatKetone',
          'uqcNormalRunSpecific Gravity',
          'uqcNormalRepeatSpecific Gravity',
          'uqcAbnormalRunSpecific Gravity',
          'uqcAbnormalRepeatSpecific Gravity',
          'uqcNormalRunBlood',
          'uqcNormalRepeatBlood',
          'uqcAbnormalRunBlood',
          'uqcAbnormalRepeatBlood',
          'uqcNormalRunpH',
          'uqcNormalRepeatpH',
          'uqcAbnormalRunpH',
          'uqcAbnormalRepeatpH',
          'uqcNormalRunProtein',
          'uqcNormalRepeatProtein',
          'uqcAbnormalRunProtein',
          'uqcAbnormalRepeatProtein',
          'uqcNormalRunUrobilinogen',
          'uqcNormalRepeatUrobilinogen',
          'uqcAbnormalRunUrobilinogen',
          'uqcAbnormalRepeatUrobilinogen',
          'uqcNormalRunNitrite',
          'uqcNormalRepeatNitrite',
          'uqcAbnormalRunNitrite',
          'uqcAbnormalRepeatNitrite',
          'uqcNormalRunLeukocytes',
          'uqcNormalRepeatLeukocytes',
          'uqcAbnormalRunLeukocytes',
          'uqcAbnormalRepeatLeukocytes',
          'uqcPerformedBy',
          'uqcSomeQcUnacceptable',
          'uqcPendAnal_1',
          'uqcPendResult_1',
          'uqcPendAnal_2',
          'uqcPendResult_2',
          'uqcPendAnal_3',
          'uqcPendResult_3',
          'uqcPendAnal_4',
          'uqcPendResult_4'
        ],
        'hasRecHeader': true
      },
      'tableUrinalysis': {
        'elementKey': 'tableUrinalysis',
        'pageElementIndex': '2',
        'pageKey': 'medLabUrinalysis',
        'tableKey': 'tableUrinalysis',
        'isTable': true,
        'label': 'Urinalysis',
        'addButtonText': 'Create a urinalysis report',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'tableUrinalysis_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'tableUrinalysis_name',
              'tableUrinalysis_profession',
              'tableUrinalysis_day',
              'tableUrinalysis_time'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'urinAccession'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'urinCollDay'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'urinCollTime'
            ]
          },
          {
            'ehr_list_index': '5',
            'items': [
              'urinOrderPhys',
              'urinTransparency'
            ]
          },
          {
            'ehr_list_index': '6',
            'items': [
              'urinColour'
            ]
          },
          {
            'label': 'Manual Glucose',
            'ehr_list_index': '7',
            'items': [
              'uchemManGlucose'
            ]
          },
          {
            'label': 'Auto Glucose',
            'ehr_list_index': '8',
            'items': [
              'uchemAutoGlucose'
            ]
          },
          {
            'label': 'Manual Bilirubin',
            'ehr_list_index': '9',
            'items': [
              'uchemManBilirubin'
            ]
          },
          {
            'label': 'Auto Bilirubin',
            'ehr_list_index': '10',
            'items': [
              'uchemAutoBilirubin'
            ]
          },
          {
            'label': 'Manual Ketone',
            'ehr_list_index': '11',
            'items': [
              'uchemManKetone'
            ]
          },
          {
            'label': 'Auto Ketone',
            'ehr_list_index': '12',
            'items': [
              'uchemAutoKetone'
            ]
          },
          {
            'label': 'Manual Specific Gravity',
            'ehr_list_index': '13',
            'items': [
              'uchemManSpecificGravity'
            ]
          },
          {
            'label': 'Auto Specific Gravity',
            'ehr_list_index': '14',
            'items': [
              'uchemAutoSpecificGravity'
            ]
          },
          {
            'label': 'Manual Blood',
            'ehr_list_index': '15',
            'items': [
              'uchemManBlood'
            ]
          },
          {
            'label': 'Auto Blood',
            'ehr_list_index': '16',
            'items': [
              'uchemAutoBlood'
            ]
          },
          {
            'label': 'Manual pH',
            'ehr_list_index': '17',
            'items': [
              'uchemManpH'
            ]
          },
          {
            'label': 'Auto pH',
            'ehr_list_index': '18',
            'items': [
              'uchemAutopH'
            ]
          },
          {
            'label': 'Manual Protein',
            'ehr_list_index': '19',
            'items': [
              'uchemManProtein'
            ]
          },
          {
            'label': 'Auto Protein',
            'ehr_list_index': '20',
            'items': [
              'uchemAutoProtein'
            ]
          },
          {
            'label': 'Manual Urobilinogen',
            'ehr_list_index': '21',
            'items': [
              'uchemManUrobilinogen'
            ]
          },
          {
            'label': 'Auto Urobilinogen',
            'ehr_list_index': '22',
            'items': [
              'uchemAutoUrobilinogen'
            ]
          },
          {
            'label': 'Manual Nitrite',
            'ehr_list_index': '23',
            'items': [
              'uchemManNitrite'
            ]
          },
          {
            'label': 'Auto Nitrite',
            'ehr_list_index': '24',
            'items': [
              'uchemAutoNitrite'
            ]
          },
          {
            'label': 'Manual Leukocytes',
            'ehr_list_index': '25',
            'items': [
              'uchemManLeukocytes'
            ]
          },
          {
            'label': 'Auto Leukocytes',
            'ehr_list_index': '26',
            'items': [
              'uchemAutoLeukocytes'
            ]
          },
          {
            'ehr_list_index': '27',
            'items': [
              'uchemMicroIndicater'
            ]
          },
          {
            'ehr_list_index': '28',
            'items': [
              'urnDiscMA'
            ]
          },
          {
            'ehr_list_index': '29',
            'items': [
              'uchemInstructorlComment'
            ]
          },
          {
            'ehr_list_index': '30',
            'items': [
              'uchemSulfosalicylic'
            ]
          },
          {
            'ehr_list_index': '31',
            'items': [
              'uchemIcotest'
            ]
          },
          {
            'label': 'WBC',
            'ehr_list_index': '32',
            'items': [
              'umicroWBC'
            ]
          },
          {
            'label': 'RBC',
            'ehr_list_index': '33',
            'items': [
              'umicroRBC'
            ]
          },
          {
            'label': 'Epithelial Cells',
            'ehr_list_index': '34',
            'items': [
              'umicroEpithelial'
            ]
          },
          {
            'label': 'Types',
            'ehr_list_index': '35',
            'items': [
              'umicroTypesEpithelial Cells'
            ]
          },
          {
            'label': 'Cast results 1',
            'ehr_list_index': '36',
            'items': [
              'umicrocCastsResults1'
            ]
          },
          {
            'label': 'Cast type 1',
            'ehr_list_index': '37',
            'items': [
              'umicrocCastsType1'
            ]
          },
          {
            'label': 'Cast results 2',
            'ehr_list_index': '38',
            'items': [
              'umicrocCastsResults2'
            ]
          },
          {
            'label': 'Cast type 2',
            'ehr_list_index': '39',
            'items': [
              'umicrocCastsType2'
            ]
          },
          {
            'label': 'Cast results 3',
            'ehr_list_index': '40',
            'items': [
              'umicrocCastsResults3'
            ]
          },
          {
            'label': 'Cast type 3',
            'ehr_list_index': '41',
            'items': [
              'umicrocCastsType3'
            ]
          },
          {
            'label': 'Cast results 4',
            'ehr_list_index': '42',
            'items': [
              'umicrocCastsResults4'
            ]
          },
          {
            'label': 'Cast type 4',
            'ehr_list_index': '43',
            'items': [
              'umicrocCastsType4'
            ]
          },
          {
            'ehr_list_index': '44',
            'items': [
              'umicroCrystalsNonePresent'
            ]
          },
          {
            'ehr_list_index': '45',
            'items': [
              'umicroCrystalsPresent'
            ]
          },
          {
            'ehr_list_index': '46',
            'items': [
              'umicroCrystalsObscures'
            ]
          },
          {
            'label': 'Yeast',
            'ehr_list_index': '47',
            'items': [
              'umicroYeast'
            ]
          },
          {
            'label': 'Bacteria',
            'ehr_list_index': '48',
            'items': [
              'umicroBacteria'
            ]
          },
          {
            'label': 'Other',
            'ehr_list_index': '49',
            'items': [
              'umicroOther'
            ]
          },
          {
            'ehr_list_index': '50',
            'items': [
              'urnInternal'
            ]
          },
          {
            'ehr_list_index': '51',
            'items': [
              'urnDiscCE'
            ]
          },
          {
            'ehr_list_index': '52',
            'items': [
              'urnInstructor2'
            ]
          }
        ],
        'form': {
          'elementKey': 'tableUrinalysis',
          'label': 'Urinalysis',
          'addButtonText': 'Create a urinalysis report',
          'formKey': 'tableUrinalysis',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group253',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'tableUrinalysis_name',
                'tableUrinalysis_profession',
                'tableUrinalysis_day',
                'tableUrinalysis_time'
              ]
            },
            {
              'elementKey': 'ehr_group254',
              'label': 'Accessioning',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'urinAccession',
                'urinCollDay',
                'urinCollTime',
                'urinOrderPhys'
              ]
            },
            {
              'elementKey': 'ehr_group255',
              'label': 'Physical Examination',
              'formCss': 'grid-left-to-right-2',
              'gIndex': '3',
              'gChildren': [
                'urinTransparency',
                'urinColour'
              ]
            },
            {
              'elementKey': 'ehr_group256',
              'label': 'Chemical Examination',
              'formCss': 'urin-macro-exam form-table-group',
              'gIndex': '4',
              'gChildren': [
                'formTableHeader257',
                'formTableHeader258',
                'formTableHeader259',
                'formTableHeader260',
                'formTableText261',
                'uchemManGlucose',
                'uchemAutoGlucose',
                'formTableText262',
                'formTableText263',
                'uchemManBilirubin',
                'uchemAutoBilirubin',
                'formTableText264',
                'formTableText265',
                'uchemManKetone',
                'uchemAutoKetone',
                'formTableText266',
                'formTableText267',
                'uchemManSpecificGravity',
                'uchemAutoSpecificGravity',
                'formTableText268',
                'formTableText269',
                'uchemManBlood',
                'uchemAutoBlood',
                'formTableText270',
                'formTableText271',
                'uchemManpH',
                'uchemAutopH',
                'formTableText272',
                'formTableText273',
                'uchemManProtein',
                'uchemAutoProtein',
                'formTableText274',
                'formTableText275',
                'uchemManUrobilinogen',
                'uchemAutoUrobilinogen',
                'formTableText276',
                'formTableText277',
                'uchemManNitrite',
                'uchemAutoNitrite',
                'formTableText278',
                'formTableText279',
                'uchemManLeukocytes',
                'uchemAutoLeukocytes',
                'formTableText280'
              ]
            },
            {
              'elementKey': 'ehr_group281',
              'label': 'Lab Use',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '5',
              'gChildren': [
                'uchemMicroIndicater',
                'urnDiscMA',
                'uchemInstructorlComment'
              ]
            },
            {
              'elementKey': 'ehr_group282',
              'label': 'Confirmatory Tests',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '6',
              'gChildren': [
                'uchemSulfosalicylic',
                'uchemIcotest'
              ]
            },
            {
              'elementKey': 'ehr_group283',
              'label': 'Microscopic Examination',
              'formCss': 'med-lab-urin-micro form-table-group',
              'gIndex': '7',
              'gChildren': [
                'formTableHeader284',
                'formTableHeader285',
                'formTableHeader286',
                'formTableHeader287',
                'formTableText288',
                'umicroWBC',
                'spacer289',
                'formTableText290',
                'formTableText291',
                'umicroRBC',
                'spacer292',
                'formTableText293',
                'formTableText294',
                'umicroEpithelial',
                'umicroTypesEpithelial Cells',
                'formTableText295',
                'formTableText296',
                'umicrocCastsResults1',
                'umicrocCastsType1',
                'formTableText297',
                'umicrocCastsResults2',
                'umicrocCastsType2',
                'formTableText298',
                'umicrocCastsResults3',
                'umicrocCastsType3',
                'formTableText299',
                'umicrocCastsResults4',
                'umicrocCastsType4',
                'formTableText300',
                'formTableText301',
                'umicroCrystalsNonePresent',
                'umicroCrystalsPresent',
                'umicroCrystalsObscures',
                'formTableText302',
                'formTableText303',
                'umicroYeast',
                'formTableText304',
                'formTableText305',
                'formTableText306',
                'umicroBacteria',
                'formTableText307',
                'formTableText308',
                'formTableText309',
                'umicroOther',
                'spacer310',
                'formTableText311'
              ]
            },
            {
              'elementKey': 'ehr_group312',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '8',
              'gChildren': [
                'urnInternal',
                'urnDiscCE',
                'urnInstructor2'
              ]
            }
          ],
          'ehr_data': {
            'tableUrinalysis_name': '',
            'tableUrinalysis_profession': '',
            'tableUrinalysis_day': '',
            'tableUrinalysis_time': '',
            'urinAccession': '',
            'urinCollDay': 'Today',
            'urinCollTime': '',
            'urinOrderPhys': '',
            'urinTransparency': '',
            'urinColour': '',
            'uchemManGlucose': '',
            'uchemAutoGlucose': '',
            'uchemManBilirubin': '',
            'uchemAutoBilirubin': '',
            'uchemManKetone': '',
            'uchemAutoKetone': '',
            'uchemManSpecificGravity': '',
            'uchemAutoSpecificGravity': '',
            'uchemManBlood': '',
            'uchemAutoBlood': '',
            'uchemManpH': '',
            'uchemAutopH': '',
            'uchemManProtein': '',
            'uchemAutoProtein': '',
            'uchemManUrobilinogen': '',
            'uchemAutoUrobilinogen': '',
            'uchemManNitrite': '',
            'uchemAutoNitrite': '',
            'uchemManLeukocytes': '',
            'uchemAutoLeukocytes': '',
            'uchemMicroIndicater': true,
            'urnDiscMA': '',
            'uchemInstructorlComment': '',
            'uchemSulfosalicylic': '',
            'uchemIcotest': '',
            'umicroWBC': '',
            'umicroRBC': '',
            'umicroEpithelial': '',
            'umicroTypesEpithelial Cells': '',
            'umicrocCastsResults1': '',
            'umicrocCastsType1': '',
            'umicrocCastsResults2': '',
            'umicrocCastsType2': '',
            'umicrocCastsResults3': '',
            'umicrocCastsType3': '',
            'umicrocCastsResults4': '',
            'umicrocCastsType4': '',
            'umicroCrystalsNonePresent': '',
            'umicroCrystalsPresent': '',
            'umicroCrystalsObscures': '',
            'umicroYeast': '',
            'umicroBacteria': '',
            'umicroOther': '',
            'urnInternal': '',
            'urnDiscCE': '',
            'urnInstructor2': ''
          }
        },
        'tableChildren': [
          'tableUrinalysis_id',
          'tableUrinalysis_name',
          'tableUrinalysis_profession',
          'tableUrinalysis_day',
          'tableUrinalysis_time',
          'urinAccession',
          'urinCollDay',
          'urinCollTime',
          'urinOrderPhys',
          'urinTransparency',
          'urinColour',
          'uchemManGlucose',
          'uchemAutoGlucose',
          'uchemManBilirubin',
          'uchemAutoBilirubin',
          'uchemManKetone',
          'uchemAutoKetone',
          'uchemManSpecificGravity',
          'uchemAutoSpecificGravity',
          'uchemManBlood',
          'uchemAutoBlood',
          'uchemManpH',
          'uchemAutopH',
          'uchemManProtein',
          'uchemAutoProtein',
          'uchemManUrobilinogen',
          'uchemAutoUrobilinogen',
          'uchemManNitrite',
          'uchemAutoNitrite',
          'uchemManLeukocytes',
          'uchemAutoLeukocytes',
          'uchemMicroIndicater',
          'urnDiscMA',
          'uchemInstructorlComment',
          'uchemSulfosalicylic',
          'uchemIcotest',
          'umicroWBC',
          'umicroRBC',
          'umicroEpithelial',
          'umicroTypesEpithelial Cells',
          'umicrocCastsResults1',
          'umicrocCastsType1',
          'umicrocCastsResults2',
          'umicrocCastsType2',
          'umicrocCastsResults3',
          'umicrocCastsType3',
          'umicrocCastsResults4',
          'umicrocCastsType4',
          'umicroCrystalsNonePresent',
          'umicroCrystalsPresent',
          'umicroCrystalsObscures',
          'umicroYeast',
          'umicroBacteria',
          'umicroOther',
          'urnInternal',
          'urnDiscCE',
          'urnInstructor2'
        ],
        'hasRecHeader': true
      }
    }
  },
  'orderSets': {
    'pageDataKey': 'orderSets',
    'pageTitle': 'Clinical Order Sets',
    'pIndex': '48',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'insulinOrderSets_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'orderSets.name'
      },
      {
        'elementKey': 'insulinOrderSets_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'insulinOrderSets_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'orderSets.profession'
      },
      {
        'elementKey': 'insulinOrderSets_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'orderSets.day'
      },
      {
        'elementKey': 'insulinOrderSets_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'orderSets.time'
      },
      {
        'elementKey': 'insulinOrderSetForm',
        'formIndex': '1',
        'formOption': 'insulin-orders',
        'inputType': 'custom_form',
        'tableColumn': '2',
        'fqn': 'orderSets.insulinOrderSetForm'
      },
      {
        'elementKey': 'preprintOrderSet_name',
        'formIndex': '2',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'orderSets.name'
      },
      {
        'elementKey': 'preprintOrderSet_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'preprintOrderSet_profession',
        'formIndex': '2',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'orderSets.profession'
      },
      {
        'elementKey': 'preprintOrderSet_day',
        'formIndex': '2',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'orderSets.day'
      },
      {
        'elementKey': 'preprintOrderSet_time',
        'formIndex': '2',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'orderSets.time'
      },
      {
        'elementKey': 'preOrderSetFile',
        'formIndex': '2',
        'inputType': 'ehrFile',
        'label': 'Order set file',
        'tableColumn': '2',
        'fqn': 'orderSets.preOrderSetFile'
      }
    ],
    'pageElements': {
      'insulinOrderSets': {
        'elementKey': 'insulinOrderSets',
        'pageElementIndex': '1',
        'pageKey': 'orderSets',
        'tableKey': 'insulinOrderSets',
        'isTable': true,
        'label': 'Insulin',
        'addButtonText': 'Add an Insulin Order Set',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'insulinOrderSets_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'insulinOrderSets_name',
              'insulinOrderSets_profession',
              'insulinOrderSets_day',
              'insulinOrderSets_time'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'insulinOrderSetForm'
            ]
          }
        ],
        'form': {
          'elementKey': 'insulinOrderSets',
          'label': 'Insulin',
          'addButtonText': 'Add an Insulin Order Set',
          'formKey': 'insulinOrderSets',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group139',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'insulinOrderSets_name',
                'insulinOrderSets_profession',
                'insulinOrderSets_day',
                'insulinOrderSets_time'
              ]
            },
            {
              'elementKey': 'ehr_group140',
              'label': 'Insulin subcutaneous order',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '2',
              'gChildren': [
                'insulinOrderSetForm'
              ]
            }
          ],
          'ehr_data': {
            'insulinOrderSets_name': '',
            'insulinOrderSets_profession': '',
            'insulinOrderSets_day': '',
            'insulinOrderSets_time': '',
            'insulinOrderSetForm': ''
          }
        },
        'tableChildren': [
          'insulinOrderSets_id',
          'insulinOrderSets_name',
          'insulinOrderSets_profession',
          'insulinOrderSets_day',
          'insulinOrderSets_time',
          'insulinOrderSetForm'
        ],
        'hasRecHeader': true
      },
      'preprintOrderSet': {
        'elementKey': 'preprintOrderSet',
        'pageElementIndex': '2',
        'pageKey': 'orderSets',
        'tableKey': 'preprintOrderSet',
        'isTable': true,
        'label': 'Preprinted',
        'addButtonText': 'Add a preprinted order set',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'preprintOrderSet_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'preprintOrderSet_name',
              'preprintOrderSet_profession',
              'preprintOrderSet_day',
              'preprintOrderSet_time'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'preOrderSetFile'
            ]
          }
        ],
        'form': {
          'elementKey': 'preprintOrderSet',
          'label': 'Preprinted',
          'addButtonText': 'Add a preprinted order set',
          'formKey': 'preprintOrderSet',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group141',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'preprintOrderSet_name',
                'preprintOrderSet_profession',
                'preprintOrderSet_day',
                'preprintOrderSet_time'
              ]
            },
            {
              'elementKey': 'ehr_group142',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'preOrderSetFile'
              ]
            }
          ],
          'ehr_data': {
            'preprintOrderSet_name': '',
            'preprintOrderSet_profession': '',
            'preprintOrderSet_day': '',
            'preprintOrderSet_time': '',
            'preOrderSetFile': ''
          }
        },
        'tableChildren': [
          'preprintOrderSet_id',
          'preprintOrderSet_name',
          'preprintOrderSet_profession',
          'preprintOrderSet_day',
          'preprintOrderSet_time',
          'preOrderSetFile'
        ],
        'hasRecHeader': true
      }
    }
  },
  'medLabAccession': {
    'pageDataKey': 'medLabAccession',
    'pageTitle': 'Med Lab Accessioning',
    'pIndex': '50',
    'hasGridTable': true,
    'pageChildren': [
      {
        'elementKey': 'mlAccessioning_name',
        'formIndex': '1',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'medLabAccession.name'
      },
      {
        'elementKey': 'mlAccessioning_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'mlAccessioning_profession',
        'formIndex': '1',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'medLabAccession.profession'
      },
      {
        'elementKey': 'mlAccessioning_day',
        'formIndex': '1',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'medLabAccession.day'
      },
      {
        'elementKey': 'mlAccessioning_time',
        'formIndex': '1',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'medLabAccession.time'
      },
      {
        'elementKey': 'accessionID',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Accession ID',
        'tableColumn': '2',
        'fqn': 'medLabAccession.accessionID'
      },
      {
        'elementKey': 'accRequisitionID',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Requisition ID',
        'tableColumn': '3',
        'fqn': 'medLabAccession.accRequisitionID'
      },
      {
        'elementKey': 'accSpecimenType',
        'formIndex': '1',
        'inputType': 'select',
        'label': 'Specimen Type',
        'options': [
          {
            'key': 'Blood',
            'text': 'Blood'
          },
          {
            'key': 'Urine',
            'text': 'Urine'
          },
          {
            'key': 'Tissue',
            'text': 'Tissue'
          },
          {
            'key': 'Saliva',
            'text': 'Saliva'
          },
          {
            'key': 'Stool',
            'text': 'Stool'
          },
          {
            'key': 'Swab',
            'text': 'Swab'
          },
          {
            'key': 'Sputum',
            'text': 'Sputum'
          },
          {
            'key': 'Fluid',
            'text': 'Fluid'
          },
          {
            'key': 'Bone',
            'text': 'Bone'
          },
          {
            'key': 'Hair',
            'text': 'Hair'
          }
        ],
        'tableColumn': '4',
        'fqn': 'medLabAccession.accSpecimenType'
      },
      {
        'elementKey': 'accTestPanel',
        'formIndex': '1',
        'inputType': 'checkset',
        'label': 'Test (Panel)',
        'options': [
          {
            'key': 'cbc',
            'text': 'CBC (Complete Blood Count)'
          },
          {
            'key': 'hba1c',
            'text': 'HbA1c (Glycated Hemoglobin)'
          },
          {
            'key': 'ptinr',
            'text': 'PT/INR (Prothrombin Time/International Normalized Ratio)'
          },
          {
            'key': 'coag',
            'text': 'Coagulation Profile'
          },
          {
            'key': 'cmp',
            'text': 'CMP (Comprehensive Metabolic Panel)'
          },
          {
            'key': 'glufast',
            'text': 'Glucose, Fasting'
          },
          {
            'key': 'glurandom',
            'text': 'Glucose, Random'
          },
          {
            'key': 'iron',
            'text': 'Iron Studies'
          },
          {
            'key': 'lipid',
            'text': 'Lipid Panel'
          },
          {
            'key': 'psa',
            'text': 'PSA (Prostate-Specific Antigen)'
          },
          {
            'key': 'thyroid',
            'text': 'Thyroid Panel'
          },
          {
            'key': 'troponin',
            'text': 'Troponin'
          },
          {
            'key': 'tsh',
            'text': 'TSH (Thyroid-Stimulating Hormone)'
          },
          {
            'key': 'vitd',
            'text': 'Vitamin D Levels'
          },
          {
            'key': 'pregblood',
            'text': 'Pregnancy test, blood'
          },
          {
            'key': 'pregurin',
            'text': 'Pregnancy test, urine'
          },
          {
            'key': 'urinalysis',
            'text': 'Urinalysis'
          },
          {
            'key': 'bgasa',
            'text': 'Blood gas, arterial'
          },
          {
            'key': 'bgasv',
            'text': 'Blood gas, veneous'
          },
          {
            'key': 'bgasf',
            'text': 'Blood gase, fetal cord'
          },
          {
            'key': 'hepatitisc',
            'text': 'Hepatitis C Antibody Test'
          },
          {
            'key': 'other',
            'text': 'Other'
          }
        ],
        'tableColumn': '5',
        'fqn': 'medLabAccession.accTestPanel'
      },
      {
        'elementKey': 'accTestOther',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Test other',
        'tableColumn': '6',
        'fqn': 'medLabAccession.accTestOther'
      },
      {
        'elementKey': 'preAnalytic',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Pre-analytic',
        'tableColumn': '7',
        'fqn': 'medLabAccession.preAnalytic'
      },
      {
        'elementKey': 'postAnalytic',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Post-analytic',
        'tableColumn': '8',
        'fqn': 'medLabAccession.postAnalytic'
      },
      {
        'elementKey': 'collectionDate',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Collection Date',
        'tableColumn': '9',
        'fqn': 'medLabAccession.collectionDate'
      },
      {
        'elementKey': 'collectionTime',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Collection Time',
        'tableColumn': '10',
        'fqn': 'medLabAccession.collectionTime'
      },
      {
        'elementKey': 'collectionLocation',
        'formIndex': '1',
        'inputType': 'text',
        'label': 'Collection Location',
        'tableColumn': '11',
        'fqn': 'medLabAccession.collectionLocation'
      },
      {
        'elementKey': 'accComments',
        'formIndex': '1',
        'inputType': 'textarea',
        'label': 'Comments',
        'tableColumn': '12',
        'fqn': 'medLabAccession.accComments'
      },
      {
        'elementKey': 'mlChain_name',
        'formIndex': '2',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'medLabAccession.name'
      },
      {
        'elementKey': 'mlChain_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'mlChain_profession',
        'formIndex': '2',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'medLabAccession.profession'
      },
      {
        'elementKey': 'mlChain_day',
        'formIndex': '2',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'medLabAccession.day'
      },
      {
        'elementKey': 'mlChain_time',
        'formIndex': '2',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'medLabAccession.time'
      },
      {
        'elementKey': 'chainAccessionID',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Accession ID',
        'tableColumn': '2',
        'fqn': 'medLabAccession.chainAccessionID'
      },
      {
        'elementKey': 'chainEvent',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Event Type',
        'tableColumn': '3',
        'fqn': 'medLabAccession.chainEvent'
      },
      {
        'elementKey': 'chainDate',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Event Date',
        'tableColumn': '4',
        'fqn': 'medLabAccession.chainDate'
      },
      {
        'elementKey': 'chainTime',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Event Time',
        'tableColumn': '5',
        'fqn': 'medLabAccession.chainTime'
      },
      {
        'elementKey': 'chainDetails',
        'formIndex': '2',
        'inputType': 'text',
        'label': 'Event Details',
        'tableColumn': '6',
        'fqn': 'medLabAccession.chainDetails'
      },
      {
        'elementKey': 'chainComments',
        'formIndex': '2',
        'inputType': 'textarea',
        'label': 'Comments',
        'tableColumn': '7',
        'fqn': 'medLabAccession.chainComments'
      },
      {
        'elementKey': 'mlTestStatus_name',
        'formIndex': '3',
        'inputType': 'practitionerName',
        'label': 'Name',
        'tableColumn': '1',
        'tableLabel': 'Identification',
        'recHeader': true,
        'fqn': 'medLabAccession.name'
      },
      {
        'elementKey': 'mlTestStatus_id',
        'inputType': 'generatedId',
        'tableColumn': 0,
        'label': 'Row id',
        'tableCss': 'row-id'
      },
      {
        'elementKey': 'mlTestStatus_profession',
        'formIndex': '3',
        'inputType': 'practitionerProfession',
        'label': 'Profession',
        'tableColumn': '1',
        'recHeader': true,
        'fqn': 'medLabAccession.profession'
      },
      {
        'elementKey': 'mlTestStatus_day',
        'formIndex': '3',
        'inputType': 'visitDay',
        'label': 'Day',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'visitDay',
        'recHeader': true,
        'fqn': 'medLabAccession.day'
      },
      {
        'elementKey': 'mlTestStatus_time',
        'formIndex': '3',
        'inputType': 'visitTime',
        'label': 'Time',
        'mandatory': true,
        'tableColumn': '1',
        'validation': 'time24',
        'recHeader': true,
        'fqn': 'medLabAccession.time'
      },
      {
        'elementKey': 'testAccessionID',
        'formIndex': '3',
        'inputType': 'text',
        'label': 'Accession ID',
        'tableColumn': '2',
        'fqn': 'medLabAccession.testAccessionID'
      },
      {
        'elementKey': 'testStatus',
        'formIndex': '3',
        'inputType': 'text',
        'label': 'Test Status',
        'tableColumn': '3',
        'fqn': 'medLabAccession.testStatus'
      },
      {
        'elementKey': 'testDate',
        'formIndex': '3',
        'inputType': 'text',
        'label': 'Test Date',
        'tableColumn': '4',
        'fqn': 'medLabAccession.testDate'
      },
      {
        'elementKey': 'testTime',
        'formIndex': '3',
        'inputType': 'text',
        'label': 'Test Time',
        'tableColumn': '5',
        'fqn': 'medLabAccession.testTime'
      },
      {
        'elementKey': 'testComments',
        'formIndex': '3',
        'inputType': 'textarea',
        'label': 'Comments',
        'tableColumn': '6',
        'fqn': 'medLabAccession.testComments'
      }
    ],
    'pageElements': {
      'mlAccessioning': {
        'elementKey': 'mlAccessioning',
        'pageElementIndex': '1',
        'pageKey': 'medLabAccession',
        'tableKey': 'mlAccessioning',
        'isTable': true,
        'label': 'Accessioning',
        'addButtonText': 'Create an accessioning record',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'mlAccessioning_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'mlAccessioning_name',
              'mlAccessioning_profession',
              'mlAccessioning_day',
              'mlAccessioning_time'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'accessionID'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'accRequisitionID'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'accSpecimenType'
            ]
          },
          {
            'ehr_list_index': '5',
            'items': [
              'accTestPanel'
            ]
          },
          {
            'ehr_list_index': '6',
            'items': [
              'accTestOther'
            ]
          },
          {
            'ehr_list_index': '7',
            'items': [
              'preAnalytic'
            ]
          },
          {
            'ehr_list_index': '8',
            'items': [
              'postAnalytic'
            ]
          },
          {
            'ehr_list_index': '9',
            'items': [
              'collectionDate'
            ]
          },
          {
            'ehr_list_index': '10',
            'items': [
              'collectionTime'
            ]
          },
          {
            'ehr_list_index': '11',
            'items': [
              'collectionLocation'
            ]
          },
          {
            'ehr_list_index': '12',
            'items': [
              'accComments'
            ]
          }
        ],
        'form': {
          'elementKey': 'mlAccessioning',
          'label': 'Accessioning',
          'addButtonText': 'Create an accessioning record',
          'formKey': 'mlAccessioning',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group363',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'mlAccessioning_name',
                'mlAccessioning_profession',
                'mlAccessioning_day',
                'mlAccessioning_time'
              ]
            },
            {
              'elementKey': 'ehr_group364',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'accessionID',
                'accRequisitionID',
                'accSpecimenType',
                'accTestPanel',
                'accTestOther',
                'preAnalytic',
                'postAnalytic',
                'collectionDate',
                'collectionTime',
                'collectionLocation'
              ]
            },
            {
              'elementKey': 'ehr_group365',
              'formCss': 'grid-left-to-right-1',
              'gIndex': '3',
              'gChildren': [
                'accComments'
              ]
            }
          ],
          'ehr_data': {
            'mlAccessioning_name': '',
            'mlAccessioning_profession': '',
            'mlAccessioning_day': '',
            'mlAccessioning_time': '',
            'accessionID': '',
            'accRequisitionID': '',
            'accSpecimenType': '',
            'accTestPanel': '',
            'accTestOther': '',
            'preAnalytic': '',
            'postAnalytic': '',
            'collectionDate': '',
            'collectionTime': '',
            'collectionLocation': '',
            'accComments': ''
          }
        },
        'tableChildren': [
          'mlAccessioning_id',
          'mlAccessioning_name',
          'mlAccessioning_profession',
          'mlAccessioning_day',
          'mlAccessioning_time',
          'accessionID',
          'accRequisitionID',
          'accSpecimenType',
          'accTestPanel',
          'accTestOther',
          'preAnalytic',
          'postAnalytic',
          'collectionDate',
          'collectionTime',
          'collectionLocation',
          'accComments'
        ],
        'hasRecHeader': true
      },
      'mlChain': {
        'elementKey': 'mlChain',
        'pageElementIndex': '2',
        'pageKey': 'medLabAccession',
        'tableKey': 'mlChain',
        'isTable': true,
        'label': 'Chain of Custody',
        'addButtonText': 'Create a chain of custody record',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'mlChain_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'mlChain_name',
              'mlChain_profession',
              'mlChain_day',
              'mlChain_time'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'chainAccessionID'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'chainEvent'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'chainDate'
            ]
          },
          {
            'ehr_list_index': '5',
            'items': [
              'chainTime'
            ]
          },
          {
            'ehr_list_index': '6',
            'items': [
              'chainDetails'
            ]
          },
          {
            'ehr_list_index': '7',
            'items': [
              'chainComments'
            ]
          }
        ],
        'form': {
          'elementKey': 'mlChain',
          'label': 'Chain of Custody',
          'addButtonText': 'Create a chain of custody record',
          'formKey': 'mlChain',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group366',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'mlChain_name',
                'mlChain_profession',
                'mlChain_day',
                'mlChain_time'
              ]
            },
            {
              'elementKey': 'ehr_group367',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'chainAccessionID',
                'chainEvent',
                'chainDate',
                'chainTime',
                'chainDetails',
                'chainComments'
              ]
            }
          ],
          'ehr_data': {
            'mlChain_name': '',
            'mlChain_profession': '',
            'mlChain_day': '',
            'mlChain_time': '',
            'chainAccessionID': '',
            'chainEvent': '',
            'chainDate': '',
            'chainTime': '',
            'chainDetails': '',
            'chainComments': ''
          }
        },
        'tableChildren': [
          'mlChain_id',
          'mlChain_name',
          'mlChain_profession',
          'mlChain_day',
          'mlChain_time',
          'chainAccessionID',
          'chainEvent',
          'chainDate',
          'chainTime',
          'chainDetails',
          'chainComments'
        ],
        'hasRecHeader': true
      },
      'mlTestStatus': {
        'elementKey': 'mlTestStatus',
        'pageElementIndex': '3',
        'pageKey': 'medLabAccession',
        'tableKey': 'mlTestStatus',
        'isTable': true,
        'label': 'Test Status',
        'addButtonText': 'Create a test status record',
        'ehr_list': [
          {
            'label': 'Row id',
            'tableCss': 'row-id',
            'ehr_list_index': 0,
            'items': [
              'mlTestStatus_id'
            ]
          },
          {
            'label': 'Identification',
            'ehr_list_index': '1',
            'items': [
              'mlTestStatus_name',
              'mlTestStatus_profession',
              'mlTestStatus_day',
              'mlTestStatus_time'
            ]
          },
          {
            'ehr_list_index': '2',
            'items': [
              'testAccessionID'
            ]
          },
          {
            'ehr_list_index': '3',
            'items': [
              'testStatus'
            ]
          },
          {
            'ehr_list_index': '4',
            'items': [
              'testDate'
            ]
          },
          {
            'ehr_list_index': '5',
            'items': [
              'testTime'
            ]
          },
          {
            'ehr_list_index': '6',
            'items': [
              'testComments'
            ]
          }
        ],
        'form': {
          'elementKey': 'mlTestStatus',
          'label': 'Test Status',
          'addButtonText': 'Create a test status record',
          'formKey': 'mlTestStatus',
          'ehr_groups': [
            {
              'elementKey': 'ehr_group368',
              'formCss': 'record-header',
              'gIndex': '1',
              'gChildren': [
                'mlTestStatus_name',
                'mlTestStatus_profession',
                'mlTestStatus_day',
                'mlTestStatus_time'
              ]
            },
            {
              'elementKey': 'ehr_group369',
              'formCss': 'grid-left-to-right-3',
              'gIndex': '2',
              'gChildren': [
                'testAccessionID',
                'testStatus',
                'testDate',
                'testTime',
                'testComments'
              ]
            }
          ],
          'ehr_data': {
            'mlTestStatus_name': '',
            'mlTestStatus_profession': '',
            'mlTestStatus_day': '',
            'mlTestStatus_time': '',
            'testAccessionID': '',
            'testStatus': '',
            'testDate': '',
            'testTime': '',
            'testComments': ''
          }
        },
        'tableChildren': [
          'mlTestStatus_id',
          'mlTestStatus_name',
          'mlTestStatus_profession',
          'mlTestStatus_day',
          'mlTestStatus_time',
          'testAccessionID',
          'testStatus',
          'testDate',
          'testTime',
          'testComments'
        ],
        'hasRecHeader': true
      }
    }
  }
}
export default DEFS