export const getSessionStorage = (key) => {
  const data = sessionStorage.getItem(key);
  return JSON.parse(data);
};
export const setSessionStorage = (key, result) => {
  const data = sessionStorage.setItem(
    key,
    typeof result === "object" ? JSON.stringify(result) : result
  );
  return JSON.parse(data);
};

export const removeSessionStorage = (key) => {
  sessionStorage.removeItems(key);
};

export const setLocalStorage = (key, result) => {
  localStorage.setItem(
    key,
    typeof result === "object" ? JSON.stringify(result) : result
  );
};

export const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : data;
};

export const removeItem = (key) => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
