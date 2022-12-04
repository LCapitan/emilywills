// components
import { Button, ContentBlock } from "../../../components/index";

export function Content() {
  return (
    <>
      {/* <ContentBlock
              row
              title="Background"
              imgSrc='https://res.cloudinary.com/austinmel/image/upload/v1651105773/emily-bunnies_gwplge.png'
              width="522"
              height="530"
              altText="image of emily with her bunnies"
            >
              <p>I was once the mom of 14 bunnies. Yes, you read that correctly. And no I did not plan for it, though through unique circumstances the bunny life chose me. While it was certainly unexpected, raising these bunnies has been one of life&#39;s greatest joys and brought me a great deal of happiness.</p>
            </ContentBlock> */}

      <ContentBlock title="Background">
        <p>
          I was once the mom of 14 bunnies. Yes, you read that correctly. And no
          I did not plan for it, though through unique circumstances the bunny
          life chose me. While it was certainly unexpected, raising these
          bunnies has been one of life&#39;s greatest joys and brought me a
          great deal of happiness.
        </p>
      </ContentBlock>

      <ContentBlock title="The Problem">
        <p>
          Everyone loves bunnies but not everyone understands just how much work
          goes into caring for one (or more). Every year about 35,000 bunnies
          get adopted, but unfortunately, a large number of them either end up
          getting returned, or abandoned due to the amount of work involved in
          raising a bunny as a pet. We wanted to build an NFT project that would
          help bunnies find a loving home with a long life there.
        </p>
      </ContentBlock>

      <ContentBlock
        flipped
        row
        imgSrc="https://res.cloudinary.com/da0wdy90u/image/upload/v1670110039/portfolio/bunny_fmaezv_wzaaep.png"
        width="522"
        height="530"
        altText="image of emily with her bunnies"
      >
        <p>
          Bunnies are unique creatures and very different from one another. From
          their genetic makeup to their treat preferences to their
          personalities- no two of them are alike! Just like other pets, losing
          one can be difficult especially after you&#39;ve developed such a
          close bond with them. You consider them family.
        </p>
      </ContentBlock>

      <ContentBlock>
        <p>
          After mourning the sudden loss of three of my bunnies over quarantine,
          my partner and I decided to start a project together that honored them
          and their memory. This was how Hon&#39;s Buns NFTs were born. We made
          a collection of 10,000 unique bunny-themed NFTs and as we continue to
          grow, are using some of the funds we&#39;ve raised to give back to
          nonprofits to help keep bunnies in loving homes.{" "}
        </p>
      </ContentBlock>

      <ContentBlock
        row
        imgSrc="https://res.cloudinary.com/da0wdy90u/image/upload/v1670110071/portfolio/bunnies_icemtj_awapoh.png"
        width="522"
        height="530"
      >
        <p>
          A portion of the funds raised will be used to support bunny adoption
          fees, vet bills, and rescues that help provide the quality of life and
          care that bunnies deserve.
        </p>
        <p>
          Rather than committing to a single charity, we want to spread our
          impact as wide as possible and focus on multiple charities that have
          the greatest need and are important to our community.
        </p>

        <Button
          external
          url="https://www.honsbuns.com"
          label="visit hon&#39;s buns"
        />
      </ContentBlock>
    </>
  );
}
