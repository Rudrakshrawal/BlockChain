const { expect } = require("chai");

describe("SimpleStorage", function() {
  it("Should store the favorite number", async function() {
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await SimpleStorage.deploy();
    
    await simpleStorage.store(42);
    expect(await simpleStorage.retrieve()).to.equal(42);
  });

  it("Should add a person", async function() {
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await SimpleStorage.deploy();
    
    await simpleStorage.addPerson("Alice", 25);
    const favoriteNumber = await simpleStorage.nameToFavoriteNumber("Alice");
    expect(favoriteNumber).to.equal(25);
  });
});
