<template lang="pug">
  div(class="outside-view")
    h1 Privacy Policy
    p Last updated: May 4, 2022 (see change list below)
    p Previous update: October 28, 2021

    p
      | This EdEHR application is "open source" which means that anyone is free to run an instance of this software on their own servers. This document (“Privacy Policy”) explains the privacy rules only for the Services provided by &nbsp;
      a(href='[https://edehr.org') {{ domain }} &nbsp;
      | and its subdomains. Other instances will need to establish their own privacy policy even it that means copying this document.

    p All capitalized words used in this Privacy Policy are defined on this page.

    p
      | By Website we mean &nbsp;
      a(href='[https://edehr.org') {{domain}} &nbsp;
      | and any subdomains.

    p By Services we mean all activities accessible through your learning institution's learning management system (LMS).  The Services are only available as part of your learning or teaching activities at a learning institution that is using our Website as part of its curriculum. For students these activities include completing assignments and for instructors these activities include reviewing and evaluating their respective student's work and any creation of course content.

    p By Course Work we mean all data related to the above activities.

    p This Website also includes a Demonstration Service.  This is a mock up of a learning management system with sample users and it provides visitors to explore the Services without needing to be registered via a learning institution and without the need to enter any personal information.

    p By visiting our Website and using the Services, you confirm that you have read this Privacy Policy and agree to be bound by this Privacy Policy. If you disagree with the rules of this Privacy Policy, please do not use our Services.

    h2 Information collected on our Website

    p We do not collect any personal information if you are just visiting our Website.

    p Like most websites on the internet, our Website collects access logs (such as IP address, browser type, operating system) to operate our services and ensure their secure, reliable, and robust performance. This information is also essential for fighting against DDoS attacks, scanning and similar hacking attempts.


    h2 Information collected when using the Services

    p We protect your Information foremost by limiting what we collect.

    p If you are using the Services then we collect the absolute minimum personal information to provide the Services.

    p By Information we mean:

    ol
      li - The learning institution you used to access the Services.
      li - Your user id in the learning management system you used to access the Services. We call this your LMS ID.
      li - Your name as provided by the learning management system. We call this your LMS User Name.
      li - Your Course Work and note that if you enter any personally identifying information into your Course Work then you do so at your discretion.


    p Cookies. This service does not use cookies yet it does use Local Storage which is a small amount of data stored within your browser. This Local Storage is only accessible by your browser and the Services use it to provide the Services. Your authorization token is transmitted to the server on each request to verify your request is from you.

    h2 Who can see your Information?

    p If you are a student using the Services then you will only be able to see your own Information for assignments that your your learning institution permits you to see.

    p If you are an instructor, as determined by your role within your learning institution, then you will see your Course Work which includes the Information of students who completed work for an assignment that you have permission to access, as determined ny your learning institution.

    p If you are an instructor, as determined by your role within your learning institution, then you will also be able to see and share course content (EdEHR case studies or "seeds") created by other instructors at your learning institution.

    h2 Information collected when using the Demonstration Services

    p If you visit our Website and access the demonstration mode then we collect only the information you provide while completing Course Work. We may purge this data from time to time at our discretion. If you enter any personally identifying information then you do so at your own discretion.

    h2 Data retention

    p From time to time we may purge data from our system especially any data that is older than one year.

    h2 Sharing your personal data

    p We do not share your personal information with anyone. We do not use third-party service providers.

    p Your personal information will only be processed in Canada on Canadian servers.  All data between your browser and the Service is encrypted.

    h2 Data security

    p We take data security very seriously and take all steps reasonably necessary to secure your data (whether technical, physical, or administrative). However, no company can guarantee the absolute security of internet communications. By using the Services, you expressly acknowledge that we cannot guarantee the security of any data provided to or received by us through the Services.

    p This Privacy Policy may be modified and updated at any time, at our sole discretion, for any or no reason, and without notice. The date of the most current wording of the Privacy Policy is indicated at the top of the text. We ask all users to ensure that they are familiar with the most current wording of the Privacy Policy. The amendment of the Privacy Policy can be made simply by publishing the updated Privacy Policy on this Website. Updates of the Privacy Policy come into force as of the moment when they are published.

    h2 Changes since previous policy

    p Two changes to privacy policy

    ol
      li - Change "Access logs. As most websites on the internet" to "Like most websites on the internet"
      li - Remove the line "At this time the Services also collect your email address as entered into your LMS.  This data is not used and a

</template>

<script>
import { appText } from '@/appText'
export default {
  data () {
    return {
      appText: appText,
      domain: 'edehr.org'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.outside-view {
  margin: 2rem;
}
</style>
