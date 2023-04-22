import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

const ltConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    themeConfig: {
        logo: '/img/logos/vusa.lin.hor.svg',
        nav: [
            { text: 'Sveikinimai', link: '/sveikinimai' },
            { text: 'VU SA', link: '/vu-sa/vu-sa' },
            { text: 'Metų veiklos planas', link: '/mvp/mvp' },
            { text: 'Strateginės kryptys', items: [
                { text: 'Kokybiškos studijos ir joms pritaikyta aplinka', link: '/kokybiskos-studijos/nacionalinis' },
                { text: 'Stipri organizacija', link: '/stipri-organizacija/vu-sa-projektai' },
                { text: 'Darni universitetinė bendruomenė', link: '/darni-universitetine-bendruomene' },
            ] },
            { text: 'Bendruomenė', link: '/bendruomene' },
            { text: 'Padėka', link: '/padeka' },

        ],

        sidebar: [
            {
                text: 'VU SA ⭐️',
                items: [
                    { text: 'Apie VU SA', link: '/vu-sa/vu-sa' },
                    { text: 'Parlamentas', link: '/vu-sa/parlamentas' },
                    { text: 'Taryba', link: '/vu-sa/taryba' },
                    { text: 'Revizijos komisija', link: '/vu-sa/revizijos-komisija' },
                ]
            },
            {
                text: 'Metų veiklos planas 📝',
                items: [
                    { text: 'VU SA tikslai', link: '/mvp/mvp' },
                    { text: 'Tikslai padaliniuose', link: '/mvp/tikslai-padaliniuose' },
                ]
            },
            {
                text: 'Strateginių krypčių įgyvendinimas 🎯',
                items: [
                    {
                        text: 'Kokybiškos studijos ir joms pritaikyta aplinka',
                        collapsed: true,
                        items: [
                            { text: 'Atstovavimas nacionaliniu lygmeniu ir miesto savivaldoje', link: '/kokybiskos-studijos/nacionalinis' },
                            { text: 'Atstovavimas VU', link: '/kokybiskos-studijos/vu' },
                            { text: 'Bendradarbiavimas', link: '/kokybiskos-studijos/bendradarbiavimas' },
                            { text: 'Raštai', link: '/kokybiskos-studijos/rastai' },
                            { text: 'Tyrimai', link: '/kokybiskos-studijos/tyrimai' },
                        ]
                    },
                    {
                        text: 'Stipri organizacija',
                        collapsed: true,
                        items: [
                            { text: 'VU SA projektai', link: '/stipri-organizacija/vu-sa-projektai' },
                            { text: 'Atstovavimas VU', link: '/stipri-organizacija/projektu-atnaujinimas' },
                            { text: 'Institucinio stiprinimo fondas', link: '/stipri-organizacija/isf' },
                            { text: 'Mokymų lentelė', link: '/stipri-organizacija/mokymu-lentele' }
                        ]
                    },
                ]
            }
        ],
        darkModeSwitchLabel: 'Tamsus režimas',
        langMenuLabel: 'Kalba',
        docFooter: {
            prev: 'Ankstesnis',
            next: 'Kitas',
        },
        returnToTopLabel: 'Grįžti į viršų',
        sidebarMenuLabel: 'Turinys',
        outline: {
            label: 'Šiame puslapyje...',
        }
    }
}

export default ltConfig
