export const loadQuiz = async (id) => {
  const quizData = await fetch(
    "https://openapi.programming-hero.com/api/quiz/"+id
  );
  const quiz = await quizData.json();
  console.log("quiz", quiz);
  return quiz.data;
};
