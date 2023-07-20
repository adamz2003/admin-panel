export const ValidateObj = (obj: any) => {
    var result = true
  Object.entries(obj).forEach(([key, value]: any, index) => {
    if (!value) {
        result = false;
        return false;
    }
  });
  return result;
};
