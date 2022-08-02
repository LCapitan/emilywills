// components
import {
  ContentBlock,
  FullWidthContent,
  MoodBoard,
  SectionHeading
} from '../../../components/index';

export function Content() {

  return (
    <>
      <div id="define"></div>
      <SectionHeading id="empathize" title='Empathize &amp; Define' />

      <ContentBlock title="Background">
        <p>The concept of Haven was first devised in September of 2014 after hearing the updated news of UVA student, Hannah Graham&#39;s, abduction. It had been six weeks since the night she had gone missing, and during that time expensive search parties were taking place with high rewards being offered of any information leading to her disappearance. Hannah&#39;s remains were finally discovered only 8 miles from where she was taken. This case ironically involved the same man that had taken the life of a fellow Hokie, Morgan Harrington, approximately nine years earlier. Morgan&#39;s search and discovery was expensive and exhausting, taking over 3 months to find her body. Similar to Hannah, her remains had been found close-by in less than a 10 mile radius from where she was abducted.</p>
        <p>Both of these women had cellphones on them when they were taken, and like many other victims of abduction, this was the first thing taken from them eliminating any hope of getting help from the outside world. Ultimately this lack of communication ended up costing them both their lives.</p>
        <p>It is naive to think that just a cellphone will promise safety in these situations. The rising statistics show otherwise. That is why I started Haven, in hopes to provide peace of mind and a faster, safer solution to the dangers that may ensue as a young woman.</p>
      </ContentBlock>

      <ContentBlock
        tag="Primary &amp; Secondary"
        title="Research"
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1658460425/Research_Image_zxgvam.png'
        width='1200'
        height='453'
      >
        <p>I filled out the lean canvas model to get to the heart of my idea. This helped me organize my thinking and what I wanted my business to accomplish, the user needs I wanted my solution to address, identifying who I am solving for and what competitive advantages my business has over current solutions that exist in the market.</p>
      </ContentBlock>

      <ContentBlock
        row
        tag="Initial Findings"
        title="User Interviews"
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1658460832/user-interviews-img_rmf91c.png'
        width='593'
        height='585'
        captionTitle='Survey Pool:'
        caption='382 students between the ages of 15-24 years old were surveyed  '
      >
        <p>Through discussions with experts in this space as well as users in my target audience, I received validation that there is indeed, a need for Haven. My team surveyed a pool of 382 students between the ages of 15-24 years old. We found that 82% said that they wear something on their wrist “everyday” or “often”. Additionally, 88% of respondents said that they would wear something on their wrist if it could notify others when they were in danger.</p>
      </ContentBlock>

      <SectionHeading id="ideation" title='Ideation' />

      <ContentBlock
        tag="Early Adopters"
        title="User Journey"
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1658463096/Eve_User_Journey_qxwfvt.png'
        width='1363'
        height='696'
      >
        <p>We created user journeys that highlight important scenarios and how a user might use the key features that Haven offers in these scenarios. Below are the journeys of user onboarding and set up of Haven, user accidentally triggering a false alarm, and user finding themselves in an actual emergency.</p>
      </ContentBlock>

      <SectionHeading id="design" title='Design' />

      <FullWidthContent
        flipped
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1658464585/wireframes_sb2n3c.png'
        width='1285'
        height='1533'
        altText=''
        title='Wireframes'
        content={<p>Using mid-fidelity wireframes, I created a skeleton of how I wanted the app to look and feel while highlighting the most important features. I focused on simplicity and minimalism which is essential for a safety app where every second counts.</p>}
      />

      <MoodBoard
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1658468626/moodboard_akdkyt.jpg'
        width='1728'
        height='910'
        altText=''
        title='Inspo &amp; Moodboard'
        content='I gathered product design inspiration for the Haven watch studying wearbles and sleek jewelry fashion trends. I gathered inspiration for Haven&#39;s app by looking at current safety apps that exist and brands in the safety and tech space.'
      />

      <FullWidthContent
        moreText
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1658469661/branding_fd7yrr.png'
        width='2410'
        height='3025'
        altText=''
        title='Branding &amp; Design'
        content={<><p>The name Eve, by definition, means “before” and “in preparation of” an event or period of time. With a focus on pre-planning for end-of-life and encouraging greener practices, I saw this name as a perfect fit to advocate for sustainability in the eve of death.</p><p>Eve&#39;s design system was carefully crafted in order to reflect its values of sustainability while also prioritizing being approachable to users. It was important that Eve as a brand evoked a sense of calm and peace of mind to users to offset the uncomfortable and heavy subject of death, and this is seen throughout the colors, symbols, and visuals that Eve uses across its platform.</p></>}
      />

      <div id="testing"></div>
      <SectionHeading id="prototype" title='Prototype &amp; Testing' />

      <ContentBlock
        tag="Prototype"
        title="Eve Prototype Launch"
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1658471407/prototype_omcysg.png'
        width='3456'
        height='1420'
      >
        <p>After creating high fidelity screens of the features I wanted to highlight, I prototyped the ideal user flows for the platform. I then reached back out to users I initially interviewed for feedback on my design and solution and any revisions that needed to be made for improvement.</p>
      </ContentBlock>

      <ContentBlock
        row
        tag="Prototype"
        title="User Testing &amp; Feedback"
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1658470532/user-testing_v94lne.png'
        width='593'
        height='492'
        captionTitle='User Interview:'
        caption='Ashley (she/her), Death Doula &amp; Educator *Facial mask was worn during this interview as a reminder of the importance of self care, especially in this industry*'
      >
        <p>I walked through the prototype with those I initially talked to who had recently lost a loved one along with people who work in the industry (funeral directors, morticians, and death doulas). I also did testing with people who were just hearing of Eve for the first time.</p>

        <p>I recieved constructive feedback that I&#39;ve used towards improving Eve&#39;s platform and overall experience for users as well as validation that this is a product that is desperately needed. I hope to one day make this product a reality. </p>
      </ContentBlock>
    </>
  )
}
