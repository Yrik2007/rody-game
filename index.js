let express = require(`express`);
let app = express();
let port = 3001;

app.listen(port, function () {
    console.log(`http://localhost:${port}`);
})


// Раздача статики
app.use(express.static(`public`));


// Настройка handlebars
const hbs = require('hbs');
app.set('views', 'views');
app.set('view engine', 'hbs');

// Настройка POST-запроса
app.use(express.urlencoded({ extended: true }))


// Настройка БД
let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/RODYgame');

let gamesSchema = new mongoose.Schema({
    numberId: String,
    name: String,
    smallDescription: String,
    description: String,
    image: String,
    operation: String,
    processor: String,
    opMemory: String,
    videoCard: String,
    intMemory: String,
    public: Number,
    add1Image: String,
    add2Image: String,
    janr: String,
    janrShoot: Boolean,
    janrArcade: Boolean,
    janrRPG: Boolean,
    janrRace: Boolean,
    janrFight: Boolean,
    janrAdvanture: Boolean,
    janrQuest: Boolean,
    janrLogic: Boolean,
    janrSimulator: Boolean,
    janrSport: Boolean,
    janrStrategy: Boolean,
    janrHorror: Boolean,
    janrAction: Boolean,
    developer: String,
    version: String,
    languageGame: String,
    tabletka: String,
    file: String,
}, { 
    timestamps: true 
});

let Games = mongoose.model('games', gamesSchema);

app.get(`/`, async function(req, res){
    let game = await Games.find();
    let category = 'Новинки';

    res.render(`index`, {
        array: game,
        category: category
    });
});

app.get(`/game`, async function(req, res){
    let id = req.query.id;
    let game = await Games.findOne({_id: id});

    res.render(`game`, {
        games: game
    })

});

const PAGE_SIZE = 2;

// Настройка роутов по жанрам игр -->
// app.get(`/shoot`, async function(req, res){
//     // Принятие параметра номера страницы
//     let pageNumber = req.query.page;
//     let scrollPage = true;

//     // Создание переменных для значений страниц пагинаций 
//     let prevPage;
//     let nextPage;

//     if (pageNumber == 1) {
//         scrollPage = false;
//     };
//     prevPage = pageNumber--;
//     nextPage = pageNumber++;

//     let skip = (pageNumber - 1) * PAGE_SIZE;

//     let game = await Games.find({janrShoot: true});
//     // let game = await Games.find({janrShoot: true}).skip(skip).limit(PAGE_SIZE);
//     let janr = true;
//     let category = 'Шутеры';
//     let genre = 'shoot';

//     res.render(`index`, {
//         array: game,
//         category: category,
//         genre: genre,
//         janr: janr,
//         prevPage: prevPage,
//         nextPage: nextPage,
//         scrollPage: scrollPage
//     })
// });

app.get(`/shoot`, async function(req, res){
    let game = await Games.find({janrShoot: true});
    let category = 'shoot';

    res.render(`index`, {
        array: game,
        category: category
    })
});

// app.get(`/arcade`, async function(req, res){
//     // Принятие параметра номера страницы
//     let pageNumber = req.query.page;
//     let scrollPage = true;

//     // Создание переменных для значений страниц пагинаций 
//     let prevPage;
//     let nextPage;

//     if (pageNumber == 1) {
//         scrollPage = false;
//     };
//     prevPage = pageNumber--;
//     nextPage = pageNumber++;

//     let skip = (pageNumber - 1) * PAGE_SIZE;

//     let game = await Games.find({janrShoot: true});
//     // let game = await Games.find({janrShoot: true}).skip(skip).limit(PAGE_SIZE);
//     let janr = true;
//     let category = 'Аркады';
//     let genre = 'arcade';

//     res.render(`index`, {
//         array: game,
//         category: category,
//         genre: genre,
//         janr: janr,
//         prevPage: prevPage,
//         nextPage: nextPage,
//         scrollPage: scrollPage
//     })
// });

app.get(`/arcade`, async function(req, res){
    let game = await Games.find({janrArcade: true});
    let category = 'arcade';

    res.render(`index`, {
        array: game,
        category: category
    })
});

// app.get(`/advanture`, async function(req, res){
//     // Принятие параметра номера страницы
//     let pageNumber = Number(req.query.page);
//     let scrollPagePrev = true;
//     let scrollPageNext = true;

//     // Создание переменных для значений страниц пагинаций 
//     let prevPage;
//     let nextPage;

//     if (pageNumber == 1) {
//         scrollPagePrev = false;
//     };
//     prevPage = pageNumber - 1;
//     nextPage = pageNumber + 1;


//     let skip = (pageNumber - 1) * PAGE_SIZE;

//     let game = await Games.find({janrShoot: true});
//     // let game = await Games.find({janrAdvanture: true}).skip(skip).limit(PAGE_SIZE);

//     if (game.length < 2) {
//         scrollPageNext = false;
//         // scrollPagePrev = false;
//     }
    
//     let janr = true;
//     let category = 'Приключение';
//     let genre = 'advanture';

//     res.render(`index`, {
//         array: game,
//         category: category,
//         genre: genre,
//         janr: janr,
//         prevPage: prevPage,
//         nextPage: nextPage,
//         scrollPagePrev: scrollPagePrev,
//         scrollPageNext: scrollPageNext
//     })
// });

app.get(`/advanture`, async function(req, res){
    let game = await Games.find({janrAdvanture: true});
    let category = 'advanture';

    res.render(`index`, {
        array: game,
        category: category
    })
});

app.get(`/rpg`, async function(req, res){
    let game = await Games.find({janrRPG: true});
    let category = 'RPG';

    res.render(`index`, {
        array: game,
        category: category
    })
});
app.get(`/race`, async function(req, res){
    let game = await Games.find({janrRace: true});
    let category = 'Гонки';

    res.render(`index`, {
        array: game,
        category: category
    })
});
app.get(`/fight`, async function(req, res){
    let game = await Games.find({janrFight: true});
    let category = 'Драки';

    res.render(`index`, {
        array: game,
        category: category
    })
});
app.get(`/advanture`, async function(req, res){
    let game = await Games.find({janrAdvanture: true});
    let category = 'Приключения';

    res.render(`index`, {
        array: game,
        category: category
    })
});
app.get(`/quests`, async function(req, res){
    let game = await Games.find({janrQuest: true});
    let category = 'Квесты';

    res.render(`index`, {
        array: game,
        category: category
    })
});
app.get(`/logic`, async function(req, res){
    let game = await Games.find({janrLogic: true});
    let category = 'Логические';

    res.render(`index`, {
        array: game,
        category: category
    })
});
app.get(`/simulator`, async function(req, res){
    let game = await Games.find({janrSimulator: true});
    let category = 'Симуляторы';

    res.render(`index`, {
        array: game,
        category: category
    })
});
app.get(`/sport`, async function(req, res){
    let game = await Games.find({janrSport: true});
    let category = 'Спорт';

    res.render(`index`, {
        array: game,
        category: category
    })
});
app.get(`/strategies`, async function(req, res){
    let game = await Games.find({janrStrategy: true});
    let category = 'Стратегии';

    res.render(`index`, {
        array: game,
        category: category
    })
});
app.get(`/horror`, async function(req, res){
    let game = await Games.find({janrHorror: true});
    let category = 'Хорроры';

    res.render(`index`, {
        array: game,
        category: category
    })
});
app.get(`/action`, async function(req, res){
    let game = await Games.find({janrAction: true});
    let category = 'Экшн';

    res.render(`index`, {
        array: game,
        category: category
    })
});