const PlayerAPI = {
    players: [
      { id: "id-1", number: 1, name: "Ben Blocker", position: "G" },
      { id: "id-2", number: 2, name: "Dave Defender", position: "D" },
      { id: "id-3", number: 3, name: "Sam Sweeper", position: "D" },
      { id: "id-4", number: 4, name: "Matt Midfielder", position: "M" },
      { id: "id-5", number: 5, name: "William Winger", position: "M" },
      { id: "id-6", number: 6, name: "Fillipe Forward", position: "F" }
    ],

    all: function() { return this.players},

    get: function(id) {
            const isPlayer = p => p.id === id
            return this.players.find(isPlayer)
         }
  }

export default PlayerAPI;