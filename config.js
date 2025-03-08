// Your app Token, if you don't know it you can reset it here : https://discord.com/developers/applications > Your App > Bot > Reset Token
const token = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
// With discord developper mode on, right click your server and "copy server ID"
const guildID = "XXXXXXXXXXXXXXXXXXX";

// For all channelID below, right click a channel in your discord server and "copy server ID" with developper mode on
// Where ID list, AutoKick alerts are sent
const channelID_IDs = "XXXXXXXXXXXXXXXXXXX";
// Where statistics of users will be sent
const channelID_UserStats = "XXXXXXXXXXXXXXXXXXX";
// Where GP validation threads will be created /////!\\\\\ IT HAVE TO BE A FORUM CHANNEL, look for discord community server for more info
const channelID_GPVerificationForum = "XXXXXXXXXXXXXXXXXXX";
// Where Double 2 Star validation threads will be created /////!\\\\\ IT HAVE TO BE A FORUM CHANNEL, look for discord community server for more info
const channelID_2StarVerificationForum = "";
// Where the Packs Webhooks is linked, better be a separate channel from heartbeat webhook
const channelID_Webhook = "XXXXXXXXXXXXXXXXXXX"; 
// Where the Heartbeat Webhooks is linked, better be a separate channel from packs webhook
const channelID_Heartbeat = "XXXXXXXXXXXXXXXXXXX";

// Create a new fine-grained token for your GitHub account, and make sure to only check to read/write your Gists : https://github.com/settings/tokens
const gitToken = "github_pat_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";;
// Then, create a GitGist : https://gist.github.com/ and get its ID (the numbers in the URL).
const gitGistID = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
// And the GitGist Name based on the name you gave it
const gitGistGroupName = "PTCGPRerollGroupIDs";
// And the GitGist Name based on the name you gave it
const gitGistGPName = "EligibleGPs";

// =========================================== RULES ===========================================
// If you want your group to be able to add other ppl than themselves using /active @user 
const canPeopleAddOthers = true;
// If you want your group to be able to remove other ppl than themselves using /inactive @user 
const canPeopleRemoveOthers = true;

// =========================================== AUTO KICK ===========================================
// Setting this to true will enable auto kick and kick players based on the others factors below
const AutoKick = false;
// Every X minute divided by 2 it will alternate between sending user stats and checking for inactive peoples
// Exemple with a value of 10 : 5mn:InactivityCheck, 10mn:UserStats, 15mn:InactivityCheck, 20mn:UserStats, etc...
var refreshInterval = 10;
// After how many minutes the user will be consider inactive (keep in mind that heartbeats are sent every 30mn by default)
var inactiveTime = 61;
// At which number of instances users will be kicked, for a value of 1, users with 2 instances and above won't be kicked (Main is not counted as an instance)
var inactiveInstanceCount = 1;
// At which number of instances users will be kicked, for a value of 1, users below 1 pack per min will be kicked)
var inactivePackPerMinCount = 1;
// Kick instantly if it detects that Main is On AND Offline /!\ At this time there are false positive where Main could be considered offline but it have no issue in reality
var inactiveIfMainOffline = false;

// =========================================== LEECHING ===========================================
// Decide wether or not ppl can leech
const canPeopleLeech = false;
// Decide after how many GP found ppl can be able to leech
const leechPermGPCount = 20;
// Decide after how many packs opened ppl can be able to leech
const leechPermPackCount = 50000;

// =========================================== GP STATS ===========================================
// Decide if you want your Servers Stats (GP stats) to be reset every 4hours which could prevent some duplicated stuff in ServerData.xml 
const resetServerDataFrequently = true;
// Decide how frequently you want to Reset GP Stats, default to 4 hours (240mn)
const resetServerDataTime = 240;

// =========================================== ELIGIBLES IDs ===========================================
// If some ppl in your group are running Min2Stars : 2 and some others 3, that flags all the GPs as 5/5 in the list to avoid to auto remove bot from kicking 2/5 for those who are at Min2Stars : 3
var safeEligibleIDsFiltering = true; // true = all flagged as 5/5

// =========================================== OTHER SETTINGS ===========================================
// Choose language
const EnglishLanguage = false;

// Number of /miss needed before a post is marked as dead, here it means 1pack=4miss, 2packs=6miss, 3packs=8miss
const missBeforeDead = [4,6,8,10,12];

// The average Min2Stars of the group on Arturo's bot, used to calculate the Potential Lives GP
// Considering that at a value of 2, 1 invalid pack out of 10 will be invalidated by stars and not gold / immersive
var min2Stars = 0;//can be a floating number ex:2.5

// No need to modify it except you specifically changed the rate in yours ahk files
var heartbeatRate = 30;//minutes

// Delete some messages after X seconds (/active /inactive /refresh /forcerefresh) 0 = no delete
var delayMsgDeleteState = 10;//seconds

// =========================================== AESTHETICS ===========================================
// Icons of GP Validation
const text_verifiedLogo = "✅";
const text_deadLogo = "💀";
const text_waitingLogo = "⌛";

const leaderboardBestFarm1_CustomEmojiName = "Chadge"; // 🌟 if not found
const leaderboardBestFarm2_CustomEmojiName = "PeepoLove"; // ⭐️ if not found
const leaderboardBestFarm3_CustomEmojiName = "PeepoShy"; // ✨ if not found

const leaderboardBestVerifier1_CustomEmojiName = "Wicked"; // 🥇 if not found
const leaderboardBestVerifier2_CustomEmojiName = "PeepoSunglasses"; // 🥈 if not found
const leaderboardBestVerifier3_CustomEmojiName = "PeepoHappy"; // 🥉 if not found

const leaderboardWorstVerifier1_CustomEmojiName = "Bedge"; // 😈 if not found
const leaderboardWorstVerifier2_CustomEmojiName = "PeepoClown"; // 👿 if not found
const leaderboardWorstVerifier3_CustomEmojiName = "DinkDonk"; // 💀 if not found /!\ This one the worst one, it should be at the top but that helps for readability 

export {
    token,
    guildID,
    channelID_IDs,
    channelID_UserStats,
    channelID_GPVerificationForum,
    channelID_2StarVerificationForum,
    channelID_Webhook,
    channelID_Heartbeat,
    gitToken,
    gitGistID,
    gitGistGroupName,
    gitGistGPName,
    missBeforeDead,
    EnglishLanguage,
    AutoKick,
    refreshInterval,
    inactiveTime,
    inactiveInstanceCount,
    inactivePackPerMinCount,
    inactiveIfMainOffline,
    heartbeatRate,
    delayMsgDeleteState,
    min2Stars,
    canPeopleAddOthers,
    canPeopleRemoveOthers,
    canPeopleLeech,
    leechPermGPCount,
    leechPermPackCount,
    resetServerDataFrequently,
    resetServerDataTime,
    safeEligibleIDsFiltering,
    text_verifiedLogo,
    text_deadLogo,
    text_waitingLogo,
    leaderboardBestFarm1_CustomEmojiName,
    leaderboardBestFarm2_CustomEmojiName,
    leaderboardBestFarm3_CustomEmojiName,
    leaderboardBestVerifier1_CustomEmojiName,
    leaderboardBestVerifier2_CustomEmojiName,
    leaderboardBestVerifier3_CustomEmojiName,
    leaderboardWorstVerifier1_CustomEmojiName,
    leaderboardWorstVerifier2_CustomEmojiName,
    leaderboardWorstVerifier3_CustomEmojiName,
};