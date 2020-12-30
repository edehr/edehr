<template>
  <div class=WordSection1>

    <h1>EdEHR Highlights from 2020</h1>

    <p>Our Educational Electronic Health Record (EdEHR) received a lot
      of attention this year. Here are some highlights of what we accomplished
      together.
    </p>

    <p>We improved the whole <span
      class=emptext>case study (seed) editing</span>
      experience.  This feature includes exporting and importing
      copies of case studies. It works with the new Files feature described below
      too.
    </p>
    <p>
      We added several <span class="emptext">new starting assignments and seeds</span> based
      on the open text-book &quot;Health Case Studies - Toward Closing the Healthcare
      Communication Gap&quot; by: Glynda Rees, Rob Kruger, Janet Morrison.<br>
    </p>
    <p>
      In March 2020, the EdEHR made its <span class="emptext">first appearance in the
classroom</span> when over 200 students, with no prior training, were able to
      complete an assignment during the class.  The overwhelming message was that the
      EdEHR was easy to use and understand.  This is thanks to all the work we’ve
      done together. </p>

    <p>We used Willo Labs
      https://www.willolabs.com/ to make &quot;digital learning a zero step
      process&quot;.  Willo Labs provided the necessary <span
        class=emptext>privacy</span>
      between the learning institution's LMS and EdEHR.
    </p>
    <p>
      We added a <span class="emptext">new Wound and Skin Assessment module</span>,
      complete with demonstration course assignment seed.  This new module
      illustrated how easy it is for health professionals to extend the EdEHR with
      authentic and accurate health recording processes.  It also shows how the EdEHR
      can model contemporary provincial medical best practices.<br>
    </p>
    <p>
      We added the ability to <span class="emptext">import medical images and files</span> and to
      use these within the EHR records.  This allows for case studies to include
      laboratory and test results as well as medical imagery.
    </p>
    <p>
      We are in the process of <span class="emptext">adding support for digital signatures</span>
      As
      the student completes the assignment they will &quot;digitally sign&quot; their
      work, just as in the real world when medical practitioners need to “sign” their
      work.
    </p>
    <p>
      <span class="emptext">Medications!</span>
      We worked together to improve the
      medication orders, scheduling and administration record keeping.  We added a lookup
      that operates on the Canadian medication database.   This area of the
      application is looking forward to further work to enhance the database lookup
      feature and more accurately reflect the pharmacy experience.
    </p>

    <p>To the <span class=emptext>Vital Signs</span>
      module,
      we added Central Venous Pressure CVP to the list of parameters recorded and we
      improved drawing.
    </p>

    <p>We developed a <span
      class=emptext>demonstration
mode.</span><span class=emptext>  Now, anyone can see how the EdEHR works allowing people to try
out the role of student, instructor and courseware designer.  It is a fully
functional EdEHR and includes the ability to use medical imagery and reports as
well as import and export case seeds.  It was an essential addition to allow us
to add the new Wound and Skin Assessment module and it has made doing
development so much easier, thereby saving countless hours.  In hindsight, it
would’ve been good to have built this into the first prototypes. </span></p>

    <p>We developed a <span
      class=emptext>new
home page</span><span class="normtext"> for https://edehr.org to describe and promote all the great
features we've put into the EdEHR.</span></p>

    <p>We added <span
      class=emptext>support
for mobile devices</span><span class=emptext>.  EdEHR works on iPad like tablets and iPhone like smart
phones.  Of course, it’s not easy on the smaller devices but it is sufficient
to make little adjustments or to view the content of a case.</span></p>

    <p>We added <span class=emptext>EdEHR branding</span>, including a new icon.  There is lots of
      room for improvement here
      but it’ll carry us for now until more funding comes in.
    </p>

    <p>We reworked how the individual
      pages load and how the application manages
      <span class="emptext">user authentication</span>.  This
      work supports all the different ways we come to use the EdEHR.  For example, as
      a student, as an instructor, as a course ware designer, as an expert in some
      aspect of medical record keeping, as a system administrator, and more roles. On
      top of this the new demonstration mode effectively doubles the types of roles
      the EdEHR needs to manage.
    </p>
    <p>
      We made many improvements to <span class="emptext">assist instructors manage their
active assignments</span>. For example, instructors can now close any assignment and
      prevent further student submissions. Or reopen the assignment if needed. They
      can send the assignment back to the student to add more work or to see the assessment
      given by the instructor.  The class list, assignment and seed pages were also
      redesigned to be useful on mobile devices.
    </p>

    <p>We added a lot of <span class=emptext>behind-the-scenes improvements</span>
      including lots of unit tests.  This out-of-sight work is essential
      to building a robust service that is ready to scale up and support many institutions
      and thousands of students.
    </p>
    <p>
      We added <span class="emptext">database management and security</span>.
    </p>
    <br>
    <p>Many thanks to the significant
      funding from BCIT as well as support from BCcampus and UBC.</p>

    <h2>What is next?</h2>

    <p><span class="emphtext">BCcampus continues to offer
funding to see more pilots of the EdEHR in BC classrooms.</span>
      <span class="normtext">Please
reach out to Bryan soon if you have any possibility of adding this to your
courses. <br>
<br>
</span></p>

    <p>The demonstration mode remains
      hidden behind a small checkbox located at the bottom of the home page.  We need
      simple user registration before we can enable it for everyone.  Bryan is
      working on a new open source project that will provide <span
        class=emptext>user authentication without passwords!</span></p>

  </div>
</template>

<style scoped>

  .WordSection1 {
    max-width: 900px;
  }

  h2 {
    font-size: 14.0pt;
    color: #871094
  }

  .emptext {
    color: #871094;
  }

</style>
