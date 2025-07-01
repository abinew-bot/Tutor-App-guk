export default function explainMath(question) {
  question = question.toLowerCase();
  if (question.includes('5 plus 3')) {
    return '5 plus 3 is 8';
  } else if (question.includes('area of square')) {
    return 'The area of a square is side times side.';
  } else if (question.includes('12 minus 4')) {
    return '12 minus 4 is 8';
  } else {
    return 'Sorry, I cannot understand the question yet.';
  }
}