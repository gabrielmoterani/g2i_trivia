import api from './api';



export const getQuestionsFromApi = (difficulty = 'hard', ammount = 10, type = 'boolean') => {
    return api.get(`?amount=${ammount}&difficulty=${difficulty}&type=${type}`);
}