/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWareHouse = /* GraphQL */ `
  subscription OnCreateWareHouse(
    $filter: ModelSubscriptionWareHouseFilterInput
  ) {
    onCreateWareHouse(filter: $filter) {
      id
      loc
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateWareHouse = /* GraphQL */ `
  subscription OnUpdateWareHouse(
    $filter: ModelSubscriptionWareHouseFilterInput
  ) {
    onUpdateWareHouse(filter: $filter) {
      id
      loc
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteWareHouse = /* GraphQL */ `
  subscription OnDeleteWareHouse(
    $filter: ModelSubscriptionWareHouseFilterInput
  ) {
    onDeleteWareHouse(filter: $filter) {
      id
      loc
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onCreateEmployee(filter: $filter) {
      id
      empName
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onUpdateEmployee(filter: $filter) {
      id
      empName
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onDeleteEmployee(filter: $filter) {
      id
      empName
      createdAt
      updatedAt
    }
  }
`;
