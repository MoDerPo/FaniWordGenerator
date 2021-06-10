let fani_wrods = {
    adjcetivs: [
        "african-american",
        "ahlal",
        "allah abprovde",
        "allah approved",
        "bio degradable",
        "bio deradble",
        "dumb",
        "cute",
        "dummy",
        "fake",
        "fani",
        "free",
        "funi",
        "funy",
        "funny",
        "halal",
        "haram",
        "helel",
        "high res",
        "hraram",
        "international",
        "live",
        "not",
        "offical",
        "official",
        "ofical",
        "oficial",
        "online",
        "orginial",
        "origenal",
        "orignal",
        "origniel",
        "punjabi",
        "real",
        "rel",
        "rfee",
        "spudid",
        "ssusy",
        "stupid",
        "subtitled",
        "sus",
        "sussy"
    ],
    nouns: [
        "360p",
        "ala",
        "alah",
        "allah",
        "amogsus",
        "amogus",
        "among sus",
        "among us",
        "amongsus",
        "amongus",
        "aogmus",
        "ass",
        "baka",
        "banana",
        "bich",
        "bish",
        "bitch",
        "cock",
        "coconut",
        "computer virus",
        "dick",
        "dikc",
        "download",
        "downlod",
        "downlode",
        "dwonlod",
        "fail",
        "fortnite",
        "fortnitw",
        "fortnwite",
        "fruit ninja",
        "girl",
        "joe biden",
        "idiot",
        "idoit",
        "imag",
        "iphnoe",
        "iphone",
        "kock",
        "kok",
        "minceraft",
        "minecraft",
        "minion",
        "minions",
        "pc",
        "penis",
        "pig",
        "pneis",
        "poop",
        "poopee",
        "poopman",
        "poopoo",
        "poopy",
        "popman",
        "porn",
        "proof",
        "secs",
        "segs",
        "segse",
        "sex movie",
        "sex mvoei",
        "sex",
        "sexcs",
        "shader",
        "sussex",
        "texture pack",
        "video",
        "virus"
    ],
    end: [
        "sex",
        "download",
        "360p",
        "gaming",
        "movie",
        "(proof)",
        "in india",
        "free dwonlo",
        "video",
        "tutorial",
        "poop",
        "channel",
        "diy",
        "pig",
        "simulator"
    ]
}

function randint(max) {
    return Math.floor(Math.random() * max)
}
function choose(choices) {
    var index = randint(max);
    return choices[index];
}

function apply(words, removeLast, addLetter, index){
    let word = words[index]
    if(removeLast){
        word.slice(0, -1)
    }
    if(addLetter){
        word = word+' '+choose(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","z"])
    }
    return(word)
}
function generateWord(words){
    let removeLast  = 10,
        addLetter   = 10,
        index       = words.length-1,
        word

    if (randint(removeLast)   == 1) {
        removeLast  = true
    }
    else{
        removeLast  = false
    }
    
    if (randint(addLetter)    == 1) {
        addLetter   = true
    }else{
    addLetter   = false
    }
    removeLast = removeLast
    addLetter  = addLetter
    index      = randint(index)
    word       = apply(words, removeLast, addLetter, index)
    return(word)
}
function generateSentence(adjcetivs, nouns, end){
    return generateWord(adjcetivs)+' '+generateWord(nouns)+' '+generateWord(end)
}
function execute(adjcetivs, nouns, end){
    return generateSentence(adjcetivs, nouns, end)
}
console.log(execute(fani_wrods.adjcetivs, fani_wrods.nouns, fani_wrods.end))