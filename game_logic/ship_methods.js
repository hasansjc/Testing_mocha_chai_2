function checkForShip(player, coordiantes) {
    var shipPresent, ship;
    for ( var i = 0 ; i < player.ships.length; i++ ){
        ship = player.ships[i];

        shipPresent = ship.locations.filter(function(actualCoordinate){
            
            return (actualCoordinate[0]===coordiantes[0] && actualCoordinate[1]===coordiantes[1] )
        })[0]

       

        if( shipPresent)
            return ship
    }
        return false

}

function damageShip(ship, coordiantes) {

    ship.damage.push(coordiantes)
    
}

function fireOnShip(player, coordiantes) {
    
    var ship = checkForShip(player, coordiantes)
    if (ship){
        damageShip(ship, coordiantes)
    }
}

module.exports.fireOnShip = fireOnShip;

module.exports.damageShip = damageShip;

module.exports.checkForShip = checkForShip;