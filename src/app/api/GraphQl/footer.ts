import { gql } from "@apollo/client";

export const GET_FOOTER = gql`
  query MyQuery {
    allTrangCh {
      nodes {
        trangCh {
          footer {
            text1
            text2
            text3
            text4
            text5
            text6
            text7
            text8
            text9
            text10
            text11
            text12
            text13
            text14
          }
        }
      }
    }
  }
`;
