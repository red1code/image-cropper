export const removeExt = (fileName) => fileName.replace(/\.[^/.]+$/, '');

export const getExt = (str) => str.split('.').pop();
