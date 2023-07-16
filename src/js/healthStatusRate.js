export default function healthStatusRate(players) {
  return players.sort((a, b) => b.health - a.health);
}
