/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWareHouse = /* GraphQL */ `
  mutation CreateWareHouse(
    $input: CreateWareHouseInput!
    $condition: ModelWareHouseConditionInput
  ) {
    createWareHouse(input: $input, condition: $condition) {
      id
      loc
      createdAt
      updatedAt
    }
  }
`;
export const updateWareHouse = /* GraphQL */ `
  mutation UpdateWareHouse(
    $input: UpdateWareHouseInput!
    $condition: ModelWareHouseConditionInput
  ) {
    updateWareHouse(input: $input, condition: $condition) {
      id
      loc
      createdAt
      updatedAt
    }
  }
`;
export const deleteWareHouse = /* GraphQL */ `
  mutation DeleteWareHouse(
    $input: DeleteWareHouseInput!
    $condition: ModelWareHouseConditionInput
  ) {
    deleteWareHouse(input: $input, condition: $condition) {
      id
      loc
      createdAt
      updatedAt
    }
  }
`;
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
      id
      empName
      createdAt
      updatedAt
    }
  }
`;
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
      id
      empName
      createdAt
      updatedAt
    }
  }
`;
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
      id
      empName
      createdAt
      updatedAt
    }
  }
`;
