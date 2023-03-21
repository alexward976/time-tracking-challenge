const cards = document.getElementsByClassName('card');

updateTimes('weekly');

async function updateTimes(category) {

    const request = new Request('./data.json');
    const response = await fetch(request);
    const dataArray = await response.json();

    dataArray.forEach(data => {
        const timeElement = document.createElement('p');
        const prevTimeElement = document.createElement('p');
        const title = data.title.replace(/ +/g, '-').toLowerCase();
        const mainElement = document.getElementById(`${title}-main`);
        mainElement.innerHTML = "";

        timeElement.classList.add('main--time');
        prevTimeElement.classList.add('main--prev-time');
        
        switch(category) {
            case 'daily':
                if(data.timeframes.daily.current === 1) {
                    timeElement.textContent = `${data.timeframes.daily.current}hr`;
                } else {
                    timeElement.textContent = `${data.timeframes.daily.current}hrs`;
                }

                if(data.timeframes.daily.previous === 1) {
                    prevTimeElement.textContent = `Last week - ${data.timeframes.daily.previous}hr`;
                } else {
                    prevTimeElement.textContent = `Last week - ${data.timeframes.daily.previous}hrs`;                    
                }
                break;
            case 'weekly':
                if(data.timeframes.weekly.current === 1) {
                    timeElement.textContent = `${data.timeframes.weekly.current}hr`;
                } else {
                    timeElement.textContent = `${data.timeframes.weekly.current}hrs`;
                }

                if(data.timeframes.weekly.previous === 1) {
                    prevTimeElement.textContent = `Last week - ${data.timeframes.weekly.previous}hr`;
                } else {
                    prevTimeElement.textContent = `Last week - ${data.timeframes.weekly.previous}hrs`;                    
                }
                break;
            case 'monthly':
                if(data.timeframes.monthly.current === 1) {
                    timeElement.textContent = `${data.timeframes.monthly.current}hr`;
                } else {
                    timeElement.textContent = `${data.timeframes.monthly.current}hrs`;
                }

                if(data.timeframes.monthly.previous === 1) {
                    prevTimeElement.textContent = `Last week - ${data.timeframes.monthly.previous}hr`;
                } else {
                    prevTimeElement.textContent = `Last week - ${data.timeframes.monthly.previous}hrs`;                    
                }
                break;
            default:
                console.log('Error: category was not set');
        }

        mainElement.append(timeElement, prevTimeElement);
    })
}

