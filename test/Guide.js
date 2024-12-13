/* eslint-disable @typescript-eslint/no-require-imports */
const { ethers } = require('hardhat');


describe('Escrow', () => {
    let realEstate

    describe('Deployment', () => {

        it('It saves address', async () => {
           const RealEstate  = await ethers.getContractFactory('RealEstate');
           realEstate = await RealEstate.deploy();
           const estateAddress = await realEstate.getAddress()
           console.log("estateAddress----", estateAddress);
        })
    })

})