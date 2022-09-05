import { ProjectDetails } from "../models/project-details";

export class DataSource {
  static getBusinessApps(): ProjectDetails[] {
    return [{
        title: 'Viessmann R&D',
        imageName: 'Viessmann.png',
        platform: 'Web, Windows',
        technologies: '.NET Core; C#; ASP.NET WebAPI; WPF; Angular; TypeScript; Azure; MS SQL Server; MongoDB',
        description: '',
        timePeriod: '2016-2021',
        rows: 2,
        cols: 2,
      }, {
        title: 'Volvo Penta',
        imageName: 'VolvoPenta.png',
        platform: 'Web',
        technologies: 'Angular; TypeScript',
        description: '',
        timePeriod: '2021',
        rows: 1,
        cols: 2,
      }, {
        title: 'Custom CRM App',
        imageName: 'MsFivTransmitter.png',
        platform: 'Windows',
        technologies: '.NET Framework; C#; WPF; PHP; SQLite, MySQL',
        description: 'Set of CRM applications (main desktop app + several web apps) to manage SEO business. It was developed for about 6.5 years.',
        timePeriod: '2012-2018',
        rows: 2,
        cols: 2,
      }, {
        title: 'Best Secret / Fingo',
        imageName: 'BestSecret.png',
        platform: 'Windows',
        technologies: '.NET Framework; C#; WPF; MS SQL Server; Azure; WCF; ASP.NET Web API',
        description: 'Developing and maintaining about 10 desktop and web e-commerce applications.',
        timePeriod: '2014-2016',
        rows: 1,
        cols: 1,
      }, {
        title: 'E-book Reader',
        imageName: 'Legimi.png',
        platform: 'Windows 8/10',
        technologies: '.NET Framework; C#; WinUI; JS',
        description: 'Windows 8/10 e-book reader in Legimi ecosystem.',
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
        title: 'Yield Planet',
        imageName: 'YieldPlanet.png',
        platform: 'Web',
        technologies: '.NET Framework; C#; ASP.NET Web API',
        description: '',
        timePeriod: '2014',
        rows: 1,
        cols: 2,
      }, {
        title: 'Growl Mod',
        imageName: 'GrowlMod.jpg',
        platform: 'Windows',
        technologies: '.NET Framework; C#; WPF',
        description: 'Extension of Windows notification Growl app. New modifications contain notify screens, content displaying, additional animations and other items. Integrated with Twitter, Facebook, Vend and Ssh.',
        timePeriod: '2014',
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
        description: 'New highway simulation. User can control his speed, distance, drive direction and camera rotations/positions during ride.',
        timePeriod: '2015',
        rows: 1,
        cols: 2,
      }, 
    ];
  }
}