"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shuffleQuiz = (quizData) => {
    if (quizData && typeof quizData === 'object') {
        const questions = Object.values(quizData).sort(() => Math.random() - 0.5);
        for (const question of questions) {
            // Check if options is an array before shuffling
            if (Array.isArray(question.options)) {
                question.options = shuffleArray(question.options);
            }
        }
        return questions;
    }
    else {
        throw new Error('Invalid quiz data format');
    }
};
// Function to shuffle array
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
exports.default = shuffleQuiz;
