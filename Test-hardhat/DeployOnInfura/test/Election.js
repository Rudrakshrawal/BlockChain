const { expect } = require("chai");

describe("Election contract", function () {
    let Election;
    let election;
    let owner;
    let addr1;
    let addr2;

    beforeEach(async function () {
        Election = await ethers.getContractFactory("Election");
        [owner, addr1, addr2] = await ethers.getSigners();
        election = await Election.deploy();
        await election.waitForDeployment();
    });

    it("should have five candidates initially", async function () {
        const count = await election.candidatesCount();
        expect(count).to.equal(5);
    });


    it("should emit VotedEvent when a vote is cast", async function () {
        const tx = await election.connect(addr1).vote(1);
        await expect(tx)
            .to.emit(election, "VotedEvent")
            .withArgs(1, addr1.address);
    });

    it("should not allow voting for invalid candidates", async function () {
        await expect(election.connect(addr1).vote(10)).to.be.revertedWith(
            "Invalid candidate ID."
        );
    });

    // it("should allow multiple votes by the same address", async function () {
    //     await election.connect(addr1).vote(1);
    //     await election.connect(addr1).vote(2);
    //     const voteCount1 = await election.candidates(1);
    //     const voteCount2 = await election.candidates(2);
    //     expect(voteCount1).to.equal(1);
    //     expect(voteCount2).to.equal(1);
    // });

});
