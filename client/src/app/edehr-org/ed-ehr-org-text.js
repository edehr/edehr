export const EdOrgText = {

  servers: {
    title: 'Technical Security Measures', body: [
      'edehr.org servers operate on the stable Debian operating system and follow industry recommendations to lock down and secure site access. Administrative server access is only available via the SSH protocol and only to edehr.org administrators. All access is secured via SSL keys. No access is permitted to the root account nor via passwords. Further security precautions are also implemented.',

      'Students and instructors can only reach the edehr.org services through their learning management system (LMS). In particular, edehr.org does not have user accounts nor user passwords. Instead, it trusts the LMS to authenticate and authorize the users. All communications between the LMS and edehr.org are over secure HTTPS. The servers are protected by two firewalls. The first is a service provided by DigitalOcean on their network. The second is the firewall on the edehr.org server. Both limit internet traffic to web protocols (HTTP and HTTPS) and block all other traffic.',

      'On the edehr.org server the web traffic is managed with a Nginx server which handles all of the encryption and decryption required for HTTPs. It serves the static HTML, Javascript and image files that provide the edehr.org service. Nginx also proxies (reroutes) all edehr.org API requests to the edehr.org API server.',
      'The edehr.org API server only accepts two types of requests. First is an LTI 1.1 authorization request. LTI is the most common means to connect a content provider (e.g., EdEHR) and the learning institution\'s LMS. (See http://www.imsglobal.org/specs/ltiv1p1/implementation-guide).',

      'The LTI request from the LMS to EdEHR is where the LMS shares user data with edehr.org. But first edehr.org needs to validate the LMS request by verifying the digital signature to be sure the message is coming from a recognized LMS and complies with LTI. According to the LTI specification the EdEHR uses a key and a secret arranged ahead of time between the administrators of the LMS and EdEHR.',

      'When the EdEHR API server receives a valid request it next examines the user information. This consists of the LMS user id, the user\'s name (in the LMS). The LMS user id is required to associate the users work, in the EdEHR, as they return over time. On each new visit to the EdEHR checks to be sure the user\'s name is up to date.',

    ]
  },

  userAccess: {
    title: 'User access to edehr.org services', body: [
      'Users of EdEHR are either students who use the electronic health records as part of their studies, or "teachers" who can view and manage assignments, case studies, and evaluate the work completed by their students. These roles are set and controlled by the LMS and not EdEHR.',
      'System administrators can only access the server via SSH if their personal digital key has previously been placed on the server (i.e. they created the server or have been asked to help manage the server). Any of these users also need to be granted the privilege of working with "root" permissions.',
      'Personal data is retained for one year on edEHR servers',
      'EdEHR has limited administration access that first requires the user enter the EdEHR via an LMS (so the user is authenticated). Then the user must provide a password that is only visible if the user also has gained access to the server as described above.'
    ]
  },

  physicalAccess: {
    title: 'Physical access to edehr.org services', body: [
      'The edehr.org software as a service is hosted on virtual servers provided by Digital Ocean out of their Toronto data center. More information about how Digital Ocean protects the physical infrastructure can be found here https://www.digitalocean.com/trust/',
      '• Servers are located in data centres with 24/7 guarded surveillance',
      '• Access to servers is limited to authorized individuals by access key cards or biometric scanning',
      '• Locations are SSAE16 certified',
      '• High standards of fire and other environmental controls are in place'
    ]
  }
}