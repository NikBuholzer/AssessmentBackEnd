const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const luckyNumBtn = document.getElementById("luckyNumButton");
const signBtn = document.getElementById("signsButton");
const trysBtn = document.getElementById("trysButton");

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
             alert(data);
     });
};

const getLuckyNum = () => {
    console.log("getLuckyNum function called");
    axios.get("http://localhost:4000/api/nums")
        .then(res => {
            const data = res.data;
             alert(data);
      })
};

const getSign = () => {
    console.log("signs called");
    axios.get("http://localhost:4000/api/signs")
        .then(res => {
            const data = res.data;
            alert(data);
        })
};

const getTrys = () => {
    axios.get("http://localhost:4000/api/trys")
        .then(res => {
            const data = res.data;
            alert(data);
        })
};


complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
luckyNumBtn.addEventListener('click', getLuckyNum);
signBtn.addEventListener('click', getSign);
trysBtn.addEventListener('click', getTrys);
