export default {
    themeConfig: {
        nav: [
            { text: 'Congratulations', link: '/en/sveikinimai' },
            { text: 'VU SR', link: '/en/vu-sa/vu-sa' },
            { text: 'Year plan', link: '/en/mvp/mvp' },
            { text: 'Strategic directions', items: [
                { text: 'High quality studies and its environment', link: '/en/kokybiskos-studijos' },
                { text: 'Strong organization', link: '/en/stipri-organizacija' },
                { text: 'Sustainable University community', link: '/en/darni-universitetine-bendruomene' },
            ] },
            { text: 'Community', link: '/en/bendruomene' },
            { text: 'Acknowledgments', link: '/en/padeka' },

        ],

        sidebar: [
            {
                text: 'VU SR',
                items: [
                    { text: 'About VU SR', link: '/en/vu-sa/vu-sa' },
                    { text: 'Parliament', link: '/en/vu-sa/parlamentas' },
                    { text: 'Board', link: '/en/vu-sa/taryba' },
                    { text: 'Revision commision', link: '/en/vu-sa/revizijos-komisija' },
                ]
            },
            {
                text: 'Year plan',
                items: [
                    { text: 'VU SR goals', link: '/en/mvp/mvp' },
                    { text: 'Goals in VU SR units', link: '/en/mvp/tikslai-padaliniuose' },
                ]
            }
        ],
}
}
