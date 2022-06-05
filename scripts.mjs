
import fetch from "node-fetch";

// API Request
const baseUrl = "https://api.spotify.com/v1/search"
const client_id =  "341fde6de8e2491b936ed1bdc8010c6a"
const client_secret =  "b25f4e507c6646e4a3f73d6149cb4446"
const o_auth_token = "BQC_i-TkCPC1dwtYebV4clsPWndb8CtgVX5iX1n90iHm_beofsn6GCQHoWEHheAJum7G1EH-S2SdlSR1IQcsYFzmL-Bj2tovKQ3iuJOc1AnJvwVQMXuaX3hsvgLfXY9JtHL_tLGXbqhX0kmizzMfUFVP4EzP8jtm8sre4Eq1oviwQ3STM9NiwjxSxrZR7dBUPntFTynOHi7-k3q0WPGZ6I-_pleGXwD_vK_fXJUGDJWzdYZfygAR-DJHMdxHxtU4"
const q = "?artist:Miles%20Davis"
const type = "&type=artist"
const request_url = baseUrl + q + type

fetch(request_url,
  {
    //method: 'POST',
    //body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret,
    method: 'GET',
    headers: {
      
      'Accept': "application/json",
      'Content-Type': "application/json",
      'Authorization': "Bearer " + o_auth_token
      }
  })
      .then((response) => {
          console.log(response.json().then(
              (data) => {console.log(data) }
          ));
      })
      .catch(function (err) {
        console.log("Something went wrong!", err);
    });


  // fetch('https://api.spotify.com/v1/artists/21E3waRsmPlU7jZsS13rcj', {
  //           method: 'GET', headers: {
  //               'Accept': 'application/json',
  //               'Content-Type': 'application/json',
  //               'Authorization': 'Bearer ' + accessToken
  //           }
  //       })
  //           .then((response) => {
  //               console.log(response.json().then(
  //                   (data) => { console.log(data) }
  //               ));
  //           });

  // "remaster%20track:Doxy+artist:Miles%20Davis"

/*NAVBAR SCRIPTS from https://webdesign.tutsplus.com/tutorials/how-to-build-a-responsive-navigation-bar-with-flexbox--cms-33535*/

// const toggle = document.querySelector(".toggle");
// const menu = document.querySelector(".menu");
 
// /* Toggle mobile menu */
// function toggleMenu() {
//     if (menu.classList.contains("active")) {
//         menu.classList.remove("active");
         
//         // adds the menu (hamburger) icon
//         toggle.querySelector("a").innerHTML = "<i class=’fas fa-bars’></i>";
//     } else {
//         menu.classList.add("active");
         
//         // adds the close (x) icon
//         toggle.querySelector("a").innerHTML = "<i class=’fas fa-times’></i>";
//     }
// }
 
// /* Event Listener */
// toggle.addEventListener("click", toggleMenu, false);

// const items = document.querySelectorAll(".item");
 
// /* Activate Submenu */
// function toggleItem() {
//   if (this.classList.contains("submenu-active")) {
//     this.classList.remove("submenu-active");
//   } else if (menu.querySelector(".submenu-active")) {
//     menu.querySelector(".submenu-active").classList.remove("submenu-active");
//     this.classList.add("submenu-active");
//   } else {
//     this.classList.add("submenu-active");
//   }
// }
 
// /* Event Listeners */
// for (let item of items) {
//     if (item.querySelector(".submenu")) {
//       item.addEventListener("click", toggleItem, false);
//       item.addEventListener("keypress", toggleItem, false);
//     }   
// }

// /* Close Submenu From Anywhere */
// function closeSubmenu(e) {
//     if (menu.querySelector(".submenu-active")) {
//       let isClickInside = menu
//         .querySelector(".submenu-active")
//         .contains(e.target);
   
//       if (!isClickInside && menu.querySelector(".submenu-active")) {
//         menu.querySelector(".submenu-active").classList.remove("submenu-active");
//       }
//     }
//   }
   
//   /* Event listener */
//   document.addEventListener("click", closeSubmenu, false);