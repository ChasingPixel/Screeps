var roleSammler = require('role_sammler')
var roleUpgrader = require('rolle_upgrader')
var roleBuilder = require('role_builder')

module.exports.loop = function () {
    //memory löschen, wenn creep stirbt
    for (let name in Memory.creeps) {
        if (Game.creeps[name] == undefined){
            delete Memory.creeps[name]
        };
    };
    //creeps
    for (let name in Game.creeps) {

        var creep = Game.creeps[name];


        if (creep.memory.role == 'sammler') {
            roleSammler.run(creep)
        };

        if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep)
        };
        if (creep.memory.role == 'builder') {
            roleBuilder.run(creep)
        };

    };
    
    //spawner
    var minUpgrader = 12;
    var numberOfUpgrader = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');

    if (numberOfUpgrader < minUpgrader) {

        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], Math.floor(Math.random() * 10000), {
            memory: { role: 'upgrader', working: false}
        })
    };
    //spawner
    var minWorker = 2;
    var numberOfBuilder = _.sum(Game.creeps, (c) => c.memory.role == 'builder');

    if (numberOfBuilder < minWorker) {

        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], Math.floor(Math.random() * 10000), {
            memory: { role: 'builder', working: false }
        })
    };
    //spawner
    var minSammler = 8;
    var numberOfSammler = _.sum(Game.creeps, (c) => c.memory.role == 'sammler');

    if (numberOfSammler < minSammler) {

        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], Math.floor(Math.random() * 10000), {
            memory: { role: 'sammler', working: false }
        })
    };
};