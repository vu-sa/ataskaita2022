import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

const ltConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    themeConfig: {
        logo: '/img/logos/vusa.lin.hor.svg',
        nav: [
            { text: 'Sveikinimai', link: '/sveikinimai' },
            { text: 'VU SA', link: '/vu-sa/vu-sa' },
            { text: 'Metų veiklos planas', link: '/mvp/mvp' },
            { text: 'Strateginės kryptys', items: [
                { text: 'Kokybiškos studijos ir joms pritaikyta aplinka', link: '/kokybiskos-studijos' },
                { text: 'Stipri organizacija', link: '/stipri-organizacija' },
                { text: 'Darni universitetinė bendruomenė', link: '/darni-universitetine-bendruomene' },
            ] },
            { text: 'Bendruomenė', link: '/bendruomene' },
            { text: 'Padėka', link: '/padeka' },

        ],

        sidebar: [
            {
                text: 'VU SA',
                items: [
                    { text: 'Apie VU SA', link: '/vu-sa/vu-sa' },
                    { text: 'Parlamentas', link: '/vu-sa/parlamentas' },
                    { text: 'Taryba', link: '/vu-sa/taryba' },
                    { text: 'Revizijos komisija', link: '/vu-sa/revizijos-komisija' },
                ]
            },
            {
                text: 'Metų veiklos planas',
                items: [
                    { text: 'VU SA tikslai', link: '/mvp/mvp' },
                    { text: 'Tikslai padaliniuose', link: '/mvp/tikslai-padaliniuose' },
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
