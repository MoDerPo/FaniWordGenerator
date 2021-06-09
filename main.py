class fani_wrods:
    adjcetivs = [
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
    ]
    nouns = [
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
    ]
    end = [
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

import random
import string


def apply(list, removeLast, addLetter, index):
    word = list[index]
    if(removeLast):
        word.removesuffix(word[-1])
    if(addLetter):
        word = '{}{}'.format(word, (random.choice(string.ascii_lowercase)))
    return(word)

def generateWord(list):
    removeLst  = 10
    addLttr    = 10
    indx       = len(list) - 1

    if random.randint(0, removeLst)   == 1 :
        removeLst  = True
    else:
        removeLst  = False
    
    if random.randint(0, addLttr)    == 1 :
        addLttr   = True
    else:
        addLttr   = False
    removeLast = removeLst
    addLetter  = addLttr
    index      = random.randint(0, indx)
    word       = apply(list, removeLast, addLetter, index)
    return(word)
def generateSentence(adjcetivs, nouns, end):
    return '{} {} {}'.format(generateWord(adjcetivs), generateWord(nouns), generateWord(end))

def execute(adjcetivs, nouns, endend):
    if(input(generateSentence(adjcetivs, nouns, endend))) == '':
        execute(adjcetivs, nouns, endend)
execute(fani_wrods.adjcetivs, fani_wrods.nouns, fani_wrods.end)