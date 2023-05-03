module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A pleasant surprise is waiting for you.","watch your back.","A person is never to old to learn.","An exciting opportunity lies ahead of you", "loto numbers are 64 52 69 80 08 45"]
        
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomfortune = fortunes[randomIndex];
       
        res.status(200).send(randomfortune);
    },

    getLuckyNum: (req, res) => {
        const luckyNums = ["3","13","7","11","1"];

        let randomIndex = Math.floor(Math.random() * luckyNums.length);
        let randomLuckyNum = luckyNums[randomIndex];

        res.status(200).send(randomLuckyNum);
    },

    getSign: (req, res) => {
        const signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio"];
    
        let randomIndex = Math.floor(Math.random() * signs.length);
        let randomSign = "youre most combatiable with a " + signs[randomIndex];
    
        res.status(200).send(randomSign);
    },

    getTrys: (req, res) => {
        const trys = ["snow boarding", "a new food", "sky diving", "meeting new people", "that new job"];

        let randomIndex = Math.floor(Math.random() * trys.length);
        let randomTrys = "get out of your comfort zone and try " + trys[randomIndex];
    
        res.status(200).send(randomTrys);
    }

}



