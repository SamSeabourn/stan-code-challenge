export const getNavigationIndex = (
  keyCode: string,
  currentIndex: number,
  programCount: number
): number => {
  const i = currentIndex;
  switch (keyCode) {
    case 'ArrowRight':
      if (currentIndex >= programCount - 1) {
        return currentIndex;
      } else {
        return i + 1;
      }
    case 'ArrowLeft':
      if (currentIndex <= 0) {
        return 0;
      } else {
        return i - 1;
      }
    default:
      return i;
  }
};
