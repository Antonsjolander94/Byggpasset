import { useStaticQuery, graphql } from "gatsby";

const UseHomepage = () => {
  const { data } = useStaticQuery(
    graphql`
      query StartSida {
        data: contentfulSidaStartsida(
          contentful_id: { eq: "2t8UeftjjXdrGhyWySYPvp" }
        ) {
          heroRubrik
          heroBild {
            fluid(maxWidth: 1920) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    `
  );
  return data;
};

export default UseHomepage;
