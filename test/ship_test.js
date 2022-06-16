const expect = require('chai').expect;

describe('checkForShip',function(){
    var checkForShip = require('../game_logic/ship_methods.js').checkForShip;
    it('should correctly report no ship at a given players coordiante',function(){

        player = {
            ships:[
                {
                    locations : [[0,0]]
                }
                
            ]
            
        }
        expect(checkForShip(player,[9,9])).to.be.false;
        
    })

    it('should correctly report if a ship is present at given coordinate',function(){

        player = {
            ships:[
                {
                    locations : [[0,0]]
                }   
            ]
            
        }
        expect(checkForShip(player,[0,0])).to.be.deep.equal(player.ships[0]);
        
    })

    it('should handle ship located  at more than one coordinates',function(){

        player = {
            ships:[
                {
                    locations : [[0,0],[0,1],[0,2]]
                } 
            ]
            
        }
        expect(checkForShip(player,[0,0])).to.be.deep.equal(player.ships[0]);
        expect(checkForShip(player,[0,2])).to.be.deep.equal(player.ships[0]);
        
    })
    it('should handle more than one ships located  at more than one coordinates',function(){

        player = {
            ships:[
                {
                    locations : [[0,0],[0,1],[0,2]]
                },
                {
                    locations : [[2,2],[3,2],[4,2]]
                }
            ]
            
        }
        expect(checkForShip(player,[0,0])).to.be.deep.equal(player.ships[0])
        expect(checkForShip(player,[2,2])).to.be.deep.equal(player.ships[1])
        expect(checkForShip(player,[3,2])).to.be.deep.equal(player.ships[1])
        expect(checkForShip(player,[4,2])).to.be.deep.equal(player.ships[1])
        
    })
})

describe('damageShip', function(){
    var damageShip = require('../game_logic/ship_methods').damageShip;

    it('should register damage on a given ship at a given location', function (){
        var ship = {
            location : [[0,0]],
            damage : []
        }
        damageShip(ship,[0,0]);
        expect(ship.damage).to.not.be.empty;
        expect(ship.damage[0]).to.deep.equal([0,0]);

    })
})

describe('fireOnShip',function(){
    var fireOnShip = require ('../game_logic/ship_methods').fireOnShip;

    it('should fire on the given ship at the given location',function(){
        var player = {
            ships: [
                {
                    locations : [[0,0]],
                    damage: []
                }     
            ] 
        }
        fireOnShip(player,[0,0])

        expect(player.ships[0].damage[0]).to.deep.equal([0,0])
    })
})