const quizService = require('../services/quizzes-service')

module.exports = (app) => {
    const findAllQuizzes = (req, res) =>
        res.send(quizService.findAllQuizzes())

    const findQuizById = (req, res) => {
        const quizId = req.params['qid']
        const quiz = quizService.findQuizById(quizId)
        res.json(quiz)
    }

    const createQuiz = (req, res) => {
        const quiz = quizService.createQuiz()
        res.json(quiz)
    }

    const deleteQuiz = (req, res) => {
        const qid = req.params['qid']
        quizService.deleteQuiz(qid)
        res.send(200)
    }

    const updateQuiz = (req, res) => {
        const qid = req.params['qid']
        const newQuiz = req.body
        quizService.updateQuiz(qid, newQuiz)
        res.send(200)
    }

    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes/:qid', findQuizById)
    app.post('/api/quizzes', createQuiz)
    app.delete("/api/quizzes/:qid", deleteQuiz)
    app.put("/api/quizzes/:qid", updateQuiz)
}
