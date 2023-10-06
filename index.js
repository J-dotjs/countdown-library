function addHours(date, hours) {
    return new Date(date.getTime() + hours * 60 * 60 * 1000);
}

function addDays(date, days) {
    return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
}

function addWeeks(date, weeks) {
    return new Date(date.getTime() + weeks * 7 * 24 * 60 * 60 * 1000);
}

function addMonths(date, months) {
    return new Date(date.getFullYear(), date.getMonth() + months);
}

function addYears(date, years) {
    return new Date(date.getFullYear() + years);
}

module.exports = {
    addHours,
    addDays,
    addWeeks,
    addMonths,
    addYears
}