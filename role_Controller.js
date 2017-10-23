module.exports = {

transportieren: function(creep) {
    if(creep.memory.transportieren == false && creep.carry.energy == 0) {
        
        if(creep.withdraw(Game.spawns.Spawn1, Game.energy , [100]) == ERR_NOT_IN_RANGE){
            creep.moveTo(Game.spawns.Spawn1);
        }
        else{
            creep.withdraw(Game.spawns.Spawn1, Game.energy, [100])
            
        }
        creep.memory.transportieren = false
    }
    if(creep.memory.transportieren === false){
       if(creep.upgradeController === ERR_NOT_IN_RANGE){
           creep.moveTo(creep.room.controller)
       }
       else{
           creep.upgradeController;
       }
    }
}
}