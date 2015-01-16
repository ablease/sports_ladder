module.exports = function(playerRepo) {

  return {

    getPlayers: function(callback) {
       playerRepo.find(function (err, players) {
       if (err)
         callback(err)
       callback(null, players); 
     });
    },

    addPlayer: function(player, callback) {
      playerRepo.create({
        name : player.name,
        rank : player.rank, 
        gamesPlayed : player.gamesPlayed
      }, function(err, player){
        if (err)
          callback(err)
        callback(null, player)
      });
    }, 

    updatePlayerRank: function(param, id, callback){
      playerRepo.findByIdAndUpdate(id, { rank: param.newRank, gamesPlayed: param.gamesPlayed }, null, function(err, player){
        if (err)
          callback(err)
        callback(null, player); 
      });
    }
  };
};
