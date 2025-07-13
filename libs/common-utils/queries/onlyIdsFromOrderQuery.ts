export const onlyIdsFromOrderQuery = `
  query isProductsExist($ids: [String!]!) {
    isProductsExist(ids: $ids) {
      id
    }
  }
`;
