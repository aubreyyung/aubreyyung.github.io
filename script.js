
  
  function calculateDensity(text, words) {
    // Returns an object with the density and frequency of each word in the text.
    const wordCount = text.split(/\s+/).length;
    const frequency = {};
    for (const word of words) {
      const count = text.match(new RegExp(`\\b${word}\\b`, 'gi'))?.length || 0;
      frequency[word] = count;
    }
    const density = {};
    for (const word in frequency) {
      density[word] = {
        frequency: frequency[word],
        percentage: (frequency[word] / wordCount) * 100
      };
    }
    return density;
  }
  
  function onSubmit(event) {
    event.preventDefault();
    const text = document.getElementById('text-input').value;
    const words = document.getElementById('words-input').value.split(',');
    const density = calculateDensity(text, words);
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = '';
    const heading = document.createElement('h2');
    heading.textContent = 'Keyword Density Report';
    resultContainer.appendChild(heading);
    const table = document.createElement('table');
    resultContainer.appendChild(table);
    const headerRow = document.createElement('tr');
    table.appendChild(headerRow);
    const headerWordCell = document.createElement('th');
    headerWordCell.textContent = 'Word';
    headerRow.appendChild(headerWordCell);
    const headerFrequencyCell = document.createElement('th');
    headerFrequencyCell.textContent = 'Frequency';
    headerRow.appendChild(headerFrequencyCell);
    const headerPercentageCell = document.createElement('th');
    headerPercentageCell.textContent = 'Percentage';
    headerRow.appendChild(headerPercentageCell);
    for (const word in density) {
      const row = document.createElement('tr');
      table.appendChild(row);
      const wordCell = document.createElement('td');
      wordCell.textContent = word;
      row.appendChild(wordCell);
      const frequencyCell = document.createElement('td');
      frequencyCell.textContent = density[word].frequency;
      row.appendChild(frequencyCell);
      const percentageCell = document.createElement('td');
      percentageCell.textContent = `${density[word].percentage.toFixed(2)}%`;
      row.appendChild(percentageCell);
    }
  }
  
  
  const form = document.getElementById('input-form');
  form.addEventListener('submit', onSubmit);
