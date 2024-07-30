// Functions //

const selectRandomArrayElement = array => array[Math.floor(Math.random()*array.length)]; // Select random element out of an array.

const narrowPrint = (string, width, leftFrame = '') => {
  if (!width) throw new Error('Make sure to input a width value for narrowPrint() function!');
  let length = string.length+1; // +1 for extra space that will be at the end of the final string.
  let stringWords = string.split(' ');
  let singleLine = '';
  let singleLineLength = 0;
  let wordAndSpaceLength = 0;
  while (length > 0) {
    while (singleLineLength + wordAndSpaceLength < width && stringWords.length > 0) { // Check resulting length after next addition against width input, and check to ensure that the array of words from our string isn't empty.
      wordAndSpaceLength = stringWords[0].length+1; // Save length of next word, +1 for extra space.
      singleLineLength += wordAndSpaceLength; // Add next word length to overall length of current line.
      singleLine += stringWords.shift() + ' '; // Add next word to line output, along with extra space.
    }
    length -= singleLineLength; // Subtract word added to line from overall input string length.
    console.log(leftFrame + singleLine); // Print single line.
    wordAndSpaceLength = singleLineLength = 0; // Reset values for next line.
    singleLine = '';
  };
};

// Identify Current Date and Making a Nice String Out of It //
const date = new Date();
const weekday = date.toLocaleString('en', {weekday: 'long'});
const day = date.getDate();
const month = date.toLocaleString('en', {month: 'long'});
const year = date.getFullYear();
const dateString = `${weekday}, ${day} ${month} ${year}`;

// Store Quotes to Select From
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

// Store Principles to Select From
const principles = ['Empathy', 'Gratitude', 'Intuition', 'Self-care', 'Vision'];

// Store Practices to Select From
const practices = [
  {name: 'The "I Am Experiencing" Process', purpose: 'Support you to penetrate past the logical or analytical mind and simply give full space for whatever physical or emotional sensations you are experiencing.', prescription: 'When your mind feels very loud, dense, or heavy, or you are otherwise feeling disconnected from your body or heart.', description: 'Close your eyes and simply repeat the statement "I am experiencing...", completing the statement with whatever comes up. Don\'t try to filter or make sense of what comes to mind; just say whatever comes up regardless of if it makes sense or not or if it feels aligned or not. Continue this process until you feel complete, which is often symptomized by transitioning from negative or heavy emotions to positive emotions.'},
  {name: 'The Five Questions Process', purpose: 'Support you to give full space for physical sensations in your body, and to release negative sensations by fully experiencing them.', prescription: 'When you are feeling some persistent (especially negative) physical sensation.', description: 'Answer the five questions in order repeatedly until you feel clear of any negative sensations. The five questions are:     1. "Where are you experiencing the sensation? Be specific."     2. "What does the sensation feel like?"     3. "If it had a color, what color would it have?"     4. "If it had a shape, what shape would it have?"     5. "If it could hold water, how much water would it hold?"'},
  {name: '6 Healing Sounds', purpose: 'Clear out negative emotions or energies from the body and mind.', prescription: 'Every day or on some other consistent basis. Especially when you feel caught up in negative emotions or heavy energies.', description: 'Starting from Wu Ji position, settle into your body. Then, inhale deeply and exhale deeply. As you inhale, imagine a colored light or vapor filling the part of your body, and as you exhale imagine that light or vapor exiting that part of your body, taking with it any negative energy and leaving positive energy behind. The 6 healing sounds with their corresponding body parts, light/vapor colors and emotions are:     1. Lungs - White - Sadness, depression - "Ssss"     2. Kidneys - Blue - Fear - "Choo"     3. Liver - Green - Anger, frustration, jealousy - "Shhh"     4. Heart - Red - Impatience, hatred, cruelty - "Haaw"     5. Spleen, stomach - Yellow - Worry, anxiety, addiction - "Hooo"     6. Triple Heater (full body) - Translucent or rainbow - "Heee"'},
  {name: 'Deep Earth Pulsing', purpose: 'Stabilize and ground down energetically.', prescription: 'Multiple times a week or on some other consistent basis. Especially when you feel scattered, overstimulated, or chaotic.', description: 'Start from Wu Ji position and do a body scan, melting down throughout the body. Then, sway left and right from the hips while lifting the opposite heel slightly. When swaying to the left, pull up nourishing energy from the earth with your right foot and push down to the earth your energy mixed with the earth\'s energy through your left foot, and vice-versa. Continue for at least 10 minutes, until you feel energetically stable and clear.'},
  {name: 'Releasing Absorbed Negative Energy', purpose: 'Release negative emotions and energy absorbed from others through empathy.', prescription: 'Regularly. Especially when you are feeling heavy, mixed-up, or dense.', description: 'Stand (ideally barefoot) in the grass and consciously push down absorbed negative emotions and energy into the earth.'}
];

// Program Output //
const width = 85; // Desired width of output.
console.log(`\n#### Randomized Transformational Coaching for ${dateString} ####\n`);

const quote = selectRandomArrayElement(quotes);
narrowPrint('Today\'s inspirational/insightful quote to reflect on: "' + quote.quote + '" --- ' + quote.source, width);
console.log('\n');

const principle = selectRandomArrayElement(principles).toLowerCase();
narrowPrint('Additionally, I invite you to reflect on the principle of ' + principle + '. How have you interacted with the principle of ' + principle + ' recently? How are you inspired to relate with it today?', width);
console.log('\n');

const practice = selectRandomArrayElement(practices);
narrowPrint('Finally, here is a practice which you might consider implementing in your day today. See if it resonates with you, and if it does then try it out as a source of nourishment and recalibration:', width);

const leftFrame = '  ||  ';
const narrowWidth = 60; // Width for "practice placard."
console.log('\n');
console.log('  //' + '*'.repeat(narrowWidth + leftFrame.length + 2) + '\\\\\n  ||'); // Some ASCII styling.
narrowPrint(practice.name, narrowWidth, leftFrame);
console.log(leftFrame);
narrowPrint('The purpose of this practice is to ' + practice.purpose.toLowerCase(), narrowWidth, leftFrame);
console.log(leftFrame);
narrowPrint('This practice is recommended ' + practice.prescription.toLowerCase(), narrowWidth, leftFrame);
console.log(leftFrame + '\n' + leftFrame + 'The practice is performed as follows:\n' + leftFrame);
narrowPrint(practice.description, narrowWidth, leftFrame);
console.log('  ||\n  \\\\' + '*'.repeat(narrowWidth + leftFrame.length + 2) + '//'); // Some ASCII styling.
console.log('\n');