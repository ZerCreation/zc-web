import { ProjectDetails } from "../models/project-details";

export class DataSource {
  static getBusinessApps(): ProjectDetails[] {
    return [{
        title: 'Viessmann R&D (services)',
        imageName: 'Viessmann.png',
        platform: 'Web, Windows',
        technologies: '.NET Core; C#; ASP.NET WebAPI; WPF; Angular; TypeScript; Azure; MS SQL Server; MongoDB',
        description: 'Developing several web and desktop applications – machine communication in factory\'s environment and global industry scope.',
        timePeriod: '2016-2021',
        rows: 2,
        cols: 2,
      }, {
        title: 'Volvo Penta (services)',
        imageName: 'VolvoPenta.png',
        platform: 'Web',
        technologies: 'Angular; TypeScript; .NET Framework; C#; Silverlight, ASP.NET Web API',
        description: 'Rewritting old distributor CRM application into the new web app.',
        timePeriod: '2021',
        rows: 1,
        cols: 2,
      }, {
        title: 'Custom CRM App',
        imageName: 'MsFivTransmitter.png',
        platform: 'Windows',
        technologies: '.NET Framework; C#; WPF; PHP; SQLite, MySQL',
        description: 'Set of CRM applications (main desktop app + several web apps) to manage SEO business. Applications lifetime - over 6 years.',
        timePeriod: '2012-2018',
        rows: 2,
        cols: 2,
      }, {
        title: 'Best Secret / Fingo (services)',
        imageName: 'BestSecret.png',
        platform: 'Windows',
        technologies: '.NET Framework; C#; WPF; MS SQL Server; Azure; WCF; ASP.NET Web API',
        description: 'Developing and maintaining about 10 desktop and web e-commerce applications connected in one set.',
        timePeriod: '2014-2016',
        rows: 1,
        cols: 1,
      }, {
        title: 'E-book Reader',
        imageName: 'Legimi.png',
        platform: 'Windows 8/10',
        technologies: '.NET Framework; C#; WinUI; JS',
        description: 'Windows 8/10 e-book reader integrated into bookstore ecosystem.',
        timePeriod: '2013',
        rows: 1,
        cols: 1,
      }, {
        title: 'Remo',
        imageName: 'Remo.png',
        platform: 'Windows Phone 7/8',
        technologies: '.NET Framework; C#; Windows Phone SDK',
        description: 'Borrowed and lent items management app. Enables to notify other users.',
        timePeriod: '2012',
        rows: 1,
        cols: 1,
      },{
        title: 'Yield Planet (services)',
        imageName: 'YieldPlanet.png',
        platform: 'Web',
        technologies: '.NET Framework; C#; ASP.NET Web API',
        description: 'Extending existing hotels booking infrastructure.',
        timePeriod: '2014',
        rows: 1,
        cols: 2,
      }, {
        title: 'Growl Mod',
        imageName: 'GrowlMod.jpg',
        platform: 'Windows',
        technologies: '.NET Framework; C#; WPF',
        description: 'Extension of Windows notification Growl app. New modifications contain notify screens, content displaying, additional animations and other items. Integrated with Twitter, Facebook and Ssh.',
        timePeriod: '2014',
        rows: 1,
        cols: 1,
      }, {
        title: 'Siemens / Viessmann (services)',
        imageName: 'Siemens.png',
        platform: 'Web',
        technologies: '.NET Framework; C#; ASP.NET Web API; AngularJS',
        description: 'Implementing AngularJS/C# extensions for MES software running in factory environment.',
        timePeriod: '2018',
        rows: 1,
        cols: 1,
      }, {
        title: 'Occhio / Fingo (services)',
        imageName: 'Occhio.png',
        platform: 'Windows',
        technologies: 'Java; Spring Framework',
        description: 'Extending product energy labels management software.',
        timePeriod: '2016',
        rows: 1,
        cols: 1,
      },
    ];
  }

  static getMultimediaApps(): ProjectDetails[] {
    return [{
        title: 'Highway simulation',
        imageName: 'HighwaySimulation.png',
        platform: 'Windows',
        technologies: 'Unity 3d; C#',
        description: 'Simulation application of the new building highway. User can control his speed, distance, drive direction and camera rotations/positions during ride.',
        timePeriod: '2015',
        rows: 1,
        cols: 2,
      }, {
        title: 'Blocker game',
        imageName: 'Blocker.png',
        platform: 'Windows Phone 7/8',
        technologies: '.NET Framework; C#; XNA',
        description: 'Mobile Sci-Fi game. The main task is to fill the map with blocks to block the enemies.',
        timePeriod: '2013',
        rows: 1,
        cols: 2,
      }, {
        title: 'People Counter',
        imageName: 'PeopleCount.png',
        platform: 'Windows',
        technologies: '.NET Framework; C#; WPF',
        description: 'Real-time image processing application which counts the number of people.',
        timePeriod: '2011',
        rows: 1,
        cols: 1,
      }, {
        title: 'BTC Map',
        imageName: 'BTCMap.png',
        platform: 'Windows Phone 7/8',
        technologies: '.NET Framework; C#; Silverlight',
        description: 'Interactive map showing the location and current BTC ticker value.',
        timePeriod: '2013',
        rows: 2,
        cols: 1,
      }, {
        title: 'Kavir VR',
        imageName: 'Kavir.png',
        platform: 'Android',
        technologies: 'Unity 3d; C#',
        description: 'Virtual Reality prototype of the e-commerce shopping experience.',
        timePeriod: '2014',
        rows: 1,
        cols: 2,
      }, {
        title: 'ZerITC VR',
        imageName: 'ZerITC.png',
        platform: 'Android',
        technologies: 'Unity 3d; C#',
        description: 'Group of the Virtual Reality applications. Applications supported user interaction and rich mutlimedia content.',
        timePeriod: '2015-2016',
        rows: 1,
        cols: 2,
      }, {
        title: 'Street Solver',
        imageName: 'StreetSolver.png',
        platform: 'Windows Phone 7/8',
        technologies: '.NET Framework; C#; Silverlight',
        description: 'Road and car traffic designer with simulator. User can design your own crosses and simulate a car moving. Cars will pass the cross accordance with the rules of road.',
        timePeriod: '2012',
        rows: 1,
        cols: 1,
      }, {
        title: 'Matching for Kids',
        imageName: 'MatchingForKids.jpg',
        platform: 'Android',
        technologies: 'Unity 3d; C#',
        description: 'Colorful memory game for children. Except the gameplay it contains rich options of images collection gathering, various types of play, many languages and in-app-purchases.',
        timePeriod: '2014',
        rows: 1,
        cols: 2,
      }, {
        title: 'Grun',
        imageName: 'Grun.jpg',
        platform: 'Windows',
        technologies: '.NET Framework; C#; XNA',
        description: 'Game as an example of the hex map engine.',
        timePeriod: '2011',
        rows: 1,
        cols: 2,
      }, {
        title: 'Treez',
        imageName: 'TreeZ.jpeg',
        platform: 'Windows',
        technologies: '.NET Framework; C#',
        description: 'Unconventional widget for Windows Desktop. It animates tree with leafs rustling in the wind and rain controlled by user.',
        timePeriod: '2010',
        rows: 1,
        cols: 2,
      }, {
        title: 'SwapTrix',
        imageName: 'SwapTrix.jpg',
        platform: 'Android',
        technologies: 'Unity 3d; C#',
        description: 'Mobile game with cool graphics, kind of Tetris game with move.',
        timePeriod: '2015',
        rows: 1,
        cols: 2,
      },
    ];
  }
}