let nfts = [];

function mintNFT(name, post, image) {
  const nft = {
    name: name,
    post: post,
    image: image
  };

  nfts.push(nft); 
}

function listNFTs() {
  nfts.forEach(nft => {
    console.log("Name: " + nft.name);
    console.log("Post: " + nft.post);
    console.log("Image: " + nft.image);
    console.log("------------");
  });
}

function getTotalSupply() {
  return nfts.length;
}

mintNFT("NFT 1", "This is the first NFT", "image1.jpg");
mintNFT("NFT 2", "This is the second NFT", "image2.jpg");
mintNFT("NFT 3", "This is the third NFT", "image3.jpg");

listNFTs();
console.log("Total Supply: " + getTotalSupply());
