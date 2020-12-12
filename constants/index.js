const { model } = require("mongoose");

const talents = [
    // JP Gen0
    'tokino_sora',
    'robocosan',
    'suisei_hosimati',
    'sakuramiko35',
    'AZKi_VDiVA',
    // JP Gen1
    'yozoramel',
    'shirakamifubuki',
    'akaihaato',
    'akirosenthal',
    'natsuiromatsuri',
    // JP Gen2
    'minatoaqua',
    'murasakishionch',
    'nakiriayame',
    'yuzukichococh',
    'oozorasubaru',
    // JP Gamers
    'ookamimio',
    'nekomataokayu',
    'inugamikorone',
    // JP Gen3
    'usadapekora',
    'uruharushia',
    'houshoumarine',
    'shiranuiflare',
    'shiroganenoel',
    // JP Gen4
    'tokoyamitowa',
    'amanekanatach',
    'himemoriluna',
    'kiryucoco',
    'tsunomakiwatame',
    // JP Gen5
    'yukihanalamy',
    'shishirobotan',
    'momosuzunene',
    'omarupolka',
    // Holostars
    'miyabihanasaki',
    'kagamikirach',
    'kanadeizuru',
    'arurandeisu',
    'rikkaroid',
    'astelleda',
    'kishidotemma',
    'yukokuroberu',
    'kageyamashien',
    'aragamioga',
    // ID Gen1
    'ayunda_risu',
    'moonahoshinova',
    'airaniiofifteen',
    // ID Gen2
    'pavoliareine',
    'anyamelfissa',
    'kureijiollie',
    // EN Gen1
    'takanashikiara',
    'ninomaeinanis',
    'moricalliope',
    'watsonameliaEN',
    'gawrgura'
];

const twitterUri = `https://api.twitter.com/1.1/users/lookup.json?screen_name=${talents.join()}`;

module.exports = {
    talents,
    twitterUri
};