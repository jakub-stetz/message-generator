// Identifying Current Date and Making a Nice String Out of It //
const date = new Date();
const weekday = date.toLocaleString('en', {weekday: 'long'});
const day = date.getDate();
const month = date.toLocaleString('en', {month: 'long'});
const year = date.getFullYear();
const dateString = `${weekday}, ${day} ${month} ${year}`;

// Program Output //
console.log(`\n#### Randomized Transformational Coaching for ${dateString} ####\n`);