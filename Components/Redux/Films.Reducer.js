export default function (filmData = [], action) {
    if (action.type == 'films') {
        return action.filmData;
    } else {
        return filmData;
    }
}
