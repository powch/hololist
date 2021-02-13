import axios from 'axios';

export const getTalentInfo = () => axios.get('api/talents');

