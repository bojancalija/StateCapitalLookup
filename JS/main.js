const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

// Search states.json and filter it

const searchStates = async searchText => {
    const response = await fetch('../data/states.json');
    const states = await response.json();
    
    // Get matches to current text input
    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`,'gi');
        return state.name.match(regex) || state.abbr.match(regex);
    });
    
    if(searchText.length === 0) {
        matches = [];
        
    } 
   // outputHtml(matches);
    // Show matches in HTML output
const outputHtml = matches.map(
    match => `
    <div class="card card-body mb1">
        <h4>${match.name} (${match.abbr}) <span class="text-primary">${match.capital}</span></h4>
        <small>Lat: ${match.lat} / Long: ${match.long}</small>
    </div>
    `
).join('');

matchList.innerHTML = outputHtml;

};




search.addEventListener('input', () => searchStates(search.value));

