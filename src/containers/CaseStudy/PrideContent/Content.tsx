// components
import {
  ContentBlock,
  FullWidthImage,
  VideoPlayer,
} from "../../../components/index";

export function Content() {
  return (
    <>
      <ContentBlock title="Background">
        <p>
          As a brand with a longstanding history of celebrating the power of the
          written word, Post-it® Brand knows you don’t have to speak to be
          heard. This year at Twin Cities Pride, we’re celebrating the many
          Voices of Pride – from leaders in our local communities to each
          individual. Everyone has a unique story to tell, and there is a
          Post-it Note ready to help tell it.
        </p>
      </ContentBlock>

      <ContentBlock title="The Ask">
        <p>
          Design two brand activations for the Twin Cities Pride Festival using
          3M post-it notes honoring LGBTQ+ people in the community.
        </p>
      </ContentBlock>

      <ContentBlock tag="01" title="First Ave Mural">
        <p>
          Mural of over 13,000 post it notes honoring Roxanne Anderson, Phillipe
          Cunningham, and Andrea Jenkins for the impact they’ve made within the
          LGBTQ+ community. This mural was accompanied by a placard with a brief
          bio of the candidates, including a QR code linking out for more
          information.
        </p>
      </ContentBlock>

      <FullWidthImage
        imgSrc="https://res.cloudinary.com/da0wdy90u/image/upload/v1670107839/portfolio/3m-pride-1_mmupxo_kwiv1k.png"
        imgAlt=""
      />

      <FullWidthImage
        imgSrc="https://res.cloudinary.com/da0wdy90u/image/upload/v1670107840/portfolio/3m-pride-2_auk4nj_elvhrj.png"
        imgAlt=""
      />

      <FullWidthImage
        imgSrc="https://res.cloudinary.com/da0wdy90u/image/upload/v1670107840/portfolio/3m-pride-3_ycsjnp_ysqjl0.png"
        imgAlt=""
      />

      <ContentBlock tag="02" title="Post-it Notes of Pride Interactive Mural">
        <p>
          An interactive mural at the 3M booth at the Twin Cities Pride
          Festival. We decided with the prompt “Who inpsires you to be your true
          authentic self?” and allowed people attending the festival to answer
          the prompt and stick it back up on the wall.
        </p>
      </ContentBlock>

      <FullWidthImage
        imgSrc="https://res.cloudinary.com/da0wdy90u/image/upload/v1670107840/portfolio/3m-pride-4_mflpe5_kvlmlt.png"
        imgAlt=""
      />

      <FullWidthImage
        imgSrc="https://res.cloudinary.com/da0wdy90u/image/upload/v1670107840/portfolio/3m-pride-5_e2ubyd_lp027y.png"
        imgAlt=""
      />

      <FullWidthImage
        imgSrc="https://res.cloudinary.com/da0wdy90u/image/upload/v1670107840/portfolio/3m-pride-6_iss59h_hpvnb3.png"
        imgAlt=""
      />

      <ContentBlock tag="03" title="Post-it Pride Packs">
        <p>
          To spread more love and joy during Pride, we provided Post-it Pride
          Packs to local bars and restaurants to display in their windows and
          show their support.
        </p>
      </ContentBlock>

      <FullWidthImage
        imgSrc="https://res.cloudinary.com/da0wdy90u/image/upload/v1670107840/portfolio/3m-pride-7_i4yb7v_nuwdmw.png"
        imgAlt=""
      />

      {/* <VideoPlayer vidSrc="https://res.cloudinary.com/austinmel/video/upload/v1652386827/3M_Pride_2022_Final_umsz9a.mov" /> */}
    </>
  );
}
