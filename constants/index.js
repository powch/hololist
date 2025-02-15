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

const JP_GEN_0 = [
    'tokino_sora',
    'robocosan',
    'suisei_hosimati',
    'sakuramiko35',
    'AZKi_VDiVA'
];

const JP_GEN_1 = [
    'yozoramel',
    'shirakamifubuki',
    'akaihaato',
    'akirosenthal',
    'natsuiromatsuri'
];

const JP_GEN_2 = [
    'minatoaqua',
    'murasakishionch',
    'nakiriayame',
    'yuzukichococh',
    'oozorasubaru'
];

const JP_GEN_GAMERS = [
    'ookamimio',
    'nekomataokayu',
    'inugamikorone'
];

const JP_GEN_3 = [
    'usadapekora',
    'uruharushia',
    'houshoumarine',
    'shiranuiflare',
    'shiroganenoel'
];

const JP_GEN_4 = [
    'tokoyamitowa',
    'amanekanatach',
    'himemoriluna',
    'kiryucoco',
    'tsunomakiwatame'
];

const JP_GEN_5 = [
    'yukihanalamy',
    'shishirobotan',
    'momosuzunene',
    'omarupolka'
];

const JP_HOLOSTARS = [
    'miyabihanasaki',
    'kagamikirach',
    'kanadeizuru',
    'arurandeisu',
    'rikkaroid',
    'astelleda',
    'kishidotemma',
    'yukokuroberu',
    'kageyamashien',
    'aragamioga'
];

const ID_GEN_1 = [
    'ayunda_risu',
    'moonahoshinova',
    'airaniiofifteen'
];

const ID_GEN_2 = [
    'pavoliareine',
    'anyamelfissa',
    'kureijiollie'
];

const EN_GEN_1 = [
    'takanashikiara',
    'ninomaeinanis',
    'moricalliope',
    'watsonameliaEN',
    'gawrgura'
];

const twitterUri = `https://api.twitter.com/1.1/users/lookup.json?screen_name=${talents.join()}`;

module.exports = {
    talents,
    twitterUri,
    JP_GEN_0,
    JP_GEN_1,
    JP_GEN_2,
    JP_GEN_3,
    JP_GEN_4,
    JP_GEN_5,
    JP_GEN_GAMERS,
    JP_HOLOSTARS,
    ID_GEN_1,
    ID_GEN_2,
    EN_GEN_1
};