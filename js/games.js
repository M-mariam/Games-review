import { Details } from "./details.js";
import { Ui } from "./ui.js";

export class Games {
  constructor() {
    this.ui = new Ui();
    this.getGames("mmorpg");
    document.querySelectorAll('.menu a').forEach((link) => {
      link.addEventListener('click', (e) => {
        document.querySelector('.menu .active').classList.remove('active');
        e.target.classList.add('active');
        this.getGames(e.target.dataset.category);
      });
    });
  }

  async getGames(category) {
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
      const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
      const response = await api.json();
      this.ui.displayGamesData(response);
      this.startEvent();
    } catch (error) {
      console.error('Error fetching games:', error);
    } finally {
      loading.classList.add("d-none");
    }
  }

  startEvent() {
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener('click', () => {
        const id = card.dataset.id;
        this.showDetails(id);
      });
    });
  }

  showDetails(idGame) {
    const details = new Details(idGame);
    document.querySelector(".games").classList.add('d-none');
    document.querySelector(".details").classList.remove('d-none');
  }
}
