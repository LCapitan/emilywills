import type { NextPage } from "next";
import { Builder, BuilderComponent } from "@builder.io/react";

// components
import { NoContent } from "../src/containers/index";
import Footer from "../src/components/Footer/Footer";

const NotFound: NextPage = () => {
  if (Builder.isPreviewing || Builder.isEditing) {
    return <BuilderComponent model="page" />;
  }

  return (
    <>
      <main>
        <NoContent />
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
