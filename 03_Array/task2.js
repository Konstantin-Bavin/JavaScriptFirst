function getWeekends(value = 'long') {
    let weekends = [];

    if (value === 'long') {
        weekends = ['saturday', 'sunday'];
    } else if (value === 'short') {
        weekends = ['sat', 'sun'];
    }

    return weekends;
}

console.log(getWeekends());