define([
    'img/projects/mobilelondon.png',
    'img/projects/improve.png',
    'img/projects/betterworldwalk.png',
    'img/projects/learningjourney.png',
    'img/projects/RSSBRruka.png',
    'img/projects/IamEthiconAwards.png',
    'img/projects/smarttouch.png',
    'img/projects/mentosmoneymaker.png',
    'img/projects/rigdistribute.png',
    'img/projects/rigcreate.png',
    'img/projects/formats-prism.png',
    'img/projects/formats-page-shift.png',
    'img/projects/formats-page-shells.png',
    'img/projects/formats-parallax-dmpu.png',
    'img/projects/formats-parascroll.png',
    'html/projects/mobile-london.html',
    'html/projects/improve-training.html',
    'html/projects/mentos-money.html',
    'html/projects/better-world-walk.html',
    'html/projects/learning-journey.html',
    'html/projects/rssb-ruka.html',
    'html/projects/i-am-ethicon.html',
    'html/projects/smart-touch.html',
    'html/projects/rig-distribute.html',
    'html/projects/rig-create.html',
    'html/projects/page-shell.html',
    'html/projects/page-shift.html',
    'html/projects/parallax.html',
    'html/projects/prism.html',
    'html/projects/parascroll.html'
], function (mobileLondonImg, improveImg, betterworldwalkImg, learningjourneyImg, RSSBRrukaImg,
    IAmEthiconImg, smarttouchImg, mentosmoneymakerImg, rigDistributeImg, rigCreateImg, formatsPrismImg,
    formatsPageShiftImg, formatsPageShellsImg, formatsParallaxDmpuImg, formatsParascrollImg, mobileLondonHtml,
    improveHtml, mentosMoneyMakerHtml, betterworldwalkHtml, learningjourneyHtml, RSSBRrukaHtml, IAmEthiconHtml,
    smarttouchHtml, rigDistributeHtml, rigCreateHtml, pageShellHtml, pageShiftHtml, parallaxHtml, prismHtml,
    parascrollHtml) {

    var obj = {
        'data': [
            {
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
            },
            {
                'id': '9',
                'title': 'Rig Distribute',
                'class': 'rigdistribute',
                'image': rigDistributeImg,
                'date': 1477293439911,
                'text': rigDistributeHtml,
                'url': ''
            },
            {
                'id': '10',
                'title': 'Rig Create',
                'class': 'rigcreate',
                'image': rigCreateImg,
                'date': 1477293439913,
                'text': rigCreateHtml,
                'url': ''
            },
            {
                'id': '11',
                'title': 'Page Shift',
                'class': 'formats-page-shift',
                'image': formatsPageShiftImg,
                'date': 1477293439910,
                'text': pageShiftHtml,
                'url': 'https://rbx3-assets.s3.amazonaws.com/demos/create/455/preview.html'
            },
            {
                'id': '12',
                'title': 'Prism',
                'class': 'formats-prism',
                'image': formatsPrismImg,
                'date': 1477293439914,
                'text': prismHtml,
                'url': 'https://rbx3-assets.s3.amazonaws.com/demos/create/108/preview.html'
            },
            {
                'id': '13',
                'title': 'Parallax',
                'class': 'formats-parallax-dmpu',
                'image': formatsParallaxDmpuImg,
                'date': 1477293439915,
                'text': parallaxHtml,
                'url': 'https://rbx3-assets.s3.amazonaws.com/demos/create/548/preview.html'
            },
            {
                'id': '14',
                'title': 'Page Shells',
                'class': 'formats-page-shells',
                'image': formatsPageShellsImg,
                'date': 1477293439912,
                'text': pageShellHtml,
                'url': 'https://rbx3-assets.s3.amazonaws.com/demos/create/525/preview.html'
            },
            {
                'id': '15',
                'title': 'ParaScroll',
                'class': 'formats-parascroll',
                'image': formatsParascrollImg,
                'date': 1495986184057,
                'text': parascrollHtml,
                'url': 'https://rbx3-assets.s3.amazonaws.com/qa-dev-builder/1495986030596/index.html'
            }
        ]
    };

    return obj;
});
