/* eslint-disable quote-props,quotes */

export const demoText = {
  title: 'EdEHR Demonstration - Log In',
  intro: 'Welcome to the Educational Electronic Health Record system demonstration log in page.  EdEHR helps in the education of our future health care workers, be they nurses, doctors, pharmacists, or other healthcare professions. EdEHR gives these students experience using an electronic health record system.\n This demonstration page let\'s you pretend to be an instructor or a student. Here you can "log in" as a user of a simulated learning management system (LMS) and through this get into the EdEHR. This simulated login will connect the same way other systems such as Canvas, Blackboard and Moodle will connect.',
  explanation:
'In real life your LMS administrator works with an administrator the EdEHR to create connections between the two' +
    ' systems. These connections are the assignments that instructors can use within their courses.\n This' +
    ' demonstration will provide you with a one page LMS that has connections to the EdEHR that are ready to go.' +
    ' Once you "log in" you will see a fictitious course with sample assignments.\n You can "log in" as either an' +
    ' instructor or a student. Instructors can customize assignment content or evaluate the work of their students.' +
    ' (You will need to try out the student role before your instructor role will see students in the class list.)\n' +
    ' Students can complete assignments.\n We recommend you first log in as a student, try to follow the' +
    ' instructions set by your "instructor" and submit something for evaluation. You can then use the Demo menu item' +
    ' on the top banner to come back here and "log in" as an instructor. You can then go to "your" class list, see a list of "your" students and try out the evaluation experience.\n Once you are done with the basic flow of students working on the assignments and instructors evaluating the student\'s work then come back here and log in as an instructor and, this time, go to the assignments page and modify the instructions given to the students or go deeper and modify the EHR case study content.\n Use the Demo menu item on the top banner to change your persona or leave the demonstration.  When you leave the demonstration all of your demonstration data is reset.  Remember this instance of the EdEHR is a prototype and so the admin of this instance may need to reset the system at any time.',
  lmsAside: 'This one page learning management system has assignments set to connect with the EdEHR. Some of these' +
    ' sample assignments are based on the open text-book <a href="https://pressbooks.bccampus.ca/healthcasestudies/">Health Case Studies - Toward Closing the Healthcare Communication Gap</a> by:  Glynda Rees, Rob Kruger, Janet Morrison.',
  login: {
    title: 'Try out the EdEHR',
    body: 'The EdEHR is a prototype web application.\n ' +
    'Any data that you enter while using this demonstration mode may be lost if the application is significantly changed.  If you use the demonstration mode to create any course content then please download your work regularly.\n' +
      'Send an email to <a href="mailto://info@edehr.org?subject=EdEHR Demo Mode!&body=Hi EdEHR\nMy question is..." target="_blank" rel="noopener noreferrer">info@edehr.org</a> <i class="fa fa-envelope"></i> t <i class="fa envelope"></i> if you have any questions.\n' +
      'To enter the demo mode please provide your email address.\n' +
      'EdEHR will send you an email from "no-reply@npuser.org" with a verification code. '
  },
  logout: {
    title: 'Confirm leave the EdEHR demonstration mode',
    body: 'Exit the demonstration mode. At this time this means all your data is removed. But do not worry because you can just come back and try out the EdEHR again. '
  },
  emailForm: {
    label: 'Enter your email address',
    buttonLabel: 'Submit',
    prompt: 'To get started please provide your email address. We use this purely to keep your data private and to allow you to develop content on this service. After you submit your email address go to your inbox and look for a message from "no-reply@npuser.org", which is our authentication service. The message will contain a verification code.  Rest assured that our authentication service will not retain any information about you. See https://npuser.org for more information.'
  },
  vCodeForm: {
    label: 'Verification code',
    buttonLabel: 'Verify',
    prompt: 'Look in your inbox for an email from npuser.org with your verification code. Find and enter the verification code.'
  },
  consentForm: {
    label: 'Consent is required',
    prompt: 'I acknowledge that the EdEHR is a prototype web application.',
    prompt2: 'As well, before you can proceed please acknowledge that you understand the EdEHR is a prototype web application and you accept to use it "as-is". ' +
      'Any data that you enter while using this demonstration mode may be lost if the application is significantly modified. ' +
      'Suggest that you download any work that is important to you regularly. '
  },
}
