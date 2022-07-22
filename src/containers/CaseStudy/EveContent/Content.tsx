// components
import {
  ContentBlock,
  SplitContent,
  FullWidthContent,
  SectionHeading,
  KeyFeature
} from '../../../components/index';

export function Content() {

  return (
    <>
      <ContentBlock title="Background">
        <p>Death is a taboo subject, especially in American culture despite that we all will inevitablely face it one day. Adding a global pandemic into the mix has made our mortality part of daily life and only heightened our fears as a society. There is a need now more than ever to destigmatize death and normalize the conversations and planning surrounding it for the sake of ourselves and our loved ones.</p>

        <p>Additionally, the way we practice death is unsustainable. Traditional burial practices take up usable land along with leaving detrimental impacts to our environment. As people become aware of the ways our behaviors negatively effect the environment, our traditions surrounding death need to change. </p>
      </ContentBlock>

      <ContentBlock title='The Problem'>
        <p>People aren&#39;t planning for their deaths. In fact, over 92% of Americans don&#39;t have fully fleshed out end-of-life plans, leaving the burden to fall on loved ones. When this happens, traditional burials are often the default choice.</p>
      </ContentBlock>

      <ContentBlock title='The Insight'>
        <p>Traditional burials are taking up usable land as well as significantly impacting our environment.</p>
        <p>Nearly 59 million people die each year globally, and with population rising that number is only growing. We are running out of land to bury our loved ones. Traditional burials are not only costly, but permanently take up usable land with around 100,000 tons of steel going into the earth every year just in the US- that&#39;s enough to rebuild the entire Golden Gate Bridge! Not to mention the untold amount of formaldehyde and toxic chemicals too.</p>
      </ContentBlock>

      <FullWidthContent
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1657846546/eve-screens_osozmo.png'
        width='1200'
        height='1372'
        altText='a screenshot of the Eve profile page'
        title='The Opportunity'
        content='Create a digital platform that guides, educates, and encourages people to plan for end-of-life sooner and keep sustainability in mind.'
      />

      <SplitContent
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1657848608/Profile_-_Dashboard_-_No_plans_ztafpp.png'
        width="1740"
        height="1707"
        altText=""
        title="Eve Planning" >
        <p>Eve Planning is an innovative and human centered approach to death designed to make the process of planning for end-of-life more inviting, empowering, and underwhelming.</p>

        <p>This holistic platform includes a unique user guided experience, step by step guided modules, AI integration to drive greener initiatives, key partnerships and connections to live resources, and a social element to share your plans with those you love to carry them out. View the highlights of Eve&#39;s offerings below.</p>
      </SplitContent>

      <SectionHeading title='Key Features' />

      <KeyFeature
        tag="01"
        title='Seamless onboarding through key partnerships'
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1657909960/onboarding-01_ijqdx9.png'
        altText=''
      >
        <p>While Eve&#39;s platform will be available for anyone to use, Eve will first launch through a B2B model, partnering with sustainable companies who will incorporate Eve as part of a benefits package that is offered to new employees during the job onboarding process. This will encourage people to start planning for end-of-life sooner rather than later.</p>
      </KeyFeature>

      <KeyFeature
        flipped
        tag="02"
        title='User-focused to provide an optimal experience'
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1657910343/02-onboarding_d6r7ac.png'
        altText=''
      >
        <p>During onboarding, users will answer a few preliminary questions in order for Eve&#39;s algorithim to understand their goals, wishes, and personal preferences. This will ensure users are not faced with an overwhelming amount of information that might be irrelevant to their personal journey.</p>
      </KeyFeature>

      <KeyFeature
        tag="03"
        title='Step by step guidance and education'
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1657911309/03-questions_cmfiud.png'
        altText=''
      >
        <p>Eve&#39;s platform offers comprehensive, step by step guidance walking users through each module and providing education and tips along the way to help them make the most informed decisions surrounding their end of life care. </p>
      </KeyFeature>

      <KeyFeature
        flipped
        tag="04"
        title='Encouraging sustainable practices using AI'
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1657911081/03-survey_ajaumb.png'
        altText=''
      >
        <p>Eve leverages machine learning to understand the user&#39;s needs while also advocating for greener practices. As users are completing their end-of-life plans, suggestions will pop up based on their previously selected preferences that support more sustainable practives while still aligning with user&#39;s values and wishes.</p>
      </KeyFeature>

      <KeyFeature
        tag="05"
        title='Access to live resources'
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1658522858/05-live-resources_ghchct.png'
        altText=''
      >
        <p>With a premium plan, users have access to live resources such as death doulas, who can offer additional guidance and emotional support in areas surrounding their own death, a loved ones death, or navigating grief. Users will also be able to connect with companies based on proximity that offer greener funeral alternatives.</p>
      </KeyFeature>

      <KeyFeature
        flipped
        tag="06"
        title='Designed for connection'
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1658522858/06-connection_ezgxka.png'
        altText=''
      >
        <p>Eve is designed with connection in mind, allowing you to share your completed end-of-life plans with those you trust to carry them out. Based on the plan you choose, Eve has additional features like the ability to safely upload and store important documents to keep everything central while further reducing one&#39;s carbon footprint. Some additional offerings include budget keeping, doula pairing, photo storing, and prompted questions to pass down stories for generations to come.</p>
      </KeyFeature>
    </>
  )
}
