import React from "react";
import Layout from "../components/Layout";
import useHomepage from "../hooks/use-homepage";

const Index = () => {
  const data = useHomepage();
  console.log({ index: data });
  return (
    <Layout>
      <div>asd</div>
    </Layout>
  );
};

export default Index;
