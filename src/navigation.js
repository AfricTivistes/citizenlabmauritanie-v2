import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'CitizenLab',
      links: [
        {
          text: 'A Propos',
          href: getPermalink('/a-propos'),
        },
        {
          text: 'Equipe',
          href: getPermalink('/equipe'),
        },
      ],
    },
    {
      text: 'Actualités',
      href: getBlogPermalink(),
      links: [

        {
          text: 'Campagnes',
          href: getPermalink('campagnes', 'category'),
        },
        {
          text: 'Podcasts',
          href: getPermalink('podcast', 'category'),
        },
        {
          text: 'Vidéos',
          href: getPermalink('videos', 'category'),
        },

      ],
    },
    {
      text: 'Blog',
      href: getPermalink('blog', 'category')
    },
    {
      text: 'Formations',
      href: getPermalink('formation', 'category')
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
    
  ],
};

export const footerData = {
  links: [
    {
      title: 'CitizenLab',
      links: [
        {
          text: 'A Propos', href: getPermalink('/a-propos') },
        { text: 'Equipe', href: '#' },
      ],
    },
    {
      title: 'Actualités',
      links: [
        { text: "Actualités", href: getBlogPermalink() },
        { text: "Blog", href: getPermalink('blog', 'category') },
        { text: 'Campagnes', href: getPermalink('campagnes', 'category') },
        { text: 'Podcasts', href: getPermalink('podcast', 'category') },
        { text: 'Vidéos', href: getPermalink('videos', 'category') },
        { test: 'Formations', href: getPermalink('formation', 'category')},
      ],
    },

    {
      title: "Nous Contacter",
      links:[
        { text: "info@africtivistes.org", href:'mailto:info@africtivistes.org ' },
        { text: "Nouakchott, Mauritanie", href: '#'}
      ]
    }
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { icon: 'tabler:brand-x', href: 'https://x.com/CitizenLab_RIM' },
    { icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/citizenlabrim/' },
    { icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/AfriCitizenLabRIM/' },
    { icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/citizenlabrim/' },
    { icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/channel/UCpkvxKTj6pntvogDzqFlfRg' },
    { icon: 'tabler:brand-github', href: 'https://github.com/AfricTivistes/citizenlabmauritanie' },
  ],
  footNote: `
  <a href="https://www.africtivistes.com" target= '_blank'>
  <img src="https://update.africtivistes.org/wp-content/uploads/2023/10/Logo-Africtivistes.png" alt="AfricTivistes" class="h-8" />
  </a>
    <a target= '_blank' class="text-green-600 hover:underline dark:text-gray-200" href="https://www.africtivistes.com"> AfricTivistes</a> · All rights reserved.
  `,
};
