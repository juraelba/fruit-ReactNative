export const pixelsToStyleSheet = (property: any): number => {
  if(property !== 'undefined'){
    const formattedText = property.replace('px', '');
    return parseFloat(formattedText);
  }
};

export default pixelsToStyleSheet;
