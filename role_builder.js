module.exports = {

    run: function (creep) {
        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
        }
        if (creep.memory.working == true){
            var Bauarbeiten = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
            if (creep.build(Bauarbeiten) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Bauarbeiten)
            }
        }
        else {
            var source = creep.pos.findClosestByPath(FIND_SOURCES);
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            };
        };
    }
};