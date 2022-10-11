export const loadQuiz = async (id) => {
  const quizData = await fetch(
    "https://openapi.programming-hero.com/api/quiz/" + id
  );
  const quiz = await quizData.json();
  console.log("quiz", quiz);
  if (quiz.status) {
    return quiz.data;
  } else {
    return { error: "No quiz found!!!" };
  }
};
