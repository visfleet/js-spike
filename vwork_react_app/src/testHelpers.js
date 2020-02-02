export const createFormMock = () => {
  const formMock = {
    handleSubmit: jest.fn(onSubmit => Object.assign(formMock, { onSubmit })),
    register: jest.fn(() => null),
    formState: {},
  };
  return formMock;
};
