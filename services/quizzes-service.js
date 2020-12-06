let quizzes = require('./quizzes.json')

const findAllQuizzes = () => quizzes

const findQuizById = (quizId) =>
    quizzes.find(quiz => quiz._id === quizId)

const createQuiz = () => {
    const quiz = {_id: (new Date()).getTime() + "", title: "New Quiz"}
    quizzes.push(quiz)
    return quiz
}

const deleteQuiz = (qid) =>
    quizzes.filter(quiz => quiz._id !== qid)

const updateQuiz = (qid, newQuiz) =>
    quizzes.map(quiz => quiz._id === qid ? newQuiz : quiz)

module.exports = {
    findAllQuizzes,
    findQuizById,
    createQuiz,
    deleteQuiz,
    updateQuiz
}

