const useFileApi = () => {
  const baseURL = 'http://localhost:5000';

  const getAllFiles = async () => fetch(baseURL).then((el) => el.json());

  const createFile = async (file) => {
    await fetch(`${baseURL}/create`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(file),
    });
  };

  return [getAllFiles, createFile];
};

export default useFileApi;
