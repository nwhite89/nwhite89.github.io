define([
    'img/projects/mobilelondon.png',
    'img/projects/improve.png',
    'img/projects/betterworldwalk.png',
    'img/projects/learningjourney.png',
    'img/projects/RSSBRruka.png',
    'img/projects/IamEthiconAwards.png',
    'img/projects/smarttouch.png',
    'img/projects/mentosmoneymaker.png',
    'html/projects/mobile-london.html',
    'html/projects/improve-training.html',
    'html/projects/mentos-money.html',
    'html/projects/better-world-walk.html',
    'html/projects/learning-journey.html',
    'html/projects/rssb-ruka.html',
    'html/projects/i-am-ethicon.html',
    'html/projects/smart-touch.html'
], function (mobileLondonImg, improveImg, betterworldwalkImg, learningjourneyImg, RSSBRrukaImg,
    IAmEthiconImg, smarttouchImg, mentosmoneymakerImg, mobileLondonHtml, improveHtml, mentosMoneyMakerHtml,
    betterworldwalkHtml, learningjourneyHtml, RSSBRrukaHtml, IAmEthiconHtml, smarttouchHtml) {

    var obj = {
        'data': [{
            'id': '1',
            'title': 'Mobile London Nodejs',
            'class': 'mobilelondon',
            'image': mobileLondonImg,
            'date': 1368429289000,
            'text': mobileLondonHtml,
            'url': 'http://mobilelondon.org'
        },
        {
            'id': '2',
            'title': 'IMProve Training Ltd',
            'class': 'improve',
            'image': improveImg,
            'date': 1368342889000,
            'text': improveHtml,
            'url': 'http://improvetraininglimited.co.uk'
        },
        {
            'id': '3',
            'title': 'Mentos Money Maker',
            'class': 'mentosmoneymaker',
            'image': mentosmoneymakerImg,
            'date': 1366614889000,
            'text': mentosMoneyMakerHtml,
            'url': 'http://on.fb.me/15TNjeO'
        },
        {
            'id': '4',
            'title': 'Better World Walk',
            'class': 'betterworldwalk',
            'image': betterworldwalkImg,
            'date': 1366442089000,
            'text': betterworldwalkHtml,
            'url': 'http://betterworldwalk.com'
        },
        {
            'id': '5',
            'title': 'Learning Journey',
            'class': 'learningjourney',
            'image': learningjourneyImg,
            'date': 1354605289000,
            'text': learningjourneyHtml,
            'url': 'http://mylearningjourney.acuvue.co.uk/'
        },
        {
            'id': '6',
            'title': 'RSSB RRUKA',
            'class': 'RSSBRruka',
            'image': RSSBRrukaImg,
            'date': 1354518889000,
            'text': RSSBRrukaHtml,
            'url': 'http://rruka.org.uk/'
        },
        {
            'id': '7',
            'title': 'I Am Ethicon',
            'class': 'IamEthiconAwards',
            'image': IAmEthiconImg,
            'date': 1354432489000,
            'text': IAmEthiconHtml,
            'url': ''
        },
        {
            'id': '8',
            'title': 'SmartTouch',
            'class': 'smarttouch',
            'image': smarttouchImg,
            'date': 1354346089000,
            'text': smarttouchHtml,
            'url': ''
        }]
    };

    return obj;
});
