// components
import {
  ContentBlock
} from '../../../components/index';

export function Content() {

  return (
    <>
      <ContentBlock title='the ask'>
        <p>Design an original brand and business idea of your choosing, focusing in on design and user experience.</p>
      </ContentBlock>

      <ContentBlock title='the challenge'>
        <p>What can we do to make our brand stand out in an already saturated industry? How can we incorporate user feedback into our design and branding choices?</p>
      </ContentBlock>

      <ContentBlock title='the solution'>
        <p>An acai restaurant + pottery studio + art gallery combination that offers a fusion of digital and physical experiences which allow customers a creative way to interact with the brand, each other, and give back to the local community.</p>
      </ContentBlock>

      <ContentBlock
        row
        title='Start Creating'
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1651120035/start-ordering-small_nfa1im.png'
        width="522"
        height="530"
      >
        <p>Upon walking into the restaurant, customers are met with this interactive screen which encourages them to start creating their perfect bowl of goodness.</p>
      </ContentBlock>

      <ContentBlock
        row
        flipped
        title='Instructions Screen'
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1651120228/instructions_gmpmp1.png'
        width="522"
        height="530"
      >
        <p>Customers are next met with an instructions screen that breaks down the steps to customize their bowl in a simplified way.</p>
      </ContentBlock>

      <ContentBlock
        row
        title='select your base'
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1651120353/select-base_ogvnig.png'
        width="522"
        height="530"
      >
        <p>Customers are then prompted to select their bowl&#39;s base. They have the option to choose between Acai, Pitaya, Spirulina, and an Oatmeal base.</p>
      </ContentBlock>

      <ContentBlock
        row
        flipped
        title='adorn with toppings'
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1651120556/toppings_lh5vfe.png'
        width="522"
        height="530"
      >
        <p>Customers have the freedom to choose what kind of toppings they would like on their bowl, with a range of fully customizable fruit and nut options.</p>
      </ContentBlock>

      <ContentBlock
        row
        title='embellish with drizzle'
        imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1651120639/drizzle_xwftnt.png'
        width="522"
        height="530"
      >
        <p>Lastly, customers can add on the final touches to their bowl by selecting a drizzle type of their choosing.</p>
      </ContentBlock>

      <ContentBlock
        row
        imgSrc='/assets/img/bowlsgiveback.gif'
        width="522"
        height="530"
      >
        <p>Rvabowls gives back to the local community through our #bowlsgiveback program. This includes donating a percentage of all sales to a different local charity each month, and an in-store as well as online gallery that features local artists’ work for sale.</p>

        <p>On a quarterly basis, rvabowls will host a gallery night with a live auction event that allows locals to bid on artists’ featured work, with 100% of the profits going back into artists’ pockets.</p>
      </ContentBlock>
    </>
  )
}
