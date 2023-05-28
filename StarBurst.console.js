quizname = document.getElementById("quiz_title").innerText.trim();

// Retrieve existing allQuestionsText from localStorage (if any)
let allQuestionsText = JSON.parse(localStorage.getItem(quizname)) || [];

all_questions = document.querySelectorAll("#questions > div");

all_questions.forEach((div) => {
  questionTextDiv = div.querySelector('.question_text');
  if (questionTextDiv) {
    const questionText = questionTextDiv.textContent.trim();
    const answerText = div.querySelectorAll(".correct_answer > div > label")[0].innerText.trim();
    allQuestionsText.push([questionText, answerText]);
  }
});

// Deduplicate the array
allQuestionsText = Array.from(new Set(allQuestionsText.map(JSON.stringify)), JSON.parse);

// Update localStorage with the updated allQuestionsText
localStorage.setItem(quizname, JSON.stringify(allQuestionsText));

console.log(allQuestionsText.length);

function convertToCsv(allQuestionsText) {
  // Generate CSV string from the allQuestionsText array
  const csvRows = allQuestionsText.map(([key, value]) => {
    const replacedKey = key.toString().replace(/[\n,]/g, ' ').replace(/\s+/g, ' ').trim();
    const replacedValue = value.toString().replace(/[\n,]/g, ' ').replace(/\s+/g, ' ').trim();
    // Create a string for this row in CSV format
    return `${replacedKey},${replacedValue}`;
  });

  // Join the rows into a single string with line breaks
  const csvString = csvRows.join('\n');
  
  return csvString;
}

copy(convertToCsv(allQuestionsText));