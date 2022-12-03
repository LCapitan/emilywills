import { Builder, BuilderComponent, withChildren } from "@builder.io/react";
import dynamic from "next/dynamic";
import { IconTools } from "@tabler/icons";

Builder.registerComponent(
  dynamic(() => import("./components/WorkDetails")),
  {
    name: "Work Details",
    image:
      "https://res.cloudinary.com/austinmel/image/upload/v1667905139/emilywills/tools.png",
    noWrap: true, // Important!
    inputs: [
      {
        name: "title",
        type: "string",
        required: true,
        defaultValue: "Project Name",
      },
      {
        name: "subtitle",
        type: "string",
        required: true,
        defaultValue: "subtitle here",
      },
      // {
      //   name: "tags",
      //   type: "list",
      //   defaultValue: [
      //     {
      //       value: "tag item",
      //     },
      //   ],
      //   subFields: [
      //     {
      //       name: "value",
      //       type: "string",
      //       defaultValue: "tag item",
      //     },
      //   ],
      // },
      { name: "url", type: "string", required: true, defaultValue: "/about" },
      { name: "label", type: "string", defaultValue: "view project" },
      { name: "secondary", type: "boolean" },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./src/containers/HomeHero/HomeHero")),
  {
    name: "Home Hero",
    image:
      "https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png",
    type: "string",
    inputs: [
      { name: "tag1", type: "string" },
      { name: "tag2", type: "string" },
      { name: "tag3", type: "string" },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./src/components/CS/ContentBlock/ContentBlock")),
  {
    name: "Content Block",
    image:
      "https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png",
    inputs: [
      { name: "title", type: "string" },
      { name: "subtitle", type: "string" },
      { name: "quote", type: "string" },
      { name: "content", type: "longText" },
      { name: "extraContent", type: "longText" },
      { name: "tag", type: "string" },
      { name: "imgSrc", type: "string" },
      { name: "width", type: "string" },
      { name: "height", type: "string" },
      { name: "altText", type: "string" },
      { name: "caption", type: "string" },
      { name: "captionTitle", type: "string" },
      { name: "row", type: "boolean" },
      { name: "flipped", type: "boolean" },
      { name: "url", type: "string" },
      { name: "label", type: "string" },
      { name: "fullHeight", type: "boolean" },
    ],
  }
);

Builder.registerComponent(
  dynamic(() =>
    import("./src/components/CS/FullWidthContent/FullWidthContent")
  ),
  {
    name: "Full Width Content",
    image:
      "https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png",
    type: "string",
    inputs: [
      { name: "title", type: "string" },
      { name: "tag", type: "string" },
      { name: "content", type: "longText" },
      { name: "imgSrc", type: "string" },
      { name: "width", type: "string" },
      { name: "height", type: "string" },
      { name: "altText", type: "string" },
      { name: "flipped", type: "boolean" },
      { name: "moreText", type: "boolean" },
      { name: "url", type: "string" },
      { name: "label", type: "string" },
      { name: "bgOlive", type: "boolean" },
      { name: "bgSand", type: "boolean" },
      { name: "btnScnd", type: "boolean" },
      { name: "featWork", type: "boolean" },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./src/components/Footer/Footer")),
  {
    name: "Footer",
    image:
      "https://tabler-icons.io/static/tabler-icons/icons-png/3d-cube-sphere-off.png",
    type: "string",
    inputs: [
      { name: "linkedInUrl", type: "string" },
      { name: "instaUrl", type: "string" },
      { name: "twitterUrl", type: "string" },
      { name: "facebookUrl", type: "string" },
      { name: "contactEmail", type: "string" },
    ],
  }
);
