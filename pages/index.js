// import React from "react";
// import Link from "next/link";
// import "../src/style.module.css";

// function Page() {

//   return (
//     <>
//       <h1>Index Page route</h1>
//       <Link href="/notes">
//         <a>Link </a>
//       </Link>
//     </>
//   );
// }

// export default Page;

/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

// export default () => (
//   <div sx={{ height: `calc(100vh - 60px)` }}>
//     <div
//       sx={{
//         variant: "containers.page",
//         display: "flex",
//         alignItems: "center",
//         height: "100%",
//       }}
//     >
//       <h1 sx={{ fontSize: 8, my: 0 }}>
//         This is a really dope note taking app.
//       </h1>
//     </div>
//   </div>
// );

export default ({ content }) => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: "containers.page",
        display: "flex",
        alignItems: "center",
        height: "100%",
      }}
    >
      <h1 sx={{ fontSize: 8, my: 0 }}>{content.title}</h1>
    </div>
  </div>
);

export function getStaticProps() {
  //get data from cms

  return {
    props: {
      content: {
        title: "This is really nice app",
      },
    },
  };
}
