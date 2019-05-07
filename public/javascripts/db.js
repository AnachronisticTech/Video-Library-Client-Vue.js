import axios from 'axios';

const instance = axios.create({
    baseURL: 'hhtp://localhost:3000'
});

exports.video_detail = function(id) {
    return instance.get('/video/'+id);
}
