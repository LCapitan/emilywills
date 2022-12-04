// components
import {
  ContentBlock,
  FullWidthContent,
  MoodBoard,
  SectionHeading,
} from "../../../components/index";

export function Content() {
  return (
    <>
      <div id="define"></div>
      <SectionHeading id="empathize" title="Empathize &amp; Define" />

      <ContentBlock title="Background">
        <p>
          I had initially learned about the environmental effects that
          traditional burials had on our planet years ago from a colleage whose
          family owned a funeral practice. My original goal was to solve an
          environmental problem. However, when the COVID19 pandemic hit I
          watched the world scramble in utter chaos as we all suddenly faced
          death and loss at an alarming rate while simultaneously being forced
          to grieve our loved ones in isolation. There was nothing normal about
          the way we dealt with death prior to and during the pandemic,
          therefore I saw an additional opportunity to create a platform that
          allowed people to discuss, plan for, and process death and the things
          surrounding it in a healthy and approachable way.
        </p>
      </ContentBlock>

      <ContentBlock
        tag="Primary &amp; Secondary"
        title="Research"
        imgSrc="https://res.cloudinary.com/da0wdy90u/image/upload/v1670107844/portfolio/Research_Image_zxgvam_bfojvf.png"
        width="1200"
        height="453"
      >
        <p>
          My data was based on primary and secondary research I collected
          including user feedback I gathered from people who had recently lost a
          loved one during the pandemic as well as experts in the industry
          (funeral directors, morticians and death doulas). My goal with
          interviewing multiple kinds of users was to understand the needs,
          wants, and specific pain points surrounding end-of-life care for all
          people involved in order to create a truly holistic solution that
          would leave the greatest impact.
        </p>
      </ContentBlock>

      <ContentBlock
        row
        tag="Initial Findings"
        title="User Interviews"
        imgSrc="https://res.cloudinary.com/da0wdy90u/image/upload/v1670107845/portfolio/user-interviews-img_rmf91c_juennv.png"
        width="593"
        height="585"
        captionTitle="User Interview:"
        caption="Mimi Mythen (she/her), Student Mortician, Deathcare Advocate, Green Burial Enthusiast"
      >
        <p>
          My data was based on primary and secondary research I collected
          including user feedback I gathered from people who had recently lost a
          loved one during the pandemic as well as experts in the industry
          (funeral directors, morticians and death doulas). My goal with
          interviewing multiple kinds of users was to understand the needs,
          wants, and specific pain points surrounding end-of-life care for all
          people involved in order to create a truly holistic solution that
          would leave the greatest impact.
        </p>
      </ContentBlock>

      <ContentBlock
        tag="Mapping"
        title="Opportunity &amp; Empathy Mapping"
        imgSrc="https://res.cloudinary.com/da0wdy90u/image/upload/v1670107844/portfolio/Opporunitity_Empathy_Mapping_Image_czehs7_tt2b85.png"
        width="1200"
        height="571"
      >
        <p>
          I created both an opportunity map and empathy map to understand trends
          and market conditions as well where my solution fits into the
          competitive landscape. I used mapping to identify user frustrations
          and painpoints and ways I could improve upon current solutions that
          exist. Both maps were then used to decide which problems I should
          focus on solving now and areas for caution/potential to be aware of
          for the future.
        </p>
      </ContentBlock>

      <ContentBlock
        row
        tag="Problem Identification"
        title="4 Key Focus Areas"
        imgSrc="https://res.cloudinary.com/da0wdy90u/image/upload/v1670107841/portfolio/focus-areas_py2zbj_tnfusc.png"
        width="359"
        height="350"
      >
        <p>
          My research and mapping revealed that there is a definite need for
          improvement within this space. I organized my findings into 4 major
          areas for improvement in order to narrow my focus on which problems
          specifically I wanted my solution to address.
        </p>
      </ContentBlock>

      <SectionHeading id="ideation" title="Ideation" />

      <ContentBlock
        tag="Early Adopters"
        title="User Journey"
        imgSrc="https://res.cloudinary.com/da0wdy90u/image/upload/v1670107840/portfolio/Eve_User_Journey_qxwfvt_kago3b.png"
        width="1363"
        height="696"
      >
        <p>
          While Eve&#39;s users could be any human that is currently walking the
          planet, I decided to focus in on a specific user and journey that aims
          to address the problem of people planning too late in life.
        </p>

        <p>
          I brainstormed how to get Eve in front of people earlier on in life
          and came up with the solution of partnering with sustainable b2b
          companies who will offer Eve to new employees as a part of their
          benefits package.{" "}
        </p>
      </ContentBlock>

      <SectionHeading id="design" title="Design" />

      <FullWidthContent
        flipped
        imgSrc="https://res.cloudinary.com/da0wdy90u/image/upload/v1670111655/portfolio/wireframes_sb2n3c_kfff1i.webp"
        width="1285"
        height="1533"
        altText=""
        title="Wireframes"
        content={
          <>
            <p>
              Using mid-fidelity wireframes, I created a skeleton of how I
              wanted the platform to look and feel while also incorporating
              modern design best practices. I focused on simplicity and
              minimalism with both my design and user flows to create a seamless
              experience for the user.
            </p>
            <p>
              My wireframes walked through key features of the platform- from
              onboarding, to filling out your preferences, to scrolling through
              features on your profile dashboard, to completing your your
              end-of-life plan.
            </p>
          </>
        }
      />

      <MoodBoard
        imgSrc="https://res.cloudinary.com/da0wdy90u/image/upload/v1670107844/portfolio/moodboard_akdkyt_ypzfwd.jpg"
        width="1728"
        height="910"
        altText=""
        title="Inspo &amp; Moodboard"
        content="I gathered visual design inspiration for Eve from sustainable brands, illustrations that were soft and welcoming, and websites that incorporate modern UI design best practices."
      />

      <FullWidthContent
        moreText
        imgSrc="https://res.cloudinary.com/da0wdy90u/image/upload/v1670107846/portfolio/branding_fd7yrr_rb9yks.png"
        width="2410"
        height="3025"
        altText=""
        title="Branding &amp; Design"
        content={
          <>
            <p>
              The name Eve, by definition, means “before” and “in preparation
              of” an event or period of time. With a focus on pre-planning for
              end-of-life and encouraging greener practices, I saw this name as
              a perfect fit to advocate for sustainability in the eve of death.
            </p>
            <p>
              Eve&#39;s design system was carefully crafted in order to reflect
              its values of sustainability while also prioritizing being
              approachable to users. It was important that Eve as a brand evoked
              a sense of calm and peace of mind to users to offset the
              uncomfortable and heavy subject of death, and this is seen
              throughout the colors, symbols, and visuals that Eve uses across
              its platform.
            </p>
          </>
        }
      />

      <div id="testing"></div>
      <SectionHeading id="prototype" title="Prototype &amp; Testing" />

      <ContentBlock
        tag="Prototype"
        title="Eve Prototype Launch"
        imgSrc="https://res.cloudinary.com/da0wdy90u/image/upload/v1670107844/portfolio/prototype_omcysg_z6t4cp.png"
        width="3456"
        height="1420"
      >
        <p>
          After creating high fidelity screens of the features I wanted to
          highlight, I prototyped the ideal user flows for the platform. I then
          reached back out to users I initially interviewed for feedback on my
          design and solution and any revisions that needed to be made for
          improvement.
        </p>
      </ContentBlock>

      <ContentBlock
        row
        tag="Prototype"
        title="User Testing &amp; Feedback"
        imgSrc="https://res.cloudinary.com/da0wdy90u/image/upload/v1670107845/portfolio/user-testing_v94lne_ug4noo.png"
        width="593"
        height="492"
        captionTitle="User Interview:"
        caption="Ashley (she/her), Death Doula &amp; Educator *Facial mask was worn during this interview as a reminder of the importance of self care, especially in this industry*"
      >
        <p>
          I walked through the prototype with those I initially talked to who
          had recently lost a loved one along with people who work in the
          industry (funeral directors, morticians, and death doulas). I also did
          testing with people who were just hearing of Eve for the first time.
        </p>

        <p>
          I recieved constructive feedback that I&#39;ve used towards improving
          Eve&#39;s platform and overall experience for users as well as
          validation that this is a product that is desperately needed. I hope
          to one day make this product a reality.{" "}
        </p>
      </ContentBlock>
    </>
  );
}
