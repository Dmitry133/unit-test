export default function ealthStatusRate(players) {
  return players.sort((a, b) => b.health - a.health);
}
