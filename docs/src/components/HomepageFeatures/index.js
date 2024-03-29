import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  // {
  //   title: "Easy to Use",
  //   Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
  //   description: (
  //     <>
  //       Docusaurus was designed from the ground up to be easily installed and
  //       used to get your website up and running quickly.
  //     </>
  //   ),
  // },
  {
    title: "Focus on your customer's feedback",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Track BEE let you collect customer's feedback without having to deal
        with mails or phone calls.
      </>
    ),
  },
  {
    title: "Powered by Open Technologies",
    Svg: require("@site/static/img/undraw_source_code.svg").default,
    description: (
      <>
        Built with PostgreSQL, ASP.NET Core and React, Track BEE allow everyone
        to be a part of this project
      </>
    ),
  },
  {
    title: "Powerful Integrations",
    Svg: require("@site/static/img/undraw_online_connection.svg").default,
    description: <>Integrate your existing tools (Coming soon)</>,
  },
  {
    title: "Fast and Lightweight",
    Svg: require("@site/static/img/undraw_fast_loading.svg").default,
    description: (
      <>
        We want to allow everyone to use this project so we put time and effort
        to ensure that every component is fast and lightweight on your server
        and devices
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
