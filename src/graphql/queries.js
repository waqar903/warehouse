/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWareHouse = /* GraphQL */ `
  query GetWareHouse($id: ID!) {
    getWareHouse(id: $id) {
      id
      loc
      createdAt
      updatedAt
    }
  }
`;
export const listWareHouses = /* GraphQL */ `
  query ListWareHouses(
    $filter: ModelWareHouseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWareHouses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        loc
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
      id
      empName
      createdAt
      updatedAt
    }
  }
`;
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        empName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
