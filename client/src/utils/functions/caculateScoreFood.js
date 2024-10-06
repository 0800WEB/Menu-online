export const calculateAverageScore = (reviews) => {
  if (reviews.length === 0) return 0;
  const totalScore = reviews.reduce((sum, review) => sum + review.score, 0);
  return (totalScore / reviews.length).toFixed(1);
};
