let Nft_collection = [];

function mintNFT(IcecreamFlavour, IcecreamPrice, AvailableNow) {

    let NFT = {

        "IcecreamFlavour": IcecreamFlavour,

        "IcecreamPrice": IcecreamPrice,

        "AvailableNow": AvailableNow,

    };

    Nft_collection.push(NFT);

    console.log("You have minted " + IcecreamFlavour);

}

function listNFTs() {

    for (let i = 0; i < Nft_collection.length; i++) {

        console.log("\n\n");

        console.log("Item   Name :\t" + Nft_collection[i].IcecreamFlavour);

        console.log("Price:\t" + Nft_collection[i].IcecreamPrice);

        console.log("AvailableNow :\t" + Nft_collection[i].AvailableNow);

    }

    console.log("\n\n");

}

function getTotalSupply() {

    console.log("Total NFTs of ice cream flavors you have are " + Nft_collection.length);
}

mintNFT("Strawberry Cup", "$2", "Yes");
mintNFT("Royal Butterscotch", "$4", "Yes");
mintNFT("Choco Vanilla", "$3", "Yes");
mintNFT("Raspberry Dolly", "$1", "No");

listNFTs();
getTotalSupply();
