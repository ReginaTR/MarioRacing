<h1>Project Challenge by Felipão DIO: Mario Kart.JS</h1>

  <table>
        <tr>
            <td>
                <img src="./docs/header.gif" alt="Mario Kart" width="200">
            </td>
            <td>
                <b>Objective:</b>
                <p>Mario Kart is a racing game series developed and published by Nintendo. Our challenge is to create the game logic of a video game that simulates Mario Kart races, taking into account the following rules and mechanics.</p>
            </td>
        </tr>
    </table>

<h2>Players</h2>
      <table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Mario</p>
                <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocity: 4</p>
                <p>Maneuverability: 3</p>
                <p>Power: 3</p>
            </td>
             <td style="border: 1px solid black; text-align: center;">
                <p>Peach</p>
                <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocity: 3</p>
                <p>Maneuverability: 4</p>
                <p>Power: 2</p>
            </td>
              <td style="border: 1px solid black; text-align: center;">
                <p>Yoshi</p>
                <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocity: 2</p>
                <p>Maneuverability: 4</p>
                <p>Power: 3</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Bowser</p>
                <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocity: 5</p>
                <p>Maneuverability: 2</p>
                <p>Power: 5</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Luigi</p>
                <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocity: 3</p>
                <p>Maneuverability: 4</p>
                <p>Power: 4</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Donkey Kong</p>
                <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocity: 2</p>
                <p>Maneuverability: 2</p>
                <p>Power: 5</p>
            </td>
        </tr>
    </table>

<p></p>

<h3>🕹️ Rules & mechanics:</h3>

<b>Players:</b>

<input type="checkbox" id="players-item" />
<label for="players-item">The system should receive two character objects, each representing a participant in the race.</label>

<b>Tracks:</b>

<ul>
  <li><input type="checkbox" id="tracks-1-item" /> <label for="tracks-1-item">The characters will race on a random track with 5 rounds.</label></li>
  <li><input type="checkbox" id="tracks-2-item" /> <label for="tracks-2-item">At each round, a section of the track will be randomly selected. It can be a straight, a turn or a clash.</label>
    <ul>
      <li><input type="checkbox" id="tracks-2-1-item" /> <label for="tracks-2-1-item">If the track block is a STRAIGHT, the player must roll a 6-sided die and add their SPEED attribute. The one with the highest total wins the round and earns 1 point.</label></li>
      <li><input type="checkbox" id="tracks-2-2-item" /> <label for="tracks-2-2-item">If the track block is a TURN, the player must roll a 6-sided die and add their MANEUVERABILITY attribute. The one with the highest total wins the round and earns 1 point.</label></li>
      <li><input type="checkbox" id="tracks-2-3-item" /> <label for="tracks-2-3-item">If the track block is a CLASH, the player must roll a 6-sided die and add their POWER attribute. The one who loses the round loses 1 point.</label></li>
      <li><input type="checkbox" id="tracks-2-3-item" /> <label for="tracks-2-3-item">No player can have a negative score (values below 0).</label></li>
    </ul>
  </li>
</ul>

<b>Victory Condition</b>

<input type="checkbox" id="victory-item" />
<label for="victory-item">At the end, the player with the most points wins.</label>
