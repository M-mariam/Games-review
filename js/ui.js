// export class Ui {
//   dispayGamesData(data) {
//     let gamesCard = '';
//     for (let i = 0; i < data.length; i++) {
//       gamesCard += `
//         <div class="col-md-4">
//           <div class="card" role="button">
//             <div class="card-content">
//               <div class="main-img position-relative">
//                 <img class="card-img-top object-fit-cover h-100" src="${data[i].thumbnail}" alt="">
//               </div>
//               <div class="content">
//                 <div class="hstack justify-content-between">
//                   <h3 class="h6 small text-white">${data[i].title}</h3>
//                   <span class="badge text-bg-primary p-2">Free</span>
//                 </div>
//                 <p class="card-text small text-center opacity-50">${data[i].short_description.split(" ", 8).join(" ")}</p>
//               </div>
//               <footer class="card-footer small d-flex justify-content-between">
//                 <span class="badge badge-color">${data[i].genre}</span>
//                 <span class="badge badge-color">${data[i].platform}</span>
//               </footer>
//             </div>
//           </div>
//         </div>`;
//     }
//     document.getElementById("rowData").innerHTML = gamesCard;
//   }
//   displayDetails(data) {
//     const content = `
//         <div class="col-md-4">
//           <img src="${data.thumbnail}" class="w-100" alt="image details" />
//         </div>
//         <div class="col-md-8">
//           <h3 class = "text-white">Title: ${data.title}</h3>
//           <p class = "text-white">Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
//           <p class = "text-white">Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
//           <p class = "text-white">Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
//           <p class="small text-white">${data.description}</p>
//           <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
//         </div>`;
//     document.getElementById("contentDetails").innerHTML = content;
//   }
// }
export class Ui {
  displayGamesData(data) {
    let gamesCard = '';
    for (let i = 0; i < data.length; i++) {
      gamesCard += `
        <div class="col-md-4">
          <div class="card" role="button" data-id="${data[i].id}">
            <div class="card-content">
              <div class="main-img position-relative">
                <img class="card-img-top object-fit-cover h-100" src="${data[i].thumbnail}" alt="${data[i].title} Thumbnail">
              </div>
              <div class="content">
                <div class="hstack justify-content-between">
                  <h3 class="h6 small text-white">${data[i].title}</h3>
                  <span class="badge text-bg-primary p-2">Free</span>
                </div>
                <p class="card-text small text-center opacity-50">${data[i].short_description.split(" ", 8).join(" ")}</p>
              </div>
              <footer class="card-footer small d-flex justify-content-between">
                <span class="badge badge-color">${data[i].genre}</span>
                <span class="badge badge-color">${data[i].platform}</span>
              </footer>
            </div>
          </div>
        </div>`;
    }
    document.getElementById("rowData").innerHTML = gamesCard;
  }

  displayDetails(data) {
    const content = `
        <div class="col-md-4">
          <img src="${data.thumbnail}" class="w-100" alt="image details" />
        </div>
        <div class="col-md-8">
          <h3 class="text-white">Title: ${data.title}</h3>
          <p class="text-white">Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
          <p class="text-white">Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
          <p class="text-white">Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
          <p class="small text-white">${data.description}</p>
          <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
        </div>`;
    document.getElementById("contentDetails").innerHTML = content;
  }
}
