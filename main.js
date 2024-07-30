// Identifying Current Date and Making a Nice String Out of It //
const date = new Date();
const weekday = date.toLocaleString('en', {weekday: 'long'});
const day = date.getDate();
const month = date.toLocaleString('en', {month: 'long'});
const year = date.getFullYear();
const dateString = `${weekday}, ${day} ${month} ${year}`;

const quotes = [{
  quote: 'True change doesn’t emerge just from action; it emerges from genuine understanding. Action that stems from shallow understanding turns out to be shallow action. Action that flows from deeply felt consciousness is action that can change the world.', source: 'Marianne Williamson'},
  {quote: 'Insight that is genuinely, profoundly realized and experienced, naturally inspires potent and purposeful action.', source: 'David Wolf'},
  {quote: 'You’re more likely to act yourself into feeling than feel yourself into action.', source: 'Dr. Jerome Burner'},
  {quote: 'To achieve great things, two things are needed; a plan, and not quite enough time.', source: 'Leonard Bernstein'},
  {quote: 'True listening, total concentration on the other, is always a manifestation of love.', source: 'M. Scott Peck'},
  {quote: 'Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.', source: 'Rumi'},
  {quote: 'The greatest hazard of all, losing one’s self, can occur very quietly in the world, as if it were nothing at all. No other loss can occur so quietly; any other loss--an arm, a leg, five dollars, a wife, etc.--is sure to be noticed.', source: 'Søren Kierkegaard'},
  {quote: 'I have so much to do that I shall spend the first three hours in prayer.', source: 'Martin Luther'}
];

// Program Output //
console.log(`\n#### Randomized Transformational Coaching for ${dateString} ####\n`);