import { Ui } from "./ui.js";

export class Details {
  constructor(id) {
    this.ui = new Ui();
    this.initializeCloseButton();
    this.getDetails(id);
  }

  initializeCloseButton() {
    const btnClose = document.getElementById("btnClose");
    if (btnClose) {
      btnClose.addEventListener('click', () => {
        document.querySelector(".games").classList.remove("d-none");
        document.querySelector(".details").classList.add("d-none");
      });
    } else {
      console.error('Close button not found');
    }
  }

  async getDetails(idGame) {
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");
  
    const options = {
      method: 'GET',
      headers: {
     	'x-rapidapi-key': '337ea965d5msh628726a3b2ed715p1654bajsn809d11d2e54d',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
  
    try {
      const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGame}`, options);
      const response = await api.json();
      this.ui.displayDetails(response);
    } catch (error) {
      console.error('Error fetching game details:', error);
    } finally {
      loading.classList.add("d-none");
    }
  }
  
}

