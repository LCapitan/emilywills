// components
import {
  ContentBlock,
  FullWidthContent,
  FullWidthImage,
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
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1659460986/haven-research_jna2uf.jpg'
        width='1200'
        height='601'
      >
        <p>I filled out the lean canvas model to get to the heart of my idea. This helped me organize my thinking and what I wanted my business to accomplish, the user needs I wanted my solution to address, identifying who I am solving for and what competitive advantages my business has over current solutions that exist in the market.</p>
      </ContentBlock>

      <ContentBlock
        row
        tag="Initial Findings"
        title="User Interviews"
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1659461149/haven-user-interviews_mahyxw.png'
        width='579'
        height='432'
        captionTitle='Survey Pool:'
        caption='382 students between the ages of 15-24 years old were surveyed  '
      >
        <p>Through discussions with experts in this space as well as users in my target audience, I received validation that there is indeed, a need for Haven. My team surveyed a pool of 382 students between the ages of 15-24 years old. We found that 82% said that they wear something on their wrist “everyday” or “often”. Additionally, 88% of respondents said that they would wear something on their wrist if it could notify others when they were in danger.</p>
      </ContentBlock>

      <SectionHeading id="ideation" title='Ideation' />

      <ContentBlock
        tag="Early Adopters"
        title="User Journey"
      >
        <p>We created user journeys that highlight important scenarios and how a user might use the key features that Haven offers in these scenarios. Below are the journeys of user onboarding and set up of Haven, user accidentally triggering a false alarm, and user finding themselves in an actual emergency.</p>
      </ContentBlock>

      <FullWidthImage
        contained
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1659461293/haven-uj-1_z93ysp.png'
        imgAlt=''
      />

      <FullWidthImage
        contained
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1659461293/haven-uj-2_p6oguz.png'
        imgAlt=''
      />

      <FullWidthImage
        contained
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1659461293/haven-uj-3_gbeh1h.png'
        imgAlt=''
      />

      <FullWidthImage
        contained
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1659461293/haven-uj-4_vmjjm9.png'
        imgAlt=''
      />

      <SectionHeading id="design" title='Design' />

      <FullWidthContent
        flipped
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1659488883/haven-screens_e5mfvz.png'
        width='1574'
        height='3053'
        altText=''
        title='Wireframes'
        content={<p>Using mid-fidelity wireframes, I created a skeleton of how I wanted the app to look and feel while highlighting the most important features. I focused on simplicity and minimalism which is essential for a safety app where every second counts.</p>}
      />

      <MoodBoard
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1659488976/inspo_hohegc.png'
        width='1728'
        height='910'
        altText=''
        title='Inspo &amp; Moodboard'
        content='I gathered product design inspiration for the Haven watch studying wearbles and sleek jewelry fashion trends. I gathered inspiration for Haven&#39;s app by looking at current safety apps that exist and brands in the safety and tech space.'
      />

      <ContentBlock
        row
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1659489721/black-watch_ng6cts.png'
        width='711'
        height='657'
        altText=''
        title='Branding &amp; Design'
      >
        <p>I gathered product design inspiration for the Haven watch by studying wearbles, sleek jewelry fashion trends, and gathering user research. Haven&#39;s app was inspired by looking at current safety apps that exist and brands in the safety and tech space.</p>
      </ContentBlock>

      <div id="testing"></div>
      <SectionHeading id="prototype" title='Prototype &amp; Testing' />

      <ContentBlock
        tag="Prototype"
        title="Haven App Launch"
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1659489791/haven-prototype_jeaojm.jpg'
        width='1200'
        height='1186'
      >
        <p>After creating high fidelity screens of the features I wanted to highlight, I prototyped the ideal user flows for the platform. I then reached back out to users I initially interviewed for feedback on my design and solution and any revisions that needed to be made for improvement.</p>
      </ContentBlock>

      <ContentBlock
        row
        tag="Prototype"
        title="User Testing &amp; Feedback"
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1659490266/user-feedback_yzuoga.png'
        width='593'
        height='456'
        captionTitle='User Interview:'
        caption='Students at Virginia Tech, between the ages of 18-24 years old, testing out the Haven Watch Prototype'
      >
        <p>I walked through the app prototype as well as well as the 3D prototype, collecting user feedback on the design, functionality, and usability of both. All of the feedback I recieved was helpful in validating the need that exists in the market for a solution such as Haven.</p>
      </ContentBlock>
    </>
  )
}
