import roster from "./roster.json";
import "./styles.css";
import olgcLogo from "./assets/images/blueKnightBasketballPlayer.jpg";

const logo = document.getElementById("logo");
if (logo) logo.src = olgcLogo;

const renderMember = (member, containerId, isPlayer) => {
  const container = document.getElementById(containerId);
  if (!container) return;

  const card = document.createElement("div");
  card.className = `card ${isPlayer ? "is-flippable" : ""}`;

  if (isPlayer) {
    card.addEventListener("click", function() {
      this.classList.toggle("is-flipped");
    });
  }

  const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=${isPlayer ? 'FFD700' : '003366'}&color=001f3f&size=200`;

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">
        <div class="card-image-circle">
          <img src="${member.image || avatar}" alt="${member.name}">
        </div>
        <h3 style="font-family:'Bebas Neue'; font-size:1.5rem;">${member.name}</h3>
        <span class="position-badge" style="font-size:0.7rem; text-transform:uppercase; font-weight:800; color:var(--secondary);">${member.position}</span>
        ${isPlayer ? `<p style="margin-top:10px; font-weight:900; color:#ccc; font-size:1.2rem;">#${member.number}</p>` : ''}
      </div>
      
      ${isPlayer ? `
      <div class="card-back">
        <h3 style="color:var(--accent); font-family:'Bebas Neue'; font-size:1.8rem; margin-bottom:5px;">Stats</h3>
        <div style="width:100%">
          <div class="stat-row"><span class="stat-label">PTS</span><span>${member.ppg}</span></div>
          <div class="stat-row"><span class="stat-label">REB</span><span>${member.rpg}</span></div>
          <div class="stat-row"><span class="stat-label">AST</span><span>${member.apg}</span></div>
          <div class="stat-row"><span class="stat-label">STL</span><span>${member.spg}</span></div>
          <div class="stat-row"><span class="stat-label">BLK</span><span>${member.bpg}</span></div>
        </div>
      </div>` : ''}
    </div>
  `;
  container.appendChild(card);
};

roster.coaches.forEach(c => renderMember(c, "coaches-container", false));
roster.players.forEach(p => renderMember(p, "player-container", true));