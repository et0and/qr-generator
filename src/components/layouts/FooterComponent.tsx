import React from "react";

import clsxm from "@/lib/helpers/clsxm";

const FooterComponent = () => {
  return (
    <footer
      className={clsxm(
        "mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-2 md:justify-between",
        "py-16 px-2 md:px-1"
      )}
    >
      
    </footer>
  );
};

export default FooterComponent;
