const mountFloatingMusicPlayer = () => {
  if (document.querySelector(".floating-music-player")) {
    return;
  }

  const player = document.createElement("iframe");
  player.className = "floating-music-player";
  player.setAttribute("frameborder", "no");
  player.setAttribute("border", "0");
  player.setAttribute("marginwidth", "0");
  player.setAttribute("marginheight", "0");
  player.setAttribute("width", "300");
  player.setAttribute("height", "200");
  player.src = "https://music.163.com/outchain/player?type=0&id=2296857569&auto=1&height=430";

  document.body.appendChild(player);
};

document.addEventListener("DOMContentLoaded", mountFloatingMusicPlayer);

if (typeof document$ !== "undefined") {
  document$.subscribe(mountFloatingMusicPlayer);
}
