const warriorsGames = [
	{
		awayTeam : {
			team     : 'Salão da Márcia',
			points   : 119,
			isWinner : true
		},
		homeTeam : {
			team     : 'O Cabeludo',
			points   : 106,
			isWinner : false
		}
	},
	{
		awayTeam : {
			team     : 'Salão da Márcia',
			points   : 105,
			isWinner : false
		},
		homeTeam : {
			team     : 'O Cabeludo',
			points   : 127,
			isWinner : true
		}
	},
	{
		homeTeam : {
			team     : 'Salão da Márcia',
			points   : 126,
			isWinner : true
		},
		awayTeam : {
			team     : 'O Cabeludo',
			points   : 85,
			isWinner : false
		}
	},
	{
		homeTeam : {
			team     : 'Salão da Márcia',
			points   : 92,
			isWinner : false
		},
		awayTeam : {
			team     : 'O Cabeludo',
			points   : 95,
			isWinner : true
		}
	},
	{
		awayTeam : {
			team     : 'Salão da Márcia',
			points   : 94,
			isWinner : false
		},
		homeTeam : {
			team     : 'O Cabeludo',
			points   : 98,
			isWinner : true
		}
	},
	{
		homeTeam : {
			team     : 'Salão da Márcia',
			points   : 115,
			isWinner : true
		},
		awayTeam : {
			team     : 'O Cabeludo',
			points   : 86,
			isWinner : false
		}
	},
	{
		awayTeam : {
			team     : 'Salão da Márcia',
			points   : 101,
			isWinner : true
		},
		homeTeam : {
			team     : 'O Cabeludo',
			points   : 92,
			isWinner : false
		}
	},
	{
		awayTeam : {
			team     : 'O cabeludo',
			points   : 24,
			isWinner : true
		},
		homeTeam : {
			team     : 'salão da márcia',
			points   : 350,
			isWinner : false
		}
	}
];

// ***

const ulParent = document.createElement('ul');
for (let game of warriorsGames) {
    const { homeTeam, awayTeam } = game;
    const gameLi = document.createElement('li');
    const { team: hTeam, points: hPoints } = homeTeam;
    const { team: aTeam, points: aPoints } = awayTeam;
    const teamNames = `${aTeam} @ ${hTeam}`;
    let scoreLine;
    if (aPoints > hPoints) {
        scoreLine = `<b>${aPoints}</b>-${hPoints}`;
    } else {
        scoreLine = `${aPoints}-<b>${hPoints}</b>`;
    }
    const warriors = hTeam === 'Salão da Márcia' ? homeTeam : awayTeam;
    const originalClass = warriors.isWinner ? 'win' : 'loss'
	gameLi.classList.add(originalClass);

	gameLi.addEventListener('mouseover', function(){
		gameLi.className = 'over';
	})
	gameLi.addEventListener('mouseout', function(){
		gameLi.classList.remove('over');
		gameLi.className = originalClass;
	})

    gameLi.innerHTML = `${teamNames} | ${scoreLine}`
    ulParent.appendChild(gameLi);
}
document.body.prepend(ulParent)

