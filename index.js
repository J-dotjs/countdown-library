function addSeconds(date, seconds) {
    return new Date(date.getTime() + seconds * 1000);
}

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

function toUnix(date) {
    return Math.floor(date.getTime() / 1000);
}

function convertToSeconds(date) {
    return date.getTime() / 1000;
}

function convertToMinutes(date) {
    return date.getTime() / 1000 / 60;
}

function convertToHours(date) {
    return date.getTime() / 1000 / 60 / 60;
}

function convertToDays(date) {
    return date.getTime() / 1000 / 60 / 60 / 24;
}

function convertToWeeks(date) {
    return date.getTime() / 1000 / 60 / 60 / 24 / 7;
}

function convertToMonths(date) {
    return date.getTime() / 1000 / 60 / 60 / 24 / 30;
}

function convertToYears(date) {
    return date.getTime() / 1000 / 60 / 60 / 24 / 365;
}

module.exports = {
    toUnix,
    addSeconds,
    addHours,
    addDays,
    addWeeks,
    addMonths,
    addYears,
    convertToSeconds,
    convertToMinutes,
    convertToHours,
    convertToDays,
    convertToWeeks,
    convertToMonths,
    convertToYears
}