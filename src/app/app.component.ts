import { Component } from '@angular/core';
import { Bookmark } from './types/bookmark';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flink';



  public bookmarks: Bookmark[] = [
    {
      title: 'Gekie / DEV',
      link: 'https://atys-dev-gekie-front.dev.aws.vsct.fr/dashboard',
      description: 'Gekie dashboard',
      tags: ['gekie', 'dashboard', 'dev'],
      thumbnail: 'https://atys-dev-gekie-front.dev.aws.vsct.fr/assets/sncf.svg',
      color: 'rgba(132, 0, 255, 0.356)'


    },
    {
      title: 'Gekie / rec',
      link: 'https://atys-rec-gekie-front.dev.aws.vsct.fr/dashboard',
      description: 'Gekie dashboard',
      tags: ['gekie', 'dashboard', 'dev'],
      thumbnail: 'https://atys-dev-gekie-front.dev.aws.vsct.fr/assets/sncf.svg',
      color: 'rgba(132, 0, 255, 0.356)'


    },
    {
      title: 'Gekie / rec2',
      link: 'https://atys-rec2-gekie-front.dev.aws.vsct.fr/dashboard',
      description: 'Gekie dashboard',
      tags: ['gekie', 'dashboard', 'dev'],
      thumbnail: 'https://atys-dev-gekie-front.dev.aws.vsct.fr/assets/sncf.svg',
      color: 'rgba(132, 0, 255, 0.356)'


    },
    {
      title: 'Gekie / Preprod',
      link: 'https://atys-preprod-gekie-front.dev.aws.vsct.fr/dashboard',
      description: 'Gekie dashboard',
      tags: ['gekie', 'dashboard', 'dev'],
      thumbnail: 'https://atys-dev-gekie-front.dev.aws.vsct.fr/assets/sncf.svg',
      color: 'rgba(132, 0, 255, 0.356)'


    },

    {
      link: 'https://www.google.com',
      title: 'Google',
      description: 'Search engine',
      tags: ['search', 'engine'],
      thumbnail: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
      color:'rgba(132, 0, 255, 0.356)'
    },
    {
      link: 'https://www.youtube.com',
      title: 'YouTube',
      description: 'Video sharing',
      tags: ['video', 'sharing'],
      thumbnail: 'https://www.youtube.com/yts/img/favicon_32-vflOogEID.png',
      color:'rgba(132, 0, 255, 0.356)'
    },
    {
      link: 'https://www.facebook.com',
      title: 'Facebook',
      description: 'Social network',
      tags: ['social', 'network'],
      thumbnail: 'https://www.facebook.com/images/fb_icon_325x325.png',
      color:'rgba(132, 0, 255, 0.356)'
    },
    {
      link: 'https://www.twitter.com',
      title: 'Twitter',
      description: 'Social network',
      tags: ['social', 'network'],
      thumbnail: 'https://abs.twimg.com/favicons/twitter.ico',
      color:'rgba(132, 0, 255, 0.356)'
    },
    {
      link: 'https://www.instagram.com',
      title: 'Instagram',
      description: 'Social network',
      tags: ['social', 'network'],
      thumbnail: 'https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png',
      color:'rgba(132, 0, 255, 0.356)'
    },
    {
      link: 'https://www.linkedin.com',
      title: 'LinkedIn',
      description: 'Social network',
      tags: ['social', 'network'],
      thumbnail: 'https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97',
      color:'rgba(132, 0, 255, 0.356)'
    },
    {
      link: 'https://www.reddit.com',
      title: 'Reddit',
      description: 'Social network',
      tags: ['social', 'network'],
      thumbnail: 'https://www.redditstatic.com/desktop2x/img/favicon/favicon-32x32.png',
      color:'rgba(132, 0, 255, 0.356)'
    },
    {
      link: 'https://www.netflix.com',
      title: 'Netflix',
      description: 'Video streaming',
      tags: ['video', 'streaming'],
      thumbnail: 'https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.ico',
      color:'rgba(132, 0, 255, 0.356)'
    },
    {
      link: 'https://www.amazon.com',
      title: 'Amazon',
      description: 'Online shopping',
      tags: ['online', 'shopping'],
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/G/01/AUIClients/AmazonUIIcon-sprite_1x-3a9b1a9c0f3a1d1b3a9b1a9c0f3a1d1b._V2_.png',
      color:'rgba(132, 0, 255, 0.356)'
    },
    {
      link: 'https://www.ebay.com',
      title: 'eBay',
      description: 'Online shopping',
      tags: ['online', 'shopping'],
      thumbnail: 'https://ir.ebaystatic.com/rs/v/fxxj3ttftm5ltcqntcqf.ico',
      color:'rgba(132, 0, 255, 0.356)'
    },
    {
      link: 'https://www.wikipedia.org',
      title: 'Wikipedia',
      description: 'Online encyclopedia',
      tags: ['online', 'encyclopedia'],
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/1200px-Wikipedia-logo-v2.svg.png',
      color:'rgba(132, 0, 255, 0.356)'
    },
    {
      link: 'https://www.github.com',
      title: 'GitHub',
      description: 'Code hosting',
      tags: ['code', 'hosting'],
      thumbnail: 'https://github.githubassets.com/favicons/favicon.png',
      color:'rgba(132, 0, 255, 0.356)'
    },
    {
      link: 'https://www.stackoverflow.com',
      title: 'Stack Overflow',
      description: 'Q&A',
      tags: ['q&a'],
      thumbnail: 'https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d',
      color:'rgba(132, 0, 255, 0.356)'
    },
    {
      link: 'https://www.bing.com',
      title: 'Bing',
      description: 'Search engine',
      tags: ['search', 'engine'],
      thumbnail: 'https://www.bing.com/sa/simg/favicon-32x32.png',
      color:'rgba(132, 0, 255, 0.356)'
    },
    {
      link: 'https://www.yahoo.com',
      title: 'Yahoo',
      description: 'Search engine',
      tags: ['search', 'engine'],
      thumbnail: 'https://s.yimg.com/rz/d/yahoo_frontpage_en-US_s_f_p_bestfit_frontpage_2x.png',
      color:'rgba(132, 0, 255, 0.356)'
    },
    {
      link: 'https://www.bbc.com',
      title: 'BBC',
      description: 'News',
      tags: ['news'],
      thumbnail: 'https://www.bbc.com/favicon.ico',
      color:'rgba(132, 0, 255, 0.356)'
    },
    {
      link: 'https://www.cnn.com',
      title: 'CNN',
      description: 'News',
      tags: ['news'],
      thumbnail: 'https://cdn.cnn.com/cnn/.e/img/3.0/global/misc/apple-touch-icon.png',
      color:'rgba(132, 0, 255, 0.356)'
    },
    {
      link: 'https://www.nytimes.com',
      title: 'New York Times',
      description: 'News',
      tags: ['news'],
      thumbnail: 'https://static01.nyt.com/images/icons/apple-touch-icon-60x60.png',
      color:'rgba(132, 0, 255, 0.356)'
    },
    {
      link: 'https://www.npr.org',
      title: 'NPR',
      description: 'News',
      tags: ['news'],
      thumbnail: 'https://media.npr.org/chrome-touch-icon-192x192.png',
      color:'rgba(132, 0, 255, 0.356)'
    },
    {
      link: 'https://www.theguardian.com',
      title: 'The Guardian',
      description: 'News',
      tags: ['news'],
      thumbnail: 'https://assets.guim.co.uk/images/favicons/1f6c9b4c6c8c4a7c8c4a7c8c4a7c8c4a/android-icon-192x192.png',
      color:'rgba(132, 0, 255, 0.356)'
    }
      
  ]
  

}
