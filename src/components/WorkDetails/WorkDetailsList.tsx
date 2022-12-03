import {
  builder,
  Builder,
  BuilderComponent,
  withChildren,
} from "@builder.io/react";
import WorkDetails from "./WorkDetails";

builder.init("c1b80d2fa81e4146ab6e58293a95c87e");

const API_KEY = "c1b80d2fa81e4146ab6e58293a95c87e";
const MODEL_NAME = "work-detail-list";

export const WorkDetailsList = (props: any) => <>{props.children}</>;

const WorkDetailsListWithBuilderChildren = withChildren(WorkDetailsList);

Builder.registerComponent(WorkDetailsListWithBuilderChildren, {
  name: "Work Details Nothing",
  defaultChildren: [
    {
      "@type": "@builder.io/sdk:Element",
      component: {
        name: "workitem",
        options: {
          title: "eve planning",
          subtitle: "subtitle can go here",
          tags: ["tags", "tags", "tags"],
          url: "/",
          label: "view project",
          classes: "workDetails",
        },
      },
    },
  ],
});

const content = await builder
  .get(MODEL_NAME, {
    // Optional custom query
    query: {
      "data.customField.$gt": 100,
    },
    // Optional custom targeting
    userAttributes: {
      urlPath: "/", // Most Builder content is targeted at least by the URL path
    },
  })
  .promise();

<BuilderComponent model={MODEL_NAME} content={content} />;
