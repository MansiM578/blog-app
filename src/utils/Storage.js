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

export const getLocalStorage = (key, result) => {
  const data = localStorage.setItem(
    key,
    typeof result === "object" ? JSON.stringify(result) : result
  );
  return JSON.parse(data);
};

export const setLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return JSON.stringify(data);
};

export const removeItem = (key) => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
