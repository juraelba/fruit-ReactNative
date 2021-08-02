type handleFirestoreErrorFunction = (error: any) => string;

const handleFirestoreError: handleFirestoreErrorFunction = (e): string => {
  console.log(e);
  switch (e.code) {
    default:
      return 'Data error, please try again later';
  }
};

export default handleFirestoreError;
